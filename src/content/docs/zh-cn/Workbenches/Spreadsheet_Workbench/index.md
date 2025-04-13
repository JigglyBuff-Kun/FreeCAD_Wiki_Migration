---
title: 电子表格工作台
---

![](/images/Workbench_Spreadsheet.svg)

Spreadsheet workbench icon

## Introduction

[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")电子表格工作台允许您创建和编辑电子表格、执行计算以及从模型中检索数据, 并将其数据导出到其他电子表格应用程序 (如 LibreOffice 或 Microsoft Excel)。

![](/images/Spreadsheet_screenshot.jpg)

![](/images/Spreadsheet_screenshot.jpg)

A spreadsheet with certain cells filled with text and quantities

## Tools

- ![](/images/Spreadsheet_CreateSheet.svg) [Create sheet](/Spreadsheet_CreateSheet "Spreadsheet CreateSheet"): create a new spreadsheet.

- ![](/images/Spreadsheet_Import.svg) [Import](/Spreadsheet_Import "Spreadsheet Import"): import a CSV file into a spreadsheet.

- ![](/images/Spreadsheet_Export.svg) [Export](/Spreadsheet_Export "Spreadsheet Export"): export a CSV file from a spreadsheet.

- ![](/images/Spreadsheet_MergeCells.svg) [Merge cells](/Spreadsheet_MergeCells "Spreadsheet MergeCells"): merge selected cells.

- ![](/images/Spreadsheet_SplitCell.svg) [Split cell](/Spreadsheet_SplitCell "Spreadsheet SplitCell"): split previously merged cells.

- ![](/images/Spreadsheet_AlignLeft.svg) [Align left](/Spreadsheet_AlignLeft "Spreadsheet AlignLeft"): align the contents of selected cells to the left.

- ![](/images/Spreadsheet_AlignCenter.svg) [Align center](/Spreadsheet_AlignCenter "Spreadsheet AlignCenter"): align the contents of selected cells to the center horizontally.

- ![](/images/Spreadsheet_AlignRight.svg) [Align right](/Spreadsheet_AlignRight "Spreadsheet AlignRight"): align the contents of selected cells to the right.

- ![](/images/Spreadsheet_AlignTop.svg) [Align top](/Spreadsheet_AlignTop "Spreadsheet AlignTop"): align the contents of selected cells to the top.

- ![](/images/Spreadsheet_AlignVCenter.svg) [Align vertical center](/Spreadsheet_AlignVCenter "Spreadsheet AlignVCenter"): align the contents of selected cells to the center vertically.

- ![](/images/Spreadsheet_AlignBottom.svg) [Align bottom](/Spreadsheet_AlignBottom "Spreadsheet AlignBottom"): top align the contents of selected cells to the bottom.

- ![](/images/Spreadsheet_StyleBold.svg) [Style bold](/Spreadsheet_StyleBold "Spreadsheet StyleBold"): toggle the contents of selected cells to/from bold.

- ![](/images/Spreadsheet_StyleItalic.svg) [Style italic](/Spreadsheet_StyleItalic "Spreadsheet StyleItalic"): toggle the contents of selected cells to/from italic.

- ![](/images/Spreadsheet_StyleUnderline.svg) [Style underline](/Spreadsheet_StyleUnderline "Spreadsheet StyleUnderline"): toggle the contents of selected cells to/from underlined.

- ![](/images/Spreadsheet_SetAlias.svg) [Set alias](/Spreadsheet_SetAlias "Spreadsheet SetAlias"): set the alias for a selected cell.

* Black and White set the foreground and the background colors of selected cells.

## Preferences

- ![](/images/Preferences-spreadsheet.svg) [Preferences](/Spreadsheet_Preferences "Spreadsheet Preferences"): the preferences for the Spreadsheet Workbench. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Removing cells can be dangerous

Note that deleting or removing cells with data can break the spreadsheet and your model if it relies on the spreadheet. You are not prewarned if this happens.

## Insert and remove rows and columns

Rows and columns can be inserted or removed by right-clicking a row or column header and selecting the appropriate option from the contex menu. It is possible to select multiple rows or columns first. Either by holding down the Ctrl key while selecting the headers, or by holding down the left mouse button and dragging.

## Edit cells

The content of a cell can be edited by selecting the cell and entering a value in the **Content** inputbox at the top of the window. To edit a cell in-place, select it and press F2, or double-click it.

## Delete cells

To delete one or more cells select them and press Del. This will delete their contents, their properties and their aliases. To only delete the content of a cell it should be edited instead.

## Cut and copy-paste cells

Cut and copy-paste operations can be used on spreadsheets cells. You can use the normal shortcuts for these operations: Ctrl+X, Ctrl+C and Ctrl+V respectively. To select multiple cells hold down the Ctrl key while selecting, or hold down the left mouse button and drag to select a rectangular cell range.

The cut and copy operations store the contents, properties and aliases of the cells on the Clipboard. The paste operation writes the data in such a way that the content of the top left cell of the stored data is dropped in the active cell. Other stored content is placed relative to that cell. Formulas are updated accordingly. Aliases are only pasted if they are unique.

## 单元格的属性

可以使用右键单击单元格来编辑电子表格单元格的属性。以下对话框弹出:

![](/images/SpreadsheetCellPropDialog.png)

它有几个选项卡。可以更改以下属性:

- 文本颜色和背景颜色
- 文本水平和垂直对齐 \* 文本样式: 粗体、斜体、下划线
- 此单元格的显示单位。请阅读下面的章节。
- 为此单元格定义别名。此别名可用于单元格公式, 也可以在 FreeCAD 表达式中中使用 [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

## Cell expressions

A spreadsheet cell may contain a number, a text or an expression. Expressions must start with an equal sign '='.

Cell expressions may contain numbers, functions, references to other cells, and references to properties of the model (But see [Current limitations](#Current_limitations) below). A cell can be referenced by its address (CAPITAL column letter + row number, e.g. B4) or by its [alias](/Spreadsheet_SetAlias "Spreadsheet SetAlias").

**Note:** Cell expressions are treated by FreeCAD as programming code. Therefore, when you edit a cell the content you see may not follow your display settings:

- The decimal separator is always a dot. But commas can also be used when entering values.
- The number of displayed decimals can differ from your [preferences settings](/Preferences_Editor#Units "Preferences Editor").

References to objects in the model are explained under [References to CAD-data](#References_to_CAD-data) below. Using spreadsheet cell values to define model properties are explained under [Spreadsheet data in expressions](#Spreadsheet_data_in_expressions) below. For more information on expressions and the available functions, see [Expressions](/Expressions "Expressions").

## Interaction between spreadsheets and the CAD model

Data in the cells of a spreadsheet may be used in CAD model parameter expressions. Thus, a spreadsheet may be used as the source for parameter values used throughout a model, effectively gathering the values in one place. When values are changed in the spreadsheet, they are propagated throughout the model.

Similarly, properties from CAD model objects may be used in expressions in spreadsheet cells. This allows use of object properties like volume or area in the spreadsheet. If the name of an object in the CAD model is changed, the change will automatically be propagated to any references in spreadsheet expressions using the name which was changed.

More than one spreadsheet may be used in a document. A spreadsheet can be identified using either its name or its label.

FreeCAD will automatically assign a unique name to a spreadsheet when it is created. These names follow the pattern `Spreadsheet`, `Spreadsheet001`, `Spreadsheet002` and so on. The name can not be changed, and it is not visible in the properties of the spreadsheet. It can be used to refer to the spreadsheet in an [Expression](/Expressions "Expressions") (see [Spreadsheet data in expressions](#Spreadsheet_data_in_expressions) below.)

The label of a spreadsheet is automatically set to the name of the spreadsheet upon creation. Unlike the name, the label can be changed, for example in the properties panel or using the context menu action Rename. By default FreeCAD does not accept duplicate labels, but there is a [preference](/Preferences_Editor#Document "Preferences Editor") to override this. Spreadsheets with duplicate labels in the same document cannot be referenced by their label.

FreeCAD checks for cyclic dependencies. See [Current limitations](/Spreadsheet_Workbench#Current_limitations "Spreadsheet Workbench").

## 对 CAD 数据的引用

可以在电子表格中使用结构中的数据。
下表显示了一些示例, 假设模型有一个名为 "立方体" 的功能 (请注意, 这是功能的内部名称, 而不是用户指定的标签):

| CAD-Data                   | 在电子表格中调用           | 结果                |
| -------------------------- | -------------------------- | ------------------- |
| 零件工作台立方体的参数长度 | =Cube.Length               | 长度单位 mm         |
| 立方体的体积               | =Cube.Shape.Volume         | 没有单位 mm³ 体积   |
| 立方体形状的类型           | =Cube.Shape.ShapeType      | String: Solid       |
| 立方体的标签               | =Cube.Label                | String: Cube        |
| 立方体质量中心的 x 坐标    | =Cube.Shape.CenterOfMass.x | 无单位 mm 的 x 坐标 |

The following table shows some examples assuming the model has a feature named "MyCube":

| CAD-Data                                       | Cell in Spreadsheet            | Result                         |
| ---------------------------------------------- | ------------------------------ | ------------------------------ |
| Parametric Length of a Part-Workbench Cube     | `=MyCube.Length`               | Length with units mm           |
| Volume of the Cube                             | `=MyCube.Shape.Volume`         | Volume in mm³ without units    |
| Type of the Cube-shape                         | `=MyCube.Shape.ShapeType`      | String: Solid                  |
| Label of the Cube                              | `=MyCube.Label`                | String: MyCube                 |
| X coordinate of the center of mass of the Cube | `=MyCube.Shape.CenterOfMass.x` | Coordinate in mm without units |

## 在表达式中的电子表格数据

In order to use spreadsheet data in other parts of FreeCAD, you will usually create an [Expression](/Expressions "Expressions") that refers to the spreadsheet and the cell that contains the data you want to use. You can identify spreadsheets by name or by label, and you can identify the cells by address or by alias. Autocompletion is available for all forms of referencing.

|                 | Spreadsheet by Name       | Spreadsheet by Label         |
| --------------- | ------------------------- | ---------------------------- |
| Cell by Address | `=Spreadsheet042.B5`      | `=<<MySpreadsheet>>.B5`      |
| Cell by Alias   | `=Spreadsheet042.MyAlias` | `=<<MySpreadsheet>>.MyAlias` |

The recommended way to refer to spreadsheet data is to use the spreadsheet label and cell alias name. For a more in-depth explanation of the pros and cons of the referencing modes, see the expanded section below.

Using the spreadsheet label has the advantage that it can be freely changed to describe the contents of the spreadsheet. It is also easier to identify the spreadsheet that is being used since the text in the expression matches the label shown in the model and property views. If you decide to change the label of a spreadsheet, existing references to the contents of the spreadsheet will be updated, so you won't break your expressions by renaming the spreadsheet. The internal name of the spreadsheet is not readily available anywhere except within the expression editor, so if you use the internal name and later decide to rename the spreadsheets, you might have a hard time tracing your expression data back to its source.

Be aware that when you create a new spreadsheet, the name and the label are the same, so it is easy to accidentally use the spreadsheet name instead of the label. A simple way to avoid this is to give the spreadsheet a meaningful name before starting to use it in expressions.

While you may use the row and column number in an expression to reference a cell, best practice is to give the cell an alias name and use that. See [Cell properties](#Cell_properties) on how to set the alias. For example, if the data in cell B1 contained the length parameter for an object, an alias name of `MyObject_Length` would allow the value to be referred to as `<<MyParams>>.MyObject_Length` instead of `Spreadsheet.B1`. Besides being much easier to read and understand, alias names are also much easier to change if you decide to adjust the structure of your spreadsheet. Using an alias also has the advantage that it is reasier to see which cells are used to control other parts of the document. Note that FreeCAD will automatically adjust the positional references in expressions if you insert or remove rows and columns in the spreadsheet, so even if you use row and column numbers in an expression, you can insert rows and columns without breaking the references to the surrounding cells.

### Complex models and recomputes

Editing a spreadsheet will trigger a recompute of the 3D model, even if the changes do not affect the model. For a complex model a recompute can take a long time, and having to wait after every single edit is of course quite annoying.

There are three solutions to deal with this:

1. Temporarily skip recomputes:
   - In the [Tree view](/Tree_view "Tree view") right-click the ![](/images/Document.svg) document that contains the spreadsheet.
   - Select the **Skip recomputes** option from the context menu.
   - There is a big disadvantage to this solution. New values entered in the spreadsheet will not be displayed until the document is recomputed. Instead `#PENDING` is shown.
   - You can either recompute manually, using the [Std Refresh](/Std_Refresh "Std Refresh") command, or disable **Skip recomputes** when you are done editing.
2. Use a macro to automatically skip recomputes while editing a spreadsheet:
   - Download and run [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
   - This solution saves a few steps compared to the first solution, but also has the mentioned disadvantage.
3. Put the spreadsheet in a separate [FreeCAD file](/File_Format_FCStd "File Format FCStd"):
   - You can reference spreadsheet data from an external .FCStd file with this syntax: `=NameOfFile#<<MySpreadsheet>>.MyAlias`.
   - The advantage of having the spreadsheet in another file over switching off recomputes is that the spreadsheet itself does get recomputed.
   - The disadvantage is that the model won't automatically recompute after changes to the spreadsheet.
   - In the scenario where you first open the 'spreadsheet' file, change one or more values and then open the 'model' file, there won't be any indication that the model needs to be recomputed. But if both files are open the [Std Refresh](/Std_Refresh "Std Refresh") icon will update correctly for the 'model' file after changes to the 'spreadsheet' file.

## 单位

电子表格使用单位。如果一个数字有一个单位, 这个单位将用于所有的计算。
两个单位 mm 的长度相乘将会赋一个以 mm² 为单位的值给区域。

If a cell contains a value which represents a dimension, it should be entered with its associated unit. While in many simple cases one can get by with a dimensionless value, it is unwise to not enter the unit. If a value representing a dimension is entered without its associated unit, there are some sequences of operations which cause FreeCAD to complain of incompatible units in an expression when it appears the expression should be valid. (This may be better understood by viewing [this thread](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) in the FreeCAD forums.)

您可以在对话框中将长度单位从 mm 切换到英寸, 然后在单元格上右键单击。
单元格现在将显示长度 (以英寸为单位)。用于计算的值不会更改。
当输入的显示单位更改时, 使用该值的公式的结果不会更改。结果仍按 mm 的长度计算。

单元格属性对话框不能在带单位的数字中更改一个没有单位的数字。
没有单位的数字可以放在一个单位字符串, 这也将显示, 但单元格仍然只包含一个数字没有单位。

有时是刻意, 以摆脱一个单位。这只能通过乘以 1 与一个倒数单位来完成。

## 导入与导出

### CSV format

可以将工作表导入并导出到 [csv](https://en.wikipedia.org/wiki/Comma-separated_values) 格式, 这些形式也可以由大多数其他电子表格应用程序 (如 Microsoft Excel 或 LibreOffice 计算器) 读取和写入。将文件导入 FreeCAD 时, 分隔符 (用于分隔列的字符) 必须是 TAB 字符 (可以在从其他应用程序导出时设置)。

### XLSX format

Excel 中的电子表格-格式 "xlsx " 可以导入到 FreeCAD 文档中。Excel 电子表格也可以通过 FreeCAD 打开。在这种情况下将创建一个带有电子表格的新文档。支持以下功能:

- FreeCAD 电子表格中还提供的所有功能。其他函数在导入后的相应单元格中会出现错误。
- 单元格的别名
- 在 Excel 工作表中有多个表。在这种情况下, 将创建更多的 FreeCAD 电子表格。

其他功能不会被导入到 FreeCAD 电子表格中。Excel 导入是 FreeCAD [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17") 的功能。

## Printing

To handle the page setup necessary for printing, FreeCAD spreadsheets are printed by inserting them into a [TechDraw Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView").

## 当前限制

这是不可能提供一个几何的数据, 例如一个长度, 在电子表格和检索在同一个电子表格中生成形状的体积。这将创建一个循环引用。这是一个设计决定。但是, 可以使用两个不同的电子表格: 一个是几何图形的数据源, 另一个用于报告几何数据。

## Cell binding

[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

It is possible to bind the content of cells to other spreadsheet cells. This can be useful when dealing with large tables or to get cell content from another spreadsheet.

### Create binding

To bind, for example, the cell range A3-C4 to the cell range B1-D2:

1. Select the cell range A3-C4.
2. Right-click and select **Bind...** from the context menu.
3. The **Bind Spreadsheet Cells** dialog opens.
4. Set the range B1-D2 for the **To cells**:
   ![](/images/Spreadsheet_binding-dialog.png)
5. Press OK.
6. Bound cells have a blue border to highlight the binding.
7. If you now enter something in cell C1, the same will immediately appear in cell B3.

![](/images/Spreadsheet_binding-result.png)

The spreadsheet may now look like this

### Change binding

1. Right-click a bound cell (there is no need to highlight the whole bound range) and select **Bind...** from the context menu.
2. The **Bind Spreadsheet Cells** dialog opens.
3. Change one or more options. Note that the **Bind cells**, the bound cell range, cannot be changed.
4. Press OK.

### Remove binding

1. Right-click a bound cell (there is no need to highlight the whole bound range) and select **Bind...** from the context menu.
2. The **Bind Spreadsheet Cells** dialog opens.
3. Press Unbind.

### Notes

- The **Hide dependency of binding** option can be used to prevent problems with cyclic dependencies between spreadsheets. Selecting it is necessary when, for example, cells in _Spreadsheet A_ are bound to _Spreadsheet B_, while cells in _Spreadsheet B_, in turn, are bound to some other cells in _Spreadsheet A_. This option should be used with caution:
  - Hiding dependencies can be dangerous because broken dependencies can damage your FreeCAD file. For example, when you delete a spreadsheet you will not be warned about hidden dependencies.
  - When you open a document with a spreadsheet containing a hidden dependency, you will get the spreadsheet marked to be recomputed. This is because a cyclic dependency cannot be recomputed automatically. To recompute the [Std Refresh](/Std_Refresh "Std Refresh") tool must be used.
- The cell binding has a range check and warns you about mismatched ranges. For example binding 1x3 cells to 3x2 cells cannot work because it is unknown which 3 cells of the original 6 cells should be used.
- You cannot change the cell range of an existing binding. You must first unbind the cells and then create a new binding.
- The frame color indicating the binding cannot be changed yet.

## Configuration tables

[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

You can use Spreadsheets to create configuration tables with sets of predefined parameters for your model, and then dynamically change which configuration to use. See the [Configuration Tables](/Configuration_Tables "Configuration Tables") tutorial. Read [this Forum post](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183) if you want to know more about the inner workings of this feature.

## Scripting

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet", "MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set("A1", "10mm")
sheet.recompute()
sheet.get("A1")

sheet.setAlias("B1", "Diameter")
sheet.set("Diameter", "20mm")
sheet.recompute()
sheet.get("Diameter")

# sheet.get() results in an error if the cell is empty.
# sheet.getContents() can be used to check the cell first.
if sheet.getContents("C1"):
    print(sheet.get("C1"))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_Workbench/zh-cn&oldid=1506744>"
