---
title: PartDesign Revolution
---
|  |
| --- |
| PartDesign Revolution |
| Menu location |
| PartDesign → Revolution |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Introducere

Instrumentul **Revolution** crează un solid prin rotirea schiței selectate sau a unui obiect 2D în jurul unei axe date.

![](/images/PartDesign_Revolution_example.svg)

*Deasupra: schița (A) este rotită cu 270 grade în sens antiorar/trigonometric în jurul axei (B); rezultând un solid (C), care este afișat în dreapta.*

## Cum se foloseste

1. Select the sketch to be revolved. v0.17 and above A face on the existing solid can alternatively be used.
2. Press the ![](/images/PartDesign_Revolution.png) **Revolution** button.
3. Set the Revolution parameters (see next section).
4. Press OK.

## Options

## Opțiuni

Atunci când este crrată o revoluție, dialogul privind **REveolution parameters** oferă câteva variante de parametrii care specifică cum schița poate fi rotită.

![](/images/Partdesign_revolution_parameters.png)

### Type

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Type offers five different ways of specifying the angle of the revolution:

#### Dimension

Enter a numeric value for the **Angle** of the revolution. With the option **Symmetric to plane** the revolution will extend half the given angle to either side of the sketch or face.

#### To last

The revolution will extend up to the last face of the support it encounters in its direction. If there is no support, an error message will appear.

#### To first

The revolution will extend up to the first face of the support it encounters in its direction. If there is no support, an error message will appear.

#### Up to face

The revolution will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body.

#### Two dimensions

This allows to enter a second angle in which the revolution should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.

### Axis

Specifies the axis of the revolution:

|  |  |
| --- | --- |
|  | Axis This option specifies the axis about which the sketch is to be revolved.   * **Vertical sketch axis**: selects the vertical sketch axis. * **Horizontal sketch axis**: selects the horizontal sketch axis. * **Sketch axis**: v0.16 and below selects a construction line contained in the sketch used by the Revolution. The first construction line created in the sketch will be labelled *Sketch axis 0*. The drop down list will contain one custom sketch axis for each construction line. * **Construction line**: v0.17 and above selects a construction line contained in the sketch used by the Revolution. The drop down list will contain an entry for each construction line. The first construction line created in the sketch will be labelled *Construction line 1*. * **Base (X/Y/Z) axis**: v0.17 and above selects the X, Y or Z axis of the Body's Origin; * **Select reference...**: v0.17 and above allows selection in the 3D view of an edge on the Body, or a [datum line](/PartDesign_Line "PartDesign Line").   Note that when changing the axis, the **Reversed** option may be (un)checked automatically. Angle Unghi This controls the angle through which the revolution is to be formed, e.g. 360° would be a full, contiguous revolution. The images in the [examples](#Examples) section demonstrate some of the possibilities with specifying different angles. It is not possible to specify negative angles (use the **Reversed** option instead) or angles greater than 360° . Simetric față de Plan If checked, the revolution will extend half of the specified angle in both directions from the sketch plane. Inversat If checked, the direction of revolution is reversed from default clockwise to counterclockwise. |

### Symmetric to plane

Check this option to extend the revolution half the given angle to either side of the sketch or face. This option is only available if **Type** is **Dimension**.

### Reversed

Reverses the direction of the revolution.

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the revolution in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

## Proprietăți

### Data

Part Design

* Date**Refine** (`Bool`)

Revolution

* Date**Type** (`Enumeration`)
* Date**Base** (`Vector`): (read-only)
* Date**Axis** (`Vector`): (read-only)
* Date**Angle** (`Angle`)
* Date**Up To Face** (`LinkSub`)
* Date**Angle2** (`Angle`)
* Date**Reference Axis** (`LinkSub`)

Sketch Based

* Date**Profile** (`LinkSub`)
* Date**Midplane** (`Bool`)
* Date**Reversed** (`Bool`)
* Date**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to be selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/ro&oldid=1446918>"