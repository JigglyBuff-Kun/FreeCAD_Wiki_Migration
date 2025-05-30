---
title: CAM VierteAchse
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Beschreibung

These experimental features allow milling of four axis [faces](https://forum.freecadweb.org/viewtopic.php?f=15&t=36773) and [pockets](https://forum.freecadweb.org/viewtopic.php?f=15&t=35867)

These features are in early development. Bugs may exist. Thank you for your feedback and testing.

## Installation

Ideally, upgrade to version 0.19.16502, or higher.

Download these scripts:

* PathProfileFaces.py [available here](https://forum.freecadweb.org/viewtopic.php?f=15&t=36773) and
* PathAreaOp.py is [here](https://forum.freecadweb.org/viewtopic.php?f=15&t=35867)
* PathPocketShape.py from [here too](https://forum.freecadweb.org/viewtopic.php?f=15&t=35867) (for pocket operations)

Place them in your FreeCAD/Mod/CAM/PathScripts directory, \*after\* renaming your originals for safe keeping. Rename the new scripts to the original script names. Restart FreeCAD and have fun.

Use at your own risk.

## Einschränkungen

Current 4th-axis capable operations do not handle complex/compound rotations: those involving X and Y simultaneously.

There is currently no GUI integration of 4th-axis rotational settings in the release branch. All related settings are in the Data tab of the Properties View section for each individual operation supported.

## Anwendung

### Profile Faces

* Select the face(s) for the operation as normal
* Click on the [CAM Profile Faces](/CAM_Profile#Profile_Face_operation "CAM Profile") icon to start the operation
* Change your settings as desired
* Click OK to run the operation
* In the properties list for the new operation, change the "Enable Rotation" setting as needed for the face(s)
* Recompute the operation
* Adjust start/final depths as needed. Final depth is coded to NOT go beyond the selected face used for the profile.

### Pocket Shape

* Click on the [CAM Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") icon to start the operation.
* Click the OK to create the operation - no faces selected
* Select the new Pocket\_Shape operation in task window
* In the operation's Properties list, scroll to CAM section and change the "Enable Rotation" property to the desired 4th-axis setting.
* Re-compute the operation
* Double click on the same operation, to edit settings in the task window.
* Open the 'Base Geometry' tab. Select one face (preferred at the moment) and click the 'Add' button, placing that face in the Base Geometry list.
* Change the other operation settings as desired.
* Click OK to save and apply the changes.

## Troubleshooting

* There is an "Inverse Angle" property. You may have to toggle this to get correct paths for some of your faces.
* Set "Enable Rotation" to other than 'Off' to profile faces perpendicularly that are not normal to Z-axis.
* Toggle the "Reverse Direction" property if the path appears to be off by 180 degrees.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_fourth_axis/de&oldid=1393415>"