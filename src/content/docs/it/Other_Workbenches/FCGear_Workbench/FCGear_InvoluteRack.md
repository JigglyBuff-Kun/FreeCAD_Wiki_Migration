---
title: FCGear Cremagliera
---

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| Cremagliera                                                                          |
| Posizione nel menu                                                                   |
| Gear → Involute Rack                                                                 |
| Ambiente                                                                             |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                                 |
| Avvio veloce                                                                         |
| None                                                                                 |
| Introdotto nella versione                                                            |
| v0.16                                                                                |
| Vedere anche                                                                         |
| [FCGear: Ingranaggio ad evolvente](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it") |
|                                                                                      |

## Descrizione

Le cremagliere vengono utilizzate per convertire un movimento rotatorio in un movimento lineare o viceversa. I seguenti sono esempi di alcune applicazioni:

- Una cremagliera con ingranaggio inserito in uno sbarramento di contenimento.
- Vari sistemi a cremagliera di trasporto con ingranaggi.
- Sterzo a pignone più cremagliera in un veicolo.
- Verricello a pignone e cremagliera come paranco meccanico (ad es. cric per auto).
- Azionamenti pneumatici a pignone e cremagliera utilizzati per controllare le valvole nelle tubazioni delle condotte.

![](/images/Involute-Rack_example.png)

Da sinistra a destra: ingranaggi cilindrici, ingranaggi elicoidali, ingranaggi elicoidali doppi

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_InvoluteRack.svg) Involute Rack nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_InvoluteRack.svg) Involute Rack** dal menu.
3. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

Un oggetto FCGear InvoluteRack deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") ed eredita tutte le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

base

- Dati**add_endings** (`Bool`): Se `true` (predefinito), la lunghezza totale della cremagliera è denti \* passo. Se `false`, la cremagliera inizia con un fianco dentellato.
- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della larghezza dell'ingranaggio.
- Dati**module** (`Length`): L'impostazione predefinita è `1 mm`. Il modulo è il rapporto tra il diametro di riferimento dell'ingranaggio diviso per il numero di denti (vedere [Note](#Note)).
- Dati**teeth** (`Integer`): L'impostazione predefinita è `15`. Numero di denti.
- Dati**thickness** (`Length`): L'impostazione predefinita è `5`. Altezza del piede del dente dal piano inferiore della cremagliera.

computed

- Dati**transverse_pitch** (`Length`): (sola lettura) Inclinazione nel piano trasversale (vedere [Note](#Note)).

fillets

- Dati**head_fillet** (`Float`): L'impostazione predefinita è `0 mm`.
- Dati**root_fillet** (`Float`): L'impostazione predefinita è `0 mm`.

helical

- Dati**beta** (`Angle`): L'impostazione predefinita è `0 °`. Con l'angolo dell'elica β viene creato un ingranaggio elicoidale – valore positivo → senso di rotazione destra, valore negativo → senso di rotazione sinistra.
- Dati**double_helix** (`Bool`): L'impostazione predefinita è `false`, `true` crea un ingranaggio a doppia elica (vedere [Note](#Note)).
- Dati**properties_from_tool** (`Bool`): L'impostazione predefinita è `false`. Se `true` e Dati**beta** non sono zero, i parametri dell'ingranaggio vengono ricalcolati internamente per l'ingranaggio ruotato.

involute

- Dati**pressure_angle** (`Angle`): Il valore predefinito è `20°` (vedere [Note](#Note)).

precision

- Dati**simplified** (`Bool`): L'impostazione predefinita è `false`, `true` genera una visualizzazione semplificata (senza denti).

tolerance

- Dati**clearance** (`Float`): Il valore predefinito è `0,25` (vedere [Note](#Note)).
- Dati**head** (`Float`): L'impostazione predefinita è `0`. Questo valore viene utilizzato per modificare l'altezza del dente.

version

- Dati**version** (`String`):

## Note

- _transverse_pitch_: Il valore è il risultato della moltiplicazione di _module \* pi_. Ciò significa per la cremagliera evolvente standard di FCGear: 15 (_teeth_) \* 3,14 (_transverse_pitch_) è 47,12 mm. Vedere anche _module_ più avanti.
- _clearance_: In una coppia di ingranaggi, il gioco è la distanza tra la testa del dente del primo ingranaggio e il piede del dente del secondo ingranaggio.
- _double_helix_: Per utilizzare la doppia dentatura elicoidale è necessario prima inserire l'angolo dell'elica β (_beta_) per la dentatura elicoidale.
- _module_: Utilizzando le linee guida ISO (Organizzazione internazionale per la standardizzazione), la dimensione del modulo è designata come l'unità che rappresenta le dimensioni dei denti degli ingranaggi. Modulo (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Se si moltiplica il Modulo per Pigreco, si può ottenere il Passo (p). Il passo è la distanza tra i punti corrispondenti sui denti adiacenti. Il risultato della moltiplicazione viene visualizzato in _transverse_pitch_
- _pressure_parameter_: Modificare questo parametro solo se si dispone di una conoscenza sufficiente della geometria dell'ingranaggio.

## Formule utili

Vedere [FCGear: Ingranaggio ad evolvente](/FCGear_InvoluteGear/it#Formule_utili "FCGear InvoluteGear/it").

## Script

Utilizzare la potenza di Python per automatizzare la modellazione degli ingranaggi:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteRack.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteRack/it&oldid=1419024>"
