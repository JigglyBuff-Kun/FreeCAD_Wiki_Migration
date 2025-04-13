---
title: Versionshinweise 1.1
---
:::caution
FreeCAD 1.1 ist in Entwicklung, es steht noch kein Veröffentlichungstermin fest.
:::

Fehlen Funktionen? Das spricht man am besten im Forumsbeitrag [Release notes for v1.1](https://forum.freecad.org/viewtopic.php?f=10&t=92080) an.

Siehe [FreeCAD Unterstützen](/Help_FreeCAD/de "Help FreeCAD/de") für Möglichkeiten etwas zu FreeCAD beizutragen.

Alle Bilder auf dieser Seite müssen das Suffix \_relnotes\_1.1 tragen.

**FreeCAD 1.1** wurde am **T Monat Jahr** veröffentlicht, es kann von der [Download](/Download/de "Download/de")-Seite heruntergeladen werden. Diese Seite listet alle Neuerungen und Änderungen auf.

Ältere FreeCAD-Versionshinweise findet man in den [Versionshinweisen](/Feature_list/de#Versionshinweise "Feature list/de").

Platzhalter für ein auffälliges Bild, das von den Admins im [user showcases forum](https://forum.freecad.org/viewforum.php?f=24) ausgesucht wird.

## Allgemein

## Benutzeroberfläche

|  |  |
| --- | --- |
|  | Dreipunktbeleuchtung wurde hinzugefügt, um die Darstellung von 3D-Modellen zu verbessern. [Pull-Request #19397](https://github.com/FreeCAD/FreeCAD/pull/19397) |

### Weitere Verbesserungen der Benutzeroberfläche

* Ein Standardkürzel für [Std DlgEinstellungen](/Std_DlgPreferences/de "Std DlgPreferences/de") wurde hinzugefügt. [Pull-Request #15536](https://github.com/FreeCAD/FreeCAD/pull/15536)
* Die Seite der Einstellungen für den Benachrichtigungsbereich wurde verbessert. [Pull-Request #15207](https://github.com/FreeCAD/FreeCAD/pull/15207)
* Die Funktionen Automatisches Sichern und additives Auswählen wurden zum Werkzeug [Messen](/Std_Measure/de "Std Measure/de") hinzugefügt. [Pull-Request #17717](https://github.com/FreeCAD/FreeCAD/pull/17717)
* Ein Parameter *ToggleTransparency* für die [Feinabstimmung](/Fine-tuning/de "Fine-tuning/de") wurde hinzugefügt, um dem Anwender zu ermöglichen, den Standardwert der Transparenz zu ändern, die mit dem Werkzeug [Transparenzmodus umschalten](/Std_ToggleTransparency/de "Std ToggleTransparency/de") aktiviert wird. [Pull-Request #18986](https://github.com/FreeCAD/FreeCAD/pull/18986)
* Eine Ansicht-Eigenschaft *Show Plane* wurde hinzugefügt, um die Ebene anzuzeigen, die als Basis für ein 2D-Objekt dient.[Pull-Request #18910](https://github.com/FreeCAD/FreeCAD/pull/18910)
* Es ist jetzt möglich, die Farben der Koordinatensystemachsen in den Einstellungen unter *Bearbeiten → Einstellungen... → Anzeige → 3D-Ansicht* zu ändern. [Pull-Request #16995](https://github.com/FreeCAD/FreeCAD/pull/16995)
* Eine Ansicht-Eigenschaft *Show Placement* wurde hinzugefügt, um die Positionierung als Koordinatensystem am Ursprung eines 2D-Objekts anzuzeigen. [Pull-Request #19671](https://github.com/FreeCAD/FreeCAD/pull/19671)
* Der [Navigationsstil](/Mouse_navigation/de "Mouse navigation/de") SolidWorks wurde hinzugefügt. [Pull-Request #19568](https://github.com/FreeCAD/FreeCAD/pull/19568)

## Kernsystem und API

### Kern

|  |  |
| --- | --- |
|  | Werkzeuge für [Hauptbezüge](/Std_Base#Part_Datums "Std Base") (Core Datums) wurden implementiert, um Koordinatensysteme, Bezugsebenen, Bezugslinien und Bezugspunkte zu erstellen, die in Assembly befestigt und auch verwendet werden können. (oder: ...die befestigt werden (können) und in Assembly verwendet werden können.) [Pull-Request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | Das Werkzeug [Bewegen](/Std_TransformManip/de "Std TransformManip/de") wurde überholt und ermöglicht jetzt präzise Eingaben neben dem Ziehen in der 3D-Ansicht. Es ist möglich den interaktiven Dragger an jedem Element im Dokument auszurichten und das Objekt im lokalen (UVW-) Koordinatensystem des Draggers zu bewegen oder im globalen Koordinatensystem des Dokuments. Der Dragger kann wie zuvor zum Ursprung des Objekts ausgerichtet werden und auch zum Schwerpunkt des Objekts. Es besitzt eine neue Möglichkeit das Objekt (an der Position des Draggers) zu einer Zielposition im Dokument zu bewegen und seine Ausrichtung umzukehren. Siehe alle [neuen Optionen](/Std_TransformManip/de#Optionen "Std TransformManip/de"). [Pull-Request #17564](https://github.com/FreeCAD/FreeCAD/pull/17564) |

### API

#### Entfernte Python API

#### Geänderte Python-API

#### Neue Python-API

## Start

* Die Start-Seite kann jetzt die Inhalte weiterer Ordner anzeigen, die durch den Anwender bestimmt werden. Ihre Dateipfade sollten durch doppelte Semikolons (`;`) getrennt werden. [Pull-Request #19473](https://github.com/FreeCAD/FreeCAD/pull/19473), [Pull-Request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918) und [Pull-Request #19948](https://github.com/FreeCAD/FreeCAD/pull/19948).
* Der Abschnitt der Startseite mit den Beispielen kann mit einer Option in den Einstellungen ausgeblendet werden. [Pull-Request #19376](https://github.com/FreeCAD/FreeCAD/pull/19376) und [Pull-Request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918).

## Addon-Manager

* Das Aktualisierungswerkzeug für Python-Abhängigkeiten arbeitet jetzt korrekt, wenn FreeCAD als Snap-Package oder als AppImage installiert wurde. [Pull-Request #19384](https://github.com/FreeCAD/FreeCAD/pull/19384), [Pull-Request #19766](https://github.com/FreeCAD/FreeCAD/pull/19766) und [Pull-Request #19814](https://github.com/FreeCAD/FreeCAD/pull/19814).
* Der Installationspfad der Python-Module wird im Aktualisierungswerkzeug für Python-Abhängigkeiten jetzt als absoluter Pfad angezeigt, für eine bessere Lesbarkeit. Er wird auch entsprechend der FreeCAD-Installationsmethode korrekt dargestellt. [Pull-Request #19828](https://github.com/FreeCAD/FreeCAD/pull/19828) and [Pull-Request #19816](https://github.com/FreeCAD/FreeCAD/pull/19816).

## Arbeitsbereich Assembly

* Das Werkzeug [Ein neues Part einfügen](/Assembly_InsertNewPart/de "Assembly InsertNewPart/de") wurde hinzugefügt, und ermöglicht Part-Objekte einfach innerhalb einer Baugrube hinzuzufügen.[Pull-Request #17922](https://github.com/FreeCAD/FreeCAD/pull/17922)
* Das Werkzeug [Simulation erstellen](/Assembly_CreateSimulation/de "Assembly CreateSimulation/de") wurde hinzugefügt und ermöglicht Bewegungen zu Verbindungen hinzuzufügen und Animationen zu erstellen. [Pull-Request #16414](https://github.com/FreeCAD/FreeCAD/pull/16414)

### Weitere Assembly-Verbesserungen

* Die neuen Hauptbezüge können zum Befestigen von Verbindungen verwendet werden, um mehrere Bauteile zusammenzubauen. [Pull-Request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332)

## Arbeitsbereich BIM

### Weitere BIM-Verbesserungen

* Das Fenster [BIM Asichten](/BIM_Views/de "BIM Views/de") wurde überholt und hat jetzt einen Abschnitt für alle 2D-Ansichten. [Pull-Request #15836](https://github.com/FreeCAD/FreeCAD/pull/15836)
* NativeIFC-Unterstützung für 2D-Objekte wurde zu BIM hinzugefügt und ermöglicht 2D-Objekte (Linien, Texte, Maße) in IFC-Dateien einzubetten und auch solche Dateien anderer BIM-Anwendungen zu öffnen.[Pull-Request #16629](https://github.com/FreeCAD/FreeCAD/pull/16629)
* Dem [Ablaufplan](/Arch_Schedule/de "Arch Schedule/de")-Dialog wurde die Unterstützung für einfache Anordnungen (z.B. nicht verschachtelte) hinzugefügt. Dies ermöglicht normale Anordnungen und Verknüpfungsanordnungen (beide sowohl erweitert als auch nicht erweitert) zu verarbeiten und in weiteren Berechnungen im BIM-Schedule-Report zu verwenden. [Pull-Request #19219](https://github.com/FreeCAD/FreeCAD/pull/19219)

## Arbeitsbereich CAM

### Weitere CAM-Verbesserungen

* G84/G74 Operationen zum Gewindeschneiden wurden hinzugefügt. [Pull-Request #8069](https://github.com/FreeCAD/FreeCAD/pull/8069)
* Multi-Pass-Unterstützung wurde für Profil-Operationen hinzugefügt. [Pull-Request #17326](https://github.com/FreeCAD/FreeCAD/pull/17326)

## Arbeitsbereich Draft

* Unterstützung für relative Pfade zu Schriftdateien wurde den [Textformen](/Draft_ShapeString/de "Draft ShapeString/de") hinzugefügt. [Pull-Request #17819](https://github.com/FreeCAD/FreeCAD/pull/17819)
* Die Verarbeitung von Verknüpfungen in [TechDraw DraftAnsichten](/TechDraw_DraftView/de "TechDraw DraftView/de") wurde korrigiert. [Pull-Request #18175](https://github.com/FreeCAD/FreeCAD/pull/18175) und [Pull-Request #19296](https://github.com/FreeCAD/FreeCAD/pull/19296)
* Der Extrusionsmodus des Befehls [Draft Trimex](/Draft_Trimex/de "Draft Trimex/de") nimmt jetzt auch Verknüpfungen wahr (ist "link-aware"). Er kann jetzt Flächen verarbeiten, die zu Verknüpfungen oder zu Objekten in verknüpften Behältern gehören. Und der Punkt der die Extrusion festlegt kann komplanar zu der Fläche liegen. [Pull-Request #18314](https://github.com/FreeCAD/FreeCAD/pull/18314) und [Pull-Request #18320](https://github.com/FreeCAD/FreeCAD/pull/18320)
* Die Befehle [Verschieben](/Draft_Move/de "Draft Move/de"), [Drehen](/Draft_Rotate/de "Draft Rotate/de") und [Skalieren](/Draft_Scale/de "Draft Scale/de") verarbeiten jetzt ebenfalls Verknüpfungen wahr (sind "link-aware"). [Pull-Request #18795](https://github.com/FreeCAD/FreeCAD/pull/18795)
* Wird ein [Flächenbinder](/Draft_Facebinder/de "Draft Facebinder/de") extrudiert, der auf verbundenen Flächen basiert, wird versucht, seine Ecken zu schließen. Die Eigenschaft *Sew* des Objektes muss dafür auf true gesetzt werden. Man beachte, dass der Code für komplexe Formen versagen kann. [Pull-Request #18901](https://github.com/FreeCAD/FreeCAD/pull/18901)
* [Pfad-Anordnungen](/Draft_PathArray/de "Draft PathArray/de") wurden um mehrere neue Eigenschaften erweitert. Es ist jetzt möglich die Anordnung umzukehren, einen festen Abstand einzustellen und Abstandsmuster einzusetzen. [Pull-Request #19017](https://github.com/FreeCAD/FreeCAD/pull/19017)
* Objekte auf  [Ebenen](/Draft_Layer/de "Draft Layer/de") (Layern) können jetzt abweichende Einstellungen (overrrides) enthalten. [Pull-Request #19207](https://github.com/FreeCAD/FreeCAD/pull/19207)
* Der Befeshl [Draft ZurEbeneHinzufügen](/Draft_AddToLayer/de "Draft AddToLayer/de"), zum schnellen Versetzen von Objekten auf die richtige Ebene, wurde hinzugefügt. [Pull-Request #19427](https://github.com/FreeCAD/FreeCAD/pull/19427)
* Der TechDraw-Code auf dem [Draft Schraffur](/Draft_Hatch/de "Draft Hatch/de") beruht, wurde überarbeitet, um auch Strichlinien in Schraffuren verwenden zu können. [Pull-Request #19458](https://github.com/FreeCAD/FreeCAD/pull/19458)
* Die Befehle [Draft Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") und [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") wurden aktualisiert. [Anordnungen](/Draft_Workbench/de#Draft_ArrayTools "Draft Workbench/de") können herabgestuft (*gesprengt*) werden, und neue Objekte werden in denselben Behälter eingefügt ([Gruppe](/Std_Group/de "Std Group/de"), [Part](/Std_Part/de "Std Part/de")), wie die originalen Objekte, und erhalten die Sichtbarkeitseigenschaften der originalen Objekte.[Pull-Request #19487](https://github.com/FreeCAD/FreeCAD/pull/19487) und [Pull-Request #19685](https://github.com/FreeCAD/FreeCAD/pull/19685)

### Weitere Draft-Verbesserungen

* Der Befehl [Draft Verrundung](/Draft_Fillet/de "Draft Fillet/de") bearbeitet jetzt ausgewählte Kanten, anstatt der ersten Kante von ausgewählten Objekten. [Pull-Request #17945](https://github.com/FreeCAD/FreeCAD/pull/17945) und [Pull-Request #18150](https://github.com/FreeCAD/FreeCAD/pull/18150)
* Die Befehle [Draft AutoGruppieren](/Draft_AutoGroup/de "Draft AutoGroup/de") und [Draft ZurGruppeHinzufügen](/Draft_AddToGroup/de "Draft AddToGroup/de") wurden verbessert. Die Menüs beider Befehle sind alphabetisch sortiert. Im Menü des Befehls [Draft AutoGruppieren](/Draft_AutoGroup/de "Draft AutoGroup/de") sind Ebenen von Gruppen getrennt und die Option *Neue Ebene* erwartet die Eingabe eines Namens und aktiviert die Ebene. Beide Befehle können jetzt rückgängig gemacht werden.[Pull-Request #18172](https://github.com/FreeCAD/FreeCAD/pull/18172) und [Pull-Request #19312](https://github.com/FreeCAD/FreeCAD/pull/19312)
* Die Position des Feldes *Skalierungsfaktor* in der Benutzerschnittstelle wurde verbessert ([Draft StilFestlegen](/Draft_SetStyle/de "Draft SetStyle/de"), [Draft Beschriftungsstileditor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de")). [Pull-Request #18299](https://github.com/FreeCAD/FreeCAD/pull/18299)
* Der Befehl [Draft ZeichnungZuSkizze](/Draft_Draft2Sketch/de "Draft Draft2Sketch/de") wendet die Randbedingung Koinzident festlegen jetzt auch auf Kanten verschiedener Quellobjekte an. [Pull-Request #18805](https://github.com/FreeCAD/FreeCAD/pull/18805)
* Die Angaben zu Radius und Fase sowie den Löschverfahren des Befehls [Draft Verrundung](/Draft_Fillet/de "Draft Fillet/de") werden gespeichert. [Pull-Request #19067](https://github.com/FreeCAD/FreeCAD/pull/19067)
* Eine Option zum Bearbeiten wurde für [Draft-Klone](/Draft_Clone/de "Draft Clone/de") hinzugefügt. Werden sie in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt, kann ihre Skalierung im Aufgaben-Fenster angepasst werden. [Pull-Request #19477](https://github.com/FreeCAD/FreeCAD/pull/19477)
* Für verbesserte Deutlichkeit, wurde die Checkbox *Füllen* im Aufgaben-Fenster von beispielsweise [Draft Linienzug](/Draft_Wire/de "Draft Wire/de") in *Make face* umbenannt. [Pull-Request #19738](https://github.com/FreeCAD/FreeCAD/pull/19738)
* Die Texte neu erstellter Maße werden jetzt automatisch zur aktuellen Arbeitsebene ausgerichtet. Ein Parameter steht zur [Feinabstimmung](/Fine-tuning/de#Draft_Workbench "Fine-tuning/de") zur Verfügung, um dieses Verhalten zu deaktivieren. [Pull-Request #20072](https://github.com/FreeCAD/FreeCAD/pull/20072)
* [In der Nähe einrasten](/Draft_Snap_Near/de "Draft Snap Near/de") setzt sich nicht mehr gegen andere Einrastfunktionen durch. Das Einrasten auf Objekten, wie mit [Einrasten auf Kantenmitte](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de") und [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de") wird jetzt innerhalb des Einrastbereichs des Mauszeigers erkannt. [Pull-Request #20118](https://github.com/FreeCAD/FreeCAD/pull/20118)

## Arbeitsbereich FEM

|  |  |
| --- | --- |
|  | Ein Ausklappmenü wurde hinzugefügt, um die Auswahl des richtigen Festkörpers zu ermöglichen, wenn die ausgewählte Fläche eines CompSolid-Objekts zu zwei Festkörpern gehört. Dies vereinfacht innere Festkörper auszuwählen, um ihnen z.B. ein Material zuzuordnen. [Pull-Request #18812](https://github.com/FreeCAD/FreeCAD/pull/18812) |

|  |  |
| --- | --- |
|  | Die Eigenschaft *ZRefine* wurde zu [Netgen](/FEM_MeshNetgenFromShape/de "FEM MeshNetgenFromShape/de") hinzugefügt und ermöglicht einfache extrudierte "hex-dominated" Netze zu erstellen, wenn die Eigenschaft *Quad Dominated* aktiviert ist. Dies funktioniert allerdings nur für "first order"-Elemente, wenn nicht alle erzeugten Elemente Sechsecke sind. [Pull-Request #19524](https://github.com/FreeCAD/FreeCAD/pull/19524) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [FEM results objects](/FEM_ResultShow/de "FEM ResultShow/de") unterstützt jetzt Animationen von Ergebnissen. [Pull-Request #18496](https://github.com/FreeCAD/FreeCAD/pull/18496) |

|  |  |
| --- | --- |
|  | Unterstützung für Elmers [Gleichstromfluss-Berechnung](/FEM_EquationStaticCurrent/de "FEM EquationStaticCurrent/de") wurde hinzugefügt. Joule-Wärme (Widerstandserwärmung) kann damit auch berechnet werden. [Pull-Request #19835](https://github.com/FreeCAD/FreeCAD/pull/19835) |

|  |  |
| --- | --- |
|  | Die [Ergebnis-Pipeline](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") kann jetzt Ergebnisse aus mehreren "Frames" speichern. [Pull-Request #19610](https://github.com/FreeCAD/FreeCAD/pull/19610) |

### Weitere FEM-Verbesserungen

* Log verbosity kann jetzt in den [Einstellungen](/FEM_Preferences/de#Gmsh "FEM Preferences/de") für Gmsh eingestellt werden. [Pull-Request #17699](https://github.com/FreeCAD/FreeCAD/pull/17699)
* Die Daten-Eigenschaft**Second Order Linear** und die Unterstützung für [lokales Aufbereiten](/FEM_MeshRegion/de "FEM MeshRegion/de"), die vorher nur für Gmsh zur Verfügung standen, stehen jetzt auch der neuen Implementation von [Netgen](/FEM_MeshNetgenFromShape/de "FEM MeshNetgenFromShape/de") zur Verfügung. [Pull-Request #17170](https://github.com/FreeCAD/FreeCAD/pull/17170)
* Box und elliptische Balkenquerschnitte wurden zur [FEM Elementgeometrie1D](/FEM_ElementGeometry1D/de "FEM ElementGeometry1D/de") hinzugefügt. [Pull-Request #15843](https://github.com/FreeCAD/FreeCAD/pull/15843)
* Das Werkzeig [Ergebnisse bereinigen](/FEM_ResultsPurge/de "FEM ResultsPurge/de") löscht jetzt alle Ergebnisobjekte, nicht nur die zu CalculiX gehörigen. [Pull-Request #18328](https://github.com/FreeCAD/FreeCAD/pull/18328)
* Die [RandbedingungVerbinder](/FEM_ConstraintTie/de "FEM ConstraintTie/de") kann jetzt auch auf Schalenflächen angewendet werden. [Pull-Request #18325](https://github.com/FreeCAD/FreeCAD/pull/18325)
* Das Ausgabeformat (binär oder ASCII) und das Speichern von Geometrie-IDs kann jetzt für Elmer eingestellt werden, auch in den [Voreinstellungen](/FEM_Preferences/de#Elmer "FEM Preferences/de"). [Pull-Request #17972](https://github.com/FreeCAD/FreeCAD/pull/17972)
* Eine Option zum Glätten wurde dem [Contours filter](/FEM_PostFilterContours/de "FEM PostFilterContours/de") hinzugefügt. [Pull-Request #18088](https://github.com/FreeCAD/FreeCAD/pull/18088)
* Der Parameter *BucklingAccuracy* wurde zum Gleichungslöser [CalculiX](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") hinzugefügt - es kann erforderlich sein, den ersten "eigenvalue-?" in einigen linearen Knickanalysen zu bestimmen (Das kann ein Fachmann sicher besser ausdrücken). [Pull-Request #18790](https://github.com/FreeCAD/FreeCAD/pull/18790)
* Jetzt können alle FEM-Objekte unterdrückt werden, für die Unterdrücken sinnvoll ist. Vorher konnten nur Randbedingungen unterdrückt werden.[Pull-Request #18636](https://github.com/FreeCAD/FreeCAD/pull/18636)
* Kontaktkräfte in CalculiX-Analysen werden jetzt in die Datei ccx\_dat\_file ausgegeben. [Pull-Request #18840](https://github.com/FreeCAD/FreeCAD/pull/18840)
* Das Werkzeug [MaterialBewehrt](/FEM_MaterialReinforced/de "FEM MaterialReinforced/de") verwendet jetzt die neue [Materialverwaltung](/Material_Edit/de "Material Edit/de"). [Pull-Request #18893](https://github.com/FreeCAD/FreeCAD/pull/18893)
* Die [Randbedingung Elektrostatisches Potential](/FEM_ConstraintElectrostaticPotential/de "FEM ConstraintElectrostaticPotential/de") wurde erweitert, um auch "Neumann-type"-Randbedingungen und "prescribe electric flux density" zu unterstützen. Sie besitzt jetzt auch ein Symbol. [Pull-Request #18514](https://github.com/FreeCAD/FreeCAD/pull/18514) und [Pull-Request #19011](https://github.com/FreeCAD/FreeCAD/pull/19011)
* Die Referenztemperatur für thermische Ausdehnung (thermal expansion reference temperature) kann jetzt für [Feststoff-Material](/FEM_MaterialSolid/de "FEM MaterialSolid/de") in thermomechanischen Analysen mit CalculiX festgelegt werden. [Pull-Request #19285](https://github.com/FreeCAD/FreeCAD/pull/19285)
* Die Python-Funktion *Fem.frdToVTK* wurde hinzugefügt und ermöglicht die Umwandlung von CalculiX's frd-Ergebnisdaten in das VTK-Format, das von ParaView verwendet wird. [Pull-Request #19426](https://github.com/FreeCAD/FreeCAD/pull/19426)
* Die [Randbedingung Stromdichte](/FEM_ConstraintCurrentDensity/de "FEM ConstraintCurrentDensity/de") wurde verbessert. Sie hat jetzt zwei Modi (*Custom* und *Normal*) und ein Symbol für den Modus *Normal*. [Pull-Request #19930](https://github.com/FreeCAD/FreeCAD/pull/19930)
* Zwei neue [FEM-Beispiele](/FEM_Examples/de "FEM Examples/de") wurden hinzugefügt - eins für die neu implementierte [Gleichung Gleichstrom](/FEM_EquationStaticCurrent/de "FEM EquationStaticCurrent/de") (Joule-Erwärmung) und eine für die [Randbedingung Starrer Körper](/FEM_ConstraintRigidBody/de "FEM ConstraintRigidBody/de"). [Pull-Request #20007](https://github.com/FreeCAD/FreeCAD/pull/20007) and [Pull-Request #20011](https://github.com/FreeCAD/FreeCAD/pull/20011)
* Das Aufgaben-Fenster für die [Wärmeflussbelastung](/FEM_ConstraintHeatflux/de "FEM ConstraintHeatflux/de") wurde verbessert - Radio-Knöpfe zur Auswahl der Wärmeflussart wurden durch eine ComboBox ersetzt. [Pull-Request #20059](https://github.com/FreeCAD/FreeCAD/pull/20059)
* Das Aufgaben-Fenster für die [Randbedingung Magnetisierung](/FEM_ConstraintMagnetization/de "FEM ConstraintMagnetization/de") wurde verbessert. [Pull-Request #20055](https://github.com/FreeCAD/FreeCAD/pull/20055)
* Der Modus Selection wurde zur Geometrieauswahl in den Aufgaben-Fenstern der Elmer-Gleichungen hinzugefügt. [Pull-Request #20053](https://github.com/FreeCAD/FreeCAD/pull/20053)
* Die Belastung [Elektrische Ladungsdichte](/FEM_ElectricChargeDensity/de "FEM ElectricChargeDensity/de") wurde für den Einsatz mit Elmers [Gleichung Elektrostatik](/FEM_EquationElectrostatic/de "FEM EquationElectrostatic/de") hinzugefügt. [Pull-Request #20494](https://github.com/FreeCAD/FreeCAD/pull/20494)

## Arbeitsbereich Material

### Weitere Material-Verbesserungen

* [Polycarbonat](https://de.wikipedia.org/wiki/Polycarbonate) mit physikalischen Eigenschaften wurde zur Materialdatenbank hinzugefügt. [Pull-Request #19432](https://github.com/FreeCAD/FreeCAD/pull/19432)

## Arbeitsbereich Mesh

### Weitere Mesh-Verbesserungen

## Arbeitsbereich OpenSCAD

### Weitere OpenSCAD-Verbesserungen

## Arbeitsbereich Part

### Weitere Part-Verbesserungen

* Das Werkzeug [Geometrie überprüfen](/Part_CheckGeometry/de "Part CheckGeometry/de") enthält jetzt auch Ergebniseinträge für gültige Formen, zeigt ausgelassene Objekte und erstellt Berichte im [Ausgabefenster](/Report_view/de "Report view/de").

## Arbeitsbereich PartDesign

|  |  |
| --- | --- |
| Abbildung anklicken, wenn die Animation nicht startet. | Das Aufgaben-Fenster des Werkzeugs [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de") wurde umgestaltet. Die Elemente, die nicht relevant sind, werden jetzt ausgeblendet, sichtbar bleiben nur die, die für die aktuelle Konfiguration nützlich sind, auch wenn sie schreibgeschürzt sind. Die Anzeige basiert auf einem Diagramm, das den direkten Zusammenhang darstellt und dessen Elemente in der Nähe des betroffenen Bereiches angeordnet werden. [Pull-Request #19052](https://github.com/FreeCAD/FreeCAD/pull/19052) und [Pull-Request #19167](https://github.com/FreeCAD/FreeCAD/pull/19167) |

|  |  |
| --- | --- |
| Bild anklicken, wenn die Animation nicht startet. | Unterstützung für konische Gewinde und weitere Gewindeprofile wurden zum Werkzeug [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de") hinzugefügt:  * [British Standard Whitworth](https://en.wikipedia.org/wiki/British_Standard_Whitworth) * [British Standard Fine](https://en.wikipedia.org/wiki/British_Standard_Fine) * [British Standard Pipe](https://en.wikipedia.org/wiki/British_Standard_Pipe) * [National Pipe Threads](https://en.wikipedia.org/wiki/National_pipe_thread)   [Pull-Request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744) |

### Weitere PartDesign-Verbesserungen

* Das Element Ursprung (origin feature) in einem PartDesign-Körper verwendet die neuen Hauptbezüge (core datums). Das Aussehen wurde geändert und die Ebenen werden vergrößert, wenn eine neue Skizze erstellt wird. Da die Ausrichtung in älteren FreeCAD-Versionen falsch war, müssen Dateien, die mit diesen Versionen erstellt wurden, beim Öffnen umgewandelt werden. Es kann Dateien zerstören, die auf diese Bezüge referenzieren und Dateien, die umgewandelt wurden oder in der 1.1 und neuer erstellt wurden, werden in 1.0 und davor zerstört.[Pull-Request #18126](https://github.com/FreeCAD/FreeCAD/pull/18126)
* Der Befehl [Enfrieren umschalten](/Std_ToggleFreeze/de "Std ToggleFreeze/de") steht jetzt in PartDesign zur Verfügung. [Pull-Request #18373](https://github.com/FreeCAD/FreeCAD/pull/18373)
* Die Leistung der modellierten Gewinde des Werkzeugs [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de") wurde verbessert. [Pull-Request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* Der Startwinkel konischer Gewinde des Werkzeugs [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de") wird jetzt automatisch auf den Wert aus den Normen ISO 7-1 und ASME B1.20.1 gesetzt. [Pull-Request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)

## Arbeitsbereich Points

### Weitere Points-Verbesserungen

## Arbeitsbereich Sketcher

|  |  |
| --- | --- |
| Bild anklicken, wenn die Animation nicht automatisch startet. | Das Werkzeug [Projektion](/Sketcher_Projection/de "Sketcher Projection/de") wurde hinzugefügt und ermöglicht, projizierte [externe Geometrie](/Sketcher_External/de "Sketcher External/de") zu erstellen; dabei kann die Art der erstellten externen Geometrie zwischen beschreibender Geometrie und Hilfsgeometrie umgeschaltet werden. [Pull-Request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
|  | [Schneiden](/Sketcher_Intersection/de "Sketcher Intersection/de") wurde hinzugefügt und ermöglicht, [externe Geometrie](/Sketcher_External "Sketcher External") zu erstellen, wobei ausgewählte Geometrie mit der Skizzenebene geschnitten wird. [Pull-Request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
| Bild anklicken, wenn die Animation nicht automatisch startet. | [Externe Geometrie](/Sketcher_External/de "Sketcher External/de") (sowohl projiziert als auch geschnitten) kann jetzt durch Auswählen einer Fläche erstellt werden. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

### Weitere Sketcher-Verbesserungen

* Es ist jetzt möglich, externe Geometrie direkt als Eingabe für Werkzeuge wie Bewegen / linear anordnen zu verwenden, sowohl externe Hilfsgeometrie als auch externe beschreibende Geometrie. [Pull-Request #17615](https://github.com/FreeCAD/FreeCAD/pull/17615)
* Externe Geometrie (projiziert oder als Schnittlinie) ist jetzt standardmäßig richtige (beschreibende) Geometrie (die nicht nachgezeichnet werden muss, wie in Version 1.0 und davor). Sie kann zu Hilfsgeometrie umgeschaltet werden, wie jede andere Geometrie auch.[Pull-Request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736)
* Die Sketcher-Achsen werden jetzt unendlich lang angezeigt. [Pull-Request #17312](https://github.com/FreeCAD/FreeCAD/pull/17312)
* Skizzen werden jetzt in alphabetischer Reihenfolge im Dialog [Skizze auswählen](/Sketcher_MapSketch/de "Sketcher MapSketch/de") aufgelistet. [Pull-Request #16518](https://github.com/FreeCAD/FreeCAD/pull/16518)
* Das Ziehen von Gruppen wurde hinzugefügt und ermöglicht alle ausgewählten Geometrieelemente zu ziehen. [Pull-Request #18273](https://github.com/FreeCAD/FreeCAD/pull/18273)
* Es gibt eine neue Voreinstellung, die, wenn sie aktiviert ist, externe Geometrie immer als Hilfsgeometrie erstellt, unabhängig vom eingestellten Modus. [Pull-Request #18697](https://github.com/FreeCAD/FreeCAD/pull/18697)
* Eine Voreinstellung wurde hinzugefügt, um ein optionales Gruppieren der Sketcher-Werkzeuge [Linie](/Sketcher_CreateLine/de "Sketcher CreateLine/de") und [Linienzug](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de") zu ermöglichen. [Pull-Request #20165](https://github.com/FreeCAD/FreeCAD/pull/20165)

## Arbeitsbereich Spreadsheet

### Weitere Spreadsheet-Verbesserungen

* Standardkürzel für [Text in Fettschrift](/Spreadsheet_StyleBold/de "Spreadsheet StyleBold/de"), [Text in Kursivschrift](/Spreadsheet_StyleItalic/de "Spreadsheet StyleItalic/de") und [Text unterstreichen](/Spreadsheet_StyleUnderline/de "Spreadsheet StyleUnderline/de") wurden hinzugefügt. [Pull-Request #15556](https://github.com/FreeCAD/FreeCAD/pull/15556)
* Ein Doppelklick auf den Trenner in der Überschriftenzeile, passt jetzt die Spaltenbreite an den Inhalt an. [Pull-Request #16296](https://github.com/FreeCAD/FreeCAD/pull/16296)
* Zoom wurde zu Spreadsheet hinzugefügt. [Pull-Request #16130](https://github.com/FreeCAD/FreeCAD/pull/16130)

## Arbeitsbereich Surface

### Weitere Surface-Verbesserungen

## Arbeitsbereich TechDraw

### Weitere TechDraw-Verbesserungen

* Das Werkzeug [Flächeninhalt einfügen](/TechDraw_AreaDimension/de "TechDraw AreaDimension/de") erkennt jetzt sicher die Löcher in Flächen. [Pull-Request #17740](https://github.com/FreeCAD/FreeCAD/pull/17740)
* Form prüfen (Shape validation) steht jetzt zur Verfügung und kann in den [Voreinstellungen](/TechDraw_Preferences/de#Erweitert "TechDraw Preferences/de") aktiviert werden. [Pull-Request #18282](https://github.com/FreeCAD/FreeCAD/pull/18282)
* Die Skalierung von SVG-Zeichnungselementen (symbols) wurde korrigiert. [Pull-Request #18757](https://github.com/FreeCAD/FreeCAD/pull/18757)
* Einen neue Formatspezifikation *r* wurde hinzugefügt. Sie rundet die Maßzahl auf den vor dem "r" als Dezimalzahl eingestellten Wert. Zum Beispiel rundet *%0.5r* (oder nur *%.5r*) auf 0.5. [Pull-Request #19393](https://github.com/FreeCAD/FreeCAD/pull/19393)

## Importieren und Exportieren

* Die Ausrichtung von Skizzen für SVG-Export und Legacy-DXF-Export wurde korrigiert. [Pull-Request #19765](https://github.com/FreeCAD/FreeCAD/pull/19765)

## Kompilieren

## Bekannte Einschränkungen

## Andere Quellen

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.1/de&oldid=1571278>"