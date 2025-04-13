---
title: Gewinde für Schraube Tutorial
---

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutorium                                                                                                                                           |
| Thema                                                                                                                                              |
| Produktgestaltung                                                                                                                                  |
| Niveau                                                                                                                                             |
| Fortgeschrittene                                                                                                                                   |
| Zeit zum Abschluss                                                                                                                                 |
| 60 Minuten                                                                                                                                         |
| Autoren                                                                                                                                            |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC"), [Murdic](/index.php?title=User:Murdic&action=edit&redlink=1 "User:Murdic (page does not exist)"), vocx |
| FreeCAD-Version                                                                                                                                    |
| 0.19                                                                                                                                               |
| Beispieldateien                                                                                                                                    |
| [Aktualisiert: Gewinde für Schrauben Tutorium](https://forum.freecad.org/viewtopic.php?f=36&t=44668)                                               |
| Siehe auch                                                                                                                                         |
| _None_                                                                                                                                             |
|                                                                                                                                                    |

## Einführung

Dieses Tutorium ist eine Sammlung von Techniken zum Modellieren von Schraubengewinden in FreeCAD. Es wurde für v0.19 aktualisiert, obwohl der Gesamtprozess seit v0.14, als das Tutorial ursprünglich geschrieben wurde, im Wesentlichen gleich geblieben ist. Der aktualisierte Inhalt konzentriert sich auf den Arbeitsbereich ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), um das Gewinde zu erstellen, verwendet aber nicht das Werkzeug ![](/images/PartDesign_AdditiveHelix.svg) [PartDesign WendelHinzufügen](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix"), da dieses erst später eingeführt wurde.

In herkömmlichen CAD Systemen wird von der Modellierung von Schraubengewinden abgeraten, da dies eine große Belastung für den Modellierungskern sowie für die Darstellung der Formen darstellt. In herkömmlichen Systemen muss ein Gewinde nicht direkt im 3D Raum dargestellt werden, da es in der technischen 2D Zeichnung, die zur Fertigung geschickt wird, mit seinen erforderlichen Eigenschaften angegeben werden kann. Mit der Popularisierung der additiven Fertigung (3D Druck) besteht nun jedoch ein echter Bedarf, 3D Gewinde zu modellieren, um sie genau so drucken zu können, wie sie entworfen wurden. Dafür ist dieses Tutorium gedacht.

Viele der hier vorgestellten Techniken wurden aus verschiedenen Forumsbeiträgen zusammengetragen:

- [Zusammenstellung von Gewindemodellierungstechniken](https://forum.freecad.org/viewtopic.php?f=3&t=12593)
- [Erstellen eines Gewindes: Unerwartete Ergebnisse](https://forum.freecad.org/viewtopic.php?f=3&t=6506)

Siehe auch hilfreiche Videos:

- [Einführung einer Strategie zur Konstruktion einer Schraube ohne die häufig auftretenden Probleme](https://forum.freecad.org/viewtopic.php?f=8&t=44259).

Denke daran, dass Gewindeformen viel Speicherplatz beanspruchen und dass ein einziges Gewinde in einem Dokument die Dateigröße erheblich erhöhen kann, weshalb dem Benutzer empfohlen wird, Gewinde nur dann zu erstellen, wenn dies absolut notwendig ist.

## Methode 1. Verwendung von Dienstprogrammen und Teilen der Arbeitsbereiche

Die Verwendung von Dienstprogrammen und Teilen, die andere Leute erstellt haben, ist einfach und zeitsparend. Siehe Seite [externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") für Informationen über externe Werkzeuge.

Insbesondere werden drei Quellen empfohlen, die über den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden können:

- Arbeitsbereich [Fasteners](/Fasteners_Workbench/de "Fasteners Workbench/de"), zum Hinzufügen sowie Befestigen verschiedener Verbindungselemente an Bauteilen. Die Schrauben und Muttern zeigen standardmäßig kein Gewinde, aber dies kann mit einer Option gesteuert werden.
- Arbeitsbereich [BOLTSFC](/BOLTSFC_Workbench/de "BOLTSFC Workbench/de"), um Verbindungselemente aus der BOLTS-Bibliothek zu positionieren.

![](/images/T13_00_Threads_fasteners.png)

Verschiedene Normschrauben, die mit dem Arbeitsbereich Fasteners eingesetzt werden. Eine Option steuert, ob ein Objekt das echte Gewinde oder nur einen einfachen Zylinder zeigt.

## Methode 2. Verwendung von Makros (veraltet)

- In der Vergangenheit wurden die Teile aus der BOLTS-Bibliothek mit dem [Makro BOLTS](/Macro_BOLTS/de "Macro BOLTS/de") eingefügt. Dies ist nun veraltet. Stattdessen wird der Arbeitsbereich [BOLTSFC](/BOLTSFC_Workbench/de "BOLTSFC Workbench/de") verwendet.

- In der Vergangenheit wurde das autonome [Screw-Maker-Makro](/Macro_screw_maker1_2/de "Macro screw maker1 2/de") von ulrich1a verwendet, um einzelne Bolzen, Schrauben und Unterlegscheiben zu erstellen. Dies ist nun veraltet. Der Arbeitsbereich [Fasteners](/Fasteners_Workbench/de "Fasteners Workbench/de") von shaise enthält das vollständige Screw-Maker-Makro zusammen mit einer Benutzerschnittstelle (GUI) zur Auswahl der richtigen Komponente.

## Methode 3. Scheingewinde: nicht spiralförmig

In vielen Fällen brauchen wir keine echten Gewinde, wir brauchen nur ein visuelles Anzeichen dafür, dass die Gewinde vorhanden sein werden.

Wir können ein Scheingewinde erzeugen, indem wir eine nicht spiralförmige Bahn verwenden, zum Beispiel durch Drehen eines Sägezahnprofils oder durch Stapeln von Scheiben mit konischen Kanten. Dieses Scheingewinde ist durch einfache Kontrolle kaum von dem echten schraubenförmigen Gewinde zu unterscheiden. Diese Methode ist gut geeignet, um ein gewindeähnliches Objekt zu visualisieren, aber sie ist nicht nützlich, wenn wir ein echtes Gewinde in 3D drucken müssen.

![](/images/T13_01_Threads_comparison_fake_real.png)

Links: einfacher Bolzen mit einem unechten, nicht spiralförmigen Gewinde. Rechts: einfacher Bolzen mit einem echten spiralförmigen Gewinde. Wenn der 3D Druck nicht erforderlich ist, ist ein simuliertes Gewinde oft ausreichend für die Visualisierung.

### Umlaufendes Sägezahnprofil

1. Klicke auf ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de").
2. Klicke auf ![](/images/PartDesign_NewSketch.svg) [PartDesign Neue Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de"). Wähle `XZ_Ebene`.
3. Zeichne eine geschlossene Skizze mit dem erforderlichen Innendurchmesser `10 mm`, Außendurchmesser um `12.6 mm`, Steigung `3 mm`, Zähnezahl `8`, und Gesamthöhe `30 mm`.
4. Wähle die Skizze aus und klicke dann auf ![](/images/PartDesign_Revolution.svg) [PartDesign Umdrehung](/PartDesign_Revolution/de "PartDesign Revolution/de"). Wähle `Vertikale Skizzenachse`, und drücke OK.

![](/images/T13_02_Threads_Sawtooth_sketch_profile.png)

Profil, das zur Erstellung der Umdrehung verwendet wird, die ein Gewinde simuliert.

![](/images/T13_03_Threads_Sawtooth_revolution_1.png) ![](/images/T13_04_Threads_Sawtooth_revolution_2.png)

Schnittdarstellung des resultierenden nicht spiralförmigen Gewindes, das durch Drehen des Sägezahnprofils um die vertikale Achse erzeugt wird.

### Stapeln von Scheiben

1. Wiederhole die ersten beiden Schritte aus dem vorherigen Abschnitt.
2. Zeichne eine geschlossene Skizze mit dem erforderlichen Innendurchmesser `10 mm`, dem Außendurchmesser um `12.6 mm` und der Steigung `3 mm`, aber zeichne nur einen einzelnen Zahn des Sägezahns.
3. Wähle die Skizze aus und klicke dann auf ![](/images/PartDesign_Revolution.svg) [PartDesign Umdrehung](/PartDesign_Revolution/de "PartDesign Revolution/de"). Wähle `Vertikale Skizzenachse`, und drücke OK.

4. Wähle die `Umdrehung`, klicke dann auf ![](/images/PartDesign_LinearPattern.svg) [PartDesign Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de"). Wähle `Vertikale Skizzenachse`. Für ein Scheingewinde mit einer Steigung von `3 mm`, setze die **Länge** auf `3`, und **Häufigkeiten** auf `2`, dann drücke OK. Dadurch werden zwei Scheiben erstellt, eine über der anderen.
5. Du kannst weitere Scheiben hinzufügen, indem du den Wert der **Häufigkeiten** im linearen Muster, und durch Erhöhen der **Länge**, die die Gesamtlänge des Scheingewindes darstellt.

Die **Länge** und **Häufigkeiten** sind miteinander verwandt. Wenn die Länge zu groß ist, aber die Anzahl der Häufigkeiten nicht hoch genug ist, hast du getrennte Scheiben, und die Berechnung des Körpers wird fehlschlagen, da das resultierende Objekt immer ein [einzelne aneinandergrenzende Festkörper](/PartDesign_Body/de "PartDesign Body/de") sein muss. Um beispielsweise eine Gesamthöhe von `30 mm` zu erhalten, setze **Länge** auf `27 mm` und **Häufigkeiten** auf `10`.

Wenn du möchtest, kannst du einen ![](/images/PartDesign_AdditiveCylinder.svg) [/de|PartDesign AdditiverZylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder") mit einem Durchmesser, der dem Innendurchmesser der Scheiben entspricht und so hoch ist wie die gesamte Gewindehöhe. Dadurch werden alle Scheiben zu einem einzigen Festkörper verbunden, wodurch gewährleistet wird, dass es keine getrennten Scheiben gibt.

![](/images/T13_05_Threads_Stacked_discs_sketch.png)

Profil, das zur Erstellung der Umdrehung verwendet wird, die ein Gewinde simuliert.

![](/images/T13_06_Threads_Stacked_discs_1.png) ![](/images/T13_07_Threads_Stacked_discs_2.png)

Links: einzelne Scheibe, die durch Umdrehung entstanden ist. Rechts: mehrere Scheiben, die in einem linearen Muster in Z Richtung angeordnet sind und ein spiralförmiges Gewinde simulieren.

## Methode 4. Austragen eines vertikalen Profils

### Arbeitsbereich PartDesign

Ein echtes Gewinde besteht aus einem geschlossenen Profil, das einen Festkörper entlang einer spiralförmigen Bahn austrägt.

1. Im ![](/images/Workbench_Part.svg) [Part Arbeitsbereich](/Part_Workbench "Part Workbench"), klicke auf ![](/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") zum Erstellen einer ![](/images/Part_Helix.svg) [Part Helix](/Part_Helix/de "Part Helix/de"). Gib ihm die entsprechenden Werte für **Steigung** `3 mm`, **Höhe** `23 mm`, und **Radius** `10 mm`.
2. Gehe zum ![](/images/Workbench_PartDesign.svg) [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de"), und klicke auf ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de").
3. Klicke auf ![](/images/PartDesign_NewSketch.svg) [PartDesign Neue Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de"). Wähle `XZ_Ebene`.
4. Zeichne eine geschlossene Skizze mit dem erforderlichen Profil für die Gewindezähne, normalerweise eine dreieckige Form. In diesem Fall werden wir eine Höhe von `2,9 mm` verwenden, die etwas kleiner ist als die für den Spiralpfad verwendete Steigung `3,0 mm`. Das Profil darf keine Selbstüberschneidungen erzeugen, wenn es entlang der Spirale bewegt wird, weder zwischen den Windungen noch in der Mitte, daher kann die Skizze, wie sie für Stapelscheiben gezeigt wird, nicht verwendet werden.
5. Wähle die Skizze aus und klicke dann auf ![](/images/PartDesign_AdditivePipe.svg) [PartDesign Additives Rohr](/PartDesign_AdditivePipe "PartDesign AdditivePipe"). Im **Pad für die Austragung** klicke auf **Objekt**, und wähle das zuvor erstellte Spiralobjekt aus. Ändere dann **Ausrichtungsmodus** in `Frenet`, so dass das Profil den Pfad ohne Verdrehung überstreicht; drücke dann OK.
6. Wenn der Dialog nach einem Verweis fragt, wähle `Querverweis erstellen`.
7. Der schraubenförmige Wendel wird erstellt, aber es gibt keinen zentralen Körper oder Welle.
8. Klicke auf ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Additiver Zylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder") mit dem entsprechenden **Radius** `10 mm` und **Höhe** `29.9 mm`, um den Rest des spiralförmigen Gewindes zu berühren und automatisch mit ihm zu verschmelzen.
9. Zusätzliche boolesche Operationen sind erforderlich, um die abrupten Enden der Wendels zu formen. Sie können z.B. additive Merkmale verwenden, um der Schraube einen Kopf und eine Spitze zu geben.

![](/images/T13_08_Threads_Helical_thread_profile.png) ![](/images/T13_09_Threads_Helical_thread_path.png)

Links: Profil für ein spiralförmiges Gewinde. Rechts: Spiralenpfad, die zur Erzeugung einer Austragung verwendet wird.

![](/images/T13_10_Threads_Helical_thread_coil.png) ![](/images/T13_11_Threads_Helical_thread_coil_sliced.png)

Links: spiralförmiger Wendel, die sich aus dem Austragungsvorgang des geschlossenen Profils entlang der spiralförmigen Bahn ergibt. Rechts: Schnitt durch das Wendel, der sich aus der Austragung ergibt.

![](/images/T13_12_Threads_Helical_thread_cylinder.png) ![](/images/T13_13_Threads_Helical_thread_finished.png)

Links: spiralförmiger Wendel, der mit einem zentralen Zylinder verschmolzen ist, um den Körper der Schraube zu bilden. Rechts: weitere Merkmale, ein Kopf und eine Spitze, hinzugefügt, um die Form der Schraube zu verbessern.

### Arbeitsbereich Part

Dieser Arbeitsgang kann auch mit den Werkzeugen dem [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") durchgeführt werden.

1. Im ![](/images/Workbench_Part.svg) [Part Arbeitsbereich](/Part_Workbench "Part Workbench"), klicke auf ![](/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") zum Erstellen einer ![](/images/Part_Helix.svg) [Part Spirale](/Part_Helix/de "Part Helix/de"). Gib ihm die entsprechenden Werte für **Steigung**. `3 mm`, **Höhe** `23 mm`, und **Radius** `10 mm`.
2. In diesem Fall benötigst du keinen ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"). Wechsle zum ![](/images/Workbench_Sketcher.svg) [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de"), und klicke dann ![](/images/Sketcher_NewSketch.svg) [Skizzierer Neue Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de"), und wähle die globale XZ Ebene.
3. Kehre dann zurück zum ![](/images/Workbench_Part.svg) [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de"), und verwende ![](/images/Part_Sweep.svg) [PartAustragung](/Part_Sweep/de "Part Sweep/de").
4. Wähle die entsprechende Skizze aus **Verfügbares Profil** und klicke auf den Pfeil, um sie an **Gewählte Profile** zu übergeben.
5. Klicke auf Austragungspfad, und wähle alle Kanten der vorhandenen Spirale in der [3D Ansicht](/3D_view/de "3D view/de"). Klicke auf Fertig.
6. Stelle sicher, dass die ![](/images/CheckBoxTrue.svg) Festkörper erzeugen und ![](/images/CheckBoxTrue.svg) Frenet angehakt sind. Das Erhalten eines Volumenkörpers ist der Schlüssel, um [Part Boolsche](/Part_Boolean/de "Part Boolean/de") Operationen mit dem resultierenden Wendel durchführen zu können, andernfalls wird nur eine Fläche erzeugt.
7. Klicke auf OK, um das Dialogfeld zu verlassen und den Wendel zu erzeugen.

Nun kannst du fortfahren, andere Grundelemente wie ![](/images/Part_Cylinder.svg) [Part Zylinder](/Part_Cylinder/de "Part Cylinder/de"), oder andere Formen, um ![](/images/Part_Fuse.svg) [Part Verschmelzen](/Part_Fuse/de "Part Fuse/de") auszuführen, und ![](/images/Part_Cut.svg) [Part Schnitte](/Part_Cut/de "Part Cut/de") hinzuzufügen, um den Bau der Schraube abzuschließen.

![](/images/T13_14_Threads_components.png)

Erstellen einer Gewinde-Wendel durch Austragen eines vertikalen Profils, (1) das [Skizzenprofil](/Sketch/de "Sketch/de"), (2) der [wendelförmige](/Part_Helix/de "Part Helix/de") Austragungspfad und (3) das Ergebnis der [Austragung](/Part_Sweep/de "Part Sweep/de").

### Tips für den Erfolg

- _Regel 1._ Wenn das Profil die Wendel austrägt, darf sich die resultierende feste Wendel nicht berühren oder sich selbst schneiden, da es sich dann um einen ungültigen Festkörper handelt. Dies gilt sowohl für das Profil, das sich entlang der Wendel bewegt, als auch für Schnittpunkte in der Mitte der Spirale. Versuche, damit boolesche Operationen durchzuführen (Vereinigen oder Schneiden), werden sehr wahrscheinlich fehlschlagen. Prüfe die Qualität der Wendel mit ![](/images/Part_CheckGeometry.svg) [Part GeometriePrüfen](/Part_CheckGeometry "Part CheckGeometry"); wenn Selbstüberschneidungen gemeldet werden, musst du die Steigung der Spirale erhöhen.

![](/images/T13_15_Threads_self_intersection.png) ![](/images/T13_16_Threads_no_self_intersections_OK.png)

Links: ungültige Austragung, der durch die Verwendung einer sehr kleinen Steigung der Spirale im Vergleich zur Höhe des Dreiecksprofils erzeugt wurde. Rechts: Steigung, die ausreichend groß ist und keine Selbstüberschneidungen verursacht.

- _Regel 2._ Wenn ein Zylinder zu einer Wendel hinzugefügt wird, um den Hauptschaft einer Schraube zu bilden, darf der Zylinder das Wendelprofil nicht berühren. Das heißt, der Zylinderradius und der Innenradius des Gewindes dürfen nicht gleich groß sein, da dies sehr wahrscheinlich zum Versagen eines Vereinigungsvorgangs führt.

Im Allgemeinen vermeide Geometrie deckungsgleich mit Elementen der Austragung, wie z.B. tangentiale Flächen oder Kanten, die Flächen berühren, mit denen sie nicht verbunden sind. Um eine guten boolesche Vereinigung herzustellen, muss sich die ausgetragene Wendel und der Zylinder überschneiden. Prüfe die Qualität der Vereinigung mit ![](/images/Part_CheckGeometry.svg) [Part GeometriePrüfen](/Part_CheckGeometry "Part CheckGeometry"); Wenn komplanare Flächen gemeldet werden, erhöhe den Radius des Zylinders um einen kleinen Betrag.

- Wenn die Wendel und der Zylinder tangential verlaufen, kann es bei nachfolgenden booleschen Operationen mit einem dritten Festkörper fehlschlagen, selbst wenn die erste Vereinigung erfolgreich ist.
- Dies ist eine Einschränkung des OpenCASCADE-Technology- (OCCT-) Kerns; im Allgemeinen kommt er mit Operationen zwischen komplanaren Flächen nicht gut zurecht.

![](/images/T13_17_Threads_tangent_faces.png) ![](/images/T13_18_Threads_no_tangent_faces_OK.png)

Links: der Massivzylinder verläuft tangential zum Innenradius des Gewindes ; dies kann zu einer ungültigen boolschen Vereinigung führen. Rechts: der Zylinder hat einen etwas größeren Radius, so dass sich die beiden Festkörper schneiden; dies führt zu einer gültigen Verschmelzung.

- _Regel 3._ Der innere Zylinder hat eine Nahtlinie. Du solltest vermeiden, den Anfang der Wendel entlang dieser Naht zu platzieren. Drehe entweder die Spirale oder den Zylinder um einige Grad.

- _Tip 1._ Der Radius des Spiralpfades spielt keine Rolle, es sei denn, die Spirale ist verjüngt. Alles, was zählt, ist die Steigung und die Höhe der Spirale. Das bedeutet, dass du eine einzige ![](/images/Part_Helix.svg) [Part Spirale](/Part_Helix/de "Part Helix/de"), verwenden kannst um mehrere Gewinde mit gleicher Steigung zu erzeugen. Was die Position der resultierenden Wendel bestimmt, ist die Position des Profils [Skizze](/Sketch/de "Sketch/de").

- _Tip 2._ Halte das Gewinde kurz, d.h. mit einer geringen Anzahl von Windungen. Lange Gewinde neigen dazu, bei boolschen Operationen zu versagen. Wenn du viele Windungen hinzufügen musst, ziehe in Betracht, zuerst ein kurzes Gewinde zu erstellen und dann ![](/images/Draft_OrthoArray.svg) [Entwurf AnordnungRechtwinklig](/Draft_OrthoArray/de "Draft OrthoArray/de"), um das gleiche Muster mehrmals zu duplizieren.

- _Tip 3._ Für die 3D Visualisierung und den 3D Druck kann es in Ordnung sein, den Zylinder und das Gewinde unverschmolzen zu lassen, d.h. mit Schnittpunkten zwischen den beiden Volumenkörpern. Die Reduzierung der Anzahl der booleschen Operationen führt zu weniger Speicherverbrauch und kleineren Dateien.

### Vor- und Nachteile

- ![](/images/Edit_OK.svg) Leicht verständlich.
- ![](/images/Edit_OK.svg) Sehr natürliche Art der Festlegung eines Gewindeprofils.
- ![](/images/Edit_OK.svg) Keine Probleme mit der Netzbildung des resultierenden Objekts, im Gegensatz zu Methode 5.

- ![](/images/Edit_Cancel.svg) Aufgrund der Ungültigkeit sich selbst überschneidender Austragungen ist es nahezu unmöglich, ein Gewinde ohne Lücke zwischen den einzelnen Zähnen zu erzeugen, d.h. ohne gerade zylindrische Fläche an den Innenseiten des Gewindes.
- ![](/images/Edit_Cancel.svg) Boolesche Operationen sind erforderlich, um einen einzigen zusammenhängenden Festkörper zu erhalten. Die Berechnung boolescher Operationen nimmt relativ viel Zeit in Anspruch und schlägt häufig fehl.
- ![](/images/Edit_Cancel.svg) Gewinde mit einer großen Anzahl von Windungen sind problematisch.

## Methode 5. Austragen eines horizontalen Profils

### Allgemein

Die Idee besteht darin, einen horizontalen Querschnitt des Gewindes entlang einer Helix auszutragen. Das Hauptproblem hierbei ist die Ermittlung des Profils, das zur Herstellung eines solchen Gewindes verwendet werden soll.

![](/images/Thread-by-horz-profile.png)

Wenn man einen Kreis als horizontales Profil verwendet (der Kreis muss außerhalb des Ursprungs platziert werden, dieser Versatz definiert die Tiefe des Gewindes), wird das Gewindeprofil sinusförmig sein.

Um ein Standard Sägezahnprofil zu erhalten, muss ein Paar gespiegelter archimedischer Spiralen zu einem Draht verschmolzen werden. Es entsteht eine Herzform, die von einem Kreis kaum unterscheidbar wird, wenn die Tiefe des Gewindes im Vergleich zu seinem Durchmesser gering ist. Deshalb ist auf dem obigen Bild ein "dickes" Gewinde dargestellt.

### Generieren des Profils

Es ist nicht einfach, das horizontale Profil zu ermitteln, um ein bestimmtes vertikales Profil zu erhalten. Für einfache Fälle wie dreieckig oder trapezförmig kann es manuell konstruiert werden. Alternativ kann es konstruiert werden, indem man mit Methode 4. ein kurzes Gewinde erzeugt und ein Stück davon durch ein [Part Schnittmenge](/Part_Common/de "Part Common/de") zwischen einer horizontalen ebenen Fläche und dem Gewinde erhält.

#### Profil für ein dreieckigförmiges Gewinde

1. Erstelle zuerst eine archimedische Spirale in der XY Ebene
   1. Setze die Anzahl der Windungen auf 0.5
   2. Setze den Radius auf den Innenradius des Gewindes, der Außenradius entspricht diesem plus der Schnitttiefe.
   3. Stelle das Wachstum auf die doppelte Schnitttiefe des Gewindes ein.
   4. [Part Spiegel](/Part_Mirror/de "Part Mirror/de") die Spirale gegen die XY Ebene
2. [Part Verschmelzen](/Part_Fuse/de "Part Fuse/de") die Spirale und den Spiegel, um einen geschlossenen Draht zu erhalten, der wie ein Herz geformt ist.

#### Profil für beliebigen Querschnitt

![](/images/Thread-by-horz-profile-profileMake.png)

1. Erstelle ein vertikales Schnittprofil. Stelle sicher, dass die Höhe der Skizze mit der Steigung des Gewindes übereinstimmt, das du benötigst.

1. erstelle eine Helix1 mit einer Höhe, die der Steigung entspricht, und einer Steigung, die der Gewindesteigung entspricht, und einem Helixradius von 0,42\*Nenndurchmesser des Gewindes.
1. trage das Schnittprofil entlang der Helix1 aus. Hake an _Erzeuge Volumenkörper_ und _Frenet_.
1. Erstelle einen Kreis mit dem Nennradius des Gewindes in der x-y-Ebene.
1. Erstelle eine Fläche aus dem Kreis. (Part Arbeitsbereich: erweitertes Dienstprogramm zum Erstellen von Formen oder [Entwurf Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") und ErstelleFläche = true)
1. die Fläche mit dem Sweep Profil schneiden# einen Klon aus dem Schnitt erstellen (Entwurf Arbeitsbereich)
1. Herabstufung des Klons, um einen Draht zu erlangen. (Entwurf Arbeitsbereich) Dieser Draht ist das horizontale Profil, das für diese Methode benötigt wird.
1. Erstelle eine Spirale mit dem Radius des Nennradius des Gewindes und einer Steigung des Gewindes und der Höhe des benötigten Gewindes.
1. Trage den Draht entlang der Spirale aus. Hake Vollmaterial und Frenet an.

Fertig.

Die Schritt-für-Schritt Anleitung wurde diesem [Forumsantwort von Ulrich1a](http://forum.freecad.org/viewtopic.php?f=3&t=6506#p52558) entnommen. ("Erstellen eines Gewindes: Unerwartete Ergebnisse"), leicht modifiziert.

Die Schritte werden auch in Aktion gezeigt auf [dieses Video von Gaurav Prabhudesai](http://www.youtube.com/watch?v=fxKxSOGbDYs) ("FreeCAD : Wie Gewinde erstellen").

### Vor- und Nachteile

- ![](/images/Edit_OK.svg) eine gebrauchsfertige, massive Gewinde-auf-einer-Stange Massivform wird direkt durch die Austragung erzeugt.
- ![](/images/Edit_OK.svg) Es werden weniger oder sogar keine booleschen Operationen erforderlich, so dass die Generierungsgeschwindigkeit im Vergleich zu Methode 4. sehr hoch ist.
- ![](/images/Edit_OK.svg) Gewindeenden werden sofort schön geschnitten
- ![](/images/Edit_OK.svg) lange Gewinde sind kein Problem, es sei denn, es ist eine boolesche Operation erforderlich. Andernfalls wird sie nicht viel besser als Methode 4. sein.
- ![](/images/Edit_OK.svg) Gewinde ohne Lücke sind kein Problem.

- ![](/images/Edit_Cancel.svg) die Festlegung des Gewindeprofils ist kompliziert.
- ![](/images/Edit_Cancel.svg) Die Verwendung des Standardnetz mit einem auf diese Weise erzeugten Gewinde erzeugt hässliche Netze, was zu Problemen führen kann. Andere Netze sind besser, z.B. scheint Mefisto die besten Ergebnisse zu liefern.
- ![](/images/Edit_Cancel.svg) großer Speicherplatzbedarf gemäß der [Zusammenstellung von Gewinde-Modellierungstechniken](http://forum.freecad.org/viewtopic.php?f=3&t=12593&start=10#p101197).

## Methode 6. Ausformung zwischen wendelförmig extrudierten Flächen

### Allgemein

Wendelförmige Splines extrudieren koaxiale Flächen, die ausgeformt werden können, während die parametrische Wendel von FreeCAD dies nicht tut. Zur Definition eines Gewindes sind zwei wendelförmige Splines erforderlich. Diese beiden können aus einem Bibliotheks Spline skaliert und dann entsprechend positioniert und extrudiert werden, um die richtige Form zu erhalten.

Die parametrischen Wendel von FreeCAD sind nicht wirklich spiralförmig, aber wendelförmige B-Splines sind nicht schwer zu entwerfen. Eine manuelle Methode besteht darin, Zwölfeck Polygone (12-seitige Polygone) mit 5 mm Radius/10 mm Durchmesser in 1/12mm (0,08333.mm) z Intervallen anzuordnen und Splines von Knotenpunkt zu Knotenpunkt in aufsteigender und rotierender Folge zu verfolgen, und es in Betracht zu ziehen, dies einmal mit z.B. 10 Windungen zu tun, so dass dieser Spline als Bibliotheksdatei für den Import und die Wiederverwendung wiederverwendet werden kann. Es ist praktisch, 10 mm Durchmesser/1 mm Teilung zu verwenden, um die Skalierung zu erleichtern. Wenn du es manuell machst, ist es einfacher, einen DDraht zu zeichnen und ihn dann in einen B-Spline zu konvertieren, als einen Spline zu zeichnen. Bei Drähten wird die Krümmung nicht während des Zeichnens berechnet, so dass sie dem Cursor folgen und gefügiger einrasten.

Sobald die Splines auf die richtige Größe skaliert und so angeordnet sind, dass die Ausformung den richtigen Winkel zwischen den Gewindeflanken aufweist, werden sie entlang ihrer Achse extrudiert, wobei eine Steigungslänge für den inneren Spline, die äußere Steigung/8, gilt.

![](/images/Splineextrudeloft.png)

ISO- und andere Gewinde haben reduzierte, d.h. flache, innere und äußere Kanten statt scharfer, was für FreeCAD Anwender mit dieser Methode geeignet ist, da wir die wendelförmige Stirnfläche bei der nominalen Größe der Befestigungselemente loften können, während eine Innenfläche nicht an einen Spline an der Außenkante geloft werden kann, weil eine Fläche ein geschlossenes Profil ist, ein Spline ist offen. Die ISO Norm besagt, dass die Nenngröße von Außengewinden eine Steigung der Stirnfläche von 8 mm haben. Das Bild zeigt die Anordnung der Geometrie und die daraus resultierenden wendelförmigen Flächen. Dann ausgeformt zwischen den Stirnseiten, und dann ein Zylinder, der die innere wendelförmige Stirnfläche ergibt, die nach ISO eine Steigung von 4/4 Breite hat, wird zu den Gewinden hinzugefügt.

![761PX](/images/Threadform.PNG)

Diese Methode erzeugt zuverlässige Festkörper, die korrekt boolesch sind. Obwohl sie keine "parametrischen" Schraubengewinde in Standardgrößen im Sinne eines einfachen Zugriffs auf die Form durch die Größe des Befestigungselements erzeugt, ist es eine einfache Möglichkeit, eine genaue Bibliothek zur Wiederverwendung zu erstellen, und Modelle von Spezialformen wie ACME oder archimedische Schrauben sind auch als Einzelstücke unkompliziert.

Retrieved from "<http://wiki.freecad.org/index.php?title=Thread_for_Screw_Tutorial/de&oldid=1356093>"
