---
title: Linha
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| Sketcher Line                                                                       |
| Veja também                                                                         |
| Sketch → Sketcher geometries → Create line                                          |
| Bancadas de trabalho                                                                |
| [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br")                    |
| Atalho padrão                                                                       |
| L                                                                                   |
| Introduzido na versão                                                               |
| -                                                                                   |
| Veja também                                                                         |
| [Sketcher Polyline](/Sketcher_CreatePolyline/pt-br "Sketcher CreatePolyline/pt-br") |
|                                                                                     |

## Description

The ![](/images/Sketcher_CreateLine.svg) [Sketcher CreateLine](/Sketcher_CreateLine "Sketcher CreateLine") tool creates a line. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences") are enabled the tool has three modes.

![](/images/Sketcher_LineExample1.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateLine.svg) [Create line](/Sketcher_CreateLine "Sketcher CreateLine") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateLine.svg) Create line** option from the menu.
   - Use the keyboard shortcut: G then L.
2. The cursor changes to a cross with the current tool mode icon.
3. If [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences") are enabled the **Line parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateLineAngleLength.svg) **Point, length, angle**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the start point of the line. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the endpoint of the line. Or with Dim-OVP: enter the length and/or angle of the line. The angle is relative to the X axis of the sketch.
   - ![](/images/Sketcher_CreateLineLengthWidth.svg) **Point, width, height**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the start point of the line. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the endpoint of the line. Or with Dim-OVP: enter its X and/or Y distance from the start point.
   - ![](/images/Sketcher_CreateLine.svg) **2 points**:
     1. Pick the start point of the line. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the endpoint of the line. Or with Pos-OVP: enter its X and/or Y coordinate.
5. The line is created and applicable Pos-OVP and Dim-OVP based constraints are added.
6. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating lines.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateLine/pt-br&oldid=1404573>"
