---
title: Surface Extension de surface
---
|  |
| --- |
| Surface Extension de surface |
| Emplacement du menu |
| Surface → Extend face |
| Ateliers |
| [Surface](/Surface_Workbench/fr "Surface Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Surface_ExtendFace.svg) Surface ExtendFace extrapole une face ou une surface existante à ses limites avec ses paramètres U et V locaux.

![](/images/Surface_ExtendFace_base_example.png) ![](/images/Surface_ExtendFace_example.png)

À gauche : surface d'origine. À droite : surface étendu.

## Utilisation

1. Assurez-vous que vous avez un objet qui a des faces. L'objet peut être créé avec l'![](/images/Workbench_Surface.svg) [atelier Surface](/Surface_Workbench/fr "Surface Workbench/fr") mais il peut également s'agir de tout autre objet, par exemple, créé avec [[File:Workbench\_Part.svg|24px] ] [Part](/Part_Workbench/fr "Part Workbench/fr") ou ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
2. Sélectionnez la face à étendre en cliquant dessus dans la [vue 3D](/3D_view/fr "3D view/fr").
3. Appuyez sur ![](/images/Surface_ExtendFace.svg) Extend face.

## Options

Cette commande n'a pas d'options. Soit elle fonctionne avec la sélection, soit elle ne fonctionne pas.

## Propriétés

Surface ExtendFace (classe `Surface::Extend`) est dérivée de la classe de base [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature` via la sous-classe `Part::Spline`). Elles partagent donc toutes les propriétés de cette dernière.

Outre les propriétés décrites dans [Part Feature](/Part_Feature/fr "Part Feature/fr"), Surface Remplissage a les propriétés suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données**Face** (`LinkSub`) : le sous-élément d'un objet qui sera étendu. Ce doit être une face.
* Données**Tolerance** (`FloatConstraint`) : par défaut `0.1`.

* Données**Extend UNeg** (`FloatConstraint`) : par défaut `0.05`. Le rapport du paramètre U local qui sera étendu dans le sens négatif.
* Données**Extend UPos** (`FloatConstraint`) : par défaut `0.05`. Le rapport du paramètre U local qui sera étendu dans le sens positif.
* Données**Extend USymetric** (`Bool`) : par défaut `true`, auquel cas Données**Extend UNeg** et Données**Extend UPos** auront la même valeur.

* Données**Extend VNeg** (`FloatConstraint`) : par défaut `0.05`. Le rapport du V local qui sera étendu dans la direction négative.
* Données**Extend VPos** (`FloatConstraint`) : par défaut `0.05`. Le rapport de la direction V locale qui sera étendue dans la direction positive.
* Données**Extend VSymetric** (`Bool`) : par défaut `true`, auquel cas Données**Extend VNeg** et Données**Extend VPos** auront la même valeur.

* Données**SampleU** (`IntegerConstraint`) : par défaut `32`.
* Données**SampleV** (`IntegerConstraint`) : par défaut `32`.

### Vue

Base

* Vue**Control Points** (`Bool`) : par défaut `false`. Mis à `true`, elle affichera une superposition avec les points de contrôle de la surface.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Surface Extension peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en ajoutant l'objet `Surface::Extend`.

* La face à étendre doit être affectée en tant que [LinkSub](/FeaturePython_Custom_Properties/fr#App::PropertyLinkSub "FeaturePython Custom Properties/fr") à la propriété `Face` de l'objet. Il ne doit contenir qu'une seule surface.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-20, -20, 0)
b = App.Vector(-18, 25, 0)
c = App.Vector(60, 26, 0)
d = App.Vector(33, -20, 0)

points = [a, App.Vector(-20, -8, 0), b, c,
          App.Vector(37, 4, 0), d,
          App.Vector(-2, -18, 0), a]
obj = Draft.make_bspline(points)
doc.recompute()

if App.GuiUp:
    obj.ViewObject.Visibility = False

surf = doc.addObject("Surface::Filling", "Surface")
surf.BoundaryEdges = [(obj, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
points_spl = [App.Vector(-10, 0, 2),
              App.Vector(4, 0, 7),
              App.Vector(18, 0, -5),
              App.Vector(25, 0, 0),
              App.Vector(30, 0, 0)]
aux_edge = Draft.make_bspline(points_spl)
doc.recompute()

surf.UnboundEdges = [(aux_edge, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
surf_extended = doc.addObject("Surface::Extend", "Surface")
surf_extended.Face = [surf, "Face1"]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_ExtendFace/fr&oldid=1493116>"