---
title: Rocket Ejection Charge Calculator
---

|                                                          |
| -------------------------------------------------------- |
| Rocket Ejection Charge Calculator                        |
| Menu location                                            |
| Rocket → Calculators → Ejection Charge Calculator        |
| Workbenches                                              |
| [Rocket Workbench](/Rocket_Workbench "Rocket Workbench") |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| 0.19                                                     |
| See also                                                 |
| _None_                                                   |
|                                                          |

## Description

:::caution
This calculator only gives an estimate of the amount of powder required. Too much or too little may result in a failed recovery or damage to your rocketALWAYSground test your rocket before flying
:::

Ejection occurs when the chamber containing the recovery system is pressurized with sufficient force to eject the recovery system from the chamber. The force required can vary according to a number of factors:

: _ diameter and volume of the body tube
_ mass of the nose and recovery system
_ ejection method, for example piston systems require less pressure
_ presence of shear pins used to prevent drag separation \* fit of the recovery system in the body tube

As such, this calculator will only give you a starting estimate. Too little powder will result in a failed ejection and a failed recovery. Too much powder may result in damage to the rocket or recovery system, which may also result in a failed recovery. It is **ALWAYS** necessary to do a ground test before flying your rocket.

When calculating the volume of the body tube, it is rarely necessary to include the full length. For example, the shoulder of the nose or electronics bay may consume some volume. Adjust your length specification accordingly.

There are some rules of thumb that can be applied based on years of experience from multiple rocket builders. Of primary concern here is the force applied to the ejectable portion, typically the nose cone or electronics bay. Ejection forces at this interface should be between 150 and 200 lbf (~667 to 890 N). The pressure required can then be calculated based on the volume of the chamber. This pressure will be less for larger diameters and more for smaller diameters. There are presets in the calculator to set these forces (low and high settings in the combobox).

Ground testing should start at the low end of the recommended range to prevent damage to your rocket. Increase the amount as required to ensure safe recovery.

## Usage

![](/src/assets/images/Calc_ejection_charge.png)

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Rocket_Calculator.svg) [Ejection Charge Calculator](/Rocket_Ejection_Charge_Calculator "Rocket Ejection Charge Calculator") button.
   - Select the **Rocket → Calculators → ![](/src/assets/images/Rocket_Calculator.svg) Ejection Charge Calculator** option from the menu.
2. Enter the weight of your rocket and parameters for your parachute.

## Calculation

Pressure is set by desired force, or force can be set by specifying the desired pressure. This is based on the force applied to the area at the end of the volume to be pressurized.

: : P
=

        F

        π

        (

        D

        2
        )

        2
        {\displaystyle P={\cfrac {F}{\pi {\left({\cfrac {D}{2}}\right)}^{2}}}}
        ![{\displaystyle P={\cfrac {F}{\pi {\left({\cfrac {D}{2}}\right)}^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/88957b9775c9088998c81e1298daef6ffb31bf78)

where

: : F
=
{\displaystyle F=}
![{\displaystyle F=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/678aa813d234f6d5a404f8e20add27a8dcf2834b) desired force
: D
=
{\displaystyle D=}
![{\displaystyle D=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/46fb38bc4118286d56c5abb752508569fe376931) body tube diameter

Once the desired pressure is known, the amount of black powder can be calculated using

: : m
=

        P
        V

        R

        c
        T
        g
        {\displaystyle m={\cfrac {PV}{R\_{c}Tg}}}
        ![{\displaystyle m={\cfrac {PV}{R_{c}Tg}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a64c65c24070c50c3541fc4db64a27a73fea7d56)

where

: : P
=
{\displaystyle P=}
![{\displaystyle P=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a4db3adef01611d5cea6a0961ec02a8f1f867a15) the pressure calculated in the previous equation
: V
=
{\displaystyle V=}
![{\displaystyle V=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d8af5bb3e96708a768e3558e74ffc41d1f322486) the volume of the chamber to be pressurized
: R

        c
        =
        12.1579

        m
        K
        {\displaystyle R\_{c}=12.1579\,{\frac {m}{K}}}
        ![{\displaystyle R_{c}=12.1579\,{\frac {m}{K}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e10b25013c6c8a77bad22f6fe657699f548ed14d), combustion gas constant for FFFFg black powder
    :   T
        =
        1739

        K
        {\displaystyle T=1739\,K}
        ![{\displaystyle T=1739\,K}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85ac43bb264c6a3fae40dac4420bfb49f4285344), combustion gas temperature
    :   g
        =
        9.807

        m

        s

        2
        {\displaystyle g=9.807\,{\frac {m}{s^{2}}}}
        ![{\displaystyle g=9.807\,{\frac {m}{s^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3c27845ae38beda438caf094d339fd6e437d84eb), acceleration due to gravity

### Units

Calculations are done using metric units, but will display in your preferred units. Values can also be entered using any supported units by including the units with the value (_eg_ 5 oz, or 23.2 g)

## References

1. <http://vernk.com/EjectionChargeSizing.htm>
2. <https://www.insanerocketry.com/blackpowder.html>
3. <https://rocketrycalculator.com/rocketry-calculator/bp-estimator>
4. <http://www.rockethead.net/black_powder_calculator.htm>
5. <http://hararocketry.org/hara/resources/how-to-size-ejection-charge/>

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Ejection_Charge_Calculator/en&oldid=1122930>"
