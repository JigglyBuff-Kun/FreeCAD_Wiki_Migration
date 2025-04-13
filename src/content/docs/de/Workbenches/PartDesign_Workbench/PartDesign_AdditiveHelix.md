---
title: PartDesign WendelHinzufügen
---
|  |
| --- |
| PartDesign WendelHinzufügen |
| Menüeintrag |
| Part Design → Objekte hinzufügen → Wendel |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [PartDesign WendelEntfernen](/PartDesign_SubtractiveHelix/de "PartDesign SubtractiveHelix/de") |
|  |

## Beschreibung

Das Werkzeug **WendelHinzufügen** erstellt einen Volumenkörper durch Führen einer Skizze entlang eines Wendel-Pfades.

![](/images/PartDesign_AdditiveHelix_example_overview.png)

"Das Profil (B) wird um eine Achse (A) geführt und erzeugt einen Wendel-Volumenkörper (C)"

## Anwendung

1. Die Skizze (Sketch) auswählen, die zu einer Wendel ausgetragen werden soll. Alternativ kann eine Fläche des schon vorhandenen Volumenkörpers ausgewählt werden.
2. Die Schaltfläche ![](/images/PartDesign_AdditiveHelix.svg) Wendel drücken.
3. Parameter für die Wendel festlegen (siehe nächsten Abschnitt).
4. Die Wendel in der 3D-Ansicht überprüfen, um sicherzustellen, dass sich die Wendel nicht selbst durchdringt.
5. OK klicken.

## Optionen

Beim Erstellen einer Wendel beinhaltet der Dialog **Wendel-Parameter** verschiedene Parameter die festlegen, wie die Skizze ausgetragen werden soll.

![](/images/PartDesign_AdditiveHelix_taskpanel.png)

### Achse

Diese Option bestimmt die Achse, um die sich die Skizze winden soll.

* **Senkrecht zur Skizze**: Wählt die Normale der Skizze, die durch den Skizzenursprung verläuft, als Achse aus. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* **Vertikale Skizzenachse**: Wählt die vertikale Skizzenachse. Dies ist die Voreinstellung für neue Wendeln.
* **Horizontale Skizzenachse**:Wählt die horizontale Skizzenachse.
* **Konstruktionslinie**: Wählt eine eine Konstruktionslinie der Skizze zur Verwendung mit der Wendel aus. Die Ausklappliste enthält für jede Konstruktionslinie einen Eintrag. Die als Erstes erstellte Konstruktionslinie wird *Konstruktionslinie 1* genannt.
* **Basis (X/Y/Z)-Achse**: Wählt die X-, Y- oder Z-Achse des Ursprungs des Körpers aus.
* **Referenz auswählen...**: Erlaubt in der 3D-Ansicht eine Kante des Körpers oder eine [Bezugslinie](/PartDesign_Line "PartDesign Line") auszuwählen.

### Modus

Dies steuert, welche Parameter zum Festlegen der Wendel verwendet werden. Zur Wahl stehen:

* **Steigung-Höhe-Winkel**: Festlegung über die Steigung (Höhe pro Umdrehung) und die Gesamthöhe.
* **Steigung-Windungen-Winkel**: Festlegung über die Steigung und die Anzahl der Windungen.
* **Höhe-Windungen-Winkel**: Festlegung über die Gesamthöhe und die Anzahl der Windungen.
* **Höhe-Windungen-Aufweitung** [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de"): Festlegung über die Gesamthöhe, die Anzahl der Windungen und die Aufweitungsrate des Wendelradius (Radiales Wachstum). Eine Höhe von Null ergibt einen spiralförmigen Pfad. Sind Höhe und Aufweitungsrate Null, ergibt sich ein kreisförmiger Pfad.

### Steigung

Der Abstand zwischen den Windungen der Wendel.

### Höhe

Die Höhe der Wendel (Zentrum-Zentrum).

### Windungen

Die Anzahl der Windungen der Wendel. Ergibt sich aus Höhe/Steigung.

### Kegelwinkel

Winkel des Kegels, der die Wendel umhüllt. Zulässiger Wertebereich: [-89°, +89°].

### Linksgängig

Wenn aktiviert, ändert sich die Drehrichtung der Wendel von der Voreinstellung "im Uhrzeigersinn" in "gegen den Uhrzeigersinn".

### Umgekehrt

Wenn aktiviert, wird die voreingestellte Ausrichtung der Wendel umgedreht.

### Ansicht aktualisieren

Wenn aktiviert, ändert sich die Ansicht bei jeder Parameteränderung automatisch.

## Einstellungen

Eine Wendel, die sich nicht selbst durchdringt, ist sichtbar, wenn **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → PartDesign → AdditiveHelixPreview** auf `true` gesetzt ist. Die Voreinstellung ist `false`. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Eigenschaften

* Daten-Eigenschaft**Pitch**: Der axiale Abstand zwischen zwei Windungen.
* Daten-Eigenschaft**Height**: Die Gesamtlänge der Wendel (ohne Berücksichtigung der Ausdehnung des Profils)
* Daten-Eigenschaft**Turns**: Die Anzahl der Windungen (muss keine Ganzzahl sein).
* Daten-Eigenschaft**Left Handed**: Siehe [Linksgängig](#Linksgängig).
* Daten-Eigenschaft**Reversed**: Siehe [Umgekehrt](#Umgekehrt).
* Daten-Eigenschaft**Winkel**: Der Winkel mit dem der Radius der Wendel zu- oder abnimmt. Zulässiger Wertebereich: [-89°, +89°].
* Daten-Eigenschaft**Reference axis**: Die Wendelachse.
* Daten-Eigenschaft**Mode**: Die Eingabeart der Wendel: (pitch-height, pitch-turns, turns-height)
* Daten-Eigenschaft**Outside**: Nicht genutzt (wird in WendelAbziehen genutzt).
* Daten-Eigenschaft**Has Been Edited**: Wenn "false", wird ein Startwert für die Steigung auf Basis der "Bounding-Box" des Profils vorgeschlagen, um eine Selbstdurchdringung zu vermeiden.
* Daten-Eigenschaft**Refine**: true oder false. Wenn auf "true" gesetzt, wird der Volumenkörper von (innerhalb von Flächen liegenden) verbliebenen Kanten befreit, die von Formelementen hinterlassen wurden. Siehe [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") für weitere Details.
* Daten-Eigenschaft**Profile**: Entweder eine Skizze mit einer geschlossenen Kontur oder eine Fläche.
* Daten-Eigenschaft**Midplane**: Nicht genutzt.
* Daten-Eigenschaft**Up to face**: Nicht genutzt.
* Daten-Eigenschaft**Allow multiple face**: Nicht genutzt.

## Hinweise

* Ein ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de") kann nicht als Profil verwendet werden.
* Wird ein ![](/images/PartDesign_SubShapeBinder.svg) [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") (SubShapeBinder) als Profil verwendet, funktioniert die Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") nicht, stattdessen muss die Fläche des Teilformbinders in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.
* Wendeln korrekt zu berechnen, ist für die im Hintergrund arbeitenden Prozesse sehr aufwendiger, da die beteiligten Kurven die Fließkommagenauigkeit an ihre Grenzen bringt. Das heißt, dass die Ausführung weiterer Vorgänge mit einer Wendel, wie der Versuch eine boolesche Verknüpfungen mit einem anderen Objekt durchzuführen, sehr sensibel auf kleinste Veränderungen reagieren kann. Schlagen sie fehl, zerstören sie das Modell oft auf ungewöhnliche Weise. Um dies zu vermeiden, sollte man versuchen, Bearbeitungen an einer Wendel so auszuführen, dass sie entweder deutlich überlappen (durchdringen) oder deutlich nicht überlappen. Exaktes anpassen, bei dem die die Oberfläche der Wendel exakt zu der Oberfläche eines anderen Objekts ausgerichtet wird, ist sehr fehleranfällig. Ein Gewinde, das um den zylindrischen Teil eines Bolzens verläuft, ist ein Beispiel dafür. Es mag anfangs funktionieren, kann aber später fehlschlagen, wenn Objekte etwas bewegt werden.

## Beispiele

![](/images/PartDesign_AdditiveHelix_example_bspline.png)

Beispielwendel, die eine [B-Spline](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de")-Kurve einer Skizze verwendet

![](/images/PartDesign_AdditiveHelix_example_twisting_pad.png)

Beispielwendel mit einer Wendelachse, die normal zur Skizzenebene liegt, ergibt einen "Block mit Dreh-Effekt".

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveHelix/de&oldid=1513046>"