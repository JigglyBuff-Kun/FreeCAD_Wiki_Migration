---
title: Preferências
---
## Introduction

The ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") and the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") use the same preferences. They can be found in the [Preferences Editor](/Preferences_Editor "Preferences Editor"). In the menu select **Edit → Preferences...** and then **![](/images/Preferences-part_design.svg) Part/Part Design**. This group is only available if one of the workbenches has been loaded in the current FreeCAD session.

Some advanced preferences can only be changed in the [Parameter editor](/Std_DlgParameter "Std DlgParameter"). See [Fine-tuning](/Fine-tuning#PartDesign_Workbench "Fine-tuning").

This page has been updated for version 1.0.

## Available preferences

There are three pages: [General](#General), [Shape view](#Shape_view) and [Shape appearance](#Shape_appearance).

### General

![](/images/Preferences_PartDesign_Page_General.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Automatically check model after boolean operation** | If checked, the [Boundary representation](https://en.wikipedia.org/wiki/Boundary_representation) (BRep) of the model is [validated](/Part_CheckGeometry "Part CheckGeometry") after [boolean operations](/Part_Boolean "Part Boolean"). |
| **Automatically refine model after boolean operation** | If checked, the model is [refined](/Part_RefineShape "Part RefineShape") after [boolean operations](/Part_Boolean "Part Boolean"). |
| **Automatically refine model after sketch-based operation** | If checked, the model is [refined](/Part_RefineShape "Part RefineShape") after changes to source sketches of objects. |
| **Allow multiple solids in Part Design Body by default (experimental)** | If checked, Bodies can have multiple solids. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |

### Shape view

![](/images/Preferences_PartDesign_Page_Shape_view.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Maximum deviation depending on the model bounding box** | The maximum [linear deflection](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) of the [tessellated](#Tessellation) objects from their surface. |
| **Maximum angular deflection** | The maximum [angular deflection](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) from one [tessellated](#Tessellation) object section to the next section. |

### Shape appearance

![](/images/Preferences_PartDesign_Page_Shape_appearance.png)

An explanation of the colors can be found [here](/Part_ColorPerFace#Usage "Part ColorPerFace").

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Shape color** | The diffuse color for new shapes. If the option **Random** is set, a random color is used instead. |
| **Ambient shape color** | The ambient color for new shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Emissive shape color** | The emissive color for new shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Specular shape color** | The specular color for new shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Shape transparency** | The transparency for new shapes. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| **Shape shininess** | The shininess for new shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Line color** | The line color for new shapes. |
| **Line width** | The line thickness for new shapes. |
| **Vertex color** | The color for new [vertices](/Glossary#Vertex "Glossary"). |
| **Vertex size** | The size for new [vertices](/Glossary#Vertex "Glossary"). |
| **Bounding box color** | The color of [bounding boxes](/Property_editor#View "Property editor") in the 3D view. |
| **Bounding box font size** | The font size of [bounding boxes](/Property_editor#View "Property editor") in the 3D view. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Two-side rendering** | If checked, the color of the interior side of faces will be the same as the exterior side. If not checked either the [backlight color](/Preferences_Editor#3D_View "Preferences Editor"), if enabled, or black is used instead. |
| **Text color** | The text color for new document annotations. Currently these annotations can only be added by using the [Python console](/Python_console "Python console"):  `obj = App.ActiveDocument.addObject("App::Annotation", "Label")` |

## Tessellation

In order to display an object efficiently its surface is [tessellated](https://en.wikipedia.org/wiki/Tessellation_(computer_graphics)), i.e. it is displayed with some small deviations from its real surface. This applies not only to PartDesign models, but also to other objects in FreeCAD.

There is a lower limit for the tessellation of 0.01%. If you really want to spend the additional time you can reduce the lower limit even further by opening the [Parameter editor](/Std_DlgParameter "Std DlgParameter").

In the Parameter editor navigate to **BaseApp → Preferences → Mod → Part**, right-click on **MeshDeviation**, and choose **Change value** from the context menu. Set the value to the minimum tessellation of your choice. Please keep in mind that the value is in %, i.e. for a value of 0.005% you have to enter `0.00005`. The smallest possible value is `1e-7`. Note that in the [Preferences Editor](/Preferences_Editor "Preferences Editor") you will still see 0.01% even if you have set a lower value.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Preferences/pt-br&oldid=1521260>"