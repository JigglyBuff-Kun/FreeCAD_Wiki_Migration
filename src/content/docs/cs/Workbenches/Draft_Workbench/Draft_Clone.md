---
title: Kreslení Klon
---
|  |
| --- |
| Kreslení Klon |
| Umístění Menu |
| Draft → Clone |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Kreslení Měřítko](/Draft_Scale/cs "Draft Scale/cs") |
|  |

## Description

## Popis

Tento nástroj vytváří klon (kopie, která je parametricky svázaná s originálním objektem). Jestliže se změní originální objekt, změní se i klon, ale podrží si svoji pozici, otočení a měřítko.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench"). Clones of 2D objects can be used in [PartDesign Bodies](/PartDesign_Body "PartDesign Body").

![](/images/Draft_Clone_example.jpg)

![](/images/Draft_Clone_example.jpg)

## Usage

## Použití

1. Vyberte objekty, které chcete klonovat
2. Stiskněte tlačítko ![](/images/Draft_Clone.png) Klon

## Notes

* The scaling of a Draft Clone can be changed in the [Property editor](/Property_editor "Property editor") or, [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), by double clicking it in the [Tree view](/Tree_view "Tree view") and entering new values in the task panel that opens. The latter option is more efficient.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An object created with the Draft Clone command is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), a [Part Feature](/Part_Feature "Part Feature") object or, if an Arch Clone is created, from the object type of the source object. It inherits all properties from that object. A clone derived from one of the first two objects also has the following additional properties:

### Data

Draft

## Vlastnosti

* Údaje**Měřítko**: Specifikuje volitelné měřítko pro klon
* Výsledek použití nástroje [Kreslení Měřítko](/Draft_Scale/cs "Draft Scale/cs") je také klon

## Scripting

## Skriptování

Nástroj Klon může být využit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

To create a clone use the `make_clone` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `clone` method.

```
cloned_object = make_clone(obj, delta=None, forcedraft=False)

```

* Vytvoří klon(y) zadaného objektu(ů).
* Klon je přesná, propojená kopie zadaného objektu.
* Jestliže se změní originální objekt, změní se i finální objekt. Volitelně můžete zadat delta Vektor čímž posunete klon z originální pozice.

Příklad:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(App.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

vector = App.Vector(2600, 500, 0)
cloned_object = Draft.clone([polygon1, polygon2], delta=vector)

cloned_object.Fuse = True

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Clone/cs&oldid=1550537>"