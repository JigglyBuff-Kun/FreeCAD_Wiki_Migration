---
title: Assembly3 Contrainte colinéaire
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte colinéaire |
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

La commande ![](/images/Assembly_ConstraintColinear.svg) Contrainte colinéaire contraint deux lignes 2D telles que des lignes non subdivisées réalisées avec l'atelier Draft en relation avec le plan de travail.

Elle relie les positions des deux lignes 2D de manière à ce que l'origine du système de coordonnées implicites (ICS) d'une ligne se trouve sur l'axe z du SCI de l'autre ligne, les deux axes z étant orientés dans la même direction.

## Utilisation

1. Sélectionner deux lignes 2D.
2. Lancez la commande ![](/images/Assembly_ConstraintColinear.svg) Contrainte colinéaire en utilisant :
   * Le bouton ![](/images/Assembly_ConstraintColinear.svg) Colinear.
3. Appuyez sur le ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints/fr "Assembly3 ResolveConstraints/fr") ou sur le bouton ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve/fr "Assembly3 QuickSolve/fr") pour recalculer.

:   :   (si ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute/fr "Assembly3 AutoRecompute/fr") et ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute/fr "Assembly3 SmartRecompute/fr") sont désactivés).

## Remarques

Cet outil accepte également les éléments 3D, par exemple les bords ou les lignes centrales.

* 2D/3D ou 3D/2D : Au lieu de l'axe z de l'élément 3D, la projection de cet axe sur le plan de travail de la ligne 2D est utilisée pour positionner les lignes.
* Les deux 3D : les lignes sont positionnées l'une par rapport à l'autre mais je n'arrive pas à comprendre comment...

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintColinear/fr&oldid=1536608>"