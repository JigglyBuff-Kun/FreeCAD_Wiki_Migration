---
title: PartDesign Mise à l'échelle
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| PartDesign Mise à l'échelle                                                                        |
| Emplacement du menu                                                                                |
| Aucune (option dans PartDesign → Appliquer une transformation → Transformation multiple)           |
| Ateliers                                                                                           |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr")                                   |
| Raccourci par défaut                                                                               |
| _Aucun_                                                                                            |
| Introduit dans la version                                                                          |
| -                                                                                                  |
| Voir aussi                                                                                         |
| [PartDesign Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr") |
|                                                                                                    |

## Description

![](/images/PartDesign_Scaled.svg) **PartDesign Mise à l'échelle** est une des options de transformation de ![](/images/PartDesign_MultiTransform.svg). [Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr"). Contrairement aux autres options, elle n'est pas disponible en tant qu'outil séparé. Elle change le résultat d'une transformation en une séquence d'objets mis à l'échelle avec des facteurs d'échelle uniformément répartis. En commençant par l'élément de base non mis à l'échelle de la transformation précédente, le facteur d'échelle est augmenté ou diminué jusqu'à atteindre la valeur donnée au dernier élément.

![](/images/PartDesign_Scaled-01.png) ![](/images/Button_right.svg) ![](/images/PartDesign_Scaled-02.png)

Une répétition linéaire et une répétition polaire → Mise à l'échelle de la répétition linéaire avec 3 occurrences et de la répétition polaire avec 12 occurrences

S'il n'y a pas eu une transformation au préalable lors de la ![](/images/PartDesign_MultiTransform.svg) [Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr"), les éléments mis à l'échelle seront placés à la même position que l'élément de base. Cela peut donner lieu à des formes inattendues si l'élément de base n'est pas entièrement couvert par l'objet mis à l'échelle. Il n'est donc pas recommandé d'utiliser **Mise à l'échelle** comme la première transformation d'une fonction Transformation multiple.

![](/images/PartDesign_Scaled-03.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-04.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-05.png)

Un élément de base avec un trou → Objet mis à l'échelle avec 2 occurrences → Objet mis à l'échelle avec 4 occurrences

## Utilisation

### Mise à l'échelle d'une fonction transformée

1. Effectuez l'une des opérations suivantes :
   - Double-cliquez sur l'objet MultiTransform dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   - Cliquez avec le bouton droit de la souris sur l'objet MultiTransform dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Modifier la transformation multiple** dans le menu contextuel.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Paramètres de la transformation multiple** s'ouvre.
3. Cliquez du bouton droit de la souris dans la liste **Transformations** et sélectionnez **Ajouter une transformation de mise à l'échelle** dans le menu contextuel.
4. Un élément **Mise à l'échelle** est ajouté à la liste. Le panneau des tâches sétend vers le bas pour permettre de définir le **Facteur** et les **Occurrences**. Voir [Options](#Options) pour plus d'informations.
5. Appuyez sur OK de la barre en bas.
6. Appuyez sur le bouton OK en haut pour terminer.

### Mise à l'échelle d'un seul élément

1. Sélectionnez un élément du corps actif dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Effectuez l'une des opérations suivantes :
   - Appuyez sur le bouton ![](/images/PartDesign_MultiTransform.svg) [Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr").
   - Sélectionnez l'option **PartDesign → Appliquer une transformation → ![](/images/PartDesign_MultiTransform.svg) Transformation multiple** du menu.
3. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Paramètres de la transformation multiple** s'ouvre. Voir ci-dessus.

## Options

- **Facteur** : le facteur d'échelle qui sera appliqué sur la dernière fonction.
- **Occurrences** : nombre d'occurrences de 1 à la valeur du **Facteur** (incluant la base et la dernière fonction).
  - Une transformation de mise à l'échelle accepte le nombre d'occurrences de la transformation précédente comme valeur maximale ou tout diviseur entier de ce nombre retournant un résultat entier. Ainsi, `12`, `6`, `4`, `3` et `2` sont valides pour une répétition linéaire ou polaire avec 12 occurrences.
  - Une fonction unique de mise à l'échelle accepte tout nombre entier supérieur à 1.

## Remarques

- Le centre de mise à l'échelle est le centre de gravité de l'élément, ce qui peut provoquer :
  - Un élément en croissance pouvant dépasser sur le côté opposé de l'élément parent.
  - Un élément diminuant perdant tout contact avec l'élément parent et disparaît.
  - Une poche diminuante devenant une cavité invisible à l'intérieur de l'élément parent.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Scaled/fr&oldid=1463205>"
