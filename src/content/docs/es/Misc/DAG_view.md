---
title: Vista DAG
---
## Introducción

La vista DAG es un [gráfo acíclico dirigido](https://es.wikipedia.org/wiki/Grafo_ac%C3%ADclico_dirigido) (DAG) que muestra las relaciones entre diferentes objetos en el documento. Su objetivo principal es mostrar cómo ciertos objetos dependen de otros en un modelo complejo con muchas características y referencias, como aquellos que se pueden crear con el ![](/images/Workbench_PartDesign.svg) [Entorno de trabajo PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es").

La vista DAG se parece al gráfico que se puede generar desde un repositorio Git y sus ramas. Junto con la [vista de árbol](/Tree_view "Tree view") estándar y el [gráfico de dependencias](/Std_DependencyGraph/es "Std DependencyGraph/es"), la vista DAG es una herramienta para inspeccionar el historial paramétrico de los objetos en un documento.

## Ejemplo

Se verá un modelo sencillo con diferentes vistas.

![](/images/FreeCAD_DAG_view_3D.png)

Modelo con formas 2D y 3D.

![](/images/FreeCAD_DAG_view_Tree_view.png) ![](/images/FreeCAD_DAG_view.png)

Izquierda: objetos mostrados en la [vista de árbol](/Tree_view "Tree view"). Derecha: objetos que se muestran en la vista DAG.

![](/images/FreeCAD_DAG_view_Std_DependencyGraph.png)

Relaciones entre los objetos mostrados en el [grafo de dependencias](/Std_DependencyGraph/es "Std DependencyGraph/es").

## Activando la vista DAG

La vista DAG se introdujo en 0.17 como una característica experimental para usuarios avanzados y desarrolladores, para que pudieran solucionar problemas de modelos complejos; por lo tanto, la vista DAG no está disponible de forma predeterminada.

To use this view use the [parameter editor](/Std_DlgParameter "Std DlgParameter"). Create the following subgroup if it doesn't exist

* `BaseApp/Preferences/DockWindows/DAGView`

then add the parameter `Enabled` of type `Boolean`, and set it to `true`.

Restart FreeCAD and activate DAG view: **[View](/Std_View_Menu "Std View Menu") → Panels → DAG view**.

In the [parameter editor](/Std_DlgParameter "Std DlgParameter") you can also change some properties in the following subgroup

* `BaseApp/Preferences/DAGView`
* FontPointSize - Set size of text font and can help with readability with high DPI displays. Set to 0 for default font size.
* SelectionMode
  + 0 - single click selects an item. Ctrl-click to add items to selection.
  + 1 - every click adds/removes item to selection.
* Direction - the order in which items are displayed.
  + 1 - child on top, parent under it
  + -1 - parent on top, children under it

## Enlaces

* [DAGView](https://forum.freecadweb.org/viewtopic.php?f=20&t=11276), Hilo del foro que presenta la nueva herramienta..
* [huevo de pascua de PartDesign Siguiente: Vista DAG](https://forum.freecadweb.org/viewtopic.php?t=15375), incluyendo la vista junto con la actualización de PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=DAG_view/es&oldid=1342230>"