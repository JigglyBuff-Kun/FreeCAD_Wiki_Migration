---
title: Criar um sistema de coordenadas local
---
|  |
| --- |
| PartDesign CoordinateSystem |
| Menu location |
| Part Design → Create a local coordinate system |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.18 |
| See also |
| [PartDesign Point](/PartDesign_Point "PartDesign Point"), [PartDesign Line](/PartDesign_Line "PartDesign Line"), [PartDesign Plane](/PartDesign_Plane "PartDesign Plane") |
|  |

## Description

Creates a **local coordinate system** which can be used as reference for other datum geometry. It also helps identify the orientation of the referenced datum geometry in 3D space.

![](/images/PartDesign_LocalCoordinateSystem_Example.png)

Local coordinate system originating out of a datum plane's origin.

## Usage

1. Press the ![](/images/PartDesign_CoordinateSystem.svg) [Create a local coordinate system](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem") button.
2. Define Coordinate System parameters. Select a first reference in the 3D view to filter the available attachment modes.
3. Depending on the selected reference, there may be one or more attachment modes available in the the list. The most likely one will automatically be selected and shown in bold in the list. The text *Attached with mode* along with the attachment mode name will appear in green at the top of the Parameters panel.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to *Selecting...* until a selection is made.
5. Select an attachment mode in the list.
6. Define Attachment Offset values.
7. Press OK.

## Options

Double-click the **Local\_CS** label in the Model tree or right-click and select **Edit datum** in the contextual menu to edit its parameters. For more details about Attachment mode and Attachment offset, see [Attachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Properties

### Data

* Dados**MapMode**: lists the attachment mode used.
* Dados**Attachment Reversed**: indicates if the coordinate system is reversed in orientation.
* Dados**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Dados**Placement**: indicates the coordinates and alignment of the coordinates system´s origin .
* Dados**Label**: name given to the object, this name can be changed at convenience.

## Scripting

```
lcs = App.activeDocument().addObject( 'PartDesign::CoordinateSystem', 'LCS' )

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_CoordinateSystem/pt-br&oldid=1460133>"