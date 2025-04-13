---
title: Draft Proxy de plan de travail
---
|  |
| --- |
| Draft Proxy de plan de travail |
| Emplacement du menu |
| Draft/BIM : Utilitaires → Créer un proxy de plan de travail |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") |
|  |

## Description

La commande ![](/images/Draft_WorkingPlaneProxy.svg) **Draft Proxy de plan de travail** crée un proxy de plan de travail pour sauvegarder le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours. Un proxy proxy de plan de travail peut être utilisé pour restaurer rapidement un plan de travail. La position de la caméra et la visibilité des objets dans la [vue 3D](/3D_view/fr "3D view/fr") sont également enregistrées dans le proxy de plan de travail et peuvent, [accessoirement](#Propri.C3.A9t.C3.A9s), être restaurées également.

![](/images/Draft_WPProxy_example.png)

Trois proxy de plan de travail montrant différentes orientations et décalages

## Utilisation

1. Vous pouvez changer de [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
2. Vous pouvez changer de [Vue 3D](/3D_view/fr "3D view/fr").
3. Vous pouvez changer l'état de visibilité des objets dans le document.
4. Il existe plusieurs façons de lancer la commande :
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : appuyez sur le bouton ![](/images/Draft_WorkingPlaneProxy.svg) Créer un proxy de plan de travail.
   * Draft : sélectionnez l'option **Utilitaires → ![](/images/Draft_WorkingPlaneProxy.svg) Créer un proxy de plan de travail** du menu ou dans le menu contextuel de la [vue en arborescenceou](/Tree_view/fr "Tree view/fr") de la [vue 3D](/3D_view/fr "3D view/fr").
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : appuyez sur l'option **Utilitaires → ![](/images/Draft_WorkingPlaneProxy.svg) Créer un proxy de plan de travail** du menu.
5. Un proxy de plan de travail est créé.
6. Pour aligner le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") avec un proxy de plan de travail, double-cliquez sur le proxy de plan de travail dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") ou utilisez-le avec la commande [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").

## Menu contextuel

Pour un Draft Proxy de plan de travail, ces options supplémentaires sont disponibles dans le menu contextuel de la [Vue en arborescence](/Tree_view/fr "Tree view/fr") :

* **![](/images/Draft_SelectPlane.svg) Enregistrer la position de la caméra** : met à jour la propriété Vue**View Data** du proxy de plan de travail avec les paramètres de la caméra de la [vue 3D](/3D_view/fr "3D view/fr") en cours.
* **![](/images/Draft_SelectPlane.svg) Enregistrer l'état des objets** : met à jour la propriété Vue**Visibility Map** du proxy de plan de travail avec l'état de visibilité en cours des objets dans le document.

## Remarques

* Les proxies de plan de travail peuvent être [déplacés](/Draft_Move/fr "Draft Move/fr") et [pivotés](/Draft_Rotate/fr "Draft Rotate/fr") comme tout autre objet. Utiliser ![](/images/Draft_Snap_Center.svg) [Draft Aimantation Centre](/Draft_Snap_Center/fr "Draft Snap Center/fr") pour s'aimanter à leur point de Données**Placement**.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Proxy de plan de travail est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Placement** (`Placement`) : spécifie la position du proxy de plan de travail dans la [Vue 3D](/3D_view/fr "3D view/fr"). Voir [Placement](/Placement/fr "Placement/fr").
* Données (Hidden)**Shape** (`Shape`) : spécifie la forme du proxy de plan de travail.

### Vue

Base

* Vue**Line Color** (`Color`) : spécifie la couleur de tous les éléments du proxy de plan de travail.
* Vue**Line Width** (`Float`) : spécifie la largeur de ligne des axes et des symboles de flèches.
* Vue**Restore State** (`Bool`) : spécifie si la Vue**Visibility Map** est restaurée lorsque le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") est aligné avec le proxy de plan de travail.
* Vue**Restore View** (`Bool`) : spécifie si la Vue**View Data** est restaurée lorsque le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") est aligné sur le proxy de plan de travail.
* Vue**Transparency** (`Percent`) : spécifie la transparence de la face du proxy de plan de travail.
* Vue**View Data** (`FloatList`) : spécifie la position et les paramètres de la caméra.
* Vue (Hidden)**Visibility Map** (`Map`) : spécifie l'état de visibilité des objets.

Draft

* Vue**Arrow Size** (`Length`) : spécifie la taille des symboles de flèche affichés à l'extrémité des trois axes.
* Vue**Display Size** (`Length`) : spécifie la longueur et la largeur du proxy de plan de travail.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Proxy de plan de travail, utilisez la méthode `make_workingplaneproxy` du module Draft.

Si l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") est actif, l'objet de l'application FreeCAD possède une propriété `DraftWorkingPlane` qui stocke le plan de travail en cours. Le `Placement` de la méthode `getPlacement` de l'objet `DraftWorkingPlane` peut être utilisé pour créer un proxy de plan de travail aligné. Le `Placement` d'un proxy de plan de travail peut à son tour être utilisé pour réaligner le plan de travail.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

workplane = App.DraftWorkingPlane
place = workplane.getPlacement()

proxy = Draft.make_workingplaneproxy(place)
proxy.ViewObject.DisplaySize = 3000
proxy.ViewObject.ArrowSize = 200

axis2 = App.Vector(1, 1, 1)
point2 = App.Vector(3000, 0, 0)
place2 = App.Placement(point2, App.Rotation(axis2, 90))

proxy2 = Draft.make_workingplaneproxy(place2)
proxy2.ViewObject.DisplaySize = 3000
proxy2.ViewObject.ArrowSize = 200

workplane.setFromPlacement(proxy2.Placement, rebase=True)
Gui.Snapper.setGrid()

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WorkingPlaneProxy/fr&oldid=1475712>"