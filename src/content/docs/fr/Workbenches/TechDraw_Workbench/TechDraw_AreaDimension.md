---
title: TechDraw Cote de surface
---
|  |
| --- |
| TechDraw Cote de surface |
| Emplacement du menu |
| TechDraw → Cotes → Insérer une cote de surface |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Surface](/TechDraw_ExtensionAreaAnnotation/fr "TechDraw ExtensionAreaAnnotation/fr") |
|  |

## Description

L'outil **TechDraw Cote de surface** ajoute une cote de surface à une face dans une vue de pièce.

![](/images/TechDraw_AreaDimension_Example.png)

Cote de surface d'une face avec un trou. Voir [Limitations](#Limitations).

## Utilisation

1. Sélectionnez une face. La géométrie peut être sélectionnée dans la [vue 3D](/3D_view/fr "3D view/fr") ou dans le dessin.
2. Si vous avez sélectionné la géométrie dans la vue 3D : ajoutez la bonne vue TechDraw à la sélection en la sélectionnant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer l'outil :
   * Si la [préférence](/TechDraw_Preferences/fr#Cotes/fr "TechDraw Preferences/fr") **Outils de cotation** est réglé sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite de l'outil ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/TechDraw_AreaDimension.svg) Insérer une cote de surface** dans le menu déroulant.
   * Si cette préférence a une valeur différente : appuyez sur le bouton ![](/images/TechDraw_AreaDimension.svg)Insérer une cote de surface.
   * Sélectionnez l'option **TechDraw → Cotes → ![](/images/TechDraw_AreaDimension.svg) Insérer une annotation de zone** du menu.
4. Une cote est ajoutée à la vue.
5. La cote peut être déplacée jusqu'à la position souhaitée.
6. Si nécessaire, ajoutez des tolérances comme décrit sur [cette page](/TechDraw_Geometric_dimensioning_and_tolerancing/fr#Tolérances "TechDraw Geometric dimensioning and tolerancing/fr").

## Limitations

* version 1.0 et précédentes : l'outil ne peut détecter que les trous (îlots) dans les faces sélectionnées dans la vue 3D. Pour obtenir la bonne surface pour une telle face sélectionnée dans le dessin, procédez comme suit :
  1. Définissez la bonne propriété Données**References 3D** avec ![](/images/TechDraw_DimensionRepair.svg) [TechDraw Réparation des cotes](/TechDraw_DimensionRepair/fr "TechDraw DimensionRepair/fr").
  2. Changez la propriété Données**Measure Type** en `True`.
  3. Appuyez sur ![](/images/Std_Refresh.svg) [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr") si nécessaire.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_AreaDimension/fr&oldid=1512657>"