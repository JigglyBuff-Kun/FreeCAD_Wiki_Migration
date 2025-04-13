---
title: Std Parametry ujęcia widoku
---
|  |
| --- |
| Std: Parametry ujęcia widoku |
| Lokalizacja w menu |
| Widok → Widok trójwymiarowy → Parametry ujęcia widoku |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zamroź widok](/Std_FreezeViews/pl "Std FreezeViews/pl") |
|  |

## Opis

Polecenie **Std ViewIvIssueCamPos** wyświetla ustawienia ujęcia aktywnego [widoku 3D](/3D_view/pl "3D view/pl") w oknie [Widoku raportu](/Report_view/pl "Report view/pl") i [konsoli Python](/Python_console/pl "Python console/pl").

```
OrthographicCamera {   viewportMapping ADJUST_CAMERA   position 57.73505 -57.73502 57.735027   orientation 0.74290609 0.30772209 0.59447283  1.2171158   nearDistance 81.588844   farDistance 109.60551   aspectRatio 1   focalDistance 100   height 100  }

```

Przykładowe wyświetlone dane: ustawienia ujęcia widoku po zmianie widoku na [izometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl") w nowym dokumencie

## Użycie

1. Wybierz z menu opcję **Widok → Widok trójwymiarowy → ![](/images/Std_ViewIvIssueCamPos.svg) Parametry ujęcia widoku**.

## Uwagi

* Ustawienia kamery można wykorzystać do dodania zamrożenia widoków do pliku \*.cam. Zobacz stronę [Zamroź widok](/Std_FreezeViews/pl "Std FreezeViews/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Metoda `getCamera` obiektu View zwraca te same parametry ustawienia ujęcia widoku w postaci pojedynczego ciągu znaków.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.getCamera()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvIssueCamPos/pl&oldid=1468691>"