---
title: Draft cotare
---
|  |
| --- |
| Cotare |
| poziția meniului |
| Draft → Dimension |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| D I |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [FlipDimension](/Draft_FlipDimension/ro "Draft FlipDimension/ro") |
|  |

## Description

## Descriere

Unealta **Dimensiune** trasează o dimensiune de cotare în documentul curent prin desemnarea a două puncte care definesc distanţa de măsurat şi un alt treilea punct, care determină locul pe unde trece linia de cotare.

Linear dimensions based on edges and radial dimensions are parametric. This means that they will update if the measured edge is modified. Measured edges can belong to Draft objects but also to solid bodies. Angular dimensions are not parametric.

Draft Dimensions can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") or [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") commands. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own dimension commands. But these create dimensions that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Screenshot_Draft_Dimension.jpg)

![](/images/Screenshot_Draft_Dimension.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

### Linear dimension

## Instrucţiuni de folosire

1. Apăsaţi butonul ![](/images/Draft_Dimension.png) (**Ciornă Dimensiune**) ori tastele D, apoi I.
2. Alegeţi cu un clic un punct din vederea 3D sau introduceţi manual coordonatele de la tastatură.
3. Daţi un clic în spaţiul 3D ca să alegeţi al doilea punct ori introduceţi coordonatele manual.
4. Alegeţi al treilea punct cu un clic ori introduceţi-i coordonatele.

### Radial dimension

1. Optionally select a circular edge in the [3D view](/3D_view "3D view").
2. Invoke the command as explained above.
3. The **Dimension** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an edge do one of the following:
   * Press E or the ![](/images/View-select.svg) Select edge button and select a circular edge in the [3D view](/3D_view "3D view").
   * Hold down the Alt key, select a circular edge in the [3D view](/3D_view "3D view") and release the Alt key.
5. To position the dimension line do one of the following:
   * For a diameter dimension:
     + Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
   * For a radial dimension:
     + Hold down the Shift key and pick a point in the [3D view](/3D_view "3D view").

### Angular dimension

1. Invoke the command as explained above.
2. The **Dimension** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   * Press E or the ![](/images/View-select.svg) Select edge button and select a first straight edge in the [3D view](/3D_view "3D view"). Repeat this to select a second straight edge.
   * Hold down the Alt key, select two straight edges in the [3D view](/3D_view "3D view") and release the Alt key.
4. To position the dimension arc pick a point in the [3D view](/3D_view "3D view").
5. The displayed angle depends on the edges and the picked point.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opţiuni

* Apăsaţi tasta X, Y sau Z după alegerea unui punct ca să constrângeţi următorul punct pe axele de coordonate date.
* Ca să introduceţi coordonatele manual, pur şi simplu tastaţi numerele, apoi apăsaţi tasta ENTER după fiecare desemnare a componentei X, Y şi Z.
* Când desenaţi, apăsaţi tasta CTRL ca să forţaţi [ancorarea](/Draft_Snap/ro "Draft Snap/ro") punctului în cea mai apropiată locaţie de ancorare, independent de distanţă.
* Apăsând SHIFT creaţi o [constrângere](/Draft_Constrain/ro "Draft Constrain/ro") a dimensiunii orizontale sau verticale sau, când operaţi cu linii curbe, puteţi să comutaţi între diametru şi rază.
* Apăsaţi tasta R sau daţi un clic pe pătrăţel ca să bifaţi/anulaţi butonul **Relativ**. Dacă modul Relativ este pornit, coordonatele următorului punct se relaţionează faţă de cele ale ultimului punct. Dacă opţiunea nu este selectată, coordonatele sunt absolute şi se referă la punctul de origine (0,0,0).
* Apăsaţi tasta T sau daţi un clic pe pătrăţel ca să bifaţi/anulaţi butonul **Continuă**. Dacă modul Continuă este pornit, veţi putea continua să desenaţi dimensiuni de cotare, una după alta, care împart aceeaşi linie de bază.
* Apăsaţi tasta ESC ori butonul **Cancel** ca să abandonaţi utilizarea comenzii Linie.
* Prin alegerea cu tasta ALT a unei margini existente, în locul introducerii valorilor punctelor de măsurare, dimensiunea devine **parametrică** şi îşi va aminti de care margine este legată. Dacă, ulterior, marginea se va schimba, dimensiunea o va urmări.
* Dacă o margine este selectată înainte de demararea comenzii Dimensiune, cotarea creată va fi de asemenea **parametrică**.
* Direcţia liniei de cotare poate fi schimbată ulterior, prin modificarea proprietăţilor din caseta "Direcţie".

## Notes

* Linear and radial Draft Dimensions can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* Draft Dimensions created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Preferences

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their Vizualizare**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Proprietăţi

* DATE**Început**: Punctul de unde porneşte măsurarea distanţei
* DATE**Sfârşit**: Punctul de capăt al distanţei de măsurat
* DATE**Mijloc**: Un punct prin care trebuie să treacă linia de cotare a dimensiunii
* VEDERE**Modul de afişare**: Specifică dacă textul se aliniază la dimensiunea liniilor şi dacă stă întotdeauna întors către camera
* VEDERE**Dimensiune font**: Mărimea literelor
* VEDERE**Dimensiune liniuţe**: Mărimea liniuţelor de încadrare (cuprind punctele de măsurare şi linia ce dă dimensiunea)
* VEDERE**Poziţia textului**: Poate fi folosită la afişarea forţată, într-o anumită poziţie, a textului
* VEDERE**Spaţierea textului**: Specifică spaţiul dintre text şi linia ce dă dimensiunea
* VEDERE**Suprascriere**: Specifică textul de afişat în cuprinsul măsurătorii. Dacă treceţi "$dim" în loc de text, se va afişa valoarea măsurătorii
* VEDERE**Numele fontului**: Tipul de literă folosit la trasarea textului. Poate fi un nume de font, precum "Arial", un stil predefinit, ca: "sans", "serif" sau "mono", o familie precum "Arial,Helvetica,sans" sau un nume urmat de un stil, ca: "Arial:Bold". Dacă sistemul nu găseşte fontul indicat, va fi folosit unul generic ca înlocuitor.
* VEDERE**Tipul săgeţii**: Forma capătului de segment, folosită ca săgeată.
* VEDERE**Dimensiunea săgeţii**: Mărimea săgeţilor
* VEDERE**Numărul zecimalelor**: Numărul de zecimale afişate pe dimensiune
* VEDERE**Inversează**: Întoarce săgeţile în partea opusă
* VEDERE**Înlocuire măsuri**: Exprimă distanţa în unităţi impuse (lăsaţi necompletat dacă folosiţi valorile sistemului) [introduced in 0.17/ro](/Release_notes_0.17/ro "Release notes 0.17/ro")

See also: [Property editor](/Property_editor "Property editor").

A Draft Dimension object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data linear and radial dimension

Dimension

* Date**Dimline** (`VectorDistance`): specifies the point through which the dimension line passes.
* Date**Linked Geometry** (`LinkSubList`): specifies the object and its subelement(s) the dimension is linked to.
* Date**Normal** (`Vector`): specifies the normal of the plane of the text.
* Date (hidden)**Support** (`Link`): specifies the measured object.

Linear/radial dimension

* Date**Direction** (`Vector`): specifies the direction of the measurement.
* Date**Distance** (`Length`): (read-only) specifies the value of the measurement.
* Date**End** (`VectorDistance`): specifies the end point of the measurement.
* Date**Start** (`VectorDistance`): specifies the start point of the measurement.

Radial dimension

* Date**Diameter** (`Bool`): specifies if a radial dimension is displayed as a diameter dimension. Not used for linear dimensions.

### Data angular dimension

Angular dimension

* Date**Angle** (`Angle`): (read-only) specifies the value of the measurement.
* Date**Center** (`VectorDistance`): specifies the center of the measurement.
* Date**First Angle** (`Angle`): specifies the start angle of the measurement.
* Date**Last Angle** (`Angle`): specifies the end angle of the measurement.

Dimension

* Date**Dimline** (`VectorDistance`): specifies the point through which the dimension arc passes.
* Date (hidden)**Linked Geometry** (`LinkSubList`): not used.
* Date (hidden)**Normal** (`Vector`): specifies the normal of the plane of the dimension.
* Date (hidden)**Support** (`Link`): not used.

### View

Annotation

* Vizualizare**Annotation Style** (`Enumeration`): specifies the annotation style applied to the dimension. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Vizualizare**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the dimension.

Display Options

* Vizualizare**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Date**Normal** of the measurement. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Vizualizare**Arrow Size** (`Length`): specifies the size of the symbols displayed at the ends of the dimension line or arc.
* Vizualizare**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the ends of the dimension line or arc, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vizualizare**Dim Overshoot** (`Distance`): specifies the additional length added to the dimension line. Not used for angular dimensions.
* Vizualizare**Ext Lines** (`Distance`): specifies the length of the extension lines that go from the dimension line to the measured points. Use `0` for full extension lines. A negative value defines the gap between the ends of the extension lines and the measured points. A positive value defines the maximum length of the extension lines. Only used for linear dimensions.
* Vizualizare**Ext Overshoot** (`Distance`): specifies the additional length of the extension lines beyond the dimension line. Not used for angular dimensions.
* Vizualizare**Flip Arrows** (`Bool`): specifies whether to flip the orientation of the symbols at the ends of the dimension line or arc. Only works if the symbols are arrows.
* Vizualizare**Line Color** (`Color`): specifies the color of the dimension line or arc, and the arrows.
* Vizualizare**Line Width** (`Float`): specifies the width of the lines or arc belonging to the dimension.
* Vizualizare**Show Line** (`Bool`): specifies whether to display the dimension line. Does not affect the display of extension lines and overshoots. Not used for angular dimensions.

Text

* Vizualizare**Flip Text** (`Bool`): specifies whether to flip the orientation of the text.
* Vizualizare**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Vizualizare**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Vizualizare**Override** (`String`): specifies a custom text to display instead of the actual measurement. Use the string `$dim` inside the text to include the measurement.
* Vizualizare**Text Color** (`Color`): specifies the color of the text. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Text Position** (`VectorDistance`): specifies the position of the text in absolute coordinates. `[0, 0, 0]` will display the text in its default position near the dimension line or arc.
* Vizualizare**Text Spacing** (`Length`): specifies the space between the text and the dimension line or arc.

Units

* Vizualizare**Decimals** (`Integer`): specifies the number of decimal places to display for the measurement.
* Vizualizare**Show Unit** (`Bool`): specifies whether to display the unit next to the numerical value of the measurement. Not used for angular dimensions.
* Vizualizare**Unit Override** (`String`): specifies the unit in which to express the measurement, for example, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` or `arch` for arch units. Leave this blank to use the default unit. Not used for angular dimensions.

## Scripting

## Scripturi

Unealta **Dimensiune** poate fi folosită în [macro-uri](/Macros/ro "Macros/ro") şi de la consola python cu ajutorul funcţiei următoare:

To create a Draft Dimension use the `make_dimension` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeDimension` method.

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

There are various ways to invoke this method, depending on the arguments passed to it:

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* Creează un obiect Dimensiune a cărui linie de dimensiune trece prin punctul p3.
* Obiectul Dimensiune preia [lăţimea şi culoarea de trasare](/Draft_Linestyle/ro "Draft Linestyle/ro") setate în bara de comandă.
* Există mai multe căi de a crea o dimensiune, în funcţie de necesităţile dorite de utilizator:

1. (p1,p2,p3): creează o dimensiune standard de la p1 la p2.
2. (object,i1,i2,p3): creează o dimensiune legată de un obiect dat, măsurând distanța dintre vârfurile indexate i1 și i2.
3. (object,i1,mod,p3): creează o dimensiune legată de un obiect dat, i1 reprezintă indicele marginii (curbei) de dimensionat, iar modul este fie "rază", fie "diametru". Redă obiectul nou creat.

To create an angular dimension use the following method:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* din centrul dat, creează o dimensiune unghiulară, bazată pe o listă de unghiuri prestabilite, care trece prin p3.
* redă obiectul nou creat.

The view properties of `dimension` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/ro&oldid=1565034>"