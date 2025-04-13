---
title: PartDesign Масштабирование
---

|                                                                            |
| -------------------------------------------------------------------------- |
| PartDesign Scaled                                                          |
| Расположение в меню                                                        |
| PartDesign → Множественное преобразование                                  |
| Верстаки                                                                   |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"), Complete |
| Быстрые клавиши                                                            |
| _Нет_                                                                      |
| Представлено в версии                                                      |
| -                                                                          |
| См. также                                                                  |
| _Нет_                                                                      |
|                                                                            |

## Description

![](/images/PartDesign_Scaled.svg) **PartDesign Scaled** is one of the transformation options of ![](/images/PartDesign_MultiTransform.svg) [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform"). Contrary to the other options it is not available as a separate tool. It turns a transformation result into a sequence of scaled objects with evenly distributed scale factors. Starting with the unscaled base feature of the previous transformation the scale factor increases or decreases until reaching the given value at the last item.

![](/images/PartDesign_Scaled-01.png) ![](/images/Button_right.svg) ![](/images/PartDesign_Scaled-02.png)

A linear pattern and a polar pattern → Scaled the linear pattern with 3 steps (occurrences) and the polar pattern with 12 steps

If there is no previous transformation within the ![](/images/PartDesign_MultiTransform.svg) [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") feature, scaled items will be placed at the same position as the base feature. This may result in unexpected shapes if the base feature isn't covered completely by the scaled object. And thus it is not recommended to use **Scaled** as the first transformation of a MultiTransform feature.

![](/images/PartDesign_Scaled-03.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-04.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-05.png)

A base feature with a hole → Scaled object with 2 occurrences → Scaled object with 4 occurrences

## Применение

### Scaling a transformed feature

1. Do one of the following:
   - Double-click the MultiTransform object in the [Tree view](/Tree_view "Tree view").
   - Right-click the MultiTransform object in the [Tree view](/Tree_view "Tree view") and select **Edit MultiTransform** from the context menu.
2. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens.
3. Right-click in the **Transformations** list and select **Add scaled transformation** from the context menu.
4. A **Scaled** item is added to the list and the task panel is extended at the bottom to allow to set the **Factor** and **Occurrences**. See [Options](#Options) for more information.
5. Press the OK bar at the bottom.
6. Press the OK button at the top to finish.

### Scaling a single feature

1. Select a feature of the current body in the [Tree view](/Tree_view "Tree view").
2. Do one of the following:
   - Press the ![](/images/PartDesign_MultiTransform.svg) [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") button.
   - Select the **Part Design → Apply a pattern → ![](/images/PartDesign_MultiTransform.svg) Create MultiTransform** option from the menu.
3. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens. See above.

## Options

- **Factor**: The factor to which the last feature is scaled.
- **Occurrences**: Number of steps from unscaled (1) to **Factor** (including base and last feature).
  - A scaled transformation accepts the number of occurrences of the previous transformation as maximum value or any integer divisor of that number returning an integer result. So `12`, `6`, `4`, `3`, and `2` are valid for a Linear or Polar Pattern with 12 occurrences.
  - A scaled single feature accepts any integer number larger than 1.

## Примечания

- The center of scaling is the features's center of gravity and that may cause:
  - A growing item to protrude on the opposite side of the parent feature.
  - A shrinking item to lose all contact with the parent feature and disappear.
  - A shrinking pocket to become an invisible cavity inside the parent feature.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Scaled/ru&oldid=1424915>"
