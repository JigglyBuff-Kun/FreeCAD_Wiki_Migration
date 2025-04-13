---
title: Arbeitsbereich TechDraw
---

![](/src/assets/images/Workbench_TechDraw.svg)

Symbol des Arbeitsbereichs TechDraw

## Einleitung

Der Arbeitsbereich ![](/src/assets/images/Workbench_TechDraw.svg)TechDraw dient zur Erstellung einfacher technischer Zeichnungen aus 3D-Modellen, die mit einem anderen Arbeitsbereich erstellt wurden, wie z.B. [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") oder die aus anderen Anwendungen importiert wurden. Jede Zeichnung ist ein Blatt, das verschiedene Ansichten von zeichnungsfähigen Objekten wie Part-Formelemente (Part::Features), PartDesign-Körper (PartDesign::Bodies), gruppierte Std-Parts (App::Part groups) und Std-Gruppen (App::DocumentObjectGroups) enthalten kann. Die daraus entstandenen Zeichnungen können für Dokumentationen, Fertigungsanweisungen, Verträge, Genehmigungen usw. verwendet werden.

Maße, Schnittansichten, schraffierte Bereiche, Beschriftungen und Symbole im Dateiformat[SVG](/SVG/de "SVG/de") können dem Blatt hinzugefügt werden. Das Blatt (die Zeichnung) kann später in verschiedene Formate wie [DXF](/DXF/de "DXF/de"), [SVG](/SVG/de "SVG/de") und [PDF](/PDF/de "PDF/de") exportiert werden.

Wenn das Hauptziel die Erstellung komplexer 2D-Zeichnungen und [DXF](/DXF/de "DXF/de")-Dateien ist und keine 3D-Modelle benötigt werden, ist FreeCAD möglicherweise nicht die richtige Wahl. Stattdessen sollte man eine spezielle (Software-)Anwendung für technisches Zeichnen in Betracht ziehen, wie [LibreCAD](https://de.wikipedia.org/wiki/LibreCAD) oder [QCad](https://de.wikipedia.org/wiki/QCad).

![](/src/assets/images/TechDraw_Workbench_Example.png)

## Einrasten

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Der Arbeitsbereich TechDraw besitzt eine Einrastfunktion. Sie kann eingesetzt werden, um Ansichten, Schnittansichten und Maße automatisch auszurichten, wenn sie durch Ziehen mir der Maus positioniert werden. Ist **Ausrichtung der Ansicht einrasten View Alignment** in den [Voreinstellungen](/TechDraw_Preferences/de#Einrasten "TechDraw Preferences/de") aktiviert (Standardeinstellung), rasten Ansichten auf die korrekte Lage zu anderen Ansichten ein, sobald sie sich dicht genug an dieser Lage befinden (Einstellung **Einrastfaktor für Ansichten**). Maße rasten auch entlang anderer paralleler Maße ein und Maßtexte können in der Mitte der Maßlinie einrasten. Einrasten kann durch Gedrückthalten der Alt-Taste zeitweilig ausgeschaltet werden.

## Werkzeuge

### Zeichnungsblätter

- ![](/src/assets/images/TechDraw_PageDefault.svg) [Neues Zeichnungsblatt aus der Standardvorlage erstellen](/TechDraw_PageDefault/de "TechDraw PageDefault/de"): Fügt ein neues Zeichnungsblatt unter Verwendung der voreingestellten [Vorlage](/TechDraw_Templates "TechDraw Templates") hinzu.

- ![](/src/assets/images/TechDraw_PageTemplate.svg) [Neues Zeichnungsblatt aus einer Vorlage erstellen](/TechDraw_PageTemplate/de "TechDraw PageTemplate/de"): Fügt ein neues Zeichnungsblatt unter Verwendung einer frei wählbaren [Vorlage](/TechDraw_Templates/de "TechDraw Templates/de") hinzu.

- ![](/src/assets/images/TechDraw_FillTemplateFields.svg) [Vorlagenfelder aktualisieren](/TechDraw_FillTemplateFields/de "TechDraw FillTemplateFields/de"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/src/assets/images/TechDraw_RedrawPage.svg) [Seite neu zeichnen](/TechDraw_RedrawPage/de "TechDraw RedrawPage/de"): Erzwingt eine Aktualisierung des ausgewählten Zeichnungsblattes.

- ![](/src/assets/images/TechDraw_PrintAll.svg) [Alle Seiten drucken](/TechDraw_PrintAll/de "TechDraw PrintAll/de"): Druckt alle Zeichnungsblätter eines Dokuments. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_ExportPageSVG.svg) [Seite als SVG-Datei exportieren](/TechDraw_ExportPageSVG/de "TechDraw ExportPageSVG/de"): Speichert die aktuelle Seite als [SVG](/SVG/de "SVG/de")-Datei.

- ![](/src/assets/images/TechDraw_ExportPageDXF.svg) [Seite als DXF-Datei exportieren](/TechDraw_ExportPageDXF/de "TechDraw ExportPageDXF/de"): speichert die aktuelle Seite als [DXF](/DXF/de "DXF/de")-Datei.

### Ansichten

#### TechDraw-Ansichten

- ![](/src/assets/images/TechDraw_View.svg) [Ansicht einfügen](/TechDraw_View/de "TechDraw View/de"): Fügt eine Darstellung eines oder mehrerer Objekte hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Es kann eine einzelne Ansicht, eine [Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de"), eine [Tabellenansicht](/TechDraw_SpreadsheetView/de "TechDraw SpreadsheetView/de"), eine [Arch-Ansicht](/TechDraw_ArchView "TechDraw ArchView"), ein [Zeichnungselement](/TechDraw_Symbol/de "TechDraw Symbol/de") oder eine [Bildansicht](/TechDraw_Image/de "TechDraw Image/de") erstellen.

- ![](/src/assets/images/TechDraw_BrokenView.svg) [Unterbrochene Ansicht einfügen](/TechDraw_BrokenView/de "TechDraw BrokenView/de"): Fügt eine unterbrochene Ansicht von einem oder mehreren Objekten hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_SectionView.svg) [Schnittansicht einfügen](/TechDraw_SectionView/de "TechDraw SectionView/de"): Fügt eine Schnittansicht zu einer vorhandenen Ansicht ein.

- ![](/src/assets/images/TechDraw_ComplexSection.svg) [Komplexe Schnittansicht einfügen](/TechDraw_ComplexSection/de "TechDraw ComplexSection/de"): Fügt eine, auf einer Kontur (Schnittprofil) basierende, Schnittansicht zu einer vorhandenen Ansicht ein. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_DetailView.svg) [Detailansicht einfügen](/TechDraw_DetailView/de "TechDraw DetailView/de"): Fügt eine Detailansicht eines Bereiches einer vorhandenen Ansicht ein.

- ![](/src/assets/images/TechDraw_ProjectionGroup.svg) [Projektionsgruppe einfügen](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de"): Ruft einen Dialog auf, um mehrere (zusammenhängende) Ansichten eines Objekts aus verschiedenen Richtungen zu erstellen (Seitenansicht, Draufsicht usw.). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug [Ansicht einfügen](/TechDraw_View/de "TechDraw View/de") kann anstatt dieses Werkzeugs verwendet werden.

- ![](/src/assets/images/TechDraw_ClipGroup.svg) [Ausschnittsgruppe einfügen](/TechDraw_ClipGroup/de "TechDraw ClipGroup/de"): Fügt eine Ausschnittsgruppe ein.

- ![](/src/assets/images/TechDraw_Symbol.svg) [SVG-Zeichnungselement einfügen](/TechDraw_Symbol/de "TechDraw Symbol/de"): Fügt ein Symbol aus einer [SVG](/SVG "SVG")-Datei in ein Zeichnungsblatt ein. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug [Ansicht einfügen](/TechDraw_View/de "TechDraw View/de") kann anstatt dieses Werkzeugs verwendet werden.

- ![](/src/assets/images/TechDraw_Image.svg) [Bitmap-Grafik einfügen](/TechDraw_Image/de "TechDraw Image/de"): Fügt ein PNG- oder JPG-[Bitmap](/Bitmap/de "Bitmap/de")-Bild in ein Zeichnungsblatt ein. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug [Ansicht einfügen](/TechDraw_View/de "TechDraw View/de") kann anstatt dieses Werkzeugs verwendet werden.

- ![](/src/assets/images/TechDraw_ShareView.svg) [Ansicht teilen](/TechDraw_ShareView/de "TechDraw ShareView/de"): Eine Ansicht wird auf mehreren Blättern angezeigt (geteilt).

- ![](/src/assets/images/TechDraw_ToggleFrame.svg) [Ansichtsrahmen ein- oder ausschalten](/TechDraw_ToggleFrame/de "TechDraw ToggleFrame/de"): Schaltet Rahmen und Beschriftungen, die eine Ansicht umgeben, ein bzw. aus.

- ![](/src/assets/images/TechDraw_ProjectShape.svg) [Form projizieren](/TechDraw_ProjectShape/de "TechDraw ProjectShape/de"): Erstellt Projektionen von Formen in der [3D-Ansicht](/3D_view/de "3D view/de").

#### Ansichten von anderen Arbeitsbereichen

- ![](/src/assets/images/TechDraw_ActiveView.svg) [Aktive (3D-)Ansicht einfügen](/TechDraw_ActiveView/de "TechDraw ActiveView/de"): Fügt eine Ansicht des aktiven 3D-Fensters ein.

- ![](/src/assets/images/TechDraw_DraftView.svg) [Objekt des Draft-Arbeitsbereiches einfügen](/TechDraw_DraftView/de "TechDraw DraftView/de"): Fügt eine Ansicht eines Objekts aus dem Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") ein.

- ![](/src/assets/images/TechDraw_ArchView.svg) [Objekt des Arbeitsbereichs BIM einfügen](/TechDraw_ArchView/de "TechDraw ArchView/de"): Fügt eine Ansicht eines [Schnittebenen](/Arch_SectionPlane/de "Arch SectionPlane/de")-Objekts aus dem Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") ein. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug [Ansicht einfügen](/TechDraw_View/de "TechDraw View/de") kann anstatt dieses Werkzeugs verwendet werden.

- ![](/src/assets/images/TechDraw_SpreadsheetView.svg) [Tabellenkalkulationsansicht einfügen](/TechDraw_SpreadsheetView/de "TechDraw SpreadsheetView/de"): Fügt die Ansicht eines Tabellenblattes aus dem Arbeitsbereich [Spreadsheet](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") (Tabellenkalkulation) hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug [Ansicht einfügen](/TechDraw_View/de "TechDraw View/de") kann anstatt dieses Werkzeugs verwendet werden.

### Stapeln

Diese Werkzeuge ändern die Stapelreihenfolge, welche die scheinbare Tiefe von Ansichten auf einem Zeichnungsblatt steuert.

- ![](/src/assets/images/TechDraw_StackTop.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Stapelreihenfolge der Ansichten anpassen:

- ![](/src/assets/images/TechDraw_StackTop.svg) [Ansicht auf die Stapeloberseite bewegen](/TechDraw_StackTop/de "TechDraw StackTop/de"): bewegt die Ansicht auf die Oberseite des Stapels. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_StackBottom.svg) [Ansicht zur Stapelunterseite bewegen](/TechDraw_StackBottom/de "TechDraw StackBottom/de"): bewegt die Ansicht auf die Unterseite des Stapels. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_StackUp.svg) [Ansicht um eine Ebene nach oben bewegen](/TechDraw_StackUp/de "TechDraw StackUp/de"): Bewegt Ansichten um eine Ebene nach oben. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_StackDown.svg) [Ansicht um eine Ebene nach unten bewegen](/TechDraw_StackDown/de "TechDraw StackDown/de"): Bewegt Ansichten um eine Ebene nach unten. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Maße

- ![](/src/assets/images/TechDraw_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Maße:

- ![](/src/assets/images/TechDraw_Dimension.svg) [Maß einfügen](/TechDraw_Dimension/de "TechDraw Dimension/de"): Fügt ein kontextabhängiges Maß hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_LengthDimension.svg) [Längenmaß einfügen](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de"): Fügt ein Längenmaß hinzu.

- ![](/src/assets/images/TechDraw_HorizontalDimension.svg) [Horizontales Maß einfügen](/TechDraw_HorizontalDimension/de "TechDraw HorizontalDimension/de"): Fügt ein horizontales Längenmaß hinzu.

- ![](/src/assets/images/TechDraw_VerticalDimension.svg) [Vertikales Maß einfügen](/TechDraw_VerticalDimension/de "TechDraw VerticalDimension/de"): Fügt ein vertikales Längenmaß hinzu.

- ![](/src/assets/images/TechDraw_RadiusDimension.svg) [Radienmaß einfügen](/TechDraw_RadiusDimension/de "TechDraw RadiusDimension/de"): Fügt einem Kreis oder Kreisbogen ein Radienmaß hinzu.

- ![](/src/assets/images/TechDraw_DiameterDimension.svg) [Durchmessermaß einfügen](/TechDraw_DiameterDimension/de "TechDraw DiameterDimension/de"): Fügt einem Kreis oder Kreisbogen ein Durchmessermaß hinzu.

- ![](/src/assets/images/TechDraw_AngleDimension.svg) [Winkelmaß einfügen](/TechDraw_AngleDimension/de "TechDraw AngleDimension/de"): Fügt ein Winkelmaß zwischen zwei geraden Kanten hinzu.

- ![](/src/assets/images/TechDraw_3PtAngleDimension.svg) [Winkelmaß über 3 Punkte einfügen](/TechDraw_3PtAngleDimension/de "TechDraw 3PtAngleDimension/de"): Fügt ein Winkelmaß unter Verwendung dreier Punkte hinzu.

- ![](/src/assets/images/TechDraw_AreaDimension.svg) [Insert Area Annotation](/TechDraw_AreaDimension/de "TechDraw AreaDimension/de"): Fügt einen Hinweis mit dem Flächeninhalt zu einer Fläche hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_ExtensionCreateLengthArc.svg) [Bogenmaß](/TechDraw_ExtensionCreateLengthArc/de "TechDraw ExtensionCreateLengthArc/de"): Erstellt ein Maß für die (gestreckte) Länge eines Bogens.

- ![](/src/assets/images/TechDraw_HorizontalExtentDimension.svg) [Maß für die horizontale Ausdehnung einfügen](/TechDraw_HorizontalExtentDimension/de "TechDraw HorizontalExtentDimension/de"): fügt ein Maß für die horizontale Ausdehnung hinzu.

- ![](/src/assets/images/TechDraw_VerticalExtentDimension.svg) [Maß für die vertikale Ausdehnung einfügen](/TechDraw_VerticalExtentDimension/de "TechDraw VerticalExtentDimension/de"): Fügt ein Maß für die vertikale Ausdehnung hinzu.

- ![](/src/assets/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Horizontale Maßkette erstellen](/TechDraw_ExtensionCreateHorizChainDimension/de "TechDraw ExtensionCreateHorizChainDimension/de"): Erstellt ein Abfolge horizontal fluchtender Maße.

- ![](/src/assets/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Vertikale Maßkette erstellen](/TechDraw_ExtensionCreateVertChainDimension/de "TechDraw ExtensionCreateVertChainDimension/de"): Erstellt ein Abfolge vertikal fluchtender Maße.

- ![](/src/assets/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Schräge Maßkette erstellen](/TechDraw_ExtensionCreateObliqueChainDimension/de "TechDraw ExtensionCreateObliqueChainDimension/de"): Erstellt ein Abfolge schräger fluchtender Maße.

- ![](/src/assets/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Horizontale Koordinatenmaße erstellen](/TechDraw_ExtensionCreateHorizCoordDimension/de "TechDraw ExtensionCreateHorizCoordDimension/de"): Erstellt eine horizontale Stufenbemaßung, d.h. mehrere horizontale Maße, die untereinander den gleichen Abstand aufweisen und die von derselben Grundlinie starten.

- ![](/src/assets/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Vertikale Koordinatenmaße erstellen](/TechDraw_ExtensionCreateVertCoordDimension/de "TechDraw ExtensionCreateVertCoordDimension/de"): Erstellt eine vertikale Stufenbemaßung, d.h. mehrere vertikale Maße, die untereinander den gleichen Abstand aufweisen und die von derselben Grundlinie starten.

- ![](/src/assets/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Schräge Stufenbemaßung](/TechDraw_ExtensionCreateObliqueCoordDimension/de "TechDraw ExtensionCreateObliqueCoordDimension/de"): Erstellt eine schräge Stufenbemaßung, d.h. mehrere schräge Maße, die untereinander den gleichen Abstand aufweisen und die von derselben Grundlinie starten.

- ![](/src/assets/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Horizontales Maß an Fase einfügen](/TechDraw_ExtensionCreateHorizChamferDimension/de "TechDraw ExtensionCreateHorizChamferDimension/de"): Erstellt ein horizontales Fasenmaß mit Fasenhöhe und -winkel.

- ![](/src/assets/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Vertikales Maß an Fase einfügen](/TechDraw_ExtensionCreateVertChamferDimension/de "TechDraw ExtensionCreateVertChamferDimension/de"): Erstellt ein vertikales Fasenmaß mit Fasenhöhe und -winkel.

- ![](/src/assets/images/TechDraw_Balloon.svg) [Hinweisfeld einfügen](/TechDraw_Balloon/de "TechDraw Balloon/de"): Fügt einer Zeichnung ein Hinweisfeld (Balloon) hinzu.

- ![](/src/assets/images/TechDraw_AxoLengthDimension.svg) [Axonometrisches Längenmaß](/TechDraw_AxoLengthDimension/de "TechDraw AxoLengthDimension/de"): Fügt ein axonometrisches Längenmaß hinzu. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_LandmarkDimension.svg) [Maß zwischen Orientierungspunkten einfügen - EXPERIMENTELL](/TechDraw_LandmarkDimension/de "TechDraw LandmarkDimension/de"): Fügt ein Maß zwischen zwei Orientierungspunkten hinzu.

- ![](/src/assets/images/TechDraw_DimensionRepair.svg) [Maßreferenzen Reparieren](/TechDraw_DimensionRepair/de "TechDraw DimensionRepair/de"): Kann die 2D- oder 3D-Geometriereferenzen eines Maßes anpassen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_LinkDimension.svg) [Maß mit 3D-Geometrie verknüpfen](/TechDraw_LinkDimension/de "TechDraw LinkDimension/de"): Verknüpft ein vorhandenes Maß mit der 3D-Geometrie (veraltet).

### Schraffieren

- ![](/src/assets/images/TechDraw_Hatch.svg) [Fläche mit Muster aus einer Bilddatei schraffieren](/TechDraw_Hatch/de "TechDraw Hatch/de"): Wendet ein Schraffurmuster aus einer Datei auf eine Fläche an.

- ![](/src/assets/images/TechDraw_GeometricHatch.svg) [Fläche mit einer geometrischen Schraffur versehen](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de"): Wendet ein Schraffurmuster, das auf der Spezifikation einer AutoDesk-PAT-Schraffur basiert, auf eine Fläche an.

### Beschriftung

- ![](/src/assets/images/TechDraw_Annotation.svg) [Anmerkung einfügen](/TechDraw_Annotation/de "TechDraw Annotation/de"): Fügt einen einfachen Textblock als Beschriftung hinzu.

- ![](/src/assets/images/TechDraw_LeaderLine.svg) [Hinweislinie zur Ansicht hinzufügen](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de"): Fügt einer Ansicht eine Hinweislinie hinzu.

- ![](/src/assets/images/TechDraw_RichTextAnnotation.svg) [Formatierten Beschriftungstext einfügen](/TechDraw_RichTextAnnotation/de "TechDraw RichTextAnnotation/de"): Fügt einen formatierten Textblock als Beschriftungstext einer Hinweislinie oder einer Ansicht hinzu.

- ![](/src/assets/images/TechDraw_CosmeticVertex.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Hilfspunkte einfügen:

- ![](/src/assets/images/TechDraw_CosmeticVertex.svg) [Hilfspunkt hinzufügen](/TechDraw_CosmeticVertex/de "TechDraw CosmeticVertex/de"): Fügt einen Knoten hinzu, der nicht Teil der Quellgeometrie ist.

- ![](/src/assets/images/TechDraw_Midpoints.svg) [Kantenmittelpunkte hinzufügen](/TechDraw_Midpoints/de "TechDraw Midpoints/de"): Fügt Hilfspunkte an den Mittenpunkten der ausgewählten Kanten hinzu.

- ![](/src/assets/images/TechDraw_Quadrants.svg) [Quadrantengrenzpunkte hinzufügen](/TechDraw_Quadrants/de "TechDraw Quadrants/de"): Fügt Hilfspunkte an Viertelpunkten ausgewählter (kreisförmiger) Kanten hinzu.

- ![](/src/assets/images/TechDraw_FaceCenterLine.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Mittellinien einfügen:

- ![](/src/assets/images/TechDraw_FaceCenterLine.svg) [Mittellinie zu Flächen hinzufügen](/TechDraw_FaceCenterLine/de "TechDraw FaceCenterLine/de"): Fügt ausgewählten Flächen eine Mittellinie hinzu.

- ![](/src/assets/images/TechDraw_2LineCenterLine.svg) [Mittellinie zwischen 2 Linien hinzufügen](/TechDraw_2LineCenterLine/de "TechDraw 2LineCenterLine/de"): Fügt eine Mittellinie zwischen 2 Linien hinzu.

- ![](/src/assets/images/TechDraw_2PointCenterLine.svg) [Mittellinie zwischen 2 Punkten hinzufügen](/TechDraw_2PointCenterLine/de "TechDraw 2PointCenterLine/de"): Fügt eine Mittellinie zwischen 2 Punkten hinzu.

- ![](/src/assets/images/TechDraw_2PointCosmeticLine.svg) [Hilfslinie durch 2 Punkte hinzufügen](/TechDraw_2PointCosmeticLine/de "TechDraw 2PointCosmeticLine/de"): Fügt eine Hilfslinie hinzu, die 2 Knoten verbindet

- ![](/src/assets/images/TechDraw_CosmeticCircle.svg) [Hilfskreis hinzufügen](/TechDraw_CosmeticCircle/de "TechDraw CosmeticCircle/de"): Fügt einen Hilfskreis hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_DecorateLine.svg) [Liniendarstellung ändern](/TechDraw_DecorateLine/de "TechDraw DecorateLine/de"): Ändert das Aussehen ausgewählter Linien.

- ![](/src/assets/images/TechDraw_ShowAll.svg) [Ausgeblendete Kanten ein-/ausblenden](/TechDraw_ShowAll/de "TechDraw ShowAll/de"): Blendet als unsichtbar gekennzeichnete Linien/Kanten einer Ansicht ein bzw. (wieder) aus.

- ![](/src/assets/images/TechDraw_WeldSymbol.svg) [Schweißinformationen zur Hinweislinie hinzufügen](/TechDraw_WeldSymbol/de "TechDraw WeldSymbol/de"): Fügt Schweißspezifikationen zu einer vorhandenen Hinweislinie hinzu.

- ![](/src/assets/images/TechDraw_SurfaceFinishSymbols.svg) [Oberflächensymbol erstellen](/TechDraw_SurfaceFinishSymbols/de "TechDraw SurfaceFinishSymbols/de"): Fügt ein Oberflächensymbol auf einem Zeichnungsblatt hinzu. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/TechDraw_HoleShaftFit.svg) [Wellen- oder Bohrungspassung hinzufügen](/TechDraw_HoleShaftFit/de "TechDraw HoleShaftFit/de"): Fügt einem Maß Bohrungs- oder Wellentoleranzen nach ISO 286 hinzu. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Ergänzungen

### Merkmale und Änderungen

- ![](/src/assets/images/TechDraw_ExtensionSelectLineAttributes.svg) [Linienmerkmale, Zeilenabstand und Längendifferenz auswählen](/TechDraw_ExtensionSelectLineAttributes/de "TechDraw ExtensionSelectLineAttributes/de"): Legt die Merkmale (Linienart, Linienbreite und Farbe) für neue Hilfslinien und Mittellinien fest sowie den Zeilenabstand von Maßlinien und die Längendifferenz für Längenänderungen.

- ![](/src/assets/images/TechDraw_ExtensionChangeLineAttributes.svg) [Linienmerkmale ändern](/TechDraw_ExtensionChangeLineAttributes/de "TechDraw ExtensionChangeLineAttributes/de"): Ändert die Merkmale (Linienart, Linienbreite und Farbe) von Hilfslinien und Mittellinien.

- ![](/src/assets/images/TechDraw_ExtensionExtendLine.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Ändert die Länge von Hilfslinien oder Mittellinien:

- ![](/src/assets/images/TechDraw_ExtensionExtendLine.svg) [Linie verlängern](/TechDraw_ExtensionExtendLine/de "TechDraw ExtensionExtendLine/de"): Verlängert eine Hilfslinie oder Mittellinie an beiden Enden.

- ![](/src/assets/images/TechDraw_ExtensionShortenLine.svg) [Linie kürzen](/TechDraw_ExtensionShortenLine/de "TechDraw ExtensionShortenLine/de"): Verkürzt eine Hilfslinie oder Mittellinie an beiden Enden.

- ![](/src/assets/images/TechDraw_ExtensionLockUnlockView.svg) [Ansicht sperren/entsperren](/TechDraw_ExtensionLockUnlockView/de "TechDraw ExtensionLockUnlockView/de"): Sperrt bzw. entsperrt die Position einer Ansicht.

- ![](/src/assets/images/TechDraw_ExtensionPositionSectionView.svg) [Schnittansicht ausrichten](/TechDraw_ExtensionPositionSectionView/de "TechDraw ExtensionPositionSectionView/de"): Richte eine Schnittansicht rechtwinklig zur Quellansicht aus.

- ![](/src/assets/images/TechDraw_ExtensionPosHorizChainDimension.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Kettenmaße anordnen:

- ![](/src/assets/images/TechDraw_ExtensionPosHorizChainDimension.svg) [Horizontale Kettenmaße anordnen](/TechDraw_ExtensionPosHorizChainDimension/de "TechDraw ExtensionPosHorizChainDimension/de"): Ordnet horizontale Maße fluchtend zu einer Maßkette an.

- ![](/src/assets/images/TechDraw_ExtensionPosVertChainDimension.svg) [Vertikale Kettenmaße anordnen](/TechDraw_ExtensionPosVertChainDimension/de "TechDraw ExtensionPosVertChainDimension/de"): Ordnet vertikale Maße fluchtend zu einer Maßkette an.

- ![](/src/assets/images/TechDraw_ExtensionPosObliqueChainDimension.svg) [Schräge Kettenmaße anordnen](/TechDraw_ExtensionPosObliqueChainDimension/de "TechDraw ExtensionPosObliqueChainDimension/de"): Ordnet schräge Maße fluchtend zu einer Maßkette an.

- ![](/src/assets/images/TechDraw_ExtensionCascadeHorizDimension.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Maße anordnen:

- ![](/src/assets/images/TechDraw_ExtensionCascadeHorizDimension.svg) [Horizontale Maße anordnen](/TechDraw_ExtensionCascadeHorizDimension/de "TechDraw ExtensionCascadeHorizDimension/de"): Ordnet horizontale Maße mit gleichen Abständen an.

- ![](/src/assets/images/TechDraw_ExtensionCascadeVertDimension.svg) [Vertikale Maße anordnen](/TechDraw_ExtensionCascadeVertDimension/de "TechDraw ExtensionCascadeVertDimension/de"): Ordnet vertikale Maße mit gleichen Abständen an.

- ![](/src/assets/images/TechDraw_ExtensionCascadeObliqueDimension.svg) [Schräge Maße anordnen](/TechDraw_ExtensionCascadeObliqueDimension/de "TechDraw ExtensionCascadeObliqueDimension/de"): Ordnet schräge Maße mit gleichen Abständen an.

- ![](/src/assets/images/TechDraw_ExtensionAreaAnnotation.svg) [Flächeninhalt der ausgewählten Flächen berechnen](/TechDraw_ExtensionAreaAnnotation/de "TechDraw ExtensionAreaAnnotation/de"): Berechnet den Flächeninhalt von ausgewählten Flächen und fügt ihn als Hinweistext mit Rahmen ein.

- ![](/src/assets/images/TechDraw_ExtensionArcLengthAnnotation.svg) [Bogenlänge der ausgewählten Kanten berechnen](/TechDraw_ExtensionArcLengthAnnotation/de "TechDraw ExtensionArcLengthAnnotation/de"): Berechnet die Bogenlänge ausgewählter Kanten und fügt sie als Hinweistext ein. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_ExtensionCustomizeFormat.svg) [Formatierung anpassen](/TechDraw_ExtensionCustomizeFormat/de "TechDraw ExtensionCustomizeFormat/de"): Passt die Formatierung von Hinweistexten und Maßeinträgen an. Es können Symbole für Form- und Lagetolerierung (GD&T) und andere Sonderzeichen hinzugefügt werden.

#### Mittellinien und Gewinde

- ![](/src/assets/images/TechDraw_ExtensionCircleCenterLines.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Mittellinien hinzufügen:

- ![](/src/assets/images/TechDraw_ExtensionCircleCenterLines.svg) [Kreismittellinien hinzufügen](/TechDraw_ExtensionCircleCenterLines/de "TechDraw ExtensionCircleCenterLines/de"): Fügt Mittellinien zu Kreisen und Kreisbögen hinzu.

- ![](/src/assets/images/TechDraw_ExtensionHoleCircle.svg) [Lochkreismittellinien hinzufügen](/TechDraw_ExtensionHoleCircle/de "TechDraw ExtensionHoleCircle/de"): Fügt die Mittellinien zu einer kreisförmigen Anordnung von Kreisen hinzu.

- ![](/src/assets/images/TechDraw_ExtensionThreadHoleSide.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Hilfslinien für Gewinde hinzufügen:

- ![](/src/assets/images/TechDraw_ExtensionThreadHoleSide.svg) [Hilfslinien für Innengewinde in Seitenansicht hinzufügen](/TechDraw_ExtensionThreadHoleSide/de "TechDraw ExtensionThreadHoleSide/de"): Fügt Gewindelinien zur Seitenansicht einer Bohrung hinzu.

- ![](/src/assets/images/TechDraw_ExtensionThreadHoleBottom.svg) [Hilfslinien für Innengewinde in Achsansicht hinzufügen](/TechDraw_ExtensionThreadHoleBottom/de "TechDraw ExtensionThreadHoleBottom/de"): Fügt eine Gewindelinie zur Ansicht einer Bohrung von oben oder unten hinzu.

- ![](/src/assets/images/TechDraw_ExtensionThreadBoltSide.svg) [|Hilfslinien für Außengewinde in Seitenansicht hinzufügen](/TechDraw_ExtensionThreadBoltSide/de "TechDraw ExtensionThreadBoltSide/de"): Fügt Gewindelinien zur Seitenansicht eines Außengewindes (Bolzen, Schraube oder Gewindestange) hinzu.

- ![](/src/assets/images/TechDraw_ExtensionThreadBoltBottom.svg) [Hilfslinien für Außengewinde in Achsansicht hinzufügen](/TechDraw_ExtensionThreadBoltBottom/de "TechDraw ExtensionThreadBoltBottom/de"): Fügt eine Gewindelinie zur Ansicht eines Außengewindes (Schraube, Bolzen oder Gewindestange) von oben oder unten hinzu.

- ![](/src/assets/images/TechDraw_ExtensionVertexAtIntersection.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Hilfspunkte hinzufügen:

- ![](/src/assets/images/TechDraw_ExtensionVertexAtIntersection.svg) [Hilfsschnittpunkte hinzufügen](/TechDraw_ExtensionVertexAtIntersection/de "TechDraw ExtensionVertexAtIntersection/de"): Fügt Hilfspunkte an Schnittpunkten ausgewählter Kanten hinzu.

- ![](/src/assets/images/TechDraw_CommandAddOffsetVertex.svg) [Add an offset vertex](/TechDraw_CommandAddOffsetVertex/de "TechDraw CommandAddOffsetVertex/de"): Fügt einen Hilfspunkt mit einem bestimmten Versatz von einem ausgewählten Knoten hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_ExtensionDrawCosmCircle.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Hilfskreise und Hilfskreisbögen einfügen:

- ![](/src/assets/images/TechDraw_ExtensionDrawCosmCircle.svg) [HIlfskreis hinzufügen](/TechDraw_ExtensionDrawCosmCircle/de "TechDraw ExtensionDrawCosmCircle/de"): Fügt einen Hilfskreis auf Basis zweier Punkte (Mittelpunkt und Punkt auf der Kreislinie) hinzu.

- ![](/src/assets/images/TechDraw_ExtensionDrawCosmArc.svg) [Hilfsbogen hinzufügen](/TechDraw_ExtensionDrawCosmArc/de "TechDraw ExtensionDrawCosmArc/de"): Fügt einen durch drei Punkte festgelegten und gegen den Uhrzeigersinn verlaufenden Kreisbogen hinzu.

- ![](/src/assets/images/TechDraw_ExtensionDrawCosmCircle3Points.svg) [Hilfskreis über 3 Punkte hinzufügen](/TechDraw_ExtensionDrawCosmCircle3Points/de "TechDraw ExtensionDrawCosmCircle3Points/de"): Fügt einen durch 3 Punkte (der Kreislinie) festgelegten Hilfskreis hinzu.

- ![](/src/assets/images/TechDraw_ExtensionLineParallel.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Parallele oder rechtwinklige Hilfslinien hinzufügen:

- ![](/src/assets/images/TechDraw_ExtensionLineParallel.svg) [Parallele Hilfslinie hinzufügen](/TechDraw_ExtensionLineParallel/de "TechDraw ExtensionLineParallel/de"): Fügt eine Hilfslinie parallel zu einer anderen Linie durch einen Knotenpunkt verlaufend hinzu.

- ![](/src/assets/images/TechDraw_ExtensionLinePerpendicular.svg) [Rechtwinklige Hilfslinie hinzufügen](/TechDraw_ExtensionLinePerpendicular/de "TechDraw ExtensionLinePerpendicular/de"): Fügt eine Hilfslinie rechtwinklig zu einer anderen Linie durch einen Knotenpunkt verlaufend hinzu.

#### Maßeinträge

Einige der in den Ergänzungen enthaltenen Werkzeuge für Maßeinträge sind weiter oben unter [Maße](#Maße) gelistet.

- ![](/src/assets/images/TechDraw_ExtensionInsertDiameter.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Präfixsymbole einfügen:

- ![](/src/assets/images/TechDraw_ExtensionInsertDiameter.svg) ['⌀'-Symbol einfügen](/TechDraw_ExtensionInsertDiameter/de "TechDraw ExtensionInsertDiameter/de"): Fügt ein Durchmessersymbol (⌀) am Anfang des Maßtextes ein.

- ![](/src/assets/images/TechDraw_ExtensionInsertSquare.svg) ['□'-Symbol einfügen](/TechDraw_ExtensionInsertSquare/de "TechDraw ExtensionInsertSquare/de"): Fügt ein Vierkantsymbol (□) am Anfang des Maßtextes ein.

- ![](/src/assets/images/TechDraw_ExtensionInsertRepetition.svg) [Anzahl-Präfix ('n×') einfügen](/TechDraw_ExtensionInsertRepetition "TechDraw ExtensionInsertRepetition"): Fügt einen Multiplikator am Anfang des Maßtextes ein, der angibt, wie oft das zu diesem Maß gehörende Formelement in der Ansicht vorkommt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/TechDraw_ExtensionRemovePrefixChar.svg) [Präfixsymbol entfernen](/TechDraw_ExtensionRemovePrefixChar/de "TechDraw ExtensionRemovePrefixChar/de"): Entfernt alle Symbole am Anfang des Maßtextes.

- ![](/src/assets/images/TechDraw_ExtensionIncreaseDecimal.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Anzahl der Dezimalstellen ändern:

- ![](/src/assets/images/TechDraw_ExtensionIncreaseDecimal.svg) [Dezimalstellenanzahl erhöhen](/TechDraw_ExtensionIncreaseDecimal/de "TechDraw ExtensionIncreaseDecimal/de"): Erhöht die Anzahl der Dezimalstellen der Maßzahl.

- ![](/src/assets/images/TechDraw_ExtensionDecreaseDecimal.svg) [Dezimalstellenanzahl verringern](/TechDraw_ExtensionDecreaseDecimal/de "TechDraw ExtensionDecreaseDecimal/de"): verringert die Anzahl der Dezimalstellen der Maßzahl.

### Sonstiges

- ![](/src/assets/images/TechDraw_CosmeticEraser.svg) [Hilfsobjekt entfernen](/TechDraw_CosmeticEraser/de "TechDraw CosmeticEraser/de"): Entfernt Hilfsobjekte von einem Zeichnungsblatt.

### Veraltete Werkzeuge

- ![](/src/assets/images/TechDraw_ClipGroupAdd.svg) [Ansicht zu Ausschnittsgruppe hinzufügen](/TechDraw_ClipGroupAdd/de "TechDraw ClipGroupAdd/de"): Fügt eine vorhandene Ansicht zu einer Ausschnittsgruppe hinzu. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/TechDraw_ClipGroupRemove.svg) [Ansicht aus Ausschnittsgruppe entfernen](/TechDraw_ClipGroupRemove/de "TechDraw ClipGroupRemove/de"): Entfernt eine Ansicht aus einer Ausschnittsgruppe. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/TechDraw_MoveView.svg) [Ansicht verschieben](/TechDraw_MoveView/de "TechDraw MoveView/de"): Verschiebt eine Ansicht samt Inhalt auf ein anderes Blatt. Steht in 1.0 und neuer nicht mehr zur Verfügung.

## Zusatzfunktionen

- [Liniengruppe](/TechDraw_LineGroup/de "TechDraw LineGroup/de"): um das Aussehen verschiedener Linientypen zu steuern.
- [Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de"): Die definierten Standardvorlagen für die Zeichnungsseiten.
- [Schraffur](/TechDraw_Hatching/de "TechDraw Hatching/de"): Erklärung der verschiedenen Schraffurtechniken.
- [Geometrische Bemaßung und Tolerierung](/TechDraw_Geometric_dimensioning_and_tolerancing/de "TechDraw Geometric dimensioning and tolerancing/de") (GD&T): Erklärung zur Form- und Lagetolerierung.

## Einstellungen

- ![](/src/assets/images/Preferences-techdraw.svg) [Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de"): Einstellungen für die Standardwerte des Zeichnungsblattes wie Projektionsmethode, Farben, Textgrößen und Linienarten.

## Skripten

Die TechDraw-Werkzeuge können in [Makros](/Macros/de "Macros/de") oder von der [Python](/Python/de "Python/de")-Konsole aus verwendet werden. Für weitere Informationen siehe:

- [Autogenerated API documentation](https://freecad.github.io/SourceDoc/)
- [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de")
- [Editierbare Textfelder](/TechDraw_PageTemplate/de#Editierbare_Textfelder "TechDraw PageTemplate/de")

## Einschränkungen

- TechDraw-Objekte sollten nicht in der [Baumansicht](/Tree_view/de "Tree view/de") kopiert und eingefügt werden, da dies im Allgemeinen nicht gut funktioniert.
- TechDraw-Objekte sollten nicht mit der Maus in die (der?) [Baumansicht](/Tree_view/de "Tree view/de") gezogen werden.

## Anleitungen

- [TechDraw Grundlagentutorium](/Basic_TechDraw_Tutorial/de "Basic TechDraw Tutorial/de"): Einführung in die Zeichnungserstellung mit dem Arbeitsbereich TechDraw.
- [Erstellen einer neuen Vorlage](/TechDraw_TemplateHowTo/de "TechDraw TemplateHowTo/de"): Anweisungen für die Erstellung einer neuen Seitenvorlage mit Inkscape zur Verwendung im Arbeitsbereich TechDraw.
- [TechDraw Vorlagengenerator](/TechDraw_TemplateGenerator/de "TechDraw TemplateGenerator/de"): Anleitung zum Erstellen eines Makros für die Erstellung einer einfachen Vorlage.

: Ein "paar" Zeilen Kode, die ein Werkzeug ähnlich dem [Makro TemplateHelper](/Macro_TemplateHelper/de "Macro TemplateHelper/de") ergeben.

- [Maßeintrag für Bohrungswinkel](/Measurement_Of_Angles_On_Holes/de "Measurement Of Angles On Holes/de"): Anweisungen zum Hinzufügen von Mittellinien und der nachfolgenden Eintragung der Neigungswinkel von Bohrungen.
- [Verschiedenes](/TechDraw_HowTo_Page/de "TechDraw HowTo Page/de"): Anweisungen für verschiedene Einstellungen wie Mittelpunktsmarkierungen usw.
- [TechDraw Pitch Circle Tutorial](/TechDraw_Pitch_Circle_Tutorial "TechDraw Pitch Circle Tutorial"): Anweisungen zum Hinzufügen eines Teilkreises.

Video-Anleitungen von sliptonic

- TechDraw Arbeitsbereich [Part 1 (Grundlagen)](https://www.youtube.com/watch?v=7LbOmSGW9F0),[Part 2 (Abmessungen)](https://www.youtube.com/watch?v=z3w84RfvqaE),[Part 3 (Multiview)](https://www.youtube.com/watch?v=uNjXg-m38aI).
- TechDraw Arbeitsbereich [Part 4 (Abschnitt und Detail)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 (Vorlagen anpassen)](https://www.youtube.com/watch?v=kcmdJ7xa7gg).

## Entwicklung

Wie sieht die Zukunft von TechDraw aus? Siehe [TechDraw Roadmap](/TechDraw_Roadmap "TechDraw Roadmap"), um mehr zu erfahren.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/de&oldid=1492957>"
