---
title: Kreslení B-křivky
---
|  |
| --- |
| Draft BSpline |
| Umístění Menu |
| Draft → BSpline |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| B S |
| Představen ve verzi |
| - |
| Viz také |
| [Drát](/Draft_Wire/cs "Draft Wire/cs") |
|  |

## Description

## Popis

Nástroj B-křivka vytváří [B-křivku](http://en.wikipedia.org/wiki/B-spline) z několika bodů v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Přebírá [tloušťku čáry a barvu](/Draft_Linestyle/cs "Draft Linestyle/cs") předtím nastavenou v záložce nástrojů. Nástroj B-křivka se chová přesně stejně jako nástroj [Drát](/Draft_Wire/cs "Draft Wire/cs").

The Draft BSpline command specifies the *exact points* through which the curve will pass. The [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands, on the other hand, use *control points* to define the position and curvature of the spline.

![](/images/Draft_bspline_example.jpg)

![](/images/Draft_bspline_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Použití

1. Stiskněte tlačítko ![](/images/Draft_BSpline.png) [B-křivka](/Draft_BSpline "Draft BSpline") nebo klávesy B potom S
2. Klikněte na první bod ve 3D pohledu nebo zadejte jeho souřadnice
3. Klikněte na další bod ve 3D pohledu nebo zadejte jeho souřadnice
4. Stiskněte klávesu F nebo C nebo dvojklikněte na poslední bod pro ukončení nebo uzavření křivky. Je-li křivka uzavřena, bude zároveň i povrchem i když se jeví jako drátový model.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Volby

* Stiskněte klávesu F nebo tlačítko ![](/images/Draft_FinishLine.png) **Ukončení** pro ukončení křivky bez jejího uzavření
* Stiskněte klávesu C nebo tlačítko ![](/images/Draft_CloseLine.png) **Uzavření** nebo klikněte na počáteční bod. Tím ukončíte zadávání, ale zároveň se doplní poslední segment křivky, který poslední bod spojí s počátečním bodem.
* Stisknutím klávesy X, Y nebo Z po zadání bodu zajistíte, že následující bod bude ležet na dané ose.
* Pro ruční zadávání souřadnic jednoduše zadávejte čísla a mezi každou komponentou X, Y a Z stiskněte ENTER.
* Stiskněte klávesu R nebo klikněte/odklikněte zaklikávací políčko **Relativní**. Je-li nastaven relativní mód jsou souřadnice následujícího bodu relativní k předchozímu bodu. Je-li mód absolutní souřadnice jsou vztaženy k počátečnímu bodu (0,0,0).
* Stiskněte klávesu T nebo klikněte/odklikněte zaklikávací políčko **Pokračovat**. Je-li nastaven pokračovací mód, nástroj B-křivka bude po ukončení křivky restartován a připraven ke kreslení další křivky bez nutnosti znovu jej spouštět klikáním na tlačítko B-křivka.
* Stiskněte při kreslení klávesu CTRL pro [přichycení](/Draft_Snap "Draft Snap") Vašeho bodu k nejbližšímu uchopovacímu místu, nezávisle na vzdálenosti od něho.
* Stiskněte při kreslení klávesu SHIFT pro nastavení [vazby](/Draft_Constrain "Draft Constrain") Vašeho dalšího bodu vodorovně nebo svisle v relaci k předchozímu bodu.
* Stiskněte klávesu W nebo stiskněte tlačítko ![](/images/Draft_Wipe.png) **Smaž** pro odstranění existujících segmentů a začněte křivku z posledního bodu.
* Stiskněte klávesy CTRL+Z nebo tlačítko ![](/images/Draft_UndoLine.png) **Undo** k návratu na poslední bod.
* Stiskněte klávesu I nebo tlačítko **Filled** aby se křivka po jejím uzavření zobrazovala jako plocha. To jednoduše nastavuje Pohled->Vlastnost Drát na "Otevřené čáry" nebo "Drátový model", toto také může být snadno změněno později.
* Stiskněte klávesu ESC nebo tlačítko **Cancel** pro ukončení aktuálního příkazu B-křivka.
* B-křivky mohou v zobrazovacím módu "Jednoduché čáry" zobrazovat šrafovací vzory nastavením vlastnosti "Vzor" dole.

## Notes

* A Draft BSpline can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* A Draft BSpline can be converted to a [Draft Wire](/Draft_Wire "Draft Wire") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.

## Vlastnosti

* Údaje**Uzavřená**: Specifikuje zda je křivka uzavřená nebo ne
* Pohled**Koncová šipka**: Ukazuje sumbol šipky na koncovém bodě křivky, takže ten může být použit jako linka pro vysvělivku
* Pohled**Vzor**: Specifikuje šrafovací vzor pro vyplnění drátu
* Pohled**Rozměr vzoru**: Specifikuje rozměr šrafovacího vzoru

See also: [Property editor](/Property_editor "Property editor").

A Draft BSpline object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Area** (`Area`): (read-only) specifies the area of the face of the spline. The value will be `0.0` if Údaje**Make Face** if `false` or the face cannot be created.
* Údaje**Closed** (`Bool`): specifies if the spline is closed or not. If the spline is initially open this value is `false`, setting it to `true` will draw a curve segment to close the spline. If the spline is initially closed this value is `true`, setting it to `false` will remove the last curve segment and make the spline open.
* Údaje**Make Face** (`Bool`): specifies if the spline makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Údaje**Closed** is `true` and if the spline does not self-intersect.
* Údaje**Parameterization** (`Float`): affects the shape of the spline.
* Údaje**Points** (`VectorList`): specifies the points of the spline in its local coordinate system.

### View

Draft

* Pohled**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the spline.
* Pohled**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the spline, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Pohled**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the spline, so it can be used as an annotation line.
* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed spline. This property only works if Údaje**Make Face** is `true` and if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Skriptování

Nástroj B-křivka může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

To create a Draft BSpline use the `make_bspline` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeBSpline` method.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Vytváří objekt B-křivka podle daného seznamu vektorů (pointslist).
* Je-li closed True nebo jsou-li první a poslední bod identické, drát je uzavřen.
* Je-li face (plocha) True (a křivka je uzavřena), bude se křivka jevit jako vyplněná plocha.
* Místo seznamu bodů můžete vložit Drát (Part Wire) (lomená čára).
* Vrací nově vytvořený objekt.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/cs&oldid=1472982>"