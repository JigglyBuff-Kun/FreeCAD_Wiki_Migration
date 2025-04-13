---
title: CAM Rundgang für Ungeduldige
---
|  |
| --- |
| Tutorium |
| Thema |
| Arbeitsbereich CAM |
| Niveau |
| Anfänger/Mittelmäßig |
| Zeit zum Abschluss |
| 15 Minuten |
| Autoren |
| Chrisb |
| FreeCAD-Version |
| 0.19 |
| Beispieldateien |
|  |
| Siehe auch |
| *None* |
|  |

## Ziel

Veranschaulichen der Erstellung eines Auftrags des ![](/images/Workbench_CAM.svg) [Arbeitsbereichs CAM](/CAM_Workbench/de "CAM Workbench/de"), abgeleitet von einem 3D-Modell. Anschließend wird dialekt-richtiger G-Code für eine Ziel-CNC-Fräse erzeugt.

## Das 3D Modell

1. Das Projekt startet mit einem einfachen FreeCAD Modell entworfen im ![](/images/Workbench_PartDesign.svg) [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") ein Würfel mit einer rechteckigen Tasche.

:   ![](/images/Path-SquarePocketModel.png)

Oben: Erstellt in der ![](/images/Workbench_PartDesign.svg)
[Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") einschließlich eines Körpers, eines Kastens mit einer Tasche, basierend auf einer in der ![](/images/View-top.svg) XY Ebene

orientierten Skizze.

2. Ist das 3D-Modell fertiggestellt, wird mit der [Arbeitsbereichsauswahl](/Std_Workbench/de "Std Workbench/de") (Ausklappmenü) zum Arbeitsbereich ![](/images/Workbench_CAM.svg) [CAM](/CAM_Workbench/de "CAM Workbench/de") gewechselt.

## Der Auftrag

3. Jetzt den [CAM-Auftrag](/CAM_Job/de "CAM Job/de") erstellen, durch Auswahl einer der folgenden Methoden:

* Die Schaltfläche ![](/images/CAM_Job.svg) [Auftrag](/CAM_Job/de "CAM Job/de") drücken.
* Das Tastaturkürzel P dann J.
* Den Menüeintrag **CAM → Auftrag** auswählen.

![](/images/Path-JobCreationDialog.png)

:   :   Oben: Dialog [CAM-Auftrag](/CAM_Job/de "CAM Job/de") erstellen

4. Dies öffnet ein Dialogfeld Auftrag erstellen. In diesem Dialog OK anklicken, um den Körper (Body-Objekt) als Basismodell ohne Vorlage zu akzeptieren.

### Auftragseinrichtung

5. Das Auftragsbearbeitungsfenster öffnet sich im Aufgabenfenster, und das Modellansichtsfenster zeigt das Material als einen Drahtgitterwürfel, der den Grundkörper umgibt. Der Einrichtungsreiter ist ausgewählt.

### Auftragsausgabe

6. Der Ausgabereiter legt den Pfad, den Namen und die Erweiterung der Ausgabedatei sowie den Postprozessor fest. Für fortgeschrittene Benutzer können Postprozessor-Argumente angepasst werden (der Mauszeiger darüber zeigt QuickInfos zu den allgemeinen Argumenten an).

:   ![](/images/Path-JobOutput.png)
:   Oben: Dialog [CAM-Auftrag](/CAM_Job/de "CAM Job/de") bearbeiten mit ausgewähltem Ausgabe-Reiter

### Auftragswerkzeuge

:   ![](/images/Path-JobTools.png)
:   Oben: Dialog [CAM-Ausgabe](/CAM_Job/de "CAM Job/de") bearbeiten mit ausgewähltem Werkzeuge-Reiter

7. Das Standardwerkzeug anpassen, indem es ausgewählt und auf die Schaltfläche Bearbeiten geklickt wird. Dies öffnet das Fenster für die Werkzeugsteuerung.

:   ![](/images/Path-ToolConfig.gif)
:   Above: Dialog [CAM-Auftrag](/CAM_Job/de "CAM Job/de") bearbeiten, Werkzeuge, Unterbereich Steuerung

8. Der dem Werkzeug gegebene Name und die Werkzeugnummer entsprechen der Werkzeugnummer der Maschine. Im Dialog (siehe oben) ist es Werkzeug Nr. 4. Die Werkzeugsteuerung ist für horizontale und vertikale Vorschübe von `2 mm/s` und eine Spindeldrehzahl von `2000 U/min` ausgelegt.

9. Das Unterbereich Werkzeug der Werkzeugsteuerung auswählen. Den Durchmesser festlegen (und - falls das Werkzeug ![](/images/CAM_Simulator.svg) [CAM-Simulator](/CAM_Simulator/de "CAM Simulator/de") später verwendet werden soll: einen Schneidenwinkel und eine Schneidenhöhe hinzufügen).

:   ![](/images/Path-ToolAdd.gif)
:   Oben: Dialog [CAM-Auftrag](/CAM_Job/de "CAM Job/de") bearbeiten, Werkzeuge, Unterbereich Werkzeug

10. Die Werte werden mit OK bestätigt.

Hinweis: Für einen einfachen Zugriff können alle Werkzeuge vordefiniert und mit dem ![](/images/CAM_ToolLibraryEdit.svg) [Werkzeug-Manager](/index.php?title=CAM_ToolLibraryEdit/de&action=edit&redlink=1 "CAM ToolLibraryEdit/de (page does not exist)") ausgewählt werden.

### Auftragsarbeitsplan

Der Reiter Arbeitsplan wird anfangs leer dargestellt. Er wird dann von der Abfolge von Auftragsvorgängen, Teil-CAM-befehlen und CAM-Verschönerungen ausgefüllt. Die Reihenfolge dieser Elemente wird hier geordnet.

Dieser Baum wird nach der Konfiguration des Auftrags angezeigt, sobald der CAM-Auftrag aufgeklappt ist:

:   ![](/images/Path-TreeWithJob.png)

## Die Pfadabläufe

11. Es werden zwei Bearbeitungen hinzugefügt, um Fräsbahnen für diesen CAM-Auftrag zu erzeugen. Der Ablauf [Profil](/CAM_Profile/de "CAM Profile/de") erzeugt eine Bahn um den Kasten herum und der Ablauf [Tasche](/CAM_Pocket_Shape/de "CAM Pocket Shape/de") erzeugt eine Bahn für die Innentasche.

12. Fürs Erste werden wir es einfach halten. Die Schaltfläche ![](/images/CAM_Profile.svg) [Profil](/CAM_Profile/de "CAM Profile/de") öffnet das Konturpaneel. Nach der Bestätigung mit OK unter Verwendung der Standardwerte, wird der der grüne Pfad um das Objekt herum sichtbar.

13. Den Taschenboden auswählen und dann mit der Schaltfläche ![](/images/CAM_Pocket_Shape.svg) [Tasche](/CAM_Pocket_Shape/de "CAM Pocket Shape/de") das Fenster Taschenform öffnen. Die Standardwerte für Basisgeometrie, Tiefen und Höhen werden verwendet und das Unter-Panel Operation ausgewählt sowie die Schrittweite in Prozent auf 50 eingestellt.

:   ![](/images/Path-PocketOperation.gif)
:   Oben: Dialog Taschenform mit dem ausgewählten Unterbereich Operation

14. Das Muster wird in "Versatz" geändert, und die Auftragsausführung wird für die Taschenkonfiguration mit OK bestätigt.

Das Ergebnis ist ein Modell mit zwei Pfaden:

:   ![](/images/Path-WalkThroughResult.gif)
:   Oben: Ergebnis mit einem Modell mit zwei Bewegungsbahnen

## Pfade überprüfen

Es gibt zwei Möglichkeiten, die erstellten Pfade zu überprüfen. Der G-Code kann überprüft werden, einschließlich der Hervorhebung der entsprechenden Pfadsegmente. Der Fräsprozess des CAM-Auftrags kann auch simuliert werden, um die idealisierten Werkzeugbahnen zu demonstrieren, die für die Werkzeuggeometrien zum Fräsen des Rohteils erforderlich sind.

Um den G-Code zu untersuchen, wird das Werkzeug ![](/images/CAM_Inspect.svg) [CAM-Befehle untersuchen](/CAM_Inspect/de "CAM Inspect/de") verwendet. Durch Auswählen der entsprechenden G-Code-Zeilen innerhalb des G-Code-Inspektionsfensters werden einzelne Pfadsegmente hervorgehoben.

:   ![](/images/Path-InspectWindow.gif)
:   Above: Das Werkzeug [CAM-Befehle untersuchen](/CAM_Inspect "CAM Inspect") öffnet den Dialog G-Code-Inspektion

Um die Simulation zu beginnen wird das Werkzeug ![](/images/CAM_Simulator.svg) [CAM-Simulator](/CAM_Simulator/de "CAM Simulator/de") verwendet.

Geschwindigkeit und Genauigkeit einstellen und die Simulation mit der ![](/images/CAM_BPlay.svg) Wiedergabetaste (Play) starten.

:   ![](/images/Path-Simulation.gif)
:   Oben: [CAM-Simulator](/CAM_Simulator/de "CAM Simulator/de") in Betrieb

Soll die Simulation beendet werden, wird die Schaltfläche Abbrechen angeklickt, dadurch wird das für die Simulation erstellte Material entfernt. Wird OK angeklickt, wird dieses Objekt in deinem Auftrag behalten.

## Nachbearbeitung des Auftrags

Der letzte Schritt zur Erzeugung von G-Code für die Zielfräse ist die Nachbearbeitung des Auftrags. Dabei werden die G-Codes in eine Datei ausgegeben, die auf die Ziel CNC Maschinensteuerung hochgeladen werden kann. So rufst du den Postprozessor auf:

* Das Auftragsobjekt in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
* Das Werkzeug [File:CAM PostProcess.svg](/index.php?title=Special:Upload&wpDestFile=CAM_PostProcess.svg "File:CAM PostProcess.svg") [CAM Nachbearbeitung](/CAM_Post/de "CAM Post/de") zum Nachbearbeiten der Datei auswählen. Dies öffnet ein G-Code Fenster, in dem die endgültige Ausgabedatei vor dem Speichern überprüft werden kann.

:   ![](/images/Path-PostOutput.gif)
:   Oben: G-Code-Fenster, das die Überprüfung der endgültigen Ausgabedatei erlaubt

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Walkthrough_for_the_Impatient/de&oldid=1393562>"