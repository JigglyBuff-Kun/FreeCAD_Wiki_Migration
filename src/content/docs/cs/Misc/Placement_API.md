---
title: Placement API
---
:::caution
(October 2019) Do not edit this page. The information is incomplete and outdated. For the latest API, see theautogenerated API documentation, or generate the documentation yourself, seeSource documentation.
:::

In FreeCAD, Placement defines an object's position and rotation. The Placement concept is explained in detail here: [Placement](/Placement "Placement").

Example of setting a document object's Placement:

```
myObj = FreeCAD.ActiveDocument.ActiveObject
pl = FreeCAD.Placement()
pl.move(FreeCAD.Vector(2,0,0))
myObj.Placement = pl

```

![](/images/Class.png) **Placement(** *) or (Placement) or (Matrix) or (Base, Rotation) or (Base,Rotation,Center) or (Base,Axis,Angle***)**

**Description**: Constructs a placement, empty or with the given arguments, or as a copy of the given placement.

![](/images/Property.png) **Base**

**Returns**: a vector representing the Placement's position.

![](/images/Property.png) **Rotation**

**Returns**: a quaternion representing the Placement's rotation.

![](/images/Method.png) **inverse(****)**

**Description**: computes the inverse placement

**Returns**: a placement.

![](/images/Method.png) **move(***Vector***)**

**Description**: moves the Placement along the given vector

**Returns**: nothing

![](/images/Method.png) **multVec(***Vector***)**

**Description**: applies the Placement to the given vector

**Returns**: the resulting vector.

![](/images/Method.png) **multiply(***Placement***)**

**Description**: multiplies this placement with another one

**Returns**: the resulting placement.

![](/images/Method.png) **toMatrix(****)**

**Description**:

**Returns**: a matrix representing the Placement's transformation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Placement_API/cs&oldid=632491>"