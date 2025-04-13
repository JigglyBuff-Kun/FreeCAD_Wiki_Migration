---
title: Kreslení kót
---
|  |
| --- |
| Draft Dimension |
| Umístění Menu |
| Draft → Dimension |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| D I |
| Představen ve verzi |
| - |
| Viz také |
| [FlipDimension](/Draft_FlipDimension/cs "Draft FlipDimension/cs") |
|  |

## Description

## Popis

Nástroj Kóta kreslí kóty v aktuálním dokumentu podle dvou bodů definujících měřenou vzdálenost a třetího bodu, který určuje kudy bude kóta procházet.

Linear dimensions based on edges and radial dimensions are parametric. This means that they will update if the measured edge is modified. Measured edges can belong to Draft objects but also to solid bodies. Angular dimensions are not parametric.

Draft Dimensions can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") or [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") commands. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own dimension commands. But these create dimensions that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Screenshot_Draft_Dimension.jpg)

![](/images/Screenshot_Draft_Dimension.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

### Linear dimension

## Použití

1. Stiskněte tlačítko ![](/images/Draft_Dimension.png) Kóta nebo klávesy D a pak I
2. Klikněte na bod ve 3D pohledu nebo zadejte souřadnice
3. Klikněte na druhý bod ve 3D pohledu nebo zadejte souřadnice
4. Klikněte na třetí bod ve 3D pohledu nebo zadejte souřadnice

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

## Volby

* Stiskněte klávesu X, Y nebo Z po zadání bodu pro určení osy, na které bude ležet další bod.
* Pro ruční zadání souřadnic jednoduše vložte číslo a ENTER mezi každou z komponent X, Y a Z.
* Stiskněte při kreslení klávesu CTRL pro [přichycení](/Draft_Snap "Draft Snap") Vašeho bodu k nejbližšímu uchopovacímu místu, nezávisle na vzdálenosti od něho.
* Stiskněte při kreslení klávesu SHIFT pro nastavení [vazby](/Draft_Constrain "Draft Constrain") kóty vodorovně nebo svisle nebo pokud pracujete na zakřivené hraně, přepíná mezi módem průměru a poloměru.
* Stiskněte klávesu R nebo klikněte/odklikněte zaklikávací políčko **Relativní**. Je-li nastaven relativní mód jsou souřadnice následujícího bodu relativní k předchozímu bodu. Je-li mód absolutní souřadnice jsou vztaženy k počátečnímu bodu (0,0,0).
* Stiskněte klávesu T nebo klikněte/odklikněte zaklikávací políčko **Pokračovat**. Je-li nastaven pokračovací mód, můžete kreslit pokračovací kóty jednu za druhou při sdílení stejné základny.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu.
* Výběrem existující hrany se stisknutou klávesou ALT, místo vložení měřeného bodu se kóta stane **parametrickou** a bude si pamatovat ke které hraně patří. Jestli se později některý z koncových bodů hrany posune, bude jej kóta následovat.
* Směr kóty může být změněn později úpravou vlastnosti "Směr".

## Notes

* Linear and radial Draft Dimensions can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* Draft Dimensions created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Preferences

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their Pohled**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Vlastnosti

* Údaje**Začátek**: Počáteční bod měření
* Údaje**Konec**: Konečný bod měření
* Údaje**PřímkaKóty**: Bod, kterým musí procházet kótovací čára
* Pohled**Mód zobrazení**: Určuje zda je text zarovnán podle kótovací čáry nebo stále natočen ke kameře
* Pohled**Velikost fontu**: Velikost fontu textu
* Pohled**Vynášecí čáry**: rozměr vynášecích čar (mezi měřenými body a kótovací čárou)
* Pohled**Pozice textu**: Může být využita pro určení pozice, kde má být text zobrazen
* Pohled**Odsazení textu**: Specifikuje mezeru mezi textem a kótovací čárou
* Pohled**Override**: Specifikuje text, který se má zobrazit místo míry. Chcete-li aby se v textu objevil i údaj o míře, použijte v požadovaném místě textu slovo "$dim"
* Pohled**Název fontu**: Font použitý při vykreslení textu. Může to být název fontu jako je "Arial", defaultní styl jako je "sans", "serif" nebo "mono" nebo family jako je "Arial,Helvetica,sans" nebo jméno se stylem jako třeba "Arial:Bold". Není-li zadaný font nalezen v systému, je místo něj použit obecný font.
* Pohled**Typ šipky**: Použitý typ šipky
* Pohled**Velikost šipky**: Rozměr šipky
* Pohled**Desetiná místa**: Zobrazovaný počet desetinných míst
* Pohled**Obrátit šipky**: Obrátí orientaci šipek

See also: [Property editor](/Property_editor "Property editor").

A Draft Dimension object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data linear and radial dimension

Dimension

* Údaje**Dimline** (`VectorDistance`): specifies the point through which the dimension line passes.
* Údaje**Linked Geometry** (`LinkSubList`): specifies the object and its subelement(s) the dimension is linked to.
* Údaje**Normal** (`Vector`): specifies the normal of the plane of the text.
* Údaje (hidden)**Support** (`Link`): specifies the measured object.

Linear/radial dimension

* Údaje**Direction** (`Vector`): specifies the direction of the measurement.
* Údaje**Distance** (`Length`): (read-only) specifies the value of the measurement.
* Údaje**End** (`VectorDistance`): specifies the end point of the measurement.
* Údaje**Start** (`VectorDistance`): specifies the start point of the measurement.

Radial dimension

* Údaje**Diameter** (`Bool`): specifies if a radial dimension is displayed as a diameter dimension. Not used for linear dimensions.

### Data angular dimension

Angular dimension

* Údaje**Angle** (`Angle`): (read-only) specifies the value of the measurement.
* Údaje**Center** (`VectorDistance`): specifies the center of the measurement.
* Údaje**First Angle** (`Angle`): specifies the start angle of the measurement.
* Údaje**Last Angle** (`Angle`): specifies the end angle of the measurement.

Dimension

* Údaje**Dimline** (`VectorDistance`): specifies the point through which the dimension arc passes.
* Údaje (hidden)**Linked Geometry** (`LinkSubList`): not used.
* Údaje (hidden)**Normal** (`Vector`): specifies the normal of the plane of the dimension.
* Údaje (hidden)**Support** (`Link`): not used.

### View

Annotation

* Pohled**Annotation Style** (`Enumeration`): specifies the annotation style applied to the dimension. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Pohled**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the dimension.

Display Options

* Pohled**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Údaje**Normal** of the measurement. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Pohled**Arrow Size** (`Length`): specifies the size of the symbols displayed at the ends of the dimension line or arc.
* Pohled**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the ends of the dimension line or arc, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Pohled**Dim Overshoot** (`Distance`): specifies the additional length added to the dimension line. Not used for angular dimensions.
* Pohled**Ext Lines** (`Distance`): specifies the length of the extension lines that go from the dimension line to the measured points. Use `0` for full extension lines. A negative value defines the gap between the ends of the extension lines and the measured points. A positive value defines the maximum length of the extension lines. Only used for linear dimensions.
* Pohled**Ext Overshoot** (`Distance`): specifies the additional length of the extension lines beyond the dimension line. Not used for angular dimensions.
* Pohled**Flip Arrows** (`Bool`): specifies whether to flip the orientation of the symbols at the ends of the dimension line or arc. Only works if the symbols are arrows.
* Pohled**Line Color** (`Color`): specifies the color of the dimension line or arc, and the arrows.
* Pohled**Line Width** (`Float`): specifies the width of the lines or arc belonging to the dimension.
* Pohled**Show Line** (`Bool`): specifies whether to display the dimension line. Does not affect the display of extension lines and overshoots. Not used for angular dimensions.

Text

* Pohled**Flip Text** (`Bool`): specifies whether to flip the orientation of the text.
* Pohled**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Pohled**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Pohled**Override** (`String`): specifies a custom text to display instead of the actual measurement. Use the string `$dim` inside the text to include the measurement.
* Pohled**Text Color** (`Color`): specifies the color of the text. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Pohled**Text Position** (`VectorDistance`): specifies the position of the text in absolute coordinates. `[0, 0, 0]` will display the text in its default position near the dimension line or arc.
* Pohled**Text Spacing** (`Length`): specifies the space between the text and the dimension line or arc.

Units

* Pohled**Decimals** (`Integer`): specifies the number of decimal places to display for the measurement.
* Pohled**Show Unit** (`Bool`): specifies whether to display the unit next to the numerical value of the measurement. Not used for angular dimensions.
* Pohled**Unit Override** (`String`): specifies the unit in which to express the measurement, for example, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` or `arch` for arch units. Leave this blank to use the default unit. Not used for angular dimensions.

## Scripting

## Skriptování

Nástroj Kóta může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

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

* Vytvoří objekt kóty s kótovací čárou procházející přes p3.
* Objekt kóty přebíráe [tloušťku čáry a barvu](/Draft_Linestyle "Draft Linestyle") nastavenou v příkazovém pruhu.
* Je několik způsobů vytvoření kóty v závislosti na předaných argumentech:

1. (p1,p2,p3): vytvoří standardní kótu z p1 do p2.
2. (object,i1,i2,p3): vytvoří spojenou kótu na daný objekt, která měří vzdálenost mezi vrcholy indexovanými i1 a i2.
3. (object,i1,mode,p3): vytvoří spojenou kótu na daný objekt, i1 je index (zakřivené) měřené hrany a mód je buď "poloměr" nebo "průměr". Vrací nově vytvořený objekt.

To create an angular dimension use the following method:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* vytvoří úhlovou kótu z daného středu se zadaným seznamem úhlů procházející bodem p3.
* Vrací nově vytvořený objekt.

The view properties of `dimension` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/cs&oldid=1565032>"