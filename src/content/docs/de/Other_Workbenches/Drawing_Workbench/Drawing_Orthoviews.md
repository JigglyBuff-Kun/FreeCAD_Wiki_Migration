---
title: Drawing Orthoviews
---
## Description

|  |
| --- |
| Drawing Orthoviews |
| Menu location |
| Drawing → Insert orthographic views |
| Workbenches |
| [Drawing](/Drawing_Workbench "Drawing Workbench"), Complete |
| Default shortcut |
| none |
| Introduced in version |
| - |
| See also |
| [Drawing Landscape A3](/Drawing_Landscape_A3 "Drawing Landscape A3") |
|  |

The Orthoviews tool inserts a set of orthographic projections of the selected object in the active drawing sheet. Note that it does not create a single view object on the page. Instead, a separate orthographic projection will be created for each of the views selected in the options.

The Orthoviews tool creates all of the orthographic projections is the proper location for the given main view.

## Usage

1. Select a feature in the model tree.
2. If there is more than one page, multi-select the desired page (while keeping the feature selected).
3. Press the ![](/images/Drawing_Orthoviews.png) [Insert orthographic views](/Drawing_Orthoviews "Drawing Orthoviews") button.
4. Define your desired view creation options. See [Options](#Options).
5. Click OK to create the views of the selected feature on the selected page.

## Options

Depending on the selections made, some options may not be available.

![](/images/Drawing_Orthoviews_Options.png)

* **Projection**: Select whether you want a third angle (default) or first angle projection
* **View from**: Choose the axis that will face out of the drawing sheet toward the user.
* **Axis aligned right**: Choose the axis that will point to the right on the drawing sheet. The remaining axis will be vertical on the page.
* **Secondary views**: Choose the views that you wish to have created. The main view lies in the center of the checkboxes, and is oriented by the **View from** and **Axis aligned right** options. Secondary views will be created for each box that is checked.

### General

* **Auto scale / position**: If this box is checked, the view scale, location, and spacing will be chosen to best use the available space on the page. If this box is unchecked, the user specifies scale, location, and spacing.
* **Scale**: The scale for the view, expressed as the denominator of a scale fraction. Thus, 2 will create a set of views scaled at 1:2.
* **Top left x / y**: The location of the set of views from the top left of the page. Increasing the x value (first column) moves the views to the right. Increasing the y value (second column) moves the views down on the page.
* **Spacing dx / dy**: The x (first column) and y (second column) spacing between adjacent views. The spacing are the spacing of the Part coordinate system; in most cases there will be less blank space between the views that the spacing value (as the views have x and y dimensions).
* **Show hidden lines**: If selected, hidden lines will be visible in the created views.
* **Show smooth lines**: If selected, show lines where curvature is discontinuous (for example, where a fillet connects to a flat part).

## Properties

There are no properties for this command; the command creates properties for each of the individual views.

## Scripting

Drawing Orthoviews is not called in scripting. The individual views created by the Drawing Orthoviews command can be created in scripts.

## Limitations

To be added

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Orthoviews/de&oldid=1462016>"