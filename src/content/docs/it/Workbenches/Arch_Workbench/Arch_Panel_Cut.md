---
title: Arch Sagoma Pannello
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Sagoma pannello                                                                                                                                 |
| Posizione nel menu                                                                                                                              |
| Arch → Strumenti pannello → Sagoma pannello                                                                                                     |
| Ambiente                                                                                                                                        |
| [Arch](/Arch_Workbench/it "Arch Workbench/it"), [CAM](/CAM_Workbench/it "CAM Workbench/it")                                                     |
| Avvio veloce                                                                                                                                    |
| P C                                                                                                                                             |
| Introdotto nella versione                                                                                                                       |
| 0.17                                                                                                                                            |
| Vedere anche                                                                                                                                    |
| [Pannello](/Arch_Panel/it "Arch Panel/it"), [Foglio pannello](/Arch_Panel_Sheet/it "Arch Panel Sheet/it"), [Nido](/Arch_Nest/it "Arch Nest/it") |
|                                                                                                                                                 |

## Descrizione

Questo strumento crea, nel documento 3D, una vista piana, 2D di un [pannello](/Arch_Panel/it "Arch Panel/it"), da inserire in un [Foglio pannello](/Arch_Panel_Sheet/it "Arch Panel Sheet/it") o da esportare direttamente in [DXF](/Draft_DXF/it "Draft DXF/it"). Gli oggetti Sagoma pannello sono anche supportati dall'ambiente [CAM](/CAM_Workbench/it "CAM Workbench/it").

![](/images/Arch_Wikihouse_02.jpg)

## Uso

1. Selezionare uno o più oggetti [Pannello](/Arch_Panel/it "Arch Panel/it")
2. Premere il pulsante ![](/images/Arch_Panel_Cut.svg) Sagoma pannello, o premere i tasti P e poi C
3. Regolare le proprietà desiderate

## Opzioni

- Se il pannello non è piatto, ma, per esempio è ondulato il rilievo non appare nella Sagoma del pannello. Questo strumento è utile soprattutto per i pannelli piatti
- Sagoma del pannello può visualizzare un tag. Questo tag può essere una linea di testo personalizzata o può mostrare automaticamente il tag, l'etichetta o la descrizione del pannello a cui è collegato.
- Per essere utilizzato nelle lavorazioni CNC, il tag deve essere scritto con un font "appiccicoso", in cui le lettere sono semplici polilinee che la macchina possa seguire facilmente. Alla creazione, l'oggetto Sagoma del pannello utilizza automaticamente il carattere specificato in Modifica → Preferenze → Draft → Testi e Dimensioni → Default → Font ShapeString font file
- Facendo doppio click su Sagoma del pannello nella vista ad albero dopo che essa è stata creata permette di entrare nella modalità di modifica e modificare la posizione del tag
- Quando è necessario posizionare insieme diverse sagome di pannelli, Sagoma pannello può visualizzare un margine, che è utile per assicurare che tra di loro sia sempre presente un certo spazio

## Proprietà

### Dati

- Dati**Source**: L'oggetto [Pannello](/Arch_Panel/it "Arch Panel/it") mostrato da questa sagoma
- Dati**Tag Text**: Il testo da visualizzare. Può essere %tag%, %label% or %description% per visualizzare il tag del pannello o l'etichetta
- Dati**Tag Size**: La dimensione del testo tag
- Dati**Tag Position**: La posizione del testo tag. Tenere (0,0,0) per la posizionarlo automaticamente nel centro
- Dati**Tag Rotation**: La rotazione del testo tag
- Dati**Font File**: Il carattere del testo tag
- Dati**Make Face**: Se è True, il pannello è una Part Face, altrimenti è una Part Wire

### Vista

- Vista**Margin**: Un margine che può essere visualizzato all'esterno della sagoma del pannello
- Vista**Show Margin**: Attiva o disattiva la visualizzazione del margine

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Sagoma pannello può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
View = makePanelCut(panel, name="PanelView")

```

- Crea un oggetto `View` (proiezione 2D) dal `panel` esistente.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Tutorial

- [Tutorial Wikihouse portabile](/Wikihouse_porting_tutorial/it "Wikihouse porting tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/it&oldid=1437870>"
