---
title: Makrodefinicja Wyrównaj płaszczyznę roboczą do ujęcia widoku
---

|                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Makrodefinicja: Wyrównaj płaszczyznę roboczą do ujęcia widoku                                                                                                                                                                                                                                                                                                                    |
| Opis                                                                                                                                                                                                                                                                                                                                                                             |
| To makro przesuwa bieżącą [Plaszczyzne roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na środek bieżącego widoku. Jest to przydatne, gdy pracujesz daleko od środka siatki. Macro version: 1.0 Last modified: 2017-05-10 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png) Autor: yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                            |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                |
| Do pobrania                                                                                                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png)                                                                                                                                                                                                                                                                              |
| Odnośniki                                                                                                                                                                                                                                                                                                                                                                        |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                                                                                                                                      |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                                                                                                                              |
| Data zmian                                                                                                                                                                                                                                                                                                                                                                       |
| 2017-05-10                                                                                                                                                                                                                                                                                                                                                                       |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                                                                                                                              |
| Domyślny skrót                                                                                                                                                                                                                                                                                                                                                                   |
| _Brak_                                                                                                                                                                                                                                                                                                                                                                           |
| Zobacz również                                                                                                                                                                                                                                                                                                                                                                   |
| [Makrodefinicja: Wyrównaj ujęcie widoku do płaszczyzny roboczej](/Macro_Align_Camera_to_Working_Plane/pl "Macro Align Camera to Working Plane/pl") [Macro Align Camera to Working Plane](/File:Macro_Align_Camera_to_Working_Plane.png "Macro Align Camera to Working Plane")                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                  |

## Opis

To makro przesuwa bieżącą [Plaszczyzne roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na środek bieżącego widoku. Jest to przydatne, gdy pracujesz daleko od środka siatki.

## Użycie

- Przesuń widok do miejsca, na które chcesz spojrzeć
- Uruchom makrodefinicję

## Skrypt

Ikonka paska narzędzi
![](/images/Macro_Align_Working_Plane_to_Camera.png)

**Macro_Align_Working_Plane_to_Camera.FCMacro**

```
import FreeCAD,FreeCADGui
cam = FreeCAD.Vector(FreeCADGui.ActiveDocument.ActiveView.getCameraNode().position.getValue().getValue())
pos = FreeCAD.DraftWorkingPlane.projectPoint(cam)
FreeCAD.DraftWorkingPlane.position = pos
FreeCADGui.Snapper.setGrid()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Working_Plane_to_Camera/pl&oldid=1086145>"
