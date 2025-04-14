---
title: B-Splines
---

This page describes how to use B-splines in FreeCAD. It gives also background information what B-splines are and for what applications they are useful.

## Motivation

If you know already about B-splines and their application, you can directly continue with section [B-splines in FreeCAD](#B-splines_in_FreeCAD).

Let's assume you want to design a part that should be produced with a 3D printer. The part must have an edge this way:

![](/images/B-splines_Motivation-start.png)

You have to print the part in direction of the sketch's bottom to the top. Outer support structures might not be an option. Therefore you need to add a support directly to your part. What options do you have?

- Option 1: you could add a line from point (20, 0) to point (80, 40):

![](/images/B-splines_Motivation-line.png)

However this solution needs a lot of volume, thus weight and material.

- Option 2: you can connect the two points with an arc of a circle. To save volume, the arc should end tangentially in point (80,40). Then your solution looks like this:

![](/images/B-splines_Motivation-circle.png)

OK. But at the bottom you don't need immediate support.

- Option 3: you could save some more volume if the connection between the 2 points is a curve that begins tangentially at (0, 20) and ends tangentially at (80, 40):

![](/images/B-splines_Motivation-bezier.png)

So a curve with which you can connect two points tangentially to a reference point can be very useful for constructions. Bézier curves provide this feature.

## Bézier curves

### Derivation

Bézier curves are polynomials to describe the connection between 2 points. The simplest polynomial connecting 2 points is a line (

A
∗

x

1

- B
  {\displaystyle A\*x^{1}+B}
  ![{\displaystyle A*x^{1}+B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59ad13b69733eab9240e2178bd0a00ce514ba502)) thus linear Bézier curves are also line segments:

[![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Bezier_linear_anim.gif)](/File:Bezier_linear_anim.gif)

Animation 1: Linear Bézier curve.

However a polynomial becomes useful when we can control it. So there should be a point between the 2 endpoints that allows us to define how the endpoints are connected. Like in the above example option 3 the curve is helpful when it starts and ends tangentially to lines crossing the endpoints. And this is a main feature of Bézier curves. So let's add a control point between the 2 endpoints. The curve will start tangentially towards this control point, meaning it is tangential to the line that we can draw between the startpoint and the control point. Going backwards from the endpoint the curve will also be tangential to the line we can draw between the control point and the end point. Animation 2 shows how such a curve looks.

[![](https://upload.wikimedia.org/wikipedia/commons/3/35/Bezier_quadratic_anim.gif)](/File:Bezier_quadratic_anim.gif)

Animation 2: Quadratic Bézier curve. P1 is hereby the control point.

The animation makes clear what the curve basically is - a transition from P0 to P2 by rotating the line P0-P1 to become the line P1-P2. Therefore we get the nice tangential start/end feature.

Such a curve can only be described by a quadratic polynomial. (The number of left-hand/right-hand turns + 1 is the necessary polynomial order. A quadratic polynomial is a single turn, a cubic polynomial has two turn, and so on.) Therefore a Bézier curve with one control point is a quadratic (second order) Bézier curve.

Having only one control point is often not sufficient. Take the above motivation example. There in option 3 we end the curve tangentially in x-direction. But how can you connect the points (20, 0) and (80, 40) so that the curve ends tangentially in y-direction? To achieve this you need first a right-hand and then a left-hand turn, so a cubic (third order) polynomial. And that means for a Bézier curve that we need (or you can say we gain) a second control point. Animation 3 shows a cubic Bézier curve.

[![](https://upload.wikimedia.org/wikipedia/commons/a/a3/Bezier_cubic_anim.gif)](/File:Bezier_cubic_anim.gif)

Animation 3: Cubic Bézier curve.

To answer the question, the solution with the tangential y-direction ending for the example is this one:

![](/images/B-splines_Motivation-cubic-bezier.png)

### Rules

In the derivation you might already noticed some "rules" for Bézier curves:

- The polynomial degree is also the degree of the curves.
- If you need

  n
  {\displaystyle n}
  ![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) turns, you need at least a

  n

  - 1
    {\displaystyle n+1}
    ![{\displaystyle n+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a135e65a42f2d73cccbfc4569523996ca0036f1) degree Bézier curve.

- A Bézier curve always begins tangentially to the line between the startpoint and the first control point (and ends tangentially to the line between the last control point and the endpoint).

### Math

If you are interested to understand the background math, here are the basics.

A Bézier curve is calculated using this formula:

Bezier
(
n
,
t
)
=

∑

# i

0

n

(

n
i

)
⏟

polynomial term

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

polynomial term

P

i
⏟

point coordinate
{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum \_{i=0}^{n}\underbrace {\binom {n}{i}} \_{\text{polynomial term}}\underbrace {\left(1-t\right)^{n-i}t^{i}} \_{\text{polynomial term}}\;\underbrace {P\_{i}} \_{\text{point coordinate}}}
![{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum _{i=0}^{n}\underbrace {\binom {n}{i}} _{\text{polynomial term}}\underbrace {\left(1-t\right)^{n-i}t^{i}} _{\text{polynomial term}};\underbrace {P_{i}} _{\text{point coordinate}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bf952743aab4a01c76d7ab2524f9d3b6f64e229b)

_n_ is hereby the degree of the curve. So a Bézier curve of degree _n_ is a polygon with order _n_. The factors

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) are hereby in fact the coordinates of the Bézier curves' control points. For a visualization see [Controlling Bézier curvatures](https://pomax.github.io/bezierinfo/#control).

If you are further interested, have a look at [The mathematics of Bézier curves](https://pomax.github.io/bezierinfo/#explanation) with a nicely animated derivation of the math of Bézier curves.

## B-Splines

### Basics

[This video](https://www.youtube.com/watch?v=bE1MrrqBAl8) lists at the beginning the practical problems with Bézier curves. For example that adding or changing a control point changes the whole curve. These problems can be resolved by joining several Bézier curves. The result is a so-called spline, in particular a B-spline (basis spline). The video also explains that a union of quadratic Bézier curves forms a uniform quadratic B-spline and that a union of cubic Bézier curves forms a uniform cubic B-spline.

From the videos we can collect useful "rules" for B-splines:

- The first and last control point is the end/start point of the spline.
- Like for Bézier curves, splines always begin tangentially to the line between the startpoint and the first control point (and end tangentially to the line between the last control point and the endpoint).
- A union of

  S
  {\displaystyle S}
  ![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) Bézier curves with the degree

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) has

  S

  - D
    {\displaystyle S+D}
    ![{\displaystyle S+D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65a5d3f864247ec4ca8a4174e180fd0154651187) control points.
  - Since one is in most cases working with cubic B-splines we can then state that

    N
    {\displaystyle N}
    ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) control points lead to

    N
    −
    3
    {\displaystyle N-3}
    ![{\displaystyle N-3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b849f72aa23caee22353feb5ea5c327854650fb0) Bézier segments and in turn

    N
    −
    4
    {\displaystyle N-4}
    ![{\displaystyle N-4}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f288cc09f331fd1fc0d38ce419af503fe8cd23) segment junction points.

- A B-spline with the degree

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) offers at every point a continuous

  D
  −
  1
  {\displaystyle D-1}
  ![{\displaystyle D-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2882b444f937e7119403c8625aea8647b667747) order derivative.

  - For a cubic B-spline this means that the curvature (second order derivative) does not change when traveling from one segment to the next one. This is a very useful feature as we will later see.

If you are interested in more details about B-Spline properties, have a look at [this video](https://www.youtube.com/watch?v=xXJylM2S72s).

#### Basis

Since we will only introduce the basics of B-spline, we don't go here into the details.

The basis constructs the spline. Looking at the definition of Bézier curves in section [Math](#Math) we remember that a Bézier curve is a linear combination of polynomials with the x/y coordinate of each of the control points as a factor. These polynomials are called Bernstein polynomials.

As several Bézier curves are combined to form a spline, we get a set of Bernstein polynomials forming the spline (they are the basis). As we want to overcome the mentioned limitations of Bézier curves, we don't geometrically combine the different Bernstein polynomials of the Bézier curves, but define Bernstein polynomials over the whole geometrical range of the spline. So we **don't combine** the Bézier curves with its Bernstein polynomials, which would be

# : Bezier-combination

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

# : B-spline

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
![{\displaystyle {P_{1},P_{2},\dots }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa3d6f309315c498fc08f5c8cff074c5a20118b2) are different from B-spline control points

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
![{\displaystyle {p_{1},p_{2},\dots }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/413bbf4d6821f4a2aa6c81ea4ce35402c0646f8c).

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

- 1
  {\displaystyle k+1}
  ![{\displaystyle k+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/552a558062ed4c0486297b5b5531c5ee044dbd9b) knots given by the so-called _knot vector_:

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
![{\displaystyle {t_{0},t_{1},t_{2},\dots ,t_{k}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c114653d9cad33ebf60eb5e159a884f89526f9b1) whereas

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
![{\displaystyle {m_{0},m_{1},\dots ,m_{k}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0598cae76cf2890586d6b1067587a9be45d3dd78). A knot on a spline with degree _d_ and the multiplicity _m_ tells that the curve left and right to the knot has at least an equal _n_ order derivative (called _C\*\*n_ continuity) whereas

# n

d
−
m
{\displaystyle n=d-m}
![{\displaystyle n=d-m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f03a465bfac71680367d6c2ce4bd23314e5690ac).

### Non-uniform B-splines

The derivation of B-splines from Bézier curves have the mathematical consequence that in B-splines every polynomial piece has the same length. Such B-splines are called _uniform_. The more general case is that they can but must not have the same length. Such _non-uniform_ splines have the advantage that one can control how close the splines cross its control point.

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

: c
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

Non-uniform and rational B-splines are often called **[NURBS](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)** and are widely used in geometric modeling.

## B-splines in FreeCAD

FreeCAD offers to create uniform or non-uniform B-splines of any degree in 2D via the [Sketcher workbench](/Sketcher_Workbench "Sketcher Workbench").

### Creation

To create B-splines, go into a sketch and use the toolbar button ![](/images/Sketcher_CreateBSpline.svg) [Create B-spline](/Sketcher_CreateBSpline "Sketcher CreateBSpline"). Then left-click to set a control point, move the mouse left-click to set the next control point and so on. Finally right-click to finish the definition and create the B-spline.

By default uniform cubic splines are created, except there are not enough control points to do this. So when you create a B-spline with only 2 control points, you get of course a spline that is single linear Bézier curve, for 3 control points you get a quadratic Bézier curve, first with 5 control points you get a cubic B-spline consisting of 2 Bézier segments. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20") You can also use press D while making creating a B-spline to set it's degree (it will still fall to a lower degree if less points are provided).

To create periodic B-splines (B-splines that form a closed curve), use the toolbar button ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"). It is not necessary to set the last control point onto the first one because the B-spline will automatically be closed:

![](/images/Sketcher_Periodic-B-spline-creation.gif)

B-splines can also be generated out of existing sketch segments. To do this, select the elements and press the the toolbar button ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Convert Geometry to B-spline](/Sketcher_BSplineConvertToNURBS "Sketcher BSplineConvertToNURBS").

While creating a B-spline, its degree can be specified by pressing the D key. With this, the default to create a cubic B-spline if possible, can be overridden. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

### Changing the Degree

To change the degree, select the B-spline and use either the toolbar button ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Increase B-spline degree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree") or ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Decrease B-spline degree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree").

**Note:** Decreasing the degree cannot revert a prior increase of the degree, see the Wiki page [Decrease B-spline degree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree") for an explanation.

### Changing the Knot Multiplicity

The points where two Bézier curves are connected to form the B-spline are called knots. The knot multiplicity determines how the Bézier parts are connected, see the Wiki page [Increase knot multiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity") for details.

To change the knot multiplicity, use the toolbar buttons ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [B-spline increase knot multiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity") or ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [B-spline decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity").

**Note:** Creating two B-Splines that are connected to each other will not unite to a single new B-spline. So their connection point is not a knot. The only way to get a new knot in an existing B-spline is to decrease the degree. However, you may get many new knots. Thus the better choice is to redraw the B-spline with more control points.

### Changing the Weight

Around every control point you see a dark yellow circle. Its radius sets the weight for the corresponding control point. By default all circles have the radius _1_. This is indicated with a radius constraint for the first control point circle.

To create a rational B-spline the weights have to be made independent. To achieve that you can delete the constraint that all circles are equal and then set different radius constraints for the circles.

If no radius constraint is set, you can also change the radius by dragging:

![](/images/Sketcher_Changing-control-point-weigth-dragging.gif)

In the dragging example you see that a high weight attracts the curve to the control point while a very low weight changes the curve so as if the control point does almost not exist.

When you look at the [creation function](#Rational_B-splines) for non-uniform rational B-splines you see that a weight of zero would lead to a division by zero. Negative weights are theoretically possible but they are not supported. Therefore you can only specify weights greater than zero.

**Note:** When dragging points, knots or widths, the circle diameters denoting the weight will change. This is because the diameter depends on the overall B-spline length for visualization reasons. The actual weight is not changed.

### Editing Knots

New knots can be added using the ![](/images/Sketcher_BSplineInsertKnot.svg) [B-spline insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot") button. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

A knot is deleted by decreasing it's degree to 0 (i.e applying ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [B-spline decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity") when it's degree is 1).

Changing the parameter value of a knot is not yet supported.

### Display Information

Since the form of a B-spline does not tell much about its properties, FreeCAD offers [different tools](/Sketcher_Workbench#Sketcher_B-spline_tools "Sketcher Workbench") to display the properties:

|                       |                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| Property              | Toolbar button                                                                                               |
| **Degree**            | [Show/Hide B-spline degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree")                                |
| **Control polygon**   | [Show/hide B-spline control polygon](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon")                     |
| **Curvature comb**    | [Show/hide B-spline curvature comb](/Sketcher_BSplineComb "Sketcher BSplineComb")                            |
| **Knot multiplicity** | [Show/hide B-spline knot multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity") |
| **Weights**           | [Show/hide B-spline control point weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight")          |

### Limitations

At the moment (FreeCAD 0.20) there are some limitations when using splines you should know:

1. You cannot set tangential constraints.  
   In this example  
    ![](/images/Sketcher_spline-limit-tangential.png)  
    you want to assure that the spline touches the blue curve 2 times tangentially. This would be useful because the blue line could for example be the spatial border for your design.
2. You cannot create an offset curve for a B-spline using the tool [Draft Offset](/Draft_Offset "Draft Offset").

## Typical Use Cases

According to the properties of B-splines, there are 3 main use cases:

1. Curves that start/end tangentially to a certain direction. An example for this is the motivation example [above](#Motivation).
2. Curves describing larger designs and providing the freedom of local changes. See [this example](#Designing) below.
3. Curves providing a certain continuity (derivative). See [this example](#Continuity_at_Geometric_Transitions) below.

### Designing

Take for example the case that you design a housing of a kitchen mixer. Its desired shape should look like this one:

![](/images/Sketcher_spline-exmple-mixer-shell.png)

To define the outer form it is advantageous to use a B-spline because when you change a control point to change the curvature at the bottom, the curvature at the side and top will not be changed:

![](/images/Sketcher_spline-exmple-mixer-sketch.gif)

### Continuity at Geometric Transitions

There are several cases where it is physically necessary to have a certain surface continuity at geometric transitions. Take for example the inner walls of a fluid channel. When you have a change in the diameter of the channel, you don't want to have an edge because edges would introduce turbulences. Therefore, like in the motivation example [above](#Motivation), one uses splines for this purpose.

The development of the Bézier curves was initially triggered by the French car industry. Besides the saving of material and the reduction of the air flow drag, the look of the cars should also be improved. And when you look at the fancy design of French cars from the 60's and 70's you see that the Bézier curves gave car design a boost.

Let's take for example this task in the design of cars: The car fender should "look nice". Here is a basic sketch of our task:

![](/images/Spline-Fender-sketch1.svg)

"Looking nice" means that the (potential) customer looks at the fender and does not see unexpected light reflections and also no sudden changes in the reflection from the automotive paint at all. So what do you need to avoid changes in the reflections? Looking closely to the fender:

![](/images/Spline-Fender-sketch2.svg)

At the spatial area above the edge the intensity of reflected light is low (denoted by the red ellipse) because no light is directly reflected in the direction from the edge to the eye.

you see when there is an edge, there is a spatial area where the reflected light has less intensity and this is what you will notice when looking at the fender. To avoid this you need a continuous change in the slope of your surface elements. The slope is the first order derivative and as explained in section [Basics](#Basics), a second degree (quadratic) B-spline offers at every point a continuous first order derivative.

But is this really sufficient? At the point of geometric transition we have now at both sides the same slope, but the slope might change differently at both sides. Then we have this situation:

![](/images/Spline-Fender-sketch3.svg)

So we have also spatial areas in which the intensity of reflected light is different. To avoid this, we need at the geometrical point of transition also a continuity of the second order derivative and thus a cubic B-spline.

Retrieved from "<http://wiki.freecad.org/index.php?title=B-Splines/en&oldid=1390228>"
