---
title: Workbenches
---

O FreeCAD, como outros programas como o [Revit](http://en.wikipedia.org/wiki/Revit "wikipedia:Revit") ou [Catia](http://en.wikipedia.org/wiki/CATIA "wikipedia:CATIA"), é baseado no conceito de bancadas. Uma bancada pode ser considerada como um conjunto de ferramentas agrupadas para fazer uma certa tarefa. Numa oficina de carpintaria tradicional, haveria uma mesa para a pessoa que trabalha com madeira, outra para peças metálicas, e talvez uma terceira para a pessoa que faz a montagem das várias peças.

No FreeCAD aplica-se o mesmo conceito. As ferramentas são agrupadas em bancadas de acordo com as tarefas em que são usadas.

Quando muda de uma bancada para a outra, as ferramentas disponíveis no interface mudam. As barras de ferramentas, barras de comandos e eventualmente outras partes do interface mudam com a nova bancada, mas os conteúdos do seu trabalho não mudam. Poderia, por exemplo, começar a desenhar formas em 2D com a Bancada de Desenho, e depois fazer mais trabalho na Bancada de Peças.

Perceba que algumas vezes um Bancada é referida como um _Módulo_. Entretanto, Bancadas e Módulos são entidades diferentes. Um Módulo é qualquer extensão do FreeCAD, enquanto uma Bancada é um tipo especial de Módulo com uma configuração de GUI (barras de ferramentas e menus)

## Bancadas de Trabalho Pré-instaladas

### Atual

As seguintes Bancadas são disponibilizadas com qualquer instalação do FreeCAD

- ![](/images/Freecad.svg) [Std Base](/Std_Base "Std Base"). Essa não é realmente uma bancada, mas sim uma categoria de comandos e ferramentas "padrões" que podem ser usadas em todas bancadas.

- ![](/images/Workbench_Assembly.svg) A [Bancada Assembly](/Assembly_Workbench "Assembly Workbench") para construção e resolução de montagens mecânicas. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) A [Bancada BIM](/BIM_Workbench "BIM Workbench") para trabalho com elementos e criação de modelos arquiteturais [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Ela combina a Bancada Arch e a antiga Bancada externa BIM disponível em 0.21 and below.

- ![](/images/Workbench_CAM.svg) The [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce G-Code instructions. This workbench was called "Path Workbench" in 0.21 and below.

- ![](/images/Workbench_Draft.svg) The [Draft Workbench](/Draft_Workbench "Draft Workbench") contains 2D tools and basic 2D and 3D CAD operations.

- ![](/images/Workbench_FEM.svg) The [FEM Workbench](/FEM_Workbench "FEM Workbench") provides Finite Element Analysis (FEA) workflow.

- ![](/images/Workbench_Inspection.svg) The [Inspection Workbench](/Inspection_Workbench "Inspection Workbench") is made to give you specific tools for examination of shapes. Still in the early stages of development.

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

### Obsoleto

As seguintes bancadas de trabalho não estão mais incluídos após a versão 0.21:

- ![](/images/Workbench_Start.svg) The [Start Workbench](/Start_Workbench "Start Workbench") allows you to quickly jump to one of the most common workbenches. This workbench has been replaced by the Start page that can be accessed via the [Help menu](/Std_Help_Menu "Std Help Menu").

- ![](/images/Workbench_Web.svg) The [Web Workbench](/Web_Workbench "Web Workbench") provides you with a browser window instead of the [3D view](/3D_view "3D view") within FreeCAD.

The following workbenches are no longer included after version 0.20:

- ![](/images/Workbench_Drawing.svg) The [Drawing Workbench](/Drawing_Workbench "Drawing Workbench") was used for producing technical drawings. The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") is its more advanced replacement.

- ![](/images/Workbench_Image.svg) The [Image Workbench](/Image_Workbench "Image Workbench") was used for working with bitmap images. Its functionality has been integrated in [Std Base](/Std_Base "Std Base"). See [Std Import](/Std_Import "Std Import") and [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage").

- ![](/images/Workbench_Raytracing.svg) The [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench") was used for ray-tracing (rendering). The external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) should be used instead.

## External workbenches

FreeCAD workbenches are easy to program in [Python](/Python "Python"), there are therefore many people developing additional workbenches outside of the FreeCAD main development area.

The [external workbenches](/External_workbenches "External workbenches") page lists all that are known to this community. Most are easily installable from within FreeCAD, using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"), found under menu **Tools → ![](/images/Std_AddonMgr.svg) Addon manager**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/pt&oldid=1540522>"
