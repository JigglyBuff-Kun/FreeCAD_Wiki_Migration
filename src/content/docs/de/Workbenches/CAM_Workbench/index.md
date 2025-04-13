---
title: Arbeitsbereich CAM
---

![](/images/Workbench_CAM.svg)

Symbol des Arbeitsbereichs CAM

## Einleitung

Der Arbeitsbereich ![](/images/Workbench_CAM.svg) CAM wird verwendet, um Maschinenanweisungen für [CNC-Maschinen](https://de.wikipedia.org/wiki/CNC-Maschine) aus einem FreeCAD-3D-Modell zu erstellen. Diese erzeugen reale 3D-Objekte auf CNC-Maschinen wie Fräsmaschinen, Drehbänken, Laserschneidern oder ähnlichen. Typischerweise handelt es sich bei den Anweisungen um einen [G-Code](https://de.wikipedia.org/wiki/Computerized_Numerical_Control#DIN/ISO-Programmierung_bzw._G-Code)-Dialekt. Hier ein allgemeines Beispiel: [Simulation einer Abfolge von Werkzeugwegen einer CNC-Drehbank](https://www.ange-softs.com/SIMULCNCHTML/index.html).

![](/images/Pathwb.png)

Der FreeCAD-Arbeitsbereich CAM erstellt diese Maschinenanweisungen mit folgendem Arbeitsablauf:

- Ein 3D-Modell ist das Basisobjekt, das üblicherweise mit einem oder mehreren der Arbeitsbereiche ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") oder ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de") erstellt wird.
- Ein [CAM-Auftrag](/CAM_Job/de "CAM Job/de") wird im Arbeitsbereich CAM erstellt. Dieser enthält alle erforderlichen Informationen, die zur Erstellung des benötigten G-Codes für die Bearbeitung des Arbeitsauftrags auf einer CNC-Fräse erforderlich sind: Er listet Halbzeuge (Rohmaterial), einen bestimmten [Satz Werkzeuge](/CAM_ToolBitLibraryOpen/de "CAM ToolBitLibraryOpen/de") für die Fräse und er folgt bestimmten Amweisungen, die Geschwindigkeit und Bewegungen steuern (normalerweise G-Code).
- [CAM-Werkzeuge](/CAM_Tools/de "CAM Tools/de") werden den Anforderungen der Arbeitsabläufe entsprechend ausgewählt.
- Fräsbahnen werden z.B. mit den Arbeitsabläufen für [Profil](/CAM_Profile/de "CAM Profile/de") und [Tasche 3D](/CAM_Pocket_3D/de "CAM Pocket 3D/de") erstellt. Diese CAM-Objekte verwenden FreeCADs internen G-code-Dialekt, unabhängig von der CNC-Maschine.
- Den Auftrag mit einem zur Maschine passenden G-Code exportieren. Dieser Schritt wird _Post-Processing_ (Nachbereitung) genannt. Es stehen mehrere Post-Prozessoren zur Verfügung.

## Allgemeine Konzepte

Der Arbeitsbereich CAM erzeugt G-Code, der die Bewegungsbahnen (Pfade), die zum Fräsen des durch das 3D-Modell repräsentierten Projekts auf der zu verwendenden Fräse benötigt werden, in [FreeCADs G-Code-Dialekt der CAM-Job-Operations](/CAM_scripting/de#FreeCADs_internes_G-Code-Format "CAM scripting/de") festlegt, der später in den entsprechenden Dialekt für die zu verwendende CNC-Steuerung übersetzt wird, indem der passende Postprozessor ausgewählt wird.

Der G-code wird aus den in einem CAM-Auftrag enthaltenen Anweisungen und Operationen generiert. Der Arbeitsablauf des Auftrags listet diese in der Reihenfolge ihrer Ausführung auf. Die Liste wird durch Hinzufügen von CAM-Operationen, Pfadaufbereitungen, Ergänzungsbefehlen und Pfadänderungen aus dem CAM-Menü oder den GUI-Schaltflächen ausgefüllt.

Der Arbeitsbereich CAM enthält einen Werkzeugverwalter (Bibliothek, Werkzeugtabelle), eine G-Code-Überprüfung und Simulationswerkzeuge. Es verknüpft den Postprozessor und erlaubt den Im- und Export von Auftragsvorlagen.

Der Arbeitsbereich CAM besitzt externe Abhängigkeiten einschließlich:

1. FreeCADs 3D-Modell-Einheiten sind unter **Bearbeiten → Einstellungen... → Allgemein → Sprache und Zahlenformat → Standard-Einheitensystem** festgelegt. Die Postprozessor-Konfiguration legt die endgültigen G-code-Einheiten fest.
2. Der Pfad der Makrodatei und die geometrischen Toleranzen werden unter **Bearbeiten → Einstellungen... → CAM → Auftagseinstellungen** definiert.
3. Die Farben werden unter **Bearbeiten → Einstellungen... →CAM → GUI** definiert.
4. Die Parameter der Haltestege werden unter **Bearbeiten → Einstellungen... → CAM → Aufbereitungen** definiert.
5. Dass die Qualität des 3D-Basismodells die Anforderungen des Arbeitsbereichs CAM unterstützt, wird durch Geometrie prüfen bestätigt.

## Einschränkungen

Einige aktuelle Einschränkungen, derer man sich bewusst sein sollte, sind:

- Die meisten der CAM-Werkzeuge sind keine echten 3D-Werkzeuge, sondern nur 2,5D fähig. Das bedeutet, dass sie eine festgelegte 2D-Form nehmen und diese bis zu einer bestimmten Tiefe herunterschneiden können. Es gibt jedoch zwei Werkzeuge, die echte 3D-Pfade erzeugen: ![](/images/CAM_3DPocket.svg) [3D-Tasche](/CAM_Pocket_3D/de "CAM Pocket 3D/de") und ![](/images/CAM_Surface.svg) [3D-Oberfläche](/CAM_Surface/de "CAM Surface/de") (das im November 2020 noch immer eine [experimentelle Funktion](/CAM_experimental/de "CAM experimental/de") ist).
- Der größte Teil des Arbeitsbereichs CAM ist für eine einfache, standardmäßige 3-Achsen- (xyz) CNC-Fräse ausgelegt, aber Dreh-(maschinen-)werkzeuge sind seit 0.19_pre in Entwicklung.
- Die meisten Operationen im Arbeitsbereich CAM geben nur Pfade zurück, die auf einem Standard-Schaftfräser-Werkzeug bzw. -Bit basieren, ohne Rücksicht auf einen, in einer bestimmten Werkzeugsteuerung zugewiesenen, Werkzeug- bzw. Bit-Typ, mit Ausnahme der Operationen ![](/images/CAM_Engrave.svg) [Gravur](/CAM_Engrave/de "CAM Engrave/de") und ![](/images/CAM_Surface.svg) [3D-Oberfläche](/CAM_Surface/de "CAM Surface/de").
- Die Operationen innerhalb des Arbeitsbereichs CAM kennen keine Spannvorrichtungen, die zur Befestigung des Modells an einer Maschine verwendet werden. Überprüfe und simuliere daher die erzeugten Bahnen, bevor der Code an deine Maschine gesendet wird. Wenn nötig, eine Spannvorrichtungen in FreeCAD modellieren, um die erzeugten Bahnen besser überprüfen zu können. Auf mögliche Kollisionen mit Spannern oder anderen Hindernissen entlang der Bahnen achten.

## Einheiten

Der Umgang mit Einheiten im Arbeitsbereich CAM kann verwirrend sein. Es gibt mehrere Punkte, die verstanden werden müssen:

1. FreeCADs Basiseinheiten für Länge und Zeit sind 'mm' und 's' bzw. Geschwindigkeit ist 'mm/s'. Diese Einheiten speichert FreeCAD intern, unabhängig von allem anderem.
2. Das standardmäßige Einheitensystem nutzt diese Basiseinheiten. Wird das Standard-Einheitensystem benutzt und eine Vorschubgeschwindigkeit ohne Einheit eingegeben, wird sie als 'mm/s' interpretiert.
3. Die meisten CNC-Maschinen erwarten aber Vorschubgeschwindigkeiten in 'mm/min' oder 'Zoll/min'. Die meisten Postprozessoren konvertieren die Einheiten automatisch, wenn sie den Maschinencode generieren.

Schemata:

1. Schemaänderungen in den Einstellungen ändert die Standardeinheitszeichenkette für die Eingabefelder. Wenn ein CAM-Anwender es vorzieht, metrisch zu konstruieren, wird dringend empfohlen, das Schema "Metrische Kleinteile & CNC" zu verwenden. Wird in US-Einheiten konstruiert, funktionieren entweder Britisches Dezimal und US-Bauwesen.
2. Ändern des bevorzugten Einheitenschemas hat keine Auswirkung auf die Ausgabe, hilft aber, Eingabefehler zu vermeiden.

Ausgabe:

1. Die Generierung der korrekten Einheiten in der Ausgabe liegt in der Verantwortung des Postprozessors und geschieht nur bei diesem Vorgang.
2. Die Einheiten für die Maschine bei der Ausgabe sind komplett unabhängig von der gewählten Einheitendarstellung.
3. Postprozessoren erzeugen entweder metrische Einheiten (G21), imperiale Einheiten (G20) oder sind konfigurierbar.
4. Konfigurierbare Postprozessoren generieren standardmäßig metrische Einheiten (G21).
5. Soll der konfigurierbare Postprozessor imperialen G-code (G20) ausgegeben, muss das korrekte Argument in der Job-Output-Konfiguration (d.h. --inches for linuxcnc) eingestellt werden. Dies kann in einer Auftragsvorlage gespeichert werden und als Standardvorlage eingestellt werden, um sie für zukünftige Aufträge automatisch zu verwenden.

CAM Untersuchen:

1. Wird das Werkzeug CAM Inspect zum Betrachten des G-codes eingesetzt, wird als Einheit 'mm/s' angezeigt, da der Postprozessor noch nicht angewendet wurde.

## Höhen und Tiefen

Viele der Befehle haben unterschiedliche Höhen und Tiefen:

![](/images/Path-DepthsAndHeights.gif)

Visuelle Referenz für Tiefeneinstellungen

## Befehle

Einige Befehle sind experimentell und standardmäßig nicht verfügbar. Um sie zu aktivieren, siehe [CAM experimentell](/CAM_experimental/de "CAM experimental/de").

### Projektbefehle

- ![](/images/CAM_Job.svg) [Auftrag](/CAM_Job/de "CAM Job/de"): Erstellt einen neuen CNC-Auftrag.

- ![](/images/CAM_Post.svg) [Nachbereitung](/CAM_Post/de "CAM Post/de"): Exportiert ein Projekt in G-code.

- ![](/images/CAM_Sanity.svg) [CAM-Auftrag auf typische Fehler überprüfen](/CAM_Sanity/de "CAM Sanity/de"): Überprüft den ausgewählten Auftrag auf fehlende Werte.

- ![](/images/CAM_ExportTemplate.svg) [Exportvorlage](/CAM_ExportTemplate/de "CAM ExportTemplate/de"): Exportiert den aktuellen Auftrag als Vorlage.

### Werkzeugbefehle

- ![](/images/CAM_Inspect.svg) [CAM-Befehle untersuchen](/CAM_Inspect/de "CAM Inspect/de"): Zeigt den G-code zur Überprüfung an.

- ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator/de "CAM Simulator/de"): Zeigt die Fräsbearbeitung wie sie auf der Maschine durchgeführt wird.

- ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL/de "CAM SimulatorGL/de"): Aktiviert den neuen, verbesserten CAM-Simulator. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/images/CAM_SelectLoop.svg) [Beenden der Auswahlschleife](/CAM_SelectLoop/de "CAM SelectLoop/de"): Vervollständigt eine Schleife aus zwei ausgewählten Kanten.

- ![](/images/CAM_OpActive.svg) [Umschalten des aktiven Zustands der Bearbeitung](/CAM_OpActiveToggle/de "CAM OpActiveToggle/de"): Aktiviert oder deaktiviert eine Pfadbearbeitung.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

- ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Grundlegende Bearbeitungen

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile/de "CAM Profile/de"): Erzeugt eine Profilbearbeitung des gesamten Modells oder von einer oder mehreren ausgewählten Flächen oder Kanten.

- ![](/images/CAM_Pocket.svg) [Taschenform](/CAM_Pocket_Shape/de "CAM Pocket Shape/de"): Erzeugt eine Taschenbearbeitung aus einer oder mehreren ausgewählten Taschen.

- ![](/images/CAM_Drilling.svg) [Bohren](/CAM_Drilling/de "CAM Drilling/de"): Führt einen Bohrzyklus durch.

- ![](/images/CAM_MillFace.svg) [Fläche](/CAM_MillFace/de "CAM MillFace/de"): Erzeugt einen Oberflächenpfad

- ![](/images/CAM_Helix.svg) [Helix](/CAM_Helix/de "CAM Helix/de"): Erzeugt eine wendelförmige Bahn.

- ![](/images/CAM_Adaptive.svg) [Adaptiv](/CAM_Adaptive/de "CAM Adaptive/de"): Erstellt eine adaptive Räum- und Profilierungsbearbeitung.

- ![](/images/CAM_Slot.svg) [Nut](/CAM_Slot/de "CAM Slot/de"): Erzeugt eine Nutenbearbeitung aus ausgewählten Formelementen oder benutzerdefinierten Punkten. [_Experimentell_](/CAM_experimental/de "CAM experimental/de").

- ![](/images/CAM_Engrave.svg) [Gravieren](/CAM_Engrave/de "CAM Engrave/de"): Erstellt einen Gravurpfad.

- ![](/images/CAM_Deburr.svg) [Entgraten](/CAM_Deburr/de "CAM Deburr/de"): Erstellt eine Bahn zum Entgraten.

- ![](/images/CAM_Vcarve.svg) [VGravur](/CAM_Vcarve/de "CAM Vcarve/de"): Erzeugt einen Gravurpfad unter Verwendung einer V-Werkzeugform.

### 3D-Bearbeitungen

- ![](/images/CAM_Pocket_3D.svg) [3D-Tasche](/CAM_Pocket_3D/de "CAM Pocket 3D/de"): Erzeugt einen Pfad für eine 3D-Tasche.

- ![](/images/CAM_Surface.svg) [3D Oberfläche](/CAM_Surface/de "CAM Surface/de"): Erstellt einen Pfad für eine 3D-Oberfläche. [_Experimentell_](/CAM_experimental/de "CAM experimental/de").

- ![](/images/CAM_Waterline.svg) [Wasserlinie](/CAM_Waterline/de "CAM Waterline/de"): Erzeugt einen Wasserlinienpfad für eine 3D-Oberfläche. [_Experimentell_](/CAM_experimental/de "CAM experimental/de").

### Pfadaufbereitung

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Begrenzung](/CAM_DressupPathBoundary/de "CAM DressupPathBoundary/de"): Fügt eine Randaufbereitungsänderung einem ausgewählten Pfad hinzu.

- ![](/images/CAM_DressupDogbone.svg) [Hundeknochen](/CAM_DressupDogbone/de "CAM DressupDogbone/de"): Fügt eine Hundeknochen-Aufbereitungsänderung einem ausgewählten Pfad hinzu.

- ![](/images/CAM_DressupDragKnife.svg) [Schleppmesser](/CAM_DressupDragKnife/de "CAM DressupDragKnife/de"): Fügt eine Schleppmesser-Aufbereitungsänderung einem ausgewählten Pfad hinzu.

- ![](/images/CAM_DressupLeadInOut.svg) [An/Abfahren](/CAM_DressupLeadInOut/de "CAM DressupLeadInOut/de"): Fügt einen Anfahr- und/oder Abfahrpunkt einem ausgewählten Pfad hinzu.

- ![](/images/CAM_DressupRampEntry.svg) [Eingangsrampe](/CAM_DressupRampEntry/de "CAM DressupRampEntry/de"): Fügt dem ausgewählten Pfad eine vertikale Anfahrrampe hinzu.

- ![](/images/CAM_DressupTag.svg) [Haltesteg](/CAM_DressupTag/de "CAM DressupTag/de"): Fügt dem ausgewählten Pfad eine Erweiterung für Haltestege zu.

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Ergänzende Befehle

- ![](/images/CAM_Fixture.svg) [Vorrichtung](/CAM_Fixture/de "CAM Fixture/de"): Ändert die Position der Vorrichtung.

- ![](/images/CAM_Comment.svg) [Kommentar](/CAM_Comment/de "CAM Comment/de"): Fügt einen Kommentar in den G-Code eines Pfades ein.

- ![](/images/CAM_Stop.svg) [Halt](/CAM_Stop/de "CAM Stop/de"): Fügt einen Halt der Maschine ein.

- ![](/images/CAM_Custom.svg) [Benutzerdefiniert](/CAM_Custom/de "CAM Custom/de"): Fügt benutzerdefinierten G-Code ein.

- ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

- ![](/images/CAM_Shape.svg) [Aus Form](/CAM_Shape/de "CAM Shape/de"): Erstellt ein Pfadobjekt aus einem gewählten Part Objekt. [_Experimentell_](/CAM_experimental/de "CAM experimental/de").

### Pfadänderung

- ![](/images/CAM_Copy.svg) [Kopieren der Bearbeitung im Auftrag](/CAM_Copy/de "CAM Copy/de"): Erstellt eine parametrische Kopie eines gewählten Pfadobjekts.

- ![](/images/CAM_Array.svg) [Anordnung](/CAM_Array "CAM Array"): Erstellt eine Anordnung durch Duplizieren eines ausgewählten Pfades.

- ![](/images/CAM_SimpleCopy.svg) [Einfache Kopie](/CAM_SimpleCopy/de "CAM SimpleCopy/de"): Erstellt eine nichtparametrische Kopie eines ausgewählten Pfadobjekts.

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Sonstiges

- ![](/images/CAM_Area.svg) [Bereich](/CAM_Area/de "CAM Area/de"): Erstellt einen Formelementbereich aus gewählten Objekten. [_Experimentell_](/CAM_experimental/de "CAM experimental/de").

- ![](/images/CAM_Area_Workplane.svg) [Bereich Arbeitsebene](/CAM_Area_Workplane/de "CAM Area Workplane/de"): Erstellt eine Formelementbereich Arbeitsebene. [_Experimentell_](/CAM_experimental/de "CAM experimental/de").

## ToolBit Architektur

Verwalte Werkzeuge, Bits und die Werkzeugbibliothek. Basiert auf der ToolBit Architektur.

- [CAM Werkzeuge](/CAM_Tools/de "CAM Tools/de")
- [CAM WerkzeugForm](/CAM_ToolShape/de "CAM ToolShape/de")
- [CAM WerkzeugBit](/CAM_ToolBit/de "CAM ToolBit/de")
- [CAM WerkzeugBit Bibliothek](/CAM_ToolBit_Library/de "CAM ToolBit Library/de")
- [CAM WerkzeugController](/CAM_ToolController/de "CAM ToolController/de")

## Andere

- [CAM HäufigGestellteFragen](/CAM_FAQ/de "CAM FAQ/de"): Der Arbeitsbereich CAM teilt viele Konzepte mit anderen CAM-Softwarepaketen, hat aber seine eigenen Besonderheiten. Wenn etwas nicht stimmt, ist dies vielleicht ein guter Anfang.
- [CAM SetupSheet](/CAM_SetupSheet/de "CAM SetupSheet/de"): Es kann ein SetupSheet verwendet werden zum Anpassen, wie die Werte verschiedener Eigenschaften von Operationen berechnet werden.
- [CAM Postprozessor Anpassung](/CAM_Postprocessor_Customization/de "CAM Postprocessor Customization/de"): Hast Du eine spezielle Maschine, die die Daten der vorhandenen Postprozessoren nicht verwenden kann, musst Du eventuell deinen eigenen Postprozessoren schreiben.
- [CAM VierteAchse](/CAM_fourth_axis/de "CAM fourth axis/de"): Experimentelles Vier-Achs-Fräsen.

## Einstellungen

- ![](/images/Preferences-cam.svg) [Einstellungen...](/CAM_Preferences "CAM Preferences"): Verfügbare Einstellungen für den Arbeitsbereich CAM.

## Skripten

Siehe [CAM Skripten](/CAM_scripting/de "CAM scripting/de").

## Anleitungen

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/de&oldid=1504425>"
