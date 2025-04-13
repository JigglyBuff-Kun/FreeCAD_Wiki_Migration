---
title: Assembly3 Contrainte égalité longueur d'arc
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 Contrainte égalité longueur d'arc                   |
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

La commande ![](/images/Assembly_ConstraintEqualLineArcLength.svg) Contrainte égalité longueur d'arc contraint la longueur d'une ligne 2D comme une ligne non subdivisé faite avec l'![](/images/Workbench_Draft.svg) [atelier Draft Workbench](/Draft_Workbench/fr "Draft Workbench/fr") en relation avec un ![](/images/Assembly_Workplane.svg) plan de travail.

Elle relie la longueur de la ligne 2D à la longueur d'un arc (2D ou 3D ?).

La valeur de la longueur de la ligne sélectionnée est égale à la longueur de l'arc sélectionné.

```
Comme je n'ai pas réussi à faire fonctionner cet outil, voici l'énoncé de l'infobulle :

```

Ajoutez une contrainte "EqualLineArcLength" pour qu'une ligne ait la même longueur qu'un arc.

## Utilisation

1. Sélectionnez la ligne 2D à contraindre.
2. Sélectionnez un arc 2D pour lire sa valeur de longueur.
3. Activez la commande ![](/images/Assembly_ConstraintEqualLineArcLength.svg) Contrainte égalité longueur d'arc en utilisant :
   - ![](/images/Assembly_ConstraintEqualLineArcLength.svg) Equal Line Arc Length.
4. Appuyez sur le bouton ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints/fr "Assembly3 ResolveConstraints/fr") ou sur le bouton ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve/fr "Assembly3 QuickSolve/fr") pour recalculer.

: : (si ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute/fr "Assembly3 AutoRecompute/fr") et ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute/fr "Assembly3 SmartRecompute/fr") sont désactivés).

Selon l'ordre des types de ligne sélectionnés, les **erreurs** suivantes apparaissent :

```
La contrainte "EqualLineArcLength" exige que le 1er élément soit une arête linéaire.
La contrainte "EqualLineArcLength" exige que le 2ème élément soit une arête d'arc.
La contrainte "EqualLineArcLength" exige que le 2e élément soit une arête circulaire.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintEqualLineArcLength/fr&oldid=1536561>"
