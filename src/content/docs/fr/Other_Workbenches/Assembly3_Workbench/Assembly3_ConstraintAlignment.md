---
title: Assembly3 Contrainte d'alignement
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte d'alignement |
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

Cet outil relie deux ou plusieurs objets d'un assemblage et fait correspondre leurs orientations. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS = implicit coordinate systems) sont utilisés pour positionner un objet par rapport à un autre.

En supposant que le premier objet est déjà verrouillé en place par la ![](/images/Assembly_ConstraintLock.svg) [Contrainte de verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr"), les objets suivants sont déplacés vers des positions où les plans x-y de tous les SCI sont coplanaires et les axes z pointent dans la même direction.

Le décalage de leurs axes z et l'angle entre leurs axes x (et y également) ne sont pas définis.
En ce qui concerne le premier objet, les objets suivants peuvent toujours se déplacer dans les directions x et y et tourner autour de l'axe z. Cela laisse 3 degrés de liberté pour chaque lien sans contrainte.
Cela laisse 3 degrés de liberté (DOF = degrees of freedom) pour chaque lien sans contrainte.

## Utilisation

1. Placez deux objets ou plus dans un assemblage.
2. Sélectionnez un élément de face planaire de chaque objet.
3. Appuyez sur le bouton ![](/images/Assembly_ConstraintAlignment.svg)Alignment.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAlignment/fr&oldid=1536581>"