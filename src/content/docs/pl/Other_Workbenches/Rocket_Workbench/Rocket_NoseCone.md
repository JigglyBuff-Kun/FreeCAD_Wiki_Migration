---
title: Rakieta Stożek nosa
---
|  |
| --- |
| Rocket NoseCone |
| Menu location |
| Rocket → Nose Cone |
| Workbenches |
| [Rocket Workbench](/Rocket_Workbench "Rocket Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Opis

Zakończenia czubka mają różne kształty i rozmiary, a większość z nich trudno jest modelować bez programowania. Dla wielu konstruktorów rakiet jest to proces niewykonalny. To polecenie umożliwia tworzenie stożków czołowych za pomocą prostych właściwości w połączeniu z wyspecjalizowanym oknem dialogowym zadań.

## Użycie

1. There are several ways to invoke the command:
   * Press the ![](/images/Rocket_NoseCone.svg) [Nose Cone](/Rocket_NoseCone "Rocket NoseCone") button.
   * Select the **Rocket → ![](/images/Rocket_NoseCone.svg) Nose Cone** option from the menu.
   * Double click on a Nose Cone object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Nose Cone Types

The theory behind the various nose cone shapes is explained here: [Nose cone design](https://en.wikipedia.org/wiki/Nose_cone_design)

Supported nose cone types include:

* Cone.

![](/images/NC_Cone_small.png)

Conical

* Blunted Cone. For all blunted shapes, the tip is spherically rounded with a specified diameter. The length is the actual length of the nose and not the virtual length described in the [Nose cone design](https://en.wikipedia.org/wiki/Nose_cone_design) reference.

![](/images/NC_Blunted_Cone_small.png)

Spherically Blunted Cone

* Ogive.

![](/images/NC_Ogive_small.png)

Ogive

* Blunted Ogive. For all blunted shapes, the tip is spherically rounded with a specified diameter. The length is the actual length of the nose and not the virtual length described in the [Nose cone design](https://en.wikipedia.org/wiki/Nose_cone_design) reference.

![](/images/NC_Blunted_Ogive_small.png)

Spherically Blunted Ogive

* Secant Ogive.

![](/images/NC_Secant_Ogive_small.png)

Secant Ogive

* Elliptical.

![](/images/NC_Elliptical_small.png)

Elliptical

* Spherical. This is a special case of the elliptical nose cone where the length is 1/2 of the diameter.

![](/images/NC_Sperical_small.png)

Spherical

* Parabola. The shape commonly thought of as a parabola is not generated using a parabolic series, but a power series with a coefficient of 1/2. This is explained in the Wikipedia article.

![](/images/NC_Parabola_small.png)

Parabola (Power series with coefficient 1/2)

* Parabolic series. This shape is constrained using a coefficient, as explained in the Wikipedia article.

![](/images/NC_Parabolic_0.5_small.png)

Parabolic series with coefficient 1/2

![](/images/NC_Parabolic_1_small.png)

Parabolic series with coefficient 1

* Von Karman. A Haack series with a coefficient of 0

![](/images/NC_Karman_small.png)

Von Karman (Haack series with coefficient 0)

* Haack Series. This shape is constrained using a coefficient, as explained in the Wikipedia article.

![](/images/NC_Haack_0.33_small.png)

Haack series with coefficient 1/3

![](/images/NC_Haack_2_small.png)

Haack series with coefficient 2

### Nose Cone Styles

Nose cones can be drawn in one of 3 styles:

* Solid: The cone is constructed as a solid piece, such as out of balsa wood.

![](/images/NC_Solid_small.png)

* Hollow: The cone is hollow on the inside having a specified thickness. The end is not sealed.

![](/images/NC_Hollow_small.png)

* Capped: Similar to hollow, except the end is sealed.

![](/images/NC_Capped_small.png)

### Shoulders

Nose cones can be created with or without shoulders:

![](/images/NC_Ogive_small.png)

Ogive with shoulder

![](/images/NC_No_Shoulder_small.png)

Ogive without shoulder

## Properties

Nose Cone

* DANE**Blunted Diameter**: The diameter of the spherical portion at the tip of the nose
* DANE**Coefficient**: Combined with the Nose Type, this defines the shape of the nose cone, see [Options](#Options)
* DANE**Diameter**: The diameter of the base of the nose cone
* DANE**Length**: The length of the nose cone without the shoulder. For all blunted shapes, the length is the actual length of the nose and not the virtual length described in the [Nose cone design](https://en.wikipedia.org/wiki/Nose_cone_design) reference.
* DANE**Nose Style**: Defines the style of the nose cone, see [Options](#Options)
* DANE**Nose Type**: Defines the shape of the nose cone using the coefficient when required, see [Options](#Options)
* DANE**Ogive Diameter**: The diameter of the Ogive circle. This is only required for the Secant Ogive nose cone type
* DANE**Resolution**: Used internally, this parameter defines the number of data points to use when drawing the outline of the nose cone
* DANE**Shoulder**: True when the Nose Cone includes a shoulder
* DANE**Shoulder Diameter**: The diameter of the shoulder. This must be less than the radius of the Nose Cone
* DANE**Shoulder Length**: The length of the shoulder
* DANE**Shoulder Thickness**: When the Nose Style is hollow or capped, this will determine the wall thickness of the shoulder
* DANE**Thickness**: When the Nose Style is hollow or capped, this will determine the wall thickness of the nose cone

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

* DANE**Description**: Description of the component
* DANE**Manufacturer**: Manufacturer when known
* DANE**Material**: Material when known
* DANE**Part Number**: Manufacturer part number

## Tutorials and Learning

[Rocket Workbench Nose Cones](https://youtu.be/zwLgie2E4Ts) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_NoseCone/pl&oldid=1270483>"