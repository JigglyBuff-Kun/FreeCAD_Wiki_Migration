---
title: Std Symbol osi
---
|  |
| --- |
| Std: Symbol osi |
| Lokalizacja w menu |
| Widok → Przełącz krzyż osi |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| A C |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Symbol osi** włącza / wyłącza krzyż osi w aktywnym oknie [Widoku 3D](/3D_view/pl "3D view/pl").

Krzyż osi składa się z trzech strzałek reprezentujących osie X, Y i Z globalnego układu współrzędnych w kierunku dodatnim. Ich wspólnym punktem początkowym jest początek globalnego układu współrzędnych.

![](/images/Std_AxisCross_example.svg)

Krzyż osi *(litery nie są częścią krzyża osi)*.

## Użycie

1. Istnieje kilka sposobów wywołania tego polecenia:
   * Wybierz z menu opcję **Widok → ![](/images/Std_AxisCross.svg) Przełącz krzyż osi**.
   * Użyj skrótu klawiaturowego: V kolejnie P.

## Uwagi

* FreeCAD może wyświetlać mniejszy symbol układu współrzędnych w prawym dolnym rogu okna widoków 3D: **Edycja → Preferencje ... → Wyświetlanie → Widok 3D → Pokaż w narożniku symbol układu współrzędnych**. Patrz [Edytor preferencji](/Preferences_Editor/pl#Widok_3D "Preferences Editor/pl")
* [Kostka do nawigacji 3D](/Navigation_Cube/pl "Navigation Cube/pl") zawiera również wskaźnik układu współrzędnych.

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

Domyślne ustawienie krzyża osi można zmienić w preferencjach: **Edycja → Preferencje ... → Wyświetlanie → Widok 3D → Pokaż w narożniku symbol układu współrzędnych**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby przełączyć widoczność **symbolu osi**, należy użyć metody `setAxisCross` obiektu View.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setAxisCross(True)
view.hasAxisCross()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AxisCross/pl&oldid=1468714>"