---
title: FCGear EngranajeEvolvente
---
|  |
| --- |
| FCGear InvoluteGear |
| Menu location |
| Gear → Involute Gear |
| Workbenches |
| [FCGear](/FCGear_Workbench "FCGear Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| v0.16 |
| See also |
| [FCGear CycloideGear](/FCGear_CycloideGear "FCGear CycloideGear") |
|  |

## Descripción

Debido a la favorable relación de engrane y su fabricación relativamente sencilla, el dentado de espiral es la forma de diente más común en la construcción de máquinas. Las ruedas dentadas se encuentran allí donde se desea transferir movimiento y fuerza de una pieza a otra. Se pueden encontrar, por ejemplo, en máquinas, coches, relojes o electrodomésticos. A menudo, el movimiento se transmite directamente de una rueda dentada a otra, pero a veces también a través de una cadena. Además, se puede cambiar el sentido de giro. También es posible cambiar un movimiento radial a uno lineal mediante un [cremallera involuta](/index.php?title=FCGear_InvoluteRack/es&action=edit&redlink=1 "FCGear InvoluteRack/es (page does not exist)").

![](/images/Involute-Gear_example.png)

De izquierda a derecha: engranaje recto, engranaje helicoidal, engranaje helicoidal doble

## Uso

1. Cambie a ![](/images/FCGear_workbench_icon.svg) [entorno de trabajo FCGear](/FCGear_Workbench/es "FCGear Workbench/es").
2. Hay varias formas de invocar el comando:
   * Presione el botón ![](/images/FCGear_InvoluteGear.svg) engranaje evolvente en la barra de herramientas.
   * Seleccione la opción **Gear → ![](/images/FCGear_InvoluteGear.svg) Engranaje evolvente** del menú.
3. Cambie el parámetro de engranaje a las condiciones requeridas (ver [Propiedades](#Properties)).

## Propiedades

Un objeto FCGear InvoluteGear se deriva de un objeto [Part Feature](/index.php?title=Part_Feature/es&action=edit&redlink=1 "Part Feature/es (page does not exist)") y hereda todas sus propiedades. También tiene las siguientes propiedades adicionales:

### Datos

accuracy

* Datos**numpoints** (`Integer`): Default is `20`. Change of the involute profile. Changing the value can lead to unexpected results.
* Datos**simple** (`Bool`): Default is `false`, `true` generates a simplified display (without teeth and only a cylinder in pitch diameter).

base

* Datos**height** (`Length`): Default is `5 mm`. Value of the gear width.
* Datos**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
* Datos**num\_teeth** (`Integer`): Default is `15`. Number of teeth (see [Notes](#Notes)).

computed

* Datos**addendum\_diameter** (`Length`): Default is `17 mm`. Outside diameter, measured at the addendum (the tip of the teeth).
* Datos**angular\_backlash** (`Angle`): (read-only) The angle by which this gear can turn without moving the mating gear.
* Datos**pitch\_diameter** (`Length`): Default is `15 mm`. The pitch diameter.
* Datos**root\_diameter** (`Length`): (read-only) The root diameter, measured at the foot of the teeth.
* Datos**transverse\_pitch** (`Length`): Default is `3.14 mm`. The transverse pitch.
* Datos**traverse\_module** (`Length`): Default is `1 mm`. The traverse module of the generated gear.

fillets

* Datos**head\_fillet** (`Float`): Default is `0 mm`. A fillet for the tooth-head.
* Datos**root\_fillet** (`Float`): Default is `0 mm`. A fillet for the tooth-root.
* Datos**undercut** (`Bool`): Default is `false`, `true` changes the profile of the tooth root (see [Notes](#Notes)).

helical

* Datos**double\_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).
* Datos**helix\_angle** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left (see [Notes](#Notes)).
* Datos**properties\_from\_tool** (`Bool`): Default is `false`. If `true` and Datos**helix\_angle** is not zero, gear parameters are recomputed internally for the rotated gear.

hole

* Datos**Axle\_hole** (`Bool`): Default is `false`. `true` enables a central hole for an axle.
* Datos**Axle\_holesize** (`Length`): Default is `10 mm`. Diameter of the hole for an axle.
* Datos**offset\_hole** (`Bool`): Default is `false`, `true` enables an offset hole.
* Datos**offset\_holeoffset** (`Length`): Default is `10 mm`. The offset of the offset hole.
* Datos**offset\_holesize** (`Length`): Default is `10 mm`. The diameter of the offset hole.

involute

* Datos**pressure\_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).
* Datos**shift** (`Float`): Default is `0`. Generates a positive and negative profile shift (see [Notes](#Notes)).

tolerance

* Datos**backlash** (`Length`): Default is `0`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.
* Datos**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
* Datos**head** (`Float`): Default is `0`. This value is used to change the tooth height.
* Datos**reversed\_backlash** (`Bool`): `true` backlash decrease or `false` (default) backlash increase see [Notes](#Notes)).

version

* Datos**version** (`String`):

## Notas

* *beta*: When *beta* is changed, *pitch diameter* also changes. The following formula illustrates how the parameters interact: d = m \* Z / cos beta (Z = number of teeth, d = pitch diameter, m = module). This means for the spur gear: cos beta = 0 and for the helical gear: cos beta > 0. However, a helix angle of less than 10° has hardly any advantages over straight teeth.
* *clearance*: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
* *double\_gear*: To use the double helical gearing the helix angle β (*beta*) for the helical gearing must first be entered.
* *module*: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.
* *shift*: Profile shift is not merely used to prevent undercut. It can be used to adjust center distance between two gears. If a positive correction is applied, such as to prevent undercut in a pinion, the tooth thickness at top is thinner.
* *teeth*: If the number of teeth is changed, the pitch diameter also changes (*dw*).
* *undercut*: Undercut is used when the number of teeth of a gear is too small. Otherwise the mating gear will cut into the tooth root. The undercut not only weakens the tooth with a wasp-like waist, but also removes some of the useful involute adjacent to the base circle.
* *pressure\_angle*: 20° is a standard value here. The pressure angle is defined as the angle between the line-of-action (common tangent to the base circles) and a perpendicular to the line-of-centers. Thus, for standard gears, 14.5° pressure angle gears have base circles much nearer to the roots of teeth than 20° gears. It is for this reason that 14.5° gears encounter greater undercutting problems than 20° gears. Important. the pressure angle changes with a profile shift. Only change the parameter, if sufficient knowledge of the gear geometry is available.
* *reversed\_backlash*: If there are several gears, pay attention to which gear the parameter is set for.

## Limitaciones

A 2D tooth profile, obtained by setting the Datos**height** to zero, cannot be used with features requiring a 2D shape. For example [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") and [PartDesign AdditiveHelix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix") features do not accept such a profile as base. For technical details, please refer to the related [issue on GitHub](https://github.com/looooo/freecad.gears/issues/97).

## Fórmulas útiles

### Standard Spur Gears

Aquí "standard" se refiere a aquellos engranajes rectos sin coeficiente de cambio de perfil (

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)).

Basic formulas common to internal and external standard spur gears

| Symbol | Term | Formula | FCGear Parameter |
| --- | --- | --- | --- |
| m {\displaystyle m} {\displaystyle m} | *Module* | - | module {\displaystyle {\texttt {module}}} {\displaystyle {\texttt {module}}} |
| z {\displaystyle z} {\displaystyle z} | *Number of Teeth* | - | teeth {\displaystyle {\texttt {teeth}}} {\displaystyle {\texttt {teeth}}} |
| α {\displaystyle \alpha } {\displaystyle \alpha } | *Pressure Angle* | Typically,     α =  20  ∘ {\displaystyle \alpha =20^{\circ }} {\displaystyle \alpha =20^{\circ }} | pressure  \_   angle {\displaystyle {\texttt {pressure}}{\\_}{\texttt {angle}}} {\displaystyle {\texttt {pressure}}{\_}{\texttt {angle}}} |
| d {\displaystyle d} {\displaystyle d} | *Reference Diameter* or *Pitch Diameter* | z ⋅ m {\displaystyle z\cdot m} {\displaystyle z\cdot m} | dw {\displaystyle {\texttt {dw}}} {\displaystyle {\texttt {dw}}} |
| h  a  ∗ {\displaystyle h\_{a}^{\*}} {\displaystyle h_{a}^{*}} | *Addendum Coefficient* | Typically,      h  a  ∗ = 1 {\displaystyle h\_{a}^{\*}=1} {\displaystyle h_{a}^{*}=1} | h  a  ∗ = 1 +   head {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}} {\displaystyle h_{a}^{*}=1+{\texttt {head}}} |
| h  f  ∗ {\displaystyle h\_{f}^{\*}} {\displaystyle h_{f}^{*}} | *Dedendum Coefficient* | Typically,      h  f  ∗ = 1.25 {\displaystyle h\_{f}^{\*}=1.25} {\displaystyle h_{f}^{*}=1.25} | h  f  ∗ = 1 +   clearance {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}} {\displaystyle h_{f}^{*}=1+{\texttt {clearance}}} |
| h  a {\displaystyle h\_{a}} {\displaystyle h_{a}} | *Addendum* | h  a =  h  a  ∗ ⋅ m {\displaystyle h\_{a}=h\_{a}^{\*}\cdot m} {\displaystyle h_{a}=h_{a}^{*}\cdot m} | - |
| h  f {\displaystyle h\_{f}} {\displaystyle h_{f}} | *Dedendum* | h  f =  h  f  ∗ ⋅ m {\displaystyle h\_{f}=h\_{f}^{\*}\cdot m} {\displaystyle h_{f}=h_{f}^{*}\cdot m} | - |
| h {\displaystyle h} {\displaystyle h} | *Tooth Height* or *Tooth Depth* | h =  h  a +  h  f {\displaystyle h=h\_{a}+h\_{f}} {\displaystyle h=h_{a}+h_{f}}   Typically,     h = 2.25 ⋅ m {\displaystyle h=2.25\cdot m} {\displaystyle h=2.25\cdot m} | - |
| x {\displaystyle x} {\displaystyle x} | *Profile Shift Coefficient* | For standard gears,     x = 0 {\displaystyle x=0} {\displaystyle x=0} | shift {\displaystyle {\texttt {shift}}} {\displaystyle {\texttt {shift}}} |

Basic formulas specific to external standard spur gears

| Symbol | Term | Formula |
| --- | --- | --- |
| d  a {\displaystyle d\_{a}} {\displaystyle d_{a}} | *Tip Diameter* | d  a = d + 2 ⋅  h  a {\displaystyle d\_{a}=d+2\cdot h\_{a}} {\displaystyle d_{a}=d+2\cdot h_{a}}   Typically,      d  a = ( z + 2 ) ⋅ m {\displaystyle d\_{a}=(z+2)\cdot m} {\displaystyle d_{a}=(z+2)\cdot m} |
| d  f {\displaystyle d\_{f}} {\displaystyle d_{f}} | *Root Diameter* | d  f = d − 2 ⋅  h  f {\displaystyle d\_{f}=d-2\cdot h\_{f}} {\displaystyle d_{f}=d-2\cdot h_{f}}   Typically,      d  f = ( z − 2.5 ) ⋅ m {\displaystyle d\_{f}=(z-2.5)\cdot m} {\displaystyle d_{f}=(z-2.5)\cdot m} |

Basic formulas specific to internal standard spur gears

| Symbol | Term | Formula |
| --- | --- | --- |
| d  a {\displaystyle d\_{a}} {\displaystyle d_{a}} | *Tip Diameter* | d  a = d − 2 ⋅  h  a {\displaystyle d\_{a}=d-2\cdot h\_{a}} {\displaystyle d_{a}=d-2\cdot h_{a}}   Typically,      d  a = ( z − 2 ) ⋅ m {\displaystyle d\_{a}=(z-2)\cdot m} {\displaystyle d_{a}=(z-2)\cdot m} |
| d  f {\displaystyle d\_{f}} {\displaystyle d_{f}} | *Root Diameter* | d  f = d + 2 ⋅  h  f {\displaystyle d\_{f}=d+2\cdot h\_{f}} {\displaystyle d_{f}=d+2\cdot h_{f}}   Typically,      d  f = ( z + 2.5 ) ⋅ m {\displaystyle d\_{f}=(z+2.5)\cdot m} {\displaystyle d_{f}=(z+2.5)\cdot m} |

Basic formulas specific for a pair of external standard spur gears

| Symbol | Term | Formula |
| --- | --- | --- |
| a {\displaystyle a} {\displaystyle a} | *Center Distance* | a =     d  1 +  d  2 2 {\displaystyle a={\frac {d\_{1}+d\_{2}}{2}}} {\displaystyle a={\frac {d_{1}+d_{2}}{2}}} |
| c {\displaystyle c} {\displaystyle c} | *Tip and Root Clearance* | c  1 =  h  f 2 −  h  a 1 {\displaystyle c\_{1}=h\_{f2}-h\_{a1}} {\displaystyle c_{1}=h_{f2}-h_{a1}}   c  2 =  h  f 1 −  h  a 2 {\displaystyle c\_{2}=h\_{f1}-h\_{a2}} {\displaystyle c_{2}=h_{f1}-h_{a2}}   Typically,     c = 0.25 ⋅ m {\displaystyle c=0.25\cdot m} {\displaystyle c=0.25\cdot m} |

* **Helical and double helical gearing**
  + *pitch diameter (dw)* = *module* \* *teeth* : *cos beta*
  + *axle base* = *(pitch diameter (dw) 1 + pitch diameter (dw) 2)* : 2
  + *addendum diameter* = *pitch diameter (dw)* + 2 \* *module*
  + *module* = *pitch diameter (dw)* \* *cos beta* : *teeth*

## Programación

Utilice el poder de Python para automatizar el modelado de sus engranajes:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteGear.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteGear/es&oldid=1529261>"