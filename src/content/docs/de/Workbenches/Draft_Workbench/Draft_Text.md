---
title: Draft Text
---
|  |
| --- |
| Draft Text |
| Menüeintrag |
| Anmerkung → Text |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| T E |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft Notiz](/Draft_Label/de "Draft Label/de"), [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Text.svg) **Draft Text** erstellt einen mehrzeiligen Text an einem vorgegebenen Punkt.

Um stattdessen ein Textelement mit einem Hinweispfeil zu erstellen, verwendet man den Befehl [Draft Notiz](/Draft_Label/de "Draft Label/de").

![](/images/Draft_Text_example.png)

Ein einzelner Punkt, den das Positionieren des Textes erfordert

## Anwendung

Siehe auch: [Draft Fach](/Draft_Tray/de "Draft Tray/de") and [Draft Fangen](/Draft_Snap/de "Draft Snap/de").

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Text.svg) Text drücken.
   * Den Menüeintrag **Anmerkung → ![](/images/Draft_Text.svg) Text** auswählen.
   * Das Tastaturkürzel T dann E.
2. Der Aufgabenbereich **Text** wird geöffnet. Siehe [Optionen](#Optionen) für mehr Informationen.
3. Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
4. Den gewünschten Text eingeben, Enter drücken, um eine neue Zeile zu beginnen.
5. Zweimal Enter drücken oder die Schaltfläche ![](/images/Button_valid.svg) Text erstellen drücken, um den Befehl abzuschließen.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet und ermöglicht so mit dem Erstellen von Texten fortzufahren. Das Tastaturkürzel funktioniert nicht im zweiten Aufgaben-Bereich. Diese Option steht in FreeCAD Version 0.19 oder davor im ersten Aufgaben-Bereich nicht zur Verfügung.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Ein Draft-Text kann durch Doppelklick in der [Baumansicht](/Tree_view/de "Tree view/de") zum Bearbeiten geöffnet werden.
* Mit [FreeCAD Version 0.21](/Release_notes_0.21/de "Release notes 0.21/de") erstellte oder gesicherte Draft-Texte sind nicht abwärtskompatibel.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft Text-Objekt ist von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Die folgenden sind, wenn nicht anders angegeben, zusätzliche Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Placement** (`Placement`): Legt die Position des Textes in der [3D-Ansicht](/3D_view/de "3D view/de") fest. Siehe [Positionierung](/Placement/de "Placement/de").
* Daten-Eigenschaft**Text** (`StringList`): Legt den Inhalt des Textes fest. Jeder Eintrag in der Liste entspricht einer neuen Textzeile.

### Ansicht

Annotation

* Ansicht-Eigenschaft**Annotation Style** (`Enumeration`): Gibt den Beschriftungsstil an, der für den Text verwewendet wird. Siehe [Draft BeschriftungsstilEditor](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de").
* Ansicht-Eigenschaft**Scale Multiplier** (`Float`): Gibt den allgemeinen Skalierungsfaktor an, der für den Text verwewendet wird.

Display Options

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): Gibt an, wie der Text angezeigt wird. Ist es `World`, wird der Text auf einer Ebene angezeigt, die durch seine Daten-Eigenschaft**Placement** festgelegt wird. Ist es `Screen`, wird der Text immer in Richtung Bildschirm angezeigt. Dies ist eine übernommene Eigenschaft. Die genannten Optionen sind die umbenannten Optionen ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")).

Graphics

* Ansicht-Eigenschaft**Line Color** (`Color`): nicht verwendet.
* Ansicht-Eigenschaft**Line Width** (`Float`): nicht verwendet.

Text

* Ansicht-Eigenschaft**Font Name** (`Font`): Gibt die Schriftart an, die zum Zeichnen des Textes verwendet werden soll. Es kann ein Schriftname wie `Arial` sein, ein Standardstil wie `sans`, `serif` oder `mono`, eine Familie wie `Arial,Helvetica,sans`, oder ein Name mit einem Stil wie `Arial:Bold`. Wenn die angegebene Schriftart nicht auf dem System gefunden wird, wird stattdessen eine Standardschriftart verwendet.
* Ansicht-Eigenschaft**Font Size** (`Length`): Gibt die Höhe der Schriftzeichen an. Der Text kann unsichtbar sein in der [3D-Ansicht](/3D_view "3D view"), wenn dieser Wert sehr klein ist.
* Ansicht-Eigenschaft**Justification** (`Enumeration`): Legt die Ausrichtung des Textes fest: `Left` (links), `Center` (zentriert) oder `Right` (rechts).
* Ansicht-Eigenschaft**Line Spacing** (`Float`): Legt den Faktor fest, der auf die voreingestellte Zeilenhöhe des Textes angewendet wird.
* Ansicht-Eigenschaft**Text Color** (`Color`): Legt die Farbe des Textes fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft-Textes wird die Methode `make_text` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeText`.

```
text = make_text(string, placement=None, screen=False)

```

* Erstellt ein `text`-Objekt, an einer Position `placement`, die ein `FreeCAD.Placement` sein kann, aber auch eine `FreeCAD.Rotation` oder ein `FreeCAD.Vector`.
* `string` ist eine Zeichenkette oder eine Liste von Zeichenketten. Wenn es eine Liste ist, wird jedes Element einer auf seiner eigenen Zeile angezeigt.
* Wenn `screen` auf `True` gesetzt ist, wird der Text immer zur Kamera ausgerichtet, andernfalls wird er auf einer Ebene dargestellt, die von der Daten-Eigenschaft**Placement** festgelegt wird.

Die Ansicht-Eigenschaften von `text` können durch Überschreiben seiner Attribute geändert werden; z.B. `ViewObject.FontSize` (Schrifthöhe) mit einem neuen Wert in Millimetern überschreiben.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/de&oldid=1513890>"