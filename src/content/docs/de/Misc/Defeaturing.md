---
title: Defeaturing/de
---
## Einführung

3D-Modell-Vereinfachung wurde mit Open CASCADE 7.3 [[1]](https://dev.opencascade.org/index.php?q=node/1211) hinzugefügt und kann zur Bearbeitung von STEP-Modellen verwendet werden, indem die Formelemente aus dem Modell entfernt werden.

Es ist auch möglich, dies zum direkten Modellieren einzusetzen, wenn die Historie der Operationen nicht verfügbar ist.
(Dies ist der Fall bei 3D-STEP-Modellen).
Das Defeaturing kann auch nützlich sein, um proprietäre Details des Modells zu entfernen, bevor es verteilt wird.

Der einfachste Weg, das Defeaturing zu verwenden, ist die Verwendung des Arbeitsbereichs [Defeaturing](/Defeaturing_Workbench/de "Defeaturing Workbench/de").

## Code Schnipsel

Defeaturing kann auch mit Python verwendet werden:

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

Box3, die in dem Python-Code verwendete Form, vor dem Defeaturing (Entfernen der Formelemente).

![](/images/Box4.PNG)

Box4, die in dem Python-Code verwendete Form, nach dem Defeaturing

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing/de&oldid=1511818>"