---
title: Proprietà degli oggetti
---
## Introduzione

Una proprietà è una parte di informazione sotto forma di numero o di stringa di testo che viene allegata a un documento di FreeCAD oppure a un oggetto di un documento. Le proprietà pubbliche possono essere visualizzate e, se consentito, modificate nell'[editore delle proprietà](/Property_editor/it "Property editor/it").

In FreeCAD le proprietà svolgono un ruolo molto importante. Dato che gli oggetti in FreeCAD sono "parametrici", ciò significa che il loro comportamento è definito dalle loro proprietà e dal modo in cui queste proprietà vengono utilizzate come input per i loro metodi delle classi. Vedere anche [FeaturePython Custom Properties](/FeaturePython_Custom_Properties/it "FeaturePython Custom Properties/it") e [PropertyLink: InList e OutList](/index.php?title=PropertyLink:_InList_and_OutList/it&action=edit&redlink=1 "PropertyLink: InList and OutList/it (page does not exist)")

## Tutti i tipi di proprietà

In FreeCAD gli oggetti [script personalizzati](/Scripted_objects/it "Scripted objects/it") possono utilizzare uno qualsiasi dei tipi di proprietà definiti nel sistema di base:

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

Internamente, il nome della proprietà ha il prefisso `App::Property`:

```
App::PropertyBool
App::PropertyFloat
App::PropertyFloatList
...

```

Ricordare che queste sono della proprietà *types*. Un singolo oggetto può avere molte proprietà dello stesso tipo, ma con nomi diversi.

Per esempio:

```
obj.addProperty("App::PropertyFloat", "Length")
obj.addProperty("App::PropertyFloat", "Width")
obj.addProperty("App::PropertyFloat", "Height")

```

Ciò indica un oggetto con tre proprietà di tipo "Float", denominate rispettivamente "Length", "Width", e "Height".

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Prima viene creato un [oggetto script](/Scripted_objects/it "Scripted objects/it"), quindi gli vengono assegnate le proprietà.

```
obj = App.ActiveDocument.addObject("Part::Feature", "CustomObject")

obj.addProperty("App::PropertyFloat", "Velocity", "Parameter", "Body speed")
obj.addProperty("App::PropertyBool", "VelocityEnabled", "Parameter", "Enable body speed")

```

In generale, le proprietà *Data* sono assegnate usando il metodo `addProperty()` dell'oggetto. D'altra parte, le proprietà *View* sono normalmente fornite automaticamente dall'oggetto genitore da cui deriva l'oggetto script.

Per esempio:

* Derivato da `App::FeaturePython` fornisce solo 4 proprietà *View*: "Display Mode", "On Top When Selected", "Show In Tree", e "Visibility".
* Derivato da `Part::Feature` fornisce 17 proprietà *View*: le quattro precedenti più "Angular Deflection", "Bounding Box", "Deviation", "Draw Style", "Lighting", "Line Color", "Line Width", "Point Color", "Point Size", "Selectable", "Selection Style", "Shape Color", e "Transparency".

Tuttavia, le proprietà *View* possono anche essere assegnate usando il metodo `addProperty()` dell'oggetto fornitore della vista.

```
obj.ViewObject.addProperty("App::PropertyBool", "SuperVisibility", "Base", "Make the object glow")

```

## Codice sorgente

Nel codice sorgente, le proprietà si trovano in vari file src/App/Property\*.

Vengono importati e inizializzati in `src/App/Application.cpp`.

```
#include "Property.h"
#include "PropertyContainer.h"
#include "PropertyUnits.h"
#include "PropertyFile.h"
#include "PropertyLinks.h"
#include "PropertyPythonObject.h"
#include "PropertyExpressionEngine.h"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Property/it&oldid=1268590>"