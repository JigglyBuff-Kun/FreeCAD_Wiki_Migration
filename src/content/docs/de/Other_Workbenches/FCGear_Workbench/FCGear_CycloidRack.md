---
title: FCGear  Zykloidenzahnstange
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| FCGear Zykloidenzahnstange |
| Menüeintrag |
| Gear → Cycloid Rack |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| None |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [FCGear Zykloidenzahnrad](/FCGear_CycloidGear/de "FCGear CycloidGear/de") |
|  |

## Beschreibung

![](/images/FCGear_CycloidRack-01.png)

:   Von links nach rechts: Zykloidenzahnstangen mit Geradverzahnung, Schrägverzahnung, Pfeilverzahnung

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_CycloidRack.svg) Cycloid Rack drücken.
   * Den Menüeintrag **Gear → ![](/images/FCGear_CycloidRack.svg) Cycloid Rack** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

Ein FCGear-CycloidRack-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

accuracy

* Daten**numpoints** (`Integer`): Default is `15`. Number of points for spline.

base

* Daten**add\_endings** (`bool`): If `true` (default), then the total length of the rack is teeth \* pitch. If `false`, then the rack starts with a tooth-flank.
* Daten**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Daten**teeth** (`Integer`): Default is `15`. Number of teeth.
* Daten**thickness** (`Length`): Default is `5 mm`. Thickness of the uncut part of the rack.

computed

* Daten**transverse\_pitch** (`Length`): (read-only) Pitch in the transverse plane.

cycloid

* Daten**inner\_diameter** (`Float`): Default is `7.5`. Diameter of the rolling circle of hypocycloid, normalized by the Daten**module** (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).
* Daten**outer\_diameter** (`Float`): Default is `7.5`. Diameter of the rolling circle of epicycloid, normalized by the Daten**module** (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).

fillets

* Daten**head\_fillet** (`Float`): Default is `0`.
* Daten**root\_fillet** (`Float`): Default is `0`.

helical

* Daten**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created (positive value → rotation direction right, negative value → rotation direction left).
* Daten**double\_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).

involute

* Daten**module** (`Length`): Default is `1 mm`. For racks the module equals the pitch and so is the distance between corresponding points on adjacent teeth (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).

precision

* Daten**simplified** (`Bool`): Default is `false`. If `true` the rack is drawn with a constant number of teeth to avoid topological renaming.

tolerance

* Daten**clearance** (`Float`): Default is `0.25` (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).
* Daten**head** (`Float`): Default is `0`. Additional length of the tip of the teeth, normalized by the Daten**module**.

version

* Daten**version** (`String`):

## Hinweise

Siehe [FCGear Zykloidenzahnrad](/FCGear_CycloidGear/de#Hinweise "FCGear CycloidGear/de").

## Nützliche Formeln

Siehe [FCGear Zykloidenzahnrad](/FCGear_CycloidGear/de#Nützliche_Formeln "FCGear CycloidGear/de").

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidRack/de&oldid=1536806>"