---
title: LuxRender/de
---
:::caution
LuxRender wird nicht mehr weiterentwickelt, da das Projekt alsLuxCoreRenderneu gestartet wurde, mit einem wesentlich umgeschriebenen Code und vielen inkompatiblen Änderungen. Diese Information wird hier vorgehalten, da FreeCAD noch immer (Version 0.19-24276) mit dem ArbeitsbereichRaytracingausgeliefert wird, der offiziell nur LuxRender unterstützt. Er scheint aber auch mitLuxCoreRenderzu funktionieren, daher sollte man ihn ausprobieren, bevor man LuxRender verwendet
:::

## Beschreibung

[LuxRender](https://luxcorerender.org/history/) is one of the two render engines supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench") together with [POV-Ray](/POV-Ray "POV-Ray"). In 2013 the project has been rebooted becoming [LuxCoreRender](/LuxCoreRender "LuxCoreRender"), with a major code rewriting and compatibility breaking changes, thus the LuxRender project has been abandoned. Officially [LuxCoreRender](/LuxCoreRender "LuxCoreRender") is not supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"), although it might be worth to try.

# Installation

## Arbeitsbereich Raytracing

:::caution
TheRaytracing Workbenchis being superseded by the newRender Workbench, which is intended as its replacement. The Render Workbench can be installed through theAddon Manager. The information here is provided because by default FreeCAD is still shipped (as of 0.19-24276) with the Raytracing Workbench
:::

### Stable Version

The latest stable version is [LuxRender 1.6 (2017-12-28)](https://github.com/LuxCoreRender/LuxCore/releases/tag/luxrender_v1.6).

#### Linux

***Compiled binaries***

As LuxRender is no longer developed, almost no distribution still has it in its repositories, so you will have to manually install the official binaries.
First determine if your graphic cards supports [OpenCL](https://en.wikipedia.org/wiki/OpenCL) and if you have all the necessary dependencies installed.
If so, download [LuxRender 1.6 with OpenCL support](https://github.com/LuxCoreRender/LuxCore/releases/download/luxrender_v1.6/lux-v1.6-x86_64-sse2-OpenCL.tar.bz2).
Otherwise download [LuxRender 1.6 without OpenCL](https://github.com/LuxCoreRender/LuxCore/releases/download/luxrender_v1.6/lux-v1.6-x86_64-sse2-NoOpenCL.tar.bz2), but consider getting a newer graphic card or installing the necessary software to enable it on your computer.

The faster solution (although not the best practice) is to extract the content of the archive in a suitable location, like *~\LuxRender*.
If needed change the file permissions so that your user can execute the files you just extracted.

***Compiling from source***

If your distributions does not have LuxRender in the repositories and the official binaries do not work on your distribution, or if you wish to, it is possible to compile LuxRender from source. [Download the source code of LuxRender 1.6 from GitHub](https://github.com/LuxCoreRender/LuxCore/archive/refs/tags/luxrender_v1.6.tar.gz)

***Configuring FreeCAD***

After installing LuxRender, launch FreeCAD, open the [Preferences Editor](/Preferences_Editor "Preferences Editor"), [load the Raytracing Workbench](/Preferences_Editor#Unloaded_Workbenches "Preferences Editor"), and go to the [Raytracing Preferences](/Raytracing_Preferences "Raytracing Preferences").

Set the Luxrender executable path to point to your installation of LuxRender, in particular to the *luxrender* executable, and apply.
In the above example, the path would be *~\LuxRender\luxrender*.

#### macOS

Use the [official LuxRender 1.6 installer for OSX](https://github.com/LuxCoreRender/LuxCore/releases/download/luxrender_v1.6/LuxRender_1.6_OSXIntel_64bit.dmg).

#### Windows

First determine if your graphic cards supports [OpenCL](https://en.wikipedia.org/wiki/OpenCL) and if you have the necessary graphics drivers installed.
If so, download [LuxRender 1.6 with OpenCL support setup](https://github.com/LuxCoreRender/LuxCore/releases/download/luxrender_v1.6/LuxRender.1.6.x64.OpenCL.Setup.exe).
Otherwise download [LuxRender 1.6 without OpenCL setup](https://github.com/LuxCoreRender/LuxCore/releases/download/luxrender_v1.6/LuxRender.1.6.x64.NoOpenCL.Setup.exe), but consider getting a newer graphic card or installing the necessary software to enable it on your computer. Then execute the downloaded installer and follow the proposed steps.

By default the destination folder is *C:\Program Files\LuxRender*, with example scenes in *C:\Users\Public\Documents\LuxRender\Example Scene*.

After installing LuxRender, launch FreeCAD, open the [Preferences Editor](/Preferences_Editor "Preferences Editor"), [load the Raytracing Workbench](/Preferences_Editor#Unloaded_Workbenches "Preferences Editor"), and go to the [Raytracing Preferences](/Raytracing_Preferences "Raytracing Preferences").

Set the Luxrender executable path to point to your installation of LuxRender, usually it is *C:/Program Files/LuxRender/luxrender.exe*, and apply.

### Development Version

There is no development version of LuxRender, as development has been halted in favor of the reboot [LuxCoreRender](/LuxCoreRender "LuxCoreRender").

## Arbeitsbereich Render

The [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) has dropped support for LuxRender, as it is outdated. It supports instead the modern reboot [LuxCoreRender](/LuxCoreRender "LuxCoreRender").

Retrieved from "<http://wiki.freecad.org/index.php?title=LuxRender/de&oldid=1340894>"