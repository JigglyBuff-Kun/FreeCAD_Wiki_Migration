---
title: Part Secțiune
---
|  |
| --- |
| Part Section |
| Menu location |
| Part → Section |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Cross-sections](/Part_SectionCross "Part SectionCross") |
|  |

## Description

## Introducere

Extrage o secțiune din intersecția a două forme selectate, cea de-a doua servind drept plan secțiune. Această operație este complet parametrică, iar componentele pot fi modificate și rezultatul recalculat.

* An intersection of two solids/faces results in one or more section lines.
* An intersection of two lines, or a line and a solid/face, results in one or more points.

![](/images/PartSection1_it.png)

A cube sectioned with a cylinder

## Utilizare

1. Select the base object
2. Select the Section tool
3. Click on Part → ![](/images/Part_Section.png) Section from the top menu.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Section object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Date**Base** (`Link`): Link to the first object.
* Date**Tool** (`Link`): Link to the second object.

Boolean

* Date (hidden)**History** (`ShapeHistory`): "Shape history".
* Date**Refine** (`Bool`): "Refine shape (clean up redundant edges) after this boolean operation". The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Section

* Date**Approximation** (`Bool`): Approximate the output edges.

## Legături

To create sections with a section plane see [Cross-sections](/Part_SectionCross "Part SectionCross").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/ro&oldid=1251094>"