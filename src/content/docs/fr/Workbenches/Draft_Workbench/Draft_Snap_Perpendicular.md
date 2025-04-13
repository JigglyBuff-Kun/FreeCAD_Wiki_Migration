---
title: Draft Aimantation Perpendiculaire
---
|  |
| --- |
| Draft Aimantation Perpendiculaire |
| Emplacement du menu |
| Aimantation → Aimanter à la perpendiculaire |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"), [Draft Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") |
|  |

## Description

L'option ![](/images/Draft_Snap_Perpendicular.svg) **Draft Aimantation Perpendiculaire** permet de s'aimanter aux projections perpendiculaires d'un point précédent sur les faces. ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et les arêtes. Les faces et les arêtes peuvent appartenir à des objets de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou de [BIM](/BIM_Workbench/fr "BIM Workbench/fr") mais aussi à des objets créés avec d'autres [ateliers](/Workbenches/fr "Workbenches/fr").

Cette option d'aimantation permet également de trouver des points sur des faces et des arêtes étendues.

![](/images/Draft_Snap_Perpendicular_example.png)

Aimantation du deuxième point d'une ligne au point perpendiculaire sur une arête étendue

## Utilisation

Pour des informations générales sur l'aimantation voir [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").

1. Assurez-vous que l'aimantation est activé. Voir ![](/images/Draft_Snap_Lock.svg) [Draft Verrouillage de l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr").
2. Si **Draft Aimantation Perpendiculaire** n'est pas actif, faites l'une des choses suivantes :
   * Appuyez sur le bouton ![](/images/Draft_Snap_Perpendicular.svg) Aimanter à la perpendiculaire de la barre d'outils Draft Aimantation.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : maintenez le bouton ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) du [Draft Widget d'aimantation](/Draft_snap_widget/fr "Draft snap widget/fr") et dans le menu qui s'ouvre, sélectionnez l'option **![](/images/Draft_Snap_Perpendicular.svg) Aimanter à la perpendiculaire**.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Aimantation → ![](/images/Draft_Snap_Perpendicular.svg) Aimanter à la perpendiculaire** du menu ou dans le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").
3. Choisissez une commande de Draft et de BIM pour créer votre géométrie.
4. Notez que vous pouvez également modifier les options d'aimantation lorsqu'une commande est active.
5. Choisissez un premier point. Cette option d'aimantation nécessite un point précédent. Le point perpendiculaire sera déterminé par rapport à ce point.
6. Déplacez le curseur sur une face ou un bord.
7. La face ou l'arête est mise en évidence.
8. Si un point perpendiculaire est trouvé, le point est marqué et l'icône ![](/images/Draft_Snap_Perpendicular.svg) est affichée près du curseur.
9. S'il y a plusieurs points perpendiculaires : déplacez éventuellement le curseur vers un autre point perpendiculaire. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
10. Cliquez pour confirmer le point.

## Préférences

Voir [Draft Préférences](/Draft_Snap/fr#Pr.C3.A9f.C3.A9rences "Draft Snap/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Perpendicular/fr&oldid=1518922>"