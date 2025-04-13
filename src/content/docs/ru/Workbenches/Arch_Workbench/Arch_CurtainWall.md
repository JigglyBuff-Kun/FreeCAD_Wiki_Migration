---
title: Arch Светопрозрачный фасад
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Светопрозрачный фасад |
| Расположение в меню |
| Arch → Светопрозрачный фасад |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| C W |
| Представлено в версии |
| 0.19 |
| См. также |
| [Стена](/Arch_Wall/ru "Arch Wall/ru"), [Сетка](/Arch_Grid/ru "Arch Grid/ru") |
|  |

## Описание

The **Arch CurtainWall** tool creates a [curtain wall](https://en.wikipedia.org/wiki/Curtain_wall_(architecture)) by subdividing a base face into quadrangular faces, then creating vertical mullion on the vertical edges, horizontal mullions on the horizontal edges, and filling the spaces between mullions with panels.

![](/images/Arch_CurtainWall_example.png)

Curtain Walls can be created from any type of existing object, in which case all the faces of the object will be subdivided. It works therefore best if used with an object that has only one face. Typically, you would first create a face, preferably bound by exactly 4 edges, that represents the area you want to fill with a curtain wall, then apply the tool.

Curtain walls can also be built from a linear object, such as a line, arc or polyline, like the normal [wall](/Arch_Wall "Arch Wall") tool.

Faces that have double curvature, or faces with more than 4 edges will work too, but the result is less predictable.

Faces will be divided in quadrangular facets. If the 4 points of the facet are coplanar, a square facet is created. If not, it is divided into two triangles and a diagonal mullion is added.

In case you need a non-regular subdivision, it is also possible to build your own subdivided object, for example using [Arch Grid](/Arch_Grid "Arch Grid"), and set the vertical and horizontal subdivisions of the curtain wall to 1.

You can also use the curtain wall tool without any selected object, in which case you will be able to draw a baseline, which will the be extruded vertically to form the face on which the curtain wall will be built.

## Применение

### Drawing a curtain wall from scratch

1. Make sure nothing is selected
2. There are several ways to invoke the tool:
   * Press the ![](/images/Arch_CurtainWall.svg) [Curtain Wall](/Arch_CurtainWall "Arch CurtainWall") button.
   * Select the **3D/BIM → ![](/images/Arch_CurtainWall.svg) Curtain Wall** option from the menu.
   * Use the keyboard shortcut: C then W.
3. Click a first point on the 3D view, or type coordinates.
4. Click a second point on the 3D view, or type coordinates.
5. Adjust needed properties.

### Creating a curtain wall from a selected object

1. Select one or more base geometry objects (Draft object, sketch, etc).
2. Invoke the tool as described above.
3. Adjust needed properties.

## Опции

* Curtain wall mullions can be made from an automatic square profile (set their **Mullion Size** properties) or from a custom profile (set their **Mullion Profile** property). The mullions can be centered over each edge, or placed relatively to the (0,0,0) point by turning off the **Center Profile** property. For example, if you want a profile to be placed slightly behind the panels, you would draw that profile slightly below the (0,0,0) origin point.
* Curtain walls support [Multi-materials](/Arch_MultiMaterial "Arch MultiMaterial"). Inside the multi-material, the **Frame** layer will be used for the mullions, and the **Glass panel** layer for panels, or **Solid panel** if no Glass panel layer exists in the multi-material.
* Curtain walls can be based on a linear object such as a line, arc or polyline. In that case, internally, a base surface will be built by extruding the linear object along the direction given by the **Vertical Direction** property, by the length given by the **Height** property.

## Свойства

An Arch CurtainWall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

* Данные**Vertical Mullion Number**: The number of vertical mullions
* Данные**Vertical Mullion Alignment**: If the profile of the vertical mullions get aligned with the surface or not
* Данные**Vertical Sections**: The number of vertical sections of this curtain wall
* Данные**Vertical Mullion Height**: The height of the vertical mullions profile, if no profile is used
* Данные**Vertical Mullion Width**: The width of the vertical mullions profile, if no profile is used
* Данные**Vertical Mullion Profile**: A profile for vertical mullions (disables vertical mullion size)
* Данные**Horizontal Mullion Number**: The number of horizontal mullions
* Данные**Horizontal Mullion Alignment**: If the profile of the horizontal mullions gets aligned with the surface or not
* Данные**Horizontal Sections**: The number of horizontal sections of this curtain wall
* Данные**Horizontal Mullion Height**: The height of the horizontal mullions profile, if no profile is used
* Данные**Horizontal Mullion Width**: The width of the horizontal mullions profile, if no profile is used
* Данные**Horizontal Mullion Profile**: A profile for horizontal mullions (disables horizontal mullion size)
* Данные**Diagonal Mullion Number**: The number of diagonal mullions
* Данные**Diagonal Mullion Size**: The size of the diagonal mullions, if any, if no profile is used
* Данные**Diagonal Mullion Profile**: A profile for diagonal mullions, if any (disables horizontal mullion size)
* Данные**Override Edges**: ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) Input are index numbers of edges of Base ArchSketch/Sketch geometries (in Edit mode). Selected edges are used to create the shape of this Arch Curtain Wall (instead of using all edges by default). Ignored if Base ArchSketch provided the selected edges. ENHANCEMENT by ArchSketch: GUI 'Edit Curtain Wall' Tool is provided in the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) to let users to select the edges interactively. 'Toponaming-Tolerant' if ArchSketch is used in Base (and SketchArch Add-on is installed). Warning: Not 'Toponaming-Tolerant' if just Sketch is used. (See forum thread - <https://forum.freecad.org/viewtopic.php?t=73018&start=40#p756554>)
* Данные**Panel Number**: The number of panels
* Данные**Panel Thickness**: The thickness of the panels
* Данные**Swap Horizontal Vertical**: Swaps horizontal and vertical lines
* Данные**Refine**: Perform subtractions between components so none overlap
* Данные**Center Profiles**: Centers the profile over the edges or not
* Данные**Vertical Direction**: The vertical direction reference to be used by this object to deduce vertical/horizontal directions. Keep it close to the actual vertical direction of your curtain wall
* Данные**Height**: The height of this curtain wall, in case it is based on a linear object
* Данные**Host**: The host of this curtain wall. The curtain wall will appear embedded in its host object in the tree view (no other action is performed)

## Изготовление каркасных стен

Curtain walls are convenient to use in conjunction with [walls](/Arch_Wall "Arch Wall") to create frame walls (walls where an inner, structural layer is made of frames, usually wooden or metal, instead of an homogeneous material such as concrete or brick).

![](/images/Frame_wall_example.png)

The procedure described below creates a wall and a curtain wall based on a same baseline, then gives the wall a multi-material which leaves an empty space, where the curtain wall is placed:

1. Create a normal [Arch Wall](/Arch_Wall "Arch Wall"), either by clicking two points of from an existing linear object
2. Select the base object of the newly created arch wall
3. Press the ![](/images/Arch_CurtainWall.svg) [CurtainWall](/Arch_CurtainWall "Arch CurtainWall") button, or press the C then W keys to create a curtain wall from the same baseline as the wall
4. Make sure both the wall and curtain wall have the same **Height**
5. Set the number of **horizontal sections** of the curtain wall to zero if you wish only vertical frames
6. Set the desired **horizontal mullion width** and **horizontal mullion height** (or use a mullion profile)
7. Prepare two (or more) [materials](/Arch_SetMaterial "Arch SetMaterial"), one for the panels, one for the void where the frame will be
8. Make one [multi-material](/Arch_MultiMaterial "Arch MultiMaterial"), using one layer of the panel material, one layer of the void material with a negative width value (which will make it not drawn) corresponding to the vertical mullion height of the curtain wall, and another layer of panel material
9. Attribute the multi-material to the wall
10. Set the **Host** property of the curtain wall to the wall we created in first point

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Curtain wall tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
MyCurtainWall = makeCurtainWall(baseobj)

```

Пример:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseface = FreeCAD.ActiveDocument.addObject('Part::Extrusion','Extrusion')
baseface.Base = baseline
baseface.DirMode = "Normal"
baseface.LengthFwd = 2000
curtainwall = Arch.makeCurtainWall(baseface)
curtainwall.VerticalSections = 6
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CurtainWall/ru&oldid=1543695>"