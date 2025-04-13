---
title: Import Export Einstellungen
---
## Einleitung

FreeCAD kann viele Dateiformate importieren und exportieren. Für einige Formate gibt es spezielle Einstellungen. Diese finden sich im [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de"), im Menü **Bearbeiten → Einstellungen...** auswählen und dann **Import-Export**.

Nicht alle Seiten für Import- und Exporteinstellungen sind standardmäßig verfügbar. Für einige muss zuerst ein Arbeitsbereich geladen werden.

Diese Seite wurde für Version 1.0 aktualisiert.

## Hinweise

### TechDraw Seiten

Die hier aufgeführten DXF und SVG Einstellungen werden nicht verwendet von den ![](/images/TechDraw_ExportPageSVG.svg) [Seite als SVG exportieren](/TechDraw_ExportPageSVG/de "TechDraw ExportPageSVG/de") und ![](/images/TechDraw_ExportPageDXF.svg) [Seite als DXF exportieren](/TechDraw_ExportPageDXF/de "TechDraw ExportPageDXF/de") Befehlen des ![](/images/Workbench_TechDraw.svg) [TechDraw Arbeitsbereichs](/TechDraw_Workbench/de "TechDraw Workbench/de") oder durch die [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")-Exportoption: **Datei → Export → Technische Zeichnung (\*.svg \*.dxf \*.pdf)**.

### IFC-Dateien

Einige spezifische NativeIFC-Einstellungen für IFC-Import und -Export findet man unter [BIM-Einstellungen](/BIM_Preferences/de "BIM Preferences/de").

### OpenSCAD Dateien

Die Import- und Exporteinstellungen für OpenSCAD-Dateien findet man unter [OpenSCAD-Einstellungen](/OpenSCAD_Preferences/de "OpenSCAD Preferences/de").

## Verwandt

Weitere Informationen findest du auf den folgenden Seiten:

* [Import Export](/Import_Export/de "Import Export/de"): Eine Tabelle mit allen unterstützten Dateiformaten.
* [FreeCAD Kurzanleitung Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export"): Eine Liste von Tutorien, die Anwendern bei der Konvertierung von Daten von einem Format in ein anderes helfen können.

## Verfügbare Einstellungen

### DAE

![](/images/Preferences_Import-Export_Page_DAE.png)

Das [Collada](http://en.wikipedia.org/wiki/COLLADA) DAE (Digital Asset Exchange) Format ist ein Standarddateiformat für den Austausch von Netz Daten. FreeCAD kann Netze aus .dae Dateien importieren und [Form](/Part_Workbench/de "Part Workbench/de") basierte Objekte in das .dae Format exportieren.

Hinweis für Linux Anwender: Um mit diesem Dateiformat umgehen zu können, benötigt FreeCAD das [pyCollada Modul](/Extra_python_modules/de "Extra python modules/de").

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Skalierungsfaktor** | Alle Maße in der Datei werden mit dem angegebenen Faktor skaliert.. |
| **Vernetzer** | Legt das Netzbildungssprogramm das verwendet werden sollte fest. Wenn *Netgen* verwendet wird, stelle sicher, dass es verfügbar ist. Dies kann angehakt werden durch  [Arbeitsbereich Polygonnetz](/Mesh_Workbench/de "Mesh Workbench/de") und [Erstelle ein Netz](/Mesh_FromPartShape/de "Mesh FromPartShape/de") Verwendung von Netgen. Wenn es nicht verfügbar ist, muss eine andere Version von FreeCAD, die mit Netgen kompiliert wurde, installiert werden. |
| **Tesselierung** | Der Tesselierungswert zur Verwendung mit dem *Builtin* und dem *Mefisto* Netzprogramm. |
| **Abstufung** | Der Sortierwert, der für die Netzbildung mit *Netgen* zu verwenden ist. Dieser Wert beschreibt, wie schnell die Netzgröße abnimmt. Der Gradient der lokalen Netzgröße `h(x)` ist durch `abs(Δh(x)) ≤ 1/Wert` gebunden. |
| **Segmenten pro Kante** | Die maximale Anzahl von Segmenten pro Kante. |
| **Segmente pro Radius** | Die Anzahl der Segmente pro Radius. |
| **Zweite Ordnung** | Erlaube ein Netz zweiter Ordnung. |
| **Optimieren** | Erlaube Optimierung. |
| **Erlaube Vierecke** | Erlaube [quadrilateral faces](https://en.wikipedia.org/wiki/Types_of_mesh#Two-dimensional). |

### DWG

![](/images/Preferences_Import-Export_Page_DWG.png)

DWG (von Zeichnung) ist ein proprietäres, quellgeschlossenes, binäres Dateiformat, das zum Speichern von 2D- und 3D-Konstruktionsdaten sowie Metadaten verwendet wird. FreeCAD benötigt externe Konverter, um DWG-Dateien zu verarbeiten.

**Hinweis:** Alle Einstellungen für das DXF-Dateiformat gelten auch für DWG.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Umwandlungsmethode** | Auswahl des zu verwendenden DWG-Konverters:  * **Automatic**: FreeCAD wird versuchen, automatisch einen Konverter zu finden und folgt dafür der Reihenfolge der restlichen Liste. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Für LibreDWG wird der Suchpfad des Betriebssystems durchsucht (`os.getenv("PATH")`), für die anderen Konverter werden die Standard-Installationspfade angenommen. * **LibreDWG**: [LibreDWG](https://www.gnu.org/software/libredwg/) ist eine Open-Source-Bibliothek zum Lesen und Schreiben von DWG-Daten. Sie unterstützt einige DWG-Datentypen nicht und liefert nicht immer zuverlässige Ergebnisse. * **ODA Converter**: Der [ODA-File-Converter](https://www.opendesign.com/guestfiles/oda_file_converter) ist ein freies Dienstprogramm, das von der Open Design Alliance zur Verfügung gestellt wird. Es liefert sehr gute und zuverlässige Ergebnisse. * **QCAD pro**: [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) ist die kostenpflichtige Version der DXF-basierten 2D-CAD-Umgebung des quelloffenen QCAD. Ihr DWG-Konverter verwendet die Teigha-Bibliotheken der Open Design Alliance und liefert daher die gleichen guten Ergebnisse wie der ODA-Converter. |
| **Path to file converter** | Kann FreeCAD keinen Konverter finden, muss hier ein Pfad angegeben werden:  * LibreDWG: dwg2dxf oder dxf2dwg unter Linux und macOS, dwg2dxf.exe oder dxf2dwg.exe unter Windows. Beide Dateinamen können für beide Umwandlungen von DWG und zu DWG angegeben werden. * ODA Converter: ODAFileConverter unter Linux and macOS, ODAFileConverter.exe unter Windows. * QCAD pro: dwg2dwg (ein Bash-Skript) unter Linux and macOS, dwg2dwg.bat unter Windows.   [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): der Pfad muss den korrekten Dateinamen enthalten. |

### DXF

![](/images/Preferences_Import-Export_Page_DXF.png)

AutoCAD [DXF](/DXF/de "DXF/de") (Drawing eXchange Format) ist ein proprietäres Format zum Austausch von CAD Daten zwischen AutoCAD und anderen Programmen.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Dieses Dialogfeld beim Importieren und Exportieren anzeigen** | Wenn angehakt, wird dieser Einstellungsdialog beim Importieren oder Exportieren von DXF Dateien angezeigt. |
| **Alten Python Importeur verwenden** | Wenn angehakt, wird der Python Importeur verwendet, ansonsten die neuere C++ Version. Der C++ Importeur ist schneller, hat aber noch nicht so viele Funktionen. Der Python-Importer verwendet die Einstellung **Bearbeiten → Einstellungen... → Entwurf → Allgemeine Einstellungen → Interner Präzisionsgrad**. Für ein genaues Importergebnis wird dieser Wert auf 8 oder höher gesetzt. |
| **Verwende den alten Python-Export** | Wenn angehakt, wird der Python-Exporter verwendet, andernfalls der neuere in C++. Der C++ Exporter ist schneller, verfügt jetzt aber noch nicht über so viele Funktionen. |
| **FreeCAD das automatische Herunterladen und Aktualisieren der DXF-Bibliotheken erlauben** | Durch Anhaken wird FreeCAD ermöglicht, den [Python-Konverter](/FreeCAD_and_DXF_Import/de "FreeCAD and DXF Import/de") für den DXF-Import und -Export herunterzuladen. Dieser Konverter kann nicht mit FreeCAD gebündelt werden, da er eine andere Softwarelizenz hat. |
| **Import** | Wähle, was importiert werden soll. Wenn **Texte und Bemaßungen** aktiviert ist, werden auch Texte und [mtexts](https://www.autodesk.com/techpubs/autocad/acad2000/dxf/mtext_dxf_06.htm) importiert.  Wenn **Punkte** aktiviert ist, werden auch Punkte importiert.  Wenn **Layouts** angehakt ist, werden Papierraumobjekte auch importiert.  Wenn **\*Blöcke** aktiviert ist, werden auch anonyme Blöcke (deren Namen mit einem \* beginnen) importiert. |
| **Erstellen** | Wähle, was erstellt wird. Wenn **einfache Teilformen** ausgewählt ist, werden nur Standardteilobjekte erstellt. Dies ist die Schnellste.  Wenn **Entwurfsobjekte** ausgewählt wird, werden, wann immer möglich, parametrische Entwurfsobjekte erstellt.  Wenn **Skizzen** gewählt wird, werden, wann immer möglich, Skizzen erstellt. |
| **Skalierungsfaktor zum anwenden auf importierte Dateien** | Skalierungsfaktor, der auf DXF-Dateien beim Import angewendet wird. Der Faktor ist die Umrechnung zwischen den Einheiten deiner DXF-Datei und Millimetern. Beispiel: für Dateien in Millimetern: 1, in Zentimetern: 10, in Meter: 1000, in Zoll: 25.4, in Fuß: 304.8. |
| **Originalfarben aus der DXF-Datei verwenden** | Wenn angehakt, werden Farben aus den DXF-Objekten abgerufen, wann immer dies möglich ist. Andernfalls werden Standardfarben angewendet. |
| **Geometrie vereinen** | Wenn angehakt, versucht FreeCAD, deckungsgleiche Objekte zu Drähten zu fügen. Beachte, dass dies eine Weile dauern kann! |
| **Ebenen in Blöcke gruppieren** | Wenn angehakt, werden Objekte aus denselben Ebenen zu Entwurfsblöcken zusammengefügt, die schneller angezeigt, aber weniger leicht bearbeitet werden können. |
| **Standard Schriftgröße für Texte verwenden** | Wenn angehakt, erhalten importierte Texte die Standardgröße [Draft Text](/Draft_Text/de "Draft Text/de") anstelle der Größe, die sie im DXF-Dokument haben. |
| **Ebenen verwenden** | Wenn angehakt, werden DXF-Ebenen als [Draft Layer](/Draft_Layer/de "Draft Layer/de") importiert. |
| **Importieren von Schraffurbegrenzungen als Drähte** | Wenn angehakt, werden Schraffuren in einfache Drähte umgewandelt. |
| **Rendern von Polylinien mit Breite** | Wenn angehakt, wenn Polylinien eine festgelegte Breite haben, werden sie als geschlossene Drähte mit der richtigen Breite gerendert. |
| **Ellipsen und Splines als Polylinien behandeln** | Der Export von Ellipsen und Splines wird nur unzureichend unterstützt. Verwende diese Option, um sie stattdessen als Polylinien zu exportieren. Die Einstellung **Max. Länge eines Spline-Segments:** ist dann die maximale Länge aller Polyliniensegmente. Wenn sie auf **0** gesetzt ist, wird der gesamte Spline als gerades Segment behandelt. |
| **3D-Objekte als Polyflächennetze exportieren** | Wenn angehakt, werden alle Objekte, die Flächen enthalten, als 3D-Polyflächen exportiert.. |
| **TechDraw-Ansichten als Blöcke exportieren** | Wenn angehakt, werden die TechDraw-Ansichten als Blöcke exportiert. Dies könnte bei Vorlagen nach DXF R12 fehlschlagen. |
| **Projekt exportierte Objekte entlang der aktuellen Ansichtsrichtung** | Wenn angehakt, werden die exportierten Objekte so projiziert, dass sie die aktuelle Blickrichtung widerspiegeln. Diese Option funktioniert nur, wenn der Python-Exporter für ältere Versionen verwendet wird. |

### IFC

[Industry Foundation Classes](https://de.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC) ist ein weit verbreitetes Format für den Datenaustausch zwischen [BIM](https://de.wikipedia.org/wiki/Building_Information_Modeling) Anwendungen. Es wird in der Architektur und im Ingenieurwesen verwendet.

Hinweis für Linux Anwender: Um mit diesem Dateiformat umgehen zu können, benötigt FreeCAD das [IfcOpenShell Modul](/Extra_python_modules/de "Extra python modules/de").

#### IFC Import

![](/images/Preferences_Import-Export_Page_IFC_import.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Dieses Dialogfeld beim Importieren anzeigen** | Dieser Einstellungsdialog wird beim Importieren von IFC-Dateien angezeigt. |
| **Fehlerdiagnosenachrichten anzeigen** | Zeigt ausführliche Fehlerdiagnosemeldungen während des Imports und Exports von IFC-Dateien in der [Berichtsansicht](/Report_view/de "Report view/de"). |
| **Klone erstellen, wenn Objekte eine gemeinsame Geometrie besitzen** | IFC-Objekte können die gleiche Geometriedefinition für mehrere Objekte gemeinsam nutzen, nur ihre Platzierung ist unterschiedlich. Wenn diese Option aktiviert ist, werden Klone verwendet, um in FreeCAD das gleiche Ergebnis zu erzielen. Ein Objekt ist das Basisobjekt, die anderen sind Klone. |
| **Import Arch IFC Objekte als** | Was wird in FreeCAD für Arch IFC-Objekte erstellt. |
| **Struktur IFC Objekte importieren als** | Was wird in FreeCAD für Struktur IFC Objekte erstellt. |
| **Root Element** | Es werden nur Untertypen des angegebenen Elements importiert. Behalte das vordefinierte Element *[IfcProdukt](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifckernel/lexical/ifcproduct.htm)* bei, um alle Gebäudeelemente zu importieren. |
| **Separate Öffnungen** | Wenn angehakt, werden Öffnungen als Subtraktionen importiert, andernfalls werden bei Wandformen die Öffnungen bereits subtrahiert. |
| **Extrusionen erkennen** | Wenn angehakt, versucht der Importeur, Extrusionen zu erkennen. Beachte, dass dies die Dinge verlangsamen könnte. |
| **Mehrschichtige Wände teilen** | Unterteilt Wände aus mehreren Schichten. |
| **Vorangestellte Bezeichnung mit ID Nummer** | Wenn angehakt, wird den Objektnamen die [IFC D](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcutilityresource/lexical/ifcgloballyuniqueid.htm) Nummer vorangestellt. |
| **Materialien mit gleichem Namen und gleicher Farbe zusammenführen** | Wenn mehrere Materialien mit demselben Namen in der IFC Datei gefunden werden, werden sie als eines behandelt. |
| **Ifc-Eigenschaften in Tabelle importieren** | Wenn angehakt, werden die [IFC-Eigenschaften](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcpropertyresource/lexical/ifcproperty.htm) jedes Objekts in einem Tabellenkalkulationsobjekt gespeichert. |
| **Ungültige Formen erlauben** | Wenn nicht angehakt werden ungültige Formen nicht importiert. |
| **Ausschlussliste** | Eine durch Komma getrennte Liste von [IFC Einheiten](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/toc-5.htm), die von Importen ausgeschlossen werden sollen. |
| **Ansicht einpassen während des importierens** | Ansicht einpassen beim Import auf die importierten Objekte. Dadurch wird der Import verlangsamt, aber man kann den Import beobachten. |
| **Vollständige parametrische FreeCAD Definitionen importieren, falls verfügbar**} | Erstellt beim Import ein vollparametrisches Modell unter Verwendung gespeicherter FreeCAD Objekteigenschaften. Um die FreeCAD-Eigenschaften zu erhalten, muss das Modell mit der Option **Vollständiges parametrisches FreeCAD Modell exportieren** exportiert worden sein. |
| **Ersetze 'Projekt', 'Standort', 'Gebäude' und 'Stockwerk' durch 'Gruppe'** | Wenn angehakt, werden Gruppen verwendet, um die genannten Objekte zu ersetzen. |

#### IFC Export

![](/images/Preferences_Import-Export_Page_IFC_export.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Diesen Dialog beim Exportieren anzeigen** | Wenn angehakt, wird dieser Einstellungsdialog beim Exportieren von IFC Dateien angezeigt. |
| **Exporttyp** | Wähle wie das Modell exportiert werden soll: als **Standardmodell**, **Strukturanalyse** oder **Standard + Struktur**. |
| **Erzwinge Export als Brep** | Einige IFC Betrachter mögen keine Objekte, die als Extrusionen exportiert werden. Verwende dies, um zu erzwingen, dass alle Objekte als [BREP](https://en.wikipedia.org/wiki/Boundary_representation) Geometrie exportiert werden. Bitte beachte jedoch, daß das Objekt dadurch nicht parametrisch wird. Vermeide wenn möglich den Export als Brep. |
| **Verwende Optionen für DAE Triangulation** | Triangulationsoptionen verwenden, die auf der Seite DAE Optionen gesetzt sind. |
| **Koplanare Facetten bei der Triangulation verbinden** | Gekrümmte Formen, die in der IFC nicht als Kurven dargestellt werden können, werden in flache Facetten zerlegt. Wenn dies aktiviert ist, wird eine zusätzliche Berechnung durchgeführt, um koplanare Facetten zu verbinden. |
| **Universelle IFC ID in FreeCAD Objekten speichern** | Beim Export von Objekten ohne eine [Eindeutige ID](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcutilityresource/lexical/ifcgloballyuniqueid.htm) (UID) wird die generierte UID im FreeCAD Objekt gespeichert und beim nächsten Export wiederverwendet. Dies führt zu geringeren Unterschieden zwischen Dateiversionen. |
| **Verwende IfcOpenShell Serialisierer wenn verfügbar** | [IFCOpenShell](/Extra_python_modules/de#IfcOpenShell "Extra python modules/de") ist eine Bibliothek für IFC Dateien. Ihre *Serialisierer* Funktionalität kann gültige IFC Geometrie aus [OCC](/Glossary/de#OCC "Glossary/de") Formen herstellen. Man beachte, dass dies immer noch eine experimentelle Funktion ist. |
| **2D-Objekte als IfcAnnotations exportieren** | Wenn aktiviert, werden 2D-Objekte als [IfcAnnotation](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcproductextension/lexical/ifcannotation.htm) exportiert. |
| **Vollständiges parametrisches FreeCAD-Modell exportieren** | Wenn aktiviert, werden alle FreeCAD-Objekteigenschaften in den exportierten Objekten gespeichert, so dass bei einem erneuten Import mit der Option **Importiere vollständige FreeCAD Parameterdefinitionen, falls verfügbar** ein vollständiges parametrisches Modell erstellt werden kann. |
| **Wiederverwendung ähnlicher Einheiten** | Wenn markiert, werden ähnliche Einheiten möglichst nur einmal in der Datei verwendet. Dies kann die Dateigröße stark reduzieren, macht die Datei aber weniger gut lesbar. |
| **Ausschalten IfcRechteckProfilDef** | Wenn möglich, werden IFC Objekte, die extrudierte Rechtecke sind, als [IfcRechteckProfilDef](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcprofileresource/lexical/ifcrectangleprofiledef.htm) exportiert. Einige andere Anwendungen könnten jedoch Probleme haben, diese Einheit zu importieren. Wenn dies bei dir der Fall ist, kannst du dies deaktivieren, und dann werden alle Profile als [IfcArbitraryClosedProfileDef](http://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcprofileresource/lexical/ifcarbitraryclosedprofiledef.htm) exportiert. |
| **Auto-Erkennung und Export als Standardfälle, falls anwendbar** | Einige IFC Typen wie [IfcWall](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcwall.htm) oder [IfcBeam](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcbeam.htm) haben spezielle Standardversionen wie [IfcWallStandardCase](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcwallstandardcase.htm) oder [IfcBeamStandardCase](https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifcsharedbldgelements/lexical/ifcbeamstandardcase.htm). Wenn diese Option eingeschaltet ist, exportiert FreeCAD solche Objekte automatisch als Standardfall, wenn die notwendigen Bedingungen erfüllt sind. |
| **Standardgrundstück hinzufügen, falls ein solches im Dokument nicht gefunden wird** | Wenn beim Exportieren einer IFC-Datei kein Grundstück im FreeCAD-Dokument gefunden wird, wird ein Standardgrundstück hinzugefügt. Ein Grundstück ist nach dem IFC-Standard nicht zwingend erforderlich, aber es ist gängige Praxis, mindestens eines in der Datei zu haben. |
| **Standardstockwerk hinzufügen, wenn keines im Dokument gefunden wurde** | Wenn beim Exportieren einer IFC-Datei kein Stockwerk im FreeCAD-Dokument gefunden wird, wird ein Standardstockwerk hinzugefügt. Ein Gebäudestockwerk ist nach dem IFC-Standard nicht zwingend erforderlich, aber es ist gängige Praxis, mindestens eines in der Datei zu haben. |
| **IFC-Dateieinheiten** | Auswählen, welche Einheiten beim Exportieren von IFC-Dateien verwendet werden. |
| **Standardgebäude hinzufügen, falls keines im Dokument gefunden wurde** | Wenn beim Export einer IFC-Datei kein Gebäude im FreeCAD-Dokument gefunden wird, wird ein Standardgebäude hinzugefügt. **Warnung**: Der IFC Standard verlangt mindestens ein Gebäude in jeder Datei. Wenn diese Option ausgeschaltet wird, erzeugst du eine nicht dem Standard entsprechende IFC Datei.  Bei FreeCAD sind wir jedoch der Meinung, dass ein Gebäude zu haben nicht zwingend erforderlich sein sollte, und diese Option ist dazu da, um die Möglichkeit zu haben, unseren Standpunkt aufzuzeigen. |
| **Geschachtelte Gruppen als Baugruppen exportieren** | In FreeCAD ist es möglich Gruppen in Gebäude oder Stockwerke einzubetten. Ist diese Option deaktiviert, werden FreeCAD-Gruppen als IFC-Gruppen (IfcGroups) gespeichert und in die Gebäudestruktur eingebunden. Das Einbinden von anderen als Gebäudeelementen wie IFC-GRuppen wird jedoch von den IFC-Standards nicht empfohlen. Es ist daher auch möglich, diese Gruppen als IfcElementAssemblies zu exportieren, wodurch eine IFC-entsprechende Datei erstellt wird. Bei FreeCAD sind wir jedoch der Meinung, dass Gruppen in Strukturen einzubetten möglich sein sollte und diese Option ist da, um die Möglichkeit zu haben, unseren Standpunkt darzustellen. |

### IGES

![](/images/Preferences_Import-Export_Page_IGES.png)

Das [Initial Graphics Exchange Specification](https://de.wikipedia.org/wiki/Initial_Graphics_Exchange_Specification) (Anfangsspezifikation für den Austausch von Grafiken; wortgetreue Übersetzung ins Deutsche) (IGES) Dateiformat ist ein Dateiformat, das den digitalen Austausch von Informationen zwischen CAD Systemen ermöglicht. Nach der Veröffentlichung des Dateiformats [STEP](/Preferences_Editor#STEP/de "Preferences Editor") wurde die Entwicklung von IGES 1996 eingestellt, aber es wird immer noch von vielen CAD Programmen unterstützt. IGES Dateien haben die .iges oder .igs Erweiterung.

Diese Seite wird nur in den Einstellungen angezeigt, wenn einer der Arbeitsbereiche ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de"), ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") bereits in der aktuellen FreeCAD-Sitzung geladen wurde.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Einheiten für den Export in IGES** | Wähle, welche Einheit beim Export von IGES Dateien verwendet werden soll. |
| **Schreibe Festkörper und Schalen als** | Wähle, wie Festkörper und Schalen ausgegeben werden sollen. Wenn **Gruppen von gestutzten Oberflächen (Typ 144)** ausgewählt wird, werden sie exportiert als [gestutzte Oberflächen](https://wiki.eclipse.org/IGES_file_Specification#Trimmed_Surface_.28Type_144.29).  Wenn **Festkörper (Typ 186) und Schalen (Typ 514) / B-REP Modus** ausgewählt wird, werden Festkörper als [Vielfältige solide B-Rep Objekte](https://wiki.eclipse.org/IGES_file_Specification#Manifold_Solid_B-Rep_Object_.28Type_186.29), Schalen als [Schalen](https://wiki.eclipse.org/IGES_file_Specification#Shell_.28Type_514.29) exportiert. |
| **Leere Entitäten überspringen** | Wenn angehakt, leere [Entitäten](https://wiki.eclipse.org/IGES_file_Specification#Entities) werden nicht importiert. |
| **Firma** | Wenn nicht leer, wird der eingegebene Text im IGES Dateikopf für die Firma verwendet. |
| **Autor** | Wenn nicht leer, wird der eingegebene Text im IGES Dateikopf für den Autor verwendet. |
| **Produkt** | Wenn nicht leer, wird der eingegebene Text im IGES Dateikopf für das Produkt verwendet. |

### INP

![](/images/Preferences_Import-Export_Page_INP.png)

INP ist das Eingabedateiformat für die FEM Software [Abaqus](https://en.wikipedia.org/wiki/Abaqus). Es wird für den [CalculiX](/FEM_CalculiX/de "FEM CalculiX/de") Löser im ![](/images/Workbench_FEM.svg) [FEM Arbeitsbereich](/FEM_Workbench/de "FEM Workbench/de") verwendet.

Diese Seite wird nur angezeigt, wenn der Arbeitsbereich ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/de "FEM Workbench/de") bereits in der aktuellen FreeCAD-Sitzung geladen wurde.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Welche Netzelemente sollen exportiert werden** | Wähle, welche Netzelemente exportiert werden sollen. Wenn **Alle** ausgewählt wird, werden alle Elemente exportiert.  Wenn **Höchste** ausgewählt wird, werden nur die höchsten Elemente exportiert. Dies bedeutet Volumen für ein Volumennetz und Flächen für ein Schalennetz.  Wenn **FEM** ausgewählt ist, werden nur FEM Elemente exportiert. Dies bedeutet, dass nur Kanten, die nicht zu Flächen gehören, und Flächen, die nicht zu Volumen gehören, exportiert werden. |
| **Gruppendaten exportieren** | Wenn angehakt, werden auch Netzgruppen exportiert. Jede Beschränkung und, falls es verschiedene Materialien gibt, besteht das Material aus zwei Netzgruppen, Flächen und Knoten, auf die die Beschränkung oder das Material angewendet wird. |

### Netzformate

![](/images/Preferences_Import-Export_Page_Mesh_Formats.png)

Netze sind eine besondere Art von 3D-Objekten, die aus dreieckigen Flächen bestehen, die durch ihre [Knoten](/Glossary/de#Vertex "Glossary/de") und Kanten verbunden sind. Sie werden häufig für [additive Fertigung](https://en.wikipedia.org/wiki/3D_printing) verwendet. FreeCAD enthält den Arbeitsbereich ![](/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") zum Erstellen und Bearbeiten von Netzen. FreeCAD unterstützt verschiedene Netz-Dateiformate.

Diese Seite wird nur angezeigt, wenn der Arbeitsbereich ![](/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") bereits in der aktuellen FreeCAD-Sitzung geladen wurde.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Maximale Netzabweichung** | Festlegung der maximalen Abweichung zwischen dem Netz und dem Objekt. |
| **Export von AMF-Dateien mit Komprimierung** | Wenn angehakt, wird beim Schreiben einer Netz-Datei im AMF-Format eine ZIP-Komprimierung verwendet. |
| **Export von 3MF als model type** | Wenn angehakt, werden Netze immer als model type im 3MF-Format exportiert, auch wenn sie keine Festkörper sind. |
| **Breite** | Breite der Asymptoten Seite. |
| **Höhe** | Höhe der Asymptoten Seite. |

### OCA

![](/images/Preferences_Import-Export_Page_OCA.png)

Das [OCA](https://groups.google.com/g/open_cad_format)-Dateiformat ist ein Gemeinschaftsprojekt zur Erstellung eines freien, einfachen und offenen CAD-Dateiformats.
OCA basiert weitgehend auf dem von [gCAD3D](http://www.gcad3d.org/) erzeugten GCAD-Dateiformat. Beide Formate können in FreeCAD importiert und die von FreeCAD exportierten OCA-Dateien können in gCAD3D geöffnet werden.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **OCA Bereiche importieren** | Wenn angehakt, werden die Bereiche (3D Flächen) auch importiert. |

### STEP

![](/images/Preferences_Import-Export_Page_STEP.png)

Das (STEP) Dateiformat [Norm für den Austausch von Produktmodelldaten](https://en.wikipedia.org/wiki/ISO_10303) (engl.: Standard for The Exchange of Product model data) ist eine ISO Norm für die computerinterpretierbare Darstellung und den Austausch von Informationen zur Produktherstellung. STEP wird häufig zum Austausch von 3D Daten zwischen CAD Software verwendet. STEP Dateien haben die .step oder .stp Erweiterung . Bei gepackten Dateien wird die Erweiterung .stpz verwendet.

Diese Seite wird nur angezeigt, wenn einer der Arbeitsbereiche ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de"), ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") bereits in der aktuellen FreeCAD-Sitzung geladen wurde.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Kurven im parametrischen Raum der Oberfläche ausschreiben** | Wenn angehakt, werden parametrische Kurven (Kurven im parametrischen Raum von Oberflächen) in die STEP Datei geschrieben. Nicht anhaken der Option kann hilfreich sein, um die Größe der resultierenden STEP Datei zu minimieren. |
| **Ausgeblendete Objekte exportieren** | Dies nicht anhaken, um ausgeblendete Objekte beim Export zu überspringen, was für CAD Anwendungen nützlich ist, die die Unsichtbarkeits STEP Formgebung nicht unterstützen. |
| **Einzelne Objektplatzierung exportieren** | Anhaken dieser Option, um die Platzierungsinformationen beim Export eines einzelnen Objekts beizubehalten. Bitte beachte, dass beim erneuten Import der STEP Datei die Platzierung in die Formgeometrie kodiert wird, anstatt sie innerhalb der Platzierungseigenschaften zu behalten. |
| **Alte Export-Funktion verwenden** | Verwende die alte Export-Funktion |
| **Einheiten für den Export von STEP** | Wähle, welche Einheiten beim Export von STEP Dateien verwendet werden sollen. |
| **Schema** | Wähle das STEP Anwendungsprotokoll (AP), das für den Export verwendet werden soll. **AP 203** ist das Protokoll für konfigurationsgesteuerte 3D Konstruktionen von mechanischen Teilen und Baugruppen.  **AP 214** ist das Protokoll für Kerndaten der Konstruktionsprozesse im Fahrzeugbau. |
| **Zusammenführung von Flächenverbünden in STEP-Dateien** | Wenn aktiviert, werden beim Lesen der Dateien die Körper zu einem [Verbund](/Glossary/de#Compound/de "Glossary/de") zusammengeführt. Dies ist langsamer, aber detailreicher. |
| **Linkgruppe verwenden** | Dies aktivieren, um App::LinkGroup-Gruppencontainer anstelle von App::Part-Gruppencontainern zu verwenden. |
| **Unsichtbare Objekte importieren** | Dies aktivieren, um unsichtbare Objekte zu importieren. |
| **Anzahl der Objekte reduzieren** | Reduziert die Anzahl der Objekte mit Hilfe von Verknüpfungsanordnungen. |
| **Verbundform erweitern** | Erweitert Verbundformen aus mehreren Solids. |
| **Fortschrittsbalken beim Importieren anzeigen** | Zeigt beim Importieren einen Fortschrittsbalken an. |
| **Instanznamen ignorieren** | Verwendet keine Instanznamen. Nützlich für einige alte STEP-Dateien mit nicht aussagekräftigen, automatisch generierten Instanznamen. |
| **Codeseite** | Die Codierung der of STEP-Dateien kann hier angegeben werden. |
| **Modus** | Auswahl der benötigten Dokumentstruktur. **Einzeldokument**  **Zusammenstellung pro Dokument**  **Zusammenstellung pro Dokument im Unterverzeichnis**  **Objekt pro Dokument**  **Objekt pro Dokument im Unterverzeichnis** |
| **Firma** | Wenn nicht leer, wird der eingegebene Text im STEP Dateikopf für die Firma verwendet. |
| **Autor** | Wenn nicht leer, wird der eingegebene Text in der Kopfzeile der STEP Datei für den Autor verwendet. |
| **Produkt** | Wenn nicht leer, wird der eingegebene Text im Kopf der STEP Datei für das Produkt verwendet. |

### SVG

![](/images/Preferences_Import-Export_Page_SVG.png)

[Skalierbare Vektorgrafiken](/SVG "SVG") (SVG) ist ein [Vektorbild](https://de.wikipedia.org/wiki/Vektorgrafik) Format für zweidimensionale Grafiken. Ein Vektorbild kann auf jede beliebige Größe skaliert werden, ohne seine Form oder Details zu verlieren. Ein SVG Bild kann für den Druck in Bitmap Formate wie PNG oder JPEG umgewandelt werden.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Importstil** | Wähle, wie SVG Objektfarben und Linienbreiten importiert werden sollen. Wenn **Keine (schnellste)** ausgewählt wird, werden keine Farben oder Linienbreiteneinstellungen importiert.  Wenn **Standardfarbe und -linienbreite verwenden** ausgewählt wird, verwendet FreeCAD seine Standardfarbe und -linienbreite.  Wenn **Originalfarbe und Linienbreite** ausgewählt wird, verwendet FreeCAD die Farbe und Linienbreite aus den SVG Objekten. |
| **Deaktiviere Einheitenskalierung** | Wenn angehakt, erfolgt keine Einheitenumrechnung. Eine Einheit in der SVG-Datei wird als ein Millimeter übersetzt. |
| **Exportstil** | Wähle, wie Skizzen in SVG exportiert werden. Wenn **Übersetzt (für Druck & Anzeige)** ausgewählt ist, werden SVG Objekte in einer Gruppe eingeschlossen, die skaliert und an die richtige Stelle im SVG Dokument verschoben wird, um in einen druckbaren Bereich zu passen.  Wenn **Roh (für CAM)** ausgewählt wird, werden SVG Objekte so platziert, wie sie sind - an den gleichen Koordinaten wie im FreeCAD Modell (1:1 Export). |
| **Weiße Linienfarbe nach Schwarz übersetzen**} | Wenn diese Option angehaktist, werden alle weißen Linien im SVG zur besseren Lesbarkeit vor weißem Hintergrund in schwarz angezeigt. |
| **Max Segmentlänge für diskretisierte Bögen** | Versionen von [Open CASCADE](/Glossary/de#Open_CASCADE "Glossary/de"), die älter als Version 6.8 sind, unterstützen keine Bogenprojektion. In diesem Fall werden Bögen in kleine Liniensegmente diskretisiert. Dieser Wert ist die maximale Segmentlänge. |

### VTK

![](/images/Preferences_Import-Export_Page_VTK.png)

Der [Visualisierungwerkzeugkasten](https://en.wikipedia.org/wiki/VTK) (VTK) (engl. Visualization Toolkit) ist ein quelloffenes, frei verfügbares Softwaresystem für 3D Computergrafik, Bildverarbeitung und Visualisierung. VTK Dateien werden von der ![](/images/Workbench_FEM.svg) [FEM Arbeitsbereich](/FEM_Workbench/de "FEM Workbench/de") für die [Nachbearbeitung](/FEM_Post_Processing_based_on_VTK "FEM Post Processing based on VTK") von Simulationsergebnissen.

Diese Seite wird nur angezeigt, wenn der Arbeitsbereich ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/de "FEM Workbench/de") bereits in der aktuellen FreeCAD-Sitzung geladen wurde.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **In welches Objekt soll importiert werden** | Auswählen, welche Objekte importiert werden sollen und wie. Wenn **VTK Ergebnisobjekt** ausgewählt wird, wird ein FreeCAD FEM VTK Ergebnisobjekt importiert (entspricht dem Objekt, das exportiert wurde).  Wenn **FEM Netzobjekt** ausgewählt wird, werden die Ergebnisse in der VTK Datei weggelassen, es werden nur die Netzdaten importiert und ein FreeCAD FEM Netzobjekt erzeugt.  Wenn **FreeCAD Ergebnisobjekt** ausgewählt wird, werden die importierten Daten in ein FreeCAD FEM Ergebnisobjekt umgewandelt. **Hinweis:** diese Einstellung benötigt die exakten Namen der Ergebniskomponenten und funktioniert daher nur ordnungsgemäß mit VTK Dateien , die aus FreeCAD exportiert wurden. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export_Preferences/de&oldid=1521323>"