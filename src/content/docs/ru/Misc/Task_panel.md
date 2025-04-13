---
title: Панель задач
---
## Введение

Панель задач отображается во вкладке **Задачи** [Комбо панели](/Combo_view/ru "Combo view/ru") и является одной из важных панелей [интерфейса](/Interface/ru "Interface/ru"). Это изменяемая область, которая в зависимости от активного в данный момент [верстака](/Workbenches/ru "Workbenches/ru") и инструмента может содержать любые графические элементы управления, такие как окна, таблицы, поля ввода, различные элементы выбора, поля ввода, кнопки, изображения и др.

![](/images/FreeCAD_Combo_view_Task_panel_ru.png)

Панель задач с различными командами, если активен [верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") и выбран [эскиз](/Sketch/ru "Sketch/ru").

## Работа с панелью задач

A Task panel normally opens when a tool that requires user input is activated. If the tool doesn't need user input, it will produce its result or terminate, but won't display a Task panel. The user input may be anything such as text, 3D point coordinates, elements from a list, faces from a shape, or options to modify the way the tool operates.

There are many tools that require the selection of shapes or objects. In such cases the Task panel will wait for the user to select the appropriate objects from the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view"). When a Task panel is open, it is possible to switch to the [Tree view](/Tree_view "Tree view") to choose an object. Once this is done, it is possible to switch back to the Task panel to proceed with the tool. The Task panel is usually closed by clicking an OK or a Close button, or pressing the Esc key to abort the tool.

![](/images/FreeCAD_Combo_view_Task_panel_ArchComponent.png)

Task panel that opens when editing an [Arch Component](/Arch_Component "Arch Component"). The panel waits for the user to select objects that can be added or subtracted from the component.

## Примечания

* Users migrating from other CAD solutions that use the ESC key as part of their workflow may get different results in FreeCAD. When ESC is pressed in FreeCAD the Task panel that has the focus will close. To disable this functionality, please see [Fine tuning](/Fine-tuning#Escape_key "Fine-tuning") and [Sketcher Preferences](/Sketcher_Preferences#General "Sketcher Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=Task_panel/ru&oldid=1503937>"