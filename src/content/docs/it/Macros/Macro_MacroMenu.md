---
title: Menu delle macro
---

|                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Menu delle macro                                                                                                                                                                                                                                                                 |
| Descrizione                                                                                                                                                                                                                                                                      |
| Aggiunge le macro trovate nel repertorio delle macro e le mette nella cartella Macros di FreeCAD Versione macro: 1.0 Ultima modifica: 2014-08-07 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                           |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                |
| Download                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png)                                                                                                                                                                                                  |
| Link                                                                                                                                                                                                                                                                             |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                         |
| Versione macro                                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                                              |
| Data ultima modifica                                                                                                                                                                                                                                                             |
| 2014-08-07                                                                                                                                                                                                                                                                       |
| Versioni di FreeCAD                                                                                                                                                                                                                                                              |
| Tutte                                                                                                                                                                                                                                                                            |
| Scorciatoia                                                                                                                                                                                                                                                                      |
| _Nessuna_                                                                                                                                                                                                                                                                        |
| Vedere anche                                                                                                                                                                                                                                                                     |
| _Nessuno_                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                  |

## Description

Questo codice era compreso nell' [Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it"), ma è stato tolto, vedere [issue #490](http://freecadweb.org/tracker/view.php?id=490).

## Script

Icona barra strumenti ![](/images/Macro_MacroMenu.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroMenu/it&oldid=1187599>"
