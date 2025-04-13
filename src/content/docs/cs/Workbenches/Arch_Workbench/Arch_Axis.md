---
title: Arch Osy
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Osy |
| Umístění Menu |
| Arch → Osy |
| Pracovní stoly |
| [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| A X |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Nástroj Osy Vám umožňuje umístit osový systém do aktuálního dokumentu. Vzdálenosti a úhel mezi osami je uživatelsky nastavitelný, stejně jako styl číslování. Osy slouží především jako reference k uchopování objektů, ale může taky být použit společně se [strukturami](/Arch_Structure/cs "Arch Structure/cs") k vytváření parametrizovaných polí příčníků nebo sloupů.

![](/images/Arch_Axis_example.jpg)

Two axes objects positioned perpendicularly to each other to create a grid

## Použití

1. Stiskněte tlačítko ![](/images/Arch_Axis.png) Osy nebo klávesy A a potom X
2. [Posun](/Draft_Move/cs "Draft Move/cs")/[otočit](/Draft_Rotate/cs "Draft Rotate/cs") osový systém do požadované pozice
3. Přejděte do editačního módu dvojklikem na osový systém v panelu stromu a potvrďte nastavení počtu os, vzdáleností a úhlů mezi osami.

## Volby

* Každá osa v osovém systému má svou vlastní vzdálenost a úhel v relaci k předchozí ose. To umožňuje vytvořit velmi komplexní systémy jako například ne-ortogonální systémy, polární systémy nebo jakýkoliv nehomogenní systém.
* Délka os, rozměry bublin a styly číslování jsou uživatelsky nastavitelné pomocí vlastností osového systému.

## Vlastnosti

* Údaje**Délka**: Délka os
* Pohled**Velikost bubliny**: Velikost osové bubliny
* Pohled**Styl číslování**: Jak jsou osy číslovány: 1,2,3, A,B,C, atd...

## Use as section mark

By setting the **Bubble Position** property to **Arrow left/right** or **Bar left/right**, the axis will display a filled arrow or bar instead of the bubble, so it can be used as a section mark. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Scripting

## Skriptování

Nástroj Osy může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

:   vytváří osový systém založený na daném počtu os a vzdálenosti mezi osami

Příklad:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/cs&oldid=1447117>"