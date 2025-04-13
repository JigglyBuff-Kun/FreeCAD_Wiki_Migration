---
title: User hub/pt
---

![](/images/User_hub.png)

---

Esta área é a principal área de ajuda para os recém chegados ao FreeCAD.

Por favor note que, como o próprio FreeCAD, essas páginas estão em desenvolvimento contínuo. FreeCAD já dispõe de muitas ferramentas interessantes para o usuário final, e mais são continuamente adicionadas, razão pela qual actualmente ainda falta documentação para o usuário final ou esta desactualizada.

E se você tiver alguma informação que você gostaria de aparecer aqui, por que não contribuir, e nos ajudar a fazer crescer este manual. Página [Ajuda FreeCAD](/Help_FreeCAD/pt "Help FreeCAD/pt"), que irá ajudá-lo a começar.

Se você gostaria de saber como começou o desenvolvimento de FreeCADa anos atrás visite a página [History](/History "History").

Se tiver alguma informação que gostaria que aparecesse aqui, porque não contribuir a ajudar este manual a crescer? É fácil escrever páginas wiki, a página [This page](/Help:Editing "Help:Editing") vai ajudá-lo a começar.

## Usando o FreeCAD

### Introdução

- [Acerca do FreeCAD](/About_FreeCAD/pt "About FreeCAD/pt"): Uma visão geral do FreeCAD
- [Instalação do FreeCAD](/Installing/pt "Installing/pt"): Como instalar o FreeCAD no [Instalação em Windows|Windows](/Install_on_Windows/pt "Install on Windows/pt") e no [Instalação em Linux|Linux](/Install_on_Unix/pt "Install on Unix/pt")
- [Primeiros passos](/Getting_started/pt "Getting started/pt"): Uma visão geral das ferramentas disponíveis
- [FAQ](/index.php?title=Frequently_asked_questions/pt&action=edit&redlink=1 "Frequently asked questions/pt (page does not exist)"): Perguntas frequentes

#### Migrando de outro software?

- [Funções alternativas](/Workarounds "Workarounds")
- [Migrar para o FreeCAD do Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
- [Migrar para o FreeCAD do OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")
- [Migrar para o FreeCAD do SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrar para o FreeCAD do Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table "BIM application compatibility table")

### Programa Básico

- [Utilização do Rato](/Mouse_Model/pt "Mouse Model/pt"): Como usar o rato(mouse) para navegar no espaço 3D
- [Estrutura dos documentos](/Document_structure/pt "Document structure/pt"): A organização dos documentos FreeCAD
- [Preferencias](/Preferences_Editor/pt "Preferences Editor/pt") e [Personalização](/Interface_Customization/pt "Interface Customization/pt"): Como pode configurar o FreeCAD conforme as suas necessidades
- [Propriedades](/Property_editor/pt "Property editor/pt"): Como as propriedades dos objetos funcionam no FreeCAD
- [Conceito de bancadas](/Workbenches/pt "Workbenches/pt"): Como o interface do FreeCAD é organizado
- [Macros](/Macros/pt "Macros/pt"): Como automatizar facilmente tarefas repetidas frequentemente

### Bancadas

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

### Referências

- [Lista de Comandos](/List_of_Commands/pt "List of Commands/pt"): Uma lista completa dos comandos do FreeCAD disponíveis

## Ajuda Online

Esta é a ajuda online oficial do FreeCAD. Note que o sistema de ajuda online está neste momento a ser refeito. Será usado para gerar um ficheiro .CHM, que virá com as distribuições em binário do FreeCAD. Neste momento a ajuda online sumariza algumas das secções mais completas deste wiki.

- [Conteúdos da Ajuda Online](/Online_Help_Toc/pt "Online Help Toc/pt")

## Mais

- A [Área dos utilizadores experientes](/Power_users_hub/pt "Power users hub/pt") é para onde se deve dirigir se quiser ver utilizações mais avançadas do FreeCAD
- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad) : Um exemplo de como o FreeCAD pode começar a ser colocado num _workflow_ de arquitetura...
- Se quiser ajudar o FreeCAD, dirija-se para a página [Ajudar o FreeCAD](/Help_FreeCAD/pt "Help FreeCAD/pt")
- O [FreeCAD Community Portal](/FreeCAD_Community_Portal "FreeCAD Community Portal") contém uma lista de projetos feitos por membros da comunidade com o FreeCAD.
- Don't understand a term or phrase as used in FreeCAD? Try the [Glossary](/Glossary "Glossary") page.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/pt&oldid=1442654>"
