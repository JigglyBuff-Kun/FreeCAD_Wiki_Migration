---
title: Верстак Arch
---

:::caution
In v1.0 the BIM, Native-IFC and Arch Workbenches have been merged into the integratedBIM Workbench.
:::
![](/images/Workbench_Arch.svg)

Логотип верстака Arch

## Введение

The ![](/images/Workbench_Arch.svg) [Arch Workbench](/Arch_Workbench "Arch Workbench") provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](/Arch_IFC "Arch IFC") (IFC) files, and production of 2D floor plans in combination with the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

Верстак Arch импортирует все инструменты из [верстака Draft](/Draft_Workbench/ru "Draft Workbench/ru"), используя двумерные объекты для построения архитектурных объектов. В то же время Arch так же использует твердотельные объекты, созданные в других верстаках вроде [Part](/Part_Workbench/ru "Part Workbench/ru") и [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").

Функциональность [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) во FreeCAD сейчас постепенно разделяется на описываемый верстак Arch, который содержит все архитектурные инструменты, и [верстак BIM](/BIM_Workbench/ru "BIM Workbench/ru"), который можно установить через [Addon Manager](/Std_AddonMgr/ru "Std AddonMgr/ru"). Этот верстак добавит новые инструменты в интерфейсе программы поверх инструментов Архитектурного Модуля, с тем чтобы сделать рабочий процесс BIM в FreeCAD более интуитивно понятным и удобным для пользователя.

Разработчики Draft, Arch и BEAM также сотрудничают с крупным [OSArch сообществом](https://osarch.org), в целях улучшения проектирования зданий с помощью полностью бесплатного программного обеспечения.

![](/images/Screenshot_arch_window.jpg)

## Инструменты

Данные инструменты используются для создания архитектурных объектов.

- ![](/images/Arch_Wall.svg) [Стена](/Arch_Wall/ru "Arch Wall/ru"): создаёт стену с нуля или использует выбранный объект в качестве основы.

- ![](/images/Arch_Structure.svg) [Структура](/Arch_Structure/ru "Arch Structure/ru"): создаёт структурный элемент с нуля или использует выбранный объект в качестве основы.

- ![](/images/Arch_CompRebarStraight.png) [Rebar tools](/Arch_CompRebarStraight "Arch CompRebarStraight"): These tools, except the last, are only available if the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench") has been installed.

- ![](/images/Arch_Rebar_Straight.png) [Прямая арматура](/Arch_Rebar_Straight/ru "Arch Rebar Straight/ru"): Создает прямой арматурный стержень в выбранном структурном элементе.

- ![](/images/Arch_Rebar_UShape.png) [U-Образная арматура](/Arch_Rebar_UShape/ru "Arch Rebar UShape/ru"): Создает U-образный арматурный стержень в выбранном структурном элементе.

- ![](/images/Arch_Rebar_LShape.png) [L-Образная арматура](/Arch_Rebar_LShape/ru "Arch Rebar LShape/ru"): Создает L-образный арматурный стержень в выбранном структурном элементе.

- ![](/images/Arch_Rebar_Stirrup.png) [Кольцевая арматура](/Arch_Rebar_Stirrup/ru "Arch Rebar Stirrup/ru"): Создает кольцевой арматурный стержень в выбранном структурном элементе.

- ![](/images/Arch_Rebar_BentShape.png) [Изогнутая арматура](/Arch_Rebar_BentShape/ru "Arch Rebar BentShape/ru"): Создает изогнутый арматурный стержень в выбранном структурном элементе.

- ![](/images/Arch_Rebar_Helical.png) [Спиральная арматура](/Arch_Rebar_Helical/ru "Arch Rebar Helical/ru"): Создает спиральный арматурный стержень в выбранном структурном элементе.

- ![](/images/Arch_Rebar_ColumnReinforcement.svg) [Армировать колонну](/Arch_Rebar_ColumnReinforcement/ru "Arch Rebar ColumnReinforcement/ru"): Добавляет арматуру внутрь указанной прямоугольной колонны.

- ![](/images/Arch_Rebar_BeamReinforcement.svg) [Армировать балку](/Arch_Rebar_BeamReinforcement/ru "Arch Rebar BeamReinforcement/ru"): Добавляет арматуру внутрь указанной балки.

- ![](/images/Arch_Rebar_Slab_Reinforcement.svg) [Армировать плиту](/Arch_Rebar_Slab_Reinforcement/ru "Arch Rebar Slab Reinforcement/ru"): Добавляет арматуру внутрь указанной плиты.

- ![](/images/Arch_Rebar_Footing_Reinforcement.svg) [Армировать фундамент](/Arch_Rebar_Footing_Reinforcement/ru "Arch Rebar Footing Reinforcement/ru"): Добавляет арматуру в указанный фундамент.

- ![](/images/Arch_Rebar.svg) [Арматура по эскизу](/Arch_Rebar "Arch Rebar"): Создает арматурный стержень в выбранном элементе конструкции по эскизу.

- ![](/images/Arch_CurtainWall.svg) [Светопрозрачный фасад](/Arch_CurtainWall/ru "Arch CurtainWall/ru"): Создает светопрозрачный фасад с нуля или на основе выбранного объекта. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/Arch_BuildingPart.png) [Building Part](/Arch_BuildingPart/ru "Arch BuildingPart/ru"): Создает часть здания, включающее выбранные объекты.

- ![](/images/Arch_Project.svg) [Проект](/Arch_Project/ru "Arch Project/ru"): Создает проект, включающий в себя выбранные объекты.

- ![](/images/Arch_Site.svg) [Местность](/Arch_Site/ru "Arch Site/ru"): Создает участок, включающий в себя выбранные объекты.

- ![](/images/Arch_Building.svg) [Здание](/Arch_Building/ru "Arch Building/ru"): Создает здание, включающее выбранные объекты.

- ![](/images/Arch_Floor.svg) [Этаж](/Arch_Floor/ru "Arch Floor/ru"): Создает этаж, включающий выбранные объекты.

- ![](/images/Arch_Reference.svg) [Reference](/Arch_Reference/ru "Arch Reference/ru"): Связывает объекты из другого файла FreeCAD с этим документом.

- ![](/images/Arch_Window.svg) [Окно](/Arch_Window/ru "Arch Window/ru"): Создает окно используя выбранный объект в качестве основы.

- ![](/images/Arch_Roof.svg) [Крыша](/Arch_Roof/ru "Arch Roof/ru"): Создает наклонную крышу от выбранной грани.

- ![](/images/Arch_CompAxis.png) [Инструменты Осей](/Arch_CompAxis/ru "Arch CompAxis/ru")

- ![](/images/Arch_Axis.svg) [Оси](/Arch_Axis/ru "Arch Axis/ru"): Добавляет однонаправленный массив осей.

- ![](/images/Arch_Axis_System.svg) [Система осей](/Arch_AxisSystem/ru "Arch AxisSystem/ru"): Добавляет в документ систему осей, состоящую из нескольких осей.

- ![](/images/Arch_Grid.svg) [Сетка](/Arch_Grid/ru "Arch Grid/ru"): Добавляет в объект построенный по сетке из других объектов.

- ![](/images/Arch_SectionPlane.svg) [Сечение](/Arch_SectionPlane/ru "Arch SectionPlane/ru"): Добавляет объект - секущую плоскость.

- ![](/images/Arch_Space.svg) [Пространство](/Arch_Space/ru "Arch Space/ru"): Создаёт в объект - пространство.

- ![](/images/Arch_Stairs.svg) [Лестница](/Arch_Stairs/ru "Arch Stairs/ru"): Создаёт в документе объект - лестницу.

- ![](/images/Arch_CompPanel.png) [Инструменты панелирования](/Arch_CompPanel/ru "Arch CompPanel/ru"):

- ![](/images/Arch_Panel.svg) [Панель](/Arch_Panel/ru "Arch Panel/ru"): Создает объект панель из выбранного 2D объекта.

- ![](/images/Arch_Panel_Cut.svg) [Панельный контур](/Arch_Panel_Cut/ru "Arch Panel Cut/ru"): Создает плоский контур из панели.

- ![](/images/Arch_Panel_Sheet.svg) [Панельный лист](/Arch_Panel_Sheet/ru "Arch Panel Sheet/ru"): Создает панельный лист для хранения панельных контуров и других плоских объектов.

- ![](/images/Arch_Nest.svg) [Компоновка](/Arch_Nest/ru "Arch Nest/ru"): Позволяет оптимальным образом расположить несколько плоских объектов внутри определенной формы.

- ![](/images/Arch_Equipment.svg) [Оборудование](/Arch_Equipment/ru "Arch Equipment/ru"): Создать объект техника (для комнаты) или мебель.

- ![](/images/Arch_Frame.svg) [Каркас](/Arch_Frame/ru "Arch Frame/ru"): Создает объект каркас из выбранного макета.

- ![](/images/Arch_Fence.svg) [Ограждение](/Arch_Fence/ru "Arch Fence/ru"): Создаёт объект - ограждение из выбранных элементов и пути. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/Arch_Truss.svg) [Ферма](/Arch_Truss/ru "Arch Truss/ru"): Создает ферму по выбранному контуру или с нуля. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile/ru "Arch Profile/ru"): Создает плоский параметрический профиль. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/Arch_CompSetMaterial.png) [Инструменты материалов](/Arch_CompSetMaterial/ru "Arch CompSetMaterial/ru")

- ![](/images/Arch_SetMaterial.svg) [Material](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any.

- ![](/images/Arch_MultiMaterial.svg) [Multi-Material](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any.

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/Arch_CompPipe.png) [Инструменты для создания труб](/Arch_CompPipe/ru "Arch CompPipe/ru")

- ![](/images/Arch_Pipe.svg) [Труба](/Arch_Pipe/ru "Arch Pipe/ru"): Создает трубу.

- ![](/images/Arch_PipeConnector.svg) [Соединитель труб](/Arch_PipeConnector/ru "Arch PipeConnector/ru"): Создает угловое или Т-образное соединение между двумя или тремя указанными трубами.

### Инструменты изменения

Эти инструменты предназначены для изменения архитектурных объектов.

- ![](/images/Arch_CutPlane.svg) [Обрезать плоскостью](/Arch_CutPlane/ru "Arch CutPlane/ru"): Обрезает объект по указанной плоскости.

- ![](/images/Arch_CutLine.svg) [Cut with line](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line.

- ![](/images/Arch_Add.png) [Добавить компонент](/Arch_Add/ru "Arch Add/ru"): Добавляет объекты к компоненту.

- ![](/images/Arch_Remove.svg) [Удалить компонент](/Arch_Remove/ru "Arch Remove/ru"): Вычитает или удаляет объекты из компонента.

- ![](/images/Arch_Survey.svg) [Анализ](/Arch_Survey/ru "Arch Survey/ru"): Переводит или выводит из режима анализа.

### Утилиты

Это дополнительные инструменты, которые помогут вам в решении конкретных задач.

- ![](/images/Arch_Component.svg) [Копмонент](/Arch_Component/ru "Arch Component/ru"): Создает не параметрический архитектурный компонент из объекта верстака Part.

- ![](/images/Arch_CloneComponent.svg) [Clone component](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects (not to be confused with [Draft Clone](/Draft_Clone "Draft Clone")).

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Объединить стены](/Arch_MergeWalls/ru "Arch MergeWalls/ru"): Объединить две и более стены.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC Brep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [3 Views from mesh](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): Creates a spreadsheet to store [IFC](/Arch_IFC "Arch IFC") properties of an object.

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

### Настройки

- ![](/images/Std_DlgParameter.png) [Настройки](/Arch_Preferences/ru "Arch Preferences/ru"): предпочтения для стен, структур, арматуры, окон, лестниц, панелей, труб, сеток и осей.

### Форматы файлов

- [IFC](/Arch_IFC/ru "Arch IFC/ru") : Формат классов строительной индустрии (Industry Foundation Classes)
- [DAE](/Arch_DAE/ru "Arch DAE/ru") : Формат 3D моделей Collada
- [OBJ](/Arch_OBJ/ru "Arch OBJ/ru") : Формат 3D моделей Obj (поддерживается только экспорт)
- [JSON](/Arch_JSON/ru "Arch JSON/ru") : Формат JavaScript Object Notation (поддерживается только экспорт)
- [3DS](/Arch_3DS/ru "Arch 3DS/ru") : Формат 3DS (поддерживается только импорт)
- [SHP](/Arch_SHP/ru "Arch SHP/ru"): GIS Shapefiles (поддерживается только импорт)

## API

Архитектурный верстак может быть задействован в [Python](/Python/ru "Python/ru")-скриптах и [макросах](/Macros/ru "Macros/ru"), посредством [Arch Python API](/Arch_API/ru "Arch API/ru").

## Учебники

- [Переход в FreeCAD из Revit](/Migrating_to_FreeCAD_from_Revit/ru "Migrating to FreeCAD from Revit/ru")
- [Архитектурный рабочий процесс](http://yorik.uncreated.net/guestblog.php?tag=freecad): Пример начального использования FreeCAD в архитектурном процессе.
- [Руководство по архитектурному верстаку Arch](/Arch_tutorial/ru "Arch tutorial/ru") (v. 0.14)
- [Быстрый архитектурный обзор в блоге Yorik'а](http://yorik.uncreated.net/guestblog.php?2012=180) (v. 0.13)
- [Видео презентация верстака Arch](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Руководство по архитектурным панелям](/Arch_panel_tutorial/ru "Arch panel tutorial/ru") (v. 0.15)
- [Глава моделирования BIM из руководства FreeCAD](/Manual:BIM_modeling/ru "Manual:BIM modeling/ru")
- [Импорт из STL или OBJ](/Import_from_STL_or_OBJ/ru "Import from STL or OBJ/ru")
- [Экспорт в STL или OBJ](/Export_to_STL_or_OBJ/ru "Export to STL or OBJ/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/ru&oldid=1433530>"
