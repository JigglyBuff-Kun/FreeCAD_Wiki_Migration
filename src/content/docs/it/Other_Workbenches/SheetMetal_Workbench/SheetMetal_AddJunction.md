---
title: SheetMetal Giunzione (Junction)
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| Giunzione                                                        |
| Posizione nel menu                                               |
| SheetMetal → Junction                                            |
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

Lo strumento ![](/images/SheetMetal_Junction.svg) SheetMetal Junction.

This command is the second of three steps to convert a shell object made with the [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") into an unfoldable sheet metal object:

1. [SheetMetal AddRelief](/SheetMetal_AddRelief "SheetMetal AddRelief")
2. [SheetMetal AddJunction](/SheetMetal_AddJunction "SheetMetal AddJunction")
3. [SheetMetal AddBend](/SheetMetal_AddBend "SheetMetal AddBend")

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

: ![](/images/PostGap.png)
: Giunzione applicata all'angolo.

## Utilizzo

Per aggiungere la giunzione nel vertice di un angolo:

1. Iniziare con una piastra di base o un foglio, selezionare un vertice d'angolo a cui applicare lo scarico
2. Fare clic sullo strumento ![](/images/SheetMetal_Junction.svg) **Junction** per aggiungere un taglio di giunzione all'angolo.

![](/images/SheetMetal_ConvertShellObject-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-07.png)

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
        * Usare ![](/images/Part_Thickness.svg) [Spessore di Part](/Part_Thickness/it "Part Thickness/it") per creare un solido (*Tipicamente con il valore dello spessore della lamiera*).

: : Se si inizia con un ![](/images/PartDesign_Body.svg) Corpo di PartDesign, è possibile combinare funzioni di Sheet Metal con funzioni di PartDesign come ![](/images/PartDesign_Pocket.svg) [tasche](/PartDesign_Pocket/it "PartDesign Pocket/it") o ![](/images/PartDesign_Hole.svg) [fori](/PartDesign_Hole/it "PartDesign Hole/it").

## Proprietà

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Junction object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Dati

Parameters

- Dati**gap**: Dimensione della fessura di giunzione da aggiungere.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddJunction/it&oldid=1505516>"
