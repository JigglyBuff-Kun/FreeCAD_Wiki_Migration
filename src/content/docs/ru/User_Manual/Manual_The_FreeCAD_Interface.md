---
title: Интерфейс FreeCAD
---

FreeCAD использует [оболочку Qt](https://ru.wikipedia.org/wiki/Qt) для построения своего интерфейса. Эта оболочка используется во множестве приложений, поэтому интерфейс FreeCAD interface вполне классический и не представляет сложностей для понимания. Большинство кнопок стандартны и находятся там, где ожидается (**Файл → Открыть, Правка → Вставить, и т.д.**). Вот как выглядит FreeCAD при первом запуске прямо после установки, когда показывается Центр Запуска:

![](/images/FreeCAD_022_Start.png)

Центр запуска это общий "пригласительный экран", который показывает полезную информацию для новичков, вроде последних обрабатываемых файлов, новостей в мире FreeCAD или быструю информацию о самых употребительных Верстаках. Он так же известит Вас при появлении новой стабильной версии FreeCAD.

Спустя некоторое время, когда Вы больше познакомитесь с FreeCAD, Вы можете сделать изменения в предпочтениях, чтобы при старте FreeCADа Вы оказывались прямо в одном из верстаков с новым открытым документом. Или просто закройте стартовую страницу и создайте новый документ:

![](/images/FreeCAD_022_PartDesign.png)

### Верстаки

Верстаки - это группы инструментов (панели инструментов, меню, и прочие элементы управления), сгруппированные по специальности. Представьте мастерскую, где разные люди работают вместе: одни с металлом, другие с деревом. Каждый из них имеет отдельный стол с особенными инструментами для их работы. Тем не менее, они все могут работать над одним и тем же объектом. То же и в FreeCAD.

In the context of FreeCAD, each Workbench is tailored to a particular type of task, organizing all the necessary tools for that activity in one interface. When switching between Workbenches, the set of tools and controls visible in the user interface adjusts to reflect the needs of the selected task, though the actual project contents or "scene" you are working on does not change. This allows for seamless transitions in workflow, such as beginning a design with basic 2D shapes in the Draft Workbench and then elaborating on these designs with advanced modeling tools in the Part Workbench.

The terms "Workbench" and "Module" are sometimes used interchangeably, but they have distinct meanings within FreeCAD. A Module is any extension that adds functionality to FreeCAD, while a Workbench is a specific kind of Module equipped with its own user interface components such as toolbars and menus, designed to facilitate specific types of tasks. Thus, every Workbench is a Module, but not every Module qualifies as a Workbench.

Важнейший элемент управления в FreeCAD это переключатель Верстаков, для перехода от одного верстака к другому.

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

Верстаки часто смущают новых пользователей, поскольку не всегда понятно, где искать нужный инструмент. Но их легко изучить, и вскоре Вы почувствуете их суть - как удобный путь для организации множества инструментов, которые может предложить FreeCAD. Workbenches так же полностью настраиваемы. Те же инструменты могут появляться в разных верстаках. Иконка кнопки отдельного инструмента будет той же вне зависимости от того, в каком верстаке она появится.

### Интерфейс

Давайте приглядимся к различным частям интерфейса:

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

### Настройка интерфейса

Интерфейс FreeCAD глубоко настраиваем. Все панели и инструменты могут перемещаться в разные места или накладывать друг на друга. Они так же могут быть закрыты и открыты при необходимости через меню Вид или правым кликом на пустом месте интерфейса. Однако доступны много других опций, вроде создания пользовательских панелей инструментов с инструментами из других Верстаков, или назначение и изменение клавиатурных сокращений.

Продвинутые опции настройки доступны через **Панели инструментов → Настройка**:

![](/images/FreeCAD_022_Customization.png)

**Читать далее**

- [Первые шаги с FreeCAD](/Getting_started/ru "Getting started/ru")
- [Настройка интерфейса](/Interface_Customization/ru "Interface Customization/ru")
- [Верстаки FreeCAD](/Workbenches/ru "Workbenches/ru")
- [О языке Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/ru&oldid=1537401>"
