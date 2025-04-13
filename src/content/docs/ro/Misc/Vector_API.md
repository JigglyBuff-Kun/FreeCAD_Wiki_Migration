---
title: Vector API
---
Vectorii sunt utilizați peste tot în FreeCAD.

Vectors are used everywhere in FreeCAD.

Exempluː

```
v=FreeCAD.Vector()
v=FreeCAD.Vector(1,0,0)
v=FreeCAD.Base.Vector()
v2 = FreeCAD.Vector(3,2,-5)
v3 = v.add(v2)
print v3.Length

```

![](/images/Property.png) **Length**

**Returns**: returnează lungimea vectorului.

![](/images/Method.png) **add(***Vector***)**

**Description**: adaugă un alt vector la acesta.

**Returns**: vector

![](/images/Method.png) **cross(***Vector***)**

**Description**: produsul vectorial între acest vector și un altul.

**Returns**: vector

![](/images/Method.png) **distanceToLine(***Vector1,Vector2***)**

**Description**: distanța dintre vector și o linie prin Vector1 în direcția Vector2.

**Returns**: float

![](/images/Method.png)  **distanceToLineSegment (** *Vector1, Vector2* **)**

**Description**: vector la cel mai apropiat punct pe un segment de linie de la Vector1 la Vector2

**Returns**: vector

![](/images/Method.png)  **distanceToPlane (** *Vector1, Vector2* **)**

**Description**: distanța dintre vector și un plan definit de un punct și o normală.

**Returns**: Float

![](/images/Method.png)  **dot (** *Vector* **)**

**Description**: produsul scalar între 2 vectori

**Returns**: float

![](/images/Method.png)  **getAngle (** *Vector* **)**

**Description**: unghiul în radiani între acest vector și un altul.

**Returns**: float

![](/images/Method.png)  **multiplica (** *Float* **)**

**Description**: multiplica (scara uniforma) un vector cu factorul dat.

**Returns**: Nimic

![](/images/Method.png)  **normaliza (****)**

**Description**: normalizează un vector (stabilește lungimea lui la 1.0).

**Returns**: nothing

![](/images/Method.png)  **projectToLine (** *Vector1, Vector2* **)**

**Description**: proiectează vectorul pe o linie prin Vector1 în direcția Vector2.

**Returns**: Nothing

![](/images/Method.png)  **projectToPlane (** *Vector1, Vector2* **)**

**Description**: proiectează vectorul pe un plan definit de un punct (Vector1) și un vector o normală (vector2).

**Returns**: nothing

![](/images/Method.png)  **scale (** *Float, Float, Float* **)**

**Description**: Același lucru ca și multiplicare, dar permite să specificați diferite valori pentru direcțiile x, y și z. (scară neuniformă)

**Returns**: nimic

![](/images/Method.png) **sub(***Vector***)**

**Description**: scăderea altui vector din acesta.

**Returns**: vector

![](/images/Property.png) **x**

**Returns**: coordonata x a vectorului.

![](/images/Property.png) **y**

**Returns**: coordonata y a vectorului.

![](/images/Property.png) **z**

**Returns**: coordonata z a vectorului

Retrieved from "<http://wiki.freecad.org/index.php?title=Vector_API/ro&oldid=1325547>"