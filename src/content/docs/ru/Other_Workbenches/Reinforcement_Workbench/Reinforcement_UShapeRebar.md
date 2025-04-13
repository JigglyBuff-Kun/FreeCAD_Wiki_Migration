---
title: Arch U-Образная арматура
---
|  |
| --- |
| U-Образная арматура |
| Расположение в меню |
| Arch → Rebar tools → U-Shape Rebar 3D/BIM → Reinforcement tools → U-Shape Rebar |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru"), [BIM](/BIM_Workbench/ru "BIM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Reinforcement](/Reinforcement_Workbench/ru "Reinforcement Workbench/ru"), [Арматура по эскизу](/Arch_Rebar/ru "Arch Rebar/ru"), [L-Образная арматура](/Arch_Rebar_LShape/ru "Arch Rebar LShape/ru") |
|  |

## Описание

Инструмент ![](/images/UShapeRebar.png) UShape Rebar позволяет пользователю создавать в структурном элементе арматурный стержень с изогнутой формой.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_UShape_example.png)

![](/images/Footing_UShapeRebar.png)

## Применение

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.
2. Then select ![](/images/Reinforcement_UShapeRebar.svg) [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar") from the rebar tools.
3. A [task panel](/Task_panel "Task panel") will pop-out on the left side of the screen as shown below.
4. Select the desired orientation.
5. Populate the inputs like 'Left Cover', 'Right Cover', 'Top Cover', 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' and 'Diameter' of the rebar.
6. Select the mode of distribution either 'Amount' or 'Spacing'.
   * If 'Spacing' is selected, a user can also opt for [custom spacing](/Reinforcement_Custom_Spacing "Reinforcement Custom Spacing").
7. Pick Selected Face is used to verify or change the face for rebar distribution.
8. Click OK or Apply to generate the rebars.
9. Click Cancel to exit the task panel.

![](/images/UShapeDialog.png)

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

## Программирование

## Скриптование

Инструмент ![](/images/UShapeRebar.png) UShape Rebar можно использовать в [macros](/Macros "Macros") и на консоли python с помощью следующей функции:

```
Rebar = makeUShapeRebar(f_cover, b_cover, r_cover, l_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                        structure=None, facename=None)

```

* Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `f_cover`, `b_cover`, `r_cover`, `l_cover`, and `t_cover` are inner offset distances for the rebar elements with respect to the faces of the structure. They are respectively the front, bottom, right, left, and top offsets.
* `diameter` is the diameter of the reinforcement bars inside the structure.
* `rounding` is the parameter that determines the bending radius of the reinforcement bars.
* `amount_spacing_check` if it is `True` it will create as many reinforcement bars as given by `amount_spacing_value`; if it is `False` it will create reinforcement bars separated by the numerical value of `amount_spacing_value`.
* `amount_spacing_value` specifies the number of reinforcement bars, or the value of the separation between them, depending on `amount_spacing_check`.
* `orientation` specifies the orientation of the rebar; it can be `"Bottom"`, `"Top"`, `"Right"`, or `"Left"`.

### Пример

```
import FreeCAD, Arch, UShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = UShapeRebar.makeUShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = UShapeRebar.makeUShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

Изменение свойств арматуры UShape.

```
editUShapeRebar(Rebar, f_cover, b_cover, r_cover, l_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` is a previously created `UShapeRebar` object.
* The other parameters are the same as required by the `makeUShapeRebar()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import UShapeRebar

UShapeRebar.editUShapeRebar(Rebar, 50, 50, 20, 20,
                            16, 20, 5, True, 5, "Top")

UShapeRebar.editUShapeRebar(Rebar2, 70, 50, 20, 20,
                            16, 70, 5, True, 5, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_UShapeRebar/ru&oldid=1433682>"