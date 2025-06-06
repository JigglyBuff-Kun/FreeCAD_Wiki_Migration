---
title: Ship Hydrostatics
---

|                                          |
| ---------------------------------------- |
| Ship Hydrostatics                        |
| Menu location                            |
| Ship design → Hydrostatics               |
| Workbenches                              |
| [Ship](/Ship_Workbench "Ship Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

Plot the ship hydrostatics.

![](/images/FreeCAD-Ship-HydrostaticsCurves.png)

Hydrostatics curves example

Hydrostatics computation is a critical stage of a ship's design, it provides an understanding to the underlying principal stability hull parameters.

It is indeed mandatory data in order to get the ship certified by classification societies. Combined with the information of load conditions provides the most basic information about ship stability.

The Ship workbench plot the hydrostatics in 3 main groups. In all of them the Δ(T) curve (displacement-draft ratio) is depicted. Although many other hydrostatics can be eventually considered, they can be actually derived from the already provided ones, which are documented below.

### Volume based hydrostatics

There are 3 hydrostatics (despite Δ(T)) included within this category:

- Wetted area (WSA).
- Moment to trim the ship 1 cm (MCT).
- Longitudinal position of the bouyance center (XCB).

As the amount of surface in contact with the water, WSA is heavily related with the ship dynamics, including both ship resistance and seakeeping. Moreover, WSA is part of the renormalization factor for many of the non-dimensional ship coefficients, like the drag coefficient:

c

# d

F

d

1
2
ρ

u

2
S
,
{\displaystyle c\_{\mathrm {d} }={\dfrac {F\_{\mathrm {d} }}{{\dfrac {1}{2}}\rho u^{2}S}},}

![{\displaystyle c_{\mathrm {d} }={\dfrac {F_{\mathrm {d} }}{{\dfrac {1}{2}}\rho u^{2}S}},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/878897a4dc79cd6c40e1e9860bfb8e11098f45be)

with

F

d
{\displaystyle F\_{\mathrm {d} }}
![{\displaystyle F_{\mathrm {d} }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/94c70082e398a95e8d658918edea80a198a2351d) the drag force,

ρ
{\displaystyle \rho }
![{\displaystyle \rho }](https://wikimedia.org/api/rest_v1/media/math/render/svg/1f7d439671d1289b6a816e6af7a304be40608d64) the water density,

u
{\displaystyle u}
![{\displaystyle u}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3e6bb763d22c20916ed4f0bb6bd49d7470cffd8) the ship velocity and

S
{\displaystyle S}
![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) the WSA.

The MCT plays a mayor role in the load condition planning, since it gives information about the effect of displacing any load along the ship. The actual MCT is computed according the transversal gravity center to metacenter distance, GML, obviously requiring the gravity center position. However, as it is a common practice in naval architecture, the distance of such metacenter to the buoyancy center, BML, is considered similar to such GML (

G
M
L

/
B
M
L
≃
1
{\displaystyle GML/BML\simeq 1}
![{\displaystyle GML/BML\simeq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/79cfdc2f5a24796f4c083c42aef667f9a7eb8478)). Please note that is only valid for the longitudinal direction (

G
M
T

/
B
M
T
≠
1
{\displaystyle GMT/BMT\neq 1}
![{\displaystyle GMT/BMT\neq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3d517ac2f89d3347f8070d8b9051c342387ee0eb)).

Sometimes the BML is preferred to the MCT. If it is your case, you just need to apply

B
M
L
=

100

L

M
C
T
Δ
,
{\displaystyle BML={\dfrac {100\,\,L\,\,MCT}{\Delta }},}

![{\displaystyle BML={\dfrac {100,,L,,MCT}{\Delta }},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2c6a2ca8c5328926f289b6b1685d2fee080a5166)

with

L
{\displaystyle L}
![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) the length in meters and

Δ
{\displaystyle \Delta }
![{\displaystyle \Delta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/32769037c408874e1890f77554c65f39c523ebe2) the displacement.

The XCB is obviously indicating the trim angle that is expected to get the ship depending on the weight distribution.

### Stability hydrostatics

These hydrostatics are more related with the ship transversal stability. The following hydrostatics are provided by the Ship workbench:

- Floating Area/Waterplane Area (WP).
- Distance between the keel and buoyance center (KB).
- Distance between the bouyance center and the metacenter (BMT)

The floating area is widely connected with the so-called hydrostatic stiffness, or in other words the resistance presented by the ship to any perturbation.

On the other hand, the KB and BMT are critical parameters to determine the transversal stability of the ship for small angles. Indeed when the gravity center is defined (it can be done with the [Ship Weight](/Ship_Weight "Ship Weight"), [Ship Tank](/Ship_Tank "Ship Tank") and [Ship LoadCondition](/Ship_LoadCondition "Ship LoadCondition") tools) the main stability parameter for small angles can be easily computed,

G
M
T
=
K
B

- B
  M
  T
  −
  K
  G
  .
  {\displaystyle GMT=KB+BMT-KG.}

![{\displaystyle GMT=KB+BMT-KG.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bc35a5ce9c1852e82405bdb246eda166ebd956f)

That parameter is indeed required to have a minimum value which depends on the ship type and size, and will be consequently queried by the classification societies.

### Coefficients

There are some coefficients that are usually considered at the first stages of a ship design to assess the quality of the ship surface, or in other words, its hydrodynamic behavior.

- Block coefficient (Cb).
- Floating Coefficient (Cf).
- Main frame Coefficient (Cm).

Cb is the ration between the volume within the submerged part of the ship and the volume of its bound box, i.e. the smallest box which might hold the ship inside. Cm and Cf are its 2D counterpart, becoming the Cm ratio between the area of the main ship frame and its bounding box, and Cf the ratio between the waterplane area and its bounding box.

While large Cb values will inexorably result in inefficient ships, with more moderate Cb values it is required to combine the information with Cm and Cf. Larger Cf values indicates a large footprint in the water surface, which usually indicates a large ship resistance due to waves generation. On the contrary, the larger Cm is the larger volume of the ship body is concentrated on the center part, and thus thin shapes can be expected at the bow and stern, which is usually good for hydrodynamic purposes.

## Usage

In order to compute the transversal areas curve, select a **Ship instance** (see [Ship CreateShip](/Ship_CreateShip "Ship CreateShip")), and invoke **Ship design → ![](/images/Ship_Hydrostatics.svg) Hydrostatics**.

The task panel is shown. You must select the trim angle as well as the range of drafts to be considered. You can also select the number of samples to be taken between the minimum and maximum draft. The larger the number of samples the longer will take the computation.

Press the Accept button when you are ready, so the Ship module will start the computation. During the computation FreeCAD will become almost irresponsive. It is however plotting the information in runtime, as well as a progress bar of the process. You can switch to a different plot tab, or stop the computation pressing the Cancel button. Just please be patient since those actions will be executed just after the next draft sample computation is finished.

## Tutorials

- [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial "FreeCAD-Ship s60 tutorial")
- [FreeCAD-Ship s60 tutorial (II)](</FreeCAD-Ship_s60_tutorial_(II)> "FreeCAD-Ship s60 tutorial (II)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_Hydrostatics/en&oldid=1483042>"
