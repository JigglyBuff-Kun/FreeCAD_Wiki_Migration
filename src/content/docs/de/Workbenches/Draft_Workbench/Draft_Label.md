---
title: Draft Hinweis
---
|  |
| --- |
| Draft Hinweis |
| Menüeintrag |
| Anmerkung → Bezeichnung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| D L |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Draft Text](/Draft_Text/de "Draft Text/de"), [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Label.svg) **Draft Hinweis** erstellt einen mehrzeiligen Text an einer zweiteiligen Hinweislinie mit Pfeilspitze.

Wenn ein Objekt oder ein Teilelement (Fläche, Kante oder Knotenpunkt) ausgewählt ist, wenn der Befehl aufgerufen wird, kann der Text dazu verwendet werden ein oder zwei Attribute des ausgewählten Elements darzustellen, einschließlich Position, Länge, Flächeninhalt, Volumen und Material. Der Text ist dann mit den Attributen verknüpft und wird aktualisiert, wenn sie ihre Werte ändern.

Um stattdessen ein Textelement ohne Hinweispfeil zu erstellen, verwendet man den Befehl [Draft Text](/Draft_Text "Draft Text").

![](/images/Draft_Label_example.jpg)

Verschiedene Hinweise mit unterschiedlichen Ausrichtungen, Hinweispfeilen und Informationen

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise ein Objekt oder ein Unterelement (Knotenpunkt, Kante oder Fläche) auswählen, dessen Attribute man anzeigen möchte.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Label.svg) Bezeichnung drücken.
   * Den Menüeintrag **Anmerkung → ![](/images/Draft_Label.svg) Bezeichnung** auswählen.
   * Das Tastaturkürzel D dann L.
3. Der Aufgaben-Bereich **Beschriftung** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
4. Wenn ein Element ausgewählt wurde: Einen Eintrag aus dem Ausklappmenü **Labeltyp** auswählen. Siehe [Hinweisarten](#Hinweisarten) weiter unten.
5. Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken. Dieser Punkt bestimmt das Ziel (Pfeilspitze). Es kann irgendwo liegen und muss sich nicht auf einem Element befinden.
6. Den zweiten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken. Dieser Punkt bestimmt den Beginn des horizontalen bzw. vertikalen Abschnitts der Hinweislinie.
7. Den dritten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken. Dieser Punkt bestimmt den Basispunkt des Texts.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel.

* Zur manuellen Eingabe der Koordinaten, werden die X-, Y- und Z-Komponenten einzeln eingegeben und jeweils mit Enter bestätigt. Es kann auch die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben gedrückt werden, wenn die gewünschten Werte vorhanden sind. Es ist ratsam den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* R drücken oder die Checkbox **Relativ** aktivieren, um den Relativmodus ein- bzw. auszuschalten. Bei aktiviertem Relativmodus haben Koordinaten einen Bezug zum letzten Punkt, wenn vorhanden, andernfalls beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder die Checkbox **Global** aktivieren, um den Globalmodus ein- bzw. auszuschalten. Bei aktiviertem Globalmodus haben Koordinaten einen Bezug zum globalen Koordinatensystem, andernfalls beziehen sich Koordinaten auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* S drücken, um [Draft Fangen](/Draft_Snap "Draft Snap") ein- oder auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweisarten

Die folgenden Arten von Hinweisen stehen zur Verfügung:

* `Benutzerdefiniert` (Custom): zeigt den Inhalt der Daten-Eigenschaft**Custom Text** an.
* `Name`: zeigt den internen Namen des Zielobjekts an; der interne Name wird dem Objekt bei seiner Erstellung zugewiesen und ist während der gesamten Existenz des Objekts unveränderlich.
* `Benennung` (Label): zeigt die Benennung des Zielobjekts an; die Benennung eines Objekts kann jederzeit vom Benutzer geändert werden.
* `Position`: zeigt die Koordinaten des Basispunktes des Zielobjekts oder des Zielknotenpunktes an.
* `Length`: zeigt die Länge des Zielobjekts oder des Unterelements an.
* `Area`: zeigt den Flächeninhalt des Zielobjekts oder des Unterelements an.
* `Volume`: zeigt das Volumen des Zielobjekts an.
* `Kennzeichen` (Tag): zeigt das Attribut `Tag` des Zielobjekts an. Objekte, die mit dem Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") erstellt wurden, können dieses Attribut besitzen.
* `Material`: zeigt die Benennung des Materials des Zielobjekts an.
* `Benennung + Position`
* `Benennung + Länge`
* `Benennung + Flächeninhalt`
* `Benennung + Volumen`
* `Benennung + Material`

## Hinweise

* Die Richtung des zweiten Abschnitts der Hinweislinie bestimmt die Ausrichtung des Textes. Wenn der Abschnitt horizontal ist und nach rechts zeigt, wird der Text links (-bündig) ausgerichtet und umgekehrt. Wenn der zweite Abschnitt vertikal nach oben zeigt, wird der Text links ausgerichtet. Zeigt er vertikal nach unten, wird der Text rechts ausgerichtet.
* Draft-Notizen, die mit [FreeCAD Version 0.21](/Release_notes_0.21/de "Release notes 0.21/de") erstellt oder gespeichert werden, sind nicht abwärtskompatibel.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Hinweis (Label-Objekt) ist von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Die folgenden sind, wenn nicht anders angegeben, zusätzliche Eigenschaften:

### Daten

Label

* Daten-Eigenschaft**Custom Text** (`StringList`): bestimmt den Inhalt des Textes, wenn die Daten-Eigenschaft**Label Type** auf `Custom` gesetzt ist. Jedes Element der Liste stellt eine neue Textzeile dar.
* Daten-Eigenschaft**Label Type** (`Enumeration`): bestimmt die Art der von der Notiz dargestellten Information. Siehe [Notizarten](#Notizarten).
* Daten-Eigenschaft**Placement** (`Placement`): bestimmt die Position des Textes in der [3D-Ansicht](/3D_view/de "3D view/de") und, solange die Daten-Eigenschaft**Straight Direction** nicht auf `Custom` gesetzt ist, auch die des ersten Abschnitts der Hinweislinie, an dem der Text befestigt ist. Siehe [Positionierung](/Placement/de "Placement/de").
* Daten-Eigenschaft**Text** (`StringList`): (read-only) bestimmt den Inhalt des Textes, der aktuell dargestellt wird. Jedes Element der Liste stellt eine neue Textzeile dar.

Leader

* Daten-Eigenschaft**Points** (`VectorList`): Bestimmt die Punkte der Hinweislinie.
* Daten-Eigenschaft**Straight Direction** (`Enumeration`): Bestimmt die Richtung des ersten Abschnitts der HInweislinie: `Custom`, `Horizontal` oder `Vertikal`.
* Daten-Eigenschaft**Straight Distance** (`Distance`): Bestimmt die Länge des ersten Abschnitts der Hinweislinie. Wird nur verwendet, wenn die Daten-Eigenschaft**Straight Direction** auf `Horizontal` oder `Vertical` gesetzt wurde. Wenn der Abstand positiv ist, startet die Hinweislinie auf der rechten Seite des Textes und der Text wird nach rechts ausgerichtet. Andernfalls startet die Hinweislinie von der linken Seite des Textes und der Text wird nach links ausgerichtet

Target

* Daten-Eigenschaft**Target** (`LinkSub`) (Ziel): Gibt das Objekt und wahlweise das Unterelement an, mit dem der Hinweis verknüpft ist .
* Daten-Eigenschaft**Target Point** (`Vector`) (Zielpunkt): Gibt die Position der Spitze der Hinweislinie an, d.h. wo der Pfeil befestigt wird.

### Ansicht

Annotation

* Ansicht-Eigenschaft**Annotation Style** (`Enumeration`): Gibt den Beschriftungsstil an, der für den Hinweis verwewendet wird. Siehe [Draft BeschriftungsstilEditor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de").
* Ansicht-Eigenschaft**Scale Multiplier** (`Float`): Gibt den allgemeinen Skalierungsfaktor an, der für den Hinweis verwewendet wird. Siehe

Display Options

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): Gibt an, wie der Text angezeigt wird. Ist es `World`, wird der Text auf einer Ebene angezeigt, die durch die Daten-Eigenschaft**Placement** des Hinweises festgelegt wird. Ist es `Screen`, wird der Text immer in Richtung Bildschirm angezeigt. Dies ist eine übernommene Eigenschaft. Die genannten Optionen sind die umbenannten Optionen ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")).

Graphics

* Ansicht-Eigenschaft**Arrow Size** (`Length`): Legt die Größe des Symbols fest, das der Spitze der Hinweislinie angezeigt wird.
* Ansicht-Eigenschaft**Arrow Type** (`Enumeration`): Legt die Art des Symbols fest, das der Spitze der Hinweislinie angezeigt wird und die Werte `Dot` (Punkt), `Circle` (Ring), `Arrow` (Pfeil), `Tick` (Schrägstrich) oder `Tick-2` (Schrägstrich-2) annehmen kann.
* Ansicht-Eigenschaft**Frame** (`Enumeration`): Legt fest, welche Art Rahmen um den Text herum gezeichnet wird. Die Optionen sind zurzeit `None` (keiner) oder `Rectangle` (Rechteck).
* Ansicht-Eigenschaft**Line** (`Bool`): Legt fest, ob die Hinweislinie angezeigt wird. Auf `false` gesetzt, werden nur der Pfeil und der Text angezeigt.
* Ansicht-Eigenschaft**Line Color** (`Color`): Legt die Farbe von Hinweislinie und Pfeil fest. Diese wird auch für den Rahmen verwendet.
* Ansicht-Eigenschaft**Line Width** (`Float`): Legt die Breite der Hinweisliie fest. Diese wird auch für den Rahmen verwendet.

Text

* Ansicht-Eigenschaft**Font Name** (`Font`): Bestimmt die Schriftart, die zum Zeichnen des Textes verwendet wird. Dies kann ein Schriftname sein, wie `Arial`, eine Stilbezeichnung, wie `sans`, `serif` oder `mono`, eine Familie, wie `Arial,Helvetica,sans`, oder ein Name mit Stilangabe, wie `Arial:Bold`. Wird die angegebene Schriftart im System nicht gefunden, wird stattdessen eine Standardschrift verwendet. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
* Ansicht-Eigenschaft**Font Size** (`Length`): Bestimmt die Größe der Buchstaben. Der Text kann in der [3D-Ansicht](/3D_view/de "3D view/de") unsichtbar sein, wenn dieser Wert sehr klein ist. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
* Ansicht-Eigenschaft**Justification** (`Enumeration`): Bestimmt die horizontale Ausrichtung des Textes: `Left` (links), `Center` (Mitte) oder `Right` (rechts). Wird nur verwendet, wenn Daten-Eigenschaft**Straight Direction** auf `Custom` gesetzt ist. Andernfalls basiert die horizontale Ausrichtung auf dem Vorzeichen (positiv oder negativ) der Daten-Eigenschaft**Straight Distance**.
* Ansicht-Eigenschaft**Line Spacing** (`Float`): Bestimmt den Faktor, der für den Standardzeilenhöhe des Textes verwendet wird.
* Ansicht-Eigenschaft**Max Chars** (`Integer`): Bestimmt die maximale Anzahl von Schriftzeichen in jeder Zeile des Textes.
* Ansicht-Eigenschaft**Text Alignment** (`Enumeration`): Bestimmt die vertikale Ausrichtung des Textes: `Top` (oben), `Middle` (Mitte) oder `Bottom` (unten).
* Ansicht-Eigenschaft**Text Color** (`Color`): Bestimmt die Farbe des Textes.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Draft-Hinweis kann in [Makros](/Macros/de "Macros/de") und aus der [Python](/Python/de "Python/de")-Konsole heraus mit der folgenden Funktion verwendet werden:

```
label = make_label(target_point=App.Vector(0, 0, 0),
                   placement=App.Vector(30, 30, 0),
                   target_object=None, subelements=None,
                   label_type="Custom", custom_text="Label",
                   direction="Horizontal", distance=-10,
                   points=None)

```

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
doc.recompute()

p1 = App.Vector(-200, 1000, 0)
place1 = App.Placement(App.Vector(-1000, 1300, 0), App.Rotation())

label1 = Draft.make_label(p1, place1, target_object=rectangle, distance=500, label_type="Label")
label1.ViewObject.FontSize= 200

p2 = App.Vector(-200, 0, 0)
place2 = App.Placement(App.Vector(-1000, -300, 0), App.Rotation())

label2 = Draft.make_label(p2, place2, target_object=rectangle, distance=500, label_type="Custom",
                          custom_text="Beware of the sharp edges")
label2.ViewObject.FontSize= 200

p3 = App.Vector(1000, 1200, 0)
place3 = App.Placement(App.Vector(2000, 1800, 0), App.Rotation())

label3 = Draft.make_label(p3, place3, target_object=rectangle, distance=-500, label_type="Area")
label3.ViewObject.FontSize= 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Label/de&oldid=1513886>"