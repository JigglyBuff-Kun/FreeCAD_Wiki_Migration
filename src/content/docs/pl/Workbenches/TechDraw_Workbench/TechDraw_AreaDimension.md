---
title: Rysunek Techniczny Wstaw adnotację obszaru
---
|  |
| --- |
| Rysunek Techniczny: Wstaw adnotację obszaru |
| Lokalizacja w menu |
| Rysunek Techniczny → Wymiary → Wstaw adnotację obszaru |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Oblicz obszar wybranych powierzchni](/TechDraw_ExtensionAreaAnnotation/pl "TechDraw ExtensionAreaAnnotation/pl") |
|  |

## Opis

Narzędzie **Wstaw adnotację obszaru** dodaje wymiar pola powierzchni do ściany w Widoku części.

![](/images/TechDraw_AreaDimension_Example.png)

Adnotacja obszaru ściany z otworem. Zobacz [Ograniczenia](#Limitations/pl).

## Użycie

1. Wybierz ścianę. Geometria może zostać wskazana w [widoku 3D](/3D_view/pl "3D view/pl") lub w obrębie rysunku.
2. Jeśli wskazałeś geometrię w widoku 3D: dodaj poprawny Widok do wskazania poprzez zaznaczenie go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego narzędzia:
   * Jeśli [preferencja](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") **Narzędzie wymiarowania** jest ustawiona na `Narzędzie pojedyncze` (domyślnie): kliknij strzałkę w dół po prawej stronie od przycisku ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/TechDraw_AreaDimension.svg) Wstaw adnotację obszaru** z listy rozwijanej.
   * Jeśli ta preferencja ma inną wartość: wciśnij przycisk ![](/images/TechDraw_AreaDimension.svg) Wstaw adnotację obszaru.
   * Wybierz opcję **Rysunek Techniczny → Wymiary → ![](/images/TechDraw_AreaDimension.svg) Wstaw adnotację obszaru** z menu.
4. Wymiar zostanie dodany do widoku.
5. Wymiar można przeciągnąć do żądanego położenia.
6. Jeśli to potrzebne, dodaj tolerancje zgodnie z opisem na [tej stronie](/TechDraw_Geometric_dimensioning_and_tolerancing/pl#Tolerancja "TechDraw Geometric dimensioning and tolerancing/pl").

## Ograniczenia

* wersja 1.0 i poniżej: To narzędzie może wykrywać otwory (*wyspy*) tylko w ścianach wskazanych w widoku 3D. Aby uzyskać poprawne pole powierzchni dla takiej ściany zaznaczonej w obrębie rysunku, należy wykonać następujące czynności:
  1. Ustawić poprawnie właściwość DANE**References 3D** używając narzędzia ![](/images/TechDraw_DimensionRepair.svg) [Napraw odniesienia do wymiarów](/TechDraw_DimensionRepair/pl "TechDraw DimensionRepair/pl").
  2. Zmienić właściwość DANE**Measure Type** na `True`.
  3. Użyć narzędzia ![](/images/Std_Refresh.svg) [Std: Przelicz](/Std_Refresh/pl "Std Refresh/pl") jeśli to konieczne.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_AreaDimension/pl&oldid=1512606>"