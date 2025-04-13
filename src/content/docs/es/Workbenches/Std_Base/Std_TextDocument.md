---
title: Std TextDocument
---
|  |
| --- |
| Std TextDocument |
| Menu location |
| Tools → Add text document |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [Draft ShapeString](/Draft_ShapeString "Draft ShapeString"), [Draft Text](/Draft_Text "Draft Text") |
|  |

## Descripción

The **Std TextDocument** command creates an object capable of holding arbitrary text. This element can be used to write general information or documentation about the model.

## Uso

1. Select the **Tools → ![](/images/Std_TextDocument.svg) Add text document** option from the menu.
2. Double-click the newly created object in the [Tree view](/Tree_view "Tree view") to open a tab in which to write text.
3. Add text.
4. Close the tab and save the file when asked.

## Propiedades

### Vista

Editor

* Vista**Font Name** (`Font`): a font name, for example, `Ubuntu Mono`.
* Vista**Font Size** (`Float`): a font size in points, for example, `11`.
* Vista**Read Only** (`Bool`): it defaults to `false`. If set to `true` the text cannot be edited.
* Vista**Syntax Highlighter** (`Enumeration`): it defaults to `None`. If set to `Python`, the text will be highlighted like the [Python console](/Python_console "Python console").

## Programación

*Ver también:* [Conceptos básicos de scripting en FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es"), y [Objetos con scripting](/Scripted_objects/es "Scripted objects/es").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to a document.

An `App::TextDocument` object is created with the `addObject()` method of the document. Once a TextDocument exists, its textual information is stored in its `Text` attribute. This attribute can be used in other objects, for example, as the string in a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString").

```
import FreeCAD as App
import Draft

doc = App.newDocument()
obj = doc.addObject("App::TextDocument", "Text_document")
obj.Text = "textual information"
doc.recompute()

obj2 = Draft.makeShapeString(obj.Text, "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 10)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TextDocument/es&oldid=1457310>"