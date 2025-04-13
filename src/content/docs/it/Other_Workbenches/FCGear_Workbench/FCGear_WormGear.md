---
title: FCGear Vite senza fine
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| FCGear WormGear                                                                                    |
| Menu location                                                                                      |
| Gear → Worm Gear                                                                                   |
| Workbenches                                                                                        |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                                               |
| Default shortcut                                                                                   |
| None                                                                                               |
| Introduced in version                                                                              |
| v0.16                                                                                              |
| See also                                                                                           |
| [PartDesign: Ruota dentata ad evolvente](/PartDesign_InvoluteGear/it "PartDesign InvoluteGear/it") |
|                                                                                                    |

## Descrizione

La vite senza fine può essere considerata un caso speciale di ingranaggio elicoidale. Si immagini che ci sia solo un dente su un ingranaggio cilindrico. Ora si supponga di aumentare l'angolo dell'elica in modo tale che il dente si avvolga più volte attorno all'ingranaggio cilindrico prima di emergere dal lato opposto. Il risultato è la vite senza fine ad un principio.

Per una vite senza fine a principio singolo, ogni giro completo (360 gradi) della vite senza fine fa avanzare l'ingranaggio di un dente. Quindi un ingranaggio con 24 denti fornirà una riduzione di 24:1. Per una vite senza fine a più principi, la riduzione dell'ingranaggio è pari al numero di denti dell'ingranaggio, diviso per il numero di principi della vite senza fine.

Una vite senza fine può essere utilizzata solo con una ruota elicoidale. Questo si chiama trasmissione a vite senza fine con ruota elicoidale. Come altre disposizioni di ingranaggi, una trasmissione a vite senza fine può ridurre la velocità di rotazione o trasmettere una coppia maggiore. Uno dei principali vantaggi delle unità di trasmissione a vite senza fine è che possono trasferire il movimento a 90 gradi. Anche la trasmissione a vite senza fine è autobloccante.

![](/images/Worm-Gear_example.png)

Vite senza fine (N° di denti 3)

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_WormGear.svg) Worm Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_WormGear.svg) Worm Gear** dal menu.
3. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

Un oggetto FCGear WormGear deriva da un oggetto [Part Feature](/index.php?title=Part_Feature/IT&action=edit&redlink=1 "Part Feature/IT (page does not exist)") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

base

- Dati**diameter** (`Length`): Il valore predefinito è `5 mm`. Diametro primitivo.
- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della lunghezza della vite senza fine.
- Dati**module** (`Length`): L'impostazione predefinita è `1 mm`. Il modulo è il rapporto tra il diametro di riferimento dell'ingranaggio diviso per il numero di denti (vedere [Note](#Note)).
- Dati**reverse_pitch** (`Bool`): L'impostazione predefinita è `false`, `true` cambia la direzione di rotazione da destra a sinistra.
- Dati**teeth** (`Integer`): L'impostazione predefinita è `3`. Numero di denti (vedere [Note](#Note)).

computed

- Dati**beta** (`Angle`): (sola lettura) Angolo di anticipo (vedere anche le informazioni in [Note](#Note) e [Formule utili](#Formule_utili)).

involute

- Dati**pressure_angle** (`Angle`): Il valore predefinito è `20 °` (vedere [Note](#Note)).

tolerance

- Dati**clearance** (`Float`): Il valore predefinito è `0,25` (vedere [Note](#Note)).
- Dati**head** (`Float`): L'impostazione predefinita è `0`. Questo valore viene utilizzato per modificare l'altezza del dente.

version

- Dati**version** (`String`):

## Note

- _beta_: Se l'angolo della vite è inferiore a 5° si tratta di un ingranaggio autobloccante. Un tipico esempio sono i piroli di una chitarra o di un ukulele.
- _clearance_: In un ingranaggio a vite senza fine, il gioco è la distanza tra la punta del dente della vite senza fine e la radice del dente della ruota elicoidale.
- _module_: Utilizzando le linee guida ISO (Organizzazione internazionale per la standardizzazione), la dimensione del modulo è designata come l'unità che rappresenta le dimensioni dei denti degli ingranaggi. Modulo (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Se si moltiplica il Modulo per Pi, si può ottenere Lunghezza (p). Il passo è la distanza tra i punti corrispondenti sui denti adiacenti. Se si cambia il modulo, cambia anche l'angolo della vite (_beta_).
- _teeth_: Il numero di denti in una vite senza fine è chiamato numero di principi. Di conseguenza si parla di viti senza fine a un principio, a due o a multipli. In generale vengono prodotte principalmente viti senza fine ad un principio, ma in casi particolari il numero di principi può arrivare fino a quattro (a volte anche di più). Se si cambia il numero di principi, cambia anche _beta_.
- _pressure_parameter_: Modificare il parametro solo se si dispone di una conoscenza sufficiente della geometria dell'ingranaggio.

## Formule utili

- _beta (lead angle)_ = arctan (_module_ \* *teeth* : _pitchdiameter (diameter)_)
- _axial pitch_ = _pi_ \* _module_ \* _teeth_
- _beta (lead angle)_ = arctan (*axial pitch* : (_pitchdiameter (diameter)_ \* _pi_))
- _worm length_ = 4,5 \* _module_ \* _pi_

## Ruota elicoidale

La ruota elicoidale deve essere progettata manualmente. A questo scopo [FCGear InvoluteGear](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it") può essere utilizzato per una costruzione semplice. In ogni caso è richiesta una conoscenza approfondita delle tipologie di ingranaggi.

![](/images/Worm-Gear_example3.png)

Vite senza fine con ruota elicoidale

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_WormGear/it&oldid=1423962>"
