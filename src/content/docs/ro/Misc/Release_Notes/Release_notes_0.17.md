---
title: Note despre Ediția 0.17
---
*Aceasată ediție FreeCAD este dedicată prietenului nostru Roland Frank [who left us in 2017](https://forum.freecadweb.org/viewtopic.php?f=8&t=25673). A fost un membru activ și bine-apreciat a forumului FreeCAD, și tutorialele sale de la [Learn FreeCAD](https://www.youtube.com/watch?v=_HEvhclR4-o&list=PL6fZ68Cq3L8k0JhxnIVjZQN26cn9idJrj) și [BPLFRE](https://www.youtube.com/watch?v=m49z0weonog&list=PLsrwVwvqYb8G4Ri0iz1JIebsOXkgoytAY) de pe canalul Youtube au ajutate mulți oameni să facă primii pași în FreeCAD.*

FreeCAD 0.17 a fost lansat în 06 April, 2018, puteți să-l descărcați de pe [Download](/Download "Download") page. Acesta este un sumar a celor mai interesante schimbări. Lista completă a schimbărilor poate fi găsită în [MantisBT bugtracker FC 0.17 changelog](https://www.freecadweb.org/tracker/changelog_page.php?version_id=73).

Notele despre edițiile mai vechi din FreeCAD pot fi găsite în [Getting started](/Getting_started "Getting started").

![](/images/Release017_Title.jpg)

*Garden Railway Coach O&K (by FreeCAD-User "Garden Railway Coach O&K", see [Users Showcase](http://forum.freecadweb.org/viewtopic.php?f=24&t=17261))*

## Repere

Au trecut 2 ani de la ediția precedentă 0.16, dar echipa FreeCAD nu a rămas inactivă în această perioadă. Mai mult de 6.800 de revizuiri au fost adăugate în codul sursă al lui FreeCAD. Pentru comparație, acest lucru este de peste trei ori munca făcută între v0.16 și v0.15! Cele mai multe ateliere de lucru existente au beneficiat de îmbunătățiri și au fost adăugate două ateliere de lucru complet noi. Module noi au fost dezvoltate de către comunitate. Unele dintre cele mai importante:

**Atelierul PartDesign**a fost complet revizuit. Un nou container al Corpului deține un lanț de caracteristici și ridică cerința de mapare a schițelor la fațetele plane. Instrumentele noi pentru a crea geometria de referință (referință), cum ar fi punctele, axele și planurile, fac PartDesign mult mai versatil.

![](/images/PartDesign_Body_tree.png)

Noul [Addon Manager](/Std_AddonMgr "Std AddonMgr") disponibil din Tools menu (care înainte era disponibil ca [addons installer macro](https://github.com/FreeCAD/FreeCAD-addons)) face instalrea și actulaizarea modulelor add-on și macros mult mai facilă și standardizată în Windows, Mac OS X și Linux.

![](/images/Addon_manager_v017.png)

**Sketcher** suportă acum crearea de curbeB-spline cu mai mult acăi și mijloace de control a curbelor și afișarea a informațiilor despre curbe.

![](/images/FC017_Sketcher_B-spline_01.png)

Noul **Atelier TechDraw**  își propune să înlocuiască atelierul Drawing, și tot odată furnizează mai multe caracteristici decât vechiul Atelier Drawing .
![](/images/TechDraw_Workbench_Example.png)

## General

* Yorik van Havre redactat "[The FreeCAD Manual](/Manual:Introduction "Manual:Introduction")" ca o introducere în cum se folosește FreeCAD.
* Actualizările de Document pot fi acum dezactivate/activate prin meniul contextual.
* There's a new Revit navigation style.
* Un nou indicator de Navigație în partea de jos dreapta a ferestrei FreeCAD window permite un acces rapid la stiluriel de navigație.

![](/images/FC017_Navigation_Indicator_01.png) ![](/images/FC017_Navigation_Indicator_02.png)

* The [dependency graph](/Std_DependencyGraph "Std DependencyGraph") benefited from graphical enhancements.
* STEP import leverages the new [Part container](/Std_Part "Std Part") and uses it to organize an imported STEP assembly into sub-assemblies, now more closely following the original document's structure. stpZ (a compressed STEP format) is now supported.
* Cea mai marea parte din iconițele FreeCAD au fost refăcute pentru o mai bună conformare la directivele/orientările Tango .

* Proiectul FreeCAD recunoaște contribuțiile comunității sale prin adăugarea unei file Credits în dialogul "About FreeCAD". Licențele noi și lista cu librăriile sub licență FreeCAD și furnizează informații despre bibliotecile terțe utilizate.

![](/images/AboutFreeCAD_Credits.png)

## Atelierul Arch

* Noul instrument [Arch Schedule](/Arch_Schedule "Arch Schedule"): Acest instrument a fost complet rescris , și oferă acum mai multă flexibilitate pentru a aduna date din document într-o spreadsheet, folosind diferite chestionări , ca numărarea tuturor obiectelor de un anumit tip, sau însumarea volumului total unei anumite categorii de obiecte.

* New set of [piping tools](/Arch_Pipe "Arch Pipe") to design piping systems. You can use lines, sketches or wires as a base to place tubes, and automatically create connections between 2 or 3 tubes.

* The [Arch Structure](/Arch_Structure "Arch Structure") tool has now been extended with a series of new presets to build precast concrete elements.

* During the [Google Summer of Code](/Google_Summer_of_Code "Google Summer of Code") 2017 edition, to which FreeCAD participated, the [Arch Rebar](/Arch_Rebar "Arch Rebar") tool was greatly extended and gained a friendly User Interface to easily add several standard types of Reinforcement bars to your concrete structures.

![](/images/Arch_Rebar_preview.png)

* [Windows](/Arch_Window "Arch Window") gained several enhancements, such as the possibility to define subcomponents as openable, show opening symbols, appear open, and have louver panels.

![](/images/Arch_Door_preview.png)

* [Arch Axis](/Arch_Axis "Arch Axis") tools have also been rewritten, and allow more complex systems by combining different series of axes together. They can also be customized to show different kinds of situations such as levels.

* A new [Arch Grid](/Arch_Grid "Arch Grid") tool allows to easily create spreadsheet-like base objects by stretching, joining or splitting cells. These grid objects can then be used as axes systems, or as bases for complex window or panel arrangements.

* New [Panel tools](/Arch_Panel_Cut "Arch Panel Cut") were specifically designed for panel constructions. They allow to build a model composed of [Arch Panels](/Arch_Panel "Arch Panel"), and then generate cutting sheets that can be used by the [Path Workbench](/Path_Workbench "Path Workbench") to generate cutting machine code.

* A new [Nesting](/Arch_Nest "Arch Nest") tool (still experimental), allows to compose cut sheets by automatically placing 2D shapes in a containing shape.

* [Multi-materials](/Arch_MultiMaterial "Arch MultiMaterial") have been introduced in the Arch workbench. They allow to automatically create multilayer walls, or control the different material of compound objects such as windows.

* The Arch Workbench OBJ and DAE exporter now support materials, both when importing and exporting.

* Import support for the [3DS](/Arch_3DS "Arch 3DS") format has been added.

## Atelierul Desen 2D

* [Autogroup system](/Draft_AutoGroup "Draft AutoGroup"): Atelierul Draft are acum un buton de grupare automată pe bara principală de instrumente. Când este activată, toate obiectele nou create în Draft și Arch vor fi automat plasate în acel grup.

* [Slope tool](/Draft_Slope "Draft Slope"): When used on a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire"), this tool will allow you to give it a given slope/inclination. That is, the intermediate and end points will get a lower Z value, so the whole object gets a constant inclination. This is useful to use Lines or Wires as bases for objects that needs a precise inclination, such as roof panes or sewer pipes.

* [Working Plane proxies](/Draft_SetWorkingPlaneProxy "Draft SetWorkingPlaneProxy"): When working with [Draft working planes](/Draft_SelectPlane "Draft SelectPlane"), you often need to store working plane locations that you use often. This is now possible by placing one of those proxies in your document. It will remember the current working plane location, and can also restore the current view and/or objects visibility.

![](/images/Draft_WP_preview.png)

* [Draft Stretch](/Draft_Stretch "Draft Stretch"): The Draft workbench now has a stretch tool, that allows to move vertices of several Draft objects at once.

* [Draft Label](/Draft_Label "Draft Label"): With this tool, one can place labels in the document, which as composed of a piece of text and a leader line that can be free or stick to a specific object. The text can be made to display a custom piece of text, or automatically display the contents of a property of the target object.

![](/images/Draft_Label_Preview.png)

## Atelierul AnalizaElementuluiFinit

* FEM Mesh
  + **Gmsh object** rste un obiect plasaă , care permite utilizarea instrumentului de interfață Gmesh în interiorul FreeCAD. Diferite oțiuni de Gmesh sunt suportate.
  + **Boundary layer object for gmsh** face posibil să se creeze un strat limită .
  + **Mesh group object for gmsh** face posibil să se creeze noduri și grupuri de elemente . Numele poate fi schimba t de către utilizator.
  + **Mesh region object for gmsh** face posibil să se definează regiuni de plasă cu diferite mărimi pentru noduri, laturi, fațeteși volume.
  + **GUI clear mesh tool** clears the mesh but keeps all mesh adjustments. This is very handy if files should be shared.
  + **GUI print mesh info tool** print all kind of mesh informations.
  + **GUI mesh view provider** is able to display quad face mesh as well as hexaeder, pentaeder and pyramid mesh elements.
  + **Mesh data model** was updated to SMESH to version 7.7.1 <https://github.com/FreeCAD/FreeCAD/commit/666a3e5a>
  + **Mesh API** was extended to read mesh group data out of the FreeCAD SMESH FEM mesh data by Python. This was the base for the Gmsh group object.
  + **Mesh API** was extended to export mesh groups to Abaqus and CalculiX inp file format.
  + **FEM mesh 2 mesh tool** converts a surface of a volume mesh into a mesh for FreeCAD's mesh module.
  + **Mesh problems:** Non-positive Jacobians are an often seen problem in FEM meshes. Elements which have non-positive Jacobians in CalculiX solver are colored in FreeCAD.
  + **Fenics** Import and export of Fenics mesh format has been added.

* Objects
  + **Beam rotation object** enables the analysis of beams rotated around their main axis.
  + **Nonlinear material object** adds nonlinear material behavior to FreeCAD FEM. It supports linear change of stress strain curve.
  + **Fluid material** ...
  + **Constraint initial flow velocity** ...
  + **Constraint fluid boundary**
  + **Constraint electrostatic potential** ...
  + **Constraint body heat source** ...
  + **Constraint transform** ...
  + **Constraint temperature** ...
  + **Constraint contact** ...
  + **Constraint plane rotation** ...
  + **Constraint self weight** ...

* Solver
  + **Solver frame work** was written from scratch during a Google Summer of Code project.
  + Support for FEM solver software **ElmerFEM**, <https://www.csc.fi/web/elmer>, was added.
  + Inside the solver frame work the analysis type can be chosen by an **equation object** (Elmer solver only, ATM.)
  + Basic support for FEM solver software **Z88**, <https://en.z88.de/z88os/>, was added.
  + **CalculiX** was ported to the solver frame work. The ccxtools solver object remains in FreeCAD FEM because it is very well tested and has extended pre checks.

* Calculix analysis
  + **Coupled Thermal Structural Analysis** ...
  + **1D pipe Flow analysis Analysis** ...
  + **Coupled Beam Shell Solid models** ...

* Standard Post Processing
  + **Shell and beam 3D output** Make it possible to output shell and beam analysis as 3D solid output to see stresses in sections.
  + **Peeq strain** Support for equivalent plastic strain has been added to the result object, result reader and vtk post processing.

* Extended Post Processing
  + '*VTK* An extended post processing based on VTK has been added.
  + **Clip filter** ...
  + **Scalar clip filter** ...
  + **Cut filter** ...
  + **Wrap vector filter** ...
  + **Linearized stresses** ...
  + **Data at point** A tool to get the result data for a specific point.
  + **Data along line** A tool to get the result data for a specific line printed as a diagram.

* Fixes, code and other stuff
  + The **unit tests suite** for FEM work bench has been extended.
  + The **code basis** has been massively improved.
  + Most of FEM code has been ported to **Python3**.
  + Furthermore there have been **tons of bugs** found and fixed.
  + All **icons** have been nicely redrawn and in conjunction with guidelines.
  + **Code formating** There should be no more tabs and white spaces in all FEM source code.
  + Python codes is according most rules of **flake8**.
  + Dozens of **typos** inside source code have been fixed (AFAIK this applies to all FreeCAD, luzpaz finds all of them like finding a needle in the haystack).

* Some Pictures

![](/images/Bridge-all.png)
![](/images/Bridge-detail.png)

## Atelierul Piese

* Kernelul de modelare geometrică Open Cascade a fost actualizat de la 6.8.0 la 7.2.0 (actuala versiune OCC poate depinde de platformă / distro). Această versiune aduce o mulțime de corecții de eroare în operațiile booleene, algoritmul de eliminare a liniei ascunse, precum și permiterea adăugării de noi caracteristici la atelierul Piese.

* New features: [Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), [Slice](/Part_Slice "Part Slice") and [XOR](/Part_XOR "Part XOR").

* Thanks to the new features above, composite solids (compsolids) can now be created in FreeCAD. They are of great use in FEM.

* [Connect](/Part_JoinConnect "Part JoinConnect") performance and reliability were improved, and the tool was made more versatile.

* New feature: [2D Offset](/Part_Offset2D "Part Offset2D"), to offset planar wires.

* Enhancement: [Part Extrude](/Part_Extrude "Part Extrude") tool now supports parametric Normal direction, direction controlled by linked edge, reversing, 2nd length, 2nd taper angle, and symmetric. Also, Make Solid checkbox is now checked automatically if you open dialog and the selected object is a closed wire (e.g., a sketch).

* Enhancement: [Part Revolve](/Part_Revolve "Part Revolve") tool now supports parametric link to revolution axis.

* The new [Part EditAttachment](/Part_EditAttachment "Part EditAttachment") utility accessible from the *Part → Attachment…* menu can be used to attach most types of objects to other geometry parametrically.

* The new [Part container](/Std_Part "Std Part") can be used to group most types of shapes and to move them as a unit. It also contains standard planes and axes to attach objects to. It will serve as basis for the future Assembly workbench by providing a way to move parts around. It is available in all workbenches from a toolbar along with [Group](/Std_Group "Std Group").

## Atelierul PartDesign

Atelierul PartDesign a suferit schimbări masive, fructul eforturilor combinare a mai multor dezvoltatori de-a lungul unei perioade de peste 5 ani.
![](/images/PartDesign017-teaser-motor-core.png)

* The new [Body](/PartDesign_Body "PartDesign Body") container holds a chain of of PartDesign features making up a single contiguous solid. It also contains standard planes and axes to attach objects to. Thanks to the Body container, it is no longer necessary to map sketches to faces when adding features. This requirement was a major limitation of the old PartDesign, that could cause many models to break upon parameter changes. So, it is now recommended to avoid mapping sketches to faces whenever possible.

* New additive and subtractive features: [Primitives](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [Loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"), [Sweep](/PartDesign_AdditivePipe "PartDesign AdditivePipe"), [Thickness](/PartDesign_Thickness "PartDesign Thickness").

* New datum features, which are [planes](/PartDesign_Plane "PartDesign Plane"), [lines](/PartDesign_Line "PartDesign Line") and [points](/PartDesign_Point "PartDesign Point") useful for placing sketches, alignment, and serving as axes of revolution.

* New automatic workbench switching between PartDesign and Sketcher. When creating a new sketch from within the PartDesign workbench, once the sketch attachment is set, the UI automatically switches to the Sketcher workbench and its tools in editing mode. When the sketch is closed, the UI switches back to the PartDesign workbench, and restores the view to its previous state. Thus the Sketcher tools were removed from the PartDesign toolbars to liberate space for the new PartDesign features.

## Atelierul Traiectorie

Atelierul Path a fost revizuit masiv în versiunea 0.17. Revizia a vizat eliminarea tuturor codurilor HeeksCNC mai vechi și înlocuirea ambalajului libation python cu noul modul Path-Area. Ca urmare, operațiunile au devenit mult mai puternice, mai rapide, cu o bază de cod simplificată.

* Support for 2.5D operations is complete including [contour](/Path_Profile "Path Profile"), [face-milling](/Path_MillFace "Path MillFace"), [pocketing](/Path_Pocket_Shape "Path Pocket Shape"), [profiling](/Path_Profile "Path Profile"), and [drilling](/Path_Drilling "Path Drilling")

* Limited support for [3D pocketing](/Path_Pocket_3D "Path Pocket 3D") operations.

* Path can use [Arch Panel](/Arch_Panel "Arch Panel") as base object to group multiple parts together for 2D cutting.

* Introduction of [Path Job](/Path_Job "Path Job"). The job is now a central object of the path workflow. It organizes and coordinates multiple operations, tools, stock material, part orientation and alignment. A customized Job can be saved as a 'Job Template' and re-used to streamline the setup of future jobs. Job SetupSheets provide a mechanism to automate the configuration of depth and speed settings.

* All operations have a consistent task panel organization

* New or improved [post-processors](/Path_Post "Path Post") for LinuxCNC, Smoothieboard, GRBL, Phillips, OpenSBP (shopbot), Roland Modela, Centroid, Fablin, and Dynapath. Most post-processors support arguments.

* Improved [tool library](/Path_ToolLibraryEdit "Path ToolLibraryEdit") and editor.

* [Path Inspect](/Path_Inspect "Path Inspect") tool allows highlighting individual commands to visualize path and explore gcode.

* [Path Simulator](/Path_Simulator "Path Simulator") tool does 3D simulated cutting to visualize Path execution

* Dress-up operations can be used to refine core operations and add additional complexity. Dressups exist for ['dogbone'](/Path_DressupDogbone "Path DressupDogbone") corners, [holding tags](/Path_DressupTag "Path DressupTag"), [ramp entry](/Path_DressupRampEntry "Path DressupRampEntry"), and [dragknife](/Path_DressupDragKnife "Path DressupDragKnife") 'corner actions'

## Atelierul Sketcher

* Sketches pot fi atașate acum într-o varietate largă de modalități, nu numai pe fațetele plate, așa cum se întâmpla. O importanță deosebită este atașamentul perpendicular pe muchii, util pentru realizarea profilelor pentru [sweeping](/Part_Sweep "Part Sweep").

* External geometry links are no longer limited to only the object the sketch is mapped to. Geometry from other sketches is supported. External geometry links can be created within a Part container, or a Body container, or even a whole project if Part and Body containers are not used.

* Visibility automation: now, when you start editing a sketch, objects depending on it are automatically hidden to unclutter the view, and objects used for external geometry links are automatically shown; old visibilities are restored as you close the sketch.

* New constraint continuous creation mode: constraint tools are now active even without any element selected. Press a constraint, then select objects to apply the constraint to.

* New arc of hyperbola and arc of parabola creation tools.

* New Extend edge editing tool.

* New B-spline creation tool, with many ways to control curves (degree, knot multiplicity, control point weight) and display information (control polygon, curvature comb, knot multiplicity indicator).

![](/images/FC017_Sketcher_B-spline_01.png)

* New **Carbon Copy** tool to copy geometry from another sketch.

* Virtual space switches all constraints to a different "virtual space", in effect hiding them from view.

* Constraints List box includes ability to hide internal alignment, as well as individual hiding of constraints with a checkbox.

* The Block constraint removes all degrees of freedom for a geometry element in place with the use of a single constraint. It should be particularly useful to work with B-Splines, which are cumbersome to constrain.

* New Regular polygon with user defined number of sides.

* Alternative sketch solvers available through *Show Advanced Solver Control in Task Bar* in Sketcher preferences.

* Geometry style based rendering order allows reordering between normal, construction and external geometry. Useful when these type of geometry overlap.

* The solver now automatically substitutes a combination of coincident constraint + tangent constraint with a point-on-point tangent constraint, as the former is an improper use that induces tolerance error that can cause further problems in the model. The user is advised of the substitution by a dialog which can be disabled in Sketcher preferences by unchecking "Notify automatic constraint substitutions".

* New tick box in edit mode task view "Avoid redundant auto constraints"

* Horizontal and Vertical constraints can be used to align selected points.

## Atelierul Foaie de Calcul

* Un importator de fișiere Excel a fost adăugat.

## Atelierul Surface

* O nouo plusvaloare în v0.17, pentru moment, atelierul de lucru Surface are 4 comenzi de creare a suprafeței.

## Atelierul Desen Tehnic

[TechDraw](/TechDraw_Workbench "TechDraw Workbench") este un nou atelier de lucru pentru crearea unor desene tehnice și care are ca scop înlocuirea bătrânului atelier Drawing. FreeCAD v0.17 este încă livrat împreună cu atelierul de lucru Drawing, astfel încât să puteți deschide și să editați fișierele care conțin pagini de Drawing, dar Drawing va fi eliminat treptat într-o versiune ulterioară. Unele dintre lucrurile noi interesante pe care TechDraw le aduce sunt:

* Most tools from the Drawing workbench have a TechDraw counterpart.
* Easier view creation and manipulation. Views can be grabbed by their border with the mouse and dragged on the page. Orthogonal views alignment can be locked.
* Better line type management (hard, smooth, iso, seam). Better hidden line removal thanks to an updated [OCC](/Glossary#OCC "Glossary") library.
* Section view, detail view creation.
* Better template management.
* Dimensioning is now supported, through multiple dimensioning tools: horizontal, vertical, length, radial, diameter, angular.
* Decoration tools: hatching, hatching compatible to Autodesk PAT specification, symbols, images.

## Module Adiționale

Câteva dintre noile module pe care comunitatea le-a creat.

* [Manipulator Workbench](/Manipulator_Workbench "Manipulator Workbench") is aimed to help in Aligning, Moving, Rotating and Measuring 3D objects (Part Design allowed) through a friendly GUI.

* [Curves](https://github.com/tomate44/CurvesWB), a collection of tools to create and edit NURBS curves and surfaces.

* [Nurbs](https://github.com/microelly2/freecad-nurbs), a collection of scripts for managing freeform surfaces and curves.

* [Silk](https://github.com/edwardvmills/Silk), a collection of NURBS surface modeling tools focused on low degree and seam continuity.

* [Flamingo Workbench](/Flamingo_Workbench "Flamingo Workbench"), a set of customized FreeCAD commands and objects that help to speed-up the drawing of frames and pipelines.

* [Civil Engineering/Transportation Workbench](/Civil_Engineering_Workbench "Civil Engineering Workbench")

* [GDT](https://github.com/juanvanyo/FreeCAD-GDT), geometric dimensioning and tolerancing (GD&T).

* [InventorLoader](https://github.com/jmplonka/InventorLoader) to import Autodesk Inventor files (in progress).

* [Kicad StepUp Workbench](https://www.freecadweb.org/wiki/KicadStepUp_Workbench) is aimed to help KiCad and FreeCAD users in ECAD and MCAD collaboration.

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.17/ro&oldid=1074031>"