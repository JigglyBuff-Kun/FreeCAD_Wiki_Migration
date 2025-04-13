---
title: Sketcher Ограничение эквивалентности
---
|  |
| --- |
| Ограничение эквивалентностью |
| Расположение в меню |
| Sketch → Ограничения эскиза → Ограничение эквивалентностью |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| E |
| Представлено в версии |
| - |
| См. также |
| [Ограничить радиус или вес](/Sketcher_ConstrainRadius/ru "Sketcher ConstrainRadius/ru") |
|  |

## Описание

Ограничение эквивалентности делает равным длину указанных отрезков в линии, ломаной или прямоугольнике. При применении к дугам или окружностям их радиусы становятся равными. Данное ограничение нельзя применять к геометрическим примитивам, которые не относятся к одному и тому же типу (например, нельзя применить к отрезку и дуге).

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainEqual.svg) [Constrain equal](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
   * Use the keyboard shortcut: E.
3. The cursor changes to a cross with the tool icon.
4. Select two edges of the same type.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select two or more edges of the same type.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Программирование

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge1` and `Edge2` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/ru&oldid=1405063>"