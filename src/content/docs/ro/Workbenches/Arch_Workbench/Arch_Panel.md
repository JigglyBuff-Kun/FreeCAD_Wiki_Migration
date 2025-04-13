---
title: Arch Panel/Panou
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arch Panel                                                                                                                                                                           |
| poziția meniului                                                                                                                                                                     |
| Arch → Panel Tools → Panel                                                                                                                                                           |
| Ateliere                                                                                                                                                                             |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                                                                       |
| scurtătură                                                                                                                                                                           |
| P A                                                                                                                                                                                  |
| Prezentat în versiune                                                                                                                                                                |
| 0.15                                                                                                                                                                                 |
| A se vedea, de asemenea,                                                                                                                                                             |
| [Arch Panel Cut](/Arch_Panel_Cut/ro "Arch Panel Cut/ro"), [Arch Panel Sheet](/index.php?title=Arch_Panel_Sheet/ro&action=edit&redlink=1 "Arch Panel Sheet/ro (page does not exist)") |
|                                                                                                                                                                                      |

## Descriere

Acest instrument vă permite să construiți tot felul de elemente de tip panou, de obicei pentru construcții de panouri, cum ar fi proiectul [WikiHouse](http://www.wikihouse.cc/), dar și pentru toate tipurile de obiecte bazate pe un profil plat.

![](/images/Arch_Panel_example.jpg)

_Imaginea de mai sus prezintă o serie de obiecte de panou, realizate pur și simplu din contururi 2D importate dintr-un fișier DXF. Ele pot fi apoi rotite și asamblate pentru a crea structuri._

Din versiunea 0.17, Panoul Arch poate fi de asemenea utilizat pentru a crea profiluri ondulate sau trapezoidale:

![](/images/Arch_panel_wave.jpg)

## Cum se folosește

1. Selectați o formă 2D (obiect Draft, fațetă sau Schetch) - opțional
2. apăsați butonul ![](/images/Arch_Panel.png) [Arch Panel](/Arch_Panel "Arch Panel"), sau apăsați tasta P apoi tasta A
3. Ajustați proprietățile dorite

## Limite

- În prezent nu există un sistem automat pentru a produce foi de tăiere 2D de la obiectele panoului, însă o astfel de caracteristică se află în plan și va fi adăugată în viitor.
- Acest instrument nu este disponibil în versiunile FreeCAD înainte de 0.15

## Opţiuni

- Panels share the common properties and behaviours of all [Arch Components](/Arch_Component "Arch Component")
- The thickness of a panel can be adjusted after creation
- Press ESC or the **Cancel** button to abort the current command.
- Double-clicking on the panel in the tree view after it is created allows you to enter edit mode and access and modify its additions and subtractions
- It is possible to automatically make panels composed of more than one sheet of a material, by raising its Sheets property.
- Panels can make use of [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). When using a multi-material, the panel will become multi-layer, using the thicknesses specified by the multi-material. Any layer with a thickness of zero will have its thickness defined automatically by the remaining space defined by the Panel's own Thickness value, after subtracting the other layers.

## Proprietăți

An Arch Panel object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

- Date**Length**: The length of the panel
- Date**Width**: The width of the panel
- Date**Thickness**: The thickness of the panel
- Date**Area**: The area of the panel (automatic)
- Date**Sheets**: The number of sheets of material the panel is made of
- Date**Wave Length**: The length of the wave for corrugated panels
- Date**Wave Height**: The height of the wave for corrugated panels
- Date**Wave Type**: The type of the wave for corrugated panels, curved, trapezoidal or spiked
- Date**Wave Direction**: The orientation of the waves for corrugated panels
- Date**Bottom Wave**: If the bottom wave of the panel is flat or not

## Scripting

## Scrip-Programare

Instrumentul Panel poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând următoarele funcții:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

- Creates a `Panel` object from the given `baseobj`, which is a closed profile, and the given extrusion `thickness`.
  - If no `baseobj` is given, you can provide the numerical values for the `length`, `width`, and `thickness` to create a block panel.
- If a `placement` is given, it is used.

Exempluː

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Tutoriale

- [Wikihouse porting tutorial](/Wikihouse_porting_tutorial "Wikihouse porting tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/ro&oldid=1539699>"
