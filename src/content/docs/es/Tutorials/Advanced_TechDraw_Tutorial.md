---
title: Tutorial avanzado de TechDraw
---

:::caution
This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days.
:::

|                      |
| -------------------- |
| Tutorial             |
| Topic                |
| Modeling             |
| Level                |
| Experienced User     |
| Time to complete     |
| _Not provided_       |
| Authors              |
| domad                |
| FreeCAD version      |
| 0.19.23300 or higher |
| Example files        |
| _None_               |
| See also             |
| _None_               |
|                      |

## Objetivo en resumen

Cree puntos, líneas, círculos, arcos, etc. en las vistas de DibujoTécnico y/o dibujos "cosméticos" completos con absoluta precisión, adecuados a las herramientas de acotación con las que está equipado el banco de trabajo, para generar dibujos técnicos conformes y detallados.

## Introducción

Este tutorial introduce al usuario experimentado en el uso avanzado de herramientas y técnicas existentes en otros ambientes de trabajo para ampliar la funcionalidad que realmente falta en ![](/images/Workbench_TechDraw.svg) [Ambiente de trabajo DibujoTécnico](/TechDraw_Workbench/es "TechDraw Workbench/es").
Este tutorial no es una guía completa y exhaustiva del Ambiente de trabajo DibujoTécnico y muchas de las herramientas y capacidades no están cubiertas.
Debería contribuir a superar las dificultades que se encuentran al citar y enriquecer el dibujo técnico utilizando DibujoTécnico.
Este tutorial llevará a los usuarios avanzados a través de los pasos necesarios para producir dibujos técnicos desafiantes de la pieza del [Tutorial de Diseño Pieza básicas](/index.php?title=Basic_Part_Design_Tutorial/rs&action=edit&redlink=1 "Basic Part Design Tutorial/rs (page does not exist)") utilizando las herramientas de dibujo del

1. ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench") (lines, polylines, circumferences, arcs, splines, beziers, etc.), in particular the snaps, to create on the object effectively precise "cosmetic points" that could then be used for dimensioning in TechDraw.
2. It is also possible to use the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") as
   - generator of "base-sketchTD" (sketch bases for TechDraw) in 2D (e.g. such as system diagram, floor plans, elevations, views of mechanical or overall parts, etc.) or by
   - using directly the sketches that generated the 3D models, or by
   - converting to sketch the “facebinder” generated with Draft obtained from faces and/ or sections of the 3D models.
3. To obtain particular sections (cuts on different planes or axes) to be presented on the page in TechDraw (it is advised to use a copy of the original 3D object), then through the creation of planes (even on different axes) using the ![](/images/Workfeature_workbench_icon.svg) [Workfeature Workbench](/Workfeature_Workbench "Workfeature Workbench"), it is possible to section the copy of the 3D object ![](/images/Part_SliceApart.svg) [Part SliceApart](/Part_SliceApart "Part SliceApart") to obtain the faces to be converted into sketch ![](/images/Draft_Draft2Sketch.svg) [Draft Draft2Sketch](/Draft_Draft2Sketch "Draft Draft2Sketch") and then through the Sketcher Workbench edit them to make them suitable to the technical drawing that we are interested in generating in TechDraw. The [Workfeature Workbench](/Workfeature_Workbench "Workfeature Workbench") (and [Macro WorkFeatures](/Macro_WorkFeatures "Macro WorkFeatures")) are full of convenient additional functions, that allow us to easily create planes (theoretically infinite in extension and quantity) by selecting three points (vertices) _(remember that for three points passing, one and only one plane passes through three non-aligned points one and only one plane passes through three non-aligned points_) is a geometric axiom, which confirms without any ambiguity (!) the validity and importance of the WorkFeatureDev tool to create precise plans very easily.

(\*_This is quite comparable to AutoCAD Slice command [[1]](https://knowledge.autodesk.com/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ENU/AutoCAD-Core/files/GUID-27593C5E-4B89-41F2-872B-927D69517CBF-htm.html) which is based on that axiom. Without pre-building any new plane, a cutting plane using three points is defined._)

_Note: These planes can be joined together by overlapping/ coinciding of two edges using the Boolean feature of ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse "Part Fuse")._ The planes thus formed and suitably positioned (according to our provisions) will be used as \*_cutting blades_- ![](/images/Part_SliceApart.svg) [Part SliceApart](/Part_SliceApart "Part SliceApart"), cutting our 3D object into several parts according to the chosen planar confirmation.

## Antes de empezar

The Workbenches that are used to produce the drawings of the attached examples are:

- ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench")
- ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench")
- ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
- ![](/images/Workfeature_workbench_icon.svg) [Workfeature Workbench](/Workfeature_Workbench "Workfeature Workbench")
- ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench")

## La tarea

Etapas del procedimiento:

1. Creation of the 3D object(s) according to the canons of traditional modeling;
2. Possible creation of independent or simple copies, eg. to be used for the creation of specific continuous sections positioned on multiple planes or axes, and which then through the use of the "facebinder", "Draft to Sketch", Shape 2D View, etc. functions. it will allow us to produce perfect “Sketches”, then edit them to make them (by creating ad hoc “cosmetic points or lines”) usable in TechDraw; to these sketches I gave the name of "base-sketchTD";
3. insertion / creation of "base-sketchTD" in the layers of belonging (also with "drag and drop");
4. creation of the drawing page with its template;
5. creation of the view with TechDraw: select the layer or the grouping folder (which contains the “base-sketchTD”) from the structure, then click on the “insert view” button; TechDraw will insert the contents of the layer or grouping folder into the view. For a correct creation "base-sketchTD" must be perpendicular to the monitor / display view; I point out that whatever we add later in the layer or in the grouping-folder, or modifications of the “base-sketchTD”, will be updated in realtime in the TechDraw view. Keep in mind that updates and / or modifications may affect the dimensions already introduced or cosmetic lines created with the specific tool of TechDraw in the view.
6. once the “base-sketchTD” has been defined in the view, we can move on to dimensioning with the appropriate TechDraw tools;

It is possible to insert the "base-sketchTD" also in the projection group views:

- select the projection view -> properties tab -> Data -> “Projection” record section -> Source click on the button with the three dots and directly add the “base-sketchTD” or the layer that contains it.

: It should be noted that the "base-sketchTD" must be positioned on the highest face of the model / object, otherwise it will be hidden and will be invisible in TechDraw.

The sections obtained from the views do not seem to have this possibility.
Whenever it is necessary to create precise cosmetic points suitable for dimensioning (e.g. tangency points), they can be generated:

- in "Sketcher" through construction lines and inserting circles with infinitesimal diameter / radius (0.00001) in the ends, these will be seen by TechDraw as points / vertices suitable for dimensioning;
- in Draft with the same method to be inserted in the relevant layer or folder-grouping;

: once the "base-sketchTD" has been modified or the Draft object added in the layer or grouping folder, TechDraw will automatically update the view, if this does not happen, update manually with the appropriate command.

To insert section fills or patterns:  
pay attention to the lines created on the faces that intersect two or more edges, they are seen by TechDraw as separating elements of the face that affect the creation of the fills or patterns.
This occurs e.g. when creating the outer lines that define the thread of a hole, this line will prevent the fill or pattern from extending further preventing it from arriving on the one that defines the pre-drill hole. In this case it is better to create cosmetic points through construction lines by inserting circles of infinitesimal radius in the vertices that will be seen by TechDraw as cosmetic points and then join them in TechDraw with create cosmetic line by two points.  
All lines and / or paths (including cosmetic ones) that are displayed in the views can be edited in the formatting through TechDraw's “Change Apparence of selected Lines” command.  
To create specific continuous sections on different axes or planes, I used the “WorkFeatureDev” workbench which allows you to create “solid” planes, with a thickness of “0”, by selecting three vertices. These planes can be joined through a common or overlapping edge using the Boolean functions of the “Part” workbench and subsequently used for slicing / sectioning the solid model through the “Slice apart” command of the same workbench.
The faces of the cut objects can be suitably exploited for the creation, with the “Facebinder” function, the “base-sketchTD”s to produce specific section views in TechDraw and therefore to be able to dimension and detail them.  
I believe I have made public every "trick" (or rather system) experimented to be able to use more specific tools (not provided for TechDraw) and create high quality professional technical drawings without any limits, making the TechDraw workbench more efficient and adaptable to any need , in all likelihood on par (if not more flexible and powerful) than commercial peers.  
It should be said, which is not negligible, that with this system it is possible to create entire 2D files and quote them with TechDraw in the same way as "LibreCad" or "Autocad LT" or other two-dimensional cads.  
I hope I was clear enough (translation permitting) in explaining the procedure ("trick / system") that I believe to be "easier to do than to say", as it is all about being able to enter 2D drawings into the views of TDs created with "Draft" and / or with "Sketcher" simply by selecting them from the structure and creating a view in TD with the appropriate command "create a view"; but I thought of doing something pleasant and more technical by describing the procedure, certainly, in a "simplified" way to create a minimum of organized workflow.  
It is up to each of us, with imagination and inventiveness, to optimize it to the maximum to obtain the best result.  
I am attaching the files of some workflow examples of technical drawings (not feasible with TechDraw only) from which the images shown below were taken.  
In the hope of having been useful, good work and good experimentation!

## Notas

## Perspectivas de futuro

However, the described path could represent the starting point (or the idea) to write additional code to automate the system and integrate it directly into TechDraw with appropriate button / command functions.

## Enlaces

- [Macro WorkFeatures](https://wiki.freecadweb.org/Macro_WorkFeatures) Wiki page to macro
- [FreeCAD WorkFeature Workbench](https://github.com/Rentlau/WorkFeature-WB) Repository to source code
- [TechDraw without limits = Layout autocad](https://forum.freecadweb.org/viewtopic.php?t=54499) Forum Thread
- [TechDraw: – come utilizzare gli strumenti Draft/Snaps per creare “ vertici/punti cosmetici”](https://forum.freecadweb.org/viewtopic.php?f=28&t=53329) Forum Thread in Italian language

Retrieved from "<http://wiki.freecad.org/index.php?title=Advanced_TechDraw_Tutorial/es&oldid=1251841>"
