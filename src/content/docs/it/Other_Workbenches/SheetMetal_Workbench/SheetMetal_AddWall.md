---
title: SheetMetal Piega (Bend)
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| Piega                                                            |
| Posizione nel menu                                               |
| SheetMetal → Add Bend                                            |
| Ambiente                                                         |
| [SheetMetal](/SheetMetal_Workbench/it "SheetMetal Workbench/it") |
| Avvio veloce                                                     |
| None                                                             |
| Introdotto nella versione                                        |
| -                                                                |
| Vedere anche                                                     |
| _Nessuno_                                                        |
|                                                                  |

## Descrizione

Lo strumento di piegatura di SheetMetal ![](/images/SheetMetal_Bend.svg) crea una piega sul bordo selezionato.

![](/images/PostBend.png)

A **flange** consists of a 90° cylindrical bend and a planar strip (wall).

![](/images/SheetMetal_AddWall-12.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-13.png)

Two selected edges → two flanges

Resetting the Dati**angle** property to about 180° in a second step will create a **hem** instead.

![](/images/SheetMetal_AddWall-14.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-15.png)

Two selected edges → two hems

## Utilizzo

Per aggiungere una piega:

1. Passare nell'ambiente ![](/images/Sheetmetal_workbench_icon.svg) SheetMetal.
2. Iniziare con una lastra di base o un foglio, selezionare uno o più bordi che devono ricevere una piega.
3. Cliccare sullo strumento ![](/images/SheetMetal_Bend.svg) **Bend** per aggiungere una piega.

### Task panel

A [Task panel](/Task_panel "Task panel") with four tabs was introduced in 0.6.00

Double-click an existing Bend object in the [Tree view](/Tree_view "Tree view") to re-open the Task panel and edit the parameters.

#### General

![](/images/SheetMetal_AddWall-Task1.png)

- Select: Changes the amount of edges in the **base Object** property.
- **Length**: Sets the **length** property.
- ![](/images/Invert_On.svg) Reverse the wall: Toggles the **invert** property.
- **Length mode**: Sets the **Length Spec** property.
- **Bend radius**: Sets the **radius** property.
- **Bend angle**: Sets the **angle** property.
- ![](/images/FaceSelection_On.svg) Face reference: Toggles the **Angle Face Ref Mode** property.

  : If activated, it switches the **Bend angle** option to read-only mode and displays two further options:

  - **Reference**: Awaits a face to be selected in the 3d view and links it to the **Angle Face Reference** property.
  - **Relative angle**: Sets the **Relative Angle To Ref** property and also the **angle** property..

- **Unfold**: Toggles the **unfold** property.

#### Offsets

![](/images/SheetMetal_AddWall-Task2.png)

- **Gap A**: Sets the **gap1** property.
- **Gap B**: Sets the **gap2** property.
- **Extend A**: Sets the **extend1** property.
- **Extend B**: Toggles the **extend2** property.
- **Rectangle** and **Round** radio buttons: Toggle **Relief Type** property.
- **Width**: Sets the **reliefw** property.
- **Depth**: Toggles the **reliefd** property.

#### Miter

![](/images/SheetMetal_AddWall-Task3.png)

- **Auto Miter**: Toggles the **Auto Miter** property.

  : If checked:

  - **Minimum Gap**: Sets the **minGap** property.
  - **Max Extend Distance**: Sets the **max Extend Dist** property.

  : If unchecked:

  - **Angle 1**: sets the **miteralgle1** property.
  - **Angle 2**: sets the **miteralgle2** property.

#### Perforation

![](/images/SheetMetal_AddWall-Task4.png)

- **Perforate**: Toggles the **Perforate** property.

  : If checked:

  - **Angle**: Sets the **Perforation Angle** property.
  - **Initial Cut Length**: Sets the **Perforation Initial Length** property.
  - **Max Cut Length**: Sets the **Perforation Max Length** property.
  - **Max Tab Length**: Sets the **Nonperforation Max Length** property.

## Notes

_Nota_: questo ambiente non dispone di uno strumento per creare una piastra di base, quindi è necessario avviare il modello con uno dei seguenti metodi:

: _ Metodo 1: ![](/images/Part_Box.svg) [Cubo di Part](/Part_Box/it "Part Box/it")
_ Metodo 2: Un solido estruso realizzato con ![](/images/Part_Extrude.svg) [Estrudi di Part](/Part_Extrude/it "Part Extrude/it") da un:

    - ![](/images/Draft_Rectangle.svg) [Rettangolo di Draft](/Draft_Rectangle/it "Draft Rectangle/it") o una
        - ![](/images/Draft_Wire.svg) [Polilinea di Draft](/Draft_Wire/it "Draft Wire/it") o uno
        - ![](/images/Sketcher_NewSketch.svg) [Schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it")
        * Usare ![](/images/Part_Thickness.svg) [Spessore di Part](/Part_Thickness/it "Part Thickness/it") per creare un solido (*Tipicamente con il valore dello spessore della lamiera.*)

    * Metodo 3: ![](/images/PartDesign_Body.svg) [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") contenente un

    - ![](/images/PartDesign_AdditiveBox.svg) [cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it") o un
        - ![](/images/PartDesign_Pad.svg) [pad](/PartDesign_Pad/it "PartDesign Pad/it") prodotto da uno ![](/images/Sketcher_NewSketch.svg) [schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it").
        * Usare ![](/images/Part_Thickness.svg) [Spessore di Part](/Part_Thickness/it "Part Thickness/it") per creare un solido (*Tipicamente con il valore dello spessore della lamiera.*)

Alternatively a base plate (blank) can be created with commands from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") or ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

To create a blank with the [Part Workbench](/Part_Workbench "Part Workbench"):

1. Create a solid using either:
   - ![](/images/Part_Box.svg) [Part Box](/Part_Box "Part Box").
   - ![](/images/Part_Extrude.svg) [Part Extrude](/Part_Extrude "Part Extrude") from:
     - A ![](/images/Draft_Rectangle.svg) [Draft Rectangle](/Draft_Rectangle "Draft Rectangle").
     - A ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire").
     - A ![](/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch").
2. Make sure one the dimensions of the Box or the extrusion distance equals the sheet metal thickness.

To create a blank with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"):

1. Create a solid using either:
   - ![](/images/PartDesign_AdditiveBox.svg) [Additive Box](/PartDesign_AdditiveBox "PartDesign AdditiveBox").
   - ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") from a ![](/images/Sketcher_NewSketch.svg) [Sketch](/Sketcher_NewSketch "Sketcher NewSketch").
2. Make sure one the dimensions of the Box or the Dati**Length** property of the Pad equals the sheet metal thickness.

: : Se si inizia con un ![](/images/PartDesign_Body.svg) Corpo di PartDesign, è possibile combinare funzioni di Sheet Metal con funzioni di PartDesign come ![](/images/PartDesign_Pocket.svg) [tasche](/PartDesign_Pocket/it "PartDesign Pocket/it") o ![](/images/PartDesign_Hole.svg) [fori](/PartDesign_Hole/it "PartDesign Hole/it").

## Proprietà

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Bend object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Dati

Parameters

- Dati**angle**: Angolo di piega.
- Dati**extend1**: Estende il lato sinistro.
- Dati**extend2**: Estende il lato destro.
- Dati**gap1**: Distanza sul lato sinistro del lembo piegato dall'angolo della forma base.
- Dati**gap2**: Distanza dall'angolo dal lato destro.
- Dati**invert**: Inverte la direzione della piega.
- Dati**length**: Lunghezza della parte piegata .
- Dati**miterangle1**: Piega con un angolo di mitra sul lato sinistro.
- Dati**miterangle2**: Piega con un angolo di mitra sul lato destro.
- Dati**radius**: Raggio di curvatura della piega.
- Dati**relief Type**: Gole di scarico Rettangolari o arrotondate. Abilitato solo quando è impostato un valore di gap.
- Dati**reliefd**: Profondità della gola di scarico. Abilitata solo quando è impostato un valore di gap.
- Dati**reliefw**: Larghezza della gola di scarico. Abilitata solo quando è impostato un valore di gap.
- Dati**kfactor**: Fattore K (noto anche come fattore neutro) per la curva. Utilizzato per calcolare la tolleranza di piegatura durante lo sviluppo.
- Dati**unfold**: False (predefinito) o True. Se è vero, dispiega la curva.

Parameters Ex

- Dati**Angle Face Ref Mode** (`Bool`): "Enable face reference for angle". Default: `true`. introduced in 0.7.11
- Dati**Angle Face Referene** (`LinkSub`): "Face reference for angle". Default: `true`. introduced in 0.7.11
- Dati**Auto Miter** (`Bool`): "Enable Auto Miter". Default: `true`.
- Dati**Offset Face Ref Mode** (`Bool`): "Enable face reference for offset". Default: `true`. introduced in 0.7.11
- Dati **Offset Face Reference** (`LinkSub`): "Face reference for offset". Default: `true`. introduced in 0.7.11
- Dati**Offset Type** (`Enumeration`): "Offset Type". introduced in 0.7.11

  : Values: `Material Outside`, `Material Inside` (default), `Thickness Outside`, `Offset`.

- Dati**Offset Type Offset** (`Distance`): "Works when offset face reference is on. It offsets by a normal distance from the offset reference face". Default: `0.00`. introduced in 0.7.11
- Dati**Relative Angle To Ref** (`Angle`): "Relative angle to the face reference". Default: `0.00`. introduced in 0.7.11
- Dati**Suppl Angle Ref** (`Bool`): "Supplementary angle reference". Default: `true`. introduced in 0.7.11
- Dati**kfactor** (`FloatConstraint`): "Location of Neutral Line. Caution: Using ANSI standards, not DIN.".  
   Default: `0,50`. K factor (also known as neutral factor) for the bend. Used to calculate bend allowance when unfolding.
- Dati**max Extend Dist** (`Length`): "Auto Miter maximum Extend Distance". Default: `5,00 mm`.
- Dati**min Gap** (`Length`): "Auto Miter Minimum Gap". Default: `0,20 mm`.
- Dati**min Relief Gap** (`Length`): "Minimum Gap to Relief Cut". Default: `1,00 mm`.
- Dati**offset** (`Distance`): "Offset Bend". Default: `0,00 mm`.
- Dati**unfold** (`Bool`): "Shows Unfold View of Current Bend". Default: `false`  
   `true` unfolds the bend.

Parameters Ex2

- Dati**Sketch** (`Link`): "Sketch Object".
- Dati**sketchflip** (`Bool`): "Flip Sketch Direction". Default: `false`.
- Dati**sketchinvert** (`Bool`): "Invert Sketch Start". Default: `false`.

Parameters Ex3

- Dati**Length List** (`FloatList`): "Length of Wall List". Default: `[10.00]`.
- Dati**bend AList** (`FloatList`): "Bend Angle List". Default: `[90.00]`.

Parameters Miterangle

- Dati**miterangle1** (`Angle`): "Bend Miter Angle from Left Side". Default angle: `0,00°`.
- Dati**miterangle2** (`Angle`): "Bend Miter Angle from Right Side". Default angle: `0,00°`.

Parameters Perforation

- Dati**Nonperforation Max Length** (`Length`): "Non-Perforation Max Length". Default: `5 mm`.
- Dati**Perforate** (`Bool`): "Enable perforation". Default: `false`.
- Dati**Perforation Angle** (`Angle`): "Perforation Angle". Default: `0 °`.
- Dati**Perforation initial Length** (`Length`): "Initial Perforation Length". Default: `5 mm`.
- Dati**Perforation Max Length** (`Length`): "Perforation Max Length". Default: `5 mm`.

Parameters Relief

- Dati**Relief Factor** (`Float`): "Relief Factor". Default: `0,70`.
- Dati**Use Relief Factor** (`Bool`): "Use Relief Factor". Default: `false`.
- Dati**relief Type** (`Enumeration`): "Relief Type". `Rectangle` (default), `Round`. Enabled only when a gap value is set.
- Dati**reliefd** (`Length`): "Relief Depth". Default: `1,00 mm`. Enabled only when a gap value is set.
- Dati**reliefw** (`Length`): "Relief Width". Default: `0,80 mm`. Enabled only when a gap value is set.

## Example

![](/images/SheetMetal_AddWall-01.png)

A simple tray

### Preparation

This tray is made of a rectangular blank with walls added to its outline edges.
And so one outline sketch for the blank has to be prepared in advance.

![](/images/SheetMetal_AddWall-02.png)

Just a rectangular outline

### Workflow

1. Create a blank
   1. Select the outline sketch  
      ![](/images/SheetMetal_AddWall-03.png)
   2. Press the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") button  
      or use the keyboard shortcut: C then F  
      ![](/images/SheetMetal_AddWall-04.png)  
      (The blank is padded in z direction
2. Add walls to the outline edges
   1. Select the blank's **outline edges**  
      ![](/images/SheetMetal_AddWall-05.png)
   2. Press the ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall") button  
      or use the keyboard shortcut: W  
      ![](/images/SheetMetal_AddWall-06.png)
   3. If the fold is 90° down set the value of **invert** property to true to reverse the direction (and **length** to a lower value for smaller walls)  
      ![](/images/SheetMetal_AddWall-01.png)
3. Add some more walls
   1. Select the tray's **upper outside edges**  
      ![](/images/SheetMetal_AddWall-08.png)
   2. Press the ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall") button  
      or use the keyboard shortcut: W  
      ![](/images/SheetMetal_AddWall-09.png)
   3. The walls are a bit too long (but nicely trimmed) and so the **length** property has to be set to a lower value  
      ![](/images/SheetMetal_AddWall-10.png)
   4. If you like the folds swing outward set the **invert** value to true  
      ![](/images/SheetMetal_AddWall-11.png)

Done!

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddWall/it&oldid=1546752>"
