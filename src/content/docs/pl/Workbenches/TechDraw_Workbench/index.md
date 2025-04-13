---
title: Środowisko pracy Rysunek Techniczny
---

![](/images/Workbench_TechDraw.svg)

Ikonka FreeCAD dla środowiska pracy Rysunek Techniczny

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_TechDraw.svg) Rysunek Techniczny służy do generowania podstawowych rysunków technicznych z modeli 3D tworzonych przy użyciu innych środowisk pracy, takich jak [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl"), bądź importowanych z innych aplikacji. Każdy rysunek jest Stroną, która może zawierać różne widoki obiektów rysunkowych, takich jak Part::Features, PartDesign::Bodies, App::Part groups i Document Object groups. Powstałe w ten sposób rysunki mogą być wykorzystane do takich celów jak dokumentacja, instrukcje produkcyjne, umowy, pozwolenia, itp.

Do strony mogą być dodawane wymiary, przekroje, zakreskowane obszary, adnotacje i symbole [SVG](/SVG/pl "SVG/pl"). Strona może być dalej eksportowana do różnych formatów, takich jak [DXF](/DXF/pl "DXF/pl"), [SVG](/SVG/pl "SVG/pl"), i [PDF](/PDF/pl "PDF/pl").

Jeśli Twoim głównym celem jest tworzenie złożonych rysunków 2D i plików [DXF](/DXF/pl "DXF/pl"), a nie potrzebujesz modelowania 3D, FreeCAD może nie być właściwym wyborem dla Ciebie. Możesz rozważyć zastosowanie dedykowanego programu do tworzenia projektów technicznych, takiego jak [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD), [QCad](https://en.wikipedia.org/wiki/QCad), lub innego.

![](/images/TechDraw_Workbench_Example.png)

### Przyciąganie

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Środowisko pracy Rysunek Techniczny ma funkcję przyciągania. Można z niej skorzystać do automatycznego wyrównywania widoków, przekrojów i wymiarów podczas pozycjonowania ich przeciągając je myszą. Jeśli **Przyciąganie wyrównania widoku** jest włączone _(domyślnie)_ w [preferencjach](/TechDraw_Preferences/pl#Przyciąganie "TechDraw Preferences/pl"), widoki będą przyciągane do wyrównania z innymi widokami gdy znajdą się odpowiednio blisko _(ustawienie **Współczynnik przyciągania widoków**)_. Wymiary również są przyciągane do innych równoległych wymiarów a tekst wymiaru można przyciągnąć do środka linii wymiarowej. Przyciąganie można tymczasowo wyłączyć przytrzymując klawisz Alt.

## Narzędzia

### Strony

- ![](/images/TechDraw_PageDefault.svg) [Wstaw nową stronę rysunku](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl"): dodaje nową stronę przy użyciu domyślnego [Szablonu](/TechDraw_Templates/pl "TechDraw Templates/pl").

- ![](/images/TechDraw_PageTemplate.svg) [Wstaw nową stronę przy użyciu szablonu](/TechDraw_PageTemplate/pl "TechDraw PageTemplate/pl"): dodaje nową stronę przy użyciu ustawienia z [szablonu](/TechDraw_Templates/pl "TechDraw Templates/pl").

- ![](/images/TechDraw_FillTemplateFields.svg) [Uzupełnij szablon](/TechDraw_FillTemplateFields/pl "TechDraw FillTemplateFields/pl"): [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_RedrawPage.svg) [Odśwież widok](/TechDraw_RedrawPage/pl "TechDraw RedrawPage/pl"): wymusza aktualizację wybranej strony.

- ![](/images/TechDraw_PrintAll.svg) [Drukuj wszystkie strony](/TechDraw_PrintAll/pl "TechDraw PrintAll/pl"): drukuje wszystkie strony rysunku. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_ExportPageSVG.svg) [Zapisz aktywną stronę w formacie SVG](/TechDraw_ExportPageSVG/pl "TechDraw ExportPageSVG/pl"): eksport strony do pliku w formacie [SVG](/SVG/pl "SVG/pl").

- ![](/images/TechDraw_ExportPageDXF.svg) [Zapisz aktywną stronę w formacie DXF](/TechDraw_ExportPageDXF/pl "TechDraw ExportPageDXF/pl"): eksport strony do pliku w formacie [DXF](/DXF/pl "DXF/pl").

### Widoki

#### Widoki Rysunku Technicznego

- ![](/images/TechDraw_View.svg) [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl"): dodaje reprezentację jednego lub większej liczby obiektów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Może wstawić pojedynczy widok, [grupę rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl"), [widok Arkusza kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl"), [obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), [symbol SVG](/TechDraw_Symbol/pl "TechDraw Symbol/pl") lub [bitmapę](/TechDraw_Image/pl "TechDraw Image/pl").

- ![](/images/TechDraw_BrokenView.svg) |[Wstaw widok z przerwaniem](/TechDraw_BrokenView/pl "TechDraw BrokenView/pl"): dodaje widok przerwany _(przycięty)_ jednego lub więcej obiektów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_SectionView.svg) [Wstaw widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl"): dodaje widok przekroju dla aktualnego widoku.

- ![](/images/TechDraw_ComplexSection.svg) [Wstaw widok przekroju złożonego](/TechDraw_ComplexSection/pl "TechDraw ComplexSection/pl"): wstawia widok przekroju istniejącego widoku na podstawie profilu. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_DetailView.svg) [Wstaw widok szczegółu](/TechDraw_DetailView/pl "TechDraw DetailView/pl"): dodaje widok szczegółu części wybranego widoku.

- ![](/images/TechDraw_ProjectionGroup.svg) [Wstaw grupę rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl"): otwiera okno dialogowe do tworzenia wielu widoków obiektu z różnych kierunków. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Zamiast tego można użyć narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

- ![](/images/TechDraw_ClipGroup.svg) [Wstaw grupę wycinków](/TechDraw_ClipGroup/pl "TechDraw ClipGroup/pl"): wstawia do strony grupę wycinków.

- ![](/images/TechDraw_Symbol.svg) [Wstaw symbol SVG](/TechDraw_Symbol/pl "TechDraw Symbol/pl"): wstawia do zawartości strony symbol [SVG](/SVG/pl "SVG/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Zamiast tego można użyć narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

- ![](/images/TechDraw_Image.svg) [Wstaw obraz bitmapy](/TechDraw_Image/pl "TechDraw Image/pl"): wstawia obrazek PNG lub JPG [bitmapy](/Bitmap/pl "Bitmap/pl") do zawartości strony. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Zamiast tego można użyć narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

- ![](/images/TechDraw_ShareView.svg) [Udostępnij widok](/TechDraw_ShareView/pl "TechDraw ShareView/pl"): współdzieli widok pomiędzy wieloma stronami.

- ![](/images/TechDraw_ToggleFrame.svg) [Włącz / wyłącz wyświetlanie ramek](/TechDraw_ToggleFrame/pl "TechDraw ToggleFrame/pl"): włącza i wyłącza ramki oraz etykiety otaczające widok.

- ![](/images/TechDraw_ProjectShape.svg) [Rzutowanie kształtów](/TechDraw_ProjectShape/pl "TechDraw ProjectShape/pl"): tworzy rzut kształtu w oknie [widoku 3D](/3D_view/pl "3D view/pl").

#### Widoki z innych środowisk

- ![](/images/TechDraw_ActiveView.svg) [Wstaw aktywny widok](/TechDraw_ActiveView/pl "TechDraw ActiveView/pl"): wstawia kopię widoku z okna 3D do strony rysunku.

- ![](/images/TechDraw_DraftView.svg) [Wstaw obiekt środowiska pracy Rysunek Roboczy](/TechDraw_DraftView/pl "TechDraw DraftView/pl"): dodaje do widoku strony obiekt ze środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

- ![](/images/TechDraw_ArchView.svg) [Wstaw obiekt środowiska pracy BIM](/TechDraw_ArchView/pl "TechDraw ArchView/pl"): dodaje widok obiektu [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") ze środowiska pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Zamiast tego można użyć narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

- ![](/images/TechDraw_SpreadsheetView.svg) [Wstaw widok arkusza kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl"): wstawia widok ze środowiska pracy [Arkusz Kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Zamiast tego można użyć narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").

### Organizacja widoków

Są to narzędzia do zmiany kolejności układania, która kontroluje pozorną głębokość widoków na stronie.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dostosuj kolejność sortowania widoków:

- ![](/images/TechDraw_StackTop.svg) [Przesuń widok na górę](/TechDraw_StackTop/pl "TechDraw StackTop/pl"): przesuwa widoki na górny poziom. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_StackBottom.svg) [Przesuń widok na dół](/TechDraw_StackBottom/pl "TechDraw StackBottom/pl"): przesuwa widoki na dolny poziom. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_StackUp.svg) [Przesuwa widoki w górę](/TechDraw_StackUp/pl "TechDraw StackUp/pl"): przesuwa widoki o jeden poziom w górę. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_StackDown.svg) [Przesuwa widoki w dół](/TechDraw_StackDown/pl "TechDraw StackDown/pl"): przesuwa widoki o jeden poziom w dół. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Wymiary

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Wymiary:

- ![](/images/TechDraw_Dimension.svg) [Wstaw wymiar](/TechDraw_Dimension/pl "TechDraw Dimension/pl"): dodaje wymiar kontekstowy. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_LengthDimension.svg) [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"): dodaje wymiar dotyczący odległości.

- ![](/images/TechDraw_HorizontalDimension.svg) [Wstaw wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl"): dodaje poziomy wymiar długości.

- ![](/images/TechDraw_VerticalDimension.svg) [Wstaw wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl"): dodaje pionowy wymiar długości.

- ![](/images/TechDraw_RadiusDimension.svg) [Wstaw wymiar promienia](/TechDraw_RadiusDimension/pl "TechDraw RadiusDimension/pl"): dodaje wymiar promienia do okręgu lub łuku.

- ![](/images/TechDraw_DiameterDimension.svg) [Wstaw wymiar średnicy](/TechDraw_DiameterDimension/pl "TechDraw DiameterDimension/pl"): dodaje wymiar średnicy do okręgu lub łuku.

- ![](/images/TechDraw_AngleDimension.svg) [Wstaw wymiar kąta](/TechDraw_AngleDimension/pl "TechDraw AngleDimension/pl"): dodaje wymiar kąta pomiędzy dwoma krawędziami prostymi.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Wymiaruj kąt na podstawie 3 punktów](/TechDraw_3PtAngleDimension/pl "TechDraw 3PtAngleDimension/pl"): dodaje wymiar kąta na podstawie trzech podanych punktów.

- ![](/images/TechDraw_AreaDimension.svg) [Wstaw adnotację obszaru](/TechDraw_AreaDimension/pl "TechDraw AreaDimension/pl"): dodaje wymiar pola powierzchni do ściany. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [Długość łuku](/TechDraw_ExtensionCreateLengthArc/pl "TechDraw ExtensionCreateLengthArc/pl"): tworzy wymiar długości łuku. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Zakres poziomy](/TechDraw_HorizontalExtentDimension/pl "TechDraw HorizontalExtentDimension/pl"): dodaje wymiar poziomy.

- ![](/images/TechDraw_VerticalExtentDimension.svg) [Zakres pionowy](/TechDraw_VerticalExtentDimension/pl "TechDraw VerticalExtentDimension/pl"): dodaje wymiar pionowy.

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Seria poziomo](/TechDraw_ExtensionCreateHorizChainDimension/pl "TechDraw ExtensionCreateHorizChainDimension/pl"): tworzy ciąg wymiarów wyrównanych poziomo. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Seria pionowo](/TechDraw_ExtensionCreateVertChainDimension/pl "TechDraw ExtensionCreateVertChainDimension/pl"): tworzy ciąg wymiarów wyrównanych pionowo.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Seria ukośnie](/TechDraw_ExtensionCreateObliqueChainDimension/pl "TechDraw ExtensionCreateObliqueChainDimension/pl"): tworzy ciąg wymiarów wyrównanych ukośnie.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Seria kaskadowych wymiarów poziomo](/TechDraw_ExtensionCreateHorizCoordDimension/pl "TechDraw ExtensionCreateHorizCoordDimension/pl"): tworzy wiele wymiarów poziomych ułożonych wzdłuż jednej linii.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Seria kaskadowych wymiarów pionowo](/TechDraw_ExtensionCreateVertCoordDimension/pl "TechDraw ExtensionCreateVertCoordDimension/pl"): tworzy wiele wymiarów pionowych ułożonych wzdłuż jednej linii.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Seria kaskadowych wymiarów ukośnie](/TechDraw_ExtensionCreateObliqueCoordDimension/pl "TechDraw ExtensionCreateObliqueCoordDimension/pl"): tworzy wiele wymiarów ukośnych ułożonych wzdłuż jednej linii.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Wymiar poziomy fazki](/TechDraw_ExtensionCreateHorizChamferDimension/pl "TechDraw ExtensionCreateHorizChamferDimension/pl"): tworzy wymiar poziomy i wymiar kątowy dla sfazowania.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Wymiar pionowy fazki](/TechDraw_ExtensionCreateVertChamferDimension/pl "TechDraw ExtensionCreateVertChamferDimension/pl"): tworzy wymiar pionowy i wymiar kątowy dla sfazowania.

- ![](/images/TechDraw_Balloon.svg) [Wstaw adnotację w formie dymka](/TechDraw_Balloon/pl "TechDraw Balloon/pl"): dodaje na stronie adnotację w _baloniku_.

- ![](/images/TechDraw_AxoLengthDimension.svg) [Wymiar długości w aksonometrii](/TechDraw_AxoLengthDimension/pl "TechDraw AxoLengthDimension/pl"): dodaje aksonometryczny wymiar długości. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_LandmarkDimension.svg) [Wstaw wymiar przestrzenny - opcja EXPERYMENTALNA](/TechDraw_LandmarkDimension/pl "TechDraw LandmarkDimension/pl"): dodaje wymiar dystansu.

- ![](/images/TechDraw_DimensionRepair.svg) [Napraw wymiar](/TechDraw_DimensionRepair/pl "TechDraw DimensionRepair/pl"): może dopasować odniesienia geometrii 2D lub 3D dla wymiaru. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_LinkDimension.svg) [Powiąż wymiar z geometrią 3D](/TechDraw_LinkDimension/pl "TechDraw LinkDimension/pl"): umożliwia połączenie istniejącego wymiaru z geometrią 3D (przestarzałe).

### Kreskowanie

- ![](/images/TechDraw_Hatch.svg) [Kreskowanie powierzchni ...](/TechDraw_Hatch/pl "TechDraw Hatch/pl"): nakłada wzór kreskowania z pliku na ścianę.

- ![](/images/TechDraw_GeometricHatch.svg) [Geometryczne kreskowanie ...](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl"): stosuje wzór kreskowania na powierzchni przy użyciu specyfikacji Autodesk PAT.

### Adnotacje

- ![](/images/TechDraw_Annotation.svg) [Dodaj Adnotację](/TechDraw_Annotation/pl "TechDraw Annotation/pl"): dodaje zwykły blok tekstowy, który służy jako adnotacja.

- ![](/images/TechDraw_LeaderLine.svg) [Dodaj linię odniesienia](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl"): narzędzie dodaje linię odniesienia do wyświetlanego widoku.

- ![](/images/TechDraw_RichTextAnnotation.svg) [Blok tekstu sformatowanego](/TechDraw_RichTextAnnotation/pl "TechDraw RichTextAnnotation/pl"): Narzędzie dodaje blok adnotacji tekstu sformatowanego do [Linii wiodącej](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl") lub widoku.

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj wierzchołki kosmetyczne:

- ![](/images/TechDraw_CosmeticVertex.svg) [Wstaw wierzchołek kosmetyczny](/TechDraw_CosmeticVertex/pl "TechDraw CosmeticVertex/pl"): Narzędzie dodaje wierzchołek, który nie jest częścią geometrii źródłowej.

- ![](/images/TechDraw_Midpoints.svg) [Dodaj wierzchołki punktu środkowego](/TechDraw_Midpoints/pl "TechDraw Midpoints/pl"): Narzędzie Punkty środkowe dodaje Punkty pomocnicze w punktach środkowych jednej lub kilku wybranych krawędzi.

- ![](/images/TechDraw_Quadrants.svg) [Dodaj wierzchołki kwadrantu](/TechDraw_Quadrants/pl "TechDraw Quadrants/pl"): Narzędzie Kwadrant dodaje wierzchołki pomocnicze w punktach ćwiartki jednej lub więcej wybranych krawędzi _(okrągłych)_.

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj oś:

- ![](/images/TechDraw_FaceCenterLine.svg) [Dodaj oś ściany](/TechDraw_FaceCenterLine/pl "TechDraw FaceCenterLine/pl"): Narzędzie Oś ściany dodaje linię środkową do wybranej ściany _(ścian)_.

- ![](/images/TechDraw_2LineCenterLine.svg) [Dodaj oś dwóch krawędzi](/TechDraw_2LineCenterLine/pl "TechDraw 2LineCenterLine/pl"): Narzędzie Oś dwóch krawędzi dodaje linię środkową pomiędzy dwoma krawędziami.

- ![](/images/TechDraw_2PointCenterLine.svg) [Dodaj oś dwóch punktów](/TechDraw_2PointCenterLine/pl "TechDraw 2PointCenterLine/pl"): Narzędzie Oś dwóch punktów dodaje linię środkową pomiędzy 2 punktami.

- ![](/images/TechDraw_2PointCosmeticLine.svg) [Dodaj linię kosmetyczną ...](/TechDraw_2PointCosmeticLine/pl "TechDraw 2PointCosmeticLine/pl"): dodaje linię estetyczną łączącą 2 wierzchołki.

- ![](/images/TechDraw_CosmeticCircle.svg) [Dodaj okrąg kosmetyczny](/TechDraw_CosmeticCircle/pl "TechDraw CosmeticCircle/pl"): dodaje geometrię pomocniczą w postaci okręgu. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_DecorateLine.svg) [Zmień wygląd wybranych linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl"): Narzędzie to zmienia wygląd krawędzi.

- ![](/images/TechDraw_ShowAll.svg) [Pokaż / ukryj niewidoczne krawędzie](/TechDraw_ShowAll/pl "TechDraw ShowAll/pl"): Narzędzie pokazuje / ukrywa niewidoczne krawędzie lub linie w widoku.

- ![](/images/TechDraw_WeldSymbol.svg) [Dodaj informacje spawalnicze](/TechDraw_WeldSymbol/pl "TechDraw WeldSymbol/pl"): Narzędzie dodaje specyfikacje dotyczące spawania do istniejącej linii odniesienia.

- ![](/images/TechDraw_SurfaceFinishSymbols.svg) [Dodaj symbol wykończenia powierzchni](/TechDraw_SurfaceFinishSymbols/pl "TechDraw SurfaceFinishSymbols/pl"): dodaje do strony symbol wykończenia powierzchni. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/TechDraw_HoleShaftFit.svg) [Pasowanie otworu / wału](/TechDraw_HoleShaftFit/pl "TechDraw HoleShaftFit/pl"): dodaje do wymiaru tolerancje otworu lub wałka przy użyciu ISO 286. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Pakiet rozszerzeń

#### Atrybuty i modyfikacje

- ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Wybierz atrybuty linii, odstęp kaskadowy i odległość delta](/TechDraw_ExtensionSelectLineAttributes/pl "TechDraw ExtensionSelectLineAttributes/pl"): wybierz atrybuty _(styl, szerokość i kolor)_ dla nowych linii pomocniczych i linii środkowych oraz określa odstęp kaskadowy i odległość delta.

- ![](/images/TechDraw_ExtensionChangeLineAttributes.svg) [Zmień atrybuty linii](/TechDraw_ExtensionChangeLineAttributes/pl "TechDraw ExtensionChangeLineAttributes/pl"): zmienia wygląd _(styl, szerokość i kolor)_ linii pomocniczych.

- ![](/images/TechDraw_ExtensionExtendLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Zmiana długości linii geometrii pomocniczych:

- ![](/images/TechDraw_ExtensionExtendLine.svg) [Rozciągnij linię](/TechDraw_ExtensionExtendLine/pl "TechDraw ExtensionExtendLine/pl"): przedłuża linie pomocnicze na obu końcach.

- ![](/images/TechDraw_ExtensionShortenLine.svg) [Skróć linię](/TechDraw_ExtensionShortenLine/pl "TechDraw ExtensionShortenLine/pl"): skraca linie pomocnicze na obu końcach.

- ![](/images/TechDraw_ExtensionLockUnlockView.svg) [Zablokuj / odblokuj widok](/TechDraw_ExtensionLockUnlockView/pl "TechDraw ExtensionLockUnlockView/pl"): blokuje / odblokowuje pozycję widoku.

- ![](/images/TechDraw_ExtensionPositionSectionView.svg) [Wyrównaj widok przekroju](/TechDraw_ExtensionPositionSectionView/pl "TechDraw ExtensionPositionSectionView/pl"): wyrównaj widok przekroju ortogonalnie, do widoku źródłowego.

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Wyrównanie wymiarów:

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg) [Wyrównaj ciąg wymiarów poziomych](/TechDraw_ExtensionPosHorizChainDimension/pl "TechDraw ExtensionPosHorizChainDimension/pl"): wyrównuje wymiary poziome, tworząc ciąg wymiarów.

- ![](/images/TechDraw_ExtensionPosVertChainDimension.svg) [Wyrównaj ciąg wymiarów pionowych](/TechDraw_ExtensionPosVertChainDimension/pl "TechDraw ExtensionPosVertChainDimension/pl"): wyrównuje wymiary pionowe, tworząc ciąg wymiarów.

- ![](/images/TechDraw_ExtensionPosObliqueChainDimension.svg) [Wyrównaj ciąg wymiarów ukośnych](/TechDraw_ExtensionPosObliqueChainDimension/pl "TechDraw ExtensionPosObliqueChainDimension/pl"): wyrównuje wymiary ukośne, tworząc ciąg wymiarów.

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Równomierne rozmieszczenie wymiarów:

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg) [Wymiar poziomy kaskadowo](/TechDraw_ExtensionCascadeHorizDimension/pl "TechDraw ExtensionCascadeHorizDimension/pl"): równomiernie rozmieszczone wymiary poziome.

- ![](/images/TechDraw_ExtensionCascadeVertDimension.svg) [Wymiar pionowy kaskadowo](/TechDraw_ExtensionCascadeVertDimension/pl "TechDraw ExtensionCascadeVertDimension/pl"): równomiernie rozmieszczone wymiary pionowe.

- ![](/images/TechDraw_ExtensionCascadeObliqueDimension.svg) [Wymiar ukośny kaskadowo](/TechDraw_ExtensionCascadeObliqueDimension/pl "TechDraw ExtensionCascadeObliqueDimension/pl"): równomiernie rozmieszczone wymiary ukośne.

- ![](/images/TechDraw_ExtensionAreaAnnotation.svg) [Oblicz pole powierzchni wybranych ścian](/TechDraw_ExtensionAreaAnnotation/pl "TechDraw ExtensionAreaAnnotation/pl"): oblicza pole powierzchni wybranych powierzchni i wstawia adnotację z opisem powierzchni.

- ![](/images/TechDraw_ExtensionArcLengthAnnotation.svg) [Oblicz długość łuku dla zaznaczonych krawędzi](/TechDraw_ExtensionArcLengthAnnotation/pl "TechDraw ExtensionArcLengthAnnotation/pl"): oblicza długość łuku na wybranych krawędziach i wstawia adnotację o długości łuku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Dostosuj format etykiety](/TechDraw_ExtensionCustomizeFormat/pl "TechDraw ExtensionCustomizeFormat/pl"): umożliwia dostosowanie formatowania tekstu dymka lub tekstu wymiarowego. Można dodawać symbole GD&T i inne znaki specjalne.

#### Linie środka i gwinty

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj oś otworu:

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg) [Oś otworu](/TechDraw_ExtensionCircleCenterLines/pl "TechDraw ExtensionCircleCenterLines/pl"): dodaje linie środkowe do okręgów i łuków.

- ![](/images/TechDraw_ExtensionHoleCircle.svg) [Osie otworów w okręgu](/TechDraw_ExtensionHoleCircle/pl "TechDraw ExtensionHoleCircle/pl"): dodaje linie środkowe okręgów w szyku koła.

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj geometrię pomocniczą gwintu:

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Geometria pomocnicza dla otworu gwintowanego, widok z boku](/TechDraw_ExtensionThreadHoleSide/pl "TechDraw ExtensionThreadHoleSide/pl"): dodaje linię geometrii pomocniczej do bocznego widoku otworu.

- ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Geometria pomocnicza dla otworu gwintowanego, widok od dołu](/TechDraw_ExtensionThreadHoleBottom/pl "TechDraw ExtensionThreadHoleBottom/pl"): dodaje symbol gwintu do widoku otworów od dołu lub z góry.

- ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Geometria pomocnicza dla gwintu śruby, widok z boku](/TechDraw_ExtensionThreadBoltSide/pl "TechDraw ExtensionThreadBoltSide/pl"): dodaje symbol gwintu do widoku bocznego śruby / nakrętki / pręta gwintowanego.

- ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Geometria pomocnicza dla gwintu śruby, widok od dołu](/TechDraw_ExtensionThreadBoltBottom/pl "TechDraw ExtensionThreadBoltBottom/pl"): dodaje symbol gwintu do widoku od dołu dla śruby / nakrętki / pręta gwintowanego.

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj wierzchołki:

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg) [Utwórz wierzchołki w przecięciu](/TechDraw_ExtensionVertexAtIntersection/pl "TechDraw ExtensionVertexAtIntersection/pl"): tworzy wierzchołki pomocnicze w miejscu przecięcia wybranych krawędzi.

- ![](/images/TechDraw_CommandAddOffsetVertex.svg) [Dodaj wierzchołek odsunięcia](/TechDraw_CommandAddOffsetVertex/pl "TechDraw CommandAddOffsetVertex/pl"): dodaje wierzchołek kosmetyczny w miejscu o określonym przesunięciu od wybranego wierzchołka. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj geometrię pomocniczą okręgu lub łuku:

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg) [Geometria pomocnicza obwodu](/TechDraw_ExtensionDrawCosmCircle/pl "TechDraw ExtensionDrawCosmCircle/pl"): rysuje symboliczną linię obwodu, używając dwóch wierzchołków.

- ![](/images/TechDraw_ExtensionDrawCosmArc.svg) [Geometria pomocnicza łuku](/TechDraw_ExtensionDrawCosmArc/pl "TechDraw ExtensionDrawCosmArc/pl"): rysuje geometrię pomocniczą łuku w kierunku przeciwnym do ruchu wskazówek zegara oparty na trzech wierzchołkach.

- ![](/images/TechDraw_ExtensionDrawCosmCircle3Points.svg) [Geometria pomocnicza okręgu przez trzy punkty](/TechDraw_ExtensionDrawCosmCircle3Points/pl "TechDraw ExtensionDrawCosmCircle3Points/pl"): dodaje geometrię pomocniczą okręgu opartego na trzech wierzchołkach.

- ![](/images/TechDraw_ExtensionLineParallel.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dodaj geometrię pomocniczą linii równoległej lub prostopadłej:

- ![](/images/TechDraw_ExtensionLineParallel.svg) [Rysuj linie równoległą](/TechDraw_ExtensionLineParallel/pl "TechDraw ExtensionLineParallel/pl"): rysuje pomocniczą prostą równoległą do innej prostej, przez wierzchołek.

- ![](/images/TechDraw_ExtensionLinePerpendicular.svg) [Rysuj linię prostopadłą](/TechDraw_ExtensionLinePerpendicular/pl "TechDraw ExtensionLinePerpendicular/pl"): rysuje pomocniczą prostą prostopadłą do innej prostej, przez wierzchołek.

#### Wymiarowanie

Kilka z narzędzi rozszerzeń do wymiarowania jest wymienionych w sekcji [Wymiary](#Dimensions/pl) powyżej.

- ![](/images/TechDraw_ExtensionInsertDiameter.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Wstaw prefiks:

- ![](/images/TechDraw_ExtensionInsertDiameter.svg) [Symbol średnicy "⌀"](/TechDraw_ExtensionInsertDiameter/pl "TechDraw ExtensionInsertDiameter/pl"): wstawia symbol "⌀" na początku tekstu wymiaru.

- ![](/images/TechDraw_ExtensionInsertSquare.svg) [Symbol "□"](/TechDraw_ExtensionInsertSquare/pl "TechDraw ExtensionInsertSquare/pl"): wstawia symbol "□" na początku tekstu wymiaru.

- ![](/images/TechDraw_ExtensionInsertRepetition.svg) [Dodaj przedrostek "n×"](/TechDraw_ExtensionInsertRepetition/pl "TechDraw ExtensionInsertRepetition/pl"): wstawia licznik powtórzonych cech na początku tekstu wymiaru. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/TechDraw_ExtensionRemovePrefixChar.svg) [Usuń symbol wiodący](/TechDraw_ExtensionRemovePrefixChar/pl "TechDraw ExtensionRemovePrefixChar/pl"): usuwa dowolne symbole na początku tekstu wymiaru.

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Zmień ilość miejsc dziesiętnych:

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg) [Zwiększenie dokładności](/TechDraw_ExtensionIncreaseDecimal/pl "TechDraw ExtensionIncreaseDecimal/pl"): zwiększa liczbę miejsc po przecinku.

- ![](/images/TechDraw_ExtensionDecreaseDecimal.svg) [Zmniejszenie dokładności](/TechDraw_ExtensionDecreaseDecimal/pl "TechDraw ExtensionDecreaseDecimal/pl"): zmniejsza liczbę miejsc po przecinku.

### Różne

- ![](/images/TechDraw_CosmeticEraser.svg) [Usuń obiekt kosmetyczny](/TechDraw_CosmeticEraser/pl "TechDraw CosmeticEraser/pl"): Narzędzie to usuwa obiekty kosmetyczne z danej strony.

### Narzędzia przestarzałe

- ![](/images/TechDraw_ClipGroupAdd.svg) [Dodaj widok do grupy wycinków](/TechDraw_ClipGroupAdd/pl "TechDraw ClipGroupAdd/pl"): dodaje istniejący widok do grupy wycinków. Niedostępne w wersja 1.0 i powyżej

- ![](/images/TechDraw_ClipGroupRemove.svg) [Usuń widok z grupy wycinków](/TechDraw_ClipGroupRemove/pl "TechDraw ClipGroupRemove/pl"): usuwa widok z grupy wycinków. Niedostępne w wersja 1.0 i powyżej

- ![](/images/TechDraw_MoveView.svg) [Przenieś widok](/TechDraw_MoveView/pl "TechDraw MoveView/pl"): przenosi widok i jego elementy zależne na inną stronę. Niedostępne w wersja 1.0 i powyżej

## Dodatkowe właściwości

- [Grupy linii](/TechDraw_LineGroup/pl "TechDraw LineGroup/pl"): domyślne wagi można przypisać do różnych typów linii.
- [Szablony](/TechDraw_Templates/pl "TechDraw Templates/pl"): domyślne szablony zdefiniowane dla stron rysunku.
- [Wypełnienie kreskowaniem](/TechDraw_Hatching/pl "TechDraw Hatching/pl"): objaśnienie różnych technik kreskowania.

[Wymiarowanie geometrii i tolerancja](/TechDraw_Geometric_dimensioning_and_tolerancing/pl "TechDraw Geometric dimensioning and tolerancing/pl"): wyjaśnienie, jak osiągnąć wymiarowanie geometrii i tolerancji.

## Ustawienia

- ![](/images/Preferences-techdraw.svg) [Ustawienia](/TechDraw_Preferences/pl "TechDraw Preferences/pl"): ustawienia domyślnych wartości strony rysunku, takich jak kąt projekcji, kolory, rozmiary tekstu i style linii.

## Tworzenie skryptów

Narzędzi środowiska Rysunek Techniczny można używać w [makrodefinicjach](/Macros/pl "Macros/pl") oraz w konsoli [Python](/Python/pl "Python/pl"). Więcej informacji można znaleźć na stronach:

- [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/),
- [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"),
- [Pola tekstowe do edycji](/TechDraw_PageDefault/pl#Pola_tekstowe_do_edycji "TechDraw PageDefault/pl").

## Ograniczenia

- Nie wycinaj, kopiuj i wklejaj obiektów Rysunku Technicznego w okienku [Widoku drzewa](/Tree_view/pl "Tree view/pl"), ponieważ zazwyczaj nie wychodzi to dobrze.
- Nie należy przeciągać obiektów Rysunku Technicznego w okienku [Widoku drzewa](/Tree_view/pl "Tree view/pl") za pomocą myszy.

## Poradniki

- [Poradnik: Podstawy dla Środowiska pracy Rysunek Techniczny](/Basic_TechDraw_Tutorial/pl "Basic TechDraw Tutorial/pl"): wprowadzenie do tworzenia rysunków przy użyciu środowiska pracy Rysunek Techniczny.
- [Rysunek Techniczny: Jak wykonać nowy szablon ramki](/TechDraw_TemplateHowTo/pl "TechDraw TemplateHowTo/pl"): instrukcja tworzenia nowego szablonu strony w programie Inkscape do użycia w środowisku pracy Rysunek Techniczny.

- [Generator szablonów](/TechDraw_TemplateGenerator/pl "TechDraw TemplateGenerator/pl"): instrukcje tworzenia makra do generowania podstawowego szablonu.

: Po dodaniu "kilku" wierszy kodu powstaje narzędzie takie jak [Makro Pomocnik szablonów](/Macro_TemplateHelper/pl "Macro TemplateHelper/pl").

- [Pomiar kątów na otworach](/Measurement_Of_Angles_On_Holes/pl "Measurement Of Angles On Holes/pl"): instrukcje dotyczące dodawania linii centrujących i kolejnych oznaczeń kątowych na otworach.
- [Rozmaitości](/TechDraw_HowTo_Page/pl "TechDraw HowTo Page/pl"): instrukcje dotyczące różnych ustawień, takich jak znaki środka, itp.
- [Tworzenie koła podziałowego](/TechDraw_Pitch_Circle_Tutorial/pl "TechDraw Pitch Circle Tutorial/pl"): instrukcja dodawania koła podziałowego.

Wideo poradniki przygotowane przez użytkownika sliptonic

- Środowisko pracy Rysunek Techniczny [Część 1 _(Podstawy)_](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Część 2 _(Wymiary)_](https://www.youtube.com/watch?v=z3w84RfvqaE), [Część 3 _(Wiele widoków)_](https://www.youtube.com/watch?v=uNjXg-m38aI).
- Środowisko pracy Rysunek Techniczny [Part 4 _(Przekrój i detal)_](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 _(Dostosowanie szablonu)_](https://www.youtube.com/watch?v=kcmdJ7xa7gg).

## Opracowanie i rozwój

Chcesz poznać przyszłość środowiska pracy Rysunek Techniczny? Odwiedź stronę [Mapa rozwoju środowiska Rysunek Techniczny](/index.php?title=TechDraw_Roadmap/pl&action=edit&redlink=1 "TechDraw Roadmap/pl (page does not exist)"), aby dowiedzieć się więcej.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/pl&oldid=1493062>"
