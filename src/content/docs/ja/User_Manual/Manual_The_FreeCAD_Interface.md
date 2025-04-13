---
title: マニュアル：FreeCADのユーザーインタフェース
---

FreeCAD is based on the [Qt framework](<https://en.wikipedia.org/wiki/Qt_(software)>) and is characterized by a simple and straightforward interface. More experienced CAD users will be able to identify similarities with other software, while new users will find it easy to navigate and discover the various options FreeCAD offers. Here is the default look of FreeCAD:

![](/images/FreeCAD_022_Start.png)

The Start Page serves as the welcoming screen, designed to facilitate quick and easy access to the main areas of FreeCAD that a user might wish to explore. Through it, users can effortlessly create new parts, open recent files, and initiate 2D drafting. Additionally, it features shortcuts to helpful resources like tutorials and user forums, which are invaluable for both beginners and experienced users seeking guidance or tips. Users can easily customize the appearance of the Start Page according to their preferences.

As you become more proficient with FreeCAD, you might adjust the settings under preferences. This can configure FreeCAD to open directly into one of the Workbenches with a new document ready to go when you launch it. Alternatively, you can simply close the Start Page tab and manually create a new document.

![](/images/FreeCAD_022_PartDesign.png)

### ワークベンチ

FreeCAD employs a system called "Workbenches," similar to the conceptual frameworks used in advanced design software like Revit or CATIA. The idea of a Workbench is analogous to specialized stations in a scientific lab, where different workstations are equipped for distinct types of experiments. In a lab, you might have one area dedicated to chemistry, another to biology, and a third to physics, each outfitted with the specific tools needed for those disciplines.

In the context of FreeCAD, each Workbench is tailored to a particular type of task, organizing all the necessary tools for that activity in one interface. When switching between Workbenches, the set of tools and controls visible in the user interface adjusts to reflect the needs of the selected task, though the actual project contents or "scene" you are working on does not change. This allows for seamless transitions in workflow, such as beginning a design with basic 2D shapes in the Draft Workbench and then elaborating on these designs with advanced modeling tools in the Part Workbench.

The terms "Workbench" and "Module" are sometimes used interchangeably, but they have distinct meanings within FreeCAD. A Module is any extension that adds functionality to FreeCAD, while a Workbench is a specific kind of Module equipped with its own user interface components such as toolbars and menus, designed to facilitate specific types of tasks. Thus, every Workbench is a Module, but not every Module qualifies as a Workbench.

The most important control of the FreeCAD interface is the Workbench selector, which you use to switch from one Workbench to the other:

![](/images/FreeCAD_WB.png)

- ![](/images/Workbench_Assembly.svg) [アセンブリーワークベンチ](/Assembly_Workbench/ja "Assembly Workbench/ja")（Assembly）は機械的な部品の組み立てを構成し、拘束条件を解決するのためのワークベンチです。 [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) [BIM ワークベンチ](/BIM_Workbench/ja "BIM Workbench/ja")は建築の部材を操作し、[BIM（Building Information Modeling、建築情報モデル）](https://ja.wikipedia.org/wiki/BIM)を作成するためのものです。これは、Arch ワークベンチと、以前に BIM ワークベンチと呼ばれていた外部ワークベンチを統合したものです。0.21 and below.

- ![](/images/Workbench_CAM.svg) [CAM ワークベンチ](/CAM_Workbench/ja "CAM Workbench/ja")は G コードを生成するためのものです。このワークベンチは、以前は「パスワークベンチ」と呼ばれていました 0.21 and below。

- ![](/images/Workbench_Draft.svg) [ドラフトワークベンチ](/Draft_Workbench "Draft Workbench")（Draft）には 2D 用のツールと、基本的な 2D および 3D 操作のツールがあります。

- ![](/images/Workbench_FEM.svg) [FEM ワークベンチ](/FEM_Workbench/ja "FEM Workbench/ja")を使って有限要素解析（Finite Element Analysis、FEA）を行うことができます。

- ![](/images/Workbench_Inspection.svg) The [Inspection Workbench](/Inspection_Workbench "Inspection Workbench") is made to give you specific tools for the examination of shapes. Still in the early stages of development.

- ![](/images/Workbench_Material.svg) [マテリアルワークベンチ](/Material_Workbench "Material Workbench")（Material）は FreeCAD のマテリアルシステムを操作します。

- ![](/images/Workbench_Mesh.svg) The [メッシュワークベンチ](/Mesh_Workbench/ja "Mesh Workbench/ja")（Mesh）は三角形のメッシュで構成されるオブジェクトを扱うためのものです。

- ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD ワークベンチ](/OpenSCAD_Workbench/ja "OpenSCAD Workbench/ja")は OpenSCAD との相互運用性と、[構造的ソリッド幾何学](/Constructive_solid_geometry "Constructive solid geometry")（CSG）モデル履歴の修復のためのものです。

- ![](/images/Workbench_Part.svg) [パートワークベンチ](/Part_Workbench/ja "Part Workbench/ja")（Part）はプリミティブ図形とブーリアン変換による作業を行うためのワークベンチです。

- ![](/images/Workbench_PartDesign.svg) [パートデザインワークベンチ](/PartDesign_Workbench/ja "PartDesign Workbench/ja")（PartDesign）はスケッチをベースに部品を作成するためのワークベンチです。

- ![](/images/Workbench_Points.svg) [ポイント・ワークベンチ](/Points_Workbench/ja "Points Workbench/ja")（Points）は点群データーを扱うためのものです。

- ![](/images/Workbench_Reverse_Engineering.svg) The [Reverse Engineering Workbench](/Reverse_Engineering_Workbench "Reverse Engineering Workbench") is intended to provide specific tools to convert shapes/solids/meshes into parametric FreeCAD-compatible features.

- ![](/images/Workbench_Robot.svg) The [Robot Workbench](/Robot_Workbench "Robot Workbench") for studying robot movements. Currently unmaintained.

- ![](/images/Workbench_Sketcher.svg) [スケッチャーワークベンチ](/Sketcher_Workbench/ja "Sketcher Workbench/ja")（Sketcher）はスケッチを拘束条件によって作成するためのワークベンチです。

- ![](/images/Workbench_Spreadsheet.svg)[スプレッドシートワークベンチ](/Spreadsheet_Workbench/ja "Spreadsheet Workbench/ja")（Spreadsheet）はスプレッドシートを作成しデーターを管理するためのワークベンチです。

- ![](/images/Workbench_Surface.svg) The [Surface Workbench](/Surface_Workbench "Surface Workbench") provides tools to create and modify surfaces. It is similar to the [Part Builder](/Part_Builder "Part Builder") Face from edges option.

- ![](/images/Workbench_TechDraw.svg) [テックドローワークベンチ](/TechDraw_Workbench/ja "TechDraw Workbench/ja")（TechDraw）は 3D モデルから技術図面を作成するためのものです。[Drawing ワークベンチ](/Drawing_Workbench "Drawing Workbench")の後継です。

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

Workbenches often confuse new users, since it's not always easy to know in which Workbench to look for a specific tool. But they are quick to learn, and after a short while, they will feel natural. New users quickly realize that Workbenches are a convenient way to organize the multitude of tools FreeCAD has to offer. In addition, Workbenches are also fully customizable.

### ユーザーインタフェース

ユーザーインタフェースのそれぞれの部分について見ていきましょう。

![](/images/FreeCAD_022_Interface.png)

メインウィンドウはざっくり 11 の領域からなります。

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

### ユーザーインタフェースのカスタマイズ

The FreeCAD interface is designed for extensive customization. All toolbars and panels can be relocated, stacked, or even docked in various configurations according to user preference. Additionally, they can be closed and then reopened as required. Beyond these capabilities, users have numerous other options including the ability to create custom toolbars with tools selected from any of the available Workbenches, and to assign or modify keyboard shortcuts to streamline workflow. This flexibility ensures that users can tailor the environment to fit their specific needs and preferences.

These advanced customization options are available from the **Tools → Customize menu**:

![](/images/FreeCAD_022_Customization.png)

**参考情報**

- [Getting started with FreeCAD](/Getting_started "Getting started")
- [Customizing the interface](/Interface_Customization "Interface Customization")
- [Workbenches](/Workbenches "Workbenches")
- [More about Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/ja&oldid=1544506>"
