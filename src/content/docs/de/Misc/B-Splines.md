---
title: B-Splines
---
Diese Seite beschreibt, wie man B-Splines in FreeCAD verwendet. Sie gibt auch Hintergrundinformationen, was B-Splines sind und für welche Anwendungen sie nützlich sind.

## Motivation

Wenn du bereits über B-Splines und deren Anwendung Bescheid weisst, kannst du direkt mit dem Abschnitt [B-Splines in FreeCAD](#B-splines_in_FreeCAD/de) fortfahren.

Nehmen wir an, Du willst ein Teil entwerfen, das mit einem 3D Drucker hergestellt werden soll. Das Teil muss so eine Kante haben:

![](/images/B-splines_Motivation-start.png)

Du musst das Teil in Richtung der Unterseite der Skizze nach oben drucken. Äußere Stützstrukturen sind möglicherweise keine Option. Daher musst Du eine Stütze direkt an deinem Teil anbringen. Welche Möglichkeiten hast du?

* Option 1: du kannst eine Linie vom Punkt (20, 0) zum Punkt (80, 40) hinzufügen:

![](/images/B-splines_Motivation-line.png)

Allerdings benötigt diese Lösung viel Volumen, also Gewicht und Material.

* Option 2: du kannst die beiden Punkte mit einem Kreisbogen verbinden. Um Volumen zu sparen, sollte der Bogen tangential im Punkt (80,40) enden. Dann sieht deine Lösung wie folgt aus:

![](/images/B-splines_Motivation-circle.png)

GUT. Aber ganz unten brauchst du keine sofortige Unterstützung.

* Option 3: du kannst noch mehr Volumen einsparen, wenn die Verbindung zwischen den beiden Punkten eine Kurve wäre, die tangential bei (0, 20) beginnt und tangential bei (80, 40) endet:

![](/images/B-splines_Motivation-bezier.png)

So kann eine Kurve, mit der du zwei Punkte tangential zu einem Bezugspunkt verbinden kannst, sehr nützlich für Konstruktionen sein. Bézierkurven bieten diese Möglichkeit.

## Bézierkurven

### Herleitung

Bézierkurven sind Polynome zur Beschreibung der Verbindung zwischen 2 Punkten. Das einfachste Polynom, das 2 Punkte verbindet, ist eine Gerade (

A
∗

x

1
+
B
{\displaystyle A\*x^{1}+B}
![{\displaystyle A*x^{1}+B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59ad13b69733eab9240e2178bd0a00ce514ba502)), also sind lineare Bézierkurven auch Strecken (Geradenabschnitte):

[![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Bezier_linear_anim.gif)](/File:Bezier_linear_anim.gif)

Animation 1: Lineare Bézierkurve.

Ein Polynom wird jedoch erst dann nützlich, wenn wir es steuern können. Es sollte also einen Punkt zwischen den beiden Endpunkten geben, der es uns erlaubt festzulegen, wie die Endpunkte verbunden werden. Wie unter Option 3 im Beispiel oben, ist die Kurve hilfreich, wenn sie tangential zu Linien beginnt und endet, die über die Endpunkte verlaufen. Und das ist ein Hauptmerkmal von Bézierkurven. Fügen wir also einen Kontrollpunkt zwischen den 2 Endpunkten ein. Die Kurve beginnt tangential, auf diesem Kontrollpunkt zulaufend, d. h. sie ist tangential zu der Linie, die wir zwischen dem Startpunkt und dem Kontrollpunkt ziehen können. Wenn man vom Endpunkt aus rückwärts geht, ist die Kurve ebenfalls tangential zu der Linie, die wir zwischen dem Kontrollpunkt und dem Endpunkt zeichnen können. Animation 2 zeigt, wie eine solche Kurve aussieht.

[![](https://upload.wikimedia.org/wikipedia/commons/3/35/Bezier_quadratic_anim.gif)](/File:Bezier_quadratic_anim.gif)

Animation 2: Quadratische Bézierkurve. P1 ist hierbei der Kontrollpunkt.

Die Animation verdeutlicht, worum es sich bei der Kurve im Grunde handelt - um einen Übergang von P0 zu P2, indem die Linie P0-P1 in die Linie P1-P2 gedreht wird. Dadurch erhalten wir das schöne tangentiale Anfang/Ende Merkmal.

Eine solche Kurve kann nur durch ein quadratisches Polynom beschrieben werden. (Die Anzahl der Links-/Rechtsdrehungen + 1 ist die erforderliche Polynomordnung. Ein quadratisches Polynom hat eine einzige Windung, ein kubisches Polynom hat zwei Windungen usw.) Daher ist eine Bézierkurve mit einem Kontrollpunkt eine quadratische Bézierkurve (zweiter Ordnung).

Ein einziger Kontrollpunkt ist oft nicht ausreichend. Nimm das obige Motivationsbeispiel. Bei der Option 3 endet die Kurve tangential in x-Richtung. Aber wie kann man die Punkte (20, 0) und (80, 40) so verbinden, dass die Kurve tangential in y-Richtung endet? Dazu braucht man erst eine Rechts- und dann eine Linkskurve, also ein kubisches Polynom (dritter Ordnung). Und das bedeutet für eine Bézierkurve, dass wir einen zweiten Kontrollpunkt brauchen (oder man kann sagen, wir gewinnen). Animation 3 zeigt eine kubische Bézierkurve.

[![](https://upload.wikimedia.org/wikipedia/commons/a/a3/Bezier_cubic_anim.gif)](/File:Bezier_cubic_anim.gif)

Animation 3: Kubische Bézierkurve.

Um die Frage zu beantworten: Die Lösung mit dem tangentialen Ende in y-Richtung für das Beispiel ist diese:

![](/images/B-splines_Motivation-cubic-bezier.png)

### Regeln

Im der Herleitung sind vielleicht schon einige "Regeln" für Bézierkurven aufgefallen:

* Der Polynomgrad ist auch der Grad der Kurven.
* Werden 

  n
  {\displaystyle n}
  ![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) Krümmungen benötigt, muss die Bézierkurve mindestens vom Grad 

  n
  +
  1
  {\displaystyle n+1}
  ![{\displaystyle n+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a135e65a42f2d73cccbfc4569523996ca0036f1) sein.
* Eine Bézierkurve beginnt immer tangential zu der Linie zwischen dem Startpunkt und dem ersten Kontrollpunkt (und endet tangential zu der Linie zwischen dem letzten Kontrollpunkt und dem Endpunkt).

### Mathe

Wenn du an den mathematischen Hintergründen interessiert bist, hier sind die Grundlagen.

Eine Bézierkurve wird mit dieser Formel berechnet:

Bezier
(
n
,
t
)
=

∑

i
=
0

n

(

n
i

)
⏟

Polynomausdruck

(

1
−
t
)

n
−
i

t

i
⏟

Polynomausdruck

P

i
⏟

Punktkoordinate
{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum \_{i=0}^{n}\underbrace {\binom {n}{i}} \_{\text{Polynomausdruck}}\underbrace {\left(1-t\right)^{n-i}t^{i}} \_{\text{Polynomausdruck}}\;\underbrace {P\_{i}} \_{\text{Punktkoordinate}}}
![{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum _{i=0}^{n}\underbrace {\binom {n}{i}} _{\text{Polynomausdruck}}\underbrace {\left(1-t\right)^{n-i}t^{i}} _{\text{Polynomausdruck}}\;\underbrace {P_{i}} _{\text{Punktkoordinate}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/42bc1ab6a9e5023d2db94eb7eec187fe8e9ef166)

Dabei ist *n* der Grad der Kurve. Eine Bézierkurve vom Grad *n* ist also ein Polygon der Ordnung *n*. Die Faktoren 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) sind dabei die Koordinaten der Kontrollpunkte der Bézierkurven. Zur Veranschaulichung siehe [Steuerung von Bézierkurven](https://pomax.github.io/bezierinfo/#control).

Wenn du weiter interessiert bist, sieh dir [Die Mathematik der Bézierkurven](https://pomax.github.io/bezierinfo/#explanation) mit einer schön animierten Herleitung der Mathematik der Bézierkurven an.

## B-Splines

### Grundlagen

[Dieses Video](https://www.youtube.com/watch?v=bE1MrrqBAl8) listet zu Beginn die praktischen Probleme mit Bézierkurven auf. Zum Beispiel, dass das Hinzufügen oder Ändern eines Kontrollpunktes die gesamte Kurve verändert. Diese Probleme können gelöst werden, indem man mehrere Bézierkurven miteinander verbindet. Das Ergebnis ist ein sogenannter Spline, insbesondere ein B-Spline (Basis Spline). Das Video erklärt auch, dass eine Vereinigung von quadratischen Bézierkurven einen uniformen quadratischen B-Spline und eine Vereinigung von kubischen Bézierkurven einen uniformen kubischen B-Spline bildet.

Aus den Videos können wir nützliche "Regeln" für B-Splines entnehmen:

* Der erste und letzte Kontrollpunkt ist der End/Startpunkt des Splines.
* Wie bei Bézierkurven beginnen Splines immer tangential zur Linie zwischen dem Startpunkt und dem ersten Kontrollpunkt (und enden tangential zur Linie zwischen dem letzten Kontrollpunkt und dem Endpunkt).
* Eine Vereinigung von 

  S
  {\displaystyle S}
  ![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) Bézierkurven mit dem Grad 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) hat 

  S
  +
  D
  {\displaystyle S+D}
  ![{\displaystyle S+D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65a5d3f864247ec4ca8a4174e180fd0154651187) Kontrollpunkte.
  + Da man in den meisten Fällen mit kubischen B-Splines arbeitet, kann man sagen, dass 

    N
    {\displaystyle N}
    ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) Kontrollpunkte zu 

    N
    −
    3
    {\displaystyle N-3}
    ![{\displaystyle N-3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b849f72aa23caee22353feb5ea5c327854650fb0) Béziersegmenten und diese wiederum zu 

    N
    −
    4
    {\displaystyle N-4}
    ![{\displaystyle N-4}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f288cc09f331fd1fc0d38ce419af503fe8cd23) Segment-Knotenpunkten führen.
* Ein B-Spline mit dem Grad 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) bietet in jedem Punkt eine stetige Ableitung 

  D
  −
  1
  {\displaystyle D-1}
  ![{\displaystyle D-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2882b444f937e7119403c8625aea8647b667747) der Ordnung.
  + Für einen kubischen B-Spline bedeutet dies, dass sich die Krümmung (Ableitung zweiter Ordnung) nicht ändert, wenn man von einem Segment zum nächsten reist. Dies ist eine sehr nützliche Eigenschaft, wie wir später sehen werden.

Wenn du an weiteren Details über die Eigenschaften von B-Splines interessiert bist, dann schau dir [dieses Video](https://www.youtube.com/watch?v=xXJylM2S72s) an.

#### Basis

Since we will only introduce the basics of B-spline, we don't go here into the details.

The basis constructs the spline. Looking at the definition of Bézier curves in section [Math](#Math) we remember that a Bézier curve is a linear combination of polynomials with the x/y coordinate of each of the control points as a factor. These polynomials are called Bernstein polynomials.

As several Bézier curves are combined to form a spline, we get a set of Bernstein polynomials forming the spline (they are the basis). As we want to overcome the mentioned limitations of Bézier curves, we don't geometrically combine the different Bernstein polynomials of the Bézier curves, but define Bernstein polynomials over the whole geometrical range of the spline. So we **don't combine** the Bézier curves with its Bernstein polynomials, which would be

:   Bezier-combination
    =

    {

    ∑

    i
    =
    0

    n

    P

    i
    ⋅

    B

    i
    ,
    n
    (
    t
    )
    ,

    0
    ≤
    t
    ≤
    1

    ∑

    i
    =
    0

    n

    P

    i
    +
    n
    ⋅

    B

    i
    ,
    n
    (
    t
    −
    1
    )
    ,

    1
    ≤
    t
    ≤
    2

    ⋯

    {\displaystyle {\textrm {Bezier-combination}}={\begin{cases}\sum \_{i=0}^{n}P\_{i}\cdot B\_{i,n}(t),&0\leq t\leq 1\\\sum \_{i=0}^{n}P\_{i+n}\cdot B\_{i,n}(t-1),&1\leq t\leq 2\\\cdots \end{cases}}}
    ![{\displaystyle {\textrm {Bezier-combination}}={\begin{cases}\sum _{i=0}^{n}P_{i}\cdot B_{i,n}(t),&0\leq t\leq 1\\\sum _{i=0}^{n}P_{i+n}\cdot B_{i,n}(t-1),&1\leq t\leq 2\\\cdots \end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0817128ca14d76650df1a9b11bf766277965eb41)

whereas 

B

i
,
n
(
t
)
{\displaystyle B\_{i,n}(t)}
![{\displaystyle B_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/58fbcfe844c24961f0c5b6bd3fcc5f0bc64bffdf) is the i-th Bernstein polynomial with order 

n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) and the coefficients 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) are the point coordinates of the Bézier curve control points. But we use a **different set of functions** that are defined over the whole spline range:

:   B-spline
    =

    ∑

    i
    =
    0

    n

    p

    i
    ⋅

    N

    i
    ,
    n
    (
    t
    )
    {\displaystyle {\textrm {B-spline}}=\sum \_{i=0}^{n}p\_{i}\cdot N\_{i,n}(t)}
    ![{\displaystyle {\textrm {B-spline}}=\sum _{i=0}^{n}p_{i}\cdot N_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/435d04ece09a2c6dd3f34a1b0f0ce44b389013a0).

Note that in general 

N

i
,
n
(
t
)
≠

B

i
,
n
(
t
)
{\displaystyle N\_{i,n}(t)\neq B\_{i,n}(t)}
![{\displaystyle N_{i,n}(t)\neq B_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/219aeb22c0243b3301a5304d645e3cc84e086b37), and the Bezier control points 

{

P

1
,

P

2
,
…
}
{\displaystyle \{P\_{1},P\_{2},\dots \}}
![{\displaystyle \{P_{1},P_{2},\dots \}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa3d6f309315c498fc08f5c8cff074c5a20118b2) are different from B-spline control points 

{

p

1
,

p

2
,
…
}
{\displaystyle \{p\_{1},p\_{2},\dots \}}
![{\displaystyle \{p_{1},p_{2},\dots \}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/413bbf4d6821f4a2aa6c81ea4ce35402c0646f8c).

The different 

N

i
,
n
(
t
)
{\displaystyle N\_{i,n}(t)}
![{\displaystyle N_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a0b8b1a68ff11368898059ae7901f1ce9c0dc59e) are defined piecewise where the interval of every piece is the interval of the Bézier piece.

When the lengths of all 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) pieces is equal, we speak of a uniform spline. (In literature this is often denoted as equal travel time 

t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560) per piece.)

To understand how the 

p

i
{\displaystyle p\_{i}}
![{\displaystyle p_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5bab39399bf5424f25d957cdc57c84a0622626d2) are the coordinates of the B-spline control points, see the first minute of [this video](https://www.youtube.com/watch?v=dPPTCy4L4rY&list=PL8bSwVy8_IcMvtI70tZoYesCS0hGVO5qd).

#### Knot vector

As derived above, B-splines are created out of 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) piecewise polynomials with continuity up to a certain derivative between the pieces. The endpoints of the piece's definition interval are called knots. For a spline defined over 

k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) pieces, there are 

k
+
1
{\displaystyle k+1}
![{\displaystyle k+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/552a558062ed4c0486297b5b5531c5ee044dbd9b) knots given by the so-called *knot vector*:  

{

t

0
,

t

1
,

t

2
,
…
,

t

k
}
{\displaystyle \{t\_{0},t\_{1},t\_{2},\dots ,t\_{k}\}}
![{\displaystyle \{t_{0},t_{1},t_{2},\dots ,t_{k}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c114653d9cad33ebf60eb5e159a884f89526f9b1) whereas 

t

0
<

t

1
<

t

2
<
⋯
<

t

k
{\displaystyle t\_{0}<t\_{1}<t\_{2}<\dots <t\_{k}}
![{\displaystyle t_{0}<t_{1}<t_{2}<\dots <t_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8b8a2ac474ff7430aad3519e00f2d4413387c3ef)

The knot vector comprises the knots of the 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) basis functions that define the B-spline, see [this video](https://www.youtube.com/watch?v=ni5NNPCVvDY). The basis functions of a B-spline can be calculated using the knot vector and a creation algorithm, see [this video](https://www.youtube.com/watch?v=hrsO45AHtbs).

The derivative until which continuity exists is given by the multiplicity 

m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc). Therefore we can specify a vector with the multiplicity for every knot: 

{

m

0
,

m

1
,
…
,

m

k
}
{\displaystyle \{m\_{0},m\_{1},\dots ,m\_{k}\}}
![{\displaystyle \{m_{0},m_{1},\dots ,m_{k}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0598cae76cf2890586d6b1067587a9be45d3dd78). A knot on a spline with degree *d* and the multiplicity *m* tells that the curve left and right to the knot has at least an equal *n* order derivative (called *C**n* continuity) whereas 

n
=
d
−
m
{\displaystyle n=d-m}
![{\displaystyle n=d-m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f03a465bfac71680367d6c2ce4bd23314e5690ac).

### Nicht-uniforme B-Splines

Die Ableitung der B-Splines von Bézier-Kurven hat die mathematische Konsequenz, dass in B-Splines jeder Polynomabschnitt dieselbe Länge hat. Solche B-Splines werden *uniform* genannt. Der allgemeinere Fall ist, dass sie dieselbe Längen haben können aber nicht müssen. Diese *nicht-uniformen* Splines haben den Vorteil, man kontrollieren kann, wie dicht die Splines an den Kontrollpunkten vorbeilaufen.

Mathematically this is achieved by defining the different 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) pieces at different intervals. If for example a B-spline is defined for the interval [0, 1], it is uniform if all its e.g. 5 pieces are also defined in this interval. If now 

N

1
,
4
{\displaystyle N\_{1,4}}
![{\displaystyle N_{1,4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3738c6fe3451d054d671162b69741e9cb13604b) is only defined in the interval [0, 0.6] (outside the interval it is set to zero), it is shorter and thus the spline becomes non-uniform.

As described above the parameters of the knots are described by the knot vector. So the knot vector stores the definition intervals. When now one piece gets another interval, also the knot vector changes, see [this video](https://www.youtube.com/watch?v=w-l5R70y6u0) for a visualization.

### Rationale B-splines

A further generalization can be made for B-splines by introducing weights for the control points. This way it can be controlled "how important" a control point is.

The equation for such a spline is

:   c
    (
    n
    ,
    t
    )
    =

    ∑

    i
    =
    0

    n

    d

    i

    N

    i
    ,
    n
    (
    t
    )
    ⋅

    w

    i

    ∑

    i
    =
    0

    n

    N

    i
    ,
    n
    (
    t
    )
    ⋅

    w

    i
    {\displaystyle c(n,t)={\cfrac {\sum \_{i=0}^{n}d\_{i}N\_{i,n}(t)\cdot w\_{i}}{\sum \_{i=0}^{n}N\_{i,n}(t)\cdot w\_{i}}}}
    ![{\displaystyle c(n,t)={\cfrac {\sum _{i=0}^{n}d_{i}N_{i,n}(t)\cdot w_{i}}{\sum _{i=0}^{n}N_{i,n}(t)\cdot w_{i}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7644b465b454740e81be4cabeec0cbdf1e5960eb)

Notice that the function is no longer a polynomial, but a rational function, and these splines are called rational B-splines. Observe that when all 

w

i
{\displaystyle w\_{i}}
![{\displaystyle w_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe22f0329d3ecb2e1880d44d191aba0e5475db68) are equal, the equation reduces to a regular non-rational B-spline. So non-rational B-splines are a subset of rational B-splines.

Nicht-uniforme und rationale B-Splines werden oft **[NURBS](https://de.wikipedia.org/wiki/Non-Uniform_Rational_B-Spline)** genannt und werden in vielen Bereichen des geometrischen Modellierens eingesetzt.

## B-splines in FreeCAD

FreeCAD bietet die Möglichkeit, uniforme oder nicht-uniforme B-Splines beliebigen Grades in 2D über die [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") zu erstellen.

### Erstellung

Um B-Splines zu erstellen, gehe in eine Skizze und verwende die Werkzeugleistenschaltfläche ![](/images/Sketcher_CreateBSpline.svg) [B-spline erstellen](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de"). Dann Linksklick um einen Kontrollpunkt zu setzen, bewege die Maus Linksklick, um den nächsten Kontrollpunkt zu setzen und so weiter. Abschließend Rechtsklick, um die Definition abzuschließen und den B-Spline zu erstellen.

Standardmäßig werden uniforme kubische Splines erstellt, es sei denn, es stehen nicht genügend Kontrollpunkte zur Verfügung, um dies zu tun. Wird also einen B-Spline mit nur 2 Kontrollpunkten erstellt, erhält man natürlich einen Spline, der eine einzelne lineare Bézierkurve ist, mit 3 Kontrollpunkte erhält man eine quadratische Bézierkurve, erst mit 5 Kontrollpunkten erhält man einen kubischen B-Spline, der aus 2 Béziersegmenten besteht.
[eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de") Wird während der Erstellung eines B-Splines D gedrückt, kann sein Grad festgelegt werden (er wird auf einen geringeren Grad gesetzt, wenn nicht genügend punkte vorhanden sind).

Um periodische B-Splines (B-Splines, die eine geschlossene Kurve bilden) zu erstellen, verwende die Werkzeugleistenschaltfläche ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodische B-spline](/Sketcher_CreatePeriodicBSpline/de "Sketcher CreatePeriodicBSpline/de"). Es ist nicht notwendig, den letzten Kontrollpunkt auf den ersten zu setzen, da der B-Spline automatisch geschlossen wird:

![](/images/Sketcher_Periodic-B-spline-creation.gif)

B-Splines können auch aus bestehenden Skizzen-Segmenten erzeugt werden. Dazu die Elemente auswählen und drücke die Schaltfläche ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Geometrie in B-Spline wandeln](/Sketcher_BSplineConvertToNURBS/de "Sketcher BSplineConvertToNURBS/de") drücken.

Während der Erstellung eines B-Splines kann sein Grad angegeben werden, indem die Taste D gedrückt wird. Hiermit kann die Voreinstellung, die Erstellung eines kubischen B-Splines, überschrieben werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

### Ändern des Grads

Um den Grad zu ändern, wähle den B-Spline und verwende entweder die Werkzeugleistenschaltfläche ![](/images/Sketcher_BSplineIncreaseDegree.svg) [B-Spline-Grad erhöhen](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree") oder ![](/images/Sketcher_BSplineDecreaseDegree.svg) [B-Spline-Grad vermindern](/Sketcher_BSplineDecreaseDegree/de "Sketcher BSplineDecreaseDegree/de").

**Hinweis:** Das Verringern des Grads kann eine vorherige Erhöhung des Grads nicht rückgängig machen, siehe die Wiki Seite [B-spline Grad vermindern](/Sketcher_BSplineDecreaseDegree/de "Sketcher BSplineDecreaseDegree/de") für eine Erklärung.

### Ändern der Knotenvielfalt

Die Punkte, an denen zwei Bézierkurven miteinander verbunden werden, um den B-Spline zu bilden, werden Knoten genannt. Die Knotenmultiplikation bestimmt, wie die Bézier Teile verbunden werden, siehe die Wiki Seite [Knotenvielfalt erhöhen](/Sketcher_BSplineIncreaseKnotMultiplicity/de "Sketcher BSplineIncreaseKnotMultiplicity/de") für Details.

Um die Knotenvielfalt zu ändern, verwende die Werkzeugleistenschaltflächen in der ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [B-spline Knotenvielfalt erhöhen](/Sketcher_BSplineIncreaseKnotMultiplicity/de "Sketcher BSplineIncreaseKnotMultiplicity/de") oder ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [B-spline Knotenvielfalt vermindern](/Sketcher_BSplineDecreaseKnotMultiplicity/de "Sketcher BSplineDecreaseKnotMultiplicity/de").

**Hinweis:** Das Erstellen von zwei B-Splines, die miteinander verbunden sind, wird sich nicht zu einem einzigen neuen B-Spline vereinigen. Ihr Verbindungspunkt ist also kein Knoten. Die einzige Möglichkeit, einen neuen Knoten in einem bestehenden B-Spline zu erhalten, besteht darin, den Grad zu verringern. Dabei können jedoch viele neue Knoten entstehen. Daher ist es besser, den B-Spline mit mehr Kontrollpunkten neu zu zeichnen.

### Ändern des Gewichts

Um jeden Kontrollpunkt herum siehst du einen dunkelgelben Kreis. Sein Radius legt das Gewicht für den entsprechenden Kontrollpunkt fest. Standardmäßig haben alle Kreise den Radius *1*. Dies wird durch eine Radiusbeschränkung für den ersten Kontrollpunktkreis angezeigt.

To create a rational B-spline the weights have to be made independent. To achieve that you can delete the constraint that all circles are equal and then set different radius constraints for the circles.

Wenn keine Radiusbeschränkung festgelegt ist, kannst du den Radius auch durch Ziehen ändern:

![](/images/Sketcher_Changing-control-point-weigth-dragging.gif)

Am Beispiel des Ziehens siehst du, dass ein hohes Gewicht die Kurve zum Kontrollpunkt zieht, während ein sehr niedriges Gewicht die Kurve so verändert, als ob der Kontrollpunkt fast nicht existiert.

Betrachtet man die [Funktion zur Erstellung](#Rationale_B-splines) nicht-uniformer rationaler B-Splines, erkennt man, dass ein Gewicht von Null zu einer Division durch Null führen würde. Negative Gewichte sind theoretisch möglich, werden aber nicht unterstützt. Daher können nur Gewichte größer als Null angegenben werden.

**Note:** When dragging points, knots or widths, the circle diameters denoting the weight will change. This is because the diameter depends on the overall B-spline length for visualization reasons. The actual weight is not changed.

### Knoten barbeiten

Neue Knoten (Kontrollpunkte) können mit der Schaltfläche ![](/images/Sketcher_BSplineInsertKnot.svg)  [Knoten einfügen](/Sketcher_BSplineInsertKnot/de "Sketcher BSplineInsertKnot/de") hinzugefügt werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

Ein Knoten wird gelöscht, wenn sein Grad auf 0 verkleinert wird (d.h. dass ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Vielfachheit eines Spline-Knotens verringern](/Sketcher_BSplineDecreaseKnotMultiplicity/de "Sketcher BSplineDecreaseKnotMultiplicity/de") angewendet wird, wenn sein Grad 1 beträgt).

Changing the parameter value of a knot is not yet supported.

### Informationen anzeigen

Da die Form eines B-Splines nicht viel über seine Eigenschaften aussagt, bietet FreeCAD [verschiedene Werkzeuge](/Sketcher_Workbench/de#Skizzierer_B-spline_Werkzeuge "Sketcher Workbench/de"), um die Eigenschaften anzuzeigen:

|  |  |
| --- | --- |
| Eigenschaft | Schaltfläche in der Werkzeugleiste |
| **Grad** | [B-Spline-Grad ein- / ausblenden](/Sketcher_BSplineDegree/de "Sketcher BSplineDegree/de") |
| **Kontrollpolygon** | [B-Spline-Kontrollpolygon ein- / ausblenden](/Sketcher_BSplinePolygon/de "Sketcher BSplinePolygon/de") |
| **Krümmungskamm** | [B-Spline-Krümmungskamm ein- / ausblenden](/Sketcher_BSplineComb/de "Sketcher BSplineComb/de") |
| **Knotenvielfachheit** | [Vielfachheit der B-Spline-Knoten ein- / ausblendenn](/Sketcher_BSplineKnotMultiplicity/de "Sketcher BSplineKnotMultiplicity/de") |
| **Knotengewichte** | [Gewicht der B-Spline-Kontrollpunkte anzeigen / ausblenden](/Sketcher_BSplinePoleWeight/de "Sketcher BSplinePoleWeight/de") |

### Begrenzungen

Aktuell (FreeCAD 0.20) gibt es einige Einschränkungen bei der Verwendung von Splines, die man kennen sollte:

1. Es können keine tangentialen Randbedingungen festgelegt werden.  
    In diesem Beispiel  
    ![](/images/Sketcher_spline-limit-tangential.png)  
    soll sichergestellt werden, dass der Spline die blaue Kurve 2 mal tangential berührt. Dies ist sinnvoll, wenn die blaue Linie z.B. die räumliche Grenze eines Entwurfs darstellt.
2. Es kann keine Versatzkurve für einen B-Spline mit dem Werkzeug [Draft Versatz](/Draft_Offset/de "Draft Offset/de") erstellt werden.

## Typische Anwendungsfälle

Entsprechend den Eigenschaften von B-Splines gibt es 3 Hauptanwendungsfälle:

1. Kurven, die tangential zu einer bestimmten Richtung beginnen/enden. Ein Beispiel hierfür ist das Motivationsbeispiel [oben](#Motivation).
2. Kurven, die größere Entwürfe beschreiben und die Freiheit lokaler Änderungen bieten. Siehe [dieses Beispiel](#Gestaltung) unten.
3. Kurven, die eine gewisse Stetigkeit (Ableitung) bieten. Siehe [dieses Beispiel](#Stetigkeit_an_geometrischen_Übergängen) unten.

### Gestaltung

Nimm zum Beispiel den Fall, dass du ein Gehäuse für eine Küchenmaschine entwirfst. Die gewünschte Form sollte wie diese aussehen:

![](/images/Sketcher_spline-exmple-mixer-shell.png)

Für die Definition der äußeren Form ist es vorteilhaft, einen B-Spline zu verwenden, denn wenn du einen Kontrollpunkt änderst, um die Krümmung an der Unterseite zu ändern, wird die Krümmung an den Seiten und oben nicht geändert:

![](/images/Sketcher_spline-exmple-mixer-sketch.gif)

### Stetigkeit an geometrischen Übergängen

Es gibt mehrere Fälle, in denen es physikalisch notwendig ist, an geometrischen Übergängen eine gewisse Oberflächenkontinuität zu haben. Nimm zum Beispiel die Innenwände eines Flüssigkeitskanals. Wenn sich der Durchmesser des Kanals ändert, möchte man keine Kante haben, da Kanten zu Turbulenzen führen würden. Daher verwendet man, wie im Motivationsbeispiel [oben](#Motivation), Splines für diesen Zweck.

Auslöser für die Entwicklung der Bézierkurven war zunächst die französische Autoindustrie. Neben der Einsparung von Material und der Verringerung des Luftwiderstands sollte auch das Aussehen der Autos verbessert werden. Und wenn man sich das schicke Design französischer Autos aus den 60er und 70er Jahren anschaut, sieht man, dass die Bézierkurven dem Autodesign einen Schub gegeben haben.

Nehmen wir zum Beispiel diese Aufgabe bei der Gestaltung von Autos: Der Autokotflügel soll "schön" aussehen. Hier ist eine grundlegende Skizze unserer Aufgabe:

![](/images/Spline-Fender-sketch1.svg)

"Schön aussehen" bedeutet, dass der (potenzielle) Kunde den Kotflügel betrachtet und keine unerwarteten Lichtreflexe und auch keine plötzlichen Veränderungen in der Reflexion des Autolacks sieht. Was brauchst du also, um Veränderungen in den Reflexionen zu vermeiden? Genaues Hinsehen auf den Kotflügel:

![](/images/Spline-Fender-sketch2.svg)

Im räumlichen Bereich oberhalb der Kante ist die Intensität des reflektierten Lichts gering (gekennzeichnet durch die rote Ellipse), da kein Licht direkt in die Richtung von der Kante zum Auge reflektiert wird.

Du siehst, wenn es eine Kante gibt, gibt es einen räumlichen Bereich, in dem das reflektierte Licht eine geringere Intensität hat, und das ist es, was du beim Betrachten des Kotflügels bemerken wirst. Um dies zu vermeiden, brauchst du eine kontinuierliche Änderung der Neigung deiner Oberflächenelemente. Die Steigung ist die Ableitung erster Ordnung und wie im Abschnitt [Grundlagen](#Grundlagen) erklärt, bietet ein B-Spline zweiten Grades (quadratisch) an jedem Punkt eine kontinuierliche Ableitung erster Ordnung.

Aber ist das wirklich ausreichend? Am Punkt des geometrischen Übergangs haben wir nun auf beiden Seiten die gleiche Steigung, aber die Steigung kann sich auf beiden Seiten unterschiedlich verändern. Dann haben wir diese Situation:

![](/images/Spline-Fender-sketch3.svg)

Wir haben also auch räumliche Bereiche, in denen die Intensität des reflektierten Lichts unterschiedlich ist. Um dies zu vermeiden, benötigen wir am geometrischen Übergangspunkt auch eine Stetigkeit der Ableitung zweiter Ordnung und damit einen kubischen B-Spline.

Retrieved from "<http://wiki.freecad.org/index.php?title=B-Splines/de&oldid=1392327>"