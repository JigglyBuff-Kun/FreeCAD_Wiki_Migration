---
title: FCGear Koło zębate koronowe
---

|                                                                             |
| --------------------------------------------------------------------------- |
| FCGear: Koło zębate koronowe                                                |
| Lokalizacja w menu                                                          |
| Gear → Koło zębate koronowe                                                 |
| Środowisko pracy                                                            |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl")                        |
| Domyślny skrót                                                              |
| Brak                                                                        |
| Wprowadzono w wersji                                                        |
| v0.16                                                                       |
| Zobacz także                                                                |
| [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl "FCGear InvoluteGear/pl") |
|                                                                             |

## Opis

Koło koronowe przypomina zakrzywiony pierścień. Kąt nacisku zmniejsza się w sposób ciągły od średnicy zewnętrznej do wewnętrznej. W ten sposób zmienna prędkość obwodowa koła koronowego jest kompensowana stałą prędkością obwodową zębnika. Spiczaste zęby zewnętrzne i strome boki zębów na średnicy wewnętrznej ograniczają użyteczną szerokość zębów. Przekładnie koronowe osiągają podobną sprawność jak przekładnie czołowe. Jedno koło koronowe może napędzać kilka zębników.

Znany zakres zastosowań przekładni koronowych:

- Napędy tylnej osi samochodów i motocykli.
- Mechanizm obrotowy do stołów operacyjnych.
- Głowice frezarskie kątowe.
- Napędzane systemy narzędziowe z wieloma zębnikami i przekładnią koronową.

![](/images/Crown-Gear_example.png)

Powyżej: Przekładnia koronowa.

## Użycie

1. Przełącz się na środowisko pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk na pasku narzędzi ![](/images/FCGear_CrownGear.svg) Koło zębate koronowe.
   - Wybierz opcję z menu **Gear → ![](/images/FCGear_CrownGear.svg) Koło zębate koronowe**.
3. Przekładnia koronowa jest domyślnie wyświetlana bez zębów. ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))
4. Zmień parametry koła zębatego na wymagane _(zobacz akapit [Właściwości](#Właściwości))_.
5. Ustaw wartość właściwości DANE**Tryb_podglądu** na `Fałsz`, aby wyświetlić zęby _(patrz [Uwagi](#Uwagi))_.

## Właściwości

Obiekt Koło zębate koronowe wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dokładność

- DANE**Ilość_profili** (`Integer`): Wartością domyślną jest `4`. Liczba profili używanych dla wyciągnięcia przez profile.
- DANE**Tryb_podglądu** (`Bool`): Wartością domyślną jest `Prawda`.

Podstawowe

- DANE**Wysokość** (`Length`): Wartością domyślną jest `2 mm`. Wartość dla szerokości zęba.
- DANE**Moduł** (`Length`): Wartością domyślną jest `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów (patrz [Uwagi](#Uwagi)).
- DANE**other_teeth** (`Integer`): Wartością domyślną jest `15`. Liczba zębów przekładni konstrukcyjnej _(zębnika)_ _(patrz [Uwagi](#Uwagi))_.
- DANE**zęby** (`Integer`): Wartością domyślną jest `15`. Liczba zębów.
- DANE**grubość** (`Length`): Wartością domyślną jest `5 mm`. Wysokość od wierzchołka zęba do dolnej części koła koronowego.

Ewolwenta

- DANE**kąt_natarcia** (`Angle`): Wartością domyślną jest `20 °` _(patrz sekcja [Uwagi](#Uwagi))_.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- Właściwość DANE**tryb_podglądu** jest domyślnie ustawiona na `Prawda`, a po utworzeniu koła zębatego w widoku raportu pojawi się ten komunikat:

  : _Środowisko pracy Gear: Utworzono koło zębate koronowe, tryb podglądu = `Prawda` dla lepszej wydajności. Ustaw właściwość tryb podglądu na false, gdy będziesz gotowy do wycięcia zębów._

- _moduł_: Korzystając z wytycznych ISO _(Międzynarodowej Organizacji Normalizacyjnej)_, rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów koła zębatego. Moduł (m): m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Jeśli pomnożymy moduł przez Pi, otrzymamy Skok (p). Pitch to odległość między odpowiednimi punktami na sąsiednich zębach.
- _inne_zęby_: Na jednym kole koronowym można użyć kilku zębników o tej samej liczbie zębów.
- _pressure_parameter_: Parametr można zmienić tylko wtedy, gdy dostępna jest wystarczająca wiedza na temat geometrii koła zębatego.
- Geometria koła koronowego jest przede wszystkim określona przez geometrię zębnika czołowego (_inne_zęby_).
- Utwórz koło zębate czołowe za pomocą narzędzia [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl "FCGear InvoluteGear/pl"). Liczba zębów musi być identyczna z parametrem _inne_zęby_ koła koronowego.
- Dostosowania optymalnej charakterystyki pracy można dokonać za pomocą parametrów przekładni ewolwentowej.

## Przegląd zestawu kół zębatych koronowych i czołowych

![](/images/Crown-spur-gear-set_example.png)

- (1) Koło zębate czołowe.
- (2) Koło koronowe.
- (3) Szerokość zębów.
- (4) Średnica wewnętrzna.
- (5) Średnica zewnętrzna.

## Przydatne wzory

- **Średnica wewnętrzna (4)**

  - _inner diamter_ = _moduł (przekładnia czołowa)_. \* _zęby (przekładnia koronowa)_ \* *cos pressure_parameter (pinion)* : _cos pressure_parameter (przekładnia koronowa)_

- **Średnica zewnętrzna (5)**
  - _średnica zewnętrzna_ = _średnica wewnętrzna_ + _2x wysokość (szerokość zęba koła koronowego)_.

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CrownGear/pl&oldid=1350552>"
