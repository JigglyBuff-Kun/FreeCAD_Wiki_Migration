---
title: Import OpenSCAD code
---

|                      |
| -------------------- |
| Tutorial             |
| Topic                |
| Import OpenSCAD code |
| Level                |
| Beginner             |
| Time to complete     |
| 30 minutes           |
| Authors              |
| r-frank              |
| FreeCAD version      |
| 0.16.6704            |
| Example files        |
|                      |
| See also             |
| _None_               |
|                      |

## Introduction

OpenSCAD, like FreeCAD, is an open source 3D CAD program. But while FreeCAD uses a visual approach, OpenSCAD uses a programming interface to perform 3D operations. The OpenSCAD workbench can be used to import OpenSCAD object code and to have access to some of the mesh operations possible with OpenSCAD.

## Installing OpenSCAD

- Linux users can install from the relevant distribution repositories, such as Debian, openSUSE, Mint, Unbuntu, etc. or from the [OpenSCAD homepage](http://www.openscad.org/).
- Mac Users can download the binaries from the [OpenSCAD homepage](http://www.openscad.org/).
- Windows users can download the program from the [OpenSCAD homepage](http://www.openscad.org/). Since only the OpenSCAD executable is needed by FreeCAD, Windows users can install the portable version if they like.

## Configuring OpenSCAD workbench in FreeCAD

- Open FreeCAD.
- Switch to [OpenSCAD workbench](/OpenSCAD_Workbench "OpenSCAD Workbench").
- Choose Edit → Preferences → OpenSCAD from the Top menu.
  - Point FreeCAD to the OpenSCAD executable (section: General OpenSCAD settings).
  - All the other values on the settings-page could be left at default.

## The sample model

Here we will use the [example005.scad](https://github.com/openscad/openscad/blob/master/examples/Old/example005.scad) file from the (old) OpenSCAD examples, but feel free to use any scad file of your liking.

![](/src/assets/images/TutorialOpenSCAD_SampleFile.jpg)

## Importing the model in FreeCAD

- In FreeCAD just choose File → Open and choose the .scad file you want to import.
- It is not important which workbench is activated, the OpenSCAD workbench itself is only needed when applying special features to your model.
- FreeCAD will import the OpenSCAD file and build up a tree with primitives and boolean operations
- Tutorial finished.

![](/src/assets/images/TutorialOpenSCAD_ImportFile.jpg)

## Related

- [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")
- [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_OpenSCAD_code/en&oldid=1553103>"
