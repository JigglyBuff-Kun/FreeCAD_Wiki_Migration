---
title: TechDraw PageDefault
---

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw PageDefault                                                                                                                    |
| Menu location                                                                                                                           |
| TechDraw → Page → Insert Default Page                                                                                                   |
| Workbenches                                                                                                                             |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                                    |
| Default shortcut                                                                                                                        |
| _None_                                                                                                                                  |
| Introduced in version                                                                                                                   |
| -                                                                                                                                       |
| See also                                                                                                                                |
| [TechDraw PageTemplate](/TechDraw_PageTemplate "TechDraw PageTemplate"), [TechDraw Templates](/TechDraw_Templates "TechDraw Templates") |
|                                                                                                                                         |

## Description

The **TechDraw PageDefault** tool creates a new Page object using the the template file specified in the [TechDraw Preferences](/TechDraw_Preferences "TechDraw Preferences").

![](/src/assets/images/A4_LandscapeTD.svg)

Default template that comes with TechDraw: A4_LandscapeTD.svg

## Usage

1. An active document must exist.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_PageDefault.svg) [Insert Default Page](/TechDraw_PageDefault "TechDraw PageDefault") button.
   - Select the **TechDraw → Page → ![](/src/assets/images/TechDraw_PageDefault.svg) Insert Default Page** option from the menu.

## Notes

- If a Page is marked as "do not keep updated" either through its Data**Keep Updated** property, through the **Toggle Keep Updated** option from its window context menu, or by the setting in the Preferences, it will ignore changes in the 3D model. You may notice anomalies (missing geometry, missing Dimension values, etc) in the appearance of the Page. These will correct themselves once the Page is updated with the [Redraw Page](/TechDraw_RedrawPage "TechDraw RedrawPage") tool. The Page will have this icon ![](/src/assets/images/TechDraw_Tree_Page_Unsync.svg) in the [Tree view](/Tree_view "Tree view") while updating is suspended. This setting also affects the startup process. If a Page is marked as "do not keep updated" it will not be drawn at program start.

- If the default template is not specified in your user configuration file `user.cfg`, the tool will try:

: ```
$INSTALL_DIR/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

: Where `$INSTALL_DIR` is the directory where FreeCAD was installed, for example:

: ```
/usr/share/freecad/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

## Properties

### Data

Base

- Data**Projection Type**: Default projection type (First or Third Angle) for this Page.

Page

- Data**Keep Updated**: If false, the Page is not updated with changes to the 3D model. Useful for complicated/slow drawings. See [Notes](#Notes).
- Data**Template**: A link to this Page's [Template](/TechDraw_Templates "TechDraw Templates") object.
- Data**Views**: A list of links to the Views on this Page.
- Data**Scale**: Default scale for Views in this Page.
- Data**Next Balloon Index**: Auto-numbering for Balloons.

### View

Grid

- View**Show Grid**: Show a grid over this Page.
- View**Grid Spacing**: Distance between grid lines.

## Scripting

See [TechDraw PageTemplate](/TechDraw_PageTemplate#Scripting "TechDraw PageTemplate").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageDefault/en&oldid=1485872>"
