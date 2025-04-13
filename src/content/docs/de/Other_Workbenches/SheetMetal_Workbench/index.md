---
title: Arbeitsbereich SheetMetal
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::
![](/images/Sheetmetal_workbench_icon.svg)

Symbol des externen Arbeitsbereichs SheetMetal

## Einleitung

Der Arbeitsbereich ![](/images/Sheetmetal_workbench_icon.svg) SheetMetal ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de") und ist nicht Bestandteil der FreeCAD-Standardinstallation. Er wurde entwickelt, um Werkzeuge zum Erstellen und Abwickeln von Blechobjekten zur Verfügung zu stellen.

Merkmale von Blechobjekten:

- Sie haben eine konstante Wandstärke
- Sie können abgewickelt werden, wenn sie nur aus ebenen Flächen und zylindrischen Verbindungen bestehen

Das Abwicklungswerkzeug ist in beiden Versionen nicht auf Bauteile beschränkt, die mit Werkzeugen dieses Arbeitsbereichs erstellt wurden, sondern kann auch mit Objekten aus den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de") und [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") umgehen, die den oben genannten Merkmalen entsprechen.

![](/images/SheetMetal_Example.png)

HInten das mit dem Addon SheetMetal aufgebaute Blechmodell  
Davor der abgewickelte Festkörper  
Im Vordergrund die Abwicklungsskizze mit Biegelinien für den DXF-Export.

Wenn der DXF-Export zur Steuerung von Maschinen (z. B. Laserschneiden) verwendet wird, muss die DXF-Datei geändert werden, um die Biegelinien zu entfernen, da diese Linien von der Maschine (irrtümlich) als Schnittkontur interpretiert werden könnten.

## Einrichtung

Dieser Arbeitsbereich kann über den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden. Für die manuelle Installation siehe [Weitere Arbeitsbereiche installieren](/Installing_more_workbenches/de "Installing more workbenches/de").

## Werkzeuge

- ![](/images/SheetMetal_AddBase.svg) [Basisobjekt erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de"): Erzeugt ein Blech-Basisobjekt aus einer Skizze, entweder ein Profil oder eine Platine.

- ![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall/de "SheetMetal AddWall/de"): Setzt eine Kante an jede ausgewählte Umfangsfläche einer Grundfläche an. (Die Kante kann durch das Ändern des Winkels zu einem Falz gewandelt werden.)

- ![](/images/SheetMetal_Extrude.svg) [Fläche erweitern](/SheetMetal_Extrude/de "SheetMetal Extrude/de"): Erweitert eine gewählte Umfangsfläche in Richtung ihrer Flächennormalen. (Durch das Hinzufügen einer Konturskizze kann es dazu genutzt werden, verzahnte Geometrie zu erstellen.)

- ![](/images/SheetMetal_AddFoldWall.svg) [Abkanten](/SheetMetal_AddFoldWall/de "SheetMetal AddFoldWall/de"): Kantet eine Fläche entlang einer gewählten Linie mit einem vorgegebenen Biegeradius ab.

- ![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de"): Ebnet ein gekantetes Blechobjekt und erzeugt einen Abwicklungskörper sowie eine Konturskizze mit Biegelinien (stellt ein Dialogfenster zum Festlegen von Parametern bereit).

- ![](/images/SheetMetal_UnattendedUnfold.svg) [Abwickeln ohne Eingaben](/SheetMetal_UnattendedUnfold/de "SheetMetal UnattendedUnfold/de"): Ebnet ein gekantetes Blechobjekt und erzeugt einen Abwicklungskörper sowie eine Konturskizze mit Biegelinien (wenn die Parameter bereits festgelegt sind).

- ![](/images/SheetMetal_UnfoldUpdate.svg) [Abwicklung aktualisieren](/SheetMetal_UnfoldUpdate/de "SheetMetal UnfoldUpdate/de") aktualisiert alle Abwicklungen.

- ![](/images/SheetMetal_AddCornerRelief.svg) [Eckentlastung hinzufügen](/SheetMetal_AddCornerRelief/de "SheetMetal AddCornerRelief/de"): Fügt einer Ecke einen Ausschnitt zur Eckentlastung hinzu.

- ![](/images/SheetMetal_AddRelief.svg) [Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de"): Erster Schritt um ein Schalenobjekt in ein abwickelbares Blechobjekt zu wandeln, fügt einer Ecke einen Entlastungsausschnitt hinzu.

- ![](/images/SheetMetal_AddJunction.svg) [Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de"): Zweiter Schritt um ein Schalenobjekt in ein abwickelbares Blechobjekt zu wandeln, fügt einen Stoß mit Spalt auf der Kante zweier Wände ein.

- ![](/images/SheetMetal_AddBend.svg) [Bogen einfügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de"): Dritter Schritt um ein Schalenobjekt in ein abwickelbares Blechobjekt zu wandeln, ersetzt scharfe Kanten durch runde Bögen.

- ![](/images/SheetMetal_SketchOnSheet.svg) [Skizze auf Blech](/SheetMetal_SketchOnSheet/de "SheetMetal SketchOnSheet/de"): Schneidet den abgekanteten Flächen folgend skizzenbasierte Ausschnitte in ein Blechobjekt.

- ![](/images/SheetMetal_AddCutout.svg) [Extrudierter Ausschnitt](/SheetMetal_AddCutout/de "SheetMetal AddCutout/de"): Erstellt aus einer Skizze einen extrudierten Ausschnitt.

- ![](/images/SheetMetal_Forming.svg) [Prägen](/SheetMetal_Forming/de "SheetMetal Forming/de"): Prägt Formen mit und ohne Löcher in eine Blechplatine.

- ![](/images/SheetMetal_BaseShape.svg) [Grundform hinzufügen](/SheetMetal_BaseShape/de "SheetMetal BaseShape/de"): Fügt eine Grundform auf Basis von Parametern hinzu (eingeführt in Version 0.3.10).

## Kurzbeschreibung

Dieser Arbeitsbereich enthält Werkzeuge für die zwei Hauptaufgaben:

- Blechobjekte erstellen
- Blechobjekte abwickeln

Dieser Abschnitt ist dazu gedacht, eine grobe Vorstellung davon zu vermitteln, wie die mitgelieferten Werkzeuge zu verwenden sind. Ausführlichere Informationen können auf der Seite der jeweiligen Werkzeuge (siehe oben) oder in den verknüpften Anleitungen (siehe unten) gefunden werden.

### Ein Blechobjekt erstellen

#### Mit einem Profil beginnen

1. Einen offenen Linienzug erstellen (vorzugsweise mit dem Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")).
2. Den Befehl ![](/images/SheetMetal_AddBase.svg) [Basisobjekt erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") anwenden, um ein Blechprofil zu erstellen.

#### Mit einer Platine beginnen

1. Einen geschlossenen Linienzug erstellen (vorzugsweise mit dem Sketcher).
2. Den Befehl ![](/images/SheetMetal_AddBase.svg) [Basisobjekt erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") anwenden, um eine Blechplatine zu erstellen.

#### Mit einer Grundform beginnen

1. Den Befehl ![](/images/SheetMetal_BaseShape.svg) [Grundform hinzufügen](/SheetMetal_BaseShape/de "SheetMetal BaseShape/de") anwenden, um ein auf Parametern basierendes Blech-Grundobjekt zu erstellen (eingeführt in Version 0.3.10).

#### Mit einem PartDesign-Objekt beginnen

1. Einen geschlossenen Linienzug erstellen (vorzugsweise mit dem Sketcher).
2. Den Befehl ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") anwenden, um einen prismatischen Körper zu erstellen.
3. Der Befehl ![](/images/PartDesign_Thickness.svg) [PartDesign Dicke](/PartDesign_Thickness/de "PartDesign Thickness/de") macht daraus ein Objekt mit konstanter Wandstärke.
4. Um es abwickelbar zu machen, braucht es einige Stöße und Verbindungen zwischen den Wänden:
   1. Der Befehl ![](/images/SheetMetal_AddRelief.svg) [Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de") schneidet die ausgewählten Ecken auf.
   2. Der Befehl ![](/images/SheetMetal_AddJunction.svg) [Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de") fügt Stöße mit Lücken zwischen aneinandergrenzenden Wänden ein, die getrennt werden sollen.
   3. Der Befehl ![](/images/SheetMetal_AddBend.svg) [Bogen einfügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de") fügt zylindrische Verbindungen zwischen den Wänden ein, die verbunden bleiben sollen.

Einige Parameter werden vom Elternobjekt (von den Elternobjekten) übernommen, aber es ist besser die entsprechenden Parameter bei jedem Schritt zu überprüfen.

Nun sollte geprüft werden, ob das resultierende Blechobjekt abgewickelt werden kann.(siehe unten [...abwickeln](#Ein_Blechobjekt_abwickeln)).

#### Weitere Elemente hinzufügen

Die abwickelbaren Blech-Basisobjekte können erweitert werden:

1. Den Befehl ![](/images/SheetMetal_Extrude.svg) [Fläche erweitern](/SheetMetal_Extrude/de "SheetMetal Extrude/de") verwenden, um Flächen zu vergrößern.
2. Der Befehl ![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall/de "SheetMetal AddWall/de") fügt dem bestehenden Objekt neue Kanten oder Falze hinzu.
3. Den Befehl ![](/images/SheetMetal_AddCornerRelief.svg) [Eckentlastung hinzufügen](/SheetMetal_AddCornerRelief/de "SheetMetal AddCornerRelief/de") verwenden, um Eckentlastungen hinzuzufügen oder umzuformen.
4. Der Befehl ![](/images/SheetMetal_AddFoldWall.svg) [Abkanten](/SheetMetal_AddFoldWall/de "SheetMetal AddFoldWall/de") kantet eine Fläche entlang einer gewählten Linie ab, d.h. er trimmt die Fläche an besagter linie, setzt die abgeschnittene Seite um und verbindet beide mit einem zylindrischen Übergang.
5. Der Befehl ![](/images/SheetMetal_SketchOnSheet.svg) [Skizze auf Blech](/SheetMetal_SketchOnSheet/de "SheetMetal SketchOnSheet/de") schneidet Löcher in das Objekt, beginnend an der ausgewählten Fläche und dann den angrenzenden Flächen und Verbindungen folgend.
6. Der Befehl ![](/images/SheetMetal_Forming.svg) [Prägen](/SheetMetal_Forming/de "SheetMetal Forming/de") Prägt (oder Stanzt) ein Formobjekt in eine Fläche.

: : Nach der Erzeugung eines WallForming-Objekts ist das Blechobjekt **nicht länger abwickelbar**!

Einige Werkzeuge aus anderen Arbeitsbereichen können verwendet werden, um Löcher hinzuzufügen oder Kanten umzuformen.

### Ein Blechobjekt abwickeln

Um ein Blechobjekt abzuwickeln, verwendet man das Werkzeug ![](/images/SheetMetal_Unfold.svg) [Abwickeln](/SheetMetal_Unfold/de "SheetMetal Unfold/de") bzw. ![](/images/SheetMetal_UnattendedUnfold.svg) [Abwickeln ohne Eingaben](/SheetMetal_UnattendedUnfold/de "SheetMetal UnattendedUnfold/de").

Das Ergebnis ist ein 3D-Objekt, wahlweise mit Skizzen für Kontur und Biegelinien.

### Beispiele

Bis Seiten mit Anleitungen innerhalb des Wikis zur Verfügung stehen, gibt es eine Seite mit [Beispielen](/SheetMetal_Examples/de "SheetMetal Examples/de").

![](/images/SheetMetal_Example-01.png)
![](/images/SheetMetal_Example-02.png)
![](/images/SheetMetal_Example-03.png)
![](/images/SheetMetal_Example-04.png)
![](/images/SheetMetal_Example-05.png)

Sie enthält auch ein paar Hinweise zu den [Eigenschaften](/SheetMetal_Examples/de#SheetMetal_Eigenschaften "SheetMetal Examples/de").

## Einschränkungen

- Der Arbeitsbereich ist betroffen von dem mit FreeCAD verbundenen Problem der [topologischen Benennung](/Glossary/de#Topological_Naming "Glossary/de"). Wenn bei der Bearbeitung eines in der Historie des Teils früheren Abkantvorgangs die Flächen neu nummeriert werden, können die folgenden Abkantungen betroffen sein und die Flächen vertauscht werden. Wenn die Biegungsmerkmale nicht brechen, öffnet ein Doppelklick darauf ein Dialogfeld, in dem die richtige Fläche in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt und die Abkantung aktualisiert werden kann.
- Das Werkzeug zum Abwickeln hat einige Einschränkungen und versagt in bestimmten komplexen Situationen. Wenn es fehlschlägt, sollte man es durch Auswahl einer anderen Fläche erneut versuchen.
- Häufige Abstürze: Man sollte vorsichtig sein und versuchen, weder in die Verbindungsbögen (die Rundungen) entlang der Flächen oder in den Winkeln hineinzuschneiden, noch Löcher oder Ausklinkungen durch die Winkel zu machen.

## Anleitungen

### SheetMetal-Anleitung von meme2704

Die folgende Anleitung ist der unter [Verweise](#Verweise) erwähnten PDF-Anleitung nachgebildet.

#### Vorstellung des Arbeitsbereichs

Nach dem herunterladen und installieren der Erweiterung, öffne sie.

![](/images/Sm1.png)

#### 1. Arbeitsgang

- Die Grundlage erstellen: Entweder im Arbeitsbereich "Part" oder "Draft" eine Skizze erstellen, die alle Löcher und Ausschnitte enthält, und diese Grundlage auf die Blechstärke extrudieren.
- Daran denken, dass die Kanten immer noch hinzukommen wie auch die Biegeradien .

![](/images/Sm2.png)

#### 2. Arbeitsgang

- Öffne den Arbeitsbereich SheetMetal.
- Wähle 1 Dicke der Kante (Kante) der Grundplatte und klicke auf das Werkzeug "Biegen". 90° Vorgabe Biegewinkel kann von 0 bis 90 ° geändert werden.
- Die Kantenhöhe beträgt standardmäßig 10 mm und kann von 0,1 bis xxx mm bearbeitet werden.
- Der Biegeradius entspricht standardmäßig der Dicke und kann von 0,1 bis xx mm (niemals 0) geändert werden.
- Spalt1, Spalt2 ist das Zurückziehen der gefalteten Kante aus der Ecke der Basis (0 akzeptieren).
- Standard umkehren: Falschfalten auf Z +, Wahr auf ZReliefd schneidet die Ecke zwischen der Falte und der Basis (inaktiv, wenn Spalt = 0).
- Reliefw fügt 1 Schlitz zwischen dem Zuschnitt und der Kante hinzu (inaktiv, wenn reliefd = 0).

![](/images/Sm3.png)

Wiederhole diesen Vorgang so oft, wie Seiten zum biegen vorhanden sind.  
Falten 1 Wiederholung mit Gebrauch von "vergrößern".

![](/images/Sm4a.png)

Um eine wieder hinzuzufügen, wiederhole den gleichen Arbeitsgang, indem die Dicke der betreffenden Kante ausgewählt wird.  
Um den Abstand zwischen 2 Kanten zu verringern, verwende "ausdehnen", um den Abstand zwischen den beiden Kanten zu verringern.  
Wähle die Dicke und gib die Länge an, die hinzugefügt werden soll.  
Beachte, dass wenn die Verlängerung der 1. Kante vor dem Falzen der Wiederholung erfolgt, dies nicht berücksichtigt wird. Wenn der Verlängerung eine identische Faltung hinzugefügt wird, wird dies korrekt angezeigt, aber das Abwickeln wird nicht durchgeführt.

Falzen von einer 2. Kante:  
Jetzt müssen wir die 2 Kanten trennen, sonst vereinigen sie sich und die Abwicklung wird unmöglich.

- Erste Methode: Entfernen einer Kante vornehmen.
  - Gib einen Wert an, der geringfügig größer als Spalt1 (oder Spalt2) ist. Bei Null besteht noch Verbindung.
- 2. Methode einen Schnitt bei 45 ° machen, siehe weiter, dieses Werkzeug verwenden.

![](/images/Sm5a.png)

#### Abwicklung

Wähle eine Referenzfläche (hier die orangene Fläche) und klicke auf die Schaltfläche in der Werkzeugleiste.  
Wir erhalten den blauen Teil, von dem es ausreicht, die Werte X, Y oder Z zu ändern, um ihn als Ganzes zu sehen.

![](/images/Sm6.png)

#### Schneide die Umschläge bei 45 °

Nach dem Falten der Umschläge ohne das ein Rücknahme gemacht wurde, dadurch erscheint die Form.

![](/images/Sm7a.png)

Um es zu tun muss bei 45 ° geteilt werden (oder die folgenden Halbierenden Umschläge sind ungleich breit).

- Erstelle eine neuen Skizze bezogen auf den gemeinsamen Teil der beiden Umschläge.
- Erstelle einen verknüpften Anschlag, durch Wahl der Außenkante des "Scharniers".
- Zeichne ein Dreieck, dessen Spitze am Ende begrenzt ist und eine Seite in 45 ° ausgerichtet ist, geben Sie der kleinen Seite 1 Mindestbreite (0,1 mm sind ausreichend) und fertigen Sie eine Tasche an.

Achten Sie darauf, nicht das "Scharnier" zu zerkratzen, bei dem die Nacktheit die Spitze des Dreiecks am Rand der Faltlinie gebunden hat.

![](/images/Sm8a.png)

Abwicklung

![](/images/Sm9.png)

#### Kanten und Umschläge durchstechen

Machen Sie diese Löcher und Schnitte nach dem Falten und vor dem Abwickeln.  
Achten Sie immer darauf, die Falzlinien nicht zu "zerkratzen".

![](/images/Sm10.png)

#### Verdrahtete Umschläge herstellen

Mache eine Falte an der Kante der Seite, bei 45 ° von 0,1 mm Länge, dann eine andere umgekehrt bei 45 ° der Länge des benachbarten Umschlags, dann verlängere die gegenüberliegende Seite, sie wird übergehen und sie werden nicht zusammengeführt.

![](/images/Sm11.png)

#### Sonderfall derselben durchstochenen Kante

In diesem speziellen Fall funktioniert das Abwickeln nur, indem die gelbe Fläche als Referenz ausgewählt wird.

![](/images/Sm12.png)

#### Sonderfall Loch überspannt die Faltungen

Zuvor wurde mehrmals gesagt, dass es nicht notwendig ist, die Faltlinien zu schneiden.  
Was macht man ?

![](/images/Sm13.png)

- Mache die Basis mit seinem halbrunden Loch und mache die beiden halbseitigen und die beiden halbgefalteten getrennt.
- Mache dann eine Verlängerung auf einer der Seiten der Breite der Öffnung minus 0,1 mm, die beiden Kanten bleiben somit getrennt.
- Dann auf dieser Verlängerung (in grün) die Kontur des Schnitts zeichnen und eine Tasche machen
- Das Ergebnis ist das rote Stück darüber, und die Abwicklung funktioniert, bleibt die Linie, die die beiden Kanten zuvor getrennt hat

![](/images/Sm14.png)

## Videos

- [The Elegant SheetMetal Workbench](https://www.youtube.com/watch?v=xidvQYkC4so) von Joko Engineering

## Verweise

- [Makro Sheet Metal Unfolder](/Macro_Sheet_Metal_Unfolder "Macro Sheet Metal Unfolder"), das ursprüngliche Makro, auf dem das Abwicklungswerkzeug basiert.
- [Eine englische und französische Aleitung im PDF-Format](https://forum.freecadweb.org/viewtopic.php?f=3&t=25002) im FreeCAD-Forum.
- Fehler melden/Funktionen anfragen: <https://github.com/shaise/FreeCAD_SheetMetal/issues>.

## Referenzen

- Autoren:
  - Werkzeuge zum Abkanten: Urheberrechtlich geschützt 2015-2018 durch Shai Seger
  - Abwicklungswerkzeug: Urheberrechtlich geschützt 2014 durch Ulrich Brammer
- Lizenz: [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
- Quellcode auf github: <https://github.com/shaise/FreeCAD_SheetMetal>

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Workbench/de&oldid=1522758>"
