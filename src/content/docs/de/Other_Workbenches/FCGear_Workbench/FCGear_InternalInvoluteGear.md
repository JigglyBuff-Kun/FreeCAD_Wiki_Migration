---
title: FCGear InnenverzahntesEvolventenzahnrad
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| FCGear InnenverzahntesEvolventenzahnrad |
| Menüeintrag |
| Gear → Internal Involute Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| Kein |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [FCGear Evolventenzahnrad](/FCGear_InvoluteGear/de "FCGear InvoluteGear/de") |
|  |

## Beschreibung

![](/images/FCGear_InternalInvoluteGear-01.png)

Von links nach rechts: Hohlräder mit Geradverzahnung, Schrägverzahnung, Pfeilverzahnung

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Ein FCGear-InternalInvoluteGear-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

accuracy

* Daten-Eigenschaft**numpoints** (`Integer`): Standardwert ist `6`. Ändert das Evolventenprofil. Das Ändern des Wertes kann zu unerwarteten Ergebnissen führen.

Basis

* Daten**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Daten**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
* Daten**teeth** (`Integer`): Default is `15`. Number of teeth (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
* Daten**thickness** (`Length`): Default is `5 mm`. Thickness of the uncut outer part of the gear.

computed

* Daten**angular\_backlash** (`Angle`): (read-only)
* Daten**da** (`Length`): (read-only) Inside diameter, measured at the addendum (the tip of the teeth).
* Daten**df** (`Length`): (read-only) Root diameter, measured at the foot of the teeth.
* Daten**dw** (`Length`): (read-only) Working pitch diameter.
* Daten**outside\_diameter** (`Length`): (read-only) Outside diameter.
* Daten**transverse\_pitch** (`Length`): (read-only) Pitch in the plane of rotation.

fillets

* Daten**head\_fillet** (`Float`): Default is `0 mm`.
* Daten**root\_fillet** (`Float`): Default is `0 mm`.

helical

* Daten**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
* Daten**double\_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
* Daten**properties\_from\_tool** (`Bool`): Default is `false`. If `true` and Daten**beta** is not zero, gear parameters are recomputed internally for the rotated gear.

involute

* Daten**pressure\_angle** (`Angle`): Default is `20 °` (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
* Daten**shift** (`Float`): Default is `0`. Generates a positive and negative profile shift (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).

precision

* Daten**simple** (`Bool`): Standardwert ist `false`. `true` erzeugt eine vereinfachte Ansicht (ohne Zähne und mit nur einem Zylinder mit Teilkreisdurchmesser).

tolerance

* Daten**backlash** (`Length`): Default is `0 mm`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.
* Daten**clearance** (`Float`): Default is `0.25` (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
* Daten**head** (`Float`): Default is `-0.4 mm`. This value is used to change the tooth height.
* Daten**reversed\_backlash** (`Bool`): `true` backlash decrease or `false` (default) backlash increase (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).

version

* Daten**version** (`String`):

## Hinweise

Siehe [FCGear Evolventenzahnrad](/FCGear_InvoluteGear/de#Hinweise "FCGear InvoluteGear/de").

## Nützliche Formeln

Siehe [FCGear Evolventenzahnrad](/FCGear_InvoluteGear/de#Hilfreiche_Formeln "FCGear InvoluteGear/de").

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InternalInvoluteGear/de&oldid=1551293>"