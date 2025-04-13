---
title: Draft Întindere
---
|  |
| --- |
| Draft Stretch |
| poziția meniului |
| Draft → Stretch |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| S H |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Offset](/Draft_Offset/ro "Draft Offset/ro") |
|  |

## Description

## Descriere

Acest instrument permite întinderea unui obiect prin mutarea unora dintre vârfurile acestuia.

![](/images/Draft_Stretch_Example.jpg)

![](/images/Draft_Stretch_Example.jpg)

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Cum se utilizează

1. Selectați obiectele pe care doriți să le întindeți
2. Apăsați tasta ![](/images/Draft_Stretch.png) [Draft Stretch](/Draft_Stretch "Draft Stretch")
3. Alegeți primul colț al unui dreptunghi de selecție
4. Alegeți colțul opus al dreptunghiului de selecție. Vitezele selectate sunt evidențiate
5. Alegeți primul punct al deplasării pe care doriți să o dați acestor vârfuri
6. Alegeți punctul final al deplasării

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

## Opțiuni

* Dacă nu este selectat niciun obiect la pornirea comenzii, veți fi invitat să alegeți unul. Dar pentru a lucra pe mai multe obiecte, trebuie să le selectați înainte de a porni comanda.
* Până în prezent, numai obiectele [Draft Wire](/Draft_Wire "Draft Wire"), [Draft Line](/Draft_Line "Draft Line"), [Draft BSpline](/Draft_BSpline "Draft BSpline"), [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") și [Draft Rectangle](/Draft_Rectangle "Draft Rectangle") obiecte vor fi supuse la întindere. Toate celelalte obiecte vor avea punctul lor de origine mutat dacă se află în interiorul dreptunghiului de selecție.

## Scripting

## Script

Instrumentul Stretch nu are nicio funcție directă de tip python deoarece tot ceea ce face este să modifice proprietățile obiectelor selectate, cum ar fi proprietățile de plasare sau puncte ale obiectelor de proiect. Privind la ieșirea python atunci când utilizați instrumentul stretch, este ușor să reproduceți lucrul manual.

There is no Python method to stretch objects. To emulate the results of the Draft Stretch command geometric properties of objects have to be modified.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Stretch/ro&oldid=1352689>"