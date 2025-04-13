---
title: Zeichnung
---
## Einleitung

In FreeCAD wird das Wort "Zeichnung" normalerweise verwendet, um sich auf die 2D-Projektion eines [3D-Modells](/Model/de "Model/de") zu beziehen. Diese wird normalerweise mit dem Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") erstellt.

## Anwendung

1. Beginne mit einem bereits gebauten [3D-Modell](/Model/de "Model/de"), das z.B. mit dem [PartDesign-Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurde. Tatsächlich funktioniert jedes Objekt, das eine [Form](/Shape/de "Shape/de") hat, einschließlich 2D-Objekte.
2. Wechsle zum [TechDraw-Arbeitsbereich](/TechDraw_Workbench/de "TechDraw Workbench/de").
3. Drücke ![](/images/TechDraw_PageDefault.svg) [TechDraw StandardSeite](/TechDraw_PageDefault/de "TechDraw PageDefault/de") oder ![](/images/TechDraw_PageTemplate.svg) [TechDraw SeitenVorlage](/TechDraw_PageTemplate/de "TechDraw PageTemplate/de"), um eine Seite zu erstellen.
4. Wähle das vorhandene Modell aus, und drücke dann ![](/images/TechDraw_View.svg) [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") oder ![](/images/TechDraw_ProjectionGroup.svg) [TechDraw ProjektionsGruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de").
5. Es wird eine 2D-Projektion auf der Seite erstellt.Du kannst nun ihre Eigenschaften wie Daten-Eigenschaft**Maßstab**, Daten-Eigenschaft**Rotation** und Daten-Eigenschaft**Richtung** anpassen.
6. Wenn die Zeichnung fertig ist, kannst du ![](/images/TechDraw_ExportPageSVG.svg) [TechDraw ExportSeiteSVG](/TechDraw_ExportPageSVG/de "TechDraw ExportPageSVG/de"), ![](/images/TechDraw_ExportPageDXF.svg) [TechDraw ExportSeiteDXF](/TechDraw_ExportPageDXF/de "TechDraw ExportPageDXF/de") drücken oder verwende [Std Export](/Std_Export/de "Std Export/de"), um die Seite in die Formate SVG, DXF oder PDF zur weiteren Verwendung in einer anderen Software oder zum Drucken zu exportieren.

## Hinweise

Im informellen Gebrauch kann eine "Zeichnung" jede geometrische Abbildung sein, die in der [3D Ansicht](/3D_view/de "3D view/de") sichtbar ist, und daher kann ihr Konzept mit dem von "[Körper](/Body/de "Body/de")", "[Part](/Part/de "Part/de")" oder "[Modell](/Model/de "Model/de")" verwechselt werden.

Wenn jedoch mehr Präzision erforderlich ist, muss eine Unterscheidung getroffen werden.

* Ein "[Körper](/Body/de "Body/de")" ([PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de")) ist ein Objekt, das von einem [Part Formelement](/Part_Feature/de "Part Feature/de") abgeleitet ist. (`Part::Feature` Klasse), erstellt mit dem [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de").
* Ein "[Part](/Part/de "Part/de")" ([Anwendung Part](/App_Part/de "App Part/de")) wird zum Gruppieren mehrerer "[Körper](/Body/de "Body/de")" verwendet, um eine Baugruppe zu bilden.
* Eine "Zeichnung" ist eine 2D-Projektion eines "Körpers" oder eines "Teils".

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/de&oldid=1332687>"