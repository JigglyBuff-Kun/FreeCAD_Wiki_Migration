---
title: Punkty Konwertuj na punkty
---
|  |
| --- |
| Punkty: Konwertuj na punkty |
| Lokalizacja w menu |
| Punkty → Konwertuj na punkty ... |
| Środowisko pracy |
| [Punkty](/Points_Workbench/pl "Points Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Konwertuj na punkty** tworzy chmury punktów z obiektów kształtu lub obiektów siatki.

Obiekt typu kształt oznacza tutaj dowolny obiekt z właściwością DANE**Kształt**. Obiekty utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl") i [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") są obiektami kształtu. Ale podobnie jest z obiektami utworzonymi za pomocą środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") i [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Points_Convert.svg) **Konwertuj na punkty**.
3. Wybierz z menu opcję **Punkty → Konwertuj na punkty ...**.
4. Otworzy się okno dialogowe **Odległość**.
5. Wprowadź wartość **Największa odległość**. Wartość musi mieścić się w przedziale `0,05` - `10.0`.
6. Naciśnij przycisk OK, aby zamknąć okno dialogowe i zakończyć polecenie.

## Właściwości

Obiekty chmury punktów są obiektami typu [Cecha geometrii](/App_GeoFeature/pl "App GeoFeature/pl") z następującymi dodatkowymi właściwościami. Wybierz opcję **Pokaż ukryte** z menu kontekstowego [Edytora właściwości](/Property_editor/pl "Property editor/pl"), aby wyświetlić ukryte właściwości.

### Dane

Podstawa

* DANE (Ukryte)**Punkty** (`PointsKernel`): jądro związane z tym obiektem.
* DANE (Ukryte)**Normalne** (`NormalList`): lista normalnych. Ta właściwość jest dostępna tylko dla chmur punktów utworzonych za pomocą polecenia Konwertuj na punkty z obiektów siatkowych lub obiektów kształtowych ze ścianami.

Punkty strukturalne.

* DANE**Wysokość** (`Integer`): oznacza unikalną liczbę współrzędnej Y w chmurze punktów. Ta właściwość jest dostępna tylko dla chmur punktów utworzonych za pomocą polecenia [Uporządkowana chmura punktów](/Points_Structure/pl "Points Structure/pl").
* DANE**Szerokość** (`Integer`): oznacza unikalną liczbę współrzędnej X w chmurze punktów. Ta właściwość jest dostępna tylko dla chmur punktów utworzonych za pomocą polecenia [Uporządkowana chmura punktów](/Points_Structure/pl "Points Structure/pl").

### Widok

Podstawa

* WIDOK**Rozmiar punktu** (`FloatConstraint`): rozmiar punktów w pikselach w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Convert/pl&oldid=1560961>"