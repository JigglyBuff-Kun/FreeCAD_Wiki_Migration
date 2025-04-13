---
title: Loft
---
|  |
| --- |
| Part Loft |
| Menu location |
| Part → Loft... |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.13 |
| See also |
| [Part Sweep](/Part_Sweep "Part Sweep") |
|  |

## Description

The ![](/images/Part_Loft.svg) [Part Loft](/Part_Loft "Part Loft") command creates a face, a shell, or a solid shape from two or more profiles (cross-sections).

![](/images/Part_Loft_solid_ruled_from3profiles_example_FreeCAD_0_13.jpg)

Loft from three profiles which are two [Part Circles](/Part_Circle "Part Circle") and one [Part Ellipse](/Part_Ellipse "Part Ellipse"). Parameters are Solid "True" and Ruled "True".

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Part_Loft.svg) [Loft...](/Part_Loft "Part Loft") button.
   * Select the **Part → ![](/images/Part_Loft.svg) Loft...** option from the menu.
2. The Loft [task panel](/Task_panel "Task panel") opens.
3. In the *Available Profiles* list on the left select the first profile and click on the right arrow to place it in the *Selected profiles* list on the right.
4. Repeat for the second profile and again if more than two profiles are desired.
5. Optionally use the up and down arrows to reorder the selected profiles.
6. Define options [Create solid](#Data), [Ruled surface](#Data), and [Closed](#Data).
7. Click OK.

### Accepted geometry

* **Profiles:** can be a point (vertex), line (edge), wire or face. Edges and wires may be either open or closed. There are various [Limitations](#Limitations), see below.

* [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as profiles. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Options

#### Create solid

If "Solid" is set to "true", FreeCAD creates a solid, provided the profiles are closed; if set to "false", FreeCAD creates a face or a shell for either open or closed profiles.

#### Ruled surface

If "Ruled surface" is "true" FreeCAD creates a face, a shell or a solid from [ruled surfaces](http://en.wikipedia.org/wiki/Ruled_surface).

#### Closed

If "Closed" is "true" FreeCAD attempts to loft the last profile to the first profile to create a closed loop.

For more information on how profiles are joined together see [Part Loft Technical Details](/Part_Loft_Technical_Details "Part Loft Technical Details").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part Loft object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Loft

* Dados**Sections** (`LinkList`): Lists the sections used.
* Dados**Solid** (`Bool`): False (default). True creates a solid.
* Dados**Ruled** (`Bool`): False (default). True creates a ruled surface.
* Dados**Closed** (`Bool`): False (default). True creates a closed loft by connecting last to first profile.
* Dados**Max Degree** (`IntegerConstraint`): Maximum degree.

## Limitations

A Part Loft has the same limitations as a [Part Sweep](/Part_Sweep#Limitations "Part Sweep").

### Closed Lofts

* The results of a closed Loft may be unexpected, the Loft may develop twists or kinks. Lofting is very sensitive to the Placement of the profiles and the complexity of the curves required to connect the corresponding vertices in all the profiles.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Loft/pt-br&oldid=1438630>"