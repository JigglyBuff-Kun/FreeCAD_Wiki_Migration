---
title: Sketcher RectangularArray/hr
---
:::caution
This tool is obsolete, it is not available in1.0 and above. UseSketcher Translateinstead.
:::

|  |
| --- |
| Sketcher RectangularArray |
| Menu location |
| Sketch → Sketcher tools → Rectangular array |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z A |
| Introduced in version |
| 0.16 |
| See also |
| *None* |
|  |

## Opis

The ![](/images/Sketcher_RectangularArray.svg) [Sketcher Rectangular array](/Sketcher_RectangularArray "Sketcher RectangularArray") command creates an array of selected sketcher elements.

## Kako koristiti

1. Select sketcher elements in [task panel](/Task_panel "Task panel") or in [3D view](/3D_view "3D view").
2. There are several ways to invoke the command:
   * Press the ![](/images/Sketcher_RectangularArray.svg) [Rectangular array](/Sketcher_RectangularArray "Sketcher RectangularArray") button.
   * Select the **Sketch → Sketcher tools → ![](/images/Sketcher_RectangularArray.svg) Rectangular array** option from the menu.
3. Specify the options for the array in the dialog that opens.
4. Press the OK button.
5. Move the mouse in the [3D view](/3D_view "3D view") towards the desired reference point.  
   By keeping Ctrl pressed, the angle to the reference point can be fixed in steps of 5°. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
6. Left-click in the 3D view to create the array.
7. To set the distances between the array elements, edit the dimensional constraints of the array.

## Options

![](/images/Sketcher_RectangularArray_Options.jpg)

**Rectangular array** has the following options:

* **Colums**: The number of columns for the array.
* **Rows**: The number of rows for the array.
* **Equal vertical/horizontal spacing**: If the vertical distance between the array elements should be the same as the horizontal distance.
* **Constrain inter-element separation**: When this is checked, the distance between the array elements will be constrained.  
  If you for example only know that you need a 23 x 15 mm array, use this option to later be able to change these constraints to the dimensions you need.
* **Clone**: If selected, dimensional constraints are replaced by geometric constraints in the copies, so that any change in the original element is also reflected in the copies.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_RectangularArray/hr&oldid=1458235>"