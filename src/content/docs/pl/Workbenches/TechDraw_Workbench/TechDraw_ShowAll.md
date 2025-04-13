---
title: Rysunek Techniczny Pokaż / ukryj niewidoczne krawędzie
---
|  |
| --- |
| Rysunek Techniczny: Pokaż / ukryj niewidoczne krawędzie |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj linie → Pokaż / ukryj niewidoczne krawędzie |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Zmień wygląd linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl") |
|  |

## Opis

służy do tymczasowego wyświetlania, a następnie ukrywania niewidocznych linii w widoku. Linie mogą być ukryte za pomocą narzędzia [Zmień wygląd linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl"). Należy pamiętać, że "niewidoczność" jest stanem kosmetycznym, którego nie należy mylić z ukrytymi liniami, które są konstrukcjami geometrycznymi.

## Użycie

1. Wybierz widok z niewidocznymi liniami na stronie lub w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ShowAll.svg) **Pokaż / Ukryj niewidoczne krawędzie**.
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_ShowAll.svg) Pokaż / Ukryj niewidoczne krawędzie**.
3. Wszystkie niewidoczne linie w widoku są wyświetlane lub ukrywane.

## Uwagi

* Aby trwale uwidocznić niewidoczne linie, użyj narzędzia ![](/images/TechDraw_DecorateLine.svg) [Zmień wygląd linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Efekt działania funkcji **Pokaż / ukryj niewidoczne krawędzie** może być powielony przez [makrodefinicje](/Macros/pl "Macros/pl") lub konsoli z [Python](/Python/pl "Python/pl").

```
v = App.ActiveDocument.View
vvo = v.ViewObject
vvo.ShowAllEdges = True
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ShowAll/pl&oldid=1293651>"