---
title: Arch Barra de Refuerzo de Estribo
---
|  |
| --- |
| Arch Rebar Stirrup |
| Ubicación en el Menú |
| Arch → Rebar tools |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es"), [BIM](/BIM_Workbench/es "BIM Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Helical Rebar](/Arch_Rebar_Helical/es "Arch Rebar Helical/es"), [Rebar](/Arch_Rebar/es "Arch Rebar/es") |
|  |

## Descripción

La herramienta  ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar permite al usuario crear una barra de refuerzo de estribo en el elemento estructural.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_Stirrup_example.png)

![](/images/Stirrup.png)

## Como utilizar

1. Crear un elemento [structure](/Arch_Structure/es "Arch Structure/es")
2. Seleccione cualquier cara de la estructura
3. A continuación, seleccione ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar desde las herramientas de la barra de refuerzo
4. Aparecerá un panel de tareas en el lado izquierdo de la pantalla, como se muestra a continuación ![](/images/StirrupDialog.png)
5. Seleccione la orientación deseada
6. Proporcione las entradas como cubierta izquierda, cubierta derecha, cubierta superior, parte inferior, cubierta frontal, ángulo doblado, factor doblado, redondeo y diámetro de la barra de refuerzo
7. Seleccione el modo de distribución, ya sea cantidad o espaciado
8. Si se selecciona el espaciado, un usuario también puede optar por [espaciado personalizado](/Custom_Spacing/es "Custom Spacing/es")
9. La selección de la cara seleccionada se usa para verificar o cambiar la cara de la distribución de barras de refuerzo
10. Haga clic en OK o Apply para generar las barras de refuerzo
11. Haga clic en Cancel para salir del panel de tareas

![](/images/StirrupDialog.png)

Task panel for the tool

## Propiedades

* DATOS**Front Cover**: la distancia entre la barra de refuerzo y la cara seleccionada.
* DATOS**Right Cover**: la distancia entre el extremo derecho de la barra de refuerzo a la derecha de la estructura.
* DATOS**Left Cover**: la distancia entre el extremo izquierdo de la barra de refuerzo a la cara izquierda de la estructura.
* DATOS**Bottom Cover**: la distancia entre las barras de refuerzo desde la cara inferior de la estructura.
* DATOS**Top Cover**: la distancia entre barras de refuerzo desde la cara superior de la estructura.
* DATOS**Bent Angle**: ángulo doblado define el ángulo en los extremos de un estribo.
* DATOS**Bent Factor**: Bent Factor define la longitud del extremo del estribo.
* DATOS**Amount**: la cantidad de barras de refuerzo.
* DATOS**Spacing**: la distancia entre los ejes de cada barra.

## Programación

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

La herramienta ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de python utilizando la siguiente función:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

* Agrega un objeto de barra de refuerzo Estribo al objeto estructural dado.
* Si no se proporciona Estructura y nombre de cara, tomará la cara seleccionada por el usuario como entrada.
* Aquí el argumento de CoverAlong es tener tipo tupla.
* Devuelve el nuevo objeto de refuerzo.

Ejemplo:
Creando la barra de refuerzo de estribo.

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Edition of the rebar

Cambiando las propiedades de la barra de refuerzo de estribo.

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

* `Rebar` is a previously created `StirrupRebar` object.
* The other parameters are the same as required by the `makeStirrup()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/es&oldid=1433666>"