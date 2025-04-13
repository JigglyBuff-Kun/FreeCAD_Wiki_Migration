---
title: Usuwanie cech
---
## Wprowadzenie

Usuwanie cech modelu 3D zostało dodane w Open CASCADE 7.3 [[1]](https://dev.opencascade.org/index.php?q=node/1211) i może być używane do edycji modeli STEP poprzez usuwanie cech z modelu.

Możliwe jest również użycie go do bezpośredniego modelowania, gdy historia operacji jest niedostępna.
*(Tak jest w przypadku modeli 3D STEP)*.
Usuwanie cech może być również przydatne do usuwania zastrzeżonych szczegółów modelu przed jego udostępnieniem.

Najprostszym sposobem na użycie usuwania cech jest użycie środowiska pracy [Defeaturing](/Defeaturing_Workbench/pl "Defeaturing Workbench/pl").

## Wycinek kodu

Środowisko pracy Defeaturing może być również używane z Python:

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

Kształt Box3 użyty w kodzie Pythona, przed usunięciem cech

![](/images/Box4.PNG)

Kształt Box4 używany w kodzie Pythona, zdegradowany

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing/pl&oldid=1511732>"