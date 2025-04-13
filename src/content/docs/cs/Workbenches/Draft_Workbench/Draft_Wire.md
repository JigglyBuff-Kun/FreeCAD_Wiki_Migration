---
title: Kreslení Drát (Lomená čára)
---
|  |
| --- |
| Kreslení Drát |
| Umístění Menu |
| Kreslení -> Drát |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| W I |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení Přímka](/Draft_Line/cs "Draft Line/cs"), [Kreslení B-křivka](/Draft_BSpline/cs "Draft BSpline/cs") |
|  |

## Description

## Popis

Nástroj Drát vytváří lomenou čáru (sekvenci přímek z několika segmentů) v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Použije se [tloušťka čáry a barva](/Draft_Linestyle/cs "Draft Linestyle/cs") předem zadaná v záložce Nástrojů. Nástroj Drát se chová přesně stejně jako nástroj [Přímka](/Draft_Line/cs "Draft Line/cs") kromě toho, že nekončí po zadání dvou bodů.

The corners of a Draft Wire can be filleted (rounded) or chamfered by changing its Údaje**Fillet Radius** or Údaje**Chamfer Size** respectively. It is also possible to subdivide the edges of a Draft Wire by changing its Údaje**Subdivisions** property.

![](/images/Draft_Polyline_example.jpg)

Wire defined by multiple points

## Create

### Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Wire.png) [Drát](/Draft_Wire "Draft Wire") nebo klávesy W potom I
2. Klikněte na první bod ve 3D pohledu nebo zadejte jeho souřadnice
3. Klikněte na další bod ve 3D pohledu nebo zadejte jeho souřadnice
4. Stiskněte klávesu F nebo C nebo dvojklikněte na poslední bod pro ukončení nebo uzavření drátu. Je-li drát uzavřen, bude zároveň i povrchem i když se jeví jako drátový model.

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Volby

* Stiskněte klávesu F nebo tlačítko ![](/images/Draft_FinishLine.png) **UkončitČáru** pro ukončení drátu a ponechání jej otevřený
* Stiskněte klávesu C nebo tlačítko ![](/images/Draft_CloseLine.png) **UzavřítČáru** nebo klikněte na první bod drátu. Tím se drát ukončí a uzavře se doplněním posledního (uzavíracího) segmentu mezi posledním a počátečním bodem.
* Stisknutím klávesy X, Y nebo Z po zadání bodu zajistíte, že následující bod bude ležet na dané ose.
* Pro ruční zadávání souřadnic jednoduše zadávejte čísla a mezi každou komponentou X, Y a Z stiskněte ENTER
* Stiskněte klávesu R nebo klikněte/odklikněte zaklikávací políčko **Relativní**. Je-li nastaven relativní mód jsou souřadnice následujícího bodu relativní k předchozímu bodu. Je-li mód absolutní souřadnice jsou vztaženy k počátečnímu bodu (0,0,0).
* Stiskněte klávesu T nebo klikněte/odklikněte zaklikávací políčko **Pokračovat**. Je-li nastaven pokračovací mód, nástroj Drát bude po ukončení drátu restartován a připraven ke kreslení dalšího drátu bez nutnosti znovu jej spouštět klikáním na tlačítko Drát.
* Stiskněte při kreslení klávesu CTRL pro [přichycení](/Draft_Snap "Draft Snap") Vašeho bodu k nejbližšímu uchopovacímu místu, nezávisle na vzdálenosti od něho.
* Stiskněte při kreslení klávesu SHIFT pro nastavení [vazby](/Draft_Constrain "Draft Constrain") Vašeho dalšího bodu vodorovně nebo svisle v relaci k předchozímu bodu.
* Stiskněte klávesu W nebo stiskněte tlačítko ![](/images/Draft_Wipe.png) **Smaž** pro odstranění existujících segmentů a začněte křivku z posledního bodu.
* Stiskněte klávesy CTRL+Z nebo tlačítko ![](/images/Draft_UndoLine.png) **Undo** k návratu na poslední bod.
* Stiskněte klávesu I nebo tlačítko **Filled** aby se drát po jeho uzavření zobrazoval jako plocha. To jednoduše nastavuje Pohled->Vlastnost Drát na "Otevřené čáry" nebo "Drátový model", toto také může být snadno změněno později.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu Drát.

## Join

### Usage

1. The end points of the [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires to be joined must be exactly coincident. If required first adjust points to ensure that this is the case.
2. Select two or more [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") button.
   * Select the **Drafting → ![](/images/Draft_Wire.svg) Polyline** option from the menu.
   * Use the keyboard shortcut: P then L.

## Notes

* A Draft Wire can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* A Draft Wire can be converted to a [Draft BSpline](/Draft_BSpline "Draft BSpline") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.
* [Draft Lines](/Draft_Line "Draft Line") and Draft Wires can also be joined with the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Wire object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Area** (`Area`): (read-only) specifies the area of the face of the wire. The value will be `0.0` if Údaje**Make Face** is `false` or the face cannot be created.
* Údaje**Base** (`Link`)
* Údaje**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the wire.
* Údaje**Closed** (`Bool`): specifies if the wire is closed or not. If the wire is initially open this value is `false`, setting it to `true` will draw a line segment to close the wire. If the wire is initially closed this value is `true`, setting it to `false` will remove the last line segment and make the wire open.
* Údaje**End** (`VectorDistance`): specifies the end point of the wire.
* Údaje**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the wire.
* Údaje**Length** (`Length`): (read-only) specifies the total length of the wire.
* Údaje**Make Face** (`Bool`): specifies if the wire makes a face or not. If it is `true` a face is created, otherwise only the edges are considered part of the object. This property only works if Údaje**Closed** is `true` and if the wire does not self-intersect.
* Údaje**Points** (`VectorList`): specifies the points of the wire in its local coordinate system.
* Údaje**Start** (`VectorDistance`): specifies the start point of the wire.
* Údaje**Subdivisions** (`Integer`): specifies the number of subdivisions for each edge of the wire. If it is `1` each edge will be divided into `2` equal segments. Subdivisions are applied before chamfers and fillets.
* Údaje**Tool** (`Link`)

### View

Draft

* Pohled**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the wire.
* Pohled**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the wire, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Pohled**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the wire, so it can be used as an annotation line.
* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed wire. This property only works if Údaje**Make Face** is `true` and if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Skriptování

Nástroj Drát může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Wire use the `make_wire` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeWire` method.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Vytvoří objekt Drát podle zadaného seznamu vektorů bodů nebo podle Drát (Part Wire).
* Je-li closed True nebo jsou-li první a poslední bod identické, drát je uzavřen.
* Je-li face (plocha) True (a drát je uzavřen), bude se drát jevit jako vyplněná plocha.
* Je použita aktuálně nastavená tloušťka čáry a barva čáry.
* Vrací nově vytvořený objekt.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/cs&oldid=1472873>"