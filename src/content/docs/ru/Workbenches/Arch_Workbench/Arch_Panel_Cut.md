---
title: Arch Панельный контур
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Панельный контур |
| Расположение в меню |
| Arch → Инструменты панелирования → Панельный контур |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru"), [Path](/Path_Workbench/ru "Path Workbench/ru") |
| Быстрые клавиши |
| P C |
| Представлено в версии |
| 0.17 |
| См. также |
| [Паенль](/Arch_Panel/ru "Arch Panel/ru"), [Панельный лист](/Arch_Panel_Sheet/ru "Arch Panel Sheet/ru"), [Компоновка](/Arch_Nest/ru "Arch Nest/ru") |
|  |

## Описание

Данный инструмент создает плоский контур [Панели](/Arch_Panel/ru "Arch Panel/ru") в 3D виде документа, который в дальнейшем, можно добавить в [панельный лист](/Arch_Panel_Sheet/ru "Arch Panel Sheet/ru") или напрямую экспортировать в формат [DXF](/Draft_DXF/ru "Draft DXF/ru"). Объекты созданные с помощью инструмента "Контур панели" также поддерживаются в [верстаке Path](/Path_Workbench/ru "Path Workbench/ru").

![](/images/Arch_Wikihouse_02.jpg)

## Применение

1. Select one or more [Arch Panel](/Arch_Panel "Arch Panel") objects.
2. Select the **Utils → Panel tools → ![](/images/Arch_Panel_Cut.svg) Panel Cut** option from the menu.
3. Adjust the desired properties.

## Опции

* Если панель не плоская (например, рифленая), рельеф не будет отображаться при вырезе панели. Этот инструмент применим в основном для плоских панелей.
* На вырезе панели может отображаться тег (метка). Этот тег может быть настраиваемой строкой текста или может автоматически отображать тег, метку или описание, с которыми связана его панель.
* Чтобы быть полезным при обработке с ЧПУ, метка должна быть написана шрифтом, где буквы представляют собой простые ломаные линии, по которым машина может легко следовать. При создании объекта вырезания панели автоматически будет использоваться шрифт, указанный в меню Правка → Настройки → Черновик → Тексты и размеры → Default ShapeString font file
* Двойной щелчок по вырезанной панели в древовидном представлении после ее создания позволяет перейти в режим редактирования и изменить положение тега.
* Когда вам нужно расположить разные вырезы панелей вместе, Вырезы панелей могут отображать поля, что полезно для обеспечения того, чтобы между вырезом и другим всегда присутствовал определенный зазор.

## Свойства

### Данные

* Данные**Source**: Объект [Панель](/Arch_Panel/ru "Arch Panel/ru") отображаемый в этом вырезе.
* Данные**Tag Text**: Текст для отображения. Может быть %tag%, %label% или %description% для отображения тега или метки панели.
* Данные**Tag Size**: Размер текста у тега.
* Данные**Tag Position**: Положение тега. Укажите (0,0,0) для автоматического положения по центру
* Данные**Tag Rotation**: Угол поворота тега.
* Данные**Font File**: Шрифт текста тега.
* Данные**Make Face**: Если значение равно True, то панель является гранью детали, в противоположном случае является контуром сформированным из граней детали.

### Вид

* Вид**Margin**: Поле отступа, которое может отображаться за пределами контура панели.
* Вид**Show Margin**: Включает/выключает отображение полей.

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Panel Cut tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
View = makePanelCut(panel, name="PanelView")

```

* Creates a `View` object (2D projection) from the existing `panel`.

Пример:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Материалы для самостоятельного изучения

* [Руководство по портированию файлов проекта Wikihouse в FreeCAD](/Wikihouse_porting_tutorial/ru "Wikihouse porting tutorial/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/ru&oldid=1433129>"