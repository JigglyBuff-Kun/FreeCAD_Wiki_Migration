---
title: App DocumentObject
---
## Introduction

![](/images/Px.svg)

Un objet App DocumentObject, ou officiellement `App::DocumentObject`, est la classe de base de toutes les classes d'objets gérées dans le document.

De manière générale, un "DocumentObject" est toute "chose" qui peut apparaître dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et qui est enregistrée et restaurée lors de l'ouverture d'un document.

![](/images/App_DocumentObject_example.png)

Vue arborescente montrant différents objets dans le document. Chacun d'eux est un "document object", finalement dérivé de la classe `App::DocumentObject` base.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux dans Freecad

## Utilisation

App DocumentObject est une classe interne, elle ne peut donc pas être créée à partir de l'interface graphique, ni destinée à être utilisée seule. Il définit simplement le comportement de base et les propriétés des objets dans le programme.

Certains des DocumentObjects les plus importants sont les suivants:

* La classe [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr"), un objet vide qui peut être utilisé à différentes fins, en fonction des propriétés ajoutées.
* La classe [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr") , l'objet de base de tous les objets géométriques, c'est-à-dire des objets qui ont une propriété [Placement](/Placement/fr "Placement/fr") qui définit leur position dans la [vue 3D](/3D_view/fr "3D view/fr").
* La classe [Part Feature](/Part_Feature/fr "Part Feature/fr"), dérivée d'App GeoFeature, et la classe parent d'objets avec 2D et 3D [topological shapes](/Part_TopoShape/fr "Part TopoShape/fr").
* La classe [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr"), dérivée d'App GeoFeature, et la classe parent d'objets avec 2D et 3D [maillages](/Mesh_MeshObject/fr "Mesh MeshObject/fr").

## Propriétés

Voir [Propriétés](/Property/fr "Property/fr") pour tous les types de propriétés que les objets crées par script peuvent avoir.

Ce sont les propriétés de base que possèdent essentiellement tous les objets. Ces propriétés sont accessibles depuis la [console Python](/Python_console/fr "Python console/fr").

* Données**Expression Engine** (`ExpressionEngine`) : une liste d'expressions.
* Données**Label** (`String`) : le nom modifiable par l'utilisateur de cet objet, il s'agit d'une chaîne UTF8 arbitraire. Par défaut, c'est la même chose que `Name`.
* Données**Label2** (`String`) : description plus longue et modifiable par l'utilisateur de cet objet, il s'agit d'une chaîne UTF8 arbitraire qui peut inclure des retours à la ligne. Par défaut, il s'agit d'une chaîne vide `""`.
* Données**Expression Engine** (`ExpressionEngine`) : une liste d'expressions.
* Données**Visibility** (`Bool`) : afficher ou non l'objet.

Pour les objets dérivés, seul Données**Label** sera répertoriée par défaut dans l' [éditeur de propriété](/Property_editor/fr "Property editor/fr"). Les autres propriétés seront masquées.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets au document.

Un DocumentObject est créé avec la méthode `addObject()` du document. Cependant, en général, il n'est pas nécessaire de créer cet objet manuellement. Il est généralement préférable de sous-classer l'une des sous-classes les plus complexes, par exemple, [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr"), [App GeoFeature](/App_GeoFeature/fr "App GeoFeature/fr"), [|Part Feature](/Part_Feature/fr "Part Feature/fr"), [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr"), etc.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObject", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObject/fr&oldid=1352382>"