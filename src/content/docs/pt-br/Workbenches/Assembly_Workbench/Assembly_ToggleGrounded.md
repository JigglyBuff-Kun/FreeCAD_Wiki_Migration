---
title: Assembly ToggleGrounded/pt-br
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Assembly ToggleGrounded |
| Menu location |
| Assembly → Toggle grounded |
| Workbenches |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut |
| G |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Descrição

The ![](/images/Assembly_ToggleGrounded.svg) [Assembly ToggleGrounded](/Assembly_ToggleGrounded "Assembly ToggleGrounded") tool fixes the position and orientation of a shape in relation to the coordinate system of the Assembly it belongs to.

## Utilização

1. Select one or more parts.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_ToggleGrounded.svg) [Toggle grounded](/Assembly_ToggleGrounded "Assembly ToggleGrounded") button.
   * Select the **Assembly → ![](/images/Assembly_ToggleGrounded.svg) Toggle grounded** option from the menu.
   * Use the keyboard shortcut: G.
3. A GroundedJoint is added for each selected part.

## Notas

* A grounded joint will display a red lock icon in the 3D view, around the center of mass of the grounded component. To hide the lock, toggle the joint's Vista**Visibility** property to `false`.

## Propriedades

See also: [Property editor](/Property_editor "Property editor").

A **GroundedJoint** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Ground

* Dados**Object To Ground** (`Link`): The object to ground.
* Dados**Placement** (`Placement`): This is where the part is grounded. See [Placement](/Placement "Placement").

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_ToggleGrounded/pt-br&oldid=1549817>"