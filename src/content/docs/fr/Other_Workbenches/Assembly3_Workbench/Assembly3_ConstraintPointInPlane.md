---
title: Assembly3 Contrainte point sur un plan
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte point sur un plan |
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

Cet outil établit un lien entre deux objets d'un assemblage et fixe la distance entre eux et leur orientation l'un par rapport à l'autre. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS = implicit coordinate systems) sont utilisés pour positionner un objet par rapport à un autre.

En supposant que le premier objet est déjà verrouillé en place par la contrainte ![](/images/Assembly_ConstraintLock.svg) [Contrainte de verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr"), l'objet suivant est déplacé vers une position où l'origine de l'élément point se trouve sur le plan xy de l'élément face planaire.

Les éléments ponctuels n'ont aucun étirement dans aucune direction (longueur nulle) et il n'est donc pas possible de détecter une orientation, c'est-à-dire que leurs ICS servent uniquement à correspondre aux paramètres des autres éléments. L'orientation des ICS reste toujours la même que celle du système de coordonnées global et ne peut être utilisée pour réduire les degrés de liberté liés à la rotation.

Par rapport au premier objet, l'objet suivant peut toujours se déplacer le long des axes x et y et tourner autour des trois axes. Cela laisse 5 degrés de liberté (DOF = degrees of freedom) pour chaque lien sans contrainte.

## Utilisation

1. Placez deux objets dans un assemblage.
2. Sélectionnez un élément de point d'un objet et un élément de face planaire de l'autre objet.
3. Appuyez sur le bouton ![](/images/Assembly_ConstraintPointInPlane.svg) Point on plane.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointInPlane/fr&oldid=1536616>"