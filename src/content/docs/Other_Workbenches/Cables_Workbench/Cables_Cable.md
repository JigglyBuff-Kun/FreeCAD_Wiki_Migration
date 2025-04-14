---
title: Cables Cable
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Cables Cable                                                                                              |
| Menu location                                                                                             |
| Cables → Cable                                                                                            |
| Workbenches                                                                                               |
| [Cables](/Cables_Workbench "Cables Workbench")                                                            |
| Default shortcut                                                                                          |
| _None_                                                                                                    |
| Introduced in version                                                                                     |
| 1.0                                                                                                       |
| See also                                                                                                  |
| [Cables Profile](/Cables_Profile "Cables Profile"), [Cables WireFlex](/Cables_WireFlex "Cables WireFlex") |
|                                                                                                           |

## Description

The ![](/images/Cables_Cable.svg) [Cable](/Cables_Cable "Cables Cable") creates a Cable object based on selected [Cables WireFlex](/Cables_WireFlex "Cables WireFlex") and [Cables Profile](/Cables_Profile "Cables Profile"). The **Cable** is fully parametric and is derived from [Arch Pipe](/Arch_Pipe "Arch Pipe") and inherits all of its properties. Some properties specific for **Arch Pipe** are hidden and not used by **Cable**.

The **Cable** automatically creates several subcomponents based on a given **Profile**. These are:

- Two profile ![](/images/Draft_Clone.svg) [Clones](/Draft_Clone "Draft Clone") (**A_Profile** and **B_Profile**) positioned on both ends of a **Base** wire and aligned perpendicular to **Base** wire end edges.
- Several additional **WireFlex** subwires attacheched to A and B Profiles at central points of single conductor wires. **WireFlex** subwires are named according to **Sub Colors** property.

**Cable** object can be colored with [Arch Multimaterial](/Arch_MultiMaterial "Arch MultiMaterial") attached to the **Material** property.

![](/images/Cables_Example1.png)

Example of three-core flat cable:  
Multimaterial cable shape and its base wire, profile and subwires.

## Usage

1. Select the existing [WireFlex](/Cables_WireFlex "Cables WireFlex") in the [3D view](/3D_view "3D view").
2. Select the existing [Cable Profile](/Cables_Profile "Cables Profile") in the [3D view](/3D_view "3D view") holding the CTRL key.
3. Create cable by one of these methods:
   - Press the ![](/images/Cables_Cable.svg) [Cable](/Cables_Cable "Cables Cable") button.
   - Select the **Cables → ![](/images/Cables_Cable.svg) Cable** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cables → ![](/images/Cables_Cable.svg) Cable** option from the context menu.

Once created the cable is placed at the position of selected **WireFlex** in the 3D space.

## Notes

All the cable subcomponents (base wire, subprofiles, subwires) are visible by default. They can be easily hidden by changing the **Show Sub Lines** property of a **Cable**.

First edge of each subwire has always the length = 5mm (hardcoded and cannot be changed by user) and is always perpendicular to attached subprofile. This is needed to ensure proper subwire shape creation.

Any fillets are not applied by default. It can be adjusted by changing cable properties: **Base Wire Fillet Radius** and **Sub Wires Fillet Radius**. It is recommended to do this as a last step of a cable editing.

## Properties

A **Cable** object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

A **Cable** is derived from [Arch Pipe](/Arch_Pipe "Arch Pipe") and inherits all of its properties. Some properties specific for **Arch Pipe** are hidden and not used by **Cable**.

### Data

Component

- Data**Base** (`Link`): The base wire of a cable.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Pipe

- Data**Length** (`Length`): Shows the total length of a cable together with subwire ends.

Cable

- Data**Auto Label Sub Lines** (`Bool`): If set to _true_ the names of all subelements (base wire, subprofiles, subwires) will be renamed automatically. To refresh names the property should be changed to _false_ and to _true_ again. The ends of cable are named as _A_ and _B_. Suffixes of subwire names are named after the names in **Sub Colors** property.
- Data**Base Wire Fillet Radius** (`Length`): Specifies the radius of the fillets at the corners of the base wire.
- Data**Cable Rotation** (`Angle`): Specifies the rotation angle of the subprofile _A_. The subprofile _B_ rotation is calculated automatically. This parameter makes sense for flat cables.
- Data**Show Sub Lines** (`Bool`): If set to _true_ all the subelements (base wire, profiles, sublines) are visible in the 3D View.
- Data**Stripped Wire Length** (`Length`): the length of the bare conductor wire at the end of each subwire. Default value = 8mm.
- Data**Sub Colors** (`StringList`): Used as colors recipe for **Material** property and source of names for **Auto Label Sub Lines** property. It contains the list of names with the following formula: _"Label:nr"_, where _Label_ indicates the name of cable jacket, subwire insulation or conductor (examples: _J, L1, N, PE, CU_) and _nr_ indicates subwire number (special numbers: _0_ - cable jacket, _-1_ - all others, used mainly for _CU_ label). For cables created with 1-5 or 8 subwires the default values are put here. The property can be changed by clicking on ... next to the property name.
- Data**Sub Profiles** (`LinkList`): List of links to subprofiles A and B. They are created automatically as clones of main profile upon cable creation.
- Data**Sub Wires** (`LinkList`): List of links to all subwires on both ends of a cable (A and B). All subwires are created automatically upon cable creation.
- Data**Sub Wires Fillet Radius** (`Length`): Specifies the radius of the fillets at the corners of all subwires.

## Typical workflow

Creating a complete colored cable requires few steps:

1. Create cable as described in [Usage](#Usage)
2. Rename the cable as desired. If the property **Auto Label Sub Lines** is set, then all cable subcomponents will be renamed accordingly. The suffixes of subwires names follow the color labels in the **Sub Colors** property. These labels can also be changed as desired.
3. Create default multimaterial set as described in [Cable Materials](/Cables_Material "Cables Material"). Adjust created materials or leave the defaults.
4. Assign selected multimaterial to the **Material** property of a cable.
5. Make sure the color labels in the **Sub Colors** property correspond to the names in the chosen multimaterial. This ensures proper colors of the cable and all of its subwires.
6. Single subwire can be edited as any [WireFlex](/Cables_WireFlex "Cables WireFlex") and can be attached to other elements, e.g. to [Cable Connector](/Cables_CableConnector "Cables CableConnector"). Note: first edge of each subwire has always the length = 5mm (hardcoded and can't be changed by user) and is always perpendicular to attached subprofile. This is needed to ensure proper subwire shape creation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Cable/en&oldid=1557578>"
