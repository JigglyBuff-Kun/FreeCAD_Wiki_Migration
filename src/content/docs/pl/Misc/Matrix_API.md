---
title: Tablice wielowymiarowe Api
---

:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Macierze 4x4 są używane we wszystkich miejscach programu FreeCAD i mogą być tworzone w jeden z następujących sposobów:

```
m = FreeCAD.Matrix()          # m = the [http://en.wikipedia.org/wiki/Identity_matrix identity matrix]
m = FreeCAD.Base.Matrix()
print m.A21()               # print m[1][0]

```

![](/images/Method.png) **A(\*\***)\*\*

**Description**:

**Returns**: wszystkie elementy macierzy.

![](/images/Method.png) **A11(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A12(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A13(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A14(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A21(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A22(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A23(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A24(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A31(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A32(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A33(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A34(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A41(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A42(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A43(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **A44(\*\***)\*\*

**Description**:

**Returns**: element macierzy.

![](/images/Method.png) **determinant(\*\***)\*\*

**Description**: Oblicza [wyznacznik](http://en.wikipedia.org/wiki/Determinant) macierzy

**Returns**: a number.

![](/images/Method.png) **inverse(\*\***)\*\*

**Description**: Zwraca [odwrotność](http://en.wikipedia.org/wiki/Inverse_matrix) tej macierzy, jeśli to możliwe

**Returns**: a Matrix.

![](/images/Method.png) **invert(\*\***)\*\*

**Description**: [Odwraca](http://en.wikipedia.org/wiki/Inverse_matrix) tę macierz, jeśli to możliwe

**Returns**: nothing.

![](/images/Method.png) **move(\***Vector**\*)**

**Description**: Sprawia, że ta macierz staje się macierzą [przesunięcia](http://en.wikipedia.org/wiki/Translation_%28geometry%29)

**Returns**: nothing.

![](/images/Method.png) **multiply(\***Matrix or Vector**\*)**

**Description**: Zwraca [iloczyn krzyżowy](http://en.wikipedia.org/wiki/Cross_product) macierzy lub wektora z tą macierzą

**Returns**: a Matrix

![](/images/Method.png) **rotateX(\***Float(radians)**\*)**

**Description**: Sprawia, że ta macierz jest [rotacją](http://en.wikipedia.org/wiki/Rotation_%28mathematics%29) wokół transformacji X

**Returns**: nothing.

![](/images/Method.png) **rotateY(\***Float(radians)**\*)**

**Description**: Sprawia, że ta macierz jest [rotacją](http://en.wikipedia.org/wiki/Rotation_%28mathematics%29) wokół transformacji Y

**Returns**: nothing.

![](/images/Method.png) **rotateZ(\***Float(radians)**\*)**

**Description**: Sprawia, że ta macierz jest [rotacją](http://en.wikipedia.org/wiki/Rotation_%28mathematics%29) wokół transformacji Z

**Returns**: nothing.

![](/images/Method.png) **scale(\***Vector**\*)**

**Description**: Tworzy z tej macierzy [transformatę skalującą](http://en.wikipedia.org/wiki/Scaling_matrix)

**Returns**: nothing.

![](/images/Method.png) **transform(\***Vector, Matrix**\*)**

**Description**: Tworzy z tej macierzy [macierz transformacji](http://en.wikipedia.org/wiki/Transformation_matrix) opartą na wektorze i macierzy

**Returns**: nothing.

![](/images/Method.png) **unity(\*\***)\*\*

**Description**: Sprawia, że ta macierz jest [macierzą tożsamości](http://en.wikipedia.org/wiki/Identity_matrix)

**Returns**: nothing.

Retrieved from "<http://wiki.freecad.org/index.php?title=Matrix_API/pl&oldid=1538782>"
