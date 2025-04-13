---
title: Импорт полигональных сеток в FreeCAD
---
## Post-Import

## Операции после импорта

После импорта сетки для FreeCAD модель будет представлять собой набор граней. Вам захочется преобразовать модель в форму, обрабатываемую FreeCAD, и это можно сделать внутри FreeCAD.

Для этого:

* Переключитесь на верстак Part
* Выберите сетку, и выберите в меню Деталь --> Создание формы из сетки
* Нажмите OK в диалоговом окне
* Выберите вновь созданную форму
* Выберите в меню Деталь -> Преобразовать в твердое
* Выбрать вновь созданное твёрдое тело
* Выбрать в меню Деталь -> [Уточнить форму](/index.php?title=Refine_shape/ru&action=edit&redlink=1 "Refine shape/ru (page does not exist)")

Последний шаг не обязателен, но это очистит тело от его от ненужных кромок на плоских и цилиндрических поверхностях.

## Errors

### "cannot convert because shape is not a shell"

## Что делать, если получено сообщение об ошибке: "cannot convert because shape is not a shell"?

Вероятно, ваша форма содержит ошибки, возможно, она не замкнута (имеет дыры). Поскольку возможности верстака Mesh в FreeCAD пока еще ограничены, вам следует попробовать проверить и восстановить вашу модель с помощью сторонних программ. После этого попробуйте импортировать и конвертировать вашу модель заново.

## Какие программы можно использовать для проверки/исправления сеточной модели?

* [Meshlab](http://meshlab.sourceforge.net/)
  + Лицензия: Open Source (GPL V2)
  + Работает на Windows 32/64 bit, Linux и Mac OS X

* [netFabb basic](http://www.netfabb.com/downloadcenter.php?basic=1)
  + Лицензия: Freeware
  + Работает на Windows XP/7/8, Linux и Mac OS X

## Tutorials

## Учебники

* [Импорт из файлов формата STL или OBJ](/Import_from_STL_or_OBJ/ru "Import from STL or OBJ/ru")
* [Экспорт в файлы формата STL или OBJ](/Export_to_STL_or_OBJ/ru "Export to STL or OBJ/ru")

## Related

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_Mesh_Import/ru&oldid=1231739>"