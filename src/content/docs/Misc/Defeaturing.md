---
title: Defeaturing
---

## Introduction

3D Model Defeaturing got added with Open CASCADE 7.3 [[1]](https://dev.opencascade.org/index.php?q=node/1211) and can be used for editing STEP models by removing the features from the model.

It is also possible to use it for direct modeling, when the history of operations is unavailable. (This is the case for 3d STEP models). Defeaturing can also useful to remove proprietary details of the model before sharing it.

The easiest way to use defeaturing is by using the [Defeaturing Workbench](/Defeaturing_Workbench "Defeaturing Workbench").

## Code snippet

Defeaturing can also be used with Python:

```
box = Part.makeBox(10,10,10)
box2 = Part.makeBox(5,5,5,FreeCAD.Vector(5,5,0))
box3 = box.cut(box2)
Part.show(box3)
faces = App.ActiveDocument.ActiveObject.Shape.Faces[6:] #the faces of box3 that are part of the corner pocket
box4 = App.ActiveDocument.ActiveObject.Shape.defeaturing(faces) #defeature the shape
Part.show(box4) #show defeatured shape

```

![](/images/Box3.PNG)

Box3 shape used in Python code, before defeaturing

![](/images/Box4.PNG)

Box4 shape used in Python code, defeatured

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing/en&oldid=1511155>"
