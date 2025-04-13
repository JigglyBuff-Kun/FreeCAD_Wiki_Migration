---
title: Cables Attacher un sommet
---
|  |
| --- |
| Cables Attacher un sommet |
| Emplacement du menu |
| Cable Wires → Add Vertex |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Supprimer la connexion d'un sommet](/Cables_RemoveVertexAttachment/fr "Cables RemoveVertexAttachment/fr") |
|  |

## Description

![](/images/Cables_AttachVertex.svg) Attacher un sommet permet de connecter un sommet existant d'un ![](/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") à un sommet ou un objet externe. Les connexions des sommets sont conservées dans des propriétés spéciales du WireFlex, pour plus de détails voir les [propriétés du WireFlex](/Cables_WireFlex/fr#Propriétés "Cables WireFlex/fr").

Une fois connecté, le sommet de la polyligne conserve la même position dans l'espace 3D que le sommet externe auquel il est connecté. Lorsque le sommet externe est déplacé, le sommet de fil attaché se déplace avec lui. Lorsque la polyligne est éditée par [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr"), le sommet attaché ne peut pas être déplacé. Il revient à sa position d'attache.

## Utilisation

1. Sélectionnez un sommet d'un objet [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") existant dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Sélectionnez un sommet externe dans la [vue 3D](/3D_view/fr "3D view/fr") en maintenant la touche CTRL.
3. Créez une **connexion de sommets** de WireFlex par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_AttachVertex.svg) Attach Vertex.
   * Sélectionnez l'option **Cable Wires → ![](/images/Cables_AttachVertex.svg) Attach Vertex** du menu.
   * Cliquez avec le bouton droit de la souris dans la la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cable Wires → ![](/images/Cables_AttachVertex.svg) Attach Vertex** dans le menu contextuel.

Remarque : la sélection d'éléments externes autres que les sommets est traitée comme une sélection de l'objet entier. La connexion à l'objet est considérée comme une connexion à sa Placement.Base.

## Remarques

* Voir la [description du WireFlex](/Cables_WireFlex/fr#Description "Cables WireFlex/fr") et l'[utilisation du WireFlex](/Cables_WireFlex/fr#Utilisation "Cables WireFlex/fr") pour plus de détails sur l'utilisation de WireFlex.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_AttachVertex/fr&oldid=1557674>"