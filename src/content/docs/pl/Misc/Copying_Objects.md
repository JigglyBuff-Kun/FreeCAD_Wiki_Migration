---
title: Kopiowanie obiektów
---
## Informacje ogólne

Podobnie jak wiele innych programów komputerowych FreeCAD posiada możliwość wycinania, kopiowania i wklejania obiektów. Obiekty [dokumentu](/Document_structure/pl "Document structure/pl") mogą być dowolnie kopiowane w obrębie dokumentu lub pomiędzy dokumentami za pomocą funkcji ![](/images/Std_Copy.svg) [Kopiuj](/Std_Copy/pl "Std Copy/pl"), ![](/images/Std_Paste.svg) [Wklej](/Std_Paste/pl "Std Paste/pl") i [Powiel zaznaczone](/Std_DuplicateSelection/pl "Std DuplicateSelection/pl").

![](/images/Copy_past_duplicate.png)

Proszę wziąć pod uwagę, że skopiowane obiekty nie są zależne od oryginału. Jeśli chcesz mieć zależne klony, użyj funkcji ![](/images/Draft_Clone.svg) [Rysunek Roboczy: Klonuj](/Draft_Clone/pl "Draft Clone/pl") lub ![](/images/PartDesign_Clone.svg) [Projekt Części: Utwórz klona](/PartDesign_Clone/pl "PartDesign Clone/pl"). Jeśli nie potrzebujesz ani klonu zależnego, ani repliki parametrycznej, możesz również użyć ![](/images/Part_SimpleCopy.svg) [Część: Szybka kopia](/Part_SimpleCopy/pl "Part SimpleCopy/pl"). Jeśli chodzi o klony wzorcowe, zajrzyj do sekcji [inne metody](#Inne_metody) na tej stronie.

## Kopiowanie obiektów powiązanych

Jeśli obiekt, który ma zostać skopiowany, ma powiązania z obiektem *(obiektami)*, które nie znajdują się w zaznaczeniu, FreeCAD zapyta, czy niewybrane obiekty powinny zostać uwzględnione w operacji kopiowania.

## Znajdowanie i pozycjonowanie wklejonych obiektów

Po operacji kopiuj - wklej może nie być oczywiste, gdzie znajdują się nowe obiekty w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Dzieje się tak, ponieważ nowe obiekty mają tę samą właściwość [Umiejscowienie](/Placement/pl "Placement/pl"), co ich oryginały. Przełącz właściwość Widoczność *(klawiszem Spacja)*, aby ukryć oryginały, a następnie przesuń kopie do ich właściwej pozycji, na przykład używając narzędzia ![](/images/Std_TransformManip.svg) [Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl") lub ![](/images/Std_Placement.svg) [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").

## Inne metody

Podobnie jak w przypadku większości rzeczy w programie FreeCAD, istnieje wiele sposobów utworzenia kopii. Więcej pomysłów znajdziesz na stronach:

* Projekt Części: [Odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"), [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl"), [Szyk kołowy](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl"), [Transformacja wielokrotna](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl")
* Część: [Odbicie lustrzane](/Part_Mirror/pl "Part Mirror/pl"), [Szybka kopia](/Part_SimpleCopy/pl "Part SimpleCopy/pl")
* Rysunek Roboczy: [Odsunięcie](/Draft_Offset/pl "Draft Offset/pl"), [Skaluj](/Draft_Scale/pl "Draft Scale/pl"), [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"), [Klonuj](/Draft_Clone/pl "Draft Clone/pl"), [Odbicie lustrzane](/Draft_Mirror/pl "Draft Mirror/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/pl&oldid=1122528>"