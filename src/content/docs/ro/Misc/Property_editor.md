---
title: Editor de proprietăți
---
## Prezentare generală

Editorul proprietății este unul dintre cele mai importante instrumente ale FreeCAD și un element principal în timpul colaborării cu FreeCAD.
Editorul proprietății permite gestionarea proprietăților obiectelor din document.

The [Property editor](/Property_editor "Property editor") appears in the lower section of the **Model** panel (if the [Combo view](/Combo_view "Combo view") is active) or as a stand-alone panel called **Property view**.

În general, editorul de proprietăți este destinat să se ocupe de un singur obiect la un moment dat. Valorile afișate în Editorul de proprietăți aparțin obiectului activ al documentului dvs. activ (aveți grijă ce document este activ, dacă lucrați la mai multe documente). Dacă nu ați selectat niciun element (sau nu există elemente), editorul proprietății va fi gol.

Nu toate proprietățile pot fi modificate în orice moment. În funcție de starea specifică, unele proprietăți vor fi afișate ca fiind numai pentru citire.

![](/images/FreeCAD_Property_editor_Data.png)

The Data properties of a [Part Box](/Part_Box "Part Box")

## Property definition

A **property** is a piece of information like a number or a text string that is attached to a FreeCAD document or an object in a document. Properties can be viewed and modified with the [Property editor](/Property_editor "Property editor").

A property is a piece of information like a number or a text string that is attached to a FreeCAD document or an object in the document. Many property types are available. Some of the most common types are:

```
App::PropertyAngle
App::PropertyBool
App::PropertyDistance
App::PropertyFloat
App::PropertyInteger
App::PropertyLength
App::PropertyPlacement
App::PropertyString
App::PropertyVector

```

## View and Data properties

Există două tipuri de proprietăți ale funcțiilor accesibile prin tab-urile din partea de jos a editorului de proprietăți: : Vizualizare **View**: proprietăți legate de afișarea "vizuală" a unui obiect. : Date **Data**: proprietăți legate de parametrii "fizici" ai unui obiect.

## Basic properties

Different objects may have different properties. However, many objects have the same properties because they are derived from the same internal class.

Most geometrical objects that can be created and displayed in the [3D view](/3D_view "3D view") are derived from a `Part::Feature`. See [Part Feature](/Part_Feature "Part Feature") for the basic properties these objects have.

For 2D geometry, most objects are derived from a `Part::Part2DObject` (itself derived from a `Part::Feature`) which is the base of [Sketches](/Sketch "Sketch"), and most [Draft objects](/Draft_Workbench "Draft Workbench"). See [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") for the basic properties these objects have.

## Context menu

To display the context menu of the Property editor right-click the background of the editor, or right-click a property.

Right-clicking the background shows three options:

* **Add property**: adds a dynamic property to the object.

* **Show hidden**: if active, hidden Data and View properties are shown in the editor.

* **Auto expand**: if active, all nodes in the editor are expanded when an object is selected.

When right-clicking a property the following additional options are available:

* **Rename property group**: renames the property group of selected properties. Only available for dynamic properties. Dynamic properties are those added by the user, as well as those added through Python code.

* **Remove property**: removes selected properties. Only available for dynamic properties.

* **Expression...**: brings up the Expression editor, which allows using [expressions](/Expressions "Expressions") in the property value.

* **Status**:

:   If a status value is followed by an asterisk (**\***) it is static and cannot be changed.

:   * **Hidden**: if active, sets the property as hidden, meaning that it will only be displayed in the Property editor if **Show hidden** is active.

:   * **Output**: if active, sets the property as output.

:   * **NoRecompute**: if active, modifying the property doesn't touch its container for recompute.

:   * **ReadOnly**: if active, sets the property as read-only. The property won't be editable in the Property editor and the **Expression...** option no longer available. It may however still be possible to change the property via a dialog.

:   * **Transient**: if active, sets the property as transient. The value of a transient property is not saved to file. When opening a file, it is instantiated with its default value.

:   * **Touched**: if active, the object becomes touched, and ready for recompute.

:   * **EvalOnRestore**: if active, the property is evaluated when the document is restored.

:   * **CopyOnChange**: if active, the property is copied when changed in a Link. The Link's Date**Link Copy on Change** property must be set to `Tracking` or `Enabled` for this to work. This is related to [Variant Links](https://forum.freecad.org/viewtopic.php?p=738833#p738833).

## Scripting

See [FeaturePython Custom Properties](/FeaturePython_Custom_Properties "FeaturePython Custom Properties").

## Preferences

See [Combo view](/Combo_view#Preferences "Combo view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Property_editor/ro&oldid=1498286>"