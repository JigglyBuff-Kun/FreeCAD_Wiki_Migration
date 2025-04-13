---
title: Arch SectionPlane
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- |
| Arch SectionPlane                                                                                                       |
| poziția meniului                                                                                                        |
| Arch → Section Plane                                                                                                    |
| Ateliere                                                                                                                |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                          |
| scurtătură                                                                                                              |
| S P                                                                                                                     |
| Prezentat în versiune                                                                                                   |
| -                                                                                                                       |
| A se vedea, de asemenea,                                                                                                |
| [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView"), [TechDraw NewArch](/TechDraw_ArchView "TechDraw ArchView") |
|                                                                                                                         |

## Descriere

Acest instrumetn plasează în documentul curent un plan de secțiune gizmo, care definește secțiunea sau planul de vizualizare. Gizmo își ia locul în conformitate cu planul de lucru [Draft Work Plan](/Draft_SelectPlane "Draft SelectPlane") și poate fi mutat și reorientat prin mutarea și rotirea acestuia, până când descrie vizualizarea 2D pe care doriți să o obțineți. Obiectul plan de secțiune va lua în considerare numai un anumit set de obiecte. Obiectele selectate la crearea unei planuri de secțiune vor fi adăugate la setarea automată. Alte obiecte pot fi adăugate sau eliminate mai târziu dintr-un obiect SectionPlane cu ajutorul instrumentelor [Arch Add](/Arch_Add "Arch Add") și [Remove Arch](/Arch_Remove "Arch Remove") sau prin dublu clic pe planul de secțiuni din vizualizarea arborescentă.

The Section Plane alone won't create any view of its objects set. For that, you must create a [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") to create a view in a [TechDraw page](/TechDraw_Workbench "TechDraw Workbench").

![](/images/Arch_SectionPlane_example.jpg)

## Cum se folosește

1. Optional, definiți [Draft Working Plane](/Draft_SelectPlane "Draft SelectPlane") pentru a reflecta planul unde dirți să plasați Section Plane
2. Selectați obiecte pe care doriți să le includeți în vizualizarea secțiunii dvs
3. Apăsați butonul ![](/images/Arch_SectionPlane.png) **SectionPlane** sau apăsați tastele S apoi P
4. [Move](/Draft_Move "Draft Move")/[rotate](/Draft_Rotate "Draft Rotate") the Section Plane into correct position if needed
5. Selectați Section Plane dacă nu este deja selectați
6. Folosiți sau [Drawing DraftView](/Draft_Drawing "Draft Drawing"), [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") sau [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") pentru a crea o vizualizare

## Opţiuni

- Planul de secțiune va considera doar un set de obiece , nu toate obiectele din document. Obiectele pot fi adăugate sau eliminate dintr-un obiect SectionPlane utilizând instrumentele [Arch Add](/Arch_Add "Arch Add") și [Arch Remove](/Arch_Remove "Arch Remove") sau făcând dublu clic pe planul de secțiuni din vizualizarea arborescentă, selectând obiecte fie în lista din Scena 3D și apăsarea butonului **adăuga** sau **ștergeți**.

- Cu un plan de secțiune obiect selectat, utilizați instrumentul [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") pentru a crea un obiect tip formă reprezentând vizualizarea secțiunii în document

![](/images/Arch_Section_example2.jpg)

- Create [Drawing DraftViews](/Draft_Drawing "Draft Drawing") if you are working with the [Drawing Workbench](/Drawing_Workbench "Drawing Workbench"), or [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") if you are using the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

![](/images/Arch_Section_example3.jpg)

- Planul secțiunii poate fi, de asemenea, utilizat pentru a arăta întreaga vedere 3D tăiată printr-un plan infinit. Aceasta este doar vizuală și nu va afecta geometria obiectelor tăiate.

![](/images/Arch_SectionPlane_CutView.jpg)

## Proprietăți

- Date**Only Solids**: If this is True, non-solid objects in the set will be disregarded
- Vizualizare**Display Length**: The length of the section plane gizmo in the 3D view. Doesn't affect the resulting view
- Vizualizare**Display Height**: The height of the section plane gizmo in the 3D view. Doesn't affect the resulting view
- Vizualizare**Arrow Size**: The size of the arrows of the section plane gizmo in the 3D view. Doesn't affect the resulting view
- Vizualizare**Cut View**: If this is true, the whole 3D view will be cut at the location of this section plane (experimental).

![](/images/Arch_SectionPlane_ClipView.png)

The Arch SectionPlane with the clip view option will behave like a camera, limiting the field of view.

## Tweaks

- Adding manually a property named **RotateSolidRender** of type **App::PropertyAngle** to the section plane's **View** properties (right-click the properties view -> show hidden, right-click again -> add property) allows to rotate the render when using Solid mode. This is useful when a rendered view has for example both Arch and Draft elements, and the rendering of the Arch elements is rotated in relation to the Draft elements.

## Scripting

## Scrip-Programare

Instrumentul Section Plane poate fi utilizat în [macros](/Macros "Macros") și de la consola Python utilizând următoarele funcții:

```
Section = makeSectionPlane(objectslist=None, name="Section")

```

: Creates a Section plane objects including the given objects.

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SectionPlane/ro&oldid=1560771>"
