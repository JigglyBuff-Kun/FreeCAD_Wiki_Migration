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

## Descripción

CalculiXccxTools permite usar el solucionador [CalculiX](http://dhondt.de/). Puedes usarlo para

1. configurar los parámetros de análisis
2. seleccionar directorio de trabajo
3. Ejecutar el solucionador de CalculiX.

## Utilización

1. ![](/images/FEM_Solver.png) CalculiXccxToolsobjeto se crea automáticamente con la creación de ![](/images/FEM_Analysis.png) [Analysis container](/FEM_Analysis "FEM Analysis"). De lo contrario utilizar Solve → Solver CalculiX Standard , X keyso presione S luego las teclas X
2. Opcionalmente, configure las propiedades de datos del objeto ![](/images/FEM_Solver.png) CalculiXccxTools
3. Haga doble clic en el objeto ![](/images/FEM_Solver.png) CalculiXccxTools
4. Seleccione el tipo de análisis
5. Haga clic en Write .inp file
6. Haga clic en Run CalculiX

## Opciones

Al usar Edit.inp file puede mostrar y editar el archivo de entrada de CalculiX manualmente antes de ejecutar el análisis. En este caso, puede ser útil usar el parámetro "Split Input Writer = true".

## Propiedades

Los valores por defecto se pueden configurar en el menú. Edit → Preferences → FEM → CalculiX

* Datos**Analysis Type**:
  + estática
  + frecuencia
  + Thermomech - para cargas mecánicas y térmicas.

* Datos**Beam Reduced Integration** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):
  + true - uses beam elements with reduced integration (B31R or B32R), required when pipe beam section is used, can also make it possible to obtain [accurate results with plasticity](https://forum.freecad.org/viewtopic.php?t=61233)
  + false - uses regular (fully-integrated) beam elements

* Datos**Beam Shell Result Output 3D**:

tenga en cuenta que CalculiX expande internamente los elementos 1D y 2D en elementos 3D para realizar el análisis FE

* + falso: los resultados de los elementos 1D y 2D se promediarán a los nodos de la malla 1D o 2D original (es decir, el haz puramente curvado mostrará 0 esfuerzos nodales debido al promediado)
  + verdadero - la malla resultante contendrá elementos 1D y 2D expandidos a elementos 3D

* Datos**Buckling Accuracy** - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): defines the accuracy of buckling eigenvalue evaluation. In most cases it can be left with the default value (0.01) but sometimes it might be necessary to lower it (e.g. to 0.0001) to capture the first eigenvalue.

* Datos**Eigenmode High Limit**: Los valores propios por encima de este límite no serán calculados

* Datos**Eigenmode Low Limit**: Los valores propios por debajo de este límite no serán calculados

* Datos**Eigenmodes Count**: Número de modos propios más bajos para calcular

* Datos**Geometric Nonlinearity**:
  + el análisis lineal - lineal se realizará si el modelo no contiene material no lineal
  + no lineal - se realizará análisis no lineal

* Datos**Iterations Control parameter Cutb**: define la segunda línea de parámetros de iteración avanzada en la tarjeta \* CONTROLS, utilizada cuando "Iterations Control Parameter Time Use" es verdadero

* Datos**Iterations Control Parameter Iter**: define la primera línea de parámetros de iteración avanzada en la tarjeta \* CONTROLS, utilizada cuando "Iterations Control Parameter Time Use" es verdadero

* Datos**Iterations Control Parameter Time Use**
  + true: activa "Iterations Control Parameter Cutb" y "Iterations Control Parameter Iter"

* Datos**Iterations Thermo Mech Maximum**:Número máximo de incrementos en el análisis termomecánico después del cual se detendrá el trabajo.

* Datos**Iterations User Defined Incrementations**:
  + verdadero - el control de incremento automático se desactivará con el parámetro DIRECTO
  + falso - el control de incremento será automático

* Datos**Iterations User Defined Time Step Length**:
  + true: activa los parámetros "Time End" y "Time Initial Step"

* Datos**Material Nonlinearity**:
  + lineal: solo se incluirán propiedades de material lineales en el análisis
  + no lineal - se usarán propiedades de materiales no lineales de![](/images/FEM_MaterialMechanicalNonlinear.png) **[Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear")** object

* Datos **Matrix Solver Type**: tipo de solucionador para resolver el sistema de ecuaciones dentro del análisis FE. Puede afectar significativamente la velocidad de cálculo y las demandas de memoria. La idoneidad depende de su modelo FE y hardware disponible
  + predeterminado: selecciona automáticamente el solucionador de matrices dependiendo de los solucionadores disponibles (probablemente será Spooles)
  + spooles - solucionador directo con soporte de múltiples CPUs. El número de CPU debe configurarse en  Edit →  Preferences →  FEM →  CalculiX → Valores predeterminados del solucionador → Número de CPU para usar)
  + iterativescaling: solucionador iterativo con menos demandas de memoria, adecuado si el modelo contiene principalmente elementos 3D
  + iterativecholesky - solucionador iterativo con preacondicionamiento con y con poca demanda de memoria, adecuado si el modelo contiene principalmente elementos 3D

* Datos**Model Space** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): switches between 3D and 2D analyses, the latter require surface geometry on the XY plane (on the right of the Y axis in the axisymmetric case) with [thickness definition](/FEM_ElementGeometry2D "FEM ElementGeometry2D") (value ignored in the axisymmetric case) and proper boundary conditions ([displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") with degrees of freedom X and Y has to be used instead of [fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed")) and in-plane loads applied to edges
  + 3D - three-dimensional solid/shell/beam elements are used
  + plane stress - plane stress 2D solid elements are used
  + plane strain - plane strain 2D solid elements are used
  + axisymmetric - axisymmetric 2D solid elements are used

* Datos**Output Frequency** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): defines the frequency of results writing in increments (the default setting of 1 means that the results are written every increment, setting 2 would save the results every 2 increments and so on), particularly useful for nonlinear and transient simulations, helps reduce the clutter in the tree since currently a pair of results objects (CCX\_Results and Pipeline\_CCX\_Results) is created for each results frame

* Datos**Split Input Writer**:
  + falso: escriba toda la entrada en un archivo \* .inp para ser utilizado por el solucionador de CalculiX
  + true - divide las entradas del solucionador en más archivos \* .inp, que pueden aclarar la edición manual

* Datos**Thermo Mechanical Steady State**:
  + verdadero - análisis termo-mecánico de estado estable
  + Falsa - Análisis termo-mecánico transitorio.

* Datos**Thermo Mech Type** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):
  + coupled - coupled thermo-mechanical analysis
  + uncoupled - uncoupled thermo-mechanical analysis
  + pure heat transfer - purely thermal analysis (*\*HEAT TRANSFER*)

* Datos**Time End**: período de tiempo del paso, utilizado cuando el parámetro "Iteraciones incrementadas definidas por el usuario" o "Iteraciones definidas por el usuario Tiempo de paso" es verdadero

* Datos**Time Initial Step**: incremento de tiempo inicial del paso, que se usa cuando el parámetro "Iteraciones de incrementos definidos por el usuario" o "Iteraciones de tiempo de paso definidas por el usuario" es verdadero

* Datos**Time Maximum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): maximum time increment of the step, used when parameter Datos**Iterations User Defined Incrementations** or Datos**Iterations User Defined Time Step Length** is *true*

* Datos**Time Minimum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): minimum time increment of the step, used when parameter Datos**Iterations User Defined Incrementations** or Datos**Iterations User Defined Time Step Length** is *true*

* Datos**Working Dir**: Ruta al directorio de trabajo que se utilizará para los archivos de análisis de CalculiX.

## Limitaciones

When running a CalculiX, you might end up with **error 4294977295**. This means you don't have enough RAM space. You have then 2 options:

1. reduce the number of mesh nodes, preferably by omitting geometry that is not absolutely necessary for your analysis
2. buy more RAM for your PC

## Notas

La documentación original de CalculiX se puede encontrar en <http://dhondt.de/> in the "ccx" paragraph.

## Programación

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverCalculixCxxtools/es&oldid=1528963>"