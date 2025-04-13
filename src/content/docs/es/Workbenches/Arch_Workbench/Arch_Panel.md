---
title: Arch Panel
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Panel |
| Ubicación en el Menú |
| Arch → Panel Tools → Panel |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P A |
| Introducido en versión |
| 0.15 |
| Ver también |
| [Arch Panel Cut](/Arch_Panel_Cut/es "Arch Panel Cut/es"), [Arch Panel Sheet](/Arch_Panel_Sheet/es "Arch Panel Sheet/es") |
|  |

## Descripción

Esta herramienta le permite construir todo tipo de elementos tipo panel, típicamente para construcciones de paneles como el proyecto [WikiHouse](http://www.wikihouse.cc/), pero también para todo tipo de objetos que se basan en un perfil plano.

![](/images/Arch_Panel_example.jpg)

*La imagen de arriba muestra una serie de objetos del panel, simplemente hechos de contornos 2D importados de un archivo DXF. Luego se pueden rotar y ensamblar para crear estructuras.*

Desde la versión 0.17, el Arch panel también se puede usar para crear perfiles corrugados o trapezoidales:

![](/images/Arch_panel_wave.jpg)

## Utilización

1. Seleccione una forma 2D (borrador de objeto, cara o boceto) - opcional
2. Presione el botón ![](/images/Arch_Panel.png) Arch Panel, o presione P luego las teclas A
3. Ajuste las propiedades deseadas

## Limitaciones

* Actualmente no existe un sistema automático para producir placas de corte 2D a partir de objetos del panel, pero esa característica está en los planes y se agregará en el futuro.
* Esta herramienta no está disponible en versiones de FreeCAD antes de 0.15

## Opciones

* Los paneles comparten las propiedades y comportamientos comunes de todos [Arch Components](/Arch_Component/es "Arch Component/es")
* El grosor de un panel se puede ajustar después de la creación
* Presione ESC o el botón **Cancel** para cancelar el comando actual.
* Hacer doble clic en el panel en la vista de árbol después de haber sido creado le permite ingresar al modo de edición y acceder y modificar sus adiciones y sustracciones
* Es posible crear paneles formados automáticamente por más de una capa de un material, al aumentar su propiedad sheets/hojas.
* Los paneles pueden hacer uso de [Multi-Materials](/Arch_MultiMaterial/es "Arch MultiMaterial/es"). Al usar un multi-material, el panel se convertirá en multicapa, utilizando los espesores especificados por el multi-material. Cualquier capa con un espesor de cero tendrá su espesor definido automáticamente por el espacio restante definido por el propio valor de Grosor del Panel, después de restar las otras capas.

## Propiedades

An Arch Panel object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

* DATOS**Length**: la longitud del panel
* DATOS**Width**: El ancho del panel
* DATOS**Thickness**: el grosor del panel
* DATOS**Area**: el área del panel (automático)
* DATOS**Sheets**: la cantidad de hojas de material de las que está hecho el panel
* DATOS**Wave Length**: la longitud de la ola para paneles corrugados
* DATOS**Wave Height**: la altura de la ola para paneles corrugados
* DATOS**Wave Type**: el tipo de onda para paneles corrugados, curvados o trapezoidales
* DATOS**Wave direction**: la orientación de las ondas para paneles corrugados

## Scripting

## Programación

La herramienta Panel puede usarse en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

* Creates a `Panel` object from the given `baseobj`, which is a closed profile, and the given extrusion `thickness`.
  + If no `baseobj` is given, you can provide the numerical values for the `length`, `width`, and `thickness` to create a block panel.
* If a `placement` is given, it is used.

Ejemplo:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Tutoriales

* [Wikihouse porting tutorial](/Wikihouse_porting_tutorial/es "Wikihouse porting tutorial/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/es&oldid=1539692>"