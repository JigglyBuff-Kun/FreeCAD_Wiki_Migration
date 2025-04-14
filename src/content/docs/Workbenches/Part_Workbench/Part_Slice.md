---
title: Part Slice
---

|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Part Slice                                                                                                                                                                                                                     |
| Menu location                                                                                                                                                                                                                  |
| Part → Split → Slice to compound                                                                                                                                                                                               |
| Workbenches                                                                                                                                                                                                                    |
| [Part](/Part_Workbench "Part Workbench")                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                         |
| Introduced in version                                                                                                                                                                                                          |
| 0.17                                                                                                                                                                                                                           |
| See also                                                                                                                                                                                                                       |
| [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), [Part XOR](/Part_XOR "Part XOR"), [Part Join features](/Part_CompJoinFeatures "Part CompJoinFeatures"), [Part Boolean](/Part_Boolean "Part Boolean") |
|                                                                                                                                                                                                                                |

## Description

The ![](/images/Part_Slice.svg) [Part Slice](/Part_Slice "Part Slice") also known as **Slice to compound** tool is used to split shapes by intersection with other shapes. For example, for a box and a plane, a compound of two solids is created.

![](/images/Part_Slice_Demo.png)

Above: the pieces were moved apart manually afterwards, to reveal the slicing

There are two commands to slice a shape: ![](/images/Part_SliceApart.svg) [Part Slice apart](/Part_SliceApart "Part SliceApart") and ![](/images/Part_Slice.svg) [Part Slice to compound](/Part_Slice "Part Slice"). They both create a 'Slice' parametric feature, that puts the sliced pieces into a compound. However, ![](/images/Part_SliceApart.svg) [Part Slice Apart](/Part_SliceApart "Part SliceApart") explodes the resulting compound into separate objects. "Slice to compound" is fully-parametric, and causes no trouble as the number of pieces changes. "Slice apart" will not update the number of objects as the number of pieces changes.

The output shape occupies the same space as the original. But it is split where it intersects with other shapes. The split pieces are put into a compound (or compsolid), so the object appears to remain in one piece. You need to explode the compound to get the individual pieces. If you want to access the individual pieces in a parametric way you can use ![](/images/Part_CompoundFilter.svg) [Part Compound Filter](/Part_CompoundFilter "Part CompoundFilter") for this purpose. For quick non-parametric access use ![](/images/Draft_Downgrade.svg) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade").

The tool has three modes: "Standard", "Split", and "CompSolid". There is no selection form, they are predefined but can be accessed after the operation on the resulting slices level.

"Standard" and "Split" differ by the action of the tool on wires, shells and compsolids: if "Split", those are separated; if "Standard", they are kept together (get extra segments).

Compounding structure in "Standard" and "Split" modes follows the compounding structure of shape being sliced.

In "CompSolid" mode, the output is a compsolid (or a compound of compsolids, if the resulting solids form more than one island of connectedness). Compsolid is a set of solids connected by faces; they are related to solids like wires are related to edges, and shells are related to faces; the name is probably a shortened phrase "composite solid".

The overall action of the tool is very similar to ![](/images/Part_BooleanFragments.svg) [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), except only the pieces from the first shape are in the result.

## Usage

1. Select the object to be sliced, first, and then some objects to slice with.  
   The order of selection is important. Compounds with self-intersections are not allowed (self-intersections sometimes can be accounted for by passing the compound through ![](/images/Part_BooleanFragments.svg) [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"))
2. Invoke the Part Slice command several ways:

   - Press the ![](/images/Part_Slice.svg) [Part Slice](/Part_Slice "Part Slice") button in the Part toolbar
   - Use the **Part → Split → Slice to compound** entry in the Part menu

3. Noteː The Objects to slice with must completely separate the object to be sliced. Thus a cube cannot be sliced by a wire, but by a plane derived from an extruded wire for instance.

A Slice parametric object is created. Original objects are hidden, and the result of intersection is shown in [3D view](/3D_view "3D view").

### Tree structure of Slice

The Slice command creates a sliced object. In the following example a cube is sliced by a face.

The slice is created and each piece of it is united in a Compound.

![](/images/Part_SliceTree.png)

## Properties

Slice

- Data**Base**: Object to be sliced.
- Data**Tools**: List of objects to slice with. (as of FreeCAD v0.17.8053, this property is not displayed in property editor, and can only be accessed via Python).
- Data**Mode**: "Standard", "Split", or "CompSolid". "Split" is default. Standard and Split differ by the action of the tool on aggregation type shapes: if Split, those are separated; otherwise they are kept together (get extra segments).
- Data**Tolerance**: "fuzziness" value. This is an extra tolerance to apply when searching for intersections, in addition to tolerances stored in the input shapes.

̈Noteː Properties are accessible on the slices inner object, not on the result level.

## Example

### Creating a Puzzle

1. Switch to ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
   - Create a new sketch.
   - Draw a rectangle that will outline the overall shape of the puzzle.
   - Close the sketch.  
     ![](/images/Slice_example_step1.png)
2. Switch to ![](/images/Workbench_Part.svg) [Part workbench](/Part_Workbench "Part Workbench").
   - Select the sketch, and pick **Part → ![](/images/Part_MakeFace.svg) [Make face from wires](/Part_MakeFace "Part MakeFace")**.  
     ![](/images/Slice_example_step2.png)
3. Switch back to ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
   - Create another sketch on the same plane.
   - Using polyline tool, draw the lines that will split the puzzle into pieces.  
     ![](/images/Slice_example_step3.png)
4. Switch back to ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").
   - Select the splitter sketch, and apply ![](/images/Part_BooleanFragments.svg) [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"). This will insert vertices where lines of splitter sketch intersect. Having them is essential for the next step to work.  
     ![](/images/Slice_example_step4.png)
5. Select the rectangular face, and the BooleanFragments of splitter sketch, and apply ![](/images/Part_Slice.svg) Part Slice.  
   ![](/images/Slice_example_step5.png)
6. Use ![](/images/Part_ExplodeCompound.svg) [Part ExplodeCompound](/Part_ExplodeCompound "Part ExplodeCompound") on the sliced face, to break apart the compound made by Part Slice into individual pieces.

**Note:** Steps 5 and 6 can be done in single click using ![](/images/Part_SliceApart.svg) [Part SliceApart](/Part_SliceApart "Part SliceApart")

## Notes

- The tool was introduced in FreeCAD v0.17.8053. FreeCAD needs to be compiled with OCC 6.9.0 or later; otherwise, the tool is unavailable.
- ̈Properties are accessible on the slices inner object, not on the result level.
- The Objects to slice with must completely separate the object to be sliced. Thus a cube cannot be sliced by a wire, but by a plane derived from an extruded wire for instance.
- Slicing object must pass BOP check. See ![](/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry").

## Scripting

The tool can by used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
BOPTools.SplitFeatures.makeSlice(name)

```

- Creates an empty Slice feature. The 'Base' and 'Tools' properties must be assigned explicitly, afterwards.
- Returns the newly created object.

Slice can also be applied to plain shapes, without the need to have a document object, via:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

This can be useful for making custom Python scripted features.

Example:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

The tool itself is implemented in Python, see /Mod/Part/BOPTools/SplitFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) within the FreeCAD installation directory.

## Tutorials

- [FreeCad 0.18 Part WB using Slice and Slice Apart](https://www.youtube.com/watch?v=tzHkQaHgrfQ) (English language), author: Ha Gei

- [FreeCAD Slice und Slice Apart und andere Tricks](https://www.youtube.com/watch?v=JJAL5JmqqKQ) (German language), author: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Slice/en&oldid=1251301>"
