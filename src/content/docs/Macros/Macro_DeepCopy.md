---
title: DeepCopy
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro DeepCopy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Select a part in the tree, run the macro and it will create a compound with a copy of all its shapes. The part hierarchy is lost as well as all the special functionalities of the children of the original part. For example subparts, bodies, sketches, ... will be lost and their shape will be copied. Macro version: 1.0 Last modified: 2018-03-16 FreeCAD version: V0.17 and above Download: [ToolBar Icon](https://wiki.freecad.org/images/0/0a/Macro_DeepCopy.png) Author: galou_breizh |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://wiki.freecad.org/images/0/0a/Macro_DeepCopy.png)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2018-03-16                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| V0.17 and above                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Description

Select a part in the tree, run the macro and it will create a compound with a copy of all its shapes. The part hierarchy is lost as well as all the special functionalities of the children of the original part. For example subparts, bodies, sketches, ... will be lost and their shape will be copied.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Conversion/DeepCopy.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Conversion/DeepCopy.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Conversion/DeepCopy.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Conversion/DeepCopy.FCMacro>">raw code</a>

## Script

ToolBar Icon ![](/images/Macro_DeepCopy.png)

**Macro_DeepCopy.FCMacro**

```
__Name__ = 'Deep Copy'
__Comment__ = 'Takes a part and makes a compound out of it'
__License__ = 'Apache-2.0'
__Web__ = 'https://wiki.freecad.org/Macro_DeepCopy'
__Wiki__ = 'https://wiki.freecad.org/Macro_DeepCopy'
__Icon__ = 'https://wiki.freecad.org/images/0/0a/Macro_DeepCopy.png'
__Help__ = 'Select a part and launch'
__Author__ = 'galou_breizh'
__Version__ = '1.0.0'
__Status__ = 'Stable'
__Requires__ = 'FreeCAD >= v0.17'
__Files__ = 'Macro_DeepCopy.png'

import FreeCAD as app
import FreeCADGui as gui

def deep_copy(doc):
    for sel_object in gui.Selection.getSelectionEx():
        deep_copy_part(doc, sel_object.Object)

def deep_copy_part(doc, part):
    if part.TypeId != 'App::Part':
        # Part is not a part, return.
        return

    copied_subobjects = []
    for o in get_all_subobjects(part):
        copied_subobjects += copy_subobject(doc, o)

    compound = doc.addObject('Part::Compound', 'Copy of ' + part.Label)
    compound.Links = copied_subobjects
    doc.recompute()

def get_all_subobjects(o):
    """Recursively get all subobjects

    Subobjects of objects having a Shape attribute are not included otherwise each
    single feature of the object would be copied. The result is that bodies,
    compounds, and the result of boolean operations will be converted into a
    simple copy of their shape.
    """
    # Depth-first search algorithm.
    discovered = []
    # We do not need an extra copy for stack because OutList is already a copy.
    stack = o.OutList
    while stack:
        v = stack.pop(0)
        if v not in discovered:
            discovered.append(v)
            if not hasattr(v, 'Shape'):
                stack += v.OutList
    return discovered

def copy_subobject(doc, o):
    """Copy the shape of an object

    Some GUI attributes are also copied
    """
    copied_object = []
    if not hasattr(o, 'Shape') or o.Shape.isNull():
        return copied_object
    vo_o = o.ViewObject
    try:
        copy = doc.addObject('Part::Feature', o.Name + '_Shape')
        copy.Shape = o.Shape
        copy.Label = 'Copy of ' + o.Label
        copy.Placement = o.getGlobalPlacement()

        vo_copy = copy.ViewObject
        vo_copy.ShapeColor = vo_o.ShapeColor
        vo_copy.LineColor = vo_o.LineColor
        vo_copy.PointColor = vo_o.PointColor
        vo_copy.DiffuseColor = vo_o.DiffuseColor
        vo_copy.Transparency = vo_o.Transparency
    except AttributeError:
        pass
    else:
        copied_object = [copy]
    return copied_object

if __name__ == '__main__':
    doc = app.activeDocument()
    if doc:
        deep_copy(doc)
    else:
        app.Console.PrintWarning('No active document')
```

[code on GitHub](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Conversion/DeepCopy.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_DeepCopy/en&oldid=1345236>"
