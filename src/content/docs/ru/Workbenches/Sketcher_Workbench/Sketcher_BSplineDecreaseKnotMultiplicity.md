---
title: Sketcher "Уменьшение кратности узлов"
---
|  |
| --- |
| Уменьшение кратности узлов |
| Расположение в меню |
| Sketch → B-сплйан инструменты эскиза → Уменьшение кратности узлов |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Показать/скрыть кратность узлов B-сплайна](/Sketcher_BSplineKnotMultiplicity/ru "Sketcher BSplineKnotMultiplicity/ru"), [Увеличение кратности узлов](/Sketcher_BSplineIncreaseKnotMultiplicity/ru "Sketcher BSplineIncreaseKnotMultiplicity/ru") |
|  |

## Описание

The ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Sketcher BSplineDecreaseKnotMultiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity") tool decreases the multiplicity of a [B-spline](/B-Splines "B-Splines") knot.

## Применение

1. Select a B-spline knot.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity") button.
   * Select the **Sketch → Sketcher B-spline tools → ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Decrease knot multiplicity** option from the menu.

## Example

See [Sketcher\_BSplineIncreaseKnotMultiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity#Example "Sketcher BSplineIncreaseKnotMultiplicity")

## Notes

If you decrease the multiplicity of a knot to zero, the knot vanishes. Mathematically it then appears zero times in the knot vector, meaning there is no longer a basis function. Understanding this requires some math, but it will also be clear if you look at the multiplicity. For example a knot with multiplicity 0 on a B-spline with degree 3
means that at the position of the knot two Bézier pieces are connected with *C3* continuity. So the third derivative should be equal on both sides of the knot. However for a cubic Bézier curve this means that both sides must be part of the same curve. There is then effectively no longer a knot connecting two Bézier curves.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/ru&oldid=1403947>"