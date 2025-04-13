---
title: Arch BuildingPart
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseArch Floorinstead.
:::

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Arch BuildingPart                                                                       |
| poziția meniului                                                                        |
| Arch → BuildingPart                                                                     |
| Ateliere                                                                                |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                          |
| scurtătură                                                                              |
| _Nici unul_                                                                             |
| Prezentat în versiune                                                                   |
| -                                                                                       |
| A se vedea, de asemenea,                                                                |
| [Arch Building](/Arch_Building "Arch Building"), [Arch Floor](/Arch_Floor "Arch Floor") |
|                                                                                         |

## Descriere

BuildingPart intenționează să înlocuiască [Arch Floor](/Arch_Floor "Arch Floor") cu o versiune mai capabilă care să poată fi utilizată nu numai pentru crearea de podele/etaje/niveluri ci și pentru toate tipurile de situații în care trebuie să fie grupate diferite obiecte Arch/BIM și acel grup ar putea fi necesar să fie tratate ca un obiect sau replicate.

## Cum se folosește

1. Optional, selectați unul sau mai multe obiecte pentru a fi incluse în noul Building Part
2. Apăsați butonul ![](/images/Arch_BuildingPart.png) **Arch BuildingPart**

### Notes

BuildingParts have a built-in, implicit [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane").

This plane is always parallel to the BuildingPart's base plane, but you can specify the offset between them. So all tools that work with a section plane, such as [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") and [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") also work with BuildingParts.

## Opţiuni

- După ce ați creat un BuildingPart, puteți să adăugați mai multe obiecte prin glisarea și plasarea lor în Tree View sau utilizând instrumentul ![](/images/Arch_Add.png) [Arch Add](/Arch_Add "Arch Add")
- Puteți să eliminați obiecte dintr-un BuildingPart prin tragerea și plasarea lor din Tree View sau utilizând instrumentul ![](/images/Arch_Remove.png) [Arch Remove](/Arch_Remove "Arch Remove")
- Dând dublu clic pe obiectul BuildingPart din vizualizarea arborescentă, [Working Plane](/Draft_SelectPlane "Draft SelectPlane") va fi setat la locația sa, iar BuildingPart va deveni activ, ceea ce înseamnă că vor fi adăugate automat noi obiecte. Dacă dați dublu clic pe BuildingPart din nou, îl dezactivați și setați planul de lucru înapoi în poziția sa anterioară
- BuildingPart poate afișa un marcaj în vizualizarea 3D cu o etichetă și indicarea nivelului
- Când un BuildingPart este mutat / rotit, toți copiii acestuia care nu au nici o proprietate "Move With Host" sau o pornesc, se vor mișca/roti împreună.
- Elementele de construcție pot fi [cloned](/Draft_Clone "Draft Clone")
- Componentele de construcție pot lua orice tip de IFC

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

An Arch BuildingPart is derived from an [App GeoFeature](/App_GeoFeature "App GeoFeature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Date**Group** (`LinkList`): List of referenced objects.
- Date (Hidden)**\_ Group Touched** (`Bool`)

Building Part

- Date**Area** (`Area`): The computed floor area of this floor.
- Date**Height** (`Length`): The height of this object, and of its children objects. The children objects could be, for example, [Arch Walls](/Arch_Wall "Arch Wall"). Each wall's height must be set to `0` (zero), so the height property of the BuildingPart propagates to the objects inside of it.
- Date**Level Offset** (`Length`): The level of the (0,0,0) point of this level. This value is added to the `Placement.Base.z` attribute of the BuildingPart, to indicate a vertical offset without actually moving the object. The resulting offset is displayed if Vizualizare**Show Level** is `true`.
- Date (Hidden)**Materials Table** (`Map`): A MaterialName:SolidIndexesList map that relates material names with solid indexes to be used when referencing this object from other files.
- Date**Only Solids** (`Bool`): If true, only solids will be collected by this object when referenced from other files.
- Date (Hidden)**Saved Inventor** (`FileIncluded`): This property stores an inventor representation for this object.
- Date (Hidden)**Shape** (`PartShape`): The shape of this object.

Children

- Date**Height Propagate** (`Bool`): If true, the height value propagates to contained objects. See the Date**Height** property for additional conditions that apply.

IFC

- Date (Hidden)**Ifc Data** (`Map`): IFC data.
- Date (Hidden)**Ifc Properties** (`Map`): IFC properties of this object.
- Date**Ifc Type** (`Enumeration`): The IFC type of this object.

IFC Attributes

- Date**Description** (`String`): An optional description for this component
- Date**Global Id** (`String`)
- Date**Object Type** (`String`)
- Date**Overall Height** (`Length`)
- Date**Overall Width** (`Length`)
- Date**Partitioning Type** (`Enumeration`)
- Date**Predefined Type** (`Enumeration`)
- Date**Tag** (`String`): An optional tag for this component.
- Date**User Defined Partitioning Type** (`String`)

### View

Auto Group

- Vizualizare**Autogroup Autosize** (`Bool`): Automatically set the capture box size from the Building Part contents. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- Vizualizare**Autogroup Box** (`Bool`): Turns auto grouping (and the display of the capture box) on/off. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- Vizualizare**Autogroup Margin** (`Length`): A margin to use when autosize is turned on. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- Vizualizare**Autogroup Size** (`IntegerList`): The capture box for newly created objects expressed as [XMin,YMin,ZMin,XMax,YMax,ZMax]. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Building Part

- Vizualizare (Hidden)**Diffuse Color** (`ColorList`): The individual face colors.
- Vizualizare**Display Offset** (`Placement`): A transformation to apply to the level mark.
- Vizualizare**Font Name** (`Font`): The font to be used for texts.
- Vizualizare**Font Size** (`Length`): The font size of texts.
- Vizualizare**Line Width** (`Float`): The line width of this object.
- Vizualizare**Origin Offset** (`Bool`): If true, when activated, Display offset will affect the origin mark too.
- Vizualizare**Override Unit** (`String`): An optional unit to express levels.
- Vizualizare**Show Label** (`Bool`): If true, when activated, the object's label is displayed.
- Vizualizare**Show Level** (`Bool`): If true, show the level.
- Vizualizare**Show Unit** (`Bool`): If true, show the unit on the level tag.

Children

- Vizualizare**Children Line Color** (`Color`): The line color to apply to the children of this Building Part.
- Vizualizare**Children Line Width** (`Float`): The line width to apply to the children of this Building Part.
- Vizualizare**Children Override** (`Bool`): If true, the objects contained in this Building Part will adopt these line, color and transparency settings.
- Vizualizare**Children Shape Color** (`Color`): The shape color to apply to the children of this Building Part.
- Vizualizare**Children Transparency** (`Percent`): The transparency to apply to the children of this Building Part.

Clip

- Vizualizare**Auto Cut View** (`Bool`): Turn cutting on when activating this level.
- Vizualizare**Cut Margin** (`Length`): The distance between the level plane and the cut line.
- Vizualizare**Cut View** (`Bool`): Cut the view above this level.

Interactions

- Vizualizare**Auto Working Plane** (`Bool`): If set to True, the working plane will be kept on Auto mode.
- Vizualizare**Double Click Activates** (`Bool`): If True, double-clicking this object in the tree activates it.
- Vizualizare**Restore View** (`Bool`): If set, the view stored in this object will be restored on double-click.
- Vizualizare**Save Inventor** (`Bool`): If this is enabled, the inventor representation of this object will be saved in the FreeCAD file, allowing to reference it in other files in lightweight mode.
- Vizualizare (Hidden)**Saved Inventor** (`FileIncluded`): A slot to save the inventor representation of this object, if enabled.
- Vizualizare**Set Working Plane** (`Bool`): If true, when activated, the working plane will automatically adapt to this Building Part.
- Vizualizare (Hidden)**View Data** (`FloatList`): Camera position data associated with this object.

## Scripting

## Scrip-Programare

Instrumentul BuildingPart poate fi utilizat în [macro-uri](/Macros/ro "Macros/ro") și din consola Python utilizând următoarea funcție:

```
BuildingPart = makeBuildingPart(objectslist=None)

```

creează o BuildingPart incluzând obiectele din lista dată.

Exempluː

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_BuildingPart/ro&oldid=1467172>"
