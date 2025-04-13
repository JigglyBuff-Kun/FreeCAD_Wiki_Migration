---
title: API des matrices
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Les Matrices 4x4 sont utilisées partout dans FreeCAD et peuvent être créées par l'une des façons suivantes :

```
m = FreeCAD.Matrix()          # m = the [http://en.wikipedia.org/wiki/Identity_matrix identity matrix]
m = FreeCAD.Base.Matrix()
print m.A21()               # print m[1][0]

```

![](/images/Method.png)  **A (****)**

**Description**:

**Returns**: tous les éléments de la matrice

![](/images/Method.png)  **A11 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A12 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A13 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A14 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A21 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A22 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A23 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A24 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A31 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A32 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A33 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A34 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A41 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A42 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A43 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png)  **A44 (****)**

**Description**:

**Returns**: un élément de matrice

![](/images/Method.png) **determinant(****)**

**Description**: calcule le [déterminant](https://fr.wikipedia.org/wiki/D%C3%A9terminant_%28math%C3%A9matiques%29) de la matrice

**Returns**: un nombre.

![](/images/Method.png) **inverse(****)**

**Description**: [inverse](https://fr.wikipedia.org/wiki/Matrice_inversible) de cette matrice, si possible

**Returns**: une matrice

![](/images/Method.png) **invert(****)**

**Description**: [inverse](https://fr.wikipedia.org/wiki/Matrice_inversible) cette matrice, si possible

**Returns**: rien

![](/images/Method.png) **move(***Vector***)**

**Description**: fait faire à cette matrice une [translation](http://fr.wikipedia.org/wiki/Translation_%28g%C3%A9om%C3%A9trie%29)

**Returns**: rien.

![](/images/Method.png) **multiply(***Matrix or Vector***)**

**Description**: retourne le [produit croisé](https://fr.wikipedia.org/wiki/Produit_vectoriel) d'une matrice ou d'un vecteur avec cette matrice

**Returns**: une matrice

![](/images/Method.png) **rotateX(***Float(radians)***)**

**Description**: appliquer une [rotation](https://fr.wikipedia.org/wiki/Rotation_affine) à cette matrice autour de X

**Returns**: rien.

![](/images/Method.png) **rotateY(***Float(radians)***)**

**Description**: appliquer une [rotation](https://fr.wikipedia.org/wiki/Rotation_affine) à cette matrice autour de Y

**Returns**: rien.

![](/images/Method.png) **rotateZ(***Float(radians)***)**

**Description**: appliquer une [rotation](https://fr.wikipedia.org/wiki/Rotation_affine) à cette matrice autour de Z

**Returns**: rien.

![](/images/Method.png) **scale(***Vector***)**

**Description**: appliquer un changement [d'échelle](https://en.wikipedia.org/wiki/Scaling_matrix) à cette matrice

**Returns**: rien.

![](/images/Method.png) **transform(***Vector, Matrix***)**

**Description**: appliquer à cette matrice une [transformation](http://fr.wikipedia.org/wiki/Matrice_d%27une_application_lin%C3%A9aire) basée sur le vecteur et la matrice

**Returns**: rien.

![](/images/Method.png) **unity(****)**

**Description**: rendre cette matrice en [matrice unité](https://fr.wikipedia.org/wiki/Matrice_identit%C3%A9)

**Returns**: rien.

Retrieved from "<http://wiki.freecad.org/index.php?title=Matrix_API/fr&oldid=1538790>"