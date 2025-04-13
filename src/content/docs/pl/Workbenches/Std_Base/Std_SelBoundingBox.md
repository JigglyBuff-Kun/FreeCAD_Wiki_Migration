---
title: Std Ramka otaczająca
---
|  |
| --- |
| Std: Ramka otaczająca |
| Lokalizacja w menu |
| Widok → Ramka otaczająca |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl") |
|  |

## Opis

Polecenie **Ramka otaczająca** włącza globalny tryb wyróżniania ramek obramowań. Jeśli ten tryb jest włączony, wybrane obiekty są oznaczane w oknie [widoku 3D](/3D_view/pl "3D view/pl") podświetlonym obramowaniem, nawet jeśli ich parametr WIDOK**Styl zaznaczenia** jest ustawiony na wartość `Kształt`.

## Użycie

1. * Wybierz opcję z menu **Widok → ![](/images/Std_SelBoundingBox.svg) Ramka otaczająca**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić parametr ShowSelectionBoundingBox, należy użyć metody `SetBool` odpowiedniego ParameterGrp.

```
import FreeCAD, FreeCADGui

grp = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/View")
if grp.GetBool("ShowSelectionBoundingBox"):
    grp.SetBool("ShowSelectionBoundingBox", False)
else:
    grp.SetBool("ShowSelectionBoundingBox", True)

FreeCADGui.updateCommands()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SelBoundingBox/pl&oldid=1468685>"