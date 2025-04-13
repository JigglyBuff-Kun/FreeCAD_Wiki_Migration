---
title: Kreslení Elipsa
---
|  |
| --- |
| Kreslení Elipsa |
| Umístění Menu |
| Kreslení -> Elipsa |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| E L |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení Kružnice](/Draft_Circle/cs "Draft Circle/cs") |
|  |

## Popis

Nástroj Elipsa vytvoří elipsu v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs") vložením dvou bodů definujících roh obdélníku, kterému je elipsa vepsána. Elipsa přebírá [barvu a tloušťku čáry](/Draft_Linestyle/cs "Draft Linestyle/cs") předem nastavenou v záložce úloh.

A Draft Ellipse can be turned into an elliptical arc by setting its Údaje**First Angle** and Údaje**Last Angle** properties to different values.

![](/images/Draft_ellipse_example.jpg)

![](/images/Draft_ellipse_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Ellipse.png) [Elipsa](/Draft_Ellipse "Draft Ellipse") nebo klávesy E pak L
2. Klikněte na první bod ve 3D pohledu nebo zadejte souřadnice
3. Klikněte na druhý bod ve 3D pohledu nebo zadejte souřadnice.

## Volby

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Chcete-li zadat souřadnice ručně jednoduše zadejte číslo a potom stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu T nebo klikněte na zaklikávací políčko pro zatrhnutí nebo odtrhnutí tlačítka **Pokračovat**. Je-li nastaven pokračovací mód, bude nástroj Elipsa hned po zadání druhého bodu připraven ke kreslení další elipsy bez nutnosti stisknout znovu tlačítko Elipsa.
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap "Draft Snap") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutím klávesy SHIFT během kreslení [nastavíte vazbu](/Draft_Constrain "Draft Constrain") vašeho bodu svisle nebo vodorovně v relaci k předchozímu bodu.
* Stisknutím klávesy I nebo tlačítka **Vyplnit** bude se elipsa po uzavření jevit jako povrch (vyplněná). Tak se jednoduše nastaví Pohled->Vlastnosti elipsy na "Flat přímky" nebo "Drátový model", což může být nastaveno i později.
* Stisknutím tlačítka ESC nebo **Cancel** zrušíte právě probíhající příkaz.
* Elipsy v zobrazovacím módu "Flat přímky" mohou mít šrafování podle nastavení jejich vlastnosti "Vzor" níže.

## Notes

* A Draft Ellipse can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Ellipse](/Part_Ellipse "Part Ellipse") instead of a Draft Ellipse.

## Vlastnosti

See also: [Property editor](/Property_editor "Property editor").

A Draft Ellipse object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Velký poloměr**: Velký poloměr elipsy
* Údaje**Malý poloměr**: Malý poloměr elipsy
* Pohled**Vzor**: Určuje šrafovací vzor, kterým má elipsa být vyplněna
* Pohled**Rozměr vzoru**: Určuje velikost šrafovacího vzoru

### View

Draft

* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the ellipse. This property only works if Údaje**Make Face** is `true` and if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Skriptování

Nástroj Elipsa může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

To create a Draft Ellipse use the `make_ellipse` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeEllipse` method.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Vytvoří elipsu s daným velkým (majorradius) a malým(minorradius) poloměrem.
* Je-li zadán placement (umístění), bude využito.
* Je-li facemode False, bude se elipsa zobrazovat jako drátový model, jinak jako plocha.
* Vrací nově vytvořený pohled.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/cs&oldid=1472942>"