---
title: Kreslení Degradace
---
|  |
| --- |
| Kreslení Degradace |
| Umístění Menu |
| Draft → Downgrade |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| D N |
| Představen ve verzi |
| - |
| Viz také |
| [Draft Upgrade](/Draft_Upgrade/cs "Draft Upgrade/cs") |
|  |

## Popis

Tento nástroj degraduje vybrané objekty různými způsoby. Není-li vybrán žádný objekt, budete vyzvání k výběru objektu.

![](/images/Draft_Downgrade_example.jpg)

Two overlapping faces are downgraded to a Part Cut object, which is downgraded to a face. That face is then downgraded to a closed wire, which is finally downgraded to separate edges.

## Použití

1. Vyberte jeden nebo více objektů, které chcete degradovat
2. Stiskněte tlačítko ![](/images/Draft_Downgrade.png) Degradace nebo klávesy D a N

## Scripting

## Skriptování

Nástroj Degradace může být použit ve skriptech Pythonu a v [makrech](/Macros/cs "Macros/cs") použitím následující funkce:

```
downgrade_list = downgrade(objects, delete=False, force=None)

```

* Degraduje zadaný objekt(y) (může to být objekt nebo seznam objektů).
* Je-li delete True, staré objekty budou smazány.
* Atribut force může být využit pro určení požadovaného způsobu degradace. Může to být: explode (oddělení), shapify, subtr(odebrání), splitFaces(rozděl plochy), cut2, getWire, splitWires(rozděl drát).
* Vrací katalog obsahující dva seznamy, seznam nových objektů a seznam objektů ke smazání

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=True)

compound = add_list1[0]
add_list2, delete_list2 = Draft.downgrade(compound, delete=False)
face = add_list2[0]
add_list3, delete_list3 = Draft.downgrade(face, delete=False)

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

add_list4, delete_list4 = Draft.downgrade(box, delete=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Downgrade/cs&oldid=1338406>"