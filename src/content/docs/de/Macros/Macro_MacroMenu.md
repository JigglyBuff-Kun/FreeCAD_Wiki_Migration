---
title: MacroMenu
---

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MacroMenu                                                                                                                                                                                                                                                      |
| Beschreibung                                                                                                                                                                                                                                                         |
| Adds the macros found in the macros folder to the FreeCAD Macros menu Versionsmakro : 1.0 Datum der letzten Änderung : 2014-08-07 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                    |
| Herunterladen                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png)                                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                         |
| Macro-Version                                                                                                                                                                                                                                                        |
| 1.0                                                                                                                                                                                                                                                                  |
| Datum der letzten Änderung                                                                                                                                                                                                                                           |
| 2014-08-07                                                                                                                                                                                                                                                           |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                  |
| Standardverknüpfung                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |

## Beschreibung

Dieser Code war Teil des [Draft Module](/Draft_Workbench/de "Draft Workbench/de") und wurde entfernt [issue #490](http://freecadweb.org/tracker/view.php?id=490).

## Skript

Werkzeugleistensymbol ![](/src/assets/images/Macro_MacroMenu.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroMenu/de&oldid=1043932>"
