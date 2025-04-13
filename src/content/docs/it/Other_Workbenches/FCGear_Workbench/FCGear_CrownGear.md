---
title: FCGear Corona dentata
---

|                                                                              |
| ---------------------------------------------------------------------------- |
| Corona dentata                                                               |
| Posizione nel menu                                                           |
| Gear → Crown Gear                                                            |
| Ambiente                                                                     |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                         |
| Avvio veloce                                                                 |
| None                                                                         |
| Introdotto nella versione                                                    |
| v0.16                                                                        |
| Vedere anche                                                                 |
| [Ingranaggio ad evolvente](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it") |
|                                                                              |

## Descrizione

La ruota dentata ricorda una cremagliera curva a forma di anello. L'angolo di pressione diminuisce continuamente dal diametro esterno a quello interno. In questo modo la velocità periferica variabile della corona dentata viene compensata con la velocità periferica costante del pignone. I denti esterni appuntiti e i fianchi ripidi del dente sul diametro interno limitano la larghezza utile del dente. Gli ingranaggi a corona raggiungono efficienze simili agli ingranaggi cilindrici. Una corona dentata può azionare più pignoni.

Campi di applicazione noti per le corone dentate:

- Azionamenti dell'asse posteriore per auto e moto
- Meccanismo girevole per tavoli operatori
- Teste per fresatura angolare
- Sistemi di utensili motorizzati con pignoni multipli e corona dentata

![](/images/Crown-Gear_example.png)

Sopra: corona dentata

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_CrownGear.svg) Crown Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_CrownGear.svg) Crown Gear** dal menu.
3. Per default la corona dentata viene visualizzata senza denti. ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"))
4. Modificare i parametri dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).
5. Impostare la proprietà Dati**preview_mode** su `false` per visualizzare i denti (vedere [Note](#Note)).

## Proprietà

Un oggetto FCGear CrownGear deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

accuracy

- Dati**num_profiles** (`Integer`): L'impostazione predefinita è `4`. Numero di profili utilizzati per il loft.
- Dati**preview_mode** (`Bool`): il valore predefinito è `true`.

base

- Dati**height** (`Length`):L'impostazione predefinita è `2 mm`. Valore per la larghezza del dente.
- Dati**module** (`Length`): L'impostazione predefinita è `1 mm`. Il modulo è il rapporto tra il diametro di riferimento dell'ingranaggio diviso per il numero di denti (vedere [Note](#Note)).
- Dati**other_teeth** (`Integer`): L'impostazione predefinita è `15`. Numero di denti dell'ingranaggio da accoppiare (pignone) (vedere [Note](#Note)).
- Dati**teeth** (`Integer`): L'impostazione predefinita è `15`. Numero di denti.
- Dati**thickness** (`Length`): L'impostazione predefinita è `5 mm`. Altezza dalla punta del dente sul lato inferiore della corona dentata.

involute

- Dati**pressure_angle** (`Angle`): Il valore predefinito è `20 °` (vedere [Note](#Note)).

version

- Dati**version** (`String`):

## Note

- La proprietà Dati**preview_mode** è impostata su `true` per impostazione predefinita quando l'ingranaggio viene creato apparirà questo messaggio nella visualizzazione del report:

  : _Gear module: Crown gear created, preview_mode = true for improved performance. Set preview_mode property to false when ready to cut teeth._

- _modulo_: Utilizzando le linee guida ISO (Organizzazione internazionale per la standardizzazione), la dimensione del modulo è designata come l'unità che rappresenta le dimensioni dei denti degli ingranaggi. Modulo (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Se si moltiplica il Modulo per Pi, si può ottenere la dimensione (p). Il passo è la distanza tra i punti corrispondenti sui denti adiacenti.
- _other_teeth_: Su una corona dentata possono essere utilizzati più pignoni ma tutti con lo stesso numero di denti.
- _pressure_parameter_: Modificare il parametro solo se si dispone di una conoscenza sufficiente della geometria dell'ingranaggio.
- La geometria della corona dentata è determinata principalmente dalla geometria del pignone cilindrico (_other_teeth_).
- Creare un ingranaggio cilindrico con [Ingranaggio ad evolvente](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it"). Il numero di denti deve essere identico al parametro _other_teeth_ della corona dentata.
- Le regolazioni per le caratteristiche di funzionamento ottimali possono essere effettuate con i parametri dell'ingranaggio ad evolvente.

## Panoramica dell'insieme corona e ingranaggio cilindrico

![](/images/Crown-spur-gear-set_example.png)

- (1) Ingranaggio cilindrico
- (2) Corona dentata
- (3) Larghezza del dente
- (4) Diametro interno
- (5) Diametro esterno

## Formule utili

- **Inner diameter (4)**

  - _diametro interno_ = _modulo (ingranaggio cilindrico)_ \* _denti (corona dentata)_ \* *cos parametro_pressione (pignone)* : _cos parametro_pressione (corona dentata)_

- **Outer diameter (5)**
  - _diametro esterno_ = _diametro interno_ + _2x altezza (larghezza del dente della corona dentata)_

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CrownGear/it&oldid=1422037>"
