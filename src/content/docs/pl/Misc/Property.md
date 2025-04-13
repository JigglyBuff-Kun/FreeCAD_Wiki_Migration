---
title: Właściwości
---
## Wprowadzenie

[Właściwości](/Property "Property") to informacje takie jak liczba lub łańcuch tekstowy, który jest dołączony do dokumentu FreeCAD, lub obiektu w dokumencie. Właściwości ogólnodostępne można przeglądać i modyfikować w [Edytorze właściwości](/Property_editor "Property editor").

Właściwości odgrywają bardzo ważną rolę w FreeCAD. Ponieważ obiekty w FreeCAD są **parametryczne**, oznacza to, że ich zachowanie jest definiowane przez ich właściwości, i jak te właściwości są wykorzystywane jako dane wejściowe dla ich metod klasowych. Zobacz również [Właściwości niestandardowe funkcji Python](/FeaturePython_Custom_Properties/pl "FeaturePython Custom Properties/pl") oraz [wskaźnik właściwości: InList oraz OutList](/PropertyLink:_InList_and_OutList/pl "PropertyLink: InList and OutList/pl").

## Wszystkie rodzaje właściwości

Niestandardowe [obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl") mogą używać dowolnych typów właściwości zdefiniowanych w systemie bazowym:

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

Wewnętrzne, nazwa właściwości jest poprzedzona przez `App::Property`:

```
App::PropertyBool
App::PropertyFloat
App::PropertyFloatList
...

```

Pamiętajcie, że to są właściwości *typów*. Pojedynczy obiekt może mieć wiele właściwości tego samego typu, ale o różnych nazwach.

Dla przykładu:

```
obj.addProperty("App::PropertyFloat", "Length")
obj.addProperty("App::PropertyFloat", "Width")
obj.addProperty("App::PropertyFloat", "Height")

```

Wskazuje to obiekt o trzech właściwościach typu **Float**, nazwanych odpowiednio Długość, Szerokość i Wysokość.

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

[Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl") jest generowany w pierwszej kolejności, a następnie przypisywane są mu właściwości.

```
obj = App.ActiveDocument.addObject("Part::Feature", "CustomObject")

obj.addProperty("App::PropertyFloat", "Velocity", "Parameter", "Body speed")
obj.addProperty("App::PropertyBool", "VelocityEnabled", "Parameter", "Enable body speed")

```

Ogólnie rzecz biorąc, właściwości *Dane* są przypisywane za pomocą metody obiektu `addProperty()`. Z drugiej strony, właściwości *Widok* są zazwyczaj dostarczane automatycznie przez obiekt nadrzędny, z którego pochodzi skrypt.

Na przykład:

* Pochodzący z `App::FeaturePython` dostarcza tylko 4 właściwości *widoku*: Tryb wyświetlania, Na górze po wybraniu, Pokaż w drzewie, i Widoczność.
* Pochodzący z `Part::Feature` dostarcza 17 właściwości *widoku*: poprzednie cztery, plus Odchylenie kątowe, Ramka wiążąca, Odchylenie, Styl rysowania, Oświetlenie, Kolor linii, Szerokość linii, Kolor punktu, Rozmiar punktu, Wybór, Styl wyboru, Kolor kształtu i Przezroczystość.

Niemniej jednak, właściwości *widoku* można również przypisać za pomocą metody obiektu dostawcy widoku `addProperty()`.

```
obj.ViewObject.addProperty("App::PropertyBool", "SuperVisibility", "Base", "Make the object glow")

```

## Kod źródłowy

W kodzie źródłowym właściwości znajdują się w różnych plikach src/App/Property\*.

Są one importowane i inicjowane w `src/App/Application.cpp`.

```
#include "Property.h"
#include "PropertyContainer.h"
#include "PropertyUnits.h"
#include "PropertyFile.h"
#include "PropertyLinks.h"
#include "PropertyPythonObject.h"
#include "PropertyExpressionEngine.h"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Property/pl&oldid=1268592>"