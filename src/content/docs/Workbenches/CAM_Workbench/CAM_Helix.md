---
title: CAM Helix
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                       |
| ------------------------------------- |
| CAM Helix                             |
| Menu location                         |
| CAM → Helix                           |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/images/CAM_Helix.svg) [CAM Helix](/CAM_Helix "CAM Helix") tool appends a helical clearing operation to the Job. Clockwise Helix outputs (G2) G-Code commands. Counterclockwise outputs (G3) G-Code commands. Step Over percentage specifies the concentric step-over as a percentage of the Tool diameter. One or more helical paths will be created at progressively different diameters, to clear the hole.

## Usage

- Select the ![](/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench").
- Select the ![](/images/CAM_Helix.svg) icon or CAM → ![](/images/CAM_Helix.svg) Helix from the top menu. This opens the ![](/images/CAM_Helix.svg) Helix configuration panel.
- You will be prompted with a "Choose a Tool Controller" pop-up window to select a Tool Controller. In older versions, in the ![](/images/CAM_Helix.svg) Operation tab, choose a Tool controller and confirm by pressing Apply.
- Open the Base Geometry tab. All available holes compatible with the Helix tool in the Job Model will be selectable for processing. In the [3D view](/3D_view "3D view") select the holes by their edge or wall face and add them with the Add button. Check that they appear in the list. Confirm that the list matches the holes that are intended for processing.
- To remove holes select them in the list and press the Remove button.
- Ensure Start Depth, Final Depth and Step Down (the pitch of the helix) are correct, and adjust if not.
- Ensure Safe and Clearance Heights are correct.
- In the Operation tab, specify the helix Starting surface (outside/inside), cutting Direction (climb/conventional), and Step Over percentage.
- Click Apply to create or update the path, OK to apply and close the panel, or Cancel to abort and close the panel.

## Options

**Extra Offset** adds a margin of material to be left unmachined. This is typically to allow a light finishing pass as a separate operation.

**Start Radius** is not available in the _Helix_ task panel but can be edited directly in the [Property editor](/Property_editor "Property editor").

This is the radius of material remaining at the center. By default it is zero, giving a path where the tool just touches the axis of the hole. This produces a central path cutting a hole twice the size of the tool diameter.

If this parameter is set to a negative value, it can allow a smaller helix radius. For example, a negative radius equal to the tool radius will produce a zero radius helix: a.k.a. plunge cut with the endmill, should the tool be suitable. This will work as a first cut in a multi-pass operation but attempting to make a helix path with a tool the same size as the hole in the model is rejected.

## Comments

- Step Down is not respected exactly. It is always rounded to give a complete number of turns from Start Depth to Final Depth.
- Similarly Step Over is not respected exactly. It is always rounded to give a number of equal steps.

The feedrate parameter is constant across all cuts and is based on the position of the tool's axis, thus actual feedrate of the cutting edge of the tool can vary considerably between the inner most cut and the outside surface. If the job dimensions produce a path diameter smaller than the tool diameter, this can lead to much faster cutting speeds than the feedrate given for the tool in the tool controller. This may need to considered when selecting "feed and speeds" in the [tool controller](/CAM_ToolController "CAM ToolController") for the job.

Also the current implementation only uses the horizontal tool speed for helix paths, even in the case where a tight spiral maybe nearly a vertical cut.

## Properties

### Data

Empty

### View

Empty

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Helix/en&oldid=1559210>"
