---
title: Kreslení Vylepšení
---
|  |
| --- |
| Kreslení Vylepšení |
| Umístění Menu |
| Kreslení → Aktualizace |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| U P |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení Degradace](/Draft_Downgrade/cs "Draft Downgrade/cs") |
|  |

## Popis

Tento nástroj vylepší vybrané objekty jiným způsobem. Není-li vybrán žádný objekt budete vyzváni k jeho výběru.

![](/images/Draft_Upgrade_example.jpg)

An open non-editable wire is upgraded to a closed wire, and then to a face. A closed non-editable square wire is also upgraded to a face. The two faces are then upgraded to create a compound, which is finally upgraded to a single editable Draft Wire.

## Použití

1. Vyberte jeden nebo více objektů, které chcete vylepšit
2. Stiskněte tlačítko ![](/images/Draft_Upgrade.png) Kreslení Vylepšení nebo stiskněte klávesy U a potom P

## Notes

* [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire") can be joined with this command, but also with the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Wire](/Draft_Wire "Draft Wire") command.

## Scripting

## Skriptování

Nástroj Vylepšení může být použit ze skriptů Pythonu a z [maker](/Macros/cs "Macros/cs") takto:

```
upgrade_list = upgrade(objects, delete=False, force=None)

```

* Vylepší daný objekt(y) (může to být objekt nebo seznam objektů).
* Je-li delete True, jsou staré objekty smazány.
* Atribut force může být využit pro určení požadovaného způsobu vylepšení. Může to být: makeCompound, closeGroupWires, makeSolid, closeWire, turnToParts, makeFusion, makeShell, makeFaces, draftify, joinFaces, makeSketchFace, makeWires
* Vrací adresář obsahující dva seznamy, seznam nových objektů a seznam objektů ke smazání

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=False)

line1 = Draft.make_line(App.Vector(2000, 0, 0), App.Vector(2500, 1500, 0))
line2 = Draft.make_line(App.Vector(2500, 1500, 0), App.Vector(3000, -1000, 0))
doc.recompute()

add_list2, delete_list2 = Draft.upgrade([line1, line2], delete=False)

simple_wire = add_list2[0]
add_list3, delete_list3 = Draft.upgrade(simple_wire, delete=False)

closed_wire = add_list3[0]
add_list4, delete_list4 = Draft.upgrade(closed_wire, delete=False)

face = add_list4[0]
add_list5, delete_list5 = Draft.upgrade(face, delete=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Upgrade/cs&oldid=1338109>"