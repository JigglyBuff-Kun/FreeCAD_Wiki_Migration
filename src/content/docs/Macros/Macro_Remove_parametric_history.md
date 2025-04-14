---
title: Remove parametric history
---

|                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Remove parametric history                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                          |
| This will remove all parametric associativity from an object, leaving it as a "dumb" shape Macro version: 1.0 Last modified: 2011-08-01 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png) Author: Yorik |
| Author                                                                                                                                                                                                                                                                               |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png)                                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                                |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                     |
| Macro Version                                                                                                                                                                                                                                                                        |
| 1.0                                                                                                                                                                                                                                                                                  |
| Date last modified                                                                                                                                                                                                                                                                   |
| 2011-08-01                                                                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                      |

## Description

This will remove all parametric associativity from an object, leaving it as a "dumb" shape

Before and after:

![](/images/RPH_before.png)

![](/images/RPH_after.png)

## Script

ToolBar Icon ![](/images/Macro_Remove_parametric_history.png)

**Remove parametric history.FCMacro**

```
originalObject = FreeCAD.ActiveDocument.ActiveObject
newShape = originalObject.Shape.copy()
newName = FreeCAD.ActiveDocument.ActiveObject.Name
FreeCAD.ActiveDocument.removeObject(newName)
newObject = FreeCAD.ActiveDocument.addObject("Part::Feature",newName)
newObject.Shape = newShape
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Remove_parametric_history/en&oldid=692470>"
