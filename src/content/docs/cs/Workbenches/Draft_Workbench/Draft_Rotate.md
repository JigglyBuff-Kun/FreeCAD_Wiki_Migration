---
title: Kreslení Otočit
---
|  |
| --- |
| Kreslení Otočit |
| Umístění Menu |
| Kreslení → Otočit |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| R O |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Nástroj Otočit otáčí nebo kopíruje vybrané objekty o zadaný úhel kolem bodu v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Není-li vybrán žádný objekt, budete vyzváni k výběru objektu.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Rotate_example.jpg)

Rotating an object around a center point

## Použití

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Vyberte objekt, který chcete otočit nebo zkopírovat
2. Stiskněte tlačítko ![](/images/Draft_Rotate.png) Kreslení Otočit nebo klávesy R potom O
3. Klikněte na střed ve 3D pohledu nebo zadejte souřadnice
4. Klikněte na druhý bod ve 3D pohledu nebo zadejte referenční úhel
5. Klikněte na třetí bod ve 3D pohledu nebo zadejte úhel otočení

## Volby

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Stiskněte klávesu X, Y nebo Z po prvním bodu pokud chcete uplatnit vazbu dalšího bodu v příslušné ose.
* Chcete-li zadat souřadnice ručně jednoduše zadejte číslo a potom stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte klávesu T nebo zaklikněte/odklikněte políčko **Pokračovat**. Je-li nastaven pokračovací mód, bude nástroj Otočit hned po ukončení připraven k otočení nebo kopírování bez nutnosti stisknout znovu tlačítko Otočit.
* Stisknutí klávesy ALT nebo C nebo kliknutí na tlačítko **Kopie** vytvoří kopii objektu místo jeho otočení. Podržíte-li stisknutou klávesu ALT po kliknutí na druhý bod, budete moci umístit několik kopií, až dokud neuvolníte klávesu ALT.
* Stisknutím klávesy CTRL během kreslení vynutíte [přichycení](/Draft_Snap/cs "Draft Snap/cs") vašeho bodu k nejbližšímu uchopovacímu místu nezávisle na vzálenosti od něho.
* Stisknutím klávesy SHIFT během kreslení [nastavíte vazbu](/Draft_Constrain/cs "Draft Constrain/cs") vašeho bodu svisle nebo vodorovně v relaci předchozímu bodu.
* Stisknutím tlačítka ESC nebo **Zrušit** zrušíte právě probíhající příkaz.

## Notes

* An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be rotated with the Draft Rotate command. To rotate it either its Údaje**Support** object has to be rotated, or its Údaje**Attachment Offset** has to be changed.
* The base angle concept can be somewhat confusing. Especially since it works only when selecting points, not when specifying the angle using the input field. An explanation of how it works, with an example, can be found in [this forum thread](https://forum.freecad.org/viewtopic.php?p=736674#p736674).

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Skriptování

Nástroj Otočit může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
rotated_list = rotate(objectslist, angle, center=Vector(0,0,0), axis=Vector(0,0,1), copy=False)

```

* Otočí zadaný objekt nebo objekty obsažené v zadaném seznamum (list) o daný úhel (angle) kolem středu (je-li zadán) s použitím osy jako osy rotace.
* Chybí-li osa (axis), bude otočení provedeno podle svislé osy Z.
* Je-li copymode True, aktuální objekty se nepohnou, ale místo toho jsou vytvořeny jejich kopie.
* Vrací objekty (nebo jejich kopie, pokud bylo copymode True).

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=300)
Draft.move(polygon1, App.Vector(1000, 0, 0))

# Rotation around the origin
angle1 = 45
rot2 = Draft.rotate(polygon1, angle1, copy=True)
rot3 = Draft.rotate(polygon1, 2*angle1, copy=True)
rot4 = Draft.rotate(polygon1, 4*angle1, copy=True)

polygon2 = Draft.make_polygon(3, radius=1000)
polygon3 = Draft.make_polygon(5, radius=500)
Draft.move(polygon2, App.Vector(2000, 0, 0))
Draft.move(polygon3, App.Vector(2000, 0, 0))

# Rotation around another point
angle2 = 60
cen = App.Vector(3100, 0, 0)
list2 = [polygon2, polygon3]
rot_list2 = Draft.rotate(list2, angle2, center=cen, copy=True)
rot_list3 = Draft.rotate(list2, 2*angle2, center=cen, copy=True)
rot_list4 = Draft.rotate(list2, 4*angle2, center=cen, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rotate/cs&oldid=1473122>"