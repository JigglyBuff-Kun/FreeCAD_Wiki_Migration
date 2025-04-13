---
title: FCGear Koło zębate cykloidalne
---

|                                                                             |
| --------------------------------------------------------------------------- |
| FCGear: Koło zębate cykloidalne                                             |
| Lokalizacja w menu                                                          |
| Gear → Koło zębate cykloidalne                                              |
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

Przekładnie cykloidalne są bardzo wrażliwe na niedokładną regulację odległości między osiami, co prowadzi do zmiany przełożenia. Z tych powodów przekładnie cykloidalne są rzadko spotykane w inżynierii mechanicznej, ale są stosowane tylko w specjalnych przypadkach, takich jak przemysł zegarmistrzowski, do dmuchaw typu root lub do napędu zębatek.

![](/images/Cycloid-Gear_example_1.png)

Od lewej do prawej: Przekładnia czołowa, przekładnia walcowa, podwójna przekładnia walcowa

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk na pasku narzędzi ![](/images/FCGear_CycloidGear.svg) **Koło zębate cykloidalne**.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_HypoCycloidGear.svg) Koło zębate cykloidalne**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

### Dane

Obiekt **Koło zębate cykloidalne** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

Dokładność

- DANE**numpoints** (`Integer`): Wartość domyślna to `15`. Zmiana profilu ewolwentowego. Zmiana wartości może prowadzić do nieoczekiwanych rezultatów.

Podstawowe

- DANE**wysokość** (`Length`): Wartością domyślną jest `5 mm`. Wartość szerokości koła zębatego.
- DANE**moduł** (`Length`): Domyślnie `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów _(patrz [Uwagi](#Uwagi))_.
- DANE**zęby** (`Integer`): Domyślną wartością jest `15`. Liczba zębów.

Obliczone

- DANE**luz_kątowy** (`Angle`): _(tylko do odczytu)_.
- DANE**dw** (`Length`): _(tylko do odczytu)_ Średnica podziałki roboczej.

cykloidalna

- DANE**Średnica_wewnętrzna** (`Float`): _(tylko do odczytu)_ Średnica toczącego się okręgu hipocykloidy, znormalizowana przez DANE**moduł**. (patrz [Uwagi](#Uwagi)).
- DANE**Średnica_zewnętrzna** (`Float`): Domyślnie `7.5`. Średnica toczącego się okręgu epicykloidy, znormalizowana przez DANE**moduł**. (patrz [Uwagi](#Uwagi)).

Zaokrąglenie

- DANE**head_fillet** (`Float`): Wartość domyślna to `0 mm`.
- DANE**root_fillet** (`Float`): Wartość domyślna to `0 mm`.

Śrubowy

- DANE**beta** (`Angle`): Domyślnie `0 °`. Z kątem helisy β tworzone jest koło zębate śrubowe - wartość dodatnia → kierunek obrotu w prawo, wartość ujemna → kierunek obrotu w lewo.
- DANE**Podwójna_helisa** (`Bool`): Domyślną wartością jest `Fałsz`, `Prawda` tworzy podwójną helisę _(patrz [Uwagi](#Uwagi))_.

Tolerancja

- DANE**luz** (`Length`): Domyślną wartością jest `0`. Luz zwrotny, zwany również luzem lub luzem, to odległość między zębami w parze kół zębatych.

- DANE**Prześwit** (`Float`): Domyślną wartością jest `0.25` _(patrz [Uwagi](#Uwagi))_.
- DANE**head** (`Float`): Domyślną wartością jest `0`. Dodatkowa długość wierzchołka zębów, znormalizowana przez DANE**moduł**.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- Cykloidalne koła zębate muszą być zawsze specjalnie dopasowane do siebie i generalnie nie mogą być dowolnie zamieniane: W parze kół zębatych, wartość parametru _średnica_wewnętrzna_ na jednym kole zębatym musi być równa wartości parametru _średnica_zewnętrzna_ na drugim kole zębatym i vice versa. Zobacz także informacje w _Właściwości widoku parametrów cykloidy_ poniżej.
- _Prześwit_: W przypadku pary kół zębatych luz to odległość między wierzchołkiem zęba pierwszego koła zębatego a korzeniem zęba drugiego koła zębatego.
- _Podwójna_helisa_: Aby użyć podwójnej przekładni śrubowej, należy najpierw wprowadzić kąt pochylenia linii śrubowej β (_beta_) dla przekładni śrubowej.
- _moduł_: Korzystając z wytycznych ISO (Międzynarodowej Organizacji Normalizacyjnej), rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów przekładni. Moduł (m): m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Jeśli pomnożymy moduł przez Pi, otrzymamy Pitch (p). Pitch to odległość między odpowiednimi punktami na sąsiednich zębach.

## Przypadki specjalne

### Linia prosta jako hipocykloida

Aby uzyskać linię prostą, bezpośrednio w kierunku środka, jako hipocykloidę, użyj następującego [wyrażenia](/Expressions/pl "Expressions/pl") dla DANE**średnicy_wewnętrznej**: `teeth / 2`. Taki kształt zębów jest często spotykany w historycznych zegarach i dlatego nazywany jest "uzębieniem zegara". Większe DANE**Prześwit** sprawia, że efekt ten jest jeszcze bardziej widoczny.

### Pełna hipocykloida/epicykloida jako ząb

Aby uzyskać koło zębate zbudowane z kompletnych krzywych hipocykloidalnych i epicykloidalnych, należy użyć następujących [wyrażenia](/Expressions/pl "Expressions/pl"):

- DANE**średnica_wewnętrzna**: `0.5 + 1e-6`
- DANE**średnica_zewnętrzna**: `średnica_wewnętrzna`
- DANE**Prześwit**: `(-1 + średnica_wewnętrzna/1mm) * 2`
- DANE**head**: `(-1 + średnica_zewnętrzna/1mm) * 2`

Średnica referencyjna to _d = m \* z_, gdzie _m_ to DANE**moduł**, a _z_ to DANE**zęby**.
Dla pełnej hipocykloidy średnica toczenia musi wynosić _d_i = d / (z\*2) = m\*z / (z\*2)_. A jeśli teraz znormalizujemy to przez moduł, otrzymamy _d_in = m\*z / (z\*2) / m = 1 / 2_. Dodatkowa jawna wartość tolerancji (`1e-6` w powyższym wyrażeniu) jest wymagana do przezwyciężenia problemów z koincydencją.

Teraz średnica koła tocznego cykloidy musi odpowiadać addum/dedendum koła zębatego. Dodatek, tj. długość zęba powyżej koła odniesienia, wynosi 1 + DANE**head**. Dedendum, tj. długość zęba poniżej okręgu odniesienia, wynosi 1 + DANE**prześwit**. Oba są znormalizowane przez moduł, dlatego potrzebujemy wartości head / prześwit równej _1 - d_in_. Dodatkowe `/ 1mm` i `* 2` są wymagane do przezwyciężenia niedociągnięć już naprawionych w wersji rozwojowej środowiska pracy FCGear, ale przeniesienie tych poprawek z powrotem do wersji stabilnej może zepsuć istniejące modele.

Takie "koła zębate" pozwalają na zmniejszenie liczby zębów do "dwóch" i są używane jako obrotowe łopatki w pompach lub sprężarkach _(por. [Roots-type Supercharger](https://en.wikipedia.org/wiki/Roots-type_supercharger))_.

### Nieskończenie duża epicykloida

Jeśli promień toczącego się okręgu epicykloidy staje się nieskończenie duży, staje się ona toczącą się linią prostą. Taka zdegenerowana epicykloida nazywana jest ewolwentą. Koła zębate o takim kształcie zębów są obsługiwane przez narzędzie [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl "FCGear InvoluteGear/pl"). Jest to obecnie najczęściej spotykany kształt zęba.

## Przydatne wzory

Zobacz stronę [Koło zębate ewolwentowe](/FCGear_InvoluteGear/pl#Przydatne_wzory "FCGear InvoluteGear/pl").

## Widok właściwości parametrów cykloidy

![](/images/CycloidGear_inner-outer-diameter_2.svg)

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidGear/pl&oldid=1350519>"
