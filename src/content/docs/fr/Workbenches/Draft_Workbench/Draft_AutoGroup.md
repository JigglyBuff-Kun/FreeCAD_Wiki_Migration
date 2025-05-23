---
title: Draft Grouper automatiquement
---
|  |
| --- |
| Draft Grouper automatiquement |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Draft Calque](/Draft_Layer/fr "Draft Layer/fr"), [Std Créer un groupe](/Std_Group/fr "Std Group/fr") |
|  |

## Description

La commande **Draft Grouper automatiquement** modifie le [Draft Calque](/Draft_Layer/fr "Draft Layer/fr") actif ou, [éventuellement](#Pr.C3.A9f.C3.A9rences), l'objet actif [Std Groupe](/Std_Group/fr "Std Group/fr") ou similaire aux objets groupe de [BIM](/BIM_Workbench/fr "BIM Workbench/fr"). Les nouveaux objets de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") et de [BIM](/BIM_Workbench/fr "BIM Workbench/fr") sont automatiquement placés dans ce calque ou groupe actif.

Cette commande était à l'origine destinée aux groupes, d'où son nom, mais a été remaniée dans la version 0.19 de FreeCAD lorsqu'un système de calques a été introduit. Comme la gestion des calques est maintenant la valeur par défaut de la commande, le reste de cette page se concentrera principalement sur les calques.

![](/images/Draft_Tray_Menu.png)

Le menu des calques de la barre Draft (image mise à jour pour la version 1.1)

## Utilisation

1. Vous pouvez sélectionner le calque que vous voulez rendre actif dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_tray_button_layer.png) dans la [Draft Barre](/Draft_Tray/fr "Draft Tray/fr"). Ce bouton peut avoir un aspect différent. S'il y a un calque actif, il affichera le nom du calque et une icône de calque avec la couleur de la ligne et de la face du calque.
   * Si vous avez sélectionné un calque : sélectionnez l'option **![](/images/Button_right.svg) Activer ce calque** du menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Si vous n'avez pas encore sélectionné de calque, le menu des calques s'ouvre. Effectuez l'une des opérations suivantes :
   * Sélectionnez **![](/images/Button_invalid.svg) Aucun** pour travailler sans calque actif.
   * Sélectionnez un calque existant pour le rendre actif.
   * Sélectionnez **![](/images/Draft_NewLayer.svg) Créer un nouveau calque...** pour créer un nouveau calque :
     1. La fenêtre de dialogue **Créer un nouveau calque** s'ouvre. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
     2. Entrez un **Nom du calque**.
     3. Appuyez sur le bouton OK.
     4. Le nouveau calque est activé. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
4. Si le calque active a été modifiée, le bouton de la [Draft Barre](/Draft_Tray/fr "Draft Tray/fr") est mis à jour.

## Remarques

* Un nouveau [calque](/Draft_Layer/fr "Draft Layer/fr") peut également être créé en cliquant avec le bouton droit de la souris sur le conteneur de calque dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et en sélectionnant l'option **![](/images/Draft_NewLayer.svg) Ajouter un nouveau calque** dans le menu contextuel.
* Si [Draft Basculer en mode construction](/Draft_ToggleConstructionMode/fr "Draft ToggleConstructionMode/fr") est activé, le [calque](/Draft_Layer/fr "Draft Layer/fr") actif est ignoré.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Cette commande peut éventuellement gérer aussi les groupes : **Édition → Préférences... → Draft → Général → Inclure les groupes dans la liste des calques**.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Si l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") est actif, l'objet d'application FreeCADGui possède une propriété `draftToolBar`. Cet objet `draftToolBar` a une propriété `autogroup`, qui contient le nom de l'autogroupe actif, ou est `None` si aucun autogroupe n'est actif. Pour modifier l'autogroupe actif, utilisez la méthode `setAutoGroup` de l'objet `draftToolBar`. Pour placer des objets dans l'autogroupe actif, utilisez la méthode `autogroup` du module Draft.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

layer = Draft.make_layer()
Gui.draftToolBar.setAutoGroup(layer.Name)

Draft.autogroup(polygon1)
Draft.autogroup(polygon2)
Draft.autogroup(polygon3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_AutoGroup/fr&oldid=1550600>"