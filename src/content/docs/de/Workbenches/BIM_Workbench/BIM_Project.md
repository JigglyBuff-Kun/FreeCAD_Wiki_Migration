---
title: BIM Projekt
---
|  |
| --- |
| BIM Projekt |
| Menüeintrag |
| 3D/BIM → Projekt |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **BIM Projekt** erstellt ein [Native-IFC](/index.php?title=NativeIFC/de&action=edit&redlink=1 "NativeIFC/de (page does not exist)")-Projekt im aktuellen Dokument. In IFC ist ein Projekt (IfcProject) das Grundobjekt aller Inhalte des Modells. Es muss in jeder IFC-Datei vorhanden sein.

Es ist nicht nötig, ein Projekt zu erstellen, um ein FreeCAD-Modell in eine IFC-Datei zu exportieren, da ein Standardprojekt hinuzgefügt wird, wann immer eine IFC-Datei exportiert wird. Wird jedoch mit [NativeIFC](/index.php?title=NativeIFC/de&action=edit&redlink=1 "NativeIFC/de (page does not exist)") gearbeitet, wird eine IFC-Datei an das Modell angefügt und die gesamte Geometrie sowie alle Eigenschaften des Modells und seiner Komponenten werden dieser angefügten IFC-Datei entnommen. Das Projekt ist die Stelle an der die IFC-Datei im Dokument eingefügt wird.

Typically, you create a BIM project to attach an IFC file. When creating the project, the attached IFC file is blank, and not saved. The next time you will save the FreeCAD file, you will also be asked to save the IFC file.

If you distribute the FreeCAD file, all attached IFC files must be distributed together, otherwise FreeCAD won't be able to extract the geometry. However, if the **shape mode** property of all objects contained in a project is set to **Shape**, then the FreeCAD file can be distributed without the accompanying IFC file, and will still open correctly on other computers. The IFC objects, however, won't be editable anymore.

When inserting an IFC file, a project object is created, that contains all the contents of the file. Like all NativeIFC objects, the project can be expanded by double-clicking it in the tree.

## Anwendung

1. Sichertellen, dass ein FreeCAD-Dokument geöffnet ist.
2. Die Schaltfläche ![](/images/BIM_Project.svg) Projekt Drücken.
3. Wahlweise das Dokument sperren, indem die Schaltfläche ![](/images/IFC.svg) [IFC Sperren](/index.php?title=NativeIFC/de&action=edit&redlink=1 "NativeIFC/de (page does not exist)") gedrückt wird.

## Gesperrter und ungesperrter Modus

In the [BIM Workbench](/BIM_Workbench "BIM Workbench"), the status bar features an ![](/images/IFC.svg) [IFC Lock](/NativeIFC#Locked_and_unlocked_modes "NativeIFC") button that allows to toggle between **locked** and **unlocked** modes. When unlocked, you can have several [projects](/BIM_Project "BIM Project") inside your FreeCAD document, and also have both IFC and non-IFC elements.

In locked mode, the data attached to your project object becomes attached directly to the FreeCAD document. The FreeCAD document acts as a faithful replica, or rendering, of the IFC document. The project object is therefore removed. You can have only one project in your FreeCAD document, and you cannot have non-IFC objects anymore (every new object is instantly converted to IFC).

## Objekte zu einem Projekt hinzufügen

Objects are added to a project simply by dragging and dropping them onto the project in the tree view. These objects will be converted to IFC and might loose some of their former parametric behaviours when those are not supported by IFC.

## Unterschiede

When the project contains unsaved changes, a red dot will appear on its tree icon. Right-clicking the project and choosing **IFC → Diff** will open a dialog to see a [diff](https://en.wikipedia.org/wiki/Diff) of what has changed in the attached IFC file. This is a good way to make sure what you changed is really what you intended.

## Speichern

IFC files attached to a project are automatically saved each time you save the FreeCAD file. They can also be saved manually anytime by right-clicking the project and choosing **IFC → Save**.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Project/de&oldid=1549905>"