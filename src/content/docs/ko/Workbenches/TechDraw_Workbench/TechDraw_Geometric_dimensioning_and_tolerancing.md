---
title: 기술도면 기하학적 치수 및 공차
---
## 개념

기술 도면의 주요 목적은 설계자가 어떤 허용 오차 범위 내에서 무엇을 만들려고 하는지, 그리고 그것을 어떻게 만들어야 하는지를 다른 사람들이 이해하게 하는 것입니다. 대부분의 부품은 조립품에 끼워 맞춰야 하므로 다른 부품과의 기하학적 관계가 중요합니다. 이를 달성하기 위해 [기하학적 치수 및 공차](https://en.wikipedia.org/wiki/Geometric_dimensioning_and_tolerancing) (GD&T) 시스템이 개발되었습니다.

아래 부품을 예로 들어 보겠습니다:

![](/images/TechDraw_Hole-Position-Example.png)

In the application an axis should be put through the 2 holes of the part. That means we have to specify the following things

* The diameter of the holes and their positions.
* That the holes are along a certain axis that is not perpendicular to the XZ base plane.
* That the axis part must have a certain straightness.

The straightness is important because a bent axis would not fit through the holes. The hole alignment is important because just drilling each hole at the given position without taking care of the axis, would lead to holes through which the axis will not fit. So just specifying the hole dimension and position is not sufficient. The first point is "classical" dimensioning while the 2 others are geometric information, thus GD&T comes into play. The example also makes clear that GD&T is essential to assure that parts fit well to assemblies.

If you are not familiar with the concept of GD&T, we highly recommend to learn about it now. For example a quick introduction is given in [this video](https://www.youtube.com/watch?v=P5GT9ZSRYl0). For more like the concept of the "maximum material condition", have a look at [this video](https://www.youtube.com/watch?v=UXZjTb3ZUQI). For details to all sorts of GD&T features, look around in the Internet. For example [this YouTube channel](https://www.youtube.com/c/Gdandtbasics/videos) provides some good explanations.

GD&T is defined in the standards [ISO 1101](http://geo-dim-tol.ir/files/iso1101.pdf) and [ASME Y14.5](http://www.sharifcadcam.ir/uploaded/2e22f9ef-dfc5-47bc-a126-cc51e9686c4f.pdf).

TechDraws' capabilities to fulfill the common GD&T standards is limited (as of FreeCAD 0.20) but you can achieve already many things. This Wiki page explains what is implemented and what tricks can be used for non-implemented features. **Note:** this Wiki page is not about to teach GD&T!

## 치수

기술도면 작업대는 다양한 유형의 치수를 만드는 데 필요한 여러 가지 도구를 제공합니다. 다양한 치수를 생성하고 수정하는 방법은 [다양한 치수](/TechDraw_Workbench/ko#치수 "TechDraw Workbench/ko")를 참조하세요.

### 서식

The default font for new dimension is determined by the [preferences](/TechDraw_Preferences#Labels "TechDraw Preferences") setting **Label Font**. The default font size is specified by the [preferences](/TechDraw_Preferences#Dimensions "TechDraw Preferences") setting **Font Size**.  
**Note:** It is recommended to use a font in which the minus sign has the same width as the plus sign because this assured that tolerances will be formatted as proposed by the GD&T norms. Such a font is for example *osifont* that is part of all FreeCAD installations.

The default format for new dimension numbers depends on the [preferences](/TechDraw_Preferences#Dimensions "TechDraw Preferences") options **Use Global Decimals** and **Alternate Decimals**. This specifies the number of decimals, but in every case the dimension is a floating point number. For example if the setting is to have 2 decimals, the used format specifier is "%.2f" (floating point number with 2 decimals).

The number format can be changed:

1. Either double-click on the dimension in the drawing or onto the dimension object in the model tree
2. In the appearing dimension dialog the field **Format Specifier** contains the format specifier, so change it to what you need

The syntax of the format specifier is [explained here](https://www.cplusplus.com/reference/cstdio/printf/). You can also use [this online tool](https://onlinetexttools.com/printf-text) to see what formatting specifier will format numbers.

**Examples:**

* You use 2 decimals but for an angle you want to have only one decimal use the format specifier *%.1f*.
* You use 2 decimals but don't like that trailing zeroes are printed (you prefer *4* instead of *4.00*). Then use this format specifier: *%g*. The 'g' will use the shortest possible output and thus it omits trailing zeroes. Moreover it will automatically switch to [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation#E_notation) if necessary.

With the property 데이터**Inverted** you can make length dimensions negative and flip angles from the range 0 - 180° to the the reflex range 180° - 360°.

Setting the option **Theoretically Exact** in the dimension dialog will mark the dimension as theoretically exact by adding a frame around it.

You can use your own text instead of a formatted number by setting the option **Arbitrary Text** in the dimension dialog. Then the content of the field **Format Specifier** will be printed as dimension.

With the properties 데이터**X** and 데이터**Y** you can change the horizontal and vertical position of the dimension text relative to the view. Alternatively you can change the position by dragging the dimension number or text.

### 공차(Tolerances)

#### Creation

1. Create a [dimension](/TechDraw_Workbench#Dimensions "TechDraw Workbench") in your drawing
2. Either double-click on the dimension in the drawing or onto the dimension object in the model tree
3. In the appearing dimension dialog specify as **Overtolerance** the amount by which the dimension can be exceeded.  
   This will result in an equal tolerance like this: ![](/images/TechDraw_equal-tolerance.png)
4. If you have unequal tolerances, specify as **Undertolerance** the amount by which the dimension can be smaller and uncheck the option **Equal Tolerance**.  
   This will result in an unequal tolerance like this: ![](/images/TechDraw_Non-equal-tolerance.png)

#### Deletion

To get rid of a tolerance, change **Overtolerance** and **Undertolerance** to each zero.

#### Formatting

The default font for new tolerances is the same than for dimensions. The default font size is specified by the [preferences](/TechDraw_Preferences#Dimensions_2 "TechDraw Preferences") setting **Tolerance Text Scale**. This scale is a factor of the font size used for the dimension.

The default number format for new tolerances is by default the same format than for the dimension. It can be changed in the dimension dialog.

You can also use your own text instead of a formatted number by checking the option **Arbitrary Tolerance Text** in the dimension dialog. Then the content of **Tolerance Format Specifier** will be used as tolerance text.

## Geometrical Tolerancing

Tolerances are created by using the [Balloon](/TechDraw_Balloon "TechDraw Balloon") feature of TechDraw. Since for most features a frame is required, it is helpful to change in the [TechDraw preferences](/TechDraw_Preferences#Annotation "TechDraw Preferences") the **Balloon Shape** to **Rectangle**.

### Tolerance indicator

![](/images/TechDraw_GD%26T-Toleranced-rod.png)

Example of a toleranced rod. (The run-out already defines the straightness, it is only there as example.)

The tolerance indicator of GD&T is a frame, also called "feature control frame". It can be created by using the [Balloon](/TechDraw_Balloon "TechDraw Balloon") feature of TechDraw:

* after adding a Balloon and if its shape is not already a frame, double-click on it in the model tree and set in the appearing dialog the **Shape** to **Rectangle**.
* add the corresponding Unicode character for the feature you need to the Balloon **Text**. (You can copy them from the reference tables [below](/TechDraw_Geometric_dimensioning_and_tolerancing#Symbol_reference "TechDraw Geometric dimensioning and tolerancing") or use [TechDraw ExtensionCustomizeFormat](/TechDraw_ExtensionCustomizeFormat "TechDraw ExtensionCustomizeFormat").)
* by adding the character '|' to the **Text**, you start a new indicator field.

There is no rule that defines if or how the tolerance indicator must have a leader line or not, so you can either:

* set the property **Line Visible** to **False** in the balloon dialog.
* set **End Symbol** to **Filled Arrow** or **Dot**.

The example at the right side shows the two possible tolerance indicator layouts.

### Datums

Datums in the GD&T sense of the meaning are surfaces your tolerance is relative to. They are created as Balloon:

* after adding a Balloon, set **End Symbol** to **Filled Triangle** in the balloon dialog.
* if the bubble shape is not already a frame, set **Bubble Shape** to **Rectangle**.
* drag the bubble with the mouse so that the triangle points away from the datum surface.
* since it is common to have a straight line for datums unless the datum surface is not perpendicular to X or Y, assure that either the properties 데이터**X** and 데이터**Origin X** or 데이터**Y** and 데이터**Origin Y** are equal to get a straight Balloon line.

![](/images/TechDraw_GD%26T-Datum.png)

Example of a datum in a drawing

### Symbol reference

To insert GD&T symbols TechDraw provides the [Customize format label](/TechDraw_ExtensionCustomizeFormat "TechDraw ExtensionCustomizeFormat") feature.

As reference, here are lists of characters to be used for geometric tolerancing:

Geometric tolerancing reference chart (according to table 2 in [ISO 1101-2017](http://geo-dim-tol.ir/files/iso1101.pdf))

| Type of control | Geometric characteristics | Symbol | [Unicode](https://en.wikipedia.org/wiki/Unicode) character | Datum necessary | Notes |
| --- | --- | --- | --- | --- | --- |
| Form | Straightness |  | ⏤ U+23E4 | no |  |
| Form | Flatness |  | ⏥ U+23E5 | no |  |
| Form | Roundness |  | ○ U+25CB | no | In older norms also called circularity. |
| Form | Cylindricity |  | ⌭ U+232D | no |  |
| Form / Orientation / Location | Line profile |  | ⌒ U+2312 | yes | No datum necessary when used for form purpose |
| Form / Orientation / Location | Surface profile |  | ⌓ U+2313 | yes | No datum necessary when used for form purpose |
| Orientation | Parallelism |  | ∥ U+2225 | yes |  |
| Orientation | Perpendicularity |  | ⟂ U+27C2 | yes |  |
| Orientation | Angularity |  | ∠ U+2220 | yes |  |
| Location | Position |  | ⌖ U+2316 | yes | No datum necessary when working with norm ISO 5458. |
| Location | Concentricity / Coaxiality |  | ◎ U+25CE | yes | Named concentricity when used for center points and coaxiality when used for median lines. In the norm ASME Y14.5 it was eliminated since the version from 2018. |
| Location | Symmetry |  | ⌯ U+232F | yes | In the norm ASME Y14.5 from 2018, the symmetry was eliminated. |
| [Run-out](https://en.wikipedia.org/wiki/Run-out) | Circular run-out |  | ↗ U+2197 | yes |  |
| [Run-out](https://en.wikipedia.org/wiki/Run-out) | Total run-out |  | ⌰ U+2330 | yes |  |

Symbols used in the feature control frame to specify a feature's description, tolerance, modifier and datum references

| Symbol | [Unicode](https://en.wikipedia.org/wiki/Unicode) character | Modifier | Notes |
| --- | --- | --- | --- |
|  | Ⓕ U+24BB | Free state | Applies only when part is otherwise restrained |
|  | Ⓛ U+24C1 | Least material condition (LMC) | Useful to maintain minimum wall thickness |
|  | Ⓜ U+24C2 | Maximum material condition (MMC) | Provides bonus tolerance only for a feature of size |
|  | Ⓟ U+24C5 | Projected tolerance zone | Useful on threaded holes for long studs |
|  | Ⓢ U+24C8 | Regardless of feature size (RFS) | Not part of the 1994 version. See para. A5, bullet 3. Also para. D3. Also, Figure 3-8. |
|  | Ⓣ U+24C9 | Tangent plane | Useful for interfaces where form is not required |
|  | — | Continuous feature | Identifies a group of features that should be treated geometrically as a single feature |
|  | — | Statistical tolerance | Appears in the 1994 version of the standard, assumes appropriate statistical process control. |
|  | Ⓤ U+24CA | Unequal bilateral | Added in the 2009 version of the standard, and refers to unequal profile distribution. Number after this symbol indicates tolerance in the "plus material" direction. |

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Geometric_dimensioning_and_tolerancing/ko&oldid=1563298>"