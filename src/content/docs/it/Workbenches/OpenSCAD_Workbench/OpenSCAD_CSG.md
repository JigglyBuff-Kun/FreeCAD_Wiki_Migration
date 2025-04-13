---
title: OpenSCAD CSG
---
## Importazione

### Elementi supportati

* primitive: cubo, sfera, cilindro, rettangolo, circonferenza, poligono, poliedro
* booleane: unione, differenza, intersezione
* estrusione lineare, rivoluzione
* importazione (dxf, stl, off) (senza scalatura o trasformazione dell'originale)
* matrici multiple
* colore

### Elementi non supportati

* proiezioni
* superficie
* renderizzazione (ignorata)
* operazioni in generale: minkowski, glide, path, subdiv, hull

## Esportazione

### Elementi supportati

* primitive: parallelepipedo, cilindro, Cono, Toro
* booleane: differenza, fusione, intersezione

### Ripiego

Qualsiasi oggetto derivato da Part::Feature che non è (ancora) supportato viene grigliato (mesh) ed esportato come un elemento poliedrico

## Correlazioni

* [Ambiente OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it")
* [Importazione e Esportazione](/Import_Export/it "Import Export/it")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_CSG/it&oldid=819790>"