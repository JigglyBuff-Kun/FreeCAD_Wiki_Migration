---
title: Croquis PartDesign
---
|  |
| --- |
| Croquis PartDesign |
| Ubicación en el Menú |
| Part Design → Crear croquis |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| *Ninguno* |
|  |

## Descripción

This tool creates a new sketch, creates a new [PartDesign Body](/PartDesign_Body "PartDesign Body") to contain the sketch if one does not exist and automatically opens the [Sketcher workbench](/Sketcher_Workbench "Sketcher Workbench") after creation.

When creating models using the [PartDesign workbench](/PartDesign_Workbench "PartDesign Workbench"), this tool should be preferred to the ![](/images/Sketcher_NewSketch.svg) [Sketcher NewSketch](/Sketcher_NewSketch "Sketcher NewSketch") tool found in the [Sketcher workbench](/Sketcher_Workbench "Sketcher Workbench").

## Usage

1. Press the ![](/images/PartDesign_NewSketch.svg) [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch") button from the PartDesign toolbar.
2. In the Tasks panel, the **Select feature** dialog is brought up. Select one of the planes in the list or in the 3D view which can be reoriented for better visibility.
3. Press OK.
4. The interface automatically switches to the Sketcher workbench and the sketch can be edited. Once the sketch is exited, the interface is brought back to the PartDesign workbench and the 3D view is restored to the view orientation prior to creating the sketch.
5. Alternatively, a plane or a face on the existing active body can be selected before creating the sketch, in which case the sketch is instantly created.

## Options

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

* Datos**Map Mode**: mode of attachment of the sketch to another object, usually a plane or a face but can be other types of objects. Click once in the field to reveal a ... button and press it to open the [Attachment](/Part_EditAttachment "Part EditAttachment") dialog. If set to Deactivated, the Placement property is enabled.
* Datos**Placement**: controls the orientation of the sketch in the 3D space; see [placement](/Std_Placement "Std Placement"). Disabled if the sketch is attached through the Map Mode property.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/es&oldid=1557615>"