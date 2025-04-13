---
title: App Rozszerzenie odniesienia położenia grupy
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

## Wprowadzenie

Obiekt **Rozszerzenie odniesienia położenia grupy** lub formalnie `App::OriginGroupExtension`, to klasa dostarczająca elementy możliwe do zaznaczenia, reprezentujące trzy standardowe osie _(X, Y, Z)_ i trzy standardowe płaszczyzny _(XY, XZ i YZ)_ dla obiektów, które mają na celu rozmieszczanie różnych typów geometrii w przestrzeni.

![](/images/Std_Part.svg) [Std: Część](/Std_Part/pl "Std Part/pl") [(App: Część)](/App_Part/pl "App Part/pl") obiektów i
![](/images/PartDesign_Body.svg) [Projekt Części: Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") są domyślnie tworzone z obiektami Odniesienia położenia. W razie potrzeby obiekty Odniesienia położenia można dodać do ![](/images/Assembly_Assembly_Tree.svg) [Złożenia](/Assembly3_CreateAssembly/pl "Assembly3 CreateAssembly/pl") obiektów w środowisku ![](/images/Assembly3_workbench_icon.svg) [Złożenie 3](/Assembly3_Workbench/pl "Assembly3 Workbench/pl").

![Tree view](/images/App_OriginGroupExtension_example.png) ![3D view](/images/App_OriginGroupExtension-02.png)

Po lewej: [widok drzewa](/Tree_view/pl "Tree view/pl") pokazujący trzy obiekty korzystające z obiektów Odniesienia położenia. Po prawej: Reprezentacja elementów Odniesienia położenia w [widoku 3D](/3D_view/pl "3D view/pl").

Osie i płaszczyzny są obiektami typu `App::Line` i `App::Plane` odpowiednio. Każdy z tych elementów można ukryć i ponownie wyświetlić indywidualnie za pomocą klawisza Spacja. Może to być przydatne przy wyborze właściwej odniesienia do tworzenia innych obiektów, np. [Szkiców](/Sketch/pl "Sketch/pl").

![](/images/FreeCAD_core_objects.svg)

Diagram uproszczonych relacji między głównymi obiektami w programie. Dwa z nich posiadają obiekt Odniesienia położenia _(Origin)_, aby kontrolować położenie obiektów zgrupowanych pod nimi.

Retrieved from "<http://wiki.freecad.org/index.php?title=App_OriginGroupExtension/pl&oldid=1389733>"
