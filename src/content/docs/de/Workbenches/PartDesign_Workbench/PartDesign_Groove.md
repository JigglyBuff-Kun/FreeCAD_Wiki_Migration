---
title: PartDesign Nut
---
|  |
| --- |
| PartDesign Nut |
| Menüeintrag |
| Part Design → Objekte abziehen → Nut |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [PartDesign Drehkörper](/PartDesign_Revolution/de "PartDesign Revolution/de") |
|  |

## Beschreibung

Das Werkzeug **Nut** dreht eine ausgewählte Skizze oder ein Profil um eine gegebene Achse und entfernt Material aus dem aktiven Körper.

![](/images/PartDesign_Groove_example.svg)

Oben: Skizze (A) ist um die Achse (B) gedreht; die resultierende Nut auf dem Volumenkörper (C) ist rechts dargestellt.

## Anwendung

1. Eine einzelne Skizze oder eine oder mehrere Flächen des Körpers auswählen.
2. Die Schaltfläche ![](/images/PartDesign_Groove.svg) Nut drücken.
3. Parameter der Nut einstellen, siehe [Optionen](#Optionen) unten.
4. Die Schaltfläche OK drücken.

## Optionen

Während der Erstellung der Tasche oder nach einem Doppelklick auf eine bestehende Tasche in der [Baumansicht](/Tree_view/de "Tree view/de") wird der Aufgaben-Dialog **Nut-Parameter** angezeigt. Er ermöglicht folgende Einstellungen:

![](/images/Partdesign_groove_parameters.png)

### Typ

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Typ bietet fünf verschiedene Möglichkeiten zum Festlegen des Winkels der Nut:

#### Abmessung

Geben Sie einen numerischen Wert für den **Winkel** der Nut ein. Mit der Option **Symmetrisch zur Ebene** erstreckt sich die Nut um die Hälfte des angegebenen Winkels zu beiden Seiten der Skizze oder Fläche.

#### Durch alles

Die Nut reicht bis zur letzten Fläche der Befestigung, auf den sie in ihrer Richtung trifft. Mit der Option **Symmetrisch zur Ebene** schneidet die Nut durch das gesamte Material in beiden Richtungen.

#### Zur ersten

Die Nut reicht bis zur ersten Fläche der Befestigung, auf die sie in ihrer Richtung trifft.

#### Bis zur Fläche

Die Nut wird bis zu einer Fläche reichen. Drücken Sie die Schaltfläche Face und wählen Sie eine Fläche oder eine [Bezugsfläche](/PartDesign_Plane "PartDesign Plane") aus dem Körper.

#### Zwei Abmessungen

Dies ermöglicht die Eingabe eines zweiten Winkels, in dem die Nut in die entgegengesetzte Richtung verlaufen soll. Die Richtungen können durch Aktivieren der Option **Umgekehrt** umgeschaltet werden.

### Achsen

Legt die Achsen der Nut fest:

* **Vertikale Skizzenachse**: Wählt die vertikale Achse der Skizze aus.
* **Horizontale Skizzenachse**: Wählt die horizontale Achse der Skizze aus.
* **Konstruktionslinie**: wählt eine Hilfslinie der Skizze aus, die für die Nut verwendet wird. Die Aufklappliste enthält einen Eintrag für jede Hilfslinie. Die erste Hilfslinie, die in der Skizze erstellt wurde, wird mit *Konstruktionslinie 1* bezeichnet.
* **Basis (X-/Y-/Z-)Achse**: wählt die X-, Y- oder Z-Achse des Urspungs des Körpers (Body) aus.
* **Referenz auswählen...**: ermöglicht die Auswahl einer geraden Kante oder einer [Bezugslinie](/PartDesign_Line/de "PartDesign Line/de") am Körper.

Beachten Sie, dass beim Ändern der Achse die Option **Umgekehrt** automatisch (de)aktiviert werden kann.

### Winkel

Legt den Winkel der Nut fest. Diese Option steht nur zur Verfügung, wenn für **Typ** **Abmessung** oder **Zwei Längen** ausgewählt wurde. Winkel größer als 360° sind nicht möglich, auch keine negativen Werte; stattdessen verwendet man dafür die Option **Umgekehrt**.

### Symmetrisch zur Ebene

Diese Option aktivieren, um jeweils die Hälfte des angegebenen Winkels zu beiden Seiten der Skizze oder Fläche auszuführen, wenn für **Typ** entweder **Abmessung**, oder **Durch alles** ausgewählt wurde.

### Umgekehrt

Kehrt die Richtung der Nut um.

### Zweiter Winkel

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Legt den Winkel der Nut in der entgegengesetzten Richtung fest. Diese Option ist nur verfügbar, wenn **Typ** **Zwei Dimensionen** ist und **Winkel** kleiner als 360° ist.

## Eigenschaften

### Daten

Groove

* Daten**Type** (`Enumeration`)
* Daten**Base** (`Vector`): (read-only)
* Daten**Axis** (`Vector`): (read-only)
* Daten**Angle** (`Angle`)
* Daten**Angle2** (`Angle`)
* Daten**Up To Face** (`LinkSub`)
* Daten**Reference Axis** (`LinkSub`)

Part Design

* Daten**Refine** (`Bool`)

Sketch Based

* Daten**Profile** (`LinkSub`)
* Daten**Midplane** (`Bool`)
* Daten**Reversed** (`Bool`)
* Daten**Allow Multi Face** (`Bool`)

## Hinweise

* Ein ![](/images/PartDesign_ShapeBinder.svg) [Formbinder](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de") kann als Profil nicht genutzt werden.
* Wenn ein ![](/images/PartDesign_SubShapeBinder.svg) [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") als Profil genutzt wird, kann der Teilformbinder in der [Baumansicht](/Tree_view/de "Tree view/de") nicht ausgewählt werden. Stattdessen muss die Fläche des Teilformbinders in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Groove/de&oldid=1541343>"