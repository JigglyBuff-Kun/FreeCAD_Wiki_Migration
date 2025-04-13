---
title: Assembly CreateAssembly
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                      |
| ---------------------------------------------------- |
| Assembly CreateAssembly                              |
| Menu location                                        |
| Assembly → Create Assembly                           |
| Workbenches                                          |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut                                     |
| A                                                    |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/src/assets/images/Assembly_CreateAssembly.svg) [Assembly CreateAssembly](/Assembly_CreateAssembly "Assembly CreateAssembly") tool creates a root assembly (Assembly object) in the current document, or a sub-assembly in a pre-existing active assembly. A document can only hold one root assembly.

Each Assembly object is created with an [Origin](/App_OriginGroupExtension "App OriginGroupExtension") object and an empty Joints container by default.

## Usage

1. If the document already contains one or more assemblies: Activate an assembly.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Assembly_CreateAssembly.svg) [Create Assembly](/Assembly_CreateAssembly "Assembly CreateAssembly") button.
   - Select the **Assembly → ![](/src/assets/images/Assembly_CreateAssembly.svg) Create Assembly** option from the menu.
   - Use the keyboard shortcut: A.
3. A new Assembly object is created, either in the document or in the activated assembly.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An **Assembly** object, or formally an `Assembly::AssemblyObject`, has the following properties:

### Data

Base

- Data**Type** (`String`):
- Data**Material** (`Link`):
- Data (Hidden)**Meta** (`Map`):
- Data**Id** (`String`):
- Data (Hidden)**Uid** (`UUID`):
- Data**License** (`String`):
- Data**License URL** (`String`):
- Data**Color** (`Color`):
- Data**Placement** (`Placement`):
- Data**Label** (`String`):
- Data (Hidden)**Label2** (`String`):
- Data (Hidden)**Expression Engine** (`ExpressionEngine`):
- Data (Hidden)**Visibility** (`Bool`):
- Data (Hidden)**Origin** (`Link`):
- Data**Group** (`LinkList`):
- Data (Hidden)**\_ Group Touched** (`Bool`):

### View

Display Options

- View**Display Mode** (`Enumeration`): `Group` (the only option yet).
- View**Show In Tree** (`Bool`): `true` by default.
- View**Visibility** (`Bool`): `true` by default.

Selection

- View**On Top When Selected** (`Enumeration`):
- View**Selection Style** (`Enumeration`):

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateAssembly/en&oldid=1428713>"
