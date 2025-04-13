---
title: Makrodefinicja Wyrównaj ujęcie widoku do płaszczyzny roboczej
---

|                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Makrodefinicja: Wyrównaj ujęcie widoku do płaszczyzny roboczej                                                                                                                                                                                                                                                                             |
| Opis                                                                                                                                                                                                                                                                                                                                       |
| Za pomocą tej makrodefinicji ujęcie widoku jest wyrównywane do bieżącej [Płaszczyzny roboczej](/Draft_SelectPlane "Draft SelectPlane"). Macro version: 0.1 Last modified: 2017-03-16 FreeCAD version: Wszystkie Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png) Autor: yorik |
| Autor                                                                                                                                                                                                                                                                                                                                      |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                          |
| Do pobrania                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png)                                                                                                                                                                                                                                        |
| Odnośniki                                                                                                                                                                                                                                                                                                                                  |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                                                                                                |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                                      |
| 0.1                                                                                                                                                                                                                                                                                                                                        |
| Data zmian                                                                                                                                                                                                                                                                                                                                 |
| 2017-03-16                                                                                                                                                                                                                                                                                                                                 |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                             |
| Wszystkie                                                                                                                                                                                                                                                                                                                                  |
| Domyślny skrót                                                                                                                                                                                                                                                                                                                             |
| _Brak_                                                                                                                                                                                                                                                                                                                                     |
| Zobacz również                                                                                                                                                                                                                                                                                                                             |
| [Makrodefinicja: Wyrównaj płaszczyznę roboczą do ujęcia widoku](/Macro_Align_Working_Plane_to_Camera/pl "Macro Align Working Plane to Camera/pl")                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                            |

## Opis

Za pomocą tej makrodefinicji ujęcie widoku jest wyrównywane do bieżącej [Płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

## Użycie

- Ustaw [Płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") według własnych upodobań
- Uruchom makrodefinicję

## Skrypt

Ikonka paska narzędzi
![](/images/Macro_Align_Camera_to_Working_Plane.png)

**Macro_Align_Camera_to_Working_Plane.FCMacro**

```
import FreeCAD,FreeCADGui
c = FreeCADGui.ActiveDocument.ActiveView.getCameraNode()
r = FreeCAD.DraftWorkingPlane.getRotation().Rotation.Q
c.orientation.setValue(r)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Camera_to_Working_Plane/pl&oldid=1086132>"
