---
title: PartDesign Transformări Multiple
---
|  |
| --- |
| PartDesign MultiTransform |
| Menu location |
| PartDesign -> MultiTransform |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Introducere

'Faceți un model din combinații de transformări' - Acest instrument ia un set de una sau mai multe caracteristici selectate ca intrări ("originalele") și permite aplicarea mai multor transformări succesiv la ele. De exemplu, pentru a produce o flanșă cu un rând dublu de găuri, gaura ("originalul") este mai întâi modelată într-un model liniar în direcția X și apoi modelată de opt ori într-un model polar în jurul axei Y.

![](/images/Multitransform_example.png)

The ![](/images/PartDesign_MultiTransform.svg) **PartDesign MultiTransform** tool creates a pattern of one or more features. The pattern can include multiple transformations where each subsequent transformation is applied to the result of the previous transformation.

The available transformations are: ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"), ![](/images/PartDesign_LinearPattern.svg) [LinearPattern](/PartDesign_LinearPattern "PartDesign LinearPattern"), ![](/images/PartDesign_PolarPattern.svg) [PolarPattern](/PartDesign_PolarPattern "PartDesign PolarPattern") and ![](/images/PartDesign_Scaled.svg) [Scaled](/PartDesign_Scaled "PartDesign Scaled"). The first three are also available as separate tools.

![](/images/Multitransform_example.png)

A pattern of holes created from a single Hole feature by applying a LinearPattern with 2 occurrences, followed by a PolarPattern with 8 occurrences.

## Usage

### Create

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the correct Body.
2. Optionally select one or more features in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_MultiTransform.svg) [Create MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") button.
   * Select the **Part Design → Apply a pattern → ![](/images/PartDesign_MultiTransform.svg) Create MultiTransform** option from the menu.
4. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
5. If no features were selected the **Select feature** [task panel](/Task_panel "Task panel") opens: select one or more (hold down the Ctrl key) from the list and press the OK button.
6. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button at the top to finish.

### Edit

1. Do one of the following:
   * Double-click the MultiTransform object in the [Tree view](/Tree_view "Tree view").
   * Right-click the MultiTransform object in the [Tree view](/Tree_view "Tree view") and select **Edit MultiTransform** from the context menu.
2. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button at the top to finish.

### Combine existing transformations

It is possible to create a MultiTransform object from existing [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"), [LinearPattern](/PartDesign_LinearPattern "PartDesign LinearPattern") and [PolarPattern](/PartDesign_PolarPattern "PartDesign PolarPattern") transformations.

1. Check the Date**Originals** property of the existing transformations to make sure they have been applied to the same features.
2. Select those features in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_MultiTransform.svg) [Create MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") button.
   * Select the **Part Design → Apply a pattern → ![](/images/PartDesign_MultiTransform.svg) Create MultiTransform** option from the menu.
4. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens.
5. Press the OK button at the top.
6. Edit the Date**Tranformations** property of the created MultiTransform object:
   1. Click in the field.
   2. Press the ... button that appears.
   3. The **Link** dialog opens.
   4. Hold down the Ctrl key and select the existing transformations.
   5. Press the OK button.
7. Optionally (#Edit) the MultiTransform object, see above.

## Options

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
         * Select a feature in the list at the top and press the Del key.
         * Right-click a feature in the list at the top and select **Remove** from the context menu.
      3. Repeat to remove more features.
    - If there are several features in the pattern, their order can be important. See [PartDesign PolarPattern](/PartDesign_PolarPattern#Ordering_features "PartDesign PolarPattern").
* To add transformations:
  1. If there are existing transformations: select the transformation after which the new transformation should be added.
  2. Right-click the **Transformations** list.
  3. Select one the following options from the context menu:
     + **Add mirrored transformation**. See [PartDesign Mirrored](/PartDesign_Mirrored "PartDesign Mirrored").
     + **Add linear pattern**. See [PartDesign LinearPattern](/PartDesign_LinearPattern "PartDesign LinearPattern").
     + **Add polar pattern** See [PartDesign PolarPattern](/PartDesign_PolarPattern "PartDesign PolarPattern").
     + **Add scaled transformation**. See [PartDesign Scaled](/PartDesign_Scaled "PartDesign Scaled").
  4. The selected transformation is added to the list and the settings for the transformation are displayed below the list.
  5. Adjust the settings to suit.
  6. Press the OK bar at the bottom.
  7. Repeat to add more transformations.
* To edit a transformation:
  1. Right-click the transformation in the **Transformations** list.
  2. Select **Edit** from the context menu.
  3. Adjust the settings to suit.
  4. Press the OK bar at the bottom.
* To change the order of the transformations:
  1. Right-click a transformation in the **Transformations** list.
  2. Select **Move up** or **Move down** from the context menu.
* If the **Update view** checkbox is checked the view will update in real time.

## Limitations

See [PartDesign PolarPattern](/PartDesign_PolarPattern#Limitations "PartDesign PolarPattern").

## Example

You can use this tool to create a fully parametric part that is symmetrical about two axes from a sketch.

This could be a 150x100x10mm large mounting plate for a motor with symmetric holes.

![](/images/PartDesign_MultiTransform_Example2.png)

1. Create a ![](/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body") and add a ![](/images/PartDesign_NewSketch.svg) [sketch](/PartDesign_NewSketch "PartDesign NewSketch") on one of its base planes.
2. In the sketch create geometry for one quadrant of the part (i.e. the upper right quadrant).
   * Note that the constraints must also only cover a quarter of the part, e.g. instead of the full dimension of `150mm` enter `150/2mm` or `75mm`.
   * Make sure the sketch is closed by adding lines along the vertical and horizontal axes.
3. Extrude the part with ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad").
4. Select ![](/images/PartDesign_MultiTransform.svg) **PartDesign MultiTransform**.
5. The task dialog opens.
6. The last feature of the Body is already selected. Since we want to mirror that feature we can ignore the Add feature and Remove feature buttons.
7. Right-click in the **Transformations** field and select **Add mirrored transformation** from the context menu.
8. For the **Plane** select **Vertical sketch axis**.
9. If the **Update view** checkbox is checked, you should now see the part mirrored about one axis.
10. Again select **Add mirrored transformation** from the context menu of the **Transformations** field.
11. Now for the **Plane** select **Horizontal sketch axis**.
12. Press the OK button to finish.
13. To remove the edges along the axes of symmetry in the final result, set the Date**Refine** property of the new feature to `true` in the [Property editor](/Property_editor "Property editor").

To verify that the part is fully parametric open the initial sketch with the quarter part and change one dimension, say a hole diameter. After closing the sketch the three other holes will have changed accordingly. This works with all other dimensions as well. A sketch modelling the full part with a single extrusion and no mirroring would be a lot more complex and all later changes would be more complicated.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MultiTransform/ro&oldid=1485268>"