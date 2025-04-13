---
title: Curves Interpolieren
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves Interpolieren |
| Menüeintrag |
| Curves → Interpolate |
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

Das Werkzeug ![](/images/Curves_Interpolate.svg) Curves Interpolieren interpoliert eine B-Spline-Kurve aus einer Punktefolge.

## Anwendung

1. Einige Knoten auswählen oder ein Objekt, das wenigstens 2 Knoten enthält.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Curves_Interpolate.svg) Curves Interpolieren drücken.
   * Den Menüeintrag **Kurven → ![](/images/Curves_Interpolate.svg) Interpolieren** auswählen.
3. Ein **Interpolation\_Curve**-Objekt wird erstellt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Interpolation\_Curve**-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

General

* Daten**CustomTangents** (`Bool`): User specified tangents.
* Daten (Hidden)**DetectAligned** (`Bool`): interpolate 3 aligned points with a line.
* Daten**Periodic** (`Bool`): Set the curve closed.
* Daten (Hidden)**PointList** (`LinkSubList`): Point list to interpolate.
* Daten**Polygonal** (`Bool`): interpolate with a degree 1 polygonal curve.
* Daten**Source** (`Link`): Source object that provides points to interpolate.
* Daten**StartOffset** (`Integer`): Offset the start index of the point list.
* Daten**TangentFlags** (`BoolList`): Activation flag of tangents.
* Daten**Tangents** (`VectorList`): Tangents at interpolated points.
* Daten**Tolerance** (`Float`): Interpolation tolerance.

Parameters

* Daten (Hidden)**Parameters** (`FloatList`): Parameters of interpolated points.
* Daten **Parametrization**  (`Enumeration`): Parametrization type.
  + `ChordLength` (default): ...
  + `Centripetal`: ...
  + `Uniform`: ...
  + `Custom`: ...
* Daten**WireOutput** (`Bool`): outputs a wire or a single edge.

Spiral

* Daten**FaceSupport** (`LinkSub`): Face support of the spiral.
* Daten**UTurns** (`Integer`): Nb of turns between 2 points, in U direction.
* Daten**VTurns** (`Integer`): Nb of turns between 2 points, in V direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Interpolate/de&oldid=1570960>"