---
title: Curves Coller une image SVG
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Coller une image SVG |
| Emplacement du menu |
| Misc. → Paste SVG |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Curves_PasteSVG.svg) Coller une image SVG colle le contenu SVG du presse-papiers dans la [vue 3D](/3D_view/fr "3D view/fr"). Cet outil fait partie des [ateliers externes](/External_workbenches/fr "External workbenches/fr") appelé [Curves](/Curves_Workbench/fr "Curves Workbench/fr").

## Utilisation

1. Passer à l'atelier ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/fr "Curves Workbench/fr") (à installer à partir du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") si ce n'est pas déjà fait)
2. Pour appeler la commande, effectuez l'une des opérations suivantes:
   * Appuyez sur le bouton ![](/images/Curves_PasteSVG.svg)
   * Utilisez **Misc. → Paste SVG**

## Remarques

A sample file result:

* 1 rect -> 1 Rectangle object
* 1 circle -> 1 Circle object
* 5 path -> 6 Path objects (one path split in two at the second **m** command)
* 4 text -> 12 Text objects (the first of of each triplet contains the text position, the next contains the text string, and the last one ?)

Rectangle and Circle are filled and visible, Paths are visible but nothing is displayed for any Text object.  
What is a use case for these objects?

## Propriétés

These objects have no additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_PasteSVG/fr&oldid=1570240>"