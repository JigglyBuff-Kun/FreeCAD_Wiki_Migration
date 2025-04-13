---
title: TechDraw ClipGroup
---

|                                                      |
| ---------------------------------------------------- |
| TechDraw ClipGroup                                   |
| Menu location                                        |
| TechDraw → TechDraw Views → Insert Clip Group        |
| Workbenches                                          |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench") |
| Default shortcut                                     |
| _None_                                               |
| Introduced in version                                |
| -                                                    |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The **TechDraw ClipGroup** tool creates a clipping window which can contain Views.

![](/src/assets/images/TechDraw_Clipview.png)

Viewport window clipping different existing views

## Usage

1. If there are multiple drawing pages in the document: optionally activate the desired page by selecting it in the [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_ClipGroup.svg) [Insert Clip Group](/TechDraw_ClipGroup "TechDraw ClipGroup") button.
   - Select the **TechDraw → TechDraw Views → ![](/src/assets/images/TechDraw_ClipGroup.svg) Insert Clip Group** option from the menu.
3. If there are multiple drawing pages in the document and you have not yet activated a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
4. Views can be dragged and dropped to and from the Clip Group in the Tree view. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Clip Group, formally a `TechDraw::DrawViewClip` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties.

### Data

Clip Group

- Data**Width** (`Length`): The width of the clipping window in units
- Data**Height** (`Length`): The height of the clipping window in units
- Data**ShowFrame** (`Bool`): When true, show a frame around the clipping window
- Data**Views** (`LinkList`): The Views contained in the clipping window

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ClipGroup/en&oldid=1490078>"
