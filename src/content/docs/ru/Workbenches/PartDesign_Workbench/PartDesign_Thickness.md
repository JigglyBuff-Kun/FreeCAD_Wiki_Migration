---
title: PartDesign Преобразовать в полое тело
---
|  |
| --- |
| Преобразовать в полое тело |
| Расположение в меню |
| Part Design → Apply a dress up feature → Преобразовать в полое тело |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Преобразовать в полое тело](/Part_Thickness/ru "Part Thickness/ru") |
|  |

## Описание

The ![](/images/PartDesign_Thickness.svg) **PartDesign Thickness** tool transforms a solid body into a hollow object with at least one open face, giving to each of its remaining faces a uniform thickness. It adds a **Thickness** object to the document with its corresponding representation in the [Tree view](/Tree_view "Tree view").

![](/images/PartDesign_Thickness_example.svg)

Base solid (A) → Solid with selected face to be opened (B) → Resulting hollow object (C)

## Применение

### Преобразование в полое тело

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the Body to apply the Thickness to.
2. Select one or more faces of the Body.
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_Thickness.svg) [Thickness](/PartDesign_Thickness "PartDesign Thickness") button.
   * Select the **Part Design → Apply a dress-up feature → ![](/images/PartDesign_Thickness.svg) Thickness** option from the menu.
4. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
5. The **Thickness parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
6. Press the OK button to finish.

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Изменение параметров преобразования

1. Do one of the following:
   * Double-click the Thickness object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Thickness object in the [Tree view](/Tree_view "Tree view") and select **Edit Thickness** from the context menu.
2. The **Thickness parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Параметры

* **Add face**: Add faces to the selection by pressing the Add face button and selecting more faces.
* **Remove face**: Choose a way to remove faces from the selection:
  + Select one or more faces in the list and press the Del key or right-click the list and select **Remove** from the context menu.
  + Press the Remove face button. All previously selected faces are highlighted in purple. Select each face to be removed.
* **Thickness**: Set the wall thickness either by editing the value or by clicking the up/down arrows.
* **Mode**:
  + **Skin**: Select this option if you want to get an item like a vase, headless but with the bottom. Only this option can be selected.
  + **Pipe**: Not implemented. See [this forum topic](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495).
  + **Recto Verso**: Not implemented. See [this forum topic](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495).
* **Join Type**:
  + **Arc**: When non-tangential faces are offset, new faces that do not intersect are joined by a fillet with a radius equal to the defined thickness.
  + **Intersection**: When non-tangential faces are offset, new faces that do not intersect are extended to meet at their virtual intersection.
* **Intersection**: When checked, self-intersections in certain models are avoided. This option is not recommended as it relies on an incomplete [OpenCASCADE method](https://dev.opencascade.org/doc/refman/html/class_b_rep_offset_a_p_i___make_thick_solid.html#af78f35025a31e2ce8bd96c82fb33a981).
* **Make thickness inwards**: When checked, faces are offset inward.

## Примечания

* If thickness goes inwards, the value must be smaller than the smallest height of the Body.
* The tool may fail with complex shapes. [Additive Pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe") or [Additive Loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") may work better to create complex shapes.
* Known errors:
  + BRep\_API: command not done.
  + BRep\_Tool: no parameter on edge.
  + Silently fails.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Thickness object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Данные

Основные

* Данные**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Данные**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Данные (hidden)**Add Sub Shape** (`PartShape`)
* Данные (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Данные (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Part Design

* Данные**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Thickness

* Данные**Value** (`Length`): Thickness value. Default: `1 mm`.
* Данные**Mode** (`Enumeration`): Mode. `Skin` (default), `Pipe` or `Recto verso`. Only `Skin` is implemented.
* Данные**Join** (`Enumeration`): Join type. `Arc` (default) or `Intersection`.
* Данные**Reversed** (`Bool`): Apply the thickness towards the solids interior. Default: `false`.
* Данные**Intersection** (`Bool`): Enable intersection-handling. Default: `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Thickness/ru&oldid=1485223>"