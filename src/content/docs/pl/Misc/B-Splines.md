---
title: Krzywe złożone
---
Ta strona opisuje jak używać krzywych złożonych *(typu B-spline)* w programie FreeCAD. Podaje również podstawowe informacje czym są krzywe złożone i do jakich zastosowań są przydatne.

## Motywacja

Jeśli posiadasz już wiedzę na temat krzywych złożonych typu B-splines i ich zastosowania, możesz przejść bezpośrednio do rozdziału [Krzywe złożone w programie FreeCAD](#Krzywe_z.C5.82o.C5.BCone_w_programie_FreeCAD).

Załóżmy, że chcesz zaprojektować część, która powinna być wytworzona za pomocą drukarki 3D. Część musi mieć krawędź zaprojektowaną w ten sposób:

![](/images/B-splines_Motivation-start.png)

Musisz wydrukować część w kierunku od dołu szkicu do góry. Zewnętrzne konstrukcje wsporcze mogą nie być rozwiązaniem. Dlatego musisz dodać podporę bezpośrednio do swojej części. Jakie masz opcje?

* Opcja 1: możesz dodać linię od punktu *(20, 0)* do punktu *(80, 40)*:

![](/images/B-splines_Motivation-line.png)

Jednak takie rozwiązanie wymaga dużej objętości, a co za tym idzie wagi i ilości materiału.

* Opcja 2: możesz połączyć te dwa punkty łukiem okręgu. Aby zaoszczędzić na objętości, łuk powinien kończyć się stycznie w punkcie *(80,40)*. Wtedy twoje rozwiązanie będzie wyglądać następująco:

![](/images/B-splines_Motivation-circle.png)

W PORZĄDKU. Ale na dole nie potrzebujesz bezpośredniego wsparcia.

* Opcja 3: możesz zaoszczędzić trochę więcej objętości, jeśli połączenie między dwoma punktami jest krzywą, która zaczyna się stycznie w punkcie o współrzędnych *(0, 20)* i kończy stycznie w *(80, 40)*:

![](/images/B-splines_Motivation-bezier.png)

Tak więc krzywa, za pomocą której można połączyć dwa punkty stycznie do punktu odniesienia, może być bardzo przydatna w konstrukcjach. Krzywe Béziera zapewniają tę cechę.

## Krzywe Béziera

### Pochodne

Krzywe Béziera są wielomianami opisującymi połączenie między dwoma punktami. Najprostszym wielomianem łączącym dwa punkty jest prosta *(

A
∗

x

1
+
B
{\displaystyle A\*x^{1}+B}
![{\displaystyle A*x^{1}+B}](https://wikimedia.org/api/rest_v1/media/math/render/svg/59ad13b69733eab9240e2178bd0a00ce514ba502))*, zatem liniowe krzywe Béziera są również odcinkami linii:

[![](https://upload.wikimedia.org/wikipedia/commons/8/8c/Bezier_linear_anim.gif)](/File:Bezier_linear_anim.gif)

Animacja 1: Liniowa krzywa Béziera.

Jednak wielomian staje się użyteczny, gdy możemy go kontrolować. Powinien więc istnieć punkt pomiędzy dwoma punktami końcowymi, który pozwala nam określić jak punkty końcowe są połączone. Tak jak w powyższym przykładzie w opcji trzeciej krzywa jest przydatna, gdy zaczyna się i kończy stycznie do linii przecinających punkty końcowe. I to jest główna cecha krzywych Béziera. Dodajmy więc punkt kontrolny pomiędzy punktami końcowymi. Krzywa zacznie się stycznie do tego punktu kontrolnego, co oznacza, że jest styczna do linii, którą możemy narysować pomiędzy punktem początkowym a punktem kontrolnym. Idąc wstecz od punktu końcowego krzywa będzie również styczna do linii, którą możemy narysować pomiędzy punktem kontrolnym a punktem końcowym. Animacja numer 2 pokazuje jak wygląda taka krzywa.

[![](https://upload.wikimedia.org/wikipedia/commons/3/35/Bezier_quadratic_anim.gif)](/File:Bezier_quadratic_anim.gif)

Animacja 2: Kwadratowa krzywa Béziera. Punktem kontrolnym jest tutaj punkt P1.

Animacja jasno pokazuje, czym w zasadzie jest krzywa - przejściem od punktu P0 do punktu P2 poprzez obrócenie linii P0-P1 tak, aby stała się linią P1-P2. W ten sposób otrzymujemy ładną cechę stycznego początku / końca.

Taka krzywa może być opisana tylko wielomianem kwadratowym. *(Liczba lewych / prawych obrotów + 1 to konieczny rząd wielomianu. Wielomian kwadratowy to jeden zwrot, wielomian sześcienny ma dwa zwroty, itd.)* Dlatego krzywa Béziera z jednym punktem kontrolnym jest kwadratową *(drugiego rzędu)* krzywą Béziera.

Posiadanie tylko jednego punktu kontrolnego często nie jest wystarczające. Weźmy powyższy motywujący przykład. Tam w opcji 3 kończymy krzywą stycznie w kierunku x. Ale jak można połączyć punkty *(20, 0)* i *(80, 40)* tak, aby krzywa kończyła się stycznie w kierunku y? Aby to osiągnąć potrzebny jest najpierw zwrot w prawo, a potem w lewo, a więc wielomian sześcienny *(trzeciego rzędu)*. A to oznacza, że dla krzywej Béziera potrzebujemy *(lub można powiedzieć, że zyskujemy)* drugi punkt kontrolny. Animacja 3 pokazuje sześcienną krzywą Béziera.

[![](https://upload.wikimedia.org/wikipedia/commons/a/a3/Bezier_cubic_anim.gif)](/File:Bezier_cubic_anim.gif)

Animacja 3: Sześcienna krzywa Béziera.

Aby odpowiedzieć na pytanie, rozwiązaniem z zakończeniem stycznym w kierunku y dla przykładu jest:

![](/images/B-splines_Motivation-cubic-bezier.png)

### Zasady

W pochodnej mogłeś już zauważyć pewne "reguły" dla krzywych Béziera:

* Stopień wielomianu jest jednocześnie stopniem krzywych.
* Jeśli potrzebujesz 

  n
  {\displaystyle n}
  ![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) skrętów, potrzebujesz co najmniej 

  n
  +
  1
  {\displaystyle n+1}
  ![{\displaystyle n+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a135e65a42f2d73cccbfc4569523996ca0036f1) stopnia krzywej Béziera.
* Krzywa Béziera zawsze zaczyna się stycznie do linii między punktem początkowym a pierwszym punktem kontrolnym *(i kończy się stycznie do linii między ostatnim punktem kontrolnym a punktem końcowym)*.

### Matematyka

Jeśli jesteś zainteresowany, aby zrozumieć matematykę w tle, oto podstawy.

Krzywą Béziera oblicza się według poniższego wzoru:

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
![{\displaystyle \quad {\textrm {Bezier}}(n,t)=\sum _{i=0}^{n}\underbrace {\binom {n}{i}} _{\text{polynomial term}}\underbrace {\left(1-t\right)^{n-i}t^{i}} _{\text{polynomial term}}\;\underbrace {P_{i}} _{\text{point coordinate}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bf952743aab4a01c76d7ab2524f9d3b6f64e229b)

"n" jest niniejszym stopniem krzywej. Zatem krzywa Béziera stopnia *n* jest wielokątem rzędu *n*. Współczynniki 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) są więc współrzędnymi punktów kontrolnych krzywych Béziera. Wizualizację można znaleźć na stronie [kontrolowanie krzywizn Béziera](https://pomax.github.io/bezierinfo/#control).

Jeśli jesteś dalej zainteresowany, spójrz na stronę [Matematyka krzywych Béziera](https://pomax.github.io/bezierinfo/#explanation) z ładnie animowanym wyprowadzeniem matematyki dla krzywych Béziera.

## Krzywe złożone

### Podstawy

[Ten film](https://www.youtube.com/watch?v=bE1MrrqBAl8) wymienia na początku praktyczne problemy z krzywymi Béziera. Na przykład, że dodanie lub zmiana punktu kontrolnego zmienia całą krzywą. Te problemy mogą być rozwiązane przez połączenie kilku krzywych Béziera. Wynikiem jest tak zwany *splajn*, w szczególności B-splajn *(basis spline)*. Film wyjaśnia również, że złożenie kwadratowych krzywych Béziera tworzy jednolity kwadratowy B-splajn, oraz że złożenie sześciennych krzywych Béziera tworzy jednolity sześcienny B-splajn.

Z filmów możemy zebrać przydatne "zasady" dla krzywych złożonych *(B-spline)*:

* Pierwszy i ostatni punkt kontrolny jest punktem końcowym / początkowym krzywej.
* Podobnie jak dla krzywych Béziera, krzywe złożone zawsze zaczynają się stycznie do linii pomiędzy punktem początkowym a pierwszym punktem kontrolnym *(i kończą się stycznie do linii pomiędzy ostatnim punktem kontrolnym a punktem końcowym)*.
* Połączenie 

  S
  {\displaystyle S}
  ![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) krzywych Béziera o stopniu 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) posiada 

  S
  +
  D
  {\displaystyle S+D}
  ![{\displaystyle S+D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65a5d3f864247ec4ca8a4174e180fd0154651187) punktów kontrolnych.
  + Ponieważ w większości przypadków pracujemy z sześciennymi krzywymi złożonymi, możemy stwierdzić, że 

    N
    {\displaystyle N}
    ![{\displaystyle N}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f5e3890c981ae85503089652feb48b191b57aae3) punktów kontrolnych prowadzi do 

    N
    −
    3
    {\displaystyle N-3}
    ![{\displaystyle N-3}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b849f72aa23caee22353feb5ea5c327854650fb0) segmentów Béziera, i z kolei 

    N
    −
    4
    {\displaystyle N-4}
    ![{\displaystyle N-4}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f288cc09f331fd1fc0d38ce419af503fe8cd23) punktów węzłowych segmentów.
* Krzywa złożona o stopniu 

  D
  {\displaystyle D}
  ![{\displaystyle D}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f34a0c600395e5d4345287e21fb26efd386990e6) oferuje w każdym punkcie ciągłą pochodną rzędu 

  D
  −
  1
  {\displaystyle D-1}
  ![{\displaystyle D-1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2882b444f937e7119403c8625aea8647b667747).
  + Dla sześciennej krzywej złożonej oznacza to, że krzywizna *(pochodna drugiego rzędu)* nie zmienia się podczas przechodzenia z jednego odcinka do następnego. Jest to bardzo użyteczna cecha, jak zobaczymy później.

Jeśli interesuje Cię więcej szczegółów na temat właściwości krzywych złożonych, zajrzyj na film [Krzywe MOOC 8.2: Właściwości krzywych B-spline](https://www.youtube.com/watch?v=xXJylM2S72s).

#### Zasady

Ponieważ przedstawimy tylko podstawy teorii krzywej złożonej *B-spline*, nie wchodzimy tutaj w szczegóły.

Podstawą jest konstrukcja krzywej typu splajn. Patrząc na definicję krzywych Béziera w dziale [Matematyka](#Matematyka) pamiętamy, że krzywa Béziera jest liniową kombinacją wielomianów, których współczynnikiem jest współrzędna x/y każdego z punktów kontrolnych. Wielomiany te nazywane są wielomianami Bernsteina.

Ponieważ kilka krzywych Béziera jest łączonych w celu utworzenia splajnu, otrzymujemy zbiór wielomianów Bernsteina tworzących splajn (są one podstawą). Ponieważ chcemy pokonać wspomniane ograniczenia krzywych Béziera, nie łączymy geometrycznie różnych wielomianów Bernsteina z krzywych Béziera, ale definiujemy wielomian Bernsteina w całym zakresie geometrycznym splajnu. Zatem **nie łączymy** krzywych Béziera z ich wielomianami Bernsteina, który byłby:

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

natomiast 

B

i
,
n
(
t
)
{\displaystyle B\_{i,n}(t)}
![{\displaystyle B_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/58fbcfe844c24961f0c5b6bd3fcc5f0bc64bffdf) jest i-tym wielomianem Bernsteina o rzędzie 

n
{\displaystyle n}
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b), a współczynniki 

P

i
{\displaystyle P\_{i}}
![{\displaystyle P_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ba1396129f7be3c7f828a571b6649e6807d10d3) są współrzędnymi punktów kontrolnych krzywej Béziera. My jednak używamy **innego zestawu funkcji**, które są zdefiniowane na całym zakresie splajnu:

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

Zauważ, że ogólnie 

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
![{\displaystyle N_{i,n}(t)\neq B_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/219aeb22c0243b3301a5304d645e3cc84e086b37), a punkty kontrolne Beziera 

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
![{\displaystyle \{P_{1},P_{2},\dots \}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa3d6f309315c498fc08f5c8cff074c5a20118b2) różnią się od punktów kontrolnych B-spline 

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

Różne 

N

i
,
n
(
t
)
{\displaystyle N\_{i,n}(t)}
![{\displaystyle N_{i,n}(t)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a0b8b1a68ff11368898059ae7901f1ce9c0dc59e) są zdefiniowane fragmentarycznie, gdzie przedział każdego fragmentu jest przedziałem fragmentu Béziera.

Gdy długości wszystkich odcinków 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) są równe, mówimy o jednolitym splajnie. *(W literaturze często oznacza się to jako równy czas podróży 

t
{\displaystyle t}
![{\displaystyle t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/65658b7b223af9e1acc877d848888ecdb4466560) na kawałek)*.

Aby zrozumieć, w jaki sposób 

p

i
{\displaystyle p\_{i}}
![{\displaystyle p_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5bab39399bf5424f25d957cdc57c84a0622626d2) są współrzędnymi punktów kontrolnych krzywej B-spline, zobacz pierwszą minutę filmu [tego wideo](https://www.youtube.com/watch?v=dPPTCy4L4rY&list=PL8bSwVy8_IcMvtI70tZoYesCS0hGVO5qd).

#### Wektor węzła

Jak wywnioskowano powyżej, B-splajny są utworzone z 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) wielomianów kawałkowych o ciągłości do pewnej pochodnej między kawałkami. Punkty końcowe przedziału definicyjnego kawałka nazywane są węzłami. Dla splajnu zdefiniowanego na 

k
{\displaystyle k}
![{\displaystyle k}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3c9a2c7b599b37105512c5d570edc034056dd40) kawałkach istnieje 

k
+
1
{\displaystyle k+1}
![{\displaystyle k+1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/552a558062ed4c0486297b5b5531c5ee044dbd9b) węzłów podanych przez tzw. *wektor węzłów*:   

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
![{\displaystyle \{t_{0},t_{1},t_{2},\dots ,t_{k}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c114653d9cad33ebf60eb5e159a884f89526f9b1) natomiast 

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

Wektor węzłów zawiera węzły 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) funkcji bazowych, które definiują B-spline, zobacz film [Węzły krzywej B-spline](https://www.youtube.com/watch?v=ni5NNPCVvDY). Funkcje bazowe B-spline mogą być obliczone przy użyciu wektora węzłów i algorytmu tworzenia, zobacz film [Generowanie funkcji bazowych. Wzór Coxa-de Boora](https://www.youtube.com/watch?v=hrsO45AHtbs).

Pochodna, do której istnieje ciągłość, jest określona przez krotność 

m
{\displaystyle m}
![{\displaystyle m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a07d98bb302f3856cbabc47b2b9016692e3f7bc). Dlatego możemy określić wektor z krotnością dla każdego węzła: 

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
![{\displaystyle \{m_{0},m_{1},\dots ,m_{k}\}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0598cae76cf2890586d6b1067587a9be45d3dd78). Węzeł na splajnie o stopniu „d” i krotności „m” mówi, że krzywa po lewej i prawej stronie węzła ma co najmniej równą pochodną rzędu „n” *(zwaną „C”< sup>*n *ciągłość)*, podczas gdy 

n
=
d
−
m
{\displaystyle n=d-m}
![{\displaystyle n=d-m}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f03a465bfac71680367d6c2ce4bd23314e5690ac).

### Niejednorodne krzywe B-spline

Wywodzenie krzywych złożonych z krzywych Béziera ma tę matematyczną konsekwencję, że w krzywych złożonych każdy wielomian ma taką samą długość. Takie krzywe złożone nazywane są *jednorodnymi*. Bardziej ogólny przypadek jest taki, że mogą, ale nie muszą mieć tej samej długości. Takie *niejednolite* splajny mają tę zaletę, że można kontrolować, jak blisko splajny przecinają swój punkt kontrolny.

Matematycznie osiąga się to przez zdefiniowanie różnych 

N

i
,
n
{\displaystyle N\_{i,n}}
![{\displaystyle N_{i,n}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bd501142b372d76ba33e36037e3cebf257b32b3) elementów w różnych przedziałach. Jeśli na przykład B-splajn jest zdefiniowany dla przedziału [0, 1], to jest jednolity, jeśli wszystkie jego np. 5 fragmentów są również zdefiniowane w tym przedziale. Jeśli teraz 

N

1
,
4
{\displaystyle N\_{1,4}}
![{\displaystyle N_{1,4}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3738c6fe3451d054d671162b69741e9cb13604b) jest zdefiniowany tylko w przedziale [0, 0.6] *(poza tym przedziałem jest ustawiony na zero)*, to jest krótszy, a więc splajn staje się niejednolity.

Jak opisano powyżej parametry węzłów są opisane przez wektor węzłów. Tak więc wektor węzłów przechowuje przedziały definicyjne. Kiedy teraz jeden kawałek dostaje inny interwał, również wektor węzłów zmienia się, zobacz film [Niejednolite krzywe B-spline i ich funkcje bazowe](https://www.youtube.com/watch?v=w-l5R70y6u0) dla wizualizacji.

### Relacyjne krzywe B-splajn

Dalsze uogólnienie dla krzywych złożonych może być dokonane poprzez wprowadzenie wag dla punktów kontrolnych. W ten sposób można kontrolować "jak ważny" jest dany punkt kontrolny.

Równanie dla takiego splajnu to:

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

Zauważ, że funkcja nie jest już wielomianem, ale funkcją racjonalną, a takie splajny nazywamy racjonalnymi krzywymi złożonymi. Zauważ, że gdy wszystkie 

w

i
{\displaystyle w\_{i}}
![{\displaystyle w_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe22f0329d3ecb2e1880d44d191aba0e5475db68) są równe, to równanie sprowadza się do regularnej nieracjonalnej krzywej złożonej. Zatem nieracjonalne krzywe złożone są podzbiorem racjonalnych krzywych złożonych.

Te niejednorodne i racjonalne *(z powodu podziału)* krzywe B-spline są często nazywane **[NURBS](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)** i są szeroko stosowane w modelowaniu geometrycznym.

## Krzywe złożone w programie FreeCAD

FreeCAD oferuje możliwość tworzenia jednolitych lub niejednolitych krzywych złożonych dowolnego stopnia w przestrzeni 2D, za pomocą środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

### Tworzenie

Aby utworzyć krzywe złożone, przejdź do szkicu i użyj przycisku na pasku narzędzi ![](/images/Sketcher_CreateBSpline.svg) [Utwórz krzywą złożoną](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl"). Następnie kliknij lewym przyciskiem myszy, aby ustawić punkt kontrolny, przesuń kursor w lewo, aby ustawić następny punkt kontrolny i tak dalej. Na koniec kliknij prawym przyciskiem myszy, aby zakończyć definicję i utworzyć krzywą.

Domyślnie tworzone są jednolite krzywe sześcienne, ale nie ma wystarczającej ilości punktów kontrolnych, aby to zrobić. Tak więc, gdy tworzysz krzywą złożona z tylko 2 punktami kontrolnymi, otrzymujesz oczywiście krzywą, która jest pojedynczą liniową krzywą Béziera, dla 3 punktów kontrolnych otrzymujesz kwadratową krzywą Béziera, a dla 5 punktów kontrolnych otrzymujesz sześcienną krzywą złożoną z 2 segmentów Béziera. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") Możesz również użyć klawisza D podczas tworzenia krzywej B-spline, aby ustawić jej stopień *(nadal będzie ona opadać do niższego stopnia, jeśli podano mniej punktów)*.

Aby utworzyć periodyczne krzywe złożone *(B-splajny, które tworzą zamkniętą krzywą)*, użyj przycisku na pasku narzędzi ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Okresowa krzywa złożona ...](/Sketcher_CreatePeriodicBSpline/pl "Sketcher CreatePeriodicBSpline/pl"). Nie jest konieczne ustawianie ostatniego punktu kontrolnego na pierwszym, ponieważ linia krzywej zostanie automatycznie zamknięta:

![](/images/Sketcher_Periodic-B-spline-creation.gif)

Krzywe złożone mogą być również generowane z istniejących segmentów szkicu. Aby to zrobić, zaznacz elementy i naciśnij przycisk paska narzędzi ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Konwertuj geometrię na krzywą złożoną](/Sketcher_BSplineConvertToNURBS/pl "Sketcher BSplineConvertToNURBS/pl").

Podczas tworzenia krzywej złożonej można określić jej stopień, naciskając klawisz D. Dzięki temu można zastąpić domyślne ustawienie tworzenia sześciennej krzywej złożonej, jeśli jest to możliwe. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

### Zmiana stopni

Aby zmienić stopień, wybierz krzywą złożoną i użyj przycisku z paska narzędzi ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Zwiększ stopień krzywej złożonej](/Sketcher_BSplineIncreaseDegree/pl "Sketcher BSplineIncreaseDegree/pl") lub ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Zmniejsz stopień krzywej złożonej](/Sketcher_BSplineDecreaseDegree/pl "Sketcher BSplineDecreaseDegree/pl").

**Uwaga:** Zmniejszanie stopnia nie może odwrócić wcześniejszego zwiększenia stopnia, zobacz stronę Wiki [Zmniejsz stopień krzywej złożonej](/Sketcher_BSplineDecreaseDegree/pl "Sketcher BSplineDecreaseDegree/pl"), aby uzyskać wyjaśnienie.

### Zmiana wielokrotności węzłów

Punkty, w których dwie krzywe Béziera łączą się tworząc krzywą złożoną nazywane są węzłami. Mnogość węzłów określa sposób łączenia części Béziera, zobacz stronę Wiki [Zwiększ liczebność węzłów](/Sketcher_BSplineIncreaseKnotMultiplicity/pl "Sketcher BSplineIncreaseKnotMultiplicity/pl"), aby poznać szczegóły.

Aby zmienić krotność węzłów, użyj przycisków paska narzędzi ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Zwiększ krotności węzłów](/Sketcher_BSplineIncreaseKnotMultiplicity/pl "Sketcher BSplineIncreaseKnotMultiplicity/pl") lub ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Zmniejsz krotności węzłów](/Sketcher_BSplineDecreaseKnotMultiplicity/pl "Sketcher BSplineDecreaseKnotMultiplicity/pl").

**Uwaga:** Tworzenie dwóch krzywych złożonych, które są ze sobą połączone, nie połączy się w jedną nową krzywą złożoną. Zatem ich punkt połączenia nie jest węzłem. Jedynym sposobem na uzyskanie nowego węzła w istniejącej krzywej jest zmniejszenie jej stopnia. Jednakże, możesz uzyskać wiele nowych węzłów. Dlatego lepszym wyborem jest przerysowanie krzywej z większą liczbą punktów kontrolnych.

### Zmiana wagi

Wokół każdego punktu kontrolnego znajduje się ciemnożółte koło. Jego promień określa wagę dla danego punktu kontrolnego. Domyślnie wszystkie okręgi mają promień równy *1*. Jest to oznaczone za pomocą wiązania promienia dla pierwszego okręgu punktu kontrolnego.

Aby utworzyć racjonalną krzywą złożoną, wagi muszą być niezależne. Aby to osiągnąć, można usunąć wiązanie, że wszystkie okręgi są równe, a następnie ustawić różne wiązania promienia dla okręgów.

Jeśli nie ustawiono żadnego wiązania promienia, można również zmienić promień, przeciągając go:

![](/images/Sketcher_Changing-control-point-weigth-dragging.gif)

W przykładzie przeciągania widać, że duża waga przyciąga krzywą do punktu kontrolnego, podczas gdy bardzo mała waga zmienia krzywą tak, jakby punkt kontrolny prawie nie istniał.

Kiedy spojrzysz na [funkcję tworzenia](#Niejednorodne_krzywe_B-spline) dla niejednorodnych racjonalnych krzywych złożonych zobaczysz, że waga równa zero doprowadziłaby do dzielenia przez zero. Ujemne wagi są teoretycznie możliwe, ale nie są wspierane. Dlatego możesz określić tylko wagi większe od zera.

**Uwaga:** Podczas przeciągania punktów, węzłów lub szerokości, średnice okręgów oznaczających wagę będą się zmieniać. Dzieje się tak dlatego, że ze względów wizualizacyjnych średnica zależy od całkowitej długości krzywej złożonej. Rzeczywista waga nie ulega zmianie.

### Edycja węzłów

Nowe węzły można dodawać za pomocą przycisku ![](/images/Sketcher_BSplineInsertKnot.svg) [Dodaj węzeł krzywej złozonej](/Sketcher_BSplineInsertKnot/pl "Sketcher BSplineInsertKnot/pl"). [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Węzeł jest usuwany przez zmniejszenie jego stopnia do 0 *(tj. zastosowanie ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Zmniejsz krotność węzła krzywej złożonej](/Sketcher_BSplineDecreaseKnotMultiplicity/pl "Sketcher BSplineDecreaseKnotMultiplicity/pl"), gdy jego stopień wynosi 1)*.

Zmiana wartości parametru węzła nie jest jeszcze obsługiwana.

### Wyświetlanie informacji

Ponieważ postać krzywej B-splajnu nie mówi wiele o jej właściwościach, FreeCAD oferuje [różne narzędzia](/Sketcher_Workbench/pl#Narz.C4.99dzia_szkicownika_dla_krzywych_z.C5.82o.C5.BConych "Sketcher Workbench/pl") do wyświetlania tych właściwości:

|  |  |
| --- | --- |
| Właściwość | Przycisk narzędzia |
| **Stopień** | [Pokaż / ukryj stopnie krzywej złożonej](/Sketcher_BSplineDegree/pl "Sketcher BSplineDegree/pl") |
| **Ramka kontrolna** | [Pokaż / ukryj ramkę kontrolną krzywej złożonej](/Sketcher_BSplinePolygon/pl "Sketcher BSplinePolygon/pl") |
| **Grzebień krzywizny** | [Pokaż / ukryj grzebień krzywizny krzywej złożonej](/Sketcher_BSplineComb/pl "Sketcher BSplineComb/pl") |
| **Wielokrotność węzłów** | [Pokaż / ukryj krotność węzłów krzywej złożonej](/Sketcher_BSplineKnotMultiplicity/pl "Sketcher BSplineKnotMultiplicity/pl") |
| **Waga** | [Pokaż / ukryj wagi krzywej złożonej](/Sketcher_BSplinePoleWeight/pl "Sketcher BSplinePoleWeight/pl") |

### Ograniczenia

W chwili obecnej *(FreeCAD v0.20)* istnieją pewne ograniczenia podczas używania krzywych złożonych, które powinieneś znać:

1. Nie można ustawić wiązań stycznych.  
   W tym przykładzie  
    ![](/images/Sketcher_spline-limit-tangential.png)  
    chcesz zapewnić, że krzywa dotknie niebieskiej krzywej 2 razy stycznie. Byłoby to użyteczne, ponieważ niebieska linia może być na przykład przestrzenną granicą dla twojego projektu.
2. Nie można utworzyć krzywej odsunięcia dla linii krzywej złożonej używając narzędzia środowiska Rysunek Roboczy [Odsunięcie](/Draft_Offset/pl "Draft Offset/pl").

## Przypadki typowego zastosowania

Zgodnie z właściwościami linii krzywych złożonych, istnieją trzy główne przypadki zastosowań:

1. Krzywe, które zaczynają się / kończą stycznie do pewnego kierunku. Przykładem tego jest przykład motywacyjny [powyżej](#Motywacja).
2. Krzywe opisujące większe projekty i zapewniające swobodę lokalnych zmian. Zobacz [przykład projektowania](#Projektowanie) poniżej.
3. Krzywe zapewniające pewną ciągłość *(pochodną)*. Zobacz [przykład ciągłości](#Ci.C4.85g.C5.82o.C5.9B.C4.87_w_przej.C5.9Bciach_geometrycznych) poniżej.

### Projektowanie

Rozważmy przypadek, w którym projektujemy obudowę baterii kuchennej. Jej pożądany kształt powinien wyglądać tak jak ten:

![](/images/Sketcher_spline-exmple-mixer-shell.png)

Do zdefiniowania formy zewnętrznej korzystne jest użycie krzywej złożonej, ponieważ po zmianie punktu kontrolnego w celu zmiany krzywizny u dołu, krzywizna z boku i u góry nie ulegnie zmianie:

![](/images/Sketcher_spline-exmple-mixer-sketch.gif)

### Ciągłość w przejściach geometrycznych

Istnieje kilka przypadków, w których fizycznie konieczne jest zachowanie pewnej ciągłości powierzchni na przejściach geometrycznych. Weźmy na przykład wewnętrzne ścianki kanału z płynem. Kiedy mamy zmianę średnicy kanału, nie chcemy mieć krawędzi, ponieważ krawędzie wprowadziłyby turbulencje. Dlatego, tak jak w przykładzie motywacyjnym [powyżej](#Motywacja), używamy do tego celu krzywych złożonych.

Rozwój krzywych Béziera został zapoczątkowany przez francuski przemysł samochodowy. Oprócz oszczędności materiału i zmniejszenia oporów przepływu powietrza, należało również poprawić wygląd samochodów. Patrząc na fantazyjny design francuskich samochodów z lat 60-tych i 70-tych można zauważyć, że krzywe Béziera dały impuls do rozwoju designu samochodów.

Weźmy na przykład to zadanie w projektowaniu samochodów: Błotnik samochodu powinien "ładnie wyglądać". Oto podstawowy szkic do tego zadania:

![](/images/Spline-Fender-sketch1.svg)

"Ładny wygląd" oznacza, że *(potencjalny)* klient patrzy na błotnik i nie widzi niespodziewanych refleksów świetlnych, a także w ogóle żadnych nagłych zmian w odbiciu od lakieru samochodowego. Czego więc potrzebujesz, aby uniknąć zmian w odbiciach? Dokładne przyjrzenie się błotnikowi:

![](/images/Spline-Fender-sketch2.svg)

W obszarze przestrzennym nad krawędzią intensywność światła odbitego jest niska *(oznaczona czerwoną elipsą)*, ponieważ w kierunku od krawędzi do oka nie odbija się bezpośrednio żadne światło.

Widzisz, kiedy jest krawędź, istnieje obszar przestrzenny, w którym odbite światło ma mniejszą intensywność i to jest to, co zauważysz patrząc na błotnik. Aby tego uniknąć potrzebna jest ciągła zmiana nachylenia elementów powierzchni. Nachylenie jest pochodną pierwszego rzędu i jak wyjaśniono w sekcji [Podstawy](#Podstawy), krzywa złożona drugiego stopnia *(kwadratowa)* oferuje w każdym punkcie ciągłą pochodną pierwszego rzędu.

Ale czy to naprawdę wystarczy? W punkcie przejścia geometrycznego mamy teraz po obu stronach to samo nachylenie, ale nachylenie to może się zmieniać w różny sposób po obu stronach. Wtedy mamy taką sytuację:

![](/images/Spline-Fender-sketch3.svg)

Mamy więc również obszary przestrzenne, w których natężenie światła odbitego jest różne. Aby tego uniknąć, potrzebujemy w geometrycznym punkcie przejścia również ciągłości pochodnej drugiego rzędu, a więc sześciennej krzywej złożonej.

Retrieved from "<http://wiki.freecad.org/index.php?title=B-Splines/pl&oldid=1390239>"