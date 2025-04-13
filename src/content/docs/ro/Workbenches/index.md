---
title: Ateliere
---

FreeCAD, la fel ca multe aplicații de design moderne, precum [Revit](http://en.wikipedia.org/wiki/Revit "wikipedia:Revit") sau [CATIA](http://en.wikipedia.org/wiki/CATIA "wikipedia:CATIA"), se bazează pe conceptul de [Workbench](http://en.wikipedia.org/wiki/Workbench "wikipedia:Workbench"). Un atelier poate fi considerat un set de instrumente special grupate pentru o anumită sarcină. Într-un atelier de mobilier tradițional, veți avea o masă de lucru pentru persoana care lucrează cu lemn, un altul pentru cel care lucrează cu piese de metal și poate un al treilea pentru tipul care montează toate piesele împreună.

În FreeCAD, se aplică același concept. Instrumentele sunt grupate în ateliere în funcție de sarcinile cu care sunt legate.

Când treceți de la un atelier la altul, se schimbă instrumentele disponibile pe interfață. Barele de instrumente, barele de comandă și, eventual, alte părți ale interfeței comută la noul tabel de lucru, dar conținutul scenei dvs. nu se schimbă. Ați putea, de exemplu, să începeți desenarea unor forme 2D cu Workbench Draft, apoi să lucrați mai departe pe ele cu Workbench Part.

Rețineți că uneori un Workbench este denumit "Modul". Cu toate acestea, atelierele de lucru și modulele sunt entități diferite. Un modul este orice extensie a FreeCAD, în timp ce un Workbench este o configurație GUI specială care grupează câteva bare de instrumente și meniuri. De obicei, fiecare modul conține propriul său Workbench, de unde și utilizarea încrucișată a numelui.

## Ateliere încorporate

### Current

Următoarele ateliere sunt disponibile pentru fiecare instalare FreeCAD:

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

## Ateliere externe

Atelierele de lucru FreeCAD sunt ușor de programat în [Python](/Python "Python"), prin urmare, mulți oameni dezvoltă ateliere suplimentare în afara grupului principal de dezvoltatori FreeCAD.

Pagina [external workbenches](/External_workbenches "External workbenches") conține câteva informații și tutoriale despre unele dintre ele, iar proiectul [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) are ca scop colectarea acestora și facilitarea instalării acestora în cadrul FreeCAD .

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/ro&oldid=1540536>"
