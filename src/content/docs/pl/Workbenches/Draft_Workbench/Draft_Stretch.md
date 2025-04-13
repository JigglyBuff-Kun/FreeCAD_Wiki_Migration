---
title: Rysunek Roboczy Rozciągnij
---
|  |
| --- |
| Rysunek Roboczy: Rozciągnij |
| Lokalizacja w menu |
| Modyfikacja → Rozciągnij |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| S H |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Stretch.svg) **Rozciągnij** rozciąga obiekty, przesuwając wybrane punkty.

![](/images/Draft_Stretch_Example.jpg)

Rozciąganie trzech linii.

## Użycie

Zobacz także strony: [Rysunek Roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") i [Rysunek Roboczy: Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Opcjonalnie wybierz jeden lub więcej obiektów. Obiekty muszą być [liniami](/Draft_Line/pl "Draft Line/pl"), [poliliniami](/Draft_Wire/pl "Draft Wire/pl"), [prostokątami](/Draft_Rectangle/pl "Draft Rectangle/pl"), [krzywymi złożonymi](/Draft_BSpline/pl "Draft BSpline/pl") lub [krzywymi Béziera](/Draft_BezCurve/pl "Draft BezCurve/pl"). Inne obiekty są ignorowane.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Stretch.svg) **Rozciągnij**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję z menu **Modyfikacja → ![](/images/Draft_Stretch.svg) Rozciągnij**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Stretch.svg) Rozciągnij** z menu.
   * Użyj skrótu klawiaturowego: S, a następnie H.
3. Jeśli obiekt nie został jeszcze wybrany: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Otworzy się panel zadań **Rozciągnij**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
5. Wybierz pierwszy punkt, jeden z rogów prostokątnego obszaru zaznaczenia, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
6. Wybierz drugi punkt, przeciwległy narożnik obszaru zaznaczenia, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
7. Punkty wybranych obiektów, które znajdują się wewnątrz obszaru zaznaczenia, zostaną zaznaczone.
8. Wybierz trzeci punkt, punkt bazowy, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg). Wprowadź punkt.
9. Wybierz czwarty punkt, punkt docelowy, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z i naciśnij Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view "3D view") przed wprowadzeniem współrzędnych.
* Wciśnij R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne drugiego punktu przesunięcia są względne do pierwszego punktu, w przeciwnym razie są one względne do początku układu współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij Esc lub przycisk Zamknij, aby przerwać polecenie.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Nie ma metody Python do rozciągania obiektów. Aby naśladować wyniki polecenia **Rozciągnij**, należy zmodyfikować właściwości geometryczne obiektów.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Stretch/pl&oldid=1513681>"