---
title: Std Apparence
---
|  |
| --- |
| Std Apparence |
| Emplacement du menu |
| Affichage → Définir l'apparence... |
| Ateliers |
| [Material](/Material_Workbench/fr "Material Workbench/fr"), [Part](/Part_Workbench/fr "Part Workbench/fr"), [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") et d'autres |
| Raccourci par défaut |
| Ctrl+D |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Matériau](/Std_SetMaterial/fr "Std SetMaterial/fr"), [Part Couleur par face](/Part_ColorPerFace/fr "Part ColorPerFace/fr") |
|  |

## Description

La commande **Std Apparence** définit les propriétés d'affichage des objets sélectionnés.

Cette page a été mise à jour pour la version 1.0.

![](/images/Std_SetAppearance_Taskpanel.png)

Le panneau des propriétés d'affichage

## Utilisation

1. Sélectionnez un ou plusieurs objets.
2. Il existe plusieurs façons de lancer la commande :
   * Sélectionnez l'option **Affichage → ![](/images/Std_SetAppearance.svg) Définir l'apparence...** du menu.
   * Sélectionnez l'option **![](/images/Std_SetAppearance.svg) Définir l'apparence...** dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").
   * Utilisez le raccourci clavier : Ctrl+D.
3. Le panneau de tâches **Propriétés d'affichage** s'ouvre. Voir [Options](#Options).
4. Modifiez une ou plusieurs propriétés.
5. Les objets sont mis à jour immédiatement.
6. Vous pouvez sélectionner un ou plusieurs nouveaux objets dont vous souhaitez modifier les propriétés.
7. Appuyez sur le bouton Fermer pour fermer le panneau des tâches et terminer la commande.

## Options

### Mode d'affichage

* Sélectionnez un Vue**Mode d'affichage** dans la liste déroulante. Les options disponibles sont : `Filaire ombré`, `Ombré` (pas pour les objets [Draft](/Draft_Workbench/fr "Draft Workbench/fr")), `Filaire` et `Points`. Voir la commande [Std Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") pour plus d'informations.

### Matériau

* Sélectionnez un matériau dans la liste.
  1. Vous pouvez sélectionner une catégorie dans la liste déroulante située sous la liste des matériaux pour filtrer ces derniers. Les catégories disponibles sont `Apparences de base`, `Apparences des textures` (ces matériaux ne sont pas encore disponibles) et `Tous les matériaux`.
  2. En option, appuyez sur le bouton Lancer l'éditeur pour lancer l'[éditeur de matériaux](/Material_Edit/fr "Material Edit/fr").
* **Apparence personnalisée :** appuyez sur le bouton ... pour remplacer l'apparence du matériau. La fenêtre de dialogue **Propriétés du matériau** s'ouvre. Voir [Part Couleur par face](/Part_ColorPerFace/fr#Utilisation "Part ColorPerFace/fr").
* **Couleur des courbes :** non pris en charge pour le moment.
* **Couleur des lignes :** définit la propriété Vue**Line Color**. Appuyez sur le bouton pour ouvrir la fenêtre de dialogue Sélectionner une couleur.
* **Couleur des points :** définit la propriété Vue**Point Color**. Cliquez sur le bouton pour ouvrir la fenêtre de dialogue Sélectionner la couleur.

### Affichage

* **Taille des points :** définit la propriété Vue**Point Size** (en pixels).
* **Largeur des lignes :** définit la propriété Vue**Line Width** (en pixels).
* **Transparence :** définit la propriété Vue**Transparency** (en pourcentage), 0% pour opaque, 100% pour entièrement transparent.
* **Transparence des lignes :** non pris en charge pour le moment.

## Remarques

* Les propriétés de vue mentionnées peuvent également être modifiées dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SetAppearance/fr&oldid=1541178>"