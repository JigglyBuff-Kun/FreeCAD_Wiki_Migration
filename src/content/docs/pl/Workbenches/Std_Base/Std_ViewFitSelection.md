---
title: Std Widok dopasowany do wyboru
---
|  |
| --- |
| Std: Widok dopasowany do wyboru |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Dopasuj do wyboru |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| V → S |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Dopasuj wszystko](/Std_ViewFitAll/pl "Std ViewFitAll/pl") |
|  |

## Opis

Polecenie **Dopasuj do wyboru** powiększa i przesuwa ujęcie widoku tak, że wszystkie wybrane obiekty mieszczą się w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl"). Polecenie to jest przydatne w przypadkach, gdy z jakiegoś powodu obiekty znajdują się poza granicami bieżącego widoku 3D lub nie mogą być łatwo znalezione przy użyciu [nawigacji myszką](/Mouse_navigation/pl "Mouse navigation/pl").

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_ViewFitSelection.svg) Dopasuj do wyboru.
   * Wybierz z menu opcję **Widok → Widoki standardowe → ![](/images/Std_ViewFitSelection.svg)Dopasuj do wyboru**.
   * Wybierz z menu opcję **![](/images/Std_ViewFitSelection.svg) Dopasuj do wyboru** z menu kontekstowego w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Wybierz opcję **![](/images/Std_ViewFitSelection.svg) Dopasuj do widoku** z menu mini kostki [kostki nawigacyjnej](/Navigation_Cube/pl "Navigation Cube/pl").
   * Użyj skrótu klawiaturowego: V, a następnie S.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić widok na *dopasowany do wyboru* można użyć metody `SendMsgToActiveView` obiektu FreeCADGui.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewSelection")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitSelection/pl&oldid=1462391>"