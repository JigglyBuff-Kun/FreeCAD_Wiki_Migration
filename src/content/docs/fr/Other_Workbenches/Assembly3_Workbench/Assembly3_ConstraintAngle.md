---
title: Assembly3 Contrainte d'angle
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte d'angle |
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

Cet outil établit un lien entre deux objets d'un assemblage et fait correspondre leur orientation. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS = implicit coordinate systems) sont utilisés pour positionner un objet par rapport à un autre.

L'angle entre deux éléments, c'est-à-dire l'angle entre leurs axes z, est fixe.

Le décalage de leurs origines dans les directions x, y et z et les angles entre les axes x et y ne sont pas définis. Par rapport au premier objet, l'objet suivant peut toujours se déplacer le long des axes x, y et z et tourner autour des deux axes z. Il reste donc 5 degrés de liberté (DOF = degrees of freedom) pour chaque lien non confirmé.

La contrainte accepte les bords droits et les faces planes.

## Utilisation

1. Placez deux objets ou plus dans un assemblage.
2. Sélectionnez un élément de bord droit ou un élément de face plane de chaque objet.
3. Appuyez sur le bouton ![](/images/Assembly_ConstraintAngle.svg) Create "Angle" Constraint.
4. Changez éventuellement la valeur de la propriété Données**Angle**.

## Remarques

2D : Cette contrainte semble être le seul moyen de contrôler un angle dans une esquisse de squelette (assemblage cinématique 2D) ; Prouvez-moi le contraire, SVP !

* Sa propriété Données**Angle** (`Angle`) permet toute valeur positive, mais 0° et 180° exactement laissent le solveur perplexe.
* Il inverse le sens si des angles supérieurs à 180° sont utilisés et, par conséquent, 135° et 225° donnent les mêmes positions pour les éléments concernés.

:   Il est inutile si l'on veut simuler une rotation complète et ruine ainsi le principe d'utilisation d'une esquisse de squelette pour de nombreuses tâches cinématiques telles que l'entraînement d'un piston par une manivelle rotative couplée à une bielle.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAngle/fr&oldid=1536572>"