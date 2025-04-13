---
title: Panel de tareas
---
## Introducción

El panel de tareas aparece en la pestaña **Tareas** de la [vista combinada](/Combo_view/es "Combo view/es"), uno de los paneles importantes de la [interfaz](/Interface/es "Interface/es"). Es un espacio personalizable que puede contener cualquier tipo de widget gráfico como sub-ventanas plegables, tablas, campos de entrada, casillas de verificación, casillas de selección, cajas de texto, botones, etiquetas, imágenes y otros elementos, dependiendo del [Ambiente de trabajo](/Workbenches/de "Workbenches/de") actualmente activo, y de la herramienta actualmente activa.

![](/images/FreeCAD_Combo_view_Task_panel.png)

El panel de tareas que muestra varios comandos cuando el [Entorno de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es") está activo, y se selecciona un [Boceto](/Sketch/es "Sketch/es").

## Trabajando con el panel de tareas

Un panel de tareas normalmente se abre cuando se activa una herramienta que requiere la entrada del usuario, ya sea presionando un botón de la barra de herramientas o haciendo doble clic en un objeto. Si la herramienta no necesita la entrada del usuario, producirá su resultado o terminará, pero no mostrará un panel de tareas.

Hay muchos comandos que requieren la selección de formas u objetos presentes en el documento; para tales casos el panel de tareas esperará a que el usuario seleccione los objetos apropiados de la  [vista de árbol](/Tree_view/es "Tree view/es") o la  [vista 3D](/3D_view/es "3D view/es"). Cuando un panel de tareas está abierto, es posible cambiar a la pestaña **Modelo** para mostrar la  [vista de árbol](/Tree_view/es "Tree view/es") para elegir un objeto; una vez hecho esto, es posible volver a la pestaña **Tareas** para proceder con el comando. El panel de tareas suele cerrarse pulsando un botón OK o un botón Cerrar, o pulsando la tecla Esc del teclado para abortar el comando.

![](/images/FreeCAD_Combo_view_Task_panel_ArchComponent.png)

Panel de tareas que se abre cuando se edita un [Arch Componente](/Arch_Component/es "Arch Component/es"). El panel espera a que el usuario seleccione los objetos que pueden ser añadidos o sustraídos del componente.

## Notes

* Users migrating from other CAD solutions that use the ESC key as part of their workflow may get different results in FreeCAD. When ESC is pressed in FreeCAD the Task panel that has the focus will close. To disable this functionality, please see [Fine tuning](/Fine-tuning#Escape_key "Fine-tuning") and [Sketcher Preferences](/Sketcher_Preferences#General "Sketcher Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=Task_panel/es&oldid=1503930>"