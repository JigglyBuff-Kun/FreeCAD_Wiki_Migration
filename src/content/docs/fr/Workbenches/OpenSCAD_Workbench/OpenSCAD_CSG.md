---
title: OpenSCAD CSG
---
## Importation

### Éléments Supportés

* **primitives** : cube, sphère, cylindre, carré, cercle, polygones, polyèdre
* **booléenne** : union, différence, intersection
* linéaires extrudées, rotation extrudées
* importation (dxf, stl, off) (sans mise à l'échelle ou la transformation d'origine)
* multmatrix
* couleur

### Elements non supportés

* projection
* surface
* rendu (ignored)
* cgal opérations: minkowski, glide, path, subdiv, hull

## Exportation

### Éléments Supportés

* **primitives**: Box, Cylindre, Cône, Tore
* **booléen**: Coupure, Fusion, Common

### Secours

Les objets dérivés de **Part::Feature** ne sont pas (encore) pris en charge, les mailles sont exportées, comme un élément de polyèdre

## En relation

* [atelier OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr")
* [Import Export](/Import_Export/fr "Import Export/fr")
* [FreeCAD Comment importer exporter](/index.php?title=FreeCAD_Howto_Import_Export/fr&action=edit&redlink=1 "FreeCAD Howto Import Export/fr (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_CSG/fr&oldid=1085453>"