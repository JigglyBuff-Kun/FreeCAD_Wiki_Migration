---
title: FCGear Listwa zębata ewolwentowa
---

|                                                                             |
| --------------------------------------------------------------------------- |
| FCGear: Listwa zębata ewolwentowa                                           |
| Lokalizacja w menu                                                          |
| Gear → Listwa zębata ewolwentowa                                            |
| Środowisko pracy                                                            |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl")                        |
| Domyślny skrót                                                              |
| _brak_                                                                      |
| Wprowadzono w wersji                                                        |
| v0.16                                                                       |
| Zobacz także                                                                |
| [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl "FCGear InvoluteGear/pl") |
|                                                                             |

## Opis

Listwy zębate służą do przekształcania ruchu obrotowego w ruch liniowy lub odwrotnie. Poniższe przykłady pokazują różne zastosowania:

- Stojak z zamontowaną przekładnią przy jazie oporowym.
- Różne systemy zębatkowe w kolejach zębatkowych.
- Układ kierowniczy z zębatką w pojeździe.
- Wciągarka zębatkowa jako podnośnik mechaniczny _(np. podnośnik samochodowy)_.
- Pneumatyczne napędy zębatkowe stosowane do sterowania zaworami w transporcie rurociągowym.

![](/images/Involute-Rack_example.png)

Od lewej do prawej: Przekładnia czołowa, przekładnia walcowa, podwójna przekładnia walcowa

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_InvoluteRack.svg) **Listwa zębata ewolwentowa** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_InvoluteRack.svg) Listwa zębata ewolwentowa**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Obiekt **Listwa zębata ewolwentowa** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

- DANE**dodaj_zakończenia** (`Bool`): Jeśli wartość to `Prawda` _(domyślnie)_, całkowita długość zębatki to zęby \* podziałka. Jeśli jest to `Fałsz`, wówczas zębatka zaczyna się od boku zęba.
- DANE**wysokość** (`Length`): Domyślną wartością jest `5 mm`. Wartość szerokości koła zębatego.
- DANE**moduł** (`Length`): Domyślną wartością jest `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów (patrz [Uwagi](#Uwagi)).
- DANE**zęby** (`Integer`): Domyślną wartością jest `15`. Liczba zębów.
- DANE**grubość** (`Length`): Domyślną wartością jest `5`. Wysokość od korzenia zęba do dolnej strony pręta.

Obliczone

- DANE**rozstaw_poprzeczny** (`Length`): _(tylko do odczytu)_ Nachylenie w płaszczyźnie poprzecznej (patrz sekcja [Uwagi](#Uwagi)).

zaokrąglenie

- DANE**head_fillet** (`Float`): Wartość domyślna to `0 mm`.
- DANE**root_fillet** (`Float`): Wartość domyślna to `0 mm`.

Śrubowy

- DANE**beta** (`Angle`): Wartość domyślna to `0 °`. Z kątem helisy β tworzone jest koło zębate śrubowe - wartość dodatnia → kierunek obrotu w prawo, wartość ujemna → kierunek obrotu w lewo.
- DANE**double_helix** (`Bool`): Domyślną wartością jest `Fałsz`, `Prawda` tworzy podwójną helisę _(patrz [Uwagi](#Uwagi))_.
- DANE**properties_from_tool** (`Bool`): Domyślną wartością jest `Fałsz`. Jeśli wybrano `Prawda` i parametr DANE**beta** nie jest równy zero, parametry koła zębatego są obliczane wewnętrznie dla obróconego koła zębatego.

ewolwenta

- DANE**kąt_natarcia** (`Angle`): Wartością domyślną jest `20 °` _(patrz sekcja [Uwagi](#Uwagi))_.

precyzja

- DANE**uproszczony** (`Bool`): Domyślną wartością jest `Fałsz`, `Prawda` generuje widok uproszczony _(bez zębów)_.

Tolerancja

- DANE**prześwit** (`Float`): Domyślną wartością jest `0.25`. _(patrz sekcja [Uwagi](#Uwagi))_.
- DANE**head** (`Float`): Domyślną wartością jest `0`. Ta wartość jest używana do zmiany wysokości zęba.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- _rozstaw_poprzeczny_: Wartość jest wynikiem mnożenia _moduł \* pi_. Oznacza to, że dla standardowej zębatki ewolwentowej FCGear: 15 (_ząb_) \* 3.14 (_rozstaw_poprzeczny_) wynosi 47.12 mm. Zobacz także _moduł_ poniżej.
- _prześwit_: W przypadku pary kół zębatych luz to odległość między wierzchołkiem zęba pierwszego koła zębatego a korzeniem zęba drugiego koła zębatego.
- _podwójna_helisa_: Aby użyć podwójnej przekładni śrubowej, należy najpierw wprowadzić kąt spirali β (_beta_) dla przekładni śrubowej.
- _moduł_: Korzystając z wytycznych ISO (Międzynarodowej Organizacji Normalizacyjnej), rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów przekładni. Moduł (m): m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Jeśli pomnożymy moduł przez Pi, otrzymamy Skok (p). Skok to odległość między odpowiednimi punktami na sąsiednich zębach. Wynik mnożenia jest wyświetlany w _transverse_pitch_.
- _parametr_naratcia_: Parametr ten należy zmieniać tylko wtedy, gdy posiadana jest wystarczająca wiedza na temat geometrii koła zębatego.

## Przydatne wzory

Zobacz stronę [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl#Przydatne_wzory "FCGear InvoluteGear/pl").

## Tworzenie skryptów

Wykorzystaj moc środowiska Python, aby zautomatyzować modelowanie kół zębatych:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteRack.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteRack/pl&oldid=1350556>"
