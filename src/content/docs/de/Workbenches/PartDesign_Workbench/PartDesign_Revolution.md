---
title: PartDesign Drehkörper
---
|  |
| --- |
| PartDesign Drehteil |
| Menüeintrag |
| Part Design → Objekte hinzufügen → Drehteil |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [PartDesign Nut](/PartDesign_Groove/de "PartDesign Groove/de") |
|  |

## Beschreibung

Das Werkzeug **Drehkörper** erstellt einenVolumenkörper durch Rotation einer Skizze oder eines 2D-Objekts um eine gegebene Achse.

![](/images/PartDesign_Revolution_example.svg)

Oben: Skizze (A) wird um 270 Grad gegen den Uhrzeigersinn um die Achse (B) gedreht; der resultierende Volumenkörper (C) ist rechts dargestellt.

## Anwendung

1. Eine einzelne Skizze oder eine oder mehrere Flächen des Körpers auswählen.
2. Die Schaltfläche ![](/images/PartDesign_Revolution.svg) Drehteil drücken.
3. Parameter des Drehteils einstellen, siehe [Optionen](#Optionen) unten.
4. Die Schaltfläche OK drücken.

## Optionen

Während der Erstellung des Drehteils oder nach einem Doppelklick auf ein bestehendes Drehteils in der [Baumansicht](/Tree_view/de "Tree view/de") wird der Aufgaben-Dialog **Drehteil-Parameter** angezeigt. Er ermöglicht folgende Einstellungen:

![](/images/Partdesign_revolution_parameters.png)

### Typ

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Typ bietet fünf verschiedene Möglichkeiten zum Festlegen des Winkels des Drehteils:

#### Dimension

Enter a numeric value for the **Angle** of the revolution. With the option **Symmetric to plane** the revolution will extend half the given angle to either side of the sketch or face.

#### To last

The revolution will extend up to the last face of the support it encounters in its direction. If there is no support, an error message will appear.

#### To first

The revolution will extend up to the first face of the support it encounters in its direction. If there is no support, an error message will appear.

#### Up to face

The revolution will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body.

#### Two dimensions

This allows to enter a second angle in which the revolution should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.

### Achse

Specifies the axis of the revolution:

* **Vertikale Skizzenachse**: Wählt die vertikale Achse der Skizze aus.
* **Horizontale Skizzenachse**: Wählt die horizontale Achse der Skizze aus.
* **Konstruktionslinie**: wählt eine Hilfslinie der Skizze aus, die für das Drehteil verwendet wird. Die Aufklappliste enthält einen Eintrag für jede Hilfslinie. Die erste Hilfslinie, die in der Skizze erstellt wurde, wird mit *Konstruktionslinie 1* bezeichnet.
* **Basis (X-/Y-/Z-)Achse**: wählt die X-, Y- oder Z-Achse des Urspungs des Körpers (Body) aus.
* **Referenz auswählen...**: ermöglicht die Auswahl einer geraden Kante oder einer [Bezugslinie](/PartDesign_Line/de "PartDesign Line/de") am Körper.

Note that when changing the axis, the **Reversed** option may be (un)checked automatically.

### Winkel

Legt den Winkel des Drehteils fest. Diese Option steht nur zur Verfügung, wenn für **Typ** **Abmessung** oder **Zwei Längen** ausgewählt wurde. Winkel größer als 360° sind nicht möglich, auch keine negativen Werte; stattdessen verwendet man dafür die Option **Umgekehrt**.

### Symmetrisch zur Ebene

Diese Option auswählen, wenn jeweils die Hälfte des angegeben Winkels zu beiden Seiten der Skizzenebene oder Fläche ausgeführt werden soll. Diese Option steht nur zur Verfügung, wenn für **Typ** **Abmessung** ausgewählt wurde

### Umgekehrt

Kehrt die Richtung des Drehteils um.

### 2nd angle

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Defines the angle of the revolution in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

## Eigenschaften

### Data

Part Design

* Daten**Refine** (`Bool`)

Revolution

* Daten**Type** (`Enumeration`)
* Daten**Base** (`Vector`): (read-only)
* Daten**Axis** (`Vector`): (read-only)
* Daten**Angle** (`Angle`)
* Daten**Up To Face** (`LinkSub`)
* Daten**Angle2** (`Angle`)
* Daten**Reference Axis** (`LinkSub`)

Sketch Based

* Daten**Profile** (`LinkSub`)
* Daten**Midplane** (`Bool`)
* Daten**Reversed** (`Bool`)
* Daten**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to be selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/de&oldid=1446917>"