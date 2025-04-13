---
title: Taslak Kısıtlama
---
## Description

Kısıtlama kullanmak için çizim yaparken  SHIFT tuşuna basın.

Constraining is available with most [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench") commands.

![](/images/Draft_Constrain_taskpanel_example.png)

While the cursor is constrained the task panel locks the values that are not being modified

## Usage horizontal and vertical constraints

1. Choose a [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") command to create your geometry.
2. Pick a first point. A previous point is required.
3. Do one of the following:
   * For a horizontal constraint: move the cursor to the left or right of the previous point.
   * For a vertical constraint: move the cursor above or below the previous point.
4. Hold down Shift.
5. The cursor is now constrained.
6. Pick the next point.
7. If the command is still active: optionally release Shift to disable the constraint.
8. Always release Shift when the command is finished.

## Usage X, Y and Z constraints

1. Choose a [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") command to create your geometry.
2. Pick a first point. A previous point is required.
3. Press X, Y or Z to specify the direction.
4. The cursor is now constrained.
5. Pick the next point.
6. If the command is still active optionally do one of the following:
   * Press the same key to disable the constraint.
   * Press one of the two other keys to constrain in a different direction.
7. X, Y and Z constraints are automatically disabled when the command is finished.

## Notes

* Constraining can be combined with [snapping](/Draft_Snap "Draft Snap").
* The [Draft Offset](/Draft_Offset "Draft Offset") command and [Draft Trimex](/Draft_Trimex "Draft Trimex") command use a different type of constraining, namely to restrict the operation to a certain segment.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* The default **Constrain modifier** key, Shift, can be changed: **Edit → Preferences... → Draft → Grid and snapping → Constrain modifier**.
* The **X**, **Y** and **Z** shortcuts can be changed: **Edit → Preferences... → Draft → Interface → In-command shortcuts**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Constrain/tr&oldid=1456218>"