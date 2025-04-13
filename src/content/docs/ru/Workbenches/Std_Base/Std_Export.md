---
title: Команда "Экспортировать..."
---
|  |
| --- |
| Std Export |
| Расположение в меню |
| Файл → Экспорт |
| Верстаки |
| All |
| Быстрые клавиши |
| Ctrl+E |
| Представлено в версии |
| - |
| См. также |
| [Std PrintPdf](/Std_PrintPdf/ru "Std PrintPdf/ru"), [Import Export](/Import_Export/ru "Import Export/ru"), [Import Export Preferences](/Import_Export_Preferences/ru "Import Export Preferences/ru") |
|  |

## Описание

The **Std Export** command exports selected objects to a different file format. Many file formats are supported and for some formats multiple export options exist. See [Import Export](/Import_Export "Import Export") for more information.

## Применение

1. Select one or more objects. To avoid exporting invisible or duplicate objects:
   * Be careful when you use Ctrl+A to select all objects. This will also select invisible objects.
   * Select a [PartDesign Body](/PartDesign_Body "PartDesign Body") by only picking the body itself or its last feature.
   * Select a [Std Group](/Std_Group "Std Group") or a [Std Part](/Std_Part "Std Part") by only picking the parent object itself or the objects nested inside it.
   * Do not use the [Std SelectAll](/Std_SelectAll "Std SelectAll") command as it will also select sub-elements of PartDesign Bodies.
2. There are several ways to invoke the command:
   * Select the **File → ![](/images/Std_Export.svg) Export...** option from the menu.
   * Use the keyboard shortcut: Ctrl+E.
3. Select the correct file format in the dialog box.
4. Enter a filename.
5. Press the Save button.

## Опции

* Нажмите Esc или кнопку Отмена, чтобы отменить выполнение команды.

## Примечания

* To export a [mesh object](/Mesh_Workbench "Mesh Workbench") to a solid file format it must first be converted. See the [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ") tutorial.
* Some workbenches have additional export commands. See [Import Export](/Import_Export "Import Export").

## Настройки

* См. так же: [Настройки Импорта Экспорта](/Import_Export_Preferences/ru "Import Export Preferences/ru").
* Путь к последнему файлу к которому была применена данная команда сохраняется в параметр: **Инструменты → Редактор параметров... → BaseApp → Preferences → General → FileOpenSavePath**.
* Путь к последнему экспортированному файлу сохраняется в параметр: **Инструменты → Редактор параметров... → BaseApp → Preferences → General → FileExportFilter**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Export/ru&oldid=1412876>"