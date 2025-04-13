---
title: SheetMetal Beispiele
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Einführung

Der Arbeitsbereich ![](/images/Sheetmetal_workbench_icon.svg) [SheetMetal](/SheetMetal_Workbench/de "SheetMetal Workbench/de") (ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der durch den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") zur Verfügung gestellt wird) ist ziemlich mächtig geworden und verlangt jetzt nach einer angemessenen Dokumentation.

Um die Überfüllung der Werkzeugseiten zu vermeiden, wurde diese Seite angelegt, um Teile zu sammeln, die die speziellen Blechfunktionen darstellen und erklären.

Geplante Phasen um Inhalte zu erstellen:

1. Bilder sammeln
2. Beschreibungen der Arbeitsabläufe hinzufügen
3. Detailliertere Anleitungen erstellen

## Scharnier

![](/images/SheetMetal_Example-01.png)

![](/images/SheetMetal_Example-01a.png)
![](/images/SheetMetal_Example-01b.png)
![](/images/SheetMetal_Example-01c.png)
![](/images/SheetMetal_Example-01d.png)

Arbeitsablauf Scharnier:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/PartDesign_Pocket.svg) [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de"),
![](/images/PartDesign_Hole.svg) [PartDesign Bohrung](/PartDesign_Hole/de "PartDesign Hole/de"),
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

### Scharnier Schritt für Schritt

1. Ein Profil erstellen (eine Linie und einen tangential anschließenden Bogen), vorzugsweise mit dem ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de").
2. Den Befehl ![](/images/SheetMetal_AddBase.svg) [BasisprofilErstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") aktivieren, um ein BaseBend-Objekt zu erstellen.
3. Die Parameter des BaseBend-Objekts editieren:
   - Die Daten-Eigenschaft**Mid Plane** auf `true` setzen, damit das Profil symmetrisch auf beiden Seiten der Skizzenebene aufgebaut wird.
   - Der Daten-Eigenschaft**radius** und der Daten-Eigenschaft**thickness** gibt man Werte nach eigener Wahl.
4. Erstellen einer Beschnittkontur mit dem ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de").
5. Mit dem Befehl ![](/images/PartDesign_Pocket.svg) [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") entfernt man eine Hälfte des runden Bereichs.
6. Ein Lochbild mit dem ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellen.
7. Den Befehl ![](/images/PartDesign_Hole.svg) [PartDesign Bohrung](/PartDesign_Hole/de "PartDesign Hole/de") aktivieren. Die Optionen countersink (Kegelsenkung) und counterbore (Plan-/Zylindersenkung) sollte man vermeiden, damit das Objekt abwickelbar bleibt.
8. Mit dem Befehl ![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de") erstellt man ein Unfold-Objekt (Abwicklungskörper).
9. Fertig!

## Aktenklammer

![](/images/SheetMetal_Example-02.png)

![](/images/SheetMetal_Example-02a.png)
![](/images/SheetMetal_Example-02b.png)
![](/images/SheetMetal_Example-02c.png)
![](/images/SheetMetal_Example-02d.png)

Arbeitsablauf Aktenklammer:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/SheetMetal_SketchOnSheet.svg) [Skizze auf Blech](/SheetMetal_SketchOnSheet/de "SheetMetal SketchOnSheet/de"),
klonen, umdrehen und vereinigen,
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

### Aktenklammer Schritt für Schritt

1. Ein Profil erstellen, vorzugsweise mit dem ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") auf der XZ-Ebene.  
   ![Profile sketch](/images/SheetMetal_Example-02e.png)
2. Den Befehl ![](/images/SheetMetal_AddBase.svg) [BasisprofilErstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") aktivieren, um ein BaseBend-Objekt zu erstellen.
3. Die Parameter des BaseBend-Objekts im Eigenschafteneditor anpassen:  
    ![BaseBend-Objekt und hervorgehobene Skizze](/images/SheetMetal_Example-02f.png)
   - Die Daten-Eigenschaft**Mid Plane** auf `true` setzen, damit das Profil symmetrisch auf beiden Seiten der Skizzenebene aufgebaut wird.
   - Die Daten-Eigenschaft**length** auf 32 mm setzen.
   - Die Daten-Eigenschaft**radius** auf 2 mm setzen.
   - Die Daten-Eigenschaft**thickness** auf 0.3 mm setzen.
4. Auswahl der Fläche zwischen den Runden Abschnitten und Aktivieren des ![](/images/Workbench_Sketcher.svg) [Sketchers](/Sketcher_Workbench "Sketcher Workbench").  
   ![Basisfläche der Skizze](/images/SheetMetal_Example-02g.png)
5. Den aufgewickelten Teil blendet man mit dem Befehl ![](/images/Sketcher_ViewSection.svg) [Sketcher SchnittAnzeigen](/Sketcher_ViewSection/de "Sketcher ViewSection/de") aus.
6. Ausschnittkontur erstellen.  
   ![Ausschnittkontur](/imagesSheetMetal_Example-02h.png/320px-SheetMetal_Example-02h.png) ![Die Ausschnittkontur überlappt die ausgewählte Fläche leicht](/images/SheetMetal_Example-02i.png)
7. Die Skizze abschließen mit dem Befehl ![](/images/Sketcher_LeaveSketch.svg) [Sketcher SkizzeVerlassen](/Sketcher_LeaveSketch/de "Sketcher LeaveSketch/de").
8. Die Fläche erneut auswählen und die Ausschnittskizze zur Auswahl hinzufügen.  
   ![Fläche und Skizze ausgewählt](/images/SheetMetal_Example-02j.png)
9. Den Befehl ![](/images/SheetMetal_SketchOnSheet.svg) [Skizze auf Blech](/SheetMetal_SketchOnSheet/de "SheetMetal SketchOnSheet/de") aktivieren, um den aufgewickelten Teil (entlang seiner Oberfläche) auszuschneiden.  
   ![Fertige erste Hälfte](/images/SheetMetal_Example-02b.png)
10. Eine Seite ist nun fertig. Jetzt muss noch eine Möglichkeit zum Spiegeln des Objekts gefunden werden.

**Mögliche Spiegelungsoptionen:**

- Der Befehl ![](/images/PartDesign_Mirrored.svg) [PartDesign Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de") versagt, da er aus irgendwelchen Gründen nicht mit SheetMetal-Objekten umgehen kann. So geht es also nicht.
- Der Befehl ![](/images/Part_Mirror.svg) [Part Spiegeln](/Part_Mirror/de "Part Mirror/de") erzeugt ein gespiegeltes Teil, aber dieses ist nicht mehr abwickelbar. So geht es also auch nicht.
- Ein Weg der funktionieren kann ist die Verwendung eines Klones. Dieser kann zwar nicht gespiegelt werden, aber auf ihn kann Achsensymmetrie angewendet werden (Drehung um 180°).
- Ein anderer funktionierender Weg ist die Verwendung eines Link-Objekts.

**Spiegeln mit einem Klon:**

1. Das Body-Objekt in der Baumansicht auswählen.
2. Den Befehl ![](/images/PartDesign_Clone.svg) [PartDesign Klon](/PartDesign_Clone/de "PartDesign Clone/de") aktivieren. er fügt ein neues Body-Objekt hinzu, das ein Clone-Objekt enthält.  
   Für eine 180°-Drehung setzt man die Daten-Eigenschaft**Winkel** unter der Eigenschaft Placement des Körpers oder des Klons auf 180°. (Die Z-Achse ist standardmäßig voreingestellt und sollte funktionieren, wenn man, wie beschieben, auf der XZ-Ebene gestartet ist).  
   ![Geklonte Hälfte](/images/SheetMetal_Example-02b.png/200px-SheetMetal_Example-02b.png) ![](/images/Button_right.svg) ![Gedrehte geklonte Hälfte](/images/SheetMetal_Example-02l.png)
3. Mit dem immer noch aktiven Körper nutzt man den Befehl ![](/images/PartDesign_Boolean.svg) [PartDesign BoolescheOperation](/PartDesign_Boolean/de "PartDesign Boolean/de"), um den Körper des Klons hinzuzufügen und beide Hälften zu vereinigen.  
   ![Vereinigte Hälften](/imagesSheetMetal_Example-02c.png)
4. Mit dem Befehl ![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de") erstellt man ein Unfold-Objekt.  
   ![Klammer und Abwicklung](/images/SheetMetal_Example-02m.png) ![Abwicklung (Unfold-Objekt)](/images/SheetMetal_Example-02d.png)
5. Fertig!

**Spiegeln mit einem Link-Objekt:**

1. Das Body-Objekt in der Baumansicht auswählen.
2. Den Befehl ![](/images/Std_LinkMake.svg) [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de") aktivieren. Er fügt ein neues Link-Objekt hinzu.
3. Das Link-Objekt dupliziert man durch setzen der Daten-Eigenschaft**Element Count** auf 2.
4. Für eine 180°-Drehung setzt man die Daten-Eigenschaft**Winkel** unter der Eigenschaft Placement eines der beiden unterverlinkten Objekte auf 180°. (Die Z-Achse ist standardmäßig voreingestellt und sollte funktionieren, wenn man, wie beschieben, auf der XZ-Ebene gestartet ist).
5. Beide unterverlinkten Objekte in der Baumansicht auswählen.
6. Den Befehl ![](/images/Part_Fuse.svg) [Part Vereinigung](/Part_Fuse/de "Part Fuse/de") aktivieren, um beide Hälften zu vereinigen.  
   ![Vereinigte Hälften](/images/SheetMetal_Example-02c.png)
7. Mit dem Befehl ![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de") erstellt man ein Unfold-Objekt.  
   ![Klammer und Abwicklung](/images/SheetMetal_Example-02m.png) ![Abwicklung (Unfold-Objekt)](/images/SheetMetal_Example-02d.png)
8. Fertig!

## Schelle

![](/images/SheetMetal_Example-03.png)

![](/images/SheetMetal_Example-03a.png)
![](/images/SheetMetal_Example-03b.png)
![](/images/SheetMetal_Example-03.png)
![](/images/SheetMetal_Example-03c.png)

Arbeitsablauf Schelle:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/PartDesign_Hole.svg) [PartDesign Bohrung](/PartDesign_Hole/de "PartDesign Hole/de"),
![](/images/PartDesign_Fillet.svg) [PartDesign Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de"),
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

## Sechsseitige Schale

![](/images/SheetMetal_Example-04.png)

![](/images/SheetMetal_Example-04a.png)
![](/images/SheetMetal_Example-04b.png)
![](/images/SheetMetal_Example-04.png)
![](/images/SheetMetal_Example-04c.png)

Workflow Hex Bowl:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall/de "SheetMetal AddWall/de"),
6x ![](/images/SheetMetal_AddCornerRelief.svg) [Eckentlastung hinzufügen](/SheetMetal_AddCornerRelief/de "SheetMetal AddCornerRelief/de"),
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

![](/images/SheetMetal_Example-04d.png)

Wenn eine Eckentlastung hinzugefügt wurde (rechte Seite), kann es nötig sein den wert der Eigenschaft **Size** anzupassen.

## Bleistiftklipp

![](/images/SheetMetal_Example-05.png)

![](/images/SheetMetal_Example-05a.png)
![](/images/SheetMetal_Example-05b.png)
![](/images/SheetMetal_Example-05c.png)
![](/images/SheetMetal_Example-05d.png)
![](/images/SheetMetal_Example-05.png)
![](/images/SheetMetal_Example-05e.png)

Arbeitsablauf Bleistiftklipp:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/PartDesign_Pocket.svg) [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de"),
3x ![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall/de "SheetMetal AddWall/de"),
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

## Beispiel zu Fläche erweitern

![](/images/SheetMetal_Example-06.png)

![](/images/SheetMetal_Example-06a.png)
![](/images/SheetMetal_Example-06b.png)
![](/images/SheetMetal_Example-06c.png)
![](/images/SheetMetal_Example-06.png)
![](/images/SheetMetal_Example-06d.png)

Arbeitsablauf Beispiel zu Fläche erweitern:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall/de "SheetMetal AddWall/de"),
![](/images/SheetMetal_Extrude.svg) [Fläche erweitern](/SheetMetal_Extrude/de "SheetMetal Extrude/de"),
![](/images/SheetMetal_Extrude.svg) [Fläche erweitern](/SheetMetal_Extrude/de "SheetMetal Extrude/de"),
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

Für die zweite Anwendung von **Fläche erweitern** wird eine Skizze mit zwei Konturen für die Form der Erweiterung(en) verwendet; und mit dem Setzen des Wertes von "use subtraction" auf true liefert sie auch die Form der Ausschnitte.

## USB-Massekontakt

![](/images/SheetMetal_Example-07.png)

![](/images/SheetMetal_Example-07a.png)
![](/images/SheetMetal_Example-07b.png)
![](/images/SheetMetal_Example-07c.png)
![](/images/SheetMetal_Example-07d.png)
![](/images/SheetMetal_Example-07.png)
![](/images/SheetMetal_Example-07e.png)

Arbeitsablauf USB-Massekontakt:
![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"),
![](/images/SheetMetal_Extrude.svg) [Fläche erweitern](/SheetMetal_Extrude/de "SheetMetal Extrude/de"),
![](/images/PartDesign_Pocket.svg) [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de"),
![](/images/SheetMetal_Extrude.svg) [Fläche erweitern](/SheetMetal_Extrude/de "SheetMetal Extrude/de"),
![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall/de "SheetMetal AddWall/de"),
![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de").

(Die Zugentlastung ist nur eine künstlerische Darstellung von dem, was in einem echten Stecker versteckt sein kann)

## SheetMetal Eigenschaften

Dieser Abschnitt versucht die Eigenschaften jedes SheetMetal-Objekts, wo es möglich ist, mit einfachen Bildern zu erklären.

### BaseBend-Objekt

![](/images/SheetMetal_Example-08a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08b.png)

Ausgewählte Skizze +
![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase")
→ BaseBend-Objekt mit Standardeinstellungen

![](/images/SheetMetal_Example-08b.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08c.png)

Daten-Eigenschaft**length** bearbeiten: Standardlänge → Reduzierte Länge

![](/images/SheetMetal_Example-08d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08h.png)

Daten-Eigenschaft**Mid Plane** von `false` auf `true` umschalten: Extrusion in eine Richtung → Symmetrische Extrusion

![](/images/SheetMetal_Example-08d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08e.png)

Daten-Eigenschaft**Reverse** von `false` auf `true` umschalten: Standardrichtung → Umgekehrte Richtung

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08f.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08g.png)

Daten-Eigenschaft**Bend Side** auswählen: `Outside` (Standard) → `Inside` → `Middle`

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08i.png)

Daten-Eigenschaft**radius** bearbeiten: Standardradius → Vergrößerter Radius.  
Diese Eigenschaft entspricht dem Innenradius der Bögen, die an Knotenpunkten erstellt werden, an denen der Übergang zweier Kanten in der Skizze nicht tangential ist.

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08j.png)

Daten-Eigenschaft**thickness** bearbeiten: Standardwandstärke → Vergrößerte Wandstärke

### Bend-Objekt

Das Bend-Objekt besteht aus aus einem Sätzen aus jeweils einem zylindrischen Bogen und einem ebenen Streifen. Jedes dieser Paare beginnt an einer ausgewählten Kante einer Platine (ebener Blechabschnitt).

![](/images/SheetMetal_Example-09a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09b.png)

Ausgewählte Kanten +
![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall/de "SheetMetal AddWall/de")
→ Bend-Objekte mit Standardeinstellungen  
(Zwei Bend-Objekte in zwei separaten Körpern.)

Die Daten-Eigenschaft**radius** bearbeiten, um den inneren Radius aller Bogenstücke des Bend-Objekts zu verändern. (Siehe BaseBend-Objekt weiter oben)

Die Daten-Eigenschaft**length** bearbeiten, um die Länge aller ebenen Streifen des Bend-Objekts, die an die Bogenstücke anschließen, zu verändern.

: Man sollte die Daten-Eigenschaft**length** nicht mit der Kantenlänge (flange length) verwechseln, die sich aus der Summe aus Länge, Radius und Wandstärke (den Eigenschaften length, radius, und thickness) ergibt (nur für 90° Winkel).

![](/images/SheetMetal_Example-09b.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09c.png)

Die Daten-Eigenschaft**invert** von `false` auf `true` umschalten: Kanten entsprechend den Standardeinstellungen (Bend objects) → Umgekehrte Kanten

![](/images/SheetMetal_Example-09c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09e.png)

Die Daten-Eigenschaft**angle** bearbeiten: Standardwinkel (90°) → Vergrößerter Winkel → Verkleinerter Winkel

Man muss sich nicht um den Beschnitt der Kanten kümmern, da **Auto Miter** (automatische Gehrung) standardmäßig aktiviert ist.  
 Wenn deaktiviert, sieht das Ergebnis so aus:

![](/images/SheetMetal_Example-09m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09f.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09g.png)

Die Daten-Eigenschaft**Auto Miter** von `true` auf `false` umschalten: Standardwinkel (90°) → Vergrößerter Winkel → Verkleinerter Winkel  
(Auf einzelne Kanten (flanges) hat **auto Miter** keine Auswirkung)

Um eine die Kante (edge) einer Kante (flange) von Hand mit einer Gehrung zu versehen, verwendet man **miterangle1** und **miterangle2**:

![](/images/SheetMetal_Example-09m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09n.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09o.png)

Die Daten-Eigenschaft**miterangle1** and Daten**miterangle2** bearbeiten: Keine Gehrung (Standard) → Gehrung mit unterschiedlichen positiven Winkeln, → Symmetrische Gehrung mit negativen Winkeln

Die Gehrung betrifft nur die ebenen Streifen, nicht die Bogenstücke.

: (Es verläuft über die gesamte Länge der Kanten (edges) und kann daher nicht zum Anfasen der Kanten (edges) der Kanten (flanges) verwendet werden)

Um die verschiedenen Möglichkeiten von **Bend Type** darzustellen, wird ein Hilfsquader eingesetzt, der auf derselben Ebene steht, wie die Platine und der die gleiche Höhe hat, wie das Bend-Objekt (seine Kantenlänge).

![](/images/SheetMetal_Example-09h.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09i.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09j.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09k.png)

Die Daten**Bend Type** auswählen: `Material Outside` (Standardwert) → `Material Inside` → `Thickness Outside` → `Offset`

- Outside: (Außerhalb) Der Bogen beginnt an der ausgewählten Kante (edge) (Das ganze Bend-Objekt liegt außerhalb des Quaders).
- Inside: (Innerhalb) Die Außenseite der Kante (flange) endet an der Oberfläche des Quaders (Das ganze Bend-Objekt liegt innerhalb des Quaders).
- Thickness Outside: (Wandstärke außerhalb) Die Innenseite des Bogens endet an der Oberfläche des Quaders (Nur der ebene Streifen tritt aus der Oberfläche des Quaders hervor).
- Offset: (Versatz) Abhängig vom Wert der Daten-Eigenschaft**offset** wird der Bogen von seiner Standardposition in Richtung nach außen versetzt.

: Für positive Werte wird eine Erweiterung eingefügt (hervorgehobener Streifen).
: Negative Werte sind erlaubt, um den Bogen nach innen zu bewegen.

Wenn nicht die ganze Länge einer Kante (edge) verwendet werden soll, können **gap1** und **gap2** verwendet werden.

![](/images/SheetMetal_Example-09c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09l.png)

Die Daten-Eigenschaft**gap1** und Daten-Eigenschaft**gap2** bearbeiten: Kanten entsprechend den Standardeinstellungen → Kanten(flanges) mit unterschiedlichen Werten für gap1 und gap2

Wenn die Länge einer Lücke (gap) den Wert der Daten-Eigenschaft**min Relief Gap** erreicht oder überschreitet, wird ein Entlastungsausschnitt zur Lücke hinzugefügt .  
Die Entlastungsausschnitte werden durch die Daten-Eigenschaft**relief Type** (Art des Ausschnitts), die Daten-Eigenschaft**reliefd** (Tiefe des Ausschnitts), und die Daten-Eigenschaft**reliefw** (Breite des Ausschnitts) gesteuert, die nur dann aktiv sind, wenn ein Wert für eine Lücke angegeben wurde.

![](/images/SheetMetal_Example-09p.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09q.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09r.png)

Die Daten-Eigenschaft**reliefd** und die Daten-Eigenschaft**reliefw** bearbeiten: Standardwerte → Ausschnitttiefe vergrößert → Ausschnitttiefe und -Breite vergrößert

![](/images/SheetMetal_Example-09r.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09s.png)

Die Daten-Eigenschaft**relief Type** von `Rectangle` auf `Round` umschalten: Standardmäßiger rechteckiger Entlastungsausschnitt → Runder Entlastungsausschnitt

Die Option rund wird nur dann angewendet, wenn die Ausschnitttiefe größer als die Ausschnittbreite ist.

Die Daten-Eigenschaft**Use Relief Factor** von `false` (Standardwert) auf `true` umschalten, um die Werte der Daten-Eigenschaft**reliefd** und der Daten-Eigenschaft**reliefw** automatisch einzusetzen. Beide werden auf die (ererbte) Wandstärke des Objekts multipliziert mit dem Wert der Daten-Eigenschaft**Relief Factor** gesetzt.

: In diesem Falle ist die Option rund nutzlos, da die Ausschnitttiefe und die Ausschnittbreite gleich groß sind. (Siehe oben)

Eine neue Daten-Eigenschaft**Length Spec** [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de") ermöglicht es, auszuwählen, wie die Länge des Bend-Objekts gemessen wird:

![](/images/SheetMetal_Example-09t.png)

Seitenansicht auf vier 120°-Kanten mit der Vorgabelänge (10 mm) und unterschiedlichen Werten der Daten-Eigenschaft**Length Spec**:  
 Nur der ebene Streifen `Leg` (Standard), Außenmaß zur theoretischen Ecke `Outer Sharp`, Innenmaß zur theoretischen Ecke `Inner Sharp`, Außenmaß bie Bogen `Tangential`

Mit der ausgewählten Option `Tangential` entspricht die Daten-Eigenschaft**length** der Kantenhöhe (flange length).

`Outer Sharp` und `Tangential` sind gleich für 90°-Winkel.

### Extend-Objekt

Ein Extend-Objekt verlängert eine SheetMetal-Platine an einer oder mehreren ausgewählten Randflächen oder Kanten.

![](/images/SheetMetal_Example-10a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10b.png)

Ausgewählte Randflächen und Kanten +
![](/images/SheetMetal_Extrude.svg) [KanteVerlängern](/SheetMetal_Extrude/de "SheetMetal Extrude/de")
→ Ein Extend-Objekt mit Standardeinstellungen.

Hier tritt ein erstes Problem auf: Obwohl die Daten-Eigenschaft**Refine** (Aufbereiten) auf `true` gesetzt ist, zeigen zwei der Verlängerungen noch ihre Nahtlinien. Nur die Verlängerung des zuletzt ausgewählten Elements werden durch Aufbereiten entfernt.

Um alle Verlängerungen aufzubereiten, müssen sie einzeln erstellt werden:

![](/images/SheetMetal_Example-10c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10f.png)

3x ausgewählte Randfläche oder Kante +
![](/images/SheetMetal_Extrude.svg) [KanteVerlängern](/SheetMetal_Extrude/de "SheetMetal Extrude/de")
→ Drei Extend-Ojekte komplett aufbereitet und mit Standardeinstellungen.

Veränderte Eigenschaften betreffen alle kanten, die in der zugehörigen Daten-Eigenschaft**base Object** des Extension-Objekts gelistet sind.

Die Daten-Eigenschaft**length** anpassen, um die Länge der Verlängerung einzustellen.

![](/images/SheetMetal_Example-10h.png) ![](/images/SheetMetal_Example-10g.png)

Die Daten-Eigenschaft**gap1** und Daten-Eigenschaft**gap2** anpassen, um die Breite der Verlängerung zu verringern.  
Links: Extension-Objekt mit 3 Kanten. Rechts: Eins der Extension-Objekte mit einer einzelnen Kante.

Eine Skizze mit der Daten-Eigenschaft**Sketch** verknüpfen, um die Form einer Verlängerung zu erweitern. Die Daten-Eigenschaft**length**, Daten-Eigenschaft**gap1** und Daten-Eigenschaft**gap2** werden ignoriert, sobald eine Skizze verknüpft wurde. (Dies scheint mit noch ungebogenen Platinen nicht zu funktionieren).

![](/images/SheetMetal_Example-10i.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10j.png)

Eine ausgewählte Skizze auf der zu erweiternden Kante liegend → Resultierende Erweiterung

Es ist deutlich zu erkennen, dass es egal ist, welche Kante für das Extend-Objekt ausgewählt wurde, die Form des Flansches wird überall erweitert, wo Skizzengeometrie hervorsteht, die neue Form kann sogar Elemente ohne Verbindung zum originalen Flansch enthalten. Mehrfache Konturen sind kein Problem, aber es wird nicht in den Flansch hineingeschnitten.

Dieses Beispiel zeigt, dass Konstrukteure für ihre Konstruktion verantwortlich sind und sich nicht auf die Ergebnisse ihrer Werkzeuge verlassen sollten, die in diesem Falle keinen Sinn machen. Die Skizze direkt am Flansch angebracht ist auch problematisch aufgrund des Problems der topologischen Benennung, aber dafür ist eine Lösung in Sicht.

Aber es gibt bessere Anwendungsfälle für dieses Werkzeug, die fast ganz geschlossene Formen beinhalten, so wie eins der Beispiele auf der Seite [SheetMetal KanteVerlängern](/SheetMetal_Extrude/de "SheetMetal Extrude/de"):

![](/images/SheetMetal_Example-10k.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10l.png)

Ein fast geschlossenes Profil → Die hinzugefügte Erweiterung ist standardmäßig mit der gegenüberliegenden Seite verschmolzen und bildet so ein geschlossenes Profil (ein Rohr), das nicht abwickelbar ist.

![](/images/SheetMetal_Example-10l.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10m.png)

Eine rechteckige Skizze mit der Daten-Eigenschaft**Sketch** verknüpft: Geschlossenes Profil → Profil mit rechteckiger Erweiterung, noch immer verschmolzen

![](/images/SheetMetal_Example-10m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10n.png)

Die Daten-Eigenschaft**Use Subtraction** auf `true` umschalten, um einen (kaum sichtbaren) Spalt zwischen dem Extension-Objekt und der gegenüberliegenden Seite zu erhalten, dann den Wert der Daten-Eigenschaft**Offset** erhöhen, um den Spalt aufzuweiten:  
Verschmolzenes Profil → Profil mit verzahnter Erweiterung; dieses Endergebnis ist abwickelbar

### Fold-Objekt

Ein Fold-Objekt ist das Ergebnis des Abkantens einer Blechplatine an einer gegebenen Linie.

Die Daten-Eigenschaft**Position** anpassen, um die Lage des Bogens im Bezug zur Biegelinie festzulegen.

![](/images/SheetMetal_Example-10o.png)

Querschnitt durch die Abkantung: Die Biegelinie liegt auf der oberen Fläche der Platine (schwarz) mit 10 mm Abstand zur Kante (Flächenrand); ihre Position ist mit einem Fünfeck gekennzeichnet. Sie legt auch die virtuelle Schnittlinie zwischen Platine und der Kante (der abgekantete ebene Blechstreifen) fest.

Verlauf des Bogens (Position):

- Forward: vom **Bogeneinlauf** nach außen
- Middle: von der **Bogenmitte** symmetrisch nach außen und innen
- Intersection of Planes: so, dass die **Schnittlinie der Ebenen** und die Biegelinie kollinear sind
- Backward: vom **Bogenauslauf** nach innen

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Examples/de&oldid=1544591>"
