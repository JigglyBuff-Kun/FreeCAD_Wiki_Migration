---
title: POV-Ray-Rendering Workbench
---

![](/images/POV-Ray-Rendering_workbench_icon.svg)

POV-Ray-Rendering Workbench icon

## Introduction

The POV-Ray-Rendering Workbench is an [external workbench](/External_workbenches "External workbenches") built to make rendering easy but it also offers options for advanced users. The workbench uses the [POV-Ray](http://www.povray.org/) renderer.

![](/images/POV-Ray-Rendering_Example.png)

## Features

### Applying textures

There are more than 100 predefined textures you can apply, but you can also define your own textures.

![](/images/POV-Ray-Rendering_Textures.png)

#### Thumbnails and live preview

To see the impact of the selected texture options you can check the pre-rendered thumbnail or use the live preview to render the texture.

### Lighting

With the three light types: area light, point light and spot light, and their different options, you can create advanced lighting.

![](/images/POV-Ray-Rendering_Lights.png)

#### Indirect lighting (GI)

The workbench has the option to enable indirect lighting to create more realistic images.

![](/images/POV-Ray-Rendering_IndirectLighting.png)

### HDRI environments

With support for HDRI environments, beautiful environments are simple to use.

![](/images/POV-Ray-Rendering_HDRI.png)

### User inc file

Power users who want access to _all_ options of the [POV-Ray](http://www.povray.org/) renderer can do so by creating a special file. For more details see the [Power User](https://gitlab.com/usbhub/exporttopovray/-/blob/master/doc/PowerUser.md) page on our Wiki.

## Usage

Here is a simple demonstration of the workbench:

![](/images/POV-Ray-Rendering_Demo.gif)

There are many more options on the other tabs, please explore them yourself, or you can visit our Wiki: [Workbench Wiki](https://gitlab.com/usbhub/exporttopovray/-/tree/master/doc)

## Installation

This workbench can be installed and updated from the ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). The [POV-Ray](http://www.povray.org/) renderer used by the workbench has to be installed separately. For Windows users, the installer can be downloaded from the [POV-Ray Download Page](https://www.povray.org/download/), for Linux users it can usually be installed from the package manager. Look up the detailed instructions in the [POV-Ray Wiki](https://wiki.povray.org/content/HowTo:Install_POV) if you're on a Mac.

To complete the installation the path to the POV-Ray executable has to be defined in the workbench preferences, usually these are the default paths:

- **Windows:** C:/Program Files/POV-Ray/v3.7/bin/pvengine64.exe (the v\*.\* folder may change depending on the POV-Ray version)
- **Linux:** /usr/bin/povray
- **MacOS:** Not available. If you have more information, please let us know.

![](/images/POV-Ray-Rendering_ExePath.png)

## Tools

- ![](/images/POV-Ray-Rendering_OpenDialog.svg) OpenDialog: Opens the dialog where most of the work is done. Here you can apply textures, add HDRI environments, etc. and start the rendering.

- ![](/images/POV-Ray-Rendering_PointLight.svg) Point Light: Inserts a Point Light.

- ![](/images/POV-Ray-Rendering_AreaLight.svg) Area Light: Inserts an Area Light.

- ![](/images/POV-Ray-Rendering_SpotLight.svg) Spot Light: Inserts a Spot Light.

## References

- Authors:
  - Usb Hub: <https://gitlab.com/usbhub>
  - DerUhrmacher: <https://gitlab.com/DerUhrmacher>
- Source code on GitHub: <https://github.com/TheRaytracers/freecad-povray-render>

## Links to POV-Ray Workbench

- Workbench Wiki: <https://gitlab.com/usbhub/exporttopovray/-/tree/master/doc>
- FreeCAD Forum: <https://forum.freecadweb.org/viewtopic.php?f=9&t=48629>
- Report bugs: Please report bugs at GitHub or the FreeCAD Forum

## Other useful links

- [External workbenches](/External_workbenches "External workbenches")

Retrieved from "<http://wiki.freecad.org/index.php?title=POV-Ray-Rendering_Workbench/en&oldid=1277920>"
