---
title: Draft Downgrade/Даунгрейд
---
|  |
| --- |
| Draft Downgrade |
| Расположение в меню |
| Черчение -> Перестроить |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| D N |
| Представлено в версии |
| - |
| См. также |
| [Обновить](/Draft_Upgrade/ru "Draft Upgrade/ru") |
|  |

## Описание

Этот инструмент разбивает выбранные объекты (преобразует объект в несколько объектов нижнего уровня). Если объекты не выбраны, попросите их выбрать.

![](/images/Draft_Downgrade_example.jpg)

Two overlapping faces are downgraded to a Part Cut object, which is downgraded to a face. That face is then downgraded to a closed wire, which is finally downgraded to separate edges.

## Использование

1. Выберите один или несколько объектов, которые вы хотите понизить
2. Нажмите кнопку ![](/images/Draft_Downgrade.png) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") или нажмите  D, затем клавиши  N

## Scripting

## Скриптование

Инструмент Даунгрейд можно использовать в сценариях python и [макросы](/index.php?title=%D0%9C%D0%B0%D0%BA%D1%80%D0%BE%D1%81%D1%8B&action=edit&redlink=1 "Макросы (page does not exist)"), используя следующую функцию:

```
downgrade_list = downgrade(objects, delete=False, force=None)

```

* `objects` contains the objects to be downgraded. It is either a single object or a list of objects.
* If `delete` is `True` the source objects are deleted.
* `force` forces a certain way of downgrading by calling a specific internal function. It can be: `"explode"`, `"shapify"`, `"subtr"`, `"splitFaces"`, `"cut2"`, `"getWire"`, `"splitWires"` or `"splitCompounds"`.
* `downgrade_list` is returned. It is a list containing two lists: a list of new objects and a list of objects to be deleted. If `delete` is `True` the second list is empty.

Пример:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Downgrade/ru&oldid=1338405>"