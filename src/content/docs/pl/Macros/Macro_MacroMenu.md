---
title: Makrodefinicja MacroMenu
---
|  |
| --- |
| Macro MacroMenu |
| Opis |
| Dodaje makrodefinicje znajdujące się w folderze makrodefinicji do menu FreeCAD.  Macro version: 1.0 Last modified: 2014-08-07 FreeCAD version: Wszystkie Download: [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) Autor: Yorik |
| Autor |
| [Yorik](/User:Yorik "User:Yorik") |
| Do pobrania |
| [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) |
| Odnośniki |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl") |
| Wersja Makrodefinicji |
| 1.0 |
| Data zmian |
| 2014-08-07 |
| Wersja FreeCAD |
| Wszystkie |
| Domyślny skrót |
| *Brak* |
| Zobacz również |
| *-* |
|  |
|  |

## Opis

Ten kod był częścią środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i został usunięty [sprawa #490](http://freecadweb.org/tracker/view.php?id=490).

## Tworzenie skryptów

Ikonka paska narzędzi ![](/images/Macro_MacroMenu.png)

**Macro\_MacroMenu.FCMacro**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroMenu/pl&oldid=986153>"