---
title: TechDraw Templates
---
## Description

Every TechDraw page is based on a Template object. The Template provides an area in the page background to insert views, symbols, and other annotation objects, and defines its paper size. Only elements within the drawing area will be rendered for export or printing.

The Template can also hold graphics like a frame defining the drawing area including index fields, folding marks, and optionally a title block that in turn contains fixed and [editable texts](/Svg_Namespace#freecad:editable "Svg Namespace"). The title block can also be inserted separately as a [symbol](/TechDraw_Symbol "TechDraw Symbol").

Templates, like symbols, are [SVG](/SVG "SVG") files which can be created and modified outside of FreeCAD, either with an application such as [Inkscape](https://en.wikipedia.org/wiki/Inkscape), or with a simple text editor. Both can contain editable text fields but they use different edit tools.

A new autofill  tool ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) can automatically fill editable text fields in a template when it is inserted. This requires templates that use the new [freecad:autofill](/Svg_Namespace#freecad:autofill "Svg Namespace") attribute. The following attribute names are valid for autofill: "author", "date", "organization", "scale", "sheet", "title", "page\_number", and "page\_count".

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Template object has the following properties:

Base

* Data**Orientation** (`Enumeration`): `Portrait` or `Landscape`.

Page Properties

* Data**Width** (`Length`): Paper width in mm.
* Data**Height** (`Length`): Paper height in mm.
* Data (Hidden)**Editable Texts** (`Map`): Key:Value list of editable texts in the template.

Template

* Data**Page Result** (`FileIncluded`): A copy of the original Template file including all changes to editable texts. This allows users who may not have a copy of the Template file to see the Page as intended. Not typically useful for end users.
* Data**Template** (`File`): A pointer to the copy of the original Template file which is incorporated into this \*.FCStd file, or a filepath to a template accessible on the current machine. See the [next paragraph](#Select_a_different_template_file) for information on how to change the Template.

## Select a different template file

To select a different template for a drawing:

1. Locate the desired Page object in the [Tree view](/Tree_view "Tree view").
2. Expand the Page node if necessary.
3. Select the Template object.
4. In the [Property editor](/Property_editor "Property editor") click in the Data**Template** property field.
5. Press the ... (ellipsis) button that appears.
6. A file dialog opens the folder the current template is located in. If the Page was created in the current FreeCAD session this will be the default template folder (as set in the [TechDraw Preferences](/TechDraw_Preferences#Files "TechDraw Preferences")).
7. Optionally browse to another folder.
8. Select a different template file.
9. Press the OK button.

If you have modified a template file and want to update a Page created in the current FreeCAD session that uses this template, temporarily select a different file first, and then select the modified file again.

## Custom Templates

A limited number of pre-formatted templates in various standard page sizes are included with FreeCAD. These are found in

```
$INSTALL_DIR/Mod/TechDraw/Templates/

```

Where `$INSTALL_DIR` is the directory where FreeCAD was installed, for example

```
/usr/share/freecad/Mod/TechDraw/Templates/

```

Custom templates can also be specified as a default in the [TechDraw Preferences](/TechDraw_Preferences "TechDraw Preferences").

See also [How to make a custom TechDraw template](/TechDraw_TemplateHowTo "TechDraw TemplateHowTo"), or, if you prefer script generated templates, [TechDraw TemplateGenerator](/TechDraw_TemplateGenerator "TechDraw TemplateGenerator") and [Macro TemplateHelper](/Macro_TemplateHelper "Macro TemplateHelper").

## Notes

* The library FreeCAD uses to process SVG **only supports the svg-tiny specification**. In particular: "SVG Tiny does not support gradients, transparency, clipping, masks, symbols, patterns, underline text, strike through text, vertical text, or SVG filter effects." (from Adobe Illustrator Help). Using these features in your custom template will cause problems in rendering.

* Svg transform clauses **may cause problems** in custom templates. See a Stackoverflow discussion on [removing transform clauses in SVG files](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files), especially if Inkscape used too many of them. But they can't be avoided if you need rotated text in your template.

* The **xml:space="preserve"** clause sometimes causes problems with text size and positioning. It is best to avoid/remove this clause from your custom template's SVG code.

* Templates work best when they contain no extraneous SVG code (called "garbage SVG" by some). There is a good article on [removing garbage from SVG here](https://freecad-gost.ru/news/gost-templates-techdraw-09-01-2020/). The article is in Russian.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Templates/en&oldid=1461800>"