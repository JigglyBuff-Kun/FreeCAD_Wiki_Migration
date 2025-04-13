---
title: Návrh dílu Obtáčení
---
|  |
| --- |
| Návrh dílu Obtáčení |
| Umístění Menu |
| Návrh dílu -> Obtáčení |
| Pracovní stoly |
| [Návrh dílu](/PartDesign_Workbench/cs "PartDesign Workbench/cs"), Kompletace |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

## Introduction

This tool revolves a selected sketch or 2D object about a given axis.
For all the following explanations of this command the example sketch below will be used:

![](/images/Complex_sketch.png)

Example sketch: A complex sketch with many constraints. Sketch is oriented in the x-y plane, with x being the horizontal axis, and y being the vertical axis (shown in image as the two blue lines). Other important things to note about this sketch is that it are mirrored about the y axis and that the base of it is coincident with the x axis.

![](/images/PartDesign_Revolution_example.svg)

Above: sketch (A) is revolved 270 degrees counter-clockwise around axis (B); resulting solid (C) is shown right.

## Usage

1. Select a single sketch or one or more faces from the Body.
2. Press the ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution") button.
3. Set the Revolution parameters, see [Options](#Options) below.
4. Press the OK button.

## Options

Pro všechny následující výklady k tomuto příkazu bude využit níže uvedený příklad náčrtu:

![](/images/Complex_sketch.png)

Náčrt pro příklad: Komplexní náčrt s mnoha vazbami. Náčrt je orientován v rovině X-Y, kde X je vodorovná osa a Y je svislá osa (v obrázku jsou zobrazeny jako dvě modré linky). Další důležité poznámky k náčrtu jsou, že je zrcadlen kolem osy Y a že jeho základ je shodný s osou X.

## Volby

Při vytváření obtáčeného objektu nabízí dialogové okno několik následujících 'parametrů obtáčení', které určují jak by se měl náčrt obtáčet.

|  |  |
| --- | --- |
|  | Osa Tato volba určuje osu, kolem které se bude náčrt obtáčet. V současnosti zde může být vybrána pouze vodorovná nebo svislá osa. Ale v tabulce vlastností může být vybrána libovolná osa. Základ je bod, kterým osa prochází. Samotná volba osy má tři argumenty, které jsou vkládány jako čísla do některého z polí X,Y nebo Z. Zadání hodnoty 1.0 do pouze jednoho z polí zapříčiní, že obtáčení bude provedeno kolem této osy. Příklady obtáčení 1, 2 a 3 v sekci [příkladů](#Examples) demonstruje výsledky když je obtáčení buď kolem osy X nebo Y. Zadání nenulové hodnoty do více než jedné osy bude znamenat, že obtáčený díl bude obtočen pouze o příslušnou hodnotu v každé ose. Např. hodnota X=1 a Y=2 znamená, že obtočení v ose Y je dvakrát větší než v ose X. Je docela obtížné si to představit, příklad obtáčení 4 ukazuje případ, kdy je nenulové víc než jedno pole. Úhel Řídí úhel ve kterém se bude obtáčení provádět, např. 360° bude plné obtočení. Obrázek v sekci [příklady](#Examples) demonstruje některé z možností zadání různých úhlů. Nelze zadat záporné úhly (místo toho opužijte opět volbu **Opačně**) nebo úhly větší než 360°. Symetricky k rovině Obtáčení rozšíří polovinu zadaného úhlu v obou směrech od roviny náčrtu. Opačně Směr obtáčení bude obrácen. |

## Příklady

Poznámka: Všechny příklady odkazují na Základnu, Osu a Umístění, které mohou být upravovány v tabulce vlastností .

![](/images/Revolve3_cropped.png)

Příklad obtáčení 1: Na tomto obrázku byl úhel nastaven na 70°, obtáčí se kolem osy X a je nastaveno odsazení na ose Y o 100mm. Plocha náčrtu není na obrázku zobrazena (tj. 'back' plocha).

![](/images/Revolve5_cropped.png)

Příklad obtáčení 2: Na tomto obrázku byl úhel nastaven na 70°, obtáčí se kolem osy Y a je nastaveno odsazení na ose Y o 100mm.

![](/images/Revolve7_cropped.png)

Příklad obtáčení 3: Na tomto obrázku byl úhel nastaven na 270°, obtáčí se kolem osy X a je nastaveno odsazení na ose Y 0mm.

![](/images/Revolve8_cropped.png)

Příklad obtáčení 4: Na tomto obrázku byl úhel nastaven na 270°, obtáčí se kolem osy X (hodnota 1.00) a osy Y (hodnota 2.00) a je nastaveno odsazení na ose Y o 100mm.

![](/images/Partdesign_revolution_parameters.png)

### Type

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Type offers five different ways of specifying the angle of the revolution:

#### Dimension

Enter a numeric value for the **Angle** of the revolution. With the option **Symmetric to plane** the revolution will extend half the given angle to either side of the sketch or face.

#### To last

The revolution will extend up to the last face of the support it encounters in its direction. If there is no support, an error message will appear.

#### To first

The revolution will extend up to the first face of the support it encounters in its direction. If there is no support, an error message will appear.

#### Up to face

The revolution will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body.

#### Two dimensions

This allows to enter a second angle in which the revolution should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.

### Axis

Specifies the axis of the revolution:

* **Vertical sketch axis**: selects the vertical sketch axis.
* **Horizontal sketch axis**: selects the horizontal sketch axis.
* **Construction line**: selects a construction line from the sketch used by the revolution. The dropdown list will contain an entry for each construction line. The first construction line will be labelled *Construction line 1*.
* **Base (X/Y/Z) axis**: selects the X, Y or Z axis of the Body's origin.
* **Select reference...**: allows the selection of a straight edge or a [datum line](/PartDesign_Line "PartDesign Line") from the Body.

Note that when changing the axis, the **Reversed** option may be (un)checked automatically.

### Angle

Defines the angle of the revolution. This option is only available if **Type** is **Dimension** or **Two dimensions**. Angles larger than 360° are not possible. Nor are negative values, use the **Reversed** option instead.

### Symmetric to plane

Check this option to extend the revolution half the given angle to either side of the sketch or face. This option is only available if **Type** is **Dimension**.

### Reversed

Reverses the direction of the revolution.

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the revolution in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

## Properties

### Data

Part Design

* Údaje**Refine** (`Bool`)

Revolution

* Údaje**Type** (`Enumeration`)
* Údaje**Base** (`Vector`): (read-only)
* Údaje**Axis** (`Vector`): (read-only)
* Údaje**Angle** (`Angle`)
* Údaje**Up To Face** (`LinkSub`)
* Údaje**Angle2** (`Angle`)
* Údaje**Reference Axis** (`LinkSub`)

Sketch Based

* Údaje**Profile** (`LinkSub`)
* Údaje**Midplane** (`Bool`)
* Údaje**Reversed** (`Bool`)
* Údaje**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to be selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/cs&oldid=1446920>"