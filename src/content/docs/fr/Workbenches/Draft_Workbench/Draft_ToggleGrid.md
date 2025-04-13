---
title: Draft Basculer la grille
---
|  |
| --- |
| Draft Basculer la grille |
| Emplacement du menu |
| Draft : Utilitaires → Activer/désactiver la grille  BIM : Aimantation → Activer/désactiver la grille |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| G R |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr"), [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") |
|  |

## Description

La commande ![](/images/Draft_ToggleGrid.svg) **Draft Basculer la grille** change la visibilité de la grille.

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : chaque [vue 3D](/3D_view/fr "3D view/fr") possède sa propre grille qui peut être soit toujours visible, soit visible uniquement pendant les commandes, soit invisible. La visibilité initiale de la grille dans les nouvelles vues dépend des [préférences](#Préférences).

## Utilisation

1. La commande peut être utilisée lorsqu'une autre commande est active.
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_ToggleGrid.svg) Activer/désactiver la grille dans la barre d'outils Draft Aimantation.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : appuyez sur le le bouton ![](/images/Draft_ToggleGrid.svg) Activer/désactiver la grille du [Draft Widget d'aimantation](/Draft_snap_widget/fr "Draft snap widget/fr").
   * Draft : sélectionnez l'option **Utilitaires → ![](/images/Draft_ToggleGrid.svg) Activer/désactiver la grille** du menu ou dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr").
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Aimantation → ![](/images/Draft_ToggleGrid.svg) Activer/désactiver la grille** du menu ou dans le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").
   * Utilisez le raccourci clavier : G puis R. Ce raccourci ne peut pas être utilisé si une autre commande est active.
3. La visibilité de la grille appartenant à la vue 3D courante a changé :
   * Si aucune autre commande n'est active :
     + Si la grille était invisible, elle est maintenant toujours visible.
     + Si la grille était visible, elle ne l'est plus, mais la visibilité de la grille pendant les commandes reste inchangée.
   * Si une autre commande est active :
     + Si la grille était invisible, elle n'est plus visible que pendant les commandes.
     + Si la grille était visible, elle n'est plus visible pendant les commandes et n'est plus visible de mnaière permanente.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Plusieurs préférences de grille sont disponibles : **Édition → Préférences... → Draft → Grille et aimantation → Grille**.
* Pour conserver la grille lorsque vous passez à d'autres ateliers, voir [Réglage fin](/Fine-tuning/fr#Atelier_Draft "Fine-tuning/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleGrid/fr&oldid=1475677>"