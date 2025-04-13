---
title: Std Widok izometryczny
---
|  |
| --- |
| Std: Widok izometryczny |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Aksonometryczny → Izometryczny |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| 0 |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Widok dimetryczny](/Std_ViewDimetric/pl "Std ViewDimetric/pl"), [Widok trimetryczny](/Std_ViewTrimetric/pl "Std ViewTrimetric/pl") |
|  |

## Opis

Polecenie **Widok izometryczny** zmienia ustawienie ujęcia widoku w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl"), aby uzyskać widok [izometryczny](https://en.wikipedia.org/wiki/Isometric_projection). Aby uzyskać realnie izometryczny widok, okno widoku 3D powinno być w trybie [ortogonalnym](/Std_OrthographicCamera/pl "Std OrthographicCamera/pl"), ale polecenie działa również, jeśli widok jest ustawiony w trybie [perspektywy](/Std_PerspectiveCamera/pl "Std PerspectiveCamera/pl").

![](/images/Std_ViewIsometric_example.svg)

[Symbol osi](/Std_AxisCross/pl "Std AxisCross/pl") i sześcian w rzucie izometrycznym

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_ViewIsometric.svg) Izometryczny.
   * Wybierz z menu opcję **Widok → Widoki standardowe → Aksonometria → ![](/images/Std_ViewIsometric.svg) Izometryczny**.
   * Wybierz opcję z menu podręcznego **Widoki standardowe → ![](/images/Std_ViewIsometric.svg) Izometryczny** w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Wybierz opcję **![](/images/Std_ViewIsometric.svg) Izometryczny** z menu mini kostki [kostki nawigacyjnej](/Navigation_Cube/pl "Navigation Cube/pl").
   * Użyj skrótu klawiaturowego: 0.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić widok na widok *izometryczny*, należy użyć metody `viewIsometric` obiektu View. Dostępne są też metody `viewDimetric` i `viewTrimetric`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewIsometric()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIsometric/pl&oldid=1462378>"