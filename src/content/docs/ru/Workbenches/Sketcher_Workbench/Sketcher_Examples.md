---
title: Примеры в Скетчере
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Введение

I think the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") needs some examples that are not detailed tutorials or videos...

## Film hinge

A film hinge is the tiny piece of bendable plastic that connects the two sides of an injection moulded object such as a conduit with a lid, or both halves of a dust protecting plug enclosure.

This example uses some kind of master sketch to stack some dependent sketches upon it. It also shows how to attach and animate a simple clip based on ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") features and ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench "Sketcher Workbench") constraints. The use of ![](/images/Bound-expression.svg) [expressions](/Expressions "Expressions") as described below requires FreeCAD **V 0.21 or higher**.

### Basic sketch

Usually an object is modelled in closed condition. Later the moving part has to be flipped over by 180° to be moulded in open condition.  
The bendable strip is represented by a circular arc for the closed condition and by a straight line for the open condition both having the same start point.  
The midpoint of a line connecting both end points indicates the position of the flipping axis, which is normal to the sketch plane. (It is placed on the sketch origin so that the global axis standing normal to the sketch plane can be used as flipping axis)

(Some hidden extra explanation and workflow description can be expanded over there -->

![](/images/Sketcher_ExampleHinge-01.gif)

Master sketch and the animated final film hinge (click on the image if the animation has stopped after some repetitions)

For a semi circle, the arc length is the radius multiplied by Pi (**l = r \* Pi**). The radius is named NeutralRadius and the line is called DevelopedLength. An expression for the DevelopedLength relates both values: `.Constraints.NeutralRadius * pi`

: Within the same sketch an expression starts with a `.` followed by ValueType.ValueName to address another value.

### Intermediate sketch

The arc of this film hinge has a constant length and a variable radius. One input is the NeutralRadius of the basic sketch; to have it at hand in this sketch, it is linked as ![](/images/Sketcher_External.svg) [external geometry](/Sketcher_External "Sketcher External") having a reference dimension called ReferenceRadius

A pie segment of construction geometry displays the relation between the arc and the radius for a given angle.  
**InputLength = ReferenceRadius \* Pi**  
and  
**ArcLength = DynamicRadius \* Pi \* ArcAngle / 180°**  
with constant length results in:  
**ReferenceRadius \* Pi = DynamicRadius \* Pi \* ArcAngle / 180°**  
And with Pi eliminated we get:  
**ReferenceRadius = DynamicRadius \* ArcAngle / 180°** or **DynamicRadius = ReferenceRadius \* 180° / ArcAngle**

: The ![](/images/Bound-expression.svg) [expression](/Expressions "Expressions") for the DynamicRadius value: `.Constraints.ReferenceRadius * 180 ° / .Constraints.ArcAngle`

A film hinge is usually symmetric and so another arc with the same center point called HalfArc is used for the output and represents one half of the hinge arc.

: The ![](/images/Bound-expression.svg) [expression](/Expressions "Expressions") for the HalfArc value: `.Constraints.ArcAngle / 2`

![](/images/Sketcher_ExampleHinge-02.png)

Intermediate sketch showing the DynamicRadius of the hinge arc of 4 (mm) at a given angle of 45° (and the half arc for output)

### Film hinge sketch

This sketch defines the thickness and the adjacent geometry of the film hinge. Therefore we load the half arc of the intermediate sketch as external geometry to use it as the base for the film part. (a fraction of 180° in this case)

This film hinge is intended to keep the connected parts touching each other when closed. This can be achieved by calculating a circular arc of the needed length then create a strip with constant thickness and finally apply fillets where the strip meets the object halves. The last step somehow shortens the loop, but in the real world this is not a problem, because the arc will never be circular and so the fillets have an influence on the arc's curvature but not on its functionality.

![](/images/Sketcher_ExampleHinge-03.png)

Hinge sketch showing the outline of the hinge based on the external geometry from the half arc of the intermediate sketch

![](/images/Sketcher_ExampleHinge-04.png)
![](/images/Sketcher_ExampleHinge-05.png)

Left: ![](/images/PartDesign_Pad.svg) [padded](/PartDesign_Pad "PartDesign Pad") half hinge with sketch visible. Right: half hinge with added ![](/images/PartDesign_Fillet.svg) [fillet](/PartDesign_Fillet "PartDesign Fillet")

![](/images/Sketcher_ExampleHinge-06.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-07.png)

Half hinge with selected mirror plane → ![](/images/PartDesign_Mirrored.svg) [mirrored](/PartDesign_Mirrored "PartDesign Mirrored") film hinge

Hint: ![](/images/Part_Mirror.svg) [Part Mirror](/Part_Mirror "Part Mirror") only accepts the three basic planes and so can not be used in such a case.

: (In retrospect it was a wise decision to start this example with the combination of PartDesign and Sketcher.)

Finally two parameters define the size of the film hinge:

- the NeutralRadius of the basic sketch
- the thickness value of the film hinge sketch

### Bending the film hinge

The bend angle is controlled by the constraint ArcAngle of the intermediate sketch and can be altered in its property editor.  
But we are proper designers and have named our sketches constraints and dimensions properly and so can address the controlling angle via Python.  
Some basic lines of code to be embedded in a GUI context could look like this:

```
doc=App.ActiveDocument
sketch=doc.getObjectsByLabel('IntermediateSketch')[0]
 ...
sketch.getDatum('ArcAngle')
 ...
sketch.setDatum('ArcAngle',App.Units.Quantity('50.000000 deg'))
doc.recompute(None,True,True)

```

A short explanation:

- `doc = App.ActiveDocument`: To address the active document by an alias called **doc**
- `sketch = doc.getObjectsByLabel('IntermediateSketch')[0]`: To address the relevant sketch by the alias **sketch**.

  : The method **getObjectsByLabel()** returns a list of objects and we have to suffix index `0` to pick the first object in the list. (We do not expect any other object having the same label and so do not have to care about other items in the list.)

- `sketch.getDatum('ArcAngle')`: Returns the current value of the dimensional constraint **ArcAngle** (to the Report view)
- `sketch.setDatum('ArcAngle', App.Units.Quantity('50.0 deg'))`: Sets the value of **ArcAngle** to `50°`
- `doc.recompute(None,True,True)`: To update the whole document to show the changes of dependant geometry as well.

### Connecting geometry

Two halves of a clip stuff are waiting to get attached to the hinge, one on the static side and one on the movable side.

![](/images/Sketcher_ExampleHinge-08.png)

Two halves of a simple clip

The static side is easy:

1. Activate the body and adjust the position and orientation properties in the properties editor until it matches with the film hinge.
2. Activate the hinge body.
3. Select the ![](/images/PartDesign_Boolean.svg) [PartDesign Boolean](/PartDesign_Boolean "PartDesign Boolean") tool with the (default) Fuse option.
4. In the dialog press the Add body button.
5. select the **body** of the static half of the clip.
6. Press OK to finish and close the dialog.

![](/images/Sketcher_ExampleHinge-09.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-10.png)

Film hinge and static half in modelling position → film hinge with relocated and ![](/images/PartDesign_Boolean.svg) [fused](/PartDesign_Boolean "PartDesign Boolean") static half

But the moving side is different: The related half of the clip geometry has to move into the right position before a (re-) calculation of a Fuse operation gets started.

At this point I'm missing an "Attachment with offset" function like that of Assembly3 to attach the clip geometry to one of the moving faces. But after a bit of experimenting and tweaking I found out:

- ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") and ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") containers are not supported by ![](/images/Part_EditAttachment.svg) [Part Attachment](/Part_EditAttachment#Limitations "Part EditAttachment").

: While it is possible to use Attachment to align them, the attachment won't be parametrically linked.

- Attachment can be applied to a PartDesign feature. This and features depending on it are repositioned according to the base geometry. But!:
  - Independent PartDesign features won't move and so it will change the resulting shape and break it in the end.
  - We are advised to keep features independent to avoid impacts due to the [Topological naming problem](/Topological_naming_problem "Topological naming problem").
- ![](/images/PartDesign_Clone.svg) [PartDesign Clone](/PartDesign_Clone "PartDesign Clone") creates a body with a single feature that can be use with Attachment.

With that in mind, a workflow could look like this:

1. Select the body of the movable half.
2. Use the ![](/images/PartDesign_Clone.svg) [Create a clone](/PartDesign_Clone "PartDesign Clone") command.
3. In the new body select the Clone object in the Tree view.
4. Use the ![](/images/Part_EditAttachment.svg) [Part Attachment](/Part_EditAttachment "Part EditAttachment") tool to add attachment properties to the Clone object.
5. The Attachment dialog opens.
   - Select a vertex for the origin.
   - Select an edge for the first direction.
   - Select an edge for the second direction.
   - Probe the attachment modes to find the best fitting one.
   - Tweak rotation and coordinate values until until the geometry is in modelling position again.
6. Press OK to close the dialog.
7. With the hinge body still active select the ![](/images/PartDesign_Boolean.svg) [PartDesign Boolean](/PartDesign_Boolean "PartDesign Boolean") tool.
8. In the dialog press the Add body button.
9. select the body of the movable half .
10. Press OK to finish and close the dialog.

![](/images/Sketcher_ExampleHinge-14.png)

The movable half will be ![](/images/Part_EditAttachment.svg) [attached](/Part_EditAttachment "Part EditAttachment") to a corner of the movable hinge side (Map Mode OXZ: vertex, edge, edge)

In retrospect it would have been wiser to provide the attachment geometry with the IntermediateSketch to avoid another source of the [Topological naming problem](/Topological_naming_problem "Topological naming problem").

![](/images/Sketcher_ExampleHinge-11.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-12.png)

The clip so far and the movable half in modelling position → finished clip with ![](/images/Part_EditAttachment.svg) [attached](/Part_EditAttachment "Part EditAttachment") and ![](/images/PartDesign_Boolean.svg) [fused](/PartDesign_Boolean "PartDesign Boolean") movable half

Now the result should be a single solid clip, that can be closed and opened by changing the ArcAngle of the film hinge. Allowed angles: 0.1° to 180°, the film section must not get straight, and more than closed doesn't make sense. (At 180° the object may get fused at tangent or overlapping areas, but a little extra gap could help if that is not acceptable.)

![](/images/Sketcher_ExampleHinge-13.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-15.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-16.png)

Clip almost closed → Clip half closed → Clip in mould condition

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Examples/ru&oldid=1564382>"
