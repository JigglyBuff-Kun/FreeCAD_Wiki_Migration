---
title: Ambiente de trabajo Trayectoria
---

![](/images/Workbench_Part.svg)

El icono del Ambiente de trabajo Trayectoria

## Introducción

El ![](/images/Workbench_CAM.svg) Ambiente de trabajo Trayectoria es usado para producir instrucciones maquina para [maquinas CNC](https://en.wikipedia.org/wiki/CNC_router) a partir de un modelo 3D FreeCAD. Estos producen objetos 3D reales en maquinas CNC tales como fresadoras, tornos, cortadoras laser, o similares.Tipicamente, estas instruciones son dialeto de tipo [código G](https://es.wikipedia.org/wiki/G-code).

![](/images/Pathwb.png)

El flujo de trabajo del ambiente de trabajo Trayectoria crea estas instrucciones maquina como sigue:

- Un modelo 3D es la base del objeto, tipicamente creado utilizando uno o más de los bancos de trabajo [Diseño de parte](/PartDesign_Workbench/es "PartDesign Workbench/es"), [Parte](/Part_Workbench/es "Part Workbench/es") o [Boceto](/Draft_Workbench/es "Draft Workbench/es").
- Un [Objeto trabajo](/CAM_Job/es "CAM Job/es") es creado en el banco de trabajo Trayectoria. Este contiene toda la información necesaria para generar el código G para procesarlo el trabajo sobre una maquina CNC:Eso es material stock, la maquina de mecanizado tiene un cierto [Conjunto de herramientas](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") y estos siguen cierto comandos de control de velocidad y movimientos (Usualmente codigo G).
- Herramientas son seleccionadas como son requeridas por las operaciones de trabajo.
- Trayectorias de mecanizado son creadas utilizando por ejemplo, operaciones [Contorno](/CAM_Profile "CAM Profile") and [Vaciado](/CAM_Pocket_3D "CAM Pocket 3D"). Esos Objectos trayectoria utilizan una dialecto de código G el cual es independiente de la maquina CNC.
- Exporte el trabajo con un código G, que coincida con su máquina.

Este paso se denomina _postprocesamiento_; hay diferentes postprocesadores disponibles.

## General concepts

## Conceptos generales

El ambiente de trabajo Trayectoria genera el codigo G definiendo las trayectorias requeridas para mecanizar el proyecto representado por el modelo 3D al mecanizado objetivo dentro del [el dialeto del código G de las operaciones de ruta de FreeCAD](/CAM_scripting#The_FreeCAD_Internal_GCode_Format/es "CAM scripting"), el cual luego es traducida al apropiado dialeto para el controlador CNC seleccionando el pos procesador apropiado.
El código G generado de directivas y operaciones contenidas en el objecto trabajo. El flujo de trabajo lista estos en el orden que seran ejecutados. La lista esta poblada por operaciones agregar trayectorias, enmascarado de trayectorias, comandos parciales de trayectorias y modificacion de trayectorias del menu de trayectoria o botones GUI.

The G-code is generated from directives and Operations contained in a CAM Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding CAM Operations, Path Dressups, Supplemental Commands, and Path Modifications from the CAM Menu, or GUI buttons.

El banco de trabajo Trayectoria provee un administrador de herramientas (Biblioteca, Tabla de herramientas), inspector de código G y herramientas de simulación. Conectan el pos procesador y permiten importar y exportar plantillas de trabajos.

Path Workbench tiene dependencias externas que incluyen:

1. Las unidades del modelo 3D de FreeCAD se definen en la **Editar → Preferencia → General → Configuración de unidades de la pestaña Unidades**. La configuración del postprocesador define las unidades finales de código G.
2. La ruta del archivo de macros, y las tolerancias geométricas, se definen en la pestaña **Editar → Preferencias → Ruta → Preferencias de trabajo** ficha.
3. Los colores se definen en la pestaña **Editar → Preferencias → Ruta → Colores de ruta** ficha.
4. Los parámetros de etiqueta de retención se definen en la pestaña **Editar → Preferencias → Ruta → Adelantos** ficha.
5. Que la calidad del modelo 3D base soporte los requisitos del ambiente de trabajo Trayectoria, pasa a comprobar la geometría.

## Limitaciones

Some current limitations of which you should be aware are:

- Most of the CAM Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") (which is still an [experimental feature](/CAM_experimental "CAM experimental") as of November 2020).
- Most of CAM workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in CAM workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations.
- The operations within the CAM workbench are not aware of clamping mechanisms in use to secure the model to your machine. Consequently, please review and simulate the paths you generate prior to sending the code to your machine. If necessary, model your clamping mechanisms in FreeCAD in order to better inspect the paths generated. Look for possible collisions with clamps or other obstacles along the paths.

## Unidades

El manejo de unidades en Path puede ser confuso. Hay varios puntos para entender:

1. Las unidades base de FreeCAD para longitud y tiempo son 'mm' y 's' respectivamente. La velocidad es así 'mm / s'. Esto es lo que FreeCAD almacena internamente independientemente de cualquier otra cosa
2. El esquema de unidad predeterminado usa las unidades predeterminadas. Si está utilizando el esquema predeterminado e ingresa una velocidad de avance sin una cadena de unidades, se ingresará como 'mm / s'
3. La mayoría de las máquinas CNC esperan una velocidad de avance en forma de 'mm / min' o 'in / min'. La mayoría de los procesadores posteriores convertirán automáticamente la unidad cuando generen gcode.

Schemas:

1. El cambio de esquema en las preferencias cambia la cadena de unidad predeterminada para los campos de entrada. Si usted es un usuario de Path y prefiere diseñar en métricas, es muy recomendable que use el esquema "Metric Small Parts & CNC". Si diseñas en unidades de EE. UU., Ya sea el decimal imperial o el Building US funcionarán
2. Cambiar el esquema de su unidad preferida no tendrá ningún efecto en la salida, pero ayudará a evitar errores de entrada

Salida:

1. La generación de la unidad correcta en la salida es responsabilidad del postprocesador y solo se realiza en ese momento.
2. La unidad de salida de la máquina no está relacionada con el esquema de la unidad seleccionada
3. Los postprocesadores producen salida métrica (G21), salida Imperial (G20) o son configurables.
4. Post-procesadores configurables por defecto a la métrica (G21)
5. Si desea que su post-procesador configurable emita gcode imperial (G20), establezca el argumento correcto en la confluencia de salida de su trabajo (es decir, --inches for linuxcnc). Esto puede almacenarse en una plantilla de trabajo y establecerse como su plantilla predeterminada para que sea automática para todos los trabajos futuros.

Inspección de Path:

1. Si usa la herramienta Path Inspect para ver el gcode, lo verá en 'mm / s' porque no está siendo procesado

## Heights and depths

## Comandos de Trayectoria

Muchos de los comandos tienen varias alturas y profundidades:

![](/images/Path-DepthsAndHeights.gif)

Referencia visual para las propiedades de profundidad (ajustes)

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

## Commands

Some commands are experimental and not available by default. To enable them see [CAM experimental](/CAM_experimental "CAM experimental").

### Project Commands

- ![](/images/CAM_Job.svg) [Trabajo](/CAM_Job/es "CAM Job/es"): Crea un nuevo trabajo CNC.

* [File:CAM PostProcess.svg](/index.php?title=Special:Upload&wpDestFile=CAM_PostProcess.svg "File:CAM PostProcess.svg") [Post Process](/index.php?title=CAM_Post/es&action=edit&redlink=1 "CAM Post/es (page does not exist)"): Exporta un proyecto a código G.

- ![](/images/CAM_Sanity.svg) [Errores de trayectoria](/index.php?title=CAM_Sanity/es&action=edit&redlink=1 "CAM Sanity/es (page does not exist)"): Revisa el trabajo seleccionado por valores faltantes.

- ![](/images/CAM_ExportTemplate.svg) [Exportar plantilla](/index.php?title=CAM_ExportTemplate/es&action=edit&redlink=1 "CAM ExportTemplate/es (page does not exist)"): Exporta el actual trabajo como plantilla.

### Tool Commands

- ![](/images/CAM_Inspect.svg) [Inspector de código G](/index.php?title=CAM_Inspect/es&action=edit&redlink=1 "CAM Inspect/es (page does not exist)"): Muestra el código G para revisión.

- ![](/images/CAM_Simulator.svg) [Simulador](/index.php?title=CAM_Simulator/es&action=edit&redlink=1 "CAM Simulator/es (page does not exist)"): Muestra la operación de mecanizado como si estuviera hecha sobre la maquina.

- ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/CAM_SelectLoop.svg) [Completar ciclo](/index.php?title=CAM_SelectLoop/es&action=edit&redlink=1 "CAM SelectLoop/es (page does not exist)"): Completa un ciclo a partir de dos esquinas seleccionadas

- ![](/images/CAM_OpActiveToggle.svg) [Toggle the Active State of the Operation](/CAM_OpActiveToggle "CAM OpActiveToggle"): Activates or de-activates a path operation.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

- ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Basic Operations

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"): Creates a profile operation of the entire model, or from one or more selected faces or edges.

- ![](/images/CAM_Pocket.svg) [Vaciado](/index.php?title=CAM_Pocket_Shape/es&action=edit&redlink=1 "CAM Pocket Shape/es (page does not exist)"): Crea una operación de vaciado a partir de uno o mas hueco(s) seleccionados.

- ![](/images/CAM_Drilling.svg) [Perforado](/index.php?title=CAM_Drilling/es&action=edit&redlink=1 "CAM Drilling/es (page does not exist)"): Ejecuta un ciclo de perforado.

- ![](/images/CAM_Face.svg) [Mecanizado de cara](/index.php?title=CAM_MillFace/es&action=edit&redlink=1 "CAM MillFace/es (page does not exist)"): Crea una trayectoria superficial.

- ![](/images/CAM_Helix.svg) [Helix](/index.php?title=CAM_Helix/es&action=edit&redlink=1 "CAM Helix/es (page does not exist)"): Crea una trayectoria helicoidal.

- ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive"): Creates an adaptive clearing and profiling operation.

- ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot"): Creates a slotting operation from selected features or custom points. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Engrave.svg) [Grabado](/index.php?title=CAM_Engrave/es&action=edit&redlink=1 "CAM Engrave/es (page does not exist)"): Crea una trayectoria de grabado.

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

- ![](/images/CAM_Vcarve.svg) [TallarV](/index.php?title=CAM_Vcarve/es&action=edit&redlink=1 "CAM Vcarve/es (page does not exist)"): Crea una trayectoria para una cavidad 3D

### 3D Operations

- ![](/images/CAM_3DPocket.svg) [Vaciado 3D](/CAM_Pocket_3D/es "CAM Pocket 3D/es"): Crea una trayectoria para un vaciado 3D.

- ![](/images/CAM_3DSurface.svg) [Superficie 3D](/index.php?title=CAM_Surface/es&action=edit&redlink=1 "CAM Surface/es (page does not exist)"): Crea una trayectoria para una superficie 3D

- ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline"): Creates a waterline path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

### Enmascarado Trajectoria

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Boundary](/CAM_DressupPathBoundary "CAM DressupPathBoundary"): Adds a boundary dressup modification to a selected path.

- ![](/images/CAM_Dressup.svg) [Enmascarado hueso de perro](/index.php?title=CAM_DressupDogbone/es&action=edit&redlink=1 "CAM DressupDogbone/es (page does not exist)"): Agrega una modificación de enmascarado hueso de perro a la trayectoria seleccionada.

- ![](/images/CAM_DressupDragKnife.svg) [Enmascarado Arrastre de cuchilla](/index.php?title=CAM_DressupDragKnife/es&action=edit&redlink=1 "CAM DressupDragKnife/es (page does not exist)"): Agrega una modificación de enmascarado arrastre de cuchilla a la trayectoria seleccionada.

- ![](/images/CAM_DressupLeadInOut.svg) [Lead In Dressup](/index.php?title=CAM_DressupLeadInOut/es&action=edit&redlink=1 "CAM DressupLeadInOut/es (page does not exist)"): Agrega un punto de entrada y / o salida a una ruta seleccionada

- ![](/images/CAM_DressupRampEntry.svg) [Enmascarado entrada en rampa](/index.php?title=CAM_DressupRampEntry/es&action=edit&redlink=1 "CAM DressupRampEntry/es (page does not exist)"): Agrega una modificación de enmascarado entrada en rampa a la trayectoria seleccionada.

- ![](/images/CAM_DressupTag.svg) [Tag Dressup](/index.php?title=CAM_DressupTag/es&action=edit&redlink=1 "CAM DressupTag/es (page does not exist)"): Agrega una modificación de tarjeta de espera a una ruta seleccionada

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Comandos parciales

- ![](/images/CAM_Fixture.svg) [Fixtura](/CAM_Fixture/es "CAM Fixture/es"): Cambia la posición de la fixtura.

- ![](/images/CAM_Comment.svg) [Comentar](/index.php?title=CAM_Comment/es&action=edit&redlink=1 "CAM Comment/es (page does not exist)"): Inserta un comentario en el código G de una trayectoria

- ![](/images/CAM_Stop.svg) [Detener](/index.php?title=CAM_Stop/es&action=edit&redlink=1 "CAM Stop/es (page does not exist)"): Inserta un paro total de la maquina.

- ![](/images/CAM_Custom.svg) [Personalizar](/index.php?title=CAM_Custom/es&action=edit&redlink=1 "CAM Custom/es (page does not exist)"): Inserta código G personalizado.

- ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

- ![](/images/CAM_Shape.svg) [Código G de un forma](/index.php?title=CAM_Shape/es&action=edit&redlink=1 "CAM Shape/es (page does not exist)"): Crea un objecto trayectoria a partir de un objecto parte seleccionado.

### Modificación de trayectoria

- ![](/images/CAM_Copy.svg) [Copiar](/index.php?title=CAM_Copy/es&action=edit&redlink=1 "CAM Copy/es (page does not exist)"): Crea una copia parametrica de un objecto trayectoria seleccionado

- ![](/images/CAM_Array.svg) [Arreglo](/CAM_Array/es "CAM Array/es"): Crea un arreglo duplicando una trayectoria seleccionada

- ![](/images/CAM_SimpleCopy.svg) [Copia simple](/index.php?title=CAM_SimpleCopy/es&action=edit&redlink=1 "CAM SimpleCopy/es (page does not exist)"): Crea una copia no paramétrica de un objecto trayectoria seleccionado.

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/CAM_Area.svg) [Área característica](/index.php?title=CAM_Area/es&action=edit&redlink=1 "CAM Area/es (page does not exist)"): Crea un área característica a partir de los objetos seleccionados.

- ![](/images/CAM_Area_Workplane.svg) [Plano de trabajo de área característica](/index.php?title=CAM_Area_Workplane/es&action=edit&redlink=1 "CAM Area Workplane/es (page does not exist)"): Crea un plano de trabajo de área característica.

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Other

El ambiente de trabajo comparte muchos conceptos con otros paquetes de programas CAM pero tienen sus propias peculiaridades. Si algo va mal, este es un buen lugar para empezar.

### Preferencias

- ![](/images/Std_DlgPreferences.svg) [Preferencias...](/index.php?title=CAM_Preferences/es&action=edit&redlink=1 "CAM Preferences/es (page does not exist)"): Preferencias desechables en herramientas de ruta.

## Archivos de guión

See [CAM scripting](/CAM_scripting "CAM scripting").

## Tutorials

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/es&oldid=1494601>"
