---
title: TechDraw "Вставить растровое изображение"
---
|  |
| --- |
| Вставить растровое изображение |
| Расположение в меню |
| TechDraw → Вставить растровое изображение |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Вставить SVG знак](/TechDraw_Symbol/ru "TechDraw Symbol/ru") |
|  |

## Описание

The **TechDraw Image** tool inserts a [bitmap](/Bitmap "Bitmap") image (PNG, TIFF, JPEG, etc.) from a file into the page as a view.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [TechDraw View](/TechDraw_View "TechDraw View") tool can also create an Image View.

![](/images/TechDraw_Image_example.png)

Image inserted in the drawing page

## Применение

1. If there are multiple drawing pages in the document: optionally activate the desired page by selecting it in the [Tree view](/Tree_view "Tree view").
2. Select the **TechDraw → TechDraw Views → ![](/images/TechDraw_Image.svg) Insert Bitmap Image** option from the menu.
3. If there are multiple drawing pages in the document and you have not yet activated a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
4. A file browser opens.
5. Select an image file.
6. An Image View is inserted.
7. Optionally change its Данные**Scale** property to adjust its size.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

An Image View, formally a `TechDraw::DrawViewImage` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Image

* Данные**Image File** (`File`): The file containing this bitmap.
* Данные**Image Included** (`FileIncluded`): Embedded image file. System use only.
* Данные**Width** (`Float`): The width of the cropped image in mm. Only used if Вид**Crop** is `true`.
* Данные**Height** (`Float`): The height of the cropped image in mm. Idem.

### View

Image

* Вид**Crop** (`Bool`): Crop the image to Данные**Width** x Данные**Height**.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Image tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dvi = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewImage','TestImage')
rc = page.addView(dvi)
dvi.ImageFile = "pathToMy/imageFile.png"
dvi.Height = 200
dvi.Width  = 200

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Image/ru&oldid=1490119>"