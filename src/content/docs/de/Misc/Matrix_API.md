---
title: Matrix API/de
---
:::caution
(Oktober 2019) Diese Seite nicht ändern. Diese Information ist unvollständig und veraltet. Für die letzte API siehe die (engl.)autogenerierte API-Dokumentationoder generiere die Dokumentation selbst, sieheQuellendokumentation.
:::

4x4-Matrizen werden überall in FreeCAD verwendet und können auf eine der folgenden Weisen erstellt werden:

```
m = FreeCAD.Matrix()          # m = the [http://en.wikipedia.org/wiki/Identity_matrix identity matrix]
m = FreeCAD.Base.Matrix()
print m.A21()               # print m[1][0]

```

![](/images/Method.png) **A(****)**

**Description**:

**Returns**: all the matrix elements.

![](/images/Method.png) **A11(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A12(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A13(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A14(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A21(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A22(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A23(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A24(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A31(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A32(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A33(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A34(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A41(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A42(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A43(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **A44(****)**

**Description**:

**Returns**: a matrix element.

![](/images/Method.png) **determinant(****)**

**Description**: Computes the [determinant](http://en.wikipedia.org/wiki/Determinant) of the matrix

**Returns**: a number.

![](/images/Method.png) **inverse(****)**

**Description**: Returns the [inverse](http://en.wikipedia.org/wiki/Inverse_matrix) of this matrix, if possible

**Returns**: a Matrix

![](/images/Method.png) **invert(****)**

**Description**: [Inverts](http://en.wikipedia.org/wiki/Inverse_matrix) this matrix, if possible

**Returns**: nothing.

![](/images/Method.png) **move(***Vector***)**

**Description**: Makes this matrix a [translation](http://en.wikipedia.org/wiki/Translation_%28geometry%29) matrix

**Returns**: nothing.

![](/images/Method.png) **multiply(***Matrix or Vector***)**

**Description**: Returns the [cross product](http://en.wikipedia.org/wiki/Cross_product) of a matrix or vector with this matrix

**Returns**: a Matrix

![](/images/Method.png) **rotateX(***Float(radians)***)**

**Description**: Makes this matrix a [rotation](http://en.wikipedia.org/wiki/Rotation_%28mathematics%29) about X transform

**Returns**: nothing.

![](/images/Method.png) **rotateY(***Float(radians)***)**

**Description**: Makes this matrix a [rotation](http://en.wikipedia.org/wiki/Rotation_%28mathematics%29) about Y transform

**Returns**: nothing.

![](/images/Method.png) **rotateZ(***Float(radians)***)**

**Description**: Makes this matrix a [rotation](http://en.wikipedia.org/wiki/Rotation_%28mathematics%29) about Z transform

**Returns**: nothing.

![](/images/Method.png) **scale(***Vector***)**

**Description**: Makes this matrix a [scaling transform](http://en.wikipedia.org/wiki/Scaling_matrix)

**Returns**: nothing.

![](/images/Method.png) **transform(***Vector, Matrix***)**

**Description**: Makes this matrix a [transformation matrix](http://en.wikipedia.org/wiki/Transformation_matrix) based on Vector and Matrix

**Returns**: nothing.

![](/images/Method.png) **unity(****)**

**Description**: Makes this matrix the [identity matrix](http://en.wikipedia.org/wiki/Identity_matrix)

**Returns**: nothing.

Retrieved from "<http://wiki.freecad.org/index.php?title=Matrix_API/de&oldid=1538749>"