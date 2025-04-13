---
title: CAM OpActiveToggle/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM OpActiveToggle |
| Menu location |
| CAM → Toggle the Active State of the Operation |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| P X |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

The ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") tool in the ![](/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to toggle the active state of an existing path operation.

This tool can only be used if your ![](/images/CAM_Job.svg) [Job](/CAM_Job "CAM Job") has at least one path operation.

## Anwendung

1. Select an operation in the **Operations** group belonging to a Job. A deactivated operation can be recognized by its grayed out label and icon.
2. There are several ways to invoke the command:
   * Press the ![](/images/CAM_OpActiveToggle.svg) [CAM OpActiveToggle](/CAM_OpActiveToggle "CAM OpActiveToggle") button.
   * Select the **CAM → ![](/images/CAM_OpActiveToggle.svg) Toggle the Active State of the Operation** option from the menu.
   * Use the keyboard shortcut: P then X.
3. The result depends on the selected operation:
   * If you have selected an active operation the command deactivates it:
     + The operation icon is replaced with the command icon: ![](/images/CAM_OpActiveToggle.svg).
     + The operation icon and label are grayed out.
     + The paths generated from the operation disappear from the [3D view](/3D_view "3D view").
     + When using the ![](/images/CAM_Inspect.svg) [CAM Inspect](/CAM_Inspect "CAM Inspect") command or the ![](/images/CAM_Post.svg) [CAM Post](/CAM_Post "CAM Post") command, the operation's G-code is not provided.
   * If you have selected a deactivated operation the command activates it:
     + The operation icon is replaced with that belonging to the operation.
     + The operation icon and label are no longer grayed out.
     + The paths generated from the operation are recomputed and displayed in the [3D view](/3D_view "3D view").
     + When using the ![](/images/CAM_Inspect.svg) [CAM Inspect](/CAM_Inspect "CAM Inspect") command or the ![](/images/CAM_Post.svg) [CAM Post](/CAM_Post "CAM Post") command, the operation's G-code is provided.

## Optionen

Empty

## Eigenschaften

Empty

## Skripten

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_OpActiveToggle/de&oldid=1406250>"