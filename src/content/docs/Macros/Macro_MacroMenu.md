---
title: MacroMenu
---

|                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MacroMenu                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                     |
| Adds the macros found in the macros folder to the FreeCAD Macros menu Macro version: 1.0 Last modified: 2014-08-07 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) Author: Yorik |
| Author                                                                                                                                                                                                                                          |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png)                                                                                                                                                                 |
| Links                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                |
| Macro Version                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                              |
| 2014-08-07                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                 |

## Description

This code was part of the [Draft Workbench](/Draft_Workbench "Draft Workbench") and has been removed cf [issue #490](http://freecadweb.org/tracker/view.php?id=490).

## Script

ToolBar Icon ![](/images/Macro_MacroMenu.png)

**Macro_MacroMenu.FCMacro**

```
import os,FreeCAD,FreeCADGui

macrosList = []
macroPath = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macro").GetString("MacroPath")

class MacroCommand():
    "A template for macro commands"
    def __init__(self,macroname):
        self.macroname = macroname

    def GetResources(self):
        return {'Pixmap'  : 'Draft_Macro',
                'MenuText': self.macroname,
                'ToolTip': 'Executes the '+self.macroname+' macro'}

    def Activated(self):
        target = macroPath+os.sep+self.macroname+'.FCMacro'
        if os.path.exists(target): execfile(target)

if macroPath and os.path.isdir(macroPath):
    macros = []
    for f in os.listdir(macroPath):
        if ".FCMacro" in f:
            macros.append(f[:-8])
    for m in macros:
        cmd = 'Macro_'+m
        FreeCADGui.addCommand(cmd,MacroCommand(m))
        macrosList.append(cmd)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroMenu/en&oldid=984815>"
