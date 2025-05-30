---
title: Arbeitsbereich Assembly2
---

:::caution
der Arbeitsbereich Assembly2 ist veraltet. Sein Autor hat die Wartung eingestellt; er wird mit FreeCAD-Versions 0.17 und neuer wahrscheinlich nicht mehr funktionieren. Die Informationen dieser Seite werden nicht aktualisiert (und übersetzt); sie werden nur aus historischen Gründen behalten.
:::

Als Alternative siehe [A2plus](/A2plus_Workbench/de "A2plus Workbench/de"). Dieser Arbeitsbereich ist ein Ableger (fork) von Assembly2, ist aber mit jenem nicht kompatibel. Sind noch alte Modelle vorhanden, die geöffnet werden sollen, bleibt man liber bei FreeCAD 0.16 und Assembly2. Neuere Modelle sollten komplett in A2plus erstellt und geöffnet werden.  
Weiter Möglichkeiten bieten [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") oder [Assembly4](/Assembly4_Workbench/de "Assembly4 Workbench/de"). Diese Arbeitsbereiche wurden auch durch Assembly2 inspiriert, sind aber auch beide nicht mit ihm kompatibel.

## Introduction

[Assembly2](/Assembly2_Workbench "Assembly2 Workbench") is an assembly workbench for FreeCAD v0.15 with support for importing parts from external files.

As stated by its author [on the forum](https://forum.freecadweb.org/viewtopic.php?f=17&t=16591), it is no longer maintained since 2016, therefore it may have issues with FreeCAD 0.17 and above. The newer and actively maintained [A2plus Workbench](/A2plus_Workbench "A2plus Workbench") is a good alternative.

![](/images/Assembly2_example.jpg)

## Usage

Intended work-flow:

- each part in the assembly is designed in its own FreeCAD file
- a separate assembly FreeCAD file is created
- parts are imported to this assembly file using the Assembly 2 workbench
- spacial constraints are then added to assemble the imported parts

Features

- circular edge constraint
- axial constraint
- plane constraint
- part importing
- updating of parts already imported

Limitations

- Poor constraint solver which may fail or take excessively long for complicated assemblies
- undo and other similar features not supported

## References

- Author: hamish
- Home page: [Assembly2](https://github.com/hamish2014/FreeCAD_assembly2)
- Source code on github: [Assembly2](https://github.com/hamish2014/FreeCAD_assembly2)

## Tools

Toolbar

![](/images/Assembly2-menu-orizz.png)

Drop down menu

![](/images/Assembly2-menu-vert.png)

- ![](/images/Assembly2_ImportPart.png) Import a part from another FreeCAD document
- ![](/images/Assembly2_UpdatePart.png) Update parts imported into the assembly
- ![](/images/Assembly2_Move.png) Move
- ![](/images/Assembly2_CircularEdgeConstraint.png) Add circular edge constraint
- ![](/images/Assembly2_PlaneConstraint.png) Add plane constraint
- ![](/images/Assembly2_AxialConstraint.png) Add axial constraint
- ![](/images/Assembly2_AngularConstraint.png) Create an angular constraint between two planes
- ![](/images/Assembly2_SphericalSurfaceConstraint.png) Add Spherical surface constraint
- ![](/images/Assembly2_DOFAnimation.png) Animate degrees of freedom
- ![](/images/Assembly2_Assembly2Constraint.png) Solve Assembly2 constraint
- ![](/images/Assembly2_Mux.png) Combine assembly into a single object (use to create a drawing of the assembly, and so on...)
- ![](/images/Assembly2_ListParts.png) Create a parts list from the objects imported using the assembly2 workbench
- ![](/images/Assembly2_Ceck.png) Ceck assembly for part overlap/interferance

Other

- ![](/images/Assembly2_BoltMultipleCircularEdges.png) Bolt multiple circular edges
- ![](/images/Assembly2_FlipConstraint.png) Flip constraint
- ![](/images/Assembly2_LockRotation.png) Lock rotation
- ![](/images/Assembly2_Preferences.png) Preferences
- ![](/images/Assembly2_Assembly2.png) Assembly2 WB icon

## Installation

### Automatic installation

This workbench can be installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr").

### From GitHub

To use this workbench clone this git repository under your FreeCAD Mod directory, and install the pyside and numpy Python libraries. On a Linux Debian based system such as Ubuntu, installation can be done through BASH as follows

```
sudo apt-get install git python-numpy python-pyside
mkdir ~/.FreeCAD/Mod
cd ~/.FreeCAD/Mod
git clone https://github.com/hamish2014/FreeCAD_assembly2.git

```

In FreeCAD you will now have a new workbench-entry called "Assembly 2". Once installed, use git to upgrade to the latest version through BASH as follows

```
cd ~/.FreeCAD/Mod/FreeCAD_assembly2
git pull
rm *.pyc

```

Alternatilvely, on an Ubuntu system the freecad-community PPA can be used:

```
Add ppa:freecad-community/ppa to your software sources
sudo apt-get update
sudo apt-get install freecad-extras-assembly2

```

In Windows

- download the git repository as ZIP
- assuming FreeCAD is installed in "C:\PortableApps\FreeCAD 0_15", go to "C:\PortableApps\FreeCAD 0_15\Mod" within Windows Explorer
- create new directory named "assembly2"
- unzip downloaded repository in "C:\PortableApps\FreeCAD 0_15\Mod\assembly2"

FreeCAD will now have a new workbench-entry called "Assembly 2".

Pyside and Numpy are integrated in the FreeCAD 0.15 dev-Snapshots, so these Python packages do not need to be installed individually

To update to the latest version, delete the assembly2 folder and redownload the git repository.

## Links

- Workbench Wiki:
- FreeCAD Wiki:
- FreeCAD Forum: <http://forum.freecadweb.org/viewtopic.php?f=10&t=8577>
- Tutorials:
- Videos: [video 1](https://www.youtube.com/watch?v=dhaYJKDk4GI), [video 2](http://youtu.be/ufhyUxQkeC0),
- Files:
- Report bugs: Please report bugs at <https://github.com/hamish2014/FreeCAD_assembly2/issues>

## Other useful links

- [Animation](http://www.freecadweb.org/wiki/index.php?title=Sandbox:Animation): This Workbench can be used to create sequences of pictures.
- [ExplodedAnimation](http://www.freecadweb.org/wiki/index.php?title=Sandbox:ExplodedAnimation): FreeCAD workbench to create exploded views and animations of assemblies.
- [External workbenches](/External_workbenches "External workbenches")

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly2_Workbench/de&oldid=1494745>"
