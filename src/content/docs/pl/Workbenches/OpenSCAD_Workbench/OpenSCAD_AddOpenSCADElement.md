---
title: OpenSCAD Dodaj element OpenSCAD
---

|                                                      |
| ---------------------------------------------------- |
| OpenSCAD AddOpenSCADElement                          |
| Menu location                                        |
| OpenSCAD -> Add OpenSCAD Element                     |
| Workbenches                                          |
| [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") |
| Default shortcut                                     |
| _None_                                               |
| Introduced in version                                |
| -                                                    |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

Add an OpenSCAD element by entering OpenSCAD code into the task panel and executing the OpenSCAD binary (requires OpenSCAD)

When 'as mesh' is selected, OpenSCAD renders a Mesh.

Each time Add is pressed the OpenSCAD code is executed and elements are imported.

If OpenSCAD returns successfully, its messages are displayed as warnings in the report window. This will be the case if the path to imported, included and used files is broken. In case of undesired results it is highly recommend to have a look at the report windows, as there might be a lot of other output, created by the importer. If OpenSCAD fails, its messages will be logged as errors.

Libraries should be accessible as usual, whereas example can be reached as stated below.

```
include <../examples/example001.scad>;

```

would include the first examples also known as the OpenSCAD icon.

## Setup OpenSCAD within FreeCAD

**Note:** OpenSCAD needs to be installed on your computer before FreeCAD will have this functionality  
Install OpenSCAD in the appropriate manner for your operating system. See [the OpenSCAD web site](https://www.openscad.org/) for more information.

FreeCAD needs to be told where to find the OpenSCAD executable:

- Switch to the ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") via **View → Workbench → OpenSCAD**
- Open the preferences dialog **Edit → Preferences**
- Click on "OpenSCAD" on the left plane
- Click on the button labled ... in **General Settings → General OpenSCAD Settings → OpenSCAD executable** to browse the directory or enter the path (e.g. Ubuntu based Linux distributions `/usr/bin/openscad`) directly into the line input right to the button
- Close and restart FreeCAD

: **Result:** A new OpenSCAD icon will appear on the tool bar, and in the OpenSCAD menu, in the FreeCAD OpenSCAD workbench.

Note: It is also possible to add another optional Parameter which controls the maximum sides of a polygon before it is considered a circle (fn).

Starting from 0.14 and above, FreeCAD will search for the OpenSCAD executable if the setting mentioned above is empty.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_AddOpenSCADElement/pl&oldid=1216581>"
