---
title: Vector API
---
Los vectores se utilizan en todas partes en FreeCAD.

Vectors are used everywhere in FreeCAD.

Ejemplo:

```
v=FreeCAD.Vector()
v=FreeCAD.Vector(1,0,0)
v=FreeCAD.Base.Vector()
v2 = FreeCAD.Vector(3,2,-5)
v3 = v.add(v2)
print v3.Length

```

![](/images/Property.png) **Length**

**Devuelve**: Devuelve la longitud del vector.

![](/images/Method.png) **add** ( *Vector* )

**Descripción**: Añade otro vector a este

**Devuelve**: La suma de ambos vectores.

![](/images/Method.png) **cross** ( *Vector* )

**Descripción**:

**Devuelve**: El producto vectorial de dos vectores.

![](/images/Method.png) **distanceToLine** ( *Vector1,Vector2* )

**Descripción**:

**Devuelve**: La distancia entre el vector y una línea entre el Vector1 y Vector2.

![](/images/Method.png) **distanceToPlane** ( *Vector1,Vector2* )

**Descripción**:

**Devuelve**: La distancia entre el vector y un plano definido por un punto y una normal.

![](/images/Method.png) **dot** ( *Vector* )

**Descripción**:

**Devuelve**: El producto escalar de dos vectores.

![](/images/Method.png) **getAngle** ( *Vector* )

**Descripción**:

**Devuelve**: El ángulo en radianes entre dos vectores.

![](/images/Method.png) **multiply** ( *Float* )

**Descripción**: Multiplica (escala) un vector por el factor dado

**Devuelve**: Nada.

![](/images/Method.png) **normalize** (  )

**Descripción**: Normaliza un vector (establece su longitud a 1.0).

**Devuelve**: Nada.

![](/images/Method.png) **projectToLine** ( *Vector1,Vector2* )

**Descripción**: Proyecta el vector sobre una línea entre Vector1 y Vector2.

**Devuelve**: Nada.

![](/images/Method.png) **projectToPlane** ( *Vector1,Vector2* )

**Descripción**: Proyecta el vector sobre un plano definido por un punto y una normal.

**Devuelve**: Nada.

![](/images/Method.png) **scale** ( *Float,Float,Float* )

**Descripción**: Lo mismo que multiplicar pero permite especificar valores diferentes para las direcciones X, Y y Z.

**Devuelve**: Nada.

![](/images/Method.png) **sub** ( *Vector* )

**Descripción**: Resta otro vector del primero.

**Devuelve**: El vector resultante.

![](/images/Property.png) **x**

**Devuelve**: La coordenada X de un vector.

![](/images/Property.png) **y**

**Devuelve**: La coordenada Y de un vector.

![](/images/Property.png) **z**

**Devuelve**: La coordenada Z de un vector.

Retrieved from "<http://wiki.freecad.org/index.php?title=Vector_API/es&oldid=1325543>"