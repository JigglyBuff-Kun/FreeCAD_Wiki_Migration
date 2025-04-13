---
title: Draft Downgrade/Dezasamblare
---
|  |
| --- |
| Draft Downgrade |
| Menu location |
| Draft → Downgrade |
| Workbenches |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| Default shortcut |
| D N |
| Introduced in version |
| - |
| See also |
| [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") |
|  |

## Descriere

Acest instrument downgradează/ retrogradează/ descompune/ explodează obiectele selectate în moduri diferite. Dacă nu este selectat niciun obiect, veți putea selecta unul.

![](/images/Draft_Downgrade_example.jpg)

Two overlapping faces are downgraded to a Part Cut object, which is downgraded to a face. That face is then downgraded to a closed wire, which is finally downgraded to separate edges.

## Cum se folosește

1. Selectați unul sau mi multe obiecte pe caer vreți să le downgradați
2. apăsați pe butonul ![](/images/Draft_Downgrade.png) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") sau apăsați pe tasta D și apoi pe N

## Scripting

## Script

Instrumentul Downgrade poate fi folosit în scripturile python și [macros](/Macros "Macros") utilizând următoarea funcție:

```
downgrade_list = downgrade(objects, delete=False, force=None)

```

* Downgradează obiectul/e dat/e (poate fi un obiect sau o listă de obiecte).
* Dacă ștergerea este True, obiectele vechi sunt șterse.
* Atributul de forță poate fi folosit pentru a forța un anumit mod de dezasambalre. Acesta poate fi: explode, shapify, subtr, splitFaces, cut2, getWire, splitWires.
* Returnează un dicționar care conține două liste, o listă de obiecte noi și o listă de obiecte care trebuie șterse

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Downgrade/ro&oldid=1338404>"