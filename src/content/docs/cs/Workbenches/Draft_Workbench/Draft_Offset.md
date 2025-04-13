---
title: Kreslení Odsadit
---
|  |
| --- |
| Kreslení Odsadit |
| Umístění Menu |
| Draft → Offset |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| O S |
| Představen ve verzi |
| - |
| Viz také |
| [Part 2D Offset](/index.php?title=Part_Offset2D/cs&action=edit&redlink=1 "Part Offset2D/cs (page does not exist)") |
|  |

## Popis

Nástroj Odsadit odsadí vybrané objekty o zadanou vzdálenost v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Není-li vybrán žádný objekt, budete vyzváni k výběru objektu.

![](/images/Draft_Offset_example.jpg)

Offsetting a Draft Wire

## Použití

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Vyberte objekty, které chcete odsadit
2. Stiskněte tlačítko ![](/images/Draft_Offset.png) Kreslení Odsadit nebo klávesy O a potom S
3. Klikněte na bod ve 3D pohledu nebo zadejte vzálenost.

## Volby

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Stiskněte klávesu T nebo zaklikněte/odklikněte políčko **Pokračovat**. Je-li nastaven pokračovací mód, bude nástroj Odsadit hned po ukončení připraven k odsazení nebo kopírování bez nutnosti stisknout znovu tlačítko Odsadit.
* Stisknutí klávesy ALT nebo C nebo kliknutí na tlačítko **Kopie** vytvoří kopii objektu místo jeho odsazení. Podržíte-li stisknutou klávesu ALT po kliknutí na druhý bod, budete moci umístit několik kopií, až dokud neuvolníte klávesu ALT.
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap/cs "Draft Snap/cs") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutím klávesy SHIFT během kreslení [nastavíte vazbu](/Draft_Constrain/cs "Draft Constrain/cs") na aktuální segment místo výběru nejbližšího.
* Stisknutím tlačítka ESC nebo **Cancel** zrušíte právě probíhající příkaz.

## Notes

* To create an offset version of a [Draft BSpline](/Draft_BSpline "Draft BSpline") its points are offset individually, and from the new points a new spline is calculated. This new spline is not parallel to the original spline. For an exact parallel offset of a [Draft BSpline](/Draft_BSpline "Draft BSpline") the [Part Offset2D](/Part_Offset2D "Part Offset2D") command should be used.
* The Draft Offset command cannot handle [Draft BezCurves](/Draft_BezCurve "Draft BezCurve"). Use the [Part Offset2D](/Part_Offset2D "Part Offset2D") command instead.

## Scripting

## Skriptování

Nástroj Odsadit může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
offset_obj = offset(obj, delta, copy=False, bind=False, sym=False, occ=False)

```

* Odsadí zadaný drát aplikací údajů z Vectoru na první vrchol drátu .
* Je-li copymode True, je vytvořen další objekt, jinak je odsunut původní objekt.
* Je-li bind True a zadaný drát je otevřený, původní a odsunutý drát budou spojeny koncovými body a vytvoří plochu.
* Je-li sym True, je odsunutí provedeno symetricky na obou stranách s celkovou šířkou rovnou délce zadaného vektoru.
* Vrací odsunutý objekt (nebo jeho kopii, je-li copymode True).

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1500, 2000, 0)
p3 = App.Vector(4000, 0, 0)

wire = Draft.make_wire([p1, p2, p3])
doc.recompute()

vector = App.Vector(-200, 150, 0)
offset1 = Draft.offset(wire, vector, copy=True, bind=True, sym=True)
offset2 = Draft.offset(wire, 3*vector, copy=True)
offset3 = Draft.offset(wire, 6*vector, copy=True)
offset4 = Draft.offset(wire, 9*vector, copy=True)
offset5 = Draft.offset(wire, 1.5*vector, copy=True, occ=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Offset/cs&oldid=1473146>"