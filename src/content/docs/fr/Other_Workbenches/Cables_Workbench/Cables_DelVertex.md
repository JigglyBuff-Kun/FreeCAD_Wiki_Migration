---
title: Cables Supprimer un sommet
---
|  |
| --- |
| Cables Supprimer un sommet |
| Emplacement du menu |
| Cable Wires → Delete Vertex |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Ajouter un sommet](/Cables_AddVertex/fr "Cables AddVertex/fr") |
|  |

## Description

![](/images/Cables_DelVertex.svg) Ajouter un sommet supprime un sommet existant de l'objet ![](/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr"). Il préserve la bonne affectation des connexions existantes des sommets du câble. Il doit être utilisé à la place de la commande « Supprimer un point » de [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr"), voir la [description de WireFlex](/Cables_WireFlex/fr#Description "Cables WireFlex/fr").

## Utilisation

1. Sélectionnez une arête d'un objet [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") existant dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Supprimez un sommet sélectionné de **WireFlex** par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_DelVertex.svg) Delete Vertex.
   * Sélectionnez l'option **Cable Wires → ![](/images/Cables_DelVertex.svg) Delete Vertex** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cable Wires → ![](/images/Cables_DelVertex.svg) Delete Vertex** dans le menu contextuel.

Seuls les sommets intermédiaires peuvent être supprimés à l'aide de cet outil. Le premier et le dernier sommet (Vrtx\_start et Vrtx\_end) ne peuvent pas être supprimés. La position des sommets restants peut être modifiée ultérieurement avec la commande [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") ou connectée à d'autres objets avec ![](/images/Cables_AttachVertex.svg) [Attacher un sommet](/Cables_AttachVertex/fr "Cables AttachVertex/fr").

## Remarques

* Voir la [description du WireFlex](/Cables_WireFlex/fr#Description "Cables WireFlex/fr") et l'[utilisation du WireFlex](/Cables_WireFlex/fr#Utilisation "Cables WireFlex/fr") pour plus de détails sur l'utilisation de WireFlex.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_DelVertex/fr&oldid=1557663>"