---
title: Kreslení Obdélníku
---
|  |
| --- |
| Draft Rectangle |
| Umístění Menu |
| Draft -> Rectangle |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architecture](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| R E |
| Představen ve verzi |
| - |
| Viz také |
| [Part Box](/Part_Box/cs "Part Box/cs") |
|  |

## Description

## Popis

Nástroj Obdélník vytváří obdélník zadáním dvou protějších bodů. Použije se [tloušťka čáry a barva](/Draft_Linestyle/cs "Draft Linestyle/cs") předem zadaná v záložce Nástrojů.

The corners of a Draft Rectangle can be filleted (rounded) or chamfered by changing its Údaje**Fillet Radius** or Údaje**Chamfer Size** respectively. It is also possible to subdivide a Draft Rectangle by changing its Údaje**Columns** and/or Údaje**Rows** property.

![](/images/Draft_Rectangle_example.jpg)

![](/images/Draft_Rectangle_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Rectangle.png) Obdélník nebo klávesy R a potom E
2. Klikněte na první roh ve 3D pohledu nebo zadejte souřadnice
3. Klikněte na protější bod ve 3D pohledu nebo zadejte souřadnice. Obdélník je také povrchem, i když se jeví jako drátový model.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Volby

* Stiskněte X, Y nebo Z po prvním bodu pro určení osy, ve které bude následuící bod.
* Pro zadání souřadnic ručně, jednoduše zadejte číslo a stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu R nebo klikněte/odklikněte zaklikávací políčko **Relativní**. Je-li nastaven relativní mód jsou souřadnice následujícího bodu relativní k předchozímu bodu. Je-li mód absolutní souřadnice jsou vztaženy k počátečnímu bodu (0,0,0).
* Stiskněte klávesu T nebo klikněte/odklikněte zaklikávací políčko **Pokračovat**. Je-li nastaven pokračovací mód, nástroj Obdélník bude po ukončení obdélníku restartován a připraven ke kreslení dalšího obdélníku bez nutnosti znovu jej spouštět klikáním na tlačítko Obdélník.
* Stiskněte při kreslení klávesu CTRL pro [přichycení](/Draft_Snap/cs "Draft Snap/cs") Vašeho bodu k nejbližšímu uchopovacímu místu, nezávisle na vzdálenosti od něho.
* Stiskněte při kreslení klávesu SHIFT pro nastavení [vazby](/Draft_Constrain/cs "Draft Constrain/cs") Vašeho dalšího bodu vodorovně nebo svisle v relaci k předchozímu bodu.
* Stiskněte klávesu I nebo tlačítko **Filled** aby se obdélník zobrazoval jako plocha. To jednoduše nastavuje Pohled->Vlastnost Obdélníku na "Otevřené čáry" nebo "Drátový model", toto také může být snadno změněno později.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu Obdélník.

## Notes

* A Draft Rectangle can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Plane](/Part_Plane "Part Plane") instead of a Draft Rectangle.

## Vlastnosti

* Údaje**Délka**: Specifikuje délku obdélníku
* Údaje**Šířka**: Specifikuje šířku obdélníku
* Údaje**Poloměr zaoblení**: Specifikuje poloměr zaoblení rohů obdélníku
* Pohled**Textura obrázku**: Umožňuje zadat adresu souboru s obrázkem, který bude zobrazen na obdélníku. Je na Vás jestli dáte obdélníku stejné proporce jako má obrázek abyste se vyhnuli jeho zkreslení. Nevyplnění této vlastnosti obrázek odebere.

See also: [Property editor](/Property_editor "Property editor").

A Draft Rectangle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Area** (`Area`): (read-only) specifies the area of the face of the rectangle. The value will be `0.0` if Údaje**Make Face** if `false`.
* Údaje**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the rectangle.
* Údaje**Columns** (`Integer`): specifies the number of equal-sized columns in which the rectangle is divided.
* Údaje**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the rectangle.
* Údaje**Height** (`Distance`): specifies the height of the rectangle.
* Údaje**Length** (`Distance`): specifies the length of the rectangle.
* Údaje**Make Face** (`Bool`): specifies if the rectangle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Údaje**Rows** (`Integer`): specifies the number of equal-sized rows in which the rectangle is divided.

### View

Draft

* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the rectangle. This property only works if Údaje**Make Face** is `true` and if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").
* Pohled**Texture Image** (`File`): specifies the path of the image file to be mapped onto the face of the rectangle. Blanking this property will remove the image. The rectangle should have the same proportions as the image to avoid distortions.

## Scripting

## Skriptování

Nástroj Obdélník může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

To create a Draft Rectangle use the `make_rectangle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeRectangle` method.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Vytvoří objekt obdélník s délkou v ose X a výškou v ose Y.
* Je-li zadáno placement (umístění), je použito.
* Je-li facemode False, obdélník je zobrazen jako povrch, jinak jako drátový model.
* Je použita tloušťka čáry a barva čáry podle aktuálního nastavení.
* Výstupem je nově vytvořený objekt.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/cs&oldid=1472949>"