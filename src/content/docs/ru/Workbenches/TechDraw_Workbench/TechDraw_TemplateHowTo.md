---
title: Разработка шаблона для TechDraw
---
|  |
| --- |
| Руководство |
| Тема |
| Drafting |
| Уровень |
| Intermediate |
| Время для завершения |
| 60 минут |
| Авторы |
| [wandererfan](http://freecadweb.org/wiki/index.php?title=User:wandererfan) |
| FreeCAD версия |
| 0.17 |
| Примеры файлов |
| *None* |
| Смотрите также |
| *None* |
|  |

## Введение

This tutorial shows you how to create an [SVG](/SVG "SVG") file that can be used as the background [template](/TechDraw_Templates "TechDraw Templates") for the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") pages.

This tutorial assumes you are moderately familiar with [Inkscape](https://en.wikipedia.org/wiki/Inkscape) and [SVG](/SVG "SVG"), as well as FreeCAD and the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

We're going to make a simple template for US Letter size paper in landscape orientation.

A copy of the result of this tutorial is available in

```
$INSTALL_DIR/Mod/TechDraw/Templates/HowToExample.svg

```

Where `$INSTALL_DIR` is the directory where FreeCAD was installed, for example

```
/usr/share/freecad/Mod/TechDraw/Templates/HowToExample.svg

```

## Create base document

1. Open a new document in Inkscape.

2. In Document Properties

* Select page size "US Letter" or "A4" and orientation "landscape".
* Set default units to "mm", and the page size to width "279.4" and height "215.9". For DIN-A4 you would use "210" and "297".

![](/images/InkDocProp.png)

Inkscape: document with page size and orientation

3. Use the XML Editor to add a "freecad" namespace clause to the `<svg>` item.

* 0.20 and below: `xmlns:freecad="http://www.freecadweb.org/wiki/index.php?title=Svg_Namespace"`

:   Note that your editable texts will *not* work if you use "https://...", even though the wiki is reached via https these days.

* 0.21 and above: `xmlns:freecad="https://www.freecad.org/wiki/index.php?title=Svg_Namespace"`

Since SVG is a human readable format you can also enter the line above into the file with a text editor.

![](/images/InkXMLNameSpace.png)

Inkscape: XML Editor adding the "freecad" namespace clause to the <svg> item

## Create template drawing

4. Draw outlines, zone numbers, center lines, and other geometry.

5. Draw the boxes and lines for the title block.

6. Add and position your static text.

7. Add and position the text that will be editable.

8. You now have your finished artwork, that should look something like this:

![](/images/InkFinishedArt.png)

Inkscape: tentative template layout

## Create editable fields

9. Use the XML Editor to add a `freecad:editable` tag to each editable `<text>` item.

* Assign a meaningful field name to each editable text.

![](/images/InkXMLeditableTag.png)

Inkscape: XML Editor adding the "freecad:editable" property to the desired <text> item

## Adjust size of the SVG

10. Use the XML editor to adjust the `viewBox` attribute to match your page size in millimeters.

* It is four values, in the format `"0 0 width height"`

![](/images/InkXMLviewBox.png)

Inkscape: XML Editor adjusting the viewbox to match the page size in millimeters

11. Your template will now appear much bigger than desired.

![](/images/InkMuchTooBig.png)

Inkscape: tentative template layout exceeding the page size

12. We need to shrink it.

* **Edit → Select All in All Layers**, or box select and select all.
* Adjust the W: and H: spinboxes to match your artwork's size in millimeters.
* Set it to the page size less any applicable margins, for example, W: 250, and H: 200.

13. Use "Align and Distribute" or the X: and Y: spinboxes to position the artwork within the limits of the page if required.

14. Your template should now look right, just like it did in the finished artwork picture above.

## Remove transformans on the SVG

15. Ensure that all your editable texts are "ungrouped" with Shift+Ctrl+g.

16. Select everything on your page, **Edit → Select All**, and then **Edit → Copy** (Ctrl+c).

17. Then delete the current layer, **Layer → Delete Current Layer**.

:   Note: if you deleted the layer already (in your layer panel is no layer listed) this step is not required. In that case you should select all (Ctrl+a), cut the selection (Ctrl+x) and paste it with the command in the next step.

18. Then paste, **Edit → Paste in Place**.

:   **Note:** This command prevents that the text positions are stored in transform tags. It's important that you do not use the normal paste command!

19. Your template should now look right and shouldn't have any unwanted transforms.

20. Save your template. When you use Inkscape, save it preferably as **Plain SVG** because FreeCAD can only handle the features of the SVG 1.1 specification. **Plain SVG** will remove any Inkscape-specific XML tags.

21. Try it in FreeCAD and [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") with [Insert Page using Template](/TechDraw_PageTemplate "TechDraw PageTemplate").

![](/images/FCTemplateHow.png)

FreeCAD: finished template with an editable text field being modified

## Notes

Don't use Layers in Inkscape until you've mastered template creation without them. Layers and Groups can automatically insert unwanted transforms into your [SVG](/SVG "SVG") file.

As a final step before using your new template, make sure to remove any transform clauses from the Svg code. Transform clauses **will cause problems**.

See a Stackoverflow discussion on [removing transform clauses in SVG files](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files).

If you do not see the green boxes for your editable texts, there might be something wrong with your document scale. Open your file in Inkscape again and confirm the values of the viewBox and the sizes are matching.

If texts appear offset in FreeCAD, you may need to remove the `xml:space="preserve"` attributes in the SVG file. See: <https://www.forum.freecadweb.org/viewtopic.php?t=50897>.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_TemplateHowTo/ru&oldid=1498850>"