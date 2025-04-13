---
title: Arbeitsbereich Draft
---

![](/images/Workbench_Draft.svg)

Symbol des Arbeitsbereichs Draft

## Einleitung

Der Arbeitsbereich ![](/images/Workbench_Draft.svg) **Draft** ist in erster Linie auf die Erstellung und Änderung von 2D-Objekten in FreeCAD ausgerichtet. Er ist jedoch nicht auf die XY-Ebene des globalen Koordinatensystems begrenzt. Seine Objekte können eine beliebige Ausrichtung und Position im 3D-Raum haben, und einige Draft-Objekte können entweder planar oder nicht-planar sein.

Draft-Objekte können für allgemeines Zeichnen verwendet werden, ähnlich dem, was mit Inkscape oder AutoCAD erstellt werden kann. Sie können aber auch die Grundlage für die Erstellung von 3D-Objekten in anderen Arbeitsbereichen bilden. Ein [Draft-Linienzug](/Draft_Wire/de "Draft Wire/de") kann den Pfad einer [Arch-Wand](/Arch_Wall/de "Arch Wall/de") definieren, ein [Draft-Vieleck](/Draft_Polygon/de "Draft Polygon/de") kann mit [Part-Extrudieren](/Part_Extrude/de "Part Extrude/de") extrudiert werden, usw. Viele der [Draft-Änderungswerkzeuge](#Verändern) können auch auf 2D- und 3D-Objekte angewendet werden, die mit anderen Arbeitsbereichen erstellt wurden. Man kann z.B. eine [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") [verschieben](/Draft_Move/de "Draft Move/de") oder eine [rechtwinklige Draft-Anordnung](/Draft_OrthoArray/de "Draft OrthoArray/de") aus einem [Part](/Part_Workbench/de "Part Workbench/de")-Objekt erstellen.

Der Arbeitsbereich Draft enthält auch Werkzeuge zum Festlegen einer [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de"), eines [Rasters](/Draft_Snap_Grid/de "Draft Snap Grid/de") und eines [Einrastsystems](/Draft_Snap/de "Draft Snap/de"), zum präzisen Positionieren von Geometrie.

Wenn das Hauptziel die Erstellung komplexer 2D-Zeichnungen und [DXF](/DXF/de "DXF/de")-Dateien ist und keine 3D-Modelle benötigt werden, ist FreeCAD möglicherweise nicht die richtige Wahl. Stattdessen sollte man eine spezielle (Software-)Anwendung für technisches Zeichnen in Betracht ziehen, wie [LibreCAD](https://de.wikipedia.org/wiki/LibreCAD) oder [QCad](https://de.wikipedia.org/wiki/QCad).

![](/images/Draft_Workbench_Example.png)

Das Bild zeigt das [Raster](/Draft_Snap_Grid/de "Draft Snap Grid/de"), das an der XY-Ebene ausgerichtet ist.  
Links, in weiß, mehrere planare Objekte.  
Rechts ein nicht-planarer [Draft-Linienzug](/Draft_Wire/de "Draft Wire/de"), der als Pfadobjekt einer [Draft-Pfad-Anordnung](/Draft_PathArray/de "Draft PathArray/de") verwendet wird.

## Zeichnen

- ![](/images/Draft_Line.svg) [Linie](/Draft_Line/de "Draft Line/de"): erstellt eine gerade Linie.

- ![](/images/Draft_Wire.svg) [Linienzug](/Draft_Wire/de "Draft Wire/de"): erstellt einen Linienzug (auch Polylinie oder Draht genannt), eine Folge von mehreren miteinander verbundenen Linienabschnitten.

- ![](/images/Draft_Fillet.svg) [Verrundung](/Draft_Fillet/de "Draft Fillet/de"): erstellt eine Verrundung (eine abgerundete Ecke) oder eine Fase (eine gerade Kante) zwischen zwei [Draft-Linien](/Draft_Line/de "Draft Line/de").

- ![](/images/Draft_Arc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Bogenwerkzeuge:

- ![](/images/Draft_Arc.svg) [Bogen](/Draft_Arc/de "Draft Arc/de"): erstellt einen Kreisbogen aus einem Mittelpunkt, einem Radius, einem Startwinkel und einem Öffnungswinkel.

- ![](/images/Draft_Arc_3Points.svg) [Bogen durch 3 Punkte](/Draft_Arc_3Points/de "Draft Arc 3Points/de"): erstellt einen Kreisbogen aus drei Punkten, die seinen Umfang festlegen.

- ![](/images/Draft_Circle.svg) [Kreis](/Draft_Circle/de "Draft Circle/de"): erstellt einen Kreis aus Mittelpunkt und Radius.

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse/de "Draft Ellipse/de"): erstellt eine Ellipse aus zwei Punkten, die ein Rechteck definieren, in das die Ellipse hineinpasst.

- ![](/images/Draft_Rectangle.svg) [Rechteck](/Draft_Rectangle/de "Draft Rectangle/de"): erstellt ein Rechteck aus zwei Punkten.

- ![](/images/Draft_Polygon.svg) [Vieleck](/Draft_Polygon/de "Draft Polygon/de"): erstellt ein regelmäßiges Vieleck aus Mittelpunkt und Radius.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline/de "Draft BSpline/de"): erstellt eine B-Spline-Kurve aus mehreren Punkten.

- ![](/images/Draft_CubicBezCurve.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Bézier-Werkzeuge:

- ![](/images/Draft_CubicBezCurve.svg) [Kubische Bézierkurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de"): erstellt eine Bézierkurve dritten Grades.

- ![](/images/Draft_BezCurve.svg) [Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de"): erstellt eine Bézierkurve aus mehreren Punkten.

- ![](/images/Draft_Point.svg) [Punkt](/Draft_Point/de "Draft Point/de"): erstellt einen einfachen Punkt.

- ![](/images/Draft_Facebinder.svg) [Flächenbinder](/Draft_Facebinder/de "Draft Facebinder/de"): erstellt ein Oberflächenobjekt aus ausgewählten Flächen.

- ![](/images/Draft_ShapeString.svg) [Textform](/Draft_ShapeString/de "Draft ShapeString/de"): erstellt eine Verbundform, die eine Textzeichenfolge darstellt.

- ![](/images/Draft_Hatch.svg) [Schraffur](/Draft_Hatch/de "Draft Hatch/de"): erstellt eine Schraffur auf den ebenen Flächen eines ausgewählten Objekts.

## Beschriften

- ![](/images/Draft_Text.svg) [Text](/Draft_Text/de "Draft Text/de"): erstellt einen mehrzeiligen Text an einer bestimmten Stelle.

- ![](/images/Draft_Dimension.svg) [Maß](/Draft_Dimension/de "Draft Dimension/de"): erstellt ein Längenmaß, ein Radienmaß oder ein Winkelmaß.

- ![](/images/Draft_Label.svg) [Hinweis](/Draft_Label/de "Draft Label/de"): erstellt einen mehrzeiligen Text an einer zweiteiligen Hinweislinie mit Pfeilspitze.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Beschriftungsstile...](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de"): erlaubt Stile zu definieren, die die visuellen Eigenschaften von beschriftungsähnlichen Objekten beeinflussen.

## Verändern

- ![](/images/Draft_Move.svg) [Verschieben](/Draft_Move/de "Draft Move/de"): verschiebt oder kopiert ausgewählte Objekte von einem Punkt zu einem anderen.

- ![](/images/Draft_Rotate.svg) [Drehen](/Draft_Rotate/de "Draft Rotate/de"): dreht oder kopiert ausgewählte Objekte, einem gegebenen Winkel entsprechend, um einen Drehpunkt herum.

- ![](/images/Draft_Scale.svg) [Skalieren](/Draft_Scale/de "Draft Scale/de"): skaliert oder kopiert ausgewählte Objekte von einem Basispunkt aus.

- ![](/images/Draft_Mirror.svg) [Spiegeln](/Draft_Mirror/de "Draft Mirror/de"): erstellt gespiegelte Kopien von ausgewählten Objekten.

- ![](/images/Draft_Offset.svg) [Versatz](/Draft_Offset/de "Draft Offset/de"): versetzt jedes Teilstück eines ausgewählten Objekts um einen gegebenen Abstand oder erstellt eine versetzte Kopie des ausgewählten Objekts.

- ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex/de "Draft Trimex/de"): beschneidet oder verlängert (trims or extends) ein ausgewähltes Objekt.

- ![](/images/Draft_Stretch.svg) [Strecken](/Draft_Stretch/de "Draft Stretch/de"): streckt Objekte durch Verschieben ausgewählter Punkte.

- ![](/images/Draft_Clone.svg) [Klonen](/Draft_Clone/de "Draft Clone/de"): erstellt verknüpfte Kopien, Klone, von ausgewählten Objekten.

- ![](/images/Draft_OrthoArray.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Anordnungswerkzeuge:

- ![](/images/Draft_OrthoArray.svg) [RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"): erstellt eine rechtwinklige Anordnung aus einem ausgewählten Objekt. Wahlweise kann eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array) erstellt werden.

- ![](/images/Draft_PolarArray.svg) [Polare Anordnung](/Draft_PolarArray/de "Draft PolarArray/de"): erstellt eine Anordnung aus einem ausgewählten Objekt, indem Kopien entlang eines Kreisumfangs positioniert werden. Wahlweise kann eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array) erstellt werden.

- ![](/images/Draft_CircularArray.svg) [Kreisanordnung](/Draft_CircularArray/de "Draft CircularArray/de"): erstellt eine Anordnung aus einem ausgewählten Objekt, indem Kopien an konzentrischen Kreisumfängen entlang positioniert werden. Wahlweise kann eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array) erstellt werden.

- ![](/images/Draft_PathArray.svg) [Path array](/Draft_PathArray/de "Draft PathArray/de"): erstellt eine Anordnung aus einem ausgewählten Objekt, indem Kopien entlang eines Pfades positioniert werden.

- ![](/images/Draft_PathLinkArray.svg) [PfadVerknüpfungsanordnung](/Draft_PathLinkArray/de "Draft PathLinkArray/de"): wie vorher, erstellt aber eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array) anstatt einer normalen Anordnung.

- ![](/images/Draft_PointArray.svg) [Punkt-Anordnung](/Draft_PointArray/de "Draft PointArray/de"): erstellt eine Anordnung aus einem ausgewählten Objekt, indem Kopien an den Punkten eines Punktverbundes positioniert werden.

- ![](/images/Draft_PointLinkArray.svg) [PunktVerknüpfungsanordnung](/Draft_PointLinkArray/de "Draft PointLinkArray/de"): wie vorher, erstellt aber eine Verknüpfungsanordnung ([Link](/App_Link/de "App Link/de")-Array) anstatt einer normalen Anordnung.

- ![](/images/Draft_Edit.svg) [Bearbeiten](/Draft_Edit/de "Draft Edit/de"): setzt die ausgewählten Objekte in den Draft-Bearbeitungsmodus. In diesem Modus können die Eigenschaften graphisch bearbeitet werden.

- ![](/images/Draft_SubelementHighlight.svg) [Unterement hervorheben](/Draft_SubelementHighlight/de "Draft SubelementHighlight/de"): hebt ausgewählte Objekte oder die Basisobjekte der ausgewählten Objekte zeitweilig hervor.

- ![](/images/Draft_Join.svg) [Verbinden](/Draft_Join/de "Draft Join/de"): verbindet [Draft-Linien](/Draft_Line/de "Draft Line/de") und [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de") zu einem einzigen Linienzug.

- ![](/images/Draft_Split.svg) [Teilen](/Draft_Split/de "Draft Split/de"): teilt eine [Draft-Linie](/Draft_Line/de "Draft Line/de") oder einen [Draft-Linienzug](/Draft_Wire/de "Draft Wire/de") an einem bestimmten Punkt oder an einer bestimmten Kante.

- ![](/images/Draft_Upgrade.svg) [Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de"): stuft ausgewählte Objekte hoch.

- ![](/images/Draft_Downgrade.svg) [Zurückstufen](/Draft_Downgrade/de "Draft Downgrade/de"): stuft ausgewählte Objekte zurück.

- ![](/images/Draft_WireToBSpline.svg) [Linienzug zu B-spline](/Draft_WireToBSpline/de "Draft WireToBSpline/de"): wandelt [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de") in [Draft-B-Splines](/Draft_BSpline/de "Draft BSpline/de") und zurück.

- ![](/images/Draft_Draft2Sketch.svg) [Zeichnung zu Skizze](/Draft_Draft2Sketch/de "Draft Draft2Sketch/de"): wandelt Draft-Objekte in [Sketcher-Skizzen](/Sketcher_NewSketch/de "Sketcher NewSketch/de") und zurück.

- ![](/images/Draft_Slope.svg) [Neigung festlegen](/Draft_Slope/de "Draft Slope/de"): neigt ausgewählte [Draft-Linien](/Draft_Line/de "Draft Line/de") oder [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de"), indem die Werte der Z-Koordinaten aller Punkte nach dem ersten erhöht oder verringert werden.

- ![](/images/Draft_FlipDimension.svg) [Maß umkehren](/Draft_FlipDimension/de "Draft FlipDimension/de"): dreht den Maßtext ausgewählter [Draft-Maße](/Draft_Dimension/de "Draft Dimension/de") um 180° um die Maßlinie herum.

- ![](/images/Draft_Shape2DView.svg) [Form2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de"): erstellt 2D-Projektionen von ausgewählten Objekten.

## Draft Fach

Das [Draft Fach](/Draft_Tray "Draft Tray") ermöglicht die Auswahl einer Arbeitsebene, Stileinstellungen festzulegen, den Konstruktionsmodus umzuschalten und das Festlegen eines aktiven Layers oder einer Gruppe.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_tray_button_plane.png) [Ebene auswählen](/Draft_SelectPlane/de "Draft SelectPlane/de"): legt die aktuelle Draft-Arbeitsebene fest. Auch im Menü verfügbar: **Dienstprogramme → ![](/images/Draft_SelectPlane.svg) Ebene auswählen**.

- ![](/images/Draft_tray_button_style.png) [Stil festlegen](/Draft_SetStyle/de "Draft SetStyle/de"): setzt den Standardstil für neue Objekte. Auch verfügbar im Menü: **Draft → Dienstprogramme → ![](/images/Draft_SetStyle.svg) Stil festlegen**.

- ![](/images/Draft_tray_button_construction.png) [Hilfsgeometriemodus umschalten](/Draft_ToggleConstructionMode/de "Draft ToggleConstructionMode/de"): schaltet den Draft-Hilfsgeometriemodus ein oder aus. Steht auch im Menü zur Verfügung: **Draft → Dienstprogramme → ![](/images/Draft_ToggleConstructionMode.svg) Hilfsgeometriemodus umschalten**.

- ![](/images/Draft_tray_button_layer.png) [AutoGruppieren](/Draft_AutoGroup/de "Draft AutoGroup/de"): wechselt die aktive [Draft Ebene](/Draft_Layer/de "Draft Layer/de") oder, optional, die aktive [Std Gruppe](/Std_Group/de "Std Group/de") oder das gruppenähnliche [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekt.

## Draft-Widget Beschriftungsmaßstab

Mit dem [Draft-Widget Beschriftungsmaßstab](/Draft_annotation_scale_widget/de "Draft annotation scale widget/de") kann der Maßstab der Draft-Beschriftungen festgelegt werden.

![](/images/Draft_annotation_scale_widget_button.png)

## Draft-Widget Einrasten

Das [Draft-Widget Einrasten](/Draft_snap_widget "Draft snap widget") kann als Alternative zur [Symbolleiste Draft-Einrasten](#Symbolleiste_Draft_Einrasten) dienen.

![](/images/Draft_snap_widget_button.png)

## Symbolleiste Draft-Einrasten

Die Symbolleiste Draft-Einrasten erlaubt das Auswählen der aktiven Einrast-Option. Die zu den aktiven Optionen gehörenden Schaltflächen bleiben niedergedrückt. Für allgemeine Informationen zum Einrasten siehe: [Draft Einrasten](/Draft_Snap/de "Draft Snap/de")

- ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de"): aktiviert oder deaktiviert das Einrasten global.

- ![](/images/Draft_Snap_Endpoint.svg) [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de"): rastet auf Endpunkten von Kanten ein.

- ![](/images/Draft_Snap_Midpoint.svg) [Einrasten auf Kantenmitte](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de"): rastet auf Mittelpunkten von Kanten ein.

- ![](/images/Draft_Snap_Center.svg) [Einrasten auf Mittelpunkt](/Draft_Snap_Center/de "Draft Snap Center/de"): Rastet auf Mittelpunkten von Flächen oder kreisförmigen Kanten ein sowie auf den Punkten der Daten-Eigenschaft**Placement** von [Draft-Arbeitsebenen-Proxies](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") und [Arch-Gebäudeteilen](/Arch_BuildingPart/de "Arch BuildingPart/de").

- ![](/images/Draft_Snap_Angle.svg) [Einrasten auf Winkel](/Draft_Snap_Angle/de "Draft Snap Angle/de"): rastet auf bestimmten Hauptpunkten von kreisförmigen Kanten ein; auf Vielfachen von 30° und 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Einrasten auf Schnittpunkt](/Draft_Snap_Intersection/de "Draft Snap Intersection/de"): rastet auf den Schnittpunkt zweier Kanten ein.

- ![](/images/Draft_Snap_Perpendicular.svg) [Senkrecht einrasten](/Draft_Snap_Perpendicular/de "Draft Snap Perpendicular/de"): rastet auf senkrechten Punkten auf Flächen ein ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) und auf Kanten.

- ![](/images/Draft_Snap_Extension.svg) [Einrasten auf Verlängerung](/Draft_Snap_Extension/de "Draft Snap Extension/de"): rastet auf einer virtuellen Geraden ein, die über die Endpunkte gerader Kanten hinaus verläuft.

- ![](/images/Draft_Snap_Parallel.svg) [Parallel einrasten](/Draft_Snap_Parallel/de "Draft Snap Parallel/de"): rastet auf einer virtuellen Geraden parallel zu einer geraden Kante ein.

- ![](/images/Draft_Snap_Special.svg) [Einrasten spezial](/Draft_Snap_Special/de "Draft Snap Special/de"): rastet auf Punkten ein, die durch das Objekt bestimmt werden.

- ![](/images/Draft_Snap_Near.svg) [In der Nähe einrasten](/Draft_Snap_Near/de "Draft Snap Near/de"): rastet auf dem am nächsten liegenden Punkt einer Fläche oder Kante ein.

- ![](/images/Draft_Snap_Ortho.svg) [Orthogonal einrasten](/Draft_Snap_Ortho/de "Draft Snap Ortho/de"): rastet auf virtuellen Geraden ein, die durch den vorherigen Punkt verlaufen, unter einem Winkel, der ein Vielfaches von 45° ist.

- ![](/images/Draft_Snap_Grid.svg) [Einrasten auf Raster](/Draft_Snap_Grid/de "Draft Snap Grid/de"): rastet auf den Schnittstellen von Rasterlinien ein.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Einrasten auf Arbeitsebene](/Draft_Snap_WorkingPlane/de "Draft Snap WorkingPlane/de"): projiziert Einrastpunkte auf die aktuelle [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").

- ![](/images/Draft_Snap_Dimensions.svg) [Einrasten auf Maße](/Draft_Snap_Dimensions/de "Draft Snap Dimensions/de"): zeigt die temporären X- und Y-Maße an.

- ![](/images/Draft_ToggleGrid.svg) [Raster umschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de"): ändert die Sichtbarkeit des Rasters.

## Symbolleiste Draft-Hilfswerkzeuge

- ![](/images/Draft_LayerManager.svg) [Ebenen verwalten...](/Draft_LayerManager/de "Draft LayerManager/de"): ermöglicht die Verwaltung der Ebenen in einem Dokument. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/images/Draft_AddNamedGroup.svg) [Neue benannte Gruppe](/Draft_AddNamedGroup/de "Draft AddNamedGroup/de"): erstellt eine benannte [Std Gruppe](/Std_Group/de "Std Group/de") und fügt Objekte dieser Gruppe hinzu.

- ![](/images/Draft_SelectGroup.svg) [GruppeWählen](/Draft_SelectGroup/de "Draft SelectGroup/de"): wählt den Inhalt von [Std Gruppen](/Std_Group/de "Std Group/de") oder gruppenartigen [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekten aus.

- ![](/images/Draft_AddToLayer.svg) [Zur Ebene hinzufügen...](/Draft_AddToLayer/de "Draft AddToLayer/de"): fügt einer Ebene Objekte hinzu oder entfernt sie von einer beliebigen Ebene. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

- ![](/images/Draft_AddToGroup.svg) [ZurGruppeHinzufügen...](/Draft_AddToGroup/de "Draft AddToGroup/de"): fügt einer [Std Gruppe](/Std_Group/de "Std Group/de") Objekte hinzu. Es können auch Objekte aus einer Gruppe entfernen.

- ![](/images/Draft_AddConstruction.svg) [Zur Hilfsgeometriegruppe hinzufügen](/Draft_AddConstruction/de "Draft AddConstruction/de"): fügt der Draft-Gruppe [Hilfsgeomerie](/Draft_ToggleConstructionMode/de "Draft ToggleConstructionMode/de") (Draft construction group) Objekte hinzu.

- ![](/images/Draft_ToggleDisplayMode.svg) [DarstellungsartUmschalten](/Draft_ToggleDisplayMode/de "Draft ToggleDisplayMode/de"): wechselt die Darstellungsart zwischen Ansicht-Eigenschaft**Display Mode** Eigenschaft ausgewählter Elemente `Flache Linien` und `Drahtgitter`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [ArbeitsebenenProxy](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de"): erzeugt einen ArbeitsebenenProxy um die aktuelle [Draft Arbeitsebenen](/Draft_SelectPlane/de "Draft SelectPlane/de") zu speichern.

## Zusätzliche Werkzeuge

Das Menü **Draft → Dienstprogramme** enthält mehrere Werkzeuge. Die meisten davon können auch über Symbolleisten oder das [Draft-Tray](/Draft_Tray/de "Draft Tray/de") erreicht werden und wurden schon weiter oben erwähnt. Für die folgenden Werkzeuge it dies nicht der Fall:

- ![](/images/Draft_ApplyStyle.svg) [Aktuellen Stil anwenden](/Draft_ApplyStyle/de "Draft ApplyStyle/de"): wendet die aktuellen Stileinstellungen auf die ausgewählten Objekte an.

- ![](/images/Draft_Layer.svg) [Neue Ebene](/Draft_Layer/de "Draft Layer/de"): erstellt eine [Draft-Ebene](/Draft_Layer/de "Draft Layer/de").

- ![](/images/Draft_Heal.svg) [Heilen](/Draft_Heal/de "Draft Heal/de"): repariert problematische Draft-Objekte aus sehr alten Dateien.

- ![](/images/Draft_ShowSnapBar.svg) [Symbolleiste Draft-Einrasten anzeigen](/Draft_ShowSnapBar/de "Draft ShowSnapBar/de"): zeigt die Symbolleiste [Draft-Einrasten](#Symbolleiste_Draft-Einrasten) an.

## Zusätzliche Funktionen

- [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de"): die Ebene in der [3D-Ansicht](/3D_view/de "3D view/de"), in der neue Draft-Objekte erstellt werden.
- [Einrasten](/Draft_Snap/de "Draft Snap/de"): wählt exakte geometrische Punkte auf vorhandenen Objekten aus bzw. durch sie festgelegte Punkte oder legt sie auf dem Raster fest.
- [Beschränken](/Draft_Constrain/de "Draft Constrain/de"): für jeden nachfolgenden Punkt kann die Bewegung des Mauszeigers auf die X-, Y- oder Z-Richtung eingeschränkt werden.
- [Konstruktionsmodus](/Draft_ToggleConstructionMode/de "Draft ToggleConstructionMode/de"): platziert neue Draft-Objekte in einer eigenen Gruppe, was das Ausblenden oder Löschen erleichtert.
- [Muster](/Draft_Pattern/de "Draft Pattern/de"): Draft-Objekte mit einer Daten-Eigenschaft**Make Face** können ein SVG-Muster anstelle einer einfarbigen Fläche anzeigen.

## Kontextmenü der Baumansicht

Die folgenden zusätzlichen Optionen stehen nur im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") zur Verfügung:

### Standard-Optionen

Für die meisten Draft-Objekte sind die folgenden Optionen verfügbar:

- Bearbeiten: Bearbeitet das Objekt. Je nach Objekttyp wird entweder [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") oder eine eigene Editier-Lösung verwendet. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Wenn es ein aktives Dokument gibt, enthält das Kontextmenü ein zusätzliches Untermenü:

- Dienstprogramme: eine Teilmenge der Werkzeuge, die im Hauptmenü der Draft Dienstprograme verfügbar sind.

### Optionen des Ebenen-Behälters

Für einen [Draft Ebenen-Behälter](/Draft_Layer/de "Draft Layer/de") (LayerContainer-Objekt) sind diese zusätzlichen Optionen verfügbar:

- ![](/images/Draft_Layer.svg) [Ebenenduplikate zusamenführen](/Draft_Layer/de#Optionen_des_Ebenen-Behälters "Draft Layer/de"): vereinigt alle Ebenen mit der gleichen Basisbezeichnung.

- ![](/images/Draft_NewLayer.svg) [Neue Ebene hinzufügen](/Draft_Layer/de#Optionen_des_Ebenen-Behälters "Draft Layer/de"): fügt eine neue Ebene in das aktuelle Dokument ein.

### Ebenen-Optionen

Für eine [Draf-Ebene](/Draft_Layer/de "Draft Layer/de") (Layer-Objekt) sind diese zusätzlichen Optionen verfügbar:

- ![](/images/Button_right.svg) [Diese Ebene aktivieren](/Draft_AutoGroup/de "Draft AutoGroup/de"): aktiviert die ausgewählte Ebene.

- ![](/images/Draft_SelectGroup.svg) [Ebeneninhalt auswählen](/Draft_SelectGroup/de "Draft SelectGroup/de"): wählt die Objekte innerhalb der ausgewählten Ebene aus.

### Text-Optionen

Für einen [Draft Text](/Draft_Text "Draft Text") und einen [Draft Hinweis](/Draft_Label "Draft Label"), der einen oder mehrere Hyperlinks zu einer lokalen oder entfernten Datei oder einer URL enthält, ist diese zusätzliche Option verfügbar:

- Öffne Hyperlinks: die Hyperlinks werden in der entsprechenden Anwendung geöffnet (wie vom Betriebssystem festgelegt). Bei mehreren Hyperlinks gibt es eine Warnung. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Linienzug-Optionen

Für eine [Draft Linie](/Draft_Line "Draft Line") und einen [Draft Linienzug](/Draft_Wire "Draft Wire") sind diese zusätzlichen Optionen verfügbar:

- ![](/images/Draft_Edit.svg) Abflachen: flacht die Linien auf die aktuelle [Draft Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") ab. Diese Option arbeitet nicht zuverlässig in Version 0.19 und davor.

### ArbeitsebenenProxy-Optionen

Für eine [Draft ArbeitsebenenProxy](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") sind diese zusätzlichen Optionen verfügbar:

- ![](/images/Draft_SelectPlane.svg) [Schreibe Kamera-Position](/Draft_WorkingPlaneProxy/de#Context_menu "Draft WorkingPlaneProxy/de"): aktualisiert die Ansicht**View Data**-Eigenschaft des ArbeitsebenenProxy der Arbeitsebene mit den aktuellen Kamera-Einstellungen der [3D-Ansicht](/3D_view/de "3D view/de").

- ![](/images/Draft_SelectPlane.svg) [Schreibe Objektstatus](/Draft_WorkingPlaneProxy/de#Context_menu "Draft WorkingPlaneProxy/de"): aktualisiert die Ansicht**Visibility Map**-Eigenschaft des ArbeitsebenenProxy der Arbeitsebene mit dem aktuellen Sichtbarkeits-Status der Objekte im Dokument.

## Kontextmenü der 3D-Ansicht

Die folgenden zusätzlichen Optionen stehen nur im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") zur Verfügung:

### Standard-Optionen

Wenn es ein aktives Dokument gibt, enthält das Kontextmenü ein weiteres Untermenü:

- Dienstprogramme: eine Teilmenge der Werkzeuge, die im Hauptmenü der Draft Dienstprograme verfügbar sind.

### Text-Optionen

Siehe [oben](#Text_options).

## Veraltete Werkzeuge

- ![](/images/Draft_Array.svg) [Anordnung](/Draft_Array/de "Draft Array/de"): Erstellt eine rechtwinklige Anordnung aus einem Ausgewählten Objekt. Die erstellte Anordnung kann in eine [PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de") oder in eine [KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de") umgewandelt werden, indem ihre Daten-Eigenschaft**Array Type** geändert wird. Nicht mehr enthalten in 0.21 und neuer.

- ![](/images/Draft_Drawing.svg) [Drawing](/Draft_Drawing/de "Draft Drawing/de"): fügt Ansichten ausgewählter Objekte in ein Zeichnungsblatt des Arbeitsbereichs [Drawing](/Drawing_Workbench/de "Drawing Workbench/de") ein. Nicht vorhanden in Version 0.21 und neuer.

- ![](/images/Draft_ToggleContinueMode.svg) [FortsetzungsmodusUmschalten](/Draft_ToggleContinueMode/de "Draft ToggleContinueMode/de"): schaltet den Fortsetzungsmodus ein oder aus. Nicht verfügbar in Version 1.0 und neuer.

## Einstellungen

- ![](/images/Preferences-draft.svg) [Einstellungen](/Draft_Preferences/de "Draft Preferences/de"): allgemeine Einstellungen für den Arbeitsbereich Draft.

- ![](/images/Preferences-import-export.svg) [Import Export Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de"): verfügbare Einstellungen für den Import aus und Export in unterschiedliche Dateiformate.

## Dateiformate

Der Arbeitsbereich Draft stellt FreeCAD Import- und Export-Hilfsprogramme für verschiedene Dateiformate zur Verfügung. Diese werden von den Befehlen [Std Import](/Std_Import/de "Std Import/de") und [Std Export](/Std_Export/de "Std Export/de") verwendet.

- [Autodesk .DXF](/Draft_DXF/de "Draft DXF/de"): Importiert und exportiert [Drawing-Exchange-Format](http://en.wikipedia.org/wiki/AutoCAD_DXF)-Dateien
- [Autodesk .DWG](/Draft_DXF/de "Draft DXF/de"): Importiert und exportiert DWG Dateien mit einem externen DWG-Konverter. Siehe auch [FreeCAD- und DWG-Import](/FreeCAD_and_DWG_Import/de "FreeCAD and DWG Import/de").
- [Scalable Vector Graphics .SVG](/Draft_SVG/de "Draft SVG/de"): Importiert und exportiert [Skalierbare Vektorgrafiken](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics).
- [Open Cad Format .OCA](/Draft_OCA/de "Draft OCA/de"): Importiert und exportiert [OCA/GCAD](http://groups.google.com/group/open_cad_format)-Dateien.
- [Tragflächenprofil Daten Format .DAT](/Draft_DAT/de "Draft DAT/de"): Importiert DAT Dateien, die Tragflächenprofile (engl.: Airfoil profiles) beschreiben.

## Einheitentests

Siehe auch: Arbeitsbereich [Test Framework](/Testing/de "Testing/de").

Um die Einheitentests des Arbeitsbereichs auszuführen, gibt man Folgendes im Terminal des Betriebssystems ein:

```
freecad -t TestDraft

```

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Der Arbeitsbereich enthält ein Modul zur Erstellung von Mustern aller Objekte in einem neuen Dokument.

Verwende dies, um zu testen, ob alle Objekte korrekt erstellt werden:

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

Der Einblick in den Code dieses Moduls kann helfen, um die Programmierschnittstelle zu verstehen.

## Tutorien

- [Draft Tutorium](/Draft_tutorial/de "Draft tutorial/de")
- [Draft TextForm Tutorium](/Draft_ShapeString_tutorial/de "Draft ShapeString tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/de&oldid=1547662>"
