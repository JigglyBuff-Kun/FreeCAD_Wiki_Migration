---
title: EM FHSolver/de
---
|  |
| --- |
| EM FHSolver |
| Menu location |
| EM → FHSolver |
| Workbenches |
| [EM](/EM_Workbench "EM Workbench") |
| Default shortcut |
| E X |
| Introduced in version |
| 0.17 |
| See also |
| [EM FHInputFile](/EM_FHInputFile "EM FHInputFile"), [EM FHNode](/EM_FHNode "EM FHNode"), [EM FHSegment](/EM_FHSegment "EM FHSegment"), [EM FHPath](/EM_FHPath "EM FHPath"), [EM FHPlane](/EM_FHPlane "EM FHPlane"), [EM FHEquiv](/EM_FHEquiv "EM FHEquiv"), [EM FHPort](/EM_FHPort "EM FHPort") |
|  |

## Beschreibung

Das Werkzeug FHSolver fügt ein FHSolver-Objekt ein.

![](/images/EM_FHSolver_Example.png)

FHSolver object

## Anwendung

To insert a FHSolver object in the Document:

1. Press the ![](/images/EM_FHSolver.svg) [EM FHSolver](/EM_FHSolver "EM FHSolver") button, or press E then X keys.

### Remarks

* The FHSolver object represents the FastHenry directives that are needed in the common sections of the FastHenry input file for defining the simulation parameters, as for instance the list of frequency points at which the simulation should be run, the default units of measurement, etc. plus the output file name and folder for creating the FastHenry input file.

* You should have only one FHSolver object per Document. If more than one FHSolver object is present, only the first one will be considered.

## Eigenschaften

* Daten**Units**: the FastHenry '.units'. Each unit in FreeCad will be one unit of the corresponding unit of measurement in FastHenry. Remark: this means that you can have for example a 3D drawing in FreeCAD with units set as meters, and specify a different unit of measurement for FastHenry, e.g. millimeters. So the value '1.0m' in FreeCAD will actually be '1.0mm' for the FastHenry simulation.
* Daten**Sigma**: the default Segment conductivity ('sigma' segment parameter in FastHenry '.default' statement)
* Daten**nhinc**: the default number of filaments in the height direction ('nhinc' segment parameter in FastHenry '.default' statement)
* Daten**nwinc**: the default number of filaments in the width direction ('nwinc' segment parameter in FastHenry '.default' statement)
* Daten**rh**: the default ratio of adjacent filaments in the height direction ('rh' segment parameter in FastHenry '.default' statement)
* Daten**rw**: the default ratio of adjacent filaments in the height direction ('rw' segment parameter in FastHenry '.default' statement)
* Daten**fmin**: the lowest simulation frequency ('fmin' segment parameter in FastHenry '.freq' statement)
* Daten**fmax**: the highest simulation frequency ('fmax' segment parameter in FastHenry '.freq' statement)
* Daten**ndec**: the number of desired frequency points per decade ('ndec' segment parameter in FastHenry '.freq' statement)
* Daten**Folder**: the folder path for exporting the file in FastHenry input file format
* Daten**Filename**: the simulation filename when exporting to FastHenry input file format

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Objekt FHSolver kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
node = makeFHSolver(units=None, sigma=None, nhinc=None, nwinc=None, rh=None, rw=None, fmin=None, fmax=None, ndec=None, folder=None, filename=None, name='FHSolver')

```

* Creates a `FHSolver` object.
* `units` is the FastHenry unit of measurement. Each unit in FreeCad will be one unit of the corresponding unit of measurement in FastHenry. Allowed values are: "km", "m", "cm", "mm", "um", "in", "mils". Defaults to `EMFHSOLVER_DEFUNITS`
* `sigma` is the float default conductivity. Defaults to `EMFHSOLVER_DEF_SEGSIGMA`.
* `nhinc` is the integer default nhinc parameter in FastHenry, for defining the segment height discretization into filaments. Defaults to `EMFHSOLVER_DEFNHINC`.
* `nwinc` is the integer default nwinc parameter in FastHenry, for defining the segment width discretization into filaments. Defaults to `EMFHSOLVER_DEFNWINC`.
* `rh` is the integer default rh parameter in FastHenry, for defining the segment height discretization ratio. Defaults to `EMFHSOLVER_DEFRH`.
* `rw` is the integer default rw parameter in FastHenry, for defining the segment height discretization ratio. Defaults to `EMFHSOLVER_DEFRW`.
* `fmin` is the float minimum simulation frequency
* `fmax` is the float maximum simulation frequency
* `ndec` is the float value defining how many frequency points per decade will be simulated.
* `folder` is the folder into which the FastHenry file will be saved. Defaults to the user's home path (e.g. in Windows "C:\Documents and Settings\username\My Documents", in Linux "/home/username").
* `filename` is the name of the file that will be exported. Defaults to `EMFHSOLVER_DEF_FILENAME`.
* `name` is the name of the object

Beispiel:

```
import FreeCAD, EM

fhsolver = EM.makeFHSolver()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHSolver/de&oldid=1340724>"