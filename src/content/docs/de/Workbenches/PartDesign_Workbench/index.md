---
title: Arbeitsbereich PartDesign
---

![](/images/Workbench_PartDesign.svg)

Symbol des Arbeitsbereichs PartDesign

## Einleitung

Der Arbeitsbereich ![](/images/Workbench_PartDesign.svg) **PartDesign** enthält Werkzeuge zum Modellieren von Festkörperkomponenten. Sein Fokus liegt hauptsächlich auf der Erstellung mechanischer Komponenten, die hergestellt und zu einem Endprodukt montiert werden können. Dennoch können die erzeugten Körper generell für jeden anderen Zweck verwendet werden, wie z.B. [Bauwerksdatenmodellierung](/BIM_Workbench/de "BIM Workbench/de") (BIM), [Finite-Elemente-Analyse](/FEM_Workbench/de "FEM Workbench/de"), oder [CNC-Bearbeitung und 3D-Druck](/CAM_Workbench/de "CAM Workbench/de").

Der Arbeitsbereich PartDesign verwendet eine auf Formelementen basierende Methodik. Eine Komponente wird durch einen Behälter Körper dargestellt (Body object container). Der Körper legt ein lokales Koordinatensystem fest und enthält die gesamten Formelemente, die die Komponente aufbauen. Die meisten Formelemente basieren auf parametrischer Skizzen sind hinzufügend oder abziehend. Z.B. fügt das Werkzeug [Pad](/PartDesign_Pad/de "PartDesign Pad/de") die extrudierte Skizze zum sich entwickelnden Festkörper hinzu, während das Werkzeug [Vertiefung](/PartDesign_Pocket/de "PartDesign Pocket/de") die extrudierte Skizze abzieht. Jedes Formelement trägt zum Gesamtergebnis bei und baut dabei auf dem Ergebnis der vorherigen Formelemente auf. Es können auch Grundkörper (primitives) wie [Zylinder](/PartDesign_AdditiveCylinder/de "PartDesign AdditiveCylinder/de"), [Kugeln](/PartDesign_AdditiveSphere/de "PartDesign AdditiveSphere/de") usw. sowie Festkörper, die außerhalb des Körpers erstellt wurden, als Formelemente verwendet werden.

Siehe die Seite [Formelemente bearbeiten](/Feature_editing/de "Feature editing/de") für eine umfassendere Erklärung dieses Prozesses und anschließend [Erstellen eines einfachen Bauteils mit PartDesign](/Creating_a_simple_part_with_PartDesign/de "Creating a simple part with PartDesign/de"), um mit dem Erstellen von Festkörpern loszulegn.

Der Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") verwendet zum Erstellen von Festkörpern die alternative Methodik der [konstruktiven Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") (engl.: Constructive Solid Geometry, kurz CSG). Eine detaillierte Diskussion der Arbeitsbereiche Part und Part Design im Vergleich befindet sich unter [Part und Part Design](/Part_and_PartDesign/de "Part and PartDesign/de").

![](/images/PartDesign_Workbench_Example.jpg)

## Werkzeuge

Die Werkzeuge für PartDesign befinden sich alle im Menü **Part Design** und in der PartDesign-Symbolleiste, die beim Laden des Arbeitsbereichs angezeigt wird.

### Hilfswerkzeuge Part Design

- ![](/images/PartDesign_Body.png) [Körper erstellen](/PartDesign_Body/de "PartDesign Body/de"): Erstellt einen [Körper](/Body/de "Body/de") (Body object) im aktiven Dokument und aktiviert ihn.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Skizze erstellen:

: \- ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de"): erstellt eine neue Skizze auf einer ausgewählten Fläche oder Ebene. Wenn vor der Ausführung dieses Werkzeugs keine Fläche ausgewählt wurde, wird der Anwender aufgefordert, eine Ebene im Aufgaben-Bereich auszuwählen. Die Schnittstelle wechselt dann zum Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") in den Bearbeitungsmodus.

: \- ![](/images/Sketcher_MapSketch.png) [Skizze befestigen...](/Sketcher_MapSketch/de "Sketcher MapSketch/de"): Heftet eine Skizze an eine Geometrie, die am aktiven Körper ausgewählt wurde.

: \- ![](/images/Sketcher_EditSketch.png) [Skizze bearbeiten](/Sketcher_EditSketch/de "Sketcher EditSketch/de"): Öffnet die ausgewählte Skizze zum Bearbeiten.

- ![](/images/Sketcher_ValidateSketch.svg) [Skizze überprüfen](/Sketcher_ValidateSketch/de "Sketcher ValidateSketch/de"): Überprüft die Toleranz verschiedener Punkte und passt sie an.

- ![](/images/Part_CheckGeometry.svg) [Geometrie prüfen](/Part_CheckGeometry/de "Part CheckGeometry/de"): Prüft die Geometrie von ausgewählten Objekte auf Fehler.

- ![](/images/PartDesign_ShapeBinder.svg) [Formbinder erstellen](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de"): Erzeugt einen Formbinder, der Geometrie eines einzelnen übergeordneten Objekts referenziert.

- ![](/images/PartDesign_SubShapeBinder.svg) [Teilformbinder erstellen](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de"): Erstellt einen Teilformbinder der Geometrie von einem oder mehreren übergeordneten Objekten referenziert.

- ![](/images/PartDesign_Clone.svg) [Klon erstellen](/PartDesign_Clone/de "PartDesign Clone/de"): Erstellt einen Klon des ausgewählten Körpers.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Bezugselement erstellen (1.0 und davor):

: \- ![](/images/PartDesign_Plane.svg) [Bezugsebene erstellen](/PartDesign_Plane/de "PartDesign Plane/de"): Erstellt eine Bezugsebene im aktiven Körper. (1.0 und davor)

: \- ![](/images/PartDesign_Line.svg) [Bezugslinie erstellen](/PartDesign_Line/de "PartDesign Line/de"): Erstellt eine Bezugslinie im aktiven Körper. (1.0 und davor)

: \- ![](/images/PartDesign_Point.svg) [Bezugspunkt erstellen](/PartDesign_Point/de "PartDesign Point/de"): Erstellt einen Bezugspunkt im aktiven Körper. (1.0 und davor)

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Lokales Koordinatensystem erstellen](/PartDesign_CoordinateSystem/de "PartDesign CoordinateSystem/de"): Erstellt ein lokales Koordinatensystem, das an der Bezugsgeometrie im aktiven Körper angeheftet ist. (1.0 und davor)

: [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"): Diese Werkzeugen wurden durch neue [Bezugswerkzeuge](/Std_Base/de#Part_Datums "Std Base/de") ersetzt.

### Modellierungswerkzeuge Part Design

#### Additive Werkzeuge

Dies sind Werkzeuge zum Erstellen von Basisformelementen oder zum Hinzufügen von Material zu einem bestehenden Körper.

- ![](/images/PartDesign_Pad.svg) [Aufpolsterung](/PartDesign_Pad/de "PartDesign Pad/de"): Extrudiert einen Volumenkörper aus einer ausgewählten Skizze.

- ![](/images/PartDesign_Revolution.svg) [Rotation](/PartDesign_Revolution/de "PartDesign Revolution/de"): Erzeugt einen Drehkörper, durch drehen einer Skizze um eine Achse. Die Skizze muss ein geschlossenes Profil ergeben.

- ![](/images/PartDesign_AdditiveLoft.svg) [Additive Ausformung](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de"): Erzeugt einen Volumenkörper, indem ein Übergang zwischen zwei oder mehr Skizzen erstellt wird.

- ![](/images/PartDesign_AdditivePipe.svg) [Additives Rohr](/PartDesign_AdditivePipe/de "PartDesign AdditivePipe/de"): Erzeugt einen Volumenkörper, indem eine oder mehrere Skizzen entlang eines offenen oder geschlossenen Pfades ausgetragen wird.

- ![](/images/PartDesign_AdditiveHelix.svg) [Additive Helix](/PartDesign_AdditiveHelix/de "PartDesign AdditiveHelix/de"): erzeugt einen Festkörper durch Austragen einer Skizze entlang einer Wendel.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Grundkörper hinzufügen:

: \- ![](/images/PartDesign_Additive_Box.svg) [Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de"): Erstellt einen additiven Quader. [eingeführt in 0.17](/Release_notes_0.17/de "Release notes 0.17/de")

: \- ![](/images/PartDesign_Additive_Cylinder.svg) [Zylinder](/PartDesign_AdditiveCylinder/de "PartDesign AdditiveCylinder/de"): Erstellt einen additiven Zylinder.

: \- ![](/images/PartDesign_Additive_Sphere.svg) [Kugel](/PartDesign_AdditiveSphere/de "PartDesign AdditiveSphere/de"): Erstellt eine additive Kugel.

: \- ![](/images/PartDesign_Additive_Cone.svg) [Kegel](/PartDesign_AdditiveCone/de "PartDesign AdditiveCone/de"): Erstellt einen additiven Kegel. [eingeführt in 0.17](/Release_notes_0.17/de "Release notes 0.17/de")

: \- ![](/images/PartDesign_Additive_Ellipsoid.svg) [Ellipsoid](/PartDesign_AdditiveEllipsoid/de "PartDesign AdditiveEllipsoid/de"): Erstellt ein additives Ellipsoid.

: \- ![](/images/PartDesign_Additive_Torus.svg) [Torus](/PartDesign_AdditiveTorus/de "PartDesign AdditiveTorus/de"): Erstellt einen additiven Torus.

: \- ![](/images/PartDesign_Additive_Prism.svg) [Prisma](/PartDesign_AdditivePrism/de "PartDesign AdditivePrism/de"): Erstellt ein additives Prisma.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Keil](/PartDesign_AdditiveWedge/de "PartDesign AdditiveWedge/de"): Erstellt einen additiven Keil.

#### Subtraktive Werkzeuge

Dies sind Werkzeuge, um Material von einem bestehenden Körper abzuziehen.

- ![](/images/PartDesign_Pocket.svg) [Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de"): Erstellt eine Tasche aus einer ausgewählten Skizze.

- ![](/images/PartDesign_Hole.svg) [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de"): Erstellt ein Bohrungsmerkmal aus einer ausgewählten Skizze. Die Skizze muss einen oder mehrere Kreise enthalten.

- ![](/images/PartDesign_Groove.svg) [Nut](/PartDesign_Groove/de "PartDesign Groove/de"): Erzeugt eine Nut, indem eine Skizze um eine Achse gedreht wird.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Subtraktive Ausformung](/PartDesign_SubtractiveLoft/de "PartDesign SubtractiveLoft/de"):

Erzeugt eine Körperform, indem es einen Übergang zwischen zwei oder mehreren Skizzen macht und diese vom aktiven Körper subtrahiert.

- ![](/images/PartDesign_SubtractivePipe.svg) [Subtraktives Rohr](/PartDesign_SubtractivePipe/de "PartDesign SubtractivePipe/de"):

Erzeugt eine Volumenkörperform, indem eine oder mehrere Skizzen entlang eines offenen oder geschlossenen Pfades ausgetragen und diese vom aktiven Körper abgezogen wird.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Subtraktive helix](/PartDesign_SubtractiveHelix/de "PartDesign SubtractiveHelix/de"): erzeugt eine Festkörperform, indem eine Skizze entlang einer Helix ausgetragen wird, und subtrahiert sie vom aktiven Körper.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Grundkörper abziehen:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Quader](/PartDesign_SubtractiveBox/de "PartDesign SubtractiveBox/de"): fügt dem aktiven Körper eine subtraktiven Quader hinzu.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Zylinder](/PartDesign_SubtractiveCylinder/de "PartDesign SubtractiveCylinder/de"): fügt dem aktiven Körper einen subtraktiven Zylinder hinzu.

: \- ![](/images/PartDesign_Subtractive_Sphere.svg) [Kugel](/PartDesign_SubtractiveSphere/de "PartDesign SubtractiveSphere/de"): fügt dem aktiven Körper eine subtraktive Kugel hinzu.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Kegel](/PartDesign_SubtractiveCone/de "PartDesign SubtractiveCone/de"): fügt dem aktiven Körper einen subtraktiven Kegel hinzu.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Ellipsoid](/PartDesign_SubtractiveEllipsoid/de "PartDesign SubtractiveEllipsoid/de"): fügt dem aktiven Körper ein subtraktives Ellipsoid hinzu.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Torus](/PartDesign_SubtractiveTorus/de "PartDesign SubtractiveTorus/de"): fügt dem aktiven Körper einen subtraktiven Ring hinzu.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Prisma](/PartDesign_SubtractivePrism/de "PartDesign SubtractivePrism/de"): fügt dem aktiven Körper ein subtraktives Prisma hinzu.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Keil](/PartDesign_SubtractiveWedge/de "PartDesign SubtractiveWedge/de"): fügt dem aktiven Körper einen subtraktiven Keil hinzu.

#### Boolesche Operationen

- ![](/images/PartDesign_Boolean.svg) [Boolesche Operation](/PartDesign_Boolean/de "PartDesign Boolean/de"): importiert einen oder mehrere Körper oder PartDesign Klone in den aktiven Körper und führt eine Boolesche Operation aus.

### Modifikationswerkzeuge

Diese Werkzeuge modifizieren Kanten und Flächen.

- ![](/images/PartDesign_Fillet.svg) [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de"): Verrundungen (Rundungen) der Kanten des aktiven Körpers.

- ![](/images/PartDesign_Chamfer.svg) [Fase](/PartDesign_Chamfer/de "PartDesign Chamfer/de"): fast die Kanten des aktiven Körpers an.

- ![](/images/PartDesign_Draft.svg) [Entwurf](/PartDesign_Draft/de "PartDesign Draft/de"): wendet einen winkligen Entwurf auf ausgewählte Flächen des aktiven Körpers an.

- ![](/images/PartDesign_Thickness.svg) [Dicke](/PartDesign_Thickness/de "PartDesign Thickness/de"): erzeugt ein Schalenobjekt (mit konstanter Wandstärke) aus dem aktiven Körper und öffnet ausgewählte Flächen.

### Transformationswerkzeuge

Dies sind Werkzeuge zur Transformation bestehender Formelemente.

- ![](/images/PartDesign_Mirrored.svg) [Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de"): Spiegelt ein oder mehrere Formelemente.

- ![](/images/PartDesign_LinearPattern.svg) [Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de") erstellt ein lineares Muster aus einem oder mehreren Formelementen.

- ![](/images/PartDesign_PolarPattern.svg) [Polares Muster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de"): Erstellt ein polares Muster aus einem oder mehreren Formelemente.

- ![](/images/PartDesign_MultiTransform.svg) [Mehrfachtransformation](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de"): Erzeugt ein Muster durch eine beliebige Kombination der oben gelisteten Transformationen und der Transformation [Skalieren](/PartDesign_Scaled/de "PartDesign Scaled/de").
  - ![](/images/PartDesign_Scaled.svg) [Skalieren](/PartDesign_Scaled/de "PartDesign Scaled/de"): Skaliert ein oder mehrere Formelemente. Dieses steht nicht als eigenständiges Transformationswerkzeug zur Verfügung.

#### Extras

Einige zusätzliche Funktionen befinden sich im Menü Part Design:

- ![](/images/PartDesign_Sprocket.svg) [Kettenrad](/PartDesign_Sprocket/de "PartDesign Sprocket/de"): Erstellt ein Kettenradprofil, das extrudiert werden kann.

- ![](/images/PartDesign_InvoluteGear.svg) [Evolventenzahnrad](/PartDesign_InvoluteGear/de "PartDesign InvoluteGear/de"): erzeugt ein Evolventenzahnradprofil, das extrudiert werden kann.

- ![](/images/PartDesign_WizardShaft.svg) [Wellenauslegungsassistent](/PartDesign_WizardShaft/de "PartDesign WizardShaft/de"): Erzeugt eine Welle aus einer Wertetabelle und ermöglicht die Analyse von Kräften und Momenten. Die Welle wird mit einer umlaufenden Skizze erstellt, die bearbeitet werden kann.

### Kontextmenü Elemente

- [Unterdrückt](/index.php?title=PartDesign_Suppressed/de&action=edit&redlink=1 "PartDesign Suppressed/de (page does not exist)"): Checkbox zum Deaktivieren eines bestimmten Formelements ohne es zu löschen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/images/PartDesign_MoveTip.svg) [Spitze setzen](/PartDesign_MoveTip/de "PartDesign MoveTip/de"): definiert die Spitze neu, das ist das Merkmal, das außerhalb des Körpers erscheint.

- ![](/images/PartDesign_MoveFeature.svg) [Objekt in anderen Körper verschieben](/PartDesign_MoveFeature/de "PartDesign MoveFeature/de"): verschiebt die ausgewählte Skizze, Bezugsgeometrie oder das Formelement in einen anderen Körper.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Objekt nach anderem Objekt verschieben](/PartDesign_MoveFeatureInTree/de "PartDesign MoveFeatureInTree/de"): ermöglicht eine Neuordnung des Körperbaums, indem die ausgewählte Skizze, Bezugsgeometrie oder das Formelement an eine andere Position in der Formelementliste verschoben wird.

#### Mit dem Part Arbeitsbereich gemeinsam genutzte Elemente

- ![](/images/Std_SetAppearance.svg) [Aussehen](/Std_SetAppearance/de "Std SetAppearance/de"): bestimmt das Aussehen des gesamten Teils (Farbtransparenz usw.).

- ![](/images/Part_ColorPerFace.svg) [Farbe pro Fläche](/Part_ColorPerFace "Part ColorPerFace"): Weist den einzelnen Flächen von Objekten Farben zu.

### Veraltete Werkzeuge

- ![](/images/PartDesign_Migrate.svg) [Migrieren](/PartDesign_Migrate/de "PartDesign Migrate/de"): migriert Dateien von FreeCAD Versionen unter 0.17 zu Version 0.17. Dieses Werkzeug ist nicht verfügbar in 1.0 and above.

## Einstellungen

- ![](/images/Preferences-general.svg) [Einstellungen](/PartDesign_Preferences/de "PartDesign Preferences/de"): Einstellungen verfügbar für PartDesign Werkzeuge.
- [Feinabstimmung](/Fine-tuning/de "Fine-tuning/de"): Einige zusätzliche Parameter zur Feinabstimmung des PartDesign Verhaltens

## Tutorien

- [Wie FreeCAD anwenden](http://help-freecad-jpg87.fr/), eine Netzseite, die den Arbeitsablauf für die mechanische Konstruktion beschreibt.
- [Erstellen eines einfachen Teils mit PartDesign](/Creating_a_simple_part_with_PartDesign/de "Creating a simple part with PartDesign/de")
- [Grundlegende PartDesign-Anleitung 019](/Basic_Part_Design_Tutorial_019/de "Basic Part Design Tutorial 019/de")
- [PartDesign Lagerträger Tutorial I](/PartDesign_Bearingholder_Tutorial_I/de "PartDesign Bearingholder Tutorial I/de") (muss aktualisiert werden)
- [PartDesign Lagerträger Tutorial II](/PartDesign_Bearingholder_Tutorial_II/de "PartDesign Bearingholder Tutorial II/de") (muss aktualisiert werden)

## Beispiele

Ein paar Ideen, was mit den Part-Design-Werkzeugen erstellt werden kann, findet man unter: [PartDesign Beispiele](/PartDesign_Examples/de "PartDesign Examples/de").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/de&oldid=1549580>"
