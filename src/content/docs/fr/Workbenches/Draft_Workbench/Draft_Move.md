---
title: Draft Déplacer
---
|  |
| --- |
| Draft Déplacer |
| Emplacement du menu |
| Draft/BIM : Modification → Déplacer |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| M V |
| Introduit dans la version |
| 0.7 |
| Voir aussi |
| [Draft Surligner des sous éléments](/Draft_SubelementHighlight/fr "Draft SubelementHighlight/fr") |
|  |

## Description

La commande ![](/images/Draft_Move.svg) **Draft Déplacer** déplace ou copie les objets sélectionnés d'un point à un autre. En mode sous-élément, la commande déplace les points et les bords sélectionnés ou copie les bords sélectionnés des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").

Cette commande peut être utilisée sur des objets 2D créés avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi sur de nombreux objets 3D tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Draft_Move_example.jpg)

Déplacer un objet d'un point à un autre

## Utilisation

Voir aussi : [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Vous pouvez sélectionné un ou plusieurs objets, ou un ou plusieurs sous-éléments de [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le ![](/images/Draft_Move.svg) Déplacer.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Modification → ![](/images/Draft_Move.svg) Déplacer** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Modification → ![](/images/Draft_Move.svg) Déplacer** du menu.
   * Utiliser le raccourci clavier : M puis V.
3. Si vous n'avez pas encore sélectionné d'objet : sélectionner un objet dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Le panneau de tâches **Déplacer** s'ouvre. Voir [Options](#Options) pour plus d'informations.
5. Si des sous-éléments ont été sélectionnés : cocher la case **Modifier les sous-éléments** pour activer le mode sous-élément.
6. Choisir le premier point, le point de base, dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
7. Choisir le deuxième point, le point cible, dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut (pour la version 1.0).

* Pour saisir manuellement des coordonnées, entrer les valeurs X, Y et Z et appuyez sur Entrée après chaque valeur ou appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Pour utiliser des coordonnées polaires, entrez une valeur pour la **Longueur** et une valeur pour l'**Angle** et appuyez sur Entrée après chacune d'elles.
* Cocher la case **Angle** pour contraindre le pointeur à l'angle spécifié.
* Appuyer sur L pour faire passer le curseur de **X** à **Longueur** et inversement. Selon la saisie, la case **Angle** est cochée ou décochée.
* Appuyer sur R ou cliquez sur la case **Relatif** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées du deuxième point sont relatives au premier point, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyer sur G ou cliquez sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyer sur N ou cliquez sur la case **Continuer** pour activer le mode continu. Si le mode continu est activé, la commande redémarre après avoir été terminée. Ce mode n'a vraiment de sens que si le mode copie est activé. En fonction de la préférence **Sélectionner les objets de base après la copie**, soit les objets originaux sont sélectionnés pour le prochain appel de la commande, soit les copies créées en dernier. Voir [Préférences](#Préférences).
* Appuyer sur C ou cliquez sur la case **Copier** pour activer le mode copie. Si le mode copie est activé, la commande créera des copies déplacées au lieu de déplacer les objets originaux.
* Appuyer sur B ou cliquez sur la case **Modifier les sous-éléments** pour faire basculer le mode sous-élément. Si le mode sous-élément est activé, la commande utilisera les sous-éléments sélectionnés au lieu des objets entiers. Les sous-éléments doivent appartenir à [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr").
* Si le mode copie et le mode sous-élément sont tous deux activés et que les bords de [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") sont sélectionnés, de nouveaux fils seront créés à partir de ces bords.
* En maintenant la touche Alt enfoncée après avoir choisi le point de base, vous basculerez également en mode copie. Pendant que vous maintenez la touche Alt enfoncée, vous pouvez choisir plusieurs points cibles. Relâchez Alt pour terminer la commande et voir les copies créées.
* Appuyer sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyer sur Échap ou sur le bouton Fermer pour abandonner la commande.

## Remarques

* Un objet [ancré](/Part_EditAttachment/fr "Part EditAttachment/fr") ne peut pas être déplacé avec la commande Draft Déplacer. Pour le déplacer, il faut soit déplacer son objet Données**Support**, soit modifier son Données**Attachment Offset**.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Pour changer le but initial du panneau des tâches de la boîte de saisie **Longueur** : **Édition → Préférences... → Draft → Général → Mettre l’accent sur la longueur plutôt que la coordonnée X**. Notez que vous devez déplacer le pointeur dans la [vue 3D](/3D_view/fr "3D view/fr") pour que la modification prenne effet.
* Pour resélectionner les objets de base après avoir copié des objets : **Édition → Préférences... → Draft → Général → Sélectionner les objets de base après la copie**.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour déplacer des objets, utilisez la méthode `move` du module Draft.

```
moved_list = move(objectslist, vector, copy=False)

```

* `objectslist` contient les objets à déplacer. Il s'agit soit d'un objet unique, soit d'une liste d'objets.
* `vector` est le déplacement.
* Si `copy` est `True`, des copies sont créées au lieu de déplacer les objets originaux.
* `moved_list` est retourné avec les objets originaux déplacés, ou avec les nouvelles copies. Il s'agit soit d'un objet unique, soit d'une liste d'objets, en fonction de `objectslist`.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/fr&oldid=1513986>"