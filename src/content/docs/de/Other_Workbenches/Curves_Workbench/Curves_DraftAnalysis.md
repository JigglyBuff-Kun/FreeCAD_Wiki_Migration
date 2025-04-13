---
title: Curves Schrägungsanalyse
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves DraftAnalysis |
| Menu location |
| Surfaces → Draft Analysis |
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

Das Werkzeug ![](/images/Curves_DraftAnalysis.svg) Schrägungsanalyse: Erstellt eine farbige Überlagerung auf einem Objekt, um Schrägungswinkel darzustellen.

![](/images/Curves_DraftAnalysis01.png)

A sphere with a [reflect line](/Curves_ReflectLines "Curves ReflectLines") on its equator (left) and the related DraftAnalysis object (right)

## Anwendung

1. Select one or more shapes.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_DraftAnalysis.svg) [Draft Analysis](/Curves_DraftAnalysis "Curves DraftAnalysis") button.
   * Select the **Surfaces → ![](/images/Curves_DraftAnalysis.svg) Draft Analysis** option from the menu.
3. A **DraftAnalysis** object is created for each selected shape.

## Hinweise

* With this tool you can check if an object could be die cast in general and in connection with reflect lines determine the parting line for the die cavities, like in the above image. The tool direction runs through the poles of the sphere and its equator is the parting line. In this case the color sets above and below the parting line can be considered separate analyses of both halves.
* If this tool is applied to an object representing a die then one color set shows how well a cast item would detach from the die while the other color set highlights the regions that would obstruct the ejection of the item (undercuts).
* The angles should be set according to manufacturing process and material chosen for the selected item. For example:
  + Ansicht**Draft Angle1+2**: The minimum required angle that would still result in proper parts if other settings of the manufacturing process are fine-tuned and monitored.
  + Ansicht**Draft Tol1+2**: Added on top of the required angle giving the minimum recommended angle that will result in proper parts and a stable manufacturing process under any circumstance without further action.
* The colors:
  + Ansicht**Color In Draft1+2**: Marks areas with draft angles larger than the recommended angle.
  + Ansicht**Color In Tolerance1+2**: Marks areas with draft angles between the required angle and the minimum recommended angle.
  + Ansicht**Color Out Of Draft1+2**: Marks areas with draft angles below the required angle that can be interpreted as having no draft at all.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **DraftAnalysis**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Ansicht

Analysis Options

* Ansicht**Direction** (`Vector`): Anaysis direction
* Ansicht**Draft Angle1** (`FloatConstraint`): Positive draft angle
* Ansicht**Draft Angle2** (`FloatConstraint`): Negative draft angle
* Ansicht**Draft Tol1** (`FloatConstraint`): Positive draft tolerance
* Ansicht**Draft Tol2** (`FloatConstraint`): Negative draft tolerance
* Ansicht**Shading** (`FloatConstraint`): Amount of shading on the analysis overlay

Colors1 Positive Draft

* Ansicht**Color In Draft1** (`Color`): Color of the positive in-draft area
* Ansicht**Color In Tolerance1** (`Color`): Color of the positive tolerance area
* Ansicht**Color Out Of Draft1** (`Color`): Color of the positive out-of-draft area

Colors2 Negative Draft

* Ansicht**Color In Draft2** (`Color`): Color of the negative in-draft area
* Ansicht**Color In Tolerance2** (`Color`): Color of the negative tolerance area
* Ansicht**Color Out Of Draft2** (`Color`): Color of the negative out-of-draft area

### Daten

Analysis Options

* Daten**Source** (`Link`): Object on which the analysis is performed

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_DraftAnalysis/de&oldid=1567499>"