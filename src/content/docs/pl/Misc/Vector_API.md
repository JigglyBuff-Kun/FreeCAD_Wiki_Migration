---
title: Skrypty wektorów
---
:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Wektory są używane dosłownie wszędzie w programie FreeCAD.

Przykład:

```
v=FreeCAD.Vector()
v=FreeCAD.Vector(1,0,0)
v=FreeCAD.Base.Vector()
v2 = FreeCAD.Vector(3,2,-5)
v3 = v.add(v2)
print v3.Length

```

![](/images/Property.png) **Length**

**Returns**: zwraca długość wektora.

![](/images/Method.png) **add(***Vector***)**

**Description**: dodaje kolejny wektor do obecnego.

**Returns**: vector

![](/images/Method.png) **cross(***Vector***)**

**Description**: iloczyn krzyżowy pomiędzy obecnym wektorem a kolejnym.

**Returns**: vector

![](/images/Method.png) **distanceToLine(***Vector1,Vector2***)**

**Description**: odległość między wektorem a prostą przechodzącą przez wektor1 w kierunku wektora2.

**Returns**: float

![](/images/Method.png) **distanceToPoint(***point2***)**

**Description**: metoda instancji Base.Vector distanceToPoint(point2)

**Returns**: float

![](/images/Method.png) **distanceToPoint(***Vector***)**

**Description**: odległość między tym wektorem a innym.

**Returns**: float

.

![](/images/Method.png) **distanceToPlane(***Vector1,Vector2***)**

**Description**: odległość między wektorem a płaszczyzną zdefiniowaną przez punkt i normalną.

**Returns**: float

![](/images/Method.png) **dot(***Vector***)**

**Description**: iloczyn punktowy między 2 wektorami.

**Returns**: float

![](/images/Method.png) **getAngle(***Vector***)**

**Description**: kąt w radianach pomiędzy obecnym wektorem a kolejnym.

**Returns**: float

![](/images/Method.png) **isEqual(***Vector2,tolerance***)**

**Description**: Sprawdza, czy odległość między punktami reprezentowanymi przez ten Vector i Vector2 jest mniejsza lub równa podanej tolerancji.

**Returns**: True/False

![](/images/Method.png) **isOnLineSegment(***Vector1,Vector2***)**

**Description**: Sprawdza, czy ten wektor znajduje się na odcinku linii wygenerowanym przez Vector1 i Vector2.

**Returns**: Vector

![](/images/Method.png) **multiply(***float***)**

**Description**: mnoży *(skala jednostajna)* wektor przez podany współczynnik.

**Returns**: nothing

![](/images/Method.png) **isParallel(***Vector2,tolerance***)**

**Description**: Sprawdza, czy Vector jest równoległy do Vector2 w zakresie tolerancji.

**Returns**: True/False

![](/images/Method.png) **negative(***Vector***)**

**Description**: Zwraca ujemną *(przeciwną)* wartość tego wektora.

**Returns**: Vector

![](/images/Method.png) **normalize(****)**

**Description**: normalizuje wektor *(ustawia jego długość na wartość 1.0)*.

**Returns**: nothing

![](/images/Method.png) **projectToLine(***Vector1,Vector2***)**

**Description**: rzutuje wektor na prostą przechodzącą przez wektor1 w kierunku wektora2.

**Returns**: nothing

![](/images/Method.png) **projectToPlane(***Vector1,Vector2***)**

**Description**: rzutuje wektor na płaszczyznę zdefiniowaną przez punkt *(wektor1)* i normalną *(wektor2)*.

**Returns**: nothing

![](/images/Method.png) **scale(***Float,Float,Float***)**

**Description**: To samo co mnożenie, ale pozwala określić różne wartości dla kierunków x, y i z. *(niejednolita skala)*

**Returns**: nothing

![](/images/Method.png) **sub(***Vector***)**

**Description**: odejmuje wektor od obecnego.

**Returns**: vector

![](/images/Property.png) **x**

**Returns**: współrzędna x wektora.

![](/images/Property.png) **y**

**Returns**: współrzędna y wektora.

![](/images/Property.png) **z**

**Returns**: współrzędna z wektora.

Retrieved from "<http://wiki.freecad.org/index.php?title=Vector_API/pl&oldid=1355898>"