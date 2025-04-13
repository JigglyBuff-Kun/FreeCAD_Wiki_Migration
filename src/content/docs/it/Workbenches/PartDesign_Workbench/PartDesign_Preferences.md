---
title: PartDesign Preferenze
---
## Introduction

La finestre delle preferenze di [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") si trovano nell'[editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"), **Modifica → Preferenze → Part design**.

Some advanced preferences can only be changed in the [Parameter editor](/Std_DlgParameter "Std DlgParameter"). See [Fine-tuning](/Fine-tuning#PartDesign_Workbench "Fine-tuning").

This page has been updated for version 1.0.

## Available preferences

Sono disponibili due schede: Generale e Visualizzazione della forma.

## Generale

![](/images/Preferences_PartDesign_Page_General.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Automatically check model after boolean operation** | If checked, the [Boundary representation](https://en.wikipedia.org/wiki/Boundary_representation) (BRep) of the model is [validated](/Part_CheckGeometry "Part CheckGeometry") after [boolean operations](/Part_Boolean "Part Boolean"). |
| **Automatically refine model after boolean operation** | If checked, the model is [refined](/Part_RefineShape "Part RefineShape") after [boolean operations](/Part_Boolean "Part Boolean"). |
| **Automatically refine model after sketch-based operation** | If checked, the model is [refined](/Part_RefineShape "Part RefineShape") after changes to source sketches of objects. |
| **Allow multiple solids in Part Design Body by default (experimental)** | If checked, Bodies can have multiple solids. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |

## Visualizzazione della figura

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

Al fine di visualizzare un oggetto in modo efficiente la sua superficie viene [tessellata](https://en.wikipedia.org/wiki/Tessellation_(computer_graphics)), cioè viene visualizzato con alcune piccole deviazioni dalla sua superficie reale. Questo vale non solo per i modelli di PartDesign, ma anche per altri oggetti di FreeCAD.

Il limite inferiore per la tassellatura è 0,01%. Se si vuole davvero passare più tempo di attesa dell'elaborazione del modello si può ridurre ulteriormente il limite inferiore aprendo il menu **Strumenti → Modifica parametri ...**. Questo apre l'editor dei parametri in cui si può accedere a **BaseApp → Preferenze → Mod → Part**.

Fare clic con il tasto destro del mouse su **Deviazione mesh** scegliere nel menu contestuale **Modifica valore**. Impostare il valore di tessellatura minima desiderata. Ricordare che il valore è in%, ovvero per un valore di 0,005% si deve inserire "0,00005". Il valore più piccolo possibile è 1e-7. **Nota:** Nel menu delle preferenze vedrà ancora 0,01% anche se si imposta un valore più basso.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Preferences/it&oldid=1521261>"