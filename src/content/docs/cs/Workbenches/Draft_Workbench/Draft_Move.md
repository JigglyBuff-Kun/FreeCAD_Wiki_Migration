---
title: Kreslení Posun
---
|  |
| --- |
| Kreslení Posun |
| Umístění Menu |
| Draft -> Move |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| M V |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Nástroj Posun posunuje nebo kopíruje vybrané objekty z jednoho bodu do druhého v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Není-li vybrán žádný objekt, budete vyzváni k výběru objektu.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Move_example.jpg)

Moving an object from one point to another

## Použití

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Vyberte objekty, které chcete posunout nebo zkopírovat
2. Stiskněte tlačítko ![](/images/Draft_Move.png) Posun nebo klávesy M a potom V
3. Klikněte na první bod ve 3D pohledu nebo zadejte souřadnice
4. Klikněte na další bod ve 3D pohledu nebo zadejte souřadnice.

## Volby

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Stiskněte klávesu X, Y nebo Z po prvním bodu pokud chcete uplatnit vazbu dalšího bodu v příslušné ose.
* Chcete-li zadat souřadnice ručně jednoduše zadejte číslo a potom stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu R nebo zaklikněte/odklikněte políčko **Relativně**. Je-li zapnut relativní mód, budou souřadnice dalšího bodu relativní k předchozímu bodu. Pokud ne, bodou souřadnice absolutní, tj. k počátečnímu bodu (0,0,0).
* Stiskněte klávesu T nebo zaklikněte/odklikněte políčko **Pokračovat**. Je-li nastaven pokračovací mód, bude nástroj Posun hned po ukončení připraven k posunutí nebo kopírování bez nutnosti stisknout znovu tlačítko Posun.
* Stisknutí klávesy ALT nebo C nebo kliknutí na tlačítko **Kopie** vytvoří kopii objektu místo jeho posunutí. Podržíte-li stisknutou klávesu ALT po kliknutí na druhý bod, budete moci umístit několik kopií, až dokud neuvolníte klávesu ALT.
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap/cs "Draft Snap/cs") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutím klávesy SHIFT během kreslení [nastavíte vazbu](/Draft_Constrain/cs "Draft Constrain/cs") vašeho bodu svisle nebo vodorovně v relaci předchozímu bodu.
* Stisknutím tlačítka ESC nebo **Zrušit** zrušíte právě probíhající příkaz.

## Notes

* An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be moved with the Draft Move command. To move it either its Údaje**Support** object has to be moved, or its Údaje**Attachment Offset** has to be changed.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Skriptování

Nástroj Posun může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
moved_list = move(objectslist, vector, copy=False)

```

* Posune objekt nebo objekty obsažené v zadaném seznamu (list) ve směru a do vzdálenosti dané parametrem Vector.
* Je-li copymode True, nebudou vybrané objety posunuty, ale zkopírovány. Vrací objekt(y) (nebo jejich kopie, je-li copymode True).
* Je vrácen seznam posunutých objektů (resp. zkopírovaných).

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/cs&oldid=1473109>"