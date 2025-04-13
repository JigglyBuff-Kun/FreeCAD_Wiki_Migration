---
title: Krzywe Wydziel
---
|  |
| --- |
| Krzywe: Wydziel |
| Lokalizacja w menu |
| Curves → Discretize |
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

Narzędzie ![](/images/Curves_Discretize.svg) **Wydziel** dyskretyzuje krawędź lub polilinię, a zatem tworzy zestaw punktów wzdłuż krawędzi/polilinii zgodnie z wybraną metodą dyskretyzacji.

## Użycie

1. Wybierz jedną lub więcej krawędzi w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_Discretize.svg) [Discretize](/Curves_Discretize "Curves Discretize").
   * Wybierz opcję **Curves → ![](/images/Curves_Discretize.svg) Discretize** z menu.
3. Dla każdej wybranej krawędzi utworzony zostanie obiekt **Discretized\_Edge**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby wybrać inną metodę dyskretyzacji i dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt *Discretized\_Edge'* wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Discretized

* DANE**Edge** (`LinkSub`): Krawędź wejściowa.
* DANE**Point** (`VectorList`): Lista punktów wyjściowych.
* DANE**Target** (`Enumeration`): Cel narzędzia.
  + `SingleEdge` (default): Dyskretyzuje tylko wybraną krawędź.
  + `Wire`: Dyskretyzuje całą polilinię, do której należy krawędź.

Metoda

* DANE**Algorithm** (`Enumeration`): Metoda dyskretyzacji.
  + `Number` (domyślnie): Liczba punktów równomiernie rozłożonych wzdłuż wybranej krawędzi/polilinii.
  + `QuasiNumber`: ...
  + `Distance`: Wszystkie punkty są umieszczane w tej samej odległości od ich sąsiadów oprócz ostatniej pary.
  + `Deflection`: ...
  + `QuasiDeflection`: ...
  + `Angular-Curvature`: ...
* DANE**Angular** (`Float`): Wartość kąta dla algorytmu krzywizny kątowej.
* DANE**Curvature** (`Float`): Wartość krzywizny dla algorytmu krzywizny kątowej.
* DANE**Deflection** (`Float`): Odległość dla algorytmu ugięcia.
* DANE**Distance** (`Float`): Odległość między punktami krawędzi.
* DANE**Minimum** (`Integer`): Minimalna liczba punktów.
* DANE**Number** (`Integer`): Liczba punktów krawędzi.

Output

* DANE**Normalized Parameters** (`FloatList`): Znormalizowana lista parametrów.

Parametry

* DANE**Parameter First** (`Float`): Parametr początkowy.
* DANE**Parameter Last** (`Float`): Parametr końcowy.

## Tworzenie skryptów

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Discretize/pl&oldid=1570714>"