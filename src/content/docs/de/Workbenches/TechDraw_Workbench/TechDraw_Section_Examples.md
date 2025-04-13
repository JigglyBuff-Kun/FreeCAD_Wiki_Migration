---
title: TechDraw Schnittbeispiele
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Einleitung

Der Arbeitsbereicch ![](/src/assets/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") hat einen großen Schritt vorwärts gemacht, was die Erstellung von Schnittansichten angeht. Um die Referenzseite nicht zu überfrachten, ist die Absicht dieser Seite, Beispiele zu geben und die ausgeführten Aufgaben korrekt zu benennen.

Regionale Besonderheiten dürfen gerne ergänzt und Fehler verbessert werden.

## Schnitte

Schnitte (Schnittansichten) werden verwendet, um in ein Objekt hineinzusehen und so Einzelheiten darzustellen, die sonst schlecht oder gar nicht zu erkennen sind. Normalerweise enthält eine Zeichnung Ansichten, die ein Objekt von mindestens 2 Seiten darstellt. Wird ein Schnitt eingesetzt, werden seine Lage und Ausrichtung mit einer Schnittlinie in einer der Ansichten dargestellt.

In FreeCAD ist es nicht möglich, einfach eine Schnittlinie zu zeichnen; FreeCAD benötigt stattdessen Eingaben im [Aufgabenbereich](/Task_panel/de "Task panel/de") (siehe [Schnittansicht](/TechDraw_SectionView/de#Anwendung "TechDraw SectionView/de") und [KomplexerSchnitt](/TechDraw_ComplexSection/de#Anwendung "TechDraw ComplexSection/de")).

## Beispielobjekt

Dieses Objekt hat keinerlei Nutzen, außer dass es zur Beschreibung der unterschiedlichen Schnittdarstellungen dient.

![](/src/assets/images/TechDraw_ExampleSection-01.png)

3 Ansichten und eine 3D-Darstellung des Objekts

## Einfache Schnitte

Das Werkzeug ![](/src/assets/images/TechDraw_SectionView.svg) [Schnittansicht](/TechDraw_SectionView/de "TechDraw SectionView/de") erstellt einen einfachen Schnitt, der nur eine Schnittebene verwendet, um ein Objekt zu durchschneiden.

Das Werkzeug benötigt eine Basisansicht (Daten-Eigenschaft**Base View**) zum Positionieren der Schnittebene. Die vertikale Achse der Schnittebene entspricht immer der Normale der Basisansicht und die horizontale Achse der Schnittebene ist parallel zur Schnittlinie. Normalerweise wird auch die horizontale Achse der Schnittansicht parallel zur Schnittlinie ausgerichtet. Der Winkel zwischen Schnittlinie und horizontaler Achse der Basisansicht wird durch Widgets im Bereich **Blickrichtung festlegen** gesteuert:

![](/src/assets/images/TechDraw_ComplexSection_Taskview2.png)

Die Combobox **Blickrichtung als Winkel** ermöglicht eine beliebigen Winkel einzustellen. Die vier Schaltflächen können zum Einstellen vorgegebener Winkel verwendet werden:

![](/src/assets/images/Section-up.svg) 90° (nach oben),
![](/src/assets/images/Section-down.svg) 270° (nach unten),
![](/src/assets/images/Section-left.svg) 180° (nach links),
![](/src/assets/images/Section-right.svg) 0° (nach rechts)

### Horizontaler Schnitt

Schnitt A-A (nach oben)

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-03.png)

Basisansicht + ![](/src/assets/images/Section-up.svg) → Basisansicht und Schnitt A-A in seiner Standardlage

![](/src/assets/images/TechDraw_ExampleSection-04.png)

Basisansicht und Schnitt A-A in seiner endgültigen Lage

Schnitt B-B (nach unten)

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-05.png)

Basisansicht + ![](/src/assets/images/Section-down.svg) → Basisansicht und Schnitt B-B in seiner Standardlage

![](/src/assets/images/TechDraw_ExampleSection-06.png)

Basisansicht und Schnitt B-B in seiner endgültigen Lage

### Vertikaler Schnitt

Schnitt C-C (nach links)

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-07.png)

Basisansicht + ![](/src/assets/images/Section-left.svg) → Basisansicht und Schnitt C-C in seiner Standardlage

![](/src/assets/images/TechDraw_ExampleSection-08.png)

Basisansicht und Schnitt C-C in seiner endgültigen Lage

Schnitt D-D (nach rechts)

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-09.png)

Basisansicht + ![](/src/assets/images/Section-right.svg) → Basisansicht und Schnitt D-D in seiner Standardlage

![](/src/assets/images/TechDraw_ExampleSection-10.png)

Basisansicht und Schnitt D-D in seiner endgültigen Lage

### Beliebiger Schnitt

Schnitt E-E (Schnitt unter einem beliebigen Winkel)

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-11.png)

Basisansicht + "Blickrichtung als Winkel" auf `30°` gesetzt → Basisansicht und Schnitt E-E in seiner Standardlage

![](/src/assets/images/TechDraw_ExampleSection-12.png)

Basisansicht und Schnitt E-E in seiner endgültigen Lage

Standardmäßig verläuft die Schnittbene durch den Mittelpunkt des Begrenzungsrahmens (in diesem Falle deckungsgleich mit dem Schwerpunkt des Objekts). Um den Schnitt zu versetzen können die Werte im Bereich **Lage der Schnittebene** geändert werden.

![](/src/assets/images/TechDraw_ExampleSection-16.png)

![](/src/assets/images/TechDraw_ExampleSection-17.png)

Hier wurde die Schnittlinie um 22 mm in Richtung X und 14 mm in Richtung Y verschoben (ohne die Gewissheit, dass die Linie durch die Lochmitten verläuft). Der automatisch erstellte Z-Wert hat in diesem Fall keinen Einfluss.

### Hilfsansicht

FreeCAD besitzt leider kein Werkzeug zum Ableiten von Hilfsansichten von einer Basisansicht, aber ![](/src/assets/images/TechDraw_SectionView.svg) [Schnittansicht](/TechDraw_SectionView/de "TechDraw SectionView/de") kann auch damit umgehen:

Verwendet man den obigen Schnitt E-E und ändert die beschriebenen Werte auf X = `40 mm` und Y = `-23 mm`, schneidet die Schnittebene das Objekt nicht mehr und wird stattdessen zu einer Hilfsansich. Vorsicht bei der Änderung der Werte: zu große Schritte können FreeCAD abstürzen lassen!

![](/src/assets/images/TechDraw_ExampleSection-12.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-18.png)

Schnitt E-E wie im obigen Beispiel + verschobene Schnittlinie/Schnittebene → Ansicht E

Die Benennung wurde geändert. Die Schnittlinie und ein Pfeil müssen in folgenden Schritten ausgeblendet werden, da ein einzelner Pfeil genügt, um eine Hilfsansicht festzulegen.

### Hinweise

- Verwendete Versionen:
  - Die Beispiele wurden mit Weekly-Build 0.21 - 31155 erstellt, mit den Einstellungen First angle/europäisch und ISO.
  - C-C, D-D, und E-E: Die Standardlagen wurden aktualisiert, um die aktuelle Standardlage darzustellen (Weekly-Build 0.21 - 31709) (aktualisiert 2023-02-03).
- Bei dieser Gelegenheit habe ich festgestellt, dass die Ausrichtung der horizontalen und vertikalen Mittellinien abhängig vom Zeichnungsblatt erfolgt und nicht abhängig von der jeweiligen Ansicht; und so können diese nicht zur Ausrichtung der Schnittansicht zur Basisansicht verwendet werden, wie ich es erwarten würde.
- Eine Schnittlinie/Schnittebene zu versetzen ist etwas kompliziert, da sie nur entlang der globalen Achsen bewegt werden und nicht relativ zu den (lokalen) Achsen der Ansicht.

## Einfache Schnitte im Einsatz

### Einzelner Schnitt

Gibt es nur einen Schnitt auf der Zeichnung und es ist eindeutig zu erkennen, dass das Objekt entlang einer Mittellinie geschnitten wird, kann die Schnittlinie inklusive der Pfeile weggelassen werden.

![](/src/assets/images/TechDraw_ExampleSection-13.png) ![](/src/assets/images/TechDraw_ExampleSection-14.png)

Beide Zeichnungen sind normgerecht

### Eingeklappter Schnitt

Ein Schnitt kann in der Basisansicht integriert sein. Auch bei dieser Varianten können Pfeile und Benennung weggelassen werden.

![](/src/assets/images/TechDraw_ExampleSection-15.png)

## Komplexe Schnitte

Das Werkzeug ![](/src/assets/images/TechDraw_ComplexSection.svg) [Komplexer Schnitt](/TechDraw_ComplexSection/de "TechDraw ComplexSection/de") erstellt eine komple Schnittansicht, die mehr als eine Ebene zum Schneiden eines Objekts verwendet, wie ein abgewinkelter Schnitt (aligned section) oder ein Schnitt über versetzte Ebenen (offset section).

Das Werkzeug erfordert eine Basisansicht (Daten-Eigenschaft**Base View**), um mehrere verbundene Schnittebenen zu positionieren, die durch ein Objekt schneiden; diese werden mit einem 3D-Linienzug (polyline) festgelegt. (Dieses Werkzeug kann auch Kurven verwenden, aber gekrümmte Schnitte sind eher unüblich.)

Die vertikale Achse der Schnittebenen verläuft stets parallel zur Normale der Basisansicht. Ihre horizontalen Achsen werden von den zugehörigen Abschnitten des 3D-Linienzuges (Polyline) abgeleitet. Die Ausrichtung der Schnittansicht hängt dabei von einem der Abschnitte des Linienzuges ab und wird von den Einstellungen der Widgets im Bereich **Blickrichtung festlegen** im Aufgabenbereich des Werkzeugs beeinflusst:

![](/src/assets/images/TechDraw_ComplexSection_Taskview1.png)
![](/src/assets/images/TechDraw_ComplexSection_Taskview2.png)

Dieses Werkzeug hat 3 Wahlmöglichkeiten in der Combobox **Projektionsmethode**, zum Umgang mit den Schnittlinien-Abschnitten:

- `Versetzen`: nur Abschnitte senkrecht zur Ausrichtung der Ansicht werden dargestellt (Voreinstellung).
- `Ausgerichtet`: alle Abschnitte werden in wahrer Länge dargestellt.
- `Nicht Parallel`: alle Abschnitte werden entlang der Ausrichtung der Ansicht projiziert. Abhängig von dem Winkel zwischen einem Abschnitt und der Ausrichtung der Ansicht kann die Projektion kürzer als die (tatsächliche) Schnittfläche sein. Abschnitte parallel zur Ausrichtung der Ansicht ergeben eine einzelne Linie.

### Abgesetzter Schnitt

Ein abgesetzter Schnitt (Schnitt mit mehreren Stufen bzw. Absätzen) startet mit einer Basisansicht plus einem 3D-Linienzug, eine ![](/src/assets/images/PartDesign_NewSketch.svg) [Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de") in diesem Falle.

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/b/b7/Arch_Add.svg)
![](/src/assets/images/TechDraw_ExampleSection-19.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-20.png)

Basisansicht + Skizze + "Projektionsmethode" auf `Versetzen` gesetzt + "Blickrichtung als Winkel" auf `30°` gesetzt → Basisansicht und Schnitt G-G in seiner Standardlage

Der Ausrichtungswinkel der Ansicht muss auf einen passenden Wert gesetzt werden, um unerwartete Ergebnissen zu vermeiden.

![](/src/assets/images/TechDraw_ExampleSection-21.png)

Basisansicht und Schnitt G-G in seiner endgültigen Lage

### Abgewinkelter Schnitt

Ein abgewinkelter Schnitt startet auch mit einer Basisansicht und einem 3D-Linienzug.

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/b/b7/Arch_Add.svg)
![](/src/assets/images/TechDraw_ExampleSection-22.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-23.png)

Basisansicht + Skizze + "Projektionsmethode" auf `Ausgerichtet` gesetzt + ![](/src/assets/images/Section-right.svg) (oder "Blickrichtung als Winkel" auf `0°` gesetzt) → Basisansicht und Schnitt H-H in seiner Standardlage

Der Winkel der Ausrichtung kann mit ![](/src/assets/images/Section-right.svg) und ![](/src/assets/images/Section-left.svg) für eine grobe Ausrichtung festgelegt werden. Er muss geraten werden und auf einen so gut wie möglich passenden Wert gesetzt werden, sonst kann das Ergebnis anders als erwartet ausfallen.

![](/src/assets/images/TechDraw_ExampleSection-24.png)

Basisansicht und Schnitt H-H, wenn "Blickrichtung als Winkel" auf `30°` gesetzt wurde (parallel zum unteren Ende der Schnittlinie). Der Schnitt wurde in seine endgültige Lage verschoben

Wenn der Ausrichtungswinkel der Ansicht auf einen unpassenden Wert gesetzt wurde, könnte das Ergebnis so aussehen:

![](/src/assets/images/TechDraw_ExampleSection-25.png)

Pfeile die nicht auf der gleichen Seite der Schnittlinie liegen, ergeben eine merkwürdige Projektion, "Blickrichtung als Winkel" ist auf `90°` gesetzt

### Hilfsansicht

Das Werkzeug ![](/src/assets/images/TechDraw_ComplexSection.svg) [Komplexer Schnitt](/TechDraw_ComplexSection/de "TechDraw ComplexSection/de") kann, wie auch das Werkzeug ![](/src/assets/images/TechDraw_SectionView.svg) [Schnittansicht](/TechDraw_SectionView/de "TechDraw SectionView/de"), Hilfsansichten aus einer Basisansicht erstellen:

Eine Hilfsansicht startet mit einer Basisansicht und einer einzelnen 3D-Linie, die außerhalb des Objekts liegt.

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/b/b7/Arch_Add.svg)
![](/src/assets/images/TechDraw_ExampleSection-26.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-27.png)

Basisansicht + 3D-Linie → Ansicht I

Der Wert für **Blickrichtung als Winkel** muss der 3D-Linie manuell entnommen werden. Die Benennung wurde bearbeitet. Die Schnittlinie und ein Pfeil müssen in einem folgenden Schritt ausgeblendet werden, da ein einzelner Pfeil genügt, um eine Hilfsansicht festzulegen.

### Nichtparalleler Schnitt

Ein Schnitt der Art "Nicht Parallel" is eine Mischung aus abgewinkelten und versetzten Schnitten.

![](/src/assets/images/TechDraw_ExampleSection-02.png) ![](/src/assets/images/b/b7/Arch_Add.svg)
![](/src/assets/images/TechDraw_ExampleSection-30.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/TechDraw_ExampleSection-31.png)

Basisansicht + Skizze → Basisansicht und Schnitt K-K um -85° gedreht und verschoben

Die Ausrichtung der Pfeile sollte horizontal sein, aber das Werkzeug funktionierte nicht, wenn der Wert für **Blickrichtung als Winkel** auf `0°` gesetzt wurde. Also wurde die Skizze um 5° gedreht und besagter Winkel wird ebenfalls auf `5°` gesetzt.

### Vergleich von Nicht Parallel mit Versetzen und Ausgerichtet

![](/src/assets/images/TechDraw_ExampleSection-32.png)

Basisansicht und Schnitt K-K in 3 Versionen: "Versetzen": blaue Schraffur, "Nicht parallel": schwarze Schraffur, "Ausgerichtet": rote Schraffur

Aus unbekannten Gründen stimmt das Ergebnis nicht, wenn der Wert für **Blickrichtung als Winkel** des abgewinkelten Schnitts auf genau `5°` gesetzt ist. Erst wenn der Schnitt bearbeitet wird und der merkwürdige Wert von `5.14°`, auf den der Winkel irgendwie gesetzt wurde, bestätigt wird, wird das korrekte Ergebnis angezeigt.

![](/src/assets/images/TechDraw_ExampleSection-33.png)

Wie oben mit "Blickrichtung als Wikel" auf genau `5°` gesetzt: die Blickrichtung des zweiten Abschitts von oben ist umgedreht (der Schaft ist sichtbar)

### Komplexe Einzelllinien-Schnitte

Die Länge (Breite) eines komplexen Schnittshängt von der Länge der verwendeten 3D-Linie ab, aber die Ergebnisse von Versetzen und Nicht parallel sind unterschiedlich:

![](/src/assets/images/TechDraw_ExampleSection-34.png)
![](/src/assets/images/TechDraw_ExampleSection-35.png)

Zwei Schnitte, die auf derselben 3D-Line basieren.  
Links: Der Versetzte Schnitt zeigt den Bereich zwischen den Pfeilen geschnitten an, während der Rest des Objekts ungeschnitten bleibt.  
Rechts: Der Nicht-Parallel-Schnitt zeigt nur den Schnitt zwischen den Pfeilen; der Rest des Objekts wird nicht dargestellt.

## Komplexe Schnitte im Einsatz

### Halbschnitt

Ein Schnitt, der ein symmetrisches Objekt zeigt, das auf einer Seite der Mittellinie geschnitten ist und ungechnitten auf der anderen. Die Tiefe wird meistens von einer weiteren Mittellinie festgelegt.

![](/src/assets/images/TechDraw_ExampleSection-28.png)
![](/src/assets/images/TechDraw_ExampleSection-29.png)
![](/src/assets/images/TechDraw_ExampleSection-36.png)

Links und Mitte: Abgesetzter Schnitt mit und ohne Schnittlinie, Pfeile und Name der Ansicht; beide sind normgerecht.  
Rechts: Abgesetzter Schnitt basierend auf einer alternativen Schnittlinie, siehe Schnitt M-M oben.

### Hinweise

- Verwendete Versionen:
  - Die Beispiele wurden mit dem Weekly-Build 0.21 - 31155 erstellt mit den Einstellungen First angle/europäisch und ISO.
  - Weekly-Build 0.21 - 31340 für M-M.
- Die Ausrichtung der Ansicht (die Ausrichtung der Pfeile) muss manuell ermittelt werden.
- Alle komplexen Schnitte müssen manuell gedreht werden.
- Ein Wert für **Blickrichtung als Winkel** von genau `0°` funktioniert nicht mit abgesetzten Schnitten. (180° auch?)
- **Blickrichtung als Winkel** wird auf einen ungewöhnlichen Wert (zurück-) gesetzt, jedes Mal, wenn eine Schnittansicht zum Bearbeiten aktiviert wird.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Section_Examples/de&oldid=1317628>"
