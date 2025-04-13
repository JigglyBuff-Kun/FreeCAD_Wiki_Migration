---
title: Instalación de componentes adicionales
---
# Introducción

Después de instalar FreeCAD para tu sistema operativo ([Windows](/Installing_on_Windows/es "Installing on Windows/es"), [Linux](/Installing_on_Linux/es "Installing on Linux/es") o [Mac](/Installing_on_Mac/es "Installing on Mac/es")), puedes considerar la instalación de uno o más de los siguientes componentes adicionales.

# Archivos de ayuda

La documentación fuera de línea no se envía con todos los instaladores, pero está disponible como un paquete separado. Consulte la página [Instalación del archivo de ayuda](/Installing_Helpfile/es "Installing Helpfile/es") para obtener más información.

# Ambientes de trabajo externos

Aparte de los [Ambientes de Trabajo](/Workbenches/es "Workbenches/es") por defecto incluidos en FreeCAD, hay una gran colección de útiles [Ambientes de trabajo externos](/External_workbenches/es "External workbenches/es") hechos por miembros de la comunidad.

# Software de terceros

FreeCAD apoya varios paquetes de software de terceros fuera de la caja. En muchos casos todo lo que necesitas hacer es instalar el software, y cuando FreeCAD se reinicie lo encontrará automáticamente y será capaz de utilizarlo. Esta sección tiene como objetivo proporcionar una lista de tales paquetes de software, junto con alguna información sobre dónde se utilizan en FreeCAD y dónde se pueden descargar.

## Apoyo

### GitPython

[GitPython](https://github.com/gitpython-developers/GitPython) es una biblioteca para interactuar con los repositorios Git. El [Gestor Complementos](/Std_AddonMgr/es "Std AddonMgr/es") puede utilizar esta biblioteca. GitPython está incluido en los instaladores de FreeCAD para Windows y Mac.

### GraphViz

[GraphViz](https://www.graphviz.org) es un software de visualización gráficos de código abierto. Es utilizado por la herramienta [Std Gráfico dependencia](/Std_DependencyGraph/es "Std DependencyGraph/es").

### OpenCAMLib

[OpenCAMLib](http://www.anderswallin.net/CAM) es una biblioteca de código abierto de algoritmos de fabricación asistida por ordenador (CAM). Se utiliza en el [Ambiente de Trabajo Path](/Path_Workbench/es "Path Workbench/es"). Consulte la página [OpenCamLib](/index.php?title=OpenCamLib/es&action=edit&redlink=1 "OpenCamLib/es (page does not exist)") para obtener instrucciones de instalación.

### OpenSCAD

[OpenSCAD](https://www.openscad.org) es un modelador de sólidos en 3D. El [OpenSCAD Ambiente de trabajo](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es") depende de este software y el [Ambiente de trabajo Malla](/Mesh_Workbench/es "Mesh Workbench/es") lo utiliza para sus herramientas booleanas. También es necesario para la importación de archivos SCAD con la herramienta [Std Importar](/Std_Import/es "Std Import/es").

## Formatos de archivo

Todo el software de esta sección será utilizado por las herramientas [Std Importar](/Std_Import/es "Std Import/es") o [Std Exportar](/index.php?title=Std_Export/es&action=edit&redlink=1 "Std Export/es (page does not exist)").

### CADExchanger

[CADExchanger](https://cadexchanger.com) es una aplicación comercial para intercambiar varios formatos de archivos CAD. Existe un [ambiente de trabajo externo](https://github.com/yorikvanhavre/CADExchanger) para utilizar esta aplicación en FreeCAD.

### DXF Importador

FreeCAD tiene un importador y exportador nativo para archivos DXF, programado en C++. Actualmente no implementan todas las características del formato DXF. Para esas características el importador y el exportador heredados de Python están todavía disponibles. Estos requieren la biblioteca Python [Draft-dxf-importer](https://github.com/yorikvanhavre/Draft-dxf-importer). Ver la página [FreeCAD y DXF Import](/FreeCAD_and_DXF_Import/es "FreeCAD and DXF Import/es") para más información.

### DWG converters

FreeCAD cannot directly read and write DWG files. To convert DXF files to DWG files, and vice-versa, FreeCAD relies on external converters. There is built-in support for the following DWG converters:

* [LibreDWG](https://www.gnu.org/software/libredwg) (open-source, lacks support for some DWG entities).
* [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) (free, but not open-source).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commercial). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

See [Import Export Preferences](/Import_Export_Preferences#DWG "Import Export Preferences") and [FreeCAD and DWG Import](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") for more information.

### IfcOpenShell

[IfcOpenShell](http://ifcopenshell.org) es una biblioteca para trabajar con el formato de archivo Industry Foundation Classes (IFC) utilizado en el diseño arquitectónico. La biblioteca también es utilizada por el [Arch IfcExplorer](/Arch_IfcExplorer/es "Arch IfcExplorer/es") (version 0.18 y abajo) y [BIM IfcExplorer](/BIM_IfcExplorer/es "BIM IfcExplorer/es"). IfcOpenShell está incluido en los instaladores de FreeCAD para Windows y Mac.

### IfcJson

[IfcJson](https://github.com/buildingSMART/ifcJSON) es una biblioteca necesaria para exportar al formato de archivo IFCJSON. IFCJSON es un nuevo formato IFC que aún no es soportado por muchas aplicaciones.

### Pycollada

[Pycollada](https://github.com/pycollada/pycollada/releases), también conocido como python-collada, es una biblioteca de Python para leer y escribir archivos Collada (DAE). Pycollada se incluye en los instaladores de FreeCAD para Windows y Mac.

## Renderización

### LuxCoreRender

### LuxCoreRender

[LuxCoreRender](https://www.luxcorerender.org) es una máquina de renderizado, reinicio del proyecto [LuxRender](/index.php?title=LuxRender/es&action=edit&redlink=1 "LuxRender/es (page does not exist)"). Oficialmente no está soportado por el [Ambiente de trabajo Trazado de rayos](/Raytracing_Workbench/es "Raytracing Workbench/es"), pero podría valer la pena probarlo. Está oficialmente soportado por el nuevo [Ambiente de trabajo Renderización](https://github.com/FreeCAD/FreeCAD-render), pensado como un futuro reemplazo del ambiente de trabajo trazado de rayos. Ver la página [LuxCoreRender](/index.php?title=LuxCoreRender/es&action=edit&redlink=1 "LuxCoreRender/es (page does not exist)") para más información e instrucciones de instalación.

### LuxRender

### LuxRender

[LuxRender](https://luxcorerender.org/history/) es una de las dos máquinas de renderización soportados por el [Ambiente de trabajo Trazado de rayos](/Raytracing_Workbench/es "Raytracing Workbench/es"). En 2013 el proyecto ha sido reiniciado convirtiéndose en [LuxCoreRender](/index.php?title=LuxCoreRender/es&action=edit&redlink=1 "LuxCoreRender/es (page does not exist)"), con una importante reescritura de código y cambios que rompen la compatibilidad. Oficialmente el ambiente de trabajo trazado de rayos sólo soporta el abandonado [LuxRender](/index.php?title=LuxRender/es&action=edit&redlink=1 "LuxRender/es (page does not exist)") (la última versión es la 1.6, 2017-12-28), mientras que el nuevo [Ambiente de trabajo Renderización](https://github.com/FreeCAD/FreeCAD-render) (pensado como un futuro reemplazo del Ambiente de trabajo Trazado de rayos) soporta en cambio LuxCoreRender y ha dejado de soportar LuxRender. De todos modos, aunque oficialmente no esté soportado, [LuxCoreRender](/index.php?title=LuxCoreRender/es&action=edit&redlink=1 "LuxCoreRender/es (page does not exist)") puede funcionar con el Ambiente de trabajo Trazado de rayos, podría valer la pena probarlo. Mira la página de [LuxRender](/index.php?title=LuxRender/es&action=edit&redlink=1 "LuxRender/es (page does not exist)") para más información e instrucciones de instalación, y la de [LuxCoreRender](/index.php?title=LuxCoreRender/es&action=edit&redlink=1 "LuxCoreRender/es (page does not exist)") si quieres probar un software más moderno.

### POVRay

[POV-Ray](https://www.povray.org) es un conocido trazador de rayos que puede renderizar imágenes fotorrealistas. Es una de las dos máquinas de renderización actualmente soportados por el [Ambiente de trabajo Trazado de rayos](/Raytracing_Workbench/es "Raytracing Workbench/es"). Vea la página [POV-Ray](/index.php?title=POV-Ray/es&action=edit&redlink=1 "POV-Ray/es (page does not exist)") para más información e instrucciones de instalación.

## Elemento Finito

### CalculiX

[CalculiX](http://calculix.de) es un conjunto de dos paquetes de elementos finitos: CalculiX CrunchiX, un solucionador MEF, y
CalculiX GraphiX, una interfaz gráfica de usuario. Sólo el solucionador está soportado por FreeCAD. Es utilizado por la herramienta [Solucionador CalculiX](/index.php?title=FEM_SolverCalculiX/es&action=edit&redlink=1 "FEM SolverCalculiX/es (page does not exist)").

### Gmsh

[Gmsh](http://gmsh.info) es un generador automático de mallas de elementos finitos. Es utilizado por las herramientas [MEF MallaGmshDesdeForma](/index.php?title=FEM_MeshGmshFromShape/es&action=edit&redlink=1 "FEM MeshGmshFromShape/es (page does not exist)") y [Malla DesdePiezaForma](/index.php?title=Mesh_FromPartShape/es&action=edit&redlink=1 "Mesh FromPartShape/es (page does not exist)").

### Elmer

[Elmer](https://www.csc.fi/web/elmer) es un software de simulación multifísica, de código abierto en 2005. En FreeCAD sus módulos Rejilla y Solucionador son utilizados por la herramienta [FEM SolverElmer](/index.php?title=FEM_SolverElmer/es&action=edit&redlink=1 "FEM SolverElmer/es (page does not exist)").

### FEniCS

[FEniCS](https://fenicsproject.org) es una plataforma de computación para resolver ecuaciones diferenciales parciales (EDP), que se utilizan ampliamente al resolver problemas de MEF. Es utilizado por el [Ambiente de trabajo MEF](/FEM_Workbench/es "FEM Workbench/es")

### Z88

[Z88](https://en.z88.de) es otro programa de MEF que contiene un mallado, un solucionador y convertidores. Es utilizado por la herramienta [FEM SolucionadorZ88](/index.php?title=FEM_SolverZ88/es&action=edit&redlink=1 "FEM SolverZ88/es (page does not exist)"). FreeCAD requiere el paquete Z88OS de código abierto.

### OpenFOAM

[OpenFOAM](https://openfoam.org) es una gran colección de bibliotecas para simulaciones de dinámica de fluidos computacional (CFD). OpenFOAM es utilizado por los [Cfd](/index.php?title=Cfd_Workbench/es&action=edit&redlink=1 "Cfd Workbench/es (page does not exist)") y [CfdOF](https://github.com/jaheyns/CfdOF) [Ambientes de trabajo externo](/External_workbenches/es "External workbenches/es").

# Páginas relacionadas

* [Importación Exportación](/Import_Export/es "Import Export/es")
* [Preferencias de importación y exportación](/Import_Export_Preferences/es "Import Export Preferences/es")
* [Bibliotecas de terceros](/Third_Party_Libraries/es "Third Party Libraries/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_additional_components/es&oldid=1476434>"