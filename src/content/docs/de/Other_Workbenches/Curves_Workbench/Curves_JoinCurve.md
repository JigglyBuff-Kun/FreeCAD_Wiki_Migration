---
title: Curves KurveVerbinden
---
|  |
| --- |
| Curves KurveVerbinden |
| Menüeintrag |
| Curves → Join Curves |
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

Das Werkzeug ![](/images/Curves_JoinCurve.svg) Curves KurveVerbinden verbindet die ausgewählten Kanten zu einer B-Spline-Kurve.

![](/images/JoinCurve_pic1.jpg)

## Anwendung

1. Eine oder mehrere Kanten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_JoinCurve.svg) Kurven verbinden drücken.
   * Den Menüeintrag **Kurven → ![](/images/Curves_JoinCurve.svg) Kurven verbinden** auswählen.
3. Eine zusammenhängende Kurve, ein **JoinCurve**-Objekt, wird erstellt.
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um eine andere Parametrisierungsmethode auszuwählen und die zugehörigen Eigenschaften einzustellen (siehe Eigenschaften).

## Hinweise

* Edges of a shape, or edges selected from a sketch are accepted and must be added in a consecutive order.
* The result is a single continuous B-spline.

## Eigenschaften

### Data

InputSources

* Daten**Base** (`Link`): Join all the edges of this base object.
* Daten**Edges** (`LinkSubList`): List of edges to join.

Join

* Daten**CornerBreak** (`Bool`): Break on sharp corners.
* Daten**ForceClosed** (`Bool`): Force closed curve.
* Daten**ForceContact** (`Bool`): Force connection of edges.
* Daten**Reverse** (`Bool`): Reverse the output curve.
* Daten**StartOffset** (`Integer`): Set the start point of closed curve.
* Daten**Tolerance** (`Float`): Tolerance.

ShapeApproximation

* Daten**Active** (`Bool`): Use approximation.
* Daten (Hidden)**ApproxTolerance** (`Float`): Approximation tolerance.
* Daten (Hidden)**Continuity** (`Enumeration`): Desired continuity of the curve. (`C0`, `C1`, `G1`, `C2`, `G2`, `C3` (default), `CN`)
* Daten (Hidden)**DegreeMax** (`Integer`): Maximum degree of the curve.
* Daten (Hidden)**DegreeMin** (`Integer`): Minimum degree of the curve.
* Daten**ExtensionProxy** (`PythonObject`): Proxy object of the approximation extension.
* Daten (Hidden)**Parametrization** (`Enumeration`): Parametrization type.
  + `ChordLength`: ...
  + `Centripetal`: ...
  + `Uniform`: ...
* Daten (Hidden)**Samples** (`Integer`): Number of samples.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_JoinCurve/de&oldid=1568292>"