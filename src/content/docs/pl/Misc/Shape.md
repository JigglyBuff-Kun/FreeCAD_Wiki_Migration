---
title: Kształt
---
## Wprowadzenie

W programie FreeCAD słowo **kształt** jest zwykle używane w odniesieniu do [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl") *(klasa `Part::TopoShape`)*, typu obiektu, który nadaje elementowi jego trójwymiarową reprezentację geometryczną i parametryczną *(sześcian, ostrosłup, sfera, walec, zespolenie itd.)*.

Zasadniczo wszystkie obiekty, które są wyświetlane w oknie [widoku 3D](/3D_view/pl "3D view/pl") posiadają [Kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl"), z wyjątkiem **[Siatek](/Mesh/pl "Mesh/pl")**, które posiadają [Obiekt siatkowy](/Mesh_MeshObject/pl "Mesh MeshObject/pl") *(klasa `Mesh::MeshObject`)*.

Zobacz stronę [Część: Kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl") aby uzyskać więcej informacji na temat tego typu obiektu.

![](/images/Shape_and_mesh.svg)

Po lewej: Kształt parametryczny zdefiniowany przez właściwości.   
Po prawej: [Siatka](/Mesh/pl "Mesh/pl"), zdefiniowana przez wierzchołki i powierzchnie trójkątne.

## Użycie

Kształty są zwykle tworzone przez wewnętrzne funkcje środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), i są ostatecznie definiowane przez kernel *(OCCT)* w technologii [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl").

Raz utworzony Kształt może być używany i modyfikowany przez wszystkie [środowiska pracy](/Workbenches/pl "Workbenches/pl") poprzez [obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl") wokół tego Kształtu.

Zasadniczo, każdy obiekt wywodzący się z [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(klasa `Part::Feature`)* ma za zadanie trzymać i manipulować Kształtem.

Każdy Kształt OpenCascade posiada możliwość teselacji głównie po to, by zobaczyć Kształt na ekranie. Więcej informacji na ten temat można znaleźć w tym niemieckim [temacie na forum](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) oraz w [dokumentacji OpenCascad Mesh](https://dev.opencascade.org/doc/overview/html/occt_user_guides__mesh.html).

## Uwagi

W nieformalnym użyciu, "Kształt" może być dowolną figurą geometryczną, która jest widoczna w oknie [widoku 3D](/3D_view/pl "3D view/pl"), a zatem jego pojęcie może być mylone z pojęciem "[Zawartości](/Body/pl "Body/pl")" lub "[Części](/Part/pl "Part/pl")".

Jednakże, gdy wymagana jest większa precyzja, należy dokonać rozróżnienia.

* "[Zawartość](/Body/pl "Body/pl")" to obiekt wywodzący się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(klasy `Part::Feature`)*, utworzony za pomocą środowiska pracy [Projekt Części](/PartDesign_Workbench "PartDesign Workbench").
* "Kształt" jest obiektem wewnętrznym, osadzonym w "[Zawartości](/Body/pl "Body/pl")".
* [Część](/Part/pl "Part/pl")" jest używana do grupowania kilku "[zawartości](/Body/pl "Body/pl")" w celu utworzenia [złożenia](/Assembly/pl "Assembly/pl"). "Część" posiada kolekcję "Kształtów", ale nie posiada własnego "Kształtu".

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/pl&oldid=1255131>"