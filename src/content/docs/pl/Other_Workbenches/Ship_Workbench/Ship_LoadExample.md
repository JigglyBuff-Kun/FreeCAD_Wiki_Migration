---
title: Statek Przykłady geometrii
---
|  |
| --- |
| Ship LoadExample |
| Menu location |
| Ship design → Load an example ship geometry |
| Workbenches |
| [Ship](/Ship_Workbench "Ship Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Opis

Narzędzie to służy do wczytywania przykładowych geometrii.

Ship works over **Ship entities**, that must be created on top of provided geometry. Geometry must be a solid, or set of solids. The following criteria must be taken into account:

* All hull geometry must be provided (including symmetric bodies).
* Starboard geometry must be included at negatives *y* domain.
* Origin (0,0,0) point is the **Midship section** (Midpoint between after and forward perpendicular) and **base line** intersection.

![](/images/FreeCAD-Ship-SignCriteria.jpg)

Ship sign criteria

In order to help new users, Ship includes a geometries examples loader, with the following to choose from:

* Series 60 from Iowa University
* Wigley Canonical Ship
* Series 60 Catamaran
* Wigley Catamaran

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Ship_LoadExample.svg) [Load an example ship geometry](/Ship_LoadExample "Ship LoadExample") button.
   * Select the **Ship design → ![](/images/Ship_LoadExample.svg) Load‏‎ an example ship geometry** option from the menu.
2. A task panel will display, prompting to choose one of the example ship geometries.
3. Select the example you want to load and press Accept.
4. Result: The tool loads a new document with the selected geometry.

:::caution
Warning, before editing anything! You are now working with the original example file. To preserve the original unedited example, you must first save it as a new file before editing anything.
:::

## Tutorials

* [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial "FreeCAD-Ship s60 tutorial")
* [FreeCAD-Ship s60 tutorial (II)](/FreeCAD-Ship_s60_tutorial_(II) "FreeCAD-Ship s60 tutorial (II)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_LoadExample/pl&oldid=1133414>"