---
title: Part Thickness
---

|                                           |
| ----------------------------------------- |
| Part Thickness                            |
| Menu location                             |
| Part → Thickness...                       |
| Workbenches                               |
| [Part](/Part_Workbench "Part Workbench")  |
| Default shortcut                          |
| _None_                                    |
| Introduced in version                     |
| -                                         |
| See also                                  |
| [Part Offset](/Part_Offset "Part Offset") |
|                                           |

## Description

The ![](/images/Part_Thickness.svg) [Thickness](/Part_Thickness "Part Thickness") tool works on a solid shape and transforms it into a hollow object, giving to each of its faces a defined and constant thickness. On some solids it allows you to significantly speed up the work, and avoids making extrusions and pockets.

## Usage

1. Create a solid
2. Select one or more faces
3. Click on the ![](/images/Part_Thickness.svg) **Part Thickness** tool
4. Set the parameters (see [Options](#Options))
5. Click OK to confirm, create the operation and exit the function
6. In the Properties table adjust the parameters if necessary

## Options

- **Thickness**: Wall thickness of the resulting object, set the desired value.
  - A positive value will offset the faces outward
  - A negative value will offset the faces inward
- **Mode**
  - **Skin**: Select this option if you want to get an item like a vase, headless but with the bottom.
  - **Pipe**: Select this option if you want to get an object like a pipe, headless and bottomless. In this case it may be convenient to select the faces to be deleted before you start the tool. Helping with predefined views buttons or use the numeric keys.
  - **Recto Verso**:
- **Join Type**
  - **Arc**: removes the outer edges and create a fillet with a radius equal to the thickness defined.
  - **Tangent**:
  - **Intersection**:
- **Intersection**:
- **Self-intersection**: Enables self-intersection.
- Faces: Select the faces to be removed, then click Done.
- **Update view**: Automatically updates the view in real time.

## Notes

- [App Link](/App_Link "App Link") objects linked to the appropriate object types can also be used as source objects. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- Complex shapes may produce bizarre, hard to predict results. Carefully inspect the resulting shape and save your work before applying the operation.

## Links

A good example on how to use this tool on the forum: [Re: Help designing a simple enclosure](http://forum.freecadweb.org/viewtopic.php?f=3&t=3766&p=29741&hilit=enclosure#p29547)

## Examples

**Hollow cylinder**

1. Create ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder "Part Cylinder") with radius 10mm and height 20mm
2. Select the top and bottom surface of the cylinder
3. Click on the ![](/images/Part_Thickness.svg) Thickness button (no need to change default settings) and press OK

Notes:

- For this shape, consider using ![](/images/Part_Tube.svg) [Tube](/Part_Tube "Part Tube") instead.
- Select the cylinder's top surface only to create a receptacle.

![](/images/ThicknessEsempio1.png)

![](/images/ThicknessEsempio2.png)

**Box-Enclosure**

![](/images/ThicknessEsempio3.png)

![](/images/ThicknessEsempio4.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Thickness/en&oldid=1336233>"
