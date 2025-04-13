---
title: Arch Rebar Stirrup
---

|                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch Rebar Stirrup                                                                                                                                      |
| poziția meniului                                                                                                                                        |
| Arch → Rebar tools                                                                                                                                      |
| Ateliere                                                                                                                                                |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro"), [BIM](/index.php?title=BIM_Workbench/ro&action=edit&redlink=1 "BIM Workbench/ro (page does not exist)") |
| scurtătură                                                                                                                                              |
| _Nici unul_                                                                                                                                             |
| Prezentat în versiune                                                                                                                                   |
| 0.17                                                                                                                                                    |
| A se vedea, de asemenea,                                                                                                                                |
| [Helical Rebar](/Arch_Rebar_Helical/ro "Arch Rebar Helical/ro"), [Rebar](/Arch_Rebar/ro "Arch Rebar/ro")                                                |
|                                                                                                                                                         |

## Descriere

Instrumentul ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar permite utilizatorului să creeze un

```
stirrup reinforcing bar în elementul de structură.

```

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_Stirrup_example.png)

![](/images/Stirrup.png)

## Cum se folosește

1. Creează un element [structure](/Arch_Structure "Arch Structure")
2. Select any face of the structure
3. Then select ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar from the rebar tools
4. A task panel will pop-out on the left side of the screen as shown below ![](/images/StirrupDialog.png)
5. Select the desired orientation
6. Give the inputs like left cover, right cover, top cover, bottom, front cover, bent angle, bent factor, rounding and diameter of the rebar
7. Select the mode of distribution either amount or spacing
8. If spacing is selected, a user can also opt for [custom spacing](/Custom_Spacing "Custom Spacing")
9. Pick selected face is used to verify or change the face for rebar distribution
10. Click OK or Apply to generate the rebars
11. Click pe Cancel ieșirea din task panel

![](/images/StirrupDialog.png)

Task panel for the tool

## Proprietăți

- Date**Front Cover**: Distanța dintre armături și fațetele selectate.
- Date**Right Cover**: Distanța între capătul dintre capătul dreapta al armăturii și fațeta dreapta a structurii.
- Date**Left Cover**: Distanța dintre capătul din stânga al armăturii și fațeta stângă a structurii
- Date**Bottom Cover**: Distanța dintre armătură și fațeta de jos a structurii.
- Date**Top Cover**: Distanța dintre armătură și fața superioară a structurii.
- Date**Bent Angle**: Bent angle defines the angle at the ends of a stirrup.
- Date**Bent Factor**: Bent Factor defines length of stirrup end.
- Date**Amount**: Cantitatea de armătură
- Date**Spacing**: Distanța dintre acele fiecărei bare.

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Instrumentul ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar poate fi utilizat în [macros](/Macros "Macros") și de la consola Python prin utilizarea următoarei funcției:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

- Adds a Stirrup reinforcing bar object to the given structural object.
- If no Structure and Facename is given, it will take user selected face as input.
- Here CoverAlong argument is having type tuple.
- Returns the new Rebar object.

Exemplu:
Crearea unei armături tip Stirrup rebar.

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Edition of the rebar

Schimbarea proprietăților barei Stirrup.

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

- `Rebar` is a previously created `StirrupRebar` object.
- The other parameters are the same as required by the `makeStirrup()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/ro&oldid=1433664>"
