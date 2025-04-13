---
title: Assembly3 Contrainte distance du point projeté
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte distance du point projeté |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Assembly_ConstraintPointsProjectDistance.svg) Contrainte distance du point projeté contraint la distance de deux points 2D par rapport à une ligne droite.

En se basant sur la direction de la ligne (l'axe z de son système de coordonnées implicites (ICS)), définir la distance de deux points le long de la ligne signifie ajouter la valeur de la distance à la valeur z du premier point pour obtenir la valeur z du second point (et ignorer les valeurs x et y).

## Utilisation

1. Sélectionner deux points (2D ou 3D).
2. Sélectionnez une ligne droite (2D ou 3D).
3. Activez la commande ![](/images/Assembly_ConstraintPointsProjectDistance.svg) Contrainte distance du point projeté en utilisant :
   * Le bouton ![](/images/Assembly_ConstraintPointsProjectDistance.svg) Points project distance.
4. Appuyez sur le bouton ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints/fr "Assembly3 ResolveConstraints/fr") ou sur le bouton ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve/fr "Assembly3 QuickSolve/fr") pour recalculer.

:   :   (si ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute/fr "Assembly3 AutoRecompute/fr") et ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute/fr "Assembly3 SmartRecompute/fr") sont désactivés).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointsProjectDistance/fr&oldid=1536593>"