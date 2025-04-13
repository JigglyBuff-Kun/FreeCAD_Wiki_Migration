---
title: MacroMenu
---

|                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MacroMenu                                                                                                                                                                                                                                             |
| Popis                                                                                                                                                                                                                                                       |
| Adds the macros found in the macros folder to the FreeCAD Macros menu Version macro : 1.0 Date last modification : 2014-08-07 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                       |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png)                                                                                                                                                                             |
| Odkazy                                                                                                                                                                                                                                                      |
| [Makro recepty                                                                                                                                                                                                                                              | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                       |
| 1.0                                                                                                                                                                                                                                                         |
| Datum poslední úpravy                                                                                                                                                                                                                                       |
| 2014-08-07                                                                                                                                                                                                                                                  |
| Verze FreeCAD                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                         |
| Výchozí zástupce                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                      |
| Viz též                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                             |

## Popis

Tento kód byl součástí modulu [Draft Workbench](/Draft_Workbench/cs "Draft Workbench/cs") a byl odstraněn cf [issue #490](http://freecadweb.org/tracker/view.php?id=490).

## Skript

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroMenu/cs&oldid=1008431>"
