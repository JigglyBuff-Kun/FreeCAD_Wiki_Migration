---
title: SheetMetal Forming
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal Forming                                         |
| Menu location                                              |
| SheetMetal → Make Forming in Wall                          |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| M F                                                        |
| Introduced in version                                      |
| -                                                          |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_Forming.svg) **SheetMetal Forming** command creates an embossed shape in a SheetMetal wall using a separate solid object.

The back side face of the solid defining the shape, and the face to be embossed are used to position and orient the solid, i.e. their local coordinate systems will have the same origin and the same orientation by default. The angle around the Z axis and offsets in the X, Y, and Z direction can be altered by changing their values in the [Property editor](/Property_editor "Property editor").

A sketch can be added to multiply and distribute the embossed shape in regular or irregular patterns (using the center points of circles or arcs).

A small selection of features that can be created:

![](/images/SheetMetal_Forming-08.png)
![](/images/SheetMetal_Forming-09.png)  
![](/images/SheetMetal_Forming-10.png)
![](/images/SheetMetal_Forming-11.png)

Dimples, louvres, drawn cutouts, bridges

## Usage

Make sure that the body containing the object to be embossed is the active body. If required double-click it in the [Tree view](/Tree_view "Tree view").

### Dimple

1. Select the face of the SheetMetal object to be embossed.
2. Hold down the Ctrl key (or the Command key on macOS).
3. Add the **bottom face** (back side) of the solid defining the shape to the selection.
4. Release the Ctrl key (or the Command key).
5. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_Forming.svg) [Make Forming in Wall](/SheetMetal_Forming "SheetMetal Forming") button.
   - Select the **SheetMetal → ![](/images/SheetMetal_Forming.svg) Make Forming in Wall** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **SheetMetal → ![](/images/SheetMetal_Forming.svg) Make Forming in Wall** option from the context menu.
   - Use the keyboard shortcut: M then F.
6. The **Forming tool parameters** [Task panel](/Task_panel "Task panel") opens (introduced in version 0.5.00).
7. Optionally select new faces/edges.
   - Press the Update button to finish the selection and display the changes.
8. Press the OK button to finish the command and close the Task panel.
9. A **WallForming** object will be created at the center of the selected face to be embossed.
10. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

### Louvre

1. Select the face of the SheetMetal object to be embossed.
2. Hold down the Ctrl key (or the Command key on macOS).
3. Add the **bottom face** (back side) of the solid defining the shape to the selection.
4. Add a **side face** adjoined the bottom face to indicate the position of the cut to the selection.
5. Release the Ctrl key (or the Command key).
6. Invoke the command and follow the steps as described above.

### Bridge

1. Select the face of the SheetMetal object to be embossed.
2. Hold down the Ctrl key (or the Command key on macOS).
3. Add the **bottom face** (back side) of the solid defining the shape to the selection.
4. Add a **side face** adjoined the bottom face to indicate the position of the first cut to the selection.
5. Add the **opposite side face** adjoined the bottom face to indicate the position of the second cut to the selection.
6. Release the Ctrl key (or the Command key).
7. Invoke the command and follow the steps as described above.

### Drawn Cutout

1. Select the face of the SheetMetal object to be embossed.
2. Hold down the Ctrl key (or the Command key on macOS).
3. Add the **bottom face** (back side) of the solid defining the shape to the selection.
4. Add the **top face** opposite the bottom face to mark the area to be cut open to the selection.
5. Release the Ctrl key (or the Command key).
6. Invoke the command and follow the steps as described above.

### Multiply and Pattern

To muliply and pattern the embossed feature a **sketch** containing circles and arcs can be added to the **WallForming** object's property Data**Sketch**. This pattern sketch must be **coplanar** with the face to be embossed.

The centerpoints of the circles or arcs are used to provide positions to put instances of the embossed feature; they don't influence the instances' orientation.

The orientation still depends on the orientation of the first selected face.

### Adding Fillets

1. Switch to the ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workbench
2. Select an edge on the upper side of the SheetMetal object to receive a fillet
3. Activate the ![](/images/PartDesign_Fillet.svg) [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet") command using one of the following:
   - The ![](/images/PartDesign_Fillet.svg) [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet") button.
   - The **PartDesign → Apply a dress-up feature → ![](/images/PartDesign_Fillet.svg) Fillet** menu option.
4. Set the Fillet object's Data**Refine** property to `true`. This is important for the next fillet.
5. Select an edge on the bottom side of the SheetMetal object to receive a fillet.
6. Activate the ![](/images/PartDesign_Fillet.svg) [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet") command (see above)

## Notes

The embossed geometry is not restricted to planar walls and cylindrical connections and so after such a geometry is applied to a SheetMetal object **the object is no longer unfoldable**.

The forming can be deactivated (by setting the property Data**Suppress Feature** to `true`) to unfold the object, but following fillets lose their defining edges and show an error when the forming is reactivated.

Forming and fillets should be the last steps in creating a SheetMetal object.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal WallForming object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**Suppress Feature** (`Bool`): "Suppress Forming Feature". Default value is `false`.
- Data**angle** (`Angle`): "Tool Position Angle". Default angle: `0,00°`.
- Data**base Object** (`LinkSub`): "Base Object". Link to the planar face to be embossed.
- Data**offset** (`VectorDistance`): "Offset from Center of Face". Default: `[0,00 mm, 0,00 mm, 0,00 mm]`.
- Data**thickness** (`Distance`): "Thickness of Sheetmetal". Thickness of the Data (hidden)**Base Feature**.
- Data**tool Object** (`LinkSub`): "Forming Tool Object". Link to the planar face used to position the Forming Tool

Parameters1

- Data**Sketch** (`Link`): "Point Sketch on Sheetmetal". Link to the sketch containing information how to multiply and distribute instances of the Forming Tool. (Center points of circles and arcs are used to create and position these instances)

## Example

![](/images/SheetMetal_Forming-01.png) ![](/images/SheetMetal_Forming-02.png)

A hexagon bowl with embossed centre

### Preparation

This bowl is made of a folded sheet metal object with a shape embossed, both have to be prepared in advance.

No need to work with coplanar sketches here.

![](/images/SheetMetal_Forming-03.png)

SheetMetal bowl and embossing object

### Workflow

1. Select the wall of the SheetMetal object to be embossed
2. Select the **back side** of the shape defining solid  
    (Remember both the object to be embossed **and** the shape defining solid must be selected. Activate the multi-select method appropriate for your operating system: Control/Command.)  
   ![](/images/SheetMetal_Forming-04.png)
3. Press the ![](/images/SheetMetal_Forming.svg) [Make Forming in Wall](/SheetMetal_Forming "SheetMetal Forming") button  
   or use the keyboard shortcut: M then F  
   ![](/images/SheetMetal_Forming-05.png)
4. Fillet the sharp edges:
   - Flip the bowl and select one or more edges for the smaller inner radii
   - Press the ![](/images/PartDesign_Fillet.svg) [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet") button  
     ![](/images/SheetMetal_Forming-12.png) \*_-->_- ![](/images/SheetMetal_Forming-02.png)
   - Flip the bowl again and select one or more edges for the bigger outer radii
   - Press the ![](/images/PartDesign_Fillet.svg) [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet") button  
     ![](/images/SheetMetal_Forming-13.png) \*_-->_- ![](/images/SheetMetal_Forming-01.png)
     Done!
5. Alter orientation and position (should be done before filleting)
   - Activate the ![](/images/SheetMetal_Forming.svg) WallForming object in the [Tree view](/Tree_view "Tree view")
   - Set the value of the property Data**angle** to e.g. 45°  
      ![](/images/SheetMetal_Forming-14.png)
   - Set the value of the property Data**offset, x** to e.g. greater than 0  
      ![](/images/SheetMetal_Forming-06.png)  
      Here it is plain to see that it doesn't make sense to move the embossed geometry outside the selected wall.
   - Setting the value of the property Data**offset, z** to e.g. greater than 0 isn't any better:  
      ![](/images/SheetMetal_Forming-07.png)  
      At least the FreeCAD doesn't crash when a part has two bodies...
6. Some hints
   1. The height of the defining solid determines the depth of the embossed shape.  
      That means changing the parameter **offset, z** to alter the depth won't deliver expected results.
   2. The embossed geometry is made of a shell object i.e. it has a constant thickness.  
      And so the defining solid has to be offsetable, otherwise the tool will fail to create the emboss.
   3. If the outer edges are filleted first it may rip the object into several pieces when the radii are set too large.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Forming/en&oldid=1545493>"
