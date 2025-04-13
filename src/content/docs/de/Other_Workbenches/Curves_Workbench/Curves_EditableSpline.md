---
title: Curves EditierbarerSpline
---
|  |
| --- |
| Curves EditierbarerSpline |
| Menüeintrag |
| Curves → Freehand BSpline |
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

Das Werkzeug ![](/images/Curves_EditableSpline.svg) **Curves EditierbarerSpline** erstellt eine Freihand-B-Spline-Kurve.

## Anwendung

1. Wahlweise Knotenpunkte, Kanten und/oder Flächen auswählen:
   * Die Anzahl der Knotenpunkte des Splines entspricht der Anzahl der ausgewählten Elemente.
   * Die Spline-Knoten rasten auf ausgewählten Knotenpunkten und auf Mittelpunkten der ausgewählten Kanten und Flächen ein.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_EditableSpline.svg) Freihand-B-Spline drücken.
   * Den Menüeintrag **Kurve → Freihand-B-Spline** auswählen.
3. Eine Freihand-B-Spline-Kurve, ein **Freehand\_BSpline** -Objekt, wird erstellt und in einen speziellen Bearbetungsmodus versetzt.

## Optionen

Während der Ausführung des Befehls ist ein besonderer Bearbeitungsmodus aktiv und es gibt einige Aktionen und Verhaltensweisen, die mit Tasten und Mausklicks gesteuert werden können.

* To move a vertex or guide line (guide lines are the straight lines between vertexes) press and hold down the left mouse button on it, and move the mouse.
* The A key selects or deselects all vertexes and guide lines.
* The I key will add a vertex to the segment belonging to the selected guide line. The new vertex will be selected.
* The T key sets or un-sets tangent mode for the selected vertexes or guide lines (relative to the view direction).
* The P key aligns selected objects.
* The S key can be used to snap a vertex to a vertex belonging to another B-spline. With a vertex of the B-spline being edited selected, hold down the Ctrl key and add the target vertex to the selection, then hit the S key. The vertexes are snapped together.
* To unsnap vertexes, select the snapped vertex pair and again hit the S key. The vertex of the B-spline being edited remains selected and can now be moved.
* The L key sets or un-sets the linear interpolation.
* The X, Y or Z keys can be used to constrain the movement of the object being dragged. While dragging, hit the desired axis key. Hit the same key again to disable the constraint.
* The Q key finishes the command and exits edit mode.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Freehand\_BSpline**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Profile

* Daten**Data** (`VectorList`): Data list.
* Daten**Data Type** (`IntegerList`): Types of interpolated points.
* Daten**Flags** (`BoolList`): Tangent flags.
* Daten**Linear Segments** (`BoolList`): Linear segment flags.
* Daten**Parametrization** (`FloatConstraint`): Parametrization factor.
* Daten**Periodic** (`Bool`): Periodic curve.
* Daten**Support** (`LinkSubList`): Constraint shapes.
* Daten**Tangents** (`VectorList`): Tangents list.
* Daten**Tolerance** (`Float`): Tolerance.

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_EditableSpline/de&oldid=1566769>"