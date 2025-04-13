---
title: Kreslení Shapestring
---
|  |
| --- |
| Draft ShapeString |
| Umístění Menu |
| Draft -> ShapeString |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") |
| Výchozí zástupce |
| S S |
| Představen ve verzi |
| - |
| Viz také |
| [Draft Text](/Draft_Text/cs "Draft Text/cs"), [Part Extrude](/Part_Extrude/cs "Part Extrude/cs") |
|  |

## Popis

Nástroj ShapeString vkládá složený tvar, který reprezentuje textový řetězec na daný bod v aktuálním dokumentu. Výška textu, mezery a font mohou být specifikovány.

The Draft ShapeString command is not intended for standard text annotations. The [Draft Text](/Draft_Text "Draft Text") command or the [Draft Label](/Draft_Label "Draft Label") command should be used for that purpose.

![](/images/Draft_ShapeString_Example400.png)

![](/images/Draft_ShapeString_Example400.png)

## Použití

For Windows users: please read the [Font file selection on Windows](#Font_file_selection_on_Windows) paragraph first.

1. There are several ways to invoke the command:
   * Press the ![](/images/Draft_ShapeString.svg) [Shape from text](/Draft_ShapeString "Draft ShapeString") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/images/Draft_ShapeString.svg) Shape from text** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Annotation → ![](/images/Draft_ShapeString.svg) Shape from text** option from the menu.
2. The **ShapeString** task panel opens.
3. Click a point in the [3D view](/3D_view "3D view"), or type coordinates.
4. Optionally press the Reset Point button to reset the point to the origin.
5. Enter a **String**.
6. Specify the **Height**.
7. To select a font do one of the following:
   * Enter a file path in the **Font file** input box.
   * Press the ... button and select a file.
8. Press the OK button to finish the command.
9. Optionally change the Údaje**Justification** of the ShapeString. See [Properties](#Properties).

## Volby

* Pro zadání souřadnic ručně, jednoduše zadejte číslo a stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu ESC pro ukončení aktuálního příkazu.
* Defaultní soubor s fontem můžete přednastavit v Kreslení/Předvolby.

## Relative font path

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

It is possible to specify a relative path for the font file. For this the FreeCAD document must have been saved at least once.

Some examples:

* ./SomeFont.ttf: The font file is in the same directory as the document.
* ./MyDirectory/SomeFont.ttf: The font file is in the MyDirectory sub-directory of the document directory.
* ../SomeFont.ttf: The font file is in the parent directory of the document directory.

## Font file selection on Windows

On Windows access to the default font folder is restricted. This affects the font file selection for ShapeStrings. There are three cases in FreeCAD where a font file for ShapeStrings can be specified: in the ShapeString task panel, when changing the Údaje**Font File** property of a ShapeString, and when specifying the default font file in the [Draft Preferences](/Draft_Preferences#Texts_and_dimensions "Draft Preferences").

Pressing the ... button and then selecting a file from the default Windows font folder is not possible when using the native file dialog. There are a number of workarounds:

* Make sure **DontUseNativeFontDialog** is set to `true`, which is the default value for this preference. This will only call a different, non-native, file dialog when pressing the ... button in the ShapeString task panel. With this file dialog the default Windows font folder can be accessed.
* Change **DontUseNativeDialog** to `true`. This instructs FreeCAD to always use the non-native file dialog.
* Specify the font file in the input box. You can of course type the full path or copy-paste the path from the Windows File Explorer. But there is also another way to enter the path. If you enter `C:\` a dropdown list will appear. Select `Windows` from that list and add `\F`. Select `Fonts` from the new dropdown list. Finally add `\` and the first letter(s) of the font file, and then select it from the dropdown list.
* Create a custom folder for your font files.

See the [Preferences](#Preferences) paragraph below for the location of the mentioned preferences.

## Notes

## Omezení

* Tento nástroj není dosud obecně dostupný. Bude zahrnut v budoucí verzi. (post v0.13)
* Jsou podporovány soubory s fonty TrueType(\*.ttf), OpenType(\*.otf) a Type1(\*.pfb).
* Velmi malé výšky textu mohou zapříčinit deformaci znaků kvůli ztrátě detailů.
* Aktuální verze je omezena na zarovnání zleva doprava na horizontální základně.

## Tutorials

* [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial"): extrude a ShapeString, position it in 3D space, and create an engraving in another body.
* [How to use ShapeStrings in PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623)

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor"), [Draft Preferences](/Draft_Preferences "Draft Preferences") and [Std DlgParameter](/Std_DlgParameter "Std DlgParameter").

* The default font file can be changed in the preferences: **Edit → Preferences... → Draft → Texts and dimensions → Default ShapeString font file**.
* For Windows users:
  + Set **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeFontDialog** to `true` to use the non-native file dialog when selecting a font file from the ShapeString task panel.
  + Alternatively, set **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeDialog** to `true` to always use the non-native file dialog.

## Vlastnosti

See also: [Property editor](/Property_editor "Property editor").

A Draft ShapeString object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Pozice**: Základní bod složeného písma
* Údaje**String**: Text řetězce
* Údaje**Velikost**: Výška textu v jednotkách FC
* Údaje**Mezery**: Šířka mezer mezi písmeny v jednotkách FC
* Údaje**Font File**: Soubor s definicí fontu pro kreslený text

![](/images/Draft_ShapeString_Justification.png)

The height of the red rectangle (solid line) is equal to the cap height.  
The height of the green rectangle (dashed line) is equal to the shape height.  
The corners, the midpoints of the edges, and the center of the rectangles  
match the 9 justification options: Top-Left to Bottom-Right.

## Scripting

## Skriptování

Nástroj ShapeString může být použit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
shapestring = make_shapestring(String, FontFile, Size=100, Tracking=0)

```

* Změní textový řetězec na složené písmo s použitím specifikovaného fontu.

The placement of the ShapeString can be changed by overwriting its `Placement` attribute, or by individually overwriting its `Placement.Base` and `Placement.Rotation` attributes.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

font1 = "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf"
font2 = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
font3 = "/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf"

S1 = Draft.make_shapestring("This is a sample text", font1, 200)

S2 = Draft.make_shapestring("Inclined text", font2, 200, 10)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(-1000, 500, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 45))
S2.Placement = place2

S3 = Draft.make_shapestring("Upside-down text", font3, 200, 10)
S3.Placement.Base = App.Vector(0, -1000, 0)
S3.Placement.Rotation = App.Rotation(zaxis, 180)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString/cs&oldid=1507661>"