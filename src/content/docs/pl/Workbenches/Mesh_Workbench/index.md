---
title: Środowisko pracy Siatka
---

![](/images/Workbench_Mesh.svg)

Ikona FreeCAD dla środowiska pracy Siatka

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Mesh.svg) Siatka obsługuje [sieci trójkątnych oczek](http://en.wikipedia.org/wiki/Triangle_mesh). Siatki są specjalnym rodzajem obiektu 3D, złożonym z trójkątnych ścian połączonych ich wierzchołkami i krawędziami.

Wiele aplikacji 3D, takich jak [Sketchup](http://en.wikipedia.org/wiki/Sketchup), [Blender](<http://en.wikipedia.org/wiki/Blender_(software)>), [Maya](<http://en.wikipedia.org/wiki/Maya_(software)>) i [3D Studio Max](http://en.wikipedia.org/wiki/3d_max), używa siatki jako podstawowego typu obiektu 3D. Ponieważ siatki są bardzo prostymi obiektami, zawierającymi tylko wierzchołki _(punkty)_, krawędzie i trójkątne powierzchnie, są one bardzo łatwe do tworzenia, modyfikowania, dzielenia, rozciągania i mogą być łatwo przekazywane z jednej aplikacji do drugiej bez utraty szczegółów. Ponadto, ponieważ siatki zawierają bardzo nieskomplikowane dane, aplikacje 3D mogą zazwyczaj zarządzać bardzo dużymi ich ilościami bez konieczności używania wielkich zasobów. Z tych powodów, siatki są często wybierane jako obiekt 3D dla aplikacji obsługujących filmy, animacje i tworzenie obrazów.

**Jednak w dziedzinie siatek inżynieryjnych istnieje jedno duże ograniczenie:** nie mogą one dokładnie określać zakrzywionych powierzchni. Dlatego FreeCAD polega na [Brep](http://en.wikipedia.org/wiki/Boundary_representation "wikipedia:Boundary representation"). Środowisko pracy Mesh oferuje kilka poleceń do bezpośredniego manipulowania siatkami, ale najczęściej jest używane do importu danych o siatkach 3D i konwertowania ich na bryłę, do użycia w Środowisku pracy ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/pl "Part Workbench/pl") lub ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench").

![](/images/Mesh_example.jpg)

## Przybory

Wszystkie narzędzia Środowiska pracy Siatka są dostępne w menu **Siatki**. Prawie wszystkie są również dostępne w jednym z pasków narzędzi **Siatka**.

- ![](/images/Mesh_Import.svg) [Import siatki...](/Mesh_Import "Mesh Import"): : Importuje obiekty siatek z pliku.

- ![](/images/Mesh_Export.svg) [Eksport siatki...](/Mesh_Export "Mesh Export"): Eksport obiektów siatek do pliku.

- ![](/images/Mesh_FromPartShape.svg) [Utwórz siatkę z kształtu ...](/Mesh_FromPartShape "Mesh FromPartShape"): Tworzy obiekty siatkowe z obiektów kształtu.

- ![](/images/Mesh_RemeshGmsh.svg) [Ulepsz przez Gmsh](/Mesh_RemeshGmsh/pl "Mesh RemeshGmsh/pl"): Ulepsza obiekty siatkowe.

* Analiza
  - ![](/images/Mesh_Evaluation.svg) [Oceń i napraw siatkę...](/Mesh_Evaluation "Mesh Evaluation") Ocenia i naprawia obiekt siatkowy.
  - ![](/images/Mesh_CurvatureInfo.svg) [Dane o powierzchnii](/Mesh_EvaluateFacet "Mesh EvaluateFacet"): Pokazuje informacje o powierzchniach obiektów siatkowych.
  - [Informacje o krzywiźnie](/Mesh_EvaluateCurvature "Mesh EvaluateCurvature"): Pokazuje krzywiznę absolutną [obiektów krzywizny](/Mesh_VertexCurvature "Mesh VertexCurvature") w wybranych punktach.
  - ![](/images/Mesh_EvaluateSolid.svg) [Sprawdź siatkę bryły](/Mesh_EvaluateSolid "Mesh EvaluateSolid"): Sprawdza, czy obiekt siatkowy jest bryłą.
  - ![](/images/Mesh_BoundingBox.svg) [Informacja o granicach](/Mesh_BoundingBox "Mesh BoundingBox"): Pokazuje współrzędne pola ograniczającego obiekt siatki.

- ![](/images/Mesh_VertexCurvature.svg) [Wykres krzywizny](/Mesh_VertexCurvature "Mesh VertexCurvature"): Tworzy obiekty krzywizny siatki dla obiektów siatkowych.

- ![](/images/Mesh_HarmonizeNormals.svg) [Porządkuj wektory normalne](/Mesh_HarmonizeNormals "Mesh HarmonizeNormals"): Ujednolicenie wektorów normalnych obiektu siatki.

- ![](/images/Mesh_FlipNormals.svg) [Odwróć wektory normalne](/Mesh_FlipNormals "Mesh FlipNormals"): Odwraca wektory normalne obiektu siatki.

- ![](/images/Mesh_FillupHoles.svg) [Wypełnij otwory...](/Mesh_FillupHoles "Mesh FillupHoles"): Wypełnia otwory w obiekcie siatki.

- ![](/images/Mesh_FillInteractiveHole.svg) [Zamknij otwór](/Mesh_FillInteractiveHole "Mesh FillInteractiveHole"): Wypełnia wybrane otwory w obiektach siatkowych.

- ![](/images/Mesh_AddFacet.svg) [Dodaj trójkąt](/Mesh_AddFacet "Mesh AddFacet") : Dodaje powierzchnie wzdłuż obwiedni otwartego obiektu siatkowego.

- ![](/images/Mesh_RemoveComponents.svg) [Usuń fragment...](/Mesh_RemoveComponents "Mesh RemoveComponents"): Usuwa powierzchnie z obiektów siatkowych.

- ![](/images/Mesh_RemoveCompByHand.svg) [Usuń fragment ręcznie...](/Mesh_RemoveCompByHand "Mesh RemoveCompByHand"): Usuwa elementy z obiektów siatkowych.

- ![](/images/Mesh_Segmentation.svg) [Utwórz segmenty siatki...](/Mesh_Segmentation "Mesh Segmentation"): Tworzy oddzielne segmenty siatki dla określonych typów powierzchni obiektu siatkowego.

- ![](/images/Mesh_SegmentationBestFit.svg) [Utwórz segmenty siatki z najlepiej dopasowanych powierzchni...](/Mesh_SegmentationBestFit "Mesh SegmentationBestFit"): Tworzy oddzielne segmenty siatki dla określonych typów powierzchni obiektu siatkowego i może określić ich parametry.

- ![](/images/Mesh_Smoothing.svg) [Wygładź...](/Mesh_Smoothing "Mesh Smoothing"): Wygładza obiekt siatki.

- ![](/images/Mesh_Decimating.svg) [Uprość ...](/Mesh_Decimating/pl "Mesh Decimating/pl"): Zmniejsza liczbę ścianek w obiektach siatkowych.

- ![](/images/Mesh_Scale.svg) [Skala...](/Mesh_Scale "Mesh Scale"): Skaluje obiekt siatki.

- ![](/images/Mesh_BuildRegularSolid.svg) [Bryła podstawowa...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid"): Tworzy regularny, parametryczny obiekt siatki bryły pierwotnej.

* Operacje logiczne

  - ![](/images/Mesh_Union.svg) [Suma](/Mesh_Union "Mesh Union"): Tworzy obiekt siatki, który jest połączeniem dwóch obiektów siatki.
  - ![](/images/Mesh_Intersection.svg) [Przecięcie](/Mesh_Intersection "Mesh Intersection"): Tworzy obiekt siatki, który jest przecięciem dwóch obiektów siatki.
  - ![](/images/Mesh_Difference.svg) [Różnica](/Mesh_Difference "Mesh Difference"): Tworzy obiekt siatki, który jest różnicą dwóch obiektów siatki.

* Przycinanie
  - ![](/images/Mesh_PolyCut.svg) [Przytnij siatkę linia łamaną](/Mesh_PolyCut/pl "Mesh PolyCut/pl"): Wycina całe powierzchnie z obiektów siatkowych.
  - ![](/images/Mesh_PolyTrim.svg) [Przytnij siatkę](/Mesh_PolyTrim/pl "Mesh PolyTrim/pl"): Przycina powierzchnie i części ścian z obiektów siatki.
  - ![](/images/Mesh_TrimByPlane.svg) [Przytnij siatkę płaszczyzną](/Mesh_TrimByPlane/pl "Mesh TrimByPlane/pl"): Przycina powierzchnie i części powierzchni po jednej stronie płaszczyzny z obiektu siatkowego.
  - ![](/images/Mesh_SectionByPlane.svg) [Tworzenie przekroju z siatki i płaszczyzny](/Mesh_SectionByPlane/pl "Mesh SectionByPlane/pl"): Tworzy przekrój poprzeczny przez obiekt siatkowy.
  - ![](/images/Mesh_CrossSections.svg) [Przekrój...](/Mesh_CrossSections/pl "Mesh CrossSections/pl"): Tworzy wiele przekrojów poprzecznych na obiektach siatkowych.

- ![](/images/Mesh_Merge.svg) [Połącz](/Mesh_Merge "Mesh Merge"): Tworzy obiekt siatki poprzez połączenie dwóch lub więcej obiektów siatkowych.

- ![](/images/Mesh_SplitComponents.svg) [Podziel według komponentów](/Mesh_SplitComponents/pl "Mesh SplitComponents/pl"): Dzieli obiekt siatkowy na jego komponenty.

- ![](/images/MeshPart_CreateFlatMesh.svg) [Rozwiń siatkę](/MeshPart_CreateFlatMesh/pl "MeshPart CreateFlatMesh/pl"): Tworzy płaską reprezentację obiektu siatkowego.

- ![](/images/MeshPart_CreateFlatFace.svg) [Rozwiń powierzchnię](/MeshPart_CreateFlatFace/pl "MeshPart CreateFlatFace/pl"): Tworzy płaską reprezentację powierzchni obiektu kształtu.

## Ustawienia

Istnieje kilka [preferencji eksportu związanych z formatami siatki](/Import_Export_Preferences/pl#Formaty_Mesh "Import Export Preferences/pl"), ale nie są one używane przez polecenia należące do tego stanowiska pracy. Są one używane przez polecenie [Std: Eksport](/Std_Export/pl "Std Export/pl").

Preferencje środowiska pracy Siatka można znaleźć w następujących kategoriach [Edytora Preferencji](/Preferences_Editor/pl "Preferences Editor/pl"):

- ![](/images/Preferences-display.svg) [Wyświetlanie](/Preferences_Editor/pl#Ustawienia_wyświetlania "Preferences Editor/pl"): Na stronie [widoku siatki](/Preferences_Editor/pl#Widok_siatki "Preferences Editor/pl") można ustawić kilka parametrów.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences/pl "OpenSCAD Preferences/pl"): Polecenia [Siatka: Połączenie](/Mesh_Union/pl "Mesh Union/pl"), [Siatka: Przecięcie](/Mesh_Intersection/pl "Mesh Intersection/pl") oraz [Siatka: Różnica](/Mesh_Difference/pl "Mesh Difference/pl") wymagają [OpenSCAD](http://www.openscad.org/) i użyj preferencji **OpenSCAD executable**, aby znaleźć jego plik wykonywalny.

## Uwagi

- Więcej narzędzi mesh jest dostępnych w Środowisku pracy ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl")
- Siatkami można również manipulować i tworzyć je za pomocą [skryptów](/Mesh_Scripting/pl "Mesh Scripting/pl") środowiska [Python](/Python/pl "Python/pl").
- Zobacz również: [FreeCAD oraz import siatki](/FreeCAD_and_Mesh_Import "FreeCAD and Mesh Import").
- Zobacz [Asymptote](/Asymptote "Asymptote"), aby wyeksportować siatki do formatu Asymptote.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/pl&oldid=1467967>"
