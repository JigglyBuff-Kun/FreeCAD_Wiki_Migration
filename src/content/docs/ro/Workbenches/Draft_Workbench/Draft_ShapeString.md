---
title: Desen 2D ShapeString
---
|  |
| --- |
| Draft ShapeString |
| poziția meniului |
| Draft → Shape from text ... |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| S S |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Text](/Draft_Text/ro "Draft Text/ro"), [Part Extrude](/Part_Extrude/ro "Part Extrude/ro") |
|  |

## Descriere

Instrumentul ShapeString introduce o formă compusă care reprezintă un șir de caractere(text) într-un punct dat în documentul curent. Pot fi definite atribute ca: Înălțimea textului, tipul fontul, etc.
The resulting shape can be used with the [Part Extrude](/Part_Extrude/ro "Part Extrude/ro") tool to create 3D letters.

Cele [Draft Text](/Draft_Text/ro "Draft Text/ro") instrumentul este o alternativă mai simplă, care nu produce o formă închisă.

![](/images/Draft_ShapeString_Example400.png)

![](/images/Draft_ShapeString_Example400.png)

## Cum se folosește

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
9. Optionally change the Date**Justification** of the ShapeString. See [Properties](#Properties).

## Opţiuni

* Pentru a introduce coordonatele manual, pur și simplu introduceți numerele, apoi apăsați ENTER între fiecare componenetă pe X, Y și Z.
* Apăsați tasta ESCpentru a abandona operațiunea.
* Puteți defini un fișier de font implicit în Draft/Prefences.

## Relative font path

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

It is possible to specify a relative path for the font file. For this the FreeCAD document must have been saved at least once.

Some examples:

* ./SomeFont.ttf: The font file is in the same directory as the document.
* ./MyDirectory/SomeFont.ttf: The font file is in the MyDirectory sub-directory of the document directory.
* ../SomeFont.ttf: The font file is in the parent directory of the document directory.

## Font file selection on Windows

On Windows access to the default font folder is restricted. This affects the font file selection for ShapeStrings. There are three cases in FreeCAD where a font file for ShapeStrings can be specified: in the ShapeString task panel, when changing the Date**Font File** property of a ShapeString, and when specifying the default font file in the [Draft Preferences](/Draft_Preferences#Texts_and_dimensions "Draft Preferences").

Pressing the ... button and then selecting a file from the default Windows font folder is not possible when using the native file dialog. There are a number of workarounds:

* Make sure **DontUseNativeFontDialog** is set to `true`, which is the default value for this preference. This will only call a different, non-native, file dialog when pressing the ... button in the ShapeString task panel. With this file dialog the default Windows font folder can be accessed.
* Change **DontUseNativeDialog** to `true`. This instructs FreeCAD to always use the non-native file dialog.
* Specify the font file in the input box. You can of course type the full path or copy-paste the path from the Windows File Explorer. But there is also another way to enter the path. If you enter `C:\` a dropdown list will appear. Select `Windows` from that list and add `\F`. Select `Fonts` from the new dropdown list. Finally add `\` and the first letter(s) of the font file, and then select it from the dropdown list.
* Create a custom folder for your font files.

See the [Preferences](#Preferences) paragraph below for the location of the mentioned preferences.

## Notes

## Limitations

* Acest instrumente nu este disponibil pentru versiunile anterioarea lui FreeCAD 0.14
* Sunt suportatea următoareal tipuri de fișiere pentru fonturi: TrueType(\*.ttf), OpenType(\*.otf) și Type1(\*.pfb).
* Înălțimile foarte mici ale textului pot cauza distorsionarea glifelor de caractere din cauza pierderii detaliilor la scalare.
* Versiunea actuală este limitată la scrierile de la stânga la dreapta pe o linie de bază orizontală.
* Pentru a crea texte de formă curbă puteți utiliza [Macro FCCircularText](/index.php?title=Macro_FCCircularText/ro&action=edit&redlink=1 "Macro FCCircularText/ro (page does not exist)").

## Tutorials

* [Draft ShapeString tutorial](/Draft_ShapeString_tutorial/ro "Draft ShapeString tutorial/ro")

* [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial"): extrude a ShapeString, position it in 3D space, and create an engraving in another body.
* [How to use ShapeStrings in PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623)

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor"), [Draft Preferences](/Draft_Preferences "Draft Preferences") and [Std DlgParameter](/Std_DlgParameter "Std DlgParameter").

* The default font file can be changed in the preferences: **Edit → Preferences... → Draft → Texts and dimensions → Default ShapeString font file**.
* For Windows users:
  + Set **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeFontDialog** to `true` to use the non-native file dialog when selecting a font file from the ShapeString task panel.
  + Alternatively, set **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeDialog** to `true` to always use the non-native file dialog.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft ShapeString object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* DATE**Position**: Punctul de bază a formei compuse
* DATE**String**: Conținutul șirului tip text
* DATE**Size**: Înălțimea literelor exprimată în unități FC
* DATE**Tracking**: Spațierea dintre caractere exprimată în unități FC
* DATE**Font File**: Definirea fișierului fontului utilizat pentru a desena șirul de caractere

![](/images/Draft_ShapeString_Justification.png)

The height of the red rectangle (solid line) is equal to the cap height.  
The height of the green rectangle (dashed line) is equal to the shape height.  
The corners, the midpoints of the edges, and the center of the rectangles  
match the 9 justification options: Top-Left to Bottom-Right.

## Scripting

## Scripturi

Instrumentul ShapeString poate fi utilizat în [macros](/Macros/ro "Macros/ro") și de la consola Python folosind următoarele funcții:

```
shapestring = make_shapestring(String, FontFile, Size=100, Tracking=0)

```

* Transformați un șir tip text într-o Compound Shape utilizând fontul specificat.
* Creează o formă compusă  `ShapeString`  utilizând codul  `String`  specificat

  +

* `FontFile`  este obligatorie și trebuie să fie calea completă a unui fișier de fonturi acceptat

  +

* `Size`  este înălțimea textului rezultat în milimetri

  +

* `Tracking`  este distanța inter-caracter suplimentară în milimetri

The placement of the ShapeString can be changed by overwriting its `Placement` attribute, or by individually overwriting its `Placement.Base` and `Placement.Rotation` attributes.

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString/ro&oldid=1507653>"