---
title: Arch Плоскость Сечения
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch SectionPlane |
| Расположение в меню |
| Архитектура -> Плоскость сечения |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| S P |
| Представлено в версии |
| - |
| См. также |
| [Draft Shape2DView](/Draft_Shape2DView/ru "Draft Shape2DView/ru"), [TechDraw NewArch](/TechDraw_ArchView/ru "TechDraw ArchView/ru") |
|  |

## Описание

Этот инструмент помещает в текущий документ "что-то" секущей плоскости, которое определяет сечение или план. "Что-то" получает своё положение в соответствии с текущей [рабочей плоскостью](/Draft_SelectPlane/ru "Draft SelectPlane/ru"), и может быть перемещён и переориентирован через её перемещение и вращение, пока не получится требуемый двумерный вид. Секущая плоскость учитывает только определённый набор объектов. Выделенные в момент создания секущей плоскости добавляются в этот набор автоматически. Другие объекты могут быть позднее добавлены или удалены из объекта SectionPlane инструментами [Arch Add component](/Arch_Add/ru "Arch Add/ru") или [Arch Remove component](/Arch_Remove/ru "Arch Remove/ru"), или двойным кликом секущей плоскости в древе проекта.

Сама по себе плоскость сечения не создаст никакого вида набора своих объектов. Для этого вы должны ~~либо~~ создать ~~[Drawing DraftView](/Draft_Drawing/ru "Draft Drawing/ru"), чтобы создать вид на [странице чертежа](/Drawing_Workbench/ru "Drawing Workbench/ru"), [Draft Shape2DView](/Draft_Shape2DView/ru "Draft Shape2DView/ru") для создания вида в самом 3D-документе, или~~ [TechDraw ArchView](/TechDraw_ArchView/ru "TechDraw ArchView/ru") для создания представления на [странице TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru").

![](/images/Arch_SectionPlane_example.jpg)

## Применение

1. Если нужно, установить [Draft Working Plane](/Draft_SelectPlane/ru "Draft SelectPlane/ru") для отражения плоскости, на которой вы хотите разместить плоскость сечения.
2. Выделить объекты, которые должны быть включены в сечение
3. Нажмите кнопку ![](/images/Arch_SectionPlane.svg) SectionPlane или нажмите S, затем P
4. [Move](/Draft_Move/ru "Draft Move/ru")/[rotate](/Draft_Rotate/ru "Draft Rotate/ru") Section Plane в правильное положение, если нужно.
5. Выберите плоскость сечения, если она еще не выбрана.
6. Используйте ~~[Drawing DraftView](/Draft_Drawing/ru "Draft Drawing/ru"),~~ [Draft Shape2DView](/Draft_Shape2DView/ru "Draft Shape2DView/ru") или [TechDraw ArchView](/TechDraw_ArchView/ru "TechDraw ArchView/ru") для создания вида.

## Опции

* The Section plane object will only consider a certain set of objects, not all the objects of the document. Objects can be added or removed from a SectionPlane object by using the [Arch Add](/Arch_Add "Arch Add") and [Arch Remove](/Arch_Remove "Arch Remove") tools, or by double-clicking the Section Plane in the tree view, selecting objects either in the list of in the 3D scene, and pressing the **add** or **remove** buttons.

* С выбранным объектом сечения используйте инструмент [Draft Shape2DView](/Draft_Shape2DView/ru "Draft Shape2DView/ru") для создания объекта, представляющего вид сечения в документе.

![](/images/Arch_Section_example2.jpg)

* Создайте дополнительные [Drawing DraftViews](/Draft_Drawing "Draft Drawing"), если Вы работаете с ~~[верстаком Drawing](/Drawing_Workbench/ru "Drawing Workbench/ru")~~, или [TechDraw ArchView](/TechDraw_ArchView/ru "TechDraw ArchView/ru"), если Вы используете [верстак TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru").

![](/images/Arch_Section_example3.jpg)

* The Section Plane can also be used to show the entire 3D view cut by an infinite plane. This is only visual, and won't affect the geometry of the objects being cut.

![](/images/Arch_SectionPlane_CutView.jpg)

## Свойства

* Данные**Only Solids**: Если это `true`, объекты не твердых тел не будут учитываться в наборе.
* Вид**Display Length**: Длина "чего-то" плоскости сечения на трехмерном виде. Не влияет на итоговый вид
* Вид**Display Height**: Высота "чего-то" плоскости сечения в трехмерном виде. Не влияет на итоговый вид
* Вид**Arrow Size**: Размер стрелок в "чём-то" секущей плоскости в трёхмерном виде. Не влияет на итоговый вид
* Вид**Cut View**: Если это `true`, весь трёхмерный вид будет рассечён по месту этой секущей плоскости.
* Вид**Clip view**: Если это `true`, он будет обрезать вид до отображаемой высоты и длины плоскости сечения. Это эффективно превращает плоскость сечения в ортогональную камеру, ограничивая поле зрения. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

![](/images/Arch_SectionPlane_ClipView.png)

The Arch SectionPlane with the clip view option will behave like a camera, limiting the field of view.

## Tweaks

* Adding manually a property named **RotateSolidRender** of type **App::PropertyAngle** to the section plane's **View** properties (right-click the properties view -> show hidden, right-click again -> add property) allows to rotate the render when using Solid mode. This is useful when a rendered view has for example both Arch and Draft elements, and the rendering of the Arch elements is rotated in relation to the Draft elements.

## Scripting

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Инструмент SectionPlane может использоваться в [макросах](/Macros/ru "Macros/ru") и в консоли [Python](/Python "Python") с использованием следующих функций:

```
Section = makeSectionPlane(objectslist=None, name="Section")

```

* Создаёт объект `Section` из `objectslist`, который есть список объектов.

Пример:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
Structure = Arch.makeStructure(length=1000, width=1000, height=200)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor, Structure])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

Section1 = Arch.makeSectionPlane([Wall1, Wall2])
Section2 = Arch.makeSectionPlane([Structure])
Section3 = Arch.makeSectionPlane([Site])
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SectionPlane/ru&oldid=1560772>"