---
title: Sandbox Simbioz
---

:::caution
Warning: This is my sandbox where I test thingsTo not edit
:::

|                  |
| ---------------- |
| Tutorial         |
| Topic            |
| Placement        |
| Level            |
| Beginner         |
| Time to complete |
| 5 minutes        |
| Authors          |
| Simbioz          |
| FreeCAD version  |
| 0.19 or above    |
| Example files    |
| [none]           |
| See also         |
| _None_           |
|                  |

## How to change the origin of a part

This brief tutorial will teach you how to change the origin coordinates of a part to a given location.

## Pre-requisites

1. FreeCAD 0.19 or later
2. Lattice 2 WB
3. Basic FreeCAD Gui understanditg

## Changing Placement

Assuming you have already created a [Part](/Glossary#Part "Glossary") with the ![](/src/assets/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), you now want to change it's origin coordinates to somewhere else on/within the part.

Go to the ![](/src/assets/images/Lattice2_workbench_icon.svg) [Lattice2 Workbench](/Lattice2_Workbench "Lattice2 Workbench") and create an ![](/src/assets/images/Lattice2_AttachablePlacement.svg) [Attachable Placement](/Lattice2_AttachablePlacement "Lattice2 AttachablePlacement"), select where you want the new origin to be located, the ![](/src/assets/images/Part_EditAttachment.svg) [Part EditAttachment](/Part_EditAttachment "Part EditAttachment") utility will appear.

object and select an attachment mode in the attachment tab.

1. create an attached placement. attach it to your object, so that it is the origin you want.
2. create a new placement, "XY plane"
3. select the object, the attached placement, and "XY plane" placement, and apply "Populate with copies: moved object" command.
   -> done, a moved copy of the object is created.

## Run a python script

`exec(open("/path/foo.py").read())`

```
exec(open("/path/foo.py").read())

```

## Useful links

[Mediawiki Links](https://www.mediawiki.org/wiki/Help:Links)  
[Formatting](https://www.mediawiki.org/wiki/Help:Formatting)  
[Collapsible elements](https://www.mediawiki.org/wiki/Manual:Collapsible_elements)

## collabsed

Collapsed text:

This text is collapsed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:Simbioz&oldid=1163567>"
