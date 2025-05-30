---
title: Site From Contours
---

|                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Site From Contours                                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                                            |
| Crée un Arch site à partir d'une série de contours. Version macro : 1.0 Date dernière modification : 2018-08-30 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/File:Macro_Site_From_Contours.png) Auteur: yorik |
| Auteur                                                                                                                                                                                                                                                 |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                      |
| Téléchargement                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/File:Macro_Site_From_Contours.png)                                                                                                                                                                      |
| Liens                                                                                                                                                                                                                                                  |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                       |
| Version Macro                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                  |
| 2018-08-30                                                                                                                                                                                                                                             |
| Version(s) FreeCAD                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                 |
| Voir aussi                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                        |

## Description

Cette macro vous permet de sélectionner une série d'objets contenant des contours de différents niveaux et de créer un site (terrain) Arch à partir de ceux-ci. Les contours peuvent être regroupés dans un nombre quelconque d’objets et n’ont pas besoin de former des fils fermés. Tout cela sera pris en charge par la macro. En interne, une bspline sera créée à partir de chaque contour, puis des surfaces réglées seront créées entre les contours, puis ces surfaces réglées seront réunies dans un objet shell (coquille), et finalement un site (terrain) Arch sera créé en utilisant ce shell comme terrain.

![](/images/Macro_Site_From_Contour_Example.jpg)

## Script

ToolBar Icon ![](/images/Macro_Site_From_Contours.png)

**Macro Site From Contours.FCMacro**

```
# This macro builds an Arch Site object out of different level curves.
# It doesn't matter how many object contain the curves or if they
# are connected into wires or not.

import FreeCAD,FreeCADGui,Part,Draft,DraftGeomUtils,Arch

# first build a list of edges from selected objects

edges = []
for obj in FreeCADGui.Selection.getSelection():
    edges.extend(obj.Shape.Edges)

# sort our edges into connected wires

wires = DraftGeomUtils.findWires(edges)

# build a bspline for each wire

bsplines = []
for wire in wires:
    points = []
    for vert in wire.Vertexes:
        points.append(vert.Point)
    bspline = Draft.makeBSpline(points)
    bsplines.append(bspline)

# hide the bsplines

for bspline in bsplines:
    bspline.ViewObject.hide()

# sort the bsplines by elevation (we use the z of their first point to sort)

bsplines.sort(key=lambda b: b.Points[0].z)

# build one ruled surface from each pair of bsplines

ruledsurfaces = []
for i in range(len(bsplines)-1):
    ruled = FreeCAD.ActiveDocument.addObject('Part::RuledSurface', 'TerrainSection')
    ruled.Curve1 = (bsplines[i],[''])
    ruled.Curve2 = (bsplines[i+1],[''])
    ruledsurfaces.append(ruled)

# hide the ruled surfaces

for ruled in ruledsurfaces:
    ruled.ViewObject.hide()

# at this stade we need to recompute to build all the shapes before getting the faces

FreeCAD.ActiveDocument.recompute()

# make a shell object out of all the ruled surfaces

faces = []
for ruled in ruledsurfaces:
    faces.extend(ruled.Shape.Faces)
shell = Part.Shell(faces)
terrain = FreeCAD.ActiveDocument.addObject('Part::Feature', 'Terrain')
terrain.Shape = shell

# make a site object using our shell as terrain

site = Arch.makeSite()
site.Terrain = terrain

# recompute one last time

FreeCAD.ActiveDocument.recompute()
```

## Liens

La discussion sur le forum [Create Toposurface from DXF](https://forum.freecadweb.org/viewtopic.php?f=3&t=30569)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Site_From_Contours/fr&oldid=692518>"
