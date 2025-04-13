---
title: Kreslení TělesoDo2D
---
|  |
| --- |
| Kreslení TělesoDo2DPohledu |
| Umístění Menu |
| Kreslení -> TělesoDo2D |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Tento nástroj umístí do dokumentu 2D objekt, který vznikne zploštěním pohledu vybraného tvaru založeného na objektu [díl](/Part_Workbench/cs "Part Workbench/cs").

Draft Shape2DView projections can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") command. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own projection commands. But these create projections that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Draft_Shape2DView_example.jpg)

Projection of solid shapes onto the XY plane

## Použití

1. Vyberte objekt, ze kterého chcete extrahovat 2D pohled
2. Stiskněte tlačítko ![](/images/Draft_Shape2DView.png) Kreslení TělesoDo2D

## How to produce plans and sections with different linewidths

![](/images/Draft_shape2dview_example_plan.png)

Drawings with different linewidths for viewed and cut lines can easily be produced by using two shape2Dview objects from a same [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"). One of the shape2Dview objects has its projection mode set to **Solid**, which renders the viewed lines, and another set to **Cut lines** or **Cut faces** to render the cut lines. The two shape2Dviews are then placed at the same location, one on top of the other.

## Vlastnosti

See also: [Property editor](/Property_editor "Property editor").

A Draft Shape2DView object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Projection**: Směr projekce.
* Údaje**Projection Mode**: Projekční mód: těleso, individuální plochy nebo řezné čáry.

### View

Draft

* Pohled**Pattern** (`Enumeration`): not used.
* Pohled**Pattern Size** (`Float`): not used.

## Scripting

## Skriptování

Nástroj TělesoDo2D může být použit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* Přidá 2D tvar do dokumentu, tvar je 2D projekce zadaného objektu.
* Může být specifikován projekční vektor.
* Vrací vygenerovaný objekt.
* Může být zadán seznam čísel ploch, které mají být použity.

Change the `ProjectionMode` property of the created object if required. It can be: `"Solid"`, `"Individual Faces"`, `"Cutlines"`, `"Cutfaces"` or `"Solid faces"`.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 500
box.Height = 1000

shape1 = Draft.make_shape2dview(box)

shape2 = Draft.make_shape2dview(box, App.Vector(1, -1, 1))

shape3 = Draft.make_shape2dview(box, App.Vector(-1, 1, 1), [0, 5])
shape3.ProjectionMode = "Individual Faces"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/cs&oldid=1257381>"