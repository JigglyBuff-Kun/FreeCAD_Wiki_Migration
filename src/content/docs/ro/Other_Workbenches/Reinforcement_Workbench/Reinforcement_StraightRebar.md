---
title: Arch Armătură dreaptă
---

|                                                              |
| ------------------------------------------------------------ |
| Arch Rebar UShape                                            |
| poziția meniului                                             |
| Arch → Rebar tools                                           |
| Ateliere                                                     |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")               |
| scurtătură                                                   |
| None                                                         |
| Prezentat în versiune                                        |
| -                                                            |
| A se vedea, de asemenea,                                     |
| [LShape Rebar](/Arch_Rebar_LShape/ro "Arch Rebar LShape/ro") |
|                                                              |

## Description

## Descriere

Instrumentul ![](/images/Arch_Rebar_Straight.png) Straight Rebarpoate permite utilizatorului să creeze o bară de armare dreaptă în elementul structural.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_Straight_example.png)

![](/images/StraightRebar.png)

## Cum se folosește

1. Creați un element [Structura structură](/Arch_Structure/ro "Arch Structure/ro")
2. Selectați orice față a structurii
3. Apoi selectați ![](/images/Arch_Rebar_Straight.png) Șipcă drept din uneltele pentru bare
4. Un panou de activități va apărea în partea stângă a ecranului, după cum se arată mai jos ![](/images/StraightRebarDialog.png)
5. Selectați orientarea dorită
6. Dați intrările ca și capacul frontal, capacul lateral din dreapta, capacul lateral din stânga, capacul inferior și diametrul barei
7. Selectați modul de distribuire fie cantitate, fie spațiere
8. Dacă spațiul este selectat, un utilizator poate de asemenea să opteze pentru [spacing custom](/Custom_Spacing/ro "Custom Spacing/ro")
9. Selectează fața selectată este utilizată pentru a verifica sau schimba fața pentru distribuția barei
10. Faceți clic pe OK sau pe Apply pentru a genera barele de armare
11. Faceți clic pe Cancel pentru a ieși din panoul de activități

![](/images/StraightRebarDialog.png)

Task panel for the tool

## Proprietăți

- Date**Orientation**: Acesta decide orientarea armăturii (de ex. jos, sus, drepta și stânga).
- Date**Front Cover**: Distanța dintre armături și fațetele selectate.
- Date**Right Cover**: Distanța între capătul dintre capătul dreapta al armăturii și fațeta dreapta a structurii.
- Date**Left Cover**: Distanța dintre capătul din stânga al armăturii și fațeta stângă a structurii
- Date**Bottom Cover**: Distanța dintre armătură și fațeta de jos a structurii.
- Date**Top Cover**: Distanța dintre armătură și fața superioară a structurii.
- Date**Rounding**: O valoare de rotunjire care trebuie aplicată colțurilor barelor, exprimată în raport cu diametrul acestora.
- Date**Amount**: Cantitatea de armătură
- Date**Spacing**: Distnța dintre acele fiecărei bare.

## Scripting

## Scrip-Programare

Instrumentul ![](/images/Arch_Rebar_Straight.png) Straight Rebar poate fi utilizat în [macros](/Macros "Macros") și de la consola Python prin utilizarea următoarei funcții:

```
Rebar = makeStraightRebar(f_cover, coverAlong, rt_cover, lb_cover,
                          diameter, amount_spacing_check, amount_spacing_value, orientation="Horizontal",
                          structure=None, facename=None)

```

- Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.
- `f_cover`, `coverAlong`, `rt_cover`, and `lb_cover` are inner offset distances for the rebar elements with respect to the faces of the structure.
  - `f_cover` is the frontal cover offset.
  - `coverAlong` is a tuple `(position, value)` that defines the offset value in one position (top, bottom, left, right) depending on the `orientation`.
  - `rt_cover` is either the right or the top cover offset, depending on the value of `coverAlong` and `orientation`.
  - `lb_cover` is either the left or the bottom cover offset, depending on the value of `coverAlong` and `orientation`.
- `diameter` is the diameter of the reinforcement bars inside the structure.
- `amount_spacing_check` if it is `True` it will create as many reinforcement bars as given by `amount_spacing_value`; if it is `False` it will create reinforcement bars separated by the numerical value of `amount_spacing_value`.
- `amount_spacing_value` specifies the number of reinforcement bars, or the value of the separation between them, depending on `amount_spacing_check`.
- `orientation` specifies the orientation of the rebar; it can be `"Horizontal"` or `"Vertical"`.

Depending on the orientation of the rebar, the function can be called in two general ways by setting `coverAlong` appropriately.

### The rebar is horizontal

```
Rebar = makeStraightRebar(f_cover, ("Top Side", value), right_cover, left_cover, ...)
Rebar = makeStraightRebar(f_cover, ("Bottom Side", value), right_cover, left_cover, ...)

```

- `coverAlong` is a tuple with either a `"Top Side"` or a `"Bottom Side"` offset `value`.
- In this case `rt_cover` refers to the `right_cover` offset, and `lb_cover` refers to the `left_cover` offset.

### The rebar is vertical

```
Rebar = makeStraightRebar(f_cover, ("Left Side", value), top_cover, bottom_cover, ...)
Rebar = makeStraightRebar(f_cover, ("Right Side", value), top_cover, bottom_cover, ...)

```

- `coverAlong` is a tuple with either a `"Left Side"` or a `"Right Side"` offset `value`.
- In this case `rt_cover` refers to the `top_cover` offset, and `lb_cover` refers to the `bottom_cover` offset.

### Example horizontal

```
import Arch, Draft, StraightRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = StraightRebar.makeStraightRebar(50, ("Bottom Side", 20), 100, 100,
                                        12, True, 5, "Horizontal", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = StraightRebar.makeStraightRebar(50, ("Bottom Side", 50), 100, 100,
                                         12, True, 5, "Horizontal", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Example vertical

```
import Arch, Draft, StraightRebar

Structure2 = Arch.makeStructure(length=1000, width=1000, height=400)
Structure2.ViewObject.Transparency = 80
Draft.move(Structure2, FreeCAD.Vector(1500, 0, 0))
FreeCAD.ActiveDocument.recompute()

Rebar3 = StraightRebar.makeStraightRebar(50, ("Left Side", 20), 100, 100,
                                         12, True, 5, "Vertical", Structure2, "Face4")
Rebar3.ViewObject.ShapeColor = (0.9, 0.5, 0.0)

Rebar4 = StraightRebar.makeStraightRebar(50, ("Left Side", 50), 100, 100,
                                         12, True, 5, "Vertical", Structure2, "Face6")
Rebar4.ViewObject.ShapeColor = (0.0, 0.5, 0.5)

```

### Edition of rebar

Schimbarea proprietăților armăturii tip bară dreaptă.

```
editStraightRebar(Rebar, f_cover, coverAlong, rt_cover, lb_cover,
                  diameter, amount_spacing_check, amount_spacing_value, orientation,
                  structure=None, facename=None)

```

- `Rebar` is a previously created `StraightRebar` object.
- The other parameters are the same as required by the `makeStraightRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

Example:

```
import StraightRebar

StraightRebar.editStraightRebar(Rebar, 50, ("Top Side", 20), 100, 100,
                                24, True, 7, "Horizontal")

StraightRebar.editStraightRebar(Rebar2, 50, ("Top Side", 50), 100, 100,
                                24, True, 7, "Horizontal")

StraightRebar.editStraightRebar(Rebar3, 50, ("Right Side", 20), 100, 100,
                                24, True, 7, "Vertical")

StraightRebar.editStraightRebar(Rebar4, 50, ("Right Side", 50), 100, 100,
                                24, True, 7, "Vertical")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StraightRebar/ro&oldid=1433690>"
