---
title: Part TransformedCopy
---

|                                                       |
| ----------------------------------------------------- |
| Part TransformedCopy                                  |
| Menu location                                         |
| Part → Create a copy → Create transformed copy        |
| Workbenches                                           |
| [Part](/Part_Workbench "Part Workbench")              |
| Default shortcut                                      |
| _None_                                                |
| Introduced in version                                 |
| 0.19                                                  |
| See also                                              |
| [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy") |
|                                                       |

## Description

The ![](/images/Part_TransformedCopy.svg) **Part TransformedCopy** command creates non-parametric copies of objects. It is intended for objects nested in containers.

The Data**Placement** of the copies is adjusted, accounting for the placement of the container(s), so that their position and rotation relative to the global coordinate system is the same as that of the original objects. If the selected objects are not nested, or nested in a container with a default placement, this command produces the same results as [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy").

## Usage

1. Select one or more objects.
2. Select the **Part → Create a copy → ![](/images/Part_TransformedCopy.svg) Create transformed copy** option from the menu.

## Properties

See also: [Property editor](/Property_editor "Property editor").

The created objects are [Part Feature](/Part_Feature "Part Feature") objects with no additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_TransformedCopy/en&oldid=1466446>"
