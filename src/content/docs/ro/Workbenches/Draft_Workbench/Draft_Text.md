---
title: Draft Introduceţi Text
---
|  |
| --- |
| Draft Text |
| poziția meniului |
| Draft → Text |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| T E |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Label](/Draft_Label "Draft Label"), [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") |
|  |

## Description

## Descriere

Unealta Text inserează o porţiune de text într-un punct dat din documentul curent. În prealabil, seta'i în meniul **Editare**, opţiunea **Preferinţe**, [mărimea şi culoarea textului](/Draft_Linestyle/ro "Draft Linestyle/ro") în tab-ul **Sarcini** (Draft Tray toolbar.).

Pentru a crea forme de text solide, utilizați [Draft ShapeString](/Draft_ShapeString/ro "Draft ShapeString/ro") cu [Part Extrude](/Part_Extrude/ro "Part Extrude/ro").

![](/images/Draft_Text_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray") and [Draft Snap](/Draft_Snap "Draft Snap").

## Mod de utilizare

1. Apăsaţi butonul ![](/images/Draft_Text.png) Draft Text ori apăsaţi tasta T, apoi tasta E.
2. Daţi clic în fereastra de vizualizare 3D sau introduceţi coordonatele.
3. Introduceţi textul dorit, apăsând tasta ENTER treceți la linie nouă.
4. Apăsaţi DE DOUĂ ORI ENTER ca să terminaţi operaţia.

## Opţiuni

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

Apăsând pe CTRL, [snap](/Draft_Snap/ro "Draft Snap/ro") punctul dvs. va fi ancorat la locațiile disponibile.

* Pentru a introduce manual coordonatele, pur și simplu introduceți numerele, apoi apăsați ENTER între fiecare componentă X, Y și Z.
* Apăsând ESC se va anula operația.
* Când editați textul, apăsând ENTER sau DOWN ARROW vă permite să introduceți sau să editați un rând următor de text.
* Apăsarea tastei UP ARROW vă permite să editați o linie anterioară de text.
* Apăsând ENTER **de două ori**(lăsând astfel ultima linie goală) adaugă textul în document și închide editorul.

## Notes

* A Draft Text can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
* Draft Texts created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Proprietăți

* DATE**Position**: Punctul de bază al blocului de text
* DATE**Label Text**: conținutul blocului de text
* VEDERE**Mod afișare**: Specifică dacă textul este aliniat la axele de scenă sau întotdeauna se confruntă cu camera
* VEDERE**Dimensiune font**: Dimensiunea literelor
* VEDERE**Justification**: Specifică dacă textul este aliniat la stânga, la dreapta sau la centrul punctului de bază.
* VEDERE**Line Spacing**: Specifică spațiul dintre liniile de text
* VEDERE**Rotation**: Specifică o rotație care trebuie aplicată textului
* VEDERE**Axa de rotație**: Specifică axa de utilizat pentru rotație
* VEDERE**Font Name**: fontul folosit pentru a desena textul. Poate fi un nume de font, cum ar fi "Arial", un stil implicit, cum ar fi "sans", "serif" sau "mono", sau o familie ca "Arial, Helvetica, sans" "Arial: Bold". În cazul în care fontul dat nu este găsit pe sistem, în locul acestuia se utilizează unul generic.

See also: [Property editor](/Property_editor "Property editor").

A Draft Text object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated.

### Data

Base

* Date**Placement** (`Placement`): specifies the position of the text in the [3D view](/3D_view "3D view"). See [Placement](/Placement "Placement").
* Date**Text** (`StringList`): specifies the contents of the text. Each item in the list represents a new text line.

### View

Annotation

* Vizualizare**Annotation Style** (`Enumeration`): specifies the annotation style applied to the text. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Vizualizare**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the text.

Display Options

* Vizualizare**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by its Date**Placement**. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Vizualizare**Line Color** (`Color`): not used.
* Vizualizare**Line Width** (`Float`): not used.

Text

* Vizualizare**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Vizualizare**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Vizualizare**Justification** (`Enumeration`): specifies if the alignment of the text: `Left`, `Center` or `Right`.
* Vizualizare**Line Spacing** (`Float`): specifies the factor applied to the default line height of the text.
* Vizualizare**Text Color** (`Color`): specifies the color of the text.

## Scripting

## Script-Programre

Instrumentul Text poate fi folosit în [macro-uri](/Macros/ro "Macros/ro") şi de la consola Python cu ajutorul funcţiei următoare:

To create a Draft Text use the `make_text` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeText` method.

```
text = make_text(string, placement=None, screen=False)

```

* Creează un obiect `Text` , într-un punct dat, dacă este furnizat un `FreeCAD.Vector` , care conține șirul sau șirurile dintr-o listă, câte un șir pe rând.
* `stringlist`  este un șir sau o listă de șiruri de caractere; dacă este o listă, fiecare element este afișat într-o singură linie
* Se utilizează actualul [Draft Linestyle](/Draft_Linestyle/ro "Draft Linestyle/ro") specificat în preferințe.
* Dacă  `screen`  este  `True` , textul se află întotdeauna în direcția de vizualizare a camerei, altfel se află pe planul XY

The view properties of `text` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/ro&oldid=1513480>"