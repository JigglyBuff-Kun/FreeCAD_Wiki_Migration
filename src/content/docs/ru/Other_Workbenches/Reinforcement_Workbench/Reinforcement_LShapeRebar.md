---
title: Arch L-Образная арматура
---
|  |
| --- |
| L-Образная арматура |
| Расположение в меню |
| Arch → Rebar tools → L-Shape Rebar 3D/BIM → Reinforcement tools → L-Shape Rebar |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru"), [BIM](/BIM_Workbench/ru "BIM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Reinforcement](/Reinforcement_Workbench/ru "Reinforcement Workbench/ru"), [Арматура по эскизу](/Arch_Rebar/ru "Arch Rebar/ru"), [Изогнутая арматура](/Arch_Rebar_BentShape/ru "Arch Rebar BentShape/ru") |
|  |

## Описание

Инструмент ![](/images/Arch_Rebar_LShape.png) LShape Rebar позволяет пользователю создавать в структурном элементе арматурный стержень с изогнутой формой.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_LShape_example.png)

![](/images/LShapeRebarNew.png)

## Применение

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.
2. Then select ![](/images/Reinforcement_LShapeRebar.svg) [L-Shape Rebar](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar") from the rebar tools.
3. A [task panel](/Task_panel "Task panel") will pop-out on the left side of the screen as shown below.
4. Select the desired orientation.
5. Populate the inputs like 'Left Cover', Right Cover, Top Cover, 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' and 'Diameter' of the rebar.
6. Select the mode of distribution either 'Amount' or 'Spacing'.
   * If 'Spacing' is selected, a user can also opt for [custom spacing](/Reinforcement_Custom_Spacing "Reinforcement Custom Spacing").
7. Pick Selected Face is used to verify or change the face for rebar distribution.
8. Click OK or Apply to generate the rebars.
9. Click Cancel to exit the task panel.

![](/images/LShapeDialog.png)

Task panel for the tool

## Свойства

* Данные**Orientation**: It decides the orientation of the rebar (like a bottom, top, right and left).
* Данные**Front Cover**: The distance between rebar and selected face.
* Данные**Right Cover**: The distance between the right end of the rebar to right face of the structure.
* Данные**Left Cover**: The distance between the left end of the rebar to the left face of the structure.
* Данные**Bottom Cover**: The distance between rebar from the bottom face of the structure.
* Данные**Top Cover**: The distance between rebar from the top face of the structure.
* Данные**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the diameter.
* Данные**Amount**: The amount of rebars.
* Данные**Spacing**: The distance between the axes of each bar.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement LShapeRebar tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Rebar = makeLShapeRebar(f_cover, b_cover, l_cover, r_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom Left",
                        structure=None, facename=None):

```

* Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `f_cover`, `b_cover`, `l_cover`, `r_cover`, and `t_cover` are inner offset distances for the rebar elements with respect to the faces of the structure. They are respectively the front, bottom, left, right, and top offsets.
* `diameter` is the diameter of the reinforcement bars inside the structure.
* `rounding` is the parameter that determines the bending radius of the reinforcement bars.
* `amount_spacing_check` if it is True it will create as many reinforcement bars as given by amount\_spacing\_value; if it is False it will create reinforcement bars separated by the numerical value of amount\_spacing\_value.
* `amount_spacing_value` specifies the number of reinforcement bars, or the value of the separation between them, depending on amount\_spacing\_check.
* `orientation` specifies the orientation of the rebar; it can be `"Bottom Right"`, `"Bottom Left"`, `"Top Right"`, or `"Top Left"`.

### Пример

```
import FreeCAD, Arch, LShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = LShapeRebar.makeLShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom Left", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = LShapeRebar.makeLShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom Left", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editLShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` is a previously created `LShapeRebar` object.
* The other parameters are the same as required by the `makeLShapeRebar()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import LShapeRebar

LShapeRebar.editLShapeRebar(Rebar, 50, 50, 20, 20,
                            12, 50, 6, True, 5, "Top Right")

LShapeRebar.editLShapeRebar(Rebar2, 50, 50, 20, 20,
                            12, 70, 6, True, 5, "Top Right")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_LShapeRebar/ru&oldid=1433648>"