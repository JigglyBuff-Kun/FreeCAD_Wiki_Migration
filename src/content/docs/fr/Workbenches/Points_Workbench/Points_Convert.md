---
title: Points Convertir
---
|  |
| --- |
| Points Convertir |
| Emplacement du menu |
| Points → Convertir en points... |
| Ateliers |
| [Points](/Points_Workbench/fr "Points Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Points Convertir** crée des nuages de points à partir d'objets de forme ou d'objets maillés.

Ici, un objet forme fait référence à tout objet avec une propriété Données**Shape**. Les objets créés avec les ateliers [Part](/Part_Workbench/fr "Part Workbench/fr") et [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") sont des objets de forme. Mais il en va de même pour les objets créés avec les ateliers [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") et [Draft](/Draft_Workbench/fr "Draft Workbench/fr").

## Utilisation

1. Sélectionnez un ou plusieurs objets.
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Points_Convert.svg) Convertir en points....
   * Sélectionnez l'option **Points → ![](/images/Points_Convert.svg) Convertir en points...** du menu.
3. La fenêtre de dialogue **Distance** s'ouvre.
4. Entrez la **distance maximale**. La valeur doit être comprise entre `0.01` et `10.00`.
5. Appuyez sur le bouton OK pour fermer la fenêtre de dialogue et terminer la commande.

## Propriétés

Les objets Point cloud sont des objets [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr") avec des propriétés supplémentaires suivantes. Sélectionnez l'option **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour afficher les propriétés masquées.

### Données

Base

* Données (Hidden)**Points** (`PointsKernel`) : un noyau de points associé à cet objet.
* Données (Hidden)**Normal** (`NormalList`) : liste de normales. Cette propriété n'est disponible que pour les nuages de points créés avec la commande Points Convertir à partir d'objets maillés ou d'objets de forme avec des faces.

Structured points

* Données**Height** (`Integer`) : nombre de coordonnées Y uniques dans le nuage de points. Cette propriété n'est disponible que pour les nuages de points créés avec la commande [Points Nuage structuré](/Points_Structure/fr "Points Structure/fr").
* Données**Width** (`Integer`) : nombre de coordonnées X uniques dans le nuage de points. Cette propriété n'est disponible que pour les nuages de points créés avec la commande [Points Nuage structuré](/Points_Structure/fr "Points Structure/fr").

### Vue

Base

* Vue**Point Size** (`FloatConstraint`) : taille en pixels des points dans la [Vue 3D](/3D_view/fr "3D view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Convert/fr&oldid=1560999>"