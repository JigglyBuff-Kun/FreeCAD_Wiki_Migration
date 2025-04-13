---
title: Mesh MeshObject
---
## Description

Un Mesh MeshObject, ou officiellement `Mesh::MeshObject`, est une classe qui définit une structure de données de maillage dans le logiciel. Ceci est similaire à la [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr") mais pour [Mesh](/Mesh/fr "Mesh/fr").

Les maillages sont normalement créés avec l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr"), ou importés à partir de STL, OBJ et de formats de fichier de maillage similaires.

Notez que l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") utilise également des maillages, mais dans ce cas, il utilise une structure de données différente, appelée [FEM Mesh](/FEM_Mesh/fr "FEM Mesh/fr") (classe `Fem::FemMesh`). Ces informations ne s'appliquent pas aux maillages FEM.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets principaux du programme.  
La classe `Mesh::MeshObject` est incorporée dans l'objet `Mesh::Feature` et à partir de là, elle est propagée à tous les objets qui en sont dérivés.

## Utilisation

Le Mesh MeshObject est un objet assigné à certains [App DocumentObjects](/App_DocumentObject/fr "App DocumentObject/fr").

En particulier, l'objet de base qui gère ces types d'attributs est la [fonction Mesh](/Mesh_Feature/fr "Mesh Feature/fr") (`Mesh::Feature` class). Tous les objets dérivés de cette classe auront accès à un objet Mesh MeshObject.

Les objets les plus remarquables qui auront un objet Mesh MeshObject sont les suivants:

* Tout maillage primitif créé avec l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").
* Tout objet créé en important une STL, OBJ et des fichiers de format de maillage similaires.

## Script

*Voir aussi:* [Notions de base sur les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [objets scriptés](/Scripted_objects/fr "Scripted objects/fr"). Pour une liste complète des attributs et des méthodes, consultez l'outil [documentation source](/Source_documentation/fr "Source documentation/fr") et l'outil [Std PythonHelp](/Std_PythonHelp/fr "Std PythonHelp/fr").

Tous les objets dérivés de `Mesh::Feature` auront un Mesh MeshObject, qui est normalement accessible à partir de son attribut `Mesh`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Cube", "Cube")
App.ActiveDocument.recompute()
print(obj.Mesh)

```

Un MeshObject possède de nombreux attributs (variables) et méthodes qui contiennent des informations à son sujet et qui permettent de faire des opérations avec lui. Ces variables et méthodes peuvent être testées dans la [console Python](/Python_console/fr "Python console/fr").

```
print(obj.Mesh.Area)
print(obj.Mesh.BoundBox)
print(obj.Mesh.CountPoints)
print(obj.Mesh.Volume)

obj.Mesh.copy()
obj.Mesh.countComponents()
obj.Mesh.getEigenSystem()
obj.Mesh.write("my_file.stl")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_MeshObject/fr&oldid=1475912>"