---
title: Assembly3 Contrainte de coïncidence
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 Contrainte de coïncidence                           |
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

Cet outil relie deux ou plusieurs objets d'un assemblage et fait correspondre leurs orientations. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS = implicit coordinate systems) sont utilisés pour positionner un objet par rapport à un autre.

En supposant que le premier objet est déjà verrouillé en place par la ![](/images/Assembly_ConstraintLock.svg) [Contrainte de verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr"), les objets suivants sont déplacés vers des positions où les plans x-y de tous les SCI sont coplanaires et les axes z colinéaires.

Une option pour cette liaison est de définir une distance entre les plans x-y et de les rendre parallèles.

L'angle entre leurs axes x (et y également) n'est pas défini. Par rapport au premier objet, les objets suivants peuvent encore tourner autour de l'axe z.
Cela laisse 1 degré de liberté (DOF = degree of freedom) pour chaque lien sans contrainte.

Ce lien peut être utilisé comme une charnière en cinématique.

La rotation peut être arrêtée en mettant Lock Angle sur true dans le panneau des propriétés et l'angle peut être réglé sur une valeur spécifique.
Avec une valeur contrôlée, le lien peut être utilisé comme un actionneur dans un système cinématique.

## Utilisation

1. Placez deux objets ou plus dans un assemblage.
2. Sélectionnez un élément de face plane de chaque objet.
3. Activez la commande ![](/images/Assembly_ConstraintCoincidence.svg) **Contrainte de coïncidence** en utilisant la commande suivante :
   - Le bouton ![](/images/Assembly_ConstraintCoincidence.svg) Create "PlaneCoincident" constraint.

## Équivalent cinématique

Utilisée dans un contexte cinématique, cette contrainte ressemble à une charnière ou à un _joint tournant_ lorsqu'elle est utilisée avec des arcs et des cercles.

Dans la vie réelle, les formes des objets permettent la rotation et empêchent le glissement. Dans ce cas, des arcs et des cercles sont utilisés pour simuler cela.

![](/images/Assembly3_ConstraintCoincidence-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintCoincidence-02.png)

Objets contraints avant et après l'exécution du solveur

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintCoincidence/fr&oldid=1536635>"
