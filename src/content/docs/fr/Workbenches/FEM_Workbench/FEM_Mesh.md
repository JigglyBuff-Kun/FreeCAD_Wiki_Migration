---
title: FEM Maillage
---

## Créer un maillage à éléments finis

L'[analyse par éléments finis](https://fr.wikipedia.org/wiki/M%C3%A9thode_des_%C3%A9l%C3%A9ments_finis) se fait sur un maillage composé de multiples éléments finis triangulaires/tétraédriques, quadrilatéraux/hexaédriques ou autres qui subdivisent un corps d'origine. Plus le maillage est fin, plus les résultats numériques seront précis, et plus le temps de calcul sera long. Un équilibre entre la taille du maillage, le temps de calcul et la précision des résultats est une caractéristique importante d'une analyse par éléments finis bien définie.

Il existe différentes possibilités pour configurer un maillage dans l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") :

- L'[outil Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") de l'interface utilisateur graphique.
- L'[outil Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") à partir de l'interface graphique.
- Importer un maillage depuis un autre programme. En particulier, Gmsh et Netgen peuvent être utilisés seuls en dehors de FreeCAD pour mailler des corps solides tels que des fichiers Step.
- Créer manuellement le maillage à l'aide de scripts [Python](/Python/fr "Python/fr").

Les outils Gmsh et Netgen prennent en charge les corps de maillage créés avec les ateliers [Part](/Part_Workbench/fr "Part Workbench/fr") et [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), ainsi que les copies simples de ces solides. En général, tout atelier générant des objets solides, tel que l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"), peut être utilisé comme base de création de maillages. Notez qu'un maillage utilisé en analyse par éléments finis est différent d'un maillage créé ou importé à partir de l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").

![](/images/FEM_Workbench_workflow.svg)

L'atelier FEM fait appel à l'outil externe Gmsh pour créer un maillage à partir d'un corps solide créé avec n'importe quel atelier dans FreeCAD. il peut également importer un maillage créé à partir d'une source externe.

![](/images/FEM_Mesh.png)

(1) Corps solide créé avec PartDesign  
(2) Maillage produit par l'outil Gmsh à l'intérieur de l'atelier FEM (tous les triangles)  
(3) Maillage produit en externe par Gmsh, exporté au format Abaqus .inp, puis importé dans FreeCAD (tous les quadrangles).

Les outils [Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") et [Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") sont des outils pratiques pour rapidement mailler un corps, mais ils n'exposent pas toutes leurs capacités. Ils créent par défaut des maillages triangulaires, ce qui peut ne pas être idéal pour certains types d'analyse. Si vous souhaitez mieux contrôler le maillage créé (utilisez uniquement des quadrilatères, un nombre et une taille d'élément précis, une résolution variable du maillage, etc.), vous devez utiliser ces programmes en externe, créez un fichier de maillage dans un format pris en charge (.inp, .unv, .vtk, .z88), et importez ce fichier dans FreeCAD.

Auparavant, Netgen était inclus dans FreeCAD et pouvait être utilisé immédiatement. Maintenant, Netgen et Gmsh doivent être installés avant de pouvoir être utilisés par l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr"). Reportez-vous à [Installation FEM](/FEM_Install/fr "FEM Install/fr") pour les instructions.

## Logiciels de maillage

Les logiciels de maillage opèrent sur des corps solides qui peuvent être dans différents formats, comme Step et Brep. Ces programmes peuvent être utilisés indépendamment de FreeCAD, et disposent généralement de nombreuses options pour contrôler les algorithmes de maillage, la taille des éléments et les conditions aux limites.

L'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") a développé des interfaces de communication simples pour utiliser Gmsh et Netgen directement dans FreeCAD. D'autres programmes n'ont pas d'interface, mais cela pourrait changer à l'avenir si la communauté suscite de l'intérêt et si ces applications sont faciles à intégrer. Le logiciel de maillage peut être compilé et distribué avec FreeCAD seulement si sa licence est compatible avec les licences GPL2 ou LGPL2 ; sinon le programme doit être utilisé comme un binaire externe, comme Gmsh (GPL2).

### Interface implémenté dans FreeCAD

- Gmsh : [site web principal](http://gmsh.info/), [dépôt du code](https://gitlab.onelab.info/gmsh/gmsh)
- Netgen : [site web principal](https://ngsolve.org/), [dépôt du code](https://github.com/NGSolve/netgen)

### Sans interface dans FreeCAD

- ENigMA, [fil du forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=33048), [dépôt du code](https://github.com/bjaraujo/ENigMA)
- libMesh, [site web principal](http://libmesh.github.io/), [dépôt du code](https://github.com/libMesh/libmesh), [fil du forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=33621) ; c'est un projet très actif seulement en C++
- PythonOCC, [site web principal](http://www.pythonocc.org/)
- SnappyHexMesh, [site web principal](https://openfoamwiki.net/index.php/SnappyHexMesh)
- Tetgen, [site web principal](http://wias-berlin.de/software/tetgen/)

## Éléments de maillage dans FreeCAD

FreeCAD supporte différents types d'éléments. L'article suivant explique la différence qui existe entre eux et quand vous pouvez les utiliser : [Maillage de votre géométrie : quand utiliser les différents types d'élément](https://www.comsol.com/blogs/meshing-your-geometry-various-element-types/).

Importation et exportation d'éléments de maillage

| Elément  | Elément  | FreeCAD API        | FreeCAD GUI          | med               | unv               | inp               | frd              | txt               | xml                                                                         |
| -------- | -------- | ------------------ | -------------------- | ----------------- | ----------------- | ----------------- | ---------------- | ----------------- | --------------------------------------------------------------------------- |
| Med      | CalculiX | Python             | Maillage FEM         | SMESH             | IDEAS/FreeCAD     | Abaqus/CalculiX   | Résultat de Mesh | Z88               | FEniCS                                                                      |
| Nom      | Nom      | Créer des éléments | Éléments d'affichage | Importer/exporter | Importer/exporter | Importer/exporter | Importer         | Importer/exporter | Importer/exporter                                                           |
| seg 2    | B31      |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| seg 3    | B32      |                    |                      |                   |                   |                   |                  | NI                |                                                                             |
| tria 3   | S3       |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| tria 6   | S6       |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| quad 4   | S4       |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| quad 8   | S8       |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| tetra 4  | C3D4     |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| tetra 10 | C3D10    |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| hexa 8   | C3D8     |                    |                      |                   |                   |                   |                  |                   | () le format le permet, mais il n'est pas lisible ou modifiable par FEniCS. |
| hexa 20  | C3D20    |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| penta 6  | C3D6     |                    |                      |                   |                   |                   |                  | ?                 |                                                                             |
| penta 15 | C3D15    |                    |                      |                   |                   |                   |                  | ?                 |                                                                             |
| pyra 5   |          |                    |                      |                   |                   |                   |                  |                   |                                                                             |
| pyra 13  |          |                    |                      |                   |                   |                   |                  |                   |                                                                             |

- "NI" signifie que le type d'élément n'est pas implémenté dans FreeCAD, mais le format est supporté.

* ![](/images/Edit_Cancel.svg) signifie que la spécification de format ne supporte pas ce type d'élément, et qu'il ne sera pas accepté par FreeCAD.

- "?" signifie qu'on ne sait pas si ce type d'élément est supporté.

## Types d'éléments FEM

Vous trouverez plus d'informations sur les éléments et leur structure de données dans FreeCAD dans [Types d'élément FEM](/FEM_Element_Types/fr "FEM Element Types/fr").

### Les segments

![](/images/FEM_mesh_elements_1_segment.svg)

### Les triangles

![](/images/FEM_mesh_elements_2_triangle.svg)

### Les quadrangles

![](/images/FEM_mesh_elements_3_quadrangle.svg)

### Les tétraèdres

![](/images/FEM_mesh_elements_4_tetrahedron.svg)

### Les hexaèdres

![](/images/FEM_mesh_elements_5_hexahedron.svg)

### Les pentaèdres (prismes)

![](/images/FEM_mesh_elements_6_pentahedron.svg)

### Les pyramides

![](/images/FEM_mesh_elements_7_pyramid.svg)

## Script

### Créez un maillage FEM entièrement en Python

_Voir aussi :_ [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'API Python permet à l'utilisateur de définir un maillage d'éléments finis en ajoutant directement des nœuds individuels et en définissant des arêtes, des faces et des volumes.

Le maillage lui-même est de type `Fem::FemMesh`, qui doit être attaché à un objet approprié du document de type `Fem::FemMeshObject`.

```
App.ActiveDocument.Mesh_object.TypeId = Fem::FemMeshObject
                              .
                              .
                              .FemMesh.TypeId = Fem::FemMesh

```

#### Création d'un maillage avec un élément Tet-10

Créez un FemMesh vide, remplissez-le avec des nœuds, créez le volume et appelez enfin `Fem.show()` pour créer l'objet du document avec le maillage correspondant.

```
import FreeCAD, Fem

m = Fem.FemMesh()

m.addNode(0,    1,    0)
m.addNode(0,    0,    1)
m.addNode(1,    0,    0)
m.addNode(0,    0,    0)
m.addNode(0,    0.5,  0.5)
m.addNode(0.5,  0.03, 0.5)
m.addNode(0.5,  0.5,  0.03)
m.addNode(0,    0.5,  0)
m.addNode(0.03, 0,    0.5)
m.addNode(0.5,  0,    0)

m.addVolume([1,2,3,4,5,6,7,8,9,10])
Fem.show(m)
obj = FreeCAD.ActiveDocument.ActiveObject

```

Si vous souhaitez une numérotation prédéfinie des noeuds et des éléments, transmettez l'ID approprié aux méthodes de noeud et de volume.

Pour créer un objet document réel, au lieu de `Fem.show()` vous pouvez utiliser la méthode `addObject()` ; attachez ensuite le maillage créé à l'attribut `FemMesh` de cet objet.

```
a = Fem.FemMesh()

a.addNode(0,    1,    0,    1)
a.addNode(0,    0,    1,    2)
a.addNode(1,    0,    0,    3)
a.addNode(0,    0,    0,    4)
a.addNode(0,    0.5,  0.5,  5)
a.addNode(0.5,  0.03, 0.5,  6)
a.addNode(0.5,  0.5,  0.03, 7)
a.addNode(0,    0.5,  0,    8)
a.addNode(0.03, 0,    0.5,  9)
a.addNode(0.5,  0,    0,   10)

a.addVolume([1,2,3,4,5,6,7,8,9,10], 1)
obj_2 = FreeCAD.ActiveDocument.addObject("Fem::FemMeshObject")
obj_2.Placement.Base = FreeCAD.Vector(2, 0, 0)
obj_2.FemMesh = a

```

#### Propriétés visuelles

Une fois qu'un objet FemMesh a été créé avec `Fem.show()` , certaines de ses propriétés visuelles peuvent être modifiées en modifiant les différents attributs de son `ViewObject`. Cela peut être utile pour post-traiter le maillage après avoir obtenu une solution d'éléments finis.

Mettez en surbrillance certains nœuds dans le maillage

```
Fem.show(m)
obj = FreeCAD.ActiveDocument.ActiveObject

obj.ViewObject.HighlightedNodes = [1, 2, 3]

```

Les éléments individuels d'un maillage peuvent être modifiés en passant un dictionnaire avec les paires `key:value` appropriées.

Réglez le volume 1 sur rouge

```
obj.ViewObject.ElementColor = {1:(1,0,0)}

```

Définissez les nœuds 1, 2 et 3 sur une certaine couleur; les faces entre les nœuds acquièrent une couleur interpolée.

```
obj.ViewObject.NodeColor = {1:(1,0,0), 2:(0,1,0), 3:(0,0,1)}

```

Déplacer les nœuds 1 et 2 par le sens et la direction définies par un vecteur.

```
obj.ViewObject.NodeDisplacement = {1:FreeCAD.Vector(0,1,0), 2:FreeCAD.Vector(1,0,0)}

```

Doubler le facteur de déplacement indiqué. (_Note aux éditeurs : supprimé dans les nouvelles versions ?)_

```
obj.ViewObject.animate(2.0)

```

## Exemples de script de chaque type d'élément supporté

### Poutre, ligne à 2 nœuds, seg2 (linéaire)

```
import Fem

seg2 = Fem.FemMesh()
seg2.addNode( 0, 0, 0, 1)
seg2.addNode(10, 0, 0, 2)
seg2.addEdge(1, 2)
print(seg2)

obj = FreeCAD.ActiveDocument.addObject("Fem::FemMeshObject", "seg2")
obj.FemMesh = seg2
obj.Placement.Base = FreeCAD.Vector(0, 110, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

### Poutre, ligne à 3 nœuds, seg3 (quadratique)

```
import Fem

seg3 = Fem.FemMesh()
seg3.addNode( 0, 0, 0, 1)
seg3.addNode(10, 0, 0, 2)
seg3.addNode( 5, 0, 0, 3)
seg3.addEdge([1, 2, 3])
print(seg3)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "seg3")
obj.FemMesh = seg3
obj.Placement.Base = FreeCAD.Vector(30, 110, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

### Coque, triangle à 3 nœuds, tria3 (linéaire)

```
import Fem

tria3 = Fem.FemMesh()
tria3.addNode( 0,  0, 0, 1)
tria3.addNode( 6, 12, 0, 2)
tria3.addNode(12,  0, 0, 3)
tria3.addFace([1, 2, 3])
print(tria3)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "tria3")
obj.FemMesh = tria3
obj.Placement.Base = FreeCAD.Vector(0, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False

```

Ajoutez une face avec le numéro d'élément.

```
elemtria3 = Fem.FemMesh()
nodes = tria3.Nodes
for n in nodes:
    elemtria3.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemtria3.addFace([1, 2, 3], 88)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemtria3")
obj.FemMesh = elemtria3
obj.Placement.Base = FreeCAD.Vector(200, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False
print(elemtria3.Faces)

```

### Coque, triangle à 6 nœuds, tria6 (quadratique)

```
import Fem

tria6 = Fem.FemMesh()
tria6.addNode( 0,  0, 0, 1)
tria6.addNode( 6, 12, 0, 2)
tria6.addNode(12,  0, 0, 3)
tria6.addNode( 3,  6, 0, 4)
tria6.addNode( 9,  6, 0, 5)
tria6.addNode( 6,  0, 0, 6)
tria6.addFace([1, 2, 3, 4, 5, 6])
print(tria6)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "tria6")
obj.FemMesh = tria6
obj.Placement.Base = FreeCAD.Vector(30, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False

```

Ajoutez une face avec le numéro d'élément.

```
elemtria6 = Fem.FemMesh()
nodes = tria6.Nodes
for n in nodes:
    elemtria6.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemtria6.addFace([1, 2, 3, 4, 5, 6], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemtria6")
obj.FemMesh = elemtria6
obj.Placement.Base = FreeCAD.Vector(230, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False
print(elemtria6.Faces)

```

### Coque, quadrilatère à 4 nœuds, quad4 (linéaire)

```
import Fem

quad4 = Fem.FemMesh()
quad4.addNode( 0, 10, 0, 1)
quad4.addNode(10, 10, 0, 2)
quad4.addNode(10,  0, 0, 3)
quad4.addNode( 0,  0, 0, 4)
quad4.addFace([1, 2, 3, 4])
print(quad4)

obj = FreeCAD.ActiveDocument.addObject("Fem::FemMeshObject", "quad4")
obj.FemMesh = quad4
obj.Placement.Base = FreeCAD.Vector(60, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False

```

Ajoutez une face avec le numéro d'élément.

```
elemquad4 = Fem.FemMesh()
nodes = quad4.Nodes
for n in nodes:
    elemquad4.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemquad4.addFace([1, 2, 3, 4], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemquad4")
obj.FemMesh = elemquad4
obj.Placement.Base = FreeCAD.Vector(260, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False
print(elemquad4.Faces)

```

### Coque, quadrilatère à 8 nœuds, quad8 (quadratique)

```
import Fem

quad8 = Fem.FemMesh()
quad8.addNode( 0, 10, 0, 1)
quad8.addNode(10, 10, 0, 2)
quad8.addNode(10,  0, 0, 3)
quad8.addNode( 0,  0, 0, 4)
quad8.addNode( 5, 10, 0, 5)
quad8.addNode(10,  5, 0, 6)
quad8.addNode( 5,  0, 0, 7)
quad8.addNode( 0,  5, 0, 8)
quad8.addFace([1, 2, 3, 4, 5, 6, 7, 8])
print(quad8)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "quad8")
obj.FemMesh = quad8
obj.Placement.Base = FreeCAD.Vector(90, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False

```

Ajoutez une face avec le numéro d'élément.

```
elemquad8 = Fem.FemMesh()
nodes = quad8.Nodes
for n in nodes:
    elemquad8.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemquad8.addFace([1, 2, 3, 4, 5, 6, 7, 8], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemquad8")
obj.FemMesh = elemquad8
obj.Placement.Base = FreeCAD.Vector(290, 80, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
obj.ViewObject.BackfaceCulling = False
print(elemquad8.Faces)

```

### Volume, tétraèdre à 4 nœuds, tétra4 (linéaire)

```
import Fem

tetra4 = Fem.FemMesh()
tetra4.addNode( 6, 12, 18, 1)
tetra4.addNode( 0,  0, 18, 2)
tetra4.addNode(12,  0, 18, 3)
tetra4.addNode( 6,  6,  0, 4)
tetra4.addVolume([1, 2, 3, 4])
print(tetra4)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "tetra4")
obj.FemMesh = tetra4
obj.Placement.Base = FreeCAD.Vector(0, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elemtetra4 = Fem.FemMesh()
nodes = tetra4.Nodes
for n in nodes:
    elemtetra4.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemtetra4.addVolume([1, 2, 3, 4], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemtetra4")
obj.FemMesh = elemtetra4
obj.Placement.Base = FreeCAD.Vector(200, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elemtetra4.Volumes)

```

### Volume, tétraèdre à 10 nœuds, tétra10 (quadratique)

```
import Fem

tetra10 = Fem.FemMesh()
tetra10.addNode( 6, 12, 18, 1)
tetra10.addNode( 0,  0, 18, 2)
tetra10.addNode(12,  0, 18, 3)
tetra10.addNode( 6,  6,  0, 4)

tetra10.addNode( 3,  6, 18, 5)
tetra10.addNode( 6,  0, 18, 6)
tetra10.addNode( 9,  6, 18, 7)

tetra10.addNode( 6,  9,  9, 8)
tetra10.addNode( 3,  3,  9, 9)
tetra10.addNode( 9,  3,  9,10)
tetra10.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(tetra10)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "tetra10")
obj.FemMesh = tetra10
obj.Placement.Base = FreeCAD.Vector(30, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elemtetra10 = Fem.FemMesh()
nodes = tetra10.Nodes
for n in nodes:
    elemtetra10.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemtetra10.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemtetra10")
obj.FemMesh = elemtetra10
obj.Placement.Base = FreeCAD.Vector(230, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elemtetra10.Volumes)

```

### Volume, hexaèdre à 8 nœuds, hexa8 (linéaire)

```
import Fem

hexa8 = Fem.FemMesh()
hexa8.addNode( 0, 10, 10, 1)
hexa8.addNode( 0,  0, 10, 2)
hexa8.addNode(10,  0, 10, 3)
hexa8.addNode(10, 10, 10, 4)
hexa8.addNode( 0, 10,  0, 5)
hexa8.addNode( 0,  0,  0, 6)
hexa8.addNode(10,  0,  0, 7)
hexa8.addNode(10, 10,  0, 8)
hexa8.addVolume([1, 2, 3, 4, 5, 6, 7, 8])
print(hexa8)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "hexa8")
obj.FemMesh = hexa8
obj.Placement.Base = FreeCAD.Vector(60, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elemhexa8 = Fem.FemMesh()
nodes = hexa8.Nodes
for n in nodes:
    elemhexa8.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemhexa8.addVolume([1,  2,  3, 4, 5, 6, 7, 8], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemhexa8")
obj.FemMesh = elemhexa8
obj.Placement.Base = FreeCAD.Vector(260, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elemhexa8.Volumes)

```

### Volume, hexaèdre à 20 noeuds, hexa20 (quadratique)

```
import Fem

hexa20 = Fem.FemMesh()
hexa20.addNode( 0, 10, 10,  1)
hexa20.addNode( 0,  0, 10,  2)
hexa20.addNode(10,  0, 10,  3)
hexa20.addNode(10, 10, 10,  4)
hexa20.addNode( 0, 10,  0,  5)
hexa20.addNode( 0,  0,  0,  6)
hexa20.addNode(10,  0,  0,  7)
hexa20.addNode(10, 10,  0,  8)

hexa20.addNode( 0,  5, 10,  9)
hexa20.addNode( 5,  0, 10, 10)
hexa20.addNode(10,  5, 10, 11)
hexa20.addNode( 5, 10, 10, 12)

hexa20.addNode( 0,  5,  0, 13)
hexa20.addNode( 5,  0,  0, 14)
hexa20.addNode(10,  5,  0, 15)
hexa20.addNode( 5, 10,  0, 16)

hexa20.addNode( 0, 10,  5, 17)
hexa20.addNode( 0,  0,  5, 18)
hexa20.addNode(10,  0,  5, 19)
hexa20.addNode(10, 10,  5, 20)
hexa20.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
print(hexa20)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "hexa20")
obj.FemMesh = hexa20
obj.Placement.Base = FreeCAD.Vector(90, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elemhexa20 = Fem.FemMesh()
nodes = hexa20.Nodes
for n in nodes:
    elemhexa20.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elemhexa20.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elemhexa20")
obj.FemMesh = elemhexa20
obj.Placement.Base = FreeCAD.Vector(290, 50, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elemhexa20.Volumes)

```

### Volume, pentaèdre à 6 nœuds, penta6 (linéaire)

```
import Fem

penta6 = Fem.FemMesh()
penta6.addNode(10, 10, 10, 1)
penta6.addNode( 0,  0, 10, 2)
penta6.addNode(20,  0, 10, 3)
penta6.addNode(10, 10,  0, 4)
penta6.addNode( 0,  0,  0, 5)
penta6.addNode(20,  0,  0, 6)
penta6.addVolume([1, 2, 3, 4, 5, 6])
print(penta6)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "penta6")
obj.FemMesh = penta6
obj.Placement.Base = FreeCAD.Vector(0, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elempenta6 = Fem.FemMesh()
nodes = penta6.Nodes
for n in nodes:
    elempenta6.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elempenta6.addVolume([ 1, 2, 3, 4, 5, 6], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elempenta6")
obj.FemMesh = elempenta6
obj.Placement.Base = FreeCAD.Vector(200, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elempenta6.Volumes)

```

### Volume, pentaèdre à 15 noeuds, penta15 (quadratique)

```
import Fem

penta15 = Fem.FemMesh()
penta15.addNode(10, 10, 10,  1)
penta15.addNode( 0,  0, 10,  2)
penta15.addNode(20,  0, 10,  3)
penta15.addNode(10, 10,  0,  4)
penta15.addNode( 0,  0,  0,  5)
penta15.addNode(20,  0,  0,  6)

penta15.addNode( 5,  5, 10,  7)
penta15.addNode(10,  0, 10,  8)
penta15.addNode(15,  5, 10,  9)

penta15.addNode( 5,  5,  0, 10)
penta15.addNode(10,  0,  0, 11)
penta15.addNode(15,  5,  0, 12)

penta15.addNode(10, 10,  5, 13)
penta15.addNode( 0,  0,  5, 14)
penta15.addNode(20,  0,  5, 15)
penta15.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
print(penta15)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "penta15")
obj.FemMesh = penta15
obj.Placement.Base = FreeCAD.Vector(40, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elempenta15 = Fem.FemMesh()
nodes = penta15.Nodes
for n in nodes:
    elempenta15.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elempenta15.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elempenta15")
obj.FemMesh = elempenta15
obj.Placement.Base = FreeCAD.Vector(240, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elempenta15.Volumes)

```

### Volume, pyramide à 5 nœuds, pyra5 (linéaire)

```
import Fem

pyra5 = Fem.FemMesh()
pyra5.addNode( 0, 20,  0, 1)
pyra5.addNode(20, 20,  0, 2)
pyra5.addNode(20,  0,  0, 3)
pyra5.addNode( 0,  0,  0, 4)
pyra5.addNode(10, 10, 10, 5)
pyra5.addVolume([1, 2, 3, 4, 5])
print(pyra5)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "pyra5")
obj.FemMesh = pyra5
obj.Placement.Base = FreeCAD.Vector(80, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elempyra5 = Fem.FemMesh()
nodes = pyra5.Nodes
for n in nodes:
    elempyra5.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elempyra5.addVolume([1, 2, 3, 4, 5], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elempyra5")
obj.FemMesh = elempyra5
obj.Placement.Base = FreeCAD.Vector(280, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elempyra5.Volumes)

```

### Volume, pyramide à 13 nœuds, pyra13 (quadratique)

```
import Fem

pyra13 = Fem.FemMesh()
pyra13.addNode( 0, 20,  0,  1)
pyra13.addNode(20, 20,  0,  2)
pyra13.addNode(20,  0,  0,  3)
pyra13.addNode( 0,  0,  0,  4)
pyra13.addNode(10, 10, 10,  5)

pyra13.addNode(10, 20,  0,  6)
pyra13.addNode(20, 10,  0,  7)
pyra13.addNode(10,  0,  0,  8)
pyra13.addNode( 0, 10,  0,  9)

pyra13.addNode( 5, 15,  5, 10)
pyra13.addNode(15, 15,  5, 11)
pyra13.addNode(15,  5,  5, 12)
pyra13.addNode( 5,  5,  5, 13)
pyra13.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
print(pyra13)

obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "pyra13")
obj.FemMesh = pyra13
obj.Placement.Base = FreeCAD.Vector(120, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"

```

Ajoutez un volume avec le numéro d'élément.

```
elempyra13 = Fem.FemMesh()
nodes = pyra13.Nodes
for n in nodes:
    elempyra13.addNode(nodes[n].x, nodes[n].y, nodes[n].z, n)

elempyra13.addVolume([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 88)
obj = App.ActiveDocument.addObject("Fem::FemMeshObject", "elempyra13")
obj.FemMesh = elempyra13
obj.Placement.Base = FreeCAD.Vector(320, 0, 0)
obj.ViewObject.DisplayMode = "Faces, Wireframe & Nodes"
print(elempyra13.Volumes)

```

## Exemples de script pour les groupes

Voir par exemple <https://forum.freecadweb.org/viewtopic.php?f=18&t=37304&start=20#p318823>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Mesh/fr&oldid=1479367>"
