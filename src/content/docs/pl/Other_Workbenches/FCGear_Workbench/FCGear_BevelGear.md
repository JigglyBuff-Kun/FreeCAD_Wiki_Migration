---
title: FCGear Koło zębate stożkowe
---

|                                                      |
| ---------------------------------------------------- |
| FCGear: Koło zębate stożkowe                         |
| Lokalizacja w menu                                   |
| Gear → Koło zębate stożkowe                          |
| Środowisko pracy                                     |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl") |
| Domyślny skrót                                       |
| _brak_                                               |
| Wprowadzono w wersji                                 |
| v0.16                                                |
| Zobacz także                                         |
| _brak_                                               |
|                                                      |

## Opis

Narzędzie **Koło zębate stożkowe** tworzy podstawowe koło zębate stożkowe, obiekt bryłowy, który musi zostać przycięty do właściwego kształtu końcowego w kolejnych krokach.

Częściowo ze względu na generowany przez nie hałas, przekładnie stożkowe nie są używane tak często, jak inne rodzaje przekładni. Są one jednak nadal używane w niektórych sektorach, takich jak pakowanie żywności i żywności w puszkach, sprzęt do pielęgnacji trawników i ogrodów, maszyny takie jak wiertarki i młyny, systemy kompresji na rynku gazu i ropy oraz zawory sterujące przepływem.

Spiralne koła zębate stożkowe mają zakrzywione zęby, które zapewniają łagodniejsze zazębianie i większy kontakt między zębami w porównaniu z prostymi kołami zębatymi stożkowymi. Zmniejsza to wibracje i hałas. Mogą być używane przy dużych prędkościach i są zwykle stosowane w przekładniach motocyklowych i rowerowych.

![](/images/Bevel-Gear_example.png)

Od lewej do prawej: Przekładnia czołowa, przekładnia spiralna.

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_BevelGear.svg) **Koło zębate stożkowe** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_BevelGear.svg) Koło zębate stożkowe**.
3. Obiekt BevelGear zostanie utworzony zgodnie z domyślnymi ustawieniami.
4. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Koło zębate stożkowe wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

- DANE**Wysokość** (`Length`): Wartością domyślną jest `5`. Wartość szerokości koła zębatego stożkowego, mierzona od koła podziałowego.
- DANE**moduł** (`Length`): Wartością domyślną jest `1`. Moduł jest stosunkiem średnica podziałki koła zębatego podzielonej przez liczbę zębów (patrz [Uwagi](#Uwagi)).
- DANE**reset_origin** (`Bool`): Jeśli przyjmie wartość `Prawda` _(domyślnie)_ punkt początkowy koła zębatego znajduje się w środku koła podziałowego _(na dole koła zębatego)_, _(patrz [Uwagi](#Uwagi))_.

  : Jeśli wartość to `Fałsz`, punkt początkowy koła zębatego znajduje się na wierzchołku stożka podziałowego.

- DANE**Zęby** (`Integer`): Wartością domyślną jest `15`. Liczba zębów.

Obliczone

- DANE**luz_kątowy** (`Angle`): _(tylko do odczytu)_.
- DANE**dw** (`Length`): _(tylko do odczytu)_ Średnica podziałki roboczej.

Śrubowy

- DANE**beta** (`Angle`): Wartością domyślną jest `0 °`. Przy kącie linii śrubowej β tworzone jest stożkowe koło zębate - wartość dodatnia → kierunek obrotu w prawo, wartość ujemna → kierunek obrotu w lewo.

Ewolwenta

- DANE**kąt_skoku** (`Angle`): Wartością domyślną jest `45 °`. Kąt nachylenia stożka podziałowego.

parametr_ewolwenty

- DANE**kąt_natarcia** (`Angle`): Wartością domyślną jest `20 °` _(patrz sekcja [Uwagi](#Uwagi))_.

Precyzja

- DANE**numpoints** (`Integer`): Wartość domyślna to `6`. Zmiana profilu ewolwentowego. Zmiana wartości może prowadzić do nieoczekiwanych rezultatów.

Tolerancja

- DANE**Luz międzyzębowy** (`Length`): Wartością domyślną jest `0`. Luz zwrotny, zwany również luzem lub swobodnym biegiem, to odległość między zębami w parze kół zębatych.
- DANE**Prześwit** (`Float`): Wartością domyślną jest `0.1`. _(patrz [Uwagi](#Uwagi))_.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- Przekładnie stożkowe są dość skomplikowane, ponieważ ich właściwości zależą nie tylko od przełożenia, ale także od kąta między osiami przekładni. Domyślna przekładnia stożkowa jest zbudowana dla prostopadłych osi i przełożenia 1:1.
- _Kąt skoku_: Kąt nachylenia stożka wynosi połowę kąta między osiami koła zębatego dla przełożenia 1:1, czyli 45° dla osi prostopadłych. Kąty nachylenia dla innych kombinacji przełożeń i kątów między osiami można określić geometrycznie w środowisku pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
- _prześwit_: W przypadku pary kół zębatych prześwit to odległość między wierzchołkiem zęba pierwszego koła zębatego a korzeniem zęba drugiego koła zębatego.
- _moduł_: Korzystając z wytycznych ISO _(Międzynarodowej Organizacji Normalizacyjnej)_, rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów kół zębatych. Moduł (m): m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Jeśli pomnożymy moduł przez Pi, otrzymamy skok (p). Skok to odległość między odpowiednimi punktami na sąsiednich zębach.
- _pressure_angle_: Parametr można zmienić tylko wtedy, gdy dostępna jest wystarczająca wiedza na temat geometrii przekładni.
- _reset_origin_: Zaleca się ustawienie parametru na wartość _false_, aby początek koła zębatego znajdował się na wierzchołku stożka podziałowego. W ten sposób możemy rozszerzyć koło zębate stożkowe poza płaszczyznę koła podziałowego przy użyciu właściwości modułu.
- Słabym punktem tego narzędzia jest to, że buduje geometrię od średnicy podziałowej w kierunku wierzchołka i ignoruje fakt, że istnieje również geometria w przeciwnym kierunku. Dlatego musimy określić przekrój koła zębatego na okręgu podziałowym należącym do naszego wybranego modułu, aby zdefiniować geometrię cięcia, a następnie użyć rozszerzonego _(skalowanego od wierzchołka)_ koła zębatego stożkowego do cięcia. _(patrz_ resetowanie początku _powyżej)_

## Przydatne wzory

- _średnica podziałowa_ = _moduł_ \* _zęby_
- _średnica wierzchołkowa_ = _średnica podziałowa_ + 2 \* _moduł_ \* _cos reference cone angle_
- _tip angle 1_ = _(teeth 1 + 2)_ \* *(cos reference cone angle 1)* : _(teeth 2 - 2)_ \* _(sin reference cone angle 1)_
- _tip angle 2_ = _(teeth 2 + 2)_ \* *(cos reference cone angle 2)* : _(teeth 1 - 2)_ \* _(sin reference cone angle 2)_
- _reference cone angle 1_ = *(teeth 1)* : _(teeth 2)_
- _reference cone angle 2_ = *(teeth 2)* : _(teeth 1)_
- _axis angle total_ = _reference cone angle 1_ + _reference cone angle 2_

Merytoryczny kąt stożka odniesienia [TECH.]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_BevelGear/pl&oldid=1475734>"
