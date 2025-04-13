---
title: Draft Vue 2D d'une forme
---
|  |
| --- |
| Draft Vue 2D d'une forme |
| Emplacement du menu |
| Modification → Vue 2D de la forme |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [TechDraw Projection de forme](/TechDraw_ProjectShape/fr "TechDraw ProjectShape/fr") |
|  |

## Description

La commande ![](/images/Draft_Shape2DView.svg) **Draft Vue 2D d'une forme** crée des projections 2D à partir d'objets sélectionnés, généralement des solides 3D ou des [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"). Les projections sont placées dans la [vue 3D](/3D_view/fr "3D view/fr").

Les projections Vue 2D d'une forme peuvent être affichées sur une page de l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") à l'aide de la commande [TechDraw Vue Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr"). Par ailleurs, l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") offre ses propres commandes de projection, mais celles-ci créent des projections qui ne sont affichées que sur la page de dessin et non dans la [vue 3D](/3D_view/fr "3D view/fr").

![](/images/Draft_Shape2DView_example.jpg)

Projection de formes solides sur le plan XY

## Utilisation

1. Vous pouvez faire tourner la [vue 3D](/3D_view/fr "3D view/fr"). La direction de la caméra dans la [vue 3D](/3D_view/fr "3D view/fr") détermine le vecteur de projection. Par exemple, une [vue de dessus](/Std_ViewTop/fr "Std ViewTop/fr") sera projetée sur le plan XY. Le vecteur de projection est ignoré pour les projections créées à partir de [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr").
2. Vous pouvez sélectionner un ou plusieurs objets.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Shape2DView.svg) Vue 2D de la forme.
   * Sélectionnez l'option **Modification → ![](/images/Draft_Shape2DView.svg) Vue 2D de la forme**  du menu.
4. Si vous n'avez pas encore sélectionné d'objet : sélectionnez un objet dans la [vue 3D](/3D_view/fr "3D view/fr").
5. Les objets projetés sont créés sur le plan XY.

## Comment produire des plans et des sections avec des largeurs de ligne différentes

![](/images/Draft_shape2dview_example_plan.png)

Des dessins avec des largeurs de ligne différentes pour les lignes vues et coupées peuvent être facilement produits en utilisant deux objets Vue 2D d'une forme d'un même [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"). Un des objets Vue 2D d'une forme a son mode de projection défini sur **Solide**, qui restitue les lignes vues, et un autre sur **Couper les lignes** ou **Couper les faces** pour rendre la coupe lignes. Les deux Vue 2D d'une forme sont ensuite placées au même endroit, l'une au-dessus de l'autre.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Un objet Draft Vue 2D d'une forme est dérivé d'un [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Draft

* Données**Auto Update** (`Bool`) : spécifie si la projection doit être automatiquement recalculée si l'objet Données**Base** change. Sélectionner `false` peut être utile s'il y a de nombreux Draft Shape2DViews dans un document ou si ils sont complexes. Définie à `false`, la commande [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr") doit être utilisée pour mettre à jour la projection.
* Données**Base** (`Link`) : spécifie l'objet à projeter.
* Données**Clip** (`Bool`) : si mis à True, le contenu est découpé en fonction des arêtes du plan de coupe, le cas échéant. Cette propriété remplace la propriété Clip de l'objet de base.
* Données**Face Numbers** (`IntegerList`) : spécifie les indices des faces à projeter. Ne fonctionne que si Données**Projection Mode** est `Faces individuelles`.
* Données**Fuse Arch** (`Bool`) : spécifie si les [BIM objets](/BIM_Workbench/fr "BIM Workbench/fr") de même type et matériau sont fusionnés ou non.
* Données**Hidden Lines** (`Bool`) : spécifie si les lignes cachées sont affichées ou non.
* Données**In Place** (`Bool`) : ne fonctionne que si l'objet sélectionné est un [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"), et que Données**Projection Mode** est `Cutlines` ou `Cutfaces`, spécifie si la projection apparaîtra coplanaire avec le plan de coupe.
* Données**Projection** (`Vector`) : spécifie la direction de la projection. Ignoré si Données**Base** est un [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr").
* Données**Projection Mode** (`Enumeration`) : spécifie le mode de projection. Les modes suivants sont disponibles :
  + `Solid` : projette l'objet sélectionné dans son intégralité.
  + `Faces individuelles` : projette uniquement les faces de la liste Données**Face Numbers**.
  + `Cutlines` : ne fonctionne que si l'objet sélectionné est un [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"), ne projette que les arêtes coupées par le plan de coupe.
  + `Cutfaces` : ne fonctionne que si l'objet sélectionné est un [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"), projette les zones coupées dans les solides par le plan de coupe comme des faces.
  + `Faces solides` : projette l'objet sélectionné dans son intégralité en découpant les faces une par une. Peut être utilisé si le mode `Solid` donne de mauvais résultats.
* Données**Segment Length** (`Float`) : spécifie la taille en millimètres des segments linéaires si Données**Tessellation** est `true`.
* Données**Tessellation** (`Bool`) : spécifie si la tessellation doit être effectuée. La tessellation signifie que les courbes sont remplacées par des séquences de segments de lignes. Cette opération peut être coûteuse en calcul si la Données**Segment Length** est trop courte.
* Données**Visible Only** (`Bool`) : spécifie si la projection doit être recalculée uniquement si elle est visible.
* Données**Exclusion Points** (`Vector list`) : Une liste de points d'exclusion. Toute arête passant par l'un de ces points ne sera pas dessinée.
* Données**Exclusion Names** (`String list`) : liste de noms d'objets. Tout objet enfant vu ou coupé dont le nom figure dans cette liste ne sera pas dessiné. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

### Vue

Draft

* Vue**Pattern** (`Enumeration`) : non utilisé.
* Vue**Pattern Size** (`Float`) : non utilisé.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer une projection 2D, utilisez la méthode `make_shape2dview` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) du module Draft. Cette méthode remplace la méthode obsolète `makeShape2DView`.

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* `baseobj` est l'objet à projeter.
* `projectionVector` est le vecteur de projection. S'il n'est pas fourni, l'axe Z est utilisé.
* `facenumbers` est une liste de numéros de face (basé sur 0). Si elles sont fournies, seules ces faces sont prises en compte.
* `shape2dview` est renvoyé avec la projection 2D créée.

Modifiez la propriété `ProjectionMode` de l'objet créé si nécessaire. Cela peut être : `"Solid"`, `"Individual Faces"`, `"Cutlines"`, `"Cutfaces"` ou `"Faces pleines"`.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 500
box.Height = 1000

shape1 = Draft.make_shape2dview(box)

shape2 = Draft.make_shape2dview(box, App.Vector(1, -1, 1))

shape3 = Draft.make_shape2dview(box, App.Vector(-1, 1, 1), [0, 5])
shape3.ProjectionMode = "Individual Faces"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/fr&oldid=1513960>"