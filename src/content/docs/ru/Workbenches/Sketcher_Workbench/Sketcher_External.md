---
title: Sketcher "Внешняя геометрия"
---
|  |
| --- |
| Внешняя геометрия |
| Расположение в меню |
| Sketch → Геометрия эскиза → Внешняя геометрия |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| X |
| Представлено в версии |
| - |
| См. также |
| [Переключить построительную геометрию](/Sketcher_ToggleConstruction/ru "Sketcher ToggleConstruction/ru") |
|  |

## Описание

Используйте инструмент ![](/images/Sketcher_External.svg) Внешняя геометрия, когда вам нужно применить ограничение между геометрией эскиза и чем-то вне эскиза. Это работает путем вставки связанной вспомогательной геометрии в эскиз. По умолчанию цвет связанной внешней геометрии пурпурный. Как и в случае стандартной несвязанной вспомогательной геометрии (синего цвета), связанная внешняя геометрия видна только тогда, когда эскиз находится в режиме редактирования, и напрямую не используется в последующих результатах использования эскиза другими инструментами. Оба типа вспомогательной геометрии могут использоваться в качестве ссылок для ограничений в эскизе.

1.1 and above: See ![](/images/Sketcher_Projection.svg) [Sketcher Projection](/Sketcher_Projection "Sketcher Projection")

![](/images/Sketcher_ExternalEsempio1.png)

The two magenta lines are external geometry linked to edges of a pre-existing [Pad](/PartDesign_Pad "PartDesign Pad"). They are used to constrain the circles.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Создайте новый эскиз или откройте существующий эскиз.
* Нажмите кнопку 'Внешняя Геометрия'.
* Выберите ребро или вершину, которую вы хотите связать с эскизом.
* Нажмите Esc, или выберите другой инструмент, чтобы прекратить импорт геометрии в эскиз.

## Notes

* Only edges and vertices from objects within the same coordinate system can be selected. The sketch and the object must be in same [Body](/PartDesign_Body "PartDesign Body"), or the same [Part](/Std_Part "Std Part"), or both in the global coordinate system. Use a [Binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") to bring a copy of the object into the current coordinate system if required.
* Circular dependencies are not allowed. You cannot link to an object that depends on the sketch itself.
* Links to elements from other sketches are possible, and encouraged, as they are more reliable than links to generated (solid) geometry. The latter can suffer from the [Topological Naming Problem](/Topological_naming_problem "Topological naming problem"). See [Advice for stable models](/Feature_editing#Advice_for_creating_stable_models "Feature editing").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/ru&oldid=1512577>"