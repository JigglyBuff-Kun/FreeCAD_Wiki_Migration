---
title: Std Odtwórz widok
---
|  |
| --- |
| Std: Odtwórz widok |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Odtwórz widok |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| End |
| Wprowadzono w wersji |
| 0.21 |
| Zobacz także |
| [Przechowaj widok roboczy](/Std_StoreWorkingView/pl "Std StoreWorkingView/pl"), [Zamroź widok](/Std_FreezeViews/pl "Std FreezeViews/pl") |
|  |

## Opis

Polecenie **Odtwórz widok** przywołuje zapisany widok roboczy aktywnego okna [widoku 3D](/3D_view/pl "3D view/pl"). Więcej informacji można znaleźć na stronie [Przechowaj widok roboczy](/Std_StoreWorkingView/pl "Std StoreWorkingView/pl").

## Użycie

1. Upewnij się, że aktywne jest okno [widoku 3D](/3D_view/pl "3D view/pl"), dla którego co najmniej raz użyto polecenia [Przechowaj widok roboczy](/Std_StoreWorkingView/pl "Std StoreWorkingView/pl").
2. Polecenie można wywołać na kilka sposobów:
   * Wybierając z menu opcję **Widok → Widoki standardowe → Odtwórz widok**.
   * Użyć skrótu klawiaturowego: End.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Odtworzenie zapisanego widoku roboczego do aktywnego okna widoku 3D:

```
import FreeCADGui

FreeCADGui.runCommand("Std_RecallWorkingView", 0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_RecallWorkingView/pl&oldid=1462336>"