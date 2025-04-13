---
title: Std Créer un sous-lien
---
|  |
| --- |
| Std Créer un sous-lien |
| Emplacement du menu |
| Aucun |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Std Part](/Std_Part/fr "Std Part/fr"), [Std Groupe](/Std_Group/fr "Std Group/fr"), [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr") |
|  |

## Description

![](/images/Std_LinkMakeRelative.svg) Std Créer un sous-lien crée un [App Link](/App_Link/fr "App Link/fr") (classe `App::Link`), tout comme ![](/images/Std_LinkMake.svg) [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr") mais il fonctionne d'abord sur les sous-éléments sélectionnés et définit Données**Link Transform** sur `true`.

## Utilisation

Avec sélection :

1. Sélectionnez un sous-élément dans la [vue 3D](/3D_view/fr "3D view/fr"), c'est à dire un sommet, une arête ou une face ou toute combinaison de ceux-ci. Ces sous-éléments doivent appartenir à un seul objet.
2. Appuyez sur le bouton ![](/images/Std_LinkMakeRelative.svg) Std Créer un sous-lien. L'objet crée a la même icône que l'objet d'origine mais a deux flèches superposées indiquant qu'il s'agit d'un lien relatif.

Sans sélection :

* Si aucun objet n'est sélectionné, cette commande ne fait rien.
* Si un objet est sélectionné uniquement dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), mais qu'aucun sous-élément n'est sélectionné dans la [vue 3D](/3D_view/fr "3D view/fr"), la commande ne fait rien non plus.

![](/images/Std_Link_tree_sublink_example.png) ![](/images/Std_Link_sublink_example.png)

Corps d'origine et trois liens créés à partir de ses sous-éléments, y compris les arêtes et les faces.

## Propriétés

Cette commande crée un nouveau [App Link](/App_Link/fr "App Link/fr"). Ses propriétés sont décrites dans ![](/images/Std_LinkMake.svg) [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr").

En particulier, Données**Link Transform** est défini sur `true`, donc Données**Placement** devient masqué et à la place Données**Link Placement** contrôle la position du lien par rapport à la position de Données**Linked Object**.

## Script

Voir [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr") pour les informations générales.

Un App Link est créé avec la méthode `addObject()` du document. Pour définir un lien relatif, sa méthode `setLink` est utilisée pour sélectionner l'objet source et un ou plusieurs de ses sous-éléments. Ensuite, l'attribut `LinkTransform` est défini sur `True`.

```
import FreeCAD as App

doc = App.newDocument()
body = App.ActiveDocument.addObject("Part::Box", "Box")

obj = App.ActiveDocument.addObject("App::Link", "Link")
obj.setLink(body, '', ['Edge1', 'Edge6', 'Edge7', 'Edge10', 'Face2', 'Face3'])
obj.LinkTransform = True
obj.LinkPlacement.Base = App.Vector(20, 20, 0)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMakeRelative/fr&oldid=1395770>"