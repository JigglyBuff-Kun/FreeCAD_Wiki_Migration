---
title: Команда "Открыть"
---
|  |
| --- |
| Открыть... |
| Расположение в меню |
| [Файл](/Std_File_Menu/ru "Std File Menu/ru") → Открыть... |
| Верстаки |
| All |
| Быстрые клавиши |
| Ctrl+O |
| Представлено в версии |
| - |
| См. также |
| [Импортировать файл](/Std_Import/ru "Std Import/ru"), [Создать файл](/Std_New/ru "Std New/ru") |
|  |

## Описание

The **Std Open** command opens a file. If the file is not a native FreeCAD file (\*.FCStd) its geometry will be imported into a new document. See [Std Import](/Std_Import "Std Import") for more information.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_Open.svg) [Open...](/Std_Open "Std Open") button.
   * Select the **File → ![](/images/Std_Open.svg) Open...** option from the menu.
   * Use the keyboard shortcut: Ctrl+O.
2. Optionally select the correct file format in the dialog box.
3. Select a file.
4. Press the Open button.

## Опции

* Нажмите Esc или кнопку Отмена, чтобы отменить выполнение команды.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

To open a document use the `open(filepath)` method or the `openDocument(filepath, [hidden=False])` method of the FreeCAD application.

These methods create and return a document and load a project file into it. The `filepath` argument must be a string pointing to an existing file. If the file doesn't exist or the file cannot be loaded an I/O exception is thrown. In this case the created document is kept, but will be empty. If `hidden=True` is used, the document won't be displayed in the GUI and no tab will appear for it. This allows performing automatic operations on a document and closing it without disrupting the user interface.

Примеры составления скрипта смотри в описании команды ["Создать"](/Std_New#Scripting/ru "Std New").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Open/ru&oldid=1448576>"