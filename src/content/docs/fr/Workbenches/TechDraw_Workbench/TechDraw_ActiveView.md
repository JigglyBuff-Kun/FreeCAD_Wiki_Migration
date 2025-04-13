---
title: TechDraw Vue active
---
|  |
| --- |
| TechDraw Vue active |
| Emplacement du menu |
| TechDraw → Vues des autres ateliers → Insérer la vue active (vue 3D) |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Image](/TechDraw_Image/fr "TechDraw Image/fr") |
|  |

## Description

L'outil **TechDraw Vue active** insère une image bitmap de la fenêtre 3D active dans une page de dessin.

![](/images/TechDraw_ActiveView_example.png)

Une vue simple du modèle 3D.

## utilisation

1. Aller à la bonne [vue 3D](/3D_view/fr "3D view/fr").
2. S'il y a plusieurs pages de dessin dans le document : vous pouvez sélectionner la page souhaitée dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_ActiveView.svg) Insérer la vue active (vue 3D).
   * Sélectionnez le bouton **TechDraw → Vues des autres ateliers → ![](/images/TechDraw_ActiveView.svg) Insérer la vue active (vue 3D)** du menu.
4. S'il y a plusieurs pages de dessin dans le document et que vous n'avez pas encore sélectionné de page, la fenêtre de dialogue **Sélecteur de pages** s'ouvre :
   1. Sélectionnez la page souhaitée.
   2. Appuyez sur le bouton OK.
5. Le panneau de tâches **De la vue active à la vue TechDraw** s'ouvre. Voir [Options](#Options) pour plus d'informations.
6. Appuyez sur le bouton OK.

## Options

Les éléments suivants peuvent être spécifiés :

* **Recadrer** : recadrer le bitmap généré.
* **Largeur** : largeur (en mm) pour recadrer la vue générée.
* **Hauteur** : hauteur (en mm) à recadrer la vue générée.
* **Pas d'arrière-plan** : si cette case est cochée, le bitmap généré aura un fond transparent.
* **Arrière-plan opaque** : si cette case est cochée, le bitmap généré aura un arrière-plan de la couleur sélectionnée.
* **Utiliser un arrière-plan 3D** : si cette case est cochée, le bitmap généré utilisera l'arrière-plan de la fenêtre 3D.

## Remarques

* Les vues actives sont statiques une fois générées, elles ne sont jamais mises à jour avec les modifications apportées au modèle 3D.
* Une vue active est en réalité une [image](/TechDraw_Image/fr "TechDraw Image/fr"). Sa Données**Scale Type** est donc toujours initialisée comme `Custom`.
* Dans version 0.20 et précédentes, une vue active était un [symbole](/TechDraw_Symbol/fr "TechDraw Symbol/fr").

## Propriétés

Voir [TechDraw Image](/TechDraw_Image/fr#Propri.C3.A9t.C3.A9s "TechDraw Image/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ActiveView/fr&oldid=1514814>"