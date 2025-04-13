---
title: OpenSCAD CSG
---
## Importar

### Elementos soportados

* primitivas: cubo, esfera, cilindro, cuadrado, circunferencia, polígono, poliedro
* booleanas: unión, diferencia, intersección
* extrusión lineal, revolución
* importar (dxf, stl, off) (sin escalado o transformación del origen)
* matriz múltiple
* color

### Elementos no soportados

* proyección
* superficie
* render (ignorado)
* operaciones en general: minkowski, deslizar, ruta, subdivisión, cáscara

## Exportar

### Elementos soportados

* primitivas: Caja, cilindro, Cono, Toro
* booleanas: corte, fusión, común

### Recursos

Todo objeto derivado de Part::Feature que aún no es soportado será mallado y exportado como un elemento poliédrico

## Related

* [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench")
* [Import Export](/Import_Export "Import Export")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_CSG/es&oldid=819792>"