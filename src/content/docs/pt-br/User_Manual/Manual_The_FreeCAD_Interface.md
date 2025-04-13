---
title: A_Interface_do_FreeCAD/pt-br|A Interface do FreeCAD
---

O FreeCAD usa o [framework Qt](<https://pt.wikipedia.org/wiki/Qt_(software)>) para desenhar e gerenciar sua interface. Este framework é utilizado em uma ampla gama de aplicativos, o que faz com que a interface do FreeCAD seja bastante clássica e não apresente dificuldades para ser entendida. A maioria dos botões são padrão e podem ser encontrados onde você espera **Arquivo → Abrir, Editar → Colar, etc**. Aqui está a aparência do FreeCAD quando você o abre pela primeira vez, logo após a instalação, mostrando o centro de início:

![](/images/FreeCAD_022_Start.png)

O centro de início é uma "tela de boas-vindas" conveniente, que exibe informações úteis para iniciantes, como os arquivos mais recentes com os quais você esteve trabalhando, as novidades no mundo do FreeCAD ou informações rápidas sobre as bancadas de trabalho mais comuns. Ele também notificará você se uma nova versão estável do FreeCAD estiver disponível.

Com o tempo, à medida que você se familiariza mais com o FreeCAD, pode ter feito alterações nas preferências para que, quando o FreeCAD iniciar, você seja direcionado diretamente para uma das bancadas de trabalho com um novo documento aberto. Ou, simplesmente, feche a aba da página inicial e crie um novo documento:

![](/images/FreeCAD_022_PartDesign.png)

### "Workbenches" (Bancadas de trabalho)

As Bancadas de Trabalho são grupos de ferramentas (botões de barra de ferramentas, menus e outros controles da interface) que são agrupadas por especialidade. Pense em uma oficina onde diferentes pessoas trabalham juntas: uma pessoa que trabalha com metal, outra com madeira. Cada uma delas tem, em sua oficina, uma mesa separada com ferramentas específicas para o seu trabalho. No entanto, todas podem trabalhar nos mesmos objetos. O mesmo acontece no FreeCAD.

In the context of FreeCAD, each Workbench is tailored to a particular type of task, organizing all the necessary tools for that activity in one interface. When switching between Workbenches, the set of tools and controls visible in the user interface adjusts to reflect the needs of the selected task, though the actual project contents or "scene" you are working on does not change. This allows for seamless transitions in workflow, such as beginning a design with basic 2D shapes in the Draft Workbench and then elaborating on these designs with advanced modeling tools in the Part Workbench.

The terms "Workbench" and "Module" are sometimes used interchangeably, but they have distinct meanings within FreeCAD. A Module is any extension that adds functionality to FreeCAD, while a Workbench is a specific kind of Module equipped with its own user interface components such as toolbars and menus, designed to facilitate specific types of tasks. Thus, every Workbench is a Module, but not every Module qualifies as a Workbench.

O controle mais importante da interface do FreeCAD é o seletor de Bancada de Trabalho, que você usa para alternar de uma bancada de trabalho para outra:

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

As Bancadas de Trabalho costumam confundir os novos usuários, pois nem sempre é fácil saber em qual bancada procurar uma ferramenta específica. Mas elas são rápidas de aprender, e após um curto período, isso se tornará natural — percebendo que é uma maneira conveniente de organizar a grande quantidade de ferramentas que o FreeCAD oferece. As Bancadas de Trabalho também são totalmente personalizáveis (veja abaixo). A mesma ferramenta pode aparecer em mais de uma bancada de trabalho. O ícone do botão de uma ferramenta específica será sempre o mesmo, independentemente da bancada em que ela aparecer.

### A interface

Vamos dar uma olhada mais detalhada nas diferentes partes da interface:

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

### Personalizando a interface

A interface do FreeCAD é altamente personalizável. Todos os painéis e barras de ferramentas podem ser movidos para diferentes locais ou empilhados um sobre o outro. Eles também podem ser fechados e reabertos conforme necessário, a partir do menu Visualizar ou clicando com o botão direito em uma área vazia da interface. Existem, no entanto, muitas outras opções disponíveis, como criar barras de ferramentas personalizadas com ferramentas de qualquer uma das bancadas de trabalho, ou atribuir e alterar atalhos de teclado.

Essas opções avançadas de personalização estão disponíveis no menu **Ferramentas → Personalizar**:

![](/images/FreeCAD_022_Customization.png)

**Leia mais**

- [Introdução ao FreeCAD](/Getting_started/pt-br "Getting started/pt-br")
- [Personalizando a interface](/Interface_Customization/pt-br "Interface Customization/pt-br")
- [Bancadas (Workbenches)](/Workbenches/pt-br "Workbenches/pt-br")
- [Mais sobre Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/pt-br&oldid=1537394>"
