---
title: Std SendToPythonConsole
---

|                               |
| ----------------------------- |
| Std SendToPythonConsole       |
| Menu location                 |
| Edit → Send to Python Console |
| Workbenches                   |
| All                           |
| Default shortcut              |
| Ctrl+Shift+P                  |
| Introduced in version         |
| 0.19                          |
| See also                      |
| _None_                        |
|                               |

## Description

The **Std SendToPythonConsole** command creates variables in the [Python console](/Python_console "Python console") referencing a selected object and its selected subshapes, along with some other useful references. The variables and the code involved can be used in the development of Python code.

Depending on the selected object and its selected subshapes, if any, the following variables are created:

| Variable name | Referenced object(s)                                                                                                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `doc`         | The document containing the selected object                                                                                                                                                                            |
| `lnk`         | The selected Link object (only created if the selected object is a Link)                                                                                                                                               |
| `obj`         | Depending on the selected object: The selected object itself (if the selected object is not a Link) The Linked object (if the selected object is a Link)                                                               |
| `shp`         | Depending on the type of `obj`: The `Shape` property of `obj` (for objects derived from the `Part::Feature` class) The `Mesh` property of `obj` (for Mesh objects) The `Points` property of `obj` (for Points objects) |
| `sub`         | The first selected subshape (only created if at least one subshape is selected)                                                                                                                                        |
| `subs`        | A list containing all subshapes (only created if two or more subshapes are selected)                                                                                                                                   |

```
>>> ### Begin command Std_SendToPythonConsole
>>> try:
>>>     del(doc,lnk,obj,shp,sub,subs)
>>> except Exception:
>>>     pass
>>>
>>> doc = App.getDocument("Unnamed")
>>> lnk = doc.getObject("Link")
>>> obj = lnk.getLinkedObject()
>>> shp = obj.Shape
>>> sub = obj.getSubObject("Edge10")
>>> subs = [obj.getSubObject("Edge10"),obj.getSubObject("Face3"),obj.getSubObject("Vertex5"),]
>>> ### End command Std_SendToPythonConsole

```

Example output: an edge, a face, and a vertex of a [Link](/Std_LinkMake "Std LinkMake") to a [Part Box](/Part_Box "Part Box") were selected

## Usage

1. Select a single object or one or more subshapes belonging to a single object.
2. There are several ways to invoke the command:
   - Select the **Edit → ![](/images/Std_SendToPythonConsole.svg) Send to Python Console** option from the menu.
   - Select the **![](/images/Std_SendToPythonConsole.svg) Send to Python Console** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.
   - Use the keyboard shortcut: Ctrl+Shift+P.
3. If required the [Python console](/Python_console "Python console") opens.
4. The [Python console](/Python_console "Python console") receives the keyboard focus.

## Notes

- All previously created variables are deleted each time the command is run.

- If the selected object is a Link (`App::Link`) and the Linked object is derived from the `Part::Feature` class, the `shp` variable will be the shape of the Linked object. If the Link has been transformed or scaled and you want to access the scaled/transformed shape, you can do so with this code:

: ```
lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/en&oldid=1448992>"
