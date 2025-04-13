---
title: TechDraw "Штриховка"
---
|  |
| --- |
| Штриховка |
| Расположение в меню |
| TechDraw → Штриховать грань, используя файл изображения |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Применить геометрическую штриховку к грани](/TechDraw_GeometricHatch/ru "TechDraw GeometricHatch/ru"), [Штриховка](/TechDraw_Hatching/ru "TechDraw Hatching/ru") |
|  |

## Описание

The **TechDraw Hatch** tool fills a closed region in a View with a tiled [SVG](/SVG "SVG") or bitmap ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) based hatch pattern. Alternatively the ![](/images/TechDraw_GeometricHatch.svg) [TechDraw GeometricHatch](/TechDraw_GeometricHatch "TechDraw GeometricHatch") tool uses PAT based hatch patterns. See [Hatching](/TechDraw_Hatching "TechDraw Hatching") for details.

![](/images/TechDraw_Hatch_example.png)

SVG hatch pattern on a face

## Применение

1. Select a closed region in a View.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_Hatch.svg) [TechDraw Hatch](/TechDraw_Hatch "TechDraw Hatch") button.
   * Select the **TechDraw → Hatching → ![](/images/TechDraw_Hatch.svg) Hatch a Face using Image File** option from the menu.
3. The **Apply Hatch to Face** task panel opens.
4. Optionally change the **Pattern File**.
5. Optionally change the **Pattern Scale** and the **Line Color**. These settings are ignored for bitmap patterns.
6. Press the OK button.

## Примечания

* For a solid color fill select solid.svg as the **Pattern File**.
* Hatching objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". See [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension") for more information. It is recommended that hatching be one of the last steps in your drawing process.
* Sample [SVG](/SVG "SVG") patterns are available locally in:

:   ```
    $INSTALL_DIR/data/Mod/TechDraw/Patterns

    ```
:   Where `$INSTALL_DIR` is the directory where FreeCAD was installed, for example:
:   ```
    /usr/share/freecad/data/Mod/TechDraw/Patterns

    ```
:   They are also available on [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

## Свойства

* Данные**Source**: The View and Face to receive the hatch pattern.
* Данные**Hatch Pattern**: Full path and filename to an SVG pattern file.
* Вид**Hatch Color**: Hatch pattern will be displayed in this color.
* Вид**Hatch Scale**: Hatch pattern size modifier.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

A Hatch can be created with [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawHatch", "Hatch")
hatch.Source = (view1, ["Face0"])
hatch.HatchPattern = hatchFileSpec
page.addView(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatch/ru&oldid=1486081>"