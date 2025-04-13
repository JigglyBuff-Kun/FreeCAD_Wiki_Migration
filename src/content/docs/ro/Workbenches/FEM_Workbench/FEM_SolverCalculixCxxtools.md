---
title: FEM SolverCalculixCxxtools
---
|  |
| --- |
| FEM SolverCalculixCxxtools |
| Menu location |
| Solve → Solver CalculiX Standard |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|  |

## Descriere

CalculiXccxTools permit utilizarea calculatorului [CalculiX](http://dhondt.de/). Puteți să-l utilizați

1. setați parametrii de analiză
2. selectați directorul de lucru
3. executați Solverul CalculiX.

## Cum se folosește

Acest obiect este creat automat cu crearea cotainerului ![](/images/FEM_Analysis.svg) [Container de analiză](/FEM_Analysis "FEM Analysis"). Altfel utilizați Solve → Solver CalculiX Standard sau apăsați S apoi tastele X

1. Opțional setați proprietățile de date ale obiectului ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXccxTools obiect
2. Faceți dublu clic pe ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXccxTools obiect
3. Selectați tipul analizei
4. Faceți clic pe Write .inp file
5. Faceți clic pe Run CalculiX

## Opţiuni

Folosind  Edit .inp file, puteți afișa și edita manual fișierul de intrare CalculiX înainte de a rula analiza. În acest caz ar putea fi util să utilizați parametrul "Split Input Writer = true".

## Proprietăți

Default values can be set in the menu Edit → Preferences → FEM → CalculiX

* Date**Analysis Type**:
  + static
  + frecvent
  + termomech - pentru sarcini mecanice și termice

* Date**Beam Reduced Integration** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):
  + true - uses beam elements with reduced integration (B31R or B32R), required when pipe beam section is used, can also make it possible to obtain [accurate results with plasticity](https://forum.freecad.org/viewtopic.php?t=61233)
  + false - uses regular (fully-integrated) beam elements

* Date**Beam Shell Result Output 3D**: rețineți că CalculiX extinde intern elementele 1D și 2D în elemente 3D pentru a realiza analiza FE
  + false - rezultatele elementelor 1D și 2D vor fi medii la nodurile rețelei originale 1D sau 2D (adică fascicolul curbat curbat va arăta 0 solicitări nodale datorită mediei)
  + true - rețeaua rezultată va conține elemente 1D și 2D extins la elementele 3D

* Date**Buckling Accuracy** - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): defines the accuracy of buckling eigenvalue evaluation. In most cases it can be left with the default value (0.01) but sometimes it might be necessary to lower it (e.g. to 0.0001) to capture the first eigenvalue.

* Date**Eigenmode High Limit**: Valorile proprii deasupra acestei limite nu vor fi calculate

* Date**Eigenmode Low Limit**: Valorile proprii mai jos de aceste limite nu vor fi calculate

* Date**Eigenmodes Count**: numărul de moduri proprii minime care urmează a fi calculate

* Date**Geometric Nonlinearity**:
  + linear - o analiză liniară va fi efectuată dacă modelul nu conține material neliniar
  + neliniare - se va efectua o analiză neliniară

* Date**Iterations Control parameter Cutb**: definește a doua linie de parametri avansați de iterație sub cartela \* CONTROLS, utilizată atunci când "Iterations Control Parameter Time Use" este adevărată

* Date**Iterations Control Parameter Iter**: definește prima linie de parametri avansați de iterație sub cartela \* CONTROLS, folosită când "Iterations Control Time Parameter Use" este adevărată

* Date**Iterations Control Parameter Time Use**
  + true - activează "Iterations Control Parameter Cutb" și "Iterations Control Parameter Iter"

* Date**Iterations Thermo Mech Maximum**: numărul maxim de creșteri în analizele termomecanice după care lucrarea va fi oprită.

* Date**Iterations User Defined Incrementations**:
  + true - controlul incrementării automate va fi oprit prin parametrul DIRECT
  + false - controlul incrementării va fi automat

* Date**Iterations User Defined Time Step Length**:
  + true - activează parametrii "Time End" și "Time Initial Step"

* Date**Material Nonlinearity**:
  + în analiză vor fi incluse proprietăți liniare numai liniare
  + vor fi utilizate proprietăți neliniare - materiale neliniare ![](/images/FEM_MaterialMechanicalNonlinear.png) **[Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear")** object

Date **Matrix Solver Type**: tipul rezolverului pentru rezolvarea sistemului de ecuații în analiza FE. Este posibil să afecteze semnificativ viteza de calcul și cerințele de memorie. Capacitatea depinde de modelul dvs. FE și de hardware-ul disponibil

* + implicit - selectează automat rezolvatorul de matrice în funcție de solverii disponibili (probabil vor fi Spooles)
  + spooles - Solver direct cu suportul mai multor CPU-uri. Numărul de procesoare trebuie să fie setat în  Edit →  Preferences →  FEM →  CalculiX Solver implicit → Numărul CPU-urilor de utilizat)
  + iterativescaling - solver iterativ cu cele mai mici cerințe de memorie, potrivit dacă modelul conține mai mult elemente 3D
  + iterativecholesky - iterativ solver cu precondiționare cu și cu cerințe de memorie redusă, potrivite dacă modelul conține mai mult elemente 3D

* Date**Model Space** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): switches between 3D and 2D analyses, the latter require surface geometry on the XY plane (on the right of the Y axis in the axisymmetric case) with [thickness definition](/FEM_ElementGeometry2D "FEM ElementGeometry2D") (value ignored in the axisymmetric case) and proper boundary conditions ([displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") with degrees of freedom X and Y has to be used instead of [fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed")) and in-plane loads applied to edges
  + 3D - three-dimensional solid/shell/beam elements are used
  + plane stress - plane stress 2D solid elements are used
  + plane strain - plane strain 2D solid elements are used
  + axisymmetric - axisymmetric 2D solid elements are used

* Date**Output Frequency** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): defines the frequency of results writing in increments (the default setting of 1 means that the results are written every increment, setting 2 would save the results every 2 increments and so on), particularly useful for nonlinear and transient simulations, helps reduce the clutter in the tree since currently a pair of results objects (CCX\_Results and Pipeline\_CCX\_Results) is created for each results frame

* Date**Split Input Writer**:
  + false - scrie intrări întregi într-un fișier \* .inp pentru a fi utilizat de CalculiX solver
  + adevărat - split solver intrări în mai multe fișiere \* .inp, care pot clarifica editare manuală

* Date**Thermo Mechanical Steady State**:
  + adevărată - analiză termo-mecanică la starea de echilibru
  + fals - analiză termo-mecanică tranzitorie

* Date**Thermo Mech Type** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):
  + coupled - coupled thermo-mechanical analysis
  + uncoupled - uncoupled thermo-mechanical analysis
  + pure heat transfer - purely thermal analysis (*\*HEAT TRANSFER*)

* Date**Time End**: perioada de timp a pasului, folosită atunci când parametrul "Iterații creșteri definite de utilizator" sau "Iterații definit de utilizator" este adevărat

* Date**Time Initial Step**: incrementarea timpului inițial a pasului, folosită atunci când parametrul "Iterații creșteri definite de utilizator" sau "Iterații de lungime a pasului definit de utilizator" este adevărat

* Date**Time Maximum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): maximum time increment of the step, used when parameter Date**Iterations User Defined Incrementations** or Date**Iterations User Defined Time Step Length** is *true*

* Date**Time Minimum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): minimum time increment of the step, used when parameter Date**Iterations User Defined Incrementations** or Date**Iterations User Defined Time Step Length** is *true*

* Date**Working Dir**: calea către directorul de lucru care va fi folosit pentru fișierele de analiză CalculiX.

## Limite

When running a CalculiX, you might end up with **error 4294977295**. This means you don't have enough RAM space. You have then 2 options:

1. reduce the number of mesh nodes, preferably by omitting geometry that is not absolutely necessary for your analysis
2. buy more RAM for your PC

## Notă

Documentația originală CalculiX poate fi găsită la <http://dhondt.de/> in the "ccx" paragraph.

## Scrip-Programare

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverCalculixCxxtools/ro&oldid=1528962>"