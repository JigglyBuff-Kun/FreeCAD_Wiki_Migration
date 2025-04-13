---
title: PartDesign Уклон
---
|  |
| --- |
| Полость |
| Расположение в меню |
| Part Design → Apply a dress-up feature → Полость |
| Верстаки |
| [Part Design](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The ![](/images/PartDesign_Draft.svg) **PartDesign Draft** tool creates angular draft on the selected faces of an object. It adds a **Draft** object to the document with its corresponding representation in the [Tree view](/Tree_view "Tree view").

|  |  |
| --- | --- |
| Select one or more faces of the object before starting the tool. Here, 2 faces have been selected.    Showing Draft Parameters in TaskPanel.    2 faces have been added, and a 10 deg. draft applied. The bottom plane has remained dimensionally stable, while the draft has made the top plane smaller.    The Neutral Plane has been changed to the top. Now, the top plane has stayed dimensionally stable, while the draft has made the bottom plane larger.    Pull direction is set to the lower right edge, resulting in the draft pulling to the left.    Checking the Reverse Direction box has applied an inward draft rather than outward. |  |

## Применение

### Add a draft

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the Body to apply the Draft to.
2. Select one or more faces of the Body.
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_Draft.svg) [Draft](/PartDesign_Draft "PartDesign Draft") button.
   * Select the **Part Design → Apply a dress-up feature → ![](/images/PartDesign_Draft.svg) Draft** option from the menu.
4. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
5. The **Draft parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
6. Press the OK button to finish.

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Edit a draft

1. Do one of the following:
   * Double-click the Draft object in the [Tree view](/Tree_view "Tree view").
   * Right-click the Draft object in the [Tree view](/Tree_view "Tree view") and select **Edit Draft** from the context menu.
2. The **Draft parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Опции

* **Add face**: Add faces to the selection by pressing the Add face button and selecting more faces.
* **Remove face**: Choose a way to remove faces from the selection:
  + Select one or more faces in the list and press the Del key or right-click the list and select **Remove** from the context menu.
  + Press the Remove face button. All previously selected faces are highlighted in purple. Select each face to be removed.
* **Draft angle**: Set the Draft angle either by entering a value or by clicking the up/down arrows.
* **Neutral plane**: Set the the neutral plane by pressing the Neutral plane button and selecting the plane that must not change dimensionally.
* **Pull direction**: Set the the pull direction by pressing the Pull direction button, then select an edge. Pull Direction is only effective if the Neutral Plane has been set. Results can be unpredictable.
* **Reverse pull direction**: Invert the pull direction by checking the **Reverse pull direction** checkbox. This will toggle the draft between positive and negative angles.

## Примечания

* The Draft tool will only work on faces that are not tangentially connected to other faces. A common mistake is to attempt to apply draft to a face that already has a fillet applied to it. To solve this, remove the fillet, apply the draft as needed, then re-apply the fillet.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Draft object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Данные**Angle** (`Angle`): Cannot be negative. Default: `1.5 °`.
* Данные**Reversed** (`Bool`): Default: `false`.
* Данные**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Данные**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Данные (hidden)**Add Sub Shape** (`PartShape`)
* Данные (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Данные (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Draft

* Данные**Neutral Plane** (`LinkSub`): Sub-link to the parent feature's list containing the neutral plane.
* Данные**Pull Direction** (`LinkSub`)

Part Design

* Данные**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Draft/ru&oldid=1335711>"