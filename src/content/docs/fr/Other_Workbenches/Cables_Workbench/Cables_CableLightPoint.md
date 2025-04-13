---
title: Cables Source lumineuse
---
|  |
| --- |
| Cables Source lumineuse |
| Emplacement du menu |
| Cables → Cable Light Point |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Câble](/Cables_Cable/fr "Cables Cable/fr"), [Cables Boîte](/Cables_CableBox/fr "Cables CableBox/fr") |
|  |

## Description

![](/images/Cables_CableLightPoint.svg) Source lumineuse permet de créer un objet point lumineux paramétrique. La source lumineuse est un simple anneau symbolisant l'endroit où un câble sort, par exemple, du mur pour connecter une source lumineuse (par exemple, une lampe). Il a une taille par défaut lors de sa création, mais certains paramètres, comme **Diamètre**, **Hauteur** ou **Épaisseur** peuvent être modifiés plus tard. **Source lumineuse** appartient à la classe [Arch Composant](/Arch_Component/fr "Arch Component/fr") et hérite de toutes ses propriétés. **Source lumineuse** possède deux points de construction (un de chaque côté du trou) qui peuvent être utilisés comme supports de connexion pour un câble passant dans l'anneau.

Les points de construction sont à peine visibles par défaut, mais cela peut être modifié en augmentant la propriété d'affichage **Point Size**.

L'objet **Cable Light Point** peut être coloré en rattachant le [matétiau](/Arch_SetMaterial/fr "Arch SetMaterial/fr") désiré à la propriété **Material**.

![](/images/Cables_CableLightPoint_Example1.png)

Exemple de source lumineuse par défaut : il existe des points de construction au-dessus et au-dessous de l'anneau.

## Utilisation

1. Sélectionnez le sommet, le point sur la surface ou l'objet dans la [vue 3D](/3D_view/fr "3D view/fr") ou ne sélectionnez rien.
2. Créez une source lumineuse par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_CableLightPoint.svg) Cable Light Point.
   * Sélectionnez l'option **Cables → ![](/images/Cables_CableLightPoint.svg) Cable Light Point** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cables → ![](/images/Cables_CableLightPoint.svg) Cable Light Point** dans le menu contextuel.

Une fois créée, la source lumineuse est placée à la position du sommet, du point ou de l'objet sélectionné dans l'espace 3D (ou au point (0,0,0) si rien n'a été sélectionné).

## Remarques

Les points de construction sont toujours visibles. La visibilité peut être améliorée en augmentant la propriété de vue **Point Size**.

## Propriétés

Un objet **Cable Light Point** partage les propriétés communes et les comportements de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Cable Light Point

* Données**Diameter** (`Length`) : spécifie le diamètre extérieur de l'anneau. Le diamètre par défaut est de 20 mm.
* Données**Height** (`Length`) : spécifie la hauteur de l'anneau. La hauteur par défaut est de 5 mm.
* Données**Thickness** (`Length`) : spécifie l'épaisseur de la paroi de l'anneau. L'épaisseur par défaut est de 2 mm.

## Flux de travail typique

La construction d'une **source lumineuse** est très similaire à celle du [flux de travail typique d'une boîte](/Cables_CableBox/fr#Flux_de_travail_typique "Cables CableBox/fr") ou du [flux de travail typique d'un connecteur](/Cables_CableConnector/fr#Flux_de_travail_typique "Cables CableConnector/fr").

![](/images/Cables_CableLightPoint_Example2.png)

Exemple de câble terminé à l'intérieur d'une source lumineuse

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableLightPoint/fr&oldid=1557665>"