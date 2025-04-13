---
title: Arch Componente
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Componente                                     |
| Posizione nel menu                             |
| Arch → Utilità → Componente                    |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| C M                                            |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Crea un componente [Arch](/Arch_Workbench/it "Arch Workbench/it") non parametrico basato su un oggetto [Part](/Part_Workbench/it "Part Workbench/it"). Questo dà all'oggetto "basato su Part" gli stessi attributi e proprietà degli altri oggetti Arch, e permette di specificare come deve essere esportato in IFC impostando la sua proprietà Dati**Ifc Type**.

## Utilizzo

1. Selezionare un oggetto basato su [Part](/Part_Workbench/it "Part Workbench/it").
2. Invocare Componente utilizzando uno di questi metodi:
   - Premere il pulsante ![](/images/Arch_Component.svg) nella barra degli strumenti.
   - Usare la scorciatoia da tastiera C M.
   - Usare la voce Arch → Utilità → ![](/images/Arch_Component.svg) Componente del menu principale.

## Proprietà

L'oggetto Componente di Arch è anche una base condivisa da tutti gli altri oggetti Arch (![](/images/Arch_Wall.svg) [Muro](/Arch_Wall/it "Arch Wall/it"), ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it"), ecc). Pertanto alcune delle sue proprietà e comportamenti sono comuni a tutti gli oggetti Arch (tranne gli strumenti che non producono oggetti solidi, come ![](/images/Arch_SectionPlane.svg) [Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it") or ![](/images/Arch_Axis.svg) [Assi](/Arch_Axis/it "Arch Axis/it")):

### Dati

Component

- Dati**Additions** (`LinkList`): I componenti Arch hanno una proprietà di addizione, che può contenere dei riferimenti a un numero qualsiasi di altre [Forme](/Part_Workbench/it "Part Workbench/it") basate su oggetti. La forma di queste addizioni viene unita alla forma base del componente, per produrre la forma finale. Vedere le [Note](#Note).

- Dati**Axis** (`Link`): un asse o un sistema di assi opzionale su cui questo oggetto deve essere duplicato.

- **Base shape**: I Componenti di Arch sono sempre basati su una [Forma](/Part_Workbench/it "Part Workbench/it") o basati su un oggetto base. Alcuni tipi di oggetti Arch usano semplicemente la forma base così come è, altri (per esempio (![](/images/Arch_Wall.svg) [Muro](/Arch_Wall/it "Arch Wall/it")) eseguono alcune operazioni aggiuntive, ad esempio un'estrusione. Per alcuni tipi, avere un oggetto base non è obbligatorio, es. (![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it"))

- **Clone Of**: Qualsiasi componente Arch può essere un clone di un altro componente Arch dello stesso tipo (un muro può essere solo un clone di un altro muro, ecc.). L'unica eccezione è il componente Arch generico (come quello prodotto da questo comando), che può essere clone di qualsiasi altro tipo (muro, struttura, finestra, ecc.). Ciò consente di utilizzare un componente Arch generico per sovrascrivere il tipo di un altro.

- **Hi Res**: un componente Arch può utilizzare la forma di un altro oggetto come versione a risoluzione maggiore della sua. Per questo, è necessario impostare sia la proprietà Alta risoluzione sia la modalità di visualizzazione Alta risoluzione. Ciò consente, ad esempio, di creare un muro semplice e quindi di modellare ogni mattone che compone il muro, ad esempio con ![](/images/Part_Box.svg) [Box](/Part_Box/it "Part Box/it"). Quindi, usa un composto di quei mattoni come versione ad alta risoluzione del muro. La forma del muro non viene modificata aggiungendo un oggetto Hi-Res. Cambia solo la sua rappresentazione nella [vista 3D](/3D_view/it "3D view/it"), e adotta la rappresentazione nella versione ad alta risoluzione anziché la sua.

- Dati**Horizontal Area** (`Area`): l'area della proiezione di questo oggetto sul piano XY (sola lettura).

- **Material**: Tutti i componenti Arch hanno una proprietà materiale, che può contenere un [Materiale](/Arch_SetMaterial/it "Arch SetMaterial/it") o un [Multi-materiale](/Arch_MultiMaterial/it "Arch MultiMaterial/it") (non tutti i tipi di oggetto Arch supportano l'uso dei Muti-materiali). Le proprietà DiffuseColor e Transparency del materiale allegato definiscono il colore della forma e la trasparenza del componente Arch. Il materiale viene importato ed esportato in [IFC](/Arch_IFC/it "Arch IFC/it"), [OBJ](/Arch_OBJ/it "Arch OBJ/it") e [DAE](/Arch_DAE/it "Arch DAE/it").

- Dati**Move Base** (`Bool`): specifica se lo spostamento di questo oggetto sposta invece la sua base.

- **Move with Host**: Quando un componente è incorporato in un altro (ad esempio una finestra all'interno di un muro), impostando questa proprietà su True l'oggetto si muove o ruota insieme al suo oggetto ospite quando l'oggetto ospite viene spostato o ruotato usando i comandi ![](/images/Draft_Move.svg) [Sposta](/Draft_Move/it "Draft Move/it") o ![](/images/Draft_Rotate.svg) [Ruota](/Draft_Rotate/it "Draft Rotate/it") di Draft.

- Dati**Perimeter Length** (`Length`): La lunghezza del perimetro dell'area orizzontale (sola lettura).

- Dati**Standard Code** (`String`): un codice standard opzionale (OmniClass, ecc...) per questo componente.

- **Subtractions**: I componenti Arch hanno una proprietà sottrazione, che può contenere dei riferimenti a un numero qualsiasi di altre [Forme](/Part_Workbench/it "Part Workbench/it") basate su oggetti. La forma di questi oggetti viene sottratta alla forma base del componente, per produrre la forma finale.

- Dati**Vertical Area** (`Area`): l'area di tutte le facce verticali di questo oggetto (sola lettura).

IFC

- Dati (Hidden)**Ifc Data** (`Map`):

- Dati (Hidden)**Ifc Properties** (`Map`):

- **Role**: Ogni componente Arch, oltre alla funzione definita dal tipo (muro, finestra, ecc.), Ha anche una proprietà Ruolo, che può definire ulteriormente quale tipo di funzione svolge. Ad esempio, una ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it") può avere un ruolo di trave o di colonna. I componenti generici di Arch (come sonp prodotti da questo comando) possono avere qualsiasi ruolo disponibile nell'intero ambiente Arch. Il ruolo è ciò che viene utilizzato per definire il tipo di oggetto IFC da esportare quando viene [esportato in IFC](/Arch_IFC/it "Arch IFC/it").

IFC Attributes

- Dati**Description** (`String`): Tutti i componenti Arch hanno un campo Descrizione, che può contenere qualsiasi testo. Questo è utilizzato quando si [esporta in IFC](/Arch_IFC/it "Arch IFC/it").

- Dati**Global Id** (`String`):

- Dati**Object Type** (`String`):

- Dati**Predefined Type** (`Enumeration`):

- Dati**Tag** (`Enumeration`): La proprietà Tag è un altro campo di testo, che può essere utilizzato per fornire un'ulteriore identità personalizzata agli oggetti.

## Note

- Il posizionamento del componente Arch viene applicato dopo che le addizioni e le sottrazioni sono state eseguite, quindi queste vengono eseguite rispetto all'oggetto di base nella sua posizione di base. Poi il risultato viene spostato nella posizione definita dal Posizionamento.

- Gli oggetti possono essere aggiunti o rimossi negli elenchi delle Addizioni e Sottrazioni di un componente selezionando sia l'oggetto che il componente e utilizzando i comandi ![](/images/Arch_Add.svg) [Aggiungi componente](/Arch_Add/it "Arch Add/it") o ![](/images/Arch_Remove.svg) [Rimuovi componente](/Arch_Remove/it "Arch Remove/it"), o dal pannello delle azioni facendo doppio clic sul componente nella [Vista ad albero](/Tree_view/it "Tree view/it"). Il pannello delle azioni consente inoltre di verificare quale oggetto fa parte di questi elenchi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Component/it&oldid=1456063>"
