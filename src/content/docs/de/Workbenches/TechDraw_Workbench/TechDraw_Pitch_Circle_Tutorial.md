---
title: TechDraw Teilkreis Tutorium
---

|                    |
| ------------------ |
| Tutorium           |
| Thema              |
| TechDraw           |
| Niveau             |
| Anfänger           |
| Zeit zum Abschluss |
| 10 Minuten         |
| Autoren            |
| Andergrin          |
| FreeCAD-Version    |
| 0.19               |
| Beispieldateien    |
| _None_             |
| Siehe auch         |
| _None_             |
|                    |

## Einleitung

This tutorial explains how to add a pitch circle to a ![](/src/assets/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench "TechDraw Workbench") view. It assumes that the model is a ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") with at least three holes in a circular pattern. For the circle a separate sketch will be created. A similar procedure can be used in other situations and to add other annotation-like elements to [TechDraw](/TechDraw_Workbench "TechDraw Workbench") views.

In FreeCAD version 0.20 and above a pitch circle can be created with the [TechDraw ExtensionHoleCircle](/TechDraw_ExtensionHoleCircle "TechDraw ExtensionHoleCircle") tool.

![](/src/assets/images/Circle.png)
![](/src/assets/images/Pitch_Circle.png)

## Create the sketch for the circle

1. Activate the ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"). This will also activate the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), if required.
2. In the [3D view](/3D_view "3D view") select the correct face belonging to the body.
3. Create a new sketch with the ![](/src/assets/images/PartDesign_NewSketch.svg) [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch") command.
4. The sketch will be attached to the selected face.
5. Call the ![](/src/assets/images/Sketcher_External.svg) [Sketcher External](/Sketcher_External "Sketcher External") command.
6. Select three circular edges (holes) from the body.
7. Use the ![](/src/assets/images/Sketcher_Create3PointCircle.svg) [Sketcher Create3PointCircle](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle") command to create a circle constrained to the center points of the external geometry.
8. The sketch should now be fully constrained.
9. Close the sketch.

## Create the TechDraw view

1. Switch to the ![](/src/assets/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").
2. If you don't have one already: create a ![](/src/assets/images/TechDraw_PageDefault.svg) [TechDraw page](/TechDraw_PageDefault "TechDraw PageDefault").
3. Make sure the [3D view](/3D_view "3D view") is properly aligned.
4. Hold down the Ctrl key and in the [Tree view](/Tree_view "Tree view") select the body and the sketch that was just just created.
5. Insert a new view by calling the ![](/src/assets/images/TechDraw_View.svg) [TechDraw View](/TechDraw_View "TechDraw View") command.
6. Switch to the [TechDraw](/TechDraw_Workbench "TechDraw Workbench") page.
7. Select the circle.
8. Call the ![](/src/assets/images/TechDraw_DecorateLine.svg) [TechDraw DecorateLine](/TechDraw_DecorateLine "TechDraw DecorateLine") command.
9. Change the **Style** and **Weight** of the circle.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Pitch_Circle_Tutorial/de&oldid=1430697>"
