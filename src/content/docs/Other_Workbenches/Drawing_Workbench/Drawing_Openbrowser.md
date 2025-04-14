---
title: Drawing Openbrowser
---

|                                                             |
| ----------------------------------------------------------- |
| Drawing Openbrowser                                         |
| Menu location                                               |
| Drawing → Open Browser                                      |
| Workbenches                                                 |
| [Drawing](/Drawing_Workbench "Drawing Workbench"), Complete |
| Default shortcut                                            |
| none                                                        |
| Introduced in version                                       |
| -                                                           |
| See also                                                    |
| _None_                                                      |
|                                                             |

## Description

This command allows you to display a selected [Drawing page](/Drawing_Landscape_A3 "Drawing Landscape A3") using FreeCAD's internal web browser. The normal Drawing page viewer of FreeCAD is based on [Qt's built-in SVG rendering module](http://qt-project.org/doc/qt-5.0/qtsvg/svgrendering.html), which only supports a tiny subset of the full SVG specification. As a result, some more advanced SVG features, such as pattern fills or multiline texts are not supported by this viewer. The FreeCAD internal web browser, however, is built on [webkit](http://en.wikipedia.org/wiki/WebKit), which is one of the best SVG renderers available, and will correctly render your page with all its features.

## Usage

1. Create a [Drawing page](/Drawing_Landscape_A3 "Drawing Landscape A3")
2. Add some [views](/Drawing_View "Drawing View") or other content to your page
3. [Refresh](/Std_Refresh "Std Refresh") the view if a Drawing view wasn't opened
4. Press the ![](/images/Drawing_Openbrowser.png) [Drawing Openbrowser](/Drawing_Openbrowser "Drawing Openbrowser") button

## Limitations

- A page opened in the web browser will not refresh automatically on changes. You must use right-click → reload manually.

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Openbrowser/en&oldid=981965>"
