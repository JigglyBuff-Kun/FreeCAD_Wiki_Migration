---
title: Команда "Сделать доп. ссылку"
---
|  |
| --- |
| Ссылка |
| Расположение в меню |
| Нет |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Создать деталь](/Std_Part/ru "Std Part/ru"), [Создать группу](/Std_Group/ru "Std Group/ru"), [Создать ссылку](/Std_LinkMake/ru "Std LinkMake/ru") |
|  |

## Описание

![](/images/Std_LinkMakeRelative.svg) "Сделать доп. ссылку" создает [App Link](/App_Link/ru "App Link/ru") (класс `App::Link`), точно так же, как и команда ![](/images/Std_LinkMake.svg) ["Создавть ссылку"](/Std_LinkMake/ru "Std LinkMake/ru"), но предварительно оперирует с выбранными подэлементами и устанавливает Данные**Link Transform** как `true`.

## Применение

With selection:

1. Select a subelement in the [3D view](/3D_view "3D view"), this means a vertex, edge, or face, or any combination of these. These subelements must belong to a single object.
2. Press the ![](/images/Std_LinkMakeRelative.svg) [Make sub-link](/Std_LinkMakeRelative "Std LinkMakeRelative") button. The produced object has the same icon as the original object, but has two arrow overlays indicating it is a relative Link.

Without selection:

* If no object is selected, this command does nothing.
* If an object is selected in the [tree view](/Tree_view "Tree view") only, but no subelement is selected in the [3D view](/3D_view "3D view"), the command does nothing either.

![](/images/Std_Link_tree_sublink_example.png) ![](/images/Std_Link_sublink_example.png)

Original body, and three Links created from the subelements of it, including edges and faces.

## Свойства

This command creates a new [App Link](/App_Link "App Link"); its properties are described in ![](/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake").

In particular, Данные**Link Transform** is set to `true`, so Данные**Placement** becomes hidden, and instead Данные**Link Placement** controls the position of the Link with respect to the position of Данные**Linked Object**.

## Программирование

See [Std LinkMake](/Std_LinkMake "Std LinkMake") for the general information.

An App Link is created with the `addObject()` method of the document. To define a relative link, its `setLink` method is used to pick the source object, and one or more of its subelements. Then the `LinkTransform` attribute is set to `True`.

```
import FreeCAD as App

doc = App.newDocument()
body = App.ActiveDocument.addObject("Part::Box", "Box")

obj = App.ActiveDocument.addObject("App::Link", "Link")
obj.setLink(body, '', ['Edge1', 'Edge6', 'Edge7', 'Edge10', 'Face2', 'Face3'])
obj.LinkTransform = True
obj.LinkPlacement.Base = App.Vector(20, 20, 0)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMakeRelative/ru&oldid=1235193>"