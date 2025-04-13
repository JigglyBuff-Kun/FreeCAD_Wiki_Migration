---
title: Std Przybliż i dopasuj wszystko
---
|  |
| --- |
| Std: Dopasuj wszystko |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Dopasuj wszystko |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| V → F |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Widok dopasowany do wyboru](/Std_ViewFitSelection/pl "Std ViewFitSelection/pl") |
|  |

## Opis

Polecenie **Przybliż i dopasuj wszystko** powiększa i przesuwa ujęcie widoku tak, że wszystkie widoczne obiekty mieszczą się w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_ViewFitAll.svg) Przybliż i dopasuj wszystko.
   * Wybierz z menu opcję **Widok → Widoki standardowe → ![](/images/Std_ViewFitAll.svg) Przybliż i dopasuj wszystko**.
   * Wybierz z menu opcję **![](/images/Std_ViewFitAll.svg) Przybliż i dopasuj wszystko** z menu kontekstowego w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Wybierz opcję **![](/images/Std_ViewFitAll.svg) Dopasuj wszystko** z menu minikostki [kostki nawigacyjnej](/Navigation_Cube/pl "Navigation Cube/pl").
   * Użyj skrótu klawiaturowego: V, a następnie F.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić widok na widok *Przybliż i dopasuj wszystko*, należy użyć metody `fitAll` obiektu ActiveView.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.fitAll()

```

Alternatywnie można użyć metody `SendMsgToActiveView` obiektu FreeCADGui.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitAll/pl&oldid=1462400>"