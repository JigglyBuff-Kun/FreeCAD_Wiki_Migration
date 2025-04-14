---
title: SheetMetal AddWall
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal AddWall                                         |
| Menu location                                              |
| SheetMetal → Make Wall                                     |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| W                                                          |
| Introduced in version                                      |
| -                                                          |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_AddWall.svg) **SheetMetal AddWall** command creates flanges on selected edges of a base plate. By changing the Data**angle** property a flange it can be turned into a hem.

A **flange** consists of a 90° cylindrical bend and a planar strip (wall).

![](/images/SheetMetal_AddWall-12.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-13.png)

Two selected edges → two flanges

Resetting the Data**angle** property to about 180° in a second step will create a **hem** instead.

![](/images/SheetMetal_AddWall-14.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-15.png)

Two selected edges → two hems

## Usage

1. Select one or more edge(s) of a base plate.
2. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall") button.
   - Select the **Sheet Metal → ![](/images/SheetMetal_AddWall.svg) Make Wall** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/images/SheetMetal_AddWall.svg) Make Wall** option from the context menu.
   - Use the keyboard shortcut: W.
3. A **Bend** object is created and the **Flange properties** [Task panel](/Task_panel "Task panel") opens with the **General** tab selected.

   : The bend object consists of one new flange at each selected edge.

4. Optionally press the Select button to add more edges.
   - Optionally press the Clear selection button to clear the list of selected edges (introduced in 0.7.11 but doesn't work properly).
   - Press the Preview button to finish the selection and display the changes.
5. Optionally select another tab and adjust more parameters in the Task panel.
6. Press the OK button to finish the command and close the Task panel.
7. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

### Task panel

A [Task panel](/Task_panel "Task panel") with four tabs was introduced in 0.6.00

Double-click an existing Bend object in the [Tree view](/Tree_view "Tree view") to re-open the Task panel and edit the parameters.

#### General

![](/images/SheetMetal_AddWall-Task1.png)

- Select: Changes the amount of edges in the **base Object** property.
- **Length**: Sets the **length** property.
- ![](/images/Invert_On.svg) Reverse the wall: Toggles the **invert** property.
- **Length mode**: Sets the **Length Spec** property.
- **Bend radius**: Sets the **radius** property.
- **Bend angle**: Sets the **angle** property.
- ![](/images/FaceSelection_On.svg) Face reference: Toggles the **Angle Face Ref Mode** property.

  : If activated, it switches the **Bend angle** option to read-only mode and displays two further options:

  - **Reference**: Awaits a face to be selected in the 3d view and links it to the **Angle Face Reference** property.
  - **Relative angle**: Sets the **Relative Angle To Ref** property and also the **angle** property..

- **Unfold**: Toggles the **unfold** property.

#### Offsets

![](/images/SheetMetal_AddWall-Task2.png)

- **Gap A**: Sets the **gap1** property.
- **Gap B**: Sets the **gap2** property.
- **Extend A**: Sets the **extend1** property.
- **Extend B**: Toggles the **extend2** property.
- **Rectangle** and **Round** radio buttons: Toggle **Relief Type** property.
- **Width**: Sets the **reliefw** property.
- **Depth**: Toggles the **reliefd** property.

#### Miter

![](/images/SheetMetal_AddWall-Task3.png)

- **Auto Miter**: Toggles the **Auto Miter** property.

  : If checked:

  - **Minimum Gap**: Sets the **minGap** property.
  - **Max Extend Distance**: Sets the **max Extend Dist** property.

  : If unchecked:

  - **Angle 1**: sets the **miteralgle1** property.
  - **Angle 2**: sets the **miteralgle2** property.

#### Perforation

![](/images/SheetMetal_AddWall-Task4.png)

- **Perforate**: Toggles the **Perforate** property.

  : If checked:

  - **Angle**: Sets the **Perforation Angle** property.
  - **Initial Cut Length**: Sets the **Perforation Initial Length** property.
  - **Max Cut Length**: Sets the **Perforation Max Length** property.
  - **Max Tab Length**: Sets the **Nonperforation Max Length** property.

## Notes

To create a base plate use a closed 2D outline - preferably a ![](/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch") - with the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") command.

Alternatively a base plate (blank) can be created with commands from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") or ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

To create a blank with the [Part Workbench](/Part_Workbench "Part Workbench"):

1. Create a solid using either:
   - ![](/images/Part_Box.svg) [Part Box](/Part_Box "Part Box").
   - ![](/images/Part_Extrude.svg) [Part Extrude](/Part_Extrude "Part Extrude") from:
     - A ![](/images/Draft_Rectangle.svg) [Draft Rectangle](/Draft_Rectangle "Draft Rectangle").
     - A ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire").
     - A ![](/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch").
2. Make sure one the dimensions of the Box or the extrusion distance equals the sheet metal thickness.

To create a blank with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"):

1. Create a solid using either:
   - ![](/images/PartDesign_AdditiveBox.svg) [Additive Box](/PartDesign_AdditiveBox "PartDesign AdditiveBox").
   - ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") from a ![](/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch").
2. Make sure one the dimensions of the Box or the Data**Length** property of the Pad equals the sheet metal thickness.

If you start with a ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), you can mix SheetMetal features with PartDesign features such as ![](/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket") or ![](/images/PartDesign_Hole.svg) [PartDesign Hole](/PartDesign_Hole "PartDesign Hole").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Bend object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**Bend Type** (`Enumeration`): "Bend Type". `Material Outside` (default), `Material Inside`, `Thickness Outside`, `Offset`.
- Data**Length Spec** (`Enumeration`): "Type of Length Specification". `Leg` (default), `Outer Sharp`, `Inner Sharp`, `Tangential`.
- Data**angle** (`Angle`): "Bend Angle". Default angle: `90,00°`.
- Data**base Object** (`LinkSub`): "Base Object". Link to the planar face to receive a bend.
- Data**extend1** (`Distance`): "Extend from Left Side". Default: `0,00 mm`.
- Data**extend2** (`Distance`): "Extend from Right Side". Default: `0,00 mm`.
- Data**gap1** (`Distance`): "Gap from Left side". Default: `0,00 mm`.
- Data**gap2** (`Distance`): "Gap from Right side". Default: `0,00 mm`.
- Data**invert** (`Bool`): "Invert Bend Direction". Default: `false`.
- Data**length** (`Length`): "Length of Wall". Default: `10,00 mm`.
- Data**radius** (`Length`): "Bend Radius", the default value depends on the radius property of the parent feature:
  - That property is not existent: This property is set to `1,00 mm`.
  - That property contains a numeric value: An expression linking that property is inserted into this property.
  - That property contains an expression: The expression is copied into this property.

Parameters Ex

- Data**Angle Face Ref Mode** (`Bool`): "Enable face reference for angle". Default: `true`. introduced in 0.7.11
- Data**Angle Face Referene** (`LinkSub`): "Face reference for angle". Default: `true`. introduced in 0.7.11
- Data**Auto Miter** (`Bool`): "Enable Auto Miter". Default: `true`.
- Data**Offset Face Ref Mode** (`Bool`): "Enable face reference for offset". Default: `true`. introduced in 0.7.11
- Data **Offset Face Reference** (`LinkSub`): "Face reference for offset". Default: `true`. introduced in 0.7.11
- Data**Offset Type** (`Enumeration`): "Offset Type". introduced in 0.7.11

  : Values: `Material Outside`, `Material Inside` (default), `Thickness Outside`, `Offset`.

- Data**Offset Type Offset** (`Distance`): "Works when offset face reference is on. It offsets by a normal distance from the offset reference face". Default: `0.00`. introduced in 0.7.11
- Data**Relative Angle To Ref** (`Angle`): "Relative angle to the face reference". Default: `0.00`. introduced in 0.7.11
- Data**Suppl Angle Ref** (`Bool`): "Supplementary angle reference". Default: `true`. introduced in 0.7.11
- Data**kfactor** (`FloatConstraint`): "Location of Neutral Line. Caution: Using ANSI standards, not DIN.".  
   Default: `0,50`. K factor (also known as neutral factor) for the bend. Used to calculate bend allowance when unfolding.
- Data**max Extend Dist** (`Length`): "Auto Miter maximum Extend Distance". Default: `5,00 mm`.
- Data**min Gap** (`Length`): "Auto Miter Minimum Gap". Default: `0,20 mm`.
- Data**min Relief Gap** (`Length`): "Minimum Gap to Relief Cut". Default: `1,00 mm`.
- Data**offset** (`Distance`): "Offset Bend". Default: `0,00 mm`.
- Data**unfold** (`Bool`): "Shows Unfold View of Current Bend". Default: `false`  
   `true` unfolds the bend.

Parameters Ex2

- Data**Sketch** (`Link`): "Sketch Object".
- Data**sketchflip** (`Bool`): "Flip Sketch Direction". Default: `false`.
- Data**sketchinvert** (`Bool`): "Invert Sketch Start". Default: `false`.

Parameters Ex3

- Data**Length List** (`FloatList`): "Length of Wall List". Default: `[10.00]`.
- Data**bend AList** (`FloatList`): "Bend Angle List". Default: `[90.00]`.

Parameters Miterangle

- Data**miterangle1** (`Angle`): "Bend Miter Angle from Left Side". Default angle: `0,00°`.
- Data**miterangle2** (`Angle`): "Bend Miter Angle from Right Side". Default angle: `0,00°`.

Parameters Perforation

- Data**Nonperforation Max Length** (`Length`): "Non-Perforation Max Length". Default: `5 mm`.
- Data**Perforate** (`Bool`): "Enable perforation". Default: `false`.
- Data**Perforation Angle** (`Angle`): "Perforation Angle". Default: `0 °`.
- Data**Perforation initial Length** (`Length`): "Initial Perforation Length". Default: `5 mm`.
- Data**Perforation Max Length** (`Length`): "Perforation Max Length". Default: `5 mm`.

Parameters Relief

- Data**Relief Factor** (`Float`): "Relief Factor". Default: `0,70`.
- Data**Use Relief Factor** (`Bool`): "Use Relief Factor". Default: `false`.
- Data**relief Type** (`Enumeration`): "Relief Type". `Rectangle` (default), `Round`. Enabled only when a gap value is set.
- Data**reliefd** (`Length`): "Relief Depth". Default: `1,00 mm`. Enabled only when a gap value is set.
- Data**reliefw** (`Length`): "Relief Width". Default: `0,80 mm`. Enabled only when a gap value is set.

## Example

![](/images/SheetMetal_AddWall-01.png)

A simple tray

### Preparation

This tray is made of a rectangular blank with walls added to its outline edges.
And so one outline sketch for the blank has to be prepared in advance.

![](/images/SheetMetal_AddWall-02.png)

Just a rectangular outline

### Workflow

1. Create a blank
   1. Select the outline sketch  
      ![](/images/SheetMetal_AddWall-03.png)
   2. Press the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") button  
      or use the keyboard shortcut: C then F  
      ![](/images/SheetMetal_AddWall-04.png)  
      (The blank is padded in z direction
2. Add walls to the outline edges
   1. Select the blank's **outline edges**  
      ![](/images/SheetMetal_AddWall-05.png)
   2. Press the ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall") button  
      or use the keyboard shortcut: W  
      ![](/images/SheetMetal_AddWall-06.png)
   3. If the fold is 90° down set the value of **invert** property to true to reverse the direction (and **length** to a lower value for smaller walls)  
      ![](/images/SheetMetal_AddWall-01.png)
3. Add some more walls
   1. Select the tray's **upper outside edges**  
      ![](/images/SheetMetal_AddWall-08.png)
   2. Press the ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall") button  
      or use the keyboard shortcut: W  
      ![](/images/SheetMetal_AddWall-09.png)
   3. The walls are a bit too long (but nicely trimmed) and so the **length** property has to be set to a lower value  
      ![](/images/SheetMetal_AddWall-10.png)
   4. If you like the folds swing outward set the **invert** value to true  
      ![](/images/SheetMetal_AddWall-11.png)

Done!

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddWall/en&oldid=1546753>"
