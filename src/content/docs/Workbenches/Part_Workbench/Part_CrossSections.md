---
title: Part CrossSections
---

|                                              |
| -------------------------------------------- |
| Part CrossSections                           |
| Menu location                                |
| Part → Cross-sections...                     |
| Workbenches                                  |
| [Part](/Part_Workbench "Part Workbench")     |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [Part Section](/Part_Section "Part Section") |
|                                              |

## Description

The **Cross-sections** utility creates one or more cross-sections through the selected shape, parallel to one of the default global planes (XY, XZ or YZ).

## Usage

1. Select a shape.
2. Press the ![](/images/Part_CrossSections.svg) **Cross-sections** button.
3. Define the guiding plane.
4. Define the position (height of the cross-section).
5. Optionally, check **Sections** to create more than one cross-section:
   - Checking _On both sides_ will distribute the cross-sections on each side of the guiding plane location.
   - Set the count.
6. Press OK.

## Notes

- [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as source objects. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- The resulting object is not parametric, that is it is not linked to the original shape.
- A single object is created, even with more than one cross-section.

## Example

![Select an object](/images/SectionCross1.png)

![Dialog window](/images/SectionCross2.png)

![Result](/images/SectionCross3.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CrossSections/en&oldid=1466618>"
