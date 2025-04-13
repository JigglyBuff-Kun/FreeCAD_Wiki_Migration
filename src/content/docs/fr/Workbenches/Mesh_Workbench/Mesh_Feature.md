---
title: Mesh Feature
---
## Introduction

![](/images/Mesh_Tree.svg)

Un objet Mesh Feature, ou formellement un `Mesh::Feature`, est un élément simple avec un [objet de maillage](/Mesh_MeshObject/fr "Mesh MeshObject/fr") associé qui peut être affiché dans la [vue 3D](/3D_view/fr "3D view/fr").

Une fonction de maillage (Mesh Feature) est conceptuellement similaire à une [Part Feature](/Part_Feature/fr "Part Feature/fr"). Le premier est l'objet de base pour les éléments avec des informations de "maillage", tandis que le second est l'objet de base pour les éléments avec des informations de "forme géométrique".

Notez que l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") utilise également des maillages, mais dans ce cas, il utilise un objet différent, appelé [FEM FemMeshObject](/FEM_Mesh/fr "FEM Mesh/fr") (classe `Fem::FemMeshObject`). Cet objet n'est pas dérivé de la fonction de maillage et possède des propriétés différentes.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

Presque tous les objets maillés créés par les commandes disponibles dans l'interface graphique de l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") sont des Mesh Features. Les objets maillés paramétriques créés par la commande [Mesh Solide régulier](/Mesh_BuildRegularSolid/fr "Mesh BuildRegularSolid/fr") sont les seules exceptions. Un Mesh Feature peut également être créé à partir de la [console Python](/Python_console/fr "Python console/fr") comme décrit dans la section [Script](#Script).

L'objet `Mesh::Feature` est défini dans l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") mais peut être utilisé comme classe de base pour les [objets scriptés](/Scripted_objects/fr "Scripted objects/fr") dans tous les [ateliers](/Workbenches/fr "Workbenches/fr") générant des formes géométriques 2D et 3D.

Un `Mesh::Feature` a des propriétés simples comme un [placement](/Placement/fr "Placement/fr") et des propriétés visuelles pour définir l'apparence de ses arêtes et faces.

## Propriétés

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets crées par script peuvent avoir.

La classe Mesh Feature (classe `Mesh::Feature`) est dérivée de [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr") de base. (classe `App::GeoFeature`) et hérite de toutes ses propriétés. Elle possède également plusieurs propriétés supplémentaires, notamment une propriété Données**Mesh**, qui stocke son [Mesh MeshObject](/Mesh_MeshObject/fr "Mesh MeshObject/fr"). Il s'agit de la géométrie qui est affichée dans la [vue 3D](/3D_view/fr "3D view/fr").

Ce sont les propriétés disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés masquées peuvent être affichées en utilisant la commande **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données (Hidden)**Proxy** (`PythonObject`) : une classe personnalisée associée à cet objet. Ceci n'existe que pour la version en [Python](/Python/fr "Python/fr"). Voir [Script](#Script).
* Données**Mesh** (`MeshKernel`): une classe [Mesh MeshObject](/Mesh_MeshObject/fr "Mesh MeshObject/fr") associée à cet objet. Elle répertorie le nombre de `Points`, `Edges` et `Faces` du maillage.
* Données**Placement** (`Placement`): la position de l'objet dans la [vue 3D](/3D_view/fr "3D view/fr"). Le placement est défini par un `Base` point (vecteur) et un `Rotation` (axe et angle). Voir [Placement](/Placement/fr "Placement/fr").
  + Données**Angle**: l'angle de rotation autour de Données**Axis**. Par défaut, `0°` (zéro degré).
  + Données**Axis**: le vecteur unitaire qui définit l'axe de rotation du placement. Chaque composant est une valeur à virgule flottante entre `0` et `1`. Si une valeur est supérieure à `1`, le vecteur est normalisé de sorte que la norme du vecteur soit `1`. Par défaut, il s'agit de l'axe Z positif, `(0, 0, 1)`.
  + Données**Position**: un vecteur avec les coordonnées 3D du point de base. Par défaut, il s'agit de l'origine `(0, 0, 0)`.
* Données**Label** (`String`): le nom modifiable par l'utilisateur de cet objet, c'est une chaîne UTF8 arbitraire.
* Données (Hidden)**Label2** (`String`) : une description plus longue, modifiable par l'utilisateur, de cet objet. Il s'agit d'une chaîne UTF8 arbitraire qui peut inclure des nouvelles lignes. Par défaut, il s'agit d'une chaîne vide `""`.
* Données (Hidden)**Expression Engine** (`ExpressionEngine`) : une liste d'expressions. Par défaut, elle est vide `[]`.
* Données (Hidden)**Visibility** (`Bool`) : affichage ou non de l'objet.

### Vue

Base

* Vue (Hidden)**Proxy** (`PythonObject`) : une classe personnalisée de [viewprovider](/Viewprovider/fr "Viewprovider/fr") associée à cet objet. Ceci n'existe que pour la version en [Python](/Python/fr "Python/fr"). Voir [Script](#Script).

Display Options

* Vue**Bounding Box** (`Bool`) : si la valeur est `true`, l'objet affichera la boîte englobante dans la [vue 3D](/3D_view/fr "3D view/fr").
* Vue**Display Mode** (`Enumeration`) : `Shaded` (pas d'arêtes), `Wireframe` (pas de faces), `Flat Lines` (affichage classique), `Points` (uniquement les sommets).
* Vue**Show In Tree** (`Bool`) : si la valeur est `true`, l'objet apparaît dans la [Tree view](/Tree_view "Tree view"). Sinon, il est défini comme invisible.
* Vue**Visibility** (`Bool`) : si elle est `true`, l'objet apparaît dans la [vue 3D](/3D_view/fr "3D view/fr") ; sinon, il est invisible. Par défaut, cette propriété peut être activée ou désactivée en appuyant sur la barre Espace.

Object Style

* Vue (Hidden)**Coloring** (`Bool`) : la valeur par défaut est `false`.
* Vue**Crease Angle** (`FloatConstraint`) :
* Vue**Lighting** (`Enumeration`) : `Un côté`. (par défaut), `Two side` ; l'éclairage provient de deux côtés ou d'un seul côté dans la [vue 3D](/3D_view/fr "3D view/fr").
* Vue**Line Color** (`Color`) : un tuple de trois valeurs RVB à virgule flottante `(r,g,b)` pour définir la couleur des bords dans la [vue 3D](/3D_view/fr "3D view/fr") ; par défaut, il s'agit de `(0.0, 0.0, 0.0)`, qui est affiché comme `[0,0,0]` sur la base 255, complètement noir.
* Vue**Line Transparency** (`Percent`) : un nombre entier de `0` à `100` (un pourcentage) qui détermine le niveau de transparence des bords dans la [vue 3D](/3D_view/fr "3D view/fr"). Une valeur de `100` indique des bords complètement invisibles ; les bords sont invisibles mais peuvent toujours être sélectionnés tant que Vue**Selectable** est `true`.
* Vue**Line Width** (`FloatConstraint`) : un flottant qui détermine la largeur en pixels des bords dans la [vue 3D](/3D_view/fr "3D view/fr"). La valeur par défaut est `1.0`.
* Vue**Open Edges** (`Bool`) : la valeur par défaut est `false`.
* Vue**Point Size** (`FloatConstraint`) : similaire à Vue**Line Width**, définit la taille des sommets.
* Vue**Shape Color** (`Color`) : similaire à Vue**Line Color**, définit la couleur des faces. La valeur par défaut est `(0.8, 0.8, 0.8)`, qui s'affiche comme `[204,204,204]` sur la base 255, un gris clair.
* Vue (Hidden)**Shape Material** (`Material`) : un [App Material](/index.php?title=App_Material/fr&action=edit&redlink=1 "App Material/fr (page does not exist)") associé à cet objet. Par défaut, il est vide.
* Vue**Transparency** (`Percent`) : un nombre entier compris entre `0` et `100` (un pourcentage) qui détermine le niveau de transparence des faces dans la [vue 3D](/3D_view/fr "3D view/fr"). Une valeur de `100` indique des faces complètement invisibles ; les faces sont invisibles mais peuvent toujours être sélectionnées tant que Vue**Selectable** est `true`.

Selection

* Vue**On Top When Selected** (`Enumeration`) : `Disabled` (par défaut), `Enabled`, `Object`, `Element`.
* Vue**Selectable** (`Bool`) : si elle vaut `true`, l'objet peut être sélectionné avec le pointeur dans la [vue 3D](/3D_view/fr "3D view/fr"). Sinon, l'objet ne peut pas être sélectionné tant que cette option n'est pas définie sur `true`.
* Vue**Selection Style** (`Enumeration`) : `Shape` (par défaut), `BoundBox`. Si l'option est `Shape`, la forme entière (sommets, arêtes et faces) sera mise en évidence dans la [vue 3D](/3D_view/fr "3D view/fr") ; si elle est `BoundBox`, seule la boîte de délimitation sera mise en évidence.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Un Mesh Feature est créée avec la méthode `addObject()` du document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Feature", "Name")
obj.Label = "Custom label"

```

Pour la sous-classification de [Python](/Python/fr "Python/fr"), vous devez créer l'objet `Mesh::FeaturePython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Feature/fr&oldid=1560987>"