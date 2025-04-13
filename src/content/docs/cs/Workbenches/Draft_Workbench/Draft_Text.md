---
title: Kreslení Text
---
|  |
| --- |
| Draft Text |
| Umístění Menu |
| Draft → Text |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| T E |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

## Popis

Nástroj Text vkládá text k zadanému bodu v aktuálnímu dokumentu. Použije se [tloušťka čáry a barva](/Draft_Linestyle/cs "Draft Linestyle/cs") předem zadaná v záložce Nástrojů.

To create a text element with an arrow use the [Draft Label](/Draft_Label "Draft Label") command instead.

![](/images/Draft_Text_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray") and [Draft Snap](/Draft_Snap "Draft Snap").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Text.png) [Text](/Draft_Text "Draft Text") nebo klávesy T a potom E
2. Klikněte na bod ve 3D pohledu nebo zadejte jeho souřadnice
3. Vložte požadovaný text, mezi každým řádkem stiskněte ENTER
4. Klávesu ENTER stiskněte 2x pro ukončení operace.

## Volby

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Stisknutí klávesy CTRL [přichytí](/Draft_Snap/cs "Draft Snap/cs") Váš bod k nejbližšímu uchopovacímu místu, nezávisle na vzdálenosti od něho.
* Pro zadání souřadnic ručně, jednoduše zadejte číslo a stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu
* Stisknutím ENTER nebo Šipka dolu při úpravě textu můžete vložit nebo editovat další řádek textu.
* Stisknutím klávesy Šipka nahoru můžete editovat předcházející řádek textu.
* **Dvojím** stisknutím ENTER (t.j. nevyplnění posledního řádku) přidáte text do dokumentu a ukončíte editor.

## Notes

* A Draft Text can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
* Draft Texts created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Vlastnosti

* Údaje**Pozice**: Základní bod textového bloku
* Údaje**Štítek textu**: Obsah textového bloku
* Pohled**Mód zobrazení**: Specifikuje jestli je text zarovnán podle os nebo vždy míří směrem ke kameře
* Pohled**Velikost fontu**: Velikost písmen
* Pohled**Zarovnání**: Specifikuje zda je text zarovnán vlevo, vpravo nebo na střed od základního bodu.
* Pohled**Mezera mezi řádky**: Specifikuje mezeru mezi řádky textu.
* Pohled**Rotace**: Specifikuje rotaci, která bude aplikována na text.
* Pohled**Osa rotace**: Specifikuje osu, která bude použita pro rotaci.
* Pohled**Název fontu**: Font použitý pro kreslení textu. Může to být název fontu, jako např. "Arial", default styl jako je "sans", "serif" nebo "mono" nebo rodina jako je "Arial,Helvetica,sans" nebo jméno se stylem jako je "Arial:Bold". Není-li zadaný font nalezen v systému, je místo něj použit obecný font.

See also: [Property editor](/Property_editor "Property editor").

A Draft Text object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated.

### Data

Base

* Údaje**Placement** (`Placement`): specifies the position of the text in the [3D view](/3D_view "3D view"). See [Placement](/Placement "Placement").
* Údaje**Text** (`StringList`): specifies the contents of the text. Each item in the list represents a new text line.

### View

Annotation

* Pohled**Annotation Style** (`Enumeration`): specifies the annotation style applied to the text. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Pohled**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the text.

Display Options

* Pohled**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by its Údaje**Placement**. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Pohled**Line Color** (`Color`): not used.
* Pohled**Line Width** (`Float`): not used.

Text

* Pohled**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Pohled**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Pohled**Justification** (`Enumeration`): specifies if the alignment of the text: `Left`, `Center` or `Right`.
* Pohled**Line Spacing** (`Float`): specifies the factor applied to the default line height of the text.
* Pohled**Text Color** (`Color`): specifies the color of the text.

## Scripting

## Skriptování

Nástroj Text může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

To create a Draft Text use the `make_text` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeText` method.

```
text = make_text(string, placement=None, screen=False)

```

* Vytvoří objekt Text na zadaném bodě, je-li poskytnut vektor, s textem obsahujícím řetězec nebo řetězce v seznamu list, jeden řetězec na jeden řádek. \* Je použita aktuální barva a výška textu a font specifikovaný v přednastaveních.
* Je-li screenmode True, text se vždy zobrazuje ve směru pohledu, jinak leží v rovině XY.
* Vrací nově vytvořený objekt.

The view properties of `text` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/cs&oldid=1513369>"