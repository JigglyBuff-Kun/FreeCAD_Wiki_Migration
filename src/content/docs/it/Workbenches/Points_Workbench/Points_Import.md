---
title: Importa punti
---
|  |
| --- |
| Importa punti |
| Posizione nel menu |
| Punti → Importa punti |
| Ambiente |
| [Punti](/Points_Workbench/it "Points Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Esporta punti](/Points_Export/it "Points Export/it") |
|  |

## Descrizione

Questo strumento importa punti da un file nuvola di punti.

The **Points Import** command imports a point cloud from a file.

## Utilizzo

1. Cliccare su ![](/images/Points_Import.svg) Importa punti oppure usare il menu **Punti → ![](/images/Points_Import.svg) Importa punti**.
2. Selezionare il file con la nuvola di punti e fare click su Apri.

1. There are several ways to invoke the command:
   * Press the ![](/images/Points_Import.svg) [Import Points...](/Points_Import "Points Import") button.
   * Select the **Points → ![](/images/Points_Import.svg) Import Points...** option from the menu.
2. Select a point cloud file.
3. Press the Open button.

## Properties

See [Points Convert](/Points_Convert "Points Convert").

## Point cloud file format

* A point cloud file must have the .asc, .pcd or .ply extension.
* Each line in the file must list the X, Y and Z coordinates of a point.
* The coordinates must be separated by spaces.
* The coordinates must use a decimal point, not a decimal comma.

## Esempio di file cloud di punti

```
0 0 0
1.4562 -7.2354 12.2367
5.9423 3.1728 -17.6439

```

Per i test si può usare questo file [ASC](https://github.com/FREECAD/Examples/blob/master/Point_cloud_ExampleFiles/PointCloud-Data_Stanford-Bunny.asc), che è una versione di [Stanford Bunny](http://graphics.stanford.edu/data/3Dscanrep/).

## Scripting

The code below can be used to scale an imported point cloud. Select the point cloud and run the code, either by pasting it in the [Python console](/Python_console "Python console"), or by saving it as a macro and [executing](/Std_DlgMacroExecute "Std DlgMacroExecute") that macro.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Import/it&oldid=1556536>"