---
title: Arch Techo
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                        |
| ------------------------------------------------------ |
| Arch Techo                                             |
| Ubicación en el Menú                                   |
| Arquitectura → Techo                                   |
| Entornos de trabajo                                    |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto                           |
| R F                                                    |
| Introducido en versión                                 |
| -                                                      |
| Ver también                                            |
| _Ninguno_                                              |
|                                                        |

## Descripción

La herramienta Techo le permite crear un techo inclinado a partir de un wire seleccionado. El objeto del techo creado es paramétrico, manteniendo su relación con el objeto base. Tenga en cuenta que esta herramienta todavía está en desarrollo y puede fallar con formas muy complejas. El principio es que cada borde se ve asignando un perfil de techo (pendiente, ancho, saliente, espesor...).

**Note:** This tool is still in development, and might fail with very complex shapes.

![](/images/RoofExample.png)

![](/images/RoofExample.png)

## Utilización

1. Crea un wire siguiendo la dirección en sentido contrario a las agujas del reloj y selecciónalo.
2. \- ![](/images/CounterclockwiseWire.png)
3. Presiona el botón ![](/images/Arch_Roof.png) Arch Roof, o presiona R luego las teclas F
4. El objeto de techo predeterminado podría tener una forma extraña, es porque la herramienta no tiene toda la información necesaria.
5. Después de crear el techo predeterminado, haga doble clic en el objeto en la vista de árbol para acceder y editar todas las propiedades. El ángulo debe estar entre 0 y 90.
6. \- ![](/images/RoofTable.png)
7. Cada línea corresponde a un panel de techo. Entonces puede establecer las propiedades que desea para cada panel de techo.
8. Para ayudarlo, puede establecer Ángulo o Run en 0 y definir un Id relativo, esto hace cálculos automáticos para encontrar los datos relativos al Id relativo.
9. Funciona así:
   1. Si Angle = 0 y Run = 0, el perfil es idéntico al perfil relativo.
   2. Si Angle = 0, el ángulo se calcula de modo que la altura sea la misma que el perfil relativo.
   3. Si Run = 0, Run se calcula para que la altura sea la misma que el perfil relativo.
10. Al final, establece un ángulo de 90 ° para hacer un frontón.
11. \- ![](/images/RoofProfil.png)
12. **También puedes consultar este video**: <https://www.youtube.com/watch?v=4Urwru71dVk>

## Usage (solid base)

If your roof has a complex shape (e.g. contains pitched windows or other non-standard features) you can create a custom solid object using various other FreeCAD workbenches ([Part](/Part_Workbench "Part Workbench"), [Sketcher](/Sketcher_Workbench "Sketcher Workbench") etc.). And then use this solid as the Datos**Base** object of your roof:

1. Select the solid base object.
2. Press the ![](/images/Arch_Roof.svg) [Arch Roof](/Arch_Roof "Arch Roof") button, or press R then F keys.

## Subtracting a roof

Roofs have an automatically generated subtraction volume ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") for roofs with a solid base). When a roof is [removed](/Arch_Remove "Arch Remove") from the walls of a building, both the roof itself as well as everything above it is subtracted from the walls.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): It is possible to override the automatic subtraction volume by setting the Datos**Subvolume** property of the roof to a custom solid object.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Solid-based roof before (1st image) and after (2nd image) [removing](/Arch_Remove "Arch Remove") it from walls.  
The 3rd image shows the generated subtraction volume.

## Propiedades

An Arch Roof object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Roof

- DATOS**Angles**: Lista del ángulo de inclinación del panel de techo (un ángulo para cada borde en el wire).
- DATOS**Runs**: Lista del ancho del panel del techo (una ejecución para cada borde en el wire).
- DATOS**IdRel**: Lista de la relación Id El ángulo de inclinación del techo
- DATOS**Thickness**: Lista de espesores del panel de techo. (un espesor para cada borde en el wire).
- DATOS**Overhang**: Lista del saliente del panel del techo (un saliente para cada borde en el wire).
- DATOS**Face**: El índice de la cara del objeto base que se utilizará #No realmente utilizado

## Scripting

## Programación

La herramientas techo se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando las siguientes funciones:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

: Hace un techo basado en un wire cerrado. Puede proporcionar una lista de ángulos, ejecutar, idrel, espesor, voladizo para cada borde en el wire para definir la forma del techo. El valor predeterminado para el ángulo es 45 y la lista se completa automáticamente para que coincida con el número de bordes en el wire.

Ejemplo:

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/es&oldid=1539738>"
