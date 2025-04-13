---
title: Kreslení oblouku
---
|  |
| --- |
| Kreslení oblouk |
| Umístění Menu |
| Kreslení → Oblouk |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| A R |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení kružnice](/Draft_Circle/cs "Draft Circle/cs") |
|  |

## Popis

Nástroj Oblouk vytváří oblouk v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs") zadáním čtyř bodů: střed, poloměr, počáteční a koncový bod nebo zadáním tečen nebo kombinací obou způsobů. Použije se [tloušťka čáry a barva](/Draft_Linestyle/cs "Draft Linestyle/cs") předem zadaná v záložce Nástrojů. Tento nástroj pracuje stejně jako nástroj [Kružnice](/Draft_Circle/cs "Draft Circle/cs"), ale přidává počáteční a koncový úhel.

The ![](/images/Draft_Arc.svg) **Draft Arc** command creates a circular arc on the current [working plane](/Draft_SelectPlane "Draft SelectPlane") from a center, a radius, a start angle and an aperture angle. The radius and the angles can be defined by picking points.

A Draft Arc is in fact a [Draft Circle](/Draft_Circle "Draft Circle") with a Údaje**First Angle** that is not the same as its Údaje**Last Angle**.

![](/images/Draft_Arc_example.jpg)

Arc defined by four points, center, radius, initial point of arc and final point of arc

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Arc.png) [Oblouk](/Draft_Arc "Draft Arc") nebo stiskněte klávesy A a potom R
2. Klikněte na první bod ve 3D pohledu nebo zadejte souřadnice
3. Klikněte na druhý bod ve 3D pohledu nebo zadejte poloměr
4. Klikněte na třetí bod ve 3D pohledu nebo zadejte počáteční úhel
5. Klikněte na čtvrtý bod ve 3D pohledu nebo zadejte koncový úhel

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Volby

* Základní použití nástroje Oblouk je zadání čtyř bodů: střed, bod na obvodu, který definuje poloměr, třetí bod definující začátek oblouku a čtvrtý bod definující jeho konec.
* Stisknutím ALT můžete vybrat tečnu místo zadávání bodu čímž definujete základní kružnici oblouku. Tím můžete zkonstruovat několik typů kružnic výběrem jedné, dvou nebo tří tečen.
* Směr oblouku závisí na pohybu myši. Jestli s ní po zadání třetího bodu začnete pohybovat ve směru hodinových ručiček, Váš oblouk bude vytvořen ve stejném směru. Chcete-li oblouk v opačném směru, jednoduše se myší vracejte přes třetí bod proti směru hodinových ručiček tak dlouho až se oblouk začne kreslit v opačném směru.
* Chcete-li zadat souřadnice ručně jednoduše zadejte číslo a potom stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu T nebo klikněte na zaklikávací políčko pro zatrhnutí nebo odtrhnutí tlačítka **Pokračovat**. Je-li nastaven pokračovací mód, bude nástroj Oblouk hned po zadání čtvrtého bodu připraven ke kreslení dalšího oblouku bez nutnosti stisknout znovu tlačítko Oblouk..
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap "Draft Snap") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutím klávesy SHIFT během kreslení [nastavíte vazbu](/Draft_Constrain "Draft Constrain") vašeho bodu svisle nebo vodorovně v relaci ke středu.
* Stisknutím tlačítka ESC nebo **Cancel** zrušíte právě probíhající příkaz.
* Oblouk může být po vytvoření změněn na kružnici nastavením stejné hodnoty pro počáteční i koncový úhel ve vlastnostech.

## Notes

* A Draft Arc can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

## Vlastnosti

* Údaje**Poloměr**: Poloměr oblouku
* Údaje**Počáteční úhel**: Úhel počátečního bodu oblouku
* Údaje**Koncový úhel**: Úhel koncového bodu oblouku

## Scripting

## Skriptování

Nástroj Kružnice může být použít i pro vytváření oblouků v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce, přidáním dodatečných argumentů:

To create a Draft Arc use the `make_circle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeCircle` method.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/cs&oldid=1472888>"