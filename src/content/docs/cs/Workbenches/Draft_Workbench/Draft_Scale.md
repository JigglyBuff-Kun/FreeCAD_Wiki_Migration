---
title: Kreslení Roztáhnout
---
|  |
| --- |
| Kreslení Roztáhnout |
| Umístění Menu |
| Kreslení → Roztáhnout |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| S C |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení Klon](/Draft_Clone/cs "Draft Clone/cs") |
|  |

## Popis

Tento nástroj roztáhne rozměry objektů vzhledem k základnímu bodu. Není-li vybrán žádný objekt, budete vyzváni k jeho výběru. Nástroj také může být využit k zrcadlení objektů.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Scale_example.png)

Scaling an object around a base point

## Použití

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Vyberte objekt, který chcete roztáhnout
2. Stiskněte tlačítko ![](/images/Draft_Scale.png) Kreslení Roztáhnout nebo klávesy S potom C
3. Klikněte na první bod ve 3D pohledu nebo zadejte souřadnice
4. Klikněte na druhý bod ve 3D pohledu nebo zadejte souřadnice

## Volby

### First task panel

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* To manually enter the coordinates for the base point enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press the Close button to abort the command.

### Second task panel

* Chcete-li zadat souřadnice ručně jednoduše zadejte číslo a potom stiskněte ENTER mezi každou z komponent X, Y a Z.
* Komponenty x, y and z druhého bodu definují faktor roztažení. Například, (1,1,1) neudělá nic, (2,2,2) roztáhne objekt 2x ve všech směrech, (-1,1,1) zrcadlí objekt ve směru x.
* Stisknutí klávesy ALT nebo C nebo kliknutí na tlačítko **Kopie** vytvoří kopii objektu místo jeho roztažení. Podržíte-li stisknutou klávesu ALT po kliknutí na druhý bod, budete moci umístit několik kopií, až dokud neuvolníte klávesu ALT.
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap/cs "Draft Snap/cs") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutí klávesy SHIFT uzamkne společně hodnoty x a y, takže tvar není deformován.
* Stisknutím tlačítka ESC nebo **Zrušit** zrušíte právě probíhající příkaz.
* Výsledný objekt je [klon](/Draft_Clone/cs "Draft Clone/cs"), což umožňuje měnit hodnotu roztažení po tom co byl objekt vytvořen.
* Zrcadlení objektů je založeno na otočení znaménka v jednom ze směrů. Například, (-1,1,1) zrcadlí vodorovně (podle osy X) a (1,-1,1) svisle (podle osy Y).

## Notes

* The command can also scale [Image Planes](/Image_CreateImagePlane "Image CreateImagePlane"), but not in clone mode.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Skriptování

Nástroj Roztáhnout může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

* Roztáhne objekty obsažené v objects (může to být objekt nebo seznam objektů) podle zadaného faktoru roztažení definovaného vektorem (ve směrech X, Y a Z) kolem zadaného středu.
* Je-li legacy True, je použit (zastaralý) mód direct, jinak je provedena parametrická kopie.
* Je-li copy True, aktuální objekty se nepohnou, ale místo toho jsou vytvořeny nové kopie.
* Jsou vráceny objekty (nebo jejich kopie).

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/cs&oldid=1513419>"