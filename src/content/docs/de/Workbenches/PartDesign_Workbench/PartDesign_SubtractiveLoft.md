---
title: PartDesign Subtraktive Ausformung
---
|  |
| --- |
| PartDesign Ausformung |
| Menüeintrag |
| Part Design → Objekte abziehen → Ausformung |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AdditiveAusformung](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de"), [PartDesign SubtraktivesRohr](/PartDesign_SubtractivePipe/de "PartDesign SubtractivePipe/de") |
|  |

## Beschreibung

**Abziehbare Ausformung** erstellt einen abziehbaren Volumenkörper in dem aktiven Körper indem ein Übergang zwischen zwei oder mehreren Skizzen (auch als Querschnitte bezeichnet) erzeugt wird. Seine geometrische Form wird dann von der bestehenden Form abgezogen.

## Anwendung

### Dialog-basierter Arbeitsablauf

1. Die Schaltfläche (subtraktive) ![](/images/PartDesign_SubtractiveLoft.svg) Ausformung drücken.
2. Im Dialogfeld **Element auswählen** eine Skizze auswählen, die als Basisprofilobjekt verwendet werden soll, und auf OK klicken.
   * Alternativ kann entweder eine einzelne Skizze oder die Fläche eines 3D-Objekts ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")) ausgewählt werden, bevor die Schaltfläche Ausformung gedrückt wird.
3. In den **Ausformungsparametern** die Schaltfläche Schnitt hinzufügen.
4. Die nächste Skizze in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. Diesen Vorgang wiederholen, um weitere Skizzen in der Reihenfolge auszuwählen, in der sie eingefügt werden sollen. (Die Schnittreihenfolge kann irgendwann später im Dialogfeld der Ausformung geändert werden, indem die Schnitte in der Liste an die gewünschte Position gezogen werden.
5. Wenn nötig Optionen festlegen und auf OK klicken.

### Auswahlbasierter Arbeitsablauf

1. Mehrere Skizzen auswählen. Dabei ist die Reihenfolge wichtig, in der sie ausgewählt werden:
   * Die zuerst ausgewählte Skizze wird im nächsten Schritt das Basisprofil (-Objekt).
   * Mit den danach ausgewählten Skizzen werden die Ausformungsabschnitte (loft sections) erstellt. Auch hier ist die Auswahlreihenfolge wichtig: Der erste Ausformungsabschnitt endet an der zweiten Skizze, der zweite Abschnitt an der dritten Skizze und so weiter. (Die Reihenfolge der Querschnitte kann später im Dialog Ausformung geändert werden, indem die Querschnitte in der Liste an die gewünschten Positionen gezogen werden.)
   * Die erste oder die letzte Auswahl kann auch eine Fläche eines 3D-Objekts sein. ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de"))
2. Die Schaltflache (abzuziehende) ![](/images/PartDesign_SubtractiveLoft.svg) Ausformung drücken.
3. Bei Bedarf Optionen anpassen und OK klicken.

## Optionen

* **Regelfläche**: erstellt gerade Übergänge zwischen Querschnitten. Wird nicht auf eine Ausformung mit zwei Querschnitten angewendet. Wenn nicht angekreuzt, werden die Übergänge glatt sein.
* **Geschlossen**: erstellt einen Übergang vom letzten zum ersten Querschnitt, wodurch ein Ring entsteht. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

## Eigenschaften

* Daten**Label**: Eine Benennung für die Operation, kann bei Bedarf geändert werden.
* Daten**Sections** (Schnitte): listet die verwendeten Querschnitte auf.
* Daten**Ruled** (Regelfläche): siehe [Optionen](#Optionen).
* Daten**Closed** (Geschlossen): siehe [Optionen](#Optionen).
* Daten**Midplane**: nicht verwendet.
* Daten**Reversed**: nicht verwendet.
* Daten**Refine** (Aufbereiten): "true" oder "false". Wenn auf "true" gesetzt, wird der Festkörper von Restkanten bereinigt, die durch Formelemente hinterlassen wurden. Siehe [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") für weitere Einzelheiten.

## Hinweise

* Um die Form der Ausformung besser steuern zu können, wird empfohlen, dass alle Querschnitte mit derselben Anzahl von Abschnitten erstellt werden. Beispielsweise sollte für eine Ausformung zwischen einem Rechteck und einem Kreis der Kreis in vier verbundene Bögen aufgebrochen werden.
* Die Ausformung kann in einem Knotenpunkt ([Vertex](/Glossary/de#Vertex "Glossary/de")) einer Skizze oder eines Körpers beginnen oder enden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* [Knotenpunkte](/Glossary/de#Vertices "Glossary/de") können in den meisten Fällen nur (entweder) der Anfang oder das Ende der Ausformung sein.
* Ein Querschnitt kann nicht mit dem unmittelbar vorhergehenden Querschnitt auf derselben Ebene liegen.
* Hat eine Skizze innere Geometrien, d.h. die Ausformung soll Löcher enthalten, dann sollte die Reihenfolge, in der die Skizzengeometrie erstellt wird, für alle Querschnitte dieselbe sein: Entweder startet man alle Querschnitte mit den inneren Geometrien oder mit den äußeren. Andernfalls kann eine ungültige Ausformung entstehen, bei der sich innere und äußere Wände überschneiden.
* Es ist nicht möglich aufgetrennte oder sich kreuzende Schlaufen auszuformen.

## Verweise

* [Part Ausformung Technische Details](/Part_Loft_Technical_Details/de "Part Loft Technical Details/de") erläutert wie eine [Part Ausformung](/Part_Loft/de "Part Loft/de") erstellt wird. Der größte Teil des Inhalts ist auch für den PartDesign Subtraktive Ausformung relevant.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveLoft/de&oldid=1269609>"