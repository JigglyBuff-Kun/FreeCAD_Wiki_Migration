---
title: Część Kształt topologiczny
---
## Wprowadzenie

Część: Kształt topologiczny, lub formalnie `Part::TopoShape`, jest klasą, która definiuje parametryczny **kształt topologiczny** w oprogramowaniu. Obiekty w dokumencie, które pokazują coś w oknie [widoku 3D](/3D_view/pl "3D view/pl") zazwyczaj mają Kształt topologiczny.

Kształty topologiczne, jak również ich metody, i są ostatecznie definiowane przez kernel *(OCCT)* w technologii [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl"). FreeCAD używa tych kształtów i buduje wokół nich [App: Obiekt dokumentu](/App_DocumentObject/pl "App DocumentObject/pl").

Innym typem klasy jest [siatka](/Mesh/pl "Mesh/pl"). Klasa ta nie jest zbyt parametryczna, ponieważ nie można jej łatwo przedefiniować, chyba że poprzez określenie poszczególnych wierzchołków i trójkątnych powierzchni.

![](/images/Shape_and_mesh.svg)

Po lewej: Kształt topologiczny zdefiniowany przez właściwości.   
Po prawej: [Siatka](/Mesh/pl "Mesh/pl"), zdefiniowana przez wierzchołki i powierzchnie trójkątne.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami programu. Klasa `Part::TopoShape` jest osadzona w obiekcie `Part::Feature` i stamtąd jest propagowana do wszystkich obiektów, które są od niej pochodne.

## Użycie

Część: Kształt topologiczny jest obiektem, który jest przypisany do niektórych [App: Obiektów dokumentu](/App_DocumentObject/pl "App DocumentObject/pl").

W szczególności podstawowym obiektem, który obsługuje tego typu atrybuty jest [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(klasa `Part::Feature`)*. Wszystkie obiekty wywodzące się z tej klasy będą miały dostęp do Kształtu topologicznego.

Niektóre z najważniejszych obiektów Kształtu topologicznego środowiska Część są następujące:

* Dowolna bryła pierwotna utworzona za pomocą środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl").
* Każda [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") i [Cecha środowiska Projekt Części](/PartDesign_Feature/pl "PartDesign Feature/pl") utworzona za pomocą środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
* Każdy obiekt wywodzący się z [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl"), jak większość obiektów utworzonych za pomocą środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").
* Każdy [szkic](/Sketch/pl "Sketch/pl"), czyli obiekt środowiska Szkicownik [SketchObject](/Sketcher_SketchObject/pl "Sketcher SketchObject/pl"), utworzony za pomocą środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
* Dowolny obiekt utworzony przez import plików w formacie STEP, BREP i podobnych formatach bryłowych.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Wszystkie obiekty pochodzące z `Part::Feature` będą miały [Kształt topologiczny środowiska Część](/Part_TopoShape "Part TopoShape"), który jest normalnie dostępny z atrybutu `Kształt`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Box", "Box")
print(obj.Shape)

```

Kształt topologiczny posiada wiele atrybutów *(zmiennych)* i metod, które zawierają informacje o nim i które pozwalają na wykonywanie na nim operacji. Te zmienne i metody mogą być testowane w [konsoli Python](/Python_console/pl "Python console/pl").

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

Pełna lista atrybutów i metod znajduje się w [dokumentacji źródłowej](/Source_documentation/pl "Source documentation/pl") oraz w dokumentacji ![](/images/Std_PythonHelp.svg) [Std: Pomoc do środowiska Python](/Std_PythonHelp/pl "Std PythonHelp/pl").

Możesz uzyskać szybkie podsumowanie wszystkich metod, używając wbudowanej w środowisko Python funkcji `help()`.

```
help(obj.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_TopoShape/pl&oldid=1072719>"