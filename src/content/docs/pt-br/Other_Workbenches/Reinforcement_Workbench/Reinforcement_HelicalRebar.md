---
title: Armadura helicoidal
---
|  |
| --- |
| Reinforcement HelicalRebar |
| Menu location |
| 3D/BIM → Reinforcement tools → Helical Rebar |
| Workbenches |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| *None* |
|  |

## Descrição

The [Reinforcement HelicalRebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar") tool allows the user to create a continuous helical reinforcing bar inside an [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

:   ![](/images/Arch_Rebar_Helical_example.png)

One continuous helical reinforcement bar inside an [Arch Structure](/Arch_Structure "Arch Structure")

## Utilização

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.
2. Then select ![](/images/Reinforcement_HelicalRebar.svg) [Helical Rebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar") from the rebar tools.
3. A [task panel](/Task_panel "Task panel") will pop-out on the left side of the screen as shown below.
4. Select the desired orientation.
5. Populate the inputs like 'Left Cover', 'Right Cover', 'Top Cover', 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' and 'Diameter' of the rebar.
6. Select the mode of distribution either 'Amount' or 'Spacing'.
   * If 'Spacing' is selected, a user can also opt for [custom spacing](/Reinforcement_Custom_Spacing "Reinforcement Custom Spacing").
7. Pick Selected Face is used to verify or change the face for rebar distribution.
8. Click OK or Apply to generate the rebars.
9. Click Cancel to exit the task panel.

![](/images/HelicalRebarDialog.png)

Task panel for the tool

## Propriedades

* Dados**Side Cover**: The distance between rebar to the curved face.
* Dados**Top Cover**: The distance between rebar from the top face of the structure.
* Dados**Bottom Cover**: The distance between rebar from the bottom face of the structure.
* Dados**Pitch**: The pitch of a helix is the height of one complete helix turn, measured parallel to the axis of the helix.
* Dados**Diameter**: Diameter of the rebar.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement HelicalRebar tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `s_cover`, `b_cover`, and `t_cover` are inner offset distances for the rebar with respect to the faces of the structure. They are respectively the side, bottom, and top offsets.
* `diameter` is the diameter of the reinforcement spiral inside the structure.
* `pitch` is the parameter that determines how close or far apart each spiral loop is to each other.

### Exemplos

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

* `Rebar` is a previously created `HelicalRebar` object.
* The other parameters are the same as required by the `makeHelicalRebar()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/pt-br&oldid=1433639>"