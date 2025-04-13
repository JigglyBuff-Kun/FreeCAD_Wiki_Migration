---
title: Navigationswürfel
---
## Einleitung

Der **Navigationswürfel** stellt visuelle Informationen zur Kameraausrichtung in der aktiven [3D-Ansicht](/3D_view/de "3D view/de") zur Verfügung und kann zu ihrer Einstellung verwendet werden. Standardmäßig ist er sichtbar und befindet sich in der oberen rechten Ecke der Ansicht.

![](/images/Navigation_Cube_Example.png)

Der Navigationswürfel besteht aus mehreren Teilen:

* Dem [Hauptwürfel](#Hauptwürfel)
* Sechs [Richtungspfeile](#Richtungspfeile)
* Die [Schaltfläche Ansicht umkehren](#Schaltfläche_Ansicht_umkehren) (oben rechts) [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* Dem [Miniwürfel-Menü](#Miniwürfel-Menü) (unten rechts)
* Den X-, Y- und Z-Achsindikatoren

Alle Elemente, außer den Achsindikatoren, können angeklickt werden.

## Anwendung

### Hauptwürfel

Der Hauptwürfel besitzt 26 Flächen: 6 Hauptflächen, 12 rechteckige Kantenflächen ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")), und 8 Eckflächen. Ein Klick auf eine dieser Flächen ändert die Kameraausrichtung so, dass ihre Blickrichtung senkrecht zu der ausgewählten Fläche verläuft.

### Richtungspfeile

Es gibt sechs Richtungspfeile: vier dreieckige Pfeilspitzen und zwei gebogene Pfeile. Klickt man auf einen der Dreieckigen Pfeile, wird die [3D-Ansicht](/3D_view/de "3D view/de") um eine Linie senkrecht zur Pfeilrichtung gedreht. Klickt man auf einen gebogenen Pfeil, wird die [3D-Ansicht](/3D_view/de "3D view/de") um die Normale der Ansicht gedreht.

### Schaltfläche Ansicht umkehren

Klickt man auf die runde Schaltfläche in der rechten oberen Ecke des Navigationswürfels, wird die [3D-Ansicht](/3D_view/de "3D view/de") um 180° um die vertikale Achse der Ansicht gedreht.

### Miniwürfel-Menü

Ein Klick auf den kleinen Würfel in der rechten unteren Ecke des Navigationswürfels öffnet ein Menü mit folgenden Optionen:

* **![](/images/Std_OrthographicCamera.svg) [Orthogonale Ansicht](/Std_OrthographicCamera/de "Std OrthographicCamera/de")**: schaltet auf die orthogonale Ansicht um.
* **![](/images/Std_PerspectiveCamera.svg) [Perspektivische Ansicht](/Std_PerspectiveCamera/de "Std PerspectiveCamera/de")**: schaltet auf die Perspektivansicht um.
* **![](/images/Std_ViewIsometric.svg) [Isometrisch](/Std_ViewIsometric/de "Std ViewIsometric/de")**: schaltet auf die isometrische Ansicht um.
* **![](/images/Std_ViewFitAll.svg)[Einpassen](/Std_ViewFitAll/de "Std ViewFitAll/de")**: skaliert und schwenkt die Kamera so, dass alle sichtbaren Objekte die Ansicht ausfüllen.
* **![](/images/Std_ViewFitSelection.svg) [Auswahl einpassen](/Std_ViewFitSelection/de "Std ViewFitSelection/de")**: skaliert und schwenkt die Kamera so, dass alle ausgewählten Objekte die Ansicht ausfüllen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* **![](/images/Std_AlignToSelection.svg) [Auf die Auswahl ausrichten](/Std_AlignToSelection/de "Std AlignToSelection/de")**: richtet die Kamera der Ansicht entgegen der Normale einer ebenen Fläche aus oder entgegen dem Verlauf einer geraden Kante. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* **Beweglicher Navigationswürfel**: Wenn diese Checkbox ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) aktiviert ist, kann der komplette Navigationswürfel bewegt werden, indem der Hauptwürfel an beliebiger Stelle mit der linken Maustaste angeklickt und mit gedrückt gehaltener Taste gezogen wird. Dies ist dazu gedacht, den Würfel temporär aus dem Weg zu ziehen. Die [erweiterten Parameter](#Erweiterte_Parameter) OffsetX und OffsetY können verwendet werden, um den Würfel dauerhaft zu versetzen, siehe unten.

## Anpassung

### Einstellungen

Der Navigationswürfel wird durch einige Einstellungen gesteuert: **Bearbeiten → Einstellungen... → Anzeige → Navigation → Navigationswürfel** [eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de"). Siehe [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de").

### Erweiterte Parameter

Einige erweiterte Parameter des Navigationswürfels können nicht im [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de") angepasst werden. Diese Parameter können von Hand im [Parametereditor](/Std_DlgParameter/de "Std DlgParameter/de") angepasst werden.

Farben von Hand festlegen:

1. ![](/images/Std_DlgParameter.svg) [Parametereditor](/Std_DlgParameter/de "Std DlgParameter/de") öffnen.
2. Im Panel auf der linken Seite zu **BaseApp → Preferences → NaviCube**.
3. Rechtsklick im Panel auf der rechten Seite und **Neue positive Ganzzahl** im Kontextmenü wählen.
4. Den Namen einer dieser Farben eingeben:
   * **BaseColor**: die Grundfarbe aller Elemente, der Standardwert ist `3806916544` (hex: `e2e8efc0`). Diese Farbe kann auch im [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de") festgelegt werden. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
   * **EmphaseColor**: die Farbe der Texte und Linien, die Voreinstellung hängt von der **BaseColor** ab. Sie ist entweder schwarz: `255` (hex: `000000ff`), oder weiß: `4294967295` (hex: `ffffffff`). [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
   * **HiliteColor**: die Farbe, mit der die Flächen und Schaltflächen hervorgehoben werden; die Standardeinstellung ist `2867003391` (hex: `aae2ffff`).
5. Der Farbwert muss als 32-Bit-Ganzzahl ohne Vorzeichen eingegeben werden. Umgerechnet in das Hexadezimalformat hat diese Ganzzahl die Form `RRGGBBAA`. Dabei steht `AA` für den Alphakanal (ein Maß für die Transparenz), und die anderen drei Buchstabenpaare stehen für Rot, Grün und Blau. Um einen hexadezimalen Wert in eine Ganzzahl ohne Vorzeichen umzuwandeln, kann die [Python-Konsole](/Python_console/de "Python console/de") verwendet werden. Zum Beispiel durch eingeben von `int("323232ff", 16)`.
6. Optional können weitere Parameter eingestellt werden.
7. Press the Close button.

In der folgenden Tabelle sind die anderen erweiterten Parameter des Navigationswürfels aufgeführt, die auf ähnliche Weise eingestellt werden können. Die Informationen aus der Spalte **Art** verwenden, um in Schritt 3 ein korrektes neues Element zu erstellen.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| BorderWidth | The width of the edges of the cube and the borders around the buttons in pixels. | Float | 1.1 |
| ChamferSize | The size of the edges and corners as a factor of the cube size. Values should be in the 0.05 - 0.18 range. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | Float | 0.12 |
| FontStretch | The font width as a percentage of the default width. Use 0 or 100 for the default font width. | Integer | 0 |
| FontWeight | The font weight. Higher values make the font more bold. The effect may depend on the font. Use 0 for the default font weight. | Integer | 0 |
| FontZoom | The size of the labels:  * `FontZoom = 1.0`: Make the labels as big as possible individually. * `0.0 < FontZoom < 1.0`: Idem but limit the maximum font size. * `FontZoom = 0.0`: Idem but use the same font size for all. * `FontZoom < 0.0`: Use the same font size for all, but scaled down.   [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | Float | 0.3 |
| OffsetX | The offset of the cube in the X direction relative to its corner position in pixels. | Integer | 0 |
| OffsetY | The offset of the cube in the Y direction relative to its corner position in pixels. | Integer | 0 |
| ShowCS | Toggles the display of the coordinate system (the X, Y and Z axis indicators). | Boolean | true |
| TextBottom | The text on the bottom face of the cube. The default value should be translated. | String | BOTTOM |
| TextFront | The text on the front face of the cube. Idem. | String | FRONT |
| TextLeft | The text on the left face of the cube. Idem. | String | LEFT |
| TextRear | The text on the rear face of the cube. Idem. | String | REAR |
| TextRight | The text on the right face of the cube. Idem. | String | RIGHT |
| TextTop | The text on the top face of the cube. Idem | String | TOP |

Retrieved from "<http://wiki.freecad.org/index.php?title=Navigation_Cube/de&oldid=1497293>"