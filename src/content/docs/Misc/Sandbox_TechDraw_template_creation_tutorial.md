---
title: Sandbox TechDraw template creation tutorial
---

:::caution
This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days.
:::

|                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutorial                                                                                                                                       |
| Topic                                                                                                                                          |
| Drafting                                                                                                                                       |
| Level                                                                                                                                          |
| Beginner                                                                                                                                       |
| Time to complete                                                                                                                               |
| (needs assessment)                                                                                                                             |
| Authors                                                                                                                                        |
| [ThanklessLiving](https://wiki.freecadweb.org/User:ThanklessLiving) [wandererfan](http://freecadweb.org/wiki/index.php?title=User:wandererfan) |
| FreeCAD version                                                                                                                                |
| 0.19                                                                                                                                           |
| Example files                                                                                                                                  |
| _None_                                                                                                                                         |
| See also                                                                                                                                       |
| _None_                                                                                                                                         |
|                                                                                                                                                |

## Introduction

This tutorial shows you how to create an [SVG](/SVG "SVG") file that can be used as the background [template](/TechDraw_Templates "TechDraw Templates") for the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") pages. This is intended to be a parallel version for [wandererfan's template tutorial](/TechDraw_TemplateHowTo "TechDraw TemplateHowTo") because I personally found the guide to be a bit too hard to follow from a beginner standpoint. Here so my aim is to make a version intended for beginners that includes more information and guidance.

This tutorial assumes you have relatively little experience with [Inkscape](https://en.wikipedia.org/wiki/Inkscape) and [SVG](/SVG "SVG"), as well as FreeCAD and the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

In this tutorial we're going to make a simple template for US Letter or ISO 216 A4 size paper in landscape orientation. The process is the same for any paper size and once you've finished your first template, it's relatively easy to create templates for other page sizes and orientations.

A copy of the result of this tutorial is **not** available in

```
$INSTALL_DIR/Mod/TechDraw/Templates/HowToExample.svg

```

Where `$INSTALL_DIR` is the directory where FreeCAD was installed, for example

```
/usr/share/freecad/Mod/TechDraw/Templates/HowToExample.svg

```

## Create the base document

1. Open a new document in Inkscape. All of the following steps will be carried out within Inkscape. During this tutorial, FreeCAD and TechDraw are only useful for inspecting the state of your template by opening the TechDraw workbench, clicking [![TechDraw PageTemplate](/images/TechDraw_PageTemplate.svg)](/TechDraw_PageTemplate "TechDraw PageTemplate ") [TechDraw PageTemplate](/TechDraw_PageTemplate "TechDraw PageTemplate") and selecting the template you are working on.

2. Use the built-in XML Editor **Edit → XML Editor...** or Shift+Ctrl+X) to add a "freecad" namespace clause to the `<svg>` item.

- Select the topmost <svg> item and press the + located on the top left of the contents window to create a new entry
- In the **Name** field of the new item, paste `xmlns:freecad`
- In the **Attribute** field, paste `"https://wiki.freecad.org/index.php?title=Svg_Namespace"`. Press Enter to confirm the edit to the namespace; if you just click away, the edit will revert.

Note that your editable texts will _not_ work if you use "https://...", even though the wiki is reached via https these days. Since SVG is a human readable format you could also enter the line above into the file with a text editor.

![](/images/InkXMLNameSpace.png)

Inkscape: XML Editor adding the "freecad" namespace clause to the <svg> item

3. Set up some references

The finished template is likely to turn out irregular and messy if made without any references for the placement of lines, text and other items.

- Open **File → Document Properties → Grids** and click New to create a new grid.
- A set of grid properties will shown, adjust these to your liking. For example, to get a 1 by 1 mm grid, set **Grid units:** to mm ![](/images/ComboBox.svg) and both **Spacing X:** and **Spacing Y:** to 1.0 ![](/images/SpinBox.svg)
- Also, you can set the interval of major grid lines for easier readability by changing the **Major grid line every:** parameter.

4. Set page size

In Document Properties (**File → Document Properties** or Shift+Ctrl+D)

- Select page size "US Letter" or "A4" and orientation "landscape".
- Set default units to "mm". For US Letter, set the page size to width "279.4" and height "215.9". For A4 you would use "210" and "297".

![](/images/InkDocProp.png)

Inkscape: document with page size and orientation

## Create the template drawing

5. Draw the template geometry

The draft needs some base geometry to frame all the written information you wish to convey. If your draft needs to follow a standard, consult the standard on what exactly you need to draw. Otherwise, it is up to you what you decide to add to your template.

If you don't know where to start, consider the following list of elements that are almost universally found on technical drawings:

- Page frame lines - a rectangular frame offset from the page edges by a certain distance
- Information box - a well-organized set of boxes for containing written information related to the drawing, usually located in the bottom-right corner

Different fields of design and engineering have different requirements for the information required to be shown in the drawing. For example, a drawing of an individual part (metal, plastic, wood) needs to be accompanied by the material that it's made of.

7. Add and position text

Not everything about an object can be efficiently conveyed with views and dimensions, so usually it is necessary to add some kind of written information to the drawing.

Before adding any text, you should decide which font you want/need to use throughout your draft. If you need to follow a standard, it likely includes one or multiple accepted fonts. Otherwise, you are free to choose any font you like, though it should be kept in mind that some are easier to read than others and thus your choice of font directly affects the quality of your draft and its ability to convey information.

Try [osifont](https://github.com/hikikomori82/osifont) if you want to have a font that's both available for free, available in multiple languages and also compliant with ISO 3098 specification.

Here is some information that is almost universally written on drafts:

- Part/assembly/drawing designation
- Name of depicted object/assembly or general drawing title
- Names of people directly involved in the design and engineering of the object
- Name of organization where the drawing is produced
- Intended paper size and main drawing view scale (a good idea for electronically stored drawings)

8. The finished template should look something like this:

![](/images/InkFinishedArt.png)

Inkscape: tentative template layout

## Create editable fields

9. Add tags to each text element

- Use the XML Editor to add a `freecad:editable` tag to each editable `<text>` item. The process is similar to adding the freecad namespace clause as described in section 2. Select the <svg:text> item that you want to make editable and add a new attribute. For 'name,' write freecad:editable and for 'value,' assign a meaningful name. Caution: if two or more text items share the same name, they will also display the same text.

![](/images/InkXMLeditableTag.png)

Inkscape: XML Editor adding the "freecad:editable" property to the desired <text> item

## Adjust size of the SVG

10. Use the XML editor to adjust the `viewBox` attribute to match your page size in millimeters.

- It is four values, in the format `"0 0 width height"`

![](/images/InkXMLviewBox.png)

Inkscape: XML Editor adjusting the viewbox to match the page size in millimeters

11. Your template will now appear much bigger than desired.

![](/images/InkMuchTooBig.png)

Inkscape: tentative template layout exceeding the page size

12. We need to shrink it.

- **Edit → Select All in All Layers**, or box select and select all.
- Adjust the W: and H: spinboxes to match your artwork's size in millimeters.
- Set it to the page size less any applicable margins, for example, W: 250, and H: 200.

13. Use "Align and Distribute" or the X: and Y: spinboxes to position the artwork within the limits of the page if required.

14. Your template should now look right, just like it did in the finished artwork picture above.

## Remove transformans on the SVG

15. Ensure that all your editable texts are "ungrouped" with Shift+Ctrl+g.

16. Select everything on your page, **Edit → Select All**, and then **Edit → Copy** (Ctrl+c).

17. Then delete the current layer, **Layer → Delete Current Layer**.

: Note: if you deleted the layer already (in your layer panel is no layer listed) this step is not required. In that case you should select all (Ctrl+a), cut the selection (Ctrl+x) and paste it with the command in the next step.

18. Then paste, **Edit → Paste in Place**.

: **Note:** This command prevents that the text positions are stored in transform tags. It's important that you do not use the normal paste command!

19. Your template should now look right and shouldn't have any unwanted transforms.

20. Save your template.

21. Try it in FreeCAD and [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") with [TechDraw PageTemplate](/TechDraw_PageTemplate "TechDraw PageTemplate").

![](/images/FCTemplateHow.png)

FreeCAD: finished template with an editable text field being modified

## Notes

Don't use Layers in Inkscape until you've mastered template creation without them. Layers and Groups can automatically insert unwanted transforms into your [SVG](/SVG "SVG") file.

As a final step before using your new template, make sure to remove any transform clauses from the Svg code. Transform clauses **will cause problems**.

See a Stackoverflow discussion on [removing transform clauses in SVG files](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files).

If you do not see the green boxes for your editable texts, there might be something wrong with your document scale. Open your file in Inkscape again and confirm the values of the viewBox and the sizes are matching.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:TechDraw_template_creation_tutorial&oldid=1477629>"
