---
title: Özellikler
---
## Introduction

**Property** bir FreeCAD belgesine veya belgedeki bir nesneye eklenmiş bir sayı veya metin dizesi gibi bir bilgi parçasıdır. Özellikler [Özellik düzenleyici](/Property_editor/tr "Property editor/tr") ile görüntülenebilir ve değiştirilebilir.

Özellikler FreeCAD'de çok önemli bir rol oynar, çünkü sadece özellikleri tarafından tanımlanan nesneler olan parametrik nesnelerle çalışmak üzere tasarlanmıştır.

## All property types

FreeCAD'deki Özel [Betik nesneleri](/Scripted_objects/tr "Scripted objects/tr") aşağıdaki tür özelliklere sahip olabilir:

| Name | Unit (if any) | Remark |
| --- | --- | --- |
| Acceleration | m/s^2 |
| AmountOfSubstance | mol |
| Angle | ° |
| Area | m^2 |
| Bool |  |
| BoolList |  |
| Color |  |
| ColorList |  |
| CurrentDensity | A/m^2 | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Density | kg/m^3 |
| Direction |  |
| DissipationRate | m^2/s^3 | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Distance | m |
| DynamicViscosity | Pa\*s | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricalCapacitance | F | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricalConductance | S | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricalConductivity | S/m | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricalInductance | H | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricalResistance | Ohm | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricCharge | C | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricCurrent | A | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ElectricPotential | V | [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20") |
| Enumeration |  |
| ExpressionEngine |  |
| File |  |
| FileIncluded |  |
| Float |  |
| FloatConstraint |  |
| FloatList |  |
| Font |  |
| Force | N |
| Frequency | Hz |
| HeatFlux | W/m^2 | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Integer |  |
| IntegerConstraint |  |
| IntegerList |  |
| IntegerSet |  |
| InverseArea | 1/m^2 | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| InverseLength | 1/m | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| InverseVolume | 1/m^3 | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| KinematicViscosity | m^2/s | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Length | m |
| Link |  |
| LinkChild |  |
| LinkGlobal |  |
| LinkHidden |  |
| LinkList |  |
| LinkListChild |  |
| LinkListGlobal |  |
| LinkListHidden |  |
| LinkSub |  |
| LinkSubChild |  |
| LinkSubGlobal |  |
| LinkSubHidden |  |
| LinkSubList |  |
| LinkSubListChild |  |
| LinkSubListGlobal |  |
| LinkSubListHidden |  |
| LuminousIntensity | cd | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| MagneticFieldStrength | A/m | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| MagneticFlux | Wb or V\*s | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| MagneticFluxDensity | T | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Magnetization | A/m | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Map |  |
| Mass | kg | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Material |  |
| MaterialList |  |
| Matrix |  |
| PartShape |  | a Part property, is accessed as `Part::PropertyPartShape` |
| Path |  |
| Percent |  |
| PersistentObject |  |
| Placement |  |
| PlacementLink |  |
| PlacementList |  |
| Position |  |
| Power | W | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Precision |  |
| Pressure | Pa |
| PythonObject |  |
| Quantity |  |
| QuantityConstraint |  |
| Rotation |  |
| ShearModulus | Pa | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| SpecificEnergy | m^2/s^2 or J/kg | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| SpecificHeat | J/kg/K | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Speed | m/s |
| Stiffness | m/s^2 |
| Stress | Pa | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| String |  |
| StringList |  |
| Temperature | K | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ThermalConductivity | W/m/K | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ThermalExpansionCoefficient | 1/K | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| ThermalTransferCoefficient | W/m^2/K | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Time | s | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| UltimateTensileStrength | Pa | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| UUID |  |
| VacuumPermittivity | s^4\*A^2 / (m^3\*kg) |
| Vector |  |
| VectorDistance |  |
| VectorList |  |
| Velocity | m/s | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Volume | l or m^3 |
| VolumeFlowRate | l/s or m^3/s | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| VolumetricThermalExpansionCoefficient | 1/K | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| Work | J | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| XLink |  |
| XLinkList |  |
| XLinkSub |  |
| XLinkSubList |  |
| YieldStrength | Pa | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| YoungsModulus | Pa | [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |

Internally, the property name is prefixed with `App::Property`:

```
App::PropertyBool
App::PropertyFloat
App::PropertyFloatList
...

```

Remember that these are property *types*. A single object may have many properties of the same type, but with different names.

For example:

```
obj.addProperty("App::PropertyFloat", "Length")
obj.addProperty("App::PropertyFloat", "Width")
obj.addProperty("App::PropertyFloat", "Height")

```

This indicates an object with three properties of type "Float", named "Length", "Width", and "Height", respectively.

## Scripting

*See also:* [FreeCAD scripting basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")

A [scripted object](/Scripted_objects "Scripted objects") is created first, and then properties are assigned.

```
obj = App.ActiveDocument.addObject("Part::Feature", "CustomObject")

obj.addProperty("App::PropertyFloat", "Velocity", "Parameter", "Body speed")
obj.addProperty("App::PropertyBool", "VelocityEnabled", "Parameter", "Enable body speed")

```

In general, *Data* properties are assigned by using the object's `addProperty()` method. On the other hand, *View* properties are normally provided automatically by the parent object from which the scripted object is derived.

For example:

* Deriving from `App::FeaturePython` provides only 4 *View* properties: "Display Mode", "On Top When Selected", "Show In Tree", and "Visibility".
* Deriving from `Part::Feature` provides 17 *View* properties: the previous four, plus "Angular Deflection", "Bounding Box", "Deviation", "Draw Style", "Lighting", "Line Color", "Line Width", "Point Color", "Point Size", "Selectable", "Selection Style", "Shape Color", and "Transparency".

Nevertheless, *View* properties can also be assigned using the view provider object's `addProperty()` method.

```
obj.ViewObject.addProperty("App::PropertyBool", "SuperVisibility", "Base", "Make the object glow")

```

## Source code

In the source code, properties are located in various src/App/Property\* files.

They are imported and initialized in `src/App/Application.cpp`.

```
#include "Property.h"
#include "PropertyContainer.h"
#include "PropertyUnits.h"
#include "PropertyFile.h"
#include "PropertyLinks.h"
#include "PropertyPythonObject.h"
#include "PropertyExpressionEngine.h"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Property/tr&oldid=1268588>"