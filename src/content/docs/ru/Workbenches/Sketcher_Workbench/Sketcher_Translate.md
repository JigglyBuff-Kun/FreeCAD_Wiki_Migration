---
title: Скетчер Преобразование перемещения/массива
---
|  |
| --- |
| Sketcher Translate |
| Menu location |
| Sketch → Sketcher tools → Array transform |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| W |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Описание

The ![](/images/Sketcher_Translate.svg) [Sketcher Translate](/Sketcher_Translate "Sketcher Translate") tool moves or optionally creates copies of selected elements. Copies are evenly distributed along one or two directions.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences").  
Dim-OVP = Dimensional On-View-Parameters.

### Move geometry

1. Select one or more edges and/or [Point objects](/Sketcher_CreatePoint "Sketcher CreatePoint"). Constraints restricted to the selected elements are also processed. Any other constraints associated with the elements will be deleted.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate") button.
   * Select the **Sketch → Sketcher tools → ![](/images/Sketcher_Translate.svg) Array transform** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_Translate.svg) Array transform** option from the context menu.
   * Use the keyboard shortcut: W.
3. The cursor changes to a cross with the tool icon.
4. The **Translate parameters** section is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Pick the start point of the translation vector. Or with Pos-OVP: enter its X and/or Y coordinate.
6. Pick the end point of the translation vector. Or with Dim-OVP: enter the length and/or angle of the vector. The angle is relative to the X axis of the sketch.
7. The elements are moved. No Pos-OVP or Dim-OVP based constraints are added.

### Copy geometry

1. Select one or more edges and/or [Point objects](/Sketcher_CreatePoint "Sketcher CreatePoint"). Constraints restricted to the selected elements are also processed.
2. Invoke the tool as explained above.
3. The cursor changes to a cross with the tool icon.
4. The **Translate parameters** section is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally change the number of **Copies** along the first vector:
   * Enter a number.
   * Press the U key to increase the number.
   * Press the J key to decrease the number.
6. Optionally change the number of **Rows** along the second vector:
   * Enter a number.
   * Press the R key to increase the number.
   * Press the F key to decrease the number.
7. Optionally check the **Apply equal constraints** checkbox to exclude dimensional constraints from the operation, and instead apply ![](/images/Sketcher_ConstrainEqual.svg) [Equal constraints](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") between the original objects and their copies.
8. Pick the start point of the first vector. Or with Pos-OVP: enter its X and/or Y coordinate. This vector defines the offset between copies.
9. Pick the end point of the first vector. Or with Dim-OVP: enter the length and/or angle of the vector. The angle is relative to the X axis of the sketch.
10. If there are two or more rows: Pick the end point of the second vector. Or with Dim-OVP: enter the length and/or angle of the vector. The angle is relative to the X axis of the sketch. This vector defines the offset between rows.
11. The elements are copied. No Pos-OVP or Dim-OVP based constraints are added.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Translate/ru&oldid=1564204>"