---
title: Draft Dessin
---
:::caution
CETTE COMMANDE EST OBSOLETECette commande et l'atelier Drawingavec lequel elle fonctionne ne sont plus disponibles dans laversion 0.21 et suivantes. Utilisez l'atelier TechDrawet la commandeTechDraw Vue d'un objet Draftà la place.
:::

|  |
| --- |
| Draft Dessin |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr"), [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [TechDraw Vue d'un objet Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr") |
|  |

## Description

La commande ![](/images/Draft_Drawing.svg) **Draft Dessin** insère des vues des objets sélectionnés dans une page de [dessin](/Drawing_Workbench/fr "Drawing Workbench/fr").

Cette commande est similaire à la commande [Drawing Insérer une vue dans la page](/Drawing_View "Drawing View") mais est optimisée pour les objets de [Draft](/Draft_Workbench/fr "Draft Workbench/fr"). Contrairement à cette commande, elle peut gérer des objets spécifiques tels que des [Draft Dimensions](/Draft_Dimension/fr "Draft Dimension/fr") et des [Draft Textes](/Draft_Text/fr "Draft Text/fr"), et elle peut faire le rendu des faces.

Cette commande est maintenant obsolète. Utilisez plutôt l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") et la commande [TechDraw Vue d'un objet Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr").

![](/images/Draft_drawing_example.jpg)

A gauche, les objets Draft sélectionnés. A droite, les vues de dessin créées.

## Utilisation

1. Pour utiliser cette commande dans FreeCAD version 0.19 et suivantes, vous devez ajouter un bouton à une barre d'outils personnalisée. Voir [Personnalisation de l'interface](/Interface_Customization/fr "Interface Customization/fr").
2. Sélectionnez un ou plusieurs objets. Une vue séparée sera créée pour chaque objet.
3. Ajoutez éventuellement une page de [Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr") à la sélection. Si vous ne le faites pas, la vue est insérée dans la première page du document. S'il n'y a pas de page dans le document, une nouvelle page est d'abord créée.
4. Appuyez sur le bouton ![](/images/Draft_Drawing.svg) Draft Dessin.
5. Il y a un bug dans la version 0.19 de la commande dans FreeCAD. La valeur initiale de la propriété Données**Direction** est `[0, 0, 0]` ce qui n'est pas autorisé. Pour les objets situés sur un plan parallèle au plan XY du système de coordonnées global, elle doit être modifiée en `[0, 0, 1]`. Après avoir modifié cette propriété, il se peut que la page et la vue doivent être [recalculées](/Std_Refresh/fr "Std Refresh/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Drawing/fr&oldid=1267862>"