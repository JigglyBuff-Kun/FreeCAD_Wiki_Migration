---
title: Curves Pipeshell/it
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Curves Pipeshell |
| Menu location |
| Surfaces → Pipeshell |
| Workbenches |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descrizione

The ![](/images/Curves_Pipeshell.svg) [Curves Pipeshell](/Curves_Pipeshell "Curves Pipeshell") creates a Pipeshell sweep object. This tool is part of the [external workbench](/External_workbenches "External workbenches") called [Curves](/Curves_Workbench "Curves Workbench").

## Utilizzo

1. Switch to the ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench "Curves Workbench") workbench (install from ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") is necessary, if not previously installed)
2. Select the edge that builds the sweep path in the [3D view](/3D_view "3D view")
3. Select one or more required profiles in the [Tree view](/Tree_view "Tree view")
4. To invoke the command, do one of the following:
   * Press the ![](/images/Curves_Pipeshell.svg) [Creates a Pipeshell sweep object](/Curves_Pipeshell "Curves Pipeshell") button in the tool bar
   * Use the **Surfaces → Pipeshell**
5. Change the `Pipeshell` parameter to the required conditions

## Proprietà

### Data

Base

* Dati**Placement**: [Placement](/Placement "Placement") is the location and orientation of an object in space.
* Dati**Label**: User name of the object in the [Tree view](/Tree_view "Tree view").

Main

* Dati**Mode**: Default is *Frenet*. Mode is used to select the sweeping algorithm. Choices: Frenet, DiscreteTrihedron, FixedTrihetron, Binormal, ShapeSupport, AuxiliarySpine.
* Dati**Output**: Default is *Surface*. Output determines the shape of the object. Choices: Surface, Sections, Lofted Sections.
* Dati**Profile**: List of the used profiles.
* Dati**Spine**:

Mode

* Dati**Auxiliary**:
* Dati**Contact**:
* Dati**Corrected**:
* Dati**Direction**:
* Dati**Equi Curvi**:
* Dati**Location**:
* Dati**Support**:

Settings

* Dati**Max Degree**:
* Dati**Max Segments**:
* Dati**Samples**:
* Dati**Solid**: Default is *False*
* Dati**Tol3d**: Default is *0.00*.
* Dati**Tol Ang**: Default is *0.00*.
* Dati**Tol Bound**: Default is *0.00*.

## Notes

* *Pipeshell* needs a wire object (as the sweep path), and at least one *Pipeshell Profile*.
* The two tools *Pipeshell* and *Pipeshell Profile* work together as an "Advanced" Sweep tool.

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Pipeshell/it&oldid=1536726>"