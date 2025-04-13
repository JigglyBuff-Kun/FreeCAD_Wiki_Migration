---
title: Tezgahlar
---

FreeCAD, [Revit](http://en.wikipedia.org/wiki/Revit "wikipedia:Revit") veya [CATIA](http://en.wikipedia.org/wiki/CATIA "wikipedia:CATIA") gibi birçok modern tasarım uygulamasına benzer olarak, [Tezgah](http://en.wikipedia.org/wiki/Workbench "wikipedia:Workbench") kavramına dayanmaktadır. Bir tezgah, belirli bir görev için özel olarak gruplandırılmış bir takım araçlar olarak düşünülebilir. Geleneksel bir mobilya atölyesinde, ahşapla çalışan için bir çalışma masası, metal parçalarıyla çalışan için başka bir çalışma masası ve montaj yapan kişi için üçüncü bir çalışma masası olacaktır.

FreeCAD, like many modern design applications such as [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit) or [CATIA](https://en.wikipedia.org/wiki/CATIA), is based on the concept of [Workbench](https://en.wikipedia.org/wiki/Workbench). A workbench can be considered as a set of tools specially grouped for a certain task. In a traditional furniture workshop, you would have a work table for the person who works with wood, another one for the one who works with metal pieces, and maybe a third one for the guy who mounts all the pieces together.

FreeCAD'de de aynı görüş geçerlidir. Araçlar, ilgili oldukları görevlere göre tezgahlarda gruplanır.

Bir tezgahtan diğerine geçtiğinizde, arayüzde mevcut olan araçlar değişir. Araç çubukları, komut çubukları ve arayüzün muhtemelen diğer kısımları yeni tezgahlara geçer, ancak sahnenizin içeriği değişmez. Örneğin, Taslak Tezgahı ile 2D şekiller çizmeye başlayabilir, daha sonra Parça Tezgahı ile nesne üzerinde daha fazla çalışabilirsiniz.

Bazen bir Tezgahın _Modül_ olarak adlandırıldığını unutmayın . Ancak, Tezgahlar ve Modüller farklı varlıklardır. Bir Modül, FreeCAD'in bir uzantısıdır, Tezgah ise bazı araç çubuklarını ve menüleri gruplayan özel bir GUI yapılandırmasıdır. Genellikle her modül kendi tezgahını içerir, bu nedenle ismin çapraz kullanımıdır.

## Yerleşik tezgahlar

### Current

Aşağıdaki tezgahlar bütün FreeCAD kurulumlarında bulunur:

- ![](/images/Freecad.svg) [Std Base](/Std_Base "Std Base"). This is not really a workbench, but rather a category of 'standard' commands and tools that can be used in all workbenches.

- ![](/images/Workbench_Assembly.svg) The [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") for building and solving mechanical assemblies. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) The [BIM Workbench](/BIM_Workbench "BIM Workbench") for working with architectural elements and creating [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) models. It combines the Arch Workbench and the formerly external BIM Workbench available in 0.21 and below.

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

### Obsolete

The following workbenches are no longer included after version 0.21:

- ![](/images/Workbench_Start.svg) The [Start Workbench](/Start_Workbench "Start Workbench") allows you to quickly jump to one of the most common workbenches. This workbench has been replaced by the Start page that can be accessed via the [Help menu](/Std_Help_Menu "Std Help Menu").

- ![](/images/Workbench_Web.svg) The [Web Workbench](/Web_Workbench "Web Workbench") provides you with a browser window instead of the [3D view](/3D_view "3D view") within FreeCAD.

The following workbenches are no longer included after version 0.20:

- ![](/images/Workbench_Drawing.svg) The [Drawing Workbench](/Drawing_Workbench "Drawing Workbench") was used for producing technical drawings. The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") is its more advanced replacement.

- ![](/images/Workbench_Image.svg) The [Image Workbench](/Image_Workbench "Image Workbench") was used for working with bitmap images. Its functionality has been integrated in [Std Base](/Std_Base "Std Base"). See [Std Import](/Std_Import "Std Import") and [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage").

- ![](/images/Workbench_Raytracing.svg) The [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench") was used for ray-tracing (rendering). The external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) should be used instead.

## Program dışı tezgahlar

FreeCAD çalışma tezgahlarının Python'da programlanması kolaydır , bu nedenle FreeCAD ana geliştiricilerinin dışında ek çalışma tezgahları geliştiren birçok insan vardır.

[3. Parti tezgahlar](/External_workbenches "External workbenches") sayfasında, bu tezgahlardan bir kısmı hakkında bilgi bulabilir ve kılavuzlarına ulaşabilirsiniz. Ayrıca [FreeCAD Eklentileri](https://github.com/FreeCAD/FreeCAD-addons) projesi bu çalışmaları FreeCAD içinden kolayca yüklenebilir hale getirmeyi amaçlamaktadır.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/tr&oldid=1540519>"
