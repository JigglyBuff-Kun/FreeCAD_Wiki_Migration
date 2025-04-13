---
title: Assembly3 Contrainte tangence arc ligne
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte tangence arc ligne |
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

La commande ![](/images/Assembly_ConstraintArcLineTangent.svg) Arc line tangent construit un lien entre deux objets d'un assemblage. Les éléments sélectionnés de chaque objet ou plus précisément leurs systèmes de coordonnées implicites (ICS) sont utilisés pour positionner un objet par rapport à un autre.

```
Comme je n'ai pas réussi à faire fonctionner cet outil, voici juste l'énoncé de l'infobulle : 

```

Ajoutez une contrainte "Arc line tangent" pour rendre une ligne tangente à un arc au point de départ ou d'arrivée de l'arc.

## Utilisation

1. Placer deux objets dans un assemblage
2. Sélectionner un élément d'arc d'un objet
3. Sélectionnez un élément ligne du second objet
4. Appuyer sur le bouton ![](/images/Assembly_ConstraintArcLineTangent.svg) Arc line tangent.

Selon l'ordre des lignes sélectionnées, les *erreurs* suivantes apparaissent :

```
La contrainte "ArcLineTangent" requiert que le 1er élément soit une arête circulaire.
La contrainte "ArcLineTangent" exige que le 1er élément soit une arête d'arc.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintArcLineTangent/fr&oldid=1536579>"