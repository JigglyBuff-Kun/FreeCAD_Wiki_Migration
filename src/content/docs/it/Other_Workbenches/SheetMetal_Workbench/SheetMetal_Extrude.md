---
title: SheetMetal Estendi (Extrude)
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| Estendi                                                          |
| Posizione nel menu                                               |
| SheetMetal → Extrude                                             |
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

Lo strumento ![](/images/SheetMetal_Extrude.svg) Extrude estende una faccia del foglio di lamiera.

It creates a **simple extension** along the face normal of the selected edge face:

![](/images/SheetMetal_Extrude-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-02.png)

If an outline sketch is added it creates **interlocking geometry** to close a profile:

![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Three profiles with outline sketches to add → three results

## Utilizzo

### Simple Extension

Per estendere la faccia:

1. Iniziare con una piastra di base o un foglio, selezionare una faccia sottile che rappresenta lo spessore della lamiera
2. Cliccare sullo strumento ![](/images/SheetMetal_Extrude.svg) **Extrude** per estendere la faccia.

### Task panel

A [Task panel](/Task_panel "Task panel") was introduced in version 0.5.00

Double-click an existing Extend object in the [Tree view](/Tree_view "Tree view") to re-open the Task panel and edit the parameters.

![](/images/SheetMetal_Extrude-Task.png)

- Select: Changes the amount of faces in the **base Object** property.
- **Length**: Sets the **length** property.
- **Offset A**: Sets the **gap 1** property.
- **Offset B**: Sets the **gap 2** property.
- **Refine**: Toggles the **Refine** property.

### Interlocking Extension

: (Prepare a ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench") for interlocking tabs)

1. Select the edge face to be extended.
2. Invoke the command as described above.
3. Press the OK button to finish the command and close the Task panel.
4. In the [Property editor](/Property_editor "Property editor") press the ... button of the Dati**Sketch** property.
5. The Link dialog window opens.
   - Select the prepared sketch from the list
   - Press the OK button to close the dialog.
6. Set the property Dati**Use Subtraction** to `true` to create cut-outs to make room for the extensions.
7. Set the property Dati**Offset** to adjust the clearance around the extension.

![](/images/SheetMetal_Extrude-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Three profiles → position of the sketches → results without cut-outs → final results

### Notes

_Nota_: questo ambiente non dispone di uno strumento per creare una piastra di base, quindi è necessario avviare il modello con uno dei seguenti metodi:

: _ Metodo 1: ![](/images/Part_Box.svg) [Cubo di Part](/Part_Box/it "Part Box/it")
_ Metodo 2: Un solido estruso realizzato con ![](/images/Part_Extrude.svg) [Estrudi di Part](/Part_Extrude/it "Part Extrude/it") da un:

    - ![](/images/Draft_Rectangle.svg) [Rettangolo di Draft](/Draft_Rectangle/it "Draft Rectangle/it") o una
        - ![](/images/Draft_Wire.svg) [Polilinea di Draft](/Draft_Wire/it "Draft Wire/it") o uno
        - ![](/images/Sketcher_NewSketch.svg) [Schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it")

    * Metodo 3: ![](/images/PartDesign_Body.svg) [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") contenente un

    - ![](/images/PartDesign_AdditiveBox.svg) [cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it") o un
        - ![](/images/PartDesign_Pad.svg) [pad](/PartDesign_Pad/it "PartDesign Pad/it") prodotto da uno ![](/images/Sketcher_NewSketch.svg) [schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it").

: After inserting a sketch, at least one of its outlines must at least touch one opposite face or the tool will fail to create any extension or cut-out.

: Just one outline touching an opposite face is enough to create extension geometry from all outlines of the sketch.

- Each cut-out will have a cuboid shape, no matter what shape the corresponding outline sketch is.

- Shapes other than rectangles may behave little bit strange and even though the object can be unfolded, the result will not turn out as expected.

![](/images/SheetMetal_Extrude-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-08.png)

Three outline sketches and their resulting extensions: separate triangle plate with a rectangular cut-out, circle without clearance → unfold solid is split at an unexpected position

_Nota_: In un'operazione di estensione, impostare `Refine = true`.

- The extension operation with a linked sketch may fail due to coplanar issues if the face on the sketch side and the face on the opposite side are coplanar, but with opposite orientations. A small offset may help in such a case.

## Proprietà

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Extend object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Dati

Parameters

- Dati**gap1**: Distanza dal lato sinistro.
- Dati**gap2**: Distanza dal lato destro.
- Dati**length**: Lunghezza.

Parameters Ext.

- Dati**Offset** (`Distance`): "Offset for subtraction". Default: `20,00 µm`.
- Dati**Refine** (`Bool`): "Use Refine". Default: `true`.
- Dati**Sketch** (`Link`): "Wall Sketch".
- Dati**Use Subtraction** (`Bool`): "Use Subtraction". Default: `false`

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Extrude/it&oldid=1537436>"
