---
title: Команда "Удалить"
---
|  |
| --- |
| Удалить |
| Расположение в меню |
| Правка → Удалить |
| Верстаки |
| Все |
| Быстрые клавиши |
| Del |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

Команда **Удалить**, удаляет выбранные объекты.

## Применение

1. Выберите один или несколько объектов.
2. Существует несколько способов вызвать команду:
   * Через пункт меню **Правка → ![](/images/Std_Delete.svg) Удалить**.
   * Через пункт **![](/images/Std_Delete.svg) Удалить** меню [древовидного представления](/Tree_view/ru "Tree view/ru") или аналогичный пункт контекстного меню [3D вида](/3D_view/ru "3D view/ru").
   * Нажатием клавиши клавиатуры: Del.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Для удаления объекта используйте метод `removeObject` объекта document.

```
import FreeCAD

FreeCAD.ActiveDocument.removeObject("myObjectName")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Delete/ru&oldid=1448982>"