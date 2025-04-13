---
title: Фаска
---
|  |
| --- |
| Фаска |
| Расположение в меню |
| Деталь → Фаска |
| Верстаки |
| [Деталь](/Part_Workbench/ru "Part Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Скругление](/Part_Fillet/ru "Part Fillet/ru") |
|  |

## Описание

Инструмент **Фаска**снимает фаски с выбранного рера (рёбер) объекта. Диалоговое окно позволяет выбрать, с каким ребром (рёбрами) работать, а также изменить различные параметры фаски.

![Пример фаски](/images/Chamfer-example.png)

## Применение

1. Существует несколько способов для вызова данной команды:
   * Нажатием кнопки ![](/images/Part_Chamfer.svg) Фаска на панели инструментов.
   * Через пункт главного меню **Деталь → Фаска**.
2. В открывшемся диалоговом окне выберите фигуру для снятия фаски.
3. Выберите кромки для снятия фаски, установив соответствующий флажок в диалоговом окне "Снятие фаски" или выбрав их непосредственно на модели.
4. Отредактируйте параметры фаски.
5. Нажмите OK, чтобы закрыть диалоговое окно Фаска и применить её.

## Опции

![Dialog-chamfer](/images/Dialog-chamfer-ru.png)

* При выборе кромок на модели у вас есть возможность выбрать по кромке или по грани. При выборе по грани будут выбраны все граничные края этой грани.
* Фаска постоянной длины или фаска переменной длины.
  + Фаска постоянной длины создаст фаску с краями, равноудаленными от исходной кромки на указанном расстоянии.
  + Фаска переменной длины будет иметь кромки, которые могут быть установлены на разных расстояниях от исходной кромки, что позволяет создавать фаску под переменным углом.

## Свойства

![Свойства Фаски](/images/Part_Chamfer-Properties-ru.png)

Свойства Фаски

Основание

* ДАННЫЕ**Основание**: Форма, к которой должна быть применена фаска.
* ДАННЫЕ**Placement**: Задаёт ориентацию и положение фигуры в 3D-пространстве.
* ДАННЫЕ**Label**: Ярлык, присвоенный объекту. Можете изменить его в соответствии с вашими потребностями.

## Ограничения

Фаска может не сработать, если результат будет касаться или пересечёт следующее соседнее ребро. Поэтому, если вы не получили ожидаемого результата, попробуйте использовать меньшее значение. Это относится и для ![](/images/Part_Fillet.svg) [Скругления](/Part_Fillet/ru "Part Fillet/ru").

Также обратите внимание, что функция Фаски подвержена влиянию [Проблеме топологического именования](/Topological_naming_problem/ru "Topological naming problem/ru"), когда на более раннем этапе моделирования в цепочке происходят какие-либо изменения, влияющие на количество граней или вершин. Это может привести к непредсказуемому результату. Пока эта проблема не решена, рекомендуется применять Фаску и ![](/images/Part_Fillet.svg) [Скругление](/Part_Fillet/ru "Part Fillet/ru") на последних шагах цепочки построения.

## Написание скриптов

Инструмент Фаски можно использовать в [Макросах](/Macros/ru "Macros/ru") и из консоли [Python](/Python/ru "Python/ru"), добавив объект Фаска в документ.

**Пример скрипта:**

```
import Part
cube = FreeCAD.ActiveDocument.addObject("Part::Feature", "myCube")
cube.Shape = Part.makeBox(5, 5, 5)
chmfr = FreeCAD.ActiveDocument.addObject("Part::Chamfer", "myChamfer")
chmfr.Base = FreeCAD.ActiveDocument.myCube
myEdges = []
myEdges.append((1, 1.5, 1.25)) # (edge number, chamfer start length, chamfer end length)
myEdges.append((2, 1.5, 1.25))
myEdges.append((3, 1.5, 1.25))
myEdges.append((4, 1.5, 1.25))
myEdges.append((5, 1.5, 1.25))
myEdges.append((6, 1.5, 1.25))
myEdges.append((7, 1.5, 1.25))
myEdges.append((8, 1.5, 1.25))
myEdges.append((9, 1.5, 1.25))
myEdges.append((10, 1.5, 1.25))
myEdges.append((11, 1.5, 1.25))
myEdges.append((12, 1.5, 1.25))
chmfr.Edges = myEdges
FreeCADGui.ActiveDocument.myCube.Visibility = False
FreeCAD.ActiveDocument.recompute()

```

**Объяснения к Скрипту из примера:**

```
import Part
cube = FreeCAD.ActiveDocument.addObject("Part::Feature", "myCube")
cube.Shape = Part.makeBox(5, 5, 5)

```

* Создаёт куб размером 5 мм, к которому мы можем применить фаски. Смотри [Part\_API](/Part_API/ru "Part API/ru") для объяснения метода makeBox.

```
chmfr = FreeCAD.ActiveDocument.addObject("Part::Chamfer", "myChamfer")

```

* Добавляет в документ новый объект типа Chamfer/Фаска (из модуля Part/Деталь) с ярлыком "myChamfer".

```
chmfr.Base = FreeCAD.ActiveDocument.myCube

```

* Указывает, что базовая форма объекта фаски должна быть "myCube".

```
myEdges = []
myEdges.append((1, 1.5, 1.25)) # (edge number, chamfer start length, chamfer end length)
myEdges.append((2, 1.5, 1.25))
myEdges.append((3, 1.5, 1.25))
myEdges.append((4, 1.5, 1.25))
myEdges.append((5, 1.5, 1.25))
myEdges.append((6, 1.5, 1.25))
myEdges.append((7, 1.5, 1.25))
myEdges.append((8, 1.5, 1.25))
myEdges.append((9, 1.5, 1.25))
myEdges.append((10, 1.5, 1.25))
myEdges.append((11, 1.5, 1.25))
myEdges.append((12, 1.5, 1.25))

```

* Создаёт пустой массив "myEdges", а затем наполняет массив с параметрами фаски для каждого края.
* Синтаксис для каждого элемента должен быть следующим (edge#, chamfer start length, chamfer end length)/(номер кромки, длина начала фаски, длина окончания фаски).

```
chmfr.Edges = myEdges

```

* Устанавливает атрибут Edges/Рёбра нашего объекта Chamfer/Фаска равным массиву, который мы только что создали.

```
FreeCADGui.ActiveDocument.myCube.Visibility = False

```

* Эта строка просто скрывает "myCube", так что наш недавно созданный объект "myChamfer" является единственным видимым.

```
FreeCAD.ActiveDocument.recompute()

```

* Пересчитывает все измененные компоненты на экране и обновляет дисплей.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Chamfer/ru&oldid=1550381>"