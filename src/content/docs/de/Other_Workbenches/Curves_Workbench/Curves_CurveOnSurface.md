---
title: Curves CurveOnSurface/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves CurveOnSurface |
| Menu location |
| Curves → CurveOnSurface |
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

The ![](/images/Curves_CurveOnSurface.svg) **Curves CurveOnSurface** tool projects a curve on a face and optionally creates a normal or binormal face.

## Anwendung

1. Select a curve and a support face.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_CurveOnSurface.svg) [CurveOnSurface](/Curves_CurveOnSurface "Curves CurveOnSurface") button.
   * Select the **Curves → ![](/images/Curves_CurveOnSurface.svg) CurveOnSurface** option from the menu.
3. A **CurveOnSurface** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to add a normal or binormal face and adjust the related properties (see Properties below).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **CurveOnSurface**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Curve On Surface

* Daten**Closed** (`Bool`): Close the curve.
* Daten**Face** (`LinkSub`): Support face.
* Daten**Face Width** (`Distance`): Width of the output face.
* Daten**Input Edge** (`LinkSub`): Input edge.
* Daten**Output** (`Enumeration`): Output type.
  + `Curve only` (default): Only a curve projected on the selected face is created
  + `Normal face`: A curve, and a face along the curve and also normal to the selected face is created.
  + `Binormal face`: A curve and a face along the curve and also tangent to the selected face is created.
* Daten**Reverse** (`Bool`): Reverses the parametric orientation of the curve.
* Daten**Samples** (`Integer`): Number of samples.
* Daten**Symmetric** (`Bool`): Face symmetric across curve.
* Daten**Tolerance** (`Float`): Tolerance.

Orientation

* Daten**Reverse Binormal** (`Bool`): Reverse binormal.
* Daten**Reverse Normal** (`Bool`): Reverse normal.
* Daten**Reverse Tangent** (`Bool`): Reverse tangent.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CurveOnSurface/de&oldid=1566835>"