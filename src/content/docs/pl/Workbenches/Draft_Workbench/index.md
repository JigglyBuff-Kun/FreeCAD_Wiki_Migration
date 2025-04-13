---
title: Środowisko pracy Rysunek Roboczy
---

![](/images/Workbench_Draft.svg)

Ikonka FreeCAD dla Środowiska pracy Rysunek Roboczy

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Draft.svg) **Rysunek Roboczy** skupia się przede wszystkim na tworzeniu i modyfikacji obiektów 2D w programie FreeCAD. Nie jest jednak ograniczone do płaszczyzny XY globalnego układu współrzędnych. Jego obiekty mogą mieć dowolną orientację i położenie w przestrzeni, a niektóre obiekty Rysunku Roboczego mogą być zarówno płaskie jak i przestrzenne.

Obiekty Rysunku Roboczego mogą być używane do ogólnego szkicowania, podobnie jak w programie Inkscape lub AutoCAD. Ale mogą one również stanowić podstawę do tworzenia obiektów 3D w innych środowiskach pracy. A [polilinia](/Draft_Wire/pl "Draft Wire/pl") może zdefiniować ścieżkę dla [ściany](/Arch_Wall/pl "Arch Wall/pl") środowiska Architektura, [wielokąt](/Draft_Polygon/pl "Draft Polygon/pl") środowiska Rysunek Roboczy może być wciągany za pomocą funkcji [wyciągnięcia](/Part_Extrude/pl "Part Extrude/pl") środowiska Część, itd. Wiele z [narzędzi modyfikujących](#Modyfikacja) środowiska pracy Rysunek Roboczy może być zastosowanych do obiektów płaskich oraz przestrzennych stworzonych za pomocą innych środowisk pracy. Możesz, na przykład, [przesunąć](/Draft_Move/pl "Draft Move/pl") [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl") lub stworzyć [szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl") z obiektu [Części](/Part_Workbench/pl "Part Workbench/pl").

Środowisko pracy Rysunek Roboczy dostarcza również narzędzi do definiowania [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), [siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl") oraz [systemu przyciągania](/Draft_Snap/pl "Draft Snap/pl") do precyzyjnego sterowania położeniem geometrii.

Jeśli Twoim głównym celem jest tworzenie złożonych rysunków 2D i plików [DXF](/DXF/pl "DXF/pl"), a nie potrzebujesz modelowania 3D, FreeCAD może nie być właściwym wyborem dla Ciebie. Możesz rozważyć zastosowanie dedykowanego programu do tworzenia projektów technicznych, takiego jak [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD), [QCad](https://en.wikipedia.org/wiki/QCad), lub innego.

![](/images/Draft_Workbench_Example.png)

Obrazek przedstawia [siatkę](/Draft_Snap_Grid/pl "Draft Snap Grid/pl") wyrównaną do płaszczyzny XY.  
Po lewej stronie, na biało, kilka obiektów planarnych.  
Po prawej nieplanarny obiekt [polilinii](/Draft_Wire/pl "Draft Wire/pl") użyty jako obiekt ścieżki w [wyciąganiu po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl").

## Kreślenie

- Polecenie ![](/images/Draft_Line.svg) [Linia](/Draft_Line/pl "Draft Line/pl"): tworzy linię prostą.

- Polecenie ![](/images/Draft_Wire.svg) [Polilinia](/Draft_Wire/pl "Draft Wire/pl"): tworzy polilinię, czyli sekwencję kilku połączonych segmentów linii.

- Polecenie ![](/images/Draft_Fillet.svg) [Zaokrąglenie](/Draft_Fillet/pl "Draft Fillet/pl"): tworzy zaokrąglenie, zaokrąglony narożnik, lub fazę, prostą krawędź, pomiędzy dwoma [liniami](/Draft_Line/pl "Draft Line/pl").

- ![](/images/Draft_Arc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Narzędzia łuku:

: \* Polecenie ![](/images/Draft_Arc.svg) [Łuk](/Draft_Arc/pl "Draft Arc/pl"): tworzy łuk kołowy z punktu środka, promienia, kąta początkowego i kąta rozwarcia.

: \* Polecenie ![](/images/Draft_Arc_3Points.svg) [Łuk przez trzy punkty](/Draft_Arc_3Points/pl "Draft Arc 3Points/pl"): tworzy łuk okręgu z trzech punktów, które definiują jego przebieg.

- Polecenie ![](/images/Draft_Circle.svg) [Okrąg](/Draft_Circle/pl "Draft Circle/pl"): tworzy okrąg na podstawie środka i promienia.

- Polecenie ![](/images/Draft_Ellipse.svg) [Ellipsa](/Draft_Ellipse/pl "Draft Ellipse/pl"): tworzy elipsę z dwóch punktów definiujących prostokąt, w którym elipsa będzie wpisana.

- Polecenie ![](/images/Draft_Rectangle.svg) [Prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl"): tworzy prostokąt z dwóch punktów.

- Polecenie ![](/images/Draft_Polygon.svg) [Wielokąt](/Draft_Polygon/pl "Draft Polygon/pl"): tworzy wielokąt foremny o zadanym punkcie środkowym i promieniu.

- Polecenie ![](/images/Draft_BSpline.svg) [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl"): tworzy krzywą złożoną z kilku punktów.

- ![](/images/Draft_CubicBezCurve.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Narzędzia Béziera:

: \* Polecenie ![](/images/Draft_CubicBezCurve.svg) [Sześcienna krzywa Béziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl"): tworzy krzywą Béziera trzeciego stopnia.

: \* Polecenie ![](/images/Draft_BezCurve.svg) [Krzywa Béziera](/Draft_BezCurve/pl "Draft BezCurve/pl"): tworzy krzywą Béziera z kilku punktów.

- Polecenie ![](/images/Draft_Point.svg) [Punkt](/Draft_Point/pl "Draft Point/pl"): tworzy zwykły punkt.

- Polecenie ![](/images/Draft_Facebinder.svg) [Łącznik kształtu](/Draft_Facebinder/pl "Draft Facebinder/pl"): tworzy obiekt powierzchni z wybranych ścian.

- Polecenie ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl"): tworzy kształt złożony, który reprezentuje ciąg tekstowy.

- ![](/images/Draft_Hatch.svg) [Kreskowanie](/Draft_Hatch/pl "Draft Hatch/pl"): tworzy kreskowanie na planarnych powierzchniach wybranego obiektu.

## Adnotacja

- ![](/images/Draft_Text.svg) [Adnotacja wieloliniowa](/Draft_Text/pl "Draft Text/pl"): tworzy wielowierszowy obiekt tekstu w zadanym punkcie.

- ![](/images/Draft_Dimension.svg) [Wymiarowanie](/Draft_Dimension/pl "Draft Dimension/pl"): tworzy wymiar liniowy, wymiar kątowy lub wymiar promieniowy.

- ![](/images/Draft_Label.svg) [Etykieta](/Draft_Label/pl "Draft Label/pl"): tworzy tekst wielowierszowy z dwu-segmentową linią wiodącą i strzałką.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Edytor stylów adnotacji](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl"): pozwala zdefiniować style, które wpływają na właściwości wizualne obiektów związanych z adnotacjami.

## Modyfikacja

- ![](/images/Draft_Move.svg) [Przesuń](/Draft_Move/pl "Draft Move/pl"): przesuwa lub kopiuje wybrane obiekty z jednego punktu do drugiego.

- ![](/images/Draft_Rotate.svg) [Obróć](/Draft_Rotate/pl "Draft Rotate/pl"): obraca lub kopiuje wybrane obiekty wokół punktu środka o zadany kąt.

- ![](/images/Draft_Scale.svg) [Skaluj](/Draft_Scale/pl "Draft Scale/pl"): skaluje lub kopiuje wybrane obiekty wokół punktu bazowego.

- ![](/images/Draft_Mirror.svg) [Odbicie lustrzane](/Draft_Mirror/pl "Draft Mirror/pl"): tworzy kopie w odbiciu lustrzanym z wybranych obiektów.

- ![](/images/Draft_Offset.svg) [Odsunięcie](/Draft_Offset/pl "Draft Offset/pl"): odsuwa każdy segment wybranego obiektu o zadaną odległość lub tworzy przesuniętą kopię wybranego obiektu.

- ![](/images/Draft_Trimex.svg) [Przytnij](/Draft_Trimex/pl "Draft Trimex/pl"): przycina lub wydłuża wybrany obiekt.

- ![](/images/Draft_Stretch.svg) [Rozciągnij](/Draft_Stretch/pl "Draft Stretch/pl"): rozciąga obiekty poprzez przesuwanie wybranych punktów.

- ![](/images/Draft_Clone.svg) [Klonuj](/Draft_Clone/pl "Draft Clone/pl"): tworzy połączone kopie, klony wybranych obiektów.

- ![](/images/Draft_OrthoArray.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Narzędzia szyku:

- ![](/images/Draft_OrthoArray.svg) [Szyk](/Draft_OrthoArray/pl "Draft OrthoArray/pl"): tworzy szyk ortogonalny z wybranego obiektu. Opcjonalnie może utworzyć również szyk [powiązań](/App_Link/pl "App Link/pl").

- ![](/images/Draft_PolarArray.svg) [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"): tworzy szyk z wybranego obiektu poprzez umieszczenie kopii wzdłuż obwodu. Opcjonalnie może utworzyć szyk [powiązań](/App_Link/pl "App Link/pl").

- ![](/images/Draft_CircularArray.svg) [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"): tworzy szyk z wybranego obiektu poprzez umieszczenie kopii wzdłuż obwodu okręgu. Opcjonalnie może utworzyć szyk [powiązań](/App_Link/pl "App Link/pl").

- ![](/images/Draft_PathArray.svg) [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"): tworzy szyk z wybranego obiektu poprzez umieszczenie kopii wzdłuż ścieżki.

- ![](/images/Draft_PathLinkArray.svg) [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl"): podobnie, ale utwórz szyk [powiązań](/App_Link/pl "App Link/pl") zamiast zwykłego szyku.

- ![](/images/Draft_PointArray.svg) [Szyk z punktów](/Draft_PointArray/pl "Draft PointArray/pl"): tworzy szyk z wybranego obiektu poprzez umieszczenie kopii w punktach ze zbioru punktów.

- ![](/images/Draft_PointLinkArray.svg) [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl"): podobnie, ale utwórz szyk [powiązań](/App_Link/pl "App Link/pl") zamiast zwykłego szyku.

- ![](/images/Draft_Edit.svg) [Edycja](/Draft_Edit/pl "Draft Edit/pl"): umieszcza wybrane obiekty w trybie edycji szkicu. W tym trybie właściwości obiektów mogą być edytowane graficznie.

- ![](/images/Draft_SubelementHighlight.svg) [Podświetl element podrzędny](/Draft_SubelementHighlight/pl "Draft SubelementHighlight/pl"): tymczasowo podświetla wybrane obiekty lub obiekty bazowe wybranych obiektów.

- ![](/images/Draft_Join.svg) [Połącz](/Draft_Join/pl "Draft Join/pl"): łączy [linie](/Draft_Line/pl "Draft Line/pl") oraz [polilinie](/Draft_Wire/pl "Draft Wire/pl") w pojedynczą polilinię.

- ![](/images/Draft_Split.svg) [Rozdziel](/Draft_Split/pl "Draft Split/pl"): dzieli [Linie](/Draft_Line/pl "Draft Line/pl") lub [polilinie](/Draft_Wire/pl "Draft Wire/pl") w określonym punkcie lub krawędzi.

- ![](/images/Draft_Upgrade.svg) [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl"): aktualizuje wybrane obiekty.

- ![](/images/Draft_Downgrade.svg) [Rozbij obiekt na elementy](/Draft_Downgrade/pl "Draft Downgrade/pl"): powoduje redukcję stopnia zaawansowania wybranych obiektów.

- ![](/images/Draft_WireToBSpline.svg) [Polilinia na krzywą złożoną](/Draft_WireToBSpline/pl "Draft WireToBSpline/pl"): konwertuje [polilinię](/Draft_Wire/pl "Draft Wire/pl") na [krzywą złożoną](/Draft_BSpline/pl "Draft BSpline/pl") i vice versa.

- ![](/images/Draft_Draft2Sketch.svg) [Rysunek roboczy do szkicu](/Draft_Draft2Sketch/pl "Draft Draft2Sketch/pl"): konwertuje obiekt rysunek roboczy na [szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") środowiska Szkicownik, oraz vice versa.

- ![](/images/Draft_Slope.svg) [Nachylenie](/Draft_Slope/pl "Draft Slope/pl"): powoduje nachylenie wybranych [linii](/Draft_Line/pl "Draft Line/pl") lub [polilinii](/Draft_Wire/pl "Draft Wire/pl") poprzez zwiększenie lub zmniejszenie współrzędnej Z, dla wszystkich punktów po pierwszym.

- ![](/images/Draft_FlipDimension.svg) [Obróć wymiar](/Draft_FlipDimension/pl "Draft FlipDimension/pl"): obraca tekst wymiaru dla wybranych [wymiarów](/Draft_Dimension/pl "Draft Dimension/pl") o 180° wokół linii wymiaru.

- ![](/images/Draft_Shape2DView.svg) [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl"): tworzy rzuty 2D z wybranych obiektów.

## Tacka narzędziowa

Tacka narzędziowa środowiska [Rysunek Roboczy](/Draft_Tray/pl "Draft Tray/pl") pojawia się po uruchomieniu stołu warsztatowego i umożliwia definiowanie ustawień stylu, przełączanie trybu konstrukcji i określanie aktywnej warstwy lub grupy.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_tray_button_plane.png) [Bieżąca płaszczyzna robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl"): definiuje bieżącą płaszczyznę roboczą Rysunku Roboczego. Funkcja dostępna jest również w menu: **Narzędzia → ![](/images/Draft_SelectPlane.svg) Wybierz płaszczyznę**.

- ![](/images/Draft_tray_button_style.png) [Ustaw styl](/Draft_SetStyle/pl "Draft SetStyle/pl"): ustawia domyślny styl dla nowych obiektów. Dostępne również w menu: **Rysunek Roboczy → Narzędzia → ![](/images/Draft_SetStyle.svg) Ustaw styl**.

- ![](/images/Draft_tray_button_construction.png) [Przełącz tryb konstrukcyjny](/Draft_ToggleConstructionMode/pl "Draft ToggleConstructionMode/pl"): włącza lub wyłącza tryb konstrukcji szkicu. Dostępne również w menu: **Rysunek Roboczy → Narzędzia → ![](/images/Draft_ToggleConstructionMode.svg) Przełącz tryb konstrukcyjny**.

- ![](/images/Draft_tray_button_layer.png) [Grupowanie automatyczne](/Draft_AutoGroup/pl "Draft AutoGroup/pl"): zmienia aktywną [warstwę](/Draft_Layer/pl "Draft Layer/pl") lub, opcjonalnie, aktywną [grupę](/Std_Group/pl "Std Group/pl") lub grupę obiektów [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

## Widżet skali adnotacji

Za pomocą widżetu [skali adnotacji](/Draft_annotation_scale_widget/pl "Draft annotation scale widget/pl") można określić skalę wyświetlanej adnotacji.

![](/images/Draft_annotation_scale_widget_button.png)

## Widżet przyciągania

Widżet [przyciągania](/Draft_snap_widget/pl "Draft snap widget/pl") może być używany jako alternatywa dla [paska narzędzi przyciągania](#Pasek_narz.C4.99dzi_Rysunek_roboczy:_Przyci.C4.85gnij).

![](/images/Draft_snap_widget_button.png)

## Pasek narzędzi Rysunek roboczy: Przyciągnij

Pasek narzędzi Rysunek Roboczy: Przyciągnij, umożliwia wybór aktywnych opcji przyciągania. Przyciski należące do aktywnych opcji pozostają wciśnięte. Ogólne informacje na temat przyciągania zobacz: [Rysunek roboczy: Przyciągnij](/Draft_Snap/pl "Draft Snap/pl").

- ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl"): przełącza globalnie [przyciąganie](/Draft_Snap/pl "Draft Snap/pl") obiektów na włączone lub wyłączone.

- ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl"): przyciąga do punktów końcowych odcinków lub krawędzi.

- ![](/images/Draft_Snap_Midpoint.svg) [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"): przyciąga do punktu środkowego krawędzi.

- ![](/images/Draft_Snap_Center.svg) [Przyciągnij do środka](/Draft_Snap_Center/pl "Draft Snap Center/pl"): przyciąga do punktu środkowego powierzchni i krawędzi kołowych, a także do punktu DANE**Umiejscowienia** [Pośrednia płaszczyzna robocza](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl") i [Architektura: Część budowli - piętro](/Arch_BuildingPart/pl "Arch BuildingPart/pl").

- ![](/images/Draft_Snap_Angle.svg) [Przyciągnij do kąta](/Draft_Snap_Angle/pl "Draft Snap Angle/pl"): przyciąga do specjalnych punktów odniesienia okręgów i łuków, przy wielokrotnościach 30° i 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Przyciągnij do punktu przecięcia](/Draft_Snap_Intersection/pl "Draft Snap Intersection/pl"): przyciąga do przecięcia dwóch krawędzi.

- ![](/images/Draft_Snap_Perpendicular.svg) [Przyciągnij prostopadle](/Draft_Snap_Perpendicular/pl "Draft Snap Perpendicular/pl"): przyciąga prostopadle do ostatniego punktu na ścianie _([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))_ oraz krawędzi.

- ![](/images/Draft_Snap_Extension.svg) [Przyciągnij na wydłużeniu](/Draft_Snap_Extension/pl "Draft Snap Extension/pl"): przyciąga do umownej linii, która rozciąga się poza punkty końcowe odcinka.

- ![](/images/Draft_Snap_Parallel.svg) [Przyciągnij równolegle](/Draft_Snap_Parallel/pl "Draft Snap Parallel/pl"): przyciąga do umownej linii równoległej do odcinka linii.

- ![](/images/Draft_Snap_Special.svg) [Przyciągnij specjalnie](/Draft_Snap_Special/pl "Draft Snap Special/pl"): przyciąga na punktach specjalnych zdefiniowanych przez obiekt.

- ![](/images/Draft_Snap_Near.svg) [Przyciągnij do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl"): przyciąga do najbliższego punktu oraz krawędzi najbliższego obiektu.

- ![](/images/Draft_Snap_Ortho.svg) [Przyciągnij ortogonalnie](/Draft_Snap_Ortho/pl "Draft Snap Ortho/pl"): przyciąga na umownych liniach, które przecinają ostatni punkt pod wielokrotnością kąta 45°.

- ![](/images/Draft_Snap_Grid.svg) [Przyciągnij do siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl"): przyciąga na przecięciach linii siatki.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Przyciągnij do płaszczyzny roboczej](/Draft_Snap_WorkingPlane/pl "Draft Snap WorkingPlane/pl"): zawsze umieszcza przyciągane punkty na aktualnej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

- ![](/images/Draft_Snap_Dimensions.svg) [Przyciągnij do wymiaru](/Draft_Snap_Dimensions/pl "Draft Snap Dimensions/pl"): prezentuje tymczasowe wymiary X i Y podczas przyciągania.

- ![](/images/Draft_ToggleGrid.svg) [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl"): włącza lub wyłącza widoczność siatki.

### Pasek narzędzi użytkowych

- ![](/images/Draft_LayerManager.svg) [Zarządzaj warstwami ...](/Draft_LayerManager/pl "Draft LayerManager/pl"): Umożliwia zarządzanie warstwami w dokumencie. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/Draft_AddNamedGroup.svg) [Nowa grupa o nazwie](/Draft_AddNamedGroup/pl "Draft AddNamedGroup/pl"): tworzy nazwaną [Grupę](/Std_Group/pl "Std Group/pl") i dodaje obiekty do tej grupy.

- ![](/images/Draft_SelectGroup.svg) [Wybierz grupę](/Draft_SelectGroup/pl "Draft SelectGroup/pl"): wybiera zawartość [warstwy](/Draft_Layer/pl "Draft Layer/pl"), [Grupy](/Std_Group/pl "Std Group/pl") lub obiektów zbliżone do grupy [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

- ![](/images/Draft_AddToLayer.svg) [Dodaj do warstwy...](/Draft_AddToLayer/pl "Draft AddToLayer/pl"): dodaje obiekty do warstwy lub usuwa je z dowolnej warstwy. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

- ![](/images/Draft_AddToGroup.svg) [Dodaj do grupy](/Draft_AddToGroup/pl "Draft AddToGroup/pl"): dodaje obiekt do określonej [Grupy](/Std_Group/pl "Std Group/pl"). Może również usuwać grupy obiektów.

- ![](/images/Draft_AddConstruction.svg) [Dodaj do grupy konstrukcyjnej](/Draft_AddConstruction/pl "Draft AddConstruction/pl"): dodaje obiekty do [trybu konstrukcji](/Draft_ToggleConstructionMode/pl "Draft ToggleConstructionMode/pl").

- ![](/images/Draft_ToggleDisplayMode.svg) [Przełącz tryb wyświetlania](/Draft_ToggleDisplayMode/pl "Draft ToggleDisplayMode/pl"): przełącza WIDOK**Tryb wyświatlania** właściwości wybranych obiektów pomiędzy `cieniowany z krawędziami` oraz `szkielet`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Pośrednia płaszczyzna robocza](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl"): tworzy zastępczą płaszczyznę roboczą, aby zapisać bieżącą [płaszczyznę robocza projektu](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

## Dodatkowe narzędzia

Menu środowiska Rysunek Roboczy **Narzędzia** zawiera kilka narzędzi. Większość z nich jest dostępna również z pasków narzędziowych i została już wymieniona powyżej. W przypadku poniższych narzędzi nie jest to regułą.

- ![](/images/Draft_ApplyStyle.svg) [Zastosuj bieżący styl](/Draft_ApplyStyle/pl "Draft ApplyStyle/pl"): stosuje bieżące ustawienia stylu do wybranych obiektów.

- ![](/images/Draft_Layer.svg) [Nowa warstwa](/Draft_Layer/pl "Draft Layer/pl"): tworzy [warstwę](/Draft_Layer/pl "Draft Layer/pl") środowiska Rysunek Roboczy.

- ![](/images/Draft_Heal.svg) [Uleczenie](/Draft_Heal/pl "Draft Heal/pl"): leczy problematyczne obiekty Rysunku Roboczego znajdujące się w bardzo starych plikach.

- ![](/images/Draft_ShowSnapBar.svg) [Pokaż przybornik przyciągania](/Draft_ShowSnapBar/pl "Draft ShowSnapBar/pl"): wyświetla [pasek narzędzi przyciągania](#Pasek_narz.C4.99dzi_Rysunek_roboczy:_Przyci.C4.85gnij).

## Dodatkowe właściwości

- [Płaszczyzna robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl"): Umożliwia wybranie powierzchni w oknie [widoku 3D](/3D_view "3D view"), na której można budować swoje kształty.
- [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl"): Pozwala wybierać dokładne punkty geometryczne na, lub zdefiniowane przez, istniejące obiekty lub siatkę.
- [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl"): Dla każdego kolejnego punktu można ograniczyć ruch kursora do kierunku X, Y lub Z.
- [Tryb konstrukcji](/Draft_ToggleConstructionMode/pl "Draft ToggleConstructionMode/pl"): Umieszcza nowe obiekty Rysunku Roboczego w dedykowanej grupie, ułatwiając ich ukrywanie lub usuwanie.
- [Wzór](/Draft_Pattern/pl "Draft Pattern/pl"): Obiekty Rysunku Roboczego z właściwością DANE**Utwórz ścianę** mogą wyświetlać wzór SVG zamiast jednolitego koloru ściany.

## Menu kontekstowe widoku drzewa

W menu kontekstowym [Widoku drzewa](/Tree_view/pl "Tree view/pl") dostępne są następujące dodatkowe opcje:

### Opcje domyślne

Dla większości obiektów Rysunku Roboczego dostępna jest następująca opcja:

- Edycja: edytuje obiekt. W zależności od typu obiektu używana jest albo funkcja [Edytuj](/Draft_Edit/pl "Draft Edit/pl") albo dedykowane rozwiązanie edycyjne. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Jeśli istnieje aktywny dokument, menu kontekstowe zawiera dodatkowe menu podrzędne:

- Narzędzia: podzbiór narzędzi dostępnych w głównym menu Narzędzia Rysunku Roboczego.

### Opcje kontenera warstw

Dla narzędzi [Kontenera warstw](/Draft_Layer/pl "Draft Layer/pl") dostępne są te dodatkowe opcje:

- ![](/images/Draft_Layer.svg) [Scal duplikaty warstw](/Draft_Layer/pl#Opcje_kontenera_warstw "Draft Layer/pl"): łączy wszystkie warstwy z tą samą etykietą bazową.

- ![](/images/Draft_NewLayer.svg) [Warstwa](/Draft_Layer/pl#Opcje_kontenera_warstw "Draft Layer/pl"): dodaje nową warstwę do bieżącego dokumentu.

### Opcje warstw

Dla narzędzi [Warstw](/Draft_Layer/pl "Draft Layer/pl") dostępne są te dodatkowe opcje:

- ![](/images/Button_right.svg) [Grupowanie automatyczne](/Draft_AutoGroup/pl "Draft AutoGroup/pl"): aktywuje wybraną warstwę.

- ![](/images/Draft_SelectGroup.svg) [Wybierz grupę](/Draft_SelectGroup/pl "Draft SelectGroup/pl"): zaznacza obiekty znajdujące się wewnątrz wybranej warstwy.

### Opcje tekstu

Dla [tekstów](/Draft_Text/pl "Draft Text/pl") i [etykiet](/Draft_Label/pl "Draft Label/pl"), które zawierają jeden lub więcej hiperłączy do lokalnego lub zdalnego pliku lub adresu URL, dostępna jest ta dodatkowa opcja:

- Otwórz hiperłącza: hiperłącza są otwierane w odpowiedniej aplikacji _(zdefiniowanej przez system operacyjny)_. W przypadku wielu hiperłączy pojawia się ostrzeżenie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

### Opcje polilinii

Ta dodatkowa opcja jest dostępna dla [linii](/Draft_Line/pl "Draft Line/pl"), [polilinii](/Draft_Wire/pl "Draft Wire/pl"),:

- ![](/images/Draft_Edit.svg) Spłaszcz tę polilinię: spłaszcza polilinię na bieżącej [Płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"). Ta opcja nie działa poprawnie w wersja 0.19 i poniżej.

### Opcje tymczasowej płaszczyzny roboczej

Dla narzędzi [Pośredniej płaszczyzny roboczej](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl") dostępne są te dodatkowe opcje:

- ![](/images/Draft_SelectPlane.svg) [Zapisz ujęcie widoku](/Draft_WorkingPlaneProxy/pl#Menu_podr.C4.99czne "Draft WorkingPlaneProxy/pl"): aktualizuje właściwość WIDOK**Dane widoku** pośrednika płaszczyzny roboczej o bieżące ustawienia ujęcia widoku okna [widoku 3D](/3D_view/pl "3D view/pl").

- ![](/images/Draft_SelectPlane.svg) [Zapisz stan obiektów](/Draft_WorkingPlaneProxy/pl#Menu_podr.C4.99czne "Draft WorkingPlaneProxy/pl"): aktualizuje właściwość WIDOK**Mapa widoczności** pośrednika płaszczyzny roboczej z aktualnym stanem widoczności obiektów w dokumencie.

## Menu kontekstowe okna widoku 3D

W menu kontekstowym okna [widoku 3D](/3D_view/pl "3D view/pl") dostępne są następujące dodatkowe opcje:

### Opcje domyślne

Jeśli istnieje aktywny dokument, menu kontekstowe zawiera jedno dodatkowe menu podrzędne:

- Narzędzia: podzbiór narzędzi dostępnych w głównym menu Narzędzia Rysunku Roboczego.

### Opcje tekstu

Zobacz akapit [Opcje tekstu](#Opcje_tekstu).

## Narzędzia przestarzałe

- ![](/images/Draft_Array.svg) [Utwórz szyk](/Draft_Array/pl "Draft Array/pl"): tworzy ortogonalną tablicę z wybranego obiektu. Utworzona tablica może zostać przekształcona w [szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl") lub [szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl") poprzez zmianę jej właściwości DANE**Typ szyku**. Niedostępne wersja 0.21 i powyżej.

- ![](/images/Draft_Drawing.svg) [Projekt rysunku](/Draft_Drawing/pl "Draft Drawing/pl"): wstawia widoki obiektów na stronie środowiska [Rysunek Roboczy](/Drawing_Workbench/pl "Drawing Workbench/pl"). Niedostępne wersja 0.21 i powyżej.

- ![](/images/Draft_ToggleContinueMode.svg) [Przełącz tryb kontynuacji](/Draft_ToggleContinueMode/pl "Draft ToggleContinueMode/pl"): włącza lub wyłącza tryb kontynuacji. Nie dostępne w wersja 1.0 i powyżej.

## Ustawienia

- ![](/images/Preferences-draft.svg) [Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl"): ogólne ustawienia dla środowiska pracy Rysunek Roboczy.

- ![](/images/Preferences-import-export.svg) [Ustawienia Importu i Eksportu](/Import_Export_Preferences/pl "Import Export Preferences/pl"): Ustawienia dostępne dla importu i eksportu do różnych formatów plików.

### Formaty plików

Środowisko pracy Rysunek Roboczy dostarcza programowi FreeCAD narzędzia do importu i eksportu dla kilku formatów plików. Są one używane przez polecenia [Import](/Std_Import/pl "Std Import/pl") i [Eksport](/Std_Export/pl "Std Export/pl").

- [Autodesk .DXF](/Draft_DXF/pl "Draft DXF/pl"): Import i eksport plików [Drawing Exchange Format](http://en.wikipedia.org/wiki/AutoCAD_DXF) utworzonych za pomocą aplikacji 2D CAD. Zobacz również [FreeCAD i import DXF](/FreeCAD_and_DXF_Import/pl "FreeCAD and DXF Import/pl").
- [Autodesk .DWG](/Draft_DXF/pl "Draft DXF/pl"): Import i eksport plików DWG przez zewnętrzny konwerter DXF. Zobacz również [FreeCAD i import DWG](/FreeCAD_and_DWG_Import/pl "FreeCAD and DWG Import/pl").
- [Scalable Vector Graphics .SVG](/Draft_SVG/pl "Draft SVG/pl"): Import i eksport plików [Scalable Vector Graphics](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) utworzonych za pomocą aplikacji do rysowania wektorowego.
- [Open Cad format .OCA](/Draft_OCA/pl "Draft OCA/pl"): Import i eksport plików [OCA/GCAD](http://groups.google.com/group/open_cad_format).
- [Airfoil Data Format .DAT](/Draft_DAT/pl "Draft DAT/pl"): Import plików DAT opisujących profil Airfoil.

## Testy jednostkowe

Zobacz również: [Środowisko pracy Test](/Testing/pl "Testing/pl")

Aby przeprowadzić testy jednostek w środowisku pracy, należy wykonać następujące czynności z terminala systemu operacyjnego:

```
freecad -t TestDraft

```

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Środowisko pracy zawiera moduł do tworzenia przykładów wszystkich obiektów w nowym dokumencie.

Użyj tego, aby sprawdzić, czy wszystkie obiekty są prawidłowo utworzone:

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

Sprawdzenie kodu tego modułu jest pomocne, aby zrozumieć interfejs programowania.

## Poradniki

- [Poradnik dla Środowiska pracy Draft](/Draft_tutorial/pl "Draft tutorial/pl")
- [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/pl&oldid=1547590>"
