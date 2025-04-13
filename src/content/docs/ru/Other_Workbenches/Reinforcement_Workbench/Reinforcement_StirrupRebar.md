---
title: Arch Кольцевая арматура
---
|  |
| --- |
| Кольцевая арматура |
| Расположение в меню |
| Arch → Rebar tools → Stirrup 3D/BIM → Reinforcement tools → Stirrup |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru"), [BIM](/BIM_Workbench/ru "BIM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Reinforcement](/Reinforcement_Workbench/ru "Reinforcement Workbench/ru"), [Арматура по эскизу](/Arch_Rebar/ru "Arch Rebar/ru"), [Спиральная арматура](/Arch_Rebar_Helical/ru "Arch Rebar Helical/ru") |
|  |

## Описание

Инструмент ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar позволяет пользователю создавать в структурном элементе арматурный стержень с изогнутой формой.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_Stirrup_example.png)

![](/images/Stirrup.png)

## Применение

1. Создайте элемент [structure](/Arch_Structure "Arch Structure")
2. Выберите любую грань структуры
3. Then select ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar from the rebar tools
4. A task panel will pop-out on the left side of the screen as shown below ![](/images/StirrupDialog.png)
5. Select the desired orientation
6. Give the inputs like left cover, right cover, top cover, bottom, front cover, bent angle, bent factor, rounding and diameter of the rebar
7. Select the mode of distribution either amount or spacing
8. If spacing is selected, a user can also opt for [custom spacing](/Custom_Spacing "Custom Spacing")
9. Pick selected face is used to verify or change the face for rebar distribution
10. Нажмите  OK или  Apply, чтобы создать арматуру
11. Нажмите  Cancel, чтобы выйти из панели задач

![](/images/StirrupDialog.png)

Task panel for the tool

## Свойства

* Данные**Front Cover**:

Расстояние между арматурой и выбранной поверхностью.

* Данные**Right Cover**: The distance between the right end of the rebar to right face of the structure.
* Данные**Left Cover**: The distance between the left end of the rebar to the left face of the structure.
* Данные**Bottom Cover**: The distance between rebar from the bottom face of the structure.
* Данные**Top Cover**: The distance between rebar from the top face of the structure.
* Данные**Bent Angle**: Bent angle defines the angle at the ends of a stirrup.
* Данные**Bent Factor**: Bent Factor defines length of stirrup end.
* Данные**Amount**: The amount of rebars.
* Данные**Spacing**:Расстояние между осями каждого стержня.

## Сценарии

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Инструмент  ![](/images/Arch_Rebar_Stirrup.png) Stirrup Rebar можно использовать в [macros](/Macros "Macros") и на консоли python с помощью следующей функции:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

* Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `l_cover`, `r_cover`, `t_cover`, `b_cover`, and `f_cover` are inner offset distances for the rebar elements with respect to the faces of the structure. They are respectively the left, right, top, bottom, and front offsets.
* `diameter` is the diameter of the reinforcement bars inside the structure.
* `rounding` is the parameter that determines the bending radius of the reinforcement bars as they make a loop.
* `bentLength` and `bentAngle` define the length and angle of the tip of the reinforcement loop.
* `amount_spacing_check` if it is `True` it will create as many reinforcement loops as given by `amount_spacing_value`; if it is `False` it will create reinforcement loops separated by the numerical value of `amount_spacing_value`.
* `amount_spacing_value` specifies the number of reinforcement loops, or the value of the separation between them, depending on `amount_spacing_check`.

### Пример

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

* `Rebar` is a previously created `StirrupRebar` object.
* The other parameters are the same as required by the `makeStirrup()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/ru&oldid=1433665>"