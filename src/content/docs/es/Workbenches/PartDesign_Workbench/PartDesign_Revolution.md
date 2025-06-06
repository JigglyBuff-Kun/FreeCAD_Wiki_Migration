---
title: DiseñoPiezas Rotación
---
|  |
| --- |
| DiseñoPiezas Rotación |
| Ubicación en el Menú |
| DiseñoPiezas -> Rotación |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

La herramienta *Rotación* crea un sólido girando un boceto seleccionado o un objeto 2D sobre un eje dado.

![](/images/PartDesign_Revolution_example.svg)

"Arriba: el bosquejo (A) gira 270 grados en sentido contrario a las agujas del reloj alrededor del eje (B); el sólido resultante (C) se muestra a la derecha.

## Utilización

1. Select a single sketch or one or more faces from the Body.
2. Press the ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution") button.
3. Set the Revolution parameters, see [Options](#Options) below.
4. Press the OK button.

## Options

## Opciones

Al crear una revolución, el diálogo *Parámetros de la revolución* ofrece varios parámetros que especifican cómo debe girar el boceto.

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

* **Vertical sketch axis**: selects the vertical sketch axis.
* **Horizontal sketch axis**: selects the horizontal sketch axis.
* **Construction line**: selects a construction line from the sketch used by the revolution. The dropdown list will contain an entry for each construction line. The first construction line will be labelled *Construction line 1*.
* **Base (X/Y/Z) axis**: selects the X, Y or Z axis of the Body's origin.
* **Select reference...**: allows the selection of a straight edge or a [datum line](/PartDesign_Line "PartDesign Line") from the Body.

Note that when changing the axis, the **Reversed** option may be (un)checked automatically.

### Angle

Defines the angle of the revolution. This option is only available if **Type** is **Dimension** or **Two dimensions**. Angles larger than 360° are not possible. Nor are negative values, use the **Reversed** option instead.

### Symmetric to plane

Check this option to extend the revolution half the given angle to either side of the sketch or face. This option is only available if **Type** is **Dimension**.

### Reversed

Reverses the direction of the revolution.

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the revolution in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

### Propiedades

### Data

Part Design

* Datos**Refine** (`Bool`)

Revolution

* Datos**Type** (`Enumeration`)
* Datos**Base** (`Vector`): (read-only)
* Datos**Axis** (`Vector`): (read-only)
* Datos**Angle** (`Angle`)
* Datos**Up To Face** (`LinkSub`)
* Datos**Angle2** (`Angle`)
* Datos**Reference Axis** (`LinkSub`)

Sketch Based

* Datos**Profile** (`LinkSub`)
* Datos**Midplane** (`Bool`)
* Datos**Reversed** (`Bool`)
* Datos**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to be selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/es&oldid=1446913>"