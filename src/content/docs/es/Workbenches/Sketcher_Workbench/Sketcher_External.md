---
title: Croquizador Externo
---
|  |
| --- |
| Croquizador Externo |
| Ubicación en el Menú |
| Croquis → Croquizador Geometrías → Croquizador Externo |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| X |
| Introducido en versión |
| - |
| Ver también |
| [Croquizador ModoConstrucción](/Sketcher_ToggleConstruction/es "Sketcher ToggleConstruction/es") |
|  |

## Descripción

Usa la herramienta ![](/images/Sketcher_External.svg) Geometría externa cuando necesites aplicar una restricción entre la geometría del croquis y algo fuera del mismo. Funciona insertando una geometría de construcción vinculada en el croquis. El color por defecto de los bordes vinculadas externamente es el magenta. Al igual que con la geometría de construcción no vinculada estándar (azul), la geometría vinculada externamente sólo es visible cuando el croquis está en modo de edición y no se utiliza directamente en el resultado posterior del uso del croquis en otra herramienta. Ambos tipos de geometría de construcción pueden utilizarse como referencia para las restricciones dentro del croquis.

1.1 and above: See ![](/images/Sketcher_Projection.svg) [Sketcher Projection](/Sketcher_Projection "Sketcher Projection")

![](/images/Sketcher_ExternalEsempio1.png)

The two magenta lines are external geometry linked to edges of a pre-existing [Pad](/PartDesign_Pad "PartDesign Pad"). They are used to constrain the circles.

## Utilización

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Crear un nuevo croquis, o abrir un croquis existente.
* Haga clic en el botón 'Croquizador Externo'.
* Selecciona un borde o un vértice que quieras enlazar en el croquis.
* Pulsa Esc, o selecciona otra herramienta para dejar de importar geometría al croquis.

## Notes

* Only edges and vertices from objects within the same coordinate system can be selected. The sketch and the object must be in same [Body](/PartDesign_Body "PartDesign Body"), or the same [Part](/Std_Part "Std Part"), or both in the global coordinate system. Use a [Binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") to bring a copy of the object into the current coordinate system if required.
* Circular dependencies are not allowed. You cannot link to an object that depends on the sketch itself.
* Links to elements from other sketches are possible, and encouraged, as they are more reliable than links to generated (solid) geometry. The latter can suffer from the [Topological Naming Problem](/Topological_naming_problem "Topological naming problem"). See [Advice for stable models](/Feature_editing#Advice_for_creating_stable_models "Feature editing").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/es&oldid=1512581>"