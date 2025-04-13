---
title: FreeCADDocu Sandbox
---
## Test

This is some line, and then `some inline code`

This is some line, and then

```
font-family: 'Times New Roman', serif;

```

[Draft Line](/Draft_Line "Draft Line") and [Draft\_Line](/Draft_Line "Draft Line")

|  |
| --- |
| [Official icon not found](/File:NoIconFound.png "Official icon not found") {{{Name}}} |
| Menu location |
| {{{MenuLocation}}} |
| Workbenches |
| {{{Workbenches}}} |

|  |  |
| --- | --- |
| **Installation:** | [Linux](/Installing_on_Linux "Installing on Linux"), [Windows](/Installing_on_Windows "Installing on Windows"), [Mac](/Installing_on_Mac "Installing on Mac"); **[Getting started](/Getting_started "Getting started")** |
| Basics: | [About FreeCAD](/About_FreeCAD "About FreeCAD"), [Workbenches](/Workbenches "Workbenches"), [Preferences](/Preferences_Editor "Preferences Editor"), [Document structure](/Document_structure "Document structure"), [Interface Customization](/Interface_Customization "Interface Customization"), [Properties](/Property "Property"), [Mouse navigation](/Mouse_navigation "Mouse navigation") |
| Core workbenches: | [Draft](/Draft_Workbench "Draft Workbench"), [Part](/Part_Workbench "Part Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), [Sketcher](/Sketcher_Workbench "Sketcher Workbench"), [TechDraw](/TechDraw_Workbench "TechDraw Workbench") |
| Expert workbenches: | [BIM](/BIM_Workbench "BIM Workbench"), [CAM](/CAM_Workbench "CAM Workbench"), [FEM](/FEM_Workbench "FEM Workbench"), [Inspection](/Inspection_Workbench "Inspection Workbench"), [Mesh](/Mesh_Workbench "Mesh Workbench"), [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench"), [Points](/Points_Workbench "Points Workbench"), [Raytracing](/Raytracing_Workbench "Raytracing Workbench"), [Reverse Engineering](/Reverse_Engineering_Workbench "Reverse Engineering Workbench"), [Robot](/Robot_Workbench "Robot Workbench"), [Ship](/Ship_Workbench "Ship Workbench") |
| Auxiliary workbenches: | [Plot](/Plot_Workbench "Plot Workbench"), [Spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench"), [Test Framework](/Debugging "Debugging") |

### HowTo test

Experimental HowTo page: [Sandbox:HowTo](/Sandbox:HowTo "Sandbox:HowTo")

[top](#top)

## Test code

**Code|code=**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
       self.lineEdit_1 = QtGui.QLineEdit(self.centralWidget)
       self.lineEdit_1.setGeometry(QtCore.QRect(320, 30, 151, 22))

```

## Test python

**Code|lang=python|code=**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
       self.lineEdit_1 = QtGui.QLineEdit(self.centralWidget)
       self.lineEdit_1.setGeometry(QtCore.QRect(320, 30, 151, 22))

```

## Test pre

**pre**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
       self.lineEdit_1 = QtGui.QLineEdit(self.centralWidget)
       self.lineEdit_1.setGeometry(QtCore.QRect(320, 30, 151, 22))

```

## Test syntaxhighlight

**syntaxhighlight lang="python"**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
       self.lineEdit_1 = QtGui.QLineEdit(self.centralWidget)
       self.lineEdit_1.setGeometry(QtCore.QRect(320, 30, 151, 22))

```

## Test source lang=python

**source lang=python**

```
 
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
       self.lineEdit_1 = QtGui.QLineEdit(self.centralWidget)
       self.lineEdit_1.setGeometry(QtCore.QRect(320, 30, 151, 22))

```

## Test code

**Code|code=**

```
wget http://lyre.mit.edu/~powell/opencascade/opencascade_6.2.0.orig.tar.gz
wget http://lyre.mit.edu/~powell/opencascade/opencascade_6.2.0-7.dsc
wget http://lyre.mit.edu/~powell/opencascade/opencascade_6.2.0-7.diff.gz

dpkg-source -x opencascade_6.2.0-7.dsc

# Install OCC build-deps
sudo apt-get install build-essential devscripts debhelper autoconf automake libtool bison libx11-dev tcl8.4-dev tk8.4-dev libgl1-mesa-dev libglu1-mesa-dev java-gcj-compat-dev libxmu-dev

#Build Opencascade packages. This takes hours and requires
# at least 8 GB of free disk space
cd opencascade-6.2.0 ; debuild

# Install the resulting library debs
sudo dpkg -i libopencascade6.2-0_6.2.0-7_i386.deb
libopencascade6.2-dev_6.2.0-7_i386.deb

```

## Test code=bash

**Code|code=bash**

```
wget http://lyre.mit.edu/~powell/opencascade/opencascade_6.2.0.orig.tar.gz
wget http://lyre.mit.edu/~powell/opencascade/opencascade_6.2.0-7.dsc
wget http://lyre.mit.edu/~powell/opencascade/opencascade_6.2.0-7.diff.gz

dpkg-source -x opencascade_6.2.0-7.dsc

# Install OCC build-deps
sudo apt-get install build-essential devscripts debhelper autoconf automake libtool bison libx11-dev tcl8.4-dev tk8.4-dev libgl1-mesa-dev libglu1-mesa-dev java-gcj-compat-dev libxmu-dev

#Build Opencascade packages. This takes hours and requires
# at least 8 GB of free disk space
cd opencascade-6.2.0 ; debuild

# Install the resulting library debs
sudo dpkg -i libopencascade6.2-0_6.2.0-7_i386.deb
libopencascade6.2-dev_6.2.0-7_i386.deb

```

## Test SystemInput

**SystemInput** template

sudo apt-get install build-essential devscripts debhelper autoconf automake libtool bison libx11-dev tcl8.4-dev tk8.4-dev libgl1-mesa-dev libglu1-mesa-dev java-gcj-compat-dev libxmu-dev

## Test syntaxhighlight

**syntaxhighlight line**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCADDocu:Sandbox&oldid=1455854>"