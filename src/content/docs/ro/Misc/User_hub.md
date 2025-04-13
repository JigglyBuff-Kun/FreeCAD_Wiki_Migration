---
title: User hub
---

![](/images/User_hub.png)

---

Aceasta este zona principală de ajutor pentru noii veniți la FreeCAD.

Rețineți că, la fel ca FreeCAD în sine, aceste pagini sunt în continuă dezvoltare, motiv pentru care în prezent există încă o documentație lipsă sau învechită .

Dacă doriți să contribuiți la FreeCAD, consultați pagina [Help FreeCAD](/Help_FreeCAD "Help FreeCAD"). Dacă doriți să editați acest wiki, solicitați un cont wiki cu permisiuni de editor [în forum](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) și citiți [WikiPages](/WikiPages "WikiPages") pentru regulile generale pe care ar trebui să le urmați.

Dacă doriți să știți cum a început dezvoltarea FreeCAD cu ani în urmă vizitați pagina [History](/History "History") .

## Utilizare FreeCAD

### Introducere

- [Application Overview](/About_FreeCAD "About FreeCAD"): O privire generală a FreeCAD
- [Installing](/Installing "Installing"): How to install FreeCAD on [Windows](/Install_on_Windows "Install on Windows"), [Linux](/Install_on_Linux "Install on Linux") and [Mac](/Install_on_Mac "Install on Mac")
- [Installing help files](/Installing_Helpfile "Installing Helpfile"): how to install the offline documentation which is based on this wiki.
- [Getting started](/Getting_started "Getting started"): A quick overview of the available tools
- [FAQ](/FAQ "FAQ"): Frequently asked questions
- [Tutorials](/Tutorials "Tutorials") acoperind diferite părți ale FreeCAD

#### Migrating from other software?

- [Workarounds](/Workarounds "Workarounds")
- [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
- [Migrating to FreeCAD from OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")
- [Migrating to FreeCAD from SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table "BIM application compatibility table")

### Basic Application

- [Mouse Model](/Mouse_Model "Mouse Model"): Utilizarea mouse-ului pentru a naviga în spațiul 3D
- [Document structure](/Document_structure "Document structure"): How a FreeCAD document is organized
- [Preferences](/Preferences_Editor "Preferences Editor") and [Customization](/Interface_Customization "Interface Customization"): How you can configure FreeCAD to your needs
- [Properties](/Property_editor "Property editor"): How objects properties work in FreeCAD
- [Workbench Concept](/Workbenches "Workbenches"): How the FreeCAD interface is organized
- [Macros](/Macros "Macros"): How to easily automate often repeated tasks
- [File formats](/Import_Export "Import Export"): Diferitele formate de fișiere pe care FreeCAD le poate citi și scrie

### Ateliere

These are the base workbenches bundled with every installation of FreeCAD:

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

### Macrocomenzi

Power users have written various macros to enhance FreeCAD with more capabilities. For a list of the macros refer to the [macros recipes](/Macros_recipes "Macros recipes") page.
For instructions how to install the macros refer to the [How to install macros](/How_to_install_macros "How to install macros") tutorial.

[Macros](/Macros "Macros") are relatively small snippets of [Python](/Python "Python") code that perform a simple or a complex task that is not available in the base FreeCAD system.

Power users have written various [macros](/Macros "Macros") to enhance FreeCAD with more capabilities.

Since FreeCAD 0.17, many macros can be installed using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For a list of the macros refer to the [Macros recipes](/Macros_recipes "Macros recipes") page. For manual installation see [How to install macros](/How_to_install_macros "How to install macros").

### Ateliere Externes

Utilizatorii cu experiență au extins FreeCAD cu diverse ateliere de lucru externe personalizate, care nu sunt integrate în codul sursă FreeCAD, dar sunt ușor de instalat pe o instalare FreeCAD deja existentă. [See here](/External_workbenches "External workbenches") pentru o prezentare generală a bancilor de lucru disponibile deja.Pentru instrucțiuni despre instalarea acestor ateliere de lucru, consultați tutorialul[How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches").

When many macros or functions are developed together, and are organized in toolbars and menus, they can become a new workbench.

[External workbenches](/External_workbenches "External workbenches") are collections of functions that are not part of the base FreeCAD system, usually developed by experienced users, and targeting a particular need.

Since FreeCAD 0.17, many workbenches can be installed using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches").

## Referințe

- [Commands Reference](/List_of_Commands "List of Commands"): A complete list of the available FreeCAD commands.

## Online Help

Acesta este ajutorul online oficial al FreeCAD. Rețineți că întregul sistem de ajutor online se află în prezent în procesare. Acesta va fi folosit pentru a genera un fișier .CHM, care va fi distribuit cu pachetele binare ale FreeCAD. În momentul în care ajutorul online sintetizează unele dintre cele mai complete secțiuni ale acestui wiki.

- [Online help system - Table of Contents](/Online_Help_Toc "Online Help Toc")

## Suplimentar

- The [Power users hub](/Power_users_hub "Power users hub") is the place to go if you would like to see more advanced use of FreeCAD
- The [FreeCAD Community Portal](/FreeCAD_Community_Portal "FreeCAD Community Portal") lists projects made by community members around FreeCAD.
- Don't understand a term or phrase as used in FreeCAD? Try the [Glossary](/Glossary "Glossary") page.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/ro&oldid=1442663>"
