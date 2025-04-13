---
title: Arch Анализ
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Survey |
| Расположение в меню |
| Архитектура → Опрос/анкетирование |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [FCInfo (macro)](/Macro_FCInfo/ru "Macro FCInfo/ru") |
|  |

## Описание

Инструмент ![](/images/Arch_Survey.svg) Анализ переходит в специальный режим отображения, который позволяет быстро захватывать измерения и информацию с модели и передавать эту информацию другим приложениям. Когда вы находитесь в режиме Анализа, выбор различных под элементов трехмерных объектов предоставляет следующую информацию (в зависимости от того, что вы выбираете):

* Если вы нажмете на край, вы получите его длину
* Если вы нажмете на вершину, вы получите ее высоту (координату по оси Z)
* Если вы нажмете на фасетка, вы получите его площадь
* Если вы дважды щелкните что-нибудь, поэтому выберите весь объект, вы получите его объем

When such a piece of information is gathered, several things happen:

* A label is placed on top of the element you clicked, that displays the value (with "a" for area, "l" for length, "z" for height, or "v" for volume)
* The numeric value is copied to the clipboard, so you can paste it in another application
* A line is printed on the FreeCAD output window. After you exit the survey mode, those lines can be copied and pasted in another application (the values are comma-separated, making it easy to convert to spreadsheet data)
* The total length or area of the elements you clicked so far is also printed in the output window
* Each length or area is also recorded in the task dialog

![](/images/Arch_Survey_example.jpg)

*The above image shows what happens when running the survey mode.*

## Usage

1. Select the **Utils → ![](/images/Arch_Survey.svg) Survey** option from the menu.
2. Click on vertices, edges, faces or double-click to select whole objects.
3. Click outside any geometry (on the background of the 3D view) to remove existing labels, print a total line in the Task dialog, and restart counting lengths and areas from zero.
4. Press Esc or the Close button to exit survey mode and remove all the labels.

## Options

* You can add a custom label to any line in the Task dialog by clicking that line, then adding a text in the description field, then press the **set description** button.
* Once you are done, before closing, you can export the contents of the Task dialog by pressing the "export CSV" button. The resulting CSV file can then be opened in any spreadsheet application such as Excel or LibreOffice Calc. The values and units will be separated in the resulting CSV file, and the totals are written as SUM() functions.

![](/images/Arch_Survey_spreadsheet.jpg)

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Survey tool doesn't have a programming interface, but gathering the same information from any selected [Part](/Part_Workbench "Part Workbench")-based object is reproduced with the following script:

```
import FreeCADGui

selection = FreeCADGui.Selection.getSelectionEx()

for obj in selection:
    for element in obj.SubObjects:
        print("Area: %f", element.Area)
        print("Length: %f", element.Length)
        print("Volume: %f", element.Volume)
        print("Center of Mass: %f", element.CenterOfMass)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Survey/ru&oldid=1438566>"