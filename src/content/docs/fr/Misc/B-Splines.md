---
title: B-splines
---
Cette page décrit comment utiliser les B-splines dans FreeCAD. Elle donne également des informations de base sur ce que sont les B-splines et pour quelles applications elles sont utiles.

## Objectif

Si vous connaissez déjà les B-splines et leur application, vous pouvez aller directement à la section [B-splines dans FreeCAD](#B-splines_dans_FreeCAD).

Supposons que vous vouliez concevoir une pièce qui doit être produite avec une imprimante 3D. La pièce doit avoir un bord de cette façon :

![](/images/B-splines_Motivation-start.png)

Vous devez imprimer la pièce dans le sens du bas vers le haut de l'esquisse. Les structures de support extérieures peuvent ne pas être une option. Vous devez donc ajouter un support directement à votre pièce. Quelles sont vos options ?

* Option 1 : vous pourriez ajouter une ligne du point (20, 0) au point (80, 40) :

![](/images/B-splines_Motivation-line.png)

Cependant, cette solution nécessite beaucoup de volume, donc de poids et de matériaux.

* Option 2 : vous pouvez relier les deux points par un arc de cercle. Pour gagner du volume, l'arc doit se terminer tangentiellement au point (80,40). Votre solution ressemble alors à ceci :

![](/images/B-splines_Motivation-circle.png)

OK. Mais au fond, vous n'avez pas besoin d'un soutien immédiat.

* Option 3 : vous pourriez économiser un peu plus de volume si la connexion entre les 2 points est une courbe qui commence tangentiellement à (0, 20) et se termine tangentiellement à (80, 40) :

![](/images/B-splines_Motivation-bezier.png)

Ainsi, une courbe avec laquelle vous pouvez relier deux points tangentiellement à un point de référence peut être très utile pour les constructions. Les courbes de Bézier offrent cette fonctionnalité.

## Courbes de Bézier

### Origine

Les courbes de Bézier sont des polynômes permettant de décrire la liaison entre 2 points. Le polynôme le plus simple reliant 2 points est une droite (

A
∗

x

1
+
B
{\displaystyle A\*x^{1}+B}
![{\displaystyle A*x^{1}+B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59ad13b69733eab9240e2178bd0a00ce514ba502)) donc les courbes de Bézier linéaires sont aussi des segments de droite :

[![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Bezier_linear_anim.gif)](/File:Bezier_linear_anim.gif)

Animation 1 : courbe de Bézier linéaire.

Cependant un polynôme devient utile quand on peut le contrôler. Il doit donc y avoir un point entre les deux extrémités qui nous permet de définir comment les extrémités sont connectées. Comme dans l'exemple ci-dessus, option 3, la courbe est utile lorsqu'elle commence et se termine tangentiellement aux lignes qui croisent les points d'extrémité. C'est l'une des principales caractéristiques des courbes de Bézier. Ajoutons donc un point de contrôle entre les deux extrémités. La courbe commencera tangentiellement vers ce point de contrôle, ce qui signifie qu'elle est tangente à la ligne que nous pouvons tracer entre le point de départ et le point de contrôle. En reculant à partir du point d'extrémité, la courbe sera également tangente à la ligne que nous pouvons tracer entre le point de contrôle et le point d'extrémité. L'animation 2 montre à quoi ressemble une telle courbe.

[![](https://upload.wikimedia.org/wikipedia/commons/3/35/Bezier_quadratic_anim.gif)](/File:Bezier_quadratic_anim.gif)

Animation 2 : courbe de Bézier quadratique. P1 est le point de contrôle.

L'animation montre clairement ce qu'est la courbe - une transition de P0 à P2 en faisant pivoter la ligne P0-P1 pour qu'elle devienne la ligne P1-P2. Nous obtenons ainsi la caractéristique de début/fin tangentielle.

Une telle courbe ne peut être décrite que par un polynôme quadratique. (Le nombre de tours gauche/droite + 1 est l'ordre polynomial nécessaire. Un polynôme quadratique a un seul tour, un polynôme cubique a deux tours et ainsi de suite). Par conséquent, une courbe de Bézier avec un point de contrôle est une courbe de Bézier quadratique (deuxième ordre).

Avoir un seul point de contrôle n'est souvent pas suffisant. Prenons l'exemple de la simulation ci-dessus. Dans l'option 3, nous terminons la courbe de manière tangentielle dans la direction x. Mais comment relier les points (20, 0) et (80, 40) pour que la courbe se termine de manière tangentielle dans la direction des y ? Pour y parvenir, il faut d'abord un virage à droite, puis un virage à gauche, donc un polynôme cubique (du troisième ordre). Et cela signifie que pour une courbe de Bézier, nous avons besoin (ou nous pouvons dire que nous gagnons) un deuxième point de contrôle. L'animation 3 montre une courbe de Bézier cubique.

[![](https://upload.wikimedia.org/wikipedia/commons/a/a3/Bezier_cubic_anim.gif)](/File:Bezier_cubic_anim.gif)

Animation 3 : courbe de Bézier cubique.

Pour répondre à la question, la solution avec la terminaison tangentielle de la direction y pour l'exemple est celle-ci :

![](/images/B-splines_Motivation-cubic-bezier.png)

### Règles

Dans la dérivation, vous avez peut-être déjà remarqué quelques "règles" pour les courbes de Bézier :

* Le degré polynomial est aussi le degré des courbes.
* Si vous avez besoin de 

  n
  {\displaystyle n}
  ![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) tours, vous avez besoin d'au moins une courbe de Bézier de 

  n
  +
  1
  {\displaystyle n+1}
  ![{\displaystyle n+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a135e65a42f2d73cccbfc4569523996ca0036f1) degré.
* Une courbe de Bézier commence toujours tangentiellement à la ligne entre le point de départ et le premier point de contrôle (et se termine tangentiellement à la ligne entre le dernier point de contrôle et le point d'arrivée).

### Math

Si vous souhaitez comprendre le contexte mathématique, voici l'essentiel.

Une courbe de Bézier est calculée à l'aide de cette formule :

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

terme polynomial

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

terme polynomial

P

i
⏟

coordonnée du point
{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum \_{i=0}^{n}\underbrace {\binom {n}{i}} \_{\text{terme polynomial}}\underbrace {\left(1-t\right)^{n-i}t^{i}} \_{\text{terme polynomial}}\;\underbrace {P\_{i}} \_{\text{coordonnée du point}}}
![{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum _{i=0}^{n}\underbrace {\binom {n}{i}} _{\text{terme polynomial}}\underbrace {\left(1-t\right)^{n-i}t^{i}} _{\text{terme polynomial}}\;\underbrace {P_{i}} _{\text{coordonnée du point}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36fdbd9a7729ff831d7c0d47c57579208ec37386)

*n* est ici le degré de la courbe. Ainsi une courbe de Bézier de degré *n* est un polygone d'ordre *n*. Les facteurs 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) sont ici en fait les coordonnées des points de contrôle des courbes de Bézier. Pour une visualisation, voir [Contrôle des courbures de Bézier](https://pomax.github.io/bezierinfo/#control).

Si vous souhaitez en savoir plus, consultez le site [Les mathématiques des courbes de Bézier](https://pomax.github.io/bezierinfo/#explanation) qui présente une origine joliment animée des mathématiques des courbes de Bézier.

## B-splines

### Fondamentaux

[Cette vidéo](https://www.youtube.com/watch?v=bE1MrrqBAl8) énumère au début les problèmes pratiques que posent les courbes de Bézier. Par exemple, l'ajout ou la modification d'un point de contrôle change toute la courbe. Ces problèmes peuvent être résolus en joignant plusieurs courbes de Bézier. Le résultat est ce qu'on appelle une spline, en particulier une B-spline (basic spline). La vidéo explique également qu'une union de courbes de Bézier quadratiques forme une B-spline quadratique uniforme et qu'une union de courbes de Bézier cubiques forme une B-spline cubique uniforme.

A partir des vidéos, nous pouvons rassembler des "règles" utiles pour les B-splines :

* Le premier et le dernier point de contrôle sont les points de début et de fin de la spline.
* Comme pour les courbes de Bézier, les splines commencent toujours tangentiellement à la ligne entre le point de départ et le premier point de contrôle (et se terminent tangentiellement à la ligne entre le dernier point de contrôle et le point final).
* Une union de 

  S
  {\displaystyle S}
  ![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) courbes de Bézier de degré 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) possède 

  S
  +
  D
  {\displaystyle S+D}
  ![{\displaystyle S+D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65a5d3f864247ec4ca8a4174e180fd0154651187) points de contrôle.
  + Puisque l'on travaille dans la plupart des cas avec des B-splines cubiques, nous pouvons alors affirmer que 

    N
    {\displaystyle N}
    ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) points de contrôle conduisent à 

    N
    −
    3
    {\displaystyle N-3}
    ![{\displaystyle N-3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b849f72aa23caee22353feb5ea5c327854650fb0) segments de Bézier et à leur tour à 

    N
    −
    4
    {\displaystyle N-4}
    ![{\displaystyle N-4}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f288cc09f331fd1fc0d38ce419af503fe8cd23) points de jonction des segments.
* Une B-spline de degré 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) offre en tout point une dérivée d'ordre 

  D
  −
  1
  {\displaystyle D-1}
  ![{\displaystyle D-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2882b444f937e7119403c8625aea8647b667747) continue.
  + Pour une B-spline cubique, cela signifie que la courbure (dérivée de second ordre) ne change pas lors du passage d'un segment au suivant. C'est une caractéristique très utile comme nous le verrons plus tard.

Si vous souhaitez en savoir plus sur les propriétés des B-splines, regardez [cette vidéo](https://www.youtube.com/watch?v=xXJylM2S72s).

#### Base

Étant donné que nous ne présenterons que les bases des B-splines, nous n'entrerons pas ici dans les détails.

La base construit la spline. En regardant la définition des courbes de Bézier dans la section [Math](#Math), on se souvient qu'une courbe de Bézier est une combinaison linéaire de polynômes avec comme facteur les coordonnées x/y de chacun des points de contrôle. Ces polynômes sont appelés polynômes de Bernstein.

Comme plusieurs courbes de Bézier sont combinées pour former une spline, nous obtenons un ensemble de polynômes de Bernstein formant la spline (ils constituent la base). Comme nous voulons surmonter les limitations mentionnées des courbes de Bézier, nous ne combinons pas géométriquement les différents polynômes de Bernstein des courbes de Bézier, mais définissons les polynômes de Bernstein sur toute la plage géométrique de la spline. Donc nous **ne combinons pas** les courbes de Bézier avec ses polynômes de Bernstein, qui seraient

:   Bezier-combinaison
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

    N

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

    N
    ⋯

    {\displaystyle {\textrm {Bezier-combinaison}}={\begin{cases}\sum \_{i=0}^{n}P\_{i}\cdot B\_{i,n}(t),&0\leq t\leq 1\\\\\mathbb {N} \sum \_{i=0}^{n}P\_{i+n}\cdot B\_{i,n}(t-1),&1\leq t\leq 2\\\\N\cdots \end{cases}}}
    ![{\displaystyle {\textrm {Bezier-combinaison}}={\begin{cases}\sum _{i=0}^{n}P_{i}\cdot B_{i,n}(t),&0\leq t\leq 1\\\\\mathbb {N} \sum _{i=0}^{n}P_{i+n}\cdot B_{i,n}(t-1),&1\leq t\leq 2\\\\N\cdots \end{cases}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/aed5d5a33c478c45242dbf698bd1c48d7daebc0f)

considérant que 

B

i
,
n
(
t
)
{\displaystyle B\_{i,n}(t)}
![{\displaystyle B_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/58fbcfe844c24961f0c5b6bd3fcc5f0bc64bffdf) est le i-ième polynôme de Bernstein d'ordre 

n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) et les coefficients 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) sont les coordonnées ponctuelles des points de contrôle de la courbe de Bézier. Mais nous utilisons un **ensemble différent de fonctions** qui sont définies sur toute l'étendue de la spline :

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

Remarquez qu'en général 

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
![{\displaystyle N_{i,n}(t)\neq B_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/219aeb22c0243b3301a5304d645e3cc84e086b37), et les points de contrôle de Bézier 

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
![{\displaystyle \{P_{1},P_{2},\dots \}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa3d6f309315c498fc08f5c8cff074c5a20118b2) sont différents des points de contrôle de B-spline 

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

Les différents 

N

i
,
n
(
t
)
{\displaystyle N\_{i,n}(t)}
![{\displaystyle N_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a0b8b1a68ff11368898059ae7901f1ce9c0dc59e) sont définis par morceaux où l'intervalle de chaque morceau est l'intervalle d'un segment de Bézier.

Lorsque les longueurs de tous les segments 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) sont égaux, on parle d'une spline uniforme. (Dans la littérature, cela est souvent dénoté par un temps de parcours égal 

t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560) par segment).

Pour comprendre comment les 

p

i
{\displaystyle p\_{i}}
![{\displaystyle p_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5bab39399bf5424f25d957cdc57c84a0622626d2) sont les coordonnées des points de contrôle de la spline B, voyez la première minute de [cette vidéo](https://www.youtube.com/watch?v=dPPTCy4L4rY&list=PL8bSwVy8_IcMvtI70tZoYesCS0hGVO5qd).

#### Vecteur-nœud

Comme indiqué ci-dessus, les B-splines sont créées à partir de 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) polynômes par morceaux avec une continuité jusqu'à une certaine dérivée entre les morceaux. Les points aux extrémité de l'intervalle de définition du segment sont appelés nœuds. Pour une spline définie sur 

k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) pièces, il y a 

k
+
1
{\displaystyle k+1}
![{\displaystyle k+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/552a558062ed4c0486297b5b5531c5ee044dbd9b) nœuds donnés par le soi-disant *vecteur-nœud* :  

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
![{\displaystyle \{t_{0},t_{1},t_{2},\dots ,t_{k}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c114653d9cad33ebf60eb5e159a884f89526f9b1) avec 

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
![{\displaystyle t_{0}<t_{1}<t_{2}<\dots <t_{k}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8b8a2ac474ff7430aad3519e00f2d4413387c3ef).

Le vecteur-nœud comprend les nœuds des 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) fonctions de base qui définissent la B-spline, voir [cette vidéo](https://www.youtube.com/watch?v=ni5NNPCVvDY). Les fonctions de base d'une B-spline peuvent être calculées à l'aide du vecteur-nœud et d'un algorithme de création, voir [cette vidéo](https://www.youtube.com/watch?v=hrsO45AHtbs).

La dérivée jusqu'à laquelle la continuité existe est donnée par la multiplicité 

m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc). Par conséquent, nous pouvons spécifier un vecteur avec la multiplicité pour chaque nœud : 

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
![{\displaystyle \{m_{0},m_{1},\dots ,m_{k}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0598cae76cf2890586d6b1067587a9be45d3dd78). Un nœud sur une spline de degré *d* et de multiplicité *m* indique que la courbe à gauche et à droite du nœud a au moins une dérivée d'ordre égale à *n* (appelée *C**n* continuité) avec 

n
=
d
−
m
{\displaystyle n=d-m}
![{\displaystyle n=d-m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f03a465bfac71680367d6c2ce4bd23314e5690ac).

### B-splines non-uniformes

La dérivée des B-splines à partir des courbes de Bézier a pour conséquence mathématique que dans les B-splines, chaque morceau polynomial a la même longueur. De telles B-splines sont appelées *uniformes*. Dans le cas plus général, elles peuvent mais ne doivent pas avoir la même longueur. De telles splines *non-uniformes* ont l'avantage de pouvoir contrôler la proximité des splines par rapport à leur point de contrôle.

Mathématiquement, ceci est réalisé en définissant les différents 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) morceaux à des intervalles différents. Si par exemple une spline B est définie pour l'intervalle [0, 1], elle est uniforme si toutes ses 5 par exemple sont également définies dans cet intervalle. Si maintenant 

N

1
,
4
{\displaystyle N\_{1,4}}
![{\displaystyle N_{1,4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3738c6fe3451d054d671162b69741e9cb13604b) est uniquement défini dans l'intervalle [0, 0.6] (en dehors de l'intervalle, il est fixé à zéro), il est plus court et la spline devient donc non uniforme.

Comme décrit ci-dessus, les paramètres des nœuds sont décrits par le vecteur-nœud. Le vecteur-nœud stocke donc les intervalles de définition. Lorsqu'une pièce reçoit un autre intervalle, le vecteur-nœud change également, voir [cette vidéo](https://www.youtube.com/watch?v=w-l5R70y6u0) pour une visualisation.

### B-splines rationnelles

Une autre généralisation peut être faite pour les B-splines en introduisant des poids pour les points de contrôle. De cette façon, il est possible de contrôler "l'importance" d'un point de contrôle.

L'équation d'une telle spline est

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

Remarquez que la fonction n'est plus un polynôme, mais une fonction rationnelle, et ces splines sont appelées B-splines rationnelles. Observez que lorsque tous les 

w

i
{\displaystyle w\_{i}}
![{\displaystyle w_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe22f0329d3ecb2e1880d44d191aba0e5475db68) sont égaux, l'équation se réduit à une B-spline régulière non rationnelle. Donc les B-splines non rationnelles sont un sous-ensemble des B-splines rationnelles.

Les B-splines non uniformes et rationnelles sont souvent appelées **[NURBS](https://fr.wikipedia.org/wiki/NURBS)** et sont largement utilisées dans la modélisation géométrique.

## B-splines dans FreeCAD

FreeCAD propose de créer des B-splines uniformes ou non-uniformes de n'importe quel degré en 2D via l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

### Création

Pour créer des B-splines, allez dans une esquisse et utilisez le bouton de la barre d'outils ![](/images/Sketcher_CreateBSpline.svg) [Sketcher B-spline simple](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr"). Ensuite, faites un clic gauche pour définir un point de contrôle, déplacez la souris en faisant un clic gauche pour définir le point de contrôle suivant et ainsi de suite. Enfin, cliquez avec le bouton droit de la souris pour terminer la définition et créer la courbe B-spline.

Par défaut, des splines cubiques uniformes sont créées, sauf qu'il n'y a pas assez de points de contrôle pour le faire. Ainsi, lorsque vous créez une B-spline avec seulement 2 points de contrôle, vous obtenez bien sûr une spline qui est une simple courbe de Bézier linéaire, pour 3 points de contrôle vous obtenez une courbe de Bézier quadratique, et enfin avec 5 points de contrôle vous obtenez une B-spline cubique composée de 2 segments de Bézier. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") Vous pouvez également utiliser la touche D pendant la création d'une B-spline pour définir son degré (elle tombera toujours à un degré inférieur si moins de points sont fournis).

Pour créer des B-splines périodiques (B-splines qui forment une courbe fermée), utilisez le bouton de la barre d'outils ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Sketcher B-spline périodique](/Sketcher_CreatePeriodicBSpline/fr "Sketcher CreatePeriodicBSpline/fr"). Il n'est pas nécessaire de placer le dernier point de contrôle sur le premier car la courbe B-spline sera automatiquement fermée :

![](/images/Sketcher_Periodic-B-spline-creation.gif)

Les B-splines peuvent également être générées à partir de segments d'esquisse existants. Pour ce faire, sélectionnez les éléments et appuyez sur le bouton de la barre d'outils ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Sketcher Convertir en B-splines](/Sketcher_BSplineConvertToNURBS/fr "Sketcher BSplineConvertToNURBS/fr").

Lors de la création d'une courbe B-spline, son degré peut être spécifié en appuyant sur la touche D. Ceci permet d'annuler l'option par défaut qui consiste à créer une courbe B-spline cubique si possible. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

### Changer le degré

Pour modifier le degré, sélectionnez la plaine B et utilisez les boutons de la barre d'outils ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Sketcher Augmenter le degré d'une B-spline](/Sketcher_BSplineIncreaseDegree/fr "Sketcher BSplineIncreaseDegree/fr") ou ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Sketcher Diminuer le degré d'une B-spline](/Sketcher_BSplineDecreaseDegree/fr "Sketcher BSplineDecreaseDegree/fr").

**Remarque :** diminuer le degré ne peut pas annuler une augmentation antérieure du degré, voir la page Wiki [Sketcher Diminuer le degré d'une B-spline](/Sketcher_BSplineDecreaseDegree/fr "Sketcher BSplineDecreaseDegree/fr") pour une explication.

### Changer la multiplicité des nœuds

Les points où deux courbes de Bézier sont connectées pour former la B-spline sont appelés nœuds. La multiplicité des nœuds détermine la façon dont les parties de Bézier sont connectées, voir la page Wiki [Sketcher Augmenter la multiplicité d'un nœud](/Sketcher_BSplineIncreaseKnotMultiplicity/fr "Sketcher BSplineIncreaseKnotMultiplicity/fr") pour plus de détails.

Pour modifier la multiplicité des nœuds, utilisez les boutons de la barre d'outils ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Sketcher Augmenter la multiplicité d'un nœud](/Sketcher_BSplineIncreaseKnotMultiplicity/fr "Sketcher BSplineIncreaseKnotMultiplicity/fr") ou ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Sketcher Diminuer la multiplicité d'un nœud](/Sketcher_BSplineDecreaseKnotMultiplicity/fr "Sketcher BSplineDecreaseKnotMultiplicity/fr").

**Remarque :** la création de deux B-splines connectées l'une à l'autre ne s'unira pas en une seule nouvelle B-spline. Leur point de connexion n'est donc pas un nœud. La seule façon d'obtenir un nouveau nœud dans une B-spline existante est de diminuer le degré. Cependant, vous risquez d'obtenir de nombreux nouveaux nœuds. Le meilleur choix est donc de redessiner la B-spline avec plus de points de contrôle.

### Changer le poids

Autour de chaque point de contrôle, vous voyez un cercle jaune foncé. Son rayon définit le poids du point de contrôle correspondant. Par défaut, tous les cercles ont le rayon *1*. Cela est indiqué par une contrainte de rayon pour le premier cercle du point de contrôle.

Pour créer une B-spline rationnelle, les poids doivent être rendus indépendants. Pour y parvenir, vous pouvez supprimer la contrainte selon laquelle tous les cercles sont égaux, puis définir des contraintes de rayon différentes pour les cercles.

Si aucune contrainte de rayon n'est définie, vous pouvez également modifier le rayon en le faisant glisser :

![](/images/Sketcher_Changing-control-point-weigth-dragging.gif)

Dans l'exemple du déplacement, vous voyez qu'un poids élevé attire la courbe vers le point de contrôle, tandis qu'un poids très faible modifie la courbe comme si le point de contrôle n'existait presque pas.

Lorsque vous examinez la [fonction de création](#B-splines_rationnelles) pour les B-splines rationnelles non uniformes, vous constatez qu'un poids de zéro entraînerait une division par zéro. Les poids négatifs sont théoriquement possibles, mais ils ne sont pas pris en charge. Par conséquent, vous ne pouvez spécifier que des poids supérieurs à zéro.

**Remarque :** lorsque vous faites glisser des points, des nœuds ou des largeurs, les diamètres des cercles indiquant le poids changeront. Cela est dû au fait que le diamètre dépend de la longueur totale de la B-spline pour des raisons de visualisation. Le poids réel n'est pas modifié.

### Modification des nœuds

De nouveaux noeuds peuvent être ajoutés en utilisant le bouton ![](/images/Sketcher_BSplineInsertKnot.svg) [Insérer un nœud dans une B-spline](/Sketcher_BSplineInsertKnot/fr "Sketcher BSplineInsertKnot/fr"). [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

Un nœud est supprimé en diminuant son degré à 0 (c'est-à-dire en appliquant ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Diminuer la multiplicité d'un nœud](/Sketcher_BSplineDecreaseKnotMultiplicity/fr "Sketcher BSplineDecreaseKnotMultiplicity/fr") lorsque son degré est de 1).

La modification de la valeur du paramètre d'un nœud n'est pas encore prise en charge.

### Information sur l'affichage

Comme la forme d'une spline B ne renseigne pas beaucoup sur ses propriétés, FreeCAD propose [différents outils](/Sketcher_Workbench/fr#Outils_d.27esquisse_B-spline "Sketcher Workbench/fr") pour afficher les propriétés :

|  |  |
| --- | --- |
| Propriété | Bouton de la barre d'outils |
| **Degré** | [Sketcher Degré d'une B-spline](/Sketcher_BSplineDegree/fr "Sketcher BSplineDegree/fr") |
| **Polygone de contrôle** | [Sketcher Polygone de contrôle d'une B-spline](/Sketcher_BSplinePolygon/fr "Sketcher BSplinePolygon/fr") |
| **Peigne de courbure** | [Sketcher Peigne de courbure d'une B-spline](/Sketcher_BSplineComb/fr "Sketcher BSplineComb/fr") |
| **Multiplicité des nœuds** | [Sketcher Multiplicité des nœuds d'une B-spline](/Sketcher_BSplineKnotMultiplicity/fr "Sketcher BSplineKnotMultiplicity/fr") |
| **Poids** | [Sketcher Poids des points de contrôle B-spline](/Sketcher_BSplinePoleWeight/fr "Sketcher BSplinePoleWeight/fr") |

### Limitations

A l'heure actuelle (FreeCAD 0.20), il existe quelques limitations lors de l'utilisation des splines que vous devez connaître :

1. Vous ne pouvez pas définir de contraintes tangentielles.  
   Dans cet exemple, vous voulez vous assurer que la spline touche la courbe bleue 2 fois tangentiellement.  
   ![](/images/Sketcher_spline-limit-tangential.png)  
   Cela serait utile car la ligne bleue pourrait par exemple être la frontière spatiale de votre dessin.
2. Vous ne pouvez pas créer une courbe de décalage pour une spline B en utilisant l'outil [Draft Décaler](/Draft_Offset/fr "Draft Offset/fr").

## Cas d'utilisation typiques

Selon les propriétés des B-splines, il y a 3 cas d'utilisation principaux :

1. Les courbes qui commencent/se terminent tangentiellement à une certaine direction. L'exemple [ci-dessus](#Motivation) en est un exemple.
2. Les courbes décrivant des conceptions plus larges et offrant la liberté de changements locaux. Voir [cette exemple](#Conception) ci-dessous.
3. Les courbes qui assurent une certaine continuité (dérivée). Voir [cette exemple](#Continuit.C3.A9_aux_transitions_g.C3.A9om.C3.A9triques) ci-dessous.

### Conception

Prenons par exemple le cas où vous concevez le boîtier d'un mixeur de cuisine. Sa forme souhaitée doit ressembler à celle-ci :

![](/images/Sketcher_spline-exmple-mixer-shell.png)

Pour définir la forme extérieure, il est avantageux d'utiliser une B-spline car lorsque vous modifiez un point de contrôle pour changer la courbure du bas, la courbure du côté et du haut ne sera pas modifiée :

![](/images/Sketcher_spline-exmple-mixer-sketch.gif)

### Continuité aux transitions géométriques

Il existe plusieurs cas où il est physiquement nécessaire d'avoir une certaine continuité de surface aux transitions géométriques. Prenons par exemple les parois internes d'un canal de fluide. Lorsque le diamètre du canal change, on ne veut pas avoir de bord car les bords introduiraient des turbulences. Par conséquent, comme dans l'exemple de [ci-dessus](#Motivation), on utilise des splines dans ce but.

Le développement des courbes de Bézier a été initialement déclenché par l'industrie automobile française. Outre l'économie de matériaux et la réduction de la traînée du flux d'air, l'aspect des voitures devait également être amélioré. Et lorsque vous regardez le design élégant des voitures françaises des années 60 et 70, vous constatez que les courbes de Bézier ont donné un coup de pouce au design automobile.

Prenons par exemple cette tâche dans la conception des voitures : l'aile de la voiture doit être "belle". Voici un croquis de base de notre tâche :

![](/images/Spline-Fender-sketch1.svg)

"Avoir un bel aspect" signifie que le client (potentiel) regarde l'aile et ne voit pas de reflets lumineux inattendus, ni de changements soudains dans les reflets de la peinture automobile. De quoi avez-vous besoin pour éviter les changements dans les reflets ? Regarder attentivement l'aile :

![](/images/Spline-Fender-sketch2.svg)

Dans la zone située au-dessus du bord, l'intensité de la lumière réfléchie est faible (représentée par l'ellipse rouge) car aucune lumière n'est directement réfléchie dans la direction du bord vers l'œil.

Vous voyez que lorsqu'il y a un bord, il y a une zone spatiale où la lumière réfléchie a moins d'intensité et c'est ce que vous remarquerez en regardant le garde-boue. Pour éviter cela, vous avez besoin d'un changement continu de la pente de vos éléments de surface. La pente est la dérivée de premier ordre et comme expliqué dans la section [Fondamentaux](#Fondamentaux), une B-spline du second degré (quadratique) offre en chaque point une dérivée de premier ordre continue.

Mais est-ce vraiment suffisant ? Au point de transition géométrique, nous avons maintenant la même pente des deux côtés, mais la pente peut changer différemment des deux côtés. Nous avons alors cette situation :

![](/images/Spline-Fender-sketch3.svg)

Nous avons donc également des zones dans lesquelles l'intensité de la lumière réfléchie est différente. Pour éviter cela, nous avons besoin au point géométrique de transition d'une continuité de la dérivée de second ordre et donc d'une B-spline cubique.

Retrieved from "<http://wiki.freecad.org/index.php?title=B-Splines/fr&oldid=1478824>"