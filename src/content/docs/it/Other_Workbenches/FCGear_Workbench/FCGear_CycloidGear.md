---
title: FCGear Ingranaggio cicloidale
---

|                                                                                              |
| -------------------------------------------------------------------------------------------- |
| Ingranaggio cicloidale                                                                       |
| Posizione nel menu                                                                           |
| Gear → Cycloid Gear                                                                          |
| Ambiente                                                                                     |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                                         |
| Avvio veloce                                                                                 |
| None                                                                                         |
| Introdotto nella versione                                                                    |
| v0.16                                                                                        |
| Vedere anche                                                                                 |
| [FCGear: Ingranaggio ad evolvente esterno](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it") |
|                                                                                              |

## Descrizione

Gli ingranaggi cicloidali sono molto sensibili agli errori nell'interasse, che portano ad una variazione del rapporto di trasmissione. Per questi motivi gli ingranaggi cicloidali non si trovano quasi mai nell'ingegneria meccanica, ma vengono utilizzati solo in casi speciali come nell'industria orologiera, per le pompe a lobi o per l'azionamento di cremagliere.

![](/images/Cycloid-Gear_example_1.png)

Da sinistra a destra: ingranaggio cilindrico, ingranaggio elicoidale, ingranaggio elicoidale doppio

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_CycloidGear.svg) Cycloid Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_CycloidGear.svg) Cycloid Gear** dal menu.
3. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

### Dati

Un oggetto FCGear CycloidGear deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

accuracy

- Dati**numpoints** (`Integer`): L'impostazione predefinita è `15`. Diverso rispetto al profilo dell'evolvente. La modifica del valore può portare a risultati imprevisti.

base

- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della larghezza dell'ingranaggio.
- Dati**module** (`Length`): L'impostazione predefinita è `1 mm`. Il modulo è il rapporto tra il diametro di riferimento dell'ingranaggio diviso per il numero di denti (vedere [Note](#Note)).
- Dati**teeth** (`Integer`): il valore predefinito è `15`. Numero dei denti.

computed

- Dati**angular_backlash** (`Angle`): (sola lettura)
- Dati**dw** (`Length`): (sola lettura) Diametro primitivo di lavoro.

cycloid

- Dati**inner_diameter** (`Float`): (sola lettura) Diametro del cerchio di rotolamento dell'ipocicloide, normalizzato da Dati**module** (vedere [Note](#Note)).
- Dati**outer_diameter** (`Float`): L'impostazione predefinita è `7.5`. Diametro del cerchio di rotolamento dell'epicicloide, normalizzato da Dati**module** (vedere [Note](#Note)).

fillets

- Dati**head_fillet** (`Float`): L'impostazione predefinita è `0 mm`.
- Dati**root_fillet** (`Float`): L'impostazione predefinita è `0 mm`.

helical

- Dati**beta** (`Angle`): L'impostazione predefinita è `0 °`. Con l'angolo dell'elica β viene creato un ingranaggio elicoidale – valore positivo → senso di rotazione destra, valore negativo → senso di rotazione sinistra.
- Dati**double_helix** (`Bool`): Il valore predefinito è `false`, `true` crea un ingranaggio a doppia elica (vedere [Notes](#Notes)).

tolerance

- Dati**backlash** (`Length`): L'impostazione predefinita è `0`. Il gioco, chiamato anche aria o margine, è la distanza tra i denti di una coppia di ingranaggi.

- Dati**clearance** (`Float`): Il valore predefinito è `0,25` (vedere [Note](#Note)).
- Dati**head** (`Float`): L'impostazione predefinita è `0`. Lunghezza aggiuntiva della testa dei denti, normalizzata da Dati**module**.

version

- Dati**version** (`String`):

## Note

- Gli ingranaggi cicloidali devono sempre essere abbinati in modo speciale tra loro e generalmente non possono essere scambiati a piacimento: in una coppia di ingranaggi, il valore di _inner_diameter_ su un ingranaggio deve essere uguale a _outer_diameter_ sull'altro , e viceversa. Vedere anche le informazioni nella _rappresentazione dei parametri della cicloide_ qui di seguito.
- _clearance_: In una coppia di ingranaggi, il gioco è la distanza tra la punta del dente del primo ingranaggio e il piede del dente del secondo ingranaggio.
- _double_helix_: Per utilizzare la doppia dentatura elicoidale è necessario prima inserire l'angolo dell'elica β (_beta_) per la dentatura elicoidale.
- _module_: Secondo le linee guida ISO (Organizzazione internazionale per la standardizzazione), la dimensione del modulo è designata come l'unità che rappresenta le dimensioni dei denti degli ingranaggi. Modulo (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Se si moltiplica il Modulo per Pi, si ottiene l'Altezza (p). Il passo è la distanza tra i punti corrispondenti sui denti adiacenti.

## Casi particolari

### La linea retta come ipocicloide

Per ottenere una linea retta, diretta verso il centro, come ipocicloide, utilizzare la seguente [espressione](/index.php?title=Expressions/ot&action=edit&redlink=1 "Expressions/ot (page does not exist)") per Dati**inner_diameter**: `teeth / 2`. Una tale forma del dente si trova spesso negli orologi storici e quindi viene chiamata "dentatura dell'orologio". Un Dati**clearance** maggiore rende l'effetto ancora più visibile.

### Ipocicloide/epicicloide completo come dente

Per ottenere un ingranaggio composto da curve ipocicloide ed epicicloide complete utilizzare le seguenti [espressioni](/Expressions/it "Expressions/it"):

- Dati**inner_diameter**: `0.5 + 1e-6`
- Dati**outer_diameter**: `inner_diameter`
- Dati**clearance**: `(-1 + inner_diameter/1mm) * 2`
- Dati**head**: `(-1 + outer_diameter/1mm) * 2`

Il diametro di riferimento è _d = m \* z_, dove _m_ è Dati**module** e _z_ è Dati**teeth**.
Per un ipocicloide completo, il diametro di rotolamento deve essere _d_i = d / (z\*2) = m\*z / (z\*2)_. E se ora lo normalizziamo con il modulo, otteniamo _d_in = m\*z / (z\*2) / m = 1 / 2_. Il valore di tolleranza esplicito aggiuntivo (`1e-6` nell'espressione sopra) è necessario per superare i problemi di coincidenza.

Ora i diametri dei cerchi di rotolamento delle cicloidi devono corrispondere all'addendum/dedendum dell'ingranaggio. L'addendum, cioè la lunghezza del dente sopra il cerchio di riferimento, è 1 + Dati**head**. Il dedendum, cioè la lunghezza del dente sotto il cerchio di riferimento, è 1 + Dati**clearance**. Entrambi sono normalizzati dal modulo, quindi abbiamo bisogno di un valore di prevalenza/gioco di _1 - d_in_. L'ulteriore `/ 1mm` e `*2` sono necessari per superare i difetti già risolti nella versione di sviluppo di FCGear Workbench, ma riportare tali correzioni alla versione stabile potrebbe danneggiare i modelli esistenti.

Tali "ingranaggi" consentono il numero di denti fino a "due" e vengono utilizzati come palette rotanti nelle pompe o nei compressori (cfr. [Roots -tipo Supercharger](https://en.wikipedia.org/wiki/Roots-type_supercharger)).

### Epicicloide infinitamente grande

Se il raggio del cerchio di rotolamento dell'epicicloide diventa infinitamente grande, diventa una linea retta rotante. Un epicicloide così degenerato si chiama evolvente. Gli ingranaggi con questa forma del dente vengono gestiti dal comando [involute gear](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it"). È di gran lunga la forma di dentatura più comune ad oggi.

## Formule utili

Vedere [Formule_utili](/FCGear_InvoluteGear/it#Formule_utili "FCGear InvoluteGear/it").

## Rappresentazione dei parametri della cicloide

![](/images/CycloidGear_inner-outer-diameter_2.svg)

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidGear/it&oldid=1421217>"
