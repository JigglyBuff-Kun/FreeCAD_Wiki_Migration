---
title: Szkicownik Konwertuj geometrię na krzywą złożoną
---
|  |
| --- |
| Szkicownik: Konwertuj geometrię na krzywą złożoną |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika krzywej złożonej → Konwertuj geometrię na krzywą złożoną |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Utwórz krzywą złożoną](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_BSplineConvertToNURBS.svg) **Konwertuj geometrię na krzywą złożoną** konwertuje krawędzie do [krzywej złożonej](/B-Splines/pl "B-Splines/pl").

![](/images/Sketcher_BSplineConvertToNurb.png)

Różne obiekty przed przebudową.

![](/images/Sketcher_BSplineConvertToNurb1.png)

Te same obiekty po konwersji do krzywych złożonych.

## Użycie

1. Wybierz jedną lub więcej krawędzi.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_BSplineConvertToNURBS.svg) **Konwertuj geometrię na krzywą złożoną**.
   * Wybierz z menu **Szkic → Narzędzia szkicownika krzywej złozonej → ![](/images/Sketcher_BSplineConvertToNURBS.svg) Konwertuj geometrię na krzywą złożoną**.
3. Krawędzie są konwertowane.

## Uwagi

Upewnij się, że elementy [stopień](/Sketcher_BSplineDegree/pl "Sketcher BSplineDegree/pl"), [ramka kontrolna](/Sketcher_BSplinePolygon/pl "Sketcher BSplinePolygon/pl"), [grzebień](/Sketcher_BSplineComb/pl "Sketcher BSplineComb/pl"), [węzeł](/Sketcher_BSplineKnotMultiplicity/pl "Sketcher BSplineKnotMultiplicity/pl") i / lub [waga](/Sketcher_BSplinePoleWeight/pl "Sketcher BSplinePoleWeight/pl") są widoczne, w przeciwnym razie nic się nie stanie.

* Jeśli przekształciłeś linie proste, musisz najpierw [zwiększyć stopień](/Sketcher_BSplineIncreaseDegree/pl "Sketcher BSplineIncreaseDegree/pl") linii, aby stały się one "zginane".
* Narzędzie nie usuwa wewnętrznej geometrii [stożka](/Sketcher_Workbench/pl#Sketcher_CompCreateConic "Sketcher Workbench/pl"). Musi ona zostać usunięta samodzielnie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineConvertToNURBS/pl&oldid=1405741>"