---
title: Draft Échelle
---
|  |
| --- |
| Draft Échelle |
| Emplacement du menu |
| Draft/BIM : Modification → Mettre à l'échelle |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| S C |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Surligner des sous éléments](/Draft_SubelementHighlight/fr "Draft SubelementHighlight/fr"), [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr") |
|  |

## Description

La commande ![](/images/Draft_Scale.svg) **Draft Échelle** met à l'échelle ou copie les objets sélectionnés autour d'un point de base. En mode sous-élément, la commande met à l'échelle les points et les arêtes sélectionnés de [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").

Cette commande peut être utilisée sur des objets 2D créés avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi sur de nombreux objets 3D tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Draft_Scale_example.png)

Mise à l'échelle d'un objet autour d'un point de base

## Usage

Voir aussi : [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Vous pouvez sélectionner un ou plusieurs objets, ou un ou plusieurs sous-éléments de [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").
2. Il existe plusieurs manières de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Scale.svg) Draft Mettre à l'échelle.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Modification → ![](/images/Draft_Scale.svg) Mettre à l'échelle** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Modification → ![](/images/Draft_Scale.svg) Mettre à l'échelle** du menu.
   * Utilisez le raccourci clavier : S puis C.
3. Si vous n'avez pas encore sélectionné d'objet : sélectionnez un objet dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Le panneau des tâches **Échelle** s'ouvre. Voir [Options](#Options) pour plus d'informations.
5. Si des sous-éléments ont été sélectionnés : cochez la case **Modifier les sous-éléments** pour activer le mode sous-élément.
6. Choisissez le point de base dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez des coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
7. Entrez les facteurs d'échelle X, Y et Z.
8. Appuyez sur Entrée ou sur le bouton OK pour terminer la commande.

## Options

### Premier panneau des tâches

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut.

* Pour saisir manuellement les coordonnées du point de base, saisissez les composantes X, Y et Z et appuyez sur Entrée après chacune. Ou vous pouvez appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyez sur G ou cochez la case **Global** pour basculer en mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées de [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyez sur le bouton Fermer pour annuler la commande.

### Deuxième panneau de tâches

* Entrez les facteurs X, Y et Z pour définir l'échelle. Les valeurs doivent être supérieures à zéro.
* Cochez la case **Mise à l'échelle uniforme** pour verrouiller les facteurs X, Y et Z sur la même valeur.
* Si la case **Orientation du plan de travail** est cochée, les facteurs d'échelle sont relatifs au système de coordonnées de [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr"), sinon ils sont relatifs au système de coordonnées global.
* Si la case **Copier** est cochée, une copie à l'échelle de l'objet d'origine est créée. Cela ne fonctionne que pour les objets Draft qui ont une propriété Données**Points**, tels que [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").
* Si la case **Modifier les sous-éléments** est cochée, la commande utilisera les sous-éléments sélectionnés au lieu de l'ensemble des objets. Les sous-éléments doivent appartenir à [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").
* Si la case **Créer un clone** est cochée, les [Draft Clones](/Draft_Clone/fr "Draft Clone/fr") des objets originaux sont créés. Cela fonctionne pour tous les types d'objets. Pour les objets qui ne sont pas des objets Draft ou pour les objets Draft qui n'ont pas de propriété Données**Points**, cette option *doit* être sélectionnée.
* Appuyez sur le bouton Sélectionnez à partir de/vers les points et sélectionnez deux points supplémentaires dans la [vue 3D](/3D_view/fr "3D view/fr") pour calculer les facteurs d'échelle. Cela cochera automatiquement la case **Mise à l'échelle uniforme**. Les facteurs d'échelle X, Y et Z seront donc égaux et seront réglés sur la distance entre le point de base et le point "à partir de" divisé par la distance entre le point de base et le point "vers".
* Appuyez sur Échap ou sur le bouton Annuler pour annuler la commande.

## Remarques

* La commande peut également mettre à l'échelle des [plans d'image](/Image_CreateImagePlane/fr "Image CreateImagePlane/fr") mais pas en mode clone.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Pour resélectionner les objets de base après avoir copié des objets : **Édition → Préférences... → Draft → Général → Sélectionner les objets de base après la copie**.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour mettre à l'échelle des objets, utilisez la méthode `scale` du module Draft.

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

* `objectslist` contient les objets à mettre à l'échelle. Il s'agit soit d'un objet unique, soit d'une liste d'objets.
* `scale` est le vecteur qui spécifie les facteurs d'échelle X, Y et Z.
* `center` est le point central de l'opération de mise à l'échelle.
* Si `copy` est `True`, des copies sont créées au lieu de mettre à l'échelle les objets originaux.
* `scaled_list` est retourné avec les objets originaux mis à l'échelle, ou avec les nouvelles copies. Il s'agit soit d'un objet unique, soit d'une liste d'objets, en fonction de `objectslist`.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/fr&oldid=1513966>"