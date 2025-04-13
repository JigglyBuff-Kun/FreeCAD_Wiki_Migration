---
title: Draft Shape2DView
---
|  |
| --- |
| Draft Shape2DView |
| poziția meniului |
| Draft -> Shape 2D View |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Acest instrument plasează în document un obiect 2D care este o vedere aplatizată a unui obiect selectat [Shape](/Part_Workbench "Part Workbench"), proiectat în direcția curentă de vizualizare.

Draft Shape2DView projections can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") command. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own projection commands. But these create projections that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Draft_Shape2DView_example.jpg)

Projection of solid shapes onto the XY plane

## Cum se folosește

1. Selectați obiectul din care doriți să extrageți o vizualizare 2D
2. Rotiți vizualizarea (sau utilizați comenzile rapide de presetare a vizualizării), astfel încât să reflecte direcția în care doriți să proiectați obiectul. De exemplu, folosirea unei vederi de sus va proiecta obiectul pe planul XY, pe verticală de-a lungul axei Z ca în imaginea de mai sus.
3. Apăsați butonul ![](/images/Draft_Shape2DView.png) [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView")

## How to produce plans and sections with different linewidths

![](/images/Draft_shape2dview_example_plan.png)

Drawings with different linewidths for viewed and cut lines can easily be produced by using two shape2Dview objects from a same [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"). One of the shape2Dview objects has its projection mode set to **Solid**, which renders the viewed lines, and another set to **Cut lines** or **Cut faces** to render the cut lines. The two shape2Dviews are then placed at the same location, one on top of the other.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft Shape2DView object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Date **Proiectare**: direcția proiecției.
* Date **Mod de proiecție**: Modul de proiecție: fețe solide, individuale sau tăieturi.
* Date **In Place**: Dacă este adevărat, atunci când se utilizează Cutlines sau Cutfaces mode (doar [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane")), rezultatul va apărea la locația planului tăiat în loc de planul de masă [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
* Date **HiddenLines**: Afișează linii ascunse sau nu
* Date **Tessellation**: Tessellate Ellipses și BSplines în segmente de linie
* Date **Lungimea segmentului**: mărimea segmentelor dacă Tessellation este activată
* Date **Numai vizibil**: Dacă este adevărat, această vizualizare va fi recuperată numai dacă este vizibilă

### View

Draft

* Vizualizare**Pattern** (`Enumeration`): not used.
* Vizualizare**Pattern Size** (`Float`): not used.

## Scripting

## Scrip-Programare

InstrumentulDraft Shape2DView poate fi utilizat în [macros](/Macros "Macros") și de la consola Python folosind următoarele funcții:

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* Adăugă o formă 2D la document, care este o proiecție 2D a obiectului dat.
* De asemenea, poate fi dat un vector specific de proiecție.
* Returnează obiectul generat.
* Puteți să furnizați, de asemenea, o listă cu numerele de față care trebuie luate în considerare.

Change the `ProjectionMode` property of the created object if required. It can be: `"Solid"`, `"Individual Faces"`, `"Cutlines"`, `"Cutfaces"` or `"Solid faces"`.

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/ro&oldid=1257392>"