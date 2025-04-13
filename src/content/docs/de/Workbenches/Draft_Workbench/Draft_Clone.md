---
title: Draft Klonen
---
|  |
| --- |
| Draft Klonen |
| Menüeintrag |
| Änderung → Klonen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| C L |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft Skalieren](/Draft_Scale/de "Draft Scale/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Clone.svg) **Draft Klonen** erstellt verknüpfte Kopien, Klone von ausgewählten Objekten. Die Form eines Klons ist parametrisch; er wird aktualisiert, wenn sich sein Quellobjekt ändert. Aber ein Klon hat seine eigene Position, Ausrichtung und Skalierung sowie seine eigenen [Ansicht-Eigenschaften](/Property_editor/de "Property editor/de"). Für [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekte erstellt der Befehl eine besondere Art von Klon: einen Arch-Klon.

Der Befehl kann auf 2D-Objekte angewendet werden, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erzeugt wurden, aber auch auf viele 3D-Objekte, wie solchen, die mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erzeugt wurden. Klone von 2D-Objekten können in [PartDesign-Körpern](/PartDesign_Body/de "PartDesign Body/de") verwendet werden.

![](/images/Draft_Clone_example.jpg)

Draft-Klon neben dem Quellobjekt

## Anwendung

1. Wahlweise ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Clone.svg) Klonen drücken.
   * Den Menüeintrag **Änderung → ![](/images/Draft_Clone.svg) Klonen** auswählen.
   * Das Tastaturkürzel C dann L.
3. Wurde noch kein Objekt ausgewählt: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.

## Notes

* The scaling of a Draft Clone can be changed in the [Property editor](/Property_editor "Property editor") or, [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), by double clicking it in the [Tree view](/Tree_view "Tree view") and entering new values in the task panel that opens. The latter option is more efficient.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein mit dem Befehl Draft Klonen erzeugtes Objekt wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de"), einem [Part-Formelement](/Part_Feature/de "Part Feature/de")-Objekt oder, wenn ein Arch-Klon erstellt wird, vom Objekttyp des Quellobjekts abgeleitet. Er erbt alle Eigenschaften dieses Objekts. Ein Klon, der von einem der ersten beiden Objekte abgeleitet wurde, hat außerdem die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten**Fuse** (`Bool`): gibt an, ob überlappende Formen im Klon vereinigt werden oder nicht.
* Daten**Objects** (`LinkListGlobal`): legt die Objekte fest, die geklont werden.
* Daten**Scale** (`Vector`): Legt die Skalierungsfaktoren für X, Y und Z fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um einen Klon zu erstellen, wird die Methode `make_clone` ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")) des Moduls Draft verwendet. Diese Methode ersetzt die veraltete Methode `clone`.

```
cloned_object = make_clone(obj, delta=None, forcedraft=False)

```

* `obj` enthält die zu klonenden Objekte. Es ist entweder ein einzelnes Objekt oder eine Liste von Objekten.
* `delta` ist der Verschiebungsvektor, der auf den Klon angewendet wird.
* Wenn `forcedraft` `False` ist und `obj` ein einzelnes [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekt enthält, wird ein Arch-Klon erstellt. `forcedraft` auf `True` setzen, um stattdessen einen Draft-Klon zu erstellen.
* `cloned_object` wird mit dem Klon-Objekt zurückgegeben.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(App.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

vector = App.Vector(2600, 500, 0)
cloned_object = Draft.clone([polygon1, polygon2], delta=vector)

cloned_object.Fuse = True

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Clone/de&oldid=1550532>"