---
title: Cables Boîte
---
|  |
| --- |
| Cables Boîte |
| Emplacement du menu |
| Cables → Cable Box |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Câble](/Cables_Cable/fr "Cables Cable/fr"), [Cables Connecteur](/Cables_CableConnector/fr "Cables CableConnector/fr") |
|  |

## Description

![](/images/Cables_CableBox.svg) Boîte crée un objet boîte de câbles paramétrique. Elle a une taille par défaut à la création, mais certains paramètres, comme **Diamètre**, **Hauteur** ou **Épaisseur** peuvent être modifiés ultérieurement. La **boîte** appartient à la classe [Arch Composant](/Arch_Component/fr "Arch Component/fr") et hérite de toutes ses propriétés. La **boîte** possède quatre trous équipés de croix de construction. Chaque croix de construction a cinq sommets qui peuvent être utilisés comme supports d'attache pour un maximum de cinq câbles entrant par un seul trou.

De plus, la **boîte** est équipée de deux anneaux d'aide réglables. Leur but est d'offrir un point d'aimantation temporaire lors de l'édition des fils des câbles avec [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") pour leur donner la forme désirée. Lorsqu'ils ne sont plus nécessaires, les anneaux d'aide peuvent être cachés en jouant sur la propriété **Helper Rings Hidden**. Temporaire signifie que les anneaux d'aide ne doivent pas être utilisés comme support d'attache pour les sommets des sous-fils.

L'objet **Cable Box** peut être coloré en rattachant le [matétiau](/Arch_SetMaterial/fr "Arch SetMaterial/fr") désiré à la propriété **Material**.

![](/images/Cables_CableBox_Example1.png)

Exemple de boîte pour câbles par défaut :  
Il y a des croix de construction visibles à l'intérieur des trous et des anneaux d'aide à l'intérieur d'une boîte.

## Utilisation

1. Sélectionnez le sommet, le point sur la surface ou l'objet dans la [vue 3D](/3D_view/fr "3D view/fr") ou ne sélectionnez rien.
2. Créez une boîte à câbles par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_CableBox.svg) Cable Box.
   * Sélectionnez l'option **Cables → ![](/images/Cables_CableBox.svg) Cable Box** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cables → ![](/images/Cables_CableBox.svg) Cable Box** dans le menu contextuel.

Une fois créée, la boîte est placée à la position du sommet, du point ou de l'objet sélectionné dans l'espace 3D (ou au point (0,0,0) si rien n'a été sélectionné).

## Remarques

Les anneaux d'aide sont visibles par défaut. Ils peuvent être facilement cachés en jouant sur la propriété **Helper Rings Hidden**.

## Propriétés

Un objet **Cable Box** partage les propriétés communes et les comportements de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Cable Box

* Données**Box Body Hidden** (`Bool`) : si la valeur est *true*, la forme de la boîte est cachée pour faciliter l'édition des fils à l'intérieur de la boîte (avec l'aide éventuelle d'anneaux d'assistance). Il doit être mis à *false* lorsque l'édition des fils est terminée ou n'est pas nécessaire.
* Données**Diameter** (`Length`) : spécifie le diamètre intérieur de la boîte. Le diamètre par défaut est de 60 mm.
* Données**Height** (`Length`) : spécifie la hauteur intérieure de la boîte. La hauteur par défaut est de 62 mm.
* Données**Thickness** (`Length`) : spécifie l'épaisseur de la paroi de la boîte. L'épaisseur par défaut est de 2 mm.

Cable Box Helpers

* Données**Helper Rings Hidden** (`Bool`) : si la valeur est *true*, les anneaux d'aide sont cachés. La valeur par défaut est *false*. Les anneaux d'aide sont conçus pour faciliter l'édition des fils à l'intérieur d'une boîte. Les sommets des anneaux d'aide peuvent servir de points d'attache pour les fils secondaires de câbles lorsque ces derniers sont en mode [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr"). Cette propriété peut être mise à *true* lorsque l'édition des fils est terminée ou n'est pas nécessaire.
* Données**Ring 1 Diameter** (`Length`) : le diamètre de l'anneau auxiliaire 1. La valeur par défaut est de 45 mm.
* Données**Ring 1 Height** (`Length`) : hauteur de l'anneau d'aide 1 sous le couvercle de la boîte (bord supérieur ouvert de la boîte). La valeur par défaut est de 40 mm.
* Données**Ring 2 Diameter** (`Length`) : le diamètre de l'anneau d'aide 2. La valeur par défaut est de 30 mm.
* Données**Ring 2 Height** (`Length`) : hauteur de l'anneau d'aide 2 sous le couvercle de la boîte (bord supérieur ouvert de la boîte). La valeur par défaut est de 20 mm.

## Flux de travail typique

Ce flux de travail montre comment construire une boîte avec un câble attaché et avec un sous-fil de câble formé à l'intérieur d'une boîte.

1. Créez une **boîte** comme décrit dans [Utilisation](#Utilisation).
2. Créez un **câble** comme décrit dans [Utilisation du câble](/Cables_Cable/fr#Utilisation "Cables Cable/fr") avec une extrémité d'un fil de base attachée au sommet central d'une des croix de la **boîte**.
3. Cachez la forme **Cable** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), par exemple en appuyant sur la touche Espace. Les fils du câble devraient être encore visibles.
4. Cachez la forme **Cable Box** en sélectionnant la propriété **Box Body Hidden**. Les croix et les anneaux d'aide devraient être encore visibles.
5. Cliquez sur l'extrémité libre de l'un des câbles et ajoutez-lui un sommet avec [Ajouter un sommet](/Cables_AddVertex/fr "Cables AddVertex/fr"). Répétez l'action.
6. Double-cliquez sur le sous-câble ci-dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour entrer en mode [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr"). Le mode [Draft Aimantation Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") doit être activé.
7. Faites glisser les sommets de fil créés vers les différents sommets des anneaux auxiliaires. Ils devraient s'aimanter facilement. Quitter le mode [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr").
8. Lorsque la forme désirée du sous-fil a été construite, la propriété **Sub Wires Fillet Radius** d'un objet **Cable** peut être réglée, par exemple, à 4mm.
9. Décachez la forme **Cable** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), par exemple en appuyant sur la touche Espace.
10. Cachez la forme des anneaux d'aide en définissant la propriété **Helper Rings Hidden** de la **Cable Box**.
11. Désactiver la forme **Cable Box** en désactivant la propriété **Box Body Hidden**.

Remarque : à tout moment au cours de l'édition du sous-fil, il convient de quitter le mode [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") et de modifier la hauteur ou le diamètre de l'anneau d'aide. Ensuite, le mode [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") peut être réactivé et l'édition peut être poursuivie avec de nouvelles positions d'anneaux d'aide.

![](/images/Cables_CableBox_Example2_static.png)

Exemple d'un sous-fil de câble formé à l'intérieur d'une boîte

[Voici l'image animée](/Cables_Example3_CableBox "Cables Example3 CableBox") montrant les étapes décrites ci-dessus.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableBox/fr&oldid=1557669>"