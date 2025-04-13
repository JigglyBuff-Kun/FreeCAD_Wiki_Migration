---
title: Arch Местность
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Местность |
| Расположение в меню |
| Архитектура → Место |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| S I |
| Представлено в версии |
| - |
| См. также |
| [Уровень](/Arch_Floor/ru "Arch Floor/ru"), [Здание](/Arch_Building/ru "Arch Building/ru") |
|  |

## Описание

The **Arch Site** is a special object that combines properties of a standard FreeCAD group object and Arch objects. It is particularly suited for representing a whole project site, or terrain. In IFC-based architectural work, it is mostly used to organize your model, by containing [building](/Arch_Building "Arch Building") objects. The site is also used to manage and display a physical terrain, and can compute volumes of earth to be added or removed.

## Применение

1. Optionally, select one or more objects to be included in your new site.
2. Press the ![](/images/Arch_Site.svg) [Site](/Arch_Site "Arch Site") button, or press the S then I keys.

## Опции

* After creating a site, you can add objects to it by drag and dropping them in the [Tree view](/Tree_view "Tree view") or by using the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool. This only determines which objects are part of the given site, and has no effect on the terrain.
* You can remove objects from a site by drag and dropping them out of it in the [Tree view](/Tree_view "Tree view") or by using the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.
* You can add a terrain object by editing the Site's Данные**Terrain** property. The terrain can be an open shell or ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) a solid.
* You can add volumes to be added or subtracted from the base terrain, by double-clicking the Site, and adding objects to its Additions or Subtractions groups. The objects must be solids.
* The Данные**Extrusion Vector** property can be used to solve some problems that can appear when the terrain is an open shell and there are additions and/or subtractions. In order to perform those additions/subtractions, the open shell is extruded into a solid, which is then appropriately unioned/subtracted. Depending on the terrain topology, this extrusion might fail with the default extrusion vector. You might then be able to remedy the problem by changing this to a different value. This property is ignored if the terrain is a solid.

## Свойства

### Данные

Site

* Данные**Addition Volume** (`Volume`): The volume of earth to be added to this terrain.
* Данные**Additions** (`LinkList`): Other shapes that are appended to this object.
* Данные**Address** (`String`): The street and house number of this site.
* Данные**City** (`String`): The city of this site.
* Данные**Country** (`String`): The country of this site.
* Данные**Declination** (`Angle`): The angle between the true North and the North direction in this document, that is, the Y axis. This means that by default North points to the Y axis, and East to the X axis; the angle increments counterclockwise. This property was previously known as Данные**North Deviation**.
* Данные**EPW File** (`FileIncluded`): Allow to attach an EPW file from the [Ladybug EPW data website](https://www.ladybug.tools/epwmap/) to this site. This is needed to display wind rose diagrams.
* Данные**Elevation** (`Length`): The elevation of level 0 of this site.
* Данные**Extrusion Vector** (`Vector`): An extrusion vector to use when performing boolean operations.
* Данные**Latitude** (`Float`): The latitude of this site.
* Данные**Longitude** (`Float`): The longitude of this site.
* Данные**Origin Offset** (`Vector`): An optional offset between the model (0,0,0) origin and the point indicated by the geo-coordinates.
* Данные**Perimeter** (`Length`): The perimeter length of the projected area.
* Данные**Postal Code** (`String`): The postal or zip code of this site.
* Данные**Projected Area** (`Area`): The area of the projection of this object onto the XY plane
* Данные**Region** (`String`): The region, province or county of this site.
* Данные**Remove Splitter** (`Bool`): Remove splitters from the resulting shape.
* Данные**Subtraction Volume** (`Volume`): The volume of earth to be removed from this terrain.
* Данные**Subtractions** (`LinkList`): Other shapes that are subtracted from this object.
* Данные**Terrain** (`Link`): The base terrain of this site
* Данные**Time Zone** (`Integer`): Represents the time zone of the site's location. Since this value is an integer only standard time zones are allowed. If the Вид**Solar Diagram** property is set to `true`, and the right module is installed, this value will be used to generate more accurate [solar and wind diagrams](#Solar_and_wind_diagrams). The time zone should be an offset between -12 and +14, where 0 is at Greenwich, UK, (GMT+0). Positive values are to the East of Greenwich and negative values are to the West.
* Данные**Url** (`String`): An url that shows this site in a mapping website.

### Вид

Compass

* Вид**Compass** (`Bool`): Default is `False`. Shows or hides the compass.
* Вид**Compass Position** (`Vector`): The position of the compass relative to the site placement.
* Вид**Compass Rotation** (`Angle`): The rotation of the compass relative to the site.
* Вид**Update Declination** (`Bool`): Default is `False`. Update the declination value based on the compass rotation.

Site

* Вид**Orientation** (`Enumeration`): Default is `Project North`. When set to `True North` the whole geometry will be rotated to match the true north of this site.
* Вид**Solar Diagram** (`Bool`): Default is `False`. Shows or hides the sun path diagram. See [Solar and wind diagrams](#Solar_and_wind_diagrams).
* Вид**Solar Diagram Color** (`Color`): The color of the sun path diagram.
* Вид**Solar Diagram Position** (`Vector`): The position of the sun path diagram.
* Вид**Solar Diagram Scale** (`Float`): The scale of the sun path diagram.
* Вид**Wind Rose** (`Bool`): Default is `False`. Shows or hides the wind rose diagram (requires the **EPW File** data property filled, and the Ladybug Python module installed. See [Solar and wind diagrams](#Solar_and_wind_diagrams)).

## Типовой рабочий процесс

Start by creating an object that represents your terrain. For example, it is easy to import mesh data, that can be turned into a Part Shape from menu **Part → Create Shape from Mesh**. Then, create a Site object, and set its Данные**Terrain** property to the Part we just created:

![](/images/Arch_site_example_01.jpg)

Create some volumes (they must be solids) that represent the areas that you wish to be excavated or filled. Double-click the Site object in the Tree View, and add these volumes to the Additions or Subtractions groups. Click OK.

![](/images/Arch_site_example_02.jpg)

The site geometry will be recomputed and the areas, perimeter, and volumes properties recalculated.

![](/images/Arch_site_example_03.jpg)

## Solar and wind diagrams

If [Ladybug](https://www.ladybug.tools/ladybug.html) is installed on your system, [Arch Sites](/Arch_Site "Arch Site") can display a sun path diagram and/or a wind rose. For this, Данные**Longitude**, Данные**Latitude** and Данные**Declination** (previously Данные**North Deviation**) must be correctly set, and Вид**Solar Diagram** or Вид**Wind Rose** set to `true`.

### Notes

* The diagram can be scaled, oriented and centered on a specific point in the model. It can also be turned on and off. At this point it is a visual rather than functional feature, and provided for display purposes only.
* If you don't have Ladybug, [pysolar](http://pysolar.org/) (version 0.7 and above) is still supported to generate sun path diagrams, but not wind roses. However, Ladybug is a much more powerful tool that will probably be used more in the future, so we recommend using it instead of pysolar. Ladybug can be installed simply via the [pip](https://github.com/ladybug-tools/ladybug?tab=readme-ov-file#installation) Python package manager.

![](/images/Freecad-solar-diagram.jpg)

## Программирование

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Site tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

* Creates a `Site` object from `objectslist`, which is a list of objects, or `baseobj`, which is a `Shape` or `Terrain`.

Пример:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall])
Site = Arch.makeSite([Building])

FreeCAD.ActiveDocument.recompute()
FreeCAD.Gui.ActiveDocument.ActiveView.viewIsometric()

```

### Solar diagram

As long as the `pysolar` module is present, a sun path diagram can be added to the site. Set the longitude, latitude and declination angles as appropriate, as well as an adequate scale for the size of your model.

At this time, the diagram serves only informative purposes and is there for visual display. For a sun path diagram that enables visualizing shadows and interactively changing dates and times, the best option is to use an external website that allows uploading 3D models. Some of them support .obj and .stl formats for instance, which can be exported to with FreeCAD.

Please note that Pysolar 0.7 or above is required, and this version only works with Python 3.

```
Site.Longitude = -46.38
Site.Latitude = -23.33
Site.Declination = 30
# Uncomment if you want to show the compass
# Site.ViewObject.Compass = True

Site.ViewObject.SolarDiagram = True
Site.ViewObject.SolarDiagramScale = 10000
FreeCAD.ActiveDocument.recompute()

```

### Solar diagram independent of Site

A sun path diagram can be created with the following function, independently of any site.

```
Node = makeSolarDiagram(longitude, latitude, scale=1, complete=False)

```

* Creates a sun path diagram as a Pivy node, using `longitude` and `latitude`, with an optional `scale`.
* If `complete` is `True`, the 12 months are drawn, which shows the full solar [analemma](https://en.wikipedia.org/wiki/Analemma).

```
import FreeCADGui, Arch

Node = Arch.makeSolarDiagram(-46.38, -23.33, scale=10000, complete=True)
FreeCAD.Gui.ActiveDocument.ActiveView.getSceneGraph().addChild(Node)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/ru&oldid=1561149>"