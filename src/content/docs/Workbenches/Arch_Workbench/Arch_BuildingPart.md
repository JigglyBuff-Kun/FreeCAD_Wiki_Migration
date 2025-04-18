---
title: Arch BuildingPart
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseArch Floorinstead.
:::

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| Arch BuildingPart                                                                    |
| Menu location                                                                        |
| Arch → BuildingPart, 3D/BIM → Level                                                  |
| Workbenches                                                                          |
| [Arch](/Arch_Workbench "Arch Workbench")                                             |
| Default shortcut                                                                     |
| _None_                                                                               |
| Introduced in version                                                                |
| 0.18                                                                                 |
| See also                                                                             |
| [Arch Building](/Arch_Building "Arch Building"), [Arch Site](/Arch_Site "Arch Site") |
|                                                                                      |

## Description

The BuildingPart object, produced by the BIM Level or BIM Building commands, replaces the old [Arch Floor](/Arch_Floor "Arch Floor") and [Arch Building](/Arch_Building "Arch Building") with a more capable version that can be used not only to create Floor/Storey/Levels but also all kinds of situations where different Arch/BIM objects need to be grouped and that group might need to be handled as one object or replicated.

## Usage

1. Optionally, select one or more objects to be included in your new Building Part.
2. Press the ![](/images/Arch_BuildingPart.svg) [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") button.

### Notes

BuildingParts have a built-in, implicit [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane").

This plane is always parallel to the BuildingPart's base plane, but you can specify the offset between them. So all tools that work with a section plane, such as [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") and [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") also work with BuildingParts.

## Options

- After creating a BuildingPart, you can add more objects to it by dragging and dropping them in the Tree View or by using the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.
- You can remove objects from a BuildingPart by dragging and dropping them out of the Tree View or by using the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.
- By double-clicking the BuildingPart object in the tree view, the [Working Plane](/Draft_SelectPlane "Draft SelectPlane") will be set to its location, and the BuildingPart will become active, which means that new objects will be added automatically to it. Double-clicking the BuildingPart again will deactivate it and set the working plane back to its previous position (to be available this option needs to be set up as true, in View Property panel - Interaction - Double Click Activates).
- The BuildingPart can display a mark in the 3D view with a label and level indication.
- When a BuildingPart is moved/rotated, all its children that either have no Data**Move With Host** property, or have it turned on, will move/rotate together.
- Building Parts can be [Draft Cloned](/Draft_Clone "Draft Clone").
- Building Parts can take any IFC type. Its **IFC Type** property determines its use. If you set it to **Building Storey** it will behave as a level. If you set it to **Building** it behaves as a building, and if you set it to **Element Assembly** it behaves as an assembly. Its icon will change to reflect this setting, but other than that it has no other impact in FreeCAD. However, being exported to IFC as one or another type can have an impact in other BIM applications.
- Building Parts allow to define an **Auto-group capture box**. Subsequent Draft and Arch objects, or anything else that uses Draft.autogroup(), will be automatically added to that Building Part if they are fully inside the capture box. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Properties

See also: [Property editor](/Property_editor "Property editor").

An Arch BuildingPart is derived from an [App GeoFeature](/App_GeoFeature "App GeoFeature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Group** (`LinkList`): List of referenced objects.
- Data (Hidden)**\_ Group Touched** (`Bool`)

Building Part

- Data**Area** (`Area`): The computed floor area of this floor.
- Data**Height** (`Length`): The height of this object, and of its children objects. The children objects could be, for example, [Arch Walls](/Arch_Wall "Arch Wall"). Each wall's height must be set to `0` (zero), so the height property of the BuildingPart propagates to the objects inside of it.
- Data**Level Offset** (`Length`): The level of the (0,0,0) point of this level. This value is added to the `Placement.Base.z` attribute of the BuildingPart, to indicate a vertical offset without actually moving the object. The resulting offset is displayed if View**Show Level** is `true`.
- Data (Hidden)**Materials Table** (`Map`): A MaterialName:SolidIndexesList map that relates material names with solid indexes to be used when referencing this object from other files.
- Data**Only Solids** (`Bool`): If true, only solids will be collected by this object when referenced from other files.
- Data (Hidden)**Saved Inventor** (`FileIncluded`): This property stores an inventor representation for this object.
- Data (Hidden)**Shape** (`PartShape`): The shape of this object.

Children

- Data**Height Propagate** (`Bool`): If true, the height value propagates to contained objects. See the Data**Height** property for additional conditions that apply.

IFC

- Data (Hidden)**Ifc Data** (`Map`): IFC data.
- Data (Hidden)**Ifc Properties** (`Map`): IFC properties of this object.
- Data**Ifc Type** (`Enumeration`): The IFC type of this object.

IFC Attributes

- Data**Description** (`String`): An optional description for this component
- Data**Global Id** (`String`)
- Data**Object Type** (`String`)
- Data**Overall Height** (`Length`)
- Data**Overall Width** (`Length`)
- Data**Partitioning Type** (`Enumeration`)
- Data**Predefined Type** (`Enumeration`)
- Data**Tag** (`String`): An optional tag for this component.
- Data**User Defined Partitioning Type** (`String`)

### View

Auto Group

- View**Autogroup Autosize** (`Bool`): Automatically set the capture box size from the Building Part contents. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- View**Autogroup Box** (`Bool`): Turns auto grouping (and the display of the capture box) on/off. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- View**Autogroup Margin** (`Length`): A margin to use when autosize is turned on. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- View**Autogroup Size** (`IntegerList`): The capture box for newly created objects expressed as [XMin,YMin,ZMin,XMax,YMax,ZMax]. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Building Part

- View (Hidden)**Diffuse Color** (`ColorList`): The individual face colors.
- View**Display Offset** (`Placement`): A transformation to apply to the level mark.
- View**Font Name** (`Font`): The font to be used for texts.
- View**Font Size** (`Length`): The font size of texts.
- View**Line Width** (`Float`): The line width of this object.
- View**Origin Offset** (`Bool`): If true, when activated, Display offset will affect the origin mark too.
- View**Override Unit** (`String`): An optional unit to express levels.
- View**Show Label** (`Bool`): If true, when activated, the object's label is displayed.
- View**Show Level** (`Bool`): If true, show the level.
- View**Show Unit** (`Bool`): If true, show the unit on the level tag.

Children

- View**Children Line Color** (`Color`): The line color to apply to the children of this Building Part.
- View**Children Line Width** (`Float`): The line width to apply to the children of this Building Part.
- View**Children Override** (`Bool`): If true, the objects contained in this Building Part will adopt these line, color and transparency settings.
- View**Children Shape Color** (`Color`): The shape color to apply to the children of this Building Part.
- View**Children Transparency** (`Percent`): The transparency to apply to the children of this Building Part.

Clip

- View**Auto Cut View** (`Bool`): Turn cutting on when activating this level.
- View**Cut Margin** (`Length`): The distance between the level plane and the cut line.
- View**Cut View** (`Bool`): Cut the view above this level.

Interactions

- View**Auto Working Plane** (`Bool`): If set to True, the working plane will be kept on Auto mode.
- View**Double Click Activates** (`Bool`): If True, double-clicking this object in the tree activates it.
- View**Restore View** (`Bool`): If set, the view stored in this object will be restored on double-click.
- View**Save Inventor** (`Bool`): If this is enabled, the inventor representation of this object will be saved in the FreeCAD file, allowing to reference it in other files in lightweight mode.
- View (Hidden)**Saved Inventor** (`FileIncluded`): A slot to save the inventor representation of this object, if enabled.
- View**Set Working Plane** (`Bool`): If true, when activated, the working plane will automatically adapt to this Building Part.
- View (Hidden)**View Data** (`FloatList`): Camera position data associated with this object.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The BuildingPart tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
BuildingPart = makeBuildingPart(objectslist=None)

```

- Creates a `BuildingPart` object from `objectslist`, which is a list of objects.

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_BuildingPart/en&oldid=1467169>"
