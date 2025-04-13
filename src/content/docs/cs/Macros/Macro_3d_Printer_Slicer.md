---
title: 3d Printer Slicer
---

|                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro_3d_Printer_Slicer                                                                                                                                                                                                                                                                                                                                    |
| Popis                                                                                                                                                                                                                                                                                                                                                      |
| Export do software pro krájení 3D tiskáren. Exportuje soubor stl ve stejném adresáři jako původní soubor návrhu a poté jej otevírá v software pro krájení. Version macro : 0.1 Date last modification : 2013-10-10 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/96/Macro_3d_Printer_Slicer.png) Autor: cae2100 |
| Autor                                                                                                                                                                                                                                                                                                                                                      |
| [cae2100](/index.php?title=User:Cae2100&action=edit&redlink=1 "User:Cae2100 (page does not exist)")                                                                                                                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/96/Macro_3d_Printer_Slicer.png)                                                                                                                                                                                                                                                                    |
| Odkazy                                                                                                                                                                                                                                                                                                                                                     |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                             | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                      |
| 0.1                                                                                                                                                                                                                                                                                                                                                        |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                      |
| 2013-10-10                                                                                                                                                                                                                                                                                                                                                 |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                                                                        |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                     |
| Viz též                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                            |

## Popis

Tento kód při spuštění exportuje aktuálně otevřený design do souboru STL a otevře jej v softwaru na krájení, který používáte. Tento příklad je pro **[KISSlicer](http://kisslicer.com/)**, ale lze jej upravit **[Slic3r](http://slic3r.org/)**, **[Cura](http://wiki.ultimaker.com/Cura)**, nebo jakýkoli jiný 3D software tiskárny. Může být také mírně upraveno, aby se otevřel software CAM pro CNC stroje.

Nejlépe se používá při vytváření odkazu na makro na panelu nástrojů a když se chystáte nakrájet objekt, stačí kliknout na něj a na svůj objekt, jak se objeví na obrazovce v programu FreeCAD, objeví se na rozhraní vašeho řezacího software, . Vytvoří také soubor STL se stejným názvem souboru jako návrhový soubor ve stejném adresáři jako návrhový soubor jako záloha.

![](/src/assets/images/Macro_3d_Printer_Slicer_00.png)

## Script

Proměnnou SLICER lze změnit na libovolný řezací software podle vašeho výběru, ale nezapomeňte jej nastavit předtím, než jej zkuste spustit, nebo se s tímto skriptem označí chyba.

ToolBar Icon ![](/src/assets/images/Macro_3d_Printer_Slicer.png)

**Macro_3d_Printer_Slicer.py**

```
import FreeCAD
import Mesh
import sys
import math
import os
import subprocess
# some fuctions
def getPlacement(quat,vect,obj):
  if quat[3] > -1  and quat[3] < 1:
    delta = math.acos(quat[3])*2.0
    scale = math.sin(delta/2)
    rx = quat[0]/scale
    ry = quat[1]/scale
    rz = quat[2]/scale
  else:
    delta = 0
    rx = 0
    ry = 0
    rz = 1
  info0 = "translation "+str(vect.x)+" "+str(vect.y)+" "+str(vect.z)
  info1 = "rotation "+str(rx)+" "+str(ry)+" "+str(rz)+" "+str(delta)
  return info0+" "+info1
# some definitions
placement = App.Placement(App.Vector(0,0,0),App.Rotation(0,0,0,1))
# user need to set this directory where slicing software is located
OutDir = FreeCAD.ActiveDocument.FileName.replace(FreeCAD.ActiveDocument.Label + ".fcstd", "")
visible_objs = []
SLICER = "/kisslicer location/"                          # Put your Slicer program location here
os.chdir(SLICER)
# Get Objects in document
doc = App.ActiveDocument
objs = doc.Objects
# hide all
for obj in objs:
   if obj.ViewObject.isVisible():
      visible_objs.append(obj)
for obj in visible_objs:
  # get volume
  volume = obj.Shape.Volume
  # get Rotation and translation of volume
  quat = obj.Placement.Rotation.Q
  vect = obj.Placement.Base
  pinfo = getPlacement(quat,vect,obj)
  # reset placement, export it and set at original placement
  oldPlacement = obj.Placement
  obj.Placement = placement
  obj.Placement = oldPlacement
stlFile = OutDir+str(doc.Label)+".stl"
Mesh.export(visible_objs,stlFile)
subprocess.Popen([SLICER + "KISSlicer", stlFile])
```

## Kredity

Díky [Wmayer](http://forum.freecadweb.org/viewtopic.php?f=10&t=4686) za jeho pomoc při psaní tohoto skriptu.  
Původní téma fóra : <http://forum.freecadweb.org/viewtopic.php?f=10&t=4686>

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_3d_Printer_Slicer/cs&oldid=790948>"
