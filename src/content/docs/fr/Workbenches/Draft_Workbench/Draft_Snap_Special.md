---
title: Draft Aimantation Spécial
---
|  |
| --- |
| Draft Aimantation Spécial |
| Emplacement du menu |
| Aimantation → Aimanter à des points spéciaux |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"), [Draft Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") |
|  |

## Description

L'option ![](/images/Draft_Snap_Special.svg) **Draft Aimantation Spécial** permet de s'aimanter à des [points spéciaux](#Points_sp.C3.A9ciaux_accept.C3.A9s) définis par l'objet. Les objets acceptés sont les [Arch Murs](/Arch_Wall/fr "Arch Wall/fr"), les [Arch Structures](/Arch_Structure/fr "Arch Structure/fr") et les [Arch Equipements](/Arch_Equipment/fr "Arch Equipment/fr").

![](/images/Draft_Snap_Special_example.png)

Aimantation du deuxième point d'une ligne à un point spécial d'un Arch mur, qui est un sommet de son objet Base

## Utilisation

Pour des informations générales sur l'aimantation voir [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").

1. Assurez-vous que l'aimantation est activé. Voir ![](/images/Draft_Snap_Lock.svg). [Draft Verrouillage de l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr").
2. Si **Draft Aimantation Spécial** n'est pas actif, faites l'une des choses suivantes :
   * Appuyez sur le bouton ![](/images/Draft_Snap_Special.svg) Aimanter à des points spéciaux de la barre d'outils Draft Aimantation.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : maintenez le bouton ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) du [Draft Widget d'aimantation](/Draft_snap_widget/fr "Draft snap widget/fr") et dans le menu qui s'ouvre, sélectionnez l'option **![](/images/Draft_Snap_Special.svg) Aimanter à des points spéciaux**.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Aimantation → ![](/images/Draft_Snap_Special.svg) Aimanter à des points spéciaux** du menu ou dans le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").
3. Choisissez une commande de Draft et de BIM pour créer votre géométrie.
4. Notez que vous pouvez également modifier les options d'aimantation lorsqu'une commande est active.
5. Déplacez le curseur sur un objet pris en charge.
6. L'objet est mis en évidence.
7. Si un point spécial est trouvé, il est marqué et l'icône ![](/images/Draft_Snap_Special.svg) s'affiche près du curseur.
8. Si l'objet a plusieurs points spéciaux : rapprochez éventuellement le curseur d'un autre point spécial.
9. Cliquez pour confirmer le point.

## Points spéciaux acceptés

* Les sommets de l'objet Données**Base** des ![](/images/Arch_Wall.svg) [Arch Murs](/Arch_Wall/fr "Arch Wall/fr").
* Le point Données**Placement** des ![](/images/Arch_Structure.svg) [Arch Structures](/Arch_Structure/fr "Arch Structure/fr").
* Les Données**Snap Points** des ![](/images/Arch_Equipment.svg) [Arch Equipements](/Arch_Equipment/fr "Arch Equipment/fr").

## Préférences

Voir [Draft Préférences](/Draft_Snap/fr#Pr.C3.A9f.C3.A9rences "Draft Snap/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Special/fr&oldid=1518916>"