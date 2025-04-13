---
title: Part Установить цвет
---
|  |
| --- |
| Установить цвет |
| Расположение в меню |
| Context menu → Установить цвет |
| Верстаки |
| [Part](/Part_Workbench/ru "Part Workbench/ru"), [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Внешний вид](/Std_SetAppearance/ru "Std SetAppearance/ru") |
|  |

## Описание

The **Part ColorPerFace** command sets the display properties of selected faces. To change a whole object use [Std SetAppearance](/Std_SetAppearance "Std SetAppearance") instead.

This page has been updated for version 1.0.

![](/images/Part_ColorPerFace_Taskpanel.png)

The Set appearance per face task panel

## Применение

1. Select a single object.
2. There are several ways to invoke the command:
   * If the [Part Workbench](/Part_Workbench "Part Workbench") is active: press the ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace") button.
   * Select the **View → ![](/images/Part_ColorPerFace.svg) Color per face** option from the menu.
   * Select the **![](/images/Part_ColorPerFace.svg) Set appearance per face...** option from the [Tree view](/Tree_view "Tree view") context menu.
3. The **Set appearance per face** task panel opens.
4. Select one or more faces:
   * Hold down Ctrl to select mutliple faces.
   * Optionally press the Box selection button, click in an empty area and drag a rectangle to select all faces belonging to the object that are (partially) inside the rectangle. Multiple box selections can be specified.
5. Do one of the following:
   * Select a material from the list.
     1. Optionally press the Launch editor button to launch the [Material editor](/Material_Edit "Material Edit").
   * Specify a **Custom appearance**:
     1. Press the ... button.
     2. The **Material properties** dialog box opens:  
        ![](/images/Material_Properties_Dialog.png)
     3. These properties can be edited:
        + **Ambient color**: color of the shadows on the object.
        + **Diffuse color**: actual/base color of the object.
        + **Emissive color**: color of the light radiating from the object.
        + **Specular color**: color of the highlight (reflection) on a shiny surface of the object.
        + **Shininess**
        + **Transparency**
     4. Optionally press the Reset button to change the appearance to that defined by the material.
     5. Optionally press the Default button to change the appearance to match the current [preferences](/PartDesign_Preferences#Shape_appearance "PartDesign Preferences").
     6. Press the Close button when done.
   * Press the Set to default button to change the appearance to that defined by the material.
6. Optionally select one or more new faces whose properties you want to change.
7. Press the OK button to close the task panel and finish the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ColorPerFace/ru&oldid=1540626>"