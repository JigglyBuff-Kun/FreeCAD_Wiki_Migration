---
title: Part Inverser la forme
---
|  |
| --- |
| Part Inverser les formes |
| Emplacement du menu |
| Part → Inverser les formes |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Part_ReverseShape.svg) **Part Inverser la forme** crée des copies paramétriques avec des normales aux faces inversées à partir d'objets sélectionnés.

## Utilisation

1. Sélectionnez un ou plusieurs objets.
2. Sélectionnez l'option du menu **Part → ![](/images/Part_ReverseShape.svg) Inverser les formes**.
3. Pour chaque objet sélectionné, une forme inversée est créée.

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être utilisés comme objets sources. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Pour voir l'effet de la commande, changez la propriété Vue**Lighting** de la forme inversée en `On side` et, si nécessaire, modifiez **Édition → Préférences... → Affichage → Vue 3D → Rendu → Couleur du rétroéclairage**.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Inverser la forme la forme est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Reverse

* Données**Source** (`Link`) : spécifie la forme source liée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ReverseShape/fr&oldid=1471280>"