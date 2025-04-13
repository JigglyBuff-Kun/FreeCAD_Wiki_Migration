---
title: FEM NachbereitungFunktionQuader
---
|  |
| --- |
| FEM NachbereitungFunktionQuader |
| Menüeintrag |
| Ergebnisse → Filterfunktionen → Quader |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.21 |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Die Funktion ![](/images/FEM_PostCreateFunctionBox.svg) **FEM NachbereitungFunktionQuader** legt die Geometrie fest, mit der ein Netzobjekt geschnitten wird. Sie wird von den Werkzeugen ![](/images/FEM_PostFilterCutFunction.svg) [Funktion Schnitt-Filter](/FEM_PostFilterCutFunction/de "FEM PostFilterCutFunction/de") und ![](/images/FEM_PostFilterClipRegion.svg) [Region Ausschnitt-Filter](/FEM_PostFilterClipRegion/de "FEM PostFilterClipRegion/de") verwendet.

## Anwendung

### Quaderfunktion erstellen

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox") button.
   * Select the **Results → Filter functions → ![](/images/FEM_PostCreateFunctionBox.svg) Box** option from the menu.
2. The [task panel](/Task_panel "Task panel") is opened.
3. Optionally set the values for the center and size of the section box.
4. Press the OK button to finish.

### Quaderfunktion bearbeiten

If the Box object in the [Tree view](/Tree_view "Tree view") is hidden, select the ![](/images/FEM_PostCreateFunctionBox.svg) Box object in the [3D view](/3D_view "3D view") and press Space to make it visible, like in this example:

![](/images/FEM_Box-Cut-Function-Example.png)

#### Den Quader bewegen

* Click and drag a face of the box. The box is defined by blue edges.

#### Den Quader drehen und neigen

* Click and drag one of the 3 lines that pass through the box to rotate and tilt the box around its origin.

#### Die Quadergröße anpassen

* Click and drag one of the 8 small cubes at the box corners to scale the box.

#### Transform the box

* Click and drag one of the 6 small cubes around the center of the box to change the shape of the box.

## Hinweise

* Vorhandene Funktionen können für unterschiedliche Filter und für unterschiedliche ![](/images/FEM_PostPipelineFromResult.svg) [Ergebnis-Pipelines](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") genutzt werden. Es wird allerdings dazu geraten, für jede Pipeline einen separaten Satz von Funktionen zu verwenden, um den Überblick über die Elemente in der [Baumansicht](/Tree_view/de "Tree view/de") zu behalten.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionBox/de&oldid=1570125>"