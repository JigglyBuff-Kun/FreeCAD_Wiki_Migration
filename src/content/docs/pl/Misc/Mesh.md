---
title: Siatka
---
## Wprowadzenie

W FreeCAD słowo "Siatka" jest zwykle używane w odniesieniu do [obiektu siatki](/Mesh_MeshObject/pl "Mesh MeshObject/pl") *(klasa `Mesh::MeshObject`)*, typu obiektu, który definiuje dane 3D, ale nie jest "[kształtem](/Shape/pl "Shape/pl")" bryły.

Siatki to bardzo proste obiekty, zawierające jedynie wierzchołki *(punkty)*, krawędzie i trójkątne ściany. Ogólnie rzecz biorąc, są one łatwe do tworzenia, modyfikowania, dzielenia i rozciągania, i mogą być przekazywane z jednej aplikacji do drugiej bez utraty szczegółów. Ponadto, ponieważ siatki zawierają bardzo proste dane, aplikacje 3D, takie jak oprogramowanie do animacji i gry wideo, mogą zarządzać bardzo dużymi ich ilościami *(milionami trójkątów)* bez zużywania dużych zasobów obliczeniowych.

Jednak w dziedzinie inżynierii siatki mają jedno duże ograniczenie: są zbudowane tylko z powierzchni i nie mają informacji o "masie", więc nie zachowują się jak "bryły". Oznacza to, że operacje oparte na bryłach, takie jak [Operacje logiczne na bryłach](/Part_Boolean/pl "Part Boolean/pl"), są trudne do wykonania na siatkach. Ponadto, ponieważ są one zdefiniowane przez pojedyncze punkty, trudno je opisać w sposób parametryczny.

Zobacz stronę [Siatka: Obiekt siatki](/Mesh_MeshObject/pl "Mesh MeshObject/pl"), aby uzyskać więcej informacji o tym typie obiektu, oraz [Siatka wielokąta](https://en.wikipedia.org/wiki/Polygon_mesh) dla ogólnych informacji w systemach komputerowych.

![](/images/Shape_and_mesh.svg)

Po lewej: [Kształt](/Shape/pl "Shape/pl") parametryczny zdefiniowany przez właściwości.   
Po prawej: Siatka, zdefiniowana przez wierzchołki i powierzchnie trójkątne.

## Użycie

Siatki są zwykle tworzone przez wewnętrzne funkcje środowiska pracy [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl"), lub przez import plików w formacie siatki, jak np STL i OBJ.

Zasadniczo, każdy obiekt wywodzący się z [Siatka: Cecha](/Mesh_Feature/pl "Mesh Feature/pl") *(klasa `Mesh::Feature`)* ma za zadanie trzymać i manipulować Siatką.

Ponieważ FreeCAD jest przede wszystkim zaprojektowany jako modeler bryłowy, jest lepiej przystosowany do radzenia sobie z [kształtami](/Shape/pl "Shape/pl") brył. Może importować i wyświetlać siatki w oknie [widoku 3D](/3D_view/pl "3D view/pl"), a środowisko pracy [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") oferuje kilka poleceń do bezpośredniego manipulowania nimi. Jednak w wielu przypadkach siatka musi być najpierw przekonwertowana na [Kształt](/Shape/pl "Shape/pl") *(zobacz stronę [Część: Kształt z siatki](/Part_ShapeFromMesh/pl "Part ShapeFromMesh/pl"))*, lub geometria musi być odtworzona przy użyciu technik modelowania bryłowego w środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl") lub [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

## Siatki elementu skończonego

W FreeCAD słowo "siatka" może również odnosić się do konkretnego obiektu, który będzie wykorzystywany w analizie metodą elementów skończonych *(MES)*.

Gdy obiekt z bryłą [Kształt](/Shape/pl "Shape/pl") jest używany w środowisku pracy [FEM Workbench](/FEM_Workbench/pl "FEM Workbench/pl"), zostanie on rozłożony do siatki trójkątów. W tym przypadku obiekt wynikowy jest obiektem [MES: Siatka](/FEM_Mesh/pl "FEM Mesh/pl") *(klasa `Fem::FemMeshObject`)* i nie jest pochodną [Siatka: Cecha](/Mesh_Feature/pl "Mesh Feature/pl") *(klasa `Mesh::Feature`)*.

Więcej informacji można znaleźć na stronach [środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl") i [siatka MES](/FEM_Mesh/pl "FEM Mesh/pl").

## Informacje dodatkowe

* [Geometria poligonalna *(siatkowa)*](https://forum.freecadweb.org/viewtopic.php?f=8&t=47493)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh/pl&oldid=1214092>"