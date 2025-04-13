---
title: Base API/de
---
:::caution
(Oktober 2019) Bearbeite diese Seiten nicht. Die Informationen sind unvollständig und veraltet. Die neueste API findest Du in derautogenerierten API-Dokumentationoder generiere die Dokumentation selbst, sieheQuelldokumentation.
:::

The Base module is contained inside the FreeCAD module and contains constructors for different types of objects heavily used in FreeCAD.

![](/images/Class.png) **BoundBox(***[Xmin,Ymin,Zmin,Xmax,Ymax,Zmax]***)**

![](/images/Class.png) **BoundBox(***Tuple, Tuple***)**

![](/images/Class.png) **BoundBox(***Vector, Vector***)**

**Description**:
Creates a bounding box.
A bounding box is an orthographic cube which is a way to describe outer boundaries. You get a bounding box from a lot of 3D types. It is often used to check if a 3D entity lies in the range of another object. Checking for bounding interference first can save a lot of computing time!

![](/images/Class.png) **Matrix(****)**

**Description**: Creates a 4x4 [Matrix](/Matrix_API "Matrix API"), that can be used to apply transformations to objects.

![](/images/Class.png) **Vector(****)**

![](/images/Class.png) **Vector(***x, y, z***)**

**Description**: Creates a FreeCAD 3D [Vector](/Vector_API "Vector API"), representing a 3D point or a direction.

![](/images/Class.png) **Placement(****)**

**Description**: Creates a [Placement](/Placement_API "Placement API").

Retrieved from "<http://wiki.freecad.org/index.php?title=Base_API/de&oldid=942094>"