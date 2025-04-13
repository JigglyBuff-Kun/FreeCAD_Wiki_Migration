---
title: Part TopoShape
---
## Introduction

Part TopoShape ou officiellement `Part::TopoShape` est une classe qui définit une **topological shape** (forme topologique) paramétrique dans le logiciel. Les objets dans le document qui montrent quelque chose dans la [Vue 3D](/3D_view/fr "3D view/fr") ont normalement une TopoShape.

Les formes topologiques, ainsi que leurs méthodes, sont définies par le noyau [OpenCASCADE](/OpenCASCADE/fr "OpenCASCADE/fr") (OCCT). FreeCAD utilise ces formes et construit [App DocumentObjects](/App_DocumentObject/fr "App DocumentObject/fr") autour d'eux.

Un autre type de classe est celui de [mesh](/Mesh/fr "Mesh/fr"). Cette classe n'est pas très paramétrique car elle ne peut pas être redéfinie facilement sauf en spécifiant des sommets individuels et des surfaces triangulaires.

![](/images/Shape_and_mesh.svg)

A gauche: paramétrique Part TopoShape définie par les propriétés. A droite: un [maillage](/Mesh/fr "Mesh/fr") non paramétrique défini par des sommets et des surfaces triangulaires.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux du programme. La classe `Part::TopoShape` est incorporée dans l'objet `Part::Feature` et à partir de là, elle est propagée à tous les objets qui en sont dérivés.

## Utilisation

Part TopoShape est un objet attribué à certains [App DocumentObjects](/App_DocumentObject/fr "App DocumentObject/fr").

En particulier, l'objet de base qui gère ces types d'attributs est la classe [Part Feature](/Part_Feature/fr "Part Feature/fr") (`Part::Feature` class). Tous les objets dérivés de cette classe auront accès à un Part TopoShape.

Certains des objets les plus importants avec Part TopoShape sont les suivants:

* Tout solide primitif créé avec l'[Atelier Part](/Part_Workbench/fr "Part Workbench/fr").
* Tout [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") et [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr") créés avec l'[Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
* Tout objet dérivé de [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr"), comme la plupart des objets créés avec l'[Atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").
* Toute [Esquisse](/Sketch/fr "Sketch/fr"), c'est-à-dire [Sketcher SketchObject](/Sketcher_SketchObject/fr "Sketcher SketchObject/fr"), créé avec l'[Atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
* Tout objet créé en important un fichier STEP, BREP et des fichiers au format solide similaires.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Tous les objets dérivés de `Part::Feature` auront un Part TopoShape qui est normalement accessible à partir de son attribut `Shape`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Box", "Box")
print(obj.Shape)

```

Une TopoShape possède de nombreux attributs (variables) et méthodes qui contiennent des informations à son sujet et qui permettent d'effectuer des opérations avec elle. Ces variables et méthodes peuvent être testées dans la [Console Python](/Python_console/fr "Python console/fr").

```
print(obj.Shape.Area)
print(obj.Shape.BoundBox)
print(obj.Shape.CenterOfMass)
print(obj.Shape.ShapeType)

obj.Shape.check()
obj.Shape.copy()
obj.Shape.exportStep("my_file.step")
obj.Shape.exportStl("my_file.stl")

```

Pour une liste complète des attributs et des méthodes, consultez l'outil [Documentation du code source](/Source_documentation/fr "Source documentation/fr") et l'outil![](/images/Std_PythonHelp.svg) [Std Documentation modules Python](/Std_PythonHelp/fr "Std PythonHelp/fr").

Vous pouvez obtenir un résumé rapide de toutes les méthodes en utilisant la fonction intégrée `help()` en Python.

```
help(obj.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_TopoShape/fr&oldid=1352385>"