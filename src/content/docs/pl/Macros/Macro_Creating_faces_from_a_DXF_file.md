---
title: Makrodefinicja Utwórz ścianę z pliku DXF
---

|                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Creating faces from a DXF file                                                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                                                                           |
| This macro create face from a DXF file, the "Layer" are recognized separate and trained in groups. Macro version: 01.00 Last modified: 2014-10-29 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/03/Macro_Creating_faces_from_a_DXF_file.png) Author: shoogen |
| Author                                                                                                                                                                                                                                                                                                |
| [shoogen](/index.php?title=User:Shoogen&action=edit&redlink=1 "User:Shoogen (page does not exist)")                                                                                                                                                                                                   |
| Download                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/03/Macro_Creating_faces_from_a_DXF_file.png)                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                 |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                      |
| Macro Version                                                                                                                                                                                                                                                                                         |
| 01.00                                                                                                                                                                                                                                                                                                 |
| Date last modified                                                                                                                                                                                                                                                                                    |
| 2014-10-29                                                                                                                                                                                                                                                                                            |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                    |
| All                                                                                                                                                                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                |
| See also                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                       |

## Description

This macro create face from a DXF file, the "Layer" are recognized separate and trained in groups.

There must be groups in the file.

## Uses

Launch the macro all objects are analyzed and transformed into faces.

Note: an unclosed object return an error

## Script

ToolBar Icon ![](/images/Macro_Creating_faces_from_a_DXF_file.png)

**Macro_Creating_faces_from_a_DXF_file.FCMacro**

```
import FreeCAD,Part,OpenSCAD2Dgeom
doc = App.ActiveDocument
for group in doc.findObjects('App::DocumentObjectGroup'):
    try:
        edges=sum((obj.Shape.Edges for obj in group.Group \
                if hasattr(obj,'Shape')),[])
        face = OpenSCAD2Dgeom.edgestofaces(edges)
        faceobj = doc.addObject('Part::Feature','face_%s' % group.Name)
        faceobj.Label = 'face_%s' % group.Label
        faceobj.Shape = face
    except Part.OCCError: # Exception: #
        FreeCAD.Console.PrintError('Error in Group %s (%s)' % (group.Name,group.Label)+"\n")
```

## Link

Forum [Creating faces from a DXF file](http://forum.freecadweb.org/viewtopic.php?f=3&t=8144)

Here an example [Generate 3D solid from intersection of three imported 2D](http://forum.freecadweb.org/viewtopic.php?f=3&t=8280&p=67863#p67840)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Creating_faces_from_a_DXF_file/pl&oldid=1149583>"
