---
title: Arch Bara de armătură îndoită
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Arch Rebar BentShape                                                                                      |
| Menu location                                                                                             |
| Arch → Rebar tools                                                                                        |
| Workbenches                                                                                               |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                            |
| Default shortcut                                                                                          |
| None                                                                                                      |
| See also                                                                                                  |
| [Stirrup](/Arch_Rebar_Stirrup "Arch Rebar Stirrup")                                                       |
|                                                                                                           |
| This command is part of the **Reinforcement AddOn**, that you can install via menu Tools → Addons Manager |
|                                                                                                           |

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Reinforcement BentShapeRebar                                                                               |
| Menu location                                                                                              |
| 3D/BIM → Reinforcement tools → Bent-Shape Rebar                                                            |
| Workbenches                                                                                                |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                                           |
| _None_                                                                                                     |
| Introduced in version                                                                                      |
| 0.17                                                                                                       |
| See also                                                                                                   |
| _None_                                                                                                     |
|                                                                                                            |

## Descriere

Instrumentul ![](/images/Arch_Rebar_BentShape.png) Bent Shape Rebar permite utilizatorului să creeze o formă de armătură bent shape reinforcing bar în elementul de structură.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_BentShape_example.png)

![](/images/BentShapeRebar.png)

## Cum se folosește

1. Creați un elemente de [structure](/Arch_Structure "Arch Structure")
2. Selectați orice fațetă a structurii
3. Apoi selectați ![](/images/Arch_Rebar_BentShape.png) Bent Shape Rebar dintre instrumentele dedicate rebar tools
4. Un panou de activități contextual va apărea în partea stângă a ecranului, după cum se arată mai jos ![](/images/BentShapeDialog.png)
5. Selectați orientarea dorită
6. Definiți datele inițiale ca și capacul frontal, capacul din stânga, capacul din dreapta, capacul inferior, capacul superior, lungimea ancorei, unghiul îndoit, rotunjirea și diametrul barei
7. Selectați modul de distribuire fie cantitate, fie spațiere
8. Dacă spațiul este selectat, un utilizator poate de asemenea să opteze pentru [spacing custom](/Custom_Spacing "Custom Spacing")
9. Selectați fațete utilizată petnru a verifica sau schimba faștea pentru distrubuția armăturii/ rebar distribution
10. Click pe OK sau pe Apply pentru a genera armăturile
11. Click pe Cancel pentru a ieși din task panel

![](/images/BentShapeDialog.png)

Task panel for the tool

## Proprietăți

- Date**Orientation**: Acesta decide orientarea armăturii (de ex. jos, sus, drepta și stânga).
- Date**Front Cover**: Distanța dintre armături și fațetele selectate.
- Date**Right Cover**: Distanța între capătul dintre capătul dreapta al armăturii și fațeta dreapta a structurii.
- Date**Left Cover**: Distanța dintre capătul din stânga al armăturii și fațeta stângă a structurii
- Date**Bottom Cover**: Distanța dintre armătură și fațeta de jos a structurii.
- Date**Top Cover**: Distanța dintre armătură și fața superioară a structurii.
- Date**Anchor Length**: Aceasta este lungimea brațelor armăturii îndoite/bent shape rebar.
- Date**Bent Angle**: Stabilește unghiul de îndoire a bent shape rebar.
- Date**Amount**: Cantitatea de armătură.
- Date**Spacing**: Distanța între acele fiecărei bare.

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Instrumentul ![](/images/Arch_Rebar_BentShape.png) Bent Shape Rebar poate fi utilizat în [macros](/Macros "Macros") și de la consola Python console utilizând următorele funcții:

```
Rebar = makeBentShapeRebar(f_cover, b_cover, l_cover, r_cover,
                           diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                           structure=None, facename=None)

```

- Bent Shape Rebar are patru orientări diferite:
  - Bottom
  - Top
  - Left
  - Right
- Adaugă un obiect Bent Shape reinforcing bar la obeictul structural selectat .
- Dacă nu este dată nici o structură și nici o Facename, ea va avea ca intrare fațeta selectată de utilizator.
- Aici argumentul CoverAlong este de tip tuplă.
- Returnează noul obiect Rebar.

### Example

```
import FreeCAD, Arch, BentShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=100)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = BentShapeRebar.makeBentShapeRebar(50, 20, 20, 20,
                                          8, 40, 100, 135, 2, True, 4, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = BentShapeRebar.makeBentShapeRebar(50, 40, 20, 20,
                                           8, 20, 100, 135, 2, True, 4, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editBentShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                   diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation,
                   structure=None, facename=None)

```

- `Rebar` is a previously created `BentShapeRebar` object.
- The other parameters are the same as required by the `makeBentShapeRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import BentShapeRebar

BentShapeRebar.editBentShapeRebar(Rebar, 50, 20, 20, 20,
                                  12, 20, 100, 155, 2, True, 6, "Top")

BentShapeRebar.editBentShapeRebar(Rebar2, 50, 35, 20, 20,
                                  12, 35, 100, 155, 2, True, 6, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BentShapeRebar/ro&oldid=1433584>"
