---
title: DiseñoPiezas EngranajeEvolvente
---
|  |
| --- |
| DiseñoPiezas EngranajeEvolvente |
| Ubicación en el Menú |
| DiseñoPiezas → Engranaje Evolvente... |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Ambiente de trabajo FCEngranaje](/FCGear_Workbench/es "FCGear Workbench/es") |
|  |

## Description

## Descripción

Esta herramienta permite crear un perfil 2D de un engranaje evolvente. Este perfil 2D es totalmente paramétrico, y puede ser rellenado con la función [DiseñoPiezas Pad](/PartDesign_Pad/es "PartDesign Pad/es").
  
Para una información más detallada ver las entradas de Wikipedia para: [Gear](https://en.wikipedia.org/wiki/Gear) y [Involute Gear](https://en.wikipedia.org/wiki/Involute_gear)

For more detailed information see Wikipedia's entries for: [Gear](https://en.wikipedia.org/wiki/Gear) and [Involute Gear](https://en.wikipedia.org/wiki/Involute_gear)

![](/images/PartDesign_Involute_Gear_01.png)

## Usage

### Create the profile

## Uso

1. Ir al menú **DiseñoPiezas → ![](/images/PartDesign_InternalExternalGear.svg) Engranaje evolvente...**.
2. Establezca los parámetros de evolvente.
3. Haga clic en OK
4. El engranaje evolvente se crea fuera del cuerpo activo. Arrastre y suéltelo en un cuerpo para la aplicación de otras características como el relleno.

### Create a spur gear

1. Select the gear profile in the [Tree view](/Tree_view "Tree view").
2. Press the ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") button.
3. Set the pad's Datos**Length** to the desired face width of the gear.
4. Click OK.

### Create a helical gear

1. Select the gear profile in the [Tree view](/Tree_view "Tree view").
2. Press the ![](/images/PartDesign_AdditiveHelix.svg) [PartDesign AdditiveHelix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix") button.
3. Choose as Axis the normal of the gear profile, that is **Normal sketch axis** [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"). (In earlier versions the **Base Z axis** can be used as long as the profile's plane has not been altered.)
4. Choose a **Height-Turns** mode.
5. Set the Datos**Height** to the desired face width of the gear.
6. To set the desired helical angle an [Expression](/Expressions "Expressions") for the Datos**Turns** is required.
   1. Click the blue ![](/images/Bound-expression.svg) icon at the right of the input field.
   2. Enter the following formula: `Height * tan(25°) / (InvoluteGear.NumberOfTeeth * InvoluteGear.Modules * pi)`, where `25°` is an example for the desired helical angle (also known as beta-value) and `InvoluteGear` is the Datos**Name** of the profile.
   3. Click OK to close the formula editor.
7. Click OK to close the task panel.

Hint: To make the helical angle an accessible parameter, use a *dynamic property*:

1. Select the profile.
2. In the [Property editor](/Property_editor "Property editor") select the **Add Property** option in the context menu.
3. In the **Add Property** dialog:
   1. Choose `App::PropertyAngle` as Type.
   2. Set `Gear` as Group.
   3. Set `HelicalAngle` as Name (without a space).
   4. Click OK.
4. Now a new property Datos**Helical Angle** (space added automatically), with an initial value of `0.0°`, becomes available.
5. Assign the desired helical angle to the new property.
6. In the formula of the Datos**Turns** property of the AdditiveHelix, you can now reference `InvoluteGear.HelicalAngle` instead of the hard coded value of e.g. `25°`; again assuming `InvoluteGear` is the Datos**Name** of the profile.

### Cut a hub for an involute splined shaft

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

1. Activate the correct body.
2. Create an internal involute gear profile with the required number of grooves and adapt the values of pressure angle, addendum-, dedendum- and root fillet coefficient. See also the table in [Notes](#Notes) below for feasible values. For example:
   * Datos**External Gear**: False
   * Datos**Number Of Teeth**: 12
   * Datos**Pressure Angle**: 37.5°
   * Datos**Addendum Coefficient**: 0.45
   * Datos**Dedendum Coefficient**: 0.7
   * Datos**Root Fillet Coefficient**: 0.3
3. Select the gear profile in the [Tree view](/Tree_view "Tree view").
4. Press the ![](/images/PartDesign_Pocket.svg) **Pocket** button.
5. Set the pocket's Datos**Type** to **Through All**.
6. Check the pocket's Datos**Symmetric To Plane** option.
7. Click OK.

## Properties

* Datos**Addendum Coefficient**: The height of the tooth from the pitch circle up to its tip, normalized by the module. Default is 1.0 for the standard full-depth system. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

* Datos**Dedendum Coefficient**: The height of the tooth from the pitch circle down to its root, normalized by the module. Default is 1.25 for the standard full-depth system. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

* Engranaje externo: Verdadero o falso

* Alta precisión: Verdadero o falso

* Módulos: Diámetro del paso dividido por el número de dientes.

* Número de dientes: Establece el número de dientes.

* Ángulo de presión: Ángulo agudo entre la línea de acción y una normal a la línea que une los centros de los engranajes. Por defecto es de 20 grados. ([Más información](http://en.wikipedia.org/wiki/Involute_gear))

* Datos**Profile Shift Coefficient**: The distance by which the reference profile is shifted outwards, normalized by the module. Default is zero. Profile shift may be positive or negative. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

* Datos**Root Fillet Coefficient**: The radius of the fillet at the root of the tooth, normalized by the module. Default is 0.38 as defined by the ISO rack. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Notes

* In order for two gears to mesh they need to share the same module and pressure angle. [Expressions](/Expressions "Expressions") may help to ensure consistency. Their center distance needs to be `(NumberOfTeeth + OtherGear.NumberOfTeeth) * Modules / 2` (that is in case of the sum profile shift being zero). Subtract the number of teeth in case of an internal gear.

* When using a [Sketch](/Sketch "Sketch") to position some gears, they can be represented using their pitch circles and using a [tangent constraint](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") between those circles. Their diameters can be set by the following [Expression](/Expressions "Expressions"): `SomeGear.NumberOfTeeth * SomeGear.Modules` (assuming no profile shift and "SomeGear" being the Datos**Name** of the respective gear profile object).

* When using [Sketches](/Sketch "Sketch") to create additional features (cutouts, spokes, ...) on a gear, reference circles at the tip or the root of the teeth can help positioning those features. The diameter of the tip circle can be set by the following [Expression](/Expressions "Expressions"): `(SomeGear.NumberOfTeeth + 2 * (SomeGear.AddendumCoefficient + SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules` and the root circle respectively by `(SomeGear.NumberOfTeeth - 2 * (SomeGear.DedendumCoefficient - SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules`.

* Profile shifting can be used to prevent undercut on gears with a small number of teeth. Another application is to adjust the center distance of two gears with a given number of teeth and module.

* When visually checking for proper meshing or interferences a much lower value for Vista**Deviation** is helpful, e.g. 0.05 instead of the default 0.5. Otherwise the representation in the [3D view](/3D_view "3D view") may be too coarse.

* For standard gears the most common pressure angle is 20 °, followed by 14,5 °. Other applications, notably [splines](https://en.wikipedia.org/wiki/Spline_(mechanical)), use higher angles.

* The standard full-depth system uses an addendum coefficient of 1.0 and a dedendum coefficient of 1.25, resulting in a clearance of 0.25 (the difference between the addendum of the one gear and the dedendum of the other). The actual tooth length is the sum of both coefficients, multiplied by the module.

* Tooth length reduction may be required to prevent undercut or to strengthen the teeth (see [stub teeth](https://khkgears.net/new/gear_knowledge/gear-nomenclature/stub-teeth.html)). For internal gears the addendum (here pointing inwards) may need shortening to avoid certain interferences or non-involute flanks; when indicated in combination with longer teeth of the pinion.

* For splined shafts and hubs ISO 4156 defines the following parameters:

:   | Pressure Angle | 30 ° (flat root) | 30 ° (fillet root) | 37,5 ° | 45 ° |
    | --- | --- | --- | --- | --- |
    | Addendum Coefficient | 0.5 | 0.5 | 0.45 | 0.4 |
    | Dedendum Coefficient | 0.75 | 0.9 | 0.7 | 0.6 |
    | Root Fillet Coefficient | 0.2 | 0.4 | 0.3 | 0.25 |

## Limitations

* It is currently not possible to adjust the tooth thickness. Tooth and tooth space are distributed equally on the reference circle. One way to still control backlash is to adjust the center distance in a gear paring. Another is to apply a tiny amount of negative profile shift. Example: For a typical circumferential backlash coefficient of 0.04 increase either the center distance by `(0.04 * Modules / 2) / tan(PressureAngle)` or shift the profile of one gear (preferably the larger one) by a coefficient of `-(0.04 / 2) / tan(PressureAngle))`.

* There is currently no [undercut](https://www.tec-science.com/mechanical-power-transmission/involute-gear/undercut/) in the generated gear profile. That means gears with a low number of teeth can interfere with the teeth of the mating gear. The lower limit depends on the Datos**Pressure Angle** and is around 17 teeth for 20° and 32 for 14.5°. Most practical applications tolerate a missing undercut for gears a little smaller than this theoretical limit though, which assumes mating with a rack and standard tooth length.

## Tutorials

Video: [How to make gears in FreeCAD](https://www.youtube.com/watch?v=8VNhTrnFMfE)

## Relacionados

* [FCGear Ambiente de trabajo](/FCGear_Workbench/es "FCGear Workbench/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_InvoluteGear/es&oldid=1560820>"