---
title: Arch Foglio di pannello
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| Foglio di pannello                                                                                                                          |
| Posizione nel menu                                                                                                                          |
| Arch → Strumenti pannello → Foglio pannello                                                                                                 |
| Ambiente                                                                                                                                    |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                                              |
| Avvio veloce                                                                                                                                |
| P S                                                                                                                                         |
| Introdotto nella versione                                                                                                                   |
| 0.17                                                                                                                                        |
| Vedere anche                                                                                                                                |
| [Pannello](/Arch_Panel/it "Arch Panel/it"), [Sagoma pannello](/Arch_Panel_Cut/it "Arch Panel Cut/it"), [Nido](/Arch_Nest/it "Arch Nest/it") |
|                                                                                                                                             |

## Descrizione

Questo strumento permette di costruire un foglio 2D con un numero qualsiasi di oggetti [Sagoma di pannello](/Arch_Panel_Cut/it "Arch Panel Cut/it"), o qualsiasi altri oggetti 2D come quelli prodotti da [Draft](/Draft_Workbench/it "Draft Workbench/it") e [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"). Il Foglio pannello consiste tipicamente in un tracciato di tagli che devono essere eseguiti da una macchina CNC. Questi fogli possono poi essere esportati in un file [DXF](/Draft_DXF/it "Draft DXF/it").

![](/images/Arch_Wikihouse_03.jpg)

![](/images/Arch_Wikihouse_04.jpg)

_L'immagine sopra mostra come appaiono i Fogli pannello quando sono esportati in DXF._

## Utilizzo

1. Facoltativamente, selezionare uno o più oggetti [Sagoma pannello](/Arch_Panel_Cut/it "Arch Panel Cut/it") o qualsiasi altro oggetto 2D posizionato sul piano XY.
2. Premere il pulsante ![](/images/Arch_Panel_Sheet.svg) Foglio pannello, o premere i tasti P e poi S.
3. Regolare le proprietà desiderate.

## Opzioni

- Dopo aver creato il foglio pannello, con o senza oggetti figlio, con un doppio clic su di esso nella vista ad albero si può aggiungere o rimuovere dal foglio pannello qualsiasi altro oggetto figlio aggiungendo o rimuovendo gli oggetti dalla sua cartella Group
- Facendo doppio click sul pannello nella vista ad albero consente inoltre di spostare gli oggetti contenuti in questo foglio, o spostare il suo tag
- È possibile creare automaticamente pannelli composti da più fogli di materiale, incrementando la sua proprietà Sheets
- Fogli pannello in grado di visualizzare un margine, che è utile per garantire che ci sia sempre un certo spazio tra gli oggetti interni e il bordo del foglio
- Quando i fogli pannello vengono esportati in DXF, i contorni, i fori interni, i tag dei loro figli interni sono collocati su layer diversi, come mostrato nell'immagine sopra

## Proprietà

### Dati

- Dati**Height**: L'altezza del foglio
- Dati**Width**: La larghezza del foglio
- Dati**Fill Ratio**: La percentuale della superficie foglio che viene riempito dalle sagome (automatica)
- Dati**Tag Text**: Il testo da visualizzare
- Dati**Tag Size**: La dimensione del testo tag
- Dati**Tag Position**: La posizione del testo tag. Tenere (0,0,0) per la posizionarlo automaticamente nel centro
- Dati**Tag Rotation**: La rotazione del testo tag
- Dati**Font File**: Il carattere del testo tag
- Dati**Make Face**: Se è True, il pannello è una Part Face, altrimenti è una Part Wire
- Dati**Grain Direction**: Ciò consente di sapere la direzione principale della fibra del pannello (senso orario, 0 ° significa in alto)

### Vista

- Vista**Margin**: Un margine che può essere visualizzato all'interno del bordo del pannello
- Vista**Show Margin**: Attiva o disattiva la visualizzazione del margine
- Vista**Show Grain**: Mostra la struttura della fibra (Make Face deve essere impostata su True)

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Foglio pannello può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Sheet = makePanelSheet(panels=[], name="PanelSheet")

```

- Crea un oggetto `Sheet` dai `panels`, che sono una lista di oggetti [Pannello](/Arch_Panel/it "Arch Panel/it").

Esempio:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(500, 200)
Polygon = Draft.makePolygon(5, 750)

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2000, 400, 0)
p3 = FreeCAD.Vector(1250, 800, 0)
Wire = Draft.makeWire([p1, p2, p3], closed=True)

Panel1 = Arch.makePanel(Rect, thickness=36)
Panel2 = Arch.makePanel(Polygon, thickness=36)
Panel3 = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

Cut1 = Arch.makePanelCut(Panel1)
Cut2 = Arch.makePanelCut(Panel2)
Cut3 = Arch.makePanelCut(Panel3)
Cut1.ViewObject.LineWidth = 3
Cut2.ViewObject.LineWidth = 3
Cut3.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

Sheet = Arch.makePanelSheet([Cut1, Cut2, Cut3])

```

## Tutorial

- [Tutorial Wikihouse portabile](/Wikihouse_porting_tutorial/it "Wikihouse porting tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Sheet/it&oldid=1433140>"
