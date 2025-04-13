---
title: Curves MixedCurve/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves MixedCurve |
| Menu location |
| Curves → Mixed curve |
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

Das werkzeug ![](/images/Curves_MixedCurve.svg) **Curves Kombi-Kurve** erstellt eine 3D-Schnittkurve aus den Projektionen zweier Kurven.

## Anwendung

1. Select two curves.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_MixedCurve.svg) [Mixed curve](/Curves_MixedCurve "Curves MixedCurve") button.
   * Select the **Curves → ![](/images/Curves_MixedCurve.svg) Mixed curve** option from the menu.
3. A **Mixed\_Curve** object is created.
4. In the [Property editor](/Property_editor "Property editor") edit the Daten**Direction1** and Daten**Direction2** properties to set the projection directions.  
   This is optional if both selected curves were made with the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

## Hinweise

* Projection directions are automatically detected if possible. In case of [Sketcher](/Sketcher_Workbench "Sketcher Workbench") curves the normal of the sketch plane is used.
* The Daten**Direction1** and Daten**Direction2** properties override automatically detected directions. It is mandatory to enter values manually if it is not possible to detect a direction automatically.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Mixed\_Curve**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Mixed Curve

* Daten**Direction1** (`Vector`): Projection direction of the first shape. If vector is null the shape's placement is used.
* Daten**Direction2** (`Vector`): Projection direction of the second shape. If vector is null the shape's placement is used.
* Daten**Fill Face1** (`Bool`): Builds ruled surfaces between shape1 and resulted Mixed\_Curve.
* Daten**Fill Face2** (`Bool`): Builds ruled surfaces between shape2 and resulted Mixed\_Curve.
* Daten**Shape1** (`Link`): First shape.
* Daten**Shape2** (`Link`): Second shape.

Shape Approximation

* Daten**Active** (`Bool`): Use Approximation.
* Daten**Approx Tolerance** (`Float`): Approximation tolerance.
* Daten**Continuity** (`Enumeration`): Desired continuity of the curves.
* Daten**Degree Max** (`Integer`): Maximum degree of the curve.
* Daten**Degree Min** (`Integer`): Minimum degree of the curve.
* Daten**Extension Proxy** (`PythonObject`): Proxy object of the approximation extension.
  + `ChordLength`:
  + `Centripetal`:
  + `Uniform`:
* Daten**Parametrization** (`Enumeration`): Parametrization type.
* Daten**Samples** (`Integer`): Number of samples.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_MixedCurve/de&oldid=1566399>"