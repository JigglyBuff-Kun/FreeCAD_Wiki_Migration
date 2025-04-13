---
title: Assembly CreateAssembly/pt-br
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Assembly CreateAssembly |
| Menu location |
| Assembly → Create Assembly |
| Workbenches |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut |
| A |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Descrição

The ![](/images/Assembly_CreateAssembly.svg) [Assembly CreateAssembly](/Assembly_CreateAssembly "Assembly CreateAssembly") tool creates a root assembly (Assembly object) in the current document, or a sub-assembly in a pre-existing active assembly. A document can only hold one root assembly.

Each Assembly object is created with an [Origin](/App_OriginGroupExtension "App OriginGroupExtension") object and an empty Joints container by default.

## Utilização

1. If the document already contains one or more assemblies: Activate an assembly.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_CreateAssembly.svg) [Create Assembly](/Assembly_CreateAssembly "Assembly CreateAssembly") button.
   * Select the **Assembly → ![](/images/Assembly_CreateAssembly.svg) Create Assembly** option from the menu.
   * Use the keyboard shortcut: A.
3. A new Assembly object is created, either in the document or in the activated assembly.

## Propriedades

See also: [Property editor](/Property_editor "Property editor").

An **Assembly** object, or formally an `Assembly::AssemblyObject`, has the following properties:

### Data

Base

* Dados**Type** (`String`):
* Dados**Material** (`Link`):
* Dados (Hidden)**Meta** (`Map`):
* Dados**Id** (`String`):
* Dados (Hidden)**Uid** (`UUID`):
* Dados**License** (`String`):
* Dados**License URL** (`String`):
* Dados**Color** (`Color`):
* Dados**Placement** (`Placement`):
* Dados**Label** (`String`):
* Dados (Hidden)**Label2** (`String`):
* Dados (Hidden)**Expression Engine** (`ExpressionEngine`):
* Dados (Hidden)**Visibility** (`Bool`):
* Dados (Hidden)**Origin** (`Link`):
* Dados**Group** (`LinkList`):
* Dados (Hidden)**\_ Group Touched** (`Bool`):

### Vista

Display Options

* Vista**Display Mode** (`Enumeration`): `Group` (the only option yet).
* Vista**Show In Tree** (`Bool`): `true` by default.
* Vista**Visibility** (`Bool`): `true` by default.

Selection

* Vista**On Top When Selected** (`Enumeration`):
* Vista**Selection Style** (`Enumeration`):

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateAssembly/pt-br&oldid=1452388>"