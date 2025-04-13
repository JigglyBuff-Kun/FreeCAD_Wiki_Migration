---
title: Arch MaterialMúltiple
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseBIM Materialinstead.
:::

|  |
| --- |
| Arch MultiMaterial |
| Ubicación en el Menú |
| Arch → Multi-Material |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es"), [BIM](/BIM_Workbench "BIM Workbench") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

La herramienta Multi-Material define una lista de [materiales](/Material "Material") con un nombre y un valor de espesor, para cada material. Esta lista de materiales múltiples se puede agregar a un objeto [Arch](/Arch_Workbench/es "Arch Workbench/es") en lugar de a un único [Arch Material](/Arch_SetMaterial/es "Arch SetMaterial/es").

![](/images/Arch_multimaterial_example.png)

No todos los objetos Arch actualmente pueden hacer uso de múltiples materiales, y el uso que hacen de ellos difiere. Actualmente:

* [Muros](/Arch_Wall/es "Arch Wall/es") con un MultiMaterial utilizará las definiciones y grosores del material para crear un muro multicapa
* [Ventanas](/Arch_Window/es "Arch Window/es") con un MultiMaterial atribuirá materiales con un nombre dado definido dentro del MultiMaterial a componentes de la ventana con el mismo nombre o tipo (ver a continuación). El espesor del material no es considerado.
* [Paneles](/Arch_Panel/es "Arch Panel/es") con un MultiMaterial utilizará las definiciones y grosores del material para crear un panel de múltiples capas

## Como utilizar

1. Crea primero una serie de [Arch Materials](/Arch_SetMaterial/es "Arch SetMaterial/es") que necesitarás en tu Multi-Material
2. Opcionalmente, seleccione un objeto Arch al que desee atribuir el nuevo Multi-Material
3. Presione el botón  ![](/images/Arch_MultiMaterial.png) Multi-Material
4. Establecer las capas de material deseadas

## Opciones

![](/images/Arch_multimaterial_panel.png)

Al crear o editar un material múltiple haciendo doble clic en el árbol, están disponibles las siguientes opciones:

* **Duplicar** otro Multi-Material existente del mismo documento. Esto solo copia los valores y no vincula los dos materiales múltiples de ninguna manera.
* El campo **Nombre** también establecerá la etiqueta del objeto material
* La lista **Composición** es la lista de las diferentes capas de material que componen este multi-material. Cada capa tiene un nombre, un material y un valor de espesor.
* Haga clic en **Añadir** para agregar una nueva capa, **Arriba** para mover una capa seleccionada hacia arriba, **Abajo** para mover una capa seleccionada hacia abajo, o **Del** para eliminar una capa seleccionada.
* Haga doble clic en el **nombre** de una capa para editarlo, el material le ofrecerá una lista desplegable de [Arch Materials](/Arch_SetMaterial/es "Arch SetMaterial/es") disponible en el mismo documento, y se puede configurar el grosor a cualquier valor en cualquier unidad
* Los campos Nombre y Material son obligatorios. El grosor se puede dejar en blanco (luego adoptará un valor de 0).
* Cuando un multi-material contiene capas con un espesor de cero, ese espesor se considera variable. Los objetos de arco que usan materiales múltiples, como Paredes y Paneles, lo tratarán como corresponda y le otorgarán a esa capa el espacio disponible restante dado su propio ancho o grosor.
* Si nombra los diferentes componentes de múltiples materiales "Marco", "Panel sólido", "Panel de vidrio" o "Louvre", y aplica ese material a una ventana, los materiales dados se aplicarán a los componentes de ventana correspondientes.

## Relation to IFC

This roughly corresponds to a combination of [IfcMaterialLayerSet](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayerset.htm) and [IfcMaterialLayer](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayer.htm).

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MultiMaterial/es&oldid=1467118>"