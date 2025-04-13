---
title: Верстак Raytracing
---

:::caution
TheRaytracing Workbenchis no longer included after version 0.20.The externalRender Workbenchshould be used instead.
:::
![](/images/Workbench_Raytracing.svg)

Логотип верстака Raytracing

## Введение

![](/images/Workbench_Raytracing.svg) Верстак Raytracing предназначен для создания фотореалистичной изображения ваших моделей с помощью внешних программ рендеринга.

Модуль работает с помощью [шаблонов](/Raytracing_templates/ru "Raytracing templates/ru"), это файлы проектов, определяющих сцену для вашей объёмной модели. Вы можете поместить свет и геометрию, вроде плоскости земли, и там содержится место для позиции камеры и для указания материалов объектов этой сцены. Проект может быть экспортирован в готовый для рендеринга файл, или отрисован напрямую в FreeCAD.

В настоящее время поддерживаются два визуализатора: [POV-Ray](/POV-Ray/ru "POV-Ray/ru") и [LuxRender](/LuxRender/ru "LuxRender/ru"). Чтобы иметь возможность визуализации из FreeCAD, нужна хотя бы одна из этих программ, установленная и сконфигурированная в Вашей системе. Но даже если ни одного визуализатора не установлено, Вы можете экспортировать файл проекта для визуализации впоследствии.

Верстак Raytracing по сути устарел. Ведётся новая разработка [верстака Render](https://github.com/FreeCAD/FreeCAD-render), который предназначен для его замены. Этот верстак полностью запрограммирован на Python, поэтому его гораздо проще расширить, чем текущий верстак, который запрограммирован на C ++. Тем не менее, информация на этой странице в целом полезна для нового верстака, так как оба модуля работают в основном одинаково.

![](/images/Raytracing_example.jpg)

## Типивой рабочий процесс

1. Создайте или откройте прокет FreeCAD, добавьте некоторые твердотельные объекты модулей ([Part](/Part_Workbench/ru "Part Workbench/ru") или [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru")); сетки пока не поддерживаются.
2. Создайте проект трассировки лучей (для povray или luxrender).
3. Выделите объекты, которые Вы хотите добавить в проект трассировки лучей и добавьте их.
4. Экспортируйте файл проекта или визуализируйте его напрямую.

![](/images/Raytracing_Workbench_workflow.svg)

Работа верстака Raytracing; верстак готовит файл проекта из данного шаблона, затем вызывает внешнюю программу для визуализации сцены. Внешний визуализатор может использоваться независимо от FreeCAD.

## Инструменты

### Инструменты проекта

Это главные инструменты для экспорта Вашей трёхмерной работы во внешние визуализаторы.

- ![](/images/Raytracing_New.svg) [Новый проект Pov-Ray](/Raytracing_New/ru "Raytracing New/ru"): Вставляет в документ новый проект PovRay
- ![](/images/Raytracing_Lux.svg) [Новый проект LuxRender](/Raytracing_Lux/ru "Raytracing Lux/ru"): Вставляет в документ новый проект LuxRender
- ![](/images/Raytracing_InsertPart.svg) [Вставить деталь](/Raytracing_InsertPart/ru "Raytracing InsertPart/ru"): Вставляет вид объекта Part в проект визуализации
- ![](/images/Raytracing_ResetCamera.svg) [Сброс камеры](/Raytracing_ResetCamera/ru "Raytracing ResetCamera/ru"): Сопоставляет позицию камеры проекта трассировки лучей с текущим видом
- ![](/images/Raytracing_ExportProject.svg) [Экспортировать проект](/Raytracing_ExportProject/ru "Raytracing ExportProject/ru"): Экспортирует проект визуализации в файл сцены для отрисовки во внешнем визуализаторе
- ![](/images/Raytracing_Render.svg) [Визуализировать](/Raytracing_Render/ru "Raytracing Render/ru"): Визуализирует проект трассировки лучей во внешнем визуализаторе

### Утилиты

Это вспомогательные инструменты для ручного выполнения особых задач.

- ![](/images/Raytracing_WriteView.svg) [Экспорт вида в POV-Ray](/Raytracing_WriteView/ru "Raytracing WriteView/ru"): Записывает активный трёхмерный вид с камерой и содержимым в файл povray
- ![](/images/Raytracing_WriteCamera.svg) [Экспорт вида в POV-Ray](/Raytracing_WriteCamera/ru "Raytracing WriteCamera/ru"): Экспортирует позицию камеры активного трёхмерного вида в формате POV-Ray в файл
- ![](/images/Raytracing_WritePart.svg) [Экспортировать деталь в POV-Ray](/Raytracing_WritePart/ru "Raytracing WritePart/ru"): Записывает выделенный объект Part как файл povray

## Настройки

- ![](/images/Preferences-raytracing.svg) [Preferences](/Raytracing_Preferences/ru "Raytracing Preferences/ru"): Доступные настройки для инструментов Raytracing.

## Учебники

- [Базовый учебник Raytracing](/Raytracing_tutorial/ru "Raytracing tutorial/ru")
- [Учебник Raytracing среднего уровня](/Tutorial_FreeCAD_POV_ray/ru "Tutorial FreeCAD POV ray/ru")

## Ручное создание файла povray

Описанные выше вспомогательные инструменты позволяют экспортировать текущий трёхмерный вид и его содержимое в файл [Povray](http://www.povray.org/). Сначала вы должны загрузить или создать данные САПР и расположить ориентацию трёхмерного вида по своему желанию. Затем выберите из меню трассировки "Вспомогательные → Экспорт вида...".

![](/images/FreeCAD_Raytracing.jpg)

У Вас уточнят положение для сохранения итогового файла \*.pov. После этого Вы можете открыть его в [Povray](http://www.povray.org/) и визуализировать:

![](/images/Povray.jpg)

Как обычно, в визуализаторе Вы сможете сделать большие и красивые картинки:

![](/images/Scharniergreifer_render.jpg)

## Программирование

Смотрите [Примеры программного интерфейса Raytracing](/Raytracing_API_example/ru "Raytracing API example/ru") для информации о создании сцен через программирование.

## Ссылки

### POV-Ray

- [POV-Ray страница в данной wiki](/POV-Ray "POV-Ray")
- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://en.wikipedia.org/wiki/POV-Ray>

### LuxRender

- [LuxRender страница в данной wiki](/LuxRender "LuxRender")
- <http://www.luxrender.net/>

### Рендеры, которые могут быть реализованы в будущем

- <http://www.yafaray.org/>
- <http://www.mitsuba-renderer.org/>
- <http://www.kerkythea.net/>
- <http://www.artofillusion.org/>

## Exporting to Kerkythea

Although direct export to the Kerkythea XML-File-Format is not supported yet, you can export your Objects as Mesh-Files (.obj) and then import them in Kerkythea.

- if using Kerkythea for Linux, remember to install the WINE-Package (needed by Kerkythea for Linux to run)
- you can convert your models with the help of the mesh workbench to meshes and then export these meshes as .obj-files
- If your mesh-export resulted in errors (flip of normals, holes ...) you may try your luck with [netfabb studio basic](http://www.netfabb.com/downloadcenter.php?basic=1)

: Free for personal use, available for Windows, Linux and Mac OSX.
: It has standard repair tools which will repair you model in most cases.

- another good program for mesh analysing/repairing is [Meshlab](http://sourceforge.net/projects/meshlab/)

: Open Source, available for Windows, Linux and Mac OSX.
: It has standard repair tools which will repair you model in most cases (fill holes, re-orient normals, etc.)

- you can use "make compound" and then "make single copy" or you can fuse solids to group them before converting to meshes
- remember to set in Kerkythea an import-factor of 0.001 for obj-modeler, since Kerkythea expects the obj-file to be in m (but standard units-scheme in FreeCAD is mm)

: Within WIndows 7 64-bit Kerkythea does not seem to be able to save these settings.
: So remember to do that each time you start Kerkythea

- if importing multiple objects in Kerkythea you can use the "File → Merge" command in Kerkythea

## Разработка

Эти страницы ссылаются на новую рабочую среду, запрограммированную на Python, предназначенную для замены текущей Raytracing Workbench.

- [Верстак Render](https://github.com/FreeCAD/FreeCAD-render)
- [Верстак Render](https://forum.freecadweb.org/viewtopic.php?f=9&t=25933) (только анонс, без дискуссии)
- [FreeCAD Renderer Workbench improvements](https://forum.freecadweb.org/viewtopic.php?t=39168)

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/ru&oldid=1260828>"
