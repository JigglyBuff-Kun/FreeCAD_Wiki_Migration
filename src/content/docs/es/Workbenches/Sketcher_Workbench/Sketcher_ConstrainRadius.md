---
title: Croquizador RestringirRadius
---
|  |
| --- |
| Constraint Radius |
| Ubicación en el Menú |
| Croquizador → Restricciones del Croquizador → Radio |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es"), [Diseño de Piezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Distancia](/Sketcher_ConstrainDistance/es "Sketcher ConstrainDistance/es"), [Horizontal](/Sketcher_ConstrainHorizontal/es "Sketcher ConstrainHorizontal/es"), [Vertical](/Sketcher_ConstrainVertical/es "Sketcher ConstrainVertical/es") |
|  |

## Descripción

Esta restricción restringe el valor del radio de una circunferencia o un arco a un valor específico. Sólo se puede restringir un arco o una circunferencia de cada vez.

![](/images/Sketcher_ConstrainRadius_example.png)

## Utilización

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

Selecciona un arco o una circunferencia en el croquis pulsando encima (se volverá de color verde oscuro).

![](/images/ConstrainRadius2.png)

Aplica la restricción pulsando el icono de la Restricción de Radio ![](/images/Sketcher_ConstrainRadius.png) en la barra de herramientas del Croquizador o selecciona la Restricción de Radio en el submenú de Restricciones del módulo del Croquizador (o Diseño de Piezas dependiendo de que entorno esté seleccionado).

![](/images/ConstrainRadius3.png)

El radio se restringe a su valor actual al aplicar la restricción.

Para cambiar el valor de la restricción haz doble clic sobre ella en la vista 3D o en la pestaña de Tareas. Esto abrirá una ventana en la que se puede modificar el valor asignado.

![](/images/ConstrainRadius4.png)

Introduce el valor deseado para el radio y pulsa OK para establecer el valor a la restricción.

![](/images/ConstrainRadius5.png)

El valor de la restricción se establecerá al valor indicado en la ventana.

### Run-once mode

See [Sketcher ConstrainRadiam](/Sketcher_ConstrainRadiam#Run-once_mode "Sketcher ConstrainRadiam").

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `ArcOrCircle`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/es&oldid=1461128>"