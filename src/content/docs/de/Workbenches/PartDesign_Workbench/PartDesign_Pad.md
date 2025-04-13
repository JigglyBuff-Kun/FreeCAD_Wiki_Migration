---
title: PartDesign Aufpolsterung
---
|  |
| --- |
| PartDesign Aufpolsterung |
| Menüeintrag |
| Part Design → Objekt hinzufügen → Aufpolsterung |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") |
|  |

## Beschreibung

Das Werkzeug **Aufpolsterung** extrudiert eine Skizze oder eine Fläche eines Volumenkörpers entlang eines geraden Pfades.

![](/images/PartDesign_Pad_example.svg)

*Skizze (A) links und der daraus resultierende Festkörper (B) rechts.*

## Anwendung

1. Eine einzelne Skizze oder eine oder mehrere Flächen des Körpers auswählen.
2. Die Schaltfläche ![](/images/PartDesign_Pad.svg) Aufpolsterung drücken.
3. Parameter der Aufpolsterung einstellen, siehe [Optionen](#Optionen) unten.
4. Die Schaltfläche OK drücken.

## Optionen

Währen des Extrudierens oder nach einem Doppelklick auf ein bestehenden Block in der [Baumansicht](/Tree_view/de "Tree view/de") wird das Aufgaben-Fenster **Parameter der Aufpolsterung** angezeigt. Es bietet folgende Einstellungen:

![](/images/PartDesign_Pad_Taskpanel.png)

### Typ

Typ bietet fünf verschiedene Möglichkeiten zum Festlegen der Länge des Blocks:

#### Höhe (Länge)

Einen numerischen Wert für die **Höhe (Länge)** des Blocks eingeben. Mit der Option **Symmetrisch zu einer Ebene** wird der Block jeweils mit der Hälfte der gegebenen Länge zu beiden Seiten der Skizze oder Fläche ausgeführt.

#### Zur letzten

Der Block wid bis zur letzten Fläche des Ausgangskörpers (Support) ausgeführt, auf die er entlang seiner Richtung trifft. Ist kein Ausgangskörpers vorhanden ist, wird eine Fehlermeldung angezeigt.

#### Zur ersten

Der Block wird bis zur ersten Fläche des Ausgangskörpers ausgeführt, auf die er entlang seiner Richtung trifft. Wenn kein Ausgangskörper vorhanden ist, wird eine Fehlermeldung angezeigt.

#### Bis zur Fläche

Der Block wird bis zu einer Fläche ausgeführt. Die Schaltfläche Fläche auswählen drücken und eine Fläche oder [Bezugsebene](/PartDesign_Plane/de "PartDesign Plane/de") am Körper auswählen.

#### Zwei Längen

Dies ermöglicht die Eingabe einer zweiten Länge, mit der der Block in die entgegengesetzte Richtung ausgedehnt werden soll. Die Richtung kann durch Aktivieren der Option **Umgekehrt** geändert werden.

#### Bis zur Form

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Pad wird bis zur ausgewählten Form erweitert. Drücken Sie optional die Schaltfläche Form wählen und wählen Sie eine Form. Lassen Sie das Kontrollkästchen Alle Flächen auswählen aktiviert oder deaktivieren Sie es, drücken Sie die Schaltfläche Flächen auswählen und wählen Sie die Flächen, bis zu denen das Pad erstellt werden soll.

### Abstand zur Fläche

Abstand zu der Fläche, an der der Block enden soll. Diese Option steht nur zur Verfügung, wenn für **Typ** entweder **Zur Letzten**, **Bis zur dichtesten Objektbegrenzung**, oder **Bis zur Oberfläche** ausgewählt wurde.

### Länge

Legt die Tiefe des Blocks fest. Diese Option steht nur zur Verfügung, wenn für **Typ** entweder **Höhe (Länge)** oder **Zwei Längen** ausgewählt wurde. Die Höhe wird entlang des Richtungsvektors oder entlang der Skizzen- oder Flächennormale gemessen. Negative Werte sind nicht möglich; stattdessen verwendet man dafür die Option **Umgekehrt**.

### Zweite Länge

Legt die Länge des Blocks in entgegengesetzter Richtung fest. Diese Option steht nur zur Verfügung, wenn für **Typ** **Zwei Längen** ausgewählt wurde.

### Symmetrisch zur Ebene

Diese Option auswählen, wenn jeweils die Hälfte der angegeben Länge zu beiden Seiten der Skizzenebene oder Fläche ausgeführt werden soll. Diese Option steht nur zur Verfügung, wenn für **Typ** **Abmessung** ausgewählt wurde

### Umgekehrt

Kehrt die Extrusionsrichtung um.

### Richtung

#### Richtung/Kante

Für die Richtung der Extrusion steht Folgendes zur Auswahl:

* **Skizzennormale** oder **Flächennormale:** Die Skizze oder die Fläche wird entlang ihrer Normale extrudiert. Wurden mehrere Skizzen oder Flächen ausgewählt, wird die Normale der zuerst gewählten verwendet.
* **Referenz auswählen...:** Die Skizze oder die Fläche wird in Richtung einer am Körper ausgewählten geraden Kante oder einer [Bezugslinie](/PartDesign_Line/de "PartDesign Line/de") extrudiert.
* **Benutzerdefinierte Richtung:** Die Skizzeoder die Fläche wird in Richtung des des angegebenen Vektors extrudiert.

### Richtung anzeigen

Wenn Aktiviert, wird die Richtung des Blocks angezeigt. Falls der Block eine **Benutzerdefinierte Richtung** verwendet, kann diese geändert werden.

#### Länge entlang der Skizzennormalen

Wenn Aktiviert, wird die Länge des Blocks entlang der Skizzen- oder Flächennormale gemessen, sonst entlang der benutzerdefinierten Richtung.

### Schrägungswinkel

Schrägt die Seiten eines Blocks in Richtung der Extrusion um den gegebenen Winkel an. Ein positiver Winkel stellt die Seitenwände nach außen auf. Man beachte, dass innere Strukturen entgegengesetzt angeschrägt werden. Dies ermöglicht die Konstruktion von Gussformen und (Spritz-) Gussteilen. Diese Option steht nur zur Verfügung, wenn als **Typ** entweder **Höhe (Länge)** oder **Zwei Längen** ausgewählt wurde.

### Zweiter Schrägungswinkel

Schrägt die Seiten eines Blocks entgegen der Extrusionsrichtung um den gegebenen Winkel an. Siehe **Schrägungswinkel**. Diese Option steht nur zur Verfügung, wenn für **Typ** auf **Zwei Längen** festgelegt wurde.

## Eigenschaften

### Daten

Pad

* Daten-Eigenschaft**Type** (`Enumeration`): Art und Weise, wie ein Block extrudiert wird, siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Length** (`Length`): legt die Länge eines Blocks fest, siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Length2** (`Length`): zweite Länge des Blocks, falls für die Daten-Eigenschaft**Type** **Zwei Längen** gewählt wurde, siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Use Custom Vector** (`Bool`): Wenn aktiviert, wird als Richtung nicht die Skizzennormale sondern der angegebene Vektor verwendet, siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Direction** (`Vector`): Vektor der Extrusionsrichtung, wenn die Daten-Eigenschaft**Use Custom Vector** aktiviert ist.
* Daten-Eigenschaft**Reference Axis** (`LinkSub`)
* Daten-Eigenschaft**Along Sketch Normal** (`Bool`): Wenn *true*, wird die Länge des Blocks entlang der Skizzennormale gemessen. Andernfalls und bei aktivierter Daten-Eigenschaft**Use Custom Vector** wird sie entlang der benutzerdefinierten Richtung gemessen.
* Daten-Eigenschaft**Up To Face** (`LinkSub`): Eine Fläche, bis zu der der Block extrudiert wird, siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Offset** (`Length`): Abstand zu der Fläche, an der der Block enden wird. Dies wird nur berücksichtigt, wenn als Daten-Eigenschaft**Type** **Zur letzten**, **Bis zur dichtesten Objektbegrenzung** oder **Bis zu Oberfläche** ausgewählt wurde.
* Daten-Eigenschaft**Taper Angle** (`Angle`)
* Daten-Eigenschaft**Taper Angle2** (`Angle`)

Part Design

* Daten-Eigenschaft**Refine** (`Bool`): true oder false. Beseitigt die nach der Operation verbleibenden Ränder. Dieses Verhalten wird zunächst entsprechend den Einstellungen des Benutzers festgelegt (gefunden in **>Einstellungen → Part Design → Allgemein → Modelleinstellungen**).

Sketch Based

* Daten-Eigenschaft**Profile** (`LinkSub`)
* Daten-Eigenschaft**Midplane** (`Bool`)
* Daten-Eigenschaft**Reversed** (`Bool`)
* Daten-Eigenschaft**Allow Multi Face** (`Bool`)

## Begrenzungen

* Wie alle PartDesign-Formelemente erzeugt Pad einen Festkörper, daher muss die Skizze ein geschlossenes Profil enthalten, sonst wird es mit einem Fehler "Failed to validate broken face" (Gescheitert beim überprüfen der gebrochenen Fläche) scheitern.
* Skizzen,die [B-Splines](/B-Splines/de "B-Splines/de") enthalten können oft nicht richtig abgeschrägt werden. Dies ist eine Einschränkung des [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de")-Kernels, den FreeCAD einsetzt.
* Für größere Winkel wird Abschrägen scheitern, wenn die Endfläche weniger Kanten besitzt als die Ausgangsfläche.
* Der für **Zur ersten** und **Zur letzten** verwendete Algorithmus ist:
  + Erzeuge eine Linie durch den Schwerpunkt der Skizze
  + Finden alle Flächen, welche durch diese Linie geschnitten werden
  + Wähle die Fläche, bei der der Schnittpunkt am nächsten/weitesten von der Skizze entfernt ist.

:   Das bedeutet, dass die gefundene Fläche vielleicht nicht immer das ist, was du erwartet hast. Wenn du auf dieses Problem stößt, verwende stattdessen den Typ **Bis zur Fläche** und greife die gewünschte Fläche.
:   Für den sehr speziellen Fall der Extrusion auf eine konkave Oberfläche, bei der die Skizze größer als diese Oberfläche ist, wird die Extrusion fehlschlagen. Dies ist ein ungelöster Fehler.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pad/de&oldid=1550027>"