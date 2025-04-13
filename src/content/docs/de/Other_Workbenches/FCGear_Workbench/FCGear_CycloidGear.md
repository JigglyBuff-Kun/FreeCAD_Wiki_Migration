---
title: FCGear  Zykloidenzahnrad
---
|  |
| --- |
| FCGear Zykloidenzahnrad |
| Menüeintrag |
| Gear → Cycloid Gear |
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

Cycloidal gears are very sensitive to an inaccurate adjustment of the centre distance, which then leads to a change in the transmission ratio. For these reasons, cycloidal gears are hardly found in mechanical engineering but are only used in special cases such as in the watch industry, for roots type blowers or for the drive of gear racks.

![](/images/Cycloid-Gear_example_1.png)

:   Von links nach rechts: Stirnräder mit Geradverzahnung, Schrägverzahnung, Pfeilverzahnung

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_CycloidGear.svg) Cycloid Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_CycloidGear.svg) Cycloid Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

### Daten

Ein FCGear-CycloidGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

accuracy

* Daten**numpoints** (`Integer`): Default is `15`. Change of the involute profile. Changing the value can lead to unexpected results.

base

* Daten**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Daten**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
* Daten**teeth** (`Integer`): Default is `15`. Number of teeth.

computed

* Daten**angular\_backlash** (`Angle`): (read-only)
* Daten**dw** (`Length`): (read-only) Working pitch diameter.

cycloid

* Daten**inner\_diameter** (`Float`): (read-only) Diameter of the rolling circle of hypocycloid, normalized by the Daten**module** (see [Notes](#Notes)).
* Daten**outer\_diameter** (`Float`): Default is `7.5`. Diameter of the rolling circle of epicycloid, normalized by the Daten**module** (see [Notes](#Notes)).

fillets

* Daten**head\_fillet** (`Float`): Default is `0 mm`.
* Daten**root\_fillet** (`Float`): Default is `0 mm`.

helical

* Daten**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left.
* Daten**double\_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).

tolerance

* Daten**backlash** (`Length`): Default is `0`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.

* Daten**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
* Daten**head** (`Float`): Default is `0`. Additional length of the tip of the teeth, normalized by the Daten**module**.

version

* Daten**version/de** (`String`):

## Hinweise

* Cycloidal gears must always be specially matched to each other and can generally not be exchanged at will: In a gear pair, the value of *inner\_diameter* on one gear must equal the *outer\_diameter* on the other, and vice versa. See also the information in *Properties cycloid parameter view* below.
* *clearance*: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
* *double\_helix*: To use the double helical gearing the helix angle β (*beta*) for the helical gearing must first be entered.
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.

## Special cases

### Straight line as hypocycloid

To obtain a straight line, directly towards the center, as hypocycloid, use the following [expression](/Expressions "Expressions") for the Daten**inner\_diameter**: `teeth / 2`. Such a tooth form is often found in historical clockworks and thus called "clock toothing". A larger Daten**clearance** makes the effect even more visible.

### Full hypocycloid/epicycloid as tooth

To obtain a gear made of complete hypocycloid and epicycloid curves use the following [expressions](/Expressions "Expressions"):

* Daten**inner\_diameter**: `0.5 + 1e-6`
* Daten**outer\_diameter**: `inner_diameter`
* Daten**clearance**: `(-1 + inner_diameter/1mm) * 2`
* Daten**head**: `(-1 + outer_diameter/1mm) * 2`

The reference diameter is *d = m \* z*, with *m* being the Daten**module** and *z* being the Daten**teeth**.
For a complete hypocycloid, the rolling diameter has to be *d\_i = d / (z\*2) = m\*z / (z\*2)*. And if we now normalize this by the module, we get *d\_in = m\*z / (z\*2) / m = 1 / 2*. The additional explicit tolerance value (`1e-6` in the expression above) is required to overcome coincidence issues.

Now the cycloids' rolling circle diameters have to match the gear's addedum/dedendum. The addendum, i.e. the tooth length above the reference circle, is 1 + Daten**head**. The dedendum, i.e. the tooth length below the reference circle, is 1 + Daten**clearance**. Both are normalized by the module, thus we need a head/clearance value of *1 - d\_in*. The additional  `/ 1mm` and  `* 2` are required to overcome shortcomings already fixed in the development version of the FCGear Workbench, but porting those fixes back to the stable version may break existing models.

Such "gears" allow the the number of teeth to be as low as *two* and are used as rotary vanes in pumps or compressors (cf. [Roots-type Supercharger](https://en.wikipedia.org/wiki/Roots-type_supercharger)).

### Infinitely large epicycloid

If the radius of the epicycloid's rolling circle becomes infinitely large, it becomes a rolling straight line. Such a degenerated epicycloid is called involute. Gears with such a tooth form are handled by the [involute gear](/FCGear_InvoluteGear "FCGear InvoluteGear") command. It is by far the most common tooth form Today.

## Nützliche Formeln

Siehe [FCGear Evolventenzahnrad](/FCGear_InvoluteGear/de#Nützliche_Formeln "FCGear InvoluteGear/de").

## Eigenschaften Zykloidenparameter Ansicht

![](/images/CycloidGear_inner-outer-diameter_2.svg)

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidGear/de&oldid=1536804>"