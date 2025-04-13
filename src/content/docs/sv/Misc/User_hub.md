---
title: User hub
---

![](/images/User_hub.png)

---

Detta område är huvudhjälpsområdet för nykomlingar till FreeCAD.

Notera att dessa sidor är i ett tidigt utvecklingsstadie. För tillfället finns det fortfarande inte mycket dokumentation för slutanvändaren, eftersom FreeCAD själv är i ett tidigt utvecklingsstadium, och saknar för tillfället många intressanta verktyg för slutanvändaren.

If you'd like to contribute to FreeCAD, please [donate](/Donate "Donate"), and see the [Help FreeCAD](/Help_FreeCAD "Help FreeCAD") page for other ways to contribute. If you'd like to edit this wiki, request a wiki account with editor permissions [in the forum](https://forum.freecad.org/viewtopic.php?f=21&t=6830), and read the [WikiPages](/WikiPages "WikiPages") for the general guidelines that you should follow.

If you would like to know how FreeCAD started years ago visit the [History](/History "History") page.

Och om du har någon information som du vill ska finnas här, varför inte hjälpa oss med att låta denna manual växa genom att lägga in din information här? Att redigera wikisidor är lätt, [Denna sida](/Help_FreeCAD/sv "Help FreeCAD/sv") kommer att hjälpa dig att börja.

## Använda FreeCAD

### Introduktion

- [Applikationsöversikt](/About_FreeCAD/sv "About FreeCAD/sv"): En allmän översikt över FreeCAD
- [Installera FreeCAD](/Install_on_Windows/sv "Install on Windows/sv"): Hur man installerar FreeCAD på [Windows](/Install_on_Windows/sv "Install on Windows/sv"), [Unix/Linux](/Install_on_Unix/sv "Install on Unix/sv") och [Mac](/Install_on_Mac/sv "Install on Mac/sv")
- [Börja här](/Getting_started/sv "Getting started/sv"): En snabb överblick över de tillgängliga verktygen
- [FAQ](/index.php?title=Frequently_asked_questions/sv&action=edit&redlink=1 "Frequently asked questions/sv (page does not exist)"): Ofta ställda frågor

#### Migrating from other software?

- [Workarounds](/Workarounds "Workarounds")
- [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
- [Migrating to FreeCAD from OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")
- [Migrating to FreeCAD from SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table "BIM application compatibility table")

### Basapplikationen

- [Musmodell](/Mouse_Model/sv "Mouse Model/sv"): Hur man använder musen till att navigera i 3D rymden
- [Dokumentstruktur](/Document_structure/sv "Document structure/sv"): Hur ett FreeCAD dokument är organiserat
- [Alternativ](/Preferences_Editor/sv "Preferences Editor/sv") och [Anpassning](/Interface_Customization/sv "Interface Customization/sv"): Hur du kan konfigurera FreeCAD för dina behov
- [Egenskaper](/Property/sv "Property/sv"): Hur objektegenskaper fungerar i FreeCAD
- [Arbetsbänkar](/Workbenches/sv "Workbenches/sv"): Hur FreeCAD gränssnittet är organiserat
- [Makron](/Macros/sv "Macros/sv"): Hur man lätt automatiserar ofta repeterade uppgifter

### Arbetsbänkar

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

### Macros

[Macros](/Macros "Macros") are relatively small snippets of [Python](/Python "Python") code that perform a simple or a complex task that is not available in the base FreeCAD system.

Power users have written various [macros](/Macros "Macros") to enhance FreeCAD with more capabilities.

Since FreeCAD 0.17, many macros can be installed using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For a list of the macros refer to the [Macros recipes](/Macros_recipes "Macros recipes") page. For manual installation see [How to install macros](/How_to_install_macros "How to install macros").

### External workbenches

When many macros or functions are developed together, and are organized in toolbars and menus, they can become a new workbench.

[External workbenches](/External_workbenches "External workbenches") are collections of functions that are not part of the base FreeCAD system, usually developed by experienced users, and targeting a particular need.

Since FreeCAD 0.17, many workbenches can be installed using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches").

## Referens

- [Kommandoreferens](/List_of_Commands/sv "List of Commands/sv"): En komplett lista på de tillgängliga FreeCAD kommandona.

## Online Hjälp

Detta är den officiella FreeCAD online hjälpen. Notera att hela online hjälp systemet för närvarande omarbetas. Det kommer att användas till att generera en .CHM fil, som kommer att distribueras med FreeCADs binärpaket. För tillfället så summerar online hjälpen en del av de mest kompletta sektionerna i denna wiki.

- [Innehållsförteckningen för Online hjälpsystemet](/Online_Help_Toc/sv "Online Help Toc/sv")

## Mer

- [Expertanvändarhubben](/Power_users_hub/sv "Power users hub/sv") är den plats du ska gå till om du vill se mer avancerat FreeCAD användande
- [arbetsflöde inom arkitektur](http://yorik.uncreated.net/guestblog.php?tag=freecad) : Ett exempel på hur FreeCAD kan börja ha sin preliminära plats i en arkitekts arbetsflöde...
- Om du vill hjälpa FreeCAD, gå till [Hjälp FreeCAD](/Help_FreeCAD/sv "Help FreeCAD/sv") sidan.
- [free-cad:Grupp Portal](/index.php?title=Free-cad:Community_Portal/sv&action=edit&redlink=1 "Free-cad:Community Portal/sv (page does not exist)") listar projekt som gjorts av gruppmedlemmar omkring FreeCAD.
- Don't understand a term or phrase as used in FreeCAD? Try the [Glossary](/Glossary "Glossary") page.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/sv&oldid=1508979>"
