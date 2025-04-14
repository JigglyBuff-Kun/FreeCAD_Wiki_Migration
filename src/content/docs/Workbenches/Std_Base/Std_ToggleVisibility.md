---
title: Std ToggleVisibility
---

|                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std ToggleVisibility                                                                                                                                                                                                                                                                                |
| Menu location                                                                                                                                                                                                                                                                                       |
| View → Toggle visibility                                                                                                                                                                                                                                                                            |
| Workbenches                                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                                 |
| Default shortcut                                                                                                                                                                                                                                                                                    |
| Space                                                                                                                                                                                                                                                                                               |
| Introduced in version                                                                                                                                                                                                                                                                               |
| -                                                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                                            |
| [Std ShowSelection](/Std_ShowSelection "Std ShowSelection"), [Std HideSelection](/Std_HideSelection "Std HideSelection"), [Std ToggleObjects](/Std_ToggleObjects "Std ToggleObjects"), [Std ShowObjects](/Std_ShowObjects "Std ShowObjects"), [Std HideObjects](/Std_HideObjects "Std HideObjects") |
|                                                                                                                                                                                                                                                                                                     |

## Description

The **Std ToggleVisibility** command toggles the visibility of selected objects in [3D views](/3D_view "3D view").

## Usage

1. Select one or more objects.
   - Invisible objects can be selected in the [Tree view](/Tree_view "Tree view").
   - Be careful when you use Ctrl+A to select all objects in the Tree view. This will also select sub-elements of [PartDesign bodies](/PartDesign_Body "PartDesign Body") and objects used for [Part Booleans](/Part_Boolean "Part Boolean"). In most cases these should stay invisible.
   - Objects used for [Part Booleans](/Part_Boolean "Part Boolean") are also selected when you use Ctrl+A in a 3D view.
2. There are several ways to invoke the command:
   - Select the **View → Visibility → ![](/images/Std_ToggleVisibility.svg) Toggle visibility** option from the menu.
   - Select the **![](/images/Std_ToggleVisibility.svg) Toggle visibility** option from the Tree view context menu or 3D view context menu.
   - Use the keyboard shortcut: Space.

## Notes

- Invisible objects are displayed with a greyed out label and a greyed out icon in the [Tree view](/Tree_view "Tree view").
- Objects nested in a [Std Part](/Std_Part "Std Part"), or a [Std Link](/Std_LinkMake "Std LinkMake") to a [Std Group](/Std_Group "Std Group"), or a LinkGroup, and [features](/PartDesign_Feature "PartDesign Feature") of a [PartDesign Body](/PartDesign_Body "PartDesign Body") will only be visible in [3D views](/3D_view "3D view") if their successive parents are visible as well. This means that a feature in a PartDesign Body that is nested in a Std Part will only be visible in 3D views if the feature itself, the PartDesign Body, and the Std Part are all visible. And if the Std Part is in turn nested in another Std Part, then that last object must also be visible.
- If the visibility of a [Std Group](/Std_Group "Std Group") (or an object derived from it such as an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")) is changed, the visibility of its nested objects will change accordingly. But their visibility can be changed independently as well.
- The action can only be undone with [Std Undo](/Std_Undo "Std Undo") if the [fine-tuning](/Fine-tuning "Fine-tuning") parameter **AutoTransactionView** is set to `true`.
- The visibility of an object can also be changed through its related Data**Visibility** property in the [Property editor](/Property_editor "Property editor").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Use the `show` and `hide` methods of an object to change its visibility. An object's `Visibility` property can also be changed directly.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

if obj.Visibility == True:
    obj.hide()
else:
    obj.show()

# Alternatively:
obj.Visibility = not obj.Visibility

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleVisibility/en&oldid=1469289>"
