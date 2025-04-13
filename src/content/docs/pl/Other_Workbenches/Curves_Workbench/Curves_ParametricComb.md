---
title: Krzywe Grzebień parametryczny
---
|  |
| --- |
| Krzywe: Grzebień parametryczny |
| Lokalizacja w menu |
| Curves → Comb plot |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Curves_ParametricComb.svg) **Grzebień parametryczny** może pomóc w wizualizacji regularności lub gładkości krzywej, a także ciągłości między dwiema krzywymi.

Uwaga: Grzebień służy tylko do wizualizacji.

Dla krzywych 3D zostanie utworzony grzebień 3D. Próbka i skala mogą zostać zmienione.

![](/images/Curves_ParametricComb_demo.jpg)

Powyżej: krzywa przed *(po lewej)* i po *(po prawej)* zastosowaniu tego narzędzia

## Użycie

1. Wybierz jeden lub więcej kształtów (szkic, polilinia, ściana itd.).
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_ParametricComb.svg) Comb plot.
   * Naciśnij przycisk ![](/images/Curves_ParametricComb.svg)
   * Wybierz opcję **Curves → ![](/images/Curves_ParametricComb.svg) Comb plot** z menu.
3. Utworzony zostanie obiekt **Comb** wskazujący krzywiznę wybranych kształtów (szkiców, polilinii) lub ich elementów podrzędnych (granic i krzywych iso w przypadku ścian).
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") (zobacz Właściwości poniżej):
   * Dostosuj liczbę próbek i skalę grzebienia dla wszystkich wykresów grzebieni.
   * Dostosuj liczbę wykresów grzebieni i ich orientację dla obiektów powierzchni.

## Uwagi

* To narzędzie działa jako pomoc wizualna.
* To narzędzie akceptuje kilka typów krzywych i elementów powierzchniowych i tworzy dodatkowe krzywe iso w kierunkach U i V dla tych drugich.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Comb** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Grzebień

* DANE**Comb Points** (`VectorList`): Punkty grzebienia.
* DANE**Edge** (`LinkSubList`): Lista kształtów wejściowych.
* DANE**Samples** (`IntegerConstraint`): Liczba próbek na wykres grzebienia.
* DANE**Scale** (`Float`): Skala (%). 0 dla automatycznego skalowania.
* DANE**Shape** (`PartShape`): Kształt wykresu grzebienia.

Powierzchnia

* DANE**Number** (`Integer`): Liczba próbek powierzchni (wykresów grzebieni) w kierunkach U i/lub V.
* DANE**Orientation** (`Enumeration`): Orientacja grzebienia powierzchni do rozłożenia próbek powierzchni (wykresów grzebieni).
  + `U` (domyślnie): Wyświetla wykresy grzebieni tylko wzdłuż kierunku U.
  + `V`: Wyświetla wykresy grzebieni tylko wzdłuż kierunku V.
  + `UV`: Wyświetla wykresy grzebieni wzdłuż obu kierunków.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricComb/pl&oldid=1567223>"