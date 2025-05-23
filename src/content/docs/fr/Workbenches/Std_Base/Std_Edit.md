---
title: Std Bascule mode édition
---
|  |
| --- |
| Std Bascule mode édition |
| Emplacement du menu |
| Édition → Activer/désactiver le mode d'édition |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Mode d'édition](/Std_UserEditMode/fr "Std UserEditMode/fr") |
|  |

## Description

La commande **Std Bascule mode édition** active ou désactive le mode d'édition d'un objet.

## Utilisation

1. Si aucun objet n'est en mode édition : sélectionnez un seul objet.
2. Sélectionnez l'option **Édition → ![](/images/Std_Edit.svg) Activer/désactiver le mode d'édition** du menu.
3. Soit le mode d'édition par défaut de l'objet sélectionné est activé, soit le mode d'édition existant est désactivé.

## Remarques

* Certains outils seront désactivés (grisés) dans l'interface utilisateur lorsque le mode d'édition d'un objet est actif.
* Tous les types d'objets n'ont pas de mode d'édition.
* La fonctionnalité disponible en mode édition dépend du type d'objet.
* Le mode d'édition d'un objet peut également être activé en double-cliquant sur l'objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Dans ce cas, le mode d'édition utilisé peut être défini avec la commande [Std Mode d'édition](/Std_UserEditMode/fr "Std UserEditMode/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour activer le mode d'édition d'un objet, utilisez la méthode `setEdit` de l'objet document. Cette méthode n'est pas disponible si FreeCAD est en mode console.

```
import FreeCADGui

FreeCADGui.ActiveDocument.setEdit("myObjectName",0)

```

Le deuxième argument est EditMode. Les options suivantes sont disponibles :

```
0 = Par défaut
1 = Transformer
2 = Couper
3 = Colorier

```

Pour désactiver le mode d'édition d'un objet, utilisez la méthode `resetEdit` de l'objet du document.

```
import FreeCADGui

FreeCADGui.ActiveDocument.resetEdit()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Edit/fr&oldid=1510966>"