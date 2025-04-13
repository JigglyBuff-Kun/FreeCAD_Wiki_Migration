---
title: Widget de escala de anotação
---
## Descrição

The **Draft annotation scale widget** can be used to specify the Draft annotation scale. This scale determines the Vista**Scale Multiplier** of new [Draft Texts](/Draft_Text "Draft Text"), [Draft Dimensions](/Draft_Dimension "Draft Dimension") and [Draft Labels](/Draft_Label "Draft Label"). The widget is only available in the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"). It is an [optional](#Preferences) GUI element that is located in the [Status bar](/Status_bar "Status bar").

![](/images/Draft_annotation_scale_widget_button.png)

The Draft annotation scale widget

## Utilização

1. Press the x:x button in the [Status bar](/Status_bar "Status bar"). The button displays the current annotation scale.
2. The scale menu opens.
3. Do one of the following:
   * Select one of the standard scales.
   * Select the **custom** option:
     + In the dialog box that opens enter a custom scale using the `x:x` or the `x=x` format.
     + Press Enter or the OK button.

![](/images/Draft_annotation_scale_widget_menu.png)

The menu of the widget

## Preferências

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* The Draft annotation scale widget is optional: **Edit → Preferences... → Draft → Interface → Show the Annotation scale widget in the Draft Workbench**.
* To change the annotation scale without the widget: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → DraftAnnotationScale**. The scale is defined by a single number. For a scale of `1:50` enter `0.02`.

## Notes

* See also: [Draft SetStyle](/Draft_SetStyle "Draft SetStyle") and [Draft ApplyStyle](/Draft_ApplyStyle "Draft ApplyStyle").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_annotation_scale_widget/pt-br&oldid=1338330>"