---
title: PartDesign Sprocket
---

|                                                            |
| ---------------------------------------------------------- |
| PartDesign Sprocket                                        |
| Menu location                                              |
| Part Design → Sprocket...                                  |
| Workbenches                                                |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut                                           |
| _None_                                                     |
| Introduced in version                                      |
| 0.19                                                       |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

This tool allows you to create a 2D profile of a sprocket (or chainwheel). It can be padded with the [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") feature.

## Usage

1. Optionally activate the correct body.
2. Go to the menu **Part Design → ![](/images/PartDesign_Sprocket.svg) Sprocket...**.
3. Set the Data**Number Of Teeth** and the Data**Sprocket Reference**.
4. Click OK.
5. If there was no active body: drag and drop the sprocket into a body for the application of further features like padding.

## Properties

- Data**Number Of Teeth**: Number of teeth
- Data**Sprocket Reference**: The sprocket type. A list of sprocket definitions. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20") The list includes ANSI and ISO-norms as well as some bicycle and motorcycle sprocket definitions.
- Data**Pitch**: Distance between two teeth
- Data**Roller Diameter**: Diameter of the chain rollers the sprocket is designed for
- Data**Thickness**:The principal thickness of the sprocket. **Note:** The sprocket cannot just be padded with this thickness because the teeth have side chamfers. Therefore look at the sprocket definition to model a valid 3D sprocket. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Sprocket/en&oldid=1461401>"
