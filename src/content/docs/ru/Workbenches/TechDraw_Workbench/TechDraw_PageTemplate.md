---
title: TechDraw "Вставить страницу используя шаблон"
---
|  |
| --- |
| Вставить страницу используя шаблон |
| Расположение в меню |
| TechDraw → Вставить страницу используя шаблон |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Вставить страницу по умолчанию](/TechDraw_PageDefault/ru "TechDraw PageDefault/ru"), [Шаблоны](/TechDraw_Templates/ru "TechDraw Templates/ru") |
|  |

## Описание

The **TechDraw PageTemplate** tool creates a new Page object using the template file selected from a dialog.

The starting directory for the dialog can be specified in the [TechDraw Preferences](/TechDraw_Preferences "TechDraw Preferences").

![](/images/A4_Landscape_ISO7200_Pep.svg)

One of the templates that comes with TechDraw: A4\_Landscape\_ISO7200\_Pep.svg

## Применение

1. An active document must exist.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_PageTemplate.svg) [Insert Page using Template](/TechDraw_PageTemplate "TechDraw PageTemplate") button.
   * Select the **TechDraw → Page → ![](/images/TechDraw_PageTemplate.svg) Insert Page using Template** option from the menu.

## Свойства

See [TechDraw PageDefault](/TechDraw_PageDefault#Properties "TechDraw PageDefault").

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

A Page based on a selected template can be created with [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
import FreeCAD as App
from PySide import QtGui

doc = App.ActiveDocument
default_dir = App.getResourceDir() + "Mod/TechDraw/Templates"
param = App.ParamGet("User parameter:BaseApp/Preferences/Mod/TechDraw/Files")
template_dir = param.GetString("TemplateDir", default_dir)

template_file = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),
                                                  "Select a Template File", 
                                                  template_dir,
                                                  "Template (*.svg)")
                                                  
page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = template_file[0]
page.Template = template

doc.recompute()

```

### Editable text fields

*See also:* [TechDraw Templates](/TechDraw_Templates "TechDraw Templates") for more information on creating templates.

Once a new page has been created, its `Template` attribute holds an `EditableTexts` dictionary with the name of the editable fields (keys) and their textual values. Copy this dictionary to a variable, make changes, and then re-assign the dictionary to the `EditableTexts` attribute to see the changes.

```
page = FreeCAD.ActiveDocument.Page
texts = page.Template.EditableTexts

for key, value in texts.items():
    print("{0} = {1}".format(key, value))

texts["FC-Title"] = "The title of my page"
page.Template.EditableTexts = texts

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageTemplate/ru&oldid=1429844>"