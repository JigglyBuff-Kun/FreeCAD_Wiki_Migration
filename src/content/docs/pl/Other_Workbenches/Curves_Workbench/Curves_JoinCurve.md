---
title: Krzywe Połącz krzywą
---
|  |
| --- |
| Krzywe: Połącz krzywą |
| Lokalizacja w menu |
| Curves → Join Curve |
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

Narzędzie ![](/images/Curves_JoinCurve.svg) **Połącz krzywą** łączy wybrane krawędzie w krzywą złożoną.

![](/images/JoinCurve_pic1.jpg)

## Użycie

1. Wybierz jedną lub więcej krawędzi w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Curves_JoinCurve.svg) [joinCurves](/Curves_JoinCurve "Curves JoinCurve").
   * Wybierz opcję **Curves → ![](/images/Curves_JoinCurve.svg) joinCurves** z menu.
3. Utworzony zostanie obiekt **JoinCurve**.
4. Opcjonalnie edytuj wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") aby wybrać inną metodę parametryzacji i dostosować powiązane właściwości (zobacz Właściwości poniżej).

## Uwagi

* Krawędzie kształtu lub krawędzie wybrane ze szkicu są akceptowane i muszą być dodawane po kolei.
* Wynikiem jest pojedyncza ciągła krzywa złożona.

## Właściwości

### Dane

InputSources

* DANE**Base** (`Link`): Połącz wszystkie krawędzie tego obiektu bazowego.
* DANE**Edges** (`LinkSubList`): Lista krawędzi do połączenia.

Join

* DANE**CornerBreak** (`Bool`): Przerwij w ostrych narożnikach.
* DANE**ForceClosed** (`Bool`): Wymuś zamkniętą krzywą.
* DANE**ForceContact** (`Bool`): Wymuś połączenie krawędzi.
* DANE**Reverse** (`Bool`): Odwróć krzywą wyjściową.
* DANE**StartOffset** (`Integer`): Ustaw punkt początkowy zamkniętej krzywej.
* DANE**Tolerance** (`Float`): Tolerancja.

ShapeApproximation

* DANE**Active** (`Bool`): Użyj aproksymacji.
* DANE (Hidden)**ApproxTolerance** (`Float`): Tolerancja aproksymacji..
* DANE (Hidden)**Continuity** (`Enumeration`): Żądana ciągłość krzywej. (`C0`, `C1`, `G1`, `C2`, `G2`, `C3` (domyślnie), `CN`)
* DANE (Hidden)**DegreeMax** (`Integer`): Maksymalny stopień krzywej.
* DANE (Hidden)**DegreeMin** (`Integer`): Minimalny stopień krzywej.
* DANE**ExtensionProxy** (`PythonObject`): Obiekt pośredni wydłużenia aproksymacji.
* DANE (Hidden)**Parametrization** (`Enumeration`): Typ parametryzacji.
  + `ChordLength`: ...
  + `Centripetal`: ...
  + `Uniform`: ...
* DANE (Hidden)**Samples** (`Integer`): Liczba próbek.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_JoinCurve/pl&oldid=1568330>"