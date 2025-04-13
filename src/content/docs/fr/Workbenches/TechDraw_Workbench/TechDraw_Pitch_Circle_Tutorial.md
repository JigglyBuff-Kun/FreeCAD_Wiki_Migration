---
title: TechDraw Tutoriel pour créer un cercle imaginaire
---
|  |
| --- |
| Tutoriel |
| Thème |
| TechDraw Cercle imaginaire |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 10 minutes |
| Auteurs |
| Andergrin |
| Version de FreeCAD |
| 0.19 |
| Fichiers exemples |
| *None* |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel explique comment ajouter un cercle imaginaire à une vue ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"). Cela suppose que le modèle est un ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") avec au moins trois trous dans un motif circulaire. Pour le cercle, une esquisse distincte sera créée. Une procédure similaire peut être utilisée dans d'autres situations et pour ajouter d'autres éléments de type annotation aux vues de [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

Dans FreeCAD version 0.20 et supérieure, un cercle de trous peut être créé avec l'outil [TechDraw Axes de centrage de trous/vis](/TechDraw_ExtensionHoleCircle/fr "TechDraw ExtensionHoleCircle/fr").

![](/images/Circle.png)
![](/images/Pitch_Circle.png)

## Créer l'esquisse du cercle

1. Activez le ![](/images/PartDesign_Body.svg) [corps](/PartDesign_Body/fr "PartDesign Body/fr"). Cela activera également l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), si nécessaire.
2. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez la bonne face appartenant au corps.
3. Créez une nouvelle esquisse avec l'icône ![](/images/PartDesign_NewSketch.svg) [Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr").
4. L'esquisse sera attachée à la face sélectionnée.
5. Lancez la commande ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr").
6. Sélectionnez trois arêtes circulaires (trous) dans le corps.
7. Utilisez la commande ![](/images/Sketcher_Create3PointCircle.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr"). Utilisez la commande [Création d'un cercle par 3 points](/Sketcher_Create3PointCircle/fr "Sketcher Create3PointCircle/fr") pour créer un cercle contraint aux points centraux de la géométrie externe.
8. L'esquisse doit maintenant être entièrement contrainte.
9. Fermez l'esquisse.

## Créer la vue TechDraw

1. Passez à l' ![](/images/Workbench_TechDraw.svg) [atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").
2. Si vous n'en avez pas déjà un : créez une ![](/images/TechDraw_PageDefault.svg) [page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr").
3. Assurez-vous que la [vue 3D](/3D_view/fr "3D view/fr") est correctement alignée.
4. Maintenez la touche Ctrl enfoncée et dans la [vue par arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez le corps et l'esquisse qui vient d'être créée.
5. Insérez une nouvelle vue en appelant la fonction ![](/images/TechDraw_View.svg) [vue](/TechDraw_View/fr "TechDraw View/fr").
6. Passez à la page [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").
7. Sélectionnez le cercle.
8. Lancez la commande ![](/images/TechDraw_DecorateLine.svg) [Apparence des lignes](/TechDraw_DecorateLine/fr "TechDraw DecorateLine/fr").
9. Modifiez les **Style** et **Épaisseur** du cercle.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Pitch_Circle_Tutorial/fr&oldid=1549412>"