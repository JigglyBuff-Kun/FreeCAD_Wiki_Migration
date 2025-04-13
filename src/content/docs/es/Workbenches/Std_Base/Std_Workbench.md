---
title: Ambiente de Trabajo Std
---
|  |
| --- |
| Ambiente de Trabajo Std |
| Ubicación en el Menú |
| Vista → Ambiente de Trabajo |
| Entornos de trabajo |
| [Ambiente de Trabajo](/Workbenches/es "Workbenches/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

El comando **Ambiente de trabajo Std**  activa un [Ambiente de trabajo](/Workbenches/es "Workbenches/es") seleccionado incluyendo su interfaz gráfica de usuario (GUI).

![](/images/Std_Workbench_ComboBox_Icons_And_Text.png)

The default ComboBox Workbench selector type

![](/images/Std_Workbench_TabBar_Icons_Only.png)

The optional TabBar Workbench selector type (here displayed with icons only) [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Utilización

1. Hay varias maneras de invocar el comando:
   * Seleccionar un ambiente de trabajo en la lista desplegable **Ambiente de trabajo** de la barra de herramientas del ambiente de trabajo. Esta opción no está disponible si el ambiente de trabajo actual es `<none>` (sin ambiente de trabajo).
   * Seleccione un ambiente de trabajo en el submenú **Vista → Ambiente de trabajo**.

## Notas

* Se pueden descargar [Ambientes de trabajo externos](/External_workbenches/es "External workbenches/es") adicionales con el ![](/images/Std_AddonMgr.svg) [Gestor de Complementos](/Std_AddonMgr/es "Std AddonMgr/es").

## Preferencias

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* El ambiente de trabajo de inicio se puede cambiar en las preferencias: **Edición → Preferencias... → General → General → Inicio**. Véase [Editor de preferencias](/Preferences_Editor/es#General "Preferences Editor/es").

## Guionización

*Ver también:* [Básicos de Guionización FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para cambiar el ambiente de trabajo utiliza el método `activateWorkbench` del módulo FreeCADGui. Este método no está disponible si FreeCAD está en modo consola.

```
import FreeCADGui

FreeCADGui.activateWorkbench("PartDesignWorkbench")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Workbench/es&oldid=1494633>"