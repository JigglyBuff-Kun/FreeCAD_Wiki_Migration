---
title: Curves Punktefolge
---
|  |
| --- |
| Curves Punktefolge |
| Menüeintrag |
| Curves → Discretize |
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

Das Werkzeug ![](/images/Curves_Discretize.svg) **Curves Punktefolge** verteilt eine Punktefolge entlang einer Kante oder eines Linienzuges entsprechend der ausgewählten Verteilungsmethode.

## Anwendung

1. Eine oder mehrere Kanten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_Discretize.svg) Diskretisieren drücken.
   * Den Menüeintrag **Kurven → Diskretisieren** auswählen.
3. Eine Punktefolge, ein **Discretized\_Edge**-Objekt, wird für jede ausgewählte Kante erstellt.
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um eine andere Verteilungsmethode auszuwählen und die zugehörigen Eigenschaften einzustellen (siehe Eigenschaften).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Discretized\_Edge**-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Discretized

* Daten**Edge** (`LinkSub`): Input edge.
* Daten**Point** (`VectorList`): Lists the output points.
* Daten**Target** (`Enumeration`): Tool target.
  + `SingleEdge` (default): Discretizes the selected edge only.
  + `Wire`: Discretizes the whole wire the edge belongs to.

Method

* Daten**Algorithm** (`Enumeration`): Discretization method.
  + `Number` (default): A number of points that are evenly distributed along the selected edge/wire.
  + `QuasiNumber`: ...
  + `Distance`: All points are placed at the same distance to their neighbors apart from the last pair.
  + `Deflection`: ...
  + `QuasiDeflection`: ...
  + `Angular-Curvature`: ...
* Daten**Angular** (`Float`): Angular value for Angular-Curvature Algorithm.
* Daten**Curvature** (`Float`): Curvature value for Angular-Curvature Algorithm.
* Daten**Deflection** (`Float`): Distance for deflection Algorithm.
* Daten**Distance** (`Float`): Distance between edge points.
* Daten**Minimum** (`Integer`): Minimum number of points.
* Daten**Number** (`Integer`): Number of edge points.

Output

* Daten**Normalized Parameters** (`FloatList`): Normalized parameters list.

Parameters

* Daten**Parameter First** (`Float`): Start parameter.
* Daten**Parameter Last** (`Float`): End parameter.

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Discretize/de&oldid=1570659>"