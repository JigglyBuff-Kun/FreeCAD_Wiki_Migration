---
title: Drawing View
---

|                                                                      |
| -------------------------------------------------------------------- |
| Drawing View                                                         |
| Menu location                                                        |
| Drawing → Insert view in drawing                                     |
| Workbenches                                                          |
| [Drawing](/Drawing_Workbench "Drawing Workbench"), Complete          |
| Default shortcut                                                     |
| none                                                                 |
| Introduced in version                                                |
| -                                                                    |
| See also                                                             |
| [Drawing Landscape A3](/Drawing_Landscape_A3 "Drawing Landscape A3") |
|                                                                      |

This tool creates a new view of the selected object in the active drawing sheet.

![A drawing sheet with three views: front, top and isometric.](/src/assets/images/Drawing_Views.png)

### Usage

Select an object either in the 3D view or the Project tree, then click on the Drawing View tool. By default, a top view scaled at 1:1 (real scale) will be placed at the top left of the page. It may not be visible if it's too small or too big for the page.

A **View** object is added to the **Page** object in the Project tree. For subsequent views, a three-digit number will be appended to the name. Click on the arrow in front of the Page object to unfold it and display the views it contains.

If only the object is selected in the Project Tree, the view is added to the first page of the project. If you have multiple pages in your project please select the object
and the page it should be added to. Then click on the icon to add the view to the selected page.

### Modify an existing view

Unfold the Page object in the Project tree, and select the View. Its parameters can be edited in the Property View Data tab.

![](/src/assets/images/Drawing_View_Properties.png)

![](/src/assets/images/Drawing_View_Iso.png)

Isometric view with smooth lines visibility off

![](/src/assets/images/Drawing_View_Iso_SmoothLines.png)

Isometric view with smooth lines visibility on

- **Label**: changes the view's label in the Project tree. You can also click on the View in the tree and right-click → Rename, or press F2.
- **Rotation**: rotates the view. For example, an isometric view will require a 60 degree rotation (see also Direction parameter below)
- **Scale**: sets the view scale.
- **X**: sets the view's horizontal position on the page in millimeters.
- **Y**: sets the view's vertical position on the page in millimeters. Please note that coordinate (0,0) is located at the top left of the page, so the higher the number, the lower in the page the view will be.
- **Direction**: changes the view direction. It is set by xyz values that define a vector normal to the page. Top view will be (0,0,1), and isometric will be (1,1,1). Values can be negative.
- **Show Hidden Lines**: toggles the hidden lines visibility on or off by selecting _True_ or _False_.
- **Show Smooth Lines**: toggles the smooth lines visibility on or off by selecting _True_ or _False_. Smooth lines are also called tangency edges. These edges indicate surface changes between tangent surfaces.

### Other

If you are looking for persective-orthographic toggling in 3D view check [Std PerspectiveCamera](/Std_PerspectiveCamera "Std PerspectiveCamera") and [Std OrthographicCamera](/Std_OrthographicCamera "Std OrthographicCamera")

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_View/en&oldid=1461814>"
