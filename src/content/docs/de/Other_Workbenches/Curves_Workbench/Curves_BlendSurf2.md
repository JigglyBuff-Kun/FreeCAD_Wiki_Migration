---
title: Curves BlendSurf2/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves BlendSurf2 |
| Menu location |
| Surfaces → BlendSurface |
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

The ![](/images/Curves_BlendSurf2.svg) **Curves BlendSurf2** tool creates a surface between two edges with some continuity with their support faces.

## Anwendung

1. Select four sub shapes:
   * The **first edge** and the related **first face**
   * The **second edge** and the related **second face**
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_BlendSurf2.svg) [BlendSurface](/Curves_BlendSurf2 "Curves BlendSurf2") button.
   * Select the **Surfaces → ![](/images/Curves_BlendSurf2.svg) BlendSurface** option from the menu.
3. A **Blend\_Surface** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose a different auto scale method and adjust the related properties (see Properties below).

## Hinweise

It seems like this tool currently lacks options to reverse the directions of the blend surface's start and end tangents.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Blend\_Surface**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten**Samples** (`Integer`): Number of samples to generate surface.
* Daten**Sources** (`LinkSubList`): Edges and support faces.

Continuity

* Daten**Continuity1** (`Integer`): Continuity level with face of edge 1.
* Daten**Continuity2** (`Integer`): Continuity level with face of edge 2.

Scale

* Daten**Auto Scale** (`Enumeration`): Compute scale values to get regular poles, or minimal curvature.
  + `RegularPoles` (default): ...
  + `MinimizeCurvature`: ...
  + `Manual`: ...
* Daten**Scale1** (`FloatList`): Scale values along edge 1.
* Daten**Scale2** (`FloatList`): Scale values along edge 2.
* Daten**Scale Samples** (`Integer`): Number of samples for auto scaling.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSurf2/de&oldid=1567565>"