---
title: Part TopoForm
---

## Einführung

Eine Part TopoForm, oder formal eine `Part::TopoShape`, ist eine Klasse, die eine parametrische '_topologische Form_ in der Software definiert. Objekte im Dokument, die etwas in der [3D Ansicht](/3D_view/de "3D view/de") zeigen, haben normalerweise eine TopoForm.

Die topologischen Formen sowie deren Methoden werden durch den [OpenCASCADE Technologie](/OpenCASCADE/de "OpenCASCADE/de") Kernel (OCCT) definiert. FreeCAD verwendet diese Formen und baut [Anwendung DokumentObjekte](/App_DocumentObject/de "App DocumentObject/de") um sie herum.

Eine andere Art von Klasse ist die des [Polygonnetzes](/Mesh/de "Mesh/de"); diese Klasse ist nicht sehr parametrisch, da sie nicht einfach umdefiniert werden kann, außer durch die Angabe einzelner Knoten und dreieckiger Oberflächen.

![](/src/assets/images/Shape_and_mesh.svg)

Links: parametrische Part_TopoForm, definiert durch Eigenschaften. Rechts: nichtparametrisches [Polygonnetz](/Mesh/de "Mesh/de"), definiert durch Knoten und und dreieckigen Oberflächen.

![](/src/assets/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten im Programm. Die Klasse `Part::TopoShape` wird in das `Part::Feature` Objekt eingebettet und von dort auf alle davon abgeleiteten Objekte übertragen.

## Anwendung

Die Part TopoForm ist ein Objekt, das einigen [Anwendung DokumentObjekten](/App_DocumentObject/de "App DocumentObject/de") zugeordnet ist.

Insbesondere das Basisobjekt, das diese Arten von Attributen handhabt, ist die [Part Formelement](/Part_Feature/de "Part Feature/de") (`Part::Feature` Klasse). Alle von dieser Klasse abgeleiteten Objekte haben Zugriff auf eine Part TopoForm.

Einige der wichtigsten Objekte mit Part TopoForm sind die folgenden:

- Jeder primitive Festkörper, der mit der [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") erstellt wurde.
- Jeder beliebige [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") und [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de"), das mit dem [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurde.
- Jedes Objekt, das von [Part Teilzu2DObjekt](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet ist, wie die meisten mit der [Entwurf Arbeitsbereich](/Draft_Workbench/de "Draft Workbench/de") erstellten Objekte.
- Jede [Skizze](/Sketch/de "Sketch/de"), d.h. [Skizzierer SkizzenObjekt](/Sketcher_SketchObject/de "Sketcher SketchObject/de"), das mit dem [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurde.
- Jedes Objekt, das durch den Import von STEP, BREP und ähnlichen Festkörperformatdateien erstellt wurde.

## Skripten

_Siehe auch:_ [FreeCAD Skripten Grundlagen](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de"), und [geskriptete Objekte](/Scripted_objects/de "Scripted objects/de").

Alle Objekte abgeleitet von `Part::Feature` werden eine Part TopoForm haben, die normalerweise über ihr `Shape` Attribut zugänglich ist.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Box", "Box")
print(obj.Shape)

```

Eine TopoForm hat viele Attribute (Variablen) und Methoden, die Informationen über sie enthalten, und die es erlauben, Operationen mit ihr durchzuführen. Diese Variablen und Methoden können in der [Python Konsole](/Python_console/de "Python console/de") getestet werden.

```
print(obj.Shape.Area)
print(obj.Shape.BoundBox)
print(obj.Shape.CenterOfMass)
print(obj.Shape.ShapeType)

obj.Shape.check()
obj.Shape.copy()
obj.Shape.exportStep("my_file.step")
obj.Shape.exportStl("my_file.stl")

```

Eine vollständige Liste der Attribute und Methoden kannst Du in der [Quelldokumentation](/Source_documentation/de "Source documentation/de") und dem ![](/src/assets/images/Std_PythonHelp.svg) [Std PythonHilfe](/Std_PythonHelp/de "Std PythonHelp/de") Werkzeug nachschlagen.

Du kannst eine schnelle Zusammenfassung aller Methoden erhalten ddurch Verwendung der in Python eingebauten `help()` Funktion.

```
help(obj.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_TopoShape/de&oldid=1072721>"
