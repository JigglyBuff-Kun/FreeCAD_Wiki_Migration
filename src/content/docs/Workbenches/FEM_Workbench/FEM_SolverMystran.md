---
title: FEM SolverMystran
---

|                                              |
| -------------------------------------------- |
| FEM SolverMystran                            |
| Menu location                                |
| Solve → Solver Mystran                       |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| S M                                          |
| Introduced in version                        |
| 0.20                                         |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

The [SolverMystran](/FEM_SolverMystran "FEM SolverMystran") command enables usage of the [MYSTRAN](https://www.mystran.com) solver. It may be used for:

1. Setting analysis parameters.
2. Selecting working directory.
3. Running the MYSTRAN solver.

## Installation

### Windows

You can get the Mystran executable [here](https://github.com/MYSTRANsolver/MYSTRAN/releases). Put the folder where you place mystran.exe (the executable must have this exact name - remove the remaining part of the default name) in the Windows PATH variable or just place the file in the FreeCAD\bin folder. If necessary, specify it under **Preferences → FEM → Mystran**.

The [SolverMystran](/FEM_SolverMystran "FEM SolverMystran") also needs two other packages:

- [pyNastran](https://github.com/SteveDoyle2/pyNastran) - to write out case file.
- [hfcMystran](https://github.com/ceanwang/hfcMystran) - to read in Mystran's NEU result file.

pyNastran can be installed through pip:

1. Open a Command terminal in your FreeCAD\bin folder.
2. Enter: `python -m pip install pyNastran`
3. It will be installed in the FreeCAD\bin\lib\site-packages folder.

hfcMystran can be downloaded from its github site as a zip file (_Code → Download ZIP_). Unzip it and place it in the FreeCAD\Mod folder.

### Linux

Linux installation procedure is similar but there are some differences.

After downloading the Mystran executable, rename it as explained above, allow it to be executed (_right-click → Properties → Permissions → Allow executing file as program_) and put it in the usr/bin directory of FreeCAD.

To install pyNastran, enter the following commands in the [Python console](/Python_console "Python console") in FreeCAD:

```
import subprocess
subprocess.run(['pip', 'install', 'pyNastran'])

```

Finally, download and unpack hfcMystran and put it in the usr/Mod directory of FreeCAD.

## Quick test

After installation you can select **Utilities → Open FEM examples** in the FEM Workbench. Under **Solver → Mystran** you can find some working Mystran examples.

## Usage

1. Create an ![](/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis "FEM Analysis").
2. There are several ways to invoke the command:
   - Select **Solve → ![](/images/FEM_SolverMystran.svg) Solver Mystran** option from the menu.
   - Use the keyboard shortcut: S then M.
3. Double-click the ![](/images/FEM_SolverMystran.svg) SolverMystran object.
4. Press the Write button.
5. Press the Run button.

## Limitations

- Currently, only displacements are available as contour plots from analyses with this solver. To see the stresses, switch to hfcMystran workbench, open your case and its F06 file. pyNastran GUI can be used to plot all the results.
- Only the following element types are currently supported: first and second order tetrahedrons, first order triangular and quadrilateral shells and first order beams. If different elements are generated with Gmsh, the Mystran solver will show an error.

## File function

Under Mod\Fem\femsolver\mystran, there are these files:

```
add_con_displacement.py
add_con_fixed.py
add_con_force.py
add_femelement_geometry.py
add_femelement_material.py
add_mesh.py
add_solver_control.py
writer.py
solver.py
tasks.py

```

The function of each file are:

writer.py - main control file

```
model = BDF()
model = add_solver_control.add_solver_control(pynasf, model, self)
model = add_femelement_geometry.add_femelement_geometry(pynasf, model, self)
model = add_mesh.add_mesh(pynasf, model, self)
model = add_femelement_material.add_femelement_material(pynasf, model, self)
model = add_con_fixed.add_con_fixed(pynasf, model, self)
model = add_con_displacement.add_con_displacement(pynasf, model, self)
model = add_con_force.add_con_force(pynasf, model, self)

```

BDF() - Create empty case file.

```
$pyNastran: version=msc
$pyNastran: punch=False
$pyNastran: encoding=utf-8
$pyNastran: nnodes=0
$pyNastran: nelements=0
ENDDATA

```

add_solver_control.py - Adding EXECUTIVE CONTROL DECK and CASE CONTROL DECK.

```
$EXECUTIVE CONTROL DECK
SOL 101
CEND
$CASE CONTROL DECK
ECHO = NONE
TITLE = pyNastran for generating solverinput for for Mystran
SUBCASE 1
    DISPLACEMENT(SORT1,REAL) = ALL
    LOAD = 1
    SPC = 1
    SPCFORCES(SORT1,REAL) = ALL
    STRESS(SORT1,REAL,VONMISES,BILIN) = ALL
    SUBTITLE = Default
BEGIN BULK
$PARAMS
PARAM       POST      -1

```

add_femelement_geometry.py - Adding GRID cards

add_mesh.py - Adding element cards

add_femelement_material.py - Adding MAT1 card

add_con_fixed.py - Adding SPCADD and SPC1 cards

add_con_displacement.py - Adding SPCADD and SPC1 cards

add_con_force.py - Adding FORCE cards

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverMystran/en&oldid=1569017>"
