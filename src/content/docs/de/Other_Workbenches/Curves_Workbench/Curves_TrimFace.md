---
title: Curves TrimFace/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves TrimFace |
| Menu location |
| Surfaces → Trim face |
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

The ![](/images/Curves_TrimFace.svg) **Curves TrimFace** tool trims a face with a projected curve.

## Anwendung

1. Select a face and a curve.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_TrimFace.svg) [Trim face](/Curves_TrimFace "Curves TrimFace") button.
   * Select the **Surfaces → ![](/images/Curves_TrimFace.svg) Trim face** option from the menu.
3. A **TrimmedFace** object is created.

## Hinweise

* The point picked to select the face defines the side of the projected curve that is kept.
* The projection vector is the direction vector of the selected curve if available, or else the current direction of the aktive view.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **TrimmedFace**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Trim Face

* Daten**Vector** (`Link`): Trimming Vector.
* Daten**Direction** (`Vector`): Trimming direction.
* Daten**Face** (`LinkSub`): Input face
* Daten**Picked Point** (`Vector`): Picked point in parametric space of the face (u,v,0).
* Daten**Tool** (`LinkSubList`): Trimming curve.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_TrimFace/de&oldid=1567589>"