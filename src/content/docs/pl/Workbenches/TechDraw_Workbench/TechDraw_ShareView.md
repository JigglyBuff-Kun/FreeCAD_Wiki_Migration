---
title: Rysunek Techniczny Udostępnij widok
---
|  |
| --- |
| Rysunek Techniczny: Udostępnij widok |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Udostępnij widok |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Udostępnij widok** udostępnia widok i wszystkie jego elementy zależne *(dymki, wymiary itp.)* na inną stronę.

## Użycie

1. Opcjonalnie wybierz widok, stronę początkową i stronę docelową. Strony muszą być wybrane w tej kolejności.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ShareView.svg) **Udostępnij widok**.
   * Wybierz z menu opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_ShareView.svg) Udostępnij widok**.
3. Otworzy się okno dialogowe umożliwiające wybór widoku, strony źródłowej i strony docelowej.
4. Naciśnij przycisk OK.

## Uwagi

Po operacji udostępniania istnieje tylko jeden obiekt widoku. Wszelkie zmiany wprowadzone w widoku zostaną odzwierciedlone na obu stronach. Jeśli widok zostanie usunięty z jednej strony, zostanie również usunięty z drugiej strony.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Udostępnij widok** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
import TechDrawTools
#MoveView with a True parameter in the last position performs a copy
TechDrawTools.MoveView(viewName, fromPageName, toPageName, True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ShareView/pl&oldid=1486430>"