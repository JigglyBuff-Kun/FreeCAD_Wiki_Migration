---
title: Rectellipse
---

|                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rectellipse Macro                                                                                                                                                                                                                           |
| Beschreibung                                                                                                                                                                                                                                |
| Erzeugt eine parametrische Rectellipse Versionsmakro : 1.0 Datum der letzten Änderung : 2013-12-24 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bf/Macro_Rectellipse.png) Autor: fcaponi78 |
| Autor                                                                                                                                                                                                                                       |
| [fcaponi78](/index.php?title=User:Fcaponi78&action=edit&redlink=1 "User:Fcaponi78 (page does not exist)")                                                                                                                                   |
| Herunterladen                                                                                                                                                                                                                               |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bf/Macro_Rectellipse.png)                                                                                                                                                           |
| Links                                                                                                                                                                                                                                       |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                |
| Macro-Version                                                                                                                                                                                                                               |
| 1.0                                                                                                                                                                                                                                         |
| Datum der letzten Änderung                                                                                                                                                                                                                  |
| 2013-12-24                                                                                                                                                                                                                                  |
| FreeCAD-Version(s)                                                                                                                                                                                                                          |
| All                                                                                                                                                                                                                                         |
| Standardverknüpfung                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                      |
| Siehe auch                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                             |

## Beschreibung

Erzeugt eine parametrische Rectellipse

![](/images/Rectellipse.png)

## Skript

ToolBar Icon ![](/images/Macro_Rectellipse.png)

**Macro_Rectellipse.FCMacro**

```
from __future__ import division # allows floating point division from integers
import FreeCAD, Part, math
from FreeCAD import Base

class RectEllipseShape:
   def __init__(self, obj):
      ''' Add the properties: Radius, Eccentricity, Height, Segments (see Property View) '''
      obj.addProperty("App::PropertyLength","a","Rectellipse","A - horizontal radius").a = 16.0
      obj.addProperty("App::PropertyLength","b","Rectellipse","B - vertical radius").b = 9.0
      obj.addProperty("App::PropertyFloat","n","Rectellipse","N ").n=0.2
      obj.addProperty("App::PropertyBool","createFace","Rectellipse","Wheter to create a face or not").createFace=True
      obj.Proxy = self

   def onChanged(self, fp, prop):
      if prop == "a" or prop == "b" or prop == "n" or prop == "segments" or prop == "height" or prop == "createFace":
         #if one of these is changed
         self.execute(fp)

   def execute(self, fp):
      r1=fp.a
      r2=fp.b
      s=fp.n
      z=0.0
      p=1.0
      ####w=2**0.5/2.0 #Ellipse
      w=2**0.5/2.0/(1-s**p)
      curve=Part.BSplineCurve()
      curve.setPeriodic()
      curve.increaseDegree(2) #quadratic
      curve.insertKnots([i*1.0/(4) for i in (1,2,3)],[2]*(3)) #5Knots 8 Poles
      curve.setPole(1,FreeCAD.Vector(0,-r2,z),1)
      curve.setPole(2,FreeCAD.Vector(-r1,-r2,z),w)
      curve.setPole(3,FreeCAD.Vector(-r1,0,z),1)
      curve.setPole(4,FreeCAD.Vector(-r1,r2,z),w)
      curve.setPole(5,FreeCAD.Vector(0,r2,z),1)
      curve.setPole(6,FreeCAD.Vector(r1,r2,z),w)
      curve.setPole(7,FreeCAD.Vector(r1,0,z),1)
      curve.setPole(8,FreeCAD.Vector(r1,-r2,z),w)
      if fp.createFace == True:
         fp.Shape = Part.Face(Part.Wire(curve.toShape()))
      else:
         fp.Shape = curve.toShape()

def makeRectellipseBlock():
   doc = FreeCAD.activeDocument()
   if doc == None:
      doc = FreeCAD.newDocument()
   obj=doc.addObject("Part::FeaturePython","RectEllipseShape") #add object to document
   obj.Label = "RectEllipsse"
   RectEllipseShape(obj)
   obj.ViewObject.Proxy=0
   viewObject = Gui.ActiveDocument.getObject(obj.Name)
   viewObject.ShapeColor = (0.00,0.33,1.00)
   viewObject.DisplayMode = "Flat Lines"
   obj.Shape.check()

if __name__ == "__main__":
   #feature will be generated after macro execution
   makeRectellipseBlock()
```

## Link

[Den Code von Github erhalten Sie hier](https://github.com/FreeCAD/FreeCAD-macros/blob/master/ParametricObjectCreation/Rectellipse.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rectellipse/de&oldid=934254>"
