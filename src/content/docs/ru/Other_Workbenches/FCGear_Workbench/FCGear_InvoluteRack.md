---
title: FCGear InvoluteRack/ru
---
|  |
| --- |
| FCGear InvoluteRack |
| Menu location |
| Gear → Involute Rack |
| Workbenches |
| [FCGear](/FCGear_Workbench "FCGear Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| v0.16 |
| See also |
| [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear") |
|  |

## Описание

Gear racks are used to convert a rotary motion into a linear motion or vice versa. The following examples show the different applications:

* A rack with gear on at a retaining weir.
* Various rack systems of rack-and-pinion railways.
* Rack and pinion steering in a vehicle.
* Rack and pinion winch as mechanical hoist (e.g. car jack).
* Pneumatic rack and pinion drives used to control valves in pipeline transport.

![](/images/Involute-Rack_example.png)

From left to right: Spur gearing, helical gearing, double helical gearing

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   * Press the ![](/images/FCGear_InvoluteRack.svg) [Involute Rack](/FCGear_InvoluteRack "FCGear InvoluteRack") button in the toolbar.
   * Select the **Gear → ![](/images/FCGear_InvoluteRack.svg) Involute Rack** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear InvoluteRack object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

base

* Данные**add\_endings** (`Bool`): If `true` (default), then the total length of the rack is teeth \* pitch. If `false`, then the rack starts with a tooth-flank.
* Данные**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Данные**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
* Данные**teeth** (`Integer`): Default is `15`. Number of teeth.
* Данные**thickness** (`Length`): Default is `5`. Height from the tooth root to the lower side of the rod.

computed

* Данные**transverse\_pitch** (`Length`): (read-only) Pitch in the transverse plane (see [Notes](#Notes)).

fillets

* Данные**head\_fillet** (`Float`): Default is `0 mm`.
* Данные**root\_fillet** (`Float`): Default is `0 mm`.

helical

* Данные**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left.
* Данные**double\_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).
* Данные**properties\_from\_tool** (`Bool`): Default is `false`. If `true` and Данные**beta** is not zero, gear parameters are recomputed internally for the rotated gear.

involute

* Данные**pressure\_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

precision

* Данные**simplified** (`Bool`): Default is `false`, `true` generates a simplified display (without teeth).

tolerance

* Данные**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
* Данные**head** (`Float`): Default is `0`. This value is used to change the tooth height.

version

* Данные**version** (`String`):

## Notes

* *transverse\_pitch*: The value is the result of multiplication of *module \* pi*. This means for the standard involute rack of FCGear: 15 (*teeth*) \* 3.14 (*transverse\_pitch*) is 47.12 mm. See also *module* further below.
* *clearance*: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
* *double\_helix*: To use the double helical gearing the helix angle β (*beta*) for the helical gearing must first be entered.
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth. The result of the multiplication is displayed in *transverse\_pitch*
* *pressure\_parameter*: Only change the parameter, if sufficient knowledge of the gear geometry is available.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteRack/ru&oldid=1196710>"