---
title: Rysunek Techniczny Rozszerzenie Seria wymiarów kaskadowych poziomo
---
|  |
| --- |
| Rysunek Techniczny: Rozszerzenie Seria wymiarów kaskadowych poziomo |
| Lokalizacja w menu |
| Rysunek Techniczny → Rozszerzenia: Wymiary → Seria wymiarów poziomo |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Seria wymiarów kaskadowych pionowo](/TechDraw_ExtensionCreateVertCoordDimension/pl "TechDraw ExtensionCreateVertCoordDimension/pl"), [Seria wymiarów kaskadowych ukośnie](/TechDraw_ExtensionCreateObliqueCoordDimension/pl "TechDraw ExtensionCreateObliqueCoordDimension/pl") |
|  |

## Opis

Narzędzie **Seria wymiarów kaskadowych poziomo** tworzy poziome wymiary współrzędnych: wiele równomiernie rozmieszczonych wymiarów zaczynających się od tej samej linii bazowej.

![](/images/TechDraw_ExtensionCreateHorizCoordDimensionExample.png)

Po prawej utworzony ciąg wymiarów

## Użycie

1. Opcjonalnie określ odstęp kaskadowy za pomocą narzędzia ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Wybierz atrybuty linii](/TechDraw_ExtensionSelectLineAttributes "TechDraw ExtensionSelectLineAttributes").
2. Wybierz trzy lub więcej wierzchołków.
3. Kolejność wyboru pierwszych dwóch wierzchołków określa położenie linii bazowej. Jeśli wierzchołek wybrany jako pierwszy znajduje się na lewo od drugiego, linia bazowa jest tworzona w wierzchołku najbardziej wysuniętym na lewo, w przeciwnym razie jest tworzona w wierzchołku najbardziej wysuniętym na prawo.
4. Narzędzie można wywołać na kilka sposobów:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [preferencja](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") **Narzędzie wymiarowania** jest ustawiona na `Narzędzie pojedyncze` (domyślnie): kliknij na strzałce skierowanej w dół po prawej stronie od przycisku ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) Seria wymiarów kaskadowych poziomo** z listy rozwijanej.
   * Jeśli ta preferencja ma inną wartość (i wersja 0.21 i poniżej): wciśnij przycisk ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) Seria wymiarów kaskadowych poziomo.
   * Wybierz opcję z menu **Rysunek Techniczny → Rozszerzenia: Wymiary → ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) Seria wymiarów kaskadowych poziomo**.
5. Tworzone są wymiary współrzędnych z wyśrodkowanymi tekstami wymiarowania.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateHorizCoordDimension/pl&oldid=1486983>"