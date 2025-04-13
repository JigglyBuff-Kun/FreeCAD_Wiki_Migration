---
title: Draft Hatch
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Draft Hatch                                                                        |
| Menu location                                                                      |
| Drafting → Hatch Annotation → Hatch                                                |
| Workbenches                                                                        |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                   |
| H A                                                                                |
| Introduced in version                                                              |
| 0.20                                                                               |
| See also                                                                           |
| [Draft Pattern](/Draft_Pattern "Draft Pattern")                                    |
|                                                                                    |

## Description

The ![](/src/assets/images/Draft_Hatch.svg) **Draft Hatch** command creates hatches on the planar faces of a selected object.

## Usage

1. Select an object with faces. Only the planar faces of the object will be hatched.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Hatch.svg) [Hatch](/Draft_Hatch "Draft Hatch") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/src/assets/images/Draft_Hatch.svg) Hatch** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Annotation → ![](/src/assets/images/Draft_Hatch.svg) Hatch** option from the menu.
   - Use the keyboard shortcut: H then A.
3. The **Hatch** task panel opens. See [Options](#Options) for more information.
4. Press the OK button to finish the command.

## Options

- Press the ... button to select a **PAT file**. See [Notes](#Notes).
- Select a **Pattern** from the file.
- Specify a **Scale** for the pattern.
- Specify a **Rotation** for the pattern.
- Press Esc or the Cancel button to abort the command.

## Pattern alignment

When the hatch pattern for a face is calculated it is temporarily translated to the global XY plane by default. For a face with straight edges the first straight edge determines how this happens. The first point of that edge is put on the origin, and the edge itself is aligned with the X-axis. If you create [Draft Wires](/Draft_Wire "Draft Wire") with that in mind you can control how the hatch pattern is aligned with the outline of the face.

If all faces of the selected object are on the global XY plane you can switch off this default behavior by setting the Data**Translate** property of the Draft Hatch to `false`. The hatch pattern is then aligned with the origin and the X axis of the global coordinate system. For faces on the XY plane with straight edges the Data**Translate** property can be used to switch between absolute (on the left in the image) and relative (on the right in the image) patterns.

![](/src/assets/images/Draft_Hatch_alignment.png)

Two Draft Wires with hatches.  
The wires were created in a CCW direction starting from the bottom left point.  
For the Draft Hatch on the left the Translate property is set to false.  
For the Draft Hatch on the right it is set to true.

## Notes

- For now the advice is to download a PAT file. Many can be found online. You can for example do a web search for acad.pat or acadiso.pat.
- A small PAT file is installed with FreeCAD: <program_folder>/data/Mod/TechDraw/PAT/FCPAT.pat, where <program_folder> is the FreeCAD program folder:
  - On Linux it is usually /usr/share/freecad.
  - On Windows it is usually C:\Program Files\FreeCAD.
  - On macOS it is usually /Applications/FreeCAD.
- 1.0 and below: Patterns with dashed lines are not handled properly.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

The following preferences are involved:

- PAT file: **Tools → Edit parameters... → BaseApp → Preferences → Mod → TechDraw → PAT → FilePattern**.
- Pattern: **Tools → Edit parameters... → BaseApp → Preferences → Mod → TechDraw → PAT → NamePattern**.
- Scale: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → HatchPatternScale**.
- Rotation: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → HatchPatternRotation**.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Hatch object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Hatch

- Data**Base** (`Link`): specifies the object whose faces are hatched.
- Data**File** (`File`): specifies the PAT file.
- Data**Pattern** (`String`): specifies the pattern name.
- Data**Rotation** (`Angle`): specifies the rotation of the pattern.
- Data**Scale** (`Float`): specifies the scale of the pattern.
- Data**Translate** (`Bool`): specifies if the faces are temporarily translated to the global XY plane during the hatching process. Setting it to `false` may give wrong results for non-XY faces.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Hatch use the `make_hatch` method of the Draft module.

```
hatch = make_hatch(baseobject, filename, pattern, scale, rotation)

```

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
rectangle.MakeFace = True
filename = App.getHomePath() + "data/Mod/TechDraw/PAT/FCPAT.pat"
pattern = "Horizontal5"
hatch = Draft.make_hatch(rectangle, filename, pattern, scale=50, rotation=45)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Hatch/en&oldid=1556324>"
