---
title: Arch Barra de Refuerzo en Forma de U
---
|  |
| --- |
| Arch Barra de Refuerzo en Forma de U |
| Ubicación del menú |
| Arch → Rebar tools |
| Bancos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Acceso directo |
| None |
| Ver también |
| [LShape Rebar](/Arch_Rebar_LShape/es "Arch Rebar LShape/es") |
|  |
| Este comando es parte del **Reinforcement AddOn**, que puedes instalar a través del menú Tools → Addons Manager |
|  |

## Descripción

La herramienta  ![](/images/UShapeRebar.png) UShape Rebar permite al usuario crear una barra de refuerzo de forma de U en el elemento estructural.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_UShape_example.png)

![](/images/Footing_UShapeRebar.png)

## Utilización

1. Crear un elemento  [structure](/Arch_Structure "Arch Structure")
2. Seleccione cualquier cara de la estructura
3. A continuación, seleccione  ![](/images/UShapeRebar.png) UShape Rebar desde las herramientas de la barra de refuerzo
4. Aparecerá un panel de tareas en el lado izquierdo de la pantalla como se muestra a continuación ![](/images/UShapeDialog.png)
5. Seleccione la orientación deseada
6. Proporcione las entradas como la cubierta frontal, la cubierta lateral derecha, la cubierta lateral izquierda, la cubierta inferior, la cubierta superior, el factor de redondeo y el diámetro de la barra de refuerzo
7. Seleccione el modo de distribución, ya sea cantidad o espaciado
8. Si se selecciona el espaciado, un usuario también puede optar por  [espaciado personalizado](/Custom_Spacing "Custom Spacing")
9. La selección de la cara seleccionada se usa para verificar o cambiar la cara de la distribución de barras de refuerzo
10. Haga clic en  OK o  Apply para generar las barras de refuerzo
11. Haga clic en  Cancel para salir del panel de tareas

![](/images/UShapeDialog.png)

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

## Scripting

## Programación

La herramienta ![](/images/UShapeRebar.png) UShape Rebar puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de python utilizando la siguiente función:

```
Rebar = makeUShapeRebar(f_cover, b_cover, r_cover, l_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                        structure=None, facename=None)

```

* La barra de refuerzo de forma de U tiene cuatro orientaciones diferentes:
  + Fondo
  + Parte superior
  + Correcto
  + Izquierda
* Agrega un objeto de barra de refuerzo de forma de US al objeto estructural dado.
* Si no se proporciona Estructura y Facename, tomará la cara seleccionada por el usuario como entrada.
* Devuelve el nuevo objeto Rebar.

Ejemplo:
Creando la barra de refuerzo de forma de U.

```
import FreeCAD, Arch, UShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = UShapeRebar.makeUShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = UShapeRebar.makeUShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

Cambio de propiedades de la barra de refuerzo de forma de U.

```
editUShapeRebar(Rebar, f_cover, b_cover, r_cover, l_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` is a previously created `UShapeRebar` object.
* The other parameters are the same as required by the `makeUShapeRebar()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import UShapeRebar

UShapeRebar.editUShapeRebar(Rebar, 50, 50, 20, 20,
                            16, 20, 5, True, 5, "Top")

UShapeRebar.editUShapeRebar(Rebar2, 70, 50, 20, 20,
                            16, 70, 5, True, 5, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_UShapeRebar/es&oldid=1433689>"