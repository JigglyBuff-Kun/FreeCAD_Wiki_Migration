---
title: FEM MaterialEditor
---
:::caution
THIS VERSION OF THE COMMAND IS OBSOLETEIt was changed in1.0 and aboveand accessesMaterial Edit.
:::

|  |
| --- |
| FEM MaterialEditor |
| Menüeintrag |
| Modell → Materialien → Material editor |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de"), [Arch](/Arch_Workbench/de "Arch Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| [Arch MaterialZuordnen](/Arch_SetMaterial/de "Arch SetMaterial/de"), [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| Alle |

## Beschreibung

Mit dem **Material-Editor** kann man die in einem [FreeCAD-Material](/Material "Material") gespeicherten Informationen bearbeiten und speichern. Derzeit werden diese Materialien von den Arbeitsbereichen ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/de "FEM Workbench/de") und ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/de "BIM Workbench/de") verwendet.

![](/images/Material_editor.png)

## Anwendung

Derzeit hat man zwei Möglichkeiten den Material-Editor aufzurufen:

1. Arbeitsbereich ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/de "BIM Workbench/de"):
   * Die Schaltfläche ![](/images/BIM_Material.svg) [Material](/BIM_Material/de "BIM Material/de") drücken.
   * Den Menüeintrag **Verwalten → ![](/images/BIM_Material.svg) Material** auswählen.
2. Arbeitsbereich ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/de "FEM Workbench/de"):
   * Die Schaltfläche ![](/images/FEM_MaterialEditor.svg) Material-Editor drücken.
   * Den Menüeintrag **Modell → Materialien → ![](/images/FEM_MaterialEditor.svg) Material-Editor** auswählen.

## Optionen

* **Browser button**: Opens the contents of the URL property in a browser
* **Material card**: Allows to choose a preset to fill in the fields
* Open: Opens a .FCMat file
* Save as: Saves the contents of the editor as a new .FCMat file
* **Preview**: Not implemented yet
* **Properties editor**: Allows to edit the contents of the material properties
* Add property: Allows to add a new custom property
* Delete property: Deletes a selected property. Only custom properties can be deleted

## Hinweise

* The OK and Cancel buttons have the same effect when the Material editor is not used to edit directly the material property of an existing object.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialEditor/de&oldid=1540638>"