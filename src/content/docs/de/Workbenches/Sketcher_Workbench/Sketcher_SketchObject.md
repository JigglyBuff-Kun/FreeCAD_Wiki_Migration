---
title: Sketcher SketchObject
---

## Einleitung

![](/images/Sketcher_Sketch.svg)

Ein Sketcher SketchObject, oder formal ein `Sketcher::SketchObject`, ist das Basiselement für die Erstellung von 2D-Objekten mit der Arbeitsumgebung [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de").

Das `Sketcher::SketchObject` ist vom [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet, d.h. es ist ein [Part Feature](/Part_Feature/de "Part Feature/de")-Objekt spezialisiert auf 2D-Geometrie. Wie das Part2DObject, kann das SketchObject Ebenen und Flächen zugeordnet werden. Zusätzlich kann das SketchObject mit geometrischen Randbedingungen arbeiten.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD

## Anwendung

Siehe [Sketcher NeueSkizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").

## Eigenschaften

Siehe [Eigenschaft](/Property/de "Property/de") für alle Eigenschaftstypen, die geskriptete Objekte haben können.

Das Sketcher Sketch-Objekt (`Sketcher::SketchObject`-Klasse) ist von dem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") (`Part::Part2DObject`-Klasse) abgeleitet und erbt all seine Eigenschaften.

Das Sketcher Sketch-Objekt hat außerdem die folgenden zusätzlichen Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de"). Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Sketch

- Daten-Eigenschaft (versteckt)**Geometry** (`GeometryList`): Eine Liste von Part-Geometrien die in der Skizze enthalten sind.
- Daten-Eigenschaft**Constraints**: Benannte Randbedingungen, wenn welche vorhanden sind, andernfalls eine leere Liste `[]`.
- Daten-Eigenschaft**External Geometry** (`LinkSubList`): Eine Liste von Part-Geometrien außerhalb dieser Skizze, die als Referenz verwendet werden.
- Daten-Eigenschaft (versteckt)**Fully Constrained** (`Bool`): Nicht änderbar (read-only). Wird `true` angezeigt, ist die Skizze vollständig bestimmt.

### Ansicht

Auto Constraints

- Ansicht-Eigenschaft**Autoconstraints** (`Bool`): Wenn `true`, werden Randbedingungen automatisch hinzugefügt, während Geometrien gezeichnet werden.
- Ansicht-Eigenschaft**Avoid Redundant** (`Bool`): Wenn `true`, werden überflüssige automatische Randbedingungen vermieden.

Grid

- Ansicht-Eigenschaft**Grid Auto** (`Bool`): Wenn `true`, wird die Größe eines Rasters auf Basis der Boundingbox der Geometrie einer Skizze angepasst.
- Ansicht-Eigenschaft**Grid Size** (`Length`): Der Wert für den Abstand der lokalen Rasterlinien in der [3D-Ansicht](/3D_view/de "3D view/de"); Standardwert ist `10 mm`.
- Ansicht-Eigenschaft**Show Grid** (`Bool`): Wenn `true`, wird in der [3D-Ansicht](/3D_view/de "3D view/de") örtlich am Objekt ein Raster angezeigt. Dieses Raster ist unabhängig vom [Draft Raster](/Draft_ToggleGrid/de "Draft ToggleGrid/de").

Visibility automation

- Ansicht-Eigenschaft**Editing Workbench** (`String`): Name des Arbeitsbereiches, der aktiviert wird, wenn eine Skizze bearbeitet wird; Standardwert ist `SketcherWorkbench`.
- Ansicht-Eigenschaft**Force Ortho** (`Bool`): Wenn `true`, wird die Kamera in den Modus [Orthoggonale Ansicht](/Std_OrthographicCamera/de "Std OrthographicCamera/de") gezwungen, wenn die Skizze geöffnet wird.
- Ansicht-Eigenschaft**Hide Dependent** (`Bool`): Wenn `true`, werden alle Objekte ausgeblendet, die von dieser Skizze abhängen, wenn die Skizze geöffnet wird.
- Ansicht-Eigenschaft**Restore Camera** (`Bool`): Wenn `true`, wird die Kameraposition gesichert, bevor die Skizze geöffnet wird und wiederhergestellt, nachdem die Skizze geschlossen wurde.
- Ansicht-Eigenschaft**Section View** (`Bool`): Wenn `true`, sind nur (Teile von) Objekte(n) hinter der Skizzenebene sichtbar, während die Skizze bearbeitet wird.
- Ansicht-Eigenschaft**Show Links** (`Bool`): Wenn `true`, werden alle Objekte angezeigt, die zur Verknüpfung mit externer Geometrie verwendet werden, wenn die Skizze geöffnet wird.
- Ansicht-Eigenschaft**Show Support** (`Bool`): Wenn `true`, werden alle Objekte dargestellt, mit denen diese Skizze verknüpft ist, wenn die Skizze geöffnet wird.
- Ansicht-Eigenschaft (versteckt)**Tempo Vis** (`PythonObject`): Eine mit diesem Objekt verbundene angepasste Klasse, die das Ein- und Ausblenden anderer Objekte regelt, während die Skizze geöffnet oder geschlossen wird.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen zum Hinzufügen von Objekten zu einem Dokument.

Ein Sketch-Objekt wird mit der `addObject()` Methode des Dokuments erstellt.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObject", "Sketch")
obj.Label = "Custom label"

```

Für die Instanziierung von Unterklassen mit [Python](/Python/de "Python/de") sollte ein `Sketcher::SketchObjectPython`-Objekt erstellt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObjectPython", "CustomSketch")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SketchObject/de&oldid=1560878>"
