---
title: FEM NachbereitungÄnderungenAnwenden
---
|  |
| --- |
| FEM PostApplyChanges |
| Menüeintrag |
| Ergebnisse → Änderungen auf Pipeline anwenden |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Std Aktualisieren](/Std_Refresh/de "Std Refresh/de"), [NachbereitungFunktionenErstellen](/FEM_PostCreateFunctions/de "FEM PostCreateFunctions/de") |
|  |

## Beschreibung

Toggles if changes to pipelines and filters are applied immediately or not.

If the feature is active, changes to [filter functions](/FEM_PostCreateFunctions "FEM PostCreateFunctions") and filters have an immediate effect. However, for large result meshes this can slow down the PC significantly.

If the feature is not active, a change of the size and position of functions first have an effect after recomputing the function object (see [Std Refresh](/Std_Refresh "Std Refresh")). For changes to filters, the change will first have an effect when pressing in the filter dialog the button Apply or by recomputing the filter object.

## Anwendung

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_PostApplyChanges.svg) [Apply changes to pipeline](/FEM_PostApplyChanges "FEM PostApplyChanges") button.
   * Select the **Results → ![](/images/FEM_PostApplyChanges.svg) Apply changes to pipeline** option from the menu.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostApplyChanges/de&oldid=1569212>"