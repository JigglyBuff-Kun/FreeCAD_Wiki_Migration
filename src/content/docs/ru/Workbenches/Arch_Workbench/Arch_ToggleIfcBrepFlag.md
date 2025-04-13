---
title: Arch ToggleIfcBrepFlag
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch ToggleIfcBrepFlag |
| Расположение в меню |
| Архитектура → Утилиты → Toggle Ifc Brep flag |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Arch IfcExplorer](/Arch_IfcExplorer "Arch IfcExplorer"), [Arch IFC](/Arch_IFC "Arch IFC") |
|  |

## Описание

Этот инструмент включает / выключает флаг IfcBrep выбранного объекта  [Arch](/Arch_Workbench/ru "Arch Workbench/ru") (значение по умолчанию всегда выключено). Если флаг включен, при экспорте в IFC объект будет экспортироваться как [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm) объект, даже если возможен экспорт более высокого уровня, например IfcExtrudedAreaSolid или IfcBooleanResult. Хотя объекты IfcFacetedBrep более тяжелые и менее редактируемые (они теряют некоторую информацию о геометрии, такую ​​как история моделирования), они часто менее подвержены ошибкам. Установка этого флага позволяет разрешить некоторые случаи объектов, которые не экспортируются правильно, когда флаг не установлен.

## Использование

1. Выберите объект Arch
2. Выберите менюArch → Utilities → ![](/images/Arch_ToggleIfcBrepFlag.png) [Toggle IfcBrepFlag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/ru&oldid=1433458>"