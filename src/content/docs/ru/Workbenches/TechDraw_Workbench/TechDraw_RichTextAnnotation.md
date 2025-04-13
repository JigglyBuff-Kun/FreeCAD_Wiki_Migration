---
title: TechDraw "Вставка аннотаций форматированным текстом"
---
|  |
| --- |
| Вставка аннотаций форматированным текстом |
| Расположение в меню |
| TechDraw → Заметки → Вставка аннотаций форматированным текстомs |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Шаблоны](/TechDraw_Templates/ru "TechDraw Templates/ru"), [Draft SVG](/Draft_SVG/ru "Draft SVG/ru"), [Добавить Линию-выноску в Вид](/TechDraw_LeaderLine/ru "TechDraw LeaderLine/ru") |
|  |

## Описание

The **TechDraw RichTextAnnotation** tool adds a formatted annotation block to a [Leaderline](/TechDraw_LeaderLine "TechDraw LeaderLine") or a View.

![](/images/TechDraw_RichTextBlock_sample.png)

Stand alone RichTextAnnotation

## Применение

1. If there are multiple drawing pages in the document: optionally activate the desired page by selecting it in the [Tree view](/Tree_view "Tree view").
2. To attach the RichTextAnnotation to a [Leaderline](/TechDraw_LeaderLine "TechDraw LeaderLine"), select the line in the [Tree view](/Tree_view "Tree view") or on the page.
3. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_RichTextAnnotation.svg) [Insert Rich Text Annotation](/TechDraw_RichTextAnnotation "TechDraw RichTextAnnotation") button.
   * Select the **TechDraw → Annotations → ![](/images/TechDraw_RichTextAnnotation.svg) Insert Rich Text Annotation** option from the menu.
4. If there are multiple drawing pages in the document and you have not yet activated a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
5. A task panel opens.
6. The task panel allows quick entry of text.
7. The Start Rich Text Editor button opens a full featured editor:
   1. When done, press the ![](/images/Document-save.svg) button to save your changes and close the editor.
8. Press the OK button to close the task panel.

## Примечания

* After creation a RichTextAnnotation can be edited by double clicking it on the page.

## Свойства

* Данные**X,Y**: The location of the block. Relative to the end of the line if attached to a [Leaderline](/TechDraw_LeaderLine "TechDraw LeaderLine"), otherwise this is the position on the page.
* Данные**ShowFrame**: Draws an outline around the block.
* Данные**MaxWidth**: Limits the horizontal size of the block. A value of -1 is for unlimited width.
* Данные**AnnoText**: The HTML text of the block.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The RichTextAnnotation tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console.

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
blockObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawRichAnno','DrawRichAnno')
FreeCAD.activeDocument().myPage.addView(blockObj)
blockObj.X = 5
blockObj.Y = 5
blockObj.AnnoText = myHTMLText

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RichTextAnnotation/ru&oldid=1486110>"