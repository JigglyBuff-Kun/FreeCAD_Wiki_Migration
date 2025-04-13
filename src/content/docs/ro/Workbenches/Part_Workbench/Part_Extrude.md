---
title: Part Extrudere
---
|  |
| --- |
| Part Extrude |
| Menu location |
| Part → Extrude |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Descriere

**Part Extrude** extinde o formă la o distanță specificată, într-o direcție specificată. Tipul formei de ieșire va varia în funcție de tipul formei de intrare și de opțiunile selectate.

În cele mai comune scenarii, lista de mai jos prezintă forma tip de ieșire așteptat de tip de formă de la o intrare/input dată.

* Extruderea unui vertex (punct), va produce o margine liniară
* Extruderea unei margine deschisă (de exemplu, linie, arc), va produce o fațetă deschisă (de exemplu, planul)
* Extrudează o margine închisă (de exemplu, cerc) va produce în cele din urmă o față închisă (de exemplu, cilindru nedeterminat) sau parametrul „solid“ este „adevărat“, va produce un solid (de exemplu, un cilindru solid închis).
* Extrude un filament deschis (de exemplu, un proiect de fire), va produce o cochilie deschisă (mai multe fațete îmbinate)
* Extrudează un filament închis (de exemplu, Draft Wire), va produce în cele din urmă o coajă (mai multe fețe atașat) sau, în cazul în care „solid“ este parametrul „true“, produce un solid
* Extrudare fețetei (de exemplu, un plan), va produce un solid (de exemplu, Cuboid)
* Extrude un [Draft Shape String](/Draft_ShapeString "Draft ShapeString"), va produce un compus solid (șirul este alcătuit din litere, care sunt fiecare un solid)
* Extruderea unei cochilie de fațete, va produce un Compsolid

![](/images/Part_Extrude_demo.png)

Examples of extrusion

## Usage

## Cum se folosește

1. Select the shape(s) in the 3D view or in the Model tree
2. Click on the ![](/images/Part_Extrude.png) **Extrude** icon in the toolbar, or go to the Part → Extrude menu
3. Set the direction and length and optionally other parameters (see the following [Parameters](#Parameters) section for more details).
4. Click OK.

Alternatively, the selection can be done after launching the tool, by selecting one or more shape from the list in the Tasks panel.

The Model tree will list as many Extrude objects as there were selected shapes. Each input shape is placed underneath its Extrude object.

## Parameters

## Parametri

Forma Extrude este definită de următorii parametri, care pot fi editați după crearea ei în fila/tab-ul Date.

* **Base**: the input shape (the shape upon which the Part Extrude was applied)

* **Dir**: the direction to extend the shape. If **Dir Mode** is 'Custom', you can edit **Dir**. Otherwise, **Dir** is read-only, and computed from the linked shape.

* **Dir Link**: parametric link to a edge (line) that sets the direction of extrusion. As of v0.17, this property is not supported by property editor.

* **Dir Mode**: sets how **Dir** is controlled. 'Custom' meand **Dir** is editable. 'Edge' means Dir is obtained from an edge (line) linked by **Dir Link**. 'Normal' means Dir is perpendicular to plane of the input shape.

* **Length Fwd**: The distance to extrude by. If both **Length Fwd** and **Length Rev** are zero, the length of **Dir** vector is used.

* **Length Rev**: Additional length to extrude against **Dir**.

* **Solid**: if True, extruding a closed edge or a closed wire will yield a solid. If False, a shell will result.

* **Reversed**: reverses the extrusion to go against **Dir**.

* **Symmetric**: if True, extrusion is centered at the input shape, and total length is **Length Fwd**. **Length Rev** is ignored.

* **Taper Angle** and **Taper Angle Rev**: applies an angle to the extrusion, so that sides of the extrusion are drafted by the specified angle. Positive angle means the cross-section expands. **Taper Angle Rev** sets the taper for the reversed part of the extrusion (the part from **Length Rev**). As of v0.17, tapered extrusion is only supported for wires with no holes.

* **Face Maker Class**: sets C++ class name of face making code, which is used when making solids from wires. This property is here mainly for maintaining backward compatibility. Do not touch, unless you know what you are doing.

* **Placement**: the standard [placement](/Placement "Placement") parameters

* **Label**: label to be shown in the Model tree (not available on Extrude creation)

## Task dialog

![](/images/Part_Extrude_dialog.png)

* OK: creates the extrusion, and closes the dialog.

* Close: closes dialog, without doing anything.

* Apply: creates the extrusion, but does not close the dialog. You can then select another shape in the list on the bottom, and create more extrusions. Clicking Apply may times creates many extrusions.

* 'Direction' radio buttons: set the way extrusion direction is computed.

* 'Select' button: click it, and then pick an edge in 3D view. That edge will appear in text field next to the button, in format "ObjectName:EdgeN". You can also type the link manually. Values X,Y,Z will be filled according to the edge direction.

* X, Y, Z buttons: click X button to set extrusion direction to +X axis. Click it again to set -X axis.

* X,Y,Z input fields: set or display the direction vector of extrusion. If both lengths are zero, the length of this vector sets the length of extrusion, and values are always in mm, regardless of unit preferences.

* Length fields: set length of extrusion. These input fields have unit support.

* Symmetric: spreads out the extrusion into both directions, so that the profile remains in the middle.

* Taper Outward Angle: positive angle means profile is expanded at other end of extrusion.

* Create Solid checkbox: if checked, extruding a closed wire or edge will yield a solid. It is checked by default, if a closed wire was preselected before invoking Part Extrude.

* Shape list: here you select, what shapes to extrude. If multiple objects are selected, multiple Extrude objects are created.

## Notes

* [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as profiles and to specify the direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Contra intuitive/Gotchas

Dialogul Extrude Parts nu are încă o previzualizare. "Aplicați" creează un obiect de extrudare de fiecare dată când faceți clic pe el, ceea ce poate fi util ca previzualizare. Cu toate acestea, acestea vor rămâne și un altul va fi creat când faceți clic pe OK.[Undo](/Std_Undo "Std Undo") can be useful to clean them up before clicking OK.

## Comparison with [PartDesign Pad](/PartDesign_Pad "PartDesign Pad")

PartDesign Pad este, de asemenea, o funcți(e)onalitate de extrudare, dar există diferențe importante.

* Part Extrude always creates a standalone shape. PartDesign Pad fuses the extrusion result to the rest of the Body.
* Part Extrude doesn't care where it is in model tree. PartDesign Pad can only live inside a [PartDesign Body](/PartDesign_Body "PartDesign Body").
* Part Extrude can extrude any object that has a Part geometry ([OpenCASCADE](/OpenCASCADE "OpenCASCADE") shape), except for solids and CompSolids.
* Part Extrude can extrude individual faces of other objects. PartDesign Pad will only accept either Sketch or faces of PartDesign objects as a profile.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Extrude/ro&oldid=1282041>"