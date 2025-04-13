---
title: Ambiente EM
---

![](/images/EMWorkbench.svg)

EM Workbench icon

## Introduzione

The EM (ElectroMagnetic) Workbench provides the CAD front-end interface to some open source free solvers. At present it supports the 3D magnetoquasistatic impedance solver [FastHenry](https://www.fastfieldsolvers.com/software.htm#fasthenry2) (i.e. inductance and resistance extraction at "low" frequencies). Support for the 3D electrostatic capacitance solver [FasterCap](https://www.fastfieldsolvers.com/software.htm#fastercap) is ongoing.

![](/images/Screenshot_EM_window.png)

## Installazione

EM è un [ambiente esterno](/External_workbenches/it "External workbenches/it"), che può essere installato da ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). Questo può essere fatto tramite il menu **Strumenti → Addon Manager**.

I risolutori elettromagnetici FastHenry2 e FasterCap devono essere installati separatamente. I loro codici binari e i sorgenti sono liberamente disponibili in [FastFieldSolvers](https://www.fastfieldsolvers.com).

## Utilizzo

### FastHenry

FastHenry is a software for computing the frequency-dependant self and mutual inductances and resistances of a generic tridimensional conductive structure, in the magnetoquasistatic approximation. It can also generate Spice-compatible, multiple-frequency equivalent-circuit models.

Knowledge of FastHenry is a pre-condition for the proficient usage of the ElectroMagnetic Workbench for FastHenry. We suggest you to read the original [FastHenry User's manual](https://www.fastfieldsolvers.com/documentation.htm) and play a bit with the sample files that are provided with the installation.

### FasterCap

FasterCap is a powerful three- and two-dimensional capacitance extraction program.

Knowledge of FasterCap is a pre-condition for the proficient usage of the ElectroMagnetic Workbench for FasterCap. We suggest you to read the original [FasterCap help file](https://www.fastfieldsolvers.com/documentation.htm) and play a bit with the sample files that are provided with the installation.

## Strumenti di FastHenry

Questi sono gli strumenti utilizzati per interfacciarsi con FastHenry:

- ![](/images/EM_FHNode.svg) [FHNode](/EM_FHNode/it "EM FHNode/it"): Crea un oggetto FastHenry Node
- ![](/images/EM_FHSegment.svg) [FHSegment](/EM_FHSegment/it "EM FHSegment/it"): Crea un oggetto FastHenry Segment
- ![](/images/EM_FHPath.svg) [FHPath](/EM_FHPath/it "EM FHPath/it"): Crea un oggetto FastHenry Path
- ![](/images/EM_FHPlane.svg) [FHPlane](/EM_FHPlane/it "EM FHPlane/it"): Crea un oggetto FastHenry uniform conductive Plane
- ![](/images/EM_FHPlaneHole.svg) [FHPlaneHole](/EM_FHPlaneHole/it "EM FHPlaneHole/it"): Crea un oggetto FastHenry uniform conductive plane Hole
- ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole/it "EM FHPlaneAddRemoveNodeHole/it"): Aggiunge o Rimuove un Node o un Hole da/a un piano conduttivo
- ![](/images/EM_FHEquiv.svg) [FHEquiv](/EM_FHEquiv/it "EM FHEquiv/it"): Crea un oggetto FastHenry node Equivalence
- ![](/images/EM_FHPort.svg) [FHPort](/EM_FHPort/it "EM FHPort/it"): Crea un oggetto FastHenry Port
- ![](/images/EM_FHSolver.svg) [FHSolver](/EM_FHSolver/it "EM FHSolver/it"): Crea un oggetto FastHenry Solver
- ![](/images/EM_FHInputFile.svg) [FHInputFIle](/EM_FHInputFile/it "EM FHInputFile/it"): Crea un file FastHenry Input

## Strumenti di FasterCap

At present, FasterCap is supported via some Macros in the Export_mesh.py file available in the [ElectroMagnetic Workbench GitHub source code](https://github.com/ediloren/EM-Workbench-for-FreeCAD).

## API

The EM tools can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the EM API.

## Tutorial

Per le versioni beta di EM Workbench sono disponibili alcune esercitazioni video :

- [FreeCAD ElectroMagnetic Workbench tutorial - Getting started](https://www.youtube.com/watch?v=h6Pp-_ovLZM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 1](https://www.youtube.com/watch?v=5pSzPizw4e8)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 2](https://www.youtube.com/watch?v=BeBNtfH25rM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 3](https://www.youtube.com/watch?v=BtgdJOf-ql0)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 1](https://www.youtube.com/watch?v=CRqDuEtbdds)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 2](https://www.youtube.com/watch?v=slsLdLoF2OI)

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_Workbench/it&oldid=1536783>"
