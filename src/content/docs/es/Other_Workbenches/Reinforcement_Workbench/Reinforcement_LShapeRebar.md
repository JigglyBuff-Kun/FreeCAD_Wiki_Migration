---
title: Arch Barra de Refuerzo en forma de L
---
|  |
| --- |
| Arch Barra de Refuerzo en forma de L |
| Ubicación del menú |
| Arch → Rebar tools |
| Bancos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es"), [BIM](/BIM_Workbench/es "BIM Workbench/es") |
| Acceso directo |
| None |
| Ver también |
| [Barra de refuerzo doblada](/Arch_Rebar_BentShape/es "Arch Rebar BentShape/es"), [Arch Rebar/es](/Arch_Rebar/es "Arch Rebar/es") |
|  |
| Este comando es parte del **Reinforcement AddOn**, que puedes instalar a través del menú Tools → Addons Manager |
|  |

## Descripción

La herramienta  ![](/images/Arch_Rebar_LShape.png) L'Shaped Rebar permite al usuario crear la barra de refuerzo en forma de L en el elemento estructural.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_LShape_example.png)

![](/images/LShapeRebarNew.png)

## Como utilizar

1. Crear un elemento  [structure](/Arch_Structure "Arch Structure")
2. Seleccione cualquier cara de la estructura
3. A continuación, seleccione  ![](/images/Arch_Rebar_LShape.png) LShape Rebar desde las herramientas de la barra de refuerzo
4. Aparecerá un panel de tareas en el lado izquierdo de la pantalla como se muestra a continuación ![](/images/LShapeDialog.png)
5. Seleccione la orientación deseada
6. Proporcione las entradas como la cubierta frontal, la cubierta lateral izquierda, la cubierta lateral derecha, la cubierta inferior, la cubierta superior, el redondeo y el diámetro de la barra de refuerzo
7. Seleccione el modo de distribución, ya sea cantidad o espaciado
8. Si se selecciona el espaciado, un usuario también puede optar por  [espaciado personalizado](/Custom_Spacing "Custom Spacing")
9. La selección de la cara seleccionada se usa para verificar o cambiar la cara de la distribución de barras de refuerzo
10. Haga clic en  OK o  Apply para generar las barras de refuerzo
11. Haga clic en  Cancel para salir del panel de tareas

![](/images/LShapeDialog.png)

Task panel for the tool

## Propiedades

* DATOS **Orientation**: Decide la orientación de la barra de refuerzo (como una parte inferior, superior, derecha e izquierda).
* DATOS **Front Cover**: la distancia entre la barra de refuerzo y la cara seleccionada.
* DATOS **Right Cover**: la distancia entre el extremo derecho de la barra de refuerzo a la derecha de la estructura.
* DATOS **Left Cover**: la distancia entre el extremo izquierdo de la barra de refuerzo a la cara izquierda de la estructura.
* DATOS **Bottom Cover**: la distancia entre las barras de refuerzo desde la cara inferior de la estructura.
* DATOS **Top Cover**: la distancia entre barras de refuerzo desde la cara superior de la estructura.
* DATOS **Rounding**: Un valor de redondeo que se aplicará a las esquinas de las barras, expresado en veces el diámetro.
* DATOS **Amount**: la cantidad de barras de refuerzo.
* DATOS **Spacing**: la distancia entre los ejes de cada barra.

## Programación

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

La herramienta  ![](/images/Arch_Rebar_LShape.png) L'Shaped Rebar puede utilizarse en [macros/es](/Macros/es "Macros/es") y desde la consola de python mediante la siguiente función:

```
Rebar = makeLShapeRebar(f_cover, b_cover, l_cover, r_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom Left",
                        structure=None, facename=None):

```

* La barra de refuerzo LShape tiene cuatro orientaciones diferentes:
  + Abajo a la derecha
  + Abajo a la izquierda
  + Parte superior derecha
  + Arriba a la izquierda
* Agrega un objeto de barra de refuerzo LShape al objeto estructural dado.
* Si no se proporciona Estructura y Facename, tomará la cara seleccionada por el usuario como entrada.
* Aquí el argumento de CoverAlong es tener tipo tupla.
* Devuelve el nuevo objeto Rebar.

### Example

```
import FreeCAD, Arch, LShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = LShapeRebar.makeLShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom Left", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = LShapeRebar.makeLShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom Left", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editLShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` is a previously created `LShapeRebar` object.
* The other parameters are the same as required by the `makeLShapeRebar()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import LShapeRebar

LShapeRebar.editLShapeRebar(Rebar, 50, 50, 20, 20,
                            12, 50, 6, True, 5, "Top Right")

LShapeRebar.editLShapeRebar(Rebar2, 50, 50, 20, 20,
                            12, 70, 6, True, 5, "Top Right")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_LShapeRebar/es&oldid=1433647>"