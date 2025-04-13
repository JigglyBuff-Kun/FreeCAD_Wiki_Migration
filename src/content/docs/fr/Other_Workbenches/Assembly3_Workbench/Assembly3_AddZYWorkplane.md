---
title: Assembly3 Ajouter un plan de travail ZY
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Ajouter un plan de travail ZY |
| Emplacement du menu |
| Assembly3 → Workplane and origin → Add ZY workplane |
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

La commande ![](/images/Assembly_Add_WorkplaneZY.svg) Ajouter un plan de travail ZY ajoute un plan de travail ZY à un assemblage actif.

Un objet Workplane sera créé dans le conteneur Parts de l'arbre d'assemblage et un élément plan de travail associé sera placé dans la vue 3D. Il est placé à l'origine de l'assemblage et orienté selon le plan YZ de l'assemblage, si l'objet Assemblage a été sélectionné directement.

![](/images/Assembly_Add_Workplane-01.png) ![](/images/Assembly_AddZYWorkplane-04.png)

L'assemblage peut également être sélectionné indirectement par un élément appartenant à l'assemblage. Le plan de travail est alors placé à l'origine de l'élément et orienté selon le plan YZ local de cet élément.

Les éléments valides sont par exemple les éléments, les corps, les sommets, les arêtes, les faces, les origines et les autres plans de travail de la [Vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [Vue 3D](/3D_view/fr "3D view/fr").

## Utilisation

1. Activez la commande ![](/images/Assembly_Add_WorkplaneZY.svg) **Ajouter un plan de travail ZY** en utilisant l'une des commandes suivantes :
   * Le bouton ![](/images/Assembly_Add_WorkplaneZY.svg) Add workplane ZY.
   * L'option de menu **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_WorkplaneZY.svg) Add workplane ZY**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddZYWorkplane/fr&oldid=1536577>"