---
title: Arch Rebar LShape/Armătura în L
---

|                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch Rebar LShape                                                                                                                                       |
| poziția meniului                                                                                                                                        |
| Arch → Rebar tools                                                                                                                                      |
| Ateliere                                                                                                                                                |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro"), [BIM](/index.php?title=BIM_Workbench/ro&action=edit&redlink=1 "BIM Workbench/ro (page does not exist)") |
| scurtătură                                                                                                                                              |
| _Nici unul_                                                                                                                                             |
| Prezentat în versiune                                                                                                                                   |
| 0.17                                                                                                                                                    |
| A se vedea, de asemenea,                                                                                                                                |
| [Bent Rebar](/Arch_Rebar_BentShape/ro "Arch Rebar BentShape/ro"), [Rebar](/Arch_Rebar/ro "Arch Rebar/ro")                                               |
|                                                                                                                                                         |

## Descriere

Instrumentul ![](/images/Arch_Rebar_LShape.png) LShape Rebar permite utilizatorului să creeze o armătură LShape reinforcing bar în elementele structurale.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_LShape_example.png)

![](/images/LShapeRebarNew.png)

## Cum se folosește

1. Create a [structure](/Arch_Structure "Arch Structure") element
2. Select any face of the structure
3. Then select ![](/images/Arch_Rebar_LShape.png) LShape Rebar from the rebar tools
4. A task panel will pop-out on the left side of the screen as shown below ![](/images/LShapeDialog.png)
5. Select the desired orientation
6. Give the inputs like front cover, left side cover, right side cover, bottom cover, top cover, rounding and diameter of the rebar
7. Select the mode of distribution either amount or spacing
8. If spacing is selected, a user can also opt for [custom spacing](/Custom_Spacing "Custom Spacing")
9. Pick selected face is used to verify or change the face for rebar distribution
10. Click OK or Apply to generate the rebars
11. Click Cancel to exit the task panel

![](/images/LShapeDialog.png)

Task panel for the tool

## Proprietăți

- Date**Orientation**: Stabilește orientarea armăturii (ca de ex jos, sus, dreapta și stânga).
- Date**Front Cover**: Distanța dintre armături și fațetele selectate.
- Date**Right Cover**: Distanța între capătul dintre capătul dreapta al armăturii și fațeta dreapta a structurii.
- Date**Left Cover**: Distanța dintre capătul din stânga al armăturii și fațeta stângă a structurii
- Date**Bottom Cover**: Distanța dintre armătură și fațeta de jos a structurii.
- Date**Top Cover**: Distanța dintre armătură și fața superioară a structurii.
- Date**Rounding**: o valoarea a racordării de aplicat la colțutile barelor , exprimată în raport cu diametrul acestora.
- Date**Amount**: Cantitatea de armătură
- Date**Spacing**: Distanța dintre acele fiecărei bare.

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The ![](/images/Arch_Rebar_LShape.png) LShape Rebar tool can by used in [macros](/Macros "Macros") and from the python console by using the following function:

```
Rebar = makeLShapeRebar(f_cover, b_cover, l_cover, r_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom Left",
                        structure=None, facename=None):

```

- O armătură tip LShape Rebar are patru orientări diferite:
  - Bottom Right
  - Bottom Left
  - Top Right
  - Top Left
- Adaugă obiectul LShape reinforcing bar la obiectul structural selectat.
- Dacă nu este dată nici o Structură și nici o Facename, ea va avea ca intrare fațeta selectat de utilizator.
- Aici argumentul CoverAlong este de tip tuplă.
- Returnează noul obiect Rebar.

### Example

```
import FreeCAD, Arch, LShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = LShapeRebar.makeLShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom Left", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = LShapeRebar.makeLShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom Left", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editLShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

- `Rebar` is a previously created `LShapeRebar` object.
- The other parameters are the same as required by the `makeLShapeRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import LShapeRebar

LShapeRebar.editLShapeRebar(Rebar, 50, 50, 20, 20,
                            12, 50, 6, True, 5, "Top Right")

LShapeRebar.editLShapeRebar(Rebar2, 50, 50, 20, 20,
                            12, 70, 6, True, 5, "Top Right")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_LShapeRebar/ro&oldid=1433655>"
