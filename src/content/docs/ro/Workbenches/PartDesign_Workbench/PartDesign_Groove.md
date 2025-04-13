---
title: PartDesign Canelură/ Groove
---
|  |
| --- |
| PartDesign Groove |
| Menu location |
| PartDesign → Groove |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descriere

Instrumentul Canelură/ **Groove**, învârte o schiță sau un profil selectat pe o anumită axă, tăind materialul din suport.

![](/images/PartDesign_Groove_example.svg)

*Above: sketch (A) is revolved around axis (B); resulting groove on solid (C) is shown right.*

## Cum se folosește

1. Selectați schița care va fi rotită.

   :   v0.17 and above A face on the existing solid can alternatively be used.
   :   v0.16 and below The sketch must be mapped to the planar face of an existing solid or Part Design feature, or an error message will appear .
2. Press the ![](/images/PartDesign_Groove.png) **Groove** button.
3. Set the Groove parameters (see next section).
4. Press OK.

## Opţiuni

Atunci când este crată o canelură, dialogul privind **Groove parameters** oferă câteva variante de parametrii care specifică cum schița profilului canelurii poate fi rotită.

|  |  |
| --- | --- |
|  | AxeType [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  Type offers five different ways of specifying the angle of the groove: Dimension Enter a numeric value for the **Angle** of the groove. With the option **Symmetric to plane** the groove will extend half the given angle to either side of the sketch or face. Through all The groove will extend up to the last face of the support it encounters in its direction. With the option **Symmetric to plane** the groove will cut through all material in both directions. To first The groove will extend up to the first face of the support it encounters in its direction. Up to face The groove will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body. Two dimensions This allows to enter a second angle in which the groove should extend in the opposite direction. The directions can be switched by checking the **Reversed** option. Axis Specifies the axis of the groove:  This option specifies the axis about which the sketch is to be revolved.   * **Vertical sketch axis**: selects the vertical sketch axis . * **Horizontal sketch axis**: selects the horizontal sketch axis. * **Sketch axis**: v0.16 and below selects a construction line contained in the sketch used by the Groove. The first construction line created in the sketch will be labelled *Sketch axis 0*. The drop down list will contain one custom sketch axis for each construction line. * **Construction line**: v0.17 and above selects a construction line contained in the sketch used by the Groove. The drop down list will contain an entry for each construction line. The first construction line created in the sketch will be labelled *Construction line 1*. * **Base (X/Y/Z) axis**: v0.17 and above selects the X, Y or Z axis of the Body's Origin; * **Select reference...**: v0.17 and above allows selection in the 3D view of an edge on the Body, or a [datum line](/PartDesign_Line "PartDesign Line").  Note that when changing the axis, the **Reversed** option may be (un)checked automatically.   Unghiul This controls the angle through which the groove is to be formed, e.g. 360° would be a full, contiguous revolution. It is not possible to specify negative angles (use the **Reversed** option instead) or angles greater than 360° .   Planul simetric If checked, the groove will extend half of the specified angle in both directions from the sketch plane . Reversed If checked, the direction of revolution is reversed from default clockwise to counterclockwise . |

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the groove in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

### Proprietăți

### Data

Groove

* Date**Type** (`Enumeration`)
* Date**Base** (`Vector`): (read-only)
* Date**Axis** (`Vector`): (read-only)
* Date**Angle** (`Angle`)
* Date**Angle2** (`Angle`)
* Date**Up To Face** (`LinkSub`)
* Date**Reference Axis** (`LinkSub`)

Part Design

* Date**Refine** (`Bool`)

Sketch Based

* Date**Profile** (`LinkSub`)
* Date**Midplane** (`Bool`)
* Date**Reversed** (`Bool`)
* Date**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Groove/ro&oldid=1402164>"