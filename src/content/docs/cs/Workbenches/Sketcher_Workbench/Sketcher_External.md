---
title: Skicář Povrchový náčrt
---
|  |
| --- |
| Sketcher External |
| Umístění Menu |
| Sketch → Sketcher geometries → Sketcher External |
| Pracovní stoly |
| [Sketcher](/Sketcher_Workbench/cs "Sketcher Workbench/cs") |
| Výchozí zástupce |
| X |
| Představen ve verzi |
| - |
| Viz také |
| [Sketcher ConstructionMode](/Sketcher_ToggleConstruction/cs "Sketcher ToggleConstruction/cs") |
|  |

## Popis

Tento nástroj přetáhne linky konstrukce do aktuálního náčrtu. Když jsou linky přetaženy, zobrazí se v náčrtu v barvě magenta a můžete na ně navázat linky v náčrtu a rozměry.

1.1 and above: See ![](/images/Sketcher_Projection.svg) [Sketcher Projection](/Sketcher_Projection "Sketcher Projection")

![](/images/Sketcher_ExternalEsempio1.png)

The two magenta lines are external geometry linked to edges of a pre-existing [Pad](/PartDesign_Pad "PartDesign Pad"). They are used to constrain the circles.

## Použití

* Začněte náčrt na ploše tělesa (klikněte na plochu tělesa, potom klikněte na tlačítko pro vytvoření náčrtu)
* Klikněte na tlačítko 'Povrchový náčrt'
* Vyberte linky tělesa, které chcete přetáhnout do náčrtu (pamatujte na to, že to musejí být linky ve stejné rovině jako je náčrt)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/cs&oldid=1512582>"