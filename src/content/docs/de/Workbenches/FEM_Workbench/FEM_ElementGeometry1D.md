---
title: FEM Elementgeometrie1D
---
|  |
| --- |
| FEM ElementGeometrie1D |
| Menüeintrag |
| Modell → Element-Geometrie → Stabquerschnitt |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| C B |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Mystran, Z88 |

## Beschreibung

**ElementGeometrie1D** wird zur Festlegung der Querschnitte (BeamCrossSection-Objekte) von Stabelementen (Träger, Balken, Säulen usw.) verwendet. Derzeit sind folgende drei Querschnittformen vorhanden: Rechteck, Kreis und Ring.

1.1 und neuer: Box und elliptischer Querschnitt stehen auch zur Verfügung.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ElementGeometry1D.svg) Stabquerschnitt drücken.
   * Den Menüeintrag **Modell → Element-Geometrie → ![](/images/FEM_ElementGeometry1D.svg) Stabquerschnitt** auswählen.
2. Die Art des Querschnitts auswählen und die erforderlichen Abmaße eingeben:
   * Rectangular (Rechtwinklig): Breite und Höhe.
   * Circular (Kreis): Durchmesser.
   * Pipe (Ring): Außendurchmesser und Wandstärke,
   * 1.1 und neuer: Elliptical (Elliptisch): axis 1 length und axis 2 length,
   * 1.1 und neuer: Box: Höhe, Breite, Wandstärken T1 - T4.
3. Wahlweise die Schaltfläche Hinzufügen im Aufgaben-Fenster drücken und anschließend die Kante anklicken, die einen festgelegten Querschnitt erhalten soll. Ist die Auswahl leer, werden alle verbleibenden Kanten (deren Querschnitte nicht durch andere ElementGeometrie1D-Objekte festgelegt sind) automatisch zugeordnet.

![](/images/FEM_Beam_sections.PNG)

Arten von Trägerquerschnitten, von CalculiX verwendete lokale Achsen und Maße, die in FreeCAD FEM festgelegt werden

## Eigenschaften

* Daten-Eigenschaft**Section Type**: Legt die Art des Balkenquerschnitts fest (*Rectangular* (rechteckig), *Circular* (Kreisförmig), *Pipe* (Röhre), 1.1 und neuer: *Elliptical* (Elliptisch) und *Box*).
* 1.1 und neuer: Daten-Eigenschaft**Box Height**: Höhe des Box-Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Box* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Box T1**: Wandstärke T1 des Box-Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Box* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Box T2**: Wandstärke T2 des Box-Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Box* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Box T3**: Wandstärke T3 des Box-Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Box* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Box T4**: Wandstärke T4 des Box-Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Box* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Box Width**: Breite des Box-Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Box* Länge der Achse 1 eines elliptischen Querschnitts, wird verwendet, wenn die
* Daten-Eigenschaft**Circ Diameter**: Durchmesser des kreisförmigen Querschnitts; wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Circular* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Axis 1 Length**: Länge der Achse 1 eines elliptischen Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Elliptical* ausgewählt ist.
* 1.1 und neuer: Daten-Eigenschaft**Axis 2 Length**: Länge der Achse 2 eines elliptischen Querschnitts, wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Elliptical* ausgewählt ist.
* Daten-Eigenschaft**Pipe Diameter**: Außendurchmesser des Röhrenquerschnitts; wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Pipe* ausgewählt ist.
* Daten-Eigenschaft**Pipe Thickness**: Wandstärke des Röhrenquerschnitts; wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Pipe* ausgewählt ist.
* Daten-Eigenschaft**Rect Height**: Höhe des Rechteckquerschnitts; wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Rectangular* ausgewählt ist.
* Daten-Eigenschaft**Rect Width**: Breite des Rechteckquerschnitts; wird verwendet, wenn die Daten-Eigenschaft**Section Type** *Rectangular* ausgewählt ist.

## Einschränkungen

* 1.0 und davor: Andere Arten von Querschnitten, die in CalculiX zur Verfügung stehen, (elliptical, box und general) werden zurzeit nicht unterstützt. Man kann die Input-Datei bearbeiten, um sie zu verwenden.
* 1.1 und neuer: Der Balkenquerschnitt general wird derzeit nicht unterstützt. Man kann die Eingabedatei bearbeiten, um ihn zu verwenden.

## Hinweise

* Um die Ergebnisse sehen zu können, die der CalculiX-Löser aus dem Netz ableitet, das auf dem vorgegebenen Querschnitt basiert, muss die Eigenschaft `Beam Shell Result Output 3D` des [FEM LöserCalculixCxxtools](/FEM_SolverCalculixCxxtools/de "FEM SolverCalculixCxxtools/de")-Objekts auf `True` gesetzt werden.
* Einige Querschnitte erfordern bestimmte Elementarten:
  + Kreisquerschnitt - Elemente zweiter Ordnung
  + Ringquerschnitt - Elemente zweiter Ordnung mit verringerter Vernetzung ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Verringerte Vernetzung ist für Stabelemente standardmäßig aktiviert und kann mit der Eigenschaft *Beam Reduced Integration* des Lösers [CalculiX](/FEM_SolverCalculixCxxtools/de "FEM SolverCalculixCxxtools/de") umgeschaltet werden.)
  + 1.1 und neuer: elliptischer Querschnitt - Elemente zweiter Ordnung
  + 1.1 und neuer: Box-Querschnitt - Elemente zweiter Ordnung mit verringerter Vernetzung (wie oben erklärt).
* Diese Funktion verwendet die [\*BEAM SECTION-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html). Die Richtung dieser lokalen Achse 1 wird automatisch von FreeCAD FEM ermittelt und als Richtungsvektor in der zweiten Datenzeile dieses Schlüsselwortes gespeichert.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry1D/de&oldid=1530857>"