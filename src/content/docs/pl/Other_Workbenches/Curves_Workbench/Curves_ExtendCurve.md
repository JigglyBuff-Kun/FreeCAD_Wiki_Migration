---
title: Krzywe Rozszerz krzywą
---
|  |
| --- |
| Krzywe: Rozszerz krzywą |
| Lokalizacja w menu |
| Curves → Extend Curve |
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

Narzędzie ![](/images/Curves_ExtendCurve.svg) **Rozszerz krzywą** wydłuża wybrane krawędzie z obu stron o podaną odległość.

## Użycie

1. Wybierz jedną lub więcej krawędzi w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_ExtendCurve.svg) [Extend Curve](/Curves_ExtendCurve "Curves ExtendCurve").
   * Wybierz opcję **Curves → ![](/images/Curves_ExtendCurve.svg) Extend Curve** z menu.
3. Dla każdej wybranej krawędzi utworzony zostanie obiekt **ExtendedCurve**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby dostosować długości i typy wydłużenia oraz kształt wyjściowy.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **ExtendCurve** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Edge** (`LinkSub`): Wejściowa krawędź do wydłużenia.
* DANE**Output** (`Enumeration`): Kształt wyjściowy.
  + `SingleEdge` (domyślnie): Pojedyncza ciągła krzywa.
  + `Wire`: Odrębne krzywe.

Początek

* DANE**Length Start** (`Float`): Długość wydłużenia początku.
* DANE**Type Start** (`Enumeration`): Typ wydłużenia początku.
  + `Straight` (domyślnie): Wydłużenie jest prostą linią.
  + `G2 curve`: Wydłużenie jest inną krzywą, która przyjmuje lokalną krzywiznę krawędzi wejściowej w ich wspólnych wierzchołku (ciągłość G2).

Koniec

* DANE**Length End** (`Float`):Długość wydłużenia końca.
* DANE**Type End** (`Enumeration`): Typ wydłużenia końca.
  + `Straight` (domyślnie): Wydłużenie jest prostą linią.
  + `G2 curve`: Wydłużenie jest inną krzywą, która przyjmuje lokalną krzywiznę wejściowej krawędzi w ich wspólnym wierzchołku (ciągłość G2).

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ExtendCurve/pl&oldid=1567254>"