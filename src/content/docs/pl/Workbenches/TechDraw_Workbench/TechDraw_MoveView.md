---
title: Rysunek Techniczny Przesuń widok
---
:::caution
To narzędzie jest przestarzałe, nie będzie dostępne wwersja 1.0 i powyżej.Widoki mogą być teraz przeciągane między stronami w oknieWidoku drzewa.
:::

|  |
| --- |
| Rysunek Techniczny: Przesuń widok |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Przesuń widok |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Udostępnij widok](/TechDraw_ShareView/pl "TechDraw ShareView/pl") |
|  |

## Opis

Narzędzie **Przesuń widok** przenosi widok i wszystkie jego elementy zależne *(dymki, wymiary itp.)* na inną stronę.

## Użycie

1. Opcjonalnie wybierz widok, stronę początkową i stronę docelową. Strony muszą być wybrane w tej kolejności.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_MoveView.svg) **Przesuń widok**.
   * Wybierz z menu opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_MoveView.svg) Przesuń widok**.
3. Otworzy się okno dialogowe umożliwiające wybór widoku, strony źródłowej i strony docelowej.
4. Naciśnij przycisk OK.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Przesuń widok** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
import TechDrawTools
TechDrawTools.MoveView(viewName, fromPageName, toPageName)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_MoveView/pl&oldid=1403329>"