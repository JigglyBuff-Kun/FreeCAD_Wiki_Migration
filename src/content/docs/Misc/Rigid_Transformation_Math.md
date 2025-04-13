---
title: Rigid Transformation Math
---
*This page is under construction. Test LaTex capability*

Rotations can be represented as orthogonal 3 x 3 matrices. Acting on a position vector they generate the rotated coordinates by 

x

′
=
R
x
{\textstyle x^{\prime }=Rx}
![{\textstyle x^{\prime }=Rx}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2e80c01e2b65d53beca10a61ea873ccb54561f8d). Rotations keep the origin fixed. A general (proper) rigid motion combines a rotation with a translation 

x

′
=
x
+
a
{\textstyle x^{\prime }=x+a}
![{\textstyle x^{\prime }=x+a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fae6b6082cbf73848b9e6edd4763b10b1c86cc9b), that is 

x

′
=
R
x
+
a
{\textstyle x^{\prime }=Rx+a}
![{\textstyle x^{\prime }=Rx+a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/74336b1350c8a72545792566b11b16c83c8d19c2). (A proper rigid motion is one that preserves lengths and angles, but excludes reflections. A FreeCAD placement is such.)

There is a very useful representation, used by FreeCAD's *Placement*, of these proper rigid motions by 4 x 4 matrices of the special form

(

R

a

0

1
)
{\displaystyle {\begin{pmatrix}R&a\\0&1\end{pmatrix}}}
![{\displaystyle {\begin{pmatrix}R&a\\0&1\end{pmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ded48cf40a3d22f1bd5817e04fcf5ab2e5000ac).
The rigid motion 

x

′
=
R
x
+
a
{\textstyle x^{\prime }=Rx+a}
![{\textstyle x^{\prime }=Rx+a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/74336b1350c8a72545792566b11b16c83c8d19c2) then takes the matrix form

(

x

′

0
)
=

(

R

a

0

1
)

(

x

0
)
{\displaystyle {\begin{pmatrix}x^{\prime }\\0\end{pmatrix}}={\begin{pmatrix}R&a\\0&1\end{pmatrix}}{\begin{pmatrix}x\\0\end{pmatrix}}}
![{\displaystyle {\begin{pmatrix}x^{\prime }\\0\end{pmatrix}}={\begin{pmatrix}R&a\\0&1\end{pmatrix}}{\begin{pmatrix}x\\0\end{pmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6a090922711e1d480f437ac8a5c28ab880e8ba28).
In this compact notation, R is the 3 by 3 rotation matrix, and 

a
{\displaystyle a}
![{\displaystyle a}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ffd2487510aa438433a2579450ab2b3d557e5edc), 

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) and 

x

′
{\displaystyle x^{\prime }}
![{\displaystyle x^{\prime }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a04dfa6d4671c585af87b97fd0f5d4a0da499028) are 3 by 1 column position vectors. In FreeCAD we can construct the Placement from its constituent Rotation and displacement.

```
R = App.Rotation(App.Vector(0,0,1), 120) # 120 degree rotation about z-axis
a = App.Vector(10,0,0) # displacement of 10 along x axis
pl = App.Placement(a, R) # construct placement, can retrieve a as pl.Base, R as pl.Rotation

```

In terms of the matrices, we can decompose the general transformation into its constituent translation and rotation.

(

R

a

0

1
)
=

(

I

a

0

1
)

(

R

o

0

1
)
{\displaystyle {\begin{pmatrix}R&a\\0&1\end{pmatrix}}={\begin{pmatrix}I&a\\0&1\end{pmatrix}}{\begin{pmatrix}R&o\\0&1\end{pmatrix}}}
![{\displaystyle {\begin{pmatrix}R&a\\0&1\end{pmatrix}}={\begin{pmatrix}I&a\\0&1\end{pmatrix}}{\begin{pmatrix}R&o\\0&1\end{pmatrix}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b3480f0fb79c8fef51a0c649cc95d38c332d2616), where 

I
{\displaystyle I}
![{\displaystyle I}](https://wikimedia.org/api/rest_v1/media/math/render/svg/535ea7fc4134a31cbe2251d9d3511374bc41be9f) is the Identity matrix and 

o
{\displaystyle o}
![{\displaystyle o}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0c1031f61947aa3d1cf3a70ec3e4904df2c3675d) is the 0-vector. Note that in terms of operations, we read the matrices from right to left, i. e. we first rotate 

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4), then we translate it 

R
x
+
a
←
R
x
←
x
{\textstyle Rx+a\leftarrow Rx\leftarrow x}
![{\textstyle Rx+a\leftarrow Rx\leftarrow x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/863aa80d10bb34cbfb654e9e75555b5792adbd54).

Retrieved from "<http://wiki.freecad.org/index.php?title=Rigid_Transformation_Math&oldid=1087879>"