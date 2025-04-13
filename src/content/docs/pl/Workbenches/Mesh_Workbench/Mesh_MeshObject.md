---
title: Siatka Obiekt siatki
---
## Opis

**Siatka: Obiekt siatki**, lub formalnie `Mesh::MeshObject`, jest klasą, która definiuje strukturę danych siatki w oprogramowaniu. Jest to podobne do obiektu [Część: Kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl"), ale dla [siatek](/Mesh/pl "Mesh/pl").

Siatki są zwykle tworzone za pomocą środowiska pracy [Projekt Siatki](/Mesh_Workbench/pl "Mesh Workbench/pl") lub importowane z plików STL, OBJ i podobnych formatów siatek.

Proszę zauważyć, że środowisko pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") również wykorzystuje siatki, ale w tym przypadku używa innej struktury danych, zwanej [MES: Siatka](/FEM_Mesh/pl "FEM Mesh/pl") *(klasa `Fem::FemMesh`)*. Ta informacja nie dotyczy siatek MES.

![](/images/FreeCAD_core_objects.svg)

Uproszczony schemat zależności pomiędzy podstawowymi obiektami programu. Klasa `Mesh::MeshObject` jest osadzona w obiekcie `Mesh::Feature` i stamtąd jest propagowana do wszystkich obiektów, które są od niej pochodne.

## Użycie

Siatka: MeshObject jest obiektem, który jest przypisany do niektórych [App: Obiektów dokumentu](/App_DocumentObject/pl "App DocumentObject/pl").

W szczególności podstawowym obiektem obsługującym tego typu atrybuty jest [cecha siatki](/Mesh_Feature/pl "Mesh Feature/pl") *(klasa `Mesh::Feature`)*. Wszystkie obiekty wywodzące się z tej klasy będą miały dostęp do obiektu typu Siatka: MeshObject.

Najbardziej godne uwagi obiekty, które będą posiadały MeshObject to:

* Każda siatka elementu pierwotnego utworzona za pomocą środowiska pracy [Projekt Siatki](/Mesh_Workbench/pl "Mesh Workbench/pl")
* Każdy obiekt utworzony przez import plików w formacie STL, OBJ i podobnych siatek.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl"). Pełną listę atrybutów i metod można znaleźć w [dokumentacji źródeł](/Source_documentation/pl "Source documentation/pl") oraz w opisie narzędzia [Pomoc dla środowiska Python](/Std_PythonHelp/pl "Std PythonHelp/pl").

Wszystkie obiekty pochodzące z `Mesh::Feature` będą miały Obiekt siatki środowiska Projekt Siatki, który jest normalnie dostępny z atrybutu `Kształt`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Cube", "Cube")
App.ActiveDocument.recompute()
print(obj.Mesh)

```

MeshObject posiada wiele atrybutów *(zmiennych)* i metod, które zawierają informacje o nim i które pozwalają na wykonywanie na nim operacji. Te zmienne i metody mogą być testowane w [konsoli Python](/Python_console/pl "Python console/pl").

```
print(obj.Mesh.Area)
print(obj.Mesh.BoundBox)
print(obj.Mesh.CountPoints)
print(obj.Mesh.Volume)

obj.Mesh.copy()
obj.Mesh.countComponents()
obj.Mesh.getEigenSystem()
obj.Mesh.write("my_file.stl")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_MeshObject/pl&oldid=1214407>"