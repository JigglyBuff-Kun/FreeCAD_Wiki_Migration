---
title: Assembly AnsichtErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly AnsichtErstellen |
| Menüeintrag |
| Assembly → Explosionsansicht erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| V |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

The ![](/images/Assembly_CreateView.svg) [Assembly CreateView](/Assembly_CreateView "Assembly CreateView") tool creates an exploded views container (Exploded\_Views object) in the active Assembly that contains one (default) or more exploded views (Exploded\_View objects). An assembly can only hold one exploded views container.

An exploded view collects the moves (Move objects) used to relocate parts from assembled position to exploded position. The altered positions of assembled parts and the representations of the moves are only visible when an exploded view is being edited and in TechDraw views derived from an exploded view.

## Anwendung

1. Make sure an assembly is active.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_CreateView.svg) [Create Exploded View](/Assembly_CreateView "Assembly CreateView") button.
   * Select the **Assembly → ![](/images/Assembly_CreateView.svg) Create Exploded View** option from the menu.
   * Use the keyboard shortcut: E.
3. If no Exploded\_Views object pre-exists: An Exploded\_Views container is added to the active assembly.
4. An Exploded\_View object is added to the Exploded\_Views container.
5. The **Create Exploded View** dialog opens in the [task panel](/Task_panel "Task panel").
6. Optionally check **Parts as single solid** checkbox to...
7. Optionally choose one way to add a Move:
   * Explode radially:
     1. Press Explode radially
     2. All parts are selected and a dragger (see [Notes](#Notes)) appears.
     3. Optionally realign the dragger by selecting one option from the **Align dragger to...** drop-down list.
        + Align to...
          1. Select an edge or a face of any part to align the dragger.
        + Align to part center.
          1. The dragger is aligned according to the grounded part's center.
        + Align to part origin.
          1. The dragger is aligned according to the grounded part's origin.
     4. Move the dragger by one or more of the following options (only the offset from the start point counts, each part's direction is calculated separately):
        + Press and hold the left mouse button on an axis arrow and drag to translate the object along that axis.
        + Press and hold the left mouse button on a plane and drag to translate the object along that plane.
        + Press and hold the left mouse button on a sphere and drag to rotate the object around that axis.
     5. A Move (see [Notes](#Notes)) is added once the left mouse button is released.
   * Explode along separate movements:
     1. Select one or more parts.
     2. A dragger appears.
     3. Optionally realign the dragger (see above).
     4. Move the dragger as described above (the directions according to the dragger handles are taken into account).
     5. A Move is added once the left mouse button is released.
     6. Optionally select/deselect parts and/or repeat dragging to add more Moves.
8. Do one of the following:
   * Press the OK button to confirm and finish the tool.
   * Press the Cancel button to revert all changes and finish the tool.
9. All parts are moved back into their assembly position and the connecting lines are hidden.

## Hinweise

* The dragger is a tool similar to the transformation manipulator (![](/images/Std_TransformManip.svg) [Std TransformManip](/Std_TransformManip "Std TransformManip")), but without an **Increments** task panel.
* A Move object in the [tree view](/Tree_view "Tree view") is represented in the [3D view](/3D_view "3D view") by a dashed red line for each part involved in this move. These connecting lines are only visible when this tool is running, or in a TechDraw view that is derived from an Exploded\_View object.
* To add an exploded view to a TechDraw page: switch to the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"), add a page, select the exploded view object in the tree, and click [Insert View](/TechDraw_View "TechDraw View").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Exploded\_Views containers are `Assembly::ViewGroup` objects. Exploded\_View objects are derived from the `ExplodedView` class, and Move objects from the `ExplodedViewStep` class.

### Assembly::ViewGroup

#### Daten

Basis

* Daten-Eigenschaft**Label** (`String`):
* Daten-Eigenschaft (versteckt)**Label2** (`String`):
* Daten-Eigenschaft (versteckt)**Expression Engine** (`ExpressionEngine`):
* Daten-Eigenschaft (versteckt)**Visibility** (`Bool`):
* Daten-Eigenschaft**Group** (`LinkList`):
* Daten-Eigenschaft (versteckt)**\_ Group Touched** (`Bool`):

#### Ansicht

Display Options

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`):
* Ansicht-Eigenschaft**Show In Tree** (`Bool`):
* Ansicht-Eigenschaft**Visibility** (`Bool`):

Selection

* Ansicht**On Top When Selected** (`Enumeration`):
* Ansicht**Selection Style** (`Enumeration`):

### ExplodedView

Ein **ExplodedView**-Objekt (Explosionsansicht) wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

#### Daten

Exploded View

* Daten-Eigenschaft**Moves** (`LinkList`): Liste der Bewegungen (Move-Objekte) der Explosionsansicht.

### ExplodedViewStep

An **ExplodedViewStep** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

#### Daten

Exploded Move

* Daten**Move Type** (`Enumeration`): The Type of the move. (`Normal`, `Radial`).
* Daten**Movement Transform** (`Placement`): This is the movement of the move.

  :   The end placement is the result of the start placement \* this placement.
* Daten**Obj Names** (`StringList`): The objects moved by the move.
* Daten**Parts** (`LinkList`): The containing parts of objects moved by the move.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateView/de&oldid=1515526>"