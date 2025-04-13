---
title: Arbeitsbereich EM
---

![](/images/EMWorkbench.svg)

EM Arbeitsbereichssymbol

## Einleitung

Der Arbeitsbereich EM (ElectroMagnetic) stellt das CAD front-end interface für einige open source free solvers zur Verfügung. Aktuell unterstützt es den 3D magnetoquasistatic impedance solver [FastHenry](https://www.fastfieldsolvers.com/software.htm#fasthenry2) (d.h. Induktivitäts- und Widerstandsermittlung für "niedrige" Frequenzen). Unterstützung für den 3D electrostatic capacitance solver [FasterCap](https://www.fastfieldsolvers.com/software.htm#fastercap) ist in Arbeit.

![](/images/Screenshot_EM_window.png)

## Installation

Der Arbeitsbereich EM ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit FreeCADs ![](/images/AddonManager.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann. Dies kann über den Menüeintrag **Werkzeuge → Addon-Manager** erfolgen.

Die Löser für elektromagnetische Zusammenhänge FastHenry2 und FasterCap müssen separat installiert werden. Ihre Binärcodes und auch die Quelldateien sind frei erhältlich von [FastFieldSolvers](https://www.fastfieldsolvers.com).

## Anwendung

### FastHenry

FastHenry is a software for computing the frequency-dependant self and mutual inductances and resistances of a generic tridimensional conductive structure, in the magnetoquasistatic approximation. It can also generate Spice-compatible, multiple-frequency equivalent-circuit models.

Knowledge of FastHenry is a pre-condition for the proficient usage of the ElectroMagnetic Workbench for FastHenry. We suggest you to read the original [FastHenry User's manual](https://www.fastfieldsolvers.com/documentation.htm) and play a bit with the sample files that are provided with the installation.

### FasterCap

FasterCap is a powerful three- and two-dimensional capacitance extraction program.

Knowledge of FasterCap is a pre-condition for the proficient usage of the ElectroMagnetic Workbench for FasterCap. We suggest you to read the original [FasterCap help file](https://www.fastfieldsolvers.com/documentation.htm) and play a bit with the sample files that are provided with the installation.

## FastHenry-Werkzeuge

These are tools used to interface with FastHenry:

- ![](/images/EM_FHNode.svg) [FHNode](/EM_FHNode "EM FHNode"): Creates a FastHenry Node object
- ![](/images/EM_FHSegment.svg) [FHSegment](/EM_FHSegment "EM FHSegment"): Creates a FastHenry Segment object
- ![](/images/EM_FHPath.svg) [FHPath](/EM_FHPath "EM FHPath"): Creates a FastHenry Path object
- ![](/images/EM_FHPlane.svg) [FHPlane](/EM_FHPlane "EM FHPlane"): Creates a FastHenry uniform conductive Plane object
- ![](/images/EM_FHPlaneHole.svg) [FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole"): Creates a FastHenry uniform conductive plane Hole object
- ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole"): Add or Remove a Node or a Hole from/to a conductive plane
- ![](/images/EM_FHEquiv.svg) [FHEquiv](/EM_FHEquiv "EM FHEquiv"): Creates a FastHenry node Equivalence object
- ![](/images/EM_FHPort.svg) [FHPort](/EM_FHPort "EM FHPort"): Creates a FastHenry Port object
- ![](/images/EM_FHSolver.svg) [FHSolver](/EM_FHSolver "EM FHSolver"): Creates a FastHenry Solver object
- ![](/images/EM_FHInputFile.svg) [FHInputFIle](/EM_FHInputFile "EM FHInputFile"): Creates a FastHenry Input File

## FasterCap-Werkzeuge

At present, FasterCap is supported via some Macros in the Export_mesh.py file available in the [ElectroMagnetic Workbench GitHub source code](https://github.com/ediloren/EM-Workbench-for-FreeCAD).

## API

Die EM-Werkzeug können in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch Verwendung der EM-API genutzt werden:

## Tutorien

Some video tutorials are available for the EM Workbench beta versions:

- [FreeCAD ElectroMagnetic Workbench tutorial - Getting started](https://www.youtube.com/watch?v=h6Pp-_ovLZM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 1](https://www.youtube.com/watch?v=5pSzPizw4e8)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 2](https://www.youtube.com/watch?v=BeBNtfH25rM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 3](https://www.youtube.com/watch?v=BtgdJOf-ql0)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 1](https://www.youtube.com/watch?v=CRqDuEtbdds)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 2](https://www.youtube.com/watch?v=slsLdLoF2OI)

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_Workbench/de&oldid=1536791>"
