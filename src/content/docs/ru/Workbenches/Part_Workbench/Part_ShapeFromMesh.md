---
title: Создать фигуру из полигональной сетки
---
|  |
| --- |
| Создать фигуру из полигональной сетки |
| Расположение в меню |
| Деталь → Создание фигуры из полигональной сетки... |
| Верстаки |
| [Деталь](/Part_Workbench/ru "Part Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Преобразовать в твёрдое тело](/Part_MakeSolid/ru "Part MakeSolid/ru"), [Улучшить форму](/Part_RefineShape/ru "Part RefineShape/ru"), [Создать облако точек из геометрии](/Part_PointsFromMesh/ru "Part PointsFromMesh/ru") |
|  |

## Введение

Команда ![](/images/Part_ShapeFromMesh.svg) **Создать фигуру из полигональной сетки** создаёт фигуры из [сетчатых объектов](/Mesh/ru "Mesh/ru"). Объекты Сетки (Mesh) имеют ограниченные возможности редактирования в FreeCAD, преобразование их в [фигуры (shapes)](/Shape/ru "Shape/ru") позволит использовать их с большим количеством булевых команд и команд модификации.

Обратная операция - это [Создать полигональную сетку из фигуры...](/Mesh_FromPartShape/ru "Mesh FromPartShape/ru") из ![](/images/Workbench_Mesh.svg) [Верстака Полигональлные Сетки (Mesh)](/Mesh_Workbench/ru "Mesh Workbench/ru").

## Применение

1. Перед запуском этой команды следует проанализировать и исправить сетчатый объект, если это необходимо. Соответствующие инструменты для этой задачи доступны в ![](/images/Workbench_Mesh.svg) [Верстаке Полигональные Сетки](/Mesh_Workbench/ru "Mesh Workbench/ru").
2. Выберите один или несколько сетчатых объектов.
3. Выберите в меню **Деталь → ![](/images/Part_ShapeFromMesh.svg) Создание фигуры из полигональной сетки**.
4. Откроется диалог **Фигура из полигональной сетки**.
5. Опционально установите флажок **Сшивание фигуры** и укажите допуск:
   * Эта опция обычно не нужна. Она предназначена для объектов сетки, которые не являются водонепроницаемыми и имеют небольшие зазоры между краями.
   * Если опция выбрана, вместо соединения граней будет создано соединение оболочек.
   * Операция сшивания может потребовать больших вычислительных затрат.
6. Нажмите кнопку OK.
7. Для каждого выбранного объекта сетки создаётся [Фигура](/Shape/ru "Shape/ru") в виде отдельного нового объекта.
8. По желанию используйте ![](/images/Part_RefineShape.svg) [Ушучщить геометрию](/Part_RefineShape/ru "Part RefineShape/ru") на этих объектах.
9. По желанию превратите полученные объекты в твёрдые тела с помощью ![](/images/Part_MakeSolid.svg) [Преобразовать в твёрдое тело](/Part_MakeSolid/ru "Part MakeSolid/ru").

## Свойства

Смотрите также: [Редактор свойств](/Property_editor/ru "Property editor/ru").

Команда Создать фигуру из полигональной сетки создёет объекты [Конструктивный элемент](/Part_Feature/ru "Part Feature/ru") без дополнительных свойств.

## Написание скриптов

Создать [Форму](/Shape/ru "Shape/ru") из [Сетки](/Mesh/ru "Mesh/ru") можно с помощью метода `makeShapeFromMesh` из [Топологической формы (TopoShape)](/Part_TopoShape/ru "Part TopoShape/ru"); вам нужно указать исходную сетку и допуск, а результат присвоить новому объекту [Контруктивный элемент (Feature)](/Part_Feature/ru "Part Feature/ru").

Обратите внимание, что сетка должна быть пересчитана перед преобразованием в Shape, иначе в ней не будет информации о топологии, и преобразование не будет успешным.

```
import FreeCAD as App
import Part

doc = App.ActiveDocument
mesh = doc.addObject("Mesh::Cube", "Mesh")
mesh.recompute()

shape = Part.Shape()
shape.makeShapeFromMesh(mesh.Mesh.Topology, 0.1)

solid = doc.addObject("Part::Feature", "Solid")
solid.Shape = Part.Solid(shape.removeSplitter())
solid.Placement.Base = App.Vector(15, 0, 0)
doc.recompute()

```

## Ссылки

* [Редактирование STL-файлов в FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) видео от AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/ru&oldid=1558107>"