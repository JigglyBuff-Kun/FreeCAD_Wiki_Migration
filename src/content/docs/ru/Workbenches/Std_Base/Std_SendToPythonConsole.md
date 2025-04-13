---
title: Команда "Отправить в консоль Python"
---
|  |
| --- |
| Отправить в консоль Python |
| Расположение в меню |
| Правка → Отправить в консоль Python |
| Верстаки |
| Все |
| Быстрые клавиши |
| Ctrl+Shift+P |
| Представлено в версии |
| 0.19 |
| См. также |
| *Нет* |
|  |

## Описание

The **Std SendToPythonConsole** command creates variables in the [Python console](/Python_console "Python console") referencing a selected object and its selected subshapes, along with some other useful references. The variables and the code involved can be used in the development of Python code.

В зависимости от выбранного объекта и входящих в его состав выбранных форм, создаются следующие переменные:

| Название переменной | Пояснение |
| --- | --- |
| `doc` | Документ в котором содержится вбранный объект |
| `lnk` | Выбранный объект ссылки (создается только в том случае, если выбранный объект является ссылкой) |
| `obj` | В зависимости от выбранного объекта:  Сам выбранный объект (если выбранный объект не является ссылкой)  Связанный объект (если выбранный объект является ссылкой) |
| `shp` | Зависит от типа `obj`:  `Shape` свойство `obj` (для объектов унаследованных от `Part::Feature` класса)  `Mesh` свойство `obj` (для Mesh объектов)  `Points` свойство `obj` (для Points объектов) |
| `sub` | Первая выбранная вложенная фигура (создается только в том случае, если выбрана хотя бы одна вложенная фигура) |
| `subs` | Список, содержащий все вложенные фигуры (создается только в том случае, если выбраны две или более вложенных фигур) |

```
>>> ### Begin command Std_SendToPythonConsole
>>> try:
>>>     del(doc,lnk,obj,shp,sub,subs)
>>> except Exception:
>>>     pass
>>> 
>>> doc = App.getDocument("Unnamed")
>>> lnk = doc.getObject("Link")
>>> obj = lnk.getLinkedObject()
>>> shp = obj.Shape
>>> sub = obj.getSubObject("Edge10")
>>> subs = [obj.getSubObject("Edge10"),obj.getSubObject("Face3"),obj.getSubObject("Vertex5"),]
>>> ### End command Std_SendToPythonConsole

```

Example output: an edge, a face, and a vertex of a [Link](/Std_LinkMake "Std LinkMake") to a [Part Box](/Part_Box "Part Box") were selected

## Применение

1. Select a single object or one or more subshapes belonging to a single object.
2. There are several ways to invoke the command:
   * Select the **Edit → ![](/images/Std_SendToPythonConsole.svg) Send to Python Console** option from the menu.
   * Select the **![](/images/Std_SendToPythonConsole.svg) Send to Python Console** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.
   * Use the keyboard shortcut: Ctrl+Shift+P.
3. If required the [Python console](/Python_console "Python console") opens.
4. The [Python console](/Python_console "Python console") receives the keyboard focus.

## Примечания

* Все ранее созданные переменные удаляются (перезаписываются новыми значениями) при каждом запуске команды.

* If the selected object is a Link (`App::Link`) and the Linked object is derived from the `Part::Feature` class, the `shp` variable will be the shape of the Linked object. If the Link has been transformed or scaled and you want to access the scaled/transformed shape, you can do so with this code:

:   ```
    lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/ru&oldid=1448991>"