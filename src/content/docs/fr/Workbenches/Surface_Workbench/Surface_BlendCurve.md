---
title: Surface Fusion de courbes
---
|  |
| --- |
| Surface Fusion de courbes |
| Emplacement du menu |
| Surface → Fusionner des courbes |
| Ateliers |
| [Surface](/Surface_Workbench/fr "Surface Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.21 |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Surface_BlendCurve.svg) Surface Fusion de courbes crée une courbe de Bézier entre deux arêtes, avec la continuité souhaitée.

La géométrie de base peut appartenir à des courbes créées avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi à des objets solides tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr").

![](/images/Surface_BlendCurve_G3_example.png)
![](/images/Surface_BlendCurve_Comb.png)

Surface Fusion de courbes reliant 2 arêtes avec une continuité G3. Les polygones orange représentent les points de contrôle. Le peigne de courbure (de l'[extension Curves](/Curves_Workbench/fr "Curves Workbench/fr")) est lisse aux points de contact.

## Utilisation

1. Sélectionnez deux arêtes dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Surface_BlendCurve.svg) Fusionner des courbes.
   * Sélectionnez l'option **Surface → ![](/images/Surface_BlendCurve.svg) Fusionner des courbes** du menu.
3. Ajustez la forme de la courbe dans les propriétés Data de l'objet.

## Propriétés

Surface Fusion de courbes (classe `Surface::Filling`) est dérivée de la classe de base [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature` via la sous-classe `Part::Spline`), elle partage donc toutes les propriétés de cette dernière.

Outre les propriétés décrites dans [Part Feature](/Part_Feature/fr "Part Feature/fr"), Surface Fusion de courbes a les propriétés suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Blend Curve

* Données**Start Edge** (`LinkSub`) : première arête à rentrer.
* Données**Start Continuity** (`Integer`) : valeur de continuité géométrique
* Données**Start Parameter** (`Float`) : paramètre normalisé le long de l'arête, de `0.0` (début de l'arête) à `1.0` (fin de l'arête).
* Données**Start Size** (`Float`) : taille de la tangente.
* Données**End Edge** (`LinkSub`) : deuxième arête à rentrer.
* Données**End Continuity** (`Integer`) : valeur de continuité géométrique
* Données**End Parameter** (`Float`) : paramètre normalisé le long de l'arête, de `0.0` (début de l'arête) à `1.0` (fin de l'arête).
* Données**End Size** (`Float`) : taille de la tangente.

### Vue

Base

* Vue**Control Points** (`Bool`) : par défaut `false`. Mis à `true`, elle affichera une superposition avec les points de contrôle de la surface.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Fusion de courbes peut être utilisé dans les [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en ajoutant l'objet `Surface::FeatureBlendCurve`.

* Les arêtes à utiliser pour définir la courbe doivent être assignées en tant que [LinkSub](/FeaturePython_Custom_Properties/fr#App::PropertyLinkSub "FeaturePython Custom Properties/fr") aux propriétés `StartEdge` et `EndEdge` de l'objet.
* Tous les objets dotés d'arêtes doivent être calculés avant de pouvoir être utilisés comme entrée pour les propriétés de l'objet Fusion de courbes.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

points1 = [App.Vector(-20, -20, 0), App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), App.Vector(-18, 25, 0)]
obj1 = Draft.make_bspline(points1)

points2 = [App.Vector(60, 26, 0), App.Vector(37, 4, 0), App.Vector(33, -20, 0)]
obj2 = Draft.make_bspline(points2)

doc.recompute()

bcurve = doc.addObject("Surface::FeatureBlendCurve","BlendCurve")
bcurve.StartEdge = (obj1, 'Edge1')
bcurve.EndEdge = (obj2, 'Edge1')
bcurve.EndParameter = 1.00
bcurve.StartSize = -5.00
bcurve.EndSize = -5.00

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_BlendCurve/fr&oldid=1493124>"