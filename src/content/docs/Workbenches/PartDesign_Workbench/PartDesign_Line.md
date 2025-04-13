---
title: PartDesign Line
---

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| PartDesign Line                                                                                                    |
| Menu location                                                                                                      |
| Part Design → Create a datum → Create a datum line                                                                 |
| Workbenches                                                                                                        |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                         |
| Default shortcut                                                                                                   |
| _None_                                                                                                             |
| Introduced in version                                                                                              |
| 0.17                                                                                                               |
| See also                                                                                                           |
| [PartDesign Point](/PartDesign_Point "PartDesign Point"), [PartDesign Plane](/PartDesign_Plane "PartDesign Plane") |
|                                                                                                                    |

## Description

Creates a **datum line** which can be used as reference for sketches, other datum geometry or features. For example it can be used as revolution axis for Revolution and Groove features.

![](/src/assets/images/Datum_line.png)

Two Datum lines through opposite corners of the cube meet at the center of mass.

## Usage

1. Press the ![](/src/assets/images/PartDesign_Line.svg) **Create a datum line** button.
2. Define Line parameters. Select a first reference in the 3D view to filter the available attachment modes.
3. Depending on the selected reference, there may be one or more attachment modes available in the the list. The most likely one will automatically be selected and shown in bold in the list. The text _Attached with mode_ along with the attachment mode name will appear in green at the top of the Parameters panel.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to _Selecting..._ until a selection is made.
5. Select an attachment mode in the list.
6. Define Attachment Offset values.
7. Press OK.

## Options

Double-click the DatumLine label in the Model tree or right-click and select **Edit datum** in the contextual menu to edit its parameters. For more details about Attachment mode and Attachment offset, see [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Properties

- Data**MapMode**: lists the attachment mode used.
- Data**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
- Data**Label**: name given to the object, this name can be changed at convenience.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Line/en&oldid=1460142>"
