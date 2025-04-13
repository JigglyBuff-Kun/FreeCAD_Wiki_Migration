---
title: Assembly3 Contrainte d'accrochage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte d'accrochage |
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

Cet outil établit un lien entre deux objets d'un assemblage et fixe la distance entre eux et leur orientation l'un par rapport à l'autre. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées d'éléments (ECS) sont utilisés pour repositionner les objets les uns par rapport aux autres.

Ce lien ne laisse aucun degré de liberté (DOF) sans contrainte.

## Utilisation

1. Placez deux objets dans un assemblage.
2. Sélectionnez un élément de chaque objet.
3. Appuyez sur le bouton ![](/images/Part_Attachment.svg) Create "Attachment" constraint.
4. Les objets sont réorganisés de manière à ce que leurs ECS partagent la même origine et aient la même orientation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAttachment/fr&oldid=1536614>"