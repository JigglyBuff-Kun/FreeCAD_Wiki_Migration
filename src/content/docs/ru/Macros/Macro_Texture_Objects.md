---
title: Texture Objects
---

|                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Текстурные объекты                                                                                                                                                                                                                                                                                                                              |
| описание                                                                                                                                                                                                                                                                                                                                        |
| Этот макрос позволяет временно поместить текстуру на выбранный объект. Для удаления текстуры, просто закройте и вновь откройте документ. Макрос версии : 1.0 Дата последней модификации : 2011-10-13 FreeCAD версия : 0.18 и ниже Скачать : [Icon Toolbar](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png) автор : yorik |
| автор                                                                                                                                                                                                                                                                                                                                           |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                               |
| Скачать                                                                                                                                                                                                                                                                                                                                         |
| [Icon Toolbar](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                                                                                           |
| [Макросы рецепты](/Macros_recipes/ru "Macros recipes/ru") [Как установить макросы](/How_to_install_macros/ru "How to install macros/ru") [Как настроить панели инструментов](/Customize_Toolbars/ru "Customize Toolbars/ru")                                                                                                                    |
| Версия                                                                                                                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                                                                                                             |
| Дата последней модификации                                                                                                                                                                                                                                                                                                                      |
| 2011-10-13                                                                                                                                                                                                                                                                                                                                      |
| Версии FreeCAD                                                                                                                                                                                                                                                                                                                                  |
| 0.18 и ниже                                                                                                                                                                                                                                                                                                                                     |
| Ярлык по умолчанию                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                          |
| Смотрите также                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                 |

## Description

## Описание

Этот макрос позволяет временно наложить текстуру изображения на выделенные объекты. Чтобы удалить текстуры, просто закройте и снова откройте документ.

![](/images/Textured_objects.jpg)

## скрипт

**Macro_Texture_Objects.FCMacro**

```
import FreeCADGui
from PySide import QtGui
from pivy import coin

# get a jpg filename
jpgfilename = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),'Open image file','*.jpg')

# apply textures
for obj in FreeCADGui.Selection.getSelection():
    rootnode = obj.ViewObject.RootNode
    tex =  coin.SoTexture2()
    tex.filename = str(jpgfilename[0])
    rootnode.insertChild(tex,1)
```

## связи

[Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

[Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/ru&oldid=1338899>"
