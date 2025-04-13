---
title: Верстак Image
---

:::caution
TheImage Workbenchis no longer included after version 0.20.Its functionality has been integrated inStd Base. SeeStd ImportandStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

Логотип верстака Image

## Введение

Верстак Image обрабатывает различные типы [растровых](/Bitmap/ru "Bitmap/ru") изображений, и позволяет открыть их в FreeCAD.

## Инструменты

- ![](/images/Image-import.svg) [Open](/Image_Open/ru "Image Open/ru"): открыть изображение в новой точке зрения.
- ![](/images/Image-import-to-plane.svg) [Import to plane](/Image_CreateImagePlane/ru "Image CreateImagePlane/ru"): импортировать изображение на плоскость в окне трёхмерного вида.
- ![](/images/Image-scale.svg) [Scaling](/Image_Scaling/ru "Image Scaling/ru"): масштабировать изображение, импортированное на плоскость.

## Особенности

- Подобно [Sketch](/Sketcher_Workbench/ru "Sketcher Workbench/ru"), импортированное изображение может быть присоединено к одной из главных плоскостей XY, XZ или YZ, и иметь положительное или отрицательное смещение.
- Изображение импортируется в соотношении 1 мм на пиксель.
- Рекомендуется импортировать изображение в разумном разрешении.

## Workflow

## Работа

Основное применение этого верстака в трассировке поверх изображения с помощью инструментов [Draft](/Draft_Workbench/ru "Draft Workbench/ru") или [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru"), для генерации твёрдого тела на основе контуров изображения.

Трассировка эскизированием поверх изображения работает лучше при небольшом отрицательном смещении изображения относительно эскиза, например, -0,1 мм относительно рабочей плоскости. То есть изображение будет немного под плоскостью где Вы рисуете свою двумерную геометрию, так что Вы не рисуете на самом изображении.

Смещение может быть установлено при импорте, или позднее, редактированием положения изображения.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/ru&oldid=1295095>"
