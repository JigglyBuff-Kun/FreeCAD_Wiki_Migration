---
title: Points Importieren
---
|  |
| --- |
| Points Importieren |
| Menüeintrag |
| Punkte → Punkte importieren... |
| Arbeitsbereich |
| [Points](/Points_Workbench/de "Points Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Import Export](/Import_Export/de "Import Export/de") |
|  |

## Beschreibung

Der Befehl **Points Importieren** importiert eine Punktwolke aus einer Datei.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Points_Import.svg) [Punkte importieren...](/Points_Import "Points Import") drücken.
   * Den Menüeintrag **Punkte → ![](/images/Points_Import.svg) Punkte importieren...** auswählen.
2. Eine Punktwolkendatei auswählen
3. Die Schaltfläche Öffnen drücken.

## Eigenschaften

Siehe [Points Umwandeln](/Points_Convert/de "Points Convert/de").

## Dateiformat der Punktwolken

* Eine Punktwolkendatei muss die Erweiterung .asc, .pcd oder .ply besitzen.
* Jede Zeile der Datei muss die X-, Y- und Z-Koordinaten eines Punktes auflisten.
* Die Koordinaten müssen durch Leerzeichen getrennt sein.
* Die Koordinaten müssen einen Dezimalpunkt verwenden, kein Dezimalkomma.

## Muster Punktewolkendatei

```
0 0 0
1.4562 -7.2354 12.2367
5.9423 3.1728 -17.6439

```

Zum Testen kann man [diese Datei](https://raw.githubusercontent.com/FreeCAD/Examples/master/Point_cloud_ExampleFiles/PointCloud-Data_Stanford-Bunny.asc) verwenden, die eine grobe (low poly) Version des [Stanford Hasen](http://graphics.stanford.edu/data/3Dscanrep/) ist.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Import/de&oldid=1556537>"