---
title: Draft Flächenbinder
---
|  |
| --- |
| Draft Flächenbinder |
| Menüeintrag |
| Zeichnen → Flächenverbinder 3D/BIM → Generische 3D-Werkzeuge → Flächenverbinder |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| Draft: F F |
| Eingeführt in Version |
| 0.14 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Facebinder.svg) **Draft Flächenbinder** erstellt ein Oberflächenobjekt aus ausgewählten Flächen. Ein Draft-Flächenbinder ist parametrisch, er wird aktualisiert, wenn seine Quellobjekte geändert werden.

Er kann verwendet werden, um eine Extrusion aus einer Sammlung von Flächen aus anderen Objekten zu erstellen. Diese Extrusion kann zum Beispiel einen Wandabschluss in der architektonischen Gestaltung
verkörpern.

![](/images/Draft_facebinder_example.jpg)

Flächenbinder erstellt aus den Wandflächen

## Anwendung

1. Eine oder mehrere Flächen auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Facebinder.svg) Flächenverbinder drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Facebinder.svg) Flächenverbinder** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **3D/BIM → Generische 3D-Werkzeuge → ![](/images/Draft_Facebinder.svg) Flächenverbinder** auswählen.
   * Draft: Das Tastaturkürzel F dann F.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

![](/images/Draft_Facebinder_Corners.png)

Links ein extrudierter Flächenbinder mit geschlossener Ecke (rosa),  
rechts ein extrudierter Flächenbinder mit offener Ecke (orange).  
Geschlossener Ecken sind eine Funktion in der Version 1.1

Ein Draft-Flächenbinder (Facebinder-Objekt) wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat er die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Area** (`Area`): (schreibgeschützt) Gibt den gesamten Flächeninhalt der verknüpften Flächen des Flächenbinders an.
* Daten-Eigenschaft**Extrusion** (`Distance`): Gibt die Extrusionsdicke des Flächenbinders an. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"): Hat der Flächenbinder verbundene Flächen und die Daten-Eigenschaft**Sew** ist auf `true` gesett, wird versucht die Eckkanten der Extrusion zu schließen. Ist dies nicht möglich, werden die Flächen einzeln extrudiert.
* Daten-Eigenschaft**Faces** (`LinkSubList`): Gibt die verknüpften Flächen des Flächenbinders an.
* Daten-Eigenschaft**Offset** (`Distance`): Gibt einen Abstand an, der vor der Extrusion zwischen den ursprünglichen Flächen und dem Flächenbinder bestehen soll.
* Daten-Eigenschaft**Remove Splitter** (`Bool`): Gibt an, ob Trennlinien ("splitter lines" ?) entfernt werden sollen, die auf gleicher Ebene liegende Flächen vom Flächenbinder trennen oder nicht.
* Daten-Eigenschaft**Sew** (`Bool`): Gibt an, ob ein topologischer Nähvorgang am Flächenbinder durchgeführt werden soll oder nicht.

### Ansicht

Draft

* Ansicht-Eigenschaft**Muster**: legt das [Draft-Muster](/Draft_Pattern/de "Draft Pattern/de") fest, mit dem die Flächen des Formbinders ausgefüllt werden sollen. Diese Eigenschaft funktioniert nur, wenn die Ansicht-Eigenschaft**Display Mode** auf "Flat Lines" gesetzt ist.
* Ansicht-Eigenschaft**Muster Grösse**: legt die Größe des [Draft-Musters](/Draft_Pattern/de "Draft Pattern/de") fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um einen Draft-Flächenbinder zu erstellen, wird die Methode `make_facebinder` ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")) des Draft-Moduls verwendet. Diese Methode ersetzt die veraltete Methode `makeFacebinder`.

```
facebinder = make_facebinder(selectionset)

```

* Erstellt ein `facebinder`-Objekt aus dem angegebenen `selectionset`, das eine Liste von `SelectionObject`s ist, wie sie von `FreeCADGui.Selection.getSelectionEx()` zurückgegeben wird. Es werden nur ausgewählte Flächen berücksichtigt.
  + `selectionset` kann auch ein `PropertyLinkSubList` sein.

Eine `PropertyLinkSubList` ist eine Liste von Tupeln; jedes Tupel enthält als erstes Element ein `object`, und als zweites Element eine Liste (oder Tupel) von Zeichenketten; diese Zeichenketten zeigen die Namen der Unterelemente (Flächen) dieses Objekts an.

```
PropertyLinkSubList = [tuple1, tuple2, tuple3, ...]
PropertyLinkSubList = [(object1, list1), (object2, list2), (object3, list3), ...]
PropertyLinkSubList = [(object1, ['Face1', 'Face4', 'Face6']), ...]
PropertyLinkSubList = [(object1, ('Face1', 'Face4', 'Face6')), ...]

```

Die Dicke des Flächenbinders kann durch Überschreiben des Attributs `Extrusion` hinzugefügt werden; der Wert wird in Millimetern eingegeben.

Die Positionierung des Flächenverbinders kann durch Überschreiben des Attributs `Placement` oder durch individuelles Überschreiben der Attribute `Placement.Base` und `Placement.Rotation` geändert werden.

Beispiel:

```
import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

# Insert a solid box
box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

# selection = Gui.Selection.getSelectionEx()
selection = [(box, ("Face1", "Face6"))]
facebinder = Draft.make_facebinder(selection)
facebinder.Extrusion = 50

doc.recompute()

facebinder.Placement.Base = App.Vector(1000, -1000, 100)
facebinder.ViewObject.ShapeColor = (0.99, 0.99, 0.4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Facebinder/de&oldid=1551767>"