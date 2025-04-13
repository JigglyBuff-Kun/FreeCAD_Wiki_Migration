---
title: Property editor
---

## Introduction

The [Property editor](/Property_editor "Property editor") appears in the lower section of the **Model** panel (if the [Combo view](/Combo_view "Combo view") is active) or as a stand-alone panel called **Property view**.

Generally, the Property editor is intended to deal with one object at a time. The values shown in the Property editor belong to the selected object. Despite this, some properties like colors can be set for multiple selected objects. If no element is selected the Property editor is empty.

Not all properties can be modified, some are read-only.

![](/images/FreeCAD_Property_editor_Data.png)

The Data properties of a [Part Box](/Part_Box "Part Box")

## Property Definition

A **property** is a piece of information like a number or a text string that is attached to a FreeCAD document or an object in a document. Properties can be viewed and modified with the [Property editor](/Property_editor "Property editor").

Properties play a very important part in FreeCAD, since it has been designed to work with parametric objects, which are objects defined only by their properties.

Custom [scripted objects](/Scripted_objects "Scripted objects") in FreeCAD can have properties of the following types:

```
Boolean
 Float
 FloatList
 FloatConstraint
 Angle
 Distance
 Integer
 IntegerConstraint
 Percent
 Enumeration
 IntegerList
 String
 StringList
 Link
 LinkList
 Matrix
 Vector
 VectorList
 Placement
 PlacementLink
 Color
 ColorList
 Material
 Path
 File
 FileIncluded
 PartShape
 FilletContour
 Circle

```

## Example of Part object properties

### Properties

There are two types of feature properties accessible through tabs at the bottom of the property editor:

: Ver**View** : properties related to the "visual" display of an object.
: Dados**Data** : properties related to the "physical" parameters of an object.

### View

![](/images/FreeCAD_Property_editor_View.png)

Base

- Ver**Bounding Box** : Indicates if a box showing the overall extent of the object is to be displayed. Value False, or True (Default, False).
- Ver**Control Point** : Indicates if the feature control points are to be displayed. Value False, or True (Default, False).
- Ver**Deviation** : Sets the accuracy of the polygonal representation of the model in the 3d view (tessellation). Lower values = better quality. The value is in percent of object's size (deviation in mm = (w+h+d)/3\*valueInPercent/100, where w,h,d are the bounding box dimensions).
- Ver**Display Mode** :Display mode of the feature, **Flat lines, Shaded, Wireframe, Points\*- ![](/images/Vue_DisplayModePartDesign_fr_00.png). (Default, **Flat lines\*\*).
- Ver**Lighting** : Lighting **One side, Two side\*- ![](/images/Vue_Lighting_fr_00.png). (Default, **Two side\*\*).
- Ver**Line Color** : Gives the color of the line (edges) (Default, **25, 25, 25**).
- Ver**Line Width** : Gives the thickness of the line (edges) (Default, **2**).
- Ver**Point Color** : Gives the color of the points (ends of the feature) (Default, **25, 25, 25**).
- Ver**Point Size** : Gives the size of the points (Default, **2**).
- Ver**Selectable** : Allows selection of the feature. Value False, ou True (Default, True).
- Ver**Shape Color** : Give the color shape (default, **204, 204, 204**).
- Ver**Transparency** : Sets the degree of transparency in the feature of **0** to **100** (Default, **0**).
- Ver**Visibility** : Determines the visibility of the feature (like the bar SPACE). Value False, or True (Default, True).

### Data

![](/images/FreeCAD_Property_editor_Data.png)

Base

Dados**Placement** :
Summary of the data below.
Every feature has a placement that can be controlled through the Data Properties table. It controls the placement of the part with respect to the coordinate system. NOTE: The placement properties do not affect the physical dimensions of the feature, but merely its position in space!  
If you select the title **Placement** ![Options Placement](/images/Tache_Placement_01_fr_00.png), a button with three small points appears to the right. Clicking this button **...**, opens the **[Tasks_Placement](/Tasks_Placement "Tasks Placement")** options window.

Dados**Angle** :
Specifies the angle to be used with the [axis](#Axis) property (below). An angle is set here, and the axis that the angle acts upon is set with the axis property.
The feature is rotated by the specified angle, about the specified axis.
A usage example might be if you created a revolution feature as required, but then needed to rotate the whole feature by some amount, in order to allow it to line-up with another pre-existing feature.

Dados**Axis** :
This property specifies the axis/axes about which the feature is to be rotated. The exact value of rotation comes from the angle property (above).
This property takes three arguments, which are passed as numbers in the x, y, and z boxes in the tool. Setting a value for more than one of the axes will cause the part to be rotated in each axis, by the angle value multiplied by the value for the axis.
For example, with an angle of 15° set, specifying a value of 1.0 for x, and 2.0 for y will cause the finished part to be rotated 15° in the x-axis AND 30° in the y-axis.

Dados**Position** :
This property specifies the base point to which all dimensions refer. This takes three arguments, which are passed as numbers to the x, y, and z boxes in the tool. Setting a value for more than one of the boxes will cause the part to be translated by the number of units along the corresponding axis.

Dados**Label** :
The Label is the name given to the object (feature), this name can be changed as desired.

**PS: The displayed properties can vary, depending on the tool used.**

A property is a piece of information like a number or a text string that is attached to a FreeCAD document or an object in the document. Many property types are available. Some of the most common types are:

```
App::PropertyAngle
App::PropertyBool
App::PropertyDistance
App::PropertyFloat
App::PropertyInteger
App::PropertyLength
App::PropertyPlacement
App::PropertyString
App::PropertyVector

```

## View and Data properties

The Property editor has two tabs giving access to two classes of properties:

- **Data** properties, related to the "physical" parameters of the object. The **Data** properties define the essential characteristics of the object. They exist at all times, even when FreeCAD is used in console mode, or as a library. This means that if you load a document in console mode, you can edit the radius of a circle or the length of a line, even if you cannot see the result on the screen.
- **View** properties, related to the "visual" appearance of the object. The **View** properties are tied to the `ViewObject` of the object, and are only accessible when the graphical user interface (GUI) is loaded. They are not accessible when using FreeCAD in console mode, or as a headless library. By default changes to View properties are not added to the undo stack and cannot be undone and redone with [Std Undo](/Std_Undo "Std Undo") and [Std Redo](/Std_Redo "Std Redo"). But it is possible to change this by setting the [fine-tuning](/Fine-tuning "Fine-tuning") parameter **AutoTransactionView** to `true`.

## Basic properties

Different objects may have different properties. However, many objects have the same properties because they are derived from the same internal class.

Most geometrical objects that can be created and displayed in the [3D view](/3D_view "3D view") are derived from a `Part::Feature`. See [Part Feature](/Part_Feature "Part Feature") for the basic properties these objects have.

For 2D geometry, most objects are derived from a `Part::Part2DObject` (itself derived from a `Part::Feature`) which is the base of [Sketches](/Sketch "Sketch"), and most [Draft objects](/Draft_Workbench "Draft Workbench"). See [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") for the basic properties these objects have.

## Context menu

To display the context menu of the Property editor right-click the background of the editor, or right-click a property.

Right-clicking the background shows three options:

- **Add property**: adds a dynamic property to the object.

- **Show hidden**: if active, hidden Data and View properties are shown in the editor.

- **Auto expand**: if active, all nodes in the editor are expanded when an object is selected.

When right-clicking a property the following additional options are available:

- **Rename property group**: renames the property group of selected properties. Only available for dynamic properties. Dynamic properties are those added by the user, as well as those added through Python code.

- **Remove property**: removes selected properties. Only available for dynamic properties.

- **Expression...**: brings up the Expression editor, which allows using [expressions](/Expressions "Expressions") in the property value.

- **Status**:

: If a status value is followed by an asterisk (**\***) it is static and cannot be changed.

: \* **Hidden**: if active, sets the property as hidden, meaning that it will only be displayed in the Property editor if **Show hidden** is active.

: \* **Output**: if active, sets the property as output.

: \* **NoRecompute**: if active, modifying the property doesn't touch its container for recompute.

: \* **ReadOnly**: if active, sets the property as read-only. The property won't be editable in the Property editor and the **Expression...** option no longer available. It may however still be possible to change the property via a dialog.

: \* **Transient**: if active, sets the property as transient. The value of a transient property is not saved to file. When opening a file, it is instantiated with its default value.

: \* **Touched**: if active, the object becomes touched, and ready for recompute.

: \* **EvalOnRestore**: if active, the property is evaluated when the document is restored.

: \* **CopyOnChange**: if active, the property is copied when changed in a Link. The Link's Dados**Link Copy on Change** property must be set to `Tracking` or `Enabled` for this to work. This is related to [Variant Links](https://forum.freecad.org/viewtopic.php?p=738833#p738833).

## Scripting

See [FeaturePython Custom Properties](/FeaturePython_Custom_Properties "FeaturePython Custom Properties").

## Preferences

See [Combo view](/Combo_view#Preferences "Combo view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Property_editor/pt&oldid=1498277>"
