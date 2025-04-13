---
title: Bancos de Trabajo
---

FreeCAD, al igual que muchas aplicaciones de diseño moderno como [Revit](https://es.wikipedia.org/wiki/Revit) o [CATIA](https://es.wikipedia.org/wiki/CATIA), se basa en el concepto de [de trabajo](https://es.wikipedia.org/wiki/Banco_de_trabajo%7CBanco). Un banco de trabajo puede considerarse como un conjunto de herramientas especialmente agrupadas para una determinada tarea. En un taller de muebles tradicional, se tendría una mesa de trabajo para el que trabaja con la madera, otra para el que trabaja con las piezas de metal, y quizá una tercera para el que monta todas las piezas juntas.

En FreeCAD se aplica el mismo concepto. Las herramientas se agrupan en bancos de trabajo según las tareas con las que están relacionadas.

Cuando pasas de un ambiente de trabajo a otro, las herramientas disponibles en la interfaz cambian. Barras de herramientas, barras de comandos y posiblemente otras partes de la interfaz cambian al nuevo banco de trabajo, pero el contenido de tu escena no cambia. Por ejemplo, puedes empezar a dibujar formas 2D con el Banco de trabajo Borradores y luego seguir trabajando en ellas con el Banco de trabajo Pieza.

Tenga en cuenta que a veces se hace referencia a un Banco de trabajo como un _Módulo_. Sin embargo, los Bancos de trabajo y los Módulos son entidades diferentes. Un Módulo es cualquier extensión de FreeCAD, mientras que un Banco de trabajo es un tipo especial de Módulo con una configuración de interfaz gráfica de usuario (barras herramientas y menús).

## Bancos de trabajo incorporados

### Current

Los siguientes bancos de trabajo se incluyen en cada instalación de FreeCAD:

- ![](/images/Freecad.svg) [Std Base](/Std_Base/es "Std Base/es"). No se trata realmente de un banco de trabajo, sino de una categoría de comandos y herramientas "estándar" que pueden utilizarse en todos los bancos de trabajo.

- ![](/images/Workbench_Assembly.svg) The [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") for building and solving mechanical assemblies. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) The [BIM Workbench](/BIM_Workbench "BIM Workbench") for working with architectural elements and creating [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) models. It combines the Arch Workbench and the formerly external BIM Workbench available in 0.21 and below.

- ![](/images/Workbench_CAM.svg) The [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce G-Code instructions. This workbench was called "Path Workbench" in 0.21 and below.

- ![](/images/Workbench_Draft.svg) El [Banco de Trabajo de Borradores](/Draft_Workbench/es "Draft Workbench/es") contiene herramientas 2D y operaciones CAD básicas en 2D y 3D.

- ![](/images/Workbench_FEM.svg) El [Banco de Trabajo MEF](/FEM_Workbench/es "FEM Workbench/es") proporciona un flujo de trabajo de análisis de elementos finitos (FEA).

- ![](/images/Workbench_Inspection.svg) El [Banco de Trabajo de Inspecciónh](/Inspection_Workbench/es "Inspection Workbench/es") está hecho para dar herramientas específicas para el examen de formas. Todavía está en desarrollo.

- ![](/images/Workbench_Material.svg) The [Material Workbench](/Material_Workbench "Material Workbench") handles the FreeCAD material system. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) El [Ambiente de Trabajo Malla](/Mesh_Workbench/es "Mesh Workbench/es") para trabajar con mallas trianguladas.

- ![](/images/Workbench_OpenSCAD.svg) El [Banco de trabajo OpenSCAD](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es") para la interoperabilidad con OpenSCAD y la reparación de [geometría sólida constructiva](/Constructive_solid_geometry/es "Constructive solid geometry/es") (CSG) del historial del modelo.

- ![](/images/Workbench_Part.svg) El [Banco de Trabajo Pieza](/Part_Workbench/es "Part Workbench/es") para trabajar con piezas CAD.

- ![](/images/Workbench_PartDesign.svg) El [Banco de Trabajo DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") para construir formas de piezas a partir de croquis.

- ![](/images/Workbench_Points.svg) El [Banco de Trabajo Puntos](/Points_Workbench/es "Points Workbench/es") para trabajar con nubes de puntos.

- ![](/images/Workbench_Reverse_Engineering.svg) El [Banco de Trabajo de Ingeniería Inversa](/Reverse_Engineering_Workbench/es "Reverse Engineering Workbench/es") pretende proporcionar herramientas específicas para convertir formas/sólidos/mallas en características paramétricas compatibles con FreeCAD. Todavía está en desarrollo.

- ![](/images/Workbench_Robot.svg) El [Banco de Trabajo de Robots](/Robot_Workbench/es "Robot Workbench/es") para estudiar los movimientos de los robots.

- ![](/images/Workbench_Sketcher.svg) El [Banco de Trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") para trabajar con croquis de geometría restringida.

- ![](/images/Workbench_Spreadsheet.svg) El [Banco de Trabajo de Hojas de Cálculo](/Spreadsheet_Workbench/es "Spreadsheet Workbench/es") para crear y manipular datos de hojas de cálculo.

- ![](/images/Workbench_Surface.svg) El [Banco de Trabajo de Superficies](/Surface_Workbench/es "Surface Workbench/es") proporciona herramientas para crear y modificar superficies. Es similar al constructor de formas de piezas Cara desde las aristas.

- ![](/images/Workbench_TechDraw.svg) El [Banco de Trabajo DibujoTécnico](/TechDraw_Workbench/es "TechDraw Workbench/es") para producir dibujos técnicos a partir de modelos 3D. Es el sucesor del [Banco de Trabajo de Dibujo](/Drawing_Workbench/es "Drawing Workbench/es").

- ![](/images/Workbench_Test.svg) El [Banco de Trabajo del Prueba Estructura del marco](/Testing/es "Testing/es") es para depurar FreeCAD.

### Obsolete

The following workbenches are no longer included after version 0.21:

- ![](/images/Workbench_Start.svg) El [Centro de Trabajo Inicio](/Start_Workbench/es "Start Workbench/es") te permite saltar rápidamente a uno de los bancos de trabajo más comunes.

- ![](/images/Workbench_Web.svg) El [Ambiente de Trabajo Web](/Web_Workbench/es "Web Workbench/es") te proporciona una ventana de navegador en lugar de la [Vista 3D](/3D_view/es "3D view/es") dentro de FreeCAD.

The following workbenches are no longer included after version 0.20:

- ![](/images/Workbench_Drawing.svg) El [Banco de trabajo de Dibujo](/Drawing_Workbench/es "Drawing Workbench/es") se utilizaba para la producción de dibujos técnicos, pero ahora ha quedado obsoleto. Todavía es necesario para leer archivos antiguos de FreeCAD que contengan objetos creados con este banco de trabajo. El [Banco de trabajo de DibujosTécnicos](/TechDraw_Workbench/es "TechDraw Workbench/es") es su reemplazo más avanzado. [obsoleto en versión 0.17](/Release_notes_0.17/es "Release notes 0.17/es")

- ![](/images/Workbench_Image.svg) El [Banco de Trabajo de Imágenes](/Image_Workbench/es "Image Workbench/es") para trabajar con imágenes de mapa de bits.

- ![](/images/Workbench_Raytracing.svg) El [Banco de Trabajo de Trazado de Rayos](/Raytracing_Workbench/es "Raytracing Workbench/es") para trabajar con el trazado de rayos (renderizado).

## Ambiente de trabajo externos

Los Ambientes de Trabajo de FreeCAD son fáciles de programar en [Python](/Python/es "Python/es"), por lo que hay mucha gente desarrollando Ambientes de Trabajo adicionales fuera del área principal de desarrollo de FreeCAD.

Los [Ambiente de trabajo externos](/External_workbenches/es "External workbenches/es") página lista todo lo que se conoce en esta comunidad. La mayoría son fácilmente instalables desde dentro de FreeCAD, usando el [Gerente de Addon](/Std_AddonMgr/es "Std AddonMgr/es"), que se encuentra en el menú **Herramientas → ![](/images/Std_AddonMgr.svg) Gerente de Addon**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/es&oldid=1442623>"
