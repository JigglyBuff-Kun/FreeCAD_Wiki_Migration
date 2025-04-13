---
title: API des vecteurs
---
:::caution
(Octobre 2019) Ne modifiez pas cette page. L'information est incomplète et obsolète. Pour la dernière API, consultez ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Les vecteurs sont utilisés partout dans FreeCAD.

Exemple :

```
v=FreeCAD.Vector()
v=FreeCAD.Vector(1,0,0)
v=FreeCAD.Base.Vector()
v2 = FreeCAD.Vector(3,2,-5)
v3 = v.add(v2)
print v3.Length

```

![](/images/Property.png) **Length**

**Returns**: renvoie la longueur du vecteur.

![](/images/Method.png) **add(***Vector***)**

**Description**: ajoute un autre vecteur à celui-ci

**Returns**: vecteur

![](/images/Method.png) **distanceToPoint(***Vector***)**

**Description**: la distance entre ce vecteur et un autre.

**Returns**: virgule flottante

![](/images/Method.png) **cross(***Vector***)**

**Description**: le produit croisé entre ce vecteur et un autre.

**Returns**: vecteur

![](/images/Method.png) **distanceToLine(***Vector1, Vector2***)**

**Description**: la distance entre le vecteur et une ligne passant par Vecteur1 dans la direction Vecteur2.

**Returns**: virgule flottante

![](/images/Method.png) **distanceToLineSegment(***Vector1,Vector2***)**

**Description**: un vecteur au point le plus proche sur un segment de ligne de Vector1 à Vector2.

**Returns**: vecteur

![](/images/Method.png) **distanceToPlane(***Vector1, Vector2***)**

**Description**: la distance entre le vecteur et un plan défini par un point et une normale.

**Returns**: virgule flottante

![](/images/Method.png) **dot(***Vector***)**

**Description**: le produit scalaire entre deux vecteurs.

**Returns**: virgule flottante

![](/images/Method.png) **getAngle(***Vector***)**

**Description**: l'angle en radians entre ce vecteur et un autre.

**Returns**: virgule flottante

![](/images/Method.png) **isEqual(***Vector2,tolerance***)**

**Description**: vérifie si la distance entre les points représentés par ce Vector et Vector2 est inférieure ou égale à la tolérance donnée.

**Returns**: vrai/faux

![](/images/Method.png) **isNormal(***Vector2,tolerance***)**

**Description**: vérifie si ce vecteur est normal à Vector2 dans les limites de la tolérance.

**Returns**: vrai/faux

![](/images/Method.png) **isOnLineSegment(***Vector1,Vector2***)**

**Description**: vérifie si ce vecteur est sur le segment de ligne généré par Vector1 et Vector2.

**Returns**: vecteur

![](/images/Method.png) **isParallel(***Vector2,tolerance***)**

**Description**: vérifie si ce vecteur est parallèle à Vector2 dans la limite de la tolérance.

**Returns**: vrai/faux

![](/images/Method.png) **multiply(***Float***)**

**Description**: multiplie (échelles) un vecteur par le facteur donné.

**Returns**: rien

![](/images/Method.png) **negative(***Vector***)**

**Description**: renvoie le négatif (opposé) de ce vecteur.

**Returns**: vecteur

![](/images/Method.png) **normalize(****)**

**Description**: normalise un vecteur (fixe sa longueur à 1,0).

**Returns**: rien

![](/images/Method.png) **projectToLine(***Vector1, Vector2* **)**

**Description**: projette le vecteur sur une ligne entre Vecteur1 et Vector2.

**Returns**: rien

![](/images/Method.png) **projectToPlan(***Vector1, Vector2***)**

**Description**: projette le vecteur sur un plan défini par un point et un normal

**Returns**: rien

![](/images/Method.png) **scale(***Float,Float,Float***)**

**Description**: comme multiply, mais permet de spécifier des valeurs différentes pour les directions x, y et z. (échelle non uniforme)

**Returns**: rien

![](/images/Method.png) **sub(***Vector***)**

**Description**: soustrait un autre vecteur du premier.

**Returns**: vecteur

![](/images/Property.png) **x**

**Returns**: la coordonnée x d'un vecteur.

![](/images/Property.png) **y**

**Returns**: la coordonnée y d'un vecteur.

![](/images/Property.png) **z**

**Returns**: la coordonnée z d'un vecteur.

Retrieved from "<http://wiki.freecad.org/index.php?title=Vector_API/fr&oldid=1356226>"