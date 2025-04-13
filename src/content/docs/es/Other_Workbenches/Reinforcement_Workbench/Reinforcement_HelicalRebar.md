---
title: Arch Barra de Refuerzo Helicoidal
---
|  |
| --- |
| Arch Rebar Helical |
| Ubicación del menú |
| Arch → Rebar tools |
| Bancos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Acceso directo |
| None |
| Ver también |
| [Arch Rebar](/Arch_Rebar/es "Arch Rebar/es") |
|  |
| Este comando es parte del **Reinforcement AddOn**, que puedes instalar a través del menú Tools → Addons Manager |
|  |

## Descripción

La herramienta  ![](/images/Arch_Rebar_Helical.png) Helical Rebar permite al usuario crear una barra de refuerzo helicoidal en el elemento estructural.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

:   ![](/images/Arch_Rebar_Helical_example.png)

![](/images/HelicalRebar.png)

## Como utilizar

1. Crear un elemento [structure](/Arch_Structure/es "Arch Structure/es")
2. Seleccione cualquier cara de la estructura
3. A continuación, seleccione ![](/images/Arch_Rebar_Helical.png) Helical Rebar desde las herramientas de la barra de refuerzo
4. Aparecerá un panel de tareas en el lado izquierdo de la pantalla como se muestra a continuación ![](/images/HelicalRebarDialog.png)
5. Seleccione la orientación deseada
6. Proporcione las entradas como la cubierta frontal, la cubierta lateral derecha, la cubierta lateral izquierda, la cubierta inferior y el diámetro de la barra de refuerzo
7. Seleccione el modo de distribución, ya sea cantidad o espaciado
8. Si se selecciona el espaciado, un usuario también puede optar por [espaciado personalizado](/Custom_Spacing/es "Custom Spacing/es")
9. La selección de la cara seleccionada se usa para verificar o cambiar la cara de la distribución de barras de refuerzo
10. Haga clic en OK o Apply para generar las barras de refuerzo
11. Haga clic en Cancel para salir del panel de tareas

![](/images/HelicalRebarDialog.png)

Task panel for the tool

## Propiedades

* DATOS**Side Cover**: la distancia entre las barras de refuerzo a la cara curva.
* DATOS**Top Cover**: la distancia entre barras de refuerzo desde la cara superior de la estructura.
* DATOS**Bottom Cover**: la distancia entre las barras de refuerzo desde la cara inferior de la estructura.
* DATOS**Pitch**: el pitch de una hélice es la altura de un giro completo de hélice, medido en paralelo al eje de la hélice.
* DATOS**Diameter**: Diámetro de la barra de refuerzo.

## Programación

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

La herramienta ![](/images/Arch_Rebar_Helical.png) Helical Rebar puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de python utilizando la siguiente función:

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* Agrega un objeto de barra de refuerzo recto al objeto estructural dado.
* Si no se proporciona Estructura y nombre de cara, tomará la cara seleccionada por el usuario como entrada.
* Aquí el argumento de CoverAlong es del tipo tupla.
* Devuelve el nuevo objeto de refuerzo.

### Example

```
import FreeCAD, Draft, Arch, HelicalRebar

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = HelicalRebar.makeHelicalRebar(10, 50, 8, 50, 50, structure, "Face2")

```

### Edition of the rebar

You can change the properties of the rebar with the following function

```
editHelicalRebar(Rebar, s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* `Rebar` is a previously created `HelicalRebar` object.
* The other parameters are the same as required by the `makeHelicalRebar()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/es&oldid=1433637>"