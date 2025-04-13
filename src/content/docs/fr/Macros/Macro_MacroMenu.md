---
title: MacroMenu
---

|                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MacroMenu                                                                                                                                                                                                                                                              |
| Description                                                                                                                                                                                                                                                                  |
| Ajoute les macros trouvées dans le dossier macros au menu Macros FreeCAD Version macro : 1.0 Date dernière modification : 2014-08-07 Version FreeCAD : Toutes Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                       |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                            |
| Téléchargement                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_MacroMenu.png)                                                                                                                                                                                              |
| Liens                                                                                                                                                                                                                                                                        |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                             |
| Version Macro                                                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                                                          |
| Dernière modification                                                                                                                                                                                                                                                        |
| 2014-08-07                                                                                                                                                                                                                                                                   |
| Version(s) FreeCAD                                                                                                                                                                                                                                                           |
| Toutes                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                       |
| Voir aussi                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                              |

## Description

Ce code faisait partie intégrante de l' [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") et a été retiré voir [issue #490](http://freecadweb.org/tracker/view.php?id=490).

## Script

Icône de la barre d'outils ![](/images/Macro_MacroMenu.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroMenu/fr&oldid=1002453>"
