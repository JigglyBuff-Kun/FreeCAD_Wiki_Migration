---
title: Curves DraftAnalysis
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves DraftAnalysis                           |
| Menu location                                  |
| Surfaces → Draft Analysis                      |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_DraftAnalysis.svg) **Curves DraftAnalysis** tool creates a colored overlay on an object to visualize draft angles.

![](/src/assets/images/Curves_DraftAnalysis01.png)

A sphere with a [reflect line](/Curves_ReflectLines "Curves ReflectLines") on its equator (left) and the related DraftAnalysis object (right)

## Usage

1. Select one or more shapes.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_DraftAnalysis.svg) [Draft Analysis](/Curves_DraftAnalysis "Curves DraftAnalysis") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_DraftAnalysis.svg) Draft Analysis** option from the menu.
3. A **DraftAnalysis** object is created for each selected shape.

## Notes

- With this tool you can check if an object could be die cast in general and in connection with reflect lines determine the parting line for the die cavities, like in the above image. The tool direction runs through the poles of the sphere and its equator is the parting line. In this case the color sets above and below the parting line can be considered separate analyses of both halves.
- If this tool is applied to an object representing a die then one color set shows how well a cast item would detach from the die while the other color set highlights the regions that would obstruct the ejection of the item (undercuts).
- The angles should be set according to manufacturing process and material chosen for the selected item. For example:
  - View**Draft Angle1+2**: The minimum required angle that would still result in proper parts if other settings of the manufacturing process are fine-tuned and monitored.
  - View**Draft Tol1+2**: Added on top of the required angle giving the minimum recommended angle that will result in proper parts and a stable manufacturing process under any circumstance without further action.
- The colors:
  - View**Color In Draft1+2**: Marks areas with draft angles larger than the recommended angle.
  - View**Color In Tolerance1+2**: Marks areas with draft angles between the required angle and the minimum recommended angle.
  - View**Color Out Of Draft1+2**: Marks areas with draft angles below the required angle that can be interpreted as having no draft at all.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **DraftAnalysis** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### View

Analysis Options

- View**Direction** (`Vector`): Anaysis direction
- View**Draft Angle1** (`FloatConstraint`): Positive draft angle
- View**Draft Angle2** (`FloatConstraint`): Negative draft angle
- View**Draft Tol1** (`FloatConstraint`): Positive draft tolerance
- View**Draft Tol2** (`FloatConstraint`): Negative draft tolerance
- View**Shading** (`FloatConstraint`): Amount of shading on the analysis overlay

Colors1 Positive Draft

- View**Color In Draft1** (`Color`): Color of the positive in-draft area
- View**Color In Tolerance1** (`Color`): Color of the positive tolerance area
- View**Color Out Of Draft1** (`Color`): Color of the positive out-of-draft area

Colors2 Negative Draft

- View**Color In Draft2** (`Color`): Color of the negative in-draft area
- View**Color In Tolerance2** (`Color`): Color of the negative tolerance area
- View**Color Out Of Draft2** (`Color`): Color of the negative out-of-draft area

### Data

Analysis Options

- Data**Source** (`Link`): Object on which the analysis is performed

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_DraftAnalysis/en&oldid=1567440>"
