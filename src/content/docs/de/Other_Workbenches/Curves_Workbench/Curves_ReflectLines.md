---
title: Curves Reflexionslinien
---
|  |
| --- |
| Curves Reflexionslinien |
| Menüeintrag |
| Surfaces → Reflect Lines |
| Arbeitsbereich |
| [Curves](/Curves_Workbench/de "Curves Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Curves_ReflectLines.svg) **Curves Reflexionslinien** projiziert Reflexionslinien auf eine Form, entsprechend der Ausrichtung einer Ansicht.

## Anwendung

1. Ein Objekt auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_ReflectLines.svg) Reflexionslinien drücken.
   * Den Menüeintrag  **Oberflächen → ![](/images/Curves_ReflectLines.svg) Reflexionslinien** auswählen.
3. Wenn das ausgewählte Objekt kein **ReflectLines**-Objekt ist, wird ein **ReflectLines**-Objekt erstellt.
4. Die Blickrichtung des **ReflectLines**-Objekts wird der aktuellen Kameraausrichtung entsprechend eingestellt.
5. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um auszuwählen, welche Linien erstellt werden und wo sie positioniert werden sowie die zugehörigen Eigenschaften einzustellen (siehe Eigenschaften).

## Hinweise

* Ist die Daten-Eigenschaft**On Shape** auf `true` gesetzt, werden die Linien Auf der Eingangsform abgebildet (Daten-Eigenschaft**View Pos** und Daten-Eigenschaft**Up Dir** werden. nicht verwendet).  
  Andernfalls werden die Linien auf der XY-Ebene abgebildet.
* Ist die Ansicht-Eigenschaft**TrackCamera** auf `true` gesetzt, wird die Blickrichtung stets aktualisiert, wenn sich die Kamera bewegt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **ReflectLines**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Ansicht

AutoView

* Ansicht-Eigenschaft**TrackCamera** (`Bool`): Kamerabewegungen folgen.

### Daten

Cleaning Options

* Daten (Hidden)**Cleaning Tolerance** (`Quantity`): Cleaning Tolerance for duplicate detection.
* Daten**Remove Duplicates** (`Bool`): Remove duplicate edges.
* Daten (Hidden)**Samples** (`Integer`): Number of edge samples.

Edge Type

* Daten**Iso Line** (`Bool`): Isoparametric lines.
* Daten**Out Line** (`Bool`): Outline silhouette lines.
* Daten**Rg1 Line** (`Bool`): smooth edge of G1-continuity between two surfaces.
* Daten**RgN Line** (`Bool`): sewn edge of CN-continuity on one surface.
* Daten**Sharp** (`Bool`): sharp edge (of C0-continuity).

Reflect Lines

* Daten**Indiv Faces** (`LinkSubList`): Individual faces.
* Daten**On Shape** (`Bool`): Output on-shape 3D lines.
* Daten**Source** (`Link`): Source object.
* Daten (Hidden)**Up Dir** (`Vector`): Up direction.
* Daten**View Dir** (`Vector`): View direction.
* Daten (Hidden)**View Pos** (`Vector`): View position.
* Daten**Visible** (`Bool`): Generate the visible lines, or the hidden lines.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ReflectLines/de&oldid=1566689>"