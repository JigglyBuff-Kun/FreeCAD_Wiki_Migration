---
title: Draft Upgrade/Апгрейд
---
|  |
| --- |
| Draft Upgrade |
| Расположение в меню |
| Черчение → Обновить |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| U P |
| Представлено в версии |
| - |
| См. также |
| [Draft Downgrade](/Draft_Downgrade/ru "Draft Downgrade/ru"), [Part Fuse](/Part_Fuse/ru "Part Fuse/ru") |
|  |

## Описание

Этот инструмент изменяет выбранные объекты по-разному. Если ни один объект не выбран, вам будет предложено выбрать его.

![](/images/Draft_Upgrade_example.jpg)

An open non-editable wire is upgraded to a closed wire, and then to a face. A closed non-editable square wire is also upgraded to a face. The two faces are then upgraded to create a compound, which is finally upgraded to a single editable Draft Wire.

## Использование

1. Выберите один или несколько объектов, которые вы хотите обновить.
2. Нажмите кнопку  ![](/images/Draft_Upgrade.png) [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") или нажмите  U, затем  P

## Notes

* [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire") can be joined with this command, but also with the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Wire](/Draft_Wire "Draft Wire") command.

## Scripting

## Скриптование

Инструмент Апгрейд можно использовать из скриптов python и [макросов](/Macros "Macros") следующим образом:

```
upgrade_list = upgrade(objects, delete=False, force=None)

```

* `objects` contains the objects to be upgraded. It is either a single object or a list of objects.
* If `delete` is `True` the source objects are deleted.
* `force` forces a certain way of upgrading by calling a specific internal function. It can be: `"makeCompound"`, `"closeGroupWires"`, `"makeSolid"`, `"closeWire"`, `"turnToParts"`, `"makeFusion"`, `"makeShell"`, `"makeFaces"`, `"draftify"`, `"joinFaces"`, `"makeSketchFace"`, `"makeWires"` or `"turnToLine"`.
* `upgrade_list` is returned. It is a list containing two lists: a list of new objects and a list of objects to be deleted. If `delete` is `True` the second list is empty.

Пример:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Upgrade/ru&oldid=1338103>"