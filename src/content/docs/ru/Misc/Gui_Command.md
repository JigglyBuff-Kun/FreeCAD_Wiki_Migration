---
title: Gui Command
---
GuiCommand - одна из наиболее важных функций FreeCAD
при взаимодействии с пользователем. Каждый раз, когда пользователь
выбирает опцию в меню или нажимает на кнопку панели инструментов, активируется GuiCommand. Некоторые из атрибутов GuiCommand:

* Задано имя
* Содержит иконку
* Определена возможности для отмены/повтора
* Есть страница справки
* Открывает и управляет диалогами
* Записывается в макрос
* и.т.д...

## Naming

### Назначение имен

GuiCommand именуются определенным образом: *ИмяМодуля\_ИмяКоманды*
т.е. "Base\_Open" это команда Открыть(Open) графического интерфейса в Base (базовой системе).
GuiCommand в определенном модуле получает имя имя модуля впереди, например "Part\_Cylinder".

Если документ не закончен (в смысле wiki статья) используйте шаблон [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu")

## Help page

### Страница справки

Каждая GuiCommand должна обладать страницей справки. Страница справки должна располагаться в FreeCAD wiki. Статья имеет то же имя, что и GuiCommand, например, [Draft ShapeString](/Draft_ShapeString "Draft ShapeString").

Чтобы создать ваши собственные справочные страницы используйте шаблон:
[GuiCommand model](/GuiCommand_model "GuiCommand model")

Примеры:

* [Draft ShapeString](/Draft_ShapeString "Draft ShapeString")
* [Draft Line](/Draft_Line "Draft Line")

### Иконки

![](/images/Tango-Palette.png)

![](/images/Tango-Palette.png)

Каждая GuiCommand-а должна иметь иконку. Мы используем [Tango набор иконок](http://tango.freedesktop.org/Tango_Desktop_Project%7C) и его принципы. Справа вы можете видеть палитру цветов tango.

Предпочтительней всех, иконки нарисованные в SVG , например с помощью [Inkscape](http://inkscape.org).
Это упрощает добавление изменений и получение дополнительных Иконок в том же пространстве приложения.

### Диаграмма цветового кодирования иконок

![](/images/Colorchart.png)

Мы стараемся насколько возможно следовать этой диаграмме, так что цвета иконок имеют прямое значение.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/ru&oldid=1173293>"