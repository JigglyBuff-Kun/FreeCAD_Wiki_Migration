---
title: Std Widok ortogonalny
---
|  |
| --- |
| Std: Widok ortogonalny |
| Lokalizacja w menu |
| Widok → Widok ortogonalny |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| V → O |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Widok perspektywy](/Std_PerspectiveCamera/pl "Std PerspectiveCamera/pl") |
|  |

## Opis

Polecenie **Widok ortogonalny** przełącza ujęcie widoku w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl") w tryb widoku ortogonalnego. W tym trybie obiekty znajdujące się dalej od kamery nie wydają się mniejsze od tych, które znajdują się bliżej.

![](/images/Std_OrthographicCamera_example.svg)

Dwa sześciany o tych samych wymiarach w widoku ortogonalnym

## Użycie

1. Istnieje kilka sposobów wywołania tego polecenia:
   * Wybierz z menu opcję **Widok → ![](/images/Std_OrthographicCamera.svg) Widok ortogonalny**.
   * Wybierz opcję **![](/images/Std_OrthographicCamera.svg) Widok ortogonalny** z menu mini kostki [nawigacyjnej](/Navigation_Cube/pl "Navigation Cube/pl").
   * Użyj skrótu klawiaturowego: V kolejnie O.

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* Typ ujęcia widoku można zmienić w preferencjach: **Edycja → Preferencje ... → Wyświetlanie → Widok 3D → Typ projekcji**. Wybrany typ będzie używany dla wszystkich widoków 3D wszystkich otwartych dokumentów, a także dla nowych dokumentów.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Użyj metody `setCameraType` obiektu View aby zmienić widok na ortogonalny lub perspektywę.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setCameraType("Perspective")
view.setCameraType("Orthographic")
view.getCameraType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_OrthographicCamera/pl&oldid=1468940>"