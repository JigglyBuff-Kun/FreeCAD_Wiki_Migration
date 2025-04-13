---
title: Points Importer
---
|  |
| --- |
| Points Importer |
| Emplacement du menu |
| Points → Importer des points... |
| Ateliers |
| [Points](/Points_Workbench/fr "Points Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Points Exporter](/Points_Export/fr "Points Export/fr") |
|  |

## Description

La commande **Points Importer** importe un nuage de points à partir d'un fichier.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Points_Import.svg) Importer les points.
   * Utilisez l'option **Points → ![](/images/Points_Import.svg) Importer des points...** depuis le menu.
2. Sélectionnez le fichier de nuage de points.
3. Appuyez sur le bouton Ouvrir.

## Propriétés

Voir [Points Conversion](/Points_Convert/fr "Points Convert/fr").

## Format du fichier du nuage de points

* Un fichier de nuage de points doit avoir l'extension .asc, .pcd ou .ply.
* Chaque ligne du fichier doit lister les coordonnées X, Y et Z d'un point.
* Les coordonnées doivent être séparées par des espaces.
* Les coordonnées doivent utiliser un point décimal, pas une virgule décimale.

## Exemple de fichier de nuage de points

```
0 0 0
1.4562 -7.2354 12.2367
5.9423 3.1728 -17.6439

```

Pour tester, vous pouvez utiliser [ce fichier](https://raw.githubusercontent.com/FreeCAD/Examples/master/Point_cloud_ExampleFiles/PointCloud-Data_Stanford-Bunny.asc). C'est une version à faible polygone du [Stanford Bunny](http://graphics.stanford.edu/data/3Dscanrep/).

## Script

Le code ci-dessous peut être utilisé pour mettre à l'échelle un nuage de points importé. Sélectionnez le nuage de points et exécutez le code, soit en le collant dans la [console Python](/Python_console/fr "Python console/fr"), soit en l'enregistrant en tant que macro et en [exécutant](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr") cette macro.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Import/fr&oldid=1556594>"