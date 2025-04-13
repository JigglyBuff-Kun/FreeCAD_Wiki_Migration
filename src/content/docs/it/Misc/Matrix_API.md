---
title: API di Matrici
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

In FreeCAD le matrici 4x4 sono utilizzate ovunque e possono essere create con una delle seguenti modalità:

```
m = FreeCAD.Matrix()          # m = the [http://en.wikipedia.org/wiki/Identity_matrix identity matrix]
m = FreeCAD.Base.Matrix()
print m.A21()               # print m[1][0]

```

![](/images/Method.png) **A(****)**

**Description**:

**Returns**: tutti gli elementi della matrice.

![](/images/Method.png) **A11(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A12(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A13(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A14(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A21(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A22(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A23(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A24(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A31(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A32(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A33(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A34(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A41(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A42(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A43(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **A44(****)**

**Description**:

**Returns**: un elemento della matrice.

![](/images/Method.png) **determinant(****)**

**Description**: Calcola il [determinante](http://en.wikipedia.org/wiki/Determinant) della matrice

**Returns**: un numero.

![](/images/Method.png) **inverse(****)**

**Description**: Restituisce l'[inversa](http://en.wikipedia.org/wiki/Inverse_matrix) di questa matrice, se è possibile

**Returns**: una Matrtice

![](/images/Method.png) **invert(****)**

**Description**: [Inverte](http://en.wikipedia.org/wiki/Inverse_matrix) questa matrice, se possibile

**Returns**: nulla.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Matrix_API/it&oldid=1539228>"