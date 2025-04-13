---
title: Rysunek Techniczny Wyeksportuj stronę do formatu SVG
---
|  |
| --- |
| Rysunek Techniczny: Wyeksportuj stronę do formatu SVG |
| Lokalizacja w menu |
| Rysunek Techniczny → Strona → Wyeksportuj stronę do formatu SVG |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Szablony](/TechDraw_Templates/pl "TechDraw Templates/pl"), [SVG](/Draft_SVG/pl "Draft SVG/pl") |
|  |

## Opis

Narzędzie **Wyeksportuj stronę do formatu SVG** zapisuje bieżącą stronę rysunku jako plik [SVG](/SVG/pl "SVG/pl").

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj żądaną stronę, wybierając ją w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ExportPageSVG.svg) Export Page as SVG.
   * Wybierz opcję z menu **TechDraw → Strona → ![](/images/TechDraw_ExportPageSVG.svg) Eksportuj stronę jako SVG**.
   * Jeśli strona jest wyświetlana w [głównym obszarze widoku](/Main_view_area/pl "Main view area/pl"): kliknij prawym przyciskiem myszki okno strony i wybierz opcję **Eksportuj do formatu SVG** z menu podręcznego.
3. Jeśli w dokumencie znajduje się wiele stron rysunku, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
4. Otworzy się okno dialogowe **Eksportuj stronę do formatu SVG**.
5. Wybierz lokalizację i nazwę pliku.

## Uwagi

* Wzory [kreskowania](/TechDraw_Hatch/pl "TechDraw Hatch/pl") nie są eksportowane do pliku [SVG](/SVG/pl "SVG/pl") z powodu ograniczeń w obsłudze SVG w Qt4.
* Pozycje i rozmiary tekstu nie są poprawne w wyeksportowanym pliku. Użycie domyślnej czcionki "systemowej" na rysunku znacznie poprawia problem z rozmiarem.

## Tworzenie skryptów

Zobacz również strony: [Autogenerowana dokumentacja API](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wyeksportuj stronę do formatu SVG** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
TechDrawGui.exportPageAsSvg(DrawPageObject,FilePath)

```

Należy pamiętać, że moduł FreeCADGui musi być aktywny, aby korzystać z tej funkcji.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageSVG/pl&oldid=1486499>"