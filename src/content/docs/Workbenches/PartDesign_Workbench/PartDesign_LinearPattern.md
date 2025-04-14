---
title: PartDesign LinearPattern
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| PartDesign LinearPattern                                                            |
| Menu location                                                                       |
| Part Design → Apply a pattern → LinearPattern                                       |
| Workbenches                                                                         |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                          |
| Default shortcut                                                                    |
| _None_                                                                              |
| Introduced in version                                                               |
| -                                                                                   |
| See also                                                                            |
| [PartDesign MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") |
|                                                                                     |

## Description

The ![](/images/PartDesign_LinearPattern.svg) **PartDesign LinearPattern** tool creates a linear pattern of one or more features.

![](/images/PartDesign_LinearPattern_example.svg)

An L-shaped pad (B) made on top of a base pad (A, also referred to as support) is used for a linear pattern. The result (C) is shown on the right.

## Usage

### Create

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the correct Body.
2. Optionally select one or more features in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
3. There are several ways to invoke the tool:
   - Press the ![](/images/PartDesign_LinearPattern.svg) [LinearPattern](/PartDesign_LinearPattern "PartDesign LinearPattern") button.
   - Select the **Part Design → Apply a pattern → ![](/images/PartDesign_LinearPattern.svg) LinearPattern** option from the menu.
4. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
5. If no features were selected the **Select feature** [task panel](/Task_panel "Task panel") opens: select one or more (hold down the Ctrl key) from the list and press the OK button.
6. The **LinearPattern parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### Edit

1. Do one of the following:
   - Double-click the LinearPattern object in the [Tree view](/Tree_view "Tree view").
   - Right-click the LinearPattern object in the [Tree view](/Tree_view "Tree view") and select **Edit LinearPattern** from the context menu.
2. The **LinearPattern parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

- Choose the mode:
  - **Transform body**: Transforms the whole base feature's shape (default). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  - **Transform tool shapes**: Transforms the individual tool shapes of selected features.
    - To add features:
      1. Press the Add feature button.
      2. Select a feature in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
      3. Repeat to add more features.
    - To remove features:
      1. Press the Remove feature button.
      2. Do one of the following:
         - Select a feature in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
         - Select a feature in the list and press the Del key.
         - Right-click a feature in the list and select **Remove** from the context menu.
      3. Repeat to remove more features.
    - If there are several features in the pattern, their order can be important. See [PartDesign PolarPattern](/PartDesign_PolarPattern#Ordering_features "PartDesign PolarPattern").
- Specify the **Direction** of the pattern:
  - **Normal sketch axis**: The Z axis of the sketch (only available for sketch-based features).
  - **Vertical sketch axis**: The Y axis of the sketch (idem).
  - **Horizontal sketch axis**: The X axis of the sketch (idem).
  - **Construction line #**: A separate entry for each construction line in the sketch (idem).
  - **Base X axis**: The X axis of the Body.
  - **Base Y axis**: The Y axis of the Body.
  - **Base Z axis**: The Z axis of the Body.
  - **Select reference...**: Select a [Datum Line](/PartDesign_Line "PartDesign Line") in the [Tree view](/Tree_view "Tree view") or a [Datum Line](/PartDesign_Line "PartDesign Line") or edge in the [3D view](/3D_view "3D view").
- Check the **Reverse direction** checkbox to reverse the pattern.
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Specify the length **Mode**:
  - **Overall Length**: Enter the **Length** from a given point on the first occurrence to the same point on the last occurrence.
  - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): **Offset**: Enter the **Offset** from a given point on the first occurrence to the same point on the next occurrence. For n occurrences: OverallLength=(n-1)\*Offset.
- Specify the number of **Occurrences** (including the original feature).
- If the **Update view** checkbox is checked the view will update in real time.

## Limitations

See [PartDesign PolarPattern](/PartDesign_PolarPattern#Limitations "PartDesign PolarPattern").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_LinearPattern/en&oldid=1485270>"
