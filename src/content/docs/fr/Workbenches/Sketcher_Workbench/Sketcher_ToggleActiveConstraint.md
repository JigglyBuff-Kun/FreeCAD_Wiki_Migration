---
title: Sketcher Activer les contraintes
---
|  |
| --- |
| Sketcher Activer les contraintes |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Activer/désactiver la contrainte |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K Z |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Sketcher Contraintes pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ToggleActiveConstraint.svg) Sketcher Activer les contraintes active ou désactive les contraintes sélectionnées. La désactivation des contraintes vous permet de tester d'autres arrangements géométriques sans supprimer les contraintes.

Cet outil est similaire à [Sketcher Contraintes pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"), mais contrairement à celui-ci, il fonctionne également pour les contraintes géométriques, et les valeurs des contraintes désactivées de dimension sont préservées.

## Utilisation

1. Sélectionner une ou plusieurs contraintes.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ToggleActiveConstraint.svg) Activer/désactiver la contrainte.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ToggleActiveConstraint.svg) Activer/désactiver la contrainte** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ToggleActiveConstraint.svg) Activer/désactiver la contrainte** du menu contextuel.
   * Dans la section **Contraintes** de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr"), sélectionnez l'option **Activer** ou **Désactiver** du menu contextuel. L'option proposée dépend de l'état de la contrainte sous le curseur.
   * Utiliser le raccourci clavier : K puis Z.
3. Les contraintes sélectionnées actives sont désactivées et deviennent grises ([couleur](/Sketcher_Preferences/fr#Apparence "Sketcher Preferences/fr") par défaut), tandis que les contraintes sélectionnées désactivées sont activées et redeviennent rouges (couleur par défaut).

## Exemple

![](/images/Sketcher_ToggleActiveConstraint_example_active.png)

Une esquisse complètement contrainte.‎

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_1.png)

L'une des contraintes angulaires a été désactivée, l'esquisse n'est plus entièrement contrainte.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_2.png)

La géométrie non contrainte peut être déplacée. La contrainte désactivée est toujours disponible et peut être réactivée pour revenir à l'esquisse entièrement contrainte.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Le statut actif d'une contrainte peut être contrôlé par des [macros](/Macros/fr "Macros/fr") et depuis la [console Python](/Python_console/fr "Python console/fr").

```
SketchObject.toggleActive(index)

```

Utilisez la méthode `toggleActive` d'un [Sketcher SketchObject](/Sketcher_SketchObject/fr "Sketcher SketchObject/fr") et `index` de la contrainte pour l'activer ou la désactiver. L'index commence de `0` jusqu'à `N-1`, où `N` est le nombre total de contraintes.

Exemple :

```
import FreeCAD as App

sketch = App.ActiveDocument.Sketch
sketch.toggleActive(3)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleActiveConstraint/fr&oldid=1496145>"