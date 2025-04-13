---
title: Part Design Serie polare
---
|  |
| --- |
| Serie polare |
| Posizione nel menu |
| PartDesign → Serie polare |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Serie lineare](/PartDesign_LinearPattern/it "PartDesign LinearPattern/it") |
|  |

## Descrizione

Lo strumento **Serie polare** prende una funzione selezionata e ne crea una serie di copie ruotate attorno a un asse prescelto. A partire da v0.17, è in grado di replicare più funzioni.

![](/images/PartDesign_PolarPattern_example.png)

*Sopra: una tasca a forma di slot (B) realizzata sopra un solido di base (A, indicato anche come supporto) viene utilizzata per un modello polare. Il risultato (C) è mostrato a destra.*

## Utilizzo

### Create

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the correct Body.
2. Optionally select one or more features in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_PolarPattern.svg) [PolarPattern](/PartDesign_PolarPattern "PartDesign PolarPattern") button.
   * Select the **Part Design → Apply a pattern → ![](/images/PartDesign_PolarPattern.svg) PolarPattern** option from the menu.
4. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
5. If no features were selected the **Select feature** [task panel](/Task_panel "Task panel") opens: select one or more (hold down the Ctrl key) from the list and press the OK button.
6. The **PolarPattern parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### Edit

1. Do one of the following:
   * Double-click the PolarPattern object in the [Tree view](/Tree_view "Tree view").
   * Right-click the PolarPattern object in the [Tree view](/Tree_view "Tree view") and select **Edit PolarPattern** from the context menu.
2. The **PolarPattern parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Opzioni

* Choose the mode:
  + **Transform body**: Transforms the whole base feature's shape (default). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + **Transform tool shapes**: Transforms the individual tool shapes of selected features.
    - To add features:
      1. Press the Add feature button.
      2. Select a feature in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
      3. Repeat to add more features.
    - To remove features:
      1. Press the Remove feature button.
      2. Do one of the following:
         * Select a feature in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
         * Select a feature in the list and press the Del key.
         * Right-click a feature in the list and select **Remove** from the context menu.
      3. Repeat to remove more features.
    - If there are several features in the pattern, their order can be important. See [Ordering features](#Ordering_features).
* Specify the **Axis** of the pattern:
  + **Normal sketch axis**: The Z axis of the sketch (only available for sketch-based features).
  + **Vertical sketch axis**: The Y axis of the sketch (idem).
  + **Horizontal sketch axis**: The X axis of the sketch (idem).
  + **Construction line #**: A separate entry for each construction line in the sketch (idem).
  + **Base X axis**: The X axis of the Body.
  + **Base Y axis**: The Y axis of the Body.
  + **Base Z axis**: The Z axis of the Body.
  + **Select reference...**: Select a [Datum Line](/PartDesign_Line "PartDesign Line") in the [Tree view](/Tree_view "Tree view") or a [Datum Line](/PartDesign_Line "PartDesign Line") or edge in the [3D view](/3D_view "3D view").
* Check the **Reverse direction** checkbox to reverse the pattern.
* [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Specify the angle **Mode**:
  + **Overall Angle**: Enter the overall **Angle**. If the angle is less than 360°, the occurrences are evenly distributed from 0° (first occurrence) to the given angle (last occurrence). If the angle is 360°, the occurrences are evenly distributed around the circle. For n occurrences an angle of 360° is equivalent to an angle of 360°\*(1-1/n).
  + [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): **Offset Angle**: Enter the **Offset** angle from a given point on the first occurrence to the same point on the next occurrence. For n occurrences: OverallAngle=(n-1)\*Offset.
* Specify the number of **Occurrences** (including the original feature).
* If the **Update view** checkbox is checked the view will update in real time.

## Ordering features

If some of the selected features are additive and others subtractive, their order can have have an impact on the final result. You can change the order by dragging individual features in the list.

![](/images/PartDesign_feature-order.gif)

Effect of the feature order

## Limitazioni

* Any shape in the pattern that does not overlap the parent feature will be excluded. This ensures that a PartDesign Body always consists of a single, connected solid.
* The PartDesign patterns are not yet as optimized as their Draft counterparts. So for a large number of instances you should consider using a [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") instead, combined with a Part boolean operation. This may require major changes to your model as you are leaving PartDesign and therefore cannot simply continue with further PartDesign features in the same body. An example is shown in [this Forum topic](https://forum.freecadweb.org/viewtopic.php?f=3&t=55192).
* A pattern cannot be applied directly to another pattern, be it polar, linear or a mirror. For this you need a [PartDesign MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_PolarPattern/it&oldid=1485283>"