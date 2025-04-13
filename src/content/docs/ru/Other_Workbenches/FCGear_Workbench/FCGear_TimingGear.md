---
title: FCGear Ременное зубчатое колесо
---
|  |
| --- |
| FCGear TimingGear |
| Menu location |
| Gear → Timing Gear |
| Workbenches |
| [FCGear](/FCGear_Workbench "FCGear Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| v0.16 |
| See also |
| *None* |
|  |

## Описание

Назначение ременной передачи газораспределительного механизма (сокращенно ГРМ) состоит в том, чтобы позволить распределительному и коленчатому валу вращать цепь ГРМ. Коленчатый вал вращается, перемещая поршни вверх и вниз внутри цилиндров. Распределительный вал поворачивается, позволяя впускным и выпускным клапанам на цилиндрах открываться и закрываться. Эти компоненты важны для правильного газораспределения внутри двигателя внутреннего сгорания.

Timing gears are connected to a timing belt or timing chain.

![](/images/Timing-Gear_example.png)

Above: Timing gear

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   * Press the ![](/images/FCGear_TimingGear.svg) [Timing Gear](/FCGear_TimingGear "FCGear TimingGear") button in the toolbar.
   * Select the **Gear → ![](/images/FCGear_TimingGear.svg) Timing Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear TimingGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

base

* Данные**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Данные**teeth** (`Integer`): Default is `15`. Number of teeth.
* Данные**type** (`Enumeration`): Default is `gt2`. Type of timing gear – profile pitch for timing belts (see [Notes](#Notes)).

computed

* Данные**h** (`Length`): (read-only) Radial height of teeth.
* Данные**offset** (`Length`): (read-only) X-Offset of second arc mid-point.
* Данные**pitch** (`Length`): (read-only) Pitch of gear.
* Данные**r0** (`Length`): (read-only) Radius of first arc.
* Данные**r1** (`Length`): (read-only) Radius of second arc.
* Данные**rs** (`Length`): (read-only) Radius of third arc.
* Данные**u** (`Length`): (read-only) Radial difference between pitch … diameter and head of gear.

version

* Данные**version** (`String`):

## Notes

* *type*: The pitch of the timing belts (distance from tooth centre to tooth centre of consecutive teeth) is specified in types. GT2 has a pitch of 2 mm, GT3 of 3 mm, GT5 of 5 mm etc..

## Useful formulas

* *addendum diameter* = *pitch diameter* + 2 \* *module*
* *belt length* = 2 \* *axle base* + *belt tooth pitch* : 2 \* *(teeth 1 + 2)* + *belt tooth pitch²* : 4 \* pi² \* *axle base* \* *(teeth 1 - 2)²*
* *axle base* = *belt length* : 4 - *belt tooth pitch* : 8 \* *(teeth 1+2)* + ¼ \* sqrt [*belt length* - ½ \* *belt tooth pitch* \* *(teeth 1+2)²* - 2 \* *belt tooth pitch²* \* *(teeth 1+2)²* : pi²]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_TimingGear/ru&oldid=1195246>"