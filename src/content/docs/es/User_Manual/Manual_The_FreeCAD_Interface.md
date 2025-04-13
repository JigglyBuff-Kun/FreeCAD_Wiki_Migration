---
title: La interfaz de FreeCAD
---

FreeCAD utiliza el [Qt framework](<https://en.wikipedia.org/wiki/Qt_(software)>) para dibujar y gestionar su interfaz. Este framework se utiliza en una amplia gama de aplicaciones, por lo que la interfaz de FreeCAD es muy clásica y no presenta ninguna dificultad especial para su comprensión. La mayoría de los botones son estándar y se encontrarán donde los esperas **Archivo → Abrir, Editar → Pegar, etc**. Este es el aspecto de FreeCAD cuando lo abres por primera vez, justo después de la instalación, mostrando el centro de inicio:

![](/images/FreeCAD_022_Start.png)

El centro de inicio es una conveniente "pantalla de bienvenida", que muestra información útil para los recién llegados, como los últimos archivos en los que has estado trabajando, las novedades en el mundo de FreeCAD, o información rápida sobre los Ambientes de trabajo más comunes. También te notificará si una nueva versión estable de FreeCAD está disponible.

Después de un tiempo, cuando estés más familiarizado con FreeCAD, puede que hayas hecho cambios en las preferencias para que cuando FreeCAD se inicie te encuentres directamente en uno de los bancos de trabajo con un nuevo documento abierto. O, simplemente cierra la pestaña de la página de inicio y crea un nuevo documento:

![](/images/FreeCAD_022_PartDesign.png)

### Ambientes de trabajo

Ambientes de trabajo son grupos de herramientas (botones de la barra de herramientas, menús y otros controles de la interfaz) que se agrupan por especialidad. Piensa en un taller en el que hay diferentes personas trabajando juntas: Una persona que trabaja con el metal, otra con la madera. Cada uno de ellos tiene, en su taller, una mesa separada con herramientas específicas para su trabajo. Sin embargo, todos pueden trabajar en los mismos objetos. Lo mismo ocurre en FreeCAD.

In the context of FreeCAD, each Workbench is tailored to a particular type of task, organizing all the necessary tools for that activity in one interface. When switching between Workbenches, the set of tools and controls visible in the user interface adjusts to reflect the needs of the selected task, though the actual project contents or "scene" you are working on does not change. This allows for seamless transitions in workflow, such as beginning a design with basic 2D shapes in the Draft Workbench and then elaborating on these designs with advanced modeling tools in the Part Workbench.

The terms "Workbench" and "Module" are sometimes used interchangeably, but they have distinct meanings within FreeCAD. A Module is any extension that adds functionality to FreeCAD, while a Workbench is a specific kind of Module equipped with its own user interface components such as toolbars and menus, designed to facilitate specific types of tasks. Thus, every Workbench is a Module, but not every Module qualifies as a Workbench.

El control más importante de la interfaz de FreeCAD es el selector de Ambiente de trabajo, que se utiliza para cambiar de un Ambiente de trabajo a otro:

![](/images/FreeCAD_WB.png)

- ![](/images/Workbench_Assembly.svg) The [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") for building and solving mechanical assemblies. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) The [BIM Workbench](/BIM_Workbench "BIM Workbench") for working with architectural elements and creating [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) models. It combines the Arch Workbench and the formerly external BIM Workbench available in 0.21 and below.

- ![](/images/Workbench_CAM.svg) The [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce G-Code instructions. This workbench was called "Path Workbench" in 0.21 and below.

- ![](/images/Workbench_Draft.svg) The [Draft Workbench](/Draft_Workbench "Draft Workbench") contains 2D tools and basic 2D and 3D CAD operations.

- ![](/images/Workbench_FEM.svg) The [FEM Workbench](/FEM_Workbench "FEM Workbench") provides Finite Element Analysis (FEA) workflow.

- ![](/images/Workbench_Inspection.svg) The [Inspection Workbench](/Inspection_Workbench "Inspection Workbench") is made to give you specific tools for the examination of shapes. Still in the early stages of development.

- ![](/images/Workbench_Material.svg) The [Material Workbench](/Material_Workbench "Material Workbench") handles the FreeCAD material system. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) The [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") for working with triangulated meshes.

- ![](/images/Workbench_OpenSCAD.svg) The [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") for interoperability with OpenSCAD and repairing [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) model history.

- ![](/images/Workbench_Part.svg) The [Part Workbench](/Part_Workbench "Part Workbench") for working with geometric primitives and boolean operations.

- ![](/images/Workbench_PartDesign.svg) The [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench") for building Part shapes from sketches.

- ![](/images/Workbench_Points.svg) The [Points Workbench](/Points_Workbench "Points Workbench") for working with point clouds.

- ![](/images/Workbench_Reverse_Engineering.svg) The [Reverse Engineering Workbench](/Reverse_Engineering_Workbench "Reverse Engineering Workbench") is intended to provide specific tools to convert shapes/solids/meshes into parametric FreeCAD-compatible features.

- ![](/images/Workbench_Robot.svg) The [Robot Workbench](/Robot_Workbench "Robot Workbench") for studying robot movements. Currently unmaintained.

- ![](/images/Workbench_Sketcher.svg) The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") for working with geometry-constrained sketches.

- ![](/images/Workbench_Spreadsheet.svg) The [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") for creating and manipulating spreadsheet data.

- ![](/images/Workbench_Surface.svg) The [Surface Workbench](/Surface_Workbench "Surface Workbench") provides tools to create and modify surfaces. It is similar to the [Part Builder](/Part_Builder "Part Builder") Face from edges option.

- ![](/images/Workbench_TechDraw.svg) The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") for producing technical drawings from 3D models. It is the successor of the [Drawing Workbench](/Drawing_Workbench "Drawing Workbench").

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

Las ambientes de trabajo a menudo confunden a los nuevos usuarios, ya que no siempre es fácil saber en qué ambiente de trabajo buscar una herramienta específica. Pero son rápidos de aprender, y después de un corto tiempo se sentirá natural -- dándose cuenta de que es una manera conveniente de organizar la multitud de herramientas que FreeCAD tiene para ofrecer. Las ambientes de trabajo también son totalmente personalizables (ver más abajo). La misma herramienta puede aparecer en más de un ambiente de trabajo. El icono del botón para una herramienta en particular siempre será el mismo sin importar en qué ambiente de trabajo aparezca.

### La interfaz

Veamos mejor las diferentes partes de la interfaz:

![](/images/FreeCAD_022_Interface.png)

The main window of the application can be roughly divided into 11 sections:

1. The [Main view area](/Main_view_area "Main view area"), which can contain different tabbed windows.
2. The [3D view](/3D_view "3D view"), normally embedded in the [main view area](/Main_view_area "Main view area"). The 3D view is the central element of the interface, displaying and allowing manipulation of the objects you are working on. It is possible to have multiple views of the same document (or objects) or to have several documents open simultaneously. Additionally, each view can be detached from the main window separately.
3. The Model and the [Tasks](/Task_panel "Task panel") tab.
   1. The Model tab shows you the contents and structure of your document.
   2. The Tasks tab is where FreeCAD will prompt you for values specific to the workbench and tool you are currently using (for example dimensions of an object).
4. The [Property editor](/Property_editor "Property editor") which appears when the Model tab is active in the interface. It allows managing the publicly exposed properties of the objects in the document. It consists of the Data and View sections, showing the visualization properties and the parametric properties of the objects respectively.
5. The [Selection view](/Selection_view "Selection view") which indicates the objects or sub-elements of objects (vertices, edges, faces) that are selected.
6. The [Report view](/Report_view "Report view") where messages, warnings and errors are shown.
7. The [Python console](/Python_console "Python console"). The Python console, where all the commands executed are printed, and where you can enter Python code.
8. The [Status bar](/Status_bar "Status bar") where some messages and tooltips appear.
9. The toolbar area, where the toolbars are docked.
10. The [workbench selector](/Std_Workbench "Std Workbench"), where you select the active [workbench](/Workbenches "Workbenches").
11. The [standard menu](/Standard_Menu "Standard Menu"), which holds basic operations of the program.

Most of the above panels can be hidden or revealed using the **View → Panels menu**

### Personalización de la interfaz

La interfaz de FreeCAD es altamente personalizable. Todos los paneles y barras de herramientas pueden moverse a diferentes lugares o apilarse unos sobre otros. También pueden cerrarse y reabrirse cuando sea necesario desde el menú Ver o haciendo clic con el botón derecho en un área vacía de la interfaz. Sin embargo, hay muchas más opciones disponibles, como la creación de barras de herramientas personalizadas con herramientas de cualquiera de las ambientes de trabajo, o la asignación y modificación de atajos de teclado.

Estas opciones de personalización avanzada están disponibles en el **Herramientas → Personalizar**:

![](/images/FreeCAD_022_Customization.png)

**Leer más**

- [Cómo empezar con FreeCAD](/Getting_started/es "Getting started/es")
- [Personalizar la interfaz](/Interface_Customization/es "Interface Customization/es")
- [Ambientes de trabajo](/Workbenches/es "Workbenches/es")
- [Más sobre Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/es&oldid=1537391>"
