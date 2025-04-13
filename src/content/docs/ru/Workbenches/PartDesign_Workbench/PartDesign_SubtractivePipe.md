---
title: PartDesign Субтрактивный профиль по траектории
---
|  |
| --- |
| Субтрактивный профиль по траектории |
| Расположение в меню |
| Part Design → Create a substractive feature → Субтрактивный профиль по траектории |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Аддитивный профиль по траектории](/PartDesign_AdditivePipe/ru "PartDesign AdditivePipe/ru"), [Субтрактивный профиль](/PartDesign_SubtractiveLoft/ru "PartDesign SubtractiveLoft/ru") |
|  |

## Описание

**Субтрактивный профиль по траектории** создает субтрактивное твердое тело в активном теле, перемещая один или несколько эскизов (также называемых поперечными сечениями) по открытому или замкнутому контуру. После чего созанная форма вычитается из существующего твердого тела. Субтрактивный профиль часто применяется совместно с инструментами: [спираль](/Part_Helix/ru "Part Helix/ru") и [связующая форма](/PartDesign_ShapeBinder/ru "PartDesign ShapeBinder/ru") для создания резьбы; подробности см. в [руководстве по созданию резьбы](/Thread_for_Screw_Tutorial/ru "Thread for Screw Tutorial/ru").

## Применение

1. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_SubtractivePipe.svg) [Subtractive pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe") button.
   * Select the **PartDesign → Create an substractive feature → ![](/images/PartDesign_SubtractivePipe.svg) Subtractive pipe** option from the menu.
2. In the **Select feature** dialog, select a sketch to be used as first cross-section and click OK.
   * Alternatively, a sketch or a face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")) can be selected before starting the tool. You will not get this dialog then.
3. In the **Pipe parameters** under **Profile**, press the Object button.
4. Select the sketch to be used as path in the 3D view:
   * Alternatively, edges of the body can be selected by pressing Add Edge and selecting edges in the 3D view.
5. To use more than one cross-section, under **Section transformation** set the Transform mode to *Multisection*; press Add Section then select a sketch in the 3D view. Repeat for each additional cross-section.
6. Set options if needed and click OK.

## Опции

**Section Transformation**:

* Select **Constant** to use a single profile
* Select **Multisection** to use multiple profiles

**Section Orientation**:

* Standard
  + This keeps the cross section shape perpendicular to the path. This is the default setting.
* Fixed
  + Orientation set by first profile and constant throughout. This deactivates the alignment to the path normal vector. That means that the cross-section shape will not rotate with the path. Sweep along a circle to see the effect.
* Frenet
  + Create minimum possible twisting of profile. For more info, see [Frenet-Serret Formulas](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)
* Auxiliary
  + Specify secondary path to guide pipe.
  + For each point *P* along the sweep path, there will be a corresponding point *Q* on the auxiliary path.
  + As the profile is swept, it will be transformed such that the *PQ* line is the normal of the sweep path.
  + If *Curvelinear equivalence* is set, then the *Q* points are scaled proportionally along the sweep path, regardless of is length.
* Binormal
  + Specify binormal vector in X, Y and Z

**Corner Transition**

* Transformed
* Right
* Rounded

## Свойства

* Данные**Label**: name given to the operation, this name can be changed at convenience.
* Данные**Refine**: true or false. If set to true, cleans the solid from residual edges left by features. See [Part RefineShape](/Part_RefineShape "Part RefineShape") for more details.
* Данные**Sections**: lists the sections used.
* Данные**Spine Tangent**: true or false (default). True extends the path to include tangent edges.
* Данные**Auxiliary Spine Tangent**: true or false (default). True extends the auxiliary path to include tangent edges.
* Данные**Auxiliary Curvelinear**: true or false (default). True calculates normal between equidistant points on both spines.
* Данные**Mode**: profile mode. See [Options](#Options).
* Данные**Binormal**: binormal vector for corresponding orientation mode.
* Данные**Transition**: transition mode. Options are *Transformed*, *Right Corner* or *Round Corner*.
* Данные**Transformation**: *Constant* uses a single cross-section. *Multisection* uses two or more cross-sections. *Linear*, *S-shape* and *Interpolation* are currently not functional.

## Примечания

* Эскизы, используемые для поперечных сечений, должны образовывать замкнутые профили.
* Невозможно использовать вершину в качестве поперечного сечения.
* Поперечное сечение не может лежать в той же плоскости, что и непосредственно предшествующее ему.
* Чтобы лучше контролировать форму трубы, рекомендуется, чтобы все поперечные сечения имели одинаковое количество сегментов. Например, для трубы между прямоугольником и окружностью окружность может быть разбита на 4 соединенные дуги.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePipe/ru&oldid=1308171>"