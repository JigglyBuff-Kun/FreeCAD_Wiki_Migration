---
title: PartDesign Schiță Nouă
---
|  |
| --- |
| PartDesign NewSketch |
| Menu location |
| Part Design → Create sketch |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descriere

This tool creates a new sketch, creates a new [PartDesign Body](/PartDesign_Body "PartDesign Body") to contain the sketch if one does not exist and automatically opens the [Sketcher workbench](/Sketcher_Workbench "Sketcher Workbench") after creation.

When creating models using the [PartDesign workbench](/PartDesign_Workbench "PartDesign Workbench"), this tool should be preferred to the ![](/images/Sketcher_NewSketch.svg) [Sketcher NewSketch](/Sketcher_NewSketch "Sketcher NewSketch") tool found in the [Sketcher workbench](/Sketcher_Workbench "Sketcher Workbench").

## Utilizare

1. Click pe ![](/images/PartDesign_NewSketch.png) din toolbar, sau selectați PartDesign → ![](/images/PartDesign_NewSketch.png) Create sketch sin meniul principal.

## Opţiuni

* To change the attachment of an existing sketch, change its *Map Mode* property (see [Properties](#Properties).)

* The *Select feature* Dialog defines the features of the new sketch

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   *Select feature* dialog. These settings create a sketch on the XY plane and allow cross-references from other items of the same body

Dialog settings

* Coordinate system box: defines the orientation of the sketch plane
* Allow Used Features: *TBD*

:   Allow external features options

* From other bodies of the same part: any elements used in the same body can be referenced
* From different parts or free features: *TBD*
* Make independent copy: all other elements will be separate copies, i.e. they will not change when the original changes.
* Make dependent copy: the elements will be copies, but a dependency to the original elements is kept. This is basically using a [Shapebinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder")
* Create cross-reference: the linked elements will not be copies, but point to the original elements, e.g. a master sketch. Any changes are reflected to this sketch

To reference any items in the [Workbench Sketcher](/Sketcher_Workbench "Sketcher Workbench") use the ![](/images/Sketcher_External.svg) [External Geometry](/Sketcher_External "Sketcher External") and ![](/images/Sketcher_CarbonCopy.svg) [CarbonCopy](/Sketcher_CarbonCopy "Sketcher CarbonCopy") tools. Generally it is recommended to use other sketches as source for references rather than faces or edges, because they are less affected by the Topological Naming Issue.

## Properties

* Date**Map Mode**: mode of attachment of the sketch to another object, usually a plane or a face but can be other types of objects. Click once in the field to reveal a ... button and press it to open the [Attachment](/Part_EditAttachment "Part EditAttachment") dialog. If set to Deactivated, the Placement property is enabled.
* Date**Placement**: controls the orientation of the sketch in the 3D space; see [placement](/Std_Placement "Std Placement"). Disabled if the sketch is attached through the Map Mode property.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/ro&oldid=1557612>"