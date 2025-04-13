---
title: Assembly3 Contrainte longueur égale distance point ligne
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte longueur égale distance point ligne |
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

Cet outil contraint la longueur d'une ligne 2D comme un segment non fractionné réalisé avec l'atelier Draft par rapport à un plan de travail.

Elle relie la longueur de la ligne 2D à la distance entre un point et une autre ligne (2D ou 3D).

La valeur de la longueur de la première ligne sélectionnée est égale à la distance la plus courte entre le point et la deuxième ligne.

## Utilisation

1. Sélectionnez un point.
2. Sélectionnez la ligne 2D à contraindre.
3. Sélectionnez la ligne qui définit la distance au point.
4. Appuyez sur le bouton ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) Length Equal Point Line Distance.
5. Appuyez sur le bouton ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints/fr "Assembly3 ResolveConstraints/fr") ou sur le bouton ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve/fr "Assembly3 QuickSolve/fr") pour recalculer.

:   :   (si ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute/fr "Assembly3 AutoRecompute/fr") et ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute/fr "Assembly3 SmartRecompute/fr") sont désactivés).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLengthEqualPointLineDistance/fr&oldid=1536629>"