---
title: DeepCopy
---

|                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DeepCopy                                                                                                                                                                                                                                                      |
| Descrizione                                                                                                                                                                                                                                                   |
| Crea un composto formato da una copia tutte le forme di una parte Versione macro: 1.0 Ultima modifica: 2018-03-16 Versione FreeCAD: V0.17 e successive Download: [ToolBar Icon](https://wiki.freecad.org/images/0/0a/Macro_DeepCopy.png) Autore: galou_breizh |
| Autore                                                                                                                                                                                                                                                        |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                            |
| Download                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://wiki.freecad.org/images/0/0a/Macro_DeepCopy.png)                                                                                                                                                                                       |
| Link                                                                                                                                                                                                                                                          |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                      |
| Versione macro                                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                                           |
| Data ultima modifica                                                                                                                                                                                                                                          |
| 2018-03-16                                                                                                                                                                                                                                                    |
| Versioni di FreeCAD                                                                                                                                                                                                                                           |
| V0.17 e successive                                                                                                                                                                                                                                            |
| Scorciatoia                                                                                                                                                                                                                                                   |
| _Nessuna_                                                                                                                                                                                                                                                     |
| Vedere anche                                                                                                                                                                                                                                                  |
| _Nessuno_                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                               |

## Descrizione

Seleziona una parte nell'albero, esegui la macro e creerai un composto con una copia di tutte le sue forme. La gerarchia delle parti viene persa e tutte le funzionalità speciali dei bambini della parte originale. Per esempio sottoparti, corpi, schizzi, ... andranno persi e la loro forma sarà copiata.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_DeepCopy/it&oldid=1350417>"
