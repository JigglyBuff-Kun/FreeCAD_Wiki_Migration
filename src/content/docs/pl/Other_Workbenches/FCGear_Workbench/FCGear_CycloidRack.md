---
title: FCGear Listwa zębata cykloidalna
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                           |
| ------------------------------------------------------------------------- |
| FCGear: Listwa zębata cykloidalna                                         |
| Lokalizacja w menu                                                        |
| Gear → Listwa zębata cykloidalna                                          |
| Środowisko pracy                                                          |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl")                      |
| Domyślny skrót                                                            |
| None                                                                      |
| Wprowadzono w wersji                                                      |
| 0.22                                                                      |
| Zobacz także                                                              |
| [Koło zębate cykloidalne](/FCGear_CycloidGear/pl "FCGear CycloidGear/pl") |
|                                                                           |

## Opis

![](/images/FCGear_CycloidRack-01.png)

Przekładnie cykloidalne od lewej do prawej: Przekładnia czołowa, przekładnia walcowa, podwójna przekładnia walcowa.

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk na pasku narzędzi ![](/images/FCGear_CycloidRack.svg) **Listwa zębata cykloidalna**.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_CycloidRack.svg) Listwa zębata cykloidalna**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Obiekt **Listwa zębata cykloidalna** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

Dokładność

- DANE**numpoints** (`Integer`): Wartością domyślną jest `15`. Liczba punktów dla splajnu.

Podstawowe

- DANE**Dodaj_zakończenia** (`bool`): Jeśli wartość to `true` (domyślnie), całkowita długość zębatki to zęby \* podziałka. Jeśli jest to `false`, wówczas zębatka zaczyna się od boku zęba.
- DANE**Wysokość** (`Length`): Wartością domyślną jest `5 mm`. Wartość szerokości koła zębatego.
- DANE**Zęby** (`Integer`): Wartość domyślna to `15`. Liczba zębów.
- DANE**Grubość** (`Length`): Domyślnie `5 mm`. Grubość nieobciętej części zębatki.

Obliczone

- DANE**Rozstaw_poprzeczny** (`Length`): _(tylko do odczytu)_ Skok w płaszczyźnie poprzecznej.

cykloidalna

- DANE**Średnica_wewnętrzna** (`Float`): Wartością domyślną jest `7.5`. Średnica toczącego się okręgu hipocykloidy, znormalizowana przez DANE**moduł** _(patrz [Uwagi](/FCGear_CycloidGear "FCGear CycloidGear"))_.
- DANE**Średnica_zewnętrzna** (`Float`): Wartością domyślną jest `7.5`. Średnica toczącego się okręgu epicykloidy, znormalizowana przez DANE**moduł** _(patrz [Uwagi](/FCGear_CycloidGear "FCGear CycloidGear"))_.

Zaokrąglenie

- DANE**head_fillet** (`Float`): Wartość domyślna to `0 mm`.
- DANE**root_fillet** (`Float`): Wartość domyślna to `0 mm`.

Śrubowy

- DANE**beta** (`Angle`): Domyślną wartością jest `0 °`. ZKąt pochylenia linii śrubowej β tworzy przekładnię śrubową _(wartość dodatnia → kierunek obrotów w prawo, wartość ujemna → kierunek obrotów w lewo)_.
- DANE**Podwójna_helisa** (`Bool`): Domyślną wartością jest `Fałsz`, `Prawda` tworzy podwójną helisę _(patrz [Uwagi](/FCGear_CycloidGear/pl#Uwagi "FCGear CycloidGear/pl"))_.

Ewolwenta

- DANE**moduł** (`Length`): Wartością domyślną jest `1 mm`. W przypadku listew moduł jest równy podziałce, podobnie jak odległość między odpowiednimi punktami na sąsiednich zębach _(patrz [Uwagi](/FCGear_CycloidGear/pl#Uwagi "FCGear CycloidGear/pl"))_.

Precyzja

- DANE**uproszczony** (`Bool`): Wartością domyślną jest `Fałsz`. Jeśli wybrano `Prawda`, zębatka jest rysowana ze stałą liczbą zębów, aby uniknąć topologicznej zmiany nazwy.

Tolerancja

- DANE**Prześwit** (`Float`): Domyślną wartością jest `0.25` _(patrz [Uwagi](/FCGear_CycloidGear/pl#Uwagi "FCGear CycloidGear/pl"))_.
- DANE**head** (`Float`): Domyślną wartością jest `0`. Dodatkowa długość wierzchołka zębów, znormalizowana przez DANE**moduł**.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

Zobacz stronę [Koło zębate cykloidalne](/FCGear_CycloidGear/pl#Uwagi "FCGear CycloidGear/pl").

## Przydatne wzory

Zobacz stronę [Koło zębate cykloidalne](/FCGear_CycloidGear/pl#Przydatne_wzory "FCGear CycloidGear/pl").

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidRack/pl&oldid=1350585>"
