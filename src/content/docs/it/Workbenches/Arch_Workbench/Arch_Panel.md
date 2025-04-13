---
title: Arch Pannello
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| Arch Panel                                                                                                               |
| Menu location                                                                                                            |
| Arch → Strumenti pannello → Pannello                                                                                     |
| Workbenches                                                                                                              |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                           |
| Default shortcut                                                                                                         |
| P A                                                                                                                      |
| Introduced in version                                                                                                    |
| 0.15                                                                                                                     |
| See also                                                                                                                 |
| [Sagoma pannello](/Arch_Panel_Cut/it "Arch Panel Cut/it"), [Foglio pannello](/Arch_Panel_Sheet/it "Arch Panel Sheet/it") |
|                                                                                                                          |

## Descrizione

Questo strumento consente di creare tutti i tipi di elementi simil-pannelli, in genere per le costruzioni di pannelli come nei progetti [WikiHouse](http://www.wikihouse.cc/), ma anche per tutti i tipi di oggetti che si basano su un profilo piatto.

![](/images/Arch_Panel_example.jpg)

_L'immagine precedente mostra una serie di oggetti pannello, semplicemente ottenuti da profili 2D importati da un file DXF. Possono essere ruotati e assemblati per creare strutture._

Dalla versione 0.17, il Pannello Arch può anche essere usato per creare dei profili ondulati o trapezoidali:

![](/images/Arch_panel_wave.jpg)

## Utilizzo

- Selezionare una forma 2D (oggetto di Draft, faccia o schizzo) - opzionale.
- Premere il pulsante ![](/images/Arch_Panel.svg) Pannello, oppure premere i tasti P e A.
- Regolare le proprietà come desiderate.

### Limitazioni

- Attualmente non esiste un sistema automatico per creare tagli 2D nei fogli usando oggetti pannello, ma tale caratteristica è prevista e sarà aggiunta in futuro.

## Opzioni

- Gli elementi Pannello condividono le proprietà e i comportamenti comuni di tutti i [Componenti Arch](/Arch_Component/it "Arch Component/it").
- Lo spessore di un pannello può essere regolato dopo la creazione.
- Premere il tasto Esc o Cancel per uscire dal corrente comando.
- Facendo doppio click sul pannello nella vista ad albero dopo che è stato creato consente di entrare in modalità modifica e accedere alla modifica delle sue addizioni e sottrazioni.
- È possibile creare automaticamente dei pannelli composti da più fogli di materiale, incrementando la sua proprietà Sheets (fogli).
- I Pannelli possono utilizzare i ![](/images/Arch_MultiMaterial.svg) [Multi-Materiali](/Arch_MultiMaterial/it "Arch MultiMaterial/it"). Quando si utilizza un multi-materiale, il pannello diventa multistrato, utilizzando gli spessori specificati nel multi-materiale. A qualsiasi strato con uno spessore pari a zero viene assegnato lo spessore definito automaticamente dallo spazio rimanente definito dal valore dello spessore del pannello meno gli altri strati.

## Proprietà

An Arch Panel object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

- Dati**Length**: La lunghezza del pannello
- Dati**Width**: La larghezza del pannello
- Dati**Thickness**: Lo spessore del pannello
- Dati**Area**: L'area del pannello (automatica)
- Dati**Sheets**: Il numero di fogli di materiale che compongono il pannello
- Dati**Wave Length**: La lunghezza d'onda per pannelli ondulati
- Dati**Wave Height**: L'altezza dell'onda per pannelli ondulati
- Dati**Wave Type**: Il tipo di onda per pannelli ondulati, curvi, trapezoidali o triangolari
- Dati**Wave Direction**: L'orientamento delle onde per pannelli ondulati
- Dati**Bottom Wave**: Se l'onda inferiore del pannello è piatta o no

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Pannello può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

- Crea un oggetto `Panel` dal `baseobj` dato, che è un profilo chiuso, e l'estrusione `thickness` data.
  - Se non viene fornito nessun `baseobj`, si possono fornire i valori numerici per `length`, `width`, e `thickness` per creare un blocco pannello.
- Se viene fornito un `placement`, esso viene utilizzato.

Esempio:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Tutorial

- [Wikihouse porting tutorial](/Wikihouse_porting_tutorial/it "Wikihouse porting tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/it&oldid=1539693>"
