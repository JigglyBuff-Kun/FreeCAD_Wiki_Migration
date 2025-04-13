---
title: Arch SectionPlane
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch SectionPlane |
| Menyplacering |
| Arch → Section Plane |
| Arbetsbänkar |
| [Arch](/Arch_Workbench "Arch Workbench") |
| Standard genväg |
| S P |
| Introducerad i version |
| - |
| Se även |
| [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView"), [TechDraw NewArch](/TechDraw_ArchView "TechDraw ArchView") |
|  |

## Beskrivning

Detta verktyg placerar en sektionplansvisare i nuvarande dokument, vilken definierar ett tvärsnitt eller vy-plan. visaren kan omplaceras och omorienteras genom att flytta och rotera den, tills den visar den 2D vy som du vill erhålla. Om verktyget används utan att några objekt är markerade, så kommer alla objekt från scenen att inkluderas i 2D vyn. Om några objekt är markerade, så kommer 2D vyn endast att visa dessa objekt.

Objekt kan senare adderas eller tas bort från ett SectionPlane objekt med [Arch Add](/Arch_Add/sv "Arch Add/sv") och [Arch Remove](/Arch_Remove/sv "Arch Remove/sv") verktygen.

Vid skapandet, så skapar SectionPlane objekt för närvarande ett [Ritningssida](/Drawing_Workbench/sv "Drawing Workbench/sv") objekt vilken innehåller den projicerade 2D vyn av de objekt som behandlas av Section Plane.

![](/images/Arch_SectionPlane_example.jpg)
Till vänster i bilden ovan placeras ett Section Plane objekt i scenen, och till höger dess SVG 2D representation. Ytsortering är för närvarande inte helt implementerad.

#### Bruk

* Välj objekt
* Klicka på ![](/images/Arch_SectionPlane.png) **SectionPlane** knappen
* Flytta/rotera Section Plane till korrekt position
* Klicka på ![](/images/Std_Recompute.png) **Beräkna om** knappen för att uppdatera vyn

## Options

* The Section plane object will only consider a certain set of objects, not all the objects of the document. Objects can be added or removed from a SectionPlane object by using the [Arch Add](/Arch_Add "Arch Add") and [Arch Remove](/Arch_Remove "Arch Remove") tools, or by double-clicking the Section Plane in the tree view, selecting objects either in the list of in the 3D scene, and pressing the **add** or **remove** buttons.

* With a section plane object selected, use the [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") tool to create a shape object representing the section view in the document.

![](/images/Arch_Section_example2.jpg)

* Create [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView").

![](/images/Arch_Section_example3.jpg)

* The Section Plane can also be used to show the entire 3D view cut by an infinite plane. This is only visual, and won't affect the geometry of the objects being cut.

![](/images/Arch_SectionPlane_CutView.jpg)

## Properties

* Data**Only Solids**: If this is True, non-solid objects in the set will be disregarded
* Vy**Display Length**: The length of the section plane gizmo in the 3D view. Doesn't affect the resulting view
* Vy**Display Height**: The height of the section plane gizmo in the 3D view. Doesn't affect the resulting view
* Vy**Arrow Size**: The size of the arrows of the section plane gizmo in the 3D view. Doesn't affect the resulting view
* Vy**Cut View**: If this is `true`, the whole 3D view will be cut at the location of this section plane.
* Vy**Clip view**: if this is `true`, it will clip the view to the display height and length of the section plane. This effectively turns the section plane into an orthographic camera, limiting the field of view.

![](/images/Arch_SectionPlane_ClipView.png)

The Arch SectionPlane with the clip view option will behave like a camera, limiting the field of view.

## Tweaks

* Adding manually a property named **RotateSolidRender** of type **App::PropertyAngle** to the section plane's **View** properties (right-click the properties view -> show hidden, right-click again -> add property) allows to rotate the render when using Solid mode. This is useful when a rendered view has for example both Arch and Draft elements, and the rendering of the Arch elements is rotated in relation to the Draft elements.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The SectionPlane tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Section = makeSectionPlane(objectslist=None, name="Section")

```

* Creates a `Section` object from `objectslist`, which is a list of objects.

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
Structure = Arch.makeStructure(length=1000, width=1000, height=200)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor, Structure])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

Section1 = Arch.makeSectionPlane([Wall1, Wall2])
Section2 = Arch.makeSectionPlane([Structure])
Section3 = Arch.makeSectionPlane([Site])
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SectionPlane/sv&oldid=1560769>"