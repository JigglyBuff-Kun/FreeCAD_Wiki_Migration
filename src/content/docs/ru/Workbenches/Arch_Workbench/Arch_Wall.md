---
title: Arch "Стена"
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Стена |
| Расположение в меню |
| Архитектура → Стена |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| W A |
| Представлено в версии |
| - |
| См. также |
| [Структура](/Arch_Structure/ru "Arch Structure/ru") |
|  |

## Описание

Этот инструмент создает объект Wall с нуля или поверх любого другого объекта  [shape](/Part_Workbench "Part Workbench") или  [mesh](/Mesh_Workbench "Mesh Workbench"). Стена может быть построена без какого-либо базового объекта, и в этом случае она ведет себя как кубический том, используя свойства длины, ширины и высоты. При построении поверх существующей формы стена может основываться на:

* A **linear 2D object**, such as lines, wires, arcs or sketches, in which case you can change thickness, alignment (right, left or centered) and height. The length property has no effect.
* A **flat face**, in which case you can only change the height. Length and width properties have no effect. If the base face is vertical, however, the wall will use the width property instead of height, allowing you to build walls from space-like objects or mass studies.
* A **solid**, in which case length, width and height properties have no effect. The wall simply uses the underlying solid as its shape.
* A **mesh**, in which case the underlying mesh must be a closed, manifold solid.

![](/images/Arch_Wall_example.jpg)

Walls built from a line, a wire, a face, a solid, and a sketch

Walls can also have additions or subtractions. Additions are other objects whose shapes are joined in this Wall's shape, while subtractions are subtracted. Additions and subtractions can be added with the [Arch Add](/Arch_Add "Arch Add") and [Arch Remove](/Arch_Remove "Arch Remove") tools. Additions and subtractions have no influence over wall parameters such as height and width, which can still be changed. Walls can also have their height automatic, if they are included into a higher-level object such as [floors](/Arch_Floor "Arch Floor"). The height must be kept at 0, then the wall will adopt the height specified in the parent object.

When several walls should intersect, you need to place them into a [floor](/Arch_Floor "Arch Floor") to have their geometry intersected.

## Применение

### Рисование стены с нуля

1. Нажмите кнопку ![](/images/Arch_Wall.svg) Arch Wall, или нажмите W, затем A.
2. Щелкните первую точку на трехмерном изображении или введите первую координату.
3. Нажмите вторую точку на трехмерном представлении или введите вторую координату.

### Drawing a wall on top of a selected object

1. Select one or more base geometry objects (Draft object, sketch, etc).
2. Invoke the tool as described above.
3. Adjust needed properties such as height or width.

## Опции

* The height, width and alignment of a wall can be set during drawing, via the task panel.
* When snapping a wall to an existing wall, both walls will be joined into one. The way the two walls are joined depends on their properties: If they have the same width, height and alignment, and if the option "join base sketches" is enabled in the Arch preferences, the resulting wall will be one object based on a sketch made of several segments. Otherwise, the latter wall will be added to the first one as addition.
* Press X, Y or Z after the first point to constrain the second point on the given axis.
* To enter coordinates manually, simply enter the numbers, then press Enter between each X, Y and Z component.
* Press R or click the checkbox to check/uncheck the **Relative** button. If relative mode is on, the coordinates of the second point are relative to the first one. If not, they are absolute, taken from the (0,0,0) origin point.
* Press Shift while drawing to [constrain](/Draft_Constrain "Draft Constrain") your second point horizontally or vertically in relation to the first one.
* Press Esc or the Cancel button to abort the current command.
* Double-clicking on the wall in the tree view after it is created allows you to enter edit mode and access and modify its additions and subtractions
* Multi-layer walls can be easily created by building several walls from the same baseline. By setting their Align property to either left or right, and specifying an Offset value, you can effectively construct several wall layers. Placing a window in such a wall layer will propagate the opening to the other wall layers based on the same baseline.
* Walls can also make use of [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). When using a multi-material, the wall will become multi-layer, using the thicknesses specified by the multi-material. Any layer with a thickness of zero will have its thickness defined automatically by the remaining space defined by the Wall's Width value, after subtracting the other layers.
* Walls can be made to display blocks, instead of one single solid, by turning their Данные**Make Blocks** property on. The size and offset of blocks can be configured with different properties, and the amount of blocks is automatically calculated.

## Привязки

Привязка к стенам Arch работает немного иначе, чем с другими объектами Arch и Draft. Если стена имеет базовый объект, привязка будет привязана к базовому объекту, а не к геометрии стены, что позволит легко выровнять стены по их базовой линии. Однако, если вы специально хотите привязаться к геометрии стены, нажатие Ctrl переключит привязку на объект стены.

![](/images/Arch_wall_snap.jpg)

Second wall snapping perpendicularly to the first one

## Свойства

An Arch Wall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Blocks

* Данные**Block Height**: The height of each block.
* Данные**Block Length**: The length of each block.
* Данные**Count Broken**: The number of broken blocks (read-only).
* Данные**Count Entire**: The number of entire blocks (read-only).
* Данные**Joint**: The size of the joints, the empty space, between blocks.
* Данные**Make Blocks**: Enables block generation.
* Данные**Offset First**: The horizontal offset of the first and every uneven line of blocks.
* Данные**Offset Second**: The horizontal offset of the second and every even line of blocks.

Component

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC Attributes

See [Arch Component](/Arch_Component#Properties "Arch Component").

Wall

:   ![](/images/Sketch_vs_Wall.jpg)

* Данные**Align**: The alignment of the wall on its baseline(s): Left, Right or Center. With Left and Right modes the side where the wall is created depends on the direction of each individual baseline. In other words, the direction of the individual edges of the Base object (Sketch/ArchSketch) is taken into account, giving finer control over each wall segment. See the diagram above for more details. Arcs in sketches are always counter-clockwise. When a curved segment of a wall is left aligned, the inner edge of the segment coincides with the arc in the sketch. See also **Override Align**.
* Данные**Area**: Area of the whole wall, separation into blocks makes no difference (read-only).
* Данные**Face**: The index of the face from the base object to use. If the value is not set or 0, the whole object is used.
* Данные**Height**: The height of the wall. Ignored if the wall is based on a solid. If set to zero, and the wall is inside a [floor](/Arch_Floor "Arch Floor") object with its height defined, the wall will automatically take the value of the floor height.
* Данные**Length**: The length of the wall. The value can be edited if the wall is based on an unconstrained sketch with a single edge, or on a [Draft Wire](/Draft_Wire "Draft Wire") with a single edge, else the value is read-only. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") The value when the property is read-only is more accurate. It is based on the medium of the wall if segments have different Данные**Width**, Данные**Align** and/or Данные**Offset** properties. Note that there can still be inaccuracies if the wall is complex, for example if it has T-junctions or self-intersections. In such cases it is advisable to instead use the Данные**Horizontal Area** property for further calculations.
* Данные**Normal**: The extrusion direction for the wall. If set to (0,0,0), the extrusion direction is automatic.
* Данные**Offset**: The distance between the wall and its baseline. Works only if the **Align** property is set to Right or Left. The direction of the individual edges of the Base object (Sketch/ArchSketch) is taken into account, giving finer control over each wall segment. See also **Override Offset**.
* Данные**Override Align**: This overrides **Align** attribute to set align of each segment of wall. Ignored if Base object provides Aligns information, with getAligns() method (If a value is not 'Left, Right, Center', the value of 'Align' will be followed). ENHANCEMENT by ArchSketch: GUI 'Edit Wall Segment Align' Tool is provided in the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) to let users to set the values interactively. 'Toponaming-Tolerant' if ArchSketch is used in Base (and SketchArch Add-on is installed). Warning: Not 'Toponaming-Tolerant' if just Sketch is used.
* Данные**Override Width**: This overrides the **Width** property and allows setting a different width for each segment of the wall. The input is a list of numerical widths (without unit specifier), one for each segment of the wall. If a value in the list is 0, the corresponding segment will use the wall's **Width** property value, effectively clearing the override segment-wise. This property is ignored if the wall's base object provides widths information with the `getWidths()` method (such as sketches created with the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) do). That add-on also provides additional enhancements: a graphical *Edit Wall Segment Width* tool to enable users to set the width values interactively, and toponaming tolerance if an ArchSketch object is used as the wall's base object (and if the add-on is installed).
* Данные**Override Offset**: ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) This overrides **Offset** attribute to set offset of each segment of wall. Ignored if Base object provides Offsets information, with getOffsets() method (If a value is zero, the value of 'Offset' will be followed). ENHANCEMENT by ArchSketch: GUI 'Edit Wall Segment Offset' Tool is provided in the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) to let users to select the edges interactively. 'Toponaming-Tolerant' if ArchSketch is used in Base (and SketchArch Add-on is installed). Warning: Not 'Toponaming-Tolerant' if just Sketch is used. Property is ignored if Base ArchSketch provided the selected edges.
* Данные**Width**: The width of the wall. Ignored if the wall is based on a face or a solid. See also **Override Width**.

## Scripting

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Инструмент «Стена» может использоваться в [макросах](/Macros/ru "Macros/ru") и на консоли [Python](/Python "Python") с помощью следующей функции:

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

* Creates a `Wall` object from the given `baseobj`, which can be a [Draft object](/Draft_Workbench "Draft Workbench"), a [Sketch](/Sketcher_Workbench "Sketcher Workbench"), a face, or a solid.
  + If no `baseobj` is given, you can provide the numerical values for the `length`, `width` (thickness), and `height`.
  + If given, `face` can be used to give the index of a face from the underlying object, to build this wall on, instead of using the whole object.
* `align` can be `"Center"`, `"Left"` or `"Right"`.
* It returns `None` if the operation fails.

Пример:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/ru&oldid=1548510>"