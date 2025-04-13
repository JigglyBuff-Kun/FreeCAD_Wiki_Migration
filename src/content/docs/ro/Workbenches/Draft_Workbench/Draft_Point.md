---
title: Draft Punctul
---
|  |
| --- |
| Draft Punctul |
| poziția meniului |
| Draft → Point |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| P T |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Instrumentul Punct creează un punct simplu în planul curent [work plane](/Draft_SelectPlane/ro "Draft SelectPlane/ro"), util pentru a servi ca referință pentru plasarea mai multor obiecte mai târziu. Este nevoie de [color](/Draft_Linestyle/ro "Draft Linestyle/ro") setat anterior pe fila Activități.

![](/images/Draft_point_example.jpg)

## Cum se folosește

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Apăsați butonul ![](/images/Draft_Point.png) Draft Point, sau apăsați tasta P apoi apăsați tasta T
2. Click un punct în vizualizarea 3D, sau tastați coordinate

## Opţiuni

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Petru a introduce coordonatele manual, pur și simplu introduceți numerele, apoi apăsați tasta ENTER între fiecare componentă pe X, Y și Z .
* Apăsați tasta ESC sau butonul **Cancel** pentru a abandona linia de comandă curentă.

## Notes

* Use ![](/images/Draft_Snap_Endpoint.svg) [Draft Snap Endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint") to snap to Draft points.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft Point object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Draft

* DATE**X**: Coordonatele X ale punctului
* DATE**Y**: Coordonatele Y ale punctului
* DATE**Z**: Coordonatele Z ale punctului

### View

Draft

* Vizualizare**Pattern** (`Enumeration`): not used.
* Vizualizare**Pattern Size** (`Float`): not used.

## Scripting

## Scrip-Programare

Instrumentul Point poate fi utilizat în [macros](/Macros/ro "Macros/ro") și de la consola Python folosind următoarea funcție:

```
point = make_point(X=0, Y=0, Z=0, color=None, name="Point", point_size=5)
point = make_point(point, Y=0, Z=0, color=None, name="Point", point_size=5)

```

* creează un punct la coordonatele date. Dacă nu sunt date coordonate X, Y și Z, punctul este creat la (0,0,0). Returnează obiectul nou creat. "

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

point1 = Draft.make_point(1600, 1400, 0)

p2 = App.Vector(-3200, 1800, 0)
point2 = Draft.make_point(p2, color=(0.5, 0.3, 0.6), point_size=10)

doc.recompute()

```

Exempluː

This code creates `N` random points within a square of side `2L`. It makes a loop creating `N` points, that may appear anywhere from `-L` to `+L` on both X and Y. It also chooses a random color and size for each point. Change `N` to change the number of points, and change `L` to change the area covered by the points.

```
import random
import FreeCAD as App
import Draft

doc = App.newDocument()

L = 1000
centered = App.Placement(App.Vector(-L, -L, 0), App.Rotation())
rectangle = Draft.make_rectangle(2*L, 2*L, placement=centered)

N = 10
for i in range(N):
    x = 2*L*random.random() - L
    y = 2*L*random.random() - L
    z = 0
    r = random.random()
    g = random.random()
    b = random.random()
    size = 15*random.random() + 5
    Draft.make_point(x, y, z, color=(r, g, b), point_size=size)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Point/ro&oldid=1513509>"