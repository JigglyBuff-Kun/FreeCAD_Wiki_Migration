---
title: Punkty Import punktów
---
|  |
| --- |
| Punkty: Import |
| Lokalizacja w menu |
| Punkty → Import punktów ... |
| Środowisko pracy |
| [Punkty](/Points_Workbench/pl "Points Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Import Eksport](/Import_Export/pl "Import Export/pl") |
|  |

## Opis

Polecenie **Import punktów** importuje chmurę punktów z pliku.

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Points_Import.svg) **Import punktów ...**.
   * Wybierz z menu opcję **Punkty → ![](/images/Points_Import.svg) Importuj punktów ...**.
2. Wybierz plik chmury punktów.
3. Naciśnij przycisk Otwórz.

## Właściwości

Zobacz stronę [Konwertuj na punkty](/Points_Convert/pl "Points Convert/pl").

## Format pliku chmury punktów

* Plik chmury punktów musi mieć rozszerzenie .asc, .pcd lub .ply.
* Każda linia pliku musi zawierać współrzędne X, Y i Z punktu.
* Współrzędne muszą być oddzielone spacjami.
* We współrzędnych musi być użyty znak dziesiętny, a nie przecinek.

## Przykładowy plik chmury punktów

```
0 0 0
1.4562 -7.2354 12.2367
5.9423 3.1728 -17.6439

```

Do testów możesz użyć [ten plik](https://raw.githubusercontent.com/FreeCAD/Examples/master/Point_cloud_ExampleFiles/PointCloud-Data_Stanford-Bunny.asc), który jest wersją low polygon [Stanford Bunny](http://graphics.stanford.edu/data/3Dscanrep/).

## Tworzenie skryptów

Poniższy kod może zostać użyty do przeskalowania zaimportowanej chmury punktów. Wybierz chmurę punktów i uruchom skrypt wklejając go do [konsoli Pythona](/Python_console/pl "Python console/pl") lub zapisując jako makro i [uruchamiając](/Std_DlgMacroExecute/pl "Std DlgMacroExecute/pl") je.

```
from PySide import QtWidgets
import FreeCAD as App
import FreeCADGui as Gui

def scale_points(obj, scale_x, scale_y, scale_z):
    mtx = App.Matrix()
    mtx.scale(scale_x, scale_y, scale_z)
    pts = obj.Points.copy()
    pts.transformGeometry(mtx)
    obj.Points = pts
    App.ActiveDocument.recompute()

if Gui.Selection.getSelection():
    obj = Gui.Selection.getSelection()[0]
    if obj.isDerivedFrom("Points::Feature"):
        scale, ok = QtWidgets.QInputDialog.getDouble(
            None,
            "Scale point cloud",
            "Scale:",
            value=1.0,
            decimals=6
        )
        if ok:
            scale_points(obj, scale, scale, scale)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Import/pl&oldid=1556634>"