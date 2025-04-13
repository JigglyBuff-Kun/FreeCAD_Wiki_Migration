---
title: Arch Component
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                          |
| ---------------------------------------- |
| Arch Component                           |
| Menu location                            |
| 3D/BIM → Generic 3D tools → Component‎‏‎ |
| Workbenches                              |
| [BIM](/BIM_Workbench "BIM Workbench")    |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

Creates a non-parametric [Arch](/BIM_Workbench "BIM Workbench") component from any [Part](/Part_Workbench "Part Workbench")-based object. This gives the Part-based object the same attributes and properties as other Arch objects, and allows to specify how it should be exported to IFC by setting its Data**Ifc Type** property.

## Usage

1. Select a [Part](/Part_Workbench "Part Workbench")-based object.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component") button.
   - Select the **3D/BIM → Generic 3D tools → ![](/src/assets/images/Arch_Component.svg) Component** option from the menu.

## Properties

The Arch Component object is also a base shared by all other Arch objects ([Arch Wall](/Arch_Wall "Arch Wall"), [Arch Structure](/Arch_Structure "Arch Structure"), etc). Therefore some of its properties and behaviours are common to all Arch objects (except tools that don't produce solid objects, like [Arch Section Plane](/Arch_SectionPlane "Arch SectionPlane") or [Arch Axis](/Arch_Axis "Arch Axis")).

### Data

Component

- Data**Additions** (`LinkList`): Arch Components have an addition property, that can hold reference to any number of other [Shape](/Part_Workbench "Part Workbench")-based objects. The shape of these additions will be united with the base shape of the component, to produce the final shape. See [Notes](#Notes).

- Data**Axis** (`Link`): An optional axis or axis system on which this object should be duplicated.

- Data**Base** (`Link`): Arch Components are always based on a [Shape](/Part_Workbench "Part Workbench")-based base object. Some types of Arch objects will just use the Base shape as is, others (for example [Arch Wall](/Arch_Wall "Arch Wall")) will do some additional operations on it, such as an extrusion. For some types, having a base object is not mandatory ([Arch Structure](/Arch_Structure "Arch Structure")).

- Data**Clone Of** (`Link`): Any Arch Component can be a clone of another Arch Component of the same type (a Wall can only be a clone of another Wall, etc.). The only exception is the generic Arch Component (as produced by this command), that can be clone of any other type (Wall, structure, window, etc). This allows to use a generic Arch Component to override the type of another one.

- Data**Hi Res** (`Link`): Arch Components can use the shape of another object as a higher-resolution version of themselves. For this, both the Hi Res property and the Hi Res display mode must be set. This allows, for example, to make a simple wall, and then model every brick that composes the wall, for example with [Part Box](/Part_Box "Part Box"). Then, use a compound of those bricks as a high-resolution version of the wall. The shape of the wall is not modified by adding a Hi-Res object. Only its representation in the [3D view](/3D_view "3D view") will change by adopting the representation of the high-resolution version instead of its own.

- Data**Horizontal Area** (`Area`): The area of the projection of this object onto the XY plane (read-only).

- Data**Material** (`Link`): All Arch Components have a Material slot, that can contain either a [Material](/Arch_SetMaterial "Arch SetMaterial") or a [MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial") (not all Arch object type support the use of [MultiMaterials](/Arch_MultiMaterial "Arch MultiMaterial")). The DiffuseColor and Transparency properties of the attached material will define the Shape color and transparency of the Arch component. The material will be imported and exported to [IFC](/Arch_IFC "Arch IFC"), [OBJ](/Arch_OBJ "Arch OBJ") and [DAE](/Arch_DAE "Arch DAE").

- Data**Move Base** (`Bool`): Specifies if moving this object moves its base instead.

- Data**Move With Host** (`Bool`): When a component is embedded inside another (for example a window inside a wall), setting this property to True will make the object move and rotate together when its host object is moved or rotated using [Draft Move](/Draft_Move "Draft Move") or [Draft Rotate](/Draft_Rotate "Draft Rotate").

- Data**Perimeter Length** (`Length`): The perimeter length of the horizontal area (read-only).

- Data**Standard Code** (`String`): An optional standard (OmniClass, etc...) code for this component.

- Data**Subtractions** (`LinkList`): Arch Components have an subtraction property, that can hold reference to any number of other [Shape](/Part_Workbench "Part Workbench")-based objects. The shape of these objects will be subtracted from the base shape of the component, to produce the final shape. See [Notes](#Notes).

- Data**Vertical Area** (`Area`): The area of all vertical faces of this object (read-only).

IFC

- Data (Hidden)**Ifc Data** (`Map`):

- Data (Hidden)**Ifc Properties** (`Map`):

- Data**Ifc Type** (`Enumeration`): Each Arch Component, besides the function defined by its type (wall, window, etc), also has a Role property, that can define further which kind of function it performs. For example, an [Arch Structure](/Arch_Structure "Arch Structure") can have a beam or column role. Generic Arch Components (as produced by this command) can have any role available in the whole Arch workbench. The role is what is used to define the type of IFC object to export to when [exporting to IFC](/Arch_IFC "Arch IFC").

IFC Attributes

- Data**Description** (`String`): All Arch Components have a Description field, that can contain any text. This is used when [exporting to IFC](/Arch_IFC "Arch IFC").

- Data**Global Id** (`String`):

- Data**Object Type** (`String`):

- Data**Predefined Type** (`Enumeration`):

- Data**Tag** (`Enumeration`): The Tag property is another text field, which can be used to give an additional custom identity to objects.

## Notes

- The Placement of the Arch Component is applied after the additions and subtractions are done, so these are performed against the base object at its base location. Then the result is moved to the location of the Placement.

- Objects can be added or removed to/from a Component's Additions and Subtractions lists by selecting both the object and the component, and using the [Arch Add](/Arch_Add "Arch Add") or [Arch Remove](/Arch_Remove "Arch Remove") commands, or from the task panel by double-clicking the Component in the [Tree view](/Tree_view "Tree view"). The task panel also allows to check which object is currently part of these lists.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Component/en&oldid=1539630>"
