---
title: PartDesign Evolventenzahnrad
---
|  |
| --- |
| PartDesign Evolventenrad |
| Menüeintrag |
| Part Design → Evolventenrad... |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arbeitsbereich FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
|  |

## Beschreibung

Dieses Werkzeug erlaubt es ein 2D-Profil eines Evolventenrades oder einer Evolventenverzahnung zu erstellen. Dieses 2D-Profil ist vollständig parametrisch und kann mit den Formelementen [PartDesign Aufpolsterung](/PartDesign_Pad/de "PartDesign Pad/de") oder [PartDesign Wendel](/PartDesign_AdditiveHelix/de "PartDesign AdditiveHelix/de") extrudiert werden.

Für detailliertere Informationen siehe Wikipedia: [Gear](https://en.wikipedia.org/wiki/Gear) und [Involute Gear](https://en.wikipedia.org/wiki/Involute_gear) (engl.).

![](/images/PartDesign_Involute_Gear_01.png)

## Anwendung

### Profil erstellen

1. Wahlweise den richtigen Körper aktivieren.
2. Zum Menü **Part Design → ![](/images/PartDesign_InvoluteGear.svg) Evolventenrad...** wechseln.
3. Die Evolventenparameter anpassen.
4. OK klicken.
5. Wurde noch kein Körper aktiviert: Das Zahnrad auf einen Körper ziehen und ablegen, um es mit weiteren Formelementen zu versehen wie einer Extrusion (Pad).

### Ein geradverzahntes Stirnrad erstellen

1. Das Zahnradprofil in der [Baumansicht](/Tree_view/de "Tree view/de") Auswählen.
2. Die Schaltfläche ![](/images/PartDesign_Pad.svg) [PartDesign Aufpolsterung](/PartDesign_Pad/de "PartDesign Pad/de") drücken.
3. Die Daten-Eigenschaft**Length** des Blocks auf die gewünschte Zahnradbreite einstellen.
4. OK klicken.

### Ein schrägverzahntes Stirnrad erstellen

1. Select the gear profile in the [Tree view](/Tree_view "Tree view").
2. Press the ![](/images/PartDesign_AdditiveHelix.svg) [PartDesign AdditiveHelix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix") button.
3. Choose as Axis the normal of the gear profile, that is **Normal sketch axis** [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"). (In earlier versions the **Base Z axis** can be used as long as the profile's plane has not been altered.)
4. Choose a **Height-Turns** mode.
5. Set the Daten**Height** to the desired face width of the gear.
6. To set the desired helical angle an [Expression](/Expressions "Expressions") for the Daten**Turns** is required.
   1. Click the blue ![](/images/Bound-expression.svg) icon at the right of the input field.
   2. Enter the following formula: `Height * tan(25°) / (InvoluteGear.NumberOfTeeth * InvoluteGear.Modules * pi)`, where `25°` is an example for the desired helical angle (also known as beta-value) and `InvoluteGear` is the Daten**Name** of the profile.
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
4. Now a new property Daten**Helical Angle** (space added automatically), with an initial value of `0.0°`, becomes available.
5. Assign the desired helical angle to the new property.
6. In the formula of the Daten**Turns** property of the AdditiveHelix, you can now reference `InvoluteGear.HelicalAngle` instead of the hard coded value of e.g. `25°`; again assuming `InvoluteGear` is the Daten**Name** of the profile.

### Cut a hub for an involute splined shaft

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

1. Activate the correct body.
2. Create an internal involute gear profile with the required number of grooves and adapt the values of pressure angle, addendum-, dedendum- and root fillet coefficient. See also the table in [Notes](#Notes) below for feasible values. For example:
   * Daten**External Gear**: False
   * Daten**Number Of Teeth**: 12
   * Daten**Pressure Angle**: 37.5°
   * Daten**Addendum Coefficient**: 0.45
   * Daten**Dedendum Coefficient**: 0.7
   * Daten**Root Fillet Coefficient**: 0.3
3. Select the gear profile in the [Tree view](/Tree_view "Tree view").
4. Press the ![](/images/PartDesign_Pocket.svg) **Pocket** button.
5. Set the pocket's Daten**Type** to **Through All**.
6. Check the pocket's Daten**Symmetric To Plane** option.
7. Click OK.

## Eigenschaften

* Daten**Addendum Coefficient**: The height of the tooth from the pitch circle up to its tip, normalized by the module. Default is 1.0 for the standard full-depth system. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

* Daten**Dedendum Coefficient**: The height of the tooth from the pitch circle down to its root, normalized by the module. Default is 1.25 for the standard full-depth system. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

* Daten-Eigenschaft**External Gear** (Stirnrad): Wahr oder Falsch

* Daten-Eigenschaft**High Precision** (Hohe Präzision): Wahr oder Falsch

* Daten-Eigenschaft**Modules** (der Modul): Teilkreisdurchmesser geteilt durch die Anzahl der Zähne. (Hinweis: der korrekte englische Begriff ist "Module" aber dieser ist freeCAD-intern schon vergeben und kann daher hier nicht (als Name der Eigenschaft) verwendet werden.)

* Daten-Eigenschaft**Number Of Teeth**: Legt die Anzahl der Zähne fest.

* Daten-Eigenschaft**Pressure Angle** (Eingriffswinkel): Winkel zwischen der Wirkungslinie und einer Normalen zu der Linie, die die Zahnradmitten verbindet. Standard ist 20°. Siehe ([Evolventenverzahnung](https://de.wikipedia.org/wiki/Evolventenverzahnung))

* Daten**Profile Shift Coefficient**: The distance by which the reference profile is shifted outwards, normalized by the module. Default is zero. Profile shift may be positive or negative. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

* Daten**Root Fillet Coefficient**: The radius of the fillet at the root of the tooth, normalized by the module. Default is 0.38 as defined by the ISO rack. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Notes

* In order for two gears to mesh they need to share the same module and pressure angle. [Expressions](/Expressions "Expressions") may help to ensure consistency. Their center distance needs to be `(NumberOfTeeth + OtherGear.NumberOfTeeth) * Modules / 2` (that is in case of the sum profile shift being zero). Subtract the number of teeth in case of an internal gear.

* When using a [Sketch](/Sketch "Sketch") to position some gears, they can be represented using their pitch circles and using a [tangent constraint](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") between those circles. Their diameters can be set by the following [Expression](/Expressions "Expressions"): `SomeGear.NumberOfTeeth * SomeGear.Modules` (assuming no profile shift and "SomeGear" being the Daten**Name** of the respective gear profile object).

* When using [Sketches](/Sketch "Sketch") to create additional features (cutouts, spokes, ...) on a gear, reference circles at the tip or the root of the teeth can help positioning those features. The diameter of the tip circle can be set by the following [Expression](/Expressions "Expressions"): `(SomeGear.NumberOfTeeth + 2 * (SomeGear.AddendumCoefficient + SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules` and the root circle respectively by `(SomeGear.NumberOfTeeth - 2 * (SomeGear.DedendumCoefficient - SomeGear.ProfileShiftCoefficient)) * SomeGear.Modules`.

* Profile shifting can be used to prevent undercut on gears with a small number of teeth. Another application is to adjust the center distance of two gears with a given number of teeth and module.

* When visually checking for proper meshing or interferences a much lower value for Ansicht**Deviation** is helpful, e.g. 0.05 instead of the default 0.5. Otherwise the representation in the [3D view](/3D_view "3D view") may be too coarse.

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

* There is currently no [undercut](https://www.tec-science.com/mechanical-power-transmission/involute-gear/undercut/) in the generated gear profile. That means gears with a low number of teeth can interfere with the teeth of the mating gear. The lower limit depends on the Daten**Pressure Angle** and is around 17 teeth for 20° and 32 for 14.5°. Most practical applications tolerate a missing undercut for gears a little smaller than this theoretical limit though, which assumes mating with a rack and standard tooth length.

## Tutorien

Video: [How to make gears in FreeCAD](https://www.youtube.com/watch?v=8VNhTrnFMfE)

## Verwandt

* Arbeitsbereich [FCGear](/FCGear_Workbench/de "FCGear Workbench/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_InvoluteGear/de&oldid=1560819>"