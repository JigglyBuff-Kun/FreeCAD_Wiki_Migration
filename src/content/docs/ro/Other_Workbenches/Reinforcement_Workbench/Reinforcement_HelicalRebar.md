---
title: Arch Rebar Helical/Armătură elicoidală
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Arch Rebar Helical                                                                                        |
| Menu location                                                                                             |
| Arch → Rebar tools                                                                                        |
| Workbenches                                                                                               |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                            |
| Default shortcut                                                                                          |
| None                                                                                                      |
| See also                                                                                                  |
| [Arch Rebar](/Arch_Rebar/ro "Arch Rebar/ro")                                                              |
|                                                                                                           |
| This command is part of the **Reinforcement AddOn**, that you can install via menu Tools → Addons Manager |
|                                                                                                           |

## Descriere

Instrumentul ![](/images/Arch_Rebar_Helical.png) Helical Rebar permite utilizatorului să creeze o armătură elicoidală în elementul de structură.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

: ![](/images/Arch_Rebar_Helical_example.png)

![](/images/HelicalRebar.png)

## Cum se folosește

1. Creați un element [structure](/Arch_Structure "Arch Structure")
2. Selectați orice fațetă a structurii
3. Apoi selectați ![](/images/Arch_Rebar_Helical.png) Helix Rebar din uneltele pentru bare
4. Va apărea un panou de sarcini în partea stângă a ecranului, după cum se arată mai jos ![](/images/HelicalRebarDialog.png)
5. Selectați orientarea dorită
6. Dați intrările ca și capacul frontal, capacul lateral din dreapta, capacul lateral din stânga, capacul inferior și diametrul barei
7. Selectați fie modul de distribuire fie cantitate, fie spațiere
8. Dacă spațiul este selectat, un utilizator poate de asemenea să opteze pentru [spacing custom](/Custom_Spacing "Custom Spacing")
9. Selectează fațeta selectată este utilizată pentru a verifica sau schimba fața pentru distribuția barei
10. Faceți clic pe OK sau pe Apply pentru a genera barele de armare
11. Faceți clic pe Cancel pentru a ieși din panoul de activități

![](/images/HelicalRebarDialog.png)

Task panel for the tool

## Proprietăți

- Date**Side Cover**:distanța dintre armatură și fața curbată.
- Date**Top Cover**: Distanța dintre armătură din fața superioară a structurii.
- Date**Bottom Cover**: distanța dintre barele din partea inferioară a structurii.
- Date **Pitch**: Pasul unei spirale este înălțimea unei singure rotiri helix, măsurată paralel cu axa spiralei.
- Date **Diameter**: Diametrul barei.

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Instrumentul ![](/images/Arch_Rebar_Helical.png) Helical Rebar poate fi utilizat în [macros](/Macros "Macros") și de la consola Python prin utilizarea următoarei funcției:

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

- Adaugă un obiect Straight reinforcing bar la obiectul structural dat.
- Dacă nu este dată nici o structură și Facename, ea va avea ca intrare fațeta selectată de utilizator.
- Aici argumentul CoverAlong este de tip tuplă .
- Returnează noul obiect Rebar.

### Example

```
import FreeCAD, Draft, Arch, HelicalRebar

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = HelicalRebar.makeHelicalRebar(10, 50, 8, 50, 50, structure, "Face2")

```

### Edition of the rebar

You can change the properties of the rebar with the following function

```
editHelicalRebar(Rebar, s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

- `Rebar` is a previously created `HelicalRebar` object.
- The other parameters are the same as required by the `makeHelicalRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/ro&oldid=1433644>"
