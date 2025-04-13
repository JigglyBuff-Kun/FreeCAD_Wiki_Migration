---
title: Módulo de Trazado de Rayos
---

:::caution
TheRaytracing Workbenchis no longer included after version 0.20.The externalRender Workbenchshould be used instead.
:::
![](/images/Workbench_PartDesign.svg)

El icono del Ambiente de trabajo Trazado de rayos

## Introducción

El ![](/images/Workbench_Raytracing.svg) Ambiente de trabajo Trazado de rayos es usado para generar imágenes fotorealistas de tus modelos al renderizarlos con un renderizador externo.

El Ambiente de trabajo trazado de rayos opera con [plantillas](/index.php?title=Raytracing_templates/es&action=edit&redlink=1 "Raytracing templates/es (page does not exist)"), que son archivos de escena para un renderizador dado, incluyendo iluminación y posiblemente geometría adicional como son planos de suelo. Estos archivos de escena contienen apartados, en los que FreeCAD insertará la posición de la cámara, y la geometría e información de materiales de cada objeto que insertes en el proyecto. La escena modificada es exportada después al renderizador externo.

De momento, dos renderizadores son soportados [povray](http://en.wikipedia.org/wiki/POV-Ray) y [luxrender](http://en.wikipedia.org/wiki/LuxRender). Para poder renderizar directamente en FeeCAD, al menos uno de esos renderizadores debe estar instalado en tu sistema, y su ubicación debe ser configurada en las preferencias de trazado de rayos de FreeCAD. Si ningún renderizador está instalado, todavía puedes exportar un archivo de escena que puede ser utilizado por alguno de los renderizadores después, o en otra máquina.

The Raytracing workbench is essentially obsolete. New development is happening in the [Render Workbench](https://github.com/FreeCAD/FreeCAD-render), which is intended as its replacement. This workbench is fully programmed in Python so it is much easier to extend than the current workbench which is programmed in C++. Nevertheless, the information in this page is generally useful for the new workbench, as both modules work basically in the same way.

![](/images/Raytracing_example.jpg)

## Flujo de trabajo típico

1. Crea o abre un proyecto FreeCAD, agrega algunos objetos [basados en sólidos](/Part_Workbench "Part Workbench") (por el momento no se soportan mallas)
2. Crea un proyecto de trazado de rayos (luxrender o povray)
3. Selecciona los objetos que desees agregar al proyecto de trazado de rayos y agrçegalos con la herramienta "Insertar Parte"
4. Exporta el proyecto o renderízalo directamente

![](/images/Raytracing_Workbench_workflow.svg)

Workflow of the Raytracing Workbench; the workbench prepares a project file from a given template, and then calls an external program to produce the actual rendering of the scene. The external renderer can be used independently of FreeCAD.

### Herramientas GUI

### Project tools

These are the main tools for exporting your 3D work to external renderers.

- ![](/images/Raytracing_New.svg) [New PovRay project](/Raytracing_New "Raytracing New"): Insert new PovRay project in the document
- ![](/images/Raytracing_Lux.svg) [New LuxRender project](/Raytracing_Lux "Raytracing Lux"): Insert new LuxRender project in the document
- ![](/images/Raytracing_InsertPart.svg) [Insert part](/Raytracing_InsertPart "Raytracing InsertPart"): Insert a view of a Part in a raytracing project
- ![](/images/Raytracing_ResetCamera.svg) [Reset camera](/Raytracing_ResetCamera "Raytracing ResetCamera"): Matches the camera position of a raytracing project to the current view
- ![](/images/Raytracing_ExportProject.svg) [Export project](/Raytracing_ExportProject "Raytracing ExportProject"): Exports a raytracing project to a scene file for rendering in an external renderer
- ![](/images/Raytracing_Render.svg) [Render](/Raytracing_Render "Raytracing Render"): Renders a raytracing project with an external renderer

### Utilities

These are helper tools to perform specific tasks manually.

- ![](/images/Raytracing_WriteView.svg) [Export view to povray](/Raytracing_WriteView "Raytracing WriteView"): Write the active 3D view with camera and all its content to a povray file
- ![](/images/Raytracing_WriteCamera.svg) [Export camera to povray](/Raytracing_WriteCamera "Raytracing WriteCamera"): Export the camera position of the active 3D view in POV-Ray format to a file
- ![](/images/Raytracing_WritePart.svg) [Export part to povray](/Raytracing_WritePart "Raytracing WritePart"): Write the selected Part (object) as a povray file

## Preferences

- ![](/images/Preferences-raytracing.svg) [Preferences](/Raytracing_Preferences "Raytracing Preferences"): Preferences available in for the Raytracing tools.

## Tutorials

- [Basic Raytracing tutorial](/Raytracing_tutorial "Raytracing tutorial")
- [Intermediate Raytracing tutorial](/Tutorial_FreeCAD_POV_ray "Tutorial FreeCAD POV ray")

## Creando el archivo povray manualmente

Las herramientas descritas anteriormente te permiten exportar la vista 3D actual y todos sus contenidos a un archivo [Povray](http://www.povray.org/). Primero, debes de cargar o crear tu información de CAD y posicionar la orientación de vista 3D como desees. Después selecciona "Utilidades->Exportar Vista..." del menu de trazado de rayos.

![](/images/FreeCAD_Raytracing.jpg)

Se te solicitará la ubicación para guardar el archivo \*.pov resultante. Después de ello puedes abrirlo en [Povray](http://www.povray.org/) y renderizar:

![](/images/Povray.jpg)

Como siempre, en un renderizador puedes hacer imágenes grandes y bonitas:

![](/images/Scharniergreifer_render.jpg)

### Archivos de guión

See the [Raytracing API example](/Raytracing_API_example "Raytracing API example") for information on writing scenes programmatically.

### Enlaces

Sobre POV-Ray:

- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://es.wikipedia.org/wiki/POV-Ray>

### LuxRender

- [LuxRender page on this wiki](/LuxRender "LuxRender")
- <http://www.luxrender.net/>

### Future possible renderers to implement

- <http://www.yafaray.org/>
- <http://www.mitsuba-renderer.org/>
- <http://www.kerkythea.net/>
- <http://www.artofillusion.org/>

## Exporting to Kerkythea

Although direct export to the Kerkythea XML-File-Format is not supported yet, you can export your Objects as Mesh-Files (.obj) and then import them in Kerkythea.

- if using Kerkythea for Linux, remember to install the WINE-Package (needed by Kerkythea for Linux to run)
- you can convert your models with the help of the mesh workbench to meshes and then export these meshes as .obj-files
- If your mesh-export resulted in errors (flip of normals, holes ...) you may try your luck with [netfabb studio basic](http://www.netfabb.com/downloadcenter.php?basic=1)

: Free for personal use, available for Windows, Linux and Mac OSX.
: It has standard repair tools which will repair you model in most cases.

- another good program for mesh analysing/repairing is [Meshlab](http://sourceforge.net/projects/meshlab/)

: Open Source, available for Windows, Linux and Mac OSX.
: It has standard repair tools which will repair you model in most cases (fill holes, re-orient normals, etc.)

- you can use "make compound" and then "make single copy" or you can fuse solids to group them before converting to meshes
- remember to set in Kerkythea an import-factor of 0.001 for obj-modeler, since Kerkythea expects the obj-file to be in m (but standard units-scheme in FreeCAD is mm)

: Within WIndows 7 64-bit Kerkythea does not seem to be able to save these settings.
: So remember to do that each time you start Kerkythea

- if importing multiple objects in Kerkythea you can use the "File → Merge" command in Kerkythea

## Development

These pages refer to the new workbench, programmed in Python, meant to replace the current Raytracing Workbench.

- [Render Workbench](https://github.com/FreeCAD/FreeCAD-render)
- [Render Workbench](https://forum.freecadweb.org/viewtopic.php?f=9&t=25933) (announcement only, no discussion)
- [FreeCAD Renderer Workbench improvements](https://forum.freecadweb.org/viewtopic.php?t=39168)

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/es&oldid=1260826>"
