---
title: Assembly3 Verrouiller le déplacement
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Verrouiller le déplacement |
| Emplacement du menu |
| Assembly3 → Lock mover |
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

La commande ![](/images/Assembly_LockMover.svg) Verrouiller le déplacement est une commande qui empêche les pièces d'être déplacées si elles sont fixées avec une contrainte de ![](/images/Assembly_ConstraintLock.svg) [verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr").

Lorsqu'elle est activée, aucune des commandes de déplacement ![](/images/Assembly_Move.svg) [Déplacer une pièce](/Assembly3_MovePart/fr "Assembly3 MovePart/fr"), ![](/images/Assembly_AxialMove.svg) [Déplacement axial](/Assembly3_AxialMove/fr "Assembly3 AxialMove/fr"), ou ![](/images/Assembly_QuickMove.svg) [Déplacement rapide](/Assembly3_QuickMove/fr "Assembly3 QuickMove/fr") peuvent être sélectionnés tant que la sélection en cours contient un objet fixe. Cela ne semble pas s'appliquer à la géométrie 2D (voir [Remarques](#Remarques)).

## Utilisation

1. Activez la commande ![](/images/Assembly_LockMover.svg) **Verrouiller le déplacement** en utilisant l'un des moyens suivants :
   * Le bouton ![](/images/Assembly_LockMover.svg) Lock mover.
   * L'option de menu **Assembly3 → ![](/images/Assembly_LockMover.svg) Lock mover**.

## Remarques

La **géométrie 2D** sélectionnée, telle que les Draft lignes, les arcs et les cercles, fixée par la contrainte Locked, ne désactive pas les outils de déplacement. Alors que les cercles et les arcs conservent leur position lorsqu'un outil de déplacement leur est appliqué, les lignes peuvent être déplacées et inclinées.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_LockMover/fr&oldid=1163290>"