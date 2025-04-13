---
title: Arbeitsbereich Part
---

![](/src/assets/images/Workbench_Part.svg)

Symbol des Arbeitsbereichs Part

## Einleitung

Der Arbeitsbereich ![](/src/assets/images/Workbench_Part.svg) **Part** verwendet einen herkömmlichen Arbeitsabläuf entsprechend der Methodik [konstruktive Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") (engl.: Constructive Solid Geometry, kurz CSG). In diesem Arbeitsablauf ist jedes Objekt ein unabhängiger Festkörper. Der Arbeitsbereich Part kann diese aus parametrisch festgelegten [Skizzen](/Sketcher_Workbench/de "Sketcher Workbench/de") und dem Einsatz von Werkzeugen wie [Extrudieren...](/Part_Extrude/de "Part Extrude/de"), [Drehen...](/Part_Revolve/de "Part Revolve/de"), [Ausformung...](/Part_Loft/de "Part Loft/de") usw. erstellen. Außerdem können auch Grundkörper wie [Quader](/Part_Box/de "Part Box/de"), [Zylinder](/Part_Cylinder/de "Part Cylinder/de") usw. erstellt werden. Diese Objekte können durch [boolesche Verknüpfungen](/Part_Boolean/de "Part Boolean/de") kombiniert werden, um komplexere Festkörper zu erstellen.

Der Arbeitsbereiche Part kann auch Objekte erstellen, die keine Festkörper sind wie Flächen, Hüllen oder Objekte, die nur aus Kanten und Punkten bestehen. Er enthält auch unterschiedliche Werkzeuge für allgemeine Aufgaben wie das Bearbeiten von Geometrien, Prüfen von Geometrien und Erstellen von Kopien.

Der Arbeitsbereich ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwendet einen alternativen Arbeitsabläufe zum Erstellen von Festkörpern. Eine detaillierte Diskussion der Arbeitsbereiche Part und Part Design im Vergleich befindet sich unter [Part und Part Design](/Part_and_PartDesign/de "Part and PartDesign/de").

![](/src/assets/images/Part_Workbench_Example.jpg)

## Werkzeuge

### Symbolleiste Volumenkörper

- ![](/src/assets/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de"): Erstellt einen Quader.

- ![](/src/assets/images/Part_Cylinder.svg) [Zylinder](/Part_Cylinder/de "Part Cylinder/de"): Erstellt einen Zylinder.

- ![](/src/assets/images/Part_Sphere.svg) [Kugel](/Part_Sphere/de "Part Sphere/de"): Erstellt eine Kugel.

- ![](/src/assets/images/Part_Cone.svg) [Kegel](/Part_Cone/de "Part Cone/de"): Erstellt einen Kegel.

- ![](/src/assets/images/Part_Torus.svg) [Torus](/Part_Torus/de "Part Torus/de"): Erstellt einen Torus.

- ![](/src/assets/images/Part_Tube.svg) [Rohr](/Part_Tube/de "Part Tube/de"): Erstellt ein Rohr (Hohlzylinder).

- ![](/src/assets/images/Part_Primitives.svg) [Grundelemente erstellen...](/Part_Primitives/de "Part Primitives/de"): Ein Werkzeug zum Erstellen eines der folgenden Grundelemente:

- ![](/src/assets/images/Part_Plane.svg) [Ebene](/Part_Plane/de "Part Plane/de"): Erstellt eine Ebene.

- ![](/src/assets/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de"): Erstellt einen Quader. Dieses Objekt kann auch mit dem Werkzeug [Quader](/Part_Box/de "Part Box/de") erstellt werden.

- ![](/src/assets/images/Part_Cylinder.svg) [Zylinder](/Part_Cylinder/de "Part Cylinder/de"): Erstellt einen Zylinder. Dieses Objekt kann auch mit dem Werkzeug [Zylinder](/Part_Cylinder/de "Part Cylinder/de") erstellt werden.

- ![](/src/assets/images/Part_Cone.svg) [Kegel](/Part_Cone/de "Part Cone/de"): Erstellt einen Kegel. Dieses Objekt kann auch mit dem Werkzeug [Kegel](/Part_Cone/de "Part Cone/de") erstellt werden.

- ![](/src/assets/images/Part_Sphere.svg) [Kugel](/Part_Sphere/de "Part Sphere/de"): Erstellt eine Kugel. Dieses Objekt kann auch mit dem Werkzeug [Kugel](/Part_Sphere/de "Part Sphere/de") erstellt werden.

- ![](/src/assets/images/Part_Ellipsoid.svg) [Ellipsoid](/Part_Ellipsoid/de "Part Ellipsoid/de"): Erstellt einen Ellipsoid.

- ![](/src/assets/images/Part_Torus.svg) [Torus](/Part_Torus/de "Part Torus/de"): Erstellt einen Torus. Dieses Objekt kann auch mit dem Werkzeug [Torus](/Part_Torus/de "Part Torus/de") erstellt werden.

- ![](/src/assets/images/Part_Prism.svg) [Prisma](/Part_Prism/de "Part Prism/de"): Erstellt ein Prisma.

- ![](/src/assets/images/Part_Wedge.svg) [Keil](/Part_Wedge/de "Part Wedge/de"): Erstellt einen Keil.

- ![](/src/assets/images/Part_Helix.svg) [Helix](/Part_Helix/de "Part Helix/de"): Erstellt eine Wendel (Helix).

- ![](/src/assets/images/Part_Spiral.svg) [Spirale](/Part_Spiral/de "Part Spiral/de"): Erstellt einen Spirale.

- ![](/src/assets/images/Part_Circle.svg) [Kreis](/Part_Circle/de "Part Circle/de"): Erstellt einen kreisförmigen Bogen.

- ![](/src/assets/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse/de "Part Ellipse/de"): Erstellt einen elliptischen Bogen.

- ![](/src/assets/images/Part_Point.svg) [Punkt](/Part_Point/de "Part Point/de"): Erstellt einen Punkt (Knoten).

- ![](/src/assets/images/Part_Line.svg) [Linie](/Part_Line/de "Part Line/de"): Erstellt eine Linie.

- ![](/src/assets/images/Part_RegularPolygon.svg) [Regelmäßiges Polygon](/Part_RegularPolygon/de "Part RegularPolygon/de"): Erstellt ein regelmäßiges Vieleck (Polygon).

- ![](/src/assets/images/Part_Builder.svg) [Formgenerator](/Part_Builder/de "Part Builder/de"): Erstellt Formen aus verschiedenen Grundelementen.

### Symbolleiste Part-Werkzeuge

- ![](/src/assets/images/Sketcher_NewSketch.svg) [Skizze erstellen](/Sketcher_NewSketch/de "Sketcher NewSketch/de"): Erstellt eine neue Skizze und öffnet den [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de"), um sie zu bearbeiten.

- ![](/src/assets/images/Part_Extrude.svg) [Extrudieren](/Part_Extrude/de "Part Extrude/de"): Extrudiert ebene Flächen.

- ![](/src/assets/images/Part_Revolve.svg) [Drehen](/Part_Revolve/de "Part Revolve/de"): Erstellt einen Festkörper, indem ein Objekt (das kein Festkörper ist) um eine Achse gedreht wird.

- ![](/src/assets/images/Part_Mirror.svg) [Spiegeln](/Part_Mirror/de "Part Mirror/de"): Spiegelt das ausgewählte Objekt über eine Spiegelebene.

- ![](/src/assets/images/Part_Scale.svg) [Skalieren](/Part_Scale/de "Part Scale/de"): Skaliert eine oder mehrere Formen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Part_Fillet.svg) [Verrundung](/Part_Fillet/de "Part Fillet/de"): Verrundet die Kanten eines Objekts.

- ![](/src/assets/images/Part_Chamfer.svg) [Fase](/Part_Chamfer/de "Part Chamfer/de"): Erstellt Fasen an den Kanten eines Objekts.

- ![](/src/assets/images/Part_MakeFace.svg) [Fläche aus Linienzügen](/Part_MakeFace/de "Part MakeFace/de"): Erstellt eine Fläche aus einem Satz geschlossener Drähte (Konturen/Linienzüge).

- ![](/src/assets/images/Part_RuledSurface.svg) [Regelfläche](/Part_RuledSurface/de "Part RuledSurface/de"): Erstellt eine Regelfläche.

- ![](/src/assets/images/Part_Loft.svg) [Ausformung](/Part_Loft/de "Part Loft/de"): Erstellt eine Ausformung von einem Profil zu einem anderen.

- ![](/src/assets/images/Part_Sweep.svg) [Austragung](/Part_Sweep/de "Part Sweep/de"): Erstellt eine Austragung eines oder mehrerer Profile entlang eines Pfades.

- ![](/src/assets/images/Part_Section.svg) [Schnittkurve](/Part_Section/de "Part Section/de"): Erstellt Schnittkurven durch Überschneiden eines Objekts mit einem anderen Objekt.

- ![](/src/assets/images/Part_CrossSections.svg) [Querschnitte...](/Part_CrossSections/de "Part CrossSections/de"): Erzeugt einen oder mehrere Querschnitte durch ein Objekt.

- ![](/src/assets/images/Part_Offset.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Versatz:

- ![](/src/assets/images/Part_Offset.svg) [3D Versatz](/Part_Offset/de "Part Offset/de"): Konstruiert eine parallele Form in einem bestimmten Abstand zu einem Original.

- ![](/src/assets/images/Part_Offset2D.svg) [2D Versatz](/Part_Offset2D/de "Part Offset2D/de"): Konstruiert einen parallelen Draht in einem bestimmten Abstand von einem Original oder vergrößert/schrumpft eine ebene Fläche.

- ![](/src/assets/images/Part_Thickness.svg) [Dicke](/Part_Thickness/de "Part Thickness/de"): Höhlt einen Festkörper aus.

- ![](/src/assets/images/Part_ProjectionOnSurface.svg) [Projektion auf Oberfläche](/Part_ProjectionOnSurface/de "Part ProjectionOnSurface/de"): Projiziert ein Logo, einen Text oder eine beliebige Fläche, Draht, Kante auf eine Oberfläche.

- ![](/src/assets/images/Part_ColorPerFace.svg) [Farbe pro Fläche](/Part_ColorPerFace "Part ColorPerFace"): Weist den einzelnen Flächen von Objekten Farben zu.

### Symbolleiste Boolesche Verknüpfung

- ![](/src/assets/images/Part_Compound.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Verbund:

- ![](/src/assets/images/Part_Compound.svg) [Verbund erstellen](/Part_Compound/de "Part Compound/de"): Erstellt einen Verbund aus den ausgewählten Objekten.

- ![](/src/assets/images/Part_ExplodeCompound.svg) [Verbund sprengen](/Part_ExplodeCompound/de "Part ExplodeCompound/de"): Teilt Verbundobjekte auf.

- ![](/src/assets/images/Part_CompoundFilter.svg) [Verbundfilter](/Part_CompoundFilter/de "Part CompoundFilter/de"): Entnimmt die einzelnen Stücke aus Verbundobjekten.

- ![](/src/assets/images/Part_Boolean.svg) [Boolesche Verknüpfungen](/Part_Boolean/de "Part Boolean/de"): Führt boolesche Verknüpfungen mit zwei Objekten durch.

- ![](/src/assets/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de"): Beschneidet ein Objekt mit einem anderen.

- ![](/src/assets/images/Part_Fuse.svg) [Vereinigung](/Part_Fuse/de "Part Fuse/de"): Vereinigt zwei oder mehr Objekte.

- ![](/src/assets/images/Part_Common.svg) [Schnitt](/Part_Common/de "Part Common/de"): Entnimmt den gemeinsamen Teil (Schnittmenge) von zwei Objekten.

- ![](/src/assets/images/Part_JoinConnect.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Objekte verbinden:

- ![](/src/assets/images/Part_JoinConnect.svg) [Objekte verbinden](/Part_JoinConnect/de "Part JoinConnect/de"): Vereinigt die umschlossenen Volumen von Hohlobjekten.

- ![](/src/assets/images/Part_JoinEmbed.svg) [Objekt einbetten](/Part_JoinEmbed/de "Part JoinEmbed/de"): Bettet ein Hohlobjekt in ein anderes Hohlobjekt ein.

- ![](/src/assets/images/Part_JoinCutout.svg) [Für Objekt ausschneiden](/Part_JoinCutout/de "Part JoinCutout/de"): Erzeugt einen Ausschnitt in einer Wand eines Objekts für ein anderes Hohlobjekt.

- ![](/src/assets/images/Part_BooleanFragments.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Aufteilung:

- ![](/src/assets/images/Part_BooleanFragments.svg) [BoolescheFragmente](/Part_BooleanFragments/de "Part BooleanFragments/de"): erzeugt alle Teile, die durch boolesche Operationen erhalten werden.

- ![](/src/assets/images/Part_SliceApart.svg) [Auseinanderschneiden](/Part_SliceApart/de "Part SliceApart/de"): Zerschneidet und teilt ein Objekt, indem es mit anderen Objekten geschnitten wird.

- ![](/src/assets/images/Part_Slice.svg) [Schneiden zu Verbund](/Part_Slice/de "Part Slice/de"): Zerschneidet ein Objekt, indem es mit anderen Objekten geschnitten wird.

- ![](/src/assets/images/Part_XOR.svg) [Boolesches exklusives Oder (XOR)](/Part_XOR/de "Part XOR/de"): Entfernt Bereiche, die zu einer geraden Anzahl von Objekten gehören.

- ![](/src/assets/images/Part_CheckGeometry.svg) [Geometrie prüfen](/Part_CheckGeometry/de "Part CheckGeometry/de"): Prüft die Geometrie von ausgewählten Objekte auf Fehler.

- ![](/src/assets/images/Part_Defeaturing.svg) [Defeaturing](/Part_Defeaturing/de "Part Defeaturing/de"): Entfernt Formelemente aus einem Objekt.

### Andere Werkzeuge

- ![](/src/assets/images/Part_Import.svg) [Aus CAD-Datei importieren...](/Part_Import/de "Part Import/de"): Importiert aus \*.IGES-, \*.STEP-, oder \*.BREP-Dateien.

- ![](/src/assets/images/Part_Export.svg) [In CAD-Datei exportieren...](/Part_Export/de "Part Export/de"): Exportiert in \*.IGES-, \*.STEP-, oder \*.BREP- Dateien.

- ![](/src/assets/images/Part_BoxSelection.svg) [Rechteckauswahl](/Part_BoxSelection/de "Part BoxSelection/de"): Wählt Flächen mit einem Auswahlrechteck aus.

- ![](/src/assets/images/Part_ShapeFromMesh.svg) [Form aus Dreiecksnetz erstellen](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de"): Erstellt Formen aus Netzobjekten.

- ![](/src/assets/images/Part_PointsFromMesh.svg) [Punktobjekt aus Geometrie erstellen](/Part_PointsFromMesh/de "Part PointsFromMesh/de"): erstellt Punkteobjekte aus geometrischen Objekten.

- ![](/src/assets/images/Part_MakeSolid.svg)[In Festkörper umwandeln](/Part_MakeSolid/de "Part MakeSolid/de"): Erstellt Festkörper aus Formobjekten.

- ![](/src/assets/images/Part_ReverseShape.svg) [Formen umkehren](/Part_ReverseShape/de "Part ReverseShape/de"): Erstellt aus ausgewählten Objekten parametrische Kopien mit umgekehrten Flächennormalen.

- Erstelle eine Kopie:

- ![](/src/assets/images/Part_SimpleCopy.svg) [Einfache Kopie erstellen](/Part_SimpleCopy/de "Part SimpleCopy/de"): Erstellt nichtparametrische Kopien ausgewählter Objekte.

- ![](/src/assets/images/Part_TransformedCopy.svg) [Transformierte Kopie erstellen](/Part_TransformedCopy/de "Part TransformedCopy/de"): Erstellt nichtparametrische Kopien von Objekten. Dies ist gedacht für Objekte, die in Behältern eingebettet sind.

- ![](/src/assets/images/Part_ElementCopy.svg) [Formelement-Kopie erstellen](/Part_ElementCopy/de "Part ElementCopy/de"): Erstellt nichtparametrische Kopien von Unterelementen: Knoten, Kanten und Flächen.

- ![](/src/assets/images/Part_RefineShape.svg) [Form aufbereiten](/Part_RefineShape/de "Part RefineShape/de"): Erstellt aus ausgewählten Objekten parametrische Kopien mit aufbereiteten Formen. Dies entfernt überflüssige Kanten von ebenen und zylindrischen Flächen.

- ![](/src/assets/images/Part_EditAttachment.svg) [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de"): Befestigt ein Objekt an ein oder mehrere andere Objekte.

## Veraltete Werkzeuge

### Messwerkzeuge

Das Werkzeug ![](/src/assets/images/Std_Measure.svg) [Std Measure](/Std_Measure/de "Std Measure/de") ersetzt die folgend gelisteten Werkzeuge. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Part_Measure_Linear.svg) [Linear messen](/Part_Measure_Linear/de "Part Measure Linear/de") Erzeugt eine lineare Messung. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Part_Measure_Angular.svg) [Winkel messen](/Part_Measure_Angular/de "Part Measure Angular/de") Erzeugt eine Winkelmessung. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Part_Measure_Refresh.svg) [Messung aktualisieren](/Part_Measure_Refresh/de "Part Measure Refresh/de") Aktualisiert alle Messungen. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Part_Measure_Clear_All.svg) [Alles löschen](/Part_Measure_Clear_All/de "Part Measure Clear All/de") und [Messung löschen](/View_Measure_Clear_All/de "View Measure Clear All/de") Löscht alle Messungen. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Part_Measure_Toggle_All.svg) [Messung AlleUmschalten](/Part_Measure_Toggle_All/de "Part Measure Toggle All/de") und [Ansicht Messen alle löschen](/View_Measure_Toggle_All/de "View Measure Toggle All/de"): Zeigt alle Messungen an oder blendet sie aus. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Part_Measure_Toggle_3D.svg) [3D umschalten](/Part_Measure_Toggle_3D/de "Part Measure Toggle 3D/de") Zeigt 3D-Messungen an oder blendet sie aus. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Part_Measure_Toggle_Delta.svg) [Delta umschalten](/Part_Measure_Toggle_Delta/de "Part Measure Toggle Delta/de") Zeigt oder blendet Delta Messungen aus. Steht in 1.0 und neuer nicht mehr zur Verfügung.

## Einstellungen

- ![](/src/assets/images/Preferences-part_design.svg) [Einstellungen](/PartDesign_Preferences/de "PartDesign Preferences/de"): Einstellungen für den Arbeitsbereich Part.
- ![](/src/assets/images/Preferences-import-export.svg) [Import-/Export-Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de"): Einstellungen für den Import aus unterschiedlichen und den Export in unterschiedliche Dateiformate.
- [Feinabstimmung](/Fine-tuning/de#Arbeitsbereich_Part "Fine-tuning/de"): Einige zusätzliche Parameter zur Feineinstellung des Verhaltens des Arbeitsbereichs Part.

## Skripten

Siehe [Part Skripten](/Part_scripting/de "Part scripting/de")

## Tutorien

- [Import aus STL oder OBJ](/Import_from_STL_or_OBJ/de "Import from STL or OBJ/de"): Kurzanleitung zum Import von STL/OBJ Dateien in FreeCAD
- [Export nach STL oder OBJ](/Export_to_STL_or_OBJ/de "Export to STL or OBJ/de"): Kurzanleitung zum Export von STL/OBJ Dateien aus FreeCAD
- [Whiffle Ball Tutorium](/Whiffle_Ball_tutorial/de "Whiffle Ball tutorial/de"): Kurzanleitung zur Verwendung des Part-Arbeitsbereiches

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/de&oldid=1501905>"
