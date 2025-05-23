---
title: Návrh dílu Kapsa
---
|  |
| --- |
| Návrh dílu Kapsa |
| Umístění Menu |
| Návrh dílu -> Kapsa |
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

## Úvod

'Vytvoří kapsu podle vybraného náčrtu' - Tento nástroj vezme vybraný náčrt a vytvoří s ním *kapsu*. Pojem kapsa je používán pro vysunutí náčtru tak, že odebírá objem z konstrukce do které proniká. Například, je-li náčrt tvořen jednoduše kružnicí na jedné ploše kostky, pak nástroj kapsa vytvoří díru 'vyvrtanou' do kostky:

![](/images/PartDesign_Pocket_example.svg)

*Sketch profile (A) was mapped to the top face of base solid (B); result after pocketing through on the right.*

## Usage

1. Select a single sketch or one or more faces from the Body.
2. Press the ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") button.
3. Set the Pocket parameters, see [Options](#Options) below.
4. Press the OK button.

## Volby

![](/images/Pocket_options_cs.png)

When creating a pocket, or after double-clicking an existing pocket in the [Tree view](/Tree_view "Tree view"), the **Pocket parameters** task panel is shown. It offers the following settings:

![](/images/PartDesign_Pocket_Taskpanel.png)

### Type

Type offers five different ways of specifying the length of the pocket:

#### Dimension

Při vytváření kapsy nabízí dialogové okno 'parametrů kapsy' čtyři různé způsoby pro zadání hloubky do jaké bude kapsa vysunuta

### Rozměr

Zadání číselné hodnoty pro hloubku kapsy. Defaultní směr pro vysunutí je do podkladu. Vysunutí je ve směru [kolmém](http://en.wikipedia.org/wiki/Surface_normal) k definované rovině náčrtu.
Záporné hodnoty nejsou možné.

### Do první

Kapsa bude vysunuta až do první plochy podkladu ve směru vysunutí. Jinými slovy odebírá všechen materiál až dokud nenarazí na prázdný prostor.

### Skrz celý

Kapsa vyseká všechen materiál ve směru vysunutí. S volbou **Symetricky k rovině** bude kapsa vysekána celým materiálem v obou směrech.

### Až k ploše

Kapsa bude vysunuta až k ploše podkladu, která může být vybrána kliknutím na ni.

#### Through all

The pocket will extend up to the last face of the support it encounters in its direction. With the option **Symmetric to plane** the pocket will cut through all material in both directions. Note that for technical reasons, *Through All* is actually a 10 meter deep pocket. If you need deeper pockets, use the type **Dimension**.

#### To first

The pocket will extend up to the first face of the support it encounters in its direction.

#### Up to face

The pocket will extend up to a face. Press the Select face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body.

#### Two dimensions

This allows to enter a second length in which the pocket should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.

#### Up to shape

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The pocket will extend up to the selected shape. Optionally press the Select shape button and select a shape. Leave the Select all faces checkbox enabled or disable it, press the Select button and select the faces up to which the pocket should be created.

### Offset to face

Offset from face at which the pocket will end. This option is only available if **Type** is **Through all**, **To first** or **Up to face**.

### Length

Defines the length of the pocket. This option is only available if **Type** is **Dimension** or **Two dimensions**. The length is measured along the direction vector, or along the normal of the sketch or face. Negative values are not possible. Use the **Reversed** option instead.

### 2nd length

Defines the length of the pocket in the opposite direction. This option is only available if **Type** is **Two dimensions**.

### Symmetric to plane

Check this option to extrude half the given length to either side of the sketch or face, if **Type** is **Dimension**, or **Through all** if that is the **Type**.

### Reversed

Reverses the direction of the pocket.

### Direction

#### Direction/edge

You can select the direction of the extrusion:

* **Sketch normal** or **Face normal:** The sketch or face is extruded in the opposite direction of its normal. If you have selected several sketches or faces to be extruded, the normal of the first one will be used.
* **Select reference...:** The sketch or face is extruded in the opposite direction of a straight edge or a [datum line](/PartDesign_Line "PartDesign Line") selected from the Body.
* **Custom direction:** The sketch or face is extruded in the direction of the specified vector.

#### Show direction

If checked, the pocket direction will be shown. In case the pocket uses a **Custom direction**, it can be changed.

#### Length along sketch normal

If checked, the pocket length is measured along the sketch or face normal, otherwise along the custom direction.

### Taper angle

Tapers the pocket in the extrusion direction by the given angle. A positive angle means the outer pocket border gets wider. Note that inner structures receive the opposite taper angle. This is done to facilitate the design of molds and molded parts. This option is only available if **Type** is **Dimension** or **Two dimensions**.

### 2nd taper angle

Tapers the pocket in the opposite extrusion direction by the given angle. See **Taper angle**. This option is only available if **Type** is **Two dimensions**.

## Properties

### Data

Part Design

* Údaje**Refine** (`Bool`): True or false. Cleans up residual edges left after the operation. This property is initially set according to the user's settings (found in **Preferences → Part Design → General → Model settings**).

Pocket

* Údaje**Type** (`Enumeration`): Defines how the pocket will be extruded, see [Options](#Options).
* Údaje**Length** (`Length`): Defines the length of the pocket, see [Options](#Options).
* Údaje**Length2** (`Length`): Second pocket length in case the Údaje**Type** is **TwoLengths**, see [Options](#Options).
* Údaje**Use Custom Vector** (`Bool`): If checked, the pocket direction will not be the normal vector of the sketch but the given vector, see [Options](#Options).
* Údaje**Direction** (`Vector`): Vector of the pocket direction if Údaje**Use Custom Vector** is used.
* Údaje**Reference Axis** (`LinkSub`)
* Údaje**Along Sketch Normal** (`Bool`): If *true*, the pocket length is measured along the sketch normal. Otherwise and if Údaje**Use Custom Vector** is used, it is measured along the custom direction.
* Údaje**Up To Face** (`LinkSub`): A face the pocket will extrude up to, see [Options](#Options).
* Údaje**Offset** (`Length`)
* Údaje**Taper Angle** (`Angle`)
* Údaje**Taper Angle2** (`Angle`)

Sketch Based

* Údaje**Profile** (`LinkSub`)
* Údaje**Midplane** (`Bool`)
* Údaje**Reversed** (`Bool`)
* Údaje**Allow Multi Face** (`Bool`)

## Limitations

## Omezení

* Použijte **Rozměr** nebo **Skrz vše** kdykoliv je to možné, protože s ostatními typy jsou někdy problémy, když jsou vzorkovány
* Jinak objekt kapsa má stejná [omezení](/PartDesign_Pad/cs#Limitations "PartDesign Pad/cs") jako objekt Deska.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pocket/cs&oldid=1485499>"