---
title: Rutnätskopiering
---
|  |
| --- |
| ArrayCopy |
| Beskrivning |
| Detta makro kopierar det valda objektet flera gånger, på ett matris  Versions makro : 1.0 Datum senaste ändring : 2014-05-04 FreeCAD-versionen : All Ladda ner : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/Macro_ArrayCopy.png) Författare : Yorik |
| Författare |
| [Yorik](/User:Yorik "User:Yorik") |
| Ladda ner |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/Macro_ArrayCopy.png) |
| länkar |
| [Makros recept](/Macros_recipes/sv "Macros recipes/sv") [Så här installerar du makron](/How_to_install_macros/sv "How to install macros/sv") [Hur man anpassar verktygsfält](/Customize_Toolbars/sv "Customize Toolbars/sv") |
| Makroversion |
| 1.0 |
| Datum senaste ändring |
| 2014-05-04 |
| FreeCAD Version(s) |
| All |
| Standard genväg |
| *None* |
| Se även |
| *None* |
|  |
|  |

## Deskription

Detta makro kopierar det valda objektet flera gånger på ett rutnät. Du kan definiera antalet rader, kolumner och avståndet mellan dem.

## Script

ToolBar Icon ![](/images/Macro_ArrayCopy.png)

**Macro\_ArrayCopy.FCMacro**

```
import FreeCAD, FreeCADGui, Part
from PySide import QtGui,QtCore
 
def proceed():
    try:
        u = (int(l1.text()),float(l2.text()))   
        v = (int(l3.text()),float(l4.text()))
    except:
        FreeCAD.Console.PrintError("Wrong input! Only numbers allowed...\n")
    sel = FreeCADGui.Selection.getSelection()
    if sel:
        sel = sel[0]
        name = sel.Name   
        shape = sel.Shape
        for column in range(u[0]):
            for row in range(v[0]):
                if (column != 0) or (row != 0):
                    delta = FreeCAD.Vector(column*u[1],row*v[1],0)   
                    newshape = sel.Shape.copy()
                    newshape.translate(delta)
                    newobject = FreeCAD.ActiveDocument.addObject("Part::Feature",name)
                    newobject.Shape = newshape
    else:
        FreeCAD.Console.PrintError("Error: One object must be selected")
    hide()
 
def hide():
    dialog.hide()
 
dialog = QtGui.QDialog()
dialog.resize(200,300)
dialog.setWindowTitle("Array")
la = QtGui.QVBoxLayout(dialog)
t1 = QtGui.QLabel("number of columns")
la.addWidget(t1)
l1 = QtGui.QLineEdit()
la.addWidget(l1)
t2 = QtGui.QLabel("distance between columns")
la.addWidget(t2)
l2 = QtGui.QLineEdit()
la.addWidget(l2)
t3 = QtGui.QLabel("number of rows")
la.addWidget(t3)
l3 = QtGui.QLineEdit()
la.addWidget(l3)
t4 = QtGui.QLabel("distance between rows")   
la.addWidget(t4)
l4 = QtGui.QLineEdit()
la.addWidget(l4)
okbox = QtGui.QDialogButtonBox(dialog)
okbox.setOrientation(QtCore.Qt.Horizontal)
okbox.setStandardButtons(QtGui.QDialogButtonBox.Cancel
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ArrayCopy/sv&oldid=692017>"