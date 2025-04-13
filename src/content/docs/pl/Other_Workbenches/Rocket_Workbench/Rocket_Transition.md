---
title: Rakieta Przejście
---
|  |
| --- |
| Rocket Transition |
| Menu location |
| Rocket → Transition |
| Workbenches |
| [Rocket Workbench](/Rocket_Workbench "Rocket Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Description

Transitions are like [nose cones](/Rocket_NoseCone "Rocket NoseCone") in many ways. While typically conical, they can have the same shapes as nose cones, but are far more versatile.

The most common application is to change from one body diameter to another, such as between stages, or at the base of a payload fairing. It can also be used for a boat tail, where the diameter of the rocket decreases towards the exhaust nozzle.

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Rocket_Transition.svg) [Transition](/Rocket_Transition "Rocket Transition") button.
   * Select the **Rocket → ![](/images/Rocket_Transition.svg) Transition** option from the menu.
   * Double click on a Transition object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Transition Types

Transitions support all the shapes supported by Nose Cones, see [Nose Cone Options](/Rocket_NoseCone#Options "Rocket NoseCone") for more details

### Transition Styles

Transitions support all the styles supported by Nose Cones, see [Nose Cone Options](/Rocket_NoseCone#Options "Rocket NoseCone") for more details.

In addition, transitions have one more style option, *Solid Core*. For this style, the transition is solid but with a hole from one end to another. One example where this might be used is a balsa transition designed to hold a body tube in the manner of a centering ring.

![](/images/Core_transition_with_tube.png)

Transition with aft shoulder holding a body tube

![](/images/Core_transition.png)

Transition with fore and aft shoulders showing the internal core

### Clipped

Shapes such as an ogive or a parabola can be applied in one of two ways. The standard, non-clipped, treats the axis parallel to the central axis offset by the smaller of the fore and aft radius as the axis for drawing the shape. The clipped method applies a larger version of the curve centered around the transition axis, and clips the portion forward of the smaller radius. In this example, the non-clipped curve is drawn from *x=0* to *x=60* around the *y=10* axis. The clipped version extends the shape along the x axis until *y=0* and takes only the portion from *x=0* to *x=60*.

![](/images/ParabolaClippedVsNon.png)

Clipped and non-clipped curves for a parabolic transition

For some shapes, this makes no difference in the shape of the transition, such as for conical or ogive shapes. In these cases, clipping is ignored.

![](/images/OgiveClippedVsNon.png)

Clipped and non-clipped curves for an ogive transition

## Uwagi

There are some known issues with the drawing of transitions that are currently being worked on.

* Clipped versions of elliptical transitions are producing invalid shapes
* Clipped versions where the forward radius is larger than the aft radius may produce invalid shapes. If this is the case you may design the transition backwards and use the Position to rotate it.

## Properties

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

* DANE**Description**: Description of the component
* DANE**Manufacturer**: Manufacturer when known
* DANE**Material**: Material when known
* DANE**Part Number**: Manufacturer part number

Transition

* DANE**Aft Diameter**: The diameter of the base of the transition
* DANE**Aft Shoulder**: True when the transition includes a shoulder at the base
* DANE**Aft Shoulder Diameter**: The diameter of the shoulder. This must be less than the **Aft Diameter** of the transition
* DANE**Aft Shoulder Length**: The length of the shoulder
* DANE**Aft Shoulder Thickness**: When the **Transition Style** is *Hollow* or *Capped*, this will determine the wall thickness of the shoulder
* DANE**Clipped**: Defines the shape of the transition in combination with the **Transition Type**, see [Options](#Options)
* DANE**Coefficient**: Combined with the **Transition Type**, this defines the shape of the transition, see [Options](#Options)
* DANE**Core Diameter**: When the **Transition Style** is *Solid Core*, this will determine the size of the hole through the transition, see [Options](#Options)
* DANE**Fore Diameter**: The diameter of the front of the transition
* DANE**Fore Shoulder**: True when the transition includes a shoulder at the forward end
* DANE**Fore Shoulder Diameter**: The diameter of the shoulder. This must be less than the **Fore Radius** of the transition
* DANE**Fore Shoulder Length**: The length of the shoulder
* DANE**Fore Shoulder Thickness**: When the **Transition Style** is *Hollow* or *Capped*, this will determine the wall thickness of the shoulder
* DANE**Length**: The length of the transition without the shoulders
* DANE**Resolution**: Used internally, this parameter defines the number of data points to use when drawing the outline of the nose cone
* DANE**Thickness**: When the **Transition Style** is *Hollow* or *Capped*, this will determine the wall thickness of the transition
* DANE**Transition Style**: Defines the style of the transition, see [Options](#Options)
* DANE**Transition Type**: Defines the shape of the transition using the coefficient when required, see [Options](#Options)

## Scripting

See also: [Category:API](/Category:API "Category:API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

TBD

## Tutorials and Learning

[Rocket Workbench Transitions](https://youtu.be/O5Ze4MYAHNA) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Transition/pl&oldid=1123028>"