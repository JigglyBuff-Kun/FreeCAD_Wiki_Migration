---
title: Punto de referencia PartDesign
---
|  |
| --- |
| Punto de referencia PartDesign |
| Ubicación en el Menú |
| Part Design → Crear un punto de referencia |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Línea PartDesign](/PartDesign_Line/es "PartDesign Line/es"), [Plano PartDesign](/PartDesign_Plane/es "PartDesign Plane/es") |
|  |

## Descripción

Creates a **datum point** which can be used as reference for sketches or other datum geometry.

![](/images/DatumPoint.png)

A datum point attached to a sphere with an attachment offset of `2` in the Z direction.

## Usage

1. Press the ![](/images/PartDesign_Point.svg) **Create a datum point** button.
2. Define Point parameters. Select a first reference in the 3D view to filter the available attachment modes.
3. Depending on the selected reference, there may be one or more attachment modes available in the the list. The most likely one will automatically be selected and shown in bold in the list. The text *Attached with mode* along with the attachment mode name will appear in green at the top of the Parameters panel.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to *Selecting...* until a selection is made.
5. Select an attachment mode in the list.
6. Define Attachment Offset values.
7. Press OK.

## Options

Double-click the DatumPoint label in the Model tree or right-click and select **Edit datum** in the contextual menu to edit its parameters. For more details about Attachment mode and Attachment offset, see [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Properties

* Datos**MapMode**: lists the attachment mode used.
* Datos**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Datos**Label**: name given to the object, this name can be changed at convenience.

## Limitations

* The datum point cannot be used as section for Pipe and Loft features.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/es&oldid=1460152>"