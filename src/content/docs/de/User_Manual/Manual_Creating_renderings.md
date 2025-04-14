---
title: Handbuch Erstellung von Bildsynthesen
---

- [Einführung](/Manual:Introduction/de "Manual:Introduction/de")
- FreeCAD entdecken
  - [Was ist FreeCAD?](/Manual:What_is_FreeCAD/de "Manual:What is FreeCAD/de")
  - [Installieren](/Manual:Installing/de "Manual:Installing/de")
    - [Installation unter Windows](/Manual:Installing/de#Installation_unter_Windows "Manual:Installing/de")
    - [Installation unter Linux](/Manual:Installing/de#Installation_unter_Linux "Manual:Installing/de")
    - [Installation unter Mac OS](/Manual:Installing/de#Installation_unter_Mac_OS "Manual:Installing/de")
    - [Deinstallation](/Manual:Installing/de#Deinstallation "Manual:Installing/de")
    - [Setzen der Grundeinstellungen](/Manual:Installing/de#Setzen_der_Grundeinstellungen "Manual:Installing/de")
    - [Installieren zusätzlicher Inhalte](/Manual:Installing/de#Installieren_zusätzlicher_Inhalte "Manual:Installing/de")
  - [Die FreeCAD Oberfläche](/Manual:The_FreeCAD_Interface/de "Manual:The FreeCAD Interface/de")
    - [Arbeitsbereiche](/Manual:The_FreeCAD_Interface/de#Arbeitsbereiche "Manual:The FreeCAD Interface/de")
    - [Die Oberfläche](/Manual:The_FreeCAD_Interface/de#Die_Oberfläche "Manual:The FreeCAD Interface/de")
    - [Anpassung der Oberfläche](/Manual:The_FreeCAD_Interface/de#Anpassung_der_Oberfläche "Manual:The FreeCAD Interface/de")
  - [Navigieren in der 3D Ansicht](/Manual:Navigating_in_the_3D_view/de "Manual:Navigating in the 3D view/de")
    - [Ein Wort zum 3D Raum](/Manual:Navigating_in_the_3D_view/de#Ein_Wort_zum_3D_Raum "Manual:Navigating in the 3D view/de")
    - [Die FreeCAD 3D Ansicht](/Manual:Navigating_in_the_3D_view/de#Die_FreeCAD_3D_Ansicht "Manual:Navigating in the 3D view/de")
    - [Objekte anwählen](/Manual:Navigating_in_the_3D_view/de#Objekte_anwählen "Manual:Navigating in the 3D view/de")
  - [Das FreeCAD Dokument](/Manual:The_FreeCAD_document/de "Manual:The FreeCAD document/de")
  - [Parametrische Objekte](/Manual:Parametric_objects/de "Manual:Parametric objects/de")
  - [Import und Export in andere Dateitypen](/Manual:Import_and_export_to_other_filetypes/de "Manual:Import and export to other filetypes/de")
- Arbeiten mit FreeCAD
  - [Alle Arbeitsbereiche auf einen Blick](/Manual:All_workbenches_at_a_glance/de "Manual:All workbenches at a glance/de")
  - [Herkömmliche Modellierung, der CSG Weg](/Manual:Traditional_modeling,_the_CSG_way/de "Manual:Traditional modeling, the CSG way/de")
  - [Herkömmliches 2D Entwerfen](/Manual:Traditional_2D_drafting/de "Manual:Traditional 2D drafting/de")
  - [Modellierung für Produktdesign](/Manual:Modeling_for_product_design/de "Manual:Modeling for product design/de")
  - [Modelle für den 3D Druck vorbereiten](/Manual:Preparing_models_for_3D_printing/de "Manual:Preparing models for 3D printing/de")
    - [Exportieren zu Zerschneidern](/Manual:Preparing_models_for_3D_printing/de#Exportieren_zu_Zerschneidern "Manual:Preparing models for 3D printing/de")
    - [Umwandeln von Objekten in Polygonnetze](/Manual:Preparing_models_for_3D_printing/de#Umwandeln_von_Objekten_in_Polygonnetze "Manual:Preparing models for 3D printing/de")
    - [Verwendung von Slic3r](/Manual:Preparing_models_for_3D_printing/de#Verwendung_von_Slic3r "Manual:Preparing models for 3D printing/de")
    - [Verwendung der Cura Erweiterung](/Manual:Preparing_models_for_3D_printing/de#Verwendung_der_Cura_Erweiterung "Manual:Preparing models for 3D printing/de")
    - [Erzeugung von G-Code](/Manual:Preparing_models_for_3D_printing/de#Erzeugung_von_G-Code "Manual:Preparing models for 3D printing/de")
  - [Erstellen von 2D Zeichnungen](/Manual:Generating_2D_drawings/de "Manual:Generating 2D drawings/de")
  - [BIM Modellierung](/Manual:BIM_modeling/de "Manual:BIM modeling/de")
  - [Verwendung von Kalkulationstabellen](/Manual:Using_spreadsheets/de "Manual:Using spreadsheets/de")
    - [Leseeigenschaften](/Manual:Using_spreadsheets/de#Leseeigenschaften "Manual:Using spreadsheets/de")
    - [Schreibeigenschaften](/Manual:Using_spreadsheets/de#Schreibeigenschaften "Manual:Using spreadsheets/de")
  - [Erstellen von FEM Analysen](/Manual:Creating_FEM_analyses/de "Manual:Creating FEM analyses/de")
  - Erstellen von Bildsynthesen
- Skripte in Python erstellen
  - [Eine sanfte Einführung](/Manual:A_gentle_introduction/de "Manual:A gentle introduction/de")
    - [Schreiben von Python Code](/Manual:A_gentle_introduction/de#Schreiben_von_Python_Code "Manual:A gentle introduction/de")
    - [Handhabung von FreeCAD Objekten](/Manual:A_gentle_introduction/de#Handhabung_von_FreeCAD_Objekten "Manual:A gentle introduction/de")
    - [Vektoren und Platzierungen](/Manual:A_gentle_introduction/de#Vektoren_und_Platzierungen "Manual:A gentle introduction/de")
  - [Erstellung und Handhabung von Geometrie](/Manual:Creating_and_manipulating_geometry/de "Manual:Creating and manipulating geometry/de")
  - [Erstellung parametrischer Objekte](/Manual:Creating_parametric_objects/de "Manual:Creating parametric objects/de")
  - [Erstellen von Oberflächenwerkzeugen](/Manual:Creating_interface_tools/de "Manual:Creating interface tools/de")
- [Die Gemeinschaft](/Manual:The_Community/de "Manual:The Community/de")

Rendering (Neudeutsch für den etwas sperrigen Begriff [Bildsynthese](https://de.wikipedia.org/wiki/Bildsynthese)) ist der Prozess der Erstellung hochgradig realistischer Bilder von 3D-Modellen durch die Simulation von Beleuchtung, Material und Textur. Es wird üblicherweise in der Film- und der Spieleindustrie sowie im Produktdesign eingesetzt, wo fotorealistische Visualisierungen benötigt werden, um Entwürfe und Konzepte darzustellen. Damit Bilder erstellt werden können, die echten Fotos gleichen, werden spezialisierte Werkzeuge zur Steuerung von Beleuchtung, Reflexionen und Schatten benötigt.

FreeCAD ist aber in erster Linie auf technisches Modellieren ausgerichtet und weniger auf künstlerische und visuelle Effekte. Sein vorrangiger Zweck ist es, präzise 3D-Modelle für Konstruktion, Design und Produktion zu erstellen. Daraus resultiert, dass FreeCAD keine hoch entwickelten Werkzeuge für Fotorealismus enthält.

FreeCAD stellt allerdings den Arbeitsbereich [Render](https://github.com/FreeCAD/FreeCAD-render?tab=readme-ov-file) bereit, der als Addon installiert werden kann (Es ist keiner der Standardarbeitsbereiche). Dieser Arbeitsbereich ermöglicht dem Anwender FreeCAD-Modelle mit externen Render-Programmen wie Blender Cycles, LuxCoreRender oder POV-Ray zu verbinden. Durch den Arbeitsbereich Render können Anwender ihre Modelle verwenden und diese externen Werkzeuge wirkungsvoll einsetzen, um ihre Konstruktionen mit realistischer Beleuchtung und Texturen zu rendern (synthetisieren). Diese Herangehensweise erhält FreeCAD schlank und fokussiert, während die Flexibilität, bei Bedarf Fotorealistisch zu rendern, bestehen bleibt.

Der Arbeitsbereich Render integriert einige externe Renderer in FreeCAD einschließlich [LuxCorerender](https://en.wikipedia.org/wiki/LuxRender), [POV-Ray](https://en.wikipedia.org/wiki/POV-Ray) und [Blender Cycles](https://www.cycles-renderer.org/). LuxCoreRender ist ein moderner, physikbasierter Renderer, der fotorealistische Bilder erstellt, aber eine erhebliche Rechenleistung erfordert, besonders für große Szenen. POV-Ray ist schon älter, ist aber immer noch ein zuverlässiges [Raytracing](https://de.wikipedia.org/wiki/Raytracing)-Programm und geht weniger verschwenderisch mit den Ressourcen um, dafür lässt es etwas den Realismus neuerer Technologien vermissen. Blender Cycles ist über FreeCAD erreichbar, wenn Blender installiert ist und stellt eine leistungsfähige Rendering-Lösung mit GPU- und CPU-Unterstützung zur Verfügung, die qualitativ hochwertige Bilder effizient erstellt. Allerdings erfordert dies die separate Installation von Blender und das Exportieren der Modelle zu Blender, um sie zu rendern. Jeder Renderer hat seine Stärken, abhängig von der Balance zwischen Realismus, Leistung und Systemressourcen. Jede Option hat ihre Stärken und Schwächen, abhängig von der Art der Darstellungen, die man rendern möchte. Der beste Weg sie herauszufinden, ist die Beispiele auf ihren zugehörigen Webseiten zu vergleichen.

### Installation

Before using the Render Workbench in FreeCAD, you'll need to install both the workbench itself (as shown in [this section](https://wiki.freecad.org/Manual:Installing#Installing_additional_content) and one of the external rendering applications such as LuxCoreRender, POV-Ray, or Blender Cycles (with Blender installed). Installing these applications is typically straightforward, as they provide installers for various platforms and are often included in software repositories on Linux distributions. Once these tools are installed, you'll be able to connect FreeCAD to these renderers to produce high-quality images.

Once POV-Ray or LuxCorerender is installed, we need to set the path to their main executable in the FreeCAD preferences. This is usually only required on Windows and Mac. On Linux, FreeCAD will pick it from the standard locations. The location of the povray or luxrender executables can be found by searching your system for files named povray (or povray.exe on Windows) and luxrender (or luxrender.exe on Windows). In the **Preferences** tab you can designate the path as well as set up some parameters.

![](/images/FreeCAD_Render_Preferences.png)

### Rendering with PovRay

We will use the table we have been modelling in the [traditional modeling](/Manual:Traditional_modeling,_the_CSG_way "Manual:Traditional modeling, the CSG way") chapter to produce renderings with PovRay.

- Start by loading the table.FCStd file that we modelled earlier or from the link at the bottom of this chapter and entering the ![](/images/Render_workbench_icon.svg) [workbench](https://github.com/FreeCAD/FreeCAD-render%7Crender).
- Create a rendering project by pressing the button in the toolbar corresponding to your renderer. For our example, we will choose the ![](/images/Render_Povray.svg) povray renderer.
- Select a template suitable for your project. We will be going with the **povray_sunlight.pov** one.
- You can also try other templates after you create a new project, simply by editing its **Template** property.
- A new project has now been created:

![](/images/FreeCAD_Render_Project.png)

- You can add the desired objects to the project by selecting them and pressing on the ![](/images/Render_RenderingView.svg) [rendering view](/index.php?title=Render_RenderingView&action=edit&redlink=1 "Render RenderingView (page does not exist)") option.

![](/images/FreeCAD_Render_Bodies.png)

- If we wish we can apply a material to our bodies by pressing on the ![](/images/Arch_SetMaterial.svg) [Material](/Arch_SetMaterial "Arch SetMaterial") option. For our case, we will choose the matte option.
- We can now press on the ![](/images/Render_workbench_icon.svg) button and our rendered result will appear in a separate window.

![](/images/FreeCAD_Render_Result.png)

Truth be told, the end result is not very impressive. The rendering process is iterative and takes time and patience to achieve high-quality outcomes. Additionally, as mentioned above, POV-Ray is somewhat limited in terms of realism. Feel free to experiment with different renderers. The procedure remains largely the same, with the only difference being the selection of a different renderer at the start of the process.

**Downloads**

- The table model: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/table.FCStd>
- The file produced during this exercise: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/render.FCStd>

**Read more**

- [Blender](http://www.blender.org)
- [POV-Ray](http://www.povray.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Creating_renderings/de&oldid=1522568>"
