---
title: GuiCommand model
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

Remember to use [Template:Version](/Template:Version "Template:Version"), [Template:VersionMinus](/Template:VersionMinus "Template:VersionMinus"), [Template:VersionPlus](/Template:VersionPlus "Template:VersionPlus") and [Template:Obsolete](/Template:Obsolete "Template:Obsolete"), or their superscript variants [Template:VersionNote](/Template:VersionNote "Template:VersionNote"), [Template:VersionNoteMinus](/Template:VersionNoteMinus "Template:VersionNoteMinus"), [Template:VersionNotePlus](/Template:VersionNotePlus "Template:VersionNotePlus") and [Template:VersionNoteObsolete](/Template:VersionNoteObsolete "Template:VersionNoteObsolete") (to avoid brackets), when applicable.

For example:

- The `App::Link` feature ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) allows linking between sub-assemblies etc...

* ![](/src/assets/images/Assembly_CreateSimulation.svg) [Create Simulation](/Assembly_CreateSimulation "Assembly CreateSimulation"): creates a simulation of the current assembly. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ...workbenches, macros, preference packs, bundles[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), and generic "other" collections of tools[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")...

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
<languages/>
{{UnfinishedDocu}}
<translate>

{{Docnav
|[[Base_PreviousCommand|PreviousCommand]]
|[[Base_NextCommand|NextCommand]]
|[[Workbench_Name|Workbench]]
|IconL= <!--filename of icon with extension (e.g. svg, png)-->
|IconR= <!--filename of icon with extension (e.g. svg, png)-->
|IconC= <!--filename of icon with extension (e.g. svg, png)-->
}}

{{GuiCommand
|Name=Base ExampleCommandModel
|Icon= <!--filename of icon with extension (e.g. svg, png) if not the same name as command-->
|MenuLocation=Menu → Submenu → Menu text for the command
|Workbenches=[[Workbench_Name|Workbench]]
|Shortcut={{KEY|F}} {{KEY|C}}
|Version=0.19
|SeeAlso= <!--add links to similar commands and related pages-->
}}

== Description ==

While the page is under construction, add the [[Template:UnfinishedDocu]] template at the top of the page by simply typing: '''{{UnfinishedDocu}}'''

In this first paragraph give a short description of what the command does. The description can refer to other workbenches such as the [[Image:Workbench_Sketcher.svg|24px]] [[Sketcher_Workbench|Sketcher Workbench]]. (''Editor note:'' The image is 24px, not 16px)

Remember to use [[Template:Version]], [[Template:VersionMinus]], [[Template:VersionPlus]] and [[Template:Obsolete]], or their superscript variants [[Template:VersionNote]], [[Template:VersionNoteMinus]], [[Template:VersionNotePlus]] and [[Template:VersionNoteObsolete]] (to avoid brackets), when applicable.

For example:
* The {{incode|App::Link}} feature ({{Version|0.19}}) allows linking between sub-assemblies etc...
* [[Image:Assembly_CreateSimulation.svg|32px]] [[Assembly_CreateSimulation|Create Simulation]]: creates a simulation of the current assembly. {{Version|1.1}}
* ...workbenches, macros, preference packs, bundles{{VersionNote|1.1}}, and generic "other" collections of tools{{VersionNote|1.1}}...

Add an image if possible, and please follow the guidelines in [[WikiPages#Graphics|WikiPages]]. Example taken from [[Part_Sweep|Part Sweep]]:
</translate>
[[Image:Part_Sweep_simple.png|none]]
<translate>
{{Caption|Optional: add a caption below the image to explain what the tool does}}

Closing and opening translate tags should surround images, and other fixed elements, if they don't need to be translated. The caption should always be translated.

== Usage ==

# There are several ways to invoke the command:
#* Press the {{Button|[[Image:Std_Open.svg|16px]] [[GuiCommand_model|Base ExampleCommandModel]]}} button. (''Editor note:'' This uses the [[Template:Button]] template, it is necessary to link to the command as shown in this example)
#* Select the {{MenuCommand|Menu → Submenu → [[Image:Std_Open.svg|16px]] Menu text for the command}} option from the menu. (''Editor note:'' This uses the [[Template:MenuCommand]] template)
#* Select the {{MenuCommand|Submenu → [[Image:Std_Open.svg|16px]] Menu text for the command}} option from the [[Tree_view|Tree view]] context menu or [[3D_view|3D view]] context menu. (''Editor note:'' This also uses the [[Template:MenuCommand]] template, not all commands can be accessed from a context menu)
#* Use the keyboard shortcut {{KEY|F}} then {{KEY|C}} or {{KEY|Ctrl}}+{{KEY|Z}}. (''Editor note:'' This uses the [[Template:KEY]] template, not all commands have a keyboard shortcut)
# Detailed steps as needed. Some steps may need {{KEY|Keyboard}} presses while others may require using the mouse to click on a {{Button|Button}}.
# Set options and press {{Button|OK}}.

== Options ==

* Optional. List the command options here. See for example [[Draft_Wire|Draft Wire]].

== Example ==

Optional.

== Notes ==

* Optional. Use a bullet list if there are multiple items. You can also mention limitations here.

== Properties ==

See also: [[Property_editor|Property editor]].

An object is usually derived from a base object. You should not list the properties that are inherited from that base object. See for example [[Draft_Wire#Properties|Draft Wire]].

=== Data ===

{{Properties_Title|Property Group}}

* {{PropertyData|Property Name 1|PropertyType}}: Description of the property. (''Editor note:'' to find the {{Value|PropertyType}} select {{MenuCommand|Show hidden}} in the context menu of the [[Property_editor|Property editor]]. The tooltip of each property will then include this information. But the {{Value|PropertyType}} can also be found in the source code.)

=== View ===

{{Properties_Title|Property Group}}

* {{PropertyView|Property Name 2|PropertyType}}: Description of the property.

== Scripting ==

See also: [https://freecad.github.io/SourceDoc/ Autogenerated API documentation] and [[FreeCAD_Scripting_Basics|FreeCAD Scripting Basics]].

The ExampleCommandModel tool can be used in [[Macros|macros]] and from the [[Python|Python]] console by using the following function:

</translate>
{{Code|code=
Object = makeExampleCommandModel(Data1, Data2)
}}
<translate>

* Creates an {{incode|Object}} using {{incode|Data1}} and {{incode|Data2}}.

Example:

</translate>
{{Code|code=
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)
}}
<translate>

== Other ==

Optional.

{{Docnav
|[[Base_PreviousCommand|PreviousCommand]]
|[[Base_NextCommand|NextCommand]]
|[[Workbench_Name|Workbench]]
|IconL= <!--filename of icon with extension (e.g. svg, png)-->
|IconR= <!--filename of icon with extension (e.g. svg, png)-->
|IconC= <!--filename of icon with extension (e.g. svg, png)-->
}}

</translate>
{{Workbench_Tools_navi{{#translation:}}}} <!--use the Tools navi belonging to the workbench -->
{{Userdocnavi{{#translation:}}}}

```

[Template:Workbench Tools navi/en](/index.php?title=Template:Workbench_Tools_navi/en&action=edit&redlink=1 "Template:Workbench Tools navi/en (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=GuiCommand_model/en&oldid=1560797>"
