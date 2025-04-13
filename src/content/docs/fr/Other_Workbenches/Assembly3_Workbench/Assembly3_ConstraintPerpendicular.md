---
title: Assembly3 Contrainte perpendiculaire
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte perpendiculaire |
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

En supposant que le premier objet est déjà verrouillé en place par la ![](/images/Assembly_ConstraintLock.svg) [Contrainte de verrouillage](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr"), l'objet suivant est déplacé vers une position où les deux axes z sont perpendiculaires.

Le décalage de leurs origines dans les directions x, y et z et les angles entre les axes x et y ne sont pas définis. Par rapport au premier objet, l'objet suivant peut toujours se déplacer le long des axes x, y et z et tourner autour des deux axes z. Il reste donc 5 degrés de liberté (DOF = degrees of freedom) pour chaque lien non confirmé.

La contrainte accepte les bords droits et les faces planes.

## Utilisation

1. Placez deux objets ou plus dans un assemblage.
2. Sélectionnez un élément de bord droit ou un élément de face plane de chaque objet.
3. Appuyez sur le bouton ![](/images/Assembly_ConstraintPerpendicular.svg) Perpendicular.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPerpendicular/fr&oldid=1536610>"