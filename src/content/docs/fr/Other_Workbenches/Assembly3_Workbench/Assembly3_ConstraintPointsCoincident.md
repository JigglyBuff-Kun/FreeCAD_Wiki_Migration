---
title: Assembly3 Contrainte de points coïncidents
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 Contrainte de points coïncidents                    |
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

La commande ![](/images/Assembly_ConstraintPointCoincident.svg) Contrainte de points coïncidents établit un lien entre deux objets d'un assemblage et fixe la distance entre eux et leur orientation. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS) sont utilisés pour positionner un objet par rapport à un autre.

En supposant que le premier objet est déjà verrouillé en place par la ![](/images/Assembly_ConstraintLock.svg) [Contrainte de verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr"), l'objet suivant est déplacé vers une position où les origines des deux ICS sont au même endroit.

Par rapport au premier objet, l'objet suivant peut encore tourner autour de l'origine (autour des trois axes). Cela laisse 3 degrés de liberté (DOF = degrees of freedom) pour chaque lien sans contrainte.

Cette contrainte accepte tout type d'élément !

## Utilisation

1. Placez deux objets dans un assemblage
2. Sélectionnez un élément ponctuel de chaque objet
3. Activez la commande ![](/images/Assembly_ConstraintPointCoincident.svg) **Contrainte de points coïncidents** en utilisant la commande suivante :
   - Le bouton ![](/images/Assembly_ConstraintPointCoincident.svg) Create "PointsCoincident" constraint.

## Équivalent cinématique

Utilisée dans un contexte cinématique, cette contrainte ressemble à une **articulation à rotule**.

Dans la vie réelle, nous ne pouvons pas manipuler les points, c'est pourquoi des faces sphériques sont utilisées pour représenter les points liés.

![](/images/Assembly3_ConstraintPointsCoincident-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintPointsCoincident-02.png)

Objets contraints avant et après l'exécution du solveur

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointsCoincident/fr&oldid=1536600>"
