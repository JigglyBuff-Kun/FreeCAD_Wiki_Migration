---
title: Part Échelle
---
|  |
| --- |
| Part Échelle |
| Emplacement du menu |
| Part → Mettre à l'echelle... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr"), [Draft Échelle](/Draft_Scale/fr "Draft Scale/fr") |
|  |

## Description

**Part Échelle** met à l'échelle les formes selon un facteur spécifié dans toutes les directions ou selon des facteurs distincts dans chaque direction principale. Dans le cas de facteurs distincts, les formes peuvent être déformées.

![](/images/Part_Scale_demo.png)

Exemples de mise à l'échelle

## Utilisation

1. Sélectionner une ou plusieurs formes dans la [vue 3D](/3D_view/fr "3D view/fr") ou dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyer sur le ![](/images/Part_Scale.svg) Mettre à l'echelle....
   * Sélectionner l'option **Part → ![](/images/Part_Scale.svg) Mettre à l'echelle...** du menu.
3. Un [panneau des tâches](#Panneau_des_tâches) s'ouvre.
4. Choisir soit **Échelle uniforme** soit **Échelle non uniforme**.
5. Définir le(s) facteur(s) d'échelle.
6. Cliquer sur OK.

La sélection peut également être effectuée après le lancement de la commande, en sélectionnant une ou plusieurs formes dans la liste du [panneau des tâches](#Panneau_des_tâches).

La vue en arborescence répertorie autant d'objets Échelle qu'il y a de formes sélectionnées. Chaque forme saisie est placée sous son objet Scale.

## Panneau des tâches

![](/images/Part_Scale_dialog.png)

* Le bouton OK crée l'objet mis à l'échelle et ferme le panneau des tâches.
* Le bouton Fermer ferme le panneau des tâches sans rien faire.
* Le bouton Appliquer crée les objets mis à l'échelle, mais ne ferme pas le panneau des tâches. Vous pouvez ensuite sélectionner une autre forme dans la liste du bas et créer d'autres objets à l'échelle.
* La liste des **Formes** : sélectionner ici les formes à mettre à l'échelle. Si plusieurs formes sont sélectionnées, plusieurs objets Scale sont créés.

## Remarques

* Une mise à l'échelle non uniforme transformera toutes les arêtes en courbes B-spline et toutes les faces en surfaces B-spline. Ces dernières sont plus lourdes à calculer.
* Les points et les sommets ne peuvent pas être mis à l'échelle car ils sont sans dimension.
* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être mis à l'échelle.
* Le panneau des tâches n'offre pas encore d'aperçu. Appliquer créera un objet à l'échelle chaque fois que vous cliquez dessus, ce qui peut être utile en tant qu'aperçu. Ils resteront cependant et un autre objet mis à l'échelle sera créé lorsque vous cliquerez sur OK. [Annuler](/Std_Undo/fr "Std Undo/fr") peut être utile pour les nettoyer avant de cliquer sur OK.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Échelle est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Scale

* Données**Base** (`Link`) : forme d'entrée (la forme sur laquelle Part Échelle a été appliquée).
* Données**Uniform** (`Bool`) : contrôle la mise à l'échelle uniforme ou non uniforme
* Données**Uniform Scale** (`Float`) : facteur d'échelle pour la mise à l'échelle uniforme
* Données**XScale** (`Float`) : facteur d'échelle en X pour une mise à l'échelle non uniforme.
* Données**YScale** (`Float`) : facteur d'échelle en Y, idem.
* Données**ZScale** (`Float`) : facteur d'échelle en Z, idem.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Scale/fr&oldid=1567130>"