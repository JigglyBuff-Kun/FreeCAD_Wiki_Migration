---
title: Part Shapebuilder
---
|  |
| --- |
| Part Shapebuilder |
| Menyplacering |
| Part -> Shapebuilder... |
| Arbetsbänkar |
| [Part](/Part_Workbench/sv "Part Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| [Part CreatePrimitives](/Part_CreatePrimitives/sv "Part CreatePrimitives/sv") |
|  |

## Description

A tool to create more complex shapes from various parametric geometric primitives.

## Usage

This tool can create the following objects:

### Edge from two vertices

1. Select two vertices
2. Click on Create

![](/images/Edge_from_verts-1.gif)

### Wire from edges

1. Select a set of adjacent edges in the [3D view](/3D_view "3D view")
2. Click on Create

![](/images/Wire_from_edges-1.gif)

### Face from vertices

1. Select vertices bounding the face in the [3D view](/3D_view "3D view")
2. Select if face should be planar
3. Click on Create
4. Object will be created in [3D view](/3D_view "3D view") and will be listed in [tree view](/Tree_view "Tree view")

![](/images/Face_from_verts.gif)

### Face from edges

1. Select a closed set of edges bounding the face in the [3D view](/3D_view "3D view")
2. Select if face should be planar
3. Click on Create
4. Object will be created in [3D view](/3D_view "3D view") and will be listed in [tree view](/Tree_view "Tree view")

![](/images/Face_from_edges.gif)

### Shell from faces

1. Select faces in the [3D view](/3D_view "3D view")
2. Select if the shape should be refined
3. Select if all faces should be included in shell
4. Click on Create
5. Object will be created in [3D view](/3D_view "3D view") and will be listed in [tree view](/Tree_view "Tree view")

### Solid from shell

1. Select if the shape should be refined
2. Click on Create
3. Object will be created in [3D view](/3D_view "3D view") and will be listed in [tree view](/Tree_view "Tree view")

## Notes

A possible workflow could be:

* Draw a wireframe-model of your shape using the tools in the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench") (for example line and dwire)
* Create all faces with "face from edges"
* Create a "shell from faces"
* Create a "solid from shell"

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Builder/sv&oldid=1002233>"