---
title: Assembly3 Ajoutez un emplacement
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Ajoutez un emplacement |
| Emplacement du menu |
| Assembly3 → Workplane and origin → Add placement |
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

La commande ![](/images/Assembly_Add_Placement.svg) Add placement ajoute un placement à un assemblage actif.

Un objet Placement sera créé dans le conteneur Parts de l'arbre d'assemblage et un élément de placement associé sera placé dans la vue 3D. Il est placé à l'origine de l'assemblage et hérite de l'orientation du système de coordonnées local de l'assemblage, si l'objet Assembly a été sélectionné directement.

![](/images/Assembly3_AddPlacement-01.png) ![](/images/Assembly3_AddPlacement-02.png)

À gauche : Vue de l'arborescence. À droite : Un placement près de l'origine de l'assemblage (indiqué ici comme origine du fichier)

L'assemblage peut également être sélectionné indirectement par un élément appartenant à l'assemblage. Le placement est alors placé à l'origine de l'élément et hérite de l'orientation du système de coordonnées local de cet élément.

Les éléments valides sont par exemple des éléments, des corps, des sommets, des arêtes, des faces, des origines, des plans de travail et d'autres placements provenant de la [Vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [Vue 3D](/3D_view/fr "3D view/fr").

## Utilisation

1. Activez la commande ![](/images/Assembly_Add_Placement.svg) **Ajoutez un emplacement** en utilisant l'une des commandes suivantes :
   * Le bouton ![](/images/Assembly_Add_Placement.svg) Add placement.
   * L'option de menu **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_Placement.svg) Add placement**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddPlacement/fr&oldid=1536560>"