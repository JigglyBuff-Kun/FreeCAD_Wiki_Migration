---
title: Rocket Transition
---

|                                                          |
| -------------------------------------------------------- |
| Rocket Transition                                        |
| Menu location                                            |
| Rocket → Transition                                      |
| Workbenches                                              |
| [Rocket Workbench](/Rocket_Workbench "Rocket Workbench") |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| 0.19                                                     |
| See also                                                 |
| _None_                                                   |
|                                                          |

## Description

Transitions are like [nose cones](/Rocket_NoseCone "Rocket NoseCone") in many ways. While typically conical, they can have the same shapes as nose cones, but are far more versatile.

The most common application is to change from one body diameter to another, such as between stages, or at the base of a payload fairing. It can also be used for a boat tail, where the diameter of the rocket decreases towards the exhaust nozzle.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Rocket_Transition.svg) [Transition](/Rocket_Transition "Rocket Transition") button.
   - Select the **Rocket → ![](/src/assets/images/Rocket_Transition.svg) Transition** option from the menu.
   - Double click on a Transition object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Transition Types

Transitions support all the shapes supported by Nose Cones, see [Nose Cone Options](/Rocket_NoseCone#Options "Rocket NoseCone") for more details

### Transition Styles

Transitions support all the styles supported by Nose Cones, see [Nose Cone Options](/Rocket_NoseCone#Options "Rocket NoseCone") for more details.

In addition, transitions have one more style option, _Solid Core_. For this style, the transition is solid but with a hole from one end to another. One example where this might be used is a balsa transition designed to hold a body tube in the manner of a centering ring.

![](/src/assets/images/Core_transition_with_tube.png)

Transition with aft shoulder holding a body tube

![](/src/assets/images/Core_transition.png)

Transition with fore and aft shoulders showing the internal core

### Clipped

Shapes such as an ogive or a parabola can be applied in one of two ways. The standard, non-clipped, treats the axis parallel to the central axis offset by the smaller of the fore and aft radius as the axis for drawing the shape. The clipped method applies a larger version of the curve centered around the transition axis, and clips the portion forward of the smaller radius. In this example, the non-clipped curve is drawn from _x=0_ to _x=60_ around the _y=10_ axis. The clipped version extends the shape along the x axis until _y=0_ and takes only the portion from _x=0_ to _x=60_.

![](/src/assets/images/ParabolaClippedVsNon.png)

Clipped and non-clipped curves for a parabolic transition

For some shapes, this makes no difference in the shape of the transition, such as for conical or ogive shapes. In these cases, clipping is ignored.

![](/src/assets/images/OgiveClippedVsNon.png)

Clipped and non-clipped curves for an ogive transition

## Notes

There are some known issues with the drawing of transitions that are currently being worked on.

- Clipped versions of elliptical transitions are producing invalid shapes
- Clipped versions where the forward radius is larger than the aft radius may produce invalid shapes. If this is the case you may design the transition backwards and use the Position to rotate it.

## Properties

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

- Data**Description**: Description of the component
- Data**Manufacturer**: Manufacturer when known
- Data**Material**: Material when known
- Data**Part Number**: Manufacturer part number

Transition

- Data**Aft Diameter**: The diameter of the base of the transition
- Data**Aft Shoulder**: True when the transition includes a shoulder at the base
- Data**Aft Shoulder Diameter**: The diameter of the shoulder. This must be less than the **Aft Diameter** of the transition
- Data**Aft Shoulder Length**: The length of the shoulder
- Data**Aft Shoulder Thickness**: When the **Transition Style** is _Hollow_ or _Capped_, this will determine the wall thickness of the shoulder
- Data**Clipped**: Defines the shape of the transition in combination with the **Transition Type**, see [Options](#Options)
- Data**Coefficient**: Combined with the **Transition Type**, this defines the shape of the transition, see [Options](#Options)
- Data**Core Diameter**: When the **Transition Style** is _Solid Core_, this will determine the size of the hole through the transition, see [Options](#Options)
- Data**Fore Diameter**: The diameter of the front of the transition
- Data**Fore Shoulder**: True when the transition includes a shoulder at the forward end
- Data**Fore Shoulder Diameter**: The diameter of the shoulder. This must be less than the **Fore Radius** of the transition
- Data**Fore Shoulder Length**: The length of the shoulder
- Data**Fore Shoulder Thickness**: When the **Transition Style** is _Hollow_ or _Capped_, this will determine the wall thickness of the shoulder
- Data**Length**: The length of the transition without the shoulders
- Data**Resolution**: Used internally, this parameter defines the number of data points to use when drawing the outline of the nose cone
- Data**Thickness**: When the **Transition Style** is _Hollow_ or _Capped_, this will determine the wall thickness of the transition
- Data**Transition Style**: Defines the style of the transition, see [Options](#Options)
- Data**Transition Type**: Defines the shape of the transition using the coefficient when required, see [Options](#Options)

## Scripting

See also: [Category:API](/Category:API "Category:API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

TBD

## Tutorials and Learning

[Rocket Workbench Transitions](https://youtu.be/O5Ze4MYAHNA) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Transition/en&oldid=1123029>"
