---
title: Arbeitsbereich Render
---
![](/images/Render_workbench_icon.svg)

Symbol des Arbeitsbereichs Render

## Einleitung

Der Arbeitsbereich Render dient dazu, hochwertige Abbildungen von FreeCAD-Modellen mit Hilfe externer quelloffener Rendering-Engines zu errechnen.

* ![Barcelona pavilion Bildschirmaufnahme](/images/Pabellon_de_Barcelona.png)

  Barcelona pavilion  
  Bildschirmaufnahme
* ![Barcelona pavilion Povray-Rendering](/images/Pabellon_de_Barcelona_Pov_large.png)

  Barcelona pavilion  
  Povray-Rendering
* ![Barcelona pavilion Cycles-Rendering](/images/Pabellon_de_Barcelona_Cycles.png)

  Barcelona pavilion  
  Cycles-Rendering
* ![Asm V4 Bildschirmaufnahme](/images/Asm_V4.png)

  Asm V4  
  Bildschirmaufnahme
* ![Asm V4 LuxCore-Rendering](/images/Asm_V4_lux.png)

  Asm V4  
  LuxCore-Rendering
* ![Asm V4 Ospray-Rendering](/images/Asm_V4_ospray2.png)

  Asm V4  
  Ospray-Rendering
* ![Church of the light Bildschirmaufnahme](/images/Church_of_the_light.png)

  Church of the light  
  Bildschirmaufnahme
* ![Church of the light LuxCore-Rendering](/images/Church_of_the_light_lux2.png)

  Church of the light  
  LuxCore-Rendering
* ![Church of the light Cycles-Rendering](/images/Church_of_the_light_cycles.png)

  Church of the light  
  Cycles-Rendering
* ![Car Bildschirmaufnahme](/images/Car.png)

  Car  
  Bildschirmaufnahme
* ![Car Ospray-Rendering](/images/Car_ospray.png)

  Car  
  Ospray-Rendering
* ![Car LuxCore-Rendering](/images/Car_lux.png)

  Car  
  LuxCore-Rendering
* ![Brick assembly Bildschirmaufnahme](/images/Brick_assembly.png)

  Brick assembly  
  Bildschirmaufnahme
* ![Brick assembly Appleseed-Rendering](/images/Brick_assembly_appleseed.png)

  Brick assembly  
  Appleseed-Rendering
* ![Brick assembly Luxcore-Rendering](/images/Brick_assembly_luxcore.png)

  Brick assembly  
  Luxcore-Rendering
* ![Villa Savoye Bildschirmaufnahme](/images/VillaSavoye.png)

  Villa Savoye  
  Bildschirmaufnahme
* ![Villa Savoye Appleseed-Rendering](/images/VillaSavoye_appleseed.png)

  Villa Savoye  
  Appleseed-Rendering
* ![Villa Savoye Cycles-Rendering](/images/VillaSavoye_Cycles.png)

  Villa Savoye  
  Cycles-Rendering

Als reiner Python-Arbeitsbereich fügt sich Render nahtlos in FreeCAD ein: Die ganze zu rendernde Szene - Objekte, Beleuchtung, Werkstoffe, Kamera, usw. - kann mit FreeCAD-Objekten beschrieben werden, um dann zu externen Renderern exportiert zu werden.

Verglichen mit anderen Ansätzen, die auf Computergrafikanwendungen von Drittherstellern basieren, zielt Render auf folgende Punkte ab:

* Vermeiden, dass der Benutzer eine weitere 3D- bzw. Computergrafik-Software lernen muss; alles was man kennen muss befidet sich in FreeCAD.
* Vereinfachung des Rendering-Workflows und Entlastung des Benutzers von Dateibearbeitungen zwischen den Programmen, wie Importieren, Exportieren, Szenen überarbeiten usw.
* Erstellung dauerhafter Szenenkonfigurationen und besonders das Verhindern von Überarbeitungen mit einem externen Werkzeug, wann immer das Modell bearbeitet wurde.

## Unterstützte Renderer

Gegenwärtig werden sechs Rendering-Engines unterstützt:

* LuxCoreRender
* Appleseed
* Cycles (eigenständige Version)
* Pov-Ray
* Intel Ospray Studio
* Pbrt-v4 (experimentell)

## Anwendung

Im Quick-Start-Modus, nach der vollständigen Installation des Arbeitsbereiches, ist das Rendern eines FreeCAD-Modells einfach nur ein Prozess, der aus vier Schritten besteht:

1. **Create a rendering project:** Press the button in the toolbar corresponding to your renderer and select a template suitable for your renderer (you may start with a 'studio' flavour, like appleseed\_studio\_light.appleseed, cycles\_studio\_light.xml, luxcore\_studio\_light.cfg, povray\_studio\_light.pov etc.).
2. **Add views of your objects to your rendering project:** Select both the objects and the project, and press the Add view button.
3. **Set your point of view:** [Navigate in the 3D View](/Manual:Navigating_in_the_3D_view "Manual:Navigating in the 3D view") to the desired position and switch to [perspective](/Std_PerspectiveCamera "Std PerspectiveCamera") mode.
4. **Render:** Select your project and press the Render button in toolbar (also available from project's context menu).

**Und ein erstes Rendering des eigenen Modells sollte fertig sein.**

Weitere Anleitungen findet man im [GitHub-Repository](https://github.com/FreeCAD/FreeCAD-render) oder in der Online-Hilfe.

## Funktionen

Features include, but are not limited to:

* Lighting: point lights, area lights, sun-sky and preset lighting templates.
* Cameras.
* Material management (using usual shaders: matte, glossy, glass, principled etc.) including textures.
* Batch mode / UI mode.
* Denoiser.
* Halt condition (sample per pixel).
* Meshing control: angular and linear deflections, auto-smoothing.

## Links

More info? Just follow the link: <https://github.com/FreeCAD/FreeCAD-render>

Retrieved from "<http://wiki.freecad.org/index.php?title=Render_Workbench/de&oldid=1396039>"