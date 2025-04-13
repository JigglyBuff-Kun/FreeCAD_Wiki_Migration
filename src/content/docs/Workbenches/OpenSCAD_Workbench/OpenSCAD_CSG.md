---
title: OpenSCAD CSG
---
## Import

### Supported Elements

* primitives: cube, sphere, cylinder, square, circle, polygon, polyhedron
* boolean: union, difference, intersection
* linearextrude, rotateextrude
* import (dxf, stl, off) (without scaling or transformation of origin)
* multmatrix
* color

### Unsupported Elements

* projection
* surface
* render (ignored)
* cgal operations: minkowski, glide, path, subdiv, hull

## Export

### Supported Elements

* primitives: Box, Cylinder, Cone, Torus
* boolean: Cut, Fuse, Common

### Fallback

Every object derived from Part::Feature which is not (yet) supported will get meshed and exported as a polyhedron element

## Related

* [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench")
* [Import Export](/Import_Export "Import Export")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_CSG/en&oldid=819791>"