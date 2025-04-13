---
title: FCGear  Hypozykloidenrad
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| FCGear Hypozykloidenrad |
| Menüeintrag |
| Gear → HypoCycloid Gear |
| Arbeitsbereich |
| [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") |
| Standardtastenkürzel |
| Kein |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

The ![](/images/FCGear_HypoCycloidGear.svg) **FCGear HypoCycloid Gear** command creates two splined cam disks and a set of rollers that stay in touch with the disks' outer surfaces while moving.

![](/images/FCGear_FCGear_HypoCycloidGear-04.png) ![](/images/FCGear_FCGear_HypoCycloidGear-05.png)

Left: Hypocycloid gear. Right: Gear and transparently displayed also provided reversed gear and set of rollers

```
Please provide a short description what can be achieved using such a gear train.

```

## Anwendung

1. Zum Arbeitsbereich ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/de "FCGear Workbench/de") wechseln.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FCGear_HypoCycloidGear.svg) [HypoCycloid Gear](/FCGear_HypoCycloidGear "FCGear HypoCycloidGear") drücken.
   * Den Menüeintrag**Gear → ![](/images/FCGear_HypoCycloidGear.svg) HypoCycloid Gear** auswählen.
3. Die Einstellungen den geforderten Randbedingungen entsprechend ändern (siehe [Eigenschaften](#Eigenschaften)).

## Eigenschaften

## Hinweise

The default gear(s) are displayed like this:

![](/images/FCGear_FCGear_HypoCycloidGear-01.png)

To display the cam disks and the set of rollers (pins) in different colours, we need three identical HypocycloidGear objects. Their visibility can be toggled:

* Daten**show\_disk0** (`Bool`) for the main cam disk.
* Daten**show\_disk1** (`Bool`) for a reversed cam disk on top.
* Daten**show\_pins** (`Bool`) for the set of pins.

![](/images/FCGear_FCGear_HypoCycloidGear-02.png) ![](/images/FCGear_FCGear_HypoCycloidGear-03.png)

Left: HypocycloidGear objects as created. Right: Objects repositioned to get a better view on each object

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_HypoCycloidGear/de&oldid=1536808>"