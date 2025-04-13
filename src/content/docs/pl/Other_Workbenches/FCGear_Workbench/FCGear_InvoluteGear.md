---
title: FCGear Koło zębate ewolwentowe
---

|                                                                             |
| --------------------------------------------------------------------------- |
| FCGear: Koło zębate ewolwentowe                                             |
| Lokalizacja w menu                                                          |
| Gear → Koło zębate ewolwentowe                                              |
| Środowisko pracy                                                            |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl")                        |
| Domyślny skrót                                                              |
| _brak_                                                                      |
| Wprowadzono w wersji                                                        |
| v0.16                                                                       |
| Zobacz także                                                                |
| [Koło zębate cykloidalne](/FCGear_CycloideGear/pl "FCGear CycloideGear/pl") |
|                                                                             |

## Opis

Ze względu na korzystny współczynnik zazębienia i stosunkowo prostą produkcję, przekładnie ewolwentowe są najczęściej stosowaną formą zębów w inżynierii mechanicznej. Koła zębate można znaleźć wszędzie tam, gdzie ruch i siła mają być przenoszone z jednej części na drugą. Na przykład można je znaleźć w maszynach, samochodach, zegarkach lub urządzeniach gospodarstwa domowego. Ruch jest często przenoszony bezpośrednio z jednego koła zębatego na drugie, ale czasami również za pomocą łańcucha. Ponadto można zmienić kierunek obrotu. Możliwa jest również łatwa zmiana ruchu promieniowego na liniowy za pomocą [ewolwentowej listwy zębatej](/FCGear_InvoluteRack/pl "FCGear InvoluteRack/pl").

![](/images/Involute-Gear_example.png)

Od lewej do prawej: Przekładnia czołowa, przekładnia walcowa, podwójna przekładnia walcowa

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_InvoluteGear.svg) **Koło zębate ewolwentowe** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_InvoluteGear.svg) Koło zębate ewolwentowe**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Obiekt InvoluteGear wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dokładność

- DANE**liczba punktów** (`Integer`): Domyślnie `20`. Zmiana profilu ewolwentowego. Zmiana wartości może prowadzić do nieoczekiwanych rezultatów.
- DANE**uprość** (`Bool`): Wartością domyślną jest `Fałsz`, `Prawda` generuje uproszczone wyświetlanie _(bez zębów i tylko cylinder o średnicy podziałowej)_.

Podstawowe

- DANE**wysokość** (`Length`): Wartością domyślną jest `5 mm`. Wartość szerokości koła zębatego.
- DANE**moduł** (`Length`): Domyślnie `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów _(patrz [Uwagi](#Uwagi))_.
- DANE**liczba_zębów** (`Integer`): Domyślną wartością jest `15`. Liczba zębów _(patrz [Uwagi](#Uwagi))_.

Obliczone

- DANE**addendum_diameter** (`Length`): Domyślna wartość to `17 mm`. Średnica zewnętrzna mierzona dla addendum (czubka zęba).
- DANE**angular_backlash** (`Angle`): (tylko do odczytu) Kąt, o który koło może się obrócić bez poruszania drugiego koła w parze.
- DANE**pitch_diameter** (`Length`): Domyślna wartość to `15 mm`. Średnica podziałowa.
- DANE**root_diameter** (`Length`): (tylko do odczytu) Średnica podstawy, mierzona przy podstawie zęba.
- DANE**transverse_pitch** (`Length`): Domyślna wartość to `3.14 mm`. Podziałka poprzeczna.
- DANE**traverse_module** (`Length`): Domyślna wartość to `1 mm`. Moduł poprzeczny generowanego koła.

Zaokrąglenie

- DANE**zaokrąglenie_głowy** (`Float`): Domyślnie `0 mm`. Zaokrąglenie głowy zęba.
- DANE**zaokrąglenie_stopy** (`Float`): Domyślnie `0 mm`. Zaokrąglenie stopy zęba.
- DANE**podcięcie** (`Bool`): Domyślną wartością jest `Fałsz`, `Prawda` zmienia profil korzenia zęba _(patrz [Uwagi](#Uwagi))_.

Śrubowy

- DANE**double_helix** (`Bool`): Domyślną wartością jest `Fałsz`, `Prawda` tworzy podwójną helisę _(patrz [Uwagi](#Uwagi))_.
- DANE**helix_angle** (`Angle`): Domyślnie `0 °`. Z kątem helisy β tworzone jest koło zębate śrubowe – dodatnia wartość → kierunek obrotu w prawo, ujemna wartość → kierunek obrotu w lewo (zobacz [Uwagi](#Uwagi)).
- DANE**properties_from_tool** (`Bool`): Domyślną wartością jest `Fałsz`. Jeśli wybrano `Prawda` i parametr DANE**helix_angle** nie jest równy zero, parametry koła zębatego są obliczane wewnętrznie dla obróconego koła zębatego.

hole

- DANE**Axle_hole** (`Bool`): Domyślna wartość to `Fałsz`. `Prawda` aktywuje środkowy otwór na oś.
- DANE**Axle_holesize** (`Length`): Domyślna wartość to `10 mm`. Średnica otworu na oś.
- DANE**offset_hole** (`Bool`): Domyślna wartość to `Fałsz`, `Prawda` aktywuje odsunięty otwór.
- DANE**offset_holeoffset** (`Length`): Domyślna wartość to `10 mm`. Odsunięcie dla odsuniętego otworu.
- DANE**offset_holesize** (`Length`): Domyślna wartość to `10 mm`. Średnica odsuniętego otworu.

Ewolwenta

- DANE**kąt_natarcia** (`Angle`): Domyślnie `20 °` _(patrz [Uwagi](#Uwagi))_.
- DANE**przesunięcie** (`Float`): Domyślnie `0`. Generuje dodatnie i ujemne przesunięcie profilu _(patrz [Uwagi](#Uwagi))_.

Tolerancja

- DANE**backlash** (`Length`): Domyślnie `0`. Luz zwrotny, zwany również lagiem lub swobodnym biegiem, to odległość między zębami w parze kół zębatych.
- DANE**prześwit** (`Float`): Domyślnie `0.25`. _(patrz [Uwagi](#Uwagi))_.
- DANE**head** (`Float`): Domyślnie `0`. Wartość ta jest używana do zmiany wysokości zęba.
- DANE**reversed_backlash** (`Bool`): Wartość `Prawda` zmniejsza luz lub `Fałsz` _(domyślnie)_ i właściwość backslash zwiększa luz _(patrz [Uwagi](#Uwagi))_.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- _beta_: Gdy zmienia się _beta_, zmienia się również _pitch diameter_. Poniższy wzór ilustruje wzajemne oddziaływanie parametrów: d = m \* Z / cos beta _(Z = liczba zębów, d = średnica podziałowa, m = moduł)_. Oznacza to, że dla koła zębatego czołowego: cos beta = 0, a dla koła zębatego walcowego: cos beta > 0. Jednak kąt pochylenia linii śrubowej mniejszy niż 10° nie ma prawie żadnych zalet w porównaniu z zębami prostymi.
- _prześwit_: W przypadku pary kół zębatych prześwit to odległość między wierzchołkiem zęba pierwszego koła zębatego a korzeniem zęba drugiego koła zębatego.
- _double_gear_: Aby użyć podwójnej przekładni śrubowej, należy najpierw wprowadzić kąt spirali β (_beta_) dla przekładni śrubowej.
- _moduł_: Korzystając z wytycznych ISO (Międzynarodowej Organizacji Normalizacyjnej), rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów przekładni. Moduł _(m)_: m = 1 _(p = 3,1416)_, m = 2 _(p = 6,2832)_, m = 4 _(p = 12,566)_. Jeśli pomnożymy moduł przez Pi, otrzymamy Skok - Pitch _(p)_. Skok to odległość między odpowiednimi punktami na sąsiednich zębach.
- _przesunięcie_: Przesunięcie profilu nie służy wyłącznie do zapobiegania podcięciu. Może być używane do regulacji odległości między dwoma kołami zębatymi. Jeśli stosowana jest dodatnia korekta, np. w celu zapobieżenia podcięciu w zębniku, grubość zęba na górze jest mniejsza.
- _zęby_: Jeśli zmienia się liczba zębów, zmienia się również średnica podziałowa (_dw_).
- _podcięcie_: Podcięcie jest stosowane, gdy liczba zębów koła zębatego jest zbyt mała. W przeciwnym razie współpracujące koło zębate wbije się w korzeń zęba. Podcięcie nie tylko osłabia ząb za pomocą talii podobnej do osy, ale także usuwa część użytecznej ewolwenty przylegającej do koła podstawowego.
- _pressure_angle_: 20° jest tutaj wartością standardową. Kąt nacisku jest definiowany jako kąt pomiędzy linią działania _(wspólną styczną do okręgów bazowych)_ a prostopadłą do linii środków. Tak więc, dla standardowych kół zębatych, koła zębate o kącie natarcia 14,5° mają koła bazowe znacznie bliżej korzeni zębów niż koła zębate o kącie natarcia 20°. Z tego powodu koła zębate 14,5° napotykają większe problemy z podcinaniem niż koła zębate 20°. Kąt natarcia zmienia się wraz ze zmianą profilu. Parametr należy zmieniać tylko wtedy, gdy dostępna jest wystarczająca wiedza na temat geometrii koła zębatego.
- _reversed_backlash_: Jeśli istnieje kilka przełożeń, należy zwrócić uwagę na to, dla którego przełożenia ustawiony jest parametr.

## Ograniczenia

Profil zęba 2D, uzyskany przez ustawienie właściwości DANE**wysokość** na zero, nie może być używany z elementami wymagającymi kształtu 2D. Na przykład funkcje [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl") i [Addytywna helisa](/PartDesign_AdditiveHelix/pl "PartDesign AdditiveHelix/pl") nie akceptują takiego profilu jako podstawy. Szczegóły techniczne można znaleźć w powiązanym [problemie w serwisie GitHub](https://github.com/looooo/freecad.gears/issues/97).

## Przydatne wzory

### Standardowe koła zębate czołowe

Tutaj "standard" odnosi się do tych kół zębatych czołowych, które nie mają współczynnika zmiany profilu \*(

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4))\*.

Podstawowe wzory wspólne dla wewnętrznych i zewnętrznych standardowych kół zębatych czołowych

| Symbol                                                        | Terminy                                          | Formuła                                                                                                                                                      | Parametry FCGear                                                                                                                                    |
| ------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| m {\displaystyle m} {\displaystyle m}                         | _Moduł_                                          | -                                                                                                                                                            | module {\displaystyle {\texttt {module}}} {\displaystyle {\texttt {module}}}                                                                        |
| z {\displaystyle z} {\displaystyle z}                         | _Liczba zębów_                                   | -                                                                                                                                                            | teeth {\displaystyle {\texttt {teeth}}} {\displaystyle {\texttt {teeth}}}                                                                           |
| α {\displaystyle \alpha } {\displaystyle \alpha }             | _Kąt natarcia_                                   | Typowo, α = 20 ∘ {\displaystyle \alpha =20^{\circ }} {\displaystyle \alpha =20^{\circ }}                                                                     | pressure \_ parameter {\displaystyle {\texttt {pressure}}{\\\_}{\texttt {parameter}}} {\displaystyle {\texttt {pressure}}{\_}{\texttt {parameter}}} |
| d {\displaystyle d} {\displaystyle d}                         | _Średnica odniesienia_ lub _Średnica podziałowa_ | z ⋅ m {\displaystyle z\cdot m} {\displaystyle z\cdot m}                                                                                                      | dw {\displaystyle {\texttt {dw}}} {\displaystyle {\texttt {dw}}}                                                                                    |
| h a ∗ {\displaystyle h\_{a}^{\*}} {\displaystyle h\_{a}^{\*}} | _współczynnik Addendum_                          | - Typowo, h a ∗ = 1 {\displaystyle h\_{a}^{\*}=1} {\displaystyle h\_{a}^{\*}=1}                                                                              | h a ∗ = 1 + head {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}} {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}}                                      |
| h f ∗ {\displaystyle h\_{f}^{\*}} {\displaystyle h\_{f}^{\*}} | _współczynnik Dedendum_                          | - Typowo, h f ∗ = 1.25 {\displaystyle h\_{f}^{\*}=1.25} {\displaystyle h\_{f}^{\*}=1.25}                                                                     | h f ∗ = 1 + clearance {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}} {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}}                       |
| h a {\displaystyle h\_{a}} {\displaystyle h\_{a}}             | _Addendum_                                       | h a = h a ∗ ⋅ m {\displaystyle h\_{a}=h\_{a}^{\*}\cdot m} {\displaystyle h*{a}=h*{a}^{\*}\cdot m}                                                            | -                                                                                                                                                   |
| h f {\displaystyle h\_{f}} {\displaystyle h\_{f}}             | _Dedendum_                                       | h f = h f ∗ ⋅ m {\displaystyle h\_{f}=h\_{f}^{\*}\cdot m} {\displaystyle h*{f}=h*{f}^{\*}\cdot m}                                                            | -                                                                                                                                                   |
| h {\displaystyle h} {\displaystyle h}                         | _Wysokość zęba_ lub _Głębokość zęba_             | h = h a + h f {\displaystyle h=h\_{a}+h\_{f}} {\displaystyle h=h*{a}+h*{f}} Typowo, h = 2.25 ⋅ m {\displaystyle h=2.25\cdot m} {\displaystyle h=2.25\cdot m} | -                                                                                                                                                   |
| x {\displaystyle x} {\displaystyle x}                         | _Współczynnik przesunięcia profilu_              | - Dla standardowych zębatek, x = 0 {\displaystyle x=0} {\displaystyle x=0}                                                                                   | shift {\displaystyle {\texttt {shift}}} {\displaystyle {\texttt {shift}}}                                                                           |

Podstawowe wzory specyficzne dla zewnętrznych standardowych kół zębatych czołowych

| Symbol                                            | Terminy             | Formuła                                                                                                                                                                                                 |
| ------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| d a {\displaystyle d\_{a}} {\displaystyle d\_{a}} | _Średnica końcówki_ | d a = d + 2 ⋅ h a {\displaystyle d\_{a}=d+2\cdot h\_{a}} {\displaystyle d*{a}=d+2\cdot h*{a}} Typowo, d a = ( z + 2 ) ⋅ m {\displaystyle d\_{a}=(z+2)\cdot m} {\displaystyle d\_{a}=(z+2)\cdot m}       |
| d f {\displaystyle d\_{f}} {\displaystyle d\_{f}} | _Średnica korzenia_ | d f = d − 2 ⋅ h f {\displaystyle d\_{f}=d-2\cdot h\_{f}} {\displaystyle d*{f}=d-2\cdot h*{f}} Typowo, d f = ( z − 2.5 ) ⋅ m {\displaystyle d\_{f}=(z-2.5)\cdot m} {\displaystyle d\_{f}=(z-2.5)\cdot m} |

Basic formulas specific to internal standard spur gears

| Symbol                                            | Terminy             | Formuła                                                                                                                                                                                                 |
| ------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| d a {\displaystyle d\_{a}} {\displaystyle d\_{a}} | _Średnica końcówki_ | d a = d − 2 ⋅ h a {\displaystyle d\_{a}=d-2\cdot h\_{a}} {\displaystyle d*{a}=d-2\cdot h*{a}} Typowo, d a = ( z − 2 ) ⋅ m {\displaystyle d\_{a}=(z-2)\cdot m} {\displaystyle d\_{a}=(z-2)\cdot m}       |
| d f {\displaystyle d\_{f}} {\displaystyle d\_{f}} | _Średnica korzenia_ | d f = d + 2 ⋅ h f {\displaystyle d\_{f}=d+2\cdot h\_{f}} {\displaystyle d*{f}=d+2\cdot h*{f}} Typowo, d f = ( z + 2.5 ) ⋅ m {\displaystyle d\_{f}=(z+2.5)\cdot m} {\displaystyle d\_{f}=(z+2.5)\cdot m} |

Basic formulas specific for a pair of external standard spur gears

| Symbol                                | Terminy                                     | Formuła                                                                                                                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| a {\displaystyle a} {\displaystyle a} | _Odległość od środka_                       | a = d 1 + d 2 2 {\displaystyle a={\frac {d\_{1}+d\_{2}}{2}}} {\displaystyle a={\frac {d*{1}+d*{2}}{2}}}                                                                                                                                                                        |
| c {\displaystyle c} {\displaystyle c} | _Prześwit pomiędzy końcówkami i korzeniami_ | c 1 = h f 2 − h a 1 {\displaystyle c\_{1}=h\_{f2}-h\_{a1}} {\displaystyle c*{1}=h*{f2}-h*{a1}} c 2 = h f 1 − h a 2 {\displaystyle c\_{2}=h\_{f1}-h\_{a2}} {\displaystyle c*{2}=h*{f1}-h*{a2}} Typowo, c = 0.25 ⋅ m {\displaystyle c=0.25\cdot m} {\displaystyle c=0.25\cdot m} |

- **Zębatka walcowa i podwójna zębatka walcowa**
  - _średnica podziałowa (dw)_ = _moduł_ \* *zęby* : _cos beta_
  - _rozstaw osi_ = *(średnica podziałowa (dw) 1 + śerdnica podziałowa (dw) 2)* : 2
  - _średnica koła wierzchołkowego_ = _średnica podziałowa (dw)_ + 2 \* _moduł_
  - _moduł_ = _średnica podziałowa (dw)_ \* *cos beta* : _zęby_

## Tworzenie skryptów

Wykorzystaj moc środowiska Python, aby zautomatyzować modelowanie kół zębatych:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteGear.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteGear/pl&oldid=1529385>"
