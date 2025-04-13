---
title: Cables WireFlex
---
|  |
| --- |
| Cables WireFlex |
| Emplacement du menu |
| Cable Wires → New Wire Flex |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Ajouter un sommet](/Cables_AddVertex/fr "Cables AddVertex/fr"), [Cables Supprimer un sommet](/Cables_DelVertex/fr "Cables DelVertex/fr"), [Cables Attacher un sommet](/Cables_AttachVertex/fr "Cables AttachVertex/fr"), [Cables Supprimer la connexion d'un sommet](/Cables_RemoveVertexAttachment/fr "Cables RemoveVertexAttachment/fr") |
|  |

## Description

L'objet ![](/images/Cables_WireFlex.svg) WireFlex est dérivé d'une ![](/images/Draft_Wire.svg) [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") et hérite de toutes ses propriétés. La principale différence est que WireFlex est capable d'attacher chacun de ses sommets à un sommet ou à un objet externe (l'attachement à un objet est compris comme une connexion à sa Placement.Base). Il n'est pas nécessaire d'attacher tous les sommets, certains d'entre eux peuvent être laissés libres de bouger en fonction des besoins en cours.

Tous les sommets du WireFlex qui ne sont pas connectés à des sommets/objets externes peuvent être édités comme des sommets d'une **Draft Polyligne** avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") (il suffit de double-cliquer sur le WireFlex dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")). Voir [Remarques](#Remarques).

Certaines propriétés de WireFlex héritées de la **Draft Polyligne** sont cachées par défaut, en particulier la propriété **Fillet Radius**, qui peut être contrôlée à partir des propriétés du câble si WireFlex fait partie d'un [câble](/Cables_Cable/fr "Cables Cable/fr"). Il est fortement recommandé de définir le rayon du congé à la dernière étape de la création de WireFlex. Si vous le faites pendant l'édition du WireFlex, une erreur peut se produire : "*Not possible to modify WireFlex due to non zero Chamfer or Fillet or Subdivision*".

![](/images/Cables_WireFlex_Structure.png)

Exemple de structure de WireFlex

## Utilisation

1. Sélectionnez le premier sommet externe existant dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Sélectionnez d'autres sommets (un ou plusieurs) dans la [vue 3D](/3D_view/fr "3D view/fr") en maintenant la touche CTRL.
3. Créez un **WireFlex** par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_WireFlex.svg) WireFlex.
   * Sélectionnez l'option **Cable Wires → ![](/images/Cables_WireFlex.svg) WireFlex** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cable Wires → ![](/images/Cables_WireFlex.svg) WireFlex** dans le menu contextuel.

Remarque : la sélection d'éléments autres que les sommets est traitée comme une sélection de l'objet entier.

Après la création d'une polyligne, le premier sommet/objet sélectionné dans la vue 3D est automatiquement ajouté au support de connexion de la polyligne et la propriété Map Mode est réglée sur Translate origin (la description générale de l'attachement d'une pièce se trouve ici : [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr")). En outre, le même sommet/objet est ajouté à la propriété Vrtx\_start, le dernier sommet/objet sélectionné est ajouté à la propriété Vrtx\_end et les sommets/objets médians sélectionnés sont ajoutés à Vrtxs\_mid et Vrtxs\_mid\_idx en conséquence.

À tout moment, un sommet du WireFlex peut être détaché ou rattaché à un autre objet en utilisant ![](/images/Cables_AttachVertex.svg) [Attacher un sommet](/Cables_AttachVertex/fr "Cables AttachVertex/fr") ou ![](/images/Cables_RemoveVertexAttachment.svg) [Supprimer la connexion d'un sommet](/Cables_RemoveVertexAttachment/fr "Cables RemoveVertexAttachment/fr").

Il est conseillé d'expérimenter et de se familiariser avec les différentes options permettant de déplacer éventuellement des objets attachés à un câble et d'observer le comportement du câble en fonction du nombre et des sommets attachés à des objets externes et de l'activation ou de la désactivation de la propriété Map Mode pour l'ensemble du câble. Des possibilités encore plus intéressantes sont offertes en utilisant par exemple la ![](/images/Cables_SupportLine.svg) [ligne](/Cables_SupportLine/fr "Cables SupportLine/fr") ou le ![](/images/Cables_SupportPoint.svg) [point](/Cables_SupportPoint "Cables SupportPoint").

![](/images/Cables_WireFlex_Example1_static.png)

Exemple 1  
Mouvement du Cube1 qui est attaché au sommet WireFlex de départ lorsque le mode de mappage de l'attachement du WireFlex est réglé sur Translate origin.

![](/images/Cables_WireFlex_Example2_static.png)

Exemple 2  
Mouvement du Cube1 qui est attaché au sommet de départ du WireFlex lorsque le mode de mappage de l'attachement du WireFlex est désactivé.

La version animée des images ci-dessus est [ici](/Cables_Example2_WireFlex "Cables Example2 WireFlex").

## Remarques

* Un **WireFlex** peut être édité avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") (lancée en double-cliquant sur le WireFlex dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")). En mode **Draft Éditer**, N'UTILISEZ PAS les commandes « Ajouter un point » et « Supprimer un point » du menu contextuel. Cela peut entraîner une mauvaise affectation des connexions de points. Pour ajouter ou supprimer un point sur un WireFlex, utilisez uniquement ![](/images/Cables_AddVertex.svg) [Ajouter un point](/Cables_AddVertex/fr "Cables AddVertex/fr") ou ![](/images/Cables_DelVertex.svg) [Supprimer un point](/Cables_DelVertex/fr "Cables DelVertex/fr") lorsqu'il n'est pas en mode **Draft Éditer**.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Cables WireFlex** est dérivé d'une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") et hérite de toutes ses propriétés. Certaines des propriétés héritées sont cachées (voir [Description](#Description)). WireFlex possède également les propriétés supplémentaires suivantes :

### Données

Wire Flex

* Données**Vrtx\_start** (`LinkSub`) : spécifie le support de l'attachement pour le premier sommet (point) de la polyligne.
* Données**Vrtx\_end** (`LinkSub`) : spécifie le support de l'attachement pour le dernier sommet (point) de la polyligne.
* Données**Vrtxs\_mid** (`LinkSubList`) : spécifie la liste des supports de l'attachement pour les sommets (points) du milieu de la polyligne. Sommets du milieu : tous les sommets du câble à l'exception du premier et du dernier sommet.
* Données**Vrtxs\_mid\_idx** (`IntegerList`) : spécifie la liste des index de la liste des supports de l'attachement Vrtxs\_mid de la polyligne. Le numéro mid idx le plus bas peut avoir la valeur 2, le plus élevé peut avoir la valeur n-1, où n est le nombre de sommets (points) de la polyligne.

Il est recommandé de ne pas ajuster manuellement les propriétés ci-dessus, mais d'utiliser ![](/images/Cables_AttachVertex.svg) [Attacher un sommet](/Cables_AttachVertex/fr "Cables AttachVertex/fr") ou ![](/images/Cables_RemoveVertexAttachment.svg) [Supprimer la connexion d'un sommet](/Cables_RemoveVertexAttachment/fr "Cables RemoveVertexAttachment/fr") qui sont conçus à cet effet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_WireFlex/fr&oldid=1557676>"