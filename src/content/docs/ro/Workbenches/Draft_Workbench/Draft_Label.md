---
title: Draft Etichetă
---
|  |
| --- |
| Draft Label |
| poziția meniului |
| Draft → Label |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| D L |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Acest instrument introduce o etichetă, care este o fragment de text cu o linie de 2 segmente și o săgeată, în documentul activ. Dacă se selectează un obiect sau un sub-element (față, muchie sau vârf) la pornirea comenzii, eticheta poate fi făcută să afișeze automat un anumit atribut al elementului selectat.

If an object or a sub-element (face, edge or vertex) is selected when starting the command, the text can be made to display one or two attributes of the selected element, including position, length, area, volume and material. The text will then be linked to the attributes and will update if their values change.

To insert a text element without an arrow use the [Draft Text](/Draft_Text "Draft Text") command instead.

![](/images/Draft_Label_example.jpg)

![](/images/Draft_Label_example.jpg)

## How to use

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Opțional, selectați un obiect sau un subelement al unui obiect (Vertex, margine sau fațetă)
2. Apăsați butonul  ![](/images/Draft_Label.svg) Etichetă de proiectare sau apăsați  D apoi tastele L
3. Faceți clic pe un prim punct al vizualizării 3D sau introduceți un coordinate pentru a indica punctul țintă (poziția săgeții). Acest lucru poate fi oriunde, nu trebuie să fie exact pe elementul selectat
4. Faceți clic pe un al doilea punct din vizualizarea 3D sau tastați un coordinate pentru a indica punctul intermediar care reprezintă începutul segmentului drept.
5. Faceți clic pe un al treilea punct din vizualizarea 3D sau tastați un coordinate pentru a indica poziția textului.

## Opţiuni

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* Apăsând pe  CTRL,  [snap](/Draft_Snap "Draft Snap") punctul dvs. de locații disponibile snap.
* Pentru a introduce manual coordonatele, pur și simplu introduceți numerele, apoi apăsați  ENTER între fiecare componentă X, Y și Z.
* Apăsând  ESC se va anula operația.
* Direcția segmentului drept (dreapta sau stânga) va justifica automat textul stânga sau dreapta.

## Tipuri de etichete

The following label types are available:

* **Custom**: Afișează conținutul proprietății text personalizat
* **Name**: Afișează numele obiectului țintă
* **Label**: Afișează eticheta obiectului țintă
* **Poziția**: Afișează coordonatele obiectului țintă (punctul de bază al amplasamentului) sau coordonatele vârfului țintă, dacă este cazul, sau coordonatele centrului subelementului țintă (centrul de masă)
* **Length**: Afișează lungimea subelementului țintă, dacă este posibil
* **Area**: Arată suprafața subelementului țintă, dacă este posibil
* **Volume**: Afișează volumul obiectului țintă, dacă este posibil
* **Tag**: Afișează valoarea etichetei obiectului țintă, dacă obiectul țintă are o astfel de proprietate (ceea ce este cazul tuturor obiectelor Arch)
* **Material**: Afișează eticheta materialului obiectului țintă, dacă obiectul țintă are o astfel de proprietate

## Notes

* The direction of the second segment of the leader determines the alignment of the text. If the segment is horizontal and pointing to the right the text is aligned to the left and vice versa. If the second segment goes vertically up, the text is aligned to the left. If it goes vertically down, the text is aligned to the right.
* Draft Labels created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft Label object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data

Label

* Date **Tip de etichetă**: tipul de informații afișate de această etichetă (vedeți mai jos)
* Date **Text personalizat**: Textul care se afișează când tipul de etichetă este setat la personalizat
* Date **Placement**: Indică rotația și poziția textului
* Date **Straight Distance**: Lungimea segmentului drept
* Date **Direcție dreaptă**: Direcția segmentului drept Orizontală sau verticală
* Date **Target Point**: Punctul indicat de această etichetă
* Vizualizare **Text Size**: Dimensiunea textului
* Vizualizare **Text Font**: fontul folosit pentru text
* Vizualizare **Text Alignment**: Alinierea verticală a textului: Sus, mijlocul sau partea de jos
* Vizualizare **Text Color**: Culoarea textului
* Vizualizare **Lățime linie**: Lățimea liniei
* Vizualizare **Line Color**: culoarea liniei
* Vizualizare **Arrow Type**: Tipul săgeții: Dot, cerc, săgeată sau bifați.
* Vizualizare **Dimensiunea săgeții**: mărimea săgeții
* Vizualizare **Frame**: Desenează un cadru în jurul textului

Leader

* Date**Points** (`VectorList`): specifies the points of the leader.
* Date**Straight Direction** (`Enumeration`): specifies the direction of the first leader segment: `Custom`, `Horizontal` or `Vertical`.
* Date**Straight Distance** (`Distance`): specifies the length of the first leader segment. Only used if Date**Straight Direction** is `Horizontal` or `Vertical`. If the distance is positive, the leader starts from the right side of the text and the text aligns to the right. Otherwise the leader starts from the left side of the text and the text aligns to the left.

Target

* Date**Target** (`LinkSub`): specifies the object and optional subelement the label is linked to.
* Date**Target Point** (`Vector`): specifies the position of the tip of the leader, which is where the arrow is attached.

### View

Annotation

* Vizualizare**Annotation Style** (`Enumeration`): specifies the annotation style applied to the label. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Vizualizare**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the label.

Display Options

* Vizualizare**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Date**Placement** of the label. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Vizualizare**Arrow Size** (`Length`): specifies the size of the symbol displayed at the tip of the leader.
* Vizualizare**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the tip of the leader, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vizualizare**Frame** (`Enumeration`): specifies what type of frame is drawn around the text. The current options are `None` or `Rectangle`.
* Vizualizare**Line** (`Bool`): specifies whether to display the leader line. If it is `false` only the arrow and the text are displayed.
* Vizualizare**Line Color** (`Color`): specifies the color of the leader and the arrow. This is also used for the frame.
* Vizualizare**Line Width** (`Float`): specifies the width of the leader. This is also used for the frame.

Text

* Vizualizare**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Justification** (`Enumeration`): specifies the horizontal alignment of the text: `Left`, `Center` or `Right`. Only used if Date**Straight Direction** is `Custom`. Otherwise the horizontal alignment is based on the sign (positive or negative) of Date**Straight Distance**.
* Vizualizare**Line Spacing** (`Float`): specifies the factor applied to the default line height of the text.
* Vizualizare**Max Chars** (`Integer`): specifies the maximum number of characters on each line of the text.
* Vizualizare**Text Alignment** (`Enumeration`): specifies the vertical alignment of the text: `Top`, `Middle` or `Bottom`.
* Vizualizare**Text Color** (`Color`): specifies the color of the text.

## Scripting

## Script-Programare

Instrumentul Text poate fi utilizat în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

To create a Draft Label use the `make_label` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeLabel` method.

```
label = make_label(target_point=App.Vector(0, 0, 0),
                   placement=App.Vector(30, 30, 0),
                   target_object=None, subelements=None,
                   label_type="Custom", custom_text="Label",
                   direction="Horizontal", distance=-10,
                   points=None)

```

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
doc.recompute()

p1 = App.Vector(-200, 1000, 0)
place1 = App.Placement(App.Vector(-1000, 1300, 0), App.Rotation())

label1 = Draft.make_label(p1, place1, target_object=rectangle, distance=500, label_type="Label")
label1.ViewObject.FontSize= 200

p2 = App.Vector(-200, 0, 0)
place2 = App.Placement(App.Vector(-1000, -300, 0), App.Rotation())

label2 = Draft.make_label(p2, place2, target_object=rectangle, distance=500, label_type="Custom",
                          custom_text="Beware of the sharp edges")
label2.ViewObject.FontSize= 200

p3 = App.Vector(1000, 1200, 0)
place3 = App.Placement(App.Vector(2000, 1800, 0), App.Rotation())

label3 = Draft.make_label(p3, place3, target_object=rectangle, distance=-500, label_type="Area")
label3.ViewObject.FontSize= 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Label/ro&oldid=1513390>"