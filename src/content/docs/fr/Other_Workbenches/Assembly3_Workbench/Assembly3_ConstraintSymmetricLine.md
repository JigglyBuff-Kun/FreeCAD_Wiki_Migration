---
title: Assembly3 Contrainte de symétrie par une ligne
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte de symétrie par une ligne |
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

Cet outil permet de construire un lien entre deux ou trois objets d'un assemblage. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS) sont utilisés pour positionner les objets les uns par rapport aux autres.

Sur la base de l'ICS d'un élément de ligne, les origines des ICS des deux autres éléments sont positionnées de manière à avoir des coordonnées z identiques et les mêmes décalages x et y dans des directions opposées.

## Utilisation

1. Placer deux objets dans un assemblage
2. Sélectionner deux éléments ponctuels d'un objet
3. Sélectionnez un élément de ligne droite de l'autre objet.
4. Appuyez sur le bouton ![](/images/Assembly_ConstraintSymmetricLine.svg) Symmetric line.

Ou

1. Placez trois objets dans un assemblage
2. Sélectionner un élément ponctuel des deux premiers objets
3. Sélectionnez un élément de ligne droite du troisième objet
4. Appuyez sur le bouton ![](/images/Assembly_ConstraintSymmetricLine.svg) Symmetric line.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSymmetricLine/fr&oldid=1536651>"