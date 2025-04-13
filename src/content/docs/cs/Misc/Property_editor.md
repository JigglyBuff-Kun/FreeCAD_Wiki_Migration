---
title: Editor vlastností
---
## Přehled

Editor vlastností je jeden z nejdůležitějších nástrojů FreeCADu a hlavní prvek při práci s FreeCADem.
Editor vlastností umožňuje správu vlastností objektů v dokumentu.

The [Property editor](/Property_editor "Property editor") appears in the lower section of the **Model** panel (if the [Combo view](/Combo_view "Combo view") is active) or as a stand-alone panel called **Property view**.

Obecně je editor vlastností určen k práci s jedním objektem v jednom čase. Hodnoty zobrazované v editoru vlastností patří vždy k aktuálnímu aktivnímu dokumentu (dávejte pozor, který dokument je právě aktivní, když pracujete na vícenásobném dokumentu). Pokud není vybrán žádný prvek (nebo v dokumentu nejsou žádné prvky) bude editor vlastností prázdný.

Ne všechny vlastnosti mohou být upravovány v daném čase. V závislosti na specifickém stavu budou některé vlastnosti zobrazovány pouze pro čtení.

![](/images/FreeCAD_Property_editor_Data.png)

The Data properties of a [Part Box](/Part_Box "Part Box")

## Definování vlastností

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

The Property editor has two tabs giving access to two classes of properties:

* **Data** properties, related to the "physical" parameters of the object. The **Data** properties define the essential characteristics of the object. They exist at all times, even when FreeCAD is used in console mode, or as a library. This means that if you load a document in console mode, you can edit the radius of a circle or the length of a line, even if you cannot see the result on the screen.
* **View** properties, related to the "visual" appearance of the object. The **View** properties are tied to the `ViewObject` of the object, and are only accessible when the graphical user interface (GUI) is loaded. They are not accessible when using FreeCAD in console mode, or as a headless library. By default changes to View properties are not added to the undo stack and cannot be undone and redone with [Std Undo](/Std_Undo "Std Undo") and [Std Redo](/Std_Redo "Std Redo"). But it is possible to change this by setting the [fine-tuning](/Fine-tuning "Fine-tuning") parameter **AutoTransactionView** to `true`.

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

:   * **CopyOnChange**: if active, the property is copied when changed in a Link. The Link's Údaje**Link Copy on Change** property must be set to `Tracking` or `Enabled` for this to work. This is related to [Variant Links](https://forum.freecad.org/viewtopic.php?p=738833#p738833).

## Scripting

See [FeaturePython Custom Properties](/FeaturePython_Custom_Properties "FeaturePython Custom Properties").

## Preferences

See [Combo view](/Combo_view#Preferences "Combo view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Property_editor/cs&oldid=1498280>"