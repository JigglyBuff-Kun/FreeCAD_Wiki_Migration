---
title: Projekt Części Koło zębate ewolwentowe
---
|  |
| --- |
| Projekt Części: Koło zębate ewolwentowe |
| Lokalizacja w menu |
| Projekt Części → Koło zębate ewolwentowe... |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [środowisko pracy FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl") |
|  |

## Opis

Narzędzie to pozwala na utworzenie dwuwymiarowego profilu koła zębatego lub krzywej złożonej.
Ten profil 2D jest w pełni parametryczny i może być wyciągnięty funkcją [Wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") lub [Addytywna helisa](/PartDesign_AdditiveHelix/pl "PartDesign AdditiveHelix/pl").

Bardziej szczegółowe informacje można znaleźć również na stronach Wiki: [przekładnie](https://en.wikipedia.org/wiki/Gear) oraz [Zarys ewolwentowy](https://en.wikipedia.org/wiki/Involute_gear)

![](/images/PartDesign_Involute_Gear_01.png)

## Użycie

### Utworzenie profilu

1. Opcjonalnie aktywuj właściwą Zawartość.
2. Przejdź do menu **Projekt Części → ![](/images/PartDesign_InvoluteGear.svg) Koło zębate ewolwentowe...**.
3. Ustaw parametry ewolwenty.
4. Kliknij OK.
5. Jeśli nie było aktywnej Zawartości: przeciągnij koło i upuść do Zawartości, aby zastosować dalsze operacje, takie jak wyciągnięcie.

### Utworzenie koła zębatego czołowego

1. Wybierz profil koła zębatego w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Naciśnij przycisk ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl").
3. Ustaw DANE**Długość** wyciągnięcia na żądaną szerokość powierzchni czołowej koła zębatego.
4. Kliknij na przycisk OK.

### Utworzenie koła zębatego walcowego

1. Wybierz profil koła zębatego w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Naciśnij przycisk ![](/images/PartDesign_AdditiveHelix.svg) [Addytywna helisa](/PartDesign_AdditiveHelix/pl "PartDesign AdditiveHelix/pl").
3. Wybierz jako oś, wektor normalny profilu koła zębatego, czyli **Oś normalna szkicu** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") *(We wcześniejszych wersjach można użyć **Bazowa oś Z**, o ile płaszczyzna profilu nie została zmieniona)*.
4. Wybierz tryb **Wysokość - Obrót**.
5. Ustaw DANE**Wysokość** na żądaną szerokość czołową koła zębatego.
6. Aby ustawić żądany kąt skrętu należy użyć [Wyrażenia](/Expressions/pl "Expressions/pl") dla DANE**Obrotów**.
   1. Kliknij niebieską ikonę ![](/images/Bound-expression.svg) po prawej stronie pola wprowadzania danych.
   2. Wprowadź następującą formułę: `Height * tan(25°) / (InvoluteGear.NumberOfTeeth * InvoluteGear.Modules * pi)`, gdzie `25°` jest przykładem pożądanego kąta spiralnego *(znanego również jako wartość beta)*, a `InvoluteGear` jest DANE**Nazwą** profilu.
   3. Kliknij w przycisk OK, aby zamknąć edytor formuły.
7. Kliknij w przycisk OK, aby zamknąć panel zadań.

Wskazówka: Aby uczynić kąt skrętu dostępnym parametrem, użyj "właściwości dynamicznej":

1. Wybierz profil.
2. W oknie [Edytora właściwości](/Property_editor/pl "Property editor/pl") wybierz opcję **Dodaj właściwość** w menu kontekstowym.
3. W oknie dialogowym **Dodaj właściwość**:
   1. Wybierz `App::PropertyAngle` jako Typ.
   2. Ustaw wartość `Gear` w polu Grupa,
   3. Ustaw wartość `HelicalAngle` jako nazwę *(bez spacji)*,
   4. Kliknij OK.
4. Teraz pojawi się nowa właściwość DANE**Helical Angle** *(spacja dodana automatycznie)*, z wartością początkową `0.0°`, staje się dostępna.
5. Przypisz do nowej właściwości żądany kąt spiralny.
6. W formule właściwości DANE**Obrót** profilu AdditiveHelix można teraz odwołać się do `InvoluteGear.HelicalAngle` zamiast zakodowanej wartości np. `25°`; ponownie zakładając, że `InvoluteGear` jest właściwością DANE**Nazwy** profilu.

### Wycięcie piasty dla wału wielowypustowego ewolwentowego

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

1. Aktywuj właściwą Zawartość.
2. Utwórz profil wewnętrznego koła zębatego ewolwentowego z wymaganą liczbą rowków i dostosuj wartości kąta natarcia, współczynnika wysokości głowy zęba, wysokości stopy zęba i główny współczynnik zaokrąglenia. Zobacz również tabelę w [Uwagi](#Uwagi) poniżej dla wartości wykonalnych. Na przykład:
   * DANE**Zębatka zewnętrzna**: `Fałsz`
   * DANE**Liczba zębów**: 12
   * DANE**Kąt natarcia**: 37.5°
   * DANE**Współczynnik wysokości głowy zęba**: 0.45
   * DANE**Współczynnik wysokości stopy zęba**: 0.7
   * DANE**Główny współczynnik zaokrąglenia**: 0.3
3. Wybierz profil koła zębatego w [Widoku drzewa](/Tree_view/pl "Tree view/pl")
4. Naciśnij przycisk ![](/images/PartDesign_Pocket.svg) **Kieszeń**
5. Ustaw DANE**Typ** kieszeni na **Przez wszystkie**.
6. Zaznacz opcję kieszeni DANE**Symetrycznie do płaszczyzny**.
7. Kliknij OK.

## Właściwości

* DANE**Współczynnik wysokości głowy zęba**: Wysokość zęba od koła podziałowego aż do jego wierzchołka, znormalizowana przez moduł. Domyślnie wynosi 1.0 dla standardowego systemu pełnej głębokości. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

* DANE**Współczynnik wysokości stopy zęba**: Wysokość zęba od koła podziałowego w dół do jego korzenia, znormalizowana przez moduł. Domyślnie wynosi 1,25 dla standardowego systemu pełnej głębokości. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

* DANE**Zarys zewnętrzny**: przyjmuje wartość `Prawda` lub `Fałsz`

* DANE**Wysoka dokładność**: przyjmuje wartość `Prawda` lub `Fałsz`

* DANE**Modułowość**: Średnica podziałowa podzielona przez liczbę zębów. *(Uwaga: poprawnym terminem technicznym jest "Moduł", ale ta nazwa jest już używana przez wewnętrzne elementy FreeCAD i dlatego nie może być tutaj używana)*.

* DANE**Liczba zębów**: ustawia liczbę zębów.

* DANE**Kąt przyporu**: kąt ostry między linią działania a normalną do linii łączącej środki kół zębatych. Domyślnie jest to 20°

. Zobacz stronę [koło zębate ewolwentowe](https://en.wikipedia.org/wiki/Involute_gear) aby uzyskać więcej informacji.

* DANE**Przesunięcie profilu zęba**: Odległość, o jaką profil referencyjny jest przesunięty na zewnątrz, znormalizowana przez moduł. Domyślnie zero. Przesunięcie profilu może być dodatnie lub ujemne. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

* DANE**Zaokrąglenie korzenia zęba**: Promień zaokrąglenia u korzenia zęba, znormalizowany przez moduł. Domyślnie 0,38 zgodnie z definicją statywu ISO. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

## Uwagi

* Aby dwa koła zębate mogły się zazębić, muszą mieć ten sam moduł i kąt nacisku. [Wyrażenia](/Expressions/pl "Expressions/pl") mogą pomóc w zapewnieniu spójności. Ich odległość środkowa musi wynosić `(NumberOfTeeth + OtherGear.NumberOfTeeth) * Modules / 2` *(czyli w przypadku, gdy suma przesunięcia profilu wynosi zero)*. Odejmij liczbę zębów w przypadku przekładni wewnętrznej.

* Podczas używania [Szkicu](/Sketch/pl "Sketch/pl") do pozycjonowania niektórych kół zębatych, mogą one być reprezentowane za pomocą ich okręgów podziałowych i przy użyciu [wiązania styczneości](/Sketcher_ConstrainTangent/pl "Sketcher ConstrainTangent/pl") między tymi okręgami. Ich średnice można ustawić za pomocą następującego [wyrażenia](/Expressions/pl "Expressions/pl"): `SomeGear.NumberOfTeeth * SomeGear.Modules` *(zakładając, że nie ma przesunięcia profilu, a "SomeGear" jest DANE**Name** odpowiedniego obiektu profilu przekładni)*.

* Podczas używania [Szkicu](/Sketch/pl "Sketch/pl") do tworzenia dodatkowych elementów *(wycięć, szprych, ...)* na kole zębatym, okręgi odniesienia na wierzchołku lub korzeniu zębów mogą pomóc w pozycjonowaniu tych elementów. Średnicę okręgu wierzchołkowego można ustawić za pomocą następującego [Wyrażenia](/Expressions/pl "Expressions/pl"): `(SomeGear.NumberOfTeeth + 2 * (SomeGear.AddendumCoefficient + SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules`, a okrąg główny odpowiednio o `(SomeGear.NumberOfTeeth - 2 * (SomeGear.DedendumCoefficient - SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules`.

* Przesunięcie profilu może być stosowane do zapobiegania podcięciu na kołach zębatych o małej liczbie zębów. Innym zastosowaniem jest regulacja odległości środkowej dwóch kół zębatych o danej liczbie zębów i module.

* Podczas wizualnego sprawdzania poprawności siatki lub zakłóceń pomocna jest znacznie niższa wartość dla WIDOK**Odchylenia**, np. 0.05 zamiast domyślnego 0.5. W przeciwnym razie reprezentacja w oknie [widoku 3D](/3D_view "3D view") może być zbyt zgrubna.

* Dla standardowych kół zębatych najbardziej powszechnym kątem nacisku jest 20 °, a następnie 14,5 °. Inne zastosowania, zwłaszcza [wielowypusty](https://en.wikipedia.org/wiki/Spline_(mechanical)), wykorzystują wyższe kąty.

* W standardowym układzie pełnej głębokości stosuje się współczynnik addytywny 1,0 i dedytywny 1,25, co daje luz 0,25 *(różnica między addytywnością jednego biegu a dedytywnością drugiego)*. Rzeczywista długość zęba to suma obu współczynników, pomnożona przez moduł.

* Zmniejszenie długości zębów może być wymagane, aby zapobiec podcięciu lub wzmocnić zęby *(patrz [zęby czopowe](https://khkgears.net/new/gear_knowledge/gear-nomenclature/stub-teeth.html))*. W przypadku przekładni wewnętrznych uzupełnienie *(tutaj skierowane do wewnątrz)* może wymagać skrócenia, aby uniknąć pewnych zakłóceń lub nieobrotowych boków; gdy jest to wskazane w połączeniu z dłuższymi zębami zębnika.

* Dla wałów i piast z wielowypustem ISO 4156 definiuje następujące parametry:

:   | Kąt natarcia | 30 ° (flat root) | 30 ° (fillet root) | 37,5 ° | 45 ° |
    | --- | --- | --- | --- | --- |
    | Współczynnik wysokości głowy zęba | 0.5 | 0.5 | 0.45 | 0.4 |
    | Współczynnik wysokości stopy zęba | 0.75 | 0.9 | 0.7 | 0.6 |
    | Współczynnik zaokrąglenia korzenia zęba | 0.2 | 0.4 | 0.3 | 0.25 |

## Ograniczenia

* Obecnie nie jest możliwe dostosowanie grubości zęba. Ząb i przestrzeń między zębami są równomiernie rozłożone na okręgu odniesienia. Jednym ze sposobów na kontrolowanie luzu jest dostosowanie odległości między środkami kół zębatych. Innym sposobem jest zastosowanie niewielkiego ujemnego przesunięcia profilu. Przykład: Dla typowego współczynnika luzu obwodowego wynoszącego 0,04 zwiększ albo odległość środkową o `(0,04 * Modules / 2) / tan(PressureAngle)` lub przesuń profil jednego koła zębatego (najlepiej większego) o współczynnik `-(0,04 / 2) / tan(PressureAngle)`.

* Obecnie nie ma [podcięcia](https://www.tec-science.com/mechanical-power-transmission/involute-gear/undercut/) w wygenerowanym profilu koła zębatego. Oznacza to, że koła zębate o małej liczbie zębów mogą kolidować z zębami współpracującego koła zębatego. Dolna granica zależy od DANE**Kąt docisku** i wynosi około 17 zębów dla 20° i 32 dla 14,5°. Większość praktycznych zastosowań toleruje brak podcięcia dla kół zębatych nieco mniejszych niż ten teoretyczny limit, który zakłada współpracę z zębatką i standardową długością zębów.

## Poradniki

Folm: [Jak zrobić przekładnie zębate w FreeCAD](https://www.youtube.com/watch?v=8VNhTrnFMfE)

## Powiązane

* [Środowisko pracy FCGear](/FCGear_Workbench "FCGear Workbench")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_InvoluteGear/pl&oldid=1560928>"