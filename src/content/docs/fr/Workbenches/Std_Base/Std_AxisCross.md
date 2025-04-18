---
title: Std Axes du repère
---
|  |
| --- |
| Std Axes du repère |
| Emplacement du menu |
| Affichage → Activer/désactiver les axes du repère |
| Ateliers |
| Tous |
| Raccourci par défaut |
| A C |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Std Axes du repère** active/désactive les axes du repère dans la [vue 3D](/3D_view/fr "3D view/fr") active.

Les axes du repère se composent de trois flèches représentant les axes positifs X, Y et Z du système de coordonnées global. Leur point de départ commun est l'origine du système de coordonnées global.

![](/images/Std_AxisCross_example.svg)

Les axes du repère (les lettres ne font pas partie du repère)

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Sélectionnez l'option **Affichage → ![](/images/Std_AxisCross.svg) Activer/désactiver les axes du repère** du menu.
   * Utilisez le raccourci clavier : A puis C.

## Remarques

* FreeCAD peut afficher un indicateur du système de coordonnées plus petit dans le coin inférieur droit des vues 3D : **Édition → Préférences ... → Affichage → Vue 3D → Afficher le système de coordonnées dans le coin**. Voir [Éditeur de préférences](/Preferences_Editor/fr#Vue_3D "Preferences Editor/fr").
* Le [cube de navigation](/Navigation_Cube/fr "Navigation Cube/fr") comprend également un indicateur de système de coordonnées.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr").

* La valeur par défaut des axes du repère peut être modifiée : **Édition → Préférences... → Affichage → Vue 3D → Afficher les axes du repère par défaut**.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Utilisez la méthode `setAxisCross` de l'objet View pour activer/désactiver les axes du repère.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setAxisCross(True)
view.hasAxisCross()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AxisCross/fr&oldid=1529464>"