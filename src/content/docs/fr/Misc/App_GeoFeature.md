---
title: App GeoFeature
---
## Introduction

![](/images/Feature.svg)

Un objet App GeoFeature, ou officiellement `App::GeoFeature`, est la classe de base de la plupart des objets qui afficheront des éléments géométriques dans la [Vue 3D](/3D_view/fr "3D view/fr") car il inclut une propriété Données**Placement**.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

App GeoFeature est un objet interne, il ne peut donc pas être créé à partir de l'interface graphique. Il n'est généralement pas destiné à être utilisé directement, mais il peut plutôt être sous-classé pour obtenir un objet nu qui n'a qu'une propriété Données**Placement** de base pour définir sa position dans la [vue 3D](/3D_view/fr "3D view/fr").

Certains des objets dérivés les plus importants sont les suivants :

* La classe [Part Feature](/Part_Feature/fr "Part Feature/fr"), le parent de la plupart des objets 2D et 3D [formes topologiques](/Part_TopoShape/fr "Part TopoShape/fr").
* La classe [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr"), le parent de la plupart des objets fabriqués à partir de [maillages](/Mesh_MeshObject/fr "Mesh MeshObject/fr"), pas des solides.
* La classe [Fem FemMeshObject](/FEM_Mesh/fr "FEM Mesh/fr"), le parent des maillages d'éléments finis créés avec l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").
* La classe [CAM Feature](/index.php?title=CAM_Feature/fr&action=edit&redlink=1 "CAM Feature/fr (page does not exist)"), le parent des chemins créés avec l'[atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr") pour une utilisation dans l'usinage CNC.
* La classe [App Part](/App_Part/fr "App Part/fr"), qui définit les [Std Parts](/Std_Part/fr "Std Part/fr") qui peuventt être utilisés comme conteneurs de corps pour effectuer des assemblages.

Lorsque vous créez cet objet dans [Python](/Python/fr "Python/fr"), au lieu de sous-classer `App::GeoFeature`, vous devez sous-classer `App::GeometryPython` car ce dernier inclut une valeur par défaut fournisseur de vues et attributs `Proxy` pour l'objet lui-même et son fournisseur de vues. Voir [Script](#Script).

## Propriétés App GeoFeature

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets crées par script peuvent avoir.

App GeoFeature (classe `App::GeoFeature`) est dérivée de la classe de base [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr"). (classe `App::DocumentObject`) et hérite de toutes ses propriétés. En outre, il possède une propriété Données**Placement**, qui contrôle sa position dans la [vue 3D](/3D_view "3D view").

## Propriétés App GeometryPython

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets scriptés peuvent avoir.

La classe App GeometryPython (classe `App::GeometryPython`) est dérivée de la classe de base App GeoFeature (classe `App::GeoFeature`) et hérite de toutes ses propriétés. Elle possède également plusieurs propriétés supplémentaires.

Ce sont les propriétés disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés masquées peuvent être affichées en utilisant la commande **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données (Hidden)**Proxy** (`PythonObject`) : une classe personnalisée associée à cet objet.
* Données**Placement** (`Placement`): la position de l'objet dans la [Vue 3D](/3D_view/fr "3D view/fr"). Le placement est défini par un point `Base` (vecteur) et un `Rotation` (axe et angle). Voir [Positionnement](/Placement/fr "Placement/fr").
  + Données**Angle**: l'angle de rotation autour de Données**Axis**. Par défaut `0°` (zéro degré).
  + Données**Axis**: le vecteur unitaire qui définit l'axe de rotation pour le placement. Chaque composant est une valeur à virgule flottante entre `0` et `1`. Si une valeur est supérieure à `1`, le vecteur est normalisé de sorte que l'amplitude du vecteur est `1`. Par défaut, il s'agit de l'axe Z positif, `(0, 0, 1)`.
  + Données**Position**: un vecteur avec les coordonnées 3D du point de base. Par défaut, c'est l'origine `(0, 0, 0)`.
* Données**Label** (`String`): le nom modifiable par l'utilisateur de cet objet, il s'agit d'une chaîne UTF8 arbitraire.
* Données (Hidden)**Label2** (`String`) : une description plus longue, modifiable par l'utilisateur, de cet objet. Il s'agit d'une chaîne UTF8 arbitraire qui peut inclure des nouvelles lignes. Par défaut, il s'agit d'une chaîne vide `""`.
* Données (Hidden)**Expression Engine** (`ExpressionEngine`) : une liste d'expressions. Par défaut, elle est vide `[]`.
* Données (Hidden)**Visibility** (`Bool`) : affichage ou non de l'objet.

### Vue

Base

* Vue (hidden)**Proxy** (`PythonObject`): une classe personnalisée de [viewprovider](/Viewprovider/fr "Viewprovider/fr") associée à cet objet.

Display Options

* Vue**Bounding Box** (`Bool`): mis à `true`, l'objet affichera le cadre de délimitation dans la [Vue 3D](/3D_view/fr "3D view/fr").
* Vue**Display Mode** (`Enumeration`): voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").
* Vue**Show In Tree** (`Bool`): voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").
* Vue**Visibility** (`Bool`): voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").

Object Style

* Vue**Shape Color** (`Color`): un tuple de trois valeurs RVB à virgule flottante `(r,g,b)` pour définir la couleur des faces dans la [Vue 3D](/3D_view/fr "3D view/fr"). Par défaut, il s'agit de `(0.8, 0.8, 0.8)`, qui s'affiche sous la forme `[204, 204, 204]` sur la base 255, un  light gray .
* Vue (Hidden)**Shape Material** (`Material`): un [App Material](/index.php?title=App_Material/fr&action=edit&redlink=1 "App Material/fr (page does not exist)") associé à cet objet. Par defaut, vide.
* Vue**Transparency** (`Percent`): un entier de `0` à `100` qui détermine le niveau de transparence des faces dans la [Vue 3D](/3D_view/fr "3D view/fr"). Une valeur de `100` indique des faces complètement invisibles. Les faces sont invisibles mais elles peuvent toujours être sélectionnées tant que Vue**Selectable** est `true`.

Selection

* Vue**On Top When Selected** (`Enumeration`): voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").
* Vue**Selectable** (`Bool`): s'il est `true`, l'objet peut être sélectionné avec le pointeur dans la [Vue 3D](/3D_view/fr "3D view/fr"). Sinon, l'objet ne peut pas être sélectionné tant que cette option n'est pas définie sur `true`.
* Vue**Selection Style** (`Enumeration`): voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Un GeoFeature est créé avec la méthode `addObject()` du document. Si vous souhaitez créer un objet avec une 2D ou 3D [forme topologique](/Part_TopoShape/fr "Part TopoShape/fr"), il peut être préférable de créer l'une des sous-classes spécialisées pour la manipulation des formes, par exemple, [Part Feature](/Part_Feature/fr "Part Feature/fr") ou [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr").

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeoFeature", "Name")
obj.Label = "Custom label"

```

Pour la sous-classification de [Python](/Python/fr "Python/fr"), vous devez créer l'objet `App::GeometryPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeometryPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_GeoFeature/fr&oldid=1560975>"