---
title: TechDraw "Создать группу Видов"
---
|  |
| --- |
| Создать группу Видов |
| Расположение в меню |
| TechDraw → Создать группу Видов |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Добавить Вид в группу](/TechDraw_ClipGroupAdd/ru "TechDraw ClipGroupAdd/ru"), [Удалить Вид из группы](/TechDraw_ClipGroupRemove/ru "TechDraw ClipGroupRemove/ru") |
|  |

## Описание

Данный инструмент создает группу Видов, которая может содержать в себе один или несколько Видов. В зависимости от размеров пространства группы, Виды могут быть отсечены по краям.

![](/images/TechDraw_Clipview.png)

Группа Видов, содержащая в себе несколько Видов отсеченных по краям

## Применение

* Нажмите кнопку ![](/images/TechDraw_ClipGroup.svg) Создать группу Видов для создания новой группы Видов.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Clip Group, formally a `TechDraw::DrawViewClip` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties.

### Data

Clip Group

* Данные**Width**: Ширина окна отсечения в единицах измерения
* Данные**Height**: Высота окна отсечения в единицах измерения
* Данные**ShowFrame**: Если true, вокруг пространства группы, будет отображаться рамка
* Данные**ShowLabels**: Если true, метки видов будут отображаться в группе. **ПРИМЕЧАНИЕ:** удалено в версии 0.19.
* Данные**Views**: Список Видов, содержащихся в группе

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ClipGroup/ru&oldid=1490079>"