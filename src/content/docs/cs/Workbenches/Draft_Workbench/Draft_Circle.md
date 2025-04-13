---
title: Kreslení kružnice
---
|  |
| --- |
| Kreslení\_Kružnice |
| Umístění Menu |
| Kreslení -> Kružnice |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| C I |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení oblouk](/Draft_Arc/cs "Draft Arc/cs") |
|  |

## Description

## Popis

Nástroj Kružnice vytváří kružnici v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs") zadáním dvou bodů: střed a poloměr nebo zadáním tečen nebo kombinací obou způsobů. Použije se [tloušťka čáry a barva](/Draft_Linestyle/cs "Draft Linestyle/cs") předem zadaná v záložce Nástrojů. Tento nástroj pracuje stejně jako nástroj Oblouk, kromě toho, že se končí po zadání poloměru.

A Draft Circle can be turned into an arc by setting its Údaje**First Angle** and Údaje**Last Angle** properties to different values.

![](/images/Draft_Circle_example.jpg)

![](/images/Draft_Circle_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Circle.png) Kružnice nebo klávesy C pak I
2. Klikněte na první bod ve 3D pohledu nebo zadejte souřadnice
3. Klikněte na druhý bod ve 3D pohledu nebo zadejte hodnotu poloměru.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Volby

* Základní způsob použití nástrije Kružnice je zadáním dvou bodů, středu a bodu na obvodu kružnice, který definuje poloměr.
* Stiskem ALT můžete vybrat tečnu místo zadání druhého bodu. Můžete tak zkonstruovat několik typů kružnic výběrem jedné dvou nebo tří tečen.
* Chcete-li zadat souřadnice ručně, jdenoduše vkládejte čísla a stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu T nebo klikněte na zaklikávací políčko pro zatrhnutí nebo odtrhnutí tlačítka Pokračovat. Je-li nastaven pokračovací mód, bude nástroj Kružnice hned po zadání druhého bodu připraven ke kreslení další kružnice bez nutnosti stisknout znovu tlačítko Kružnice.
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap "Draft Snap") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutím klávesy SHIFT během kreslení [nastavíte vazbu](/Draft_Constrain "Draft Constrain") vašeho bodu svisle nebo vodorovně v relaci ke středu.
* Stisknutím klávesy I nebo tlačítka **Filled** zajistíte, že se kružnice tváří jako plocha (musí být uzavřená). Jednoduše se to nastavuje Pohled->Vlastnost Kružnice na "Otevřené čáry" nebo "Drátový model", toto také může být snadno změněno později.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu.
* Kružnice může být po vytvoření změněna na oblouk nastavením počátečního a koncového úhlu na jiné hodnoty.
* Když je Kružnice v zobrazovacím módu "Jednoduché čáry" může zobrazovat šrafovací vzor nastavením vlastnosti "Vzor" dole.

## Notes

* A Draft Circle can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Circle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Area** (`Area`): (read-only) specifies the area of the face of the circle. The value will be `0.0` if Údaje**Make Face** if `false` or the face cannot be created.
* Údaje**First Angle** (`Angle`): specifies the start angle of the circle, normally `0°`.
* Údaje**Last Angle** (`Angle`): specifies the end angle of the circle, normally `0°`.
* Údaje**Make Face** (`Bool`): specifies if the circle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if the Údaje**First Angle** and Údaje**Last Angle** have the same value. Note that `0°` and `360°` are not considered the same.
* Údaje**Radius** (`Length`): specifies the radius of the circle.

### View

Draft

* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the circle. This property only works if Údaje**Make Face** is `true` and if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Skriptování

Nástroj Kružnice může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

To create a Draft Circle use the `make_circle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeCircle` method.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Vytvoří objekt kružnice podle daného poloměru.
* Je-li zadáno placement (umístění), je využito.
* Je-li facemode (mód plochy) False, bude kružnice zobrazena jako drát, jinak jako plocha.
* Jsou-li zadány počáteční a koncový úhel (startangle a endangle) (ve stupních), jsou využity a objekt se zobrazí jako oblouk.
* Výstupem je nově vytvořený objekt.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/cs&oldid=1472922>"