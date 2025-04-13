---
title: Part Mirror
---
|  |
| --- |
| Part Mirror |
| Menu location |
| Part -> Mirror |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| --- |
|  |

## Description

## Introducere

'Mirror Object' - Acest instrument creează un nou obiect (imagine) care este o refelctare a unui obiect original(sursa). Obiectul imagine este creat în spatele planului/suprafeței oglinzii. Planul oglinzii poate fi un plan standard (**XY**, **YZ**, or **XZ**), sau orice plan paralel la planele standarde.

Un exemplu:

![](/images/PARTMirrorBeforev11.png)

Before

![](/images/PARTMirrorAfterv11.png)

After mirrored through YZ plane

## Utilizare

![](/images/PartMirroring_Scr1.png)

Selectați obiectul sursă dion listă.
Selectați un **Mirror plane** standard din dropbox.
Apăsați **OK** pentru a crea obiectul imagine.

When the select button label says Selecting you are in reference selection mode and there is a selection gate in effect, which disallows the selection of unsupported reference objects. Click the button to toggle the selection gate off, the button label then changes to Select reference.

The mirror plane is defined by a Date**Normal** (direction) and a Date**Base** (position). When the Date**Mirror Plane** property contains a reference object these properties are made read-only as they are then computed based on that object. The plane is infinite even if the reference object is not.

A reference object can be a planar face, such as the face of a [Part Box](/Part_Box "Part Box"), a circular edge, a [Datum Plane](/PartDesign_Plane "PartDesign Plane"), an [origin plane](/App_OriginGroupExtension "App OriginGroupExtension") of a [Std Part](/Std_Part "Std Part") container, or any object with a single planar face or single circular edge. There is also support for [Links](/App_Link "App Link"). Note, however, that B-spline surfaces, such as [ruled surfaces](/Part_RuledSurface "Part RuledSurface") or [loft faces](/Part_Loft "Part Loft") are not supported.

## Options

## Opțiuni

Casetele **Base point** pot fi utilizate pentru a mișca planul oglinzii paralel cu planul oglinzii standard. Numia una dintre casetele **X**, **Y**, or **Z** este efectivă pentru planul satndard.

| Standard Plane | Base Point Box | Effect |
| --- | --- | --- |
| **XY** | **Z** | Move mirror plane along **Z** axis. |
| **XY** | **X**, **Y** | No effect. |
| **XZ** | **Y** | Move mirror plane along **Y** axis. |
| **XZ** | **X**, **Z** | No effect. |
| **YZ** | **X** | Move mirror plane along **X** axis. |
| **YZ** | **Y**, **Z** | No effect. |

## Notes

## Limitări

* Planurile de oglindă arbitrare (adică nu sunt paralele cu planul standard) nu sunt acceptate (începând de la versiunea FC 0.13).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Mirror/ro&oldid=1336374>"