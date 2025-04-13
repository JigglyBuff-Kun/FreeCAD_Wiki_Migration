---
title: FCGear Wewnętrzna zębatka ewolwentowa
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                             |
| --------------------------------------------------------------------------- |
| FCGear: Wewnętrzna zębatka ewolwentowa                                      |
| Lokalizacja w menu                                                          |
| Gear → Wewnętrzna zębatka ewolwentowa                                       |
| Środowisko pracy                                                            |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl")                        |
| Domyślny skrót                                                              |
| _brak_                                                                      |
| Wprowadzono w wersji                                                        |
| 0.21                                                                        |
| Zobacz także                                                                |
| [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl "FCGear InvoluteGear/pl") |
|                                                                             |

## Opis

![](/images/FCGear_InternalInvoluteGear-01.png)

Wewnętrzne przekładnie ewolwentowe od lewej do prawej: Przekładnia czołowa, przekładnia walcowa, podwójna przekładnia walcowa.

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_InternalInvoluteGear.svg) **Wewnętrzna zębatka ewolwentowa** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_InvoluteGear.svg) Wewnętrzna zębatka ewolwentowa**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Obiekt InternalInvoluteGear wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dokładność

- DANE**numpoints** (`Integer`): Wartość domyślna to `6`. Zmiana profilu ewolwentowego. Zmiana wartości może prowadzić do nieoczekiwanych rezultatów.

Podstawowe

- DANE**wysokość** (`Length`): Domyślnie `5 mm`. Wartość szerokości koła zębatego.
- DANE**moduł** (`Length`): Domyślnie `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.
- DANE**zęby** (`Integer`): Domyślnie `15`. Liczba zębów _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.
- DANE**grubość** (`Length`): Domyślnie `5 mm`. Grubość nieobciętej zewnętrznej części koła zębatego.

Obliczone

- DANE**angular_backlash** (`Angle`): _(tylko do odczytu)_.
- DANE**da** (`Length`): _(tylko do odczytu)_ Średnica wewnętrzna, mierzona na wierzchołku zęba _(końcówki zębów)_.
- DANE**df** (`Length`): _(tylko do odczytu)_ Średnica korzenia, mierzona u podstawy zębów.
- DANE**dw** (`Length`): _(tylko do odczytu)_ Średnica podziałki roboczej.
- DANE**outside_diameter** (`Length`): _(tylko do odczytu)_ Średnica zewnętrzna.
- DANE**transverse_pitch** (`Length`): _(tylko do odczytu)_ Podziałka w płaszczyźnie obrotu.

Zaokrąglenia

- DANE**head_fillet** (`Float`): Domyślnie `0 mm`.
- DANE**root_fillet** (`Float`): Domyślnie `0 mm`.

Śrubowy

- DANE**beta** (`Angle`): Domyślnie `0 °`. Z kątem helisy β tworzone jest koło zębate śrubowe - wartość dodatnia → kierunek obrotu w prawo, wartość ujemna → kierunek obrotu w lewo _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.
- DANE**double_helix** (`Bool`): Domyślną wartością jest `Fałsz`, wartość `Prawda` pozwala utworzyć podwójną helisę _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.
- DANE**properties_from_tool** (`Bool`): Domyślną wartością jest `Fałsz`. Jeśli parametr przyjmie wartość `Prawda` i DANE**beta** nie jest równy zero, parametry koła zębatego są ponownie obliczane wewnętrznie dla obróconego koła zębatego.

Ewolwenta

- DANE**kąt_natarcia** (`Angle`): Domyślnie `20 °` _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.
- DANE**przesunięcie** (`Float`): Domyślnie `0`. Generuje dodatnie i ujemne przesunięcie profilu _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.

Precyzja

- DANE**simple** (`Bool`): Domyślną wartością jest `Fałsz`, wartość `Prawda` generuje uproszczony obraz _(bez zębów i tylko cylinder o średnicy podziałowej)_.

Tolerancja

- DANE**backlash** (`Length`): Domyślnie `0`. Luz zwrotny, zwany również lagiem lub swobodnym biegiem, to odległość między zębami w parze kół zębatych.
- DANE**prześwit** (`Float`): Domyślnie `0.25`. _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.
- DANE**head** (`Float`): Domyślnie `0`. Wartość ta jest używana do zmiany wysokości zęba.
- DANE**reversed_backlash** (`Bool`): Wartość `Prawda` zmniejsza luz lub `Fałsz` _(domyślnie)_ i właściwość backslash zwiększa luz _(patrz [Uwagi](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl"))_.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

Zobacz stronę [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl#Uwagi "FCGear InvoluteGear/pl").

## Przydatne wzory

Zobacz stronę [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl#Przydatne_wzory "FCGear InvoluteGear/pl").

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InternalInvoluteGear/pl&oldid=1287744>"
