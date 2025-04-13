---
title: Kreslení Přímka
---
|  |
| --- |
| Kreslení Přímka |
| Umístění Menu |
| Kreslení → Přímka |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| L I |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení drát](/Draft_Wire/cs "Draft Wire/cs") |
|  |

## Description

## Popis

Nástroj Přímka vytváří rovnou dvoubodovou přímku v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Použije se [tloušťka čáry a barva](/Draft_Linestyle/cs "Draft Linestyle/cs") předem zadaná v záložce Nástrojů. Nástroj Přímka se chová přesně stejně jako nástroj [Drát (lomená čára)](/Draft_Wire/cs "Draft Wire/cs") kromě toho že končí po zadání dvou bodů.

A Draft Line is in fact a [Draft Wire](/Draft_Wire "Draft Wire") with only two points.

![](/images/Draft_Line_example.jpg)

![](/images/Draft_Line_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Line.png) [Přímka](/Draft_Line "Draft Line") nebo klávesy L pak I
2. Klikněte na první bod ve 3D pohledu nebo zadejte souřadnice
3. Klikněte na druhý bod ve 3D pohledu nebo zadejte souřadnice.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Volby

* Po zadání prvního bodu stiskněte X, Y nebo Z pro určení osy druhého bodu.
* Pro zadání souřadnic ručně, jednoduše zadejte číslo a stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu R nebo klikněte/odklikněte zaklikávací políčko **Relativní**. Je-li nastaven relativní mód jsou souřadnice následujícího bodu relativní k předchozímu bodu. Je-li mód absolutní souřadnice jsou vztaženy k počátečnímu bodu (0,0,0).
* Stiskněte klávesu T nebo klikněte/odklikněte zaklikávací políčko **Pokračovat**. Je-li nastaven pokračovací mód, nástroj Přímka bude po ukončení křivky restartován a připraven ke kreslení další přímky bez nutnosti znovu jej spouštět klikáním na tlačítko Přímka.
* Stiskněte při kreslení klávesu CTRL pro [přichycení](/Draft_Snap "Draft Snap") Vašeho bodu k nejbližšímu uchopovacímu místu, nezávisle na vzdálenosti od něho.
* Stiskněte při kreslení klávesu SHIFT pro nastavení [vazby](/Draft_Constrain "Draft Constrain") Vašeho dalšího bodu vodorovně nebo svisle v relaci k předchozímu bodu.
* Stiskněte klávesy CTRL+Z nebo tlačítko ![](/images/Draft_UndoLine.png) **Undo** ke zrušení posledního bodu.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu Přímka.

## Notes

* A Draft Line can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* Draft Lines and [Draft Wires](/Draft_Wire "Draft Wire") can be joined with the [Draft Wire](/Draft_Wire "Draft Wire") command, the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Line](/Part_Line "Part Line") instead of a Draft Line.

## Properties

## Vlastnosti

* DATA**Počátek**: Počáteční bod
* DATA**Konec**: Koncový bod
* DATA**Subdivisions**: Divides the line with the given number of subdivisions [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

## Scripting

## Skriptování

Nástroj Přímka může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

To create a Draft Line use the `make_line` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeLine` method.

```
line = make_line(p1, p2)
line = make_line(LineSegment)
line = make_line(Shape)

```

* Vytvoří přímku mezi dvěma zadanými vektory. Pro kreslení je použita aktuálně nastavená šířka a barva čáry.
* Vrací nově vytvořený objekt.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 500, 0)
p3 = App.Vector(-250, -500, 0)
p4 = App.Vector(500, 1000, 0)

line1 = Draft.make_line(p1, p2)
line2 = Draft.make_line(p3, p4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Line/cs&oldid=1472859>"