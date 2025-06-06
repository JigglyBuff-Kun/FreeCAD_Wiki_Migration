---
title: FCGear/de
---

:::caution
Dieses Makro wurde in den ArbeitsbereichFCGearüberführt. Bitte diesen Arbeitsbereich statt des Makros verwenden, da dieser aktiv unterstützt wird.
:::

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro FCGear                                                                                                                                                                                     |
| Description                                                                                                                                                                                      |
| Additional Workbench to create different types of gears. Macro version: 1.0 Last modified: 2015-10-27 Author: looooo                                                                             |
| Author                                                                                                                                                                                           |
| [looooo](/index.php?title=User:Looooo&action=edit&redlink=1 "User:Looooo (page does not exist)")                                                                                                 |
| Download                                                                                                                                                                                         |
| _None_                                                                                                                                                                                           |
| Links                                                                                                                                                                                            |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                              |
| Date last modified                                                                                                                                                                               |
| 2015-10-27                                                                                                                                                                                       |
| FreeCAD Version(s)                                                                                                                                                                               |
| _None_                                                                                                                                                                                           |
| Default shortcut                                                                                                                                                                                 |
| _None_                                                                                                                                                                                           |
| See also                                                                                                                                                                                         |
| _None_                                                                                                                                                                                           |
|                                                                                                                                                                                                  |
|                                                                                                                                                                                                  |

## Description

Additional Workbench to create different types of gears, involute gear, involute rack, cycloide gear, bevel gear.

![](/images/FCGear_00.png)

FCGear

## Install

- git clone <https://github.com/looooo/freecad.gears.git>
- link or copy the freecad.gears into /.FreeCAD/Mod

Note:

- if you download zip,unzip,and
- just copy the whole outermost directory **FCGear** into /freecad/Mod
  - in Windows must show hidden files, otherwise Mod is hidden
  - in Linux usually Mod path is usr/lib/freecad/Mod. You must open .Mod as administrator and you must give access permissions to all files of "gear". You can also copy to the local Mod: ~/.FreeCAD/Mod
- since FCGear requires "NUMPY", which is only included since FreeCAD 0.15.4671, it won't run on older versions of FreeCAD

## Create a gear

- go to the gear workbench
- click on gear symbol
- change parameters

![Involutegear](/images/Involutegear.png)![FCGear_involutegear_par](/images/FCGear_involutegear_par.png)
![Involuterack.](/images/Involuterack.png)![FCGear_involuterack_par](/images/FCGear_involuterack_par.png)

![Cycloidegear](/images/Cycloidegear.png)![FCGear_cycloide_par](/images/FCGear_cycloide_par.png)
![Bevelgear](/images/Bevelgear.png)![FCGear_bevel_par](/images/FCGear_bevel_par.png)

## Links

- [FCGear](https://github.com/looooo/FCGear)
- [Forum topic](http://forum.freecadweb.org/viewtopic.php?f=3&t=12878&start=20)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCGear/de&oldid=1212941>"
