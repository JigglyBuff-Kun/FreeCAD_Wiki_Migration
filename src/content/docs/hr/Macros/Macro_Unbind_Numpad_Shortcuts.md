---
title: Unbind Numpad Shortcuts
---

|                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Makro Razdvoji Numpad prečace                                                                                                                                                                                                                                                                                                                              |
| Opis                                                                                                                                                                                                                                                                                                                                                       |
| rebinds standard view commands from digit keys to Ctrl+digit, so that they don't spin the view by accident when entering numbers. Makronaredba verzije : 1.0 Datum zadnje izmjene : 2018-04-22 Verzija FreeCAD : All Preuzimanje datoteka : [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_Unbind_Numpad_Shortcuts.png) Autor : DeepSOIC |
| Autor                                                                                                                                                                                                                                                                                                                                                      |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC")                                                                                                                                                                                                                                                                                                                 |
| Preuzimanje datoteka                                                                                                                                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_Unbind_Numpad_Shortcuts.png)                                                                                                                                                                                                                                                              |
| Linkovi                                                                                                                                                                                                                                                                                                                                                    |
| [Makro recepti](/index.php?title=Macros_recipes/hr&action=edit&redlink=1 "Macros recipes/hr (page does not exist)") [Kako instalirati makronaredbe](/How_to_install_macros/hr "How to install macros/hr") [Kako prilagoditi alatne trake](/Customize_Toolbars/hr "Customize Toolbars/hr")                                                                  |
| Verzija                                                                                                                                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                                                                                                                                        |
| Datum zadnje izmjene                                                                                                                                                                                                                                                                                                                                       |
| 2018-04-22                                                                                                                                                                                                                                                                                                                                                 |
| Verzije FreeCAD-a                                                                                                                                                                                                                                                                                                                                          |
| All                                                                                                                                                                                                                                                                                                                                                        |
| Zadani prečac                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                     |
| Vidi također                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                            |

## Description

## Opis

Kada unosite brojeve, a okvir za unos broja nije pravilno fokusiran, FreeCAD će reagirati na znamenke prebacivanjem standardnih prikaza. Ova je makronaredba brz način ponovnog vezanja prečaca do Ctrl+broja. Ne pomaže mnogo s unosom brojeva, ali barem pogled neće zavrtjeti kao lud.

Pogledajte nit na forumu [How to turn off (disable) Numpad navigation?](https://forum.freecadweb.org/viewtopic.php?f=3&t=26667)

## Kako koristiti:

1. Copy-paste makro kod na Py konzolu FreeCAD-a.

2. Dvaput pritisnite enter (kako biste provjerili je li sve izvršeno).

3. Ponovno pokrenite FreeCAD kako bi promjene stupile na snagu.

## Skripta

ToolBar Icon ![](/images/Macro_Unbind_Numpad_Shortcuts.png)

**Macro_Unbind_Numpad_Shortcuts.FCMacro**

```
preset = [
    ("Std_ViewIsometric"   , "Ctrl+0"),
    ("Std_ViewFront" , "Ctrl+1"),
    ("Std_ViewTop"   , "Ctrl+2"),
    ("Std_ViewRight" , "Ctrl+3"),
    ("Std_ViewRear"  , "Ctrl+4"),
    ("Std_ViewBottom", "Ctrl+5"),
    ("Std_ViewLeft"  , "Ctrl+6"),
]
for (cmd, shortcut) in preset:
    App.ParamGet("User parameter:BaseApp/Preferences/Shortcut").SetString(cmd, shortcut)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Unbind_Numpad_Shortcuts/hr&oldid=1129463>"
