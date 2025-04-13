---
title: Draft Maß
---
|  |
| --- |
| Draft Maß |
| Menüeintrag |
| Anmerkung → Abmessung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| D I |
| Eingeführt in Version |
| 0.8 |
| Siehe auch |
| [Draft MaßKippen](/Draft_FlipDimension/de "Draft FlipDimension/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Dimension.svg) **Draft Maß** erstellt ein [lineares Maß](#Lineares_Maß), ein[Radiales Maß](#Radiales_Maß) oder ein [Winkelmaß](#Winkelmaß).

Lineare Maße auf Basis von Kanten und radiale Maße sind parametrisch. Das heißt, dass sie aktualisiert werden, wenn die bemaßte Kante verändert wird. Die bemaßten Kanten können zu Draft-Objekten gehören oder zu Volumenkörpern. Winkelmaße sind nicht parametrisch.

Draft-Maße können auf einem [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")-Zeichnungsblatt in einer [TechDraw DraftAnsicht](/TechDraw_DraftView/de "TechDraw DraftView/de") oder [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de") angezeigt werden. Alternativ bietet der Arbeitsbereich [TechDraw](/TechDraw_Workbench "TechDraw Workbench") eigene Bemaßungsbefehle, aber die erstellen Maße, die nur auf dem Zeichnungsblatt dargestellt werden und nicht in der [3D-Ansicht](/3D_view/de "3D view/de").

![](/images/Screenshot_Draft_Dimension.jpg)

Durch drei Punkte definiertes lineares Maß (Längenmaß)

## Anwendung

Siehe auch: [Draft Fach](/Draft_Tray/de "Draft Tray/de"), [Draft Fangen](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

### Lineares Maß

1. Wahlweise eine gerade Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Dimension.svg) Abmessung drücken.
   * Den Menüeintrag **Anmerkung → ![](/images/Draft_Dimension.svg) Abmessung** auswählen.
   * Das Tastaturkürzel D dann I.
3. Der Aufgabenbereich **Dimension** wird geöffnet. Siehe [Optionen](#Optionen) für mehr Informationen.
4. Wenn bisher noch keine Kante ausgewählt wurde, wählt man eine der folgenden Möglichkeiten:
   * E oder die Schaltfläche ![](/images/View-select.svg) Kante auswählen drücken und eine gerade Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Die Alt-Taste drücken und halten, eine gerade Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen und die Alt-Taste loslassen.
   * Den zu messenden Abstand festlegen durch Auswahl von Punkten:
     + Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
     + Den zweiten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Zum Positionieren der Maßlinie hat man folgende Möglichkeiten:
   * Für ein ausgerichtetes Maß:
     + Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
   * Für ein horizontales Maß:
     + Den Mauszeiger über oder unter die Kante oder die Punkte bewegen.
     + Die Shift-Taste dücken und halten, den Mauszeiger bewegen und einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Für ein vertikales Maß:
     + Den Mauszeiger links oder rechts neben die Kante oder die Punkte bewegen.
     + Die Shift-Taste dücken und halten, den Mauszeiger bewegen und einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.

### Radiales Maß

1. Wahlweise eine kreisförmige Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Den Befehl aufrufen, wie oben beschrieben.
3. Der Aufgabenbereich **Dimension** wird geöffnet. Siehe [Optionen](#Optionen) für mehr Informationen.
4. Wenn bisher noch keine Kante ausgewählt wurde, wählt man eine der folgenden Möglichkeiten:
   * E oder die Schaltfläche ![](/images/View-select.svg) Kante auswählen drücken und eine kreisförmige Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Die Alt-Taste drücken und halten, eine kreisförmige Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen unddie Alt-Taste loslassen.
5. Zum Positionieren der Maßlinie hat man folgende Möglichkeiten:
   * Für ein Durchmessermaß:
     + Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
   * Für ein radiales Maß:
     + Die Shift-Tast drücken und halten und einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de").

### Winkelmaß

1. Den Befehl aufrufen, wie oben beschrieben:
2. Das Aufgaben-Fenster **Dimension** wird geöffnet. Siehe [Optionen](#Optionen) für mehr Informationen.
3. Eine der folgenden Möglichkeiten auswählen:
   * E oder die Schaltfläche ![](/images/View-select.svg) Kante auswählen drücken und eine erste gerade Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. Diesen Schritt zur Auswahl einer zweiten geraden Kante wiederholen.
   * Die Alt-Taste drücken und halten, zwei gerade Kanten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen und die Alt-Taste loslassen.
4. Zum Positionieren der Maßlinie einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
5. Der angezeigte Winkel hängt von den Kanten und dem ausgewählten Punkt ab.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* R drücken oder die Checkbox **Relativ** aktivieren, um den Relativ-Modus umzuschalten. Ist der Relativ-Modus aktiviert, beziehen sich Koordinaten auf den letzten Punkt, falls vorhanden, andernfalls beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet und ermöglicht so mit dem Erstellen von Maßen fortzufahren. Alle folgenden Maße starten am Endpunkt des vorhergehenden Maßes und verwenden dieselbe Grundlinie wie das erste Maß. Man beachte, dass die Auswahl von Kanten bei aufeinanderfolgenden Maßen nicht möglicht ist.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl fertigzustellen.

## Hinweise

* Lineare und radiale Draft-Maße können mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") editiert werden.
* Draft-Maße, die mit [FreeCAD Version 0.21](/Release_notes_0.21/de "Release notes 0.21/de") erstellt oder gespeichert wurden, sind nicht rückwärtskompatibel.

## Preferences

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their Ansicht**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft Dimension-Objekt ist von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Die folgenden sind, wenn nicht anders angegeben, zusätzliche Eigenschaften:

### Daten für lineare und radiale Maße

Maß

* Daten-Eigenschaft**Dimline** (`VectorDistance`): legt den Punkt fest, durch den die Maßlinie geht.
* Daten-Eigenschaft**Linked Geometry** (`LinkSubList`): legt das Objekt und die Unterelemente fest mit denen das Maß verbunden ist.
* Daten-Eigenschaft**Normal** (`Vector`): legt die Normale der Textebene fest.
* Daten-Eigenschaft (versteckt)**Support** (`Link`): legt das bemaßte Objekt fest.

Lineares/radiales Maß

* Daten**Direction** (`Vector`): legt die Richtung des Maßes fest.
* Daten**Distance** (`Length`): (nur lesen) legt den Wert des Maßes fest.
* Daten**End** (`VectorDistance`): legt den Endpunkt des Maßes fest.
* Daten**Start** (`VectorDistance`): legt den Startpunkt des Maßes fest.

Radiales Maß

* Daten**Diameter** (`Bool`): legt fest, ob ein radiales Maß als Durchmesser Maß ausgegeben wird. Wird bei linearen Maßen nicht verwendet.

### Winkelmaße

Winkelmaß

* Daten**Angle** (`Angle`): (nur lesen) legt den Wert des Maßes fest.
* Daten**Center** (`VectorDistance`): legt die Mitte des Maßes fest.
* Daten**First Angle** (`Angle`): legt den Startwinkel des Maßes fest.
* Daten**Last Angle** (`Angle`): legt den Endwinkel des Maßes fest.

Maß

* Daten-Eigenschaft**Dimline** (`VectorDistance`): legt den Punkt fest, durch den der Bogen des Maßes geht.
* Daten-Eigenschaft (versteckt)**Linked Geometry** (`LinkSubList`): nicht verwendet.
* Daten-Eigenschaft (versteckt)**Normal** (`Vector`): legt die Normale der Ebene des Maßes fest.
* Daten-Eigenschaft (versteckt)**Support** (`Link`): nicht verwendet.

### Ansicht

Anmerkung

* Ansicht**Annotation Style** (`Enumeration`): legt den Stil der Anmerkung die am Maß angebracht ist fest. Siehe [Draft Beschriftungsstil Editor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de").
* Ansicht**Scale Multiplier** (`Float`): legt den allgemeinen Maßstab Faktor der für das Maß gilt fest.

Annzeige Optionen

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): Gibt an, wie der Text angezeigt wird. Ist es `World`, wird der Text auf einer Ebene angezeigt, die durch die Daten-Eigenschaft**Normal** des Maßes festgelegt wird. Ist es `Screen`, wird der Text immer in Richtung Bildschirm angezeigt. Dies ist eine übernommene Eigenschaft. Die genannten Optionen sind die umbenannten Optionen ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")).

Graphik

* Ansicht**Arrow Size** (`Length`): legt die Größe des Symbols das am Ende der Maßlinie oder des Bogens angezeigt wird fest.
* Ansicht**Arrow Type** (`Enumeration`): legt den Typ des Symbols, dass am Ende einer Maßlinie oder eines Bogens angezeigt wird fest, dieses kann `Punkt`, `Kreis`, `Pfeil`, `Tick` oder `Tick-2` sein.
* Ansicht**Dim Overshoot** (`Distance`): legt die zusätzliche Länge die an die Maßlinie addiert wird fest. Wird bei Winkelmaßen nicht verwendet.
* Ansicht**Ext Lines** (`Distance`): legt die Länge der Maßhilfslinien, welche vom der Maßlinie zu den gemessenen Punkten gehen, fest. Verwende `0` für volle Maßhilfslinien. Ein negativer Wert legt die Lücke zwischen den Enden der Maßhilfslinien und den gemessenen Punkten fest. Ein positiver Wert legt die maximale Länge der Maßhilfslinien fest. Wird nur bei linearen Maßen verwendet.
* Ansicht**Ext Overshoot** (`Distance`): legt die zusätzliche Länge der Maßhilfslinien über die Maßlinie hinausragend fest. Wird bei Winkelmaßen nicht verwendet.
* Ansicht**Flip Arrows** (`Bool`): legt fest, ob die Richtung der Symbole am Ende der Maßlinie oder des Bogens umgedreht werden soll. Funktioniert nur wenn die Symbole Pfeile sind.
* Ansicht**Line Color** (`Color`): legt die Farbe von Linie oder Bogen und der Pfeile fest.
* Ansicht**Line Width** (`Float`): legt die Breite der Linien oder des Bogens der zum Maß gehört fest.
* Ansicht**Show Line** (`Bool`): legt fest, ob die Maßlinie angezeigt wird. Hat keinen Einfluss auf die Anzeige der Maßhilfslinien und der Überstände. Wird bei Winkelmaßen nicht verwendet.

Text

* Ansicht**Flip Text** (`Bool`): legt fest, ob die Richtung des Textes umgedreht werden soll.
* Ansicht**Font Name** (`Font`): Legt die Schrift in der der Text geschrieben wird fest. es kann ein Schriftname, wie `Arial` sein, ein Standard Stil wie `sans`, `serif` oder `mono`, eine Familie wie `Arial,Helvetica,sans`, oder ein Name mit einem Stil wie `Arial:Bold`. Wenn die vorgegebene Schift im System nicht gefunden werden kann, dann wird statt dessen die Standardschrift verwendet.
* Ansicht**Font Size** (`Length`): legt die Größe der Buchstaben fest. der Text kann in der [3D Ansicht](/3D_view/de "3D view/de") nicht zu sehen sein, wenn der Wert zu klein ist.
* Ansicht**Override** (`String`): legt fest, ob statt des aktuellen Maßwertes ein benutzerdefinierter Text angezeigt wird. Verwende die Zeichenfolge `$dim` innerhalb des Textes um den aktuellen Maßwert einzufügen.
* Ansicht**Text Color** (`Color`): legt die Farbe des Textes fest. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Ansicht**Text Position** (`VectorDistance`): legt die Position des Textes in absoluten Koordinaten fest. `[0, 0, 0]` zeigt den Text an seiner Standard Position nahe der Maßlinie oder des Bogens.
* Ansicht**Text Spacing** (`Length`): legt den Abstand zwischen Text und Maßlinie oder Bogen fest.

Einheiten

* Ansicht**Decimals** (`Integer`): legt die Anzahl der Nachkommastellen mit der der Maßwert angezeigt wird fest.
* Ansicht**Show Unit** (`Bool`): legt fest ob die Maßeinheit nahe beim Wert der Maßzahl ausgegeben wird. Wird bei Winkelmaßen nicht verwendet.
* Ansicht**Unit Override** (`String`): gibt an, in welcher Maßeinheit der Maßwert angezeigt werden soll, zum Beispiel, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` oder `arch` für Architekten Einheiten. Lasse dies leer um die Standard Einheit zu verwenden. Wird für Winkelmaße nicht verwendet.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft-Maßes wird die Methode `make_dimension` des Draft-Moduls verwendet ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")). Diese Methode ersetzt die veraltete Methode `makeDimension`.

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

Es gibt mehrere Möglichkeiten,diese Methode aufzurufen, abhängig von den an sie übergebenen Argumenten.

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* Erstellt ein lineares Maß (`dimension`-Objekt), indem es den Abstand zwischen den Punkten `p1` und `p2` misst.
* Erstellt ein lineares Maß (`dimension`-Objekt), verknüpft mit dem Objekt `object`, das den Abstand zwischen seinen Knotenpunkten mit den Indizes `i1` und `i2` misst.
* Erstellt ein Bogenmaß (`dimension`-Objekt), verknüpft mit dem Objekt `object`, wobei `i1` der Index der gekrümmten Kante ist, die gemessen wird und `mode` die Art des Maßes festlegt, entweder `"radius"` (Radienmaß) oder `"diameter"` (Durchmessermaß).
  + `p3` im ersten Aufruf und `p4` in den anderen beiden geben einen optionalenPunkt an, durch den die Maßlinie verlaufen soll.
  + Alle Punkte werden durch `FreeCAD.Vector`, ihren Ortsvektor festgelegt.

Zum Erstellen eines Winkelmaßes wird die folgende Methode verwendet:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* Erstellt ein Winkelmaß (angular `dimension`) aus `center`, dem gegebenen Mittelpunkt, `angles`, einer Liste mit zwei Elementen, und Punkt `p3`, durch den der Bogen verlaufen soll.
  + Wenn `angle1 > angle2` ist, wird der angezeigte Winkel aus der Differenz `angle1 - angle2` ermittelt; anderenfalls wird der entgegengesetzte Winkel `360 - (angle2 - angle1)` angezeigt.
  + Die Winkel sollten in Grad eingegeben werden.

Die Ansicht-Eigenschaften von `dimension` können durch Überschreiben der Attribute geändert werden; z.B. kann `ViewObject.FontSize` (Schrifthöhe) mit einem neuen Wert in Millimetern überschrieben werden.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/de&oldid=1565029>"