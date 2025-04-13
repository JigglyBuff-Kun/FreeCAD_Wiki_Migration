---
title: Assembly3 Contrainte axiale
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 Contrainte axiale                                   |
| Emplacement du menu                                           |
| _Aucun_                                                       |
| Ateliers                                                      |
| [Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr") |
| Raccourci par défaut                                          |
| _Aucun_                                                       |
| Introduit dans la version                                     |
| -                                                             |
| Voir aussi                                                    |
| _Aucun_                                                       |
|                                                               |

## Description

Cet outil établit un lien entre deux ou plusieurs objets d'un assemblage et fait correspondre leur orientation. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS = implicit coordinate systems) sont utilisés pour positionner un objet par rapport à un autre.

En supposant que le premier objet est déjà verrouillé en place par la ![](/images/Assembly_ConstraintLock.svg) [Contrainte de verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr"), les objets suivants sont déplacés vers des positions où les axes z sont colinéaires.

Le décalage de leurs origines sur leur axe z commun et l'angle entre leurs axes x (et y également) ne sont pas définis. Par rapport au premier objet, les objets suivants peuvent toujours se déplacer le long de l'axe z et tourner autour de cet axe. Cela laisse 2 degrés de liberté (DOF = degrees of freedom) pour chaque lien sans contrainte.

La contrainte accepte

: - des arêtes droites, qui deviennent colinéaires,
: - des faces planes, qui sont alignées en utilisant leur axe normal à la surface,
: - des faces cylindriques, qui sont alignées en utilisant la direction axiale.

Différents types d'éléments géométriques peuvent être mélangés.

## Utilisation

1. Placez deux objets ou plus dans un assemblage.
2. Sélectionnez un élément de chaque objet.
3. Activez la commande ![](/images/Assembly_ConstraintAxial.svg). **Contrainte axiale** en utilisant l'une des commandes suivantes :
   - Le bouton ![](/images/Assembly_ConstraintAxial.svg) Create "AxialAlignment" constraint.

## Équivalent cinématique

Utilisée dans un contexte cinématique, cette contrainte ressemble à une _articulation cylindrique_.

Dans la vie réelle, nous ne pouvons pas manipuler les axes et nous utilisons donc des faces cylindriques pour représenter les axes liés.

![](/images/Assembly3_ConstraintAxial-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintAxial-02.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintAxial-03.png)

Objets contraints avant et après l'exécution du solveur puis glissés le long de l'axe

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAxial/fr&oldid=1536569>"
