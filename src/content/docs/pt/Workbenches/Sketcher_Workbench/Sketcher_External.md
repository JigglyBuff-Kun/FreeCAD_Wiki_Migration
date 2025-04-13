---
title: Sketcher External
---
|  |
| --- |
| Sketcher External |
| Localização do menu |
| Sketch → Sketcher geometries → Sketcher External |
| Bancadas de trabalho |
| [Sketcher](/Sketcher_Workbench/pt "Sketcher Workbench/pt") |
| Atalho padrão |
| X |
| Introduzido na versão |
| - |
| Veja também |
| [Sketcher ConstructionMode](/Sketcher_ToggleConstruction/pt "Sketcher ToggleConstruction/pt") |
|  |

## Description

1.0 and below: The ![](/images/Sketcher_External.svg) [Sketcher External](/Sketcher_External "Sketcher External") tool projects edges and/or vertices belonging to objects outside the sketch onto the sketch plane. The projected geometry is called "external geometry". It stays parametrically linked to its source objects. External geometry edges are marked with a dedicated [color](/Sketcher_Preferences#Appearance "Sketcher Preferences") (default magenta) and ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) linetype. Similar to construction geometry, external geometry is not visible outside the sketch, it is intended to help define constraints and other geometry inside the sketch itself.

1.1 and above: See ![](/images/Sketcher_Projection.svg) [Sketcher Projection](/Sketcher_Projection "Sketcher Projection")

![](/images/Sketcher_ExternalEsempio1.png)

The two magenta lines are external geometry linked to edges of a pre-existing [Pad](/PartDesign_Pad "PartDesign Pad"). They are used to constrain the circles.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_External.svg) [Create external geometry](/Sketcher_External "Sketcher External") button.
   * Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_External.svg) Create external geometry** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_External.svg) Create external geometry** option from the context menu.
   * Use the keyboard shortcut: G then X.
2. The cursor changes to a cross with the tool icon.
3. Select an external edge or a vertex. See [Notes](#Notes).
4. External geometry is created.
5. This tool always runs in continue mode: optionally keep selecting external edges and/or a vertices.
6. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

* Only edges and vertices from objects within the same coordinate system can be selected. The sketch and the object must be in same [Body](/PartDesign_Body "PartDesign Body"), or the same [Part](/Std_Part "Std Part"), or both in the global coordinate system. Use a [Binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") to bring a copy of the object into the current coordinate system if required.
* Circular dependencies are not allowed. You cannot link to an object that depends on the sketch itself.
* Links to elements from other sketches are possible, and encouraged, as they are more reliable than links to generated (solid) geometry. The latter can suffer from the [Topological Naming Problem](/Topological_naming_problem "Topological naming problem"). See [Advice for stable models](/Feature_editing#Advice_for_creating_stable_models "Feature editing").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/pt&oldid=1512578>"