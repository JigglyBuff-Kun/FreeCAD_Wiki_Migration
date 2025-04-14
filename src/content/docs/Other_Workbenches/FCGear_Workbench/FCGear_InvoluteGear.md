---
title: FCGear InvoluteGear
---

|                                                                   |
| ----------------------------------------------------------------- |
| FCGear InvoluteGear                                               |
| Menu location                                                     |
| Gear → Involute Gear                                              |
| Workbenches                                                       |
| [FCGear](/FCGear_Workbench "FCGear Workbench")                    |
| Default shortcut                                                  |
| None                                                              |
| Introduced in version                                             |
| v0.16                                                             |
| See also                                                          |
| [FCGear CycloideGear](/FCGear_CycloideGear "FCGear CycloideGear") |
|                                                                   |

## Description

Due to the favourable meshing ratio and the relatively simple production, involute gearing is the most common tooth form in mechanical engineering. Gear wheels can be found wherever movement and force are to be transferred from one part to another. For example, they can be found in machines, cars, watches or household appliances. The movement is often transferred directly from one gear wheel to the other, but sometimes also via a chain. In addition, the direction of rotation can be changed. It is also possible to change a radial movement into a linear one via an [involute rack](/FCGear_InvoluteRack "FCGear InvoluteRack").

![](/images/Involute-Gear_example.png)

From left to right: Spur gearing, helical gearing, double helical gearing

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_InvoluteGear.svg) [Involute Gear](/FCGear_InvoluteGear "FCGear InvoluteGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_InvoluteGear.svg) Involute Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear InvoluteGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

accuracy

- Data**numpoints** (`Integer`): Default is `20`. Change of the involute profile. Changing the value can lead to unexpected results.
- Data**simple** (`Bool`): Default is `false`, `true` generates a simplified display (without teeth and only a cylinder in pitch diameter).

base

- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
- Data**num_teeth** (`Integer`): Default is `15`. Number of teeth (see [Notes](#Notes)).

computed

- Data**addendum_diameter** (`Length`): Default is `17 mm`. Outside diameter, measured at the addendum (the tip of the teeth).
- Data**angular_backlash** (`Angle`): (read-only) The angle by which this gear can turn without moving the mating gear.
- Data**pitch_diameter** (`Length`): Default is `15 mm`. The pitch diameter.
- Data**root_diameter** (`Length`): (read-only) The root diameter, measured at the foot of the teeth.
- Data**transverse_pitch** (`Length`): Default is `3.14 mm`. The transverse pitch.
- Data**traverse_module** (`Length`): Default is `1 mm`. The traverse module of the generated gear.

fillets

- Data**head_fillet** (`Float`): Default is `0 mm`. A fillet for the tooth-head.
- Data**root_fillet** (`Float`): Default is `0 mm`. A fillet for the tooth-root.
- Data**undercut** (`Bool`): Default is `false`, `true` changes the profile of the tooth root (see [Notes](#Notes)).

helical

- Data**double_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).
- Data**helix_angle** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left (see [Notes](#Notes)).
- Data**properties_from_tool** (`Bool`): Default is `false`. If `true` and Data**helix_angle** is not zero, gear parameters are recomputed internally for the rotated gear.

hole

- Data**Axle_hole** (`Bool`): Default is `false`. `true` enables a central hole for an axle.
- Data**Axle_holesize** (`Length`): Default is `10 mm`. Diameter of the hole for an axle.
- Data**offset_hole** (`Bool`): Default is `false`, `true` enables an offset hole.
- Data**offset_holeoffset** (`Length`): Default is `10 mm`. The offset of the offset hole.
- Data**offset_holesize** (`Length`): Default is `10 mm`. The diameter of the offset hole.

involute

- Data**pressure_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).
- Data**shift** (`Float`): Default is `0`. Generates a positive and negative profile shift (see [Notes](#Notes)).

tolerance

- Data**backlash** (`Length`): Default is `0`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.
- Data**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
- Data**head** (`Float`): Default is `0`. This value is used to change the tooth height.
- Data**reversed_backlash** (`Bool`): `true` backlash decrease or `false` (default) backlash increase see [Notes](#Notes)).

version

- Data**version** (`String`):

## Notes

- _beta_: When _beta_ is changed, _pitch diameter_ also changes. The following formula illustrates how the parameters interact: d = m \* Z / cos beta (Z = number of teeth, d = pitch diameter, m = module). This means for the spur gear: cos beta = 0 and for the helical gear: cos beta > 0. However, a helix angle of less than 10° has hardly any advantages over straight teeth.
- _clearance_: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
- _double_gear_: To use the double helical gearing the helix angle β (_beta_) for the helical gearing must first be entered.
- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.
- _shift_: Profile shift is not merely used to prevent undercut. It can be used to adjust center distance between two gears. If a positive correction is applied, such as to prevent undercut in a pinion, the tooth thickness at top is thinner.
- _teeth_: If the number of teeth is changed, the pitch diameter also changes (_dw_).
- _undercut_: Undercut is used when the number of teeth of a gear is too small. Otherwise the mating gear will cut into the tooth root. The undercut not only weakens the tooth with a wasp-like waist, but also removes some of the useful involute adjacent to the base circle.
- _pressure_angle_: 20° is a standard value here. The pressure angle is defined as the angle between the line-of-action (common tangent to the base circles) and a perpendicular to the line-of-centers. Thus, for standard gears, 14.5° pressure angle gears have base circles much nearer to the roots of teeth than 20° gears. It is for this reason that 14.5° gears encounter greater undercutting problems than 20° gears. Important. the pressure angle changes with a profile shift. Only change the parameter, if sufficient knowledge of the gear geometry is available.
- _reversed_backlash_: If there are several gears, pay attention to which gear the parameter is set for.

## Limitations

A 2D tooth profile, obtained by setting the Data**height** to zero, cannot be used with features requiring a 2D shape. For example [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") and [PartDesign AdditiveHelix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix") features do not accept such a profile as base. For technical details, please refer to the related [issue on GitHub](https://github.com/looooo/freecad.gears/issues/97).

## Useful formulas

### Standard Spur Gears

Here “standard” refers to those spur gears with no profile shift coefficient (

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)).

Basic formulas common to internal and external standard spur gears

| Symbol                                                        | Term                                     | Formula                                                                                                                                                         | FCGear Parameter                                                                                                                        |
| ------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| m {\displaystyle m} {\displaystyle m}                         | _Module_                                 | -                                                                                                                                                               | module {\displaystyle {\texttt {module}}} {\displaystyle {\texttt {module}}}                                                            |
| z {\displaystyle z} {\displaystyle z}                         | _Number of Teeth_                        | -                                                                                                                                                               | teeth {\displaystyle {\texttt {teeth}}} {\displaystyle {\texttt {teeth}}}                                                               |
| α {\displaystyle \alpha } {\displaystyle \alpha }             | _Pressure Angle_                         | Typically, α = 20 ∘ {\displaystyle \alpha =20^{\circ }} {\displaystyle \alpha =20^{\circ }}                                                                     | pressure \_ angle {\displaystyle {\texttt {pressure}}{\\\_}{\texttt {angle}}} {\displaystyle {\texttt {pressure}}{\_}{\texttt {angle}}} |
| d {\displaystyle d} {\displaystyle d}                         | _Reference Diameter_ or _Pitch Diameter_ | z ⋅ m {\displaystyle z\cdot m} {\displaystyle z\cdot m}                                                                                                         | dw {\displaystyle {\texttt {dw}}} {\displaystyle {\texttt {dw}}}                                                                        |
| h a ∗ {\displaystyle h\_{a}^{\*}} {\displaystyle h\_{a}^{\*}} | _Addendum Coefficient_                   | Typically, h a ∗ = 1 {\displaystyle h\_{a}^{\*}=1} {\displaystyle h\_{a}^{\*}=1}                                                                                | h a ∗ = 1 + head {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}} {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}}                          |
| h f ∗ {\displaystyle h\_{f}^{\*}} {\displaystyle h\_{f}^{\*}} | _Dedendum Coefficient_                   | Typically, h f ∗ = 1.25 {\displaystyle h\_{f}^{\*}=1.25} {\displaystyle h\_{f}^{\*}=1.25}                                                                       | h f ∗ = 1 + clearance {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}} {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}}           |
| h a {\displaystyle h\_{a}} {\displaystyle h\_{a}}             | _Addendum_                               | h a = h a ∗ ⋅ m {\displaystyle h\_{a}=h\_{a}^{\*}\cdot m} {\displaystyle h*{a}=h*{a}^{\*}\cdot m}                                                               | -                                                                                                                                       |
| h f {\displaystyle h\_{f}} {\displaystyle h\_{f}}             | _Dedendum_                               | h f = h f ∗ ⋅ m {\displaystyle h\_{f}=h\_{f}^{\*}\cdot m} {\displaystyle h*{f}=h*{f}^{\*}\cdot m}                                                               | -                                                                                                                                       |
| h {\displaystyle h} {\displaystyle h}                         | _Tooth Height_ or _Tooth Depth_          | h = h a + h f {\displaystyle h=h\_{a}+h\_{f}} {\displaystyle h=h*{a}+h*{f}} Typically, h = 2.25 ⋅ m {\displaystyle h=2.25\cdot m} {\displaystyle h=2.25\cdot m} | -                                                                                                                                       |
| x {\displaystyle x} {\displaystyle x}                         | _Profile Shift Coefficient_              | For standard gears, x = 0 {\displaystyle x=0} {\displaystyle x=0}                                                                                               | shift {\displaystyle {\texttt {shift}}} {\displaystyle {\texttt {shift}}}                                                               |

Basic formulas specific to external standard spur gears

| Symbol                                            | Term            | Formula                                                                                                                                                                                                    |
| ------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| d a {\displaystyle d\_{a}} {\displaystyle d\_{a}} | _Tip Diameter_  | d a = d + 2 ⋅ h a {\displaystyle d\_{a}=d+2\cdot h\_{a}} {\displaystyle d*{a}=d+2\cdot h*{a}} Typically, d a = ( z + 2 ) ⋅ m {\displaystyle d\_{a}=(z+2)\cdot m} {\displaystyle d\_{a}=(z+2)\cdot m}       |
| d f {\displaystyle d\_{f}} {\displaystyle d\_{f}} | _Root Diameter_ | d f = d − 2 ⋅ h f {\displaystyle d\_{f}=d-2\cdot h\_{f}} {\displaystyle d*{f}=d-2\cdot h*{f}} Typically, d f = ( z − 2.5 ) ⋅ m {\displaystyle d\_{f}=(z-2.5)\cdot m} {\displaystyle d\_{f}=(z-2.5)\cdot m} |

Basic formulas specific to internal standard spur gears

| Symbol                                            | Term            | Formula                                                                                                                                                                                                    |
| ------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| d a {\displaystyle d\_{a}} {\displaystyle d\_{a}} | _Tip Diameter_  | d a = d − 2 ⋅ h a {\displaystyle d\_{a}=d-2\cdot h\_{a}} {\displaystyle d*{a}=d-2\cdot h*{a}} Typically, d a = ( z − 2 ) ⋅ m {\displaystyle d\_{a}=(z-2)\cdot m} {\displaystyle d\_{a}=(z-2)\cdot m}       |
| d f {\displaystyle d\_{f}} {\displaystyle d\_{f}} | _Root Diameter_ | d f = d + 2 ⋅ h f {\displaystyle d\_{f}=d+2\cdot h\_{f}} {\displaystyle d*{f}=d+2\cdot h*{f}} Typically, d f = ( z + 2.5 ) ⋅ m {\displaystyle d\_{f}=(z+2.5)\cdot m} {\displaystyle d\_{f}=(z+2.5)\cdot m} |

Basic formulas specific for a pair of external standard spur gears

| Symbol                                | Term                     | Formula                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a {\displaystyle a} {\displaystyle a} | _Center Distance_        | a = d 1 + d 2 2 {\displaystyle a={\frac {d\_{1}+d\_{2}}{2}}} {\displaystyle a={\frac {d*{1}+d*{2}}{2}}}                                                                                                                                                                           |
| c {\displaystyle c} {\displaystyle c} | _Tip and Root Clearance_ | c 1 = h f 2 − h a 1 {\displaystyle c\_{1}=h\_{f2}-h\_{a1}} {\displaystyle c*{1}=h*{f2}-h*{a1}} c 2 = h f 1 − h a 2 {\displaystyle c\_{2}=h\_{f1}-h\_{a2}} {\displaystyle c*{2}=h*{f1}-h*{a2}} Typically, c = 0.25 ⋅ m {\displaystyle c=0.25\cdot m} {\displaystyle c=0.25\cdot m} |

- **Helical and double helical gearing**
  - _pitch diameter (dw)_ = _module_ \* *teeth* : _cos beta_
  - _axle base_ = *(pitch diameter (dw) 1 + pitch diameter (dw) 2)* : 2
  - _addendum diameter_ = _pitch diameter (dw)_ + 2 \* _module_
  - _module_ = _pitch diameter (dw)_ \* *cos beta* : _teeth_

## Scripting

Use the power of Python to automate your gear modeling:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteGear.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteGear/en&oldid=1529257>"
