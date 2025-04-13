---
title: Std Odwróć widok w lewo
---
|  |
| --- |
| Std: Odwróć widok w lewo |
| Lokalizacja w menu |
| Widok → Widoki standardowe → Odwróć w lewo |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Shift+Lewo |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Odwróć widok w prawo](/Std_ViewRotateRight/pl "Std ViewRotateRight/pl") |
|  |

## Opis

Polecenie **Odwróć widok w lewo** obraca widok w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl") wokół osi normalnej *(prostopadłej do widoku)*, w 90-stopniowych przyrostach w lewo *(przeciwnie do ruchu wskazówek zegara)*.

## Użycie

1. Istnieje kilka sposobów wywołania tego polecenia:
   * Wybierz opcję **Widok → Widoki standardowe → ![](/images/Std_ViewRotateLeft.svg) Odwróć w lewo** z menu.
   * Wybierz opcję **Widoki standardowe → ![](/images/Std_ViewRotateLeft.svg) Odwróć w lewo** z menu podręcznego w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Użyj skrótu klawiaturowego: Shift + Lewo.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby obrócić widok w lewo, użyj metody `viewRotateLeft` obiektu *ActiveView*. Dostępna jest też metoda `viewRotateRight`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewRotateLeft()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewRotateLeft/pl&oldid=1462426>"