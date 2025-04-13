---
title: Exemplul de Ship Geometries
---
|  |
| --- |
| Ship Load |
| Menu location |
| Ship design → Load‏‎ an example ship geometry |
| Workbenches |
| [Ship](/Ship_Workbench "Ship Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Introducere

FreeCAD-Ship lucrează pe **Ship entities**, are trebuie create în prealabil pe baza geometriei furnizate. formele geometrice trebuie să fie un solid sau un set de solide și trebuie să îndeplinească următoarele criterii:

* Trebuie prevăzută toată geometria carenei (inclusiv părțile simetrice).
* Partea tribordului, geometria tribordului trebuie poziționată în domeniul negativ a lui *y*.
* Punctul de origine (0,0,0) este în secțiunea maestră **Midship section** (Midpoint between after and forward perpendicular) ți intersecția **base line**.

Ship works over **Ship entities**, that must be created on top of provided geometry. Geometry must be a solid, or set of solids. The following criteria must be taken into account:

* All hull geometry must be provided (including symmetric bodies).
* Starboard geometry must be included at negatives *y* domain.
* Origin (0,0,0) point is the **Midship section** (Midpoint between after and forward perpendicular) and **base line** intersection.

![](/images/FreeCAD-Ship-SignCriteria.jpg)

![Schematic view of sign criteria](/images/FreeCAD-Ship-SignCriteria.jpg)

Schematic view of sign criteria

Ship sign criteria

In order to help new users, Ship includes a geometries examples loader, with the following to choose from:

* Series 60 from Iowa University
* Wigley Canonical Ship
* Series 60 Catamaran
* Wigley Catamaran

## Încărcarea geometriei pentru nave din seria 60

Pentru a ajuta utilizatorii noi, nava include un exemplu de încărcător de geometrie, cu următoarele opțiuni:

* Seria 60 de la Iowa University
* Wigley Canonical Ship
* Seria 60 Catamaran
* Wigley Catamaran

Executing the tool (Ship design/Load an example ship geometry) a task dialogue will shown. Select **Series 60 from Iowa University** and press Accept. Tool loads new document with **s60\_IowaUniversity** geometry.

:::caution
Warning, before editing anything!You are now working with the original example file.To preserve the original unedited example,you must first save it as a new file before editing anything.
:::

## Tutoriale

* [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial "FreeCAD-Ship s60 tutorial")
* [FreeCAD-Ship s60 tutorial (II)](/FreeCAD-Ship_s60_tutorial_(II) "FreeCAD-Ship s60 tutorial (II)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_LoadExample/ro&oldid=1133084>"