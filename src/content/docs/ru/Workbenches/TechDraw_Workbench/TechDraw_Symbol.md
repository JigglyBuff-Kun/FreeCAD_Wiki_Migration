---
title: TechDraw "Вставить знак"
---
|  |
| --- |
| Вставить знак |
| Расположение в меню |
| TechDraw → Вставить SVG знак |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Шаблоны](/TechDraw_Templates/ru "TechDraw Templates/ru"), [Draft SVG](/Draft_SVG/ru "Draft SVG/ru") |
|  |

## Описание

The **TechDraw Symbol** tool inserts a Symbol object. A Symbol is a stripped down view that contains only a single [SVG](/SVG "SVG") file complying with the svg-tiny specification (see [TechDraw Templates](/TechDraw_Templates#Notes "TechDraw Templates")).

A Symbol can be anything that helps annotate a drawing and that doesn't need to be further modified, it may however contain [editable texts](/Svg_Namespace#freecad:editable "Svg Namespace").

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [TechDraw View](/TechDraw_View "TechDraw View") tool can also create a Symbol.

![](/images/TechDraw_SymbolSVG_sample.png)

Compass rose added to the drawing page; this symbol is available by installing the "symbols\_library" addon with the [Addon Manager](/Std_AddonMgr "Std AddonMgr")

## Применение

1. If there are multiple drawing pages in the document: optionally activate the desired page by selecting it in the [Tree view](/Tree_view "Tree view").
2. Select the **TechDraw → TechDraw Views → ![](/images/TechDraw_Symbol.svg) Insert SVG Symbol** option from the menu.
3. If there are multiple drawing pages in the document and you have not yet activated a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
4. A file browser opens.
5. Select an SVG file.
6. A symbol is inserted.
7. Optionally change its Данные**Scale** property to adjust its size.

## Примечания

* Данные**Scale Type** for Symbols is always set to *Custom* at creation. This is for convenience, since symbols are almost always scaled differently from the rest of the objects on the page.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Symbol, formally a `TechDraw::DrawViewSymbol` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Drawing view

* Данные (Hidden)**Symbol** (`String`): The SVG code defining this symbol.
* Данные**Editable Texts** (`StringList`): Substitution values for the editable strings in this symbol.
* Данные**Owner** (`Link`): Feature to which this symbol is attached. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Symbol tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
sym = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewSymbol','TestSymbol')
rc = page.addView(anno)
f = open(unicode(symbolFileSpec,'utf-8'),'r')
svg = f.read()
f.close()
sym.Symbol = svg
rc = page.addView(sym)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Symbol/ru&oldid=1490104>"