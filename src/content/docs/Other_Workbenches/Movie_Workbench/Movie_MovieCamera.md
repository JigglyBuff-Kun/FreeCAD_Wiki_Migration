---
title: Movie MovieCamera
---

:::caution
This page shows a model to document aGui Command. Under theSelectable blocksection below you will find the same content easily selectable for pasting in a new page.
:::

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Base ExampleCommandModel                                                                                  |
| Menu location                                                                                             |
| Menu → Submenu → Menu text for the command                                                                |
| Workbenches                                                                                               |
| [Workbench](/index.php?title=Workbench_Name&action=edit&redlink=1 "Workbench Name (page does not exist)") |
| Default shortcut                                                                                          |
| F C                                                                                                       |
| Introduced in version                                                                                     |
| 0.19                                                                                                      |
| See also                                                                                                  |
| _None_                                                                                                    |
|                                                                                                           |

## Description

While the page is under construction, add the [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") template at the top of the page by simply typing: **{{UnfinishedDocu}}**

In this first paragraph give a short description of what the command does. The description can refer to other workbenches such as the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). (_Editor note:_ The image is 24px, not 16px)

Remember to use [Template:Version](/Template:Version "Template:Version"), [Template:VersionMinus](/Template:VersionMinus "Template:VersionMinus"), [Template:VersionPlus](/Template:VersionPlus "Template:VersionPlus") and [Template:Obsolete](/Template:Obsolete "Template:Obsolete") when applicable.

For example: The `App::Link` feature ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) allows linking between sub-assemblies etc...

Add an image if possible, and please follow the guidelines in [WikiPages](/WikiPages#Graphics "WikiPages"). Example taken from [Part Sweep](/Part_Sweep "Part Sweep"):

![](/src/assets/images/Part_Sweep_simple.png)

Optional: add a caption below the image to explain what the tool does

Closing and opening translate tags should surround images, and other fixed elements, if they don't need to be translated. The caption should always be translated.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Std_Open.svg) [Base ExampleCommandModel](/GuiCommand_model "GuiCommand model") button. (_Editor note:_ This uses the [Template:Button](/Template:Button "Template:Button") template, it is necessary to link to the command as shown in this example)
   - Select the **Menu → Submenu → ![](/src/assets/images/Std_Open.svg) Menu text for the command** option from the menu. (_Editor note:_ This uses the [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand") template)
   - Select the **Submenu → ![](/src/assets/images/Std_Open.svg) Menu text for the command** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu. (_Editor note:_ This also uses the [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand") template, not all commands can be accessed from a context menu)
   - Use the keyboard shortcut F then C or Ctrl+Z. (_Editor note:_ This uses the [Template:KEY](/Template:KEY "Template:KEY") template, not all commands have a keyboard shortcut)
2. Detailed steps as needed. Some steps may need Keyboard presses while others may require using the mouse to click on a Button.
3. Set options and press OK.

## Options

- Optional. List the command options here. See for example [Draft Wire](/Draft_Wire "Draft Wire").

## Example

Optional.

## Notes

- Optional. Use a bullet list if there are multiple items. You can also mention limitations here.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An object is usually derived from a base object. You should not list the properties that are inherited from that base object. See for example [Draft Wire](/Draft_Wire#Properties "Draft Wire").

### Data

Property Group

- Data**Property Name 1** (`PropertyType`): Description of the property. (_Editor note:_ to find the `PropertyType` select **Show hidden** in the context menu of the [Property editor](/Property_editor "Property editor"). The tooltip of each property will then include this information. But the `PropertyType` can also be found in the source code.)

### View

Property Group

- View**Property Name 2** (`PropertyType`): Description of the property.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The ExampleCommandModel tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Object = makeExampleCommandModel(Data1, Data2)

```

- Creates an `Object` using `Data1` and `Data2`.

Example:

```
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)

```

## Other

Optional.

## Selectable block

```
<nowiki>

```

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

Retrieved from "<http://wiki.freecad.org/index.php?title=Movie_MovieCamera&oldid=1560763>"
