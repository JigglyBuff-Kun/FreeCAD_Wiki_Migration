---
title: FEM ConstraintBodyHeatSource
---

|                                                                  |
| ---------------------------------------------------------------- |
| FEM ConstraintBodyHeatSource                                     |
| Menu location                                                    |
| Model → Thermal boundary conditions and loads → Body heat source |
| Workbenches                                                      |
| [FEM](/FEM_Workbench "FEM Workbench")                            |
| Default shortcut                                                 |
| _None_                                                           |
| Introduced in version                                            |
| 0.19                                                             |
| See also                                                         |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")                     |
|                                                                  |

| Solvers         |
| --------------- |
| CalculiX, Elmer |

## Description

Defines an internally generated body heat given in W/kg.

1.0 and above: Can also define the heat source in W.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintBodyHeatSource.svg) [Body heat source](/FEM_ConstraintBodyHeatSource "FEM ConstraintBodyHeatSource") button.
   - Select the **Model → Thermal boundary conditions and loads → ![](/images/FEM_ConstraintBodyHeatSource.svg) Body heat source** option from the menu.
2. 0.21 and above: Press the Add button. For a 3D analysis, select a 'solid' (body) from your model, for a 2D analysis select a face.
3. Set the value:
   - 0.20 and below: Since the tool has no task dialog, use the [property editor](/Property_editor "Property editor") and set the property Data**Heat Source**.
   - [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): Enter the body heat in W/kg.
   - 1.0 and above: Select the mode:
     - _Dissipation Rate_ - enter the dissipation rate in W/kg .
     - _Total Power_ - enter the total power in W.

## Limitations

- 0.20 and below: The body heat source is applied to the whole model, meaning all bodies of the setup. It is not possible to select an individual body.
- 0.21 and below: This feature only works with the Elmer solver.

## Notes

- For more information see [this forum thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=44705&start=490#p422539) and following posts. [This thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=28926) may also be useful.
- Elmer examples can also be found in [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf).
- 1.0 and above: This feature uses the [\*DFLUX card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html).
- 1.0 and above: Since CalculiX expects body heat flux input in W/mm^3 while for Elmer it's W/kg, the conversion of the specified value (in W or W/kg) is done internally for each solver, using the volume of the selected solid and the density of the material assigned to it, if needed.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintBodyHeatSource/en&oldid=1568982>"
