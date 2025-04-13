---
title: Arch Bara de armătură îndoită în U
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Arch Rebar UShape                                                                                         |
| Menu location                                                                                             |
| Arch → Rebar tools                                                                                        |
| Workbenches                                                                                               |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                            |
| Default shortcut                                                                                          |
| None                                                                                                      |
| See also                                                                                                  |
| [LShape Rebar](/Arch_Rebar_LShape/ro "Arch Rebar LShape/ro")                                              |
|                                                                                                           |
| This command is part of the **Reinforcement AddOn**, that you can install via menu Tools → Addons Manager |
|                                                                                                           |

## Descriere

Instrumentul ![](/images/UShapeRebar.png) UShape Rebar permite utilizatorului să creeze o armătură UShape reinforcing în elementul structural.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_UShape_example.png)

![](/images/Footing_UShapeRebar.png)

## Cum se folosește

1. Creați un element [structure](/Arch_Structure "Arch Structure")
2. Selectați orice fațetă a structurii
3. Apoi selectați butonul ![](/images/UShapeRebar.png) UShape Rebar dintre instrumentele penru armături/rebar tools
4. Un task panel contextual va apărea în stânga ecranului după cum se vede în ecranul de mai jos ![](/images/UShapeDialog.png)
5. Selectați orientarea dorită
6. Dați datele inițiale cum ar fi capacul frontal, capacul lateral din dreapta, capacul din partea stângă, capacul inferior, capacul superior, factorul de rotunjire și diametrul barei
7. Selectați modul de distribuție sau mărimea spațiului
8. Dacă spațierea este selectată, un utilizator poate de asemenea să opteze pentru [custom spacing](/Custom_Spacing "Custom Spacing")
9. Alegeți fața selectată care este utilizată pentru a verifica sau schimba fațeta pentru distribuția barei
10. Click pe tasta OK sau Apply pentru a genera armături rebars
11. Click pe tasta Cancel pentru a ieși din task panel

![](/images/UShapeDialog.png)

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

Instrumentul ![](/images/UShapeRebar.png) UShape Rebar poate fi utilizat în [macros](/Macros "Macros") și din consola Python prin utilizarea următoarea funcție:

```
Rebar = makeUShapeRebar(f_cover, b_cover, r_cover, l_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                        structure=None, facename=None)

```

- Armătura UShape Rebar are patru orientări diferite:
  - Bottom
  - Top
  - Right
  - Left
- Adaugă un obiect tip UShape reinforcing bar șa obiectul structural dat.
- Dacă nu este dată nici o structură și nic o Facename, ea va avea ca intrare fațeta selectată de utilizator.
- Returnează noul obiect Rebar

Exemplu:
Crearea unei armături tip bară în U.

```
import FreeCAD, Arch, UShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = UShapeRebar.makeUShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = UShapeRebar.makeUShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

Schimbarea proprietăților barei în U.

```
editUShapeRebar(Rebar, f_cover, b_cover, r_cover, l_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

- `Rebar` is a previously created `UShapeRebar` object.
- The other parameters are the same as required by the `makeUShapeRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import UShapeRebar

UShapeRebar.editUShapeRebar(Rebar, 50, 50, 20, 20,
                            16, 20, 5, True, 5, "Top")

UShapeRebar.editUShapeRebar(Rebar2, 70, 50, 20, 20,
                            16, 70, 5, True, 5, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_UShapeRebar/ro&oldid=1433694>"
