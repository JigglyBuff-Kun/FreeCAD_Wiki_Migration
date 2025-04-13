---
title: Draft Zeichnung
---
:::caution
DIESER BEFEHL IST VERALTETSowohl der Befehl als auch der ArbeitsbereichDrawing, mit dem er zusammenarbeitet, stehen in0.21 und neuernicht zur Verfügung. Stattdessen werden der ArbeitsbereichTechDrawund der BefehlTechDraw DraftAnsichtverwendet.
:::

|  |
| --- |
| Draft Drawing |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Drawing](/Drawing_Workbench/de "Drawing Workbench/de"), [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench/de "Arch Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [TechDraw DraftAnsicht](/TechDraw_DraftView/de "TechDraw DraftView/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Drawing.svg) **Draft Zeichnung** fügt Ansichten von ausgewählten Objekten auf einem [Drawing](/Drawing_Workbench "Drawing Workbench")-Zeichnungsblatt hinzu.

Dieser Befehl ähnelt dem Befehl [Drawing-Ansicht](/Drawing_View/de "Drawing View/de"), ist aber für Objekte des Arbeitsbereichs [Draft](/Draft_Workbench/de "Draft Workbench/de") optimiert. Im Gegensatz zu jenem Befehl kann dieser mit besonderen Objekten umgehen, wie [Draft-Maßen](/Draft_Dimension/de "Draft Dimension/de") und [Draft-Texten](/Draft_Text/de "Draft Text/de"), sowie Flächen darstellen.

Dieser Befehl ist jetzt veraltet. Stattdessen kann der Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") und der Befehl [TechDraw Draft-Ansicht](/TechDraw_DraftView/de "TechDraw DraftView/de") verwendet werden.

![](/images/Draft_drawing_example.jpg)

Links die ausgewählten Draft-Objekte. Rechts die erstellte Drawing-Ansicht.

## Anwendung

1. To use this command in FreeCAD version 0.19 and later you need to add a button to a custom toolbar. See [Interface Customization](/Interface_Customization "Interface Customization").
2. Select one or more objects. A separate view will be created for each object.
3. Optionally add a [Drawing](/Drawing_Workbench "Drawing Workbench") page to the selection. If you do not, the view is inserted into the first page in the document. If there are no pages in the document a new page is created first.
4. Press the ![](/images/Draft_Drawing.svg) [Draft Drawing](/Draft_Drawing "Draft Drawing") button.
5. There is a bug in the FreeCAD version 0.19 version of the command. The initial value of the Daten**Direction** property is `[0, 0, 0]` which is not allowed. For objects on a plane parallel to the XY plane of the global coordinate system it should be changed to `[0, 0, 1]`. After changing this property the page and the view may need to be [recomputed](/Std_Refresh "Std Refresh").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Drawing/de&oldid=1474748>"