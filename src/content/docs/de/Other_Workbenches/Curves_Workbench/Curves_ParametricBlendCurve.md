---
title: Curves ParametrischeÜbergangskurve
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves ParametricBlendCurve |
| Menu location |
| Curves → Blend curve |
| Workbenches |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

Daas Werkzeug ![](/images/Curves_ParametricBlendCurve.svg) **Curves ParametrischeÜbergangskurve** erstellt eine Übergangskurve zwischen zwei Kanten.

## Anwendung

1. Select two curves.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_ParametricBlendCurve.svg) [Blend curve](/Curves_ParametricBlendCurve "Curves ParametricBlendCurve") button.
   * Select the **Curves → ![](/images/Curves_ParametricBlendCurve.svg) Blend curve** option from the menu.
3. A **Blend\_Curve** object is created.
4. Optionally adjust values in the [Property editor](/Property_editor "Property editor"):
   * Set the Daten**Parameter1** and Daten**Parameter2** properties to `0.0 mm` to use the selected cuves' start vertices to place the blend curve's start and end vertices.
   * Set the Daten**Reverse1** and Daten**Reverse2** properties to `true` to switch the selected curves' start and end vertices.

## Hinweise

To reverse the orientation of the blend curve's start and end tangents prefix `-` to the value of its Daten**Scale1** or Daten**Scale2** property.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Blend\_Curve**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Blend Curve

* Daten**Auto Scale** (`Bool`): Compute scale values to get minimal curvature along curve.
* Daten**CurvePts** (`VectorList`): Poles of the Bézier curve.
* Daten**Output** (`Enumeration`): Output type.
  + `Single` (default): The result consists of the blend curve only.
  + `Wire`: The result consists of three individual curves, the blend curve and also both input curves.
  + `Joined`: The result consists of one continuous curve made of the blend curve and both input curves.

Edge1

* Daten**Continuity1** (`Enumeration`): Continuity level.
  + `C0` (= G0): The curves touch at the join point.
  + `G1` (default): As before plus the curves also share a common tangent direction at the join point.
  + `G2`: As before plus the curves also share a common center of curvature at the join point.
  + `G3`: As before plus the curves also share a common growth rate of the curvature at the join point.
  + `G4`: As before plus the curves also share a common acceleration of the growth rate of the curvature at the join point.
* Daten**Edge1** (`LinkSub`): Edge 1.
* Daten**Parameter1** (`Distance`): Location on first edge.
* Daten**Reverse1** (`Bool`): Reverse Edge.
* Daten**Scale1** (`Bool`): Scale of blend curve, negate the value to reverse the tangent orientation.

Edge2

* Daten**Continuity2** (`Enumeration`): Continuity level. (`C0`, `G1`, `G2`, `G3`, `G4`, see above)
* Daten**Edge2** (`LinkSub`): Edge 2.
* Daten**Parameter2** (`Distance`): Location on second edge.
* Daten**Reverse2** (`Bool`): Reverse Edge.
* Daten**Scale2** (`Bool`): Scale of blend curve, negate the value to reverse the tangent orientation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricBlendCurve/de&oldid=1567598>"