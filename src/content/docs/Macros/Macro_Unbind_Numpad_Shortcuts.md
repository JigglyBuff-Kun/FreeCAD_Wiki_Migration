---
title: Unbind Numpad Shortcuts
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Unbind Numpad Shortcuts                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| When entering numbers, and the number input box is not properly focused, FreeCAD will react to digits by switching standard views. This macro is a quick way to re-bind the shortcuts to Ctrl+number. Doesn't help very much with entering numbers, but at least the view won't spin like crazy. Macro version: 2.0 Last modified: 2022-04-13 FreeCAD version: 0.20 Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_Unbind_Numpad_Shortcuts.png) Author: DeepSOIC |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC")                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_Unbind_Numpad_Shortcuts.png)                                                                                                                                                                                                                                                                                                                                                                                                |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                             |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2022-04-13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Description

When entering numbers, and the number input box is not properly focused, FreeCAD will react to digits by switching standard views. This macro is a quick way to re-bind the shortcuts to Ctrl+number. Doesn't help very much with entering numbers, but at least the view won't spin like crazy.

See forum thread [How to turn off (disable) Numpad navigation?](https://forum.freecadweb.org/viewtopic.php?f=3&t=26667)

## How to use:

1. Copy-paste macro code to Py console of FreeCAD.

2. Press enter twice (to make sure everything is executed).

3. Restart FreeCAD for the changes to take effect.

## Script

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Unbind_Numpad_Shortcuts/en&oldid=1129464>"
