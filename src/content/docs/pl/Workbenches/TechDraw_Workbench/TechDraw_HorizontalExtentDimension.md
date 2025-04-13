---
title: Rysunek Techniczny Wstaw wymiar rozpiętości poziomej
---
|  |
| --- |
| Rysunek Techniczny: Wstaw wymiar rozpiętości poziomej |
| Lokalizacja w menu |
| Rysunek Techniczny → Wymiary → Wstaw wymiar rozpiętości poziomej |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), [Wstaw wymiar rozpiętości pionowej](/TechDraw_VerticalExtentDimension/pl "TechDraw VerticalExtentDimension/pl") |
|  |

## Opis

Narzędzie **Wstaw wymiar rozpiętości poziomej** dodaje wymiar liniowy do widoku. Wymiar rozciąga się od najbardziej wysuniętego na lewo punktu na wybranych obiektach do najbardziej wysuniętego na prawo punktu.

![](/images/TechDraw_Dimension_Horizontal_Extent_example.png)

Poziome i pionowe wymiary rozpiętości krzywej złożonej

## Użycie

1. Wybierz widok lub zestaw krawędzi w widoku.
2. Narzędzie można wywołać na kilka sposobów:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [preferencja](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") **Narzędzie wymiarowania** jest ustawiona na `Narzędzie pojedyncze` (domyślnie): kliknij na strzałce skierowanej w dół po prawej stronie od przycisku ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/TechDraw_HorizontalExtentDimension.svg) Wstaw wymiar rozpiętości poziomej** z listy rozwijanej.
   * Jeśli ta preferencja ma inną wartość (i wersja 0.21 i poniżej): wciśnij przycisk ![](/images/TechDraw_HorizontalExtentDimension.svg) Wstaw wymiar rozpiętości poziomej.
   * Wybierz opcję z menu **Rysunek Techniczny → Wymiary → ![](/images/TechDraw_HorizontalExtentDimension.svg) Wstaw wymiar rozpiętości poziomej**.
3. Wymiar zostanie dodany do widoku.
4. Wymiar można przeciągnąć do żądanej pozycji.
5. W razie potrzeby dodaj tolerancje zgodnie z opisem na stronie [Wymiarowanie i tolerancja](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerancja "TechDraw Geometric dimensioning and tolerancing").

### Zmiana właściwości

Aby zmienić właściwości obiektu wymiaru, kliknij dwukrotnie na niego w rysunku lub w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Spowoduje to otwarcie okna [dialogowego wymiaru](/TechDraw_LengthDimension/pl#Okno_dialogowe "TechDraw LengthDimension/pl").

## Ograniczenia

Obiekty wymiarowe są podatne na "[problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl")". Zobacz stronę [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"), aby uzyskać więcej informacji.

## Uwagi

Zapoznaj się również informacjami na stroni e[Wymiar długości](/TechDraw_LengthDimension/pl#Uwagi "TechDraw LengthDimension/pl").

## Właściwości

Zapoznaj się z informacjami na stronie [Wstaw wymiar długości](/TechDraw_LengthDimension/pl#Właściwości "TechDraw LengthDimension/pl"). Wyjątki opisano poniżej.

### Dane

Podstawowe

* DANE**TypPomiaru**: Nie wdrożono jeszcze dla wymiarów rozpiętości.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw wymiar rozpiętości poziomej** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
selection = ['Edge1', 'Edge2']                      # or [] for all

TechDraw.makeExtentDim(view1, selection, 0)         # view1 is a DrawViewPart; 0 for horizontal
App.ActiveDocument.DimExtent.Y = -60                # offset dimension line from dimensioned edges in Y direction
App.ActiveDocument.DimExtent.X = 10                 # offset dimension text along dimension line in X direction
App.ActiveDocument.DimExtent.FormatSpec = '%.0f'    # Dimension format

TechDraw.makeExtentDim(view1, selection, 1)         # view1 is a DrawViewPart; 1 for vertical
App.ActiveDocument.DimExtent001.X = -130            # offset dimension line from dimensioned edges in X direction
App.ActiveDocument.DimExtent001.Y = 10              # offset dimension text along dimension line in Y direction
App.ActiveDocument.DimExtent001.FormatSpec = '%.0f'

# Note the dimension names are 'DimExtent', 'DimExtent001' etc in the order created.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_HorizontalExtentDimension/pl&oldid=1486975>"