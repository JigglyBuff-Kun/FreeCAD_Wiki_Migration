---
title: B-Splines
---
Esta página describe cómo utilizar las B-splines en FreeCAD. También ofrece información sobre qué son las B-splines y para qué aplicaciones son útiles.

## Motivación

Si ya conoces las B-splines y su aplicación, puedes continuar directamente con la sección [B-splines en FreeCAD](#B-splines_en_FreeCAD).

Supongamos que quiere diseñar una pieza que debe producirse con una impresora 3D. La pieza debe tener un borde de esta manera:

![](/images/B-splines_Motivation-start.png)

Hay que imprimir la pieza en dirección de la parte inferior del boceto hacia la parte superior. Las estructuras de soporte externas pueden no ser una opción. Por lo tanto, tiene que añadir un soporte directamente a su pieza. ¿Qué opciones tiene?

* Opción 1: se podría añadir una línea desde el punto (20, 0) hasta el punto (80, 40):

![](/images/B-splines_Motivation-line.png)

Sin embargo, esta solución necesita mucho volumen y, por tanto, peso y material.

* Opción 2: puedes conectar los dos puntos con un arco de círculo. Para ahorrar volumen, el arco debe terminar tangencialmente en el punto (80,40). Entonces tu solución se ve así:

![](/images/B-splines_Motivation-circle.png)

BIEN. Pero en el fondo no necesitas apoyo inmediato.

* Opción 3: se podría ahorrar algo más de volumen si la conexión entre los 2 puntos es una curva que empieza tangencialmente en (0, 20) y termina tangencialmente en (80, 40):

![](/images/B-splines_Motivation-bezier.png)

Así, una curva con la que se puedan conectar dos puntos tangencialmente a un punto de referencia puede ser muy útil para las construcciones. Las curvas de Bézier ofrecen esta característica.

## Curvas Bézier

### Derivación

Curvas de Bézier son polinomios que describen la conexión entre 2 puntos. El polinomio más sencillo que conecta 2 puntos es una recta (

A
∗

x

1
+
B
{\displaystyle A\*x^{1}+B}
![{\displaystyle A*x^{1}+B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59ad13b69733eab9240e2178bd0a00ce514ba502)) por lo que también las curvas de Bézier lineales son lineales:

[![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Bezier_linear_anim.gif)](/File:Bezier_linear_anim.gif)

Animación 1: Curva de Bézier lineal.

Sin embargo, un polinomio se vuelve primero útil cuando podemos controlarlo. Así que debe haber un punto entre los 2 puntos finales que nos permita definir cómo se conectan los puntos finales. Como en la opción 3 del ejemplo anterior, la curva es útil cuando comienza y termina tangencialmente a las líneas que cruzan los puntos finales. Y esta es una característica principal de las curvas Bézier. Así que vamos a añadir un punto de control entre los 2 puntos finales. La curva comenzará tangencialmente hacia este punto de control, lo que significa que es tangencial a la línea que podemos dibujar entre el punto inicial y el punto de control. Yendo hacia atrás desde el punto final, la curva también será tangente a la línea que podemos dibujar entre el punto de control y el punto final. La animación 2 muestra el aspecto de esta curva.

[![](https://upload.wikimedia.org/wikipedia/commons/3/35/Bezier_quadratic_anim.gif)](/File:Bezier_quadratic_anim.gif)

{{Caption|Animación 2: Curva cuadrática de Bézier. P1 es el punto de control.}

La animación aclara lo que es básicamente la curva: una transición de P0 a P2 al girar la línea P0-P1 para convertirse en la línea P1-P2. Por lo tanto, obtenemos la bonita característica de inicio/fin tangencial.

Una curva de este tipo sólo puede ser descrita por un polinomio cuadrático. (El número de vueltas a la izquierda/derecha + 1 es el orden necesario del polinomio. Un polinomio cuadrático tiene una sola vuelta, un polinomio cúbico tiene dos vueltas, y así sucesivamente). Por lo tanto, una curva de Bézier con un punto de control es una curva de Bézier cuadrática (de segundo orden).

Tener un solo punto de control a menudo no es suficiente. Tomemos el ejemplo de la motivación anterior. Allí, en la opción 3, terminamos la curva tangencialmente en la dirección x. ¿Pero cómo se pueden conectar los puntos (20, 0) y (80, 40) para que la curva termine tangencialmente en la dirección y? Para conseguirlo se necesita primero un giro a la derecha y luego a la izquierda, es decir, un polinomio cúbico (de tercer orden). Y eso significa que para una curva de Bézier necesitamos (o se puede decir que ganamos) un segundo punto de control. La animación 3 muestra una curva de Bézier cúbica.

[![](https://upload.wikimedia.org/wikipedia/commons/a/a3/Bezier_cubic_anim.gif)](/File:Bezier_cubic_anim.gif)

Animación 3: Curva cúbica de Bézier.

Para responder a la pregunta, la solución con el final de la dirección y tangencial para el ejemplo es ésta:

![](/images/B-splines_Motivation-cubic-bezier.png)

### Reglas

En el texto anterior ya habrás notado algunas "reglas" para las curvas de Bézier:

* El grado del polinomio es también el grado de las curvas.
* Si necesitas 

  n
  {\displaystyle n}
  ![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) vueltas, necesitas al menos una curva de Bézier de 

  n
  +
  1
  {\displaystyle n+1}
  ![{\displaystyle n+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a135e65a42f2d73cccbfc4569523996ca0036f1) grado.
* Una curva de Bézier siempre comienza tangencialmente a la línea entre el punto inicial y el primer punto de control (y termina tangencialmente a la línea entre el último punto de control y el punto final).

### Matemáticas

Si estás interesado en entender las matemáticas de fondo, aquí tienes lo básico.

Una curva de Bézier se calcula con esta fórmula:

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

término polinómico

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

término polinómico

P

i
⏟

coordenada de punto
{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum \_{i=0}^{n}\underbrace {\binom {n}{i}} \_{\text{término polinómico}}\underbrace {\left(1-t\right)^{n-i}t^{i}} \_{\text{término polinómico}}\;\underbrace {P\_{i}} \_{\text{coordenada de punto}}}
![{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum _{i=0}^{n}\underbrace {\binom {n}{i}} _{\text{término polinómico}}\underbrace {\left(1-t\right)^{n-i}t^{i}} _{\text{término polinómico}}\;\underbrace {P_{i}} _{\text{coordenada de punto}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a188afb4fd3df483a71974177803a5c3de24a136)

*n* es por tanto el grado de la curva. Así, una curva de Bézier de grado *n* es un polígono de orden *n*. Los factores 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) son, de hecho, las coordenadas de los puntos de control de las curvas de Bézier. Para una visualización, véase [Control de las curvaturas de Bézier](https://pomax.github.io/bezierinfo/#control).

Si le interesa más, eche un vistazo a [Las matemáticas de las curvas de Bézier](https://pomax.github.io/bezierinfo/#explanation) con una derivación muy bien animada de las matemáticas de las curvas de Bézier.

## B-Splines

### Básicos

[Este vídeo](https://www.youtube.com/watch?v=bE1MrrqBAl8) enumera al principio los problemas prácticos de las curvas de Bézier. Por ejemplo, que al añadir o cambiar un punto de control se modifica toda la curva. Estos problemas se pueden resolver uniendo varias curvas de Bézier. El resultado es un llamado spline, en particular un B-spline (spline de base). El vídeo también explica que una unión de curvas de Bézier cuadráticas forma un B-spline cuadrático uniforme y que una unión de curvas de Bézier cúbicas forma un B-spline cúbico uniforme.

De los vídeos podemos recoger "reglas" útiles para las B-splines:

* El primer y último punto de control es el punto final/inicial de la spline.
* Al igual que para las curvas de Bézier, las splines siempre comienzan tangencialmente a la línea entre el punto de inicio y el primer punto de control (y terminan tangencialmente a la línea entre el último punto de control y el punto final).
* Una unión de 

  S
  {\displaystyle S}
  ![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) curvas de Bézier con el grado 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) tiene 

  S
  +
  D
  {\displaystyle S+D}
  ![{\displaystyle S+D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65a5d3f864247ec4ca8a4174e180fd0154651187) puntos de control.
  + Dado que en la mayoría de los casos se trabaja con B-splines cúbicas podemos afirmar entonces que 

    N
    {\displaystyle N}
    ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) puntos de control conducen a 

    N
    −
    3
    {\displaystyle N-3}
    ![{\displaystyle N-3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b849f72aa23caee22353feb5ea5c327854650fb0) segmentos de Bézier y a su vez 

    N
    −
    4
    {\displaystyle N-4}
    ![{\displaystyle N-4}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f288cc09f331fd1fc0d38ce419af503fe8cd23) puntos de unión de segmentos.
* Una B-spline de grado 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) ofrece en cada punto una derivada continua de orden 

  D
  −
  1
  {\displaystyle D-1}
  ![{\displaystyle D-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2882b444f937e7119403c8625aea8647b667747).
  + Para una B-spline cúbica esto significa que la curvatura (derivada de segundo orden) no cambia al viajar de un segmento al siguiente. Esta es una característica muy útil como veremos más adelante.

Si está interesado en más detalles sobre las propiedades de la B-Spline, eche un vistazo al vídeo [MOOC Curvas 8.2: Propiedades de las curvas B-spline](https://www.youtube.com/watch?v=xXJylM2S72s).

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

### B-splines no-uniformes

Una propiedad de los polinomios de Bernstein es que cuando se observan las diferentes partes de la S-spline Bézier, la longitud del recorrido de cada parte es la misma. (La longitud de la trayectoria suele llamarse *tiempo de recorrido*). Como puedes imaginar, puede ser útil tener B-splines cuyas partes Bézier tengan diferentes longitudes de trayectoria. Esto puede lograrse ponderando los diferentes polinomios:

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

### Rational B-splines

A further generalization can be made for B-splines by introducing weights for the control points. This way it can be controlled "how important" a control point is.

The equation for such a spline is

c
(
t
)
=

∑

k
=
0

N

d

k

B

k
,
D
(
t
)

w

k

∑

k
=
0

N

B

k
,
D
(
t
)

w

k
{\displaystyle \quad c(t)={\cfrac {\sum \_{k=0}^{N}d\_{k}B\_{k,D}(t)w\_{k}}{\sum \_{k=0}^{N}B\_{k,D}(t)w\_{k}}}}
![{\displaystyle \quad c(t)={\cfrac {\sum _{k=0}^{N}d_{k}B_{k,D}(t)w_{k}}{\sum _{k=0}^{N}B_{k,D}(t)w_{k}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/407dd44d9270a586a5ab205f60677aa0bba6f0e6)

Notice that the function is no longer a polynomial, but a rational function, and these splines are called rational B-splines. Observe that when all 

w

i
{\displaystyle w\_{i}}
![{\displaystyle w_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe22f0329d3ecb2e1880d44d191aba0e5475db68) are equal, the equation reduces to a regular non-rational B-spline. So non-rational B-splines are a subset of rational B-splines.

Estas B-splines no-uniformes y racionales (por la división) suelen llamarse **NURBS'**. Observando su fórmula, vemos que en realidad son una B-spline con una base ponderada 

R

k
,
D
(
t
)
{\displaystyle R\_{k,D}(t)}
![{\displaystyle R_{k,D}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/76beb85dc45db981797d51c4d7ff9307e6579f01):

## B-splines en FreeCAD

FreeCAD ofrece la posibilidad de crear B-splines uniformes o no uniformes de cualquier grado en 2D a través del [Ambiente de trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es").

### Creación

Para crear B-splines, entra en un sketch y utiliza el botón de la barra de herramientas ![](/images/Sketcher_CreateBSpline.svg) [Crear B-spline](/index.php?title=Sketcher_CreateBSpline/es&action=edit&redlink=1 "Sketcher CreateBSpline/es (page does not exist)"). A continuación, haz clic con el botón izquierdo para establecer un punto de control, mueve el ratón con el botón izquierdo para establecer el siguiente punto de control y así sucesivamente. Finalmente, haz clic con el botón derecho para terminar la definición y crear la B-spline.

Por defecto se crean splines cúbicas uniformes, excepto que no hay suficientes puntos de control para hacerlo. Así que cuando se crea una B-splinecon sólo 2 puntos de control, se obtiene por supuesto una spline que es curva lineal simple de Bézier, para 3 puntos de control se obtiene una curva cuadrática de Bézier, primero con 5 puntos de control se obtiene una spline B cúbica que consiste en 2 segmentos de Bézier.

Para crear B-splines periódicas (B-splines que forman una curva cerrada), utiliza el botón de la barra de herramientas ![](/images/Sketcher_CreatePeriodicBSpline.svg) [B-spline periódica](/index.php?title=Sketcher_CreatePeriodicBSpline/es&action=edit&redlink=1 "Sketcher CreatePeriodicBSpline/es (page does not exist)"). No es necesario fijar el último punto de control sobre el primero porque la B-spline se cerrará automáticamente:

![](/images/Sketcher_Periodic-B-spline-creation.gif)

Las B-splines también pueden generarse a partir de segmentos de croquis existentes. Para ello, seleccione los elementos y pulse el botón de la barra de herramientas ![](/images/Sketcher_BSplineApproximate.svg) [Convertir geometría en B-spline](/index.php?title=Sketcher_BSplineApproximate/es&action=edit&redlink=1 "Sketcher BSplineApproximate/es (page does not exist)").

While creating a B-spline, its degree can be specified by pressing the D key. With this, the default to create a cubic B-spline if possible, can be overridden. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

### Cambio de grado

Para cambiar el grado, seleccione la B-spline y utilice el botón de la barra de herramientas ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Aumentar grado de la B-spline](/index.php?title=Sketcher_BSplineIncreaseDegree/es&action=edit&redlink=1 "Sketcher BSplineIncreaseDegree/es (page does not exist)") o ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Decrementar grado de B-spline](/index.php?title=Sketcher_BSplineDecreaseDegree/es&action=edit&redlink=1 "Sketcher BSplineDecreaseDegree/es (page does not exist)").

Nota: **Disminuir el grado no puede revertir un aumento anterior del grado, ver la página Wiki [Disminuir el grado de la B-spline](/index.php?title=Sketcher_BSplineDecreaseDegree/es&action=edit&redlink=1 "Sketcher BSplineDecreaseDegree/es (page does not exist)") para una explicación.**

### Cambiar la multiplicidad de nudos

Los puntos donde se conectan dos curvas Bézier para formar la B-spline se llaman nudos. La multiplicidad de nudos determina cómo se conectan las partes de Bézier, vea la página Wiki [Aumentar multiplicidad de nudos](/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/es&action=edit&redlink=1 "Sketcher BSplineIncreaseKnotMultiplicity/es (page does not exist)") para más detalles.

Para cambiar la multiplicidad de nudos, utilice los botones de la barra de herramientas ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [B-spline aumenta la multiplicidad de nudos](/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/es&action=edit&redlink=1 "Sketcher BSplineIncreaseKnotMultiplicity/es (page does not exist)") o ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [B-spline disminuye la multiplicidad de los nudos](/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/es&action=edit&redlink=1 "Sketcher BSplineDecreaseKnotMultiplicity/es (page does not exist)").

**Nota:** La creación de dos B-Splines conectadas entre sí no se unirá a una sola B-spline nueva. Por lo tanto, su punto de conexión no es un nodo. La única manera de obtener un nuevo nodo en una B-spline existente es disminuir el grado. Sin embargo, puede obtener muchos nudos nuevos. Por tanto, la mejor opción es redibujar la B-spline con más puntos de control.

### Cambiar el peso

Alrededor de cada punto de control se ve un círculo amarillo oscuro. Su radio establece el peso del punto de control correspondiente. Por defecto todos los círculos tienen el radio *1*. Esto se indica con una restricción de radio para el primer círculo del punto de control.

To create a rational B-spline the weights have to be made independent. To achieve that you can delete the constraint that all circles are equal and then set different radius constraints for the circles.

Si no se establece ninguna restricción de radio, también se puede cambiar el radio arrastrando:

![](/images/Sketcher_Changing-control-point-weigth-dragging.gif)

En el ejemplo de arrastre se ve que un peso alto atrae la curva hacia el punto de control mientras que un peso muy bajo cambia la curva como si el punto de control casi no existiera.

Cuando miras la [función de creación](#B-splines_no-uniformes) para B-splines racionales no uniformes ves que un peso de cero llevaría a una división por cero. Por lo tanto, sólo se pueden especificar pesos mayores que cero.

**Note:** When dragging points, knots or widths, the circle diameters denoting the weight will change. This is because the diameter depends on the overall B-spline length for visualization reasons. The actual weight is not changed.

### Editing Knots

New knots can be added using the ![](/images/Sketcher_BSplineInsertKnot.svg) [B-spline insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot") button. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

A knot is deleted by decreasing it's degree to 0 (i.e applying ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [B-spline decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity") when it's degree is 1).

Changing the parameter value of a knot is not yet supported.

### Mostrar Información

Como la forma de una B-spline no dice mucho sobre sus propiedades, FreeCAD ofrece [diferentes herramientas](/Sketcher_Workbench/es#Herramientas_de_la_B-spline_de_Sketcher "Sketcher Workbench/es") para mostrar las propiedades:

|  |  |
| --- | --- |
| Propiedad | Botón de la barra de herramientas |
| **Grado** | [Mostrar/ocultar el polígono de control de la B-spline](/index.php?title=Sketcher_BSplineDegree/es&action=edit&redlink=1 "Sketcher BSplineDegree/es (page does not exist)") |
| **Polígono de control** | [Mostrar/ocultar el polígono de control de la B-spline](/index.php?title=Sketcher_BSplinePolygon/es&action=edit&redlink=1 "Sketcher BSplinePolygon/es (page does not exist)") |
| **Peine de curvatura** | [Mostrar/Ocultar peine de curvatura B-spline](/index.php?title=Sketcher_BSplineComb/es&action=edit&redlink=1 "Sketcher BSplineComb/es (page does not exist)") |
| **Multiplicidad de nudos** | [Mostrar/Ocultar multiplicidad de nudos B-spline](/index.php?title=Sketcher_BSplineKnotMultiplicity/es&action=edit&redlink=1 "Sketcher BSplineKnotMultiplicity/es (page does not exist)") |
| **Pesos** | [Mostrar/Ocultar el peso del punto de control de la B-spline](/index.php?title=Sketcher_BSplinePoleWeight/es&action=edit&redlink=1 "Sketcher BSplinePoleWeight/es (page does not exist)") |

### Limitaciones

De momento (FreeCAD 0.19) hay algunas limitaciones al usar splines que debes conocer:

1. No puedes establecer restricciones tangenciales.  
   En este ejemplo  
    ![](/images/Sketcher_spline-limit-tangential.png)  
    quieres asegurar que la spline toca la curva azul 2 veces tangencialmente. Esto sería útil porque la línea azul podría ser, por ejemplo, el límite espacial para su diseño.
2. No se puede insertar un nuevo punto de control entre dos puntos de control existentes seleccionados. No hay otra forma que redibujar la spline.
3. No se puede eliminar un punto de control. También en este caso debe redibujar la spline
4. No se puede crear una curva de desplazamiento para una B-spline utilizando la herramienta [Borrador Desplazamiento](/Draft_Offset/es "Draft Offset/es").

## Casos típicos de uso

Según las propiedades de las B-splines, hay 3 casos de uso principales:

1. Curvas que comienzan/terminan tangencialmente a una determinada dirección. Un ejemplo de esto es el ejemplo de motivación [arriba](#Motivación).
2. Curvas que describen diseños más grandes y proporcionan la libertad de cambios locales. Véase [este ejemplo](#Diseño) más abajo.
3. Curvas que proporcionan una cierta continuidad (derivada). Véase [este ejemplo](#Continuidad_en_las_transiciones_geométricas) más abajo.

### Diseño

Tomemos por ejemplo el caso de que usted diseñe la carcasa de una batidora de cocina. Su forma deseada debe ser como esta:

![](/images/Sketcher_spline-exmple-mixer-shell.png)

Para definir la forma exterior es ventajoso utilizar una B-spline porque cuando se cambia un punto de control para cambiar la curvatura en la parte inferior, la curvatura en el lado y la parte superior no se cambiará:

![](/images/Sketcher_spline-exmple-mixer-sketch.gif)

### Continuidad en las transiciones geométricas

Hay varios casos en los que es físicamente necesario tener una cierta continuidad superficial en las transiciones geométricas. Tomemos por ejemplo las paredes interiores de un canal de fluido. Cuando tienes un cambio en el diámetro del canal, no quieres tener un borde porque los bordes introducirían turbulencias. Por lo tanto, como en el ejemplo de motivación [arriba](#Motivación), uno utiliza splines para este propósito.

El desarrollo de las curvas de Bézier fue impulsado inicialmente por la industria automovilística francesa. Además del ahorro de material y la reducción de la resistencia al flujo de aire, también había que mejorar el aspecto de los coches. Y cuando se observa el elegante diseño de los coches franceses de los años 60 y 70 se ve que las curvas de Bézier dieron un impulso al diseño de los coches.

Tomemos como ejemplo esta tarea en el diseño de coches: El guardabarros del coche debe "tener un buen aspecto". He aquí un croquis básico de nuestra tarea:

![](/images/Spline-Fender-sketch1.svg)

"Tener un buen aspecto" significa que el cliente (potencial) mire el guardabarros y no vea reflejos de luz inesperados ni tampoco cambios repentinos en el reflejo de la pintura del automóvil. Entonces, ¿qué se necesita para evitar cambios en los reflejos? Mirar de cerca el guardabarros:

![](/images/Spline-Fender-sketch2.svg)

En el área espacial por encima del borde, la intensidad de la luz reflejada es baja (denotada por la elipse roja) porque no se refleja luz directamente en la dirección del borde al ojo.

Cuando hay un borde, hay una zona espacial en la que la luz reflejada tiene menos intensidad y esto es lo que se nota al mirar el guardabarros. Para evitar esto necesitas un cambio continuo en la pendiente de tus elementos de superficie. La pendiente es la derivada de primer orden y como se explica en la sección [Basicos](#Basicos), una B-spline de segundo grado (cuadrática) ofrece en cada punto una derivada continua de primer orden.

¿Pero es esto realmente suficiente? En el punto de transición geométrica tenemos ahora en ambos lados la misma pendiente, pero la pendiente puede cambiar de forma diferente en ambos lados. Entonces tenemos esta situación:

![](/images/Spline-Fender-sketch3.svg)

Por lo tanto, también tenemos zonas espaciales en las que la intensidad de la luz reflejada es diferente. Para evitar esto, necesitamos en el punto geométrico de transición también una continuidad de la derivada de segundo orden y, por tanto, una B-spline cúbica.

Retrieved from "<http://wiki.freecad.org/index.php?title=B-Splines/es&oldid=1390229>"