---
title: Operação booleana
---
|  |
| --- |
| PartDesign Boolean |
| Menu location |
| Part Design → Boolean operation |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| *None* |
|  |

## Description

**PartDesign Boolean** imports one or more [PartDesign Bodies](/PartDesign_Body "PartDesign Body") or [PartDesign Clones](/PartDesign_Clone "PartDesign Clone") (designated as "tool bodies") into the active PartDesign Body and applies a Boolean operation (fuse, cut or common).

![](/images/PartDesign_Boolean_example.png)

On the left: active body (A) with tool bodies (B) and (C); result on the right after a Boolean Cut.

## Usage

1. [Activate the Body](/PartDesign_Body#Active_status "PartDesign Body") which is to receive the Boolean feature. ***Note**: It is important that neither the active Body nor any of the features it contains be selected!*
2. Press the ![](/images/PartDesign_Boolean.svg) [PartDesign Boolean](/PartDesign_Boolean "PartDesign Boolean") button.
3. In **Boolean Parameters**, click on the Add body button. The active body temporarily disappears from the [3D view](/3D_view "3D view") to facilitate tool body selection.
4. In the 3D view, select the Body to use in the Boolean feature. Repeat to add more Bodies.
5. Select the type of Boolean operation in the drop down menu (Fuse, Cut or Common)
6. Click OK.

Alternatively, objects can be selected prior to pressing the Boolean button. They will be added automatically. When pre-selecting you are not restricted to Bodies. [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"), [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") and even solids created with other workbenches can then also be selected.

## Options

* **Fuse:** merges the tool body or bodies to the active body.
* **Cut:** subtracts the tool body or bodies from the active body.
* **Common:** extracts the intersection from the selected body or bodies with the active body
* Press the Remove body button to remove a body, by selecting it in the [3D view](/3D_view "3D view").

## Properties

* Dados**Type**: sets the Boolean operation (Fuse, Cut, Common)
* Dados**Label**: name given to the operation, this name can be changed at convenience.
* Dados**Group**: lists the tool bodies.
* Vista**Display**: sets the display between 2 modes:
  + Result (default): displays the result of the Boolean feature. In this mode, the tool Bodies cannot be displayed in their original state, even when their visibility is toggled on.
  + Tools: displays the tool Bodies in their original state. This mode is useful when tool Bodies need to be edited, or used in later operations.
* Vista**Selectable**: true or false. If set to false, the feature cannot be selected in the 3D view.
* Vista**Visibility**: true or false. Toggles the feature's visibility in the 3D view.

## Limitations

* For Common to work with more than one tool body, they must all intersect each other along with the active Body.
* Tool bodies adopt the local origin of the active Body. If the active Body is not located at (0,0,0) in the global coordinate system, the tool bodies' placement need to be relative to the active Body. It may be easier to leave the active Body's placement at the origin before applying the Boolean feature, than to change its placement.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Boolean/pt-br&oldid=1446902>"