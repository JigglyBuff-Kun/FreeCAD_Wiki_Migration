---
title: Onboarding degli sviluppatori FEM
---
## Descrizione

This page will orient new developers on how to setup their development environments in order to hack on the FEM workbench.

## Setting up a Dev Environment

TBD

### Prerequisites

* Netgen

### Recommended

* Paraview

### Compiling via Source

TBD

### Compiling via Docker

TBD

## Source Code Management

Keeping FreeCAD up-to-date is documented in [Source code management](/Source_code_management "Source code management") page. Along with useful `git` tips.

## FEM Code Infrastructure

The FEM code lives in `src/Mod/Fem`

* `App/` console-mode application, defines basic structures and base classes for document objects, that are used by modules to build their own.
* `Gui/` GUI-mode application, defines the [3D view](/3D_view "3D view"), tools/functions used by workbench to interact with UI and 3D view, defines base classes for [view providers](/Viewprovider "Viewprovider").
* `femcommands/`
* `fem.dox`
* `femexamples/`
* `femguiobjects/`
* `femguiutils/`
* `feminout/`
* `femmesh/`
* `femobjects/`
* `femresult/`
* `femsolver/`
* `femtaskpanels/`
* `femtest/`
* `femtools/`
* `femviewprovider/`
* `InitGui.py`
* `Init.py`
* `ObjectsFem.py`
* `TestFemApp.py`
* `TestFemGui.py`

### Coding Conventions

Please see [coding\_conventions.md](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Fem/coding_conventions.md) file on the FreeCAD repository.

## Adding New FEM Solvers

A new FEM solver requires the following:

* Mesh exporter
* Results importer
* Solver object (needs changes in solver settings, unit tests, ObjectsFem modules as well)
* Task and writer module (here is where the main solver input writing happens)
* GUI tool to create a solver
* GUI preference tab to set the solver binary path
* A solver input writing unit test. Best to take the ccx cantilever. This is available for all mesh element types
* Having one or two beers

See also:

* [Extend FEM Module](/Extend_FEM_Module "Extend FEM Module")
* The implementation efforts of the [oofem](https://github.com/berndhahnebach/FreeCAD_bhb/commits/femoofem) solver
* The implementation efforts of the [myStran](https://github.com/FreeCAD/FreeCAD/compare/a03eb6b9625ba...dfc01ec949525) solver

## Writing Unit Tests

TBD

## Informative

* [Wrapping a Cplusplus class in Python](/Wrapping_a_Cplusplus_class_in_Python "Wrapping a Cplusplus class in Python")
* [Add FEM Equation Tutorial](/Add_FEM_Equation_Tutorial "Add FEM Equation Tutorial")
* [Add Button to FEM Toolbar Tutorial](/Add_Button_to_FEM_Toolbar_Tutorial "Add Button to FEM Toolbar Tutorial")

## Related

* FEM bugs in the [FreeCAD bugtracker](https://github.com/FreeCAD/FreeCAD/issues)
* Open FEM [FIXME](https://github.com/FreeCAD/FreeCAD/search?q=FIXME+AND+fem) comments in the FreeCAD source code
* Open FEM [TODO](https://github.com/FreeCAD/FreeCAD/search?q=TODO+AND+fem) comments in the FreeCAD source code
* [Original thread discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=60574) for this wiki page
* [FEM Workbench](/FEM_Workbench "FEM Workbench")

Retrieved from "<http://wiki.freecad.org/index.php?title=Onboarding_FEM_Devs/it&oldid=1341628>"