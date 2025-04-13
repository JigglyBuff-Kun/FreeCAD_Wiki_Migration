---
title: Fenêtre de sélection
---
## Introduction

La Fenêtre de sélection ou **Sélection** est un panneau dans l'[interface](/Interface/fr "Interface/fr") par défaut situé sous la [vue combinée](/Combo_view/fr "Combo view/fr"). Tout comme l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), elle affiche plus d'informations sur les objets actuellement sélectionnés.

Une sélection peut être effectuée en choisissant un objet dans la [vue 3D](/3D_view/fr "3D view/fr") ou dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Plusieurs corps peuvent être sélectionnés en maintenant Ctrl.

![](/images/FreeCAD_interface_base_divisions.svg)

Fenêtre de sélection indiquée par le numéro 5 dans l'[interface](/Interface/fr "Interface/fr") standard.

## Sélection d'objets

La vue en arborescence de cet exemple comporte deux [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), avec plusieurs fonctionnalités chacune, et un simple [Part Cône](/Part_Cone/fr "Part Cone/fr"). La vue en arborescence est comme suit.

![](/images/FreeCAD_Selection_Tree_view.png)

La fenêtre de sélection est vide si aucun objet n'est sélectionné dans la [vue 3D](/3D_view/fr "3D view/fr") ou dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

![](/images/FreeCAD_Selection_view_empty.png) ![](/images/FreeCAD_Selection_view_empty_3D.png)

Si vous sélectionnez un objet, il apparaîtra dans la liste d'objets, avec le document auquel il appartient. Le `Name` interne en lecture seule et le `Label` modifiable par l'utilisateur seront affichés.

`Name` ne peut contenir que des caractères alphanumériques de base `[_0-9a-zA-Z]`, tandis que `Label` peut contenir n’importe quel symbole, y compris les espaces et les caractères accentués.

```
Document#Name (Label)

```

![](/images/FreeCAD_Selection_view_one_object.png) ![](/images/FreeCAD_Selection_view_one_object_3D.png)

Si vous sélectionnez différents objets, ils seront listés dans la vue. Si ces objets sont situés dans un type de conteneur, par exemple, un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), le nom affiché sera attribué de manière hiérarchique, à savoir, `Document#Parent.Child` . Dans ce cas, non seulement l'enfant, mais tout le parent apparaîtra en surbrillance dans la vue 3D.

```
Document#Body.Feature. (Feature_label)

```

![](/images/FreeCAD_Selection_view_many_objects.png) ![](/images/FreeCAD_Selection_view_many_objects_3D.png)

Vous pouvez sélectionner des éléments de corps individuels, c'est-à-dire des sommets, des arêtes et des faces, qui seront également affichés de manière hiérarchique.

```
Document#Body.Feature.Vertex (Feature_label)
Document#Body.Feature.Edge (Feature_label)
Document#Body.Feature.Face (Feature_label)

```

![](/images/FreeCAD_Selection_view_many_objects_subelements.png) ![](/images/FreeCAD_Selection_view_many_objects_subelements_3D.png)

## Barre de recherche

Si votre document contient de nombreux objets et que vous ne pouvez pas choisir celui que vous souhaitez dans la [vue 3D](/3D_view/fr "3D view/fr") ou dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), vous pouvez écrire le nom partiel de l'objet dans le champ de recherche. Il recherchera tous les noms dans le document et affichera une liste de ceux qui correspondent partiellement au texte que vous avez entré. Lorsque vous trouvez l'objet que vous recherchez, vous pouvez cliquer dessus pour le sélectionner.

## Actions

Un clic droit sur un élément de la liste appelle diverses commandes.

* **Sélectionner uniquement** : désélectionne tout et sélectionne uniquement l'objet parent qui contient l'élément donné.
* **Désélectionner** : supprime complètement la sélection de tous les objets.
* **Zoom to fit** : désélectionne tout et ne sélectionne que l'objet parent qui contient l'élément donné. De plus, la [vue 3D](/3D_view/fr "3D view/fr") est panoramique et zoomée de sorte que l'objet parent soit centré sur l'écran. Ceci est utile lorsque vous sélectionnez un objet dans la vue arborescente, puis faites une mise au point rapide de la caméra sur la vue 3D.
* **Aller à la sélection** : désélectionne tout et ne sélectionne que l'objet parent qui contient l'élément sélectionné. Dans ce cas, la [vue en arborescence](/Tree_view/fr "Tree view/fr") est ajustée et développée pour montrer exactement où se trouve l'objet sélectionné dans l'arborescence. Ceci est utile lorsque les objets de la vue 3D sont contenus dans de nombreux objets conteneurs de la vue arborescente, par exemple, [Std Parts](/Std_Part/fr "Std Part/fr"), [Std Groupes](/Std_Group/fr "Std Group/fr"), [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") et semblables. Lorsque vous avez des centaines de corps, il est plus facile de sélectionner l'objet dans la vue 3D, puis de choisir **Aller à la sélection** pour localiser immédiatement l'objet dans la vue en arborescence, puis de modifier ses propriétés dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").
* **Marquer pour recalculer** : marque l'objet sélectionné comme "touché", ce qui signifie que ses propriétés seront mises à jour lors de la prochaine opération sur le document [recalculé](/Std_Refresh/fr "Std Refresh/fr").
* **Vers la console Python** : ceci crée une variable `obj` qui contient une référence à l'objet parent. Cela est utile pour écrire des scripts et tester des commandes dans la [console Python](/Python_console/fr "Python console/fr"). Au lieu d'utiliser le nom complet de l'objet, il est plus facile d'utiliser le nom plus court et plus compact `obj`.

## Objet sélectionné

Si la case **Liste des objets sélectionnés** est disponible, une liste secondaire apparaîtra montrant tous les sous-éléments (sommets, arêtes et faces) qui pourraient être sélectionnés en un seul clic, même ceux qui sont derrière (masqués par) d'autres objets.

![](/images/FreeCAD_Selection_view_pick_hidden.png) ![](/images/FreeCAD_Selection_view_pick_hidden_3D.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_view/fr&oldid=1460560>"