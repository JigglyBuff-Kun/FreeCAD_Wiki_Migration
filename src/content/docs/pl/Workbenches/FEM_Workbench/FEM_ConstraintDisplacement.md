---
title: MES Warunek brzegowy przemieszczenia
---

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| MES: Warunek brzegowy przemieszczenia                                                |
| Lokalizacja w menu                                                                   |
| Model → Warunki brzegowe i obciążenia mechaniczne → Warunek brzegowy przemieszczenia |
| Środowisko pracy                                                                     |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                          |
| Domyślny skrót                                                                       |
| _brak_                                                                               |
| Wprowadzono w wersji                                                                 |
| -                                                                                    |
| Zobacz także                                                                         |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                                   |
|                                                                                      |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Tworzy warunek brzegowy MES przemieszczenia wybranego obiektu dla określonego stopnia swobody.

![](/images/FEM_Displacement_dialog.PNG)

Panel zadań warunku brzegowego przemieszczenia

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintDisplacement.svg) Warunek brzegowy przemieszczenia.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintDisplacement.svg) Warunek brzegowy przemieszczenia** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego ma być przyłożony warunek brzegowy. Może to być wierzchołek, krawędź lub ściana (ale wszystkie wskazane obiekty muszą być tego samego typu). Aby usunąć obiekty z listy, wciśnij przycisk Usuń i kliknij na nich.
4. Zaznacz pola przy stopniach swobody, których chcesz użyć. Domyślnie są one ustawione na zero (blokada stopnia swobody), ale może zostać wprowadzona dowolna wartość ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): lub równanie dla Elmera). Obroty mają znaczenie tylko w przypadku elementów belkowych i powłokowych.

## Równania

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Ogólne

Dla ![](/images/FEM_SolverElmer.svg) [solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl") istnieje możliwość zdefiniowania przemieszczenia jako formuły. W tym przypadku solver ustawia przemieszczenia zgodnie z wprowadzoną zmienną równania.

Załóżmy, że chcemy przeprowadzić [analizę ze zmiennością w czasie](</FEM_SolverElmer_SolverSettings#Timestepping_(transient_analyses)> "FEM SolverElmer SolverSettings"). Dla każdego kroku czasowego, przemieszczenie

d
{\displaystyle d}
![{\displaystyle d}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab) powinno być zwiększane o 6 mm:

d
(
t
)
=
0.006
⋅
t
{\displaystyle \quad d(t)=0.006\cdot t}
![{\displaystyle \quad d(t)=0.006\cdot t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7bcc928138e413f95a9a6672978e22268e4f2ba1)

wprowadź to w polu _Wzór_:  
 `Variable "time"; Real MATC "0.006*tx"`

Ten kod ma następującą składnię:

- przedrostek _Variable_ określa, że przemieszczenie nie jest stałą tylko zmienną
- zmienną jest bieżący czas
- wartości przemieszczenia są zwracane jako wartości _Real_ (rzeczywiste zmiennoprzecinkowe)
- _MATC_ to przedrostek dla solvera Elmer oznaczający, że następujący kod jest równaniem
- _tx_ jest zawsze nazwą zmiennej w równaniach _MATC_, mimo że w naszym przypadku _tx_ to _t_

### Obroty

Elmer korzysta tylko z pól warunku brzegowego **Przemieszczenie \***. Aby zdefiniować obroty, potrzebne jest równanie.

Przykładowo, jeśli ściana powinna być obrócona zgodnie z tym warunkiemː

d

x
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
x
−
sin
⁡
(
ϕ
)
y

d

y
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
y

- sin
  ⁡
  (
  ϕ
  )
  x
  {\displaystyle \quad {\begin{aligned}d\_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\\d\_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}
  ![{\displaystyle \quad {\begin{aligned}d_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\d_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a56fb2507459d63a0a5373a81fa64998c216e359)

to należy wprowadzić jako **Przemieszczenie x**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(1)-sin(tx(0)*pi)*tx(2)`

a jako **Przemieszczenie y**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(2)+sin(tx(0)*pi)*tx(1)`

Ten kod ma następującą składnię:

- mamy 4 zmienne - czas i wszystkie możliwe współrzędne (x, y z)
- _tx_ jest wektorem, _tx(0)_ odnosi się do pierwszej zmiennej - czasu, podczas gdy _tx(1)_ odnosi się do pierwszej współrzędnej - _x_
- _pi_ oznacza

  π
  {\displaystyle \pi }
  ![{\displaystyle \pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/9be4ba0bb8df3af72e90a0535fabcc17431e540a) i zostało dodane aby po

  # t

  1

  s
  {\displaystyle t=1{\rm {\,s}}}
  ![{\displaystyle t=1{\rm {,s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af783ab669111b914a4a9d4b74e448bfbbb27b9c) został przeprowadzony obrót o 180°

## Uwagi

Dla ![](/images/FEM_SolverCalculixCxxtools.svg) [solvera CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl"):

- To narzędzie korzysta ze [słowa kluczowego \*BOUNDARY](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
- Blokowanie stopnia swobody jest wyjaśnione na stronie <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node164.html>
- Zadawanie wartości przemieszczenia dla stopnia swobody jest opisane na stronie <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node165.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintDisplacement/pl&oldid=1569007>"
