---
title: Centro de usuarios
---

![](/images/User_hub.png)

---

Esta área es el área de ayuda principal para los nuevos usuarios de FreeCAD.

FreeCAD está en continuo desarrollo, por lo que puede faltar información o estar desactualizada. Si no encuentras la información que necesitas, no dudes en preguntar en el [Foro de FreeCAD](https://forum.freecad.org).

Si quieres contribuir a FreeCAD, por favor [donar](/Donate/es "Donate/es"), y mira la página [Ayuda a FreeCAD](/Help_FreeCAD/es "Help FreeCAD/es") para otras formas de contribuir.Si quieres editar este wiki, solicita una cuenta en el wiki con permisos de editor [en el foro](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830), y lee las [Páginas del wiki](/WikiPages/es "WikiPages/es") para conocer las directrices generales que debes seguir.

Si quieres saber cómo empezó FreeCAD hace años visita la página [History](/History/es "History/es").

## Utilizando FreeCAD

### Introducción

- [Resumen de la aplicación](/About_FreeCAD/es "About FreeCAD/es"): Una visión general de FreeCAD
- Instalación: Cómo instalar FreeCAD en [Windows](/Installing_on_Windows/es "Installing on Windows/es"), [Linux](/Installing_on_Linux/es "Installing on Linux/es") y [Mac](/Installing_on_Mac/es "Installing on Mac/es")
- [Instalación de archivos de ayuda](/Installing_Helpfile/es "Installing Helpfile/es"): cómo instalar la documentación offline que se basa en este wiki.
- [Instalar componentes adicionales](/Installing_additional_components/es "Installing additional components/es"): cómo instalar componentes adicionales de terceros que pueden trabajar junto con FreeCAD.
- [Cómo empezar](/Getting_started/es "Getting started/es"): Una rápida visión general de las herramientas disponibles.
- [PMF](/Frequently_asked_questions/es "Frequently asked questions/es"): Preguntas más frecuentes
- [Tutoriales](/Tutorials/es "Tutorials/es") que cubren diferentes partes de FreeCAD

#### ¿Migrando desde otro software?

- [Soluciones alternativas](/index.php?title=Workarounds/es&action=edit&redlink=1 "Workarounds/es (page does not exist)")
- [Migrando a FreeCAD desde Fusion360](/Migrating_to_FreeCAD_from_Fusion360/es "Migrating to FreeCAD from Fusion360/es")
- [Migrando a FreeCAD desde OnShape](/Migrating_to_FreeCAD_from_OnShape/es "Migrating to FreeCAD from OnShape/es")
- [Migrando a FreeCAD desde SolidWorks](/index.php?title=Migrating_to_FreeCAD_from_SolidWorks/es&action=edit&redlink=1 "Migrating to FreeCAD from SolidWorks/es (page does not exist)")
- [Migrando a FreeCAD desde Revit](/index.php?title=Migrating_to_FreeCAD_from_Revit/es&action=edit&redlink=1 "Migrating to FreeCAD from Revit/es (page does not exist)")
- [Guía de migración BIM de FreeCAD](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [Tabla de compatibilidad de aplicaciones BIM](/BIM_application_compatibility_table/es "BIM application compatibility table/es")

### Aplicación basica

- [Interfaz](/Interface/es "Interface/es"): la interfaz de FreeCAD se compone de varios elementos gráficos en la pantalla, incluyendo la [vista 3D](/3D_view/es "3D view/es"), la [vista de árbol](/Tree_view/es "Tree view/es"), el [editor de propiedades](/Property_editor/es "Property editor/es"), el [panel de tareas](/Task_panel/es "Task panel/es"), y la [consola Python](/Python_console/es "Python console/es").
- [Navegación con ratón](/Mouse_navigation/es "Mouse navigation/es"): los diferentes tipos de uso del ratón o trackpad para navegar en la vista 3D.
- [Métodos de selección](/Selection_methods/es "Selection methods/es"): los diferentes métodos de selección de objetos en el software.
- [Nombrado de objetos](/Object_name/es "Object name/es"): todos los objetos de FreeCAD tienen un `Name` de sólo lectura que los identifica de forma única, y un `Label` que es editable por el usuario.
- [Editor de Preferencias](/Preferences_Editor/es "Preferences Editor/es"): el sistema que permite controlar muchas propiedades del sistema base y de los bancos de trabajo individuales.
- [Formatos de archivo](/Import_Export/es "Import Export/es"): los diferentes formatos de archivo que FreeCAD puede leer y escribir.

### Ambientes de trabajo

Los [bancos de trabajo](/Workbenches/es "Workbenches/es") son colecciones de herramientas utilizadas para tareas específicas. Estos son los bancos de trabajo base que se incluyen en cada instalación de FreeCAD:

- ![](/images/Freecad.svg) [Herramientas estándar](/Std_Base/es "Std Base/es"). Estos comandos y herramientas están presentes en todos los bancos de trabajo.

- ![](/images/Workbench_Assembly.svg) El [banco de trabajo Assembly](/Assembly_Workbench "Assembly Workbench") para la construcción y resolución de ensamblajes mecánicos. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) El [banco de trabajo BIM](/BIM_Workbench "BIM Workbench") para trabajar con elementos arquitectónicos y crear modelos [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Combina el banco de trabajo Arch y el anteriormente externo banco de trabajo BIM disponible en 0.21 and below.

- ![](/images/Workbench_CAM.svg) El [banco de trabajo CAM](/CAM_Workbench "CAM Workbench") es usado para producir instrucciones de código-G. Este banco de trabajo se llamaba "banco de trabajo Path"en 0.21 and below.

- ![](/images/Workbench_Draft.svg) El [banco de trabajo Draft](/Draft_Workbench/es "Draft Workbench/es") contiene herramientas 2D y operaciones CAD básicas en 2D y 3D.

- ![](/images/Workbench_FEM.svg) El [banco de trabajo FEM](/FEM_Workbench/es "FEM Workbench/es") proporciona un flujo de trabajo de análisis de elementos finitos (FEA).

- ![](/images/Workbench_Inspection.svg) El [Banco de Trabajo de Inspección](/Inspection_Workbench/es "Inspection Workbench/es") está hecho para dar herramientas específicas para el examen de formas. Todavía está en una etapa temprana de desarrollo.

- ![](/images/Workbench_Material.svg) El [banco de trabajo Material](/Material_Workbench "Material Workbench") maneja el sistema de materiales de FreeCAD. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) El [banco de
  trabajo Mesh](/Mesh_Workbench/es "Mesh Workbench/es") para trabajar con mallas trianguladas.

- ![](/images/Workbench_OpenSCAD.svg) El [banco de trabajo OpenSCAD](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es") para la interoperabilidad con OpenSCAD y la reparación de [geometría sólida constructiva](/Constructive_solid_geometry/es "Constructive solid geometry/es") (CSG) del historial del modelo.

- ![](/images/Workbench_Part.svg) El [Banco de Trabajo Part](/Part_Workbench/es "Part Workbench/es") para trabajar con primitivas geométricas y operaciones booleanas.

- ![](/images/Workbench_PartDesign.svg) El [banco de trabajo PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") para construir formas de piezas a partir de croquis.

- ![](/images/Workbench_Points.svg) El [banco de trabajo Points](/Points_Workbench/es "Points Workbench/es") para trabajar con nubes de puntos.

- ![](/images/Workbench_Reverse_Engineering.svg) El [Banco de Trabajo de Ingeniería Inversa](/Reverse_Engineering_Workbench/es "Reverse Engineering Workbench/es") pretende proporcionar herramientas específicas para convertir formas/sólidos/mallas en características paramétricas compatibles con FreeCAD.

- ![](/images/Workbench_Robot.svg) El [banco de Trabajo de Robots](/Robot_Workbench/es "Robot Workbench/es") para estudiar los movimientos de los robots. Actualmente no esta mantenido.

- ![](/images/Workbench_Sketcher.svg) El [banco de trabajo Sketcher](/Sketcher_Workbench/es "Sketcher Workbench/es") para trabajar con croquis de geometría restringida.

- ![](/images/Workbench_Spreadsheet.svg) El [banco de trabajo de Hojas de Cálculo](/Spreadsheet_Workbench/es "Spreadsheet Workbench/es") para crear y manipular datos de hojas de cálculo.

- ![](/images/Workbench_Surface.svg) El [banco de trabajo de Superficies](/Surface_Workbench/es "Surface Workbench/es") proporciona herramientas para crear y modificar superficies. Es similar a la opción [Pieza Constructor](/Part_Builder/es "Part Builder/es") Opción de cara desde las aristas.

- ![](/images/Workbench_TechDraw.svg) El [Banco de Trabajo Dibujo Técnico](/TechDraw_Workbench/es "TechDraw Workbench/es") para producir dibujos técnicos a partir de modelos 3D. Es el sucesor del [Banco de Trabajo de Dibujo](/Drawing_Workbench/es "Drawing Workbench/es").

- ![](/images/Workbench_Test.svg) El [banco de Trabajo del Prueba Estructura del marco](/Testing/es "Testing/es") es para depurar FreeCAD.

### Macros

[Macros](/Macros/es "Macros/es") son fragmentos relativamente pequeños de código [Python](/Python/es "Python/es") que realizan una tarea simple o compleja que no está disponible en el sistema base de FreeCAD.

Usuarios avanzados han escrito varios [macros](/Macros/es "Macros/es") para enriquecer FreeCAD con mas capacidades.

Desde FreeCAD 0.17, muchas macros pueden ser instaladas usando el [Gestor de complementos](/Std_AddonMgr/es "Std AddonMgr/es"). Para una lista de las macros consulte la página [Recetas de macros](/Macros_recipes/es "Macros recipes/es"). Para la instalación manual vea [Cómo instalar macros](/How_to_install_macros/es "How to install macros/es").

### Bancos de trabajo externos

Cuando se desarrollan muchas macros o funciones juntas, y se organizan en barras de herramientas y menús, pueden convertirse en un nuevo banco de trabajo.

Los [bancos de trabajo externos](/External_workbenches/es "External workbenches/es") son colecciones de funciones que no forman parte del sistema base de FreeCAD, normalmente desarrolladas por usuarios experimentados, y dirigidas a una necesidad particular.

Desde FreeCAD 0.17, muchos bancos de trabajo pueden ser instalados usando el [Gestor de complementos](/Std_AddonMgr/es "Std AddonMgr/es"). Para la instalación manual vea [Cómo instalar bancos de trabajo adicionales](/How_to_install_additional_workbenches/es "How to install additional workbenches/es").

## Referencia

- [Referencia de comandos](/List_of_Commands/es "List of Commands/es"): Una lista completa de los comandos disponibles de FreeCAD.

## Ayuda en línea

Esta es la ayuda en línea oficial de FreeCAD. Por favor ten en cuenta que el sistema de ayuda en línea entero está actualmente en construcción. Podrá ser utilizado para generar un archivo .CHM, que se distribuirá con los paquetes binarios de FreeCAD. De momento la ayuda en línea resume algunas de las secciones más completas de esta wiki.

- [Sistema de ayuda en línea - Índice de contenidos](/Online_Help_Toc/es "Online Help Toc/es")

## Más

- El [Centro de usuarios avanzados](/Power_users_hub/es "Power users hub/es") es el lugar al que ir si quieres ver usos más avanzados de FreeCAD
- El [Portal de la Comunidad de FreeCAD](/FreeCAD_Community_Portal/es "FreeCAD Community Portal/es") lista los proyectos realizados por los miembros de la comunidad en torno a FreeCAD.
- ¿No entiendes un término o una frase usada en FreeCAD? Prueba la página [Glossary](/Glossary/es "Glossary/es").

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/es&oldid=1509055>"
