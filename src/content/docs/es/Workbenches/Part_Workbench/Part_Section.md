---
title: Part Section
---
|  |
| --- |
| Part\_Section |
| Ubicación en el Menú |
| Pieza → Sección |
| Entornos de trabajo |
| [Part](/Part_Workbench "Part Workbench") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [SectionCross](/Part_SectionCross/es "Part SectionCross/es") |
|  |

## Description

Extrae una sección de la intersección de las dos formas seleccionadas, la segunda siendo utilizada como plano de corte. Esta operación es completamente paramétrica y los componentes pueden editarse y el resultado recalculado.

* An intersection of two solids/faces results in one or more section lines.
* An intersection of two lines, or a line and a solid/face, results in one or more points.

![](/images/PartSection1_it.png)

A cube sectioned with a cylinder

## Usage

1. Select two objects.
2. The first object will be the Datos**Base** of the Section, but the selection order has no impact on the result.
3. There are several ways to invoke the command:
   * Press the ![](/images/f/f7/Part_Section.svg) [Section](/Part_Section "Part Section") button.
   * Select the **Part → ![](/images/f/f7/Part_Section.svg) Section** option from the menu.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Section object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Datos**Base** (`Link`): Link to the first object.
* Datos**Tool** (`Link`): Link to the second object.

Boolean

* Datos (hidden)**History** (`ShapeHistory`): "Shape history".
* Datos**Refine** (`Bool`): "Refine shape (clean up redundant edges) after this boolean operation". The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Section

* Datos**Approximation** (`Bool`): Approximate the output edges.

## Links

To create sections with a section plane see ![](/images/Part_CrossSections.svg) [Cross-sections](/Part_CrossSections "Part CrossSections").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/es&oldid=1251110>"