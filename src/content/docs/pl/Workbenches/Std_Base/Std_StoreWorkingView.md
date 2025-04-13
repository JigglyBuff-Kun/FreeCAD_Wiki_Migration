---
title: Std Przechowaj widok roboczy
---
|  |
| --- |
| Std: Zachowaj widok |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Przechowaj widok roboczy |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Shift + End |
| Wprowadzono w wersji |
| 0.21 |
| Zobacz także |
| [Odtwórz widok](/Std_RecallWorkingView/pl "Std RecallWorkingView/pl"), [Zamroź widok](/Std_FreezeViews/pl "Std FreezeViews/pl") |
|  |

## Opis

Polecenie **Przechowaj widok roboczy** zapisuje ustawienia ujęcia widoku aktywnego okna [widoku 3D](/3D_view/pl "3D view/pl") w tymczasowym widoku roboczym. Widok ten można przywołać za pomocą polecenia [Odtwórz widok](/Std_RecallWorkingView/pl "Std RecallWorkingView/pl").

Każdy widok 3D ma swój własny widok roboczy. Zapisanie nowego widoku roboczego spowoduje zastąpienie istniejącego widoku roboczego aktywnego okna widoku 3D. Po zamknięciu widoku 3D jego widok roboczy zostaje utracony.

## Użycie

1. Upewnij się, że okno [widoku 3D](/3D_view/pl "3D view/pl") jest aktywne.
2. Polecenie można wywołać na kilka sposobów:
   * Wybierz z menu opcję **Widok → Widoki standardowe → Przechowaj widok roboczy**.
   * Użyj skrótu klawiaturowego: Shift + End.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Zapisywanie bieżących ustawień ujęcia widoku aktywnego okna widoku 3D w widoku roboczym:

```
import FreeCADGui

FreeCADGui.runCommand("Std_StoreWorkingView", 0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_StoreWorkingView/pl&oldid=1462214>"