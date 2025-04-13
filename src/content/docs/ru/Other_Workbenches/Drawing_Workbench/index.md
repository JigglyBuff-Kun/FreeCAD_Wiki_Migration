---
title: Верстак Drawing
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Введение

Модуль Черчения позволяет поместить ваши 3D наработки на бумагу. То есть, поместить проекции ваших моделей в 2D окно и вставить это окно в рисунок, например на лист с рамкой, вашим заголовком и логотипом и наконец распечатать всё это.

![](/images/Drawing_extraction.png)

## Инструменты

Это инструменты для создания, настройки и экспортирования 2D чертежных листов

- ![](/images/Drawing_New.png) [Открыть SVG](/Drawing_Open_SVG/ru "Drawing Open SVG/ru"): Открывает чертеж, ранее сохранённый в формате SVG

- ![](/images/Drawing_Landscape_A3.png) [Новый чертеж A3](/Drawing_Landscape_A3/ru "Drawing Landscape A3/ru"): Создает чертёж формата A3 c шаблоном FreeCAD по умолчанию

- ![](/images/Drawing_View.png) [Вставить вид в чертёж](/Drawing_View/ru "Drawing View/ru"): Помещает вид выделенного объекта на активный лист чертежа.

- ![](/images/Drawing_Annotation.png) [Аннотация](/Drawing_Annotation/ru "Drawing Annotation/ru"): Добавляет аннотацию на текущий чертёжный лист

- ![](/images/Drawing_Clip.png) [Клип](/Drawing_Clip/ru "Drawing Clip/ru"): Добавляет группу клипов на текущий чертёжный лист

- ![](/images/Drawing_Openbrowser.png) [Открыть в браузере](/Drawing_Openbrowser/ru "Drawing Openbrowser/ru"): Открывает предварительный просмотр текущего чертёжного листа в браузере

- ![](/images/Drawing_Orthoviews.png) [Вставить ортографические виды](/Drawing_Orthoviews/ru "Drawing Orthoviews/ru"): Автоматически создаёт ортографические виды объекта на текущем чертёжном листе

- ![](/images/Drawing_Symbol.png) [Символ](/Drawing_Symbol/ru "Drawing Symbol/ru"): Добавляет содержимое файла SVG как символ на текущий чертёжный лист

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing/ru "Draft Drawing/ru"): Вставляет специальный вид выбранного объекта на текущий чертёжный лист

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView/ru "Drawing SpreadsheetView/ru"): Вставляет вид выбранного листа электронной таблицы на текущий чертёжный лист

- ![](/images/Drawing_Save.png) [Экспортировать страницу](/Drawing_Save/ru "Drawing Save/ru"): Сохраняет указанный лист в SVG формате

* [Проекция фигуры](/Drawing_ProjectShape/ru "Drawing ProjectShape/ru"): Создаёт проекцию выбранного объекта (источинка) в трёхмерном виде.

* _Примечание:_ Инструмент [Draft Drawing](/Draft_Drawing/ru "Draft Drawing/ru") главным образом используется с [объектами Draft](/Draft_Workbench/ru "Draft Workbench/ru"). Он имеет некоторые дополнительных возможностей кроме стандартных инструментов верстака Drawing, и поддерживает специфические объекты вроде [размеров Draft](/Draft_Dimension/ru "Draft Dimension/ru").

## Workflow

Документ содержит трёхмерный объект-форму (Schenkel), по которому мы хотим сделать чертёж. Поэтому создается "Лист". Лист автоматически получает шаблон, в данном случае шаблон "A3_Landscape". Этот шаблон представляет собой документ [SVG](/SVG/ru "SVG/ru") и может содержать обычную чертежную рамку, ваш логотип или другие элементы.

На этот лист вы можете поместить один и более видов. Каждый вид обладает своей позицией на странице, и коэффициентом масштабирования и другие дополнительные свойства. Каждый раз когда лист или вид или объект на который они ссылаются, изменяются, лист перерисовывается, и отображение листа обновляется.

## Написание сценариев

На данный момент рабочий процес через графический интерфейс пользователя (GUI) очень ограничен, поэтому интересней писать сценарии для API.

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Расширение модуля Drawing

Некоторые примечания по программной стороне модуля были добавлены на страницу [Drawing Documentation](/Drawing_Documentation "Drawing Documentation"). Это для быстрого понимания, как работает модуль Drawing, позволяя программистам быстро начать программирование для него.

## External links

## Внешние ссылки

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/ru&oldid=1462066>"
