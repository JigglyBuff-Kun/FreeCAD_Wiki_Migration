---
title: TechDraw "Вставить электронную таблицу"
---
|  |
| --- |
| Вставить электронную таблицу |
| Расположение в меню |
| TechDraw → Вставить электронную таблицу |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru"), [Spreadsheet](/Spreadsheet_Workbench/ru "Spreadsheet Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **TechDraw SpreadsheetView** tool allows you to place a view of a selected [spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench") on a [Page](/TechDraw_Workbench "TechDraw Workbench").

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [TechDraw View](/TechDraw_View "TechDraw View") tool can also create a Spreadsheet View.

![](/images/TechDraw_Spreadsheetview.png)

Spreadsheet element inserted in the TechDraw drawing page

## Применение

1. Select a spreadsheet in the [Tree view](/Tree_view "Tree view").
2. If there are multiple drawing pages in the document: optionally add the desired page to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. Select the **TechDraw → Views From Other Workbenches → ![](/images/TechDraw_SpreadsheetView.svg) Insert Spreadsheet View** option from the menu.
4. If there are multiple drawing pages in the document, and if no page is displayed in the [Main view area](/Main_view_area "Main view area") and you have not yet selected a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
5. A Spreadsheet View is inserted.
6. Adjust the cell range of the view by changing its Данные**Cell Start** and Данные**Cell End** properties.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Spreadsheet View, formally a `TechDraw::DrawViewSpreadsheet` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Drawing view

* Данные (Hidden)**Symbol** (`String`): The SVG code defining this symbol.
* Данные (Hidden)**Editable Texts** (`StringList`): Substitution values for the editable strings in this symbol. Not used.
* Данные**Owner** (`Link`): Feature to which this symbol is attached. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Spreadsheet

* Данные**Source** (`Link`): The spreadsheet to be added to the page.
* Данные**Cell Start** (`String`): The top left cell of the cell range to be included in this view.
* Данные**Cell End** (`String`): The bottom right cell of the cell range to be included in this view.
* Данные**Font** (`Font`): The name of the font used for texts.
* Данные**Text Color** (`Color`): The color of texts and lines that have no color specified in the spreadsheet.
* Данные**Text Size** (`Float`): The font size of texts.
* Данные**Line Width** (`Float`): The width of the cell borders.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SpreadsheetView/ru&oldid=1490174>"