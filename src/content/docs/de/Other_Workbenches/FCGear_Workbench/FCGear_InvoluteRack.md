---
title: FCGear Evolventenzahnstange
---
|  |
| --- |
| FCGear InvoluteRack |
| Menüeintrag |
| Gear → Involute Rack |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| Kein |
| Eingeführt in Version |
| v0.16 |
| Siehe auch |
| [FCGear Evolventenzahnrad](/FCGear_InvoluteGear/de "FCGear InvoluteGear/de") |
|  |

## Beschreibung

Zahnstangen werden verwendet, um eine drehende Bewegung in eine geradlinige Bewegung zu wandeln und umgekehrt. Beispiele für unterschiedliche Anwendungen:

* Eine Zahnstange mit Zahnrad (Triebrad) an einem Wehr.
* Verschiedene Systeme von Zahnradbahnen.
* Zahnstangenlenkung im Fahrzeug.
* Zahnstangenwinde als Hebevorrichtung (z.B. Wagenheber).
* Pneumatische Zahnstangenantriebe zur Steuerung der Ventile von Rohrleitungsanlagen.

![](/images/Involute-Rack_example.png)

:   Von links nach rechts: Zahnstangen mit Geradverzahnung, Schrägverzahnung, Pfeilverzahnung

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_InvoluteRack.svg) Involute Rack drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_InvoluteRack.svg) Involute Rack** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Ein FCGear-InvoluteRack-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

base

* Daten**add\_endings** (`Bool`): If `true` (default), then the total length of the rack is teeth \* pitch. If `false`, then the rack starts with a tooth-flank.
* Daten**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Daten**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
* Daten**teeth** (`Integer`): Default is `15`. Number of teeth.
* Daten**thickness** (`Length`): Default is `5`. Height from the tooth root to the lower side of the rod.

computed

* Daten**transverse\_pitch** (`Length`): (read-only) Pitch in the transverse plane (see [Notes](#Notes)).

fillets

* Daten**head\_fillet** (`Float`): Default is `0 mm`.
* Daten**root\_fillet** (`Float`): Default is `0 mm`.

helical

* Daten**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left.
* Daten**double\_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).
* Daten**properties\_from\_tool** (`Bool`): Default is `false`. If `true` and Daten**beta** is not zero, gear parameters are recomputed internally for the rotated gear.

involute

* Daten**pressure\_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

precision

* Daten**simplified** (`Bool`): Default is `false`, `true` generates a simplified display (without teeth).

tolerance

* Daten**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
* Daten**head** (`Float`): Default is `0`. This value is used to change the tooth height.

version

* Daten-Eigenschaft**version** (`String`):

## Hinweise

* *transverse\_pitch*: The value is the result of multiplication of *module \* pi*. This means for the standard involute rack of FCGear: 15 (*teeth*) \* 3.14 (*transverse\_pitch*) is 47.12 mm. See also *module* further below.
* *clearance*: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
* *double\_helix*: To use the double helical gearing the helix angle β (*beta*) for the helical gearing must first be entered.
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth. The result of the multiplication is displayed in *transverse\_pitch*
* *pressure\_parameter*: Only change the parameter, if sufficient knowledge of the gear geometry is available.

## Nützliche Formeln

See [FCGear InvoluteGear](/FCGear_InvoluteGear#Useful_formulas "FCGear InvoluteGear").

## Skripten

Use the power of python to automate your gear modeling:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteRack.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteRack/de&oldid=1196707>"