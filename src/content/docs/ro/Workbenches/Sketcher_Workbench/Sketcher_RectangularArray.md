---
title: Sketcher Matrice Dreptunghiulară (de repetabilitate)
---
:::caution
This tool is obsolete, it is not available in1.0 and above. UseSketcher Translateinstead.
:::

|  |
| --- |
| Sketcher RectangularArray |
| Menu location |
| Sketch → Sketcher tools → Rectangular Array |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.16 |
| See also |
| *None* |
|  |

## Descriere

Creează o matrice de repetabilitate a unor elemente selectate ale schiței.

## Utilizare

1. Selectați elemet(ul)ele sketcher în Tasks-Panel sau Vizualizarea 3D.
2. Click pe ![](/images/Sketcher_RectangularArray.png) sau selectați  Sketch →  Sketcher tools → ![](/images/Sketcher_RectangularArray.png) RectangularArray din meniul principal.
3. Un meniu contextual vă va întreba asupra diferitelor opțiuni ale suprafeței
4. Selectați endpoint pentru operația în vizualizarea 3D.

![](/images/Sketcher_RectangularArray_Options.jpg)
  
Opțiuni pentru Array

## Options

![](/images/Sketcher_RectangularArray_Options.jpg)

**Rectangular array** has the following options:

* **Colums**: The number of columns for the array.
* **Rows**: The number of rows for the array.
* **Equal vertical/horizontal spacing**: If the vertical distance between the array elements should be the same as the horizontal distance.
* **Constrain inter-element separation**: When this is checked, the distance between the array elements will be constrained.  
  If you for example only know that you need a 23 x 15 mm array, use this option to later be able to change these constraints to the dimensions you need.
* **Clone**: If selected, dimensional constraints are replaced by geometric constraints in the copies, so that any change in the original element is also reflected in the copies.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_RectangularArray/ro&oldid=1458234>"