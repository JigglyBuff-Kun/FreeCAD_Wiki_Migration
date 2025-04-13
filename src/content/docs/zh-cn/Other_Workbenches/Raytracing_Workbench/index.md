---
title: 光线追踪工作台
---

:::caution
TheRaytracing Workbenchis no longer included after version 0.20.The externalRender Workbenchshould be used instead.
:::
![](/images/Workbench_Raytracing.svg)

Raytracing workbench icon

## Introduction

The ![](/images/Workbench_Raytracing.svg) [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench") is used to generate photorealistic images of your models by processing them with an external renderer.

The Raytracing Workbench works with [templates](/Raytracing_templates "Raytracing templates"), which are project files that define a scene for your 3D model. You can place lights and geometry such as ground planes, and it also contains placeholders for the position of the camera, and for the material information of the objects in the scene. The project can then be exported to a ready-to-render file, or be rendered directly within FreeCAD.

Currently, two renderers are supported: [POV-Ray](/POV-Ray "POV-Ray") and [LuxRender](/LuxRender "LuxRender"). To be able to render from within FreeCAD, at least one of these programs must be installed and configured in your system. However, if no renderer is installed, you will still be able to export a project file to be rendered at another time.

The Raytracing workbench is obsolete, the external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) is its replacement. Nevertheless, the information on this page is generally useful for the new workbench, as both basically work in the same way.

![](/images/Raytracing_example.jpg)

## Typical workflow

1. Create or open a FreeCAD project, add some solid objects ([Part-based](/Part_Workbench "Part Workbench") or [PartDesign-based](/PartDesign_Workbench "PartDesign Workbench")); meshes are currently not supported.
2. Create a Raytracing project (povray or luxrender).
3. Select the objects that you wish to add to the Raytracing project and add them.
4. Export the project file or render it directly.

![](/images/Raytracing_Workbench_workflow.svg)

Workflow of the Raytracing Workbench; the workbench prepares a project file from a given template, and then calls an external program to produce the actual rendering of the scene. The external renderer can be used independently of FreeCAD.

## Tools

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

## Creating a povray file manually

The utility tools described above allow you to export the current 3D view and all of its content to a [Povray](http://www.povray.org/) file. First, you must load or create your CAD data and position the 3D View orientation as you wish. Then choose "Utilities → Export View..." from the raytracing menu.

![](/images/FreeCAD_Raytracing.jpg)

You will be asked for a location to save the resulting \*.pov file. After that you can open it in [Povray](http://www.povray.org/) and render:

![](/images/Povray.jpg)

As usual in a renderer you can make big and nice pictures:

![](/images/Scharniergreifer_render.jpg)

## Scripting

See the [Raytracing API example](/Raytracing_API_example "Raytracing API example") for information on writing scenes programmatically.

## Links

### POV-Ray

- [POV-Ray page on this wiki](/POV-Ray "POV-Ray")
- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://en.wikipedia.org/wiki/POV-Ray>

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/zh-cn&oldid=1260835>"
