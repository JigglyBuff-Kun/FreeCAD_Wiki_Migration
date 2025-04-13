---
title: Arch Perfil
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Profile |
| Menu location |
| 3D/BIM → Generic 3D tools → Profile |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Descripción

The **Arch Profile** tool builds a parametric 2D profile object. This object can then be used as a base in different other tools that perform extrusions, such as [Arch Frame](/Arch_Frame "Arch Frame"), [Arch CurtainWall](/Arch_CurtainWall "Arch CurtainWall") or [Part Extrude](/Part_Extrude "Part Extrude").

See the [list of available presets](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv).

The profile tool is also integrated to the [Arch Structure](/Arch_Structure "Arch Structure") tool, all preset profiles are also available there.

## Utilización

1. Press the ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile "Arch Profile") button
2. Select a preset in the tool task panel
3. Click a point in the 3D view to place the profile

## Propiedades

### Data

* Datos**Height**: The overall height of the profile
* Datos**Width**: The overall width of the profile
* Datos**Diameter**: The diameter of the profile (circular profiles only)
* Datos**Thickness**: The thickness of the tube wall (circular and rectangular hollow profiles only)
* Datos**Web Thickness**: The thickness of the profile web (H and I profiles only)
* Datos**Flange Thickness**: The thickness of the profile flange (H and I profiles only)

## Adding custom profiles

An additional CSV file can be created by the user, containing custom profile definitions. It must be named `profiles.csv`, and placed in

```
$FREECAD_USER_DIR/BIM/

```

The `$FREECAD_USER_DIR` can be obtained from the [Python console](/Python_console "Python console"):

```
FreeCAD.getUserAppDataDir()

```

The contents of your custom `profiles.csv` file must be modeled upon the same rules as the [profiles.csv](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv) in the source code.

The CSV file must contain one line per available profile, formatted as follows:

* For C profiles: Category, Name, Profile class, Diameter, Thickness
* For H, U and T profiles: Category, Name, Profile class, Width, Height, Web thickness, Flange thickness
* For L profiles: Category, Name, Profile class, Width, Height, Thickness
* For R profiles: Category, Name, Profile class, Width, Height
* For RH profiles: Category, Name, Profile class, Width, Height, Thickness

All measurements must be in millimeters. Possible profile classes are:

* C: Circular tube
* H: [H or I profile](https://en.wikipedia.org/wiki/I-beam)
* R: Rectangular
* RH: Rectangular hollow
* U: U profile
* L: L profile
* T: T profile

Additional profile types can be created, but a corresponding class must first be defined in [ArchProfile.py](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/ArchProfile.py).

## Scripting

The Profile tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
profile = makeProfile(profile_list)

```

Where `profile_list` contains the different elements of a list in the CSV file.

Example:

```
import Arch
Arch.makeProfile([0, 'REC', 'REC100x100', 'R', 100, 100])

```

Where the first element of the list is an order number that is not used yet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Profile/es&oldid=1481136>"