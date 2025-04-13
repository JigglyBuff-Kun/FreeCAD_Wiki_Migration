---
title: Środowisko pracy Część
---

![](/images/Workbench_Part.svg)

Ikonka FreeCAD dla środowiska pracy Część

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Part.svg) **Część** zapewnia tradycyjne podejście [constructive solid geometry](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") (CSG). W tym podejściu każdy obiekt jest niezależną bryłą. Środowisko pracy Część może tworzyć je z parametrycznie definiowanych [szkiców](/Sketcher_Workbench/pl "Sketcher Workbench/pl") używając narzędzi, takich jak [Wyciągnięcie](/Part_Extrude/pl "Part Extrude/pl"), [Wyciągnięcie przez obrót](/Part_Revolve/pl "Part Revolve/pl"), [Wyciągnięcie przez profile](/Part_Loft/pl "Part Loft/pl") itd. Ponadto, można również tworzyć podstawowe prymitywy bryłowe, takie jak [Sześcian](/Part_Box/pl "Part Box/pl"), [Walec](/Part_Cylinder/pl "Part Cylinder/pl") itp. Te obiekty mogą być łączone poprzez [operacje logiczne](/Part_Boolean/pl "Part Boolean/pl") aby tworzyć bardziej złożone bryły.

Środowisko pracy Część może też tworzyć obiekty, które nie są bryłami, takie jak ściany, powłoki i obiekty składające się tylko z krawędzi lub wierzchołków. Zapewnia również szereg narzędzi ogólnego przeznaczenia do manipulacji geometrią, jej walidacji i tworzenia kopii.

![](/images/Workbench_PartDesign.svg) [Środowisko pracy Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") korzysta z alternatywnego podejścia do tworzenia brył. Szczegółowe omówienie różnic między środowiskami pracy Część i Projekt Części można znaleźć na stronie [Część i Projekt Części](/Part_and_PartDesign/pl "Part and PartDesign/pl").

![](/images/Part_Workbench_Example.jpg)

## Narzędzia

### Pasek narzędzi Bryły

- ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl"): rysuje sześcian.

- ![](/images/Part_Cylinder.svg) [Walec](/Part_Cylinder/pl "Part Cylinder/pl"): rysuje walec.

- ![](/images/Part_Sphere.svg) [Kula](/Part_Sphere/pl "Part Sphere/pl"): rysuje sferę.

- ![](/images/Part_Cone.svg) [Stożek](/Part_Cone/pl "Part Cone/pl"): rysuje stożek.

- ![](/images/Part_Torus.svg) [Torus](/Part_Torus/pl "Part Torus/pl"): rysuje torus.

- ![](/images/Part_Tube.svg) [Utwórz rurę](/Part_Tube/pl "Part Tube/pl"): rysuje rurę.

- ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"): Narzędzie do tworzenia jednego z następujących elementów pierwotnych:

- ![](/images/Part_Plane.svg) [Płaszczyzna](/Part_Plane/pl "Part Plane/pl"): tworzy płaszczyznę.

- ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl"): tworzy sześcian. Obiekt ten można również utworzyć za pomocą narzędzia [Box](/Part_Box/pl "Part Box/pl").

- ![](/images/Part_Cylinder.svg) [Walec](/Part_Cylinder/pl "Part Cylinder/pl"): tworzy walec. Obiekt ten można również utworzyć za pomocą narzędzia [Walec](/Part_Cylinder/pl "Part Cylinder/pl").

- ![](/images/Part_Cone.svg) [Stożek](/Part_Cone/pl "Part Cone/pl"): tworzy stożek. Obiekt ten można również utworzyć za pomocą narzędzia [Stożek](/Part_Cone/pl "Part Cone/pl").

- ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/pl "Part Sphere/pl"): tworzy sferę. Obiekt ten można również utworzyć za pomocą narzędzia [Sfera](/Part_Sphere/pl "Part Sphere/pl").

- ![](/images/Part_Ellipsoid.svg) [Elipsoida](/Part_Ellipsoid/pl "Part Ellipsoid/pl"): tworzy elipsoidę.

- ![](/images/Part_Torus.svg) [Torus](/Part_Torus/pl "Part Torus/pl"): tworzy torus. Obiekt ten można również utworzyć za pomocą narzędzia [Torus](/Part_Torus/pl "Part Torus/pl") tool.

- ![](/images/Part_Prism.svg) [Graniastosłup](/Part_Prism/pl "Part Prism/pl"): tworzy graniastosłup.

- ![](/images/Part_Wedge.svg) [Klin](/Part_Wedge/pl "Part Wedge/pl"): tworzy klin.

- ![](/images/Part_Helix.svg) [Helisa](/Part_Helix/pl "Part Helix/pl"): tworzy helisę.

- ![](/images/Part_Spiral.svg) [Spirala](/Part_Spiral/pl "Part Spiral/pl"): tworzy spiralę.

- ![](/images/Part_Circle.svg) [Okrąg](/Part_Circle/pl "Part Circle/pl"): tworzy łuk koła.

- ![](/images/Part_Ellipse.svg) [Elipsa](/Part_Ellipse/pl "Part Ellipse/pl"): tworzy łuk eliptyczny.

- ![](/images/Part_Point.svg) [Punkt](/Part_Point/pl "Part Point/pl"): tworzy punkt.

- ![](/images/Part_Line.svg) [Linia](/Part_Line/pl "Part Line/pl"): tworzy linię.

- ![](/images/Part_RegularPolygon.svg) [Wielokąt foremny](/Part_RegularPolygon/pl "Part RegularPolygon/pl"): tworzy wielokąt foremny.

- ![](/images/Part_Builder.svg) [Konstruktor kształtu ...](/Part_Builder/pl "Part Builder/pl"): tworzy kształty z różnych elementów pierwotnych.

### Pasek narzędzi Narzędzia środowiska Część

- ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"): Tworzy nowy szkic i otwiera [okno dialogowe Szkicownika](/Sketcher_Dialog/pl "Sketcher Dialog/pl") w celu jego edycji.

- ![](/images/Part_Extrude.svg) [Wyciągnięcie](/Part_Extrude/pl "Part Extrude/pl"): wyciąga płaskie powierzchnie obiektu.

- ![](/images/Part_Revolve.svg) [Obrót ...](/Part_Revolve/pl "Part Revolve/pl"): tworzy bryłę obracając inny obiekt _(nie będący bryłą)_ wokół osi.

- ![](/images/Part_Mirror.svg) [Odbicie lustrzane ...](/Part_Mirror/pl "Part Mirror/pl"): odtwarza wybrany obiekt na danej płaszczyźnie lustrzanej.

- ![](/images/Part_Scale.svg) [Skaluj](/Part_Scale/pl "Part Scale/pl"): Skaluje jeden lub więcej kształtów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Part_Fillet.svg) [Zaokrąglenie ...](/Part_Fillet/pl "Part Fillet/pl"): zaokrągla krawędzie obiektu.

- ![](/images/Part_Chamfer.svg) [Fazka ...](/Part_Chamfer/pl "Part Chamfer/pl"): fazowanie krawędzi obiektu.

- ![](/images/Part_MakeFace.svg) [Utwórz ścianę z linii łamanych](/Part_MakeFace/pl "Part MakeFace/pl"): Tworzy ścinę z zestawu linii.

- ![](/images/Part_RuledSurface.svg) [Utwórz powierzchnię prostokreślną](/Part_RuledSurface/pl "Part RuledSurface/pl"): tworzy powierzchnie bazującą np. na łuku.

- ![](/images/Part_Loft.png) [Wyciągnięcie przez profile](/Part_Loft/pl "Part Loft/pl"): przeciąga jeden profil do drugiego.

- ![](/images/Part_Sweep.svg) [Wyciągnięcie po ścieżce ...](/Part_Sweep/pl "Part Sweep/pl"): rozciąga jeden lub więcej profili wzdłuż ścieżki.

- ![](/images/Part_Section.svg) [Przekrój](/Part_Section/pl "Part Section/pl"): tworzy przekrój, przecinając obiekt płaszczyzna przekroju.

- ![](/images/Part_CrossSections.svg) [Wiele przekrojów...](/Part_SectionCross "Part SectionCross"): tworzy jeden lub więcej przekrojów przez wybrany kształt.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Odległości:

- ![](/images/Part_Offset.svg) [3D Offset](/Part_Offset "Part Offset"): konstruuje kształt równoległy w pewnej odległości od oryginału.

- ![](/images/Part_Offset2D.svg) [2D Offset](/Part_Offset2D "Part Offset2D"): konstruuje rzut równoległy w pewnej odległości od oryginału lub powiększa / zmniejsza powierzchnię płaską. [dostępne w wersji 0.17](/Release_notes_0.17/pl "Release notes 0.17/pl")

- ![](/images/Part_Thickness.svg) [Narzędzie do ustawiania grubości](/Part_Thickness "Part Thickness"): wydrąża bryłę, nadaje powierzchni określoną grubość.

- ![](/images/Part_ProjectionOnSurface.svg) [Utwórz rzut na powierzchni](/Part_ProjectionOnSurface/pl "Part ProjectionOnSurface/pl"): Rzutuje logo, tekst lub dowolną ściankę, linie łamaną lub krawędź na powierzchnię.

- ![](/images/Part_ColorPerFace.svg) [Ustaw kolor ściany](/Part_ColorPerFace/pl "Part ColorPerFace/pl"): Przypisuje kolory do poszczególnych powierzchni obiektu.

### Pasek narzędzi Operacje logiczne

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Kształtów:

- ![](/images/Part_Compound.svg) [Utwórz kombinację](/Part_Compound/pl "Part Compound/pl"): tworzy element złożony z wybranych obiektów.

- ![](/images/Part_ExplodeCompound.svg) [Rozłóż kombinację](/Part_ExplodeCompound "Part ExplodeCompound"): dzieli element złożony na poszczególne kształty.

- ![](/images/Part_CompoundFilter.svg) [Filtr kombinacji](/Part_CompoundFilter "Part CompoundFilter"): filtr kombinacji może być używany do oddzielania poszczególnych elementów.

- ![](/images/Part_Boolean.svg) [Operacje logiczne](/Part_Boolean/pl "Part Boolean/pl"): wykonuje operacje z użyciem funkcji logicznych na dwóch obiektach.

- ![](/images/Part_Cut.svg) [Wycięcie](/Part_Cut/pl "Part Cut/pl"): Wycina _(odejmuje)_ jeden obiekt z drugiego.

- ![](/images/Part_Fuse.svg) [Łączenie](/Part_Fuse/pl "Part Fuse/pl"): zespaja _(dodaje)_ dwa lub więcej obiektów.

- ![](/images/Part_Common.svg) [Część wspólna](/Part_Common/pl "Part Common/pl"): wyodrębnia wspólną _(krzyżującą się)_ część dwóch obiektów.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Łączyć:

- ![](/images/Part_JoinConnect.svg) [Połącz](/Part_JoinConnect "Part JoinConnect"): łączy elementy _(do wewnętrznych płaszczyzn)_.

- ![](/images/Part_JoinEmbed.svg) [Wstaw](/Part_JoinEmbed "Part JoinEmbed"): osadza obiekt posiadający ścianki w innym obiekcie ze ściankami.

- ![](/images/Part_JoinCutout.svg) [Wytnij](/Part_JoinCutout "Part JoinCutout"): tworzy wycięcie w ścianie obiektu dla innego obiektu ze ściankami.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Oddzielenie:

- ![](/images/Part_BooleanFragments.svg) [Fragmenty funkcji fogicznych](/Part_BooleanFragments/pl "Part BooleanFragments/pl"): tworzy wszystkie elementy, które można uzyskać poprzez operacje logiczne pomiędzy obiektami.

- ![](/images/Part_SliceApart.svg) [Pokrój część](/Part_SliceApart/pl "Part SliceApart/pl"): Przecina i dzieli obiekt przez przecięcie go przez inne obiekty.

- ![](/images/Part_Slice.svg) [Rozkrój częścią](/Part_Slice/pl "Part Slice/pl"): Dzieli obiekt na części, przecinając go innym obiektem.

- ![](/images/Part_XOR.svg) [XOR](/Part_XOR/pl "Part XOR/pl"): usuwa przestrzeń współdzieloną elementów o parzystym numerze.

- ![](/images/Part_CheckGeometry.svg) [Analizuje geometrię ...](/Part_CheckGeometry "Part CheckGeometry"): sprawdza geometrię wybranych obiektów pod kątem błędów.

- ![](/images/Part_Defeaturing.svg) [Usuń właściwość z kształtu](/Part_Defeaturing "Part Defeaturing"): Usuwa cechy z danego obiektu.

### Pozostałe narzędzia

- ![](/images/Part_Import.svg) [Importuj CAD](/Part_Import "Part Import"): Importuje z plików \*.IGES, \*.STEP lub \*.BREP.

- ![](/images/Part_Export.svg) [Eksport CAD](/Part_Export "Part Export"): Eksportuje do plików \*.IGES, \*.STEP lub \*.BREP.

- ![](/images/Part_BoxSelection.svg) [Pole wyboru](/Part_BoxSelection/pl "Part BoxSelection/pl"): dodaj do zaznaczenia powierzchnie czołowe bryły, które są objęte zaznaczeniem prostokątnym.

- ![](/images/Part_ShapeFromMesh.svg) [Utwórz kształt z siatki](/Part_ShapeFromMesh "Part ShapeFromMesh"): tworzy kształty z obiektów siatki.

- ![](/images/Part_PointsFromMesh.svg) [Punkty z siatki](/Part_PointsFromMesh/pl "Part PointsFromMesh/pl"): Tworzy obiekty punktowe z obiektów geometrycznych.

- ![](/images/Part_MakeSolid.svg) [Konwersja do bryły](/Part_MakeSolid/pl "Part MakeSolid/pl"): Tworzy bryły z obiektów kształtu.

- ![](/images/Part_ReverseShape.svg) [Odwróć kształty](/Part_ReverseShape/pl "Part ReverseShape/pl"): Tworzy parametryczne kopie z odwróconymi kierunkami normalnymi z wybranych obiektów.

- Wykonaj duplikat:

- ![](/images/Part_SimpleCopy.svg) [Utwórz prostą kopię](/Part_SimpleCopy/pl "Part SimpleCopy/pl"): Tworzy nieparametryczne kopie obiektów.

- ![](/images/Part_TransformedCopy.svg) [Utwórz przekształconą kopię](/Part_TransformedCopy/pl "Part TransformedCopy/pl"): Tworzy nieparametryczne kopie obiektów. Jest przeznaczone dla obiektów zagnieżdżonych w kontenerach.

- ![](/images/Part_ElementCopy.svg) [Utworz kopię kształtu elementu](/Part_ElementCopy/pl "Part ElementCopy/pl"): Tworzy nieparametryczne kopie elementów podrzędnych: wierzchołków, krawędzi i ścian.

- ![](/images/Part_RefineShape.svg) [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl"): Tworzy parametryczne kopie z udoskonalonym kształtem z wybranych obiektów. Usuwa zbędne krawędzie z płaskich i cylindrycznych ścian.

- ![](/images/Part_EditAttachment.svg) [Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl"): Mocuje obiekt do jednego lub więcej innych obiektów.

## Narzędzia przestarzałe

### Pomiary

Narzędzie ![](/images/Std_Measure.svg) [Pomiary](/Std_Measure/pl "Std Measure/pl") zastępuje narzędzia wymienione poniżej. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Part_Measure_Linear.svg) [Pomiar liniowy](/Part_Measure_Linear/pl "Part Measure Linear/pl"): pozwala na wykonywanie pomiarów wzdłuż linii. Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Part_Measure_Angular.svg) [Pomiar kąta](/Part_Measure_Angular/pl "Part Measure Angular/pl"): pozwala na wykonywanie pomiarów nachylenia linii prostej. Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Part_Measure_Refresh.svg) [Odnów pomiary](/Part_Measure_Refresh/pl "Part Measure Refresh/pl"): aktualizuje widok 3D, aby wyświetlić wszystkie utworzone pomiary. Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Part_Measure_Clear_All.svg) [Wyczyść wszystko](/Part_Measure_Clear_All/pl "Part Measure Clear All/pl") oraz [Usuń wszystkie pomiary widoku](/View_Measure_Clear_All/pl "View Measure Clear All/pl"): usuwa wszystkie pomiary. Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Part_Measure_Toggle_All.svg) [Przełącz widoczność](/Part_Measure_Toggle_All/pl "Part Measure Toggle All/pl") [Usuń wszystkie pomiary widoku](/View_Measure_Toggle_All/pl "View Measure Toggle All/pl"): pokazuje lub ukrywa widoczność wszystkich pomiarów. Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Part_Measure_Toggle_3D.svg) [Pokaż wybrane](/Part_Measure_Toggle_3D/pl "Part Measure Toggle 3D/pl"): narzędzie to przełącza widoczność pomiarów liniowych _(kolor zielony)_ i kątowych _(kolor niebieski)_. Niedostępne w wersja 1.0 i powyżej.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Przełącz deltę](/Part_Measure_Toggle_Delta/pl "Part Measure Toggle Delta/pl"): narzędzie to przełącza widoczność pomiarów delta _(kolor zielony)_. Niedostępne w wersja 1.0 i powyżej.

## Ustawienia

- ![](/images/Preferences-part_design.svg) [Preferencje](/PartDesign_Preferences/pl "PartDesign Preferences/pl"): preferencje dostępne dla narzędzi środowiska Część.
- ![](/images/Preferences-import-export.svg) [Ustawienia import - eksport](/Import_Export_Preferences/pl "Import Export Preferences/pl"): preferencje dostępne przy imporcie z i eksporcie do różnych formatów plików.
- [Dostrajanie parametrów](/Fine-tuning/pl "Fine-tuning/pl"): kilka dodatkowych parametrów, aby dostosować zachowanie środowiska pracy Część.

## Tworzenie skryptów

Zobacz również: [skrypty dla środowiska Część](/Part_scripting/pl "Part scripting/pl")

## Poradniki

- [Import formatu STL lub OBJ](/Import_from_STL_or_OBJ/pl "Import from STL or OBJ/pl") : w jaki sposób zaimportować plik STL/OBJ w programie FreeCAD.
- [Eksport do formatu STL lub OBJ](/Export_to_STL_or_OBJ/pl "Export to STL or OBJ/pl") : w jaki sposób eksportować pliki STL/OBJ z programu FreeCAD.
- [Poradnik: Kula Whiffle](/Whiffle_Ball_tutorial/pl "Whiffle Ball tutorial/pl") : Jak korzystać ze środowiska pracy Część.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/pl&oldid=1501034>"
