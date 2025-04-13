---
title: Copying Objects
---

## Overview

Like many other computer programs FreeCAD has the ability to cut, copy and paste objects. [Document](/Document_structure "Document structure") objects may be freely copied within a document or between documents using the ![](/src/assets/images/Std_Copy.svg) [Std Copy](/Std_Copy "Std Copy"), ![](/src/assets/images/Std_Paste.svg) [Std Paste](/Std_Paste "Std Paste") and [Std DuplicateSelection](/Std_DuplicateSelection "Std DuplicateSelection") commands.

![](/src/assets/images/Copy_past_duplicate.png)

Please consider that the copy-pasted objects are not dependent on the original. If you want dependent clones please use ![](/src/assets/images/Draft_Clone.svg) [Draft Workbench's Clone](/Draft_Clone "Draft Clone") or ![](/src/assets/images/PartDesign_Clone.svg) [Part Design Workbench's Clone](/PartDesign_Clone "PartDesign Clone"). If you need neither a dependent clone nor a parametric replica, you may also use ![](/src/assets/images/Part_SimpleCopy.svg) [Part Workbench's Simple Copy](/Part_SimpleCopy "Part SimpleCopy"). For patterned clones, please look into the [Other Methods section](/Copying_Objects#Other_Methods "Copying Objects") of this page.

## Copying Linked Objects

If an object to be copied has links to object(s) not in the selection, FreeCAD will ask if the unselected objects should be included in the copy operation.

## Finding and Positioning Pasted Object(s)

After a copy-paste operation, it may not be obvious where the new objects are located in the [3D view](/3D_view "3D view"). That is because the new objects have the same [Placement](/Placement "Placement") property as their originals. Toggle the Visibility property (Spacebar) to hide the originals and then move the copies to their correct position, for example using ![](/src/assets/images/Std_TransformManip.svg) [Std TransformManip](/Std_TransformManip "Std TransformManip") or ![](/src/assets/images/Std_Placement.svg) [Std Placement](/Std_Placement "Std Placement").

## Other Methods

Like most things in FreeCAD, there are many ways of making a copy. For more ideas, look at:

- PartDesign: [Mirror](/PartDesign_Mirrored "PartDesign Mirrored"), [Linear Pattern](/PartDesign_LinearPattern "PartDesign LinearPattern"), [Polar Pattern](/PartDesign_PolarPattern "PartDesign PolarPattern"), [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")
- Part: [Mirror](/Part_Mirror "Part Mirror"), [Create simple copy](/Part_SimpleCopy "Part SimpleCopy")
- Draft: [Offset](/Draft_Offset "Draft Offset"), [Scale](/Draft_Scale "Draft Scale"), [Array](/Draft_OrthoArray "Draft OrthoArray"), [PathArray](/Draft_PathArray "Draft PathArray"), [Clone](/Draft_Clone "Draft Clone"), [Mirror](/Draft_Mirror "Draft Mirror")

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/en&oldid=1054181>"
