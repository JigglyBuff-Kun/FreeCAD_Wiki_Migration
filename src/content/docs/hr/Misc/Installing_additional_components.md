---
title: Instalacija
---
# Introduction

After installing FreeCAD for your operating system ([Windows](/Installing_on_Windows "Installing on Windows"), [Linux](/Installing_on_Linux "Installing on Linux") or [Mac](/Installing_on_Mac "Installing on Mac")), you may want to consider installing one or more of the following additional components.

# Help files

See [Installing Helpfile](/Installing_Helpfile "Installing Helpfile").

# External workbenches

Apart from the default [workbenches](/Workbenches "Workbenches") bundled with FreeCAD, there is a large collection of useful [external workbenches](/External_workbenches "External workbenches") made by community members.

# Third party software

FreeCAD supports several third party software packages out of the box. In many cases all you need to do is install the software, and when FreeCAD is restarted it will automatically find and be able to use it. This section aims to provide a list of such software packages, together with some information about where they are used in FreeCAD and where they can be downloaded.

## Support

### GitPython

[GitPython](https://github.com/gitpython-developers/GitPython) is a library to interact with Git repositories. The [Addon Manager](/Std_AddonMgr "Std AddonMgr") can use this library. GitPython is included in the FreeCAD installers for Windows and Mac.

### GraphViz

[GraphViz](https://www.graphviz.org) is an open source graph visualization software. It is used by the [Std DependencyGraph](/Std_DependencyGraph "Std DependencyGraph") tool.

### OpenCAMLib

[OpenCAMLib](https://www.anderswallin.net/CAM) is an open source library of computer aided manufacturing (CAM) algorithms. It is used in the [CAM Workbench](/CAM_Workbench "CAM Workbench"). See the [OpenCamLib](/OpenCamLib "OpenCamLib") page for installation instructions.

### OpenSCAD

[OpenSCAD](https://www.openscad.org) is a solid 3D modeller. The [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") depends on this software and the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") uses it for its Boolean tools. It is also required for the import of SCAD files with the [Std Import](/Std_Import "Std Import") tool.

## File formats

All software in this section will be used by the [Std Import](/Std_Import "Std Import") or [Std Export](/Std_Export "Std Export") tools.

### CADExchanger

[CADExchanger](https://cadexchanger.com) is a commercial application for exchanging various CAD file formats. There is an [external workbench](https://github.com/yorikvanhavre/CADExchanger) to use this application in FreeCAD.

### DXF Importer

FreeCAD has a native importer and exporter for DXF files, programmed in C++. Currently they do not implement all features of the DXF format. For those features the legacy Python importer and exporter are still available. These require the [Draft-dxf-importer](https://github.com/yorikvanhavre/Draft-dxf-importer) Python library. See the [FreeCAD and DXF Import](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import") page for more information.

### DWG converters

FreeCAD cannot directly read and write DWG files. To convert DXF files to DWG files, and vice-versa, FreeCAD relies on external converters. There is built-in support for the following DWG converters:

* [LibreDWG](https://www.gnu.org/software/libredwg) (open-source, lacks support for some DWG entities).
* [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) (free, but not open-source).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commercial). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

See [Import Export Preferences](/Import_Export_Preferences#DWG "Import Export Preferences") and [FreeCAD and DWG Import](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") for more information.

### IfcOpenShell

[IfcOpenShell](https://ifcopenshell.org) is a library for working with the Industry Foundation Classes (IFC) file format used in architectural design. The library is also used by the [Arch IfcExplorer](/Arch_IfcExplorer "Arch IfcExplorer") (0.18 and below) and [BIM IfcExplorer](/BIM_IfcExplorer "BIM IfcExplorer") tools. IfcOpenShell is included in the FreeCAD installers for Windows and Mac.

### IfcJson

[IfcJson](https://github.com/buildingSMART/ifcJSON) is a library required for exporting to the IFCJSON file format. IFCJSON is a new IFC format that is not yet supported by many applications.

### Pycollada

[Pycollada](https://github.com/pycollada/pycollada/releases), also known as python-collada, is a Python library to read and write Collada (DAE) files. Pycollada is included in the FreeCAD installers for Windows and Mac.

## Rendering

### LuxCoreRender

[LuxCoreRender](https://www.luxcorerender.org) is a render engine, reboot of the [LuxRender](/LuxRender "LuxRender") project. Officially it is not supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"), but it might be worth to give it a try. It is officially supported by the new [Render Workbench](https://github.com/FreeCAD/FreeCAD-render), intended as a future replacement of the Raytracing Workbench. See the [LuxCoreRender](/LuxCoreRender "LuxCoreRender") page for more information and installation instructions.

### LuxRender

[LuxRender](https://luxcorerender.org/history/) is one of the two render engines supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"). In 2013 the project has been rebooted becoming [LuxCoreRender](/LuxCoreRender "LuxCoreRender"), with a major code rewriting and compatibility breaking changes. Officially the Raytracing Workbench only supports the abandoned [LuxRender](/LuxRender "LuxRender") (latest version is 1.6, 2017-12-28), while the new [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) (intended as a future replacement of the Raytracing Workbench) supports instead LuxCoreRender and has dropped the support for LuxRender. Anyway, even if officially not supported, [LuxCoreRender](/LuxCoreRender "LuxCoreRender") may work with the Raytracing Workbench, it might be worth to give it a try. See the [LuxRender](/LuxRender "LuxRender") page for more information and installation instructions, and the [LuxCoreRender](/LuxCoreRender "LuxCoreRender") if you want to try a more modern software.

### POV-Ray

[POV-Ray](https://www.povray.org) is a well-known ray-tracer which can render photo-realistic images. It is one of two render engines currently supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"). See the [POV-Ray](/POV-Ray "POV-Ray") page for more information and installation instructions.

## Finite element

### CalculiX

[CalculiX](https://calculix.de) is a suite of two finite element packages: CalculiX CrunchiX, a FEM solver, and
CalculiX GraphiX, a GUI frontend. Only the solver is supported by FreeCAD. It is used by the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") tool.

### Gmsh

[Gmsh](https://gmsh.info) is an automatic finite element mesh generator. it is used by the [FEM MeshGmshFromShape](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") and [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") tools.

### Elmer

[Elmer](https://www.csc.fi/web/elmer) is a multi-physics simulation software, which was open sourced in 2005. In FreeCAD its Grid and Solver modules are used by the [FEM SolverElmer](/FEM_SolverElmer "FEM SolverElmer") tool.

### FEniCS

[FEniCS](https://fenicsproject.org) is a computing platform to solve partial differential equations (PDEs), which are widely used when solving FEM problems. It is used by the [FEM workbench](/FEM_Workbench "FEM Workbench")

### Z88

[Z88](https://en.z88.de) is another FEM program, containing a mesher, a solver and converters. It is used by the [FEM SolverZ88](/FEM_SolverZ88 "FEM SolverZ88") tool. FreeCAD requires the open source Z88OS package.

### OpenFOAM

[OpenFOAM](https://openfoam.org) is a large collection of libraries for computational fluid dynamics (CFD) simulations. OpenFOAM is used by the [Cfd](/Cfd_Workbench "Cfd Workbench") and [CfdOF](https://github.com/jaheyns/CfdOF) [external workbenches](/External_workbenches "External workbenches").

## Povezane stranice

* [Biblioteke trećih strana](/index.php?title=Third_Party_Libraries/hr&action=edit&redlink=1 "Third Party Libraries/hr (page does not exist)")

* [Import Export](/Import_Export "Import Export")
* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")
* [Third Party Libraries](/Third_Party_Libraries "Third Party Libraries")

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_additional_components/hr&oldid=1476441>"