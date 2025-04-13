---
title: Curves Übergangskörper
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves BlendSolid |
| Menu location |
| Surfaces → BlendSolid |
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

Das Werkzeug ![](/images/Curves_BlendSolid.svg) Übergangskörper erstellt einen Übergangskörper zwischen zwei Kanten mit Übergängen zu ihren Trägerformen, deren Stetigkeit eingestellt werden kann.

## Anwendung

1. Select two faces of different solids.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_BlendSolid.svg) [BlendSolid](/Curves_BlendSolid "Curves BlendSolid") button.
   * Select the **Surfaces → ![](/images/Curves_BlendSolid.svg) BlendSolid** option from the menu.
3. A **Blend\_Solid** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose a different auto scale method and adjust the related properties (see Properties below).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Blend\_Solid**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten**Sources** (`LinkSubList`): Faces to join.

Continuity

* Daten**Continuity1** (`Integer`): Continuity order G... with shape 1.
* Daten**Continuity2** (`Integer`): Continuity order G... with shape 2.

Scale

* Daten**Auto Scale** (`Enumeration`): Compute scale values to get regular poles, or minimal curvature.
  + `RegularPoles` (default): ...
  + `MinimizeCurvature`: ...
  + `Manual`: ...
* Daten**Scale1** (`FloatList`): Scale values along face 1.
* Daten**Scale2** (`FloatList`): Scale values along face 2.
* Daten**Scale Samples** (`Integer`): Number of samples for auto scaling.

Settings

* Daten**Fuse** (`Bool`): Fuse the 3 solids together.
* Daten**Samples** (`Integer`): Number of samples to generate each surface.

Status

* Daten**Shape Type** (`String`): Status of the created shape.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSolid/de&oldid=1567536>"