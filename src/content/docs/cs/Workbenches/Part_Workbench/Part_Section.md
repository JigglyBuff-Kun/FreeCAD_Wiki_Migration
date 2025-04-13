---
title: Díl Řez
---
|  |
| --- |
| Díl Řez |
| Umístění Menu |
| Díl → Řez |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs"), Kompletace |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

The ![](/images/f/f7/Part_Section.svg) **Part Section** command creates wire geometry at the intersections of two objects. The result is fully parametric.

* An intersection of two solids/faces results in one or more section lines.
* An intersection of two lines, or a line and a solid/face, results in one or more points.

![](/images/PartSection1_it.png)

A cube sectioned with a cylinder

## Usage

1. Select two objects.
2. The first object will be the Údaje**Base** of the Section, but the selection order has no impact on the result.
3. There are several ways to invoke the command:
   * Press the ![](/images/f/f7/Part_Section.svg) [Section](/Part_Section "Part Section") button.
   * Select the **Part → ![](/images/f/f7/Part_Section.svg) Section** option from the menu.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Section object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Údaje**Base** (`Link`): Link to the first object.
* Údaje**Tool** (`Link`): Link to the second object.

Boolean

* Údaje (hidden)**History** (`ShapeHistory`): "Shape history".
* Údaje**Refine** (`Bool`): "Refine shape (clean up redundant edges) after this boolean operation". The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Section

* Údaje**Approximation** (`Bool`): Approximate the output edges.

## Links

To create sections with a section plane see ![](/images/Part_CrossSections.svg) [Cross-sections](/Part_CrossSections "Part CrossSections").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/cs&oldid=1153594>"