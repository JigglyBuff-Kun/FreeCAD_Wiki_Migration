---
title: FEM Vincolo di dislocamento
---

|                                                       |
| ----------------------------------------------------- |
| Vincolo di dislocamento                               |
| Posizione nel menu                                    |
| Modello → Vincoli meccanici → Vincolo dislocamento    |
| Ambiente                                              |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")           |
| Avvio veloce                                          |
| _Nessuno_                                             |
| Introdotto nella versione                             |
| -                                                     |
| Vedere anche                                          |
| [Tutorial di FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                       |

## Descrizione

Crea un vincolo FEM per un determinato dislocamento di un oggetto selezionato per un dato grado di libertà.

![](/images/FEM_Displacement_dialog.PNG)

The FEM displacement task panel

## Utilizzo

1. Cliccare su ![](/images/FEM_ConstraintDisplacement.png) o scegliere Modello → **Vincoli meccanici** → ![](/images/FEM_ConstraintDisplacement.png) Vincolo dislocamento dal menu principale.
2. Selezionare nella vista 3D l'oggetto a cui deve essere applicato il vincolo, che può essere
   1. vertice (angolo)
   2. bordo
   3. faccia
3. Scegliere un grado di libertà e prescrivere uno spostamento.

## Formulas

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### General

For the ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer "FEM SolverElmer") it is possible to define the displacement as a formula. In this case the solver sets the displacement according to the given formula variable.

Take for example the case that we want to perform a [transient analysis](</FEM_SolverElmer_SolverSettings#Timestepping_(transient_analyses)> "FEM SolverElmer SolverSettings"). For every time step the displacement

d
{\displaystyle d}
![{\displaystyle d}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab) should be increased by 6 mm:

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

enter this in the _Formula_ field:  
 `Variable "time"; Real MATC "0.006*tx"`

This code has the following syntax:

- the prefix _Variable_ specifies that the displacement is not a constant but a variable
- the variable is the current time
- the displacement values are returned as _Real_ (floating point) values
- _MATC_ is a prefix for the Elmer solver indicating that the following code is a formula
- _tx_ is always the name of the variable in _MATC_ formulas, no matter that _tx_ in our case is actually _t_

### Rotations

Elmer only uses the **Displacement \*** fields of the boundary condition. To define rotations, we need a formula.

If for example a face should be rotated according to this condition:

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

then we need to enter for **Displacement x**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(1)-sin(tx(0)*pi)*tx(2)`

and for **Displacement y**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(2)+sin(tx(0)*pi)*tx(1)`

This code has the following syntax:

- we have 4 variables, the time and all possible coordinates (x, y z)
- _tx_ is a vector, _tx(0)_ refers to the first variable, the time, while _tx(1)_ refers to the first coordinate _x_
- _pi_ denotes

  π
  {\displaystyle \pi }
  ![{\displaystyle \pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/9be4ba0bb8df3af72e90a0535fabcc17431e540a) and was added so that after

  # t

  1

  s
  {\displaystyle t=1{\rm {\,s}}}
  ![{\displaystyle t=1{\rm {,s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af783ab669111b914a4a9d4b74e448bfbbb27b9c) a rotation of 180° is performed

## Note

1. Il vincolo utilizza \*BOUNDARY card in CalculiX. Come stabilire un grado di libertà è spiegato in <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node164.html> e prescrivere uno dislocamento per un grado di libertà è spiegato in <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node165.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintDisplacement/it&oldid=1543382>"
