---
title: PartDesign Plane
---

|                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------- |
| PartDesign Plane                                                                                                |
| Menu location                                                                                                   |
| Part Design → Create a datum → Create a datum plane                                                             |
| Workbenches                                                                                                     |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                      |
| Default shortcut                                                                                                |
| _None_                                                                                                          |
| Introduced in version                                                                                           |
| 0.17                                                                                                            |
| See also                                                                                                        |
| [PartDesign Point](/PartDesign_Point "PartDesign Point"), [PartDesign Line](/PartDesign_Line "PartDesign Line") |
|                                                                                                                 |

## Description

Creates a **datum plane** which can be used as reference for sketches or other datum geometry. Sketches can be attached to datum planes.

![](/images/Datum_plane.png)

_Datum Plane crossing 3 corners of the Cube with a Cylinder sketched on it using the Datum Plane as its X-Y Plane._

## Prerequisites

A datum plane can only be created inside of a ![](/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body"). Every body has an origin, which is hidden by default. To be able to refer to the origin base planes, make the the origin visible. You can do this before creating a datum plane.

## Usage

1. Press the ![](/images/PartDesign_Plane.svg) [Create a datum plane](/PartDesign_Plane "PartDesign Plane") button.
2. Define Plane parameters. Select a first reference in the 3D view to filter the available [attachment](/Part_EditAttachment "Part EditAttachment") modes.
3. Depending on the selected reference, there may be one or more attachment modes available in the the list. The most likely one will automatically be selected and shown in bold in the list. The text _Attached with mode_ along with the attachment mode name will appear in green at the top of the Parameters panel.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to _Selecting..._ until a selection is made.
5. Select an attachment mode in the list.
6. **Offsets:** Define Attachment Offset values. **Note** that the x, y and z offset represent the local coordinate system of the datum plane, not the world coordinate system. Therefore the z-offset is always the offset along the datum plane normal vector.
7. **Rotation:** Changing "Around x-axis" makes the plane rotate around its local X-axis. Changing "Around y-axis" makes the plane rotate around its local Y-axis. Changing "Around z-axis" makes the plane rotate around its local Z-axis.
8. Press OK.

## Options

Double-click the DatumPlane label in the Model tree or right-click and select **Edit datum** in the contextual menu to edit its parameters. For more details about Attachment mode and Attachment offset, see [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

The default diffuse color and transparency of [PartDesign datums](/PartDesign_CompDatums "PartDesign CompDatums") is controlled by the **DefaultDatumColor** [fine-tuning parameter](/Fine-tuning#PartDesign_Workbench "Fine-tuning").

## Useful for

Datum planes have their uses:

- as arbitrary mirror plane,
- as support at a desired offset for multiple sketches,
- as support for a sketch that needs to be a specific offset/angle from the origin,
- as visible indicator (for example, a focal plane).

For support of a single sketch, they are basically redundant. They suffer from the [Topological naming problem](/Topological_naming_problem "Topological naming problem") as much as sketches.

## Properties

- Data**MapMode**: lists the attachment mode used.
- Data**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
- Data**Label**: name given to the object, this name can be changed at convenience.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/en&oldid=1542916>"
