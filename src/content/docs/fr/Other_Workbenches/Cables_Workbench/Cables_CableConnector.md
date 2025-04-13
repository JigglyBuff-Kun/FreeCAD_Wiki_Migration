---
title: Cables Connecteur
---
|  |
| --- |
| Cables Connecteur |
| Emplacement du menu |
| Cables → Cable Connector |
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

![](/images/Cables_CableConnector.svg) Connecteur crée un objet connecteur paramétrique. Le connecteur est un modèle de bloc métallique conducteur d'électricité (pour simplifier, sans isolation externe). D'un point de vue électrique, tous les fils connectés à un connecteur forment un nœud électrique. Le connecteur a une taille par défaut lors de sa création, mais certains paramètres, comme **Hauteur**, **Trou**, **Diamètre du trou** ou **Nombre de trous** peuvent être modifiés plus tard. Le **connecteur** appartient à la classe [Arch Composant](/Arch_Component/fr "Arch Component/fr") et hérite de toutes ses propriétés. Le **connecteur** possède un nombre paramétrique de trous équipés de points de construction. Chaque trou possède deux points de construction (un de chaque côté du trou) qui peuvent être utilisés comme supports d'attache pour les fils passant par le trou.

Les points de construction sont à peine visibles par défaut, mais cela peut être modifié en augmentant la propriété d'affichage **Point Size**.

L'objet **Cable Connector** peut être coloré en rattachant le [matétiau](/Arch_SetMaterial/fr "Arch SetMaterial/fr") désiré à la propriété **Material**.

![](/images/Cables_CableConnector_Example1.png)

Exemple de connecteur par défaut : il existe des points de construction au-dessus et au-dessous de l'anneau.

## Utilisation

1. Sélectionnez le sommet, le point sur la surface ou l'objet dans la [vue 3D](/3D_view/fr "3D view/fr") ou ne sélectionnez rien.
2. Créez un connecteur par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_CableConnector.svg) Cable Connector.
   * Sélectionnez l'option **Cables → ![](/images/Cables_CableConnector.svg) Cable Connector** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cables → ![](/images/Cables_CableConnector.svg) Cable Connector** dans le menu contextuel.

Une fois créée, le connecteur est placé à la position du sommet, du point ou de l'objet sélectionné dans l'espace 3D (ou au point (0,0,0) si rien n'a été sélectionné).

## Remarques

Les points de construction sont toujours visibles. La visibilité peut être améliorée en augmentant la propriété de vue **Point Size**.

## Propriétés

Un objet **Cable Connector** partage les propriétés communes et les comportements de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Cable Connector

* Données**Height** (`Length`) : spécifie la hauteur du connecteur. La hauteur par défaut est de 5 mm.
* Données**Height** (`Length`) : spécifie la taille des trous en mm2. La taille des trous par défaut est de 2 mm2.
* Données**Number of Holes** (`Integer`) : spécifie le nombre de trous. Par défaut, il y a 3 trous.
* Données**Thickness** (`Length`) : Spécifie l'épaisseur de la paroi entre le trou et la surface externe du connecteur. L'épaisseur par défaut est de 1 mm.

## Flux de travail typique

Ce flux de travail montre comment construire un connecteur, une boîte à câble, un câble et comment un sous-fil du câble peut être passé à travers l'un des trous du connecteur.

1. Créez une **boîte** et un **câble** qui lui est attaché comme décrit dans [Flux de travail typique de la boîte](/Cables_CableBox/fr#Flux_de_travail_typique "Cables CableBox/fr").
2. Sélectionnez **Cable Box** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et créez un **connecteur** comme décrit dans [Utilisation](#Utilisation).
3. Attachez le **connecteur** à la **boîte** en le définissant le Map Mode à Attachment Support et Object's XY.
4. Déplacez le **connecteur** à la position souhaitée en utilisant la propriété Position in Attachment Offset.
5. Assurez-vous que la propriété **Sub Wires Fillet Radius** d'un **Cable** est réglée sur 0 mm.
6. Cachez les formes **Cable Box** et **Cable** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), par exemple en appuyant sur la touche Espace. Les fils secondaires du câble doivent être encore visibles.
7. Attachez l'extrémité du plus long sous-fil créé à l'étape 1 au point de construction supérieur du premier trou du **connecteur**.
8. Attachez l'avant-dernière point du même fil secondaire au point de construction inférieur du premier trou du **connecteur**.
9. Lorsque la forme désirée du sous-fil a été construite, la propriété **Sub Wires Fillet Radius** d'un **câble** peut être réglée, par exemple, à 4mm.
10. Faites apparaître les formes **Cable** et **Cable Box** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), par exemple en appuyant sur la touche Espace.

![](/images/Cables_CableConnector_Example2_static.png)

Exemple de sous-câble passé dans le trou du connecteur

[Voici l'image animée](/Cables_Example4_CableConnector "Cables Example4 CableConnector") montrant les étapes décrites ci-dessus.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableConnector/fr&oldid=1557667>"