---
title: Руководство по винтовым резьбам
---

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Руководство                                                                                                                                        |
| Тема                                                                                                                                               |
| Product design                                                                                                                                     |
| Уровень                                                                                                                                            |
| Advanced                                                                                                                                           |
| Время для завершения                                                                                                                               |
| 60 минут                                                                                                                                           |
| Авторы                                                                                                                                             |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC"), [Murdic](/index.php?title=User:Murdic&action=edit&redlink=1 "User:Murdic (page does not exist)"), vocx |
| FreeCAD версия                                                                                                                                     |
| 0.19                                                                                                                                               |
| Примеры файлов                                                                                                                                     |
| [Updated: Thread for screw tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=44668)                                                      |
| Смотрите также                                                                                                                                     |
| _None_                                                                                                                                             |
|                                                                                                                                                    |

## Введение

Это руководство - собрание методов моделирования наружных резьб в FreeCAD. Оно обновлялось для версии 0.19, хотя процесс существенно не менялся с версии 0.14, для которой изначально и было написано руководство. Обновленное содержание фокусируется на ![](/images/Workbench_PartDesign.svg) [верстаке PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") для создания резьбы, но не использует ![](/images/PartDesign_AdditiveHelix.svg) [PartDesign Аддитивная спираль](/PartDesign_AdditiveHelix/ru "PartDesign AdditiveHelix/ru") так как этот инструмент был добавлен позднее.

В традиционных САПР моделирование резьбы не рекомендуется из за большой нагрузки на Геометрическое ядро и необходимости её отрисовки. В этих системах резьба и не должна быть смоделирована в 3D, так как она может быть добавлена в 2D чертеж, который отправляют на производство. Но с популяризацией аддитивного производства (3D печати), появилась необходимость в моделирование резьбы, чтобы напечатать модель какой она задумывалась. Этому и посвящено данное руководство.

Многие приемы, описанные ниже, были собраны на различных ветках форума:

- [Gathering thread modeling techniques](https://forum.freecad.org/viewtopic.php?f=3&t=12593)
- [Creating a thread: Unexpected results](https://forum.freecad.org/viewtopic.php?f=3&t=6506)

также можете посмотреть полезное видео:

- [Introducing a strategy for designing a bolt without the commonly found problems.](https://forum.freecad.org/viewtopic.php?f=8&t=44259)

Держите в уме, что форма резьбы требует много памяти, и даже одна резьба может существенно увеличить размер файла, так что пользователю советуется создавать резьбу только в случае крайней необходимости.

## Способ 1. Используя утилиты и части из рабочих столов

Используя утилиты и части, созданные другими людьми, легко и экономит время. Посмотрите раздел [Внешние верстаки](/External_workbenches/ru "External workbenches/ru") для информации о внешних инструментах.

В частности, эти три ресурса рекомендуются к установке из [Менеджера дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru"):

- [Верстак Стандартные Изделия (Fasteners)](/Fasteners_Workbench/ru "Fasteners Workbench/ru") чтобы добавлять/прикреплять крепеж к деталям. По умолчанию

резьба не отображается на винтах и гайках, но это может быть изменено в настройках.

- [BOLTSFC Workbench](/BOLTSFC_Workbench "BOLTSFC Workbench"), чтобы размещать крепеж из библиотеки BOLTS.
- [Верстак ПрофильРезьбы](/ThreadProfile_Workbench/ru "ThreadProfile Workbench/ru"), чтобы создавать стандартные резьбы.

![](/images/T13_00_Threads_fasteners.png)

Различные стандартные винты, вставленные с помощью Верстака Стандартных Изделий. Параметр контролирует, будет ли объект отображаться с резьбой или без.

## Способ 2. Используя макрос (устарел)

- In the past, the [Macro BOLTS](/Macro_BOLTS "Macro BOLTS") was used to insert the parts from the BOLTS library. This is now deprecated. Use the [BOLTSFC Workbench](/BOLTSFC_Workbench "BOLTSFC Workbench") instead.

- In the past the stand-alone [Screw Maker macro](/Macro_screw_maker1_2 "Macro screw maker1 2"), by ulrich1a, was used to create individual bolts, screws, and washers. This is now deprecated. The [Fasteners workbench](/Fasteners_Workbench "Fasteners Workbench"), by shaise, includes the complete screw maker macro, together with a GUI to select the right component.

## Способ 3. Имитация резьбы: нет шага

В многих ситуациях настоящая резьба не требуется, мы можем просто показать, что резьба должна быть.

Мы можем создать имитацию резьбы, вращая зубчатый профиль, или совмещая диски с коническими краями. Такую резьбу сложно отличить на глаз от настоящей. Этот способ подходит для визуального представления резьбы, однако не годится для 3D печати.

![](/images/T13_01_Threads_comparison_fake_real.png)

Слева: винт с имитацией резьбы. Справа: винт с настоящей резьбой. Если 3D печать не требуется, часто достаточно имитации резьбы.

### Вращение зубчатого профиля

1. Нажмите на ![](/images/PartDesign_Body.svg) [PartDesign Создать тело](/PartDesign_Body/ru "PartDesign Body/ru").
2. Нажмите на ![](/images/PartDesign_NewSketch.svg) [PartDesign Создать эскиз](/PartDesign_NewSketch "PartDesign NewSketch"). Select `XZ_Plane`.
3. Создайте эскиз с внутренним диаметром `10 мм`, внешним диаметром близким к `12.6 мм`, шагом `3 мм`, количеством зубьев `8`, и общей высотой `30 мм`.
4. Выберете эскиз, затем нажмите на ![](/images/PartDesign_Revolution.svg) [PartDesign Вращение](/PartDesign_Revolution/ru "PartDesign Revolution/ru"). Выберете `Вертикальная ось эскиза`, и нажмите кнопку OK.

![](/images/T13_02_Threads_Sawtooth_sketch_profile.png)

Профиль используемый для вращения и имитации резьбы.

![](/images/T13_03_Threads_Sawtooth_revolution_1.png) ![](/images/T13_04_Threads_Sawtooth_revolution_2.png)

Вид в разрезе резьбы без шага, созданной с помощью вращения зубчатого профиля, вокруг вертикальной оси.

### Укладка дисков

1. Повторите первые два шага из предыдущей секции.
2. Создайте эскиз с внутренним диаметром `10 мм`, внешним диаметром близким к `12.6 мм`, шагом `3 мм`, но в этот раз создайте только один зуб зубчатого профиля.
3. Выберете эскиз, затем нажмите на ![](/images/PartDesign_Revolution.svg) [PartDesign Вращение](/PartDesign_Revolution/ru "PartDesign Revolution/ru"). Выберете `Вертикальная ось эскиза`, и нажмите кнопку OK.
4. Выберете `Вращение`, затем нажмите на ![](/images/PartDesign_LinearPattern.svg) [PartDesign Линейный массив](/PartDesign_LinearPattern/ru "PartDesign LinearPattern/ru"). Выберете `Вертикальную ось`. Для имитации резьбы с шагом `3 мм`, выставите значение **Длина** на `3`, и **События** на `2`, затем нажмите OK. Так вы создадите два диска, один на другом.
5. Вы можете добавить больше дисков, увеличив значение **События** в линейной зависимости от**Длина**, которая будет полной диной имитации резьбы.

Параметры **Длина** и **События** связанны. Если длина слишком велика, а количество событий недостаточно, диски не соединятся и создать тело не удастся, так полученный объект должен быть [сплошным телом](/PartDesign_Body/ru "PartDesign Body/ru"). В примере, чтобы получить высоту `30 мм`, установите параметр **Длина** на `27 мм` а параметр **События** на `10`.

Если хотите, вы можете добавить ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Аддитивный цилиндр](/PartDesign_AdditiveCylinder/ru "PartDesign AdditiveCylinder/ru") с диаметром, равным внутреннему диаметру дисков, и высотой, равной высоте резьбы. Эта операция объединит все диски в одно тело, и гарантирует, что они не рассоединятся.

![](/images/T13_05_Threads_Stacked_discs_sketch.png)

Профиль, который использовался для создания диска, с помощью которого имитировалась резьба.

![](/images/T13_06_Threads_Stacked_discs_1.png) ![](/images/T13_07_Threads_Stacked_discs_2.png)

Слева: один диск, созданный вращением. Справа: несколько дисков, собранные в линейный массив в направление Z, имитирующие резьбу.

## Способ 4. Вращение вертикального профиля

### Верстак PartDesign

Настоящая резьба состоит из профиля вращаемого по спиральному пути.

1. В ![](/images/Workbench_Part.svg) [Верстаке Part](/Part_Workbench/ru "Part Workbench/ru"), нажмите на ![](/images/Part_Primitives.svg) [Part Создать примитивы](/Part_Primitives/ru "Part Primitives/ru") чтобы создать ![](/images/Part_Helix.svg) [Part Спираль](/Part_Helix "Part Helix"). Задайте необходимое значение для **Шаг** `3 мм`, **Высота** `23 мм`, и **Радиус** `10 мм`.
2. Переместитесь в ![](/images/Workbench_PartDesign.svg) [Верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"), и нажмите на ![](/images/PartDesign_Body.svg) [PartDesign Создать тело](/PartDesign_Body "PartDesign Body").
3. Click on ![](/images/PartDesign_NewSketch.svg) [PartDesign создать эскиз](/PartDesign_NewSketch/ru "PartDesign NewSketch/ru"). Выберете `XZ_Plane`.
4. Создайте эскиз необходимого для выступа резьбы, обычно треугольной формы. В нашем случае высота будет `2.9 мм`, немного меньше чем шаг спирали `3.0 мм`. Профиль не должен пересекаться сам с собой, ни при каких обстоятельствах, эскиз, использованный для укладки дисков не подойдет.
5. Выберете эскиз, нажмите на ![](/images/PartDesign_AdditivePipe.svg) [PartDesign Аддитивный профиль по траектории](/PartDesign_AdditivePipe/ru "PartDesign AdditivePipe/ru"). В меню **путь для выдавливания вдоль него**, нажмите на **Объект**, и выберите спираль, которую создал ранее. Затем измените **Режим ориентации** на `Френе` для того того, чтобы профиль не изгибался во время вращения; Затем нажмите OK.
6. В диалоговом окне выберите `Создать перекрестную ссылку`.
7. Создалась спиральная катушка, с полостью внутри.
8. Нажмите на ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Аддитивный цилиндр](/PartDesign_AdditiveCylinder/ru "PartDesign AdditiveCylinder/ru") с подходящем значением **Радиус** `10 мм` и **Высота** `29.9 мм` чтобы он касался винтовой катушкой и автоматически соединился с ней.
9. Дополнительные булевы операции необходимы, чтобы сравнять резкие концы катушки. К примеру, вы можете использовать аддитивные операции, для формирования головки и наконечника винта.

![](/images/T13_08_Threads_Helical_thread_profile.png) ![](/images/T13_09_Threads_Helical_thread_path.png)

Слева: Профиль для спиральной резьбы. Справа: Спиральный путь, который будет использован для создания катушки

![](/images/T13_10_Threads_Helical_thread_coil.png) ![](/images/T13_11_Threads_Helical_thread_coil_sliced.png)

Слева: катушка, образованная вращением профиля резьбы по винтовой траектории. Справа: вид катушки, полученной вращением, в разрезе.

![](/images/T13_12_Threads_Helical_thread_cylinder.png) ![](/images/T13_13_Threads_Helical_thread_finished.png)

Слева: Винтообразная катушка, соединенная с центральным цилиндром, для создания тела винта. Справа: больше операций, головка и наконечник были добавленный для улучшения формы винта.

### Верстак Part

Этот процесс также может быть проделан с использованием инструментов [Верстака Part](/Part_Workbench "Part Workbench")

1. В ![](/images/Workbench_Part.svg) [Верстаке Part](/Part_Workbench/ru "Part Workbench/ru"), нажмите на ![](/images/Part_Primitives.svg) [Part Создать примитивы...](/Part_Primitives/ru "Part Primitives/ru") чтобы создать ![](/images/Part_Helix.svg) [Part Спираль](/Part_Helix/ru "Part Helix/ru"). Задайте значения **Шаг** `3 мм`, **Высота** `23 мм`, и **Радиус** `10 мм`.
2. В этом случае вам не нужно ![](/images/PartDesign_Body.svg). Перейдите на ![](/images/Workbench_Sketcher.svg) [Верстак Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru"), затем нажмите на ![](/images/Sketcher_NewSketch.svg) [Sketcher Создать эскиз](/Sketcher_NewSketch "Sketcher NewSketch"), и выберете плоскость XZ.
3. Затем вернитесь в ![](/images/Workbench_Part.svg) [Верстак Part](/Part_Workbench "Part Workbench"), и воспользуйтесь инструментом ![](/images/Part_Sweep.svg) [Part Профиль по траектории](/Part_Sweep/ru "Part Sweep/ru").
4. Выберете подходящий эскиз из **Доступные профили** и нажмите на стрелочку, чтобы переместить его в **Выбранные профили**.
5. Нажмите на Траектории построения, и выберете все грани спирали с помощью [3D вида](/3D_view "3D view"). Нажмите на кнопку Готово.
6. убедитесь, что чек боксы ![](/images/CheckBoxTrue.svg) Создать твёрдое тело и ![](/images/CheckBoxTrue.svg) Френе активны. Получение тела необходимо, для использования [Part Булевы операции](/Part_Boolean "Part Boolean") с получившейся катушкой, в противном случае создадутся только поверхности, ограничивающие катушку.
7. Нажмите на OK чтобы выйти из меню и создать катушку.

Теперь вы можете добавить другие примитивы, к примеру ![](/images/Part_Cylinder.svg) [Part Цилиндр](/Part_Cylinder/ru "Part Cylinder/ru"), или другие, чтобы применить ![](/images/Part_Fuse.svg) [Part Объединение](/Part_Fuse/ru "Part Fuse/ru") или ![](/images/Part_Cut.svg) [Part Обрезать](/Part_Cut/ru "Part Cut/ru") чтобы закончить создание винта.

![](/images/T13_14_Threads_components.png)

Creating a thread coil by sweeping a vertical profile, (1) the [sketch profile](/Sketch "Sketch"), (2) the [helical](/Part_Helix "Part Helix") sweeping path, and (3) the result of the [sweep](/Part_Sweep "Part Sweep").

### Ключи к успеху

- _Rule 1._ When the profile sweeps the helix, the resulting solid coil must not touch or self-intersect as it will be an invalid solid. This holds for the profile moving along the helix, as well as intersections in the center of the helix. Attempts to do boolean operations with it (fuse or cut) are very likely to fail. Check the quality of the coil with ![](/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry"); if self-intersections are reported, you must increase the pitch of the helix.

![](/images/T13_15_Threads_self_intersection.png) ![](/images/T13_16_Threads_no_self_intersections_OK.png)

Left: invalid sweep generated by using a very small pitch of the helix compared to the height of the triangular profile. Right: pitch that is sufficiently large and doesn't cause self-intersections.

- _Rule 2._ When a cylinder is added to a coil to form the main shaft of a screw, the cylinder must not be tangent to the coil profile. That is, the cylinder must not have the same radius as the inner radius of the thread, as this is very likely to fail a fuse operation. In general, avoid geometry coincident to elements of the sweep, such as tangent faces, or edges tangent to faces they are not connected to. In order to produce a good boolean union, the swept coil and the cylinder must intersect. Check the quality of the fusion with ![](/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry"); if coplanar faces are reported increase the cylinder's radius by a small amount.
- If the coil and the cylinder are tangent, even if the first fusion succeeds, it may fail in subsequent boolean operations with a third solid.
- This is a limitation of the OpenCASCADE Technology (OCCT) kernel; in general, it doesn't handle well operations between coplanar surfaces.

![](/images/T13_17_Threads_tangent_faces.png) ![](/images/T13_18_Threads_no_tangent_faces_OK.png)

Left: the solid cylinder is tangent to the inner radius of the thread; this may result in an invalid boolean union. Right: the cylinder has a slightly larger radius, so the two solids intersect; this will result in a valid fusion.

- _Rule 3._ The inner cylinder has a seamline. You should avoid placing the start of the helix along that seam. Either turn the helix or the cylinder by some degrees.

- _Tip 1._ The radius of the helical path does not matter, unless the helix is tapered. All that matters is the pitch and the height of the helix. This means that you can use a single ![](/images/Part_Helix.svg) [Part Helix](/Part_Helix "Part Helix") to generate several threads with equal pitch. What determines the position of the resulting coil is the position of the profile [sketch](/Sketch "Sketch").

- _Tip 2._ Keep the thread short, that is, with a low number of turns. Long threads tend to fail with boolean operations. If you need to add many turns, consider creating first a short thread, and then using ![](/images/Draft_OrthoArray.svg) [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") to duplicate the same pattern several times.

- _Tip 3._ For 3D visualization and 3D printing it may be okay to leave the cylinder and the thread unfused, that is, with intersections between the two solids. Reducing the amount the boolean operations results in less memory consumption and smaller files.

### Pros and cons

- ![](/images/Edit_OK.svg) Easy to understand.
- ![](/images/Edit_OK.svg) Very natural way of defining a thread profile.
- ![](/images/Edit_OK.svg) No problems with meshing of the resulting object, unlike method 5.

- ![](/images/Edit_Cancel.svg) Due to invalidity of self-intersecting sweeps, it is next to impossible to generate a thread with no gap between each tooth, that is, with no straight cylindrical face at the inner sides of the thread.
- ![](/images/Edit_Cancel.svg) Boolean operations are required to obtain a single contiguous solid. Boolean operations take a relatively long time to calculate, and fail often.
- ![](/images/Edit_Cancel.svg) Threads with a high number of turns are problematic.

## Method 5. Sweeping a horizontal profile

### General

The idea is to sweep a horizontal cross-section of the thread along a helix. The main problem here is figuring out the profile to use to obtain such thread.

![](/images/Thread-by-horz-profile.png)

If one uses a circle as a horizontal profile (the circle has to be placed off the origin, that offset defines the depth of the thread), the thread profile will be sinusoidal.

To obtain a standard sawtooth profile, a pair of mirrored archimedean spirals need to be fused into a wire. The resulting figure is a heart shape, which becomes barely distinguishable from a circle when the depth of the thread is small compared to its diameter, this is why a "thick" thread is shown on the picture above.

### Generating the profile

Figuring out the horizontal profile to obtain a certain vertical profile is not easy. For simple cases like triangular or trapezoidal it can be constructed manually. Alternatively, it can be constructed by creating a short thread with method 4, and getting a slice of it by doing a [Part Common](/Part_Common "Part Common") between a horizontal plane face and the thread.

#### Profile for triangular thread

1. First create an Archimedian spiral in the XY plane.
   1. Set the number of turns to 0.5.
   2. Set the radius to the inner radius of the thread, the outer radius will be this plus the depth of the cut.
   3. Set the growth to double the depth of cut of the thread.
2. [Part Mirror](/Part_Mirror "Part Mirror") the spiral against the XY plane
3. [Part Fuse](/Part_Fuse "Part Fuse") the spiral and the mirror to obtain a closed wire, shaped like a heart.

#### Profile for arbitrary cross-section

![](/images/Thread-by-horz-profile-profileMake.png)

1. Make a vertical cut profile. Make sure that the height of the sketch matches the pitch of the thread you need.
2. Make a helix1 with height identical to the pitch and the pitch identical to the thread pitch, and a helix radius of 0.42\*nominal diameter of the thread.
3. Sweep the cut profile along the helix1. Set ![](/images/CheckBoxTrue.svg) Create solid and ![](/images/CheckBoxTrue.svg) Frenet.
4. Make a circle with nominal radius of the thread in the XY plane.
5. Make a face from the circle. This can be done with ![](/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") or ![](/images/Draft_Upgrade.svg) [Draft Upgrade](/Draft_Upgrade "Draft Upgrade"), then set Данные**MakeFace** to `true`.
6. Cut the face with the sweep profile.
7. Make a ![](/images/Draft_Clone.svg) [Draft Clone](/Draft_Clone "Draft Clone") from the cut.
8. Use ![](/images/Draft_Downgrade.svg) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") on the clone in order to get a wire. This wire is the horizontal profile needed for this method.
9. Make a helix with radius of nominal radius of the thread and a pitch of the thread and the height of the needed thread.
10. Sweep the wire along the helix. Set ![](/images/CheckBoxTrue.svg) Create solid and ![](/images/CheckBoxTrue.svg) Frenet.
11. You are done.

The step-by-step guide was taken from this [forum post by Ulrich1a](http://forum.freecad.org/viewtopic.php?f=3&t=6506#p52558) ("Creating a thread: Unexpected results"), slightly modified.

The steps are also shown in action on [this video by Gaurav Prabhudesai](http://www.youtube.com/watch?v=fxKxSOGbDYs) ("FreeCAD : How to make threads").

### Pros and cons

- ![](/images/Edit_OK.svg) a ready-to-use thread-on-a-rod solid shape is created by the sweep directly.
- ![](/images/Edit_OK.svg) fewer or even no boolean operations are required, so generation speed is very high compared to Method 4.
- ![](/images/Edit_OK.svg) thread ends are nicely cut straight away
- ![](/images/Edit_OK.svg) long threads are not a problem, unless a boolean operation is needed. Otherwise, it is not going to be much better than Method 4.
- ![](/images/Edit_OK.svg) threads without a gap are not a problem.

- ![](/images/Edit_Cancel.svg) defining thread profile is complicated.
- ![](/images/Edit_Cancel.svg) using the standard mesher with a thread created in this way generates ugly meshes, which can lead to problems. Other meshers are better, for example, Mefisto seems to give the best results.
- ![](/images/Edit_Cancel.svg) large memory footprint according to [Gathering thread modeling techniques](http://forum.freecad.org/viewtopic.php?f=3&t=12593&start=10#p101197).

## Method 6. Lofting between helical extruded faces

### General

Helical splines will extrude coaxial faces that are able to be lofted, while FreeCAD's parametric helix won't. It takes two helical splines to define a thread. Those two can be scaled from a library spline, then located and extruded appropriately to get the form right.

FreeCAD's parametric helixes aren't truly helical, but helical b-splines aren't difficult to lay out. One manual method is to array dodecagons (12-sided polygons) with 5mm radius/10mm diameter at 1/12mm (0.08333.mm) z intervals and trace splines from vertex to vertex in ascending and rotating order, and to consider doing it once with, say, 10 turns, so that that spline can be re-used as a library file for import and reuse. It's convenient to use 10mm diameter/1mm pitch for ease of scaling. If you are doing it manually, drawing a Dwire and then converting it to a b-spline is easier than drawing a spline. Dwires don't have curvature computed while being drawn, so they follow the cursor and snap more obediently.

Once the splines are scaled to the right size and located so that the loft will have the right included angle between the thread flanks, they're extruded along their axis, a pitch length's worth for the inner spline, the outer pitch/8.

![](/images/Splineextrudeloft.png)

ISO and other threads have relieved, ie flat, inner and outer edges rather than sharp, which suits FreeCAD users with this method, because we can loft to the helical face at the nominal fastener size, while an inner face can't be lofted to an outer edge spline because a face is a closed profile, a spline is open. ISO standard says the nominal size of external threads have a face width pitch/8. The picture shows how the geometry is arranged, and the helical faces that result. Then, loft between the faces, and then a cylinder that gives the inner helical face, which ISO puts at pitch/4 width, is added to the threads.

![761PX](/images/Threadform.PNG)

This method produces reliable solids that boolean properly. While it doesn't produce "parametric" screw threads in standard sizes in the sense of having simple access to form by fastener size, it's an easy way of producing an accurate library for reuse, and models of specialised forms like ACME, or Archimedian screws, are also uncomplicated as one-offs.

Retrieved from "<http://wiki.freecad.org/index.php?title=Thread_for_Screw_Tutorial/ru&oldid=1355782>"
