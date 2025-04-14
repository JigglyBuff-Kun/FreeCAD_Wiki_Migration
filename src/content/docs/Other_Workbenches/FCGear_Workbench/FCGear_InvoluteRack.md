---
title: FCGear InvoluteRack
---

|                                                                   |
| ----------------------------------------------------------------- |
| FCGear InvoluteRack                                               |
| Menu location                                                     |
| Gear → Involute Rack                                              |
| Workbenches                                                       |
| [FCGear](/FCGear_Workbench "FCGear Workbench")                    |
| Default shortcut                                                  |
| None                                                              |
| Introduced in version                                             |
| v0.16                                                             |
| See also                                                          |
| [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear") |
|                                                                   |

## Description

Gear racks are used to convert a rotary motion into a linear motion or vice versa. The following examples show the different applications:

- A rack with gear on at a retaining weir.
- Various rack systems of rack-and-pinion railways.
- Rack and pinion steering in a vehicle.
- Rack and pinion winch as mechanical hoist (e.g. car jack).
- Pneumatic rack and pinion drives used to control valves in pipeline transport.

![](/images/Involute-Rack_example.png)

From left to right: Spur gearing, helical gearing, double helical gearing

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_InvoluteRack.svg) [Involute Rack](/FCGear_InvoluteRack "FCGear InvoluteRack") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_InvoluteRack.svg) Involute Rack** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear InvoluteRack object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

base

- Data**add_endings** (`Bool`): If `true` (default), then the total length of the rack is teeth \* pitch. If `false`, then the rack starts with a tooth-flank.
- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
- Data**teeth** (`Integer`): Default is `15`. Number of teeth.
- Data**thickness** (`Length`): Default is `5`. Height from the tooth root to the lower side of the rod.

computed

- Data**transverse_pitch** (`Length`): (read-only) Pitch in the transverse plane (see [Notes](#Notes)).

fillets

- Data**head_fillet** (`Float`): Default is `0 mm`.
- Data**root_fillet** (`Float`): Default is `0 mm`.

helical

- Data**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left.
- Data**double_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).
- Data**properties_from_tool** (`Bool`): Default is `false`. If `true` and Data**beta** is not zero, gear parameters are recomputed internally for the rotated gear.

involute

- Data**pressure_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

precision

- Data**simplified** (`Bool`): Default is `false`, `true` generates a simplified display (without teeth).

tolerance

- Data**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
- Data**head** (`Float`): Default is `0`. This value is used to change the tooth height.

version

- Data**version** (`String`):

## Notes

- _transverse_pitch_: The value is the result of multiplication of _module \* pi_. This means for the standard involute rack of FCGear: 15 (_teeth_) \* 3.14 (_transverse_pitch_) is 47.12 mm. See also _module_ further below.
- _clearance_: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
- _double_helix_: To use the double helical gearing the helix angle β (_beta_) for the helical gearing must first be entered.
- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth. The result of the multiplication is displayed in _transverse_pitch_
- _pressure_parameter_: Only change the parameter, if sufficient knowledge of the gear geometry is available.

## Useful formulas

See [FCGear InvoluteGear](/FCGear_InvoluteGear#Useful_formulas "FCGear InvoluteGear").

## Scripting

Use the power of python to automate your gear modeling:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteRack.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteRack/en&oldid=1196711>"
