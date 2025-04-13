---
title: EM Workbench
---

![](/src/assets/images/EMWorkbench.svg)

EM Workbench icon

## Introduction

The EM (ElectroMagnetic) Workbench provides the CAD front-end interface to some open source free solvers. At present it supports the 3D magnetoquasistatic impedance solver [FastHenry](https://www.fastfieldsolvers.com/software.htm#fasthenry2) (i.e. inductance and resistance extraction at "low" frequencies). Support for the 3D electrostatic capacitance solver [FasterCap](https://www.fastfieldsolvers.com/software.htm#fastercap) is ongoing.

![](/src/assets/images/Screenshot_EM_window.png)

## Installation

The [EM Workbench](/EM_Workbench "EM Workbench") is an [external workbench](/External_workbenches "External workbenches"), that can be installed from the FreeCAD ![](/src/assets/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). This can be done via the **Tools → Addon Manager** menu.

The electromagnetic solvers FastHenry2 and FasterCap must be installed separately. Their binary codes as well as the sources are freely available from [FastFieldSolvers](https://www.fastfieldsolvers.com).

## Usage

### FastHenry

FastHenry is a software for computing the frequency-dependant self and mutual inductances and resistances of a generic tridimensional conductive structure, in the magnetoquasistatic approximation. It can also generate Spice-compatible, multiple-frequency equivalent-circuit models.

Knowledge of FastHenry is a pre-condition for the proficient usage of the ElectroMagnetic Workbench for FastHenry. We suggest you to read the original [FastHenry User's manual](https://www.fastfieldsolvers.com/documentation.htm) and play a bit with the sample files that are provided with the installation.

### FasterCap

FasterCap is a powerful three- and two-dimensional capacitance extraction program.

Knowledge of FasterCap is a pre-condition for the proficient usage of the ElectroMagnetic Workbench for FasterCap. We suggest you to read the original [FasterCap help file](https://www.fastfieldsolvers.com/documentation.htm) and play a bit with the sample files that are provided with the installation.

## FastHenry Tools

These are tools used to interface with FastHenry:

- ![](/src/assets/images/EM_FHNode.svg) [FHNode](/EM_FHNode "EM FHNode"): Creates a FastHenry Node object
- ![](/src/assets/images/EM_FHSegment.svg) [FHSegment](/EM_FHSegment "EM FHSegment"): Creates a FastHenry Segment object
- ![](/src/assets/images/EM_FHPath.svg) [FHPath](/EM_FHPath "EM FHPath"): Creates a FastHenry Path object
- ![](/src/assets/images/EM_FHPlane.svg) [FHPlane](/EM_FHPlane "EM FHPlane"): Creates a FastHenry uniform conductive Plane object
- ![](/src/assets/images/EM_FHPlaneHole.svg) [FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole"): Creates a FastHenry uniform conductive plane Hole object
- ![](/src/assets/images/EM_FHPlaneAddRemoveNodeHole.svg) [FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole"): Add or Remove a Node or a Hole from/to a conductive plane
- ![](/src/assets/images/EM_FHEquiv.svg) [FHEquiv](/EM_FHEquiv "EM FHEquiv"): Creates a FastHenry node Equivalence object
- ![](/src/assets/images/EM_FHPort.svg) [FHPort](/EM_FHPort "EM FHPort"): Creates a FastHenry Port object
- ![](/src/assets/images/EM_FHSolver.svg) [FHSolver](/EM_FHSolver "EM FHSolver"): Creates a FastHenry Solver object
- ![](/src/assets/images/EM_FHInputFile.svg) [FHInputFIle](/EM_FHInputFile "EM FHInputFile"): Creates a FastHenry Input File

## FasterCap Tools

At present, FasterCap is supported via some Macros in the Export_mesh.py file available in the [ElectroMagnetic Workbench GitHub source code](https://github.com/ediloren/EM-Workbench-for-FreeCAD).

## API

The EM tools can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the EM API.

## Tutorials

Some video tutorials are available for the EM Workbench beta versions:

- [FreeCAD ElectroMagnetic Workbench tutorial - Getting started](https://www.youtube.com/watch?v=h6Pp-_ovLZM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 1](https://www.youtube.com/watch?v=5pSzPizw4e8)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 2](https://www.youtube.com/watch?v=BeBNtfH25rM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 3](https://www.youtube.com/watch?v=BtgdJOf-ql0)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 1](https://www.youtube.com/watch?v=CRqDuEtbdds)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 2](https://www.youtube.com/watch?v=slsLdLoF2OI)

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_Workbench/en&oldid=1078815>"
