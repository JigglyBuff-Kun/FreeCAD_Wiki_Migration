---
title: Tutorial Randare
---
## Raytracing Workbench

:::caution
TheRaytracing workbenchis being superseded by the newRender Workbench, which is intended as its replacement. The Render Workbench can be installed through theAddon Manager. The information here is provided because by default FreeCAD is still shipped (as of 0.19-24276) with the Raytracing Workbench, and because the new module should basically work in the same way
:::

|  |
| --- |
| Tutorial |
| Topic |
| Raytracing |
| Level |
| Beginner |
| Time to complete |
| 10 minutes + Render time |
| Authors |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD version |
| 0.16 or above |
| Example files |
|  |
| See also |
| *None* |
|  |

### Introducere

This tutorial is meant to introduce the reader to the basic workflow of the Raytracing Workbench, as well as most of the tools that are available to create a rendered image.

![](/images/Raytracing_tutorial_result.png)

## Requirements

* FreeCAD version 0.16 or above
* [POV-Ray](http://www.povray.org/) and/or [LuxRender](https://luxcorerender.org/) is installed on the system
* In the case of POV-Ray, it's not enough to have just the binary executable in place, but it also ***requires*** the installation of ***supporting files***. In Ubuntu, these are provided by the Recommends-flagged package [povray-includes](https://packages.ubuntu.com/search?keywords=povray-includes). Potential issues have also been seen with Linux installations requiring local configuration files to be manually created in a user's home folder, as discussed [here](https://forum.freecadweb.org/viewtopic.php?f=3&t=27548&start=10#p224576).
* In the case of POV-Ray, installation of [psicofil's macro](https://github.com/psicofil/Macros_FreeCAD) is recommended
* The reader has the basic knowledge to use the Part and PartDesign Workbenches

## Procedure

### Modeling

In this example a Cube is used as the study object, but models created in the Part or PartDesign Workbenches can be used instead.

1. Create a new document
2. Activate the Part Workbench
3. Create a Cube. You are free to change its properties in any way.

Now we have a model with which to work.

### Preparing for the render

1. Switch to the Raytracing Workbench
2. Change your View to **Perspective**. Go to **View** menu and select **Perspective**.
3. Set the location for the renderer. Go to the **Edit** menu and select **Preferences**. Click on **Raytracing** and set the location to the executable.
4. Set the size of the rendered image. Go to the **Edit** menu and select **Preferences**. Click on **Raytracing** and set the desired image size.

#### POV-Ray

1. Select ![](/images/Raytrace_New.svg) [New PovRay project](/Raytracing_New "Raytracing New"). From the dropdown menu pick **RadiosityNormal**

#### LuxRender

1. Select ![](/images/Raytrace_Lux.svg) [New LuxRender project](/Raytracing_Lux "Raytracing Lux"). From the dropdown menu pick **LuxClassic**

### Setting the camera position

1. Position the **3D View** to the desired location and distance from the model. In this case we will use the **Axonometric View**.
2. Select the **Project Folder** from the **Tree View**
3. Select ![](/images/Raytrace_ResetCamera.svg) [Reset camera](/Raytracing_ResetCamera "Raytracing ResetCamera")

### Importing the model

1. Select the model to render.
2. Select ![](/images/Raytrace_NewPartSegment.svg) [Insert part](/Raytracing_InsertPart "Raytracing InsertPart")

#### Running the Renderer

1. Select ![](/images/Raytracing_Render.png) [Render](/Raytracing_Render "Raytracing Render").
2. Set the path to which the image will be stored.
3. Wait for the rendering to finish. This may take a while.

#### Viewing the results

FreeCAD will immediately open the image after the render is finished.

We are now finished with the basic workflow for the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_tutorial/ro&oldid=1251577>"