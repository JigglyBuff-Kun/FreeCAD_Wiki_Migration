---
title: Środowisko pracy Powierzchnia 3D
---

![](/images/Workbench_Surface.svg)

Ikonka FreeCAD dla środowiska pracy Powierzchnia

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Surface.svg) **Powierzchnia** udostępnia narzędzia do tworzenia i modyfikowania prostych powierzchni [NURBS](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline). Narzędzia te mają podobną funkcjonalność do narzędzia ![](/images/Part_Builder.svg) [Konstruktor kształtu](/Part_Builder/pl "Part Builder/pl"), gdy używana jest opcja **Ściana z krawędzi**. Jednak w przeciwieństwie do tego narzędzia, narzędzia środowiska pracy Powierzchnia są parametryczne i zapewniają dodatkowe opcje. Pod tym względem narzędzia w tym środowisku roboczym są podobne do ![](/images/PartDesign_AdditiveLoft.svg) [Wyciągnięcie przez profile](/PartDesign_AdditiveLoft/pl "PartDesign AdditiveLoft/pl") i ![](/images/PartDesign_AdditivePipe.svg) [Wyciągnięcie po ścieżce](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl").

Niektóre z dostępnych funkcji to:

- Tworzenie powierzchni z krawędzi brzegowych.
- Wyrównywanie krzywizn z sąsiednich powierzchni.
- Ograniczanie powierzchni do dodatkowych krzywych i wierzchołków.
- Rozszerzanie powierzchni.
- Siatka może być użyta jako szablon do utworzenia krzywych złożonych na jej powierzchni.

![](/images/Surface_example.png)

## Użycie

Środowisko pracy Powierzchnia umożliwia tworzenie powierzchni za pomocą kształtów, co nie jest możliwe przy użyciu standardowych narzędzi w innych środowiskach pracy.

![](/images/Toy_Duck.png)

Powierzchnia utworzona na podstawie szkiców umieszczonych w płaszczyznach odniesienia za pomocą narzędzi środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Środowisko pracy Powierzchnia integruje się z innymi środowiskami pracy programu FreeCAD. Powyższy przykład został utworzony ze ![](/images/Sketcher_NewSketch.svg) [Szkicu](/Sketch "Sketch") umieszczonego na ![](/images/PartDesign_Plane.svg) [Płaszczyźnie odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl") w środowisku ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Projekt może być w pełni parametryczny, jeśli wszystkie płaszczyzny odniesienia i szkice są odpowiednio zdefiniowane. W większości przypadków wystarczy narysować zamknięty szkic, aby zdefiniować granicę powierzchni, a następnie użyć różnych opcji do dalszej modyfikacji jej kształtu.

Wygenerowana powierzchnia nie może być umieszczona wewnątrz ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl"). Jednakże, wygenerowana powierzchnia może być zawarta wewnątrz ![](/images/Std_Part.svg) [Części](/Std_Part/pl "Std Part/pl") wraz z powiązaną z nią ![](/images/PartDesign_Body.svg) [Zawartością](/PartDesign_Body/pl "PartDesign Body/pl"), która przechowuje płaszczyzny odniesienia i szkice. Nieparametryczne narzędzie ![](/images/Part_Builder.svg) [Konstruktor kształtu](/Part_Builder/pl "Part Builder/pl") może być następnie użyte w celu utworzenia [powłoki](/Glossary#Shell "Glossary") i wreszcie [bryły](/Glossary#Solid "Glossary").

## Przybory

- [![Wypełnianie](/images/Surface_Filling.svg)](/Surface_Filling/pl "Wypełnianie ") [Wypełnianie](/Surface_Filling/pl "Surface Filling/pl"): wypełnia serię krzywych brzegowych powierzchnią.

- [![Wypełnianie krzywych granicznych](/images/Surface_GeomFillSurface.svg)](/Surface_GeomFillSurface/pl "Wypełnianie krzywych granicznych ") [Wypełnianie krzywych granicznych](/Surface_GeomFillSurface/pl "Surface GeomFillSurface/pl"): tworzy powierzchnię z dwóch, trzech lub czterech krawędzi granicznych.

- [![Przekrój powierzchni](/images/Surface_Sections.svg)](/Surface_Sections/pl "Przekrój powierzchni ") [Przekrój powierzchni](/Surface_Sections/pl "Surface Sections/pl"): tworzy powierzchnię z krawędzi, które reprezentują przekroje poprzeczne powierzchni.

- [![Rozszerz powierzchnię](/images/Surface_ExtendFace.svg)](/Surface_ExtendFace/pl "Rozszerz powierzchnię ") [Rozszerz powierzchnię](/Surface_ExtendFace/pl "Surface ExtendFace/pl"): ekstrapoluje powierzchnię na granicach za pomocą lokalnego parametru **U** i parametru **V**.

- [![Krzywa na siatce](/images/Surface_CurveOnMesh.svg)](/Surface_CurveOnMesh/pl "Krzywa na siatce ") [Krzywa na siatce](/Surface_CurveOnMesh/pl "Surface CurveOnMesh/pl"): tworzy aproksymowane segmenty krzywej złożonej na wybranej [siatce](/Mesh_Workbench/pl "Mesh Workbench/pl").

* ![](/images/Surface_BlendCurve.svg) [Krzywa łączenia](/Surface_BlendCurve/pl "Surface BlendCurve/pl"): tworzy krzywą złożoną między dwiema krawędziami, z zachowaniem pożądanej ciągłości.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/pl&oldid=1406901>"
