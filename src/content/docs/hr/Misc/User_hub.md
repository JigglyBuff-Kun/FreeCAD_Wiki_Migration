---
title: Korisničko okruženje
---

![](/images/User_hub.png)

---

Ovo je osnovno područje pomoći za novo pridošle korisnike FreeCAD programa.

Te stranice se neprestano razvijaju, pa možda nedostaju informacije ili su zastarjele . Ako ne možete pronaći potrebne informacije, ne ustručavajte se pitati na [FreeCAD forumu](http://forum.freecadweb.org).

Ako želite pridonijeti FreeCAD-u molimo [donirajte](/Donate "Donate"), pogledajte stranicu [Pomozite FreeCAD-u](/Help_FreeCAD/hr "Help FreeCAD/hr"). Ako želite urediti ovaj wiki, zatražite wiki račun s dozvolama za uređivanje [na forumu](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) i pročitajte [Wiki stranice](/index.php?title=WikiPages/hr&action=edit&redlink=1 "WikiPages/hr (page does not exist)") za opće smjernice koje biste trebali slijediti.

Ako želite znati kako je FreeCAD započeo prije nekoliko godina, posjetite stranicu [Povijest](/index.php?title=History/hr&action=edit&redlink=1 "History/hr (page does not exist)").

## Koristi FreeCAD

## Predstavljanje

- [O FreeCAD-u](/About_FreeCAD/hr "About FreeCAD/hr"): Glavni pregled FreeCAD programa
- [Instalacija](/Installing/hr "Installing/hr"): Kako instalirati FreeCAD na [Windows](/Install_on_Windows/hr "Install on Windows/hr"), [Linux](/Install_on_Linux/hr "Install on Linux/hr") i [Mac](/Install_on_Mac/hr "Install on Mac/hr")
- [Instalcija datoteka pomoći](/index.php?title=Installing_Helpfile/hr&action=edit&redlink=1 "Installing Helpfile/hr (page does not exist)"):kako instalirati izvanmrežnu dokumentaciju koja se temelji na ovom wikiju.
- [Prvi koraci](/Getting_started/hr "Getting started/hr"): Kratki pregled dostupnih alata
- [FAQ](/FAQ/hr "FAQ/hr"): Često postavljana pitanja
- [Vježbe](/Tutorials/hr "Tutorials/hr") Vježbe za različita područja FreeCAD-a

#### Migrating from other software?

- [Workarounds](/Workarounds "Workarounds")
- [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
- [Migrating to FreeCAD from OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")
- [Migrating to FreeCAD from SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table "BIM application compatibility table")

### Osnovna primjena

- [Interface](/Interface "Interface"): the FreeCAD interface is composed of various graphical elements on the screen, including the [3D view](/3D_view "3D view"), the [tree view](/Tree_view "Tree view"), the [property editor](/Property_editor "Property editor"), the [task panel](/Task_panel "Task panel"), and the [Python console](/Python_console "Python console").
- [Mouse navigation](/Mouse_navigation "Mouse navigation"): the different types of using the mouse or trackpad to navigate in the 3D view.
- [Selection methods](/Selection_methods "Selection methods"): the different methods of selecting objects in the software.
- [Objects naming](/Object_name "Object name"): FreeCAD objects have a read-only `Name` that uniquely identifies them, and a `Label` which is user editable.
- [Preferences Editor](/Preferences_Editor "Preferences Editor"): the system that allows you to control many properties of the base system and of the individual workbenches.
- [File formats](/Import_Export "Import Export"): the different file formats that FreeCAD can read and write.

### Radni stolovi

[Workbenches](/Workbenches "Workbenches") are collections of tools used for specific tasks. These are the base workbenches bundled with every FreeCAD installation:

- ![](/images/Freecad.svg) [Standard tools](/Std_Base "Std Base"). These commands and tools are present in all workbenches.

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

- ![](/images/Workbench_TechDraw.svg) The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") for producing technical drawings from 3D models.

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

### Makro naredbe

[Macros](/Macros "Macros") are relatively small snippets of [Python](/Python "Python") code that perform a simple or a complex task that is not available in the base FreeCAD system.

Power users have written various [macros](/Macros "Macros") to enhance FreeCAD with more capabilities.

Since FreeCAD 0.17, many macros can be installed using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For a list of the macros refer to the [Macros recipes](/Macros_recipes "Macros recipes") page. For manual installation see [How to install macros](/How_to_install_macros "How to install macros").

### External workbenches

When many macros or functions are developed together, and are organized in toolbars and menus, they can become a new workbench.

[External workbenches](/External_workbenches "External workbenches") are collections of functions that are not part of the base FreeCAD system, usually developed by experienced users, and targeting a particular need.

Since FreeCAD 0.17, many workbenches can be installed using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches").

## Smjernice

- [Komande](/List_of_Commands/hr "List of Commands/hr"): Kompletna lista postojećih FreeCAD komandi.

## Online Pomoć

This is the official FreeCAD online help. Please note that the whole online help system is currently being reworked. It will be used to generate a .CHM file, that will be distributed with the binary packages of FreeCAD. At the moment the online help summarizes some of the most complete sections of this wiki.

- [Online help system - Table of Contents](/Online_Help_Toc "Online Help Toc")

## Više

- The [Power users hub](/Power_users_hub "Power users hub") is the place to go if you would like to see more advanced use of FreeCAD
- The [FreeCAD Community Portal](/FreeCAD_Community_Portal "FreeCAD Community Portal") lists projects made by community members around FreeCAD.
- Don't understand a term or phrase as used in FreeCAD? Try the [Glossary](/Glossary "Glossary") page.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/hr&oldid=1508970>"
