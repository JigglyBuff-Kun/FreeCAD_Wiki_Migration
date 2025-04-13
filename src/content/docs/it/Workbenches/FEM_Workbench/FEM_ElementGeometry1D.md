---
title: FEM ElementGeometry1D
---
|  |
| --- |
| FEM ElementGeometry1D |
| Posizione nel menu |
| Modello → Sezione trasversale di trave |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| C B |
| Introdotto nella versione |
| - |
| Vedere anche |
| [FEM tutorial](/FEM_tutorial/it "FEM tutorial/it") |
|  |

## Descrizione

**ElementGeometry1D** is used to define cross sections for beam elements. Currently, the following types of cross sections are available: rectangular, circular and pipe.

1.1 and above: Box and elliptical cross sections are also available.

## Utilizzo

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ElementGeometry1D.svg) [Beam cross section](/FEM_ElementGeometry1D "FEM ElementGeometry1D") button.
   * Select the **Model → Element Geometry → ![](/images/FEM_ElementGeometry1D.svg) Beam cross section** option from the menu.
2. Choose the type of cross section and specify the necessary dimensions:
   * Rectangular: width and height,
   * Circular: diameter,
   * Pipe: outer diameter and thickness,
   * 1.1 and above: Elliptical: axis 1 length and axis 2 length,
   * 1.1 and above: Box: height, width, thicknesses T1 - T4.
3. Optionally, press the Add button in the task panel and then click on the edge you want to have a prescribed cross section. If the edge selection is free, all the remaining edges (whose cross section is not defined by other [FEM ElementGeometry1D](/FEM_ElementGeometry1D "FEM ElementGeometry1D") objects) will be automatically assigned.

![](/images/FEM_Beam_sections.PNG)

Beam section types, local axes used by CalculiX and dimensions specified in FreeCAD FEM

## Proprietà

* Dati**Section Type**: specifies the type of the beam section (*Rectangular*, *Circular*, *Pipe*, 1.1 and above: *Elliptical* and *Box*)
* 1.1 and above: Dati**Box Height**: height of box section, used if Dati**Section Type** is *Box*
* 1.1 and above: Dati**Box T1**: thickness T1 of box section, used if Dati**Section Type** is *Box*
* 1.1 and above: Dati**Box T2**: thickness T2 of box section, used if Dati**Section Type** is *Box*
* 1.1 and above: Dati**Box T3**: thickness T3 of box section, used if Dati**Section Type** is *Box*
* 1.1 and above: Dati**Box T4**: thickness T4 of box section, used if Dati**Section Type** is *Box*
* 1.1 and above: Dati**Box Width**: width of box section, used if Dati**Section Type** is *Box*
* Dati**Circ Diameter**: diameter of circular section, used if Dati**Section Type** is *Circular*
* 1.1 and above: Dati**Axis 1 Length**: lenth of axis 1 of elliptical section, used if Dati**Section Type** is *Elliptical*
* 1.1 and above: Dati**Axis 2 Length**: lenth of axis 2 of elliptical section, used if Dati**Section Type** is *Elliptical*
* Dati**Pipe Diameter**: outer diameter of pipe section, used if Dati**Section Type** is *Pipe*
* Dati**Pipe Thickness**: thickness of pipe section, used if Dati**Section Type** is *Pipe*
* Dati**Rect Height**: height of rectangular section, used if Dati**Section Type** is *Rectangular*
* Dati**Rect Width**: width of rectangular section, used if Dati**Section Type** is *Rectangular*

## Limitazioni

* 1.0 and below: Other types of cross sections available in CalculiX (elliptical, box and general) are not currently supported. One can edit the input file to use them.
* 1.1 and above: General beam section is not currently supported. One can edit the input file to use it.

## Note

* For viewing results from CalculiX solver on the mesh expanded to the prescribed cross section, property `Beam Shell Result Output 3D` in the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") needs to be set to `True`.
* Some sections require specific element types:
  + circular section - 2nd order elements
  + pipe section - 2nd order elements with reduced integration ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): reduced integration is enabled by default for beam elements and can be switched using the *Beam Reduced Integration* property of the [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"))
  + 1.1 and above: elliptical section - 2nd order elements
  + 1.1 and above: box section - 2nd order elements with reduced integration (as explained above)
* This feature uses the [\*BEAM SECTION card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html). The direction of the local axis 1 is automatically determined by FreeCAD FEM and written as the direction vector in the second data line of this keyword.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry1D/it&oldid=1530653>"