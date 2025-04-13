---
title: 부품설계 작업대에서 모따기
---
|  |
| --- |
| PartDesign Chamfer |
| Menu location |
| Part Design → Apply a dress-up feature → Chamfer |
| Workbenches |
| [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [모깎기](/PartDesign_Fillet/ko "PartDesign Fillet/ko") |
|  |

## 설명

![](/images/PartDesign_Chamfer.svg) **부품설계 작업대에서 모따기** 도구는 개체에서 선택한 모서리를 평평하게 따냅니다.

## 용법

### 모따기 추가

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the Body to chamfer.
2. There are several ways to select edges to chamfer:
   * Select one or more edges of the Body individually.
   * Select one or more faces of the Body to select all their edges.
   * Select a feature (usually the last feature) of the Body to select all its edges.
3. For a chain of tangentially connected edges only a single edge needs to be selected, the chamfer will propagate along the chain.
4. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_Chamfer.svg) [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer") button.
   * Select the **Part Design → Apply a dress-up feature → ![](/images/PartDesign_Chamfer.svg) Chamfer** option from the menu.
5. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
6. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### 모따기 편집

1. Do one of the following:
   * Double-click the Chamfer object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Chamfer object in the [Tree view](/Tree_view "Tree view") and select **Edit Chamfer** from the context menu.
2. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## 선택 사항

* To add edges do one of the following:
  + Press the Add button to start selecting edges and/or faces in the [3D view](/3D_view "3D view").
  + To select all remaining edges do the following:
    1. If required press the Add button.
    2. Use the Ctrl+Shift+A keyboard shortcut, or right-click the list and select **Add all edges** from the context menu.
* To remove edges do one of the following:
  + Press the Remove button to start deselecting edges and/or faces in the [3D view](/3D_view "3D view"). Selected elements are highlighted in purple.
  + Select one or more elements in the list and press the Del key, or right-click the list and select **Remove** from the context menu.
* Specify a chamfer **Type**:
  + **Equal distance**: One distance is used to place both chamfer edges.
  + **Two distances**: Two distances are used to place the chamfer edges.
  + **Distance and angle**: A distance is used to place one chamfer edge, the placement of the other chamfer edge is defined by the angle of the chamfer.
* Press the ![](/images/PartDesign_Flip_Direction.svg) Flip direction button to flip the direction of the chamfer (deactivated for **Equal distance**).
* Set the **Size** of the chamfer.
* Set the **Size2** of the chamfer (only available if **Two distances** is selected).
* Set the **Angle** of the chamfer (only available if **Distance and angle** is selected).
* Check the **Use all edges** checkbox to select all edges of the previous feature. This deactivates the selection list and the related buttons.

## 보충 설명

* 부품설계 작업대에서의 모따기를 [부품 작업대에서의 모따기](/index.php?title=Part_Chamfer/ko&action=edit&redlink=1 "Part Chamfer/ko (page does not exist)")와 혼동하지 마세요. 둘의 차이를 알지 못하는 경우 [부품 작업대의 모따기](/index.php?title=Part_Chamfer/ko&action=edit&redlink=1 "Part Chamfer/ko (page does not exist)")를 부품설계의 몸통에 사용하면 안 됩니다.
* 모따기는 인접한 면을 완전히 소모할 수 없습니다.

## 속성

[속성 편집기](/Property_editor/ko "Property editor/ko")도 참조하세요.

A PartDesign Chamfer object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* 데이터**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if 데이터**Use All Edges** is `true`.
* 데이터**Support Transform** (`Bool`): If `true` the chamfered shape of the additive/subtractive parent feature will be used when the chamfer object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the chamfer itself will be used. The default is `false`.
* 데이터 (hidden)**Add Sub Shape** (`PartShape`)
* 데이터 (hidden)**Base Feature** (`Link`): Link to the parent feature.
* 데이터 (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Chamfer

* 데이터**Chamfer Type** (`Enumeration`): The chamfer type: `Equal distance` (default), `Two distances` or `Distance and Angle`.
* 데이터**Size** (`QuantityConstraint`): The first chamfer distance. The default is `1 mm`.
* 데이터**Size2** (`QuantityConstraint`): The second chamfer distance. Only used if 데이터**Chamfer Type** is `Two distances`. The default is `1 mm`.
* 데이터**Angle** (`Angle`): The chamfer angle. Only used if 데이터**Chamfer Type** is `Distance and Angle`. The default is `45 °`.
* 데이터**Flip Direction** (`Bool`): If `true` the direction of the chamfer is flipped. Not used if 데이터**Chamfer Type** is `Equal distance`. The default is `false`.
* 데이터**Use All Edges** (`Bool`): If `true` all edges of the feature are chamfered, and the edges specified by 데이터**Base** are ignored. The default is `false`.

Part Design

* 데이터**Refine** (`Bool`): If `true` redundant edges are removed from the result of the operation. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

## 알려진 문제

See [PartDesign Fillet](/PartDesign_Fillet#Known_issues "PartDesign Fillet").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Chamfer/ko&oldid=1515558>"