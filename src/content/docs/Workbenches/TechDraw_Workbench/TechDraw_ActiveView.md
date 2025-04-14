---
title: TechDraw ActiveView
---

|                                                                        |
| ---------------------------------------------------------------------- |
| TechDraw ActiveView                                                    |
| Menu location                                                          |
| TechDraw → Views From Other Workbenches → Insert Active View (3D View) |
| Workbenches                                                            |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                   |
| Default shortcut                                                       |
| _None_                                                                 |
| Introduced in version                                                  |
| 0.19                                                                   |
| See also                                                               |
| [TechDraw Image](/TechDraw_Image "TechDraw Image")                     |
|                                                                        |

## Description

The **TechDraw ActiveView** tool inserts a bitmap image of the active 3D window into a drawing page.

![](/images/TechDraw_ActiveView_example.png)

A simple view from the 3D model.

## Usage

1. Navigate to the correct [3D view](/3D_view "3D view").
2. If there are multiple drawing pages in the document: optionally select the desired page in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   - Press the ![](/images/TechDraw_ActiveView.svg) [Insert Active View (3D View)](/TechDraw_ActiveView "TechDraw ActiveView") button.
   - Select the **TechDraw → Views From Other Workbenches → ![](/images/TechDraw_ActiveView.svg) Insert Active View (3D View)** option from the menu.
4. If there are multiple drawing pages in the document and you have not yet selected a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
5. The **ActiveView to TD View** task panel opens. See [Options](#Options) for more information.
6. Press the OK button.

## Options

The following can be specified:

- **Crop**: Crop the generated bitmap.
- **Width**: The width (in mm) to crop the generated view.
- **Height**: The height (in mm) to crop the generated view.
- **No Background**: If checked, the generated bitmap will have a transparent background.
- **Solid Background**: If checked, the generated will have a background of the selected color.
- **Use 3d Background**: If checked, the generated bitmap will use the background from the 3D window.

## Notes

- ActiveViews are static once generated, they are never updated with changes to the 3D model.
- An ActiveView behind the scenes is an [Image](/TechDraw_Image "TechDraw Image"). Its Data**Scale Type** is therefore always initialized as `Custom`.
- In 0.20 and below ActiveView was a [Symbol](/TechDraw_Symbol "TechDraw Symbol").

## Properties

See [TechDraw Image](/TechDraw_Image#Properties "TechDraw Image").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ActiveView/en&oldid=1486015>"
