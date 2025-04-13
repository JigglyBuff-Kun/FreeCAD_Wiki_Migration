---
title: Part PartDesign Pad(protuberanță)
---
|  |
| --- |
| PartDesign Pad |
| poziția meniului |
| Part Design → Pad |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Instrumentul **Pad** extrude o schiță într-un solid în direcția normală la planul schiței. Începând cu versiunea v0.17, fațete pe solid pot de de asemenea utilizate.

![](/images/PartDesign_Pad_example.svg)

*Sketch (A) shown on the left; end result after pad operation (B) on the right.*

## Cum se utilizează

1. Select the sketch to be padded. In v0.17 and above, a face on the existing solid can alternatively be used.
2. Press the ![](/images/PartDesign_Pad.png) **Pad** button.
3. Set the Pad parameters (see next section).
4. Click OK.

## Opțiuni

Când se creează o protuberanță(Pad), vizualizarea Combo se comută automat în panoul Activități, afișând dialogul  **Parametri pad** .

![](/images/Pad_parameters_cropped.png)

### Type

Tipul oferă cinci modalități diferite de a specifica lungimea la care va fi extrudat tamponul.

#### Dimension

Enter a numeric value for the length of the pad. The default direction for extrusion is away (outside of) the support, but it can be changed by ticking the **Reversed** option. Extrusions occur [normal](http://en.wikipedia.org/wiki/Surface_normal) to the defining sketch plane. With the option **Symmetric to plane** the pad will extend half of the given length to either side of the sketch plane. Negative dimensions are not possible. Use the **Reversed** option instead.

#### To last

The pad will extend up to the last face of the support it encounters in its direction. If there is no support, an error message will appear.

#### To first

The pad will extend up to the first face of the support it encounters in its direction. If there is no support, an error message will appear.

#### Up to face

The pad will extend up to a face. Press the Select face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body.

#### Two dimensions

This allows to enter a second length in which the pad should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.

#### Up to shape

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The pad will extend up to the selected shape. Optionally press the Select shape button and select a shape. Leave the Select all faces checkbox enabled or disable it, press the Select faces button and select the faces up to which the pad should be created.

### Offset to face

Offset from face at which the pad will end. This option is only available if **Type** is **To last**, **To first** or **Up to face**.

### Length

Definește lungimea protuberanței. Unitățile multiple pot fi utilizate independent de preferințele unităților utilizatorului(m, cm, mm, nm, ft or ', in or ").

### 2nd length

Defines the length of the pad in the opposite direction. This option is only available if **Type** is **Two dimensions**.

### Symmetric to plane

Bifați caseta de selectare pentru a extinde jumătate din lungimea dată la fiecare parte a planului de schiță.

### Reversed

Reverses the direction of the pad.

### Direction

#### Direction/edge

You can select the direction of the extrusion:

* **Sketch normal** or **Face normal:** The sketch or face is extruded in the direction of its normal. If you have selected several sketches or faces to be extruded, the normal of the first one will be used.
* **Select reference...:** The sketch or face is extruded in the direction of a straight edge or a [datum line](/PartDesign_Line "PartDesign Line") selected from the Body.
* **Custom direction:** The sketch or face is extruded in the direction of the specified vector.

#### Show direction

If checked, the pad direction will be shown. In case the pad uses a **Custom direction**, it can be changed.

#### Length along sketch normal

If checked, the pad length is measured along the sketch or face normal, otherwise along the custom direction.

### Taper angle

Tapers the pad in the extrusion direction by the given angle. A positive angle means the outer pad border gets wider. Note that inner structures receive the opposite taper angle. This is done to facilitate the design of molds and molded parts. This option is only available if **Type** is **Dimension** or **Two dimensions**.

### 2nd taper angle

Tapers the pad in the opposite extrusion direction by the given angle. See **Taper angle**. This option is only available if **Type** is **Two dimensions**.

## Proprietăți

### Data

Pad

* DATE**Refine**: 0.17 and above true or false. Cleans up residual edges left after the operation. This property is initially set according to the user's settings (found in *Preferences → Part design → General → Model settings*). It can be manually changed afterwards. This property will be saved with the FreeCAD document.

Part Design

* Date**Refine** (`Bool`): True or false. Cleans up residual edges left after the operation. This property is initially set according to the user's settings (found in **Preferences → Part Design → General → Model settings**).

Sketch Based

* Date**Profile** (`LinkSub`)
* Date**Midplane** (`Bool`)
* Date**Reversed** (`Bool`)
* Date**Allow Multi Face** (`Bool`)

## Limitări

* Like all Part Design features, Pad creates a solid, thus the sketch must include a closed profile or it will fail with a *Failed to validate broken face* error.
* Sketches containing [B-Splines](/B-Splines "B-Splines") often cannot be tapered properly. This is a limitation of the [OpenCASCADE](/OpenCASCADE "OpenCASCADE") kernel that FreeCAD uses.
* For larger angles tapering will fail if the end face would have fewer edges than the start face/sketch.
* The algorithm used for **To First** and **To Last** is:
  + Create a line through the center of gravity of the sketch
  + Find all faces of the support cut by this line
  + Choose the face where the intersection point is nearest/furthest from the sketch

:   This means that the face that is found might not always be what you expected. If you run into this problem, use the **Up to face** type instead, and pick the face you want.
:   For the very special case of extrusion to a concave surface, where the sketch is larger than this surface, extrusion will fail. This is an unresolved bug.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pad/ro&oldid=1485431>"