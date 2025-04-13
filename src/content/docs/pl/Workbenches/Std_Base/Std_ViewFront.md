---
title: Std Widok od przodu
---
|  |
| --- |
| Std: Widok od przodu |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Od przodu |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| 1 |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Widok od góry](/Std_ViewTop/pl "Std ViewTop/pl"), [Widok od prawej](/Std_ViewRight/pl "Std ViewRight/pl") |
|  |

## Opis

Polecenie **Widok od przodu** ustawia ujęcie widoku w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl") w kierunku dodatnim osi Y.

![](/images/FreeCAD_views_front.svg)

Strzałka 1 wskazuje kierunek widoku z przodu.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_ViewFront.svg) Od przodu.
   * Wybierz z menu opcję **Widok → Widoki standardowe → ![](/images/Std_ViewFront.svg) Od przodu**.
   * Z menu podręcznego [widoku 3D](/3D_view/pl "3D view/pl") wybierz opcję **Widoki standardowe → ![](/images/Std_ViewFront.svg) Od przodu**.
   * Użyj skrótu klawiaturowego: 1.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić widok na widok *Od przodu*, należy użyć metody `viewFront`. Dostępne są też metody dla pozostąłych głównych orientacji widoku: `viewTop`, `viewRight`, `viewRear`, `viewBottom` i `viewRight`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewFront()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFront/pl&oldid=1468665>"