---
title: Разрезать на части
---
|  |
| --- |
| Разрезать на части |
| Расположение в меню |
| Деталь → Разделить → /Разрезать на части |
| Верстаки |
| [Деталь](/Part_Workbench/ru "Part Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.18 |
| См. также |
| [Разрезать и сгруппировать](/Part_Slice/ru "Part Slice/ru"), [Разгруппировать объединение](/Part_ExplodeCompound/ru "Part ExplodeCompound/ru") |
|  |

## Описание

Инструмент для разделения фигур по пересечению с другими фигурами. Например, для куба и поверхности создаются два твёрдых тела.
![](/images/Part_Slice_Demo.png)

Выше: части были раздвинуты вручную, чтобы показать разрез

.

Разрезать на части - это то же самое, что и ![](/images/Part_Slice.svg) [Разрезать и сгруппировать](/Part_Slice/ru "Part Slice/ru"), за которым следует ![](/images/Part_ExplodeCompound.svg) [Разгруппировать объединение](/Part_ExplodeCompound/ru "Part ExplodeCompound/ru"). В то время как «Разрезать и сгруппировать» является полностью параметрическим и не вызывает проблем при изменении количества частей, «Разрезать на части» не будет обновлять количество объектов при изменении количества частей.
Они оба создают параметрическую функцию Slice, которая помещает нарезанные части в объединение (группу), но «Разрезать на части» разгруппировывает полученное соединение на отдельные объекты.

Выходная фигура занимает то же пространство, что и исходная. Но она разделена в местах пересечения с другими фигурами. Разрезанные части представляют собой отдельные фигуры.

Пожалуйста, посетите страницу [Разрезать и сгруппировать](/Part_Slice/ru "Part Slice/ru") для получения дополнительной информации.

### Дерево структуры Slice Apart

Команда Разрезать на части создаёт не только нарезанный объект. В следующем примере куб куб разрезается на грани.

Создаётся фрагмент, и для каждой его части создаётся [Фильтр компонентов (CompoundFilter)](/Part_CompoundFilter/ru "Part CompoundFilter/ru"), таким образом, один и тот же фрагмент встречается несколько раз под каждым Фильтром (CompoundFilter). Все эти Фильтры (CompoundFilters) объединяются в Группу (Compound).

![](/images/Part_SliceApartTree.png)

## Пример

* Создание пазла мозайки: см. пример [Разрезать и сгруппировать](/Part_Slice/ru "Part Slice/ru") Шаги 1-6.

## Написание скриптов

Инструмент можно использовать в [макросах](/Macros/ru "Macros/ru") и из консоли Python, используя следующую функцию:

```
BOPTools.SplitFeatures.makeSlice(name)

```

Установите режим **split** для разделения на части

* Создаётся пустую функцию Slice. Свойства 'Base' и 'Tools' должны быть назначены явно, после чего.
* Возвращается только что созданный объект.

Slice также можно применять к обычным фигурам, без необходимости иметь объект документа, через:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Это может быть полезно для создания пользовательских функций с помощью сценариев Python.

Пример:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

Сам инструмент выполнен на Python, смотрите /Mod/Part/BOPTools/SplitFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) внутри каталога установки FreeCAD.

## Примечания

Инструмент Разрезать на части появился в FreeCAD v0.18.15506. FreeCAD необходимо скомпилировать с OCC 6.9.0 или новее, иначе инструмент будет недоступен.

## Видео уроки

* <https://www.youtube.com/watch?v=tzHkQaHgrfQ> : FreeCad 0.18 PART WB с использованием SLICE и SLICE APART (английский язык), автор: Ха Гэй

* <https://www.youtube.com/watch?v=JJAL5JmqqKQ> : FreeCAD Slice und Slice Apart und andere Tricks (немецкий язык), автор: Ха Гей

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SliceApart/ru&oldid=1556757>"