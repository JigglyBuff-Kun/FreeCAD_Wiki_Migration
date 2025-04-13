---
title: Draft Basculer en mode construction
---
|  |
| --- |
| Draft Basculer en mode construction |
| Emplacement du menu |
| Utilitaires → Basculer en mode construction |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| Draft : C M |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Ajouter au groupe de construction](/Draft_AddConstruction/fr "Draft AddConstruction/fr"), [Draft Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr") |
|  |

## Description

La commande ![](/images/Draft_ToggleConstructionMode.svg) **Draft Basculer en mode construction** active ou désactive le mode de construction de Draft. Si le mode construction est activé, les nouveaux objets [Draft](/Draft_Workbench/fr "Draft Workbench/fr") sont placés dans un groupe dédié et reçoivent une couleur prédéfinie. Cette fonction est destinée à la géométrie de construction, souvent temporaire, utilisée pour fournir de nouveaux [points d'aimantation](/Draft_Snap/fr "Draft Snap/fr") pour la création d'autres objets. Lorsque la géométrie de construction n'est plus nécessaire, le groupe de construction peut facilement être [caché](/Std_HideSelection/fr "Std HideSelection/fr") ou [effacé](/Std_Delete/fr "Std Delete/fr").

![](/images/Draft_construction_mode_example.jpg)

Géométrie de construction, en bleu, utilisée pour déterminer le centre et le rayon d'un cercle

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_tray_button_construction.png) de la [Draft Barre](/Draft_Tray/fr "Draft Tray/fr"). Ce bouton est activé si le mode de construction Draft est en cours.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Utilitaires → ![](/images/Draft_ToggleConstructionMode.svg) Basculer en mode construction** du menu ou dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr").
   * Draft: utilisez le raccourci clavier : C puis M.
2. Le bouton de la [Draft Barre](/Draft_Tray/fr "Draft Tray/fr") est mis à jour.

## Remarques

* Si le mode de construction Draft est activé, le [calque](/Draft_Layer/fr "Draft Layer/fr") actif est ignoré.

## Préférences

* Pour modifier l'étiquette du groupe de construction : **Édition → Préférences... → Draft → Général → Étiquette du groupe de construction**.
* Pour modifier la couleur utilisée : **Édition → Préférences... → Draft → Général → Couleur de la géométrie de construction**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleConstructionMode/fr&oldid=1547841>"