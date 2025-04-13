---
title: FCGear Ingranaggio conico
---

|                                                      |
| ---------------------------------------------------- |
| Ingranaggio conico                                   |
| Posizione nel menu                                   |
| Gear → Bevel Gear                                    |
| Ambiente                                             |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it") |
| Avvio veloce                                         |
| _Nessuno_                                            |
| Introdotto nella versione                            |
| v0.16                                                |
| Vedere anche                                         |
| _Nessuno_                                            |
|                                                      |

## Descrizione

Lo strumento ![](/images/FCGear_BevelGear.svg) FCGear BevelGear crea un ingranaggio conico di base, un oggetto solido che deve essere modificato per ottenere la forma finale corretta nei passaggi seguenti.

In parte a causa del rumore che generano, gli ingranaggi conici non vengono utilizzati così spesso come altri tipi di ingranaggi. Ma vengono ancora utilizzati in alcuni settori, come gli imballaggi alimentari e le conserve, le attrezzature per prati e giardini, macchine come trapani e frese, sistemi di compressione per il settore del gas e del petrolio e valvole di controllo del flusso.

Gli ingranaggi conici a spirale hanno denti curvi per fornire un innesto più morbido e un maggiore contatto dente a dente rispetto a un ingranaggio conico dritto. Ciò riduce le vibrazioni e il rumore. Possono essere utilizzati a velocità elevate e sono generalmente utilizzati nelle trasmissioni di motociclette e biciclette.

![](/images/Bevel-Gear_example.png)

Da sinistra a destra: ingranaggio cilindrico, ingranaggio a spirale

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_BevelGear.svg) Bevel Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_BevelGear.svg) Bevel Gear** dal menu.
3. Viene creato un oggetto BevelGear in base alle impostazioni predefinite.
4. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

Vedere anche: l'[Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto FCGear BevelGear deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

base

- Dati**height** (`Length`): L'impostazione predefinita è `5`. Valore della larghezza dell'ingranaggio conico, misurato dal cerchio primitivo.
- Dati**module** (`Length`): L'impostazione predefinita è `1`. Il modulo è il rapporto tra il diametro primitivo dell'ingranaggio diviso per il numero di denti (vedere [Note](#Note)).
- Dati**reset_origin** (`Bool`): Se `true` (predefinito) l'origine dell'ingranaggio è al centro del cerchio primitivo (parte inferiore dell'ingranaggio) (vedere [Note](#Note)).

  : Se `false` l'origine dell'ingranaggio è all'estremità del cono primitivo.

- Dati**teeth** (`Integer`): L'impostazione predefinita è `15`. Numero di denti.

computed

- Dati**angular_backlash** (`Angle`): (sola lettura)
- Dati**dw** (`Length`): (sola lettura) Diametro primitivo di lavoro.

helical

- Dati**beta** (`Angle`): il valore predefinito è `0 °`. Con l'angolo dell'elica β viene creato un ingranaggio conico elicoidale – valore positivo → senso di rotazione destra, valore negativo → senso di rotazione sinistra.

involute

- Dati**pitch_angle** (`Angle`): L'impostazione predefinita è `45 °`. Angolo di apertura del cono primitivo..

involute_parameter

- Dati**pressure_angle** (`Angle`): Il valore predefinito è `20 °` (vedere [Note](#Note)).

precision

- Dati**numpoints** (`Integer`): L'impostazione predefinita è `6`. Modifica del profilo dell'evolvente. La variazione del valore può portare a risultati imprevisti.

tolerance

- Dati**backlash** (`Length`): L'impostazione predefinita è `0`. Il gioco, chiamato anche spazio o aria, è la distanza tra i denti di una coppia di ingranaggi.
- Dati**clearance** (`Float`): Il valore predefinito è `0.1` (vedere [Note](#Note)).

version

- Dati**version** (`String`):

## Note

- _clearance_: In una coppia di ingranaggi, il gioco è la distanza tra la testa del dente del primo ingranaggio e il piede del dente del secondo ingranaggio.
- _module_: Utilizzando le linee guida ISO (Organizzazione internazionale per la standardizzazione), la dimensione del modulo è designata come l'unità che rappresenta le dimensioni dei denti degli ingranaggi. Modulo (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Se si moltiplica il Modulo per Pi, si può ottenere la Lunghezza (p). Il passo è la distanza tra i punti corrispondenti sui denti adiacenti.
- _reset_origin_: Può essere vantaggioso per scopi di montaggio che il parametro sia impostato su _false_. L'origine del corpo è quindi all'estremità del passo del cono.
- _pressure_parameter_: Modificare il parametro solo se si dispone di una conoscenza sufficiente della geometria dell'ingranaggio.

## Formule utili

- _pitch diameter_ = _module_ \* _teeth_
- _addendum diameter_ = _pitch diameter_ + 2 \* _module_ \* _cos reference cone angle_
- _tip angle 1_ = _(teeth 1 + 2)_ \* *(cos reference cone angle 1)* : _(teeth 2 - 2)_ \* _(sin reference cone angle 1)_
- _tip angle 2_ = _(teeth 2 + 2)_ \* *(cos reference cone angle 2)* : _(teeth 1 - 2)_ \* _(sin reference cone angle 2)_
- _reference cone angle 1_ = *(teeth 1)* : _(teeth 2)_
- _reference cone angle 2_ = *(teeth 2)* : _(teeth 1)_
- _axis angle total_ = _reference cone angle 1_ + _reference cone angle 2_

Angolo del cono di riferimento [TECH.]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_BevelGear/it&oldid=1453359>"
