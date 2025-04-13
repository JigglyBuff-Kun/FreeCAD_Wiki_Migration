---
title: Exportar
---
|  |
| --- |
| Std Export |
| Menu location |
| File → Export... |
| Workbenches |
| All |
| Default shortcut |
| Ctrl+E |
| Introduced in version |
| - |
| See also |
| [Std PrintPdf](/Std_PrintPdf "Std PrintPdf"), [Import Export](/Import_Export "Import Export"), [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences") |
|  |

## Descrição

O comando **Exportar** exporta objetos selecionados para um formato de arquivo diferente. Muitos formatos de arquivo são suportados e para alguns formatos existem várias opções de exportação. Consulte [Importar Exportar](/Import_Export/pt-br "Import Export/pt-br") para obter mais informações.

## Uso

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

## Options

* Press Esc or the Cancel button to abort the command.

## Notes

* To export a [mesh object](/Mesh_Workbench "Mesh Workbench") to a solid file format it must first be converted. See the [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ") tutorial.
* Some workbenches have additional export commands. See [Import Export](/Import_Export "Import Export").

## Preferences

* See [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Export/pt-br&oldid=1412885>"