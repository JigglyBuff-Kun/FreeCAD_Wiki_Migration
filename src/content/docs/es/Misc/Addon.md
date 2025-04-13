---
title: Complemento
---
## Introducción

En FreeCAD y en esta documentación, un complemento es cualquier componente que no es parte de la instalación base, pero que puede ser añadido al sistema por ciertos métodos.

## Diferentes tipos

Existen tres tipos de complementos:

* [Macros](/Macros/es "Macros/es"): breve fragmento de código [Python](/Python/es "Python/es") que proporciona una nueva herramienta o funcionalidad en un único archivo que termina en `.FCMacro`.
* [Ambiente de trabajo](/External_workbenches/es "External workbenches/es"): colecciones de archivos Python que proporcionan [Comandos Gui](/Gui_Command/es "Gui Command/es") relacionados (herramientas) centradas en un tema concreto, por ejemplo, herramientas para diseñar armarios, o herramientas para trabajar con arquitectura, o herramientas para diseñar barcos, etc. Estos bancos de trabajo suelen definir nuevas barras de herramientas donde los [comandos](/Gui_Command/es "Gui Command/es") se colocan como botones.
* [Paquetes de preferencias](/Preference_Packs/es "Preference Packs/es"): colecciones de preferencias de usuario distribuibles. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Instalación

La forma recomendada de instalar los complementos es con el ![](/images/Std_AddonMgr.svg) [Gestor complementos](/Std_AddonMgr/es "Std AddonMgr/es").

Pero para macros y ambientes de trabajo la instalación manual sigue siendo posible.

* [Cómo instalar macros](/How_to_install_macros/es "How to install macros/es")
* [Instalar más ambientes de trabajo](/Installing_more_workbenches/es "Installing more workbenches/es")

## Información para desarrolladores

Si ha desarrollado una macro o un ambiente de trabajo y desea verlo incluido en el administrador de complementos, lea cómo hacerlo en las páginas del repositorio: ([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) y [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/)). Si agrega su macro a la página [Recetas de macros](/Macros_recipes "Macros recipes"), no hay nada más que hacer, el administrador de complementos la recogerá automáticamente.

See also:

* [Distribution of a Python workbench](/Workbench_creation#Distribution "Workbench creation")
* [Distribution of a C++ workbench](/Workbench_creation#Distribution_2 "Workbench creation")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/es&oldid=1207616>"