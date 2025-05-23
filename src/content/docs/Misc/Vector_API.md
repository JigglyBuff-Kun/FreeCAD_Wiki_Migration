---
title: Vector API
---

:::caution
(October 2019) Do not edit this page. The information is incomplete and outdated. For the latest API, see theautogenerated API documentation, or generate the documentation yourself, seeSource documentation.
:::

Vectors are used everywhere in FreeCAD.

Example:

```
v=FreeCAD.Vector()
v=FreeCAD.Vector(1,0,0)
v=FreeCAD.Base.Vector()
v2 = FreeCAD.Vector(3,2,-5)
v3 = v.add(v2)
print v3.Length

```

![](/images/Property.png) **Length**

**Returns**: returns the length of the vector.

![](/images/Method.png) **add(\***Vector**\*)**

**Description**: adds another vector to this one.

**Returns**: vector

![](/images/Method.png) **cross(\***Vector**\*)**

**Description**: the crossproduct between this vector and another.

**Returns**: vector

![](/images/Method.png) **distanceToLine(\***Vector1,Vector2**\*)**

**Description**: the distance between the vector and a line through Vector1 in direction Vector2.

**Returns**: float

![](/images/Method.png) **distanceToPoint(\***Vector**\*)**

**Description**: the distance between this vector and another.

**Returns**: float

![](/images/Method.png) **distanceToLineSegment(\***Vector1,Vector2**\*)**

**Description**: a vector to the closest point on a line segment from Vector1 to Vector2.

**Returns**: Vector

![](/images/Method.png) **distanceToPlane(\***Vector1,Vector2**\*)**

**Description**: the distance between the vector and a plane defined by a point and a normal.

**Returns**: float

![](/images/Method.png) **dot(\***Vector**\*)**

**Description**: the dot product between 2 vectors.

**Returns**: float

![](/images/Method.png) **getAngle(\***Vector**\*)**

**Description**: the angle in radians between this vector and another.

**Returns**: float

![](/images/Method.png) **isEqual(\***Vector2,tolerance**\*)**

**Description**: Checks if the distance between the points represented by this Vector and Vector2 is less than or equal to the given tolerance.

**Returns**: True/False

![](/images/Method.png) **isNormal(\***Vector2,tolerance**\*)**

**Description**: Checks if this Vector is normal to Vector2 within the tolerance.

**Returns**: True/False

![](/images/Method.png) **isOnLineSegment(\***Vector1,Vector2**\*)**

**Description**: Checks if this vector is on the line segment generated by Vector1 and Vector2.

**Returns**: Vector

![](/images/Method.png) **isParallel(\***Vector2,tolerance**\*)**

**Description**: Checks if this Vector is parallel to Vector2 within the tolerance.

**Returns**: True/False

![](/images/Method.png) **multiply(\***Float**\*)**

**Description**: multiplies (uniform scale) a vector by the given factor.

**Returns**: nothing

![](/images/Method.png) **negative(\***Vector**\*)**

**Description**: Returns the negative (opposite) of this vector.

**Returns**: Vector

![](/images/Method.png) **normalize(\*\***)\*\*

**Description**: normalizes a vector (sets its length to 1.0).

**Returns**: nothing

![](/images/Method.png) **projectToLine(\***Vector1,Vector2**\*)**

**Description**: projects the vector on a line through Vector1 in direction Vector2.

**Returns**: nothing

![](/images/Method.png) **projectToPlane(\***Vector1,Vector2**\*)**

**Description**: projects the vector on a plane defined by a point (Vector1) and a normal (Vector2).

**Returns**: nothing

![](/images/Method.png) **scale(\***Float,Float,Float**\*)**

**Description**: Same as multiply but lets specify different values for x, y and z directions. (non-uniform scale)

**Returns**: nothing

![](/images/Method.png) **sub(\***Vector**\*)**

**Description**: subtracts another vector from this one.

**Returns**: vector

![](/images/Property.png) **x**

**Returns**: the x coordinate of a vector.

![](/images/Property.png) **y**

**Returns**: the y coordinate of a vector.

![](/images/Property.png) **z**

**Returns**: the z coordinate of a vector.

Retrieved from "<http://wiki.freecad.org/index.php?title=Vector_API/en&oldid=1355874>"
