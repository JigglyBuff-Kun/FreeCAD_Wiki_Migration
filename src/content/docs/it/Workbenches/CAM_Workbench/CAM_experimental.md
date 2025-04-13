---
title: Path sperimentale
---
## Description

The CAM Workbench contains a set of hidden commands. They are hidden by default because they are experimental. A command can be considered experimental for any of the following reasons:

* It is incomplete.
* It is bug-ridden.
* It is unstable.
* It does not produce correct, stable, safe, paths.
* It is not a standard, regularly used command in the traditional CAM workflow.
* It is mature but has not yet been moved to the standard tool list.
* ... other reasons.

## Enable experimental commands

To access the hidden experimental commands of the CAM Workbench, the user must enable them in the [Parameter Editor](/Std_DlgParameter "Std DlgParameter").

1. Open the [Parameter Editor](/Std_DlgParameter "Std DlgParameter") via **Tools → Edit Parameters...**
2. Once in the editor the path is **BaseApp → Preferences → Mod → CAM**
3. To enable the [CAM Area](/CAM_Area "CAM Area") and [CAM Area Workplane](/CAM_Area_Workplane "CAM Area Workplane") commands:
   * Right-click in the parameter list area and select **New → New Boolean item** from the context menu.
   * Name the new parameter: `EnableAdvancedOCLFeatures` (case-sensitive).
   * Set it to: `True`.
4. To enable the other experimental commands:
   * Again select **New → New Boolean item** from the context menu.
   * Name the new parameter: `EnableExperimentalFeatures` (case-sensitive).
   * Set it to: `True`.
5. Save the settings.
6. Restart FreeCAD.

## Additional Information

Maggiori informazioni sulle specifiche funzionalità sperimentali nelle [pagine wiki che riguardano questo argomento](https://www.freecadweb.org/wiki/Special:WhatLinksHere/Path_experimental)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_experimental/it&oldid=1386954>"