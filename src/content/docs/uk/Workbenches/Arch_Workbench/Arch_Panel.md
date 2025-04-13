---
title: Arch Panel
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Panel |
| Меню прокату |
| Arch → Panel |
| Верстаки |
| [Arch](/Arch_Workbench/uk "Arch Workbench/uk") |
| Ярлик за умовчанням |
| P A |
| Введено у версії |
| 0.15 |
| Дивись також |
| [Arch Structure](/Arch_Structure/uk "Arch Structure/uk"), [Arch Panel Cut](/index.php?title=Arch_Panel_Cut/uk&action=edit&redlink=1 "Arch Panel Cut/uk (page does not exist)"), [Arch Panel Sheet](/index.php?title=Arch_Panel_Sheet/uk&action=edit&redlink=1 "Arch Panel Sheet/uk (page does not exist)") |
|  |

## Description

The **Arch Panel** tool allows you to build all kinds of panel-like elements, typically for panel constructions like the [WikiHouse](https://www.wikihouse.cc/) project, but also for all kinds of objects that are based on a flat profile.

![](/images/Arch_Panel_example.jpg)

*The above image shows a series of panel objects, simply made from imported 2D contours from a DXF file. They can then be rotated and assembled to create structures.*

Since version 0.17 and above the Arch Panel can also be used to create corrugated or trapezoidal profiles:

![](/images/Arch_panel_wave.jpg)

## Usage

1. Select a 2D shape (Draft object, face or sketch) - optional.
2. Press the ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel") button, or press P then A keys.
3. Adjust the desired properties.

### Limitations

* There is currently no automatic system to produce 2D cutting sheets from panel objects, but such feature is in the plans and will be added in the future.

## Options

* The thickness of a panel can be adjusted after creation.
* Press Esc or the Cancel button to abort the current command.
* Double-clicking on the panel in the tree view after it is created allows you to enter edit mode and access and modify its additions and subtractions.
* It is possible to automatically make panels composed of more than one sheet of a material, by raising its Sheets property.
* Panels can make use of ![](/images/Arch_MultiMaterial.svg) [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). When using a multi-material, the panel will become multi-layer, using the thicknesses specified by the multi-material. Any layer with a thickness of zero will have its thickness defined automatically by the remaining space defined by the Panel's own Thickness value, after subtracting the other layers.

## Properties

An Arch Panel object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

* Дані**Length**: The length of the panel
* Дані**Width**: The width of the panel
* Дані**Thickness**: The thickness of the panel
* Дані**Area**: The area of the panel (automatic)
* Дані**Sheets**: The number of sheets of material the panel is made of
* Дані**Wave Length**: The length of the wave for corrugated panels
* Дані**Wave Height**: The height of the wave for corrugated panels
* Дані**Wave Type**: The type of the wave for corrugated panels, curved, trapezoidal or spiked
* Дані**Wave Direction**: The orientation of the waves for corrugated panels
* Дані**Bottom Wave**: If the bottom wave of the panel is flat or not

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Panel tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

* Creates a `Panel` object from the given `baseobj`, which is a closed profile, and the given extrusion `thickness`.
  + If no `baseobj` is given, you can provide the numerical values for the `length`, `width`, and `thickness` to create a block panel.
* If a `placement` is given, it is used.

Example:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Tutorials

* [Wikihouse porting tutorial](/Wikihouse_porting_tutorial "Wikihouse porting tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/uk&oldid=1539691>"