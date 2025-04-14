---
title: Part Rohr
---

|                                                                |
| -------------------------------------------------------------- |
| Part Rohr                                                      |
| Menüeintrag                                                    |
| Part → Grundkörper → Rohr erstellen...                         |
| Arbeitsbereich                                                 |
| [Part](/Part_Workbench/de "Part Workbench/de")                 |
| Standardtastenkürzel                                           |
| _Keiner_                                                       |
| Eingeführt in Version                                          |
| 0.19                                                           |
| Siehe auch                                                     |
| [Part Grundelemente](/Part_Primitives/de "Part Primitives/de") |
|                                                                |

## Beschreibung

Der Befehl ![](/images/Part_Tube.svg) **Part Rohr** erstellt einen parametrischen Volumenkörper, ein Rohr (Hohlzylinder). Im Koordinatensystem durch seine Daten-Eigenschaft**Placement** festgelegt, liegt die Unterseite des Rohrs auf der XY-Ebene mit ihrem Mittelpunkt im Ursprung.

![](/images/Part_Tube_Example.png)

## Anwendung

### Erstellung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Tube.svg) Hohlzylinder erstellen drücken.
   - Den Menüeintrag **Part → Grundkörper → ![](/images/Part_Tube.svg) Hohlzylinder erstellen** auswählen.
2. Das Aufgaben-Fenster **Rohr** wird geöffnet und eine Vorschau auf das Rohr in der [3D-Ansicht](/3D_view/de "3D view/de") dargestellt.
3. Die Maße festlegen.
4. Die Vorschau wird dynamisch aktualisiert.
5. Die Schaltfläche OK drücken.
6. Das Rohr wird erstellt.
7. Wahlweise wird die Daten-Eigenschaft**Placement** des Rohrs im [Eigenschafteneditor](/Property_editor/de "Property editor/de") geändert, oder mit dem Befehl ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de").

### Bearbeiten

1. Double-click the tube in the [Tree view](/Tree_view "Tree view")
2. The **Tube** task panel opens.
3. Change one or more dimensions.
4. The tube is dynamically updated in the [3D view](/3D_view "3D view").
5. Press the OK button.

## Beispiel

![](/images/Part_Tube_Scripting_Example.png)

Part-Tube aus dem Skriptbeispiel

Ein Part-Tube-Objekt, das mit dem [Skriptbeispiel](#Skripten) weiter unten erzeugt wurde, wird hier dargestellt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Tube-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Attachment

The object has the same attachment properties as a [Part Part2DObject](/Part_Part2DObject#Data "Part Part2DObject").

Tube

- Daten-Eigenschaft**Height** (`Length`): Die Höhe des Rohrs. Der Standardwert ist `10mm`.
- Daten-Eigenschaft**Inner Radius** (`Length`): Der Innenradius des Rohrs. Er muss kleiner sein als die Daten-Eigenschaft**Outer Radius** und darf `0` sein. Der Standardwert ist `2mm`.
- Daten-Eigenschaft**Outer Radius** (`Length`): Der Außenradius des Rohrs. Er muss größer sein als die Daten-Eigenschaft**Inner Radius**. Der Standardwert ist `5mm`.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

A Part Tube can be created with the `addTube()` method ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")) of the Shapes module:

```
tube = Shapes.addTube(FreeCAD.ActiveDocument, "myTube")

```

- Where `"myTube"` is the name for the object.
- The function returns the newly created object.

Beispiel:

```
import FreeCAD as App
from BasicShapes import Shapes

doc = App.activeDocument()

tube = Shapes.addTube(FreeCAD.ActiveDocument, "myTube")
tube.Height = 20
tube.InnerRadius = 2
tube.OuterRadius = 3
tube.Placement = App.Placement(App.Vector(2, 4, 5), App.Rotation(60, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Tube/de&oldid=1500185>"
