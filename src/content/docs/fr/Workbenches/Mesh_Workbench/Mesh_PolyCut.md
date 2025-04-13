---
title: Mesh Couper le maillage
---
|  |
| --- |
| Mesh Couper un maillage |
| Emplacement du menu |
| Maillages → Couper → Couper le maillage |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Ajuster](/Mesh_PolyTrim/fr "Mesh PolyTrim/fr"), [Mesh Ajuster par plan](/Mesh_TrimByPlane/fr "Mesh TrimByPlane/fr") |
|  |

## Description

La commande **Couper un maillage** coupe des faces entières à partir d'objets maillés.

## Utilisation

1. Pendant la commande, la [vue 3D](/3D_view/fr "3D view/fr") ne peut pas être modifiée. Il est conseillé d'aligner correctement la vue 3D en premier.
2. Sélectionnez un ou plusieurs objets maillés.
3. Il existe plusieurs manières de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_PolyCut.svg) Couper le maillage.
   * Sélectionnez l'option **Maillages → Couper → ![](/images/Mesh_PolyCut.svg) Couper la maillage** du menu.
4. Définissez un polygone en sélectionnant des points dans la vue 3D.
5. Sélectionnez une option dans le menu contextuel de la vue 3D :
   * **Intérieur** : supprime les faces qui sont (partiellement) à l'intérieur du polygone.
   * **Extérieur** : supprime les faces qui sont complètement à l'extérieur du polygone.
   * **Recomposer** : supprime les faces qui sont complètement à l'extérieur du polygone et crée un nouvel objet maillé les contenant.
   * **Annuler** : annule la commande.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_PolyCut/fr&oldid=1333661>"