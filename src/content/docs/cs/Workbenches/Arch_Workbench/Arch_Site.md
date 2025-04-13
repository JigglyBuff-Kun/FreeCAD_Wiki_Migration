---
title: Architektura Staveniště
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Site |
| Umístění Menu |
| Arch → Site |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| S I |
| Představen ve verzi |
| - |
| Viz také |
| [Arch Floor](/Arch_Floor/cs "Arch Floor/cs"), [Arch Building](/Arch_Building/cs "Arch Building/cs") |
|  |

## Popis

Staveniště je speciální typ skupinového objektu FreeCADu zvlášť vhodný pro zobrazení celého staveniště nebo terénu. Většinou se používá pro uspořádání modelu obsahujícího objekty [Stavba](/Arch_Building/cs "Arch Building/cs")

## Použití

1. Volitelně lze vybrat jeden nebo více objektů, které lze vložit do Vašeho nového staveniště
2. Stiskněte tlačítko ![](/images/Arch_Site.png) **Staveniště** nebo klávesy S a I

## Volby

* Po vytvoření staveniště můžete přidávat další objekty pomocí myši přetáhnutím a upuštěním (drag and drop) na požadované místo v panelu stromu nebo použitím nástroje ![](/images/Arch_Add.png) [Přidat](/Arch_Add/cs "Arch Add/cs")
* Odstranit objekty ze staveniště můžete podobně myší přetáhnutím a upuštěním objektu mimo panelu stromu nebo použitím nástroje ![](/images/Arch_Remove.png) [Odebrat](/Arch_Remove/cs "Arch Remove/cs").

## Properties

### Data

Site

* Údaje**Addition Volume** (`Volume`): The volume of earth to be added to this terrain.
* Údaje**Additions** (`LinkList`): Other shapes that are appended to this object.
* Údaje**Address** (`String`): The street and house number of this site.
* Údaje**City** (`String`): The city of this site.
* Údaje**Country** (`String`): The country of this site.
* Údaje**Declination** (`Angle`): The angle between the true North and the North direction in this document, that is, the Y axis. This means that by default North points to the Y axis, and East to the X axis; the angle increments counterclockwise. This property was previously known as Údaje**North Deviation**.
* Údaje**EPW File** (`FileIncluded`): Allow to attach an EPW file from the [Ladybug EPW data website](https://www.ladybug.tools/epwmap/) to this site. This is needed to display wind rose diagrams.
* Údaje**Elevation** (`Length`): The elevation of level 0 of this site.
* Údaje**Extrusion Vector** (`Vector`): An extrusion vector to use when performing boolean operations.
* Údaje**Latitude** (`Float`): The latitude of this site.
* Údaje**Longitude** (`Float`): The longitude of this site.
* Údaje**Origin Offset** (`Vector`): An optional offset between the model (0,0,0) origin and the point indicated by the geo-coordinates.
* Údaje**Perimeter** (`Length`): The perimeter length of the projected area.
* Údaje**Postal Code** (`String`): The postal or zip code of this site.
* Údaje**Projected Area** (`Area`): The area of the projection of this object onto the XY plane
* Údaje**Region** (`String`): The region, province or county of this site.
* Údaje**Remove Splitter** (`Bool`): Remove splitters from the resulting shape.
* Údaje**Subtraction Volume** (`Volume`): The volume of earth to be removed from this terrain.
* Údaje**Subtractions** (`LinkList`): Other shapes that are subtracted from this object.
* Údaje**Terrain** (`Link`): The base terrain of this site
* Údaje**Time Zone** (`Integer`): Represents the time zone of the site's location. Since this value is an integer only standard time zones are allowed. If the Pohled**Solar Diagram** property is set to `true`, and the right module is installed, this value will be used to generate more accurate [solar and wind diagrams](#Solar_and_wind_diagrams). The time zone should be an offset between -12 and +14, where 0 is at Greenwich, UK, (GMT+0). Positive values are to the East of Greenwich and negative values are to the West.
* Údaje**Url** (`String`): An url that shows this site in a mapping website.

### View

Compass

* Pohled**Compass** (`Bool`): Default is `False`. Shows or hides the compass.
* Pohled**Compass Position** (`Vector`): The position of the compass relative to the site placement.
* Pohled**Compass Rotation** (`Angle`): The rotation of the compass relative to the site.
* Pohled**Update Declination** (`Bool`): Default is `False`. Update the declination value based on the compass rotation.

Site

* Pohled**Orientation** (`Enumeration`): Default is `Project North`. When set to `True North` the whole geometry will be rotated to match the true north of this site.
* Pohled**Solar Diagram** (`Bool`): Default is `False`. Shows or hides the sun path diagram. See [Solar and wind diagrams](#Solar_and_wind_diagrams).
* Pohled**Solar Diagram Color** (`Color`): The color of the sun path diagram.
* Pohled**Solar Diagram Position** (`Vector`): The position of the sun path diagram.
* Pohled**Solar Diagram Scale** (`Float`): The scale of the sun path diagram.
* Pohled**Wind Rose** (`Bool`): Default is `False`. Shows or hides the wind rose diagram (requires the **EPW File** data property filled, and the Ladybug Python module installed. See [Solar and wind diagrams](#Solar_and_wind_diagrams)).

## Typical workflow

Start by creating an object that represents your terrain. For example, it is easy to import mesh data, that can be turned into a Part Shape from menu **Part → Create Shape from Mesh**. Then, create a Site object, and set its Údaje**Terrain** property to the Part we just created:

![](/images/Arch_site_example_01.jpg)

Create some volumes (they must be solids) that represent the areas that you wish to be excavated or filled. Double-click the Site object in the Tree View, and add these volumes to the Additions or Subtractions groups. Click OK.

![](/images/Arch_site_example_02.jpg)

The site geometry will be recomputed and the areas, perimeter, and volumes properties recalculated.

![](/images/Arch_site_example_03.jpg)

## Solar and wind diagrams

If [Ladybug](https://www.ladybug.tools/ladybug.html) is installed on your system, [Arch Sites](/Arch_Site "Arch Site") can display a sun path diagram and/or a wind rose. For this, Údaje**Longitude**, Údaje**Latitude** and Údaje**Declination** (previously Údaje**North Deviation**) must be correctly set, and Pohled**Solar Diagram** or Pohled**Wind Rose** set to `true`.

### Notes

* The diagram can be scaled, oriented and centered on a specific point in the model. It can also be turned on and off. At this point it is a visual rather than functional feature, and provided for display purposes only.
* If you don't have Ladybug, [pysolar](http://pysolar.org/) (version 0.7 and above) is still supported to generate sun path diagrams, but not wind roses. However, Ladybug is a much more powerful tool that will probably be used more in the future, so we recommend using it instead of pysolar. Ladybug can be installed simply via the [pip](https://github.com/ladybug-tools/ladybug?tab=readme-ov-file#installation) Python package manager.

![](/images/Freecad-solar-diagram.jpg)

## Scripting

## Skriptování

Nástroj Staveniště může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

vytvoří staveniště včetně objektů ze seznamu objectslist

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/cs&oldid=1561148>"