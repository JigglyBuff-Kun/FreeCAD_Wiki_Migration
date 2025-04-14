---
title: Cables Profile
---

|                                                |
| ---------------------------------------------- |
| Cables Profile                                 |
| Menu location                                  |
| Cables → Cable Profile                         |
| Workbenches                                    |
| [Cables](/Cables_Workbench "Cables Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| 1.0                                            |
| See also                                       |
| [Cables Cable](/Cables_Cable "Cables Cable")   |
|                                                |

## Description

The ![](/images/Cables_Profile.svg) [Cable Profile](/Cables_Profile "Cables Profile") creates a ![](/images/Sketcher_Sketch.svg) [Sketch](/Sketch "Sketch") object which represents the base profile (cross-section) of a cable. The profile is fully parametric and is created by choosing different cable properties in a dialog box (see [Usage](#Usage)). The profile contains all the cross-section information needed for a ![](/images/Cables_Cable.svg) [Cable](/Cables_Cable "Cables Cable") creation.

There are few predefined cable profile types, e.g. YDYp (flat power cable), YDY (round power cable). Additional custom profile types can be defined by the user (see [Adding custom profile types](#Adding_custom_profile_types)).

It is also possible to create entire profile manually in ![](/images/Sketcher_Sketch.svg) [Sketcher](/Sketcher_Workbench "Sketcher Workbench"). However, some rules have to be followed to successsfuly use it as a proper cable profile (see [Manual profile creation](#Manual_profile_creation)).

## Usage

1. Create cable profile by one of these methods:
   - Press the ![](/images/Cables_Profile.svg) [Cable Profile](/Cables_Profile "Cables Profile") button.
   - Select the **Cables → ![](/images/Cables_Profile.svg) Cable Profile** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cables → ![](/images/Cables_Profile.svg) Cable Profile** option from the context menu.
2. The **Add a new cable profile** task panel opens.
3. Optionally select the **Profile type**.
4. Select the **Number of wires**.
5. Select the **Standard gauge [mm2]** from the list or leave **custom**.
6. Optionally enter the **Custom gauge [mm2]** value if the above selection was **custom**.
7. Press OK button.

Once created the profile is placed at the position [0,0,0] in the 3D space. It is recommended not to move or rotate it. It can be used later to create a [Cable](/Cables_Cable "Cables Cable") without changing position of the profile. When cable is created the pair of profile clones is created and each clone has its proper position and rotation related to the cable.

One profile can be used for many cables, there is no need to create another profile if another cable will have the same cross-section.

## Notes

For some **Profile type**s the **Number of wires** has to be > 1 (e.g. YDYp). Incorrect selection will show an error and the profile will not be created.

## Adding custom profile types

An additional CSV file can be created by the user, containing custom profile types definitions. It must be named `profiles.csv`, and placed in

```
$FREECAD_USER_DIR/Cables/

```

The `$FREECAD_USER_DIR` can be obtained from the [Python console](/Python_console "Python console"):

```
FreeCAD.getUserAppDataDir()

```

The contents of the custom `profiles.csv` file must be modeled upon the same rules as the [profiles.csv](https://github.com/sargo-devel/Cables/blob/master/Resources/presets/profiles.csv) in the **Cables Workbench** source code.

## Manual profile creation

Cable profile can be manually created in ![](/images/Sketcher_Sketch.svg) [Sketcher](/Sketcher_Workbench "Sketcher Workbench"). The proper order of drawing closed wires must be maintained for correct cable creation by [Cable](/Cables_Cable "Cables Cable") command.

1. First drawn closed wire will be interpreted as **cable jacket** (w0 in the example below)
2. Following series of closed wires must be drawn inside first wire and do not touch or cross each other. These will be interpreted as **insulations** of single wires (w1, w2, w3 in the example below).
3. Then the next series of wires should be drawn inside the series of insulations. Each insulation wire has to have one inner wire. These will be **conductor wires** (w4, w5, w6 in the example below).
4. Finally the series of points should be placed at the center of each **conductor wire** (p1, p2, p3 in the example below).

![](/images/Cables_Profile_Example1.png)

Example triangular profile created with Sketcher

![](/images/Cables_Profile_Example2.png)

Cable created from the triangular profile

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Profile/en&oldid=1557575>"
