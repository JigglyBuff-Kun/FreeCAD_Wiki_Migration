---
title: Rysunek Techniczny Rozszerzenie Seria wymiarów kaskadowych pionowo
---
|  |
| --- |
| Rysunek Techniczny: Rozszerzenie Seria wymiarów kaskadowych pionowo |
| Lokalizacja w menu |
| Rysunek Techniczny → Rozszerzenia: Wymiary → Seria wymiarów kaskadowych pionowo |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Seria wymiarów kaskadowych poziomo](/TechDraw_ExtensionCreateHorizCoordDimension/pl "TechDraw ExtensionCreateHorizCoordDimension/pl"), [Seria wymiarów kaskadowych ukośnie](/TechDraw_ExtensionCreateObliqueCoordDimension/pl "TechDraw ExtensionCreateObliqueCoordDimension/pl") |
|  |

## Opis

Narzędzie **Seria wymiarów kaskadowych pionowo** tworzy pionowe wymiary współrzędnych: wiele równomiernie rozmieszczonych wymiarów zaczynających się od tej samej linii bazowej.

![](/images/TechDraw_ExtensionCreateVertCoordDimensionExample.png)

Po prawej utworzony ciąg wymiarów

## Użycie

1. Opcjonalnie określ odstęp kaskadowy za pomocą narzędzia ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Wybierz atrybuty linii](/TechDraw_ExtensionSelectLineAttributes/pl "TechDraw ExtensionSelectLineAttributes/pl").
2. Wybierz trzy lub więcej wierzchołków.
3. Kolejność wyboru pierwszych dwóch wierzchołków określa położenie linii bazowej. Jeśli wierzchołek wybrany jako pierwszy znajduje się poniżej drugiego, linia bazowa jest tworzona w najniższym wierzchołku, w przeciwnym razie jest tworzona w najwyższym wierzchołku.
4. Narzędzie można wywołać na kilka sposobów:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [preferencja](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") **Narzędzie wymiarowania** jest ustawiona na `Narzędzie pojedyncze` (domyślnie): kliknij na strzałce skierowanej w dół po prawej stronie od przycisku ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Seria wymiarów kaskadowych pionowo** z listy rozwijanej.
   * Jeśli ta preferencja ma inną wartość (i wersja 0.21 i poniżej): wciśnij przycisk ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Seria wymiarów kaskadowych pionowo.
   * Wybierz opcję z menu **Rysunek Techniczny → Rozszerzenia: Wymiary → ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Seria wymiarów kaskadowych pionowo**.
5. Tworzone są wymiary współrzędnych z wyśrodkowanymi tekstami wymiarowania.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateVertCoordDimension/pl&oldid=1486985>"