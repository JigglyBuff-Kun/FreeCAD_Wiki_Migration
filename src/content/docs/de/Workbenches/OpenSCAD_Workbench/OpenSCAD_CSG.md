---
title: OpenSCAD CSG
---
## Importieren

### Unterstützte Elemente

* Grundelemente: Würfel, Kugel, Zylinder, Quadrat, Kreis, Polygon, Polyeder
* Boolesche Operationen: Vereinigung, Differenz, Schnittpunkt
* linearextrude, rotateextrude
* Importieren (dxf, stl, off) (ohne Skalierung oder Transformation des Ursprungs)
* multmatrix
* Farbe

### Nicht unterstützte Elemente

* Projektion
* Oberfläche
* rendern (ignoriert)
* cgal Operationen: minkowski, glide, path, subdiv, hull

## Exportieren

### Unterstützte Elemente

* Grundelemente: Quader, Zylinder, Kegel, Torus
* boolesche Operationen: Schneiden, Verschmelzen, Gemeinsam

### Rückgriff

Jedes von Part::Feature abgeleitete Objekt, das (noch) nicht unterstützt wird, wird vernetzt und als Polyederelement exportiert

## Verwandtes

* [Arbeitsbereich OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de")
* [Importieren Exportieren](/Import_Export/de "Import Export/de")
* [FreeCAD Wie Importieren Exportieren](/index.php?title=FreeCAD_Howto_Import_Export/de&action=edit&redlink=1 "FreeCAD Howto Import Export/de (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_CSG/de&oldid=926085>"