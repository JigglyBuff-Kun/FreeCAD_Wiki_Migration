---
title: Rocket Parachute Size Calculator
---

|                                                          |
| -------------------------------------------------------- |
| Rocket Parachute Size Calculator                         |
| Menu location                                            |
| Rocket → Calculators → Parachute Size Calculator         |
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

This calculator determines the parachute size required to achieve the desired descent rate based on the parachute parameters.

The desired descent rate depends on your needs. As a rule of thumb, the main parachute should slow the rocket to approximately

6.1

m

/
s

(
20

f

/
s
)
{\displaystyle 6.1\,m/s\,(20\,f/s)}
![{\displaystyle 6.1,m/s,(20,f/s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/40a24a4b012989ec1c993dbce69b4b6f9649732c) while the drone should allow the parachute to descend much faster

18.3

m

/
s

(
60

f

/
s
)
{\displaystyle 18.3\,m/s\,(60\,f/s)}
![{\displaystyle 18.3,m/s,(60,f/s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e052eb7c74813aaf68659fd7e673ad248d5c5f41) -

21.3

m

/
s

(
70

f

/
s
)
{\displaystyle 21.3\,m/s\,(70\,f/s)}
![{\displaystyle 21.3,m/s,(70,f/s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4c202b737c2036897ff356a0d444c7bdf1ed6997). The editor has presets for these, with the value for the drogue being in the middle of the range. You can set a custom descent rate to suit your needs.

A key value for determining the descent rate is the coefficient of drag (

C

D
{\displaystyle C\_{D}}
![{\displaystyle C_{D}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b0d15598a7c5085c97643aeaa00dcaa98a23975)). The exact value of this will depend on a variety of factors including the shape of the parachute. Presets are provided for parachutes cut from a flat piece of material (round, square, hexagonal) such as those provided by many kits, and for a true dome shape. Your parachute manufacturer may provide a better value for this coefficient.

## Usage

![](/src/assets/images/Calc_parachute_size.png)

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Rocket_Calculator.svg) [Parachute Size Calculator](/Rocket_Parachute_Size_Calculator "Rocket Parachute Size Calculator") button.
   - Select the **Rocket → Calculators → ![](/src/assets/images/Rocket_Calculator.svg) Parachute Size Calculator** option from the menu.
2. Enter the weight of your rocket and parameters for your parachute.

## Calculation

Parachute size is determined by the mass of the rocket, desired descent rate, and drag characteristics of the parachute. The calculation is a two step process. First the area of the parachute is calculated:

: : A
=

        2
        m
        g

        ρ

        v

        T

        2

        C

        D
        {\displaystyle A={2mg \over {\rho v\_{T}^{2}C\_{D}}}}
        ![{\displaystyle A={2mg \over {\rho v_{T}^{2}C_{D}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5425c768ead50d38096d9252cd62f42efc90f09e)

where

: : m
=
{\displaystyle m=}
![{\displaystyle m=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/42ca1e8909ec6751b821936017e812bde5a375c3) the mass of the rocket
: v

        T
        =
        {\displaystyle v\_{T}=}
        ![{\displaystyle v_{T}=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/69b0574d291faa1cd99bbe4f4b4dd42f98b87f4e) desired terminal velocity
    :   C

        D
        =
        {\displaystyle C\_{D}=}
        ![{\displaystyle C_{D}=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/958bc6b82a036c45c0d61b0685973ab12c284ae3) drag coefficient of the parachute
    :   ρ
        =
        1.22
        {\displaystyle \rho =1.22}
        ![{\displaystyle \rho =1.22}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d89a28e344dc3d108fbfcc69067717932597e58b) air density, average at sea level in

        k
        g

        /

        m

        3
        {\displaystyle kg/m^{3}}
        ![{\displaystyle kg/m^{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7a55ebb7f5ff4471037d34b671b2563fc63662b) at

        15
        C
        {\displaystyle 15C}
        ![{\displaystyle 15C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/344a22c8a2f9d0758b2fdacca3269bfc81be81dc)
    :   g
        =
        9.807
        {\displaystyle g=9.807}
        ![{\displaystyle g=9.807}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bf912a68d3f40f5ef38ca30b5dec517c770f399) acceleration due to gravity in

        m

        /

        s

        2
        {\displaystyle m/s^{2}}
        ![{\displaystyle m/s^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87bdaef754cd6687de90271126d73c95efa580e7)

The diameter is then calculated from the surface area based on the shape.

For hexagonal parachutes:

: : D
=

        2
        A

        s
        q
        r
        t

        3
        {\displaystyle D={\sqrt {2A \over sqrt{3}}}}
        ![{\displaystyle D={\sqrt {2A \over sqrt{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/009ae9f03d370ee044c6ac168d22a199813c1eaa)

For square parachutes, the diameter is the length of each side

: : D
=

        A
        {\displaystyle D={\sqrt {A}}}
        ![{\displaystyle D={\sqrt {A}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c010f6c3808217a3e4e10737eb45606a9fdf2c1e)

For all other parachutes, the shape is assumed to be circular

: : D
=

        4
        A
        π
        {\displaystyle D={\sqrt {4A \over \pi }}}
        ![{\displaystyle D={\sqrt {4A \over \pi }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/38f9c24328f8491ba3915dd12806306c3686fdeb)

### Units

Calculations are done using metric units, but will display in your preferred units. Values can also be entered using any supported units by including the units with the value (_eg_ 5 oz, or 23.2 g)

## References

1. <http://www.rocketmime.com/rockets/descent.html>
2. <https://descentratecalculator.onlinetesting.net/>
3. <https://www.math.net/area-of-a-hexagon>

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Parachute_Size_Calculator/en&oldid=865704>"
