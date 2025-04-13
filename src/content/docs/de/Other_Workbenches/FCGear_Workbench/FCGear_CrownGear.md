---
title: FCGear Kronenrad
---
|  |
| --- |
| FCGear Kronenrad |
| Menüeintrag |
| Gear → Crown Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| None |
| Eingeführt in Version |
| v0.16 |
| Siehe auch |
| [FCGear Evolventenzahnrad](/FCGear_InvoluteGear/de "FCGear InvoluteGear/de") |
|  |

## Beschreibung

Das Kronenerad ähnelt einer ringförmig gebogenen Zahnstange. Der Eingriffswinkel verringert sich kontinuierlich vom äußeren bis zum inneren Durchmesser. Damit wird die variable Umfangsgeschwindigkeit am Kronenrad zur konstanten Umfangsgeschwindigkeit des Ritzels ausgeglichen. Die spitzen Zahnaußenseiten und die steilen Zahnflanken am Innendurchmesser begrenzen die nutzbare Zahnbreite. Kronenräder sind ähnlich leistungsfähig wie Stirnräder. Ein Kronenrad kann mehrere Ritzel antreiben.

Bekannte Anwendungsgebiete von Kronenrädern:

* Rear axle drives for cars and motorcycles
* Swivel mechanism for operating tables
* Angular milling heads
* Powered tool systems with multiple pinions and a crown gear

![](/images/Crown-Gear_example.png)

Oben: Kronenrad

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_CrownGear.svg) Crown Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_CrownGear.svg) Crown Gear** auswählen.
3. Das Kronenrad wird standardmäßig ohne Zähne dargestellt. ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"))
4. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).
5. Die Daten-Eigenschaft**preview\_mode** auf `false` setzen, um die Zähne darzustellen(see [Hinweise](#Hinweise)).

## Eigenschaften

Ein FCGear-CrownGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

accuracy

* Daten**num\_profiles** (`Integer`): Default is `4`. Number of profiles used for loft.
* Daten**preview\_mode** (`Bool`): Default is `true`.

base

* Daten**height** (`Length`): Default is `2 mm`. Value for the tooth width.
* Daten**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
* Daten**other\_teeth** (`Integer`): Default is `15`. Number of teeth of the construction gear (pinion) (see [Notes](#Notes)).
* Daten**teeth** (`Integer`): Default is `15`. Number of teeth.
* Daten**thickness** (`Length`): Default is `5 mm`. Height from the tip of tooth to the lower side of the crown wheel.

involute

* Daten**pressure\_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

version

* Daten-Eigenschaft**version** (`String`):

## Hinweise

* The Daten**preview\_mode** property is set to `true` by default and when the gear is created you'll find this message in the report view:

  :   *Gear module: Crown gear created, preview\_mode = true for improved performance. Set preview\_mode property to false when ready to cut teeth.*
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.
* *other\_teeth*: Several pinions with the same number of teeth only can be used on one crown wheel.
* *pressure\_parameter*: Only change the parameter, if sufficient knowledge of the gear geometry is available.
* The geometry of the crown gear is primarily determined by the spur pinion geometry (*other\_teeth*).
* Create spur gear with [Involute gear](/FCGear_InvoluteGear "FCGear InvoluteGear"). The number of teeth must be identical to the parameter *other\_teeth* of the crown gear.
* Adjustments for optimal running characteristics can be made with the parameters of involute gear.

## Kronenrad-Stirnrad-Paarung im Überblick

![](/images/Crown-spur-gear-set_example.png)

* (1) Stirnrad
* (2) Kronenrad
* (3) Zahnbreite
* (4) Innendurchmesser
* (5) Außendurchmesser

## Nützliche Formeln

* **Inner diameter (4)**
  + *inner diamter* = *module (spur gear)* \* *teeth (crown gear)* \* *cos pressure\_paramter (pinion)* : *cos pressure\_parameter (crown gear)*

* **Outer diameter (5)**
  + *outer diamter* = *inner diameter* + *2x height (tooth width crown gear)*

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CrownGear/de&oldid=1258231>"