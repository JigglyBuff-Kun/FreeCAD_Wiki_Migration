---
title: API dei Vettori
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

In FreeCAD i vettori sono utilizzati ovunque.

Esempio:

```
v=FreeCAD.Vector()
v=FreeCAD.Vector(1,0,0)
v=FreeCAD.Base.Vector()
v2 = FreeCAD.Vector(3,2,-5)
v3 = v.add(v2)
print v3.Length

```

![](/images/Property.png) **Length**

**Returns**: restituisce la lunghezza del vettore.

![](/images/Method.png) **add(***Vector***)**

**Description**: aggiunge un altro vettore a questo.

**Returns**: vector

![](/images/Method.png) **cross(***Vector***)**

**Description**: il prodotto vettoriale tra questo vettore e un altro.

**Returns**: vector

![](/images/Method.png) **distanceToLine(***Vector1,Vector2***)**

**Description**: la distanza tra il vettore e una linea tra Vettore1 e Vettore2 attraverso Vettore1 e in direzione di Vettore2.

**Returns**: float

![](/images/Method.png) **distanceToPoint(***Vector***)**

**Description**: la distanza tra questo vettore e un altro.

**Returns**: float

![](/images/Method.png) **distanceToLineSegment(***Vector1,Vector2***)**

**Description**: un vettore dal punto più vicino su un segmento di linea da Vettore1 a Vettore2.

**Returns**: Vector

![](/images/Method.png) **distanceToPlane(***Vector1,Vector2***)**

**Description**: la distanza tra il vettore e un piano definito da un punto e una normale.

**Returns**: float

![](/images/Method.png) **dot(***Vector***)**

**Description**: il prodotto scalare tra due vettori.

**Returns**: float

![](/images/Method.png) **getAngle(***Vector***)**

**Description**: l'angolo in radianti tra due vettori.

**Returns**: float

![](/images/Method.png) **isEqual(***Vector2,tolleranza***)**

**Description**: Controlla se la distanza tra i punti rappresentati da questo Vettore e Vettore2 è inferiore o uguale alla tolleranza data.

**Returns**: True/False

![](/images/Method.png) **isNormal(***Vector2,tolleranza***)**

**Description**: Controlla se questo vettore è normale al vettore2 entro la tolleranza.

**Returns**: True/False

![](/images/Method.png) **isOnLineSegment(***Vector1,Vector2***)**

**Description**: Verifica se questo vettore si trova sul segmento di linea generato da Vettore1 e Vettore2.

**Returns**: Vector

![](/images/Method.png) **isParallel(***Vector2,tolleranza***)**

**Description**: Controlla se questo vettore è parallelo al vettore2 entro la tolleranza.

**Returns**: True/False

![](/images/Method.png) **multiply(***Float***)**

**Description**: moltiplica (con scala uniforme) un vettore per il fattore indicato.

**Returns**: nothing

![](/images/Method.png) **negative(***Vector***)**

**Description**: Restituisce il negativo (opposto) di questo vettore.

**Returns**: Vector

![](/images/Method.png) **normalize(****)**

**Description**: normalizza un vettore (imposta la sua lunghezza a 1,0).

**Returns**: nothing

![](/images/Method.png) **projectToLine(***Vector1,Vector2***)**

**Description**: proietta il vettore su una linea attraverso Vettore1 in direzione Vettore2.

**Returns**: nothing

![](/images/Method.png) **projectToPlane(***Vector1,Vector2***)**

**Description**: pproietta il vettore su un piano definito da un punto (Vettore1) e una normale (Vettore2).

**Returns**: nothing

![](/images/Method.png) **scale(***Float,Float,Float***)**

**Description**: Come per moltiplicare, ma consente di specificare valori diversi per le direzioni x, y e z (scala non uniforme).

**Returns**: nothing

![](/images/Method.png) **sub(***Vector***)**

**Description**: sottrae un altro vettore da questo.

**Returns**: vector

![](/images/Property.png) **x**

**Returns**: la coordinata x di un vettore.

![](/images/Property.png) **y**

**Returns**: la coordinata y di un vettore.

![](/images/Property.png) **z**

**Returns**: la coordinata z di un vettore.

Retrieved from "<http://wiki.freecad.org/index.php?title=Vector_API/it&oldid=1362399>"