---
title: TechDraw Surface
---
|  |
| --- |
| TechDraw Surface |
| Emplacement du menu |
| TechDraw → Extensions : attributs/modifications → Calculer la surface des faces sélectionnées |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [TechDraw Cote de surface](/TechDraw_AreaDimension/fr "TechDraw AreaDimension/fr") |
|  |

## Description

L'outil **TechDraw Surface** calcule la surface des faces sélectionnées et insère une annotation de surface.

![](/images/TechDraw_ExtensionAreaAnnotationExample.png)

A droite, l'annotation de la zone insérée

## Utilisation

1. Sélectionner une ou plusieurs faces.
2. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le ![](/images/TechDraw_ExtensionAreaAnnotation.svg) Calculer la surface des faces sélectionnées.
   * Sélectionnez l'option **TechDraw → Extensions : attributs/modifications → ![](/images/TechDraw_ExtensionAreaAnnotation.svg) Calculer la surface des faces sélectionnées** du menu.
3. La surface totale des faces est calculée et une annotation de surface est insérée.

## Limitation

version 0.21 et précédentes : l'outil ne peut pas gérer les faces avec des bords incurvés.

* Les trous (îlots) dans la face sélectionnée sont ignorés. Ce [fil du forum](https://forum.freecad.org/viewtopic.php?p=783325#p783325) montre une solution de contournement. Vous pouvez également utiliser [TechDraw Cote de surface](/TechDraw_AreaDimension/fr "TechDraw AreaDimension/fr") mais vous devez alors définir correctement la propriété Données**References 3D** de la cote créée.
* La surface calculée n'est pas liée dynamiquement à la face. Si la surface de la face change, le texte n'est pas mis à jour.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionAreaAnnotation/fr&oldid=1491524>"