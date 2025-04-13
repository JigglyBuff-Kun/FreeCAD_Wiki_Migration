---
title: Sketcher Ограничение касательности
---
|  |
| --- |
| Ограничение касательности |
| Расположение в меню |
| Sketch → Ограничения эскиза → Ограничение касательности |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| T |
| Представлено в версии |
| - |
| См. также |
| [Зафиксировать точку на объекте](/Sketcher_ConstrainPointOnObject/ru "Sketcher ConstrainPointOnObject/ru") |
|  |

## Описание

Ограничение касательности делает две кривые касающимися друг друга. Линии полагаются бесконечными, а дуги как полные окружности или эллипсы. Ограничение также может соединять две кривые, заставляя их идти по касательной в точке соединения, делая переход гладким.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainTangent.svg) [Constrain tangent or collinear](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the context menu.
   * Use the keyboard shortcut: T.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two edges. The edges can be any edge except a B-spline.
   * Select a point and two edges (in that order).
   * Select an edge, a point and another edge (idem).
5. A Tangent constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select two edges (see above).
   * Select two endpoints belonging to different edges.
   * Select an edge and the endpoint of another edge (in any order).
   * Select a point and two edges (idem).
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the context menu.
3. A Tangent constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Examples

### Между двумя кривыми (прямое касание)

![](/images/Sketcher_ConsraintTangent_mode1.png)

![](/images/Sketcher_ConsraintTangent_mode1.png)

The two edges are made tangent. If one of the edges is a [conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench"), a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both (extended) edges is added.

Не рекомендуется реконструировать точку касания созданием точки и установкой принадлежности её обоим кривым. Это будет работать, но конвергенция будет значительно медленнее, сложнее, и потребует вдвое больше итераций чем в норме. Используйте другие режимы этого ограничения, если нужна точка касания.

### Между двумя конечными точками (касание точка-к-точке)

![](/images/Sketcher_ConsraintTangent_mode2.png)

![](/images/Sketcher_ConsraintTangent_mode2.png)

The endpoints are made coincident, and the angle between the edges at that point is set to 180° (smooth joint) or 0° (sharp joint), depending on the placement of the edges before the constraint is applied.

### Между кривой и конечной точкой (касательная точки к кривой)

![](/images/Sketcher_ConsraintTangent_mode3.png)

![](/images/Sketcher_ConsraintTangent_mode3.png)

В этом режиме конечная точка одной кривой ограничивается лежать на другой кривой так, чтобы обе кривые были касательными в этой точке. Этот режим применяется, когда выделены кривая и конечная точка другой кривой.

### Между двумя кривыми в точке (касательная через точку) (v0.15)

![](/images/Sketcher_ConsraintTangent_mode4.png)

![](/images/Sketcher_ConsraintTangent_mode4.png)

В этом режиме две кривые делаются касательными и отслеживается точка касания. Этот режим применяется, когда выделены две кривые и точка.

В сравнении с прямой касательностью, это ограничение медленнее, поскольку привлекается большее число степеней свободы, но если нужна точка касания, это рекомендованный режим, поскольку он предлагает лучшую сходимость в сравнении к прямому касанию + точке на двух кривых.

### Между двумя линиями (коллинеарно)

![](/images/Sketcher_ConstraintTangent_mode5.png)

The two lines are made collinear.

## Программирование

Ограничение касательности может создаваться из [макросов](/Macros/ru "Macros/ru") и из консоли [Python](/Python/ru "Python/ru") следующим образом:

```
# direct tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,icurve2))

# point-to-point tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2))

# tangent-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('TangentViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

Где:

:   * `Sketch` это объект эскиза
    * `icurve1`, `icurve2` это два целых идентификатора кривых, которые станут касательными. Целые это индексы в эскизе (значения, возвращаемые `Sketch.addGeometry`).
    * `pointpos1`, `pointpos2` должны быть 1 для начальной и 2 для конечной точки.
    * `geoidpoint` и `pointpos` в `TangentViaPoint` это индексы, указывающие точку касания.

На странице [Программирование в Sketcher](/Sketcher_scripting/ru "Sketcher scripting/ru") объясняются значения, которые можно использовать для `incurve1`, `incurve2`, `pointpos1`, `pointpos2`, `geoidpoint` и `pointpos` а также содержатся дополнительные примеры того, как создавать ограничения из сценариев Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainTangent/ru&oldid=1433986>"