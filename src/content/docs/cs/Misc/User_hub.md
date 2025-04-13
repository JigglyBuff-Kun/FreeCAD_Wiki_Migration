---
title: Uživatelské centrum
---

![](/images/User_hub.png)

---

Tato část je hlavní nápověda pro nováčky ve FreeCADu.

Mějte prosím na paměti, že stejně jako sám FreeCAD, jsou tyto stránky průběžně ve vývoji. FreeCAD se již teď vyznačuje mnoha zajímavými nástroji pro koncové uživatele a další jsou průběžně přidávány, což je důvodem proč stále ještě chybí finální nebo aktuální dokumentace pro koncového uživatele.

If you'd like to contribute to FreeCAD, please [donate](/Donate "Donate"), and see the [Help FreeCAD](/Help_FreeCAD "Help FreeCAD") page for other ways to contribute. If you'd like to edit this wiki, request a wiki account with editor permissions [in the forum](https://forum.freecad.org/viewtopic.php?f=21&t=6830), and read the [WikiPages](/WikiPages "WikiPages") for the general guidelines that you should follow.

If you would like to know how FreeCAD started years ago visit the [History](/History "History") page.

A máte-li nějaké poznatky, které byste rádi viděli i zde, není důvod abyste nepřispěli a nepomohli nám tento manuál vylepšit. Přejděte na stránku [Nápověda FreeCADu](/Help_FreeCAD/cs "Help FreeCAD/cs") , která Vám s tím pomůže začít.

## Použití FreeCADu

### Úvod

- [O aplikaci](/About_FreeCAD/cs "About FreeCAD/cs"): Základní přehled FreeCADu
- [Instalace](/Installing/cs "Installing/cs"): Jak instalovat FreeCAD na [Windows](/Install_on_Windows/cs "Install on Windows/cs"), [Unix/Linux](/Install_on_Unix/cs "Install on Unix/cs") a [Mac](/Install_on_Mac/cs "Install on Mac/cs")
- [Začínáme](/Getting_started/cs "Getting started/cs"): Rychlý přehled dostupných nástrojů
- [FAQ](/index.php?title=Frequently_asked_questions/cs&action=edit&redlink=1 "Frequently asked questions/cs (page does not exist)"): Často kladené otázky

#### Migrating from other software?

- [Workarounds](/Workarounds "Workarounds")
- [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
- [Migrating to FreeCAD from OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")
- [Migrating to FreeCAD from SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table "BIM application compatibility table")

### Základy aplikace

- [Model myši](/Mouse_Model/cs "Mouse Model/cs"): Použití myši k navigaci ve 3D prostoru
- [Struktura dokumentu](/Document_structure/cs "Document structure/cs"): Jak je organizován dokument FreeCADu
- [Volby](/Preferences_Editor/cs "Preferences Editor/cs") a [přizpůsobení](/Interface_Customization/cs "Interface Customization/cs"): Jak nakonfigurujete FreeCAD pro Vaše potřeby
- [Vlastnosti](/Property_editor/cs "Property editor/cs"): Jak fungují vlastnosti objketů ve FreeCADu
- [Workbench Concept/cs|Pracovní plocha](/Workbenches "Workbenches"): Jak je organizováno prostředí FreeCADu
- [Makra](/Macros/cs "Macros/cs"): Jak snadno zautomatizovat často opakované úlohy

### Pracovní plochy

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

## Reference

- [Seznam příkazů](/List_of_Commands/cs "List of Commands/cs"): Kompletní seznam dostupných příkazů FreeCADu.

## Online nápověda

Toto je oficiální online nápověda FreeCADu. Mějte prosím na paměti, že celý systém online nápovědy je v současné době přepracováván. Tento systém nápovědy bude použit pro generování .CHM souboru, který bude distribuován s binárním balíčkem FreeCADu. Právě teď je online nápověda sestavována z některých nejkompletnějších sekcí této wiki.

- [Systém online nápovědy - Obsah](/Online_Help_Toc/cs "Online Help Toc/cs")

## Dále

- [Rozšířené uživatelské centrum](/Power_users_hub/cs "Power users hub/cs") je místo kam se můžete podívat na další možnosti využití FreeCADu
- [Architektonické práce](http://yorik.uncreated.net/guestblog.php?tag=freecad): Příklad jak FreeCAD může začít získávat svou pozici v architektonické práci...
- Jestli chcete pomoci FreeCADu, podívejte se na stránku [Nápověda FreeCADu](/Help_FreeCAD "Help FreeCAD").
- [FreeCAD Komunitní portál](/FreeCAD_Community_Portal "FreeCAD Community Portal") zobrazuje seznam projektů vytvořených členy komunity kolem FreCADu.
- Don't understand a term or phrase as used in FreeCAD? Try the [Glossary](/Glossary "Glossary") page.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/cs&oldid=1508967>"
