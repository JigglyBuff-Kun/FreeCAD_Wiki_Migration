---
title: Part Slice
---
|  |
| --- |
| Part Slice |
| Menu location |
| Part → Split → Slice to compound |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), [Part XOR](/Part_XOR "Part XOR"), [Part Join features](/Part_CompJoinFeatures "Part CompJoinFeatures"), [Part Boolean](/Part_Boolean "Part Boolean") |
|  |

## Description

## Descriere

Este un instrument pentru a împărți forme prin intersecția cu alte forme. De exemplu, pentru o cutie și un plan, este creat un compus de două solide.

![](/images/Part_Slice_Demo.png)

(on the picture above, the pieces were moved apart manually afterwards, to reveal the slicing)

There are two commands to slice a shape: ![](/images/Part_SliceApart.svg) [Part Slice apart](/Part_SliceApart "Part SliceApart") and ![](/images/Part_Slice.svg) [Part Slice to compound](/Part_Slice "Part Slice"). They both create a 'Slice' parametric feature, that puts the sliced pieces into a compound. However, ![](/images/Part_SliceApart.svg) [Part Slice Apart](/Part_SliceApart "Part SliceApart") explodes the resulting compound into separate objects. "Slice to compound" is fully-parametric, and causes no trouble as the number of pieces changes. "Slice apart" will not update the number of objects as the number of pieces changes.

The output shape occupies the same space as the original. But it is split where it intersects with other shapes. The split pieces are put into a compound (or compsolid), so the object appears to remain in one piece. You need to explode the compound to get the individual pieces. If you want to access the individual pieces in a parametric way you can use [Part CompoundFilter](/Part_CompoundFilter "Part CompoundFilter") for the purpose. For quick non parametric access use [Draft Downgrade](/Draft_Downgrade "Draft Downgrade").

The tool has three modes: "Standard", "Split", and "CompSolid".

"Standard" and "Split" differ by the action of the tool on wires, shells and compsolids: if "Split", those are separated; if "Standard", they are kept together (get extra segments).

Compounding structure in "Standard" and "Split" modes follows the compounding structure of shape being sliced.

In "CompSolid" mode, the output is a compsolid (or a compound of compsolids, if the resulting solids form more than one island of connectedness). Compsolid is a set of solids connected by faces; they are related to solids like wires are related to edges, and shells are related to faces; the name is probably a shortened phrase "composite solid".

The overall action of the tool is very similar to [Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), except only the pieces from the first shape are in the result.

## Usage

## Cu se folosește

1. Select the object to be sliced, first, and then some objects to slice with.   
    The order of selection is important. Compounds with self-intersections are not allowed (self-intersections sometimes can be accounted for by passing the compound through [BooleanFragments](/Part_BooleanFragments "Part BooleanFragments"))
2. Invoke the Part Slice command.

1. Noteː The Objects to slice with must completely separate the object to be sliced. Thus a cube cannot be sliced by a wire, but by a plane derived from an extruded wire for instance.

A Slice parametric object is created. Original objects are hidden, and the result of intersection is shown in 3D view.

### Tree structure of Slice

The Slice command creates a sliced object. In the following example a cube is sliced by a face.

The slice is created and each piece of it is united in a Compound.

![](/images/Part_SliceTree.png)

## Properties

## Proprietăți

Slice

* Date**Base**: Object to be sliced.
* Date**Tools**: List of objects to slice with. (as of FreeCAD v0.17.8053, this property is not displayed in property editor, and can only be accessed via Python).
* Date**Mode**: "Standard", "Split", or "CompSolid". "Split" is default. Standard and Split differ by the action of the tool on aggregation type shapes: if Split, those are separated; otherwise they are kept together (get extra segments).
* Date**Tolerance**: "fuzziness" value. This is an extra tolerance to apply when searching for intersections, in addition to tolerances stored in the input shapes.

̈Noteː Properties are accessible on the slices inner object, not on the result level.

## Exemple: making puzzle

1. Switch to [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), create an new sketch. Draw a rectangle that will outline the overall shape of the puzzle. Close the sketch.  
   ![](/images/Slice_example_step1.png)
2. Switch to [Part workbench](/Part_Workbench "Part Workbench"). Select the sketch, and pick Part->Create face from sketch (in menu).  
   ![](/images/Slice_example_step2.png)
3. Switch to Sketcher workbench, and create another sketch on the same plane. Using polyline tool, draw the lines that will split the puzzle into pieces.  
   ![](/images/Slice_example_step3.png)
4. Switch to Part workbench. Select the splitter sketch, and apply [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"). This will insert vertices where lines of splitter sketch intersect. Having them is essential for the next step to work.  
   ![](/images/Slice_example_step4.png)
5. Select the rectangular face, and the BooleanFragments of splitter sketch, and apply Part Split.  
   ![](/images/Slice_example_step5.png)
6. Switch to Draft workbench, and apply Draft Downgrade to the result. You should get all the pieces as "Face00X" in document tree, that can be moved independently. Done!  
   ![](/images/Slice_example_step6.png)

### Creating a Puzzle

1. Switch to ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
   * Create a new sketch.
   * Draw a rectangle that will outline the overall shape of the puzzle.
   * Close the sketch.  
     ![](/images/Slice_example_step1.png)
2. Switch to ![](/images/Workbench_Part.svg) [Part workbench](/Part_Workbench "Part Workbench").
   * Select the sketch, and pick **Part → ![](/images/Part_MakeFace.svg) [Make face from wires](/Part_MakeFace "Part MakeFace")**.  
     ![](/images/Slice_example_step2.png)
3. Switch back to ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
   * Create another sketch on the same plane.
   * Using polyline tool, draw the lines that will split the puzzle into pieces.  
     ![](/images/Slice_example_step3.png)
4. Switch back to ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").
   * Select the splitter sketch, and apply ![](/images/Part_BooleanFragments.svg) [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"). This will insert vertices where lines of splitter sketch intersect. Having them is essential for the next step to work.  
     ![](/images/Slice_example_step4.png)
5. Select the rectangular face, and the BooleanFragments of splitter sketch, and apply ![](/images/Part_Slice.svg) Part Slice.  
   ![](/images/Slice_example_step5.png)
6. Use ![](/images/Part_ExplodeCompound.svg) [Part ExplodeCompound](/Part_ExplodeCompound "Part ExplodeCompound") on the sliced face, to break apart the compound made by Part Slice into individual pieces.

**Note:** Steps 5 and 6 can be done in single click using ![](/images/Part_SliceApart.svg) [Part SliceApart](/Part_SliceApart "Part SliceApart")

## Notes

## Versiune

Acest instrument a fost introdus în FreeCAD v0.17.8053. FreeCAD și necesită compilarea cu OCC 6.9.0 sau mai recent; altfel instrumentul este inutilizabil.

## Scrip-Programare

Instrumentul poate fi utilizat în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

```
BOPTools.SplitFeatures.makeSlice(name)

```

* Creates an empty Slice feature. The 'Base' and 'Tools' properties must be assigned explicitly, afterwards.
* Returns the newly created object.

Slice poate fi, de asemenea, aplicat la forme simple, fără a fi nevoie să aibă un obiect de document, prin:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

This can be useful for making custom Python scripted features.
Acest lucru poate fi util pentru crearea de funcții(onalități) script-Programare personalizate Python.

Example:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

Instrumentul propriu-zis este implementat în Python, vezi /Mod/Part/BOPTools/SplitFeatures.py unde este instalat FreeCAD.

## Tutorials

* [FreeCad 0.18 Part WB using Slice and Slice Apart](https://www.youtube.com/watch?v=tzHkQaHgrfQ) (English language), author: Ha Gei

* [FreeCAD Slice und Slice Apart und andere Tricks](https://www.youtube.com/watch?v=JJAL5JmqqKQ) (German language), author: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Slice/ro&oldid=1251299>"