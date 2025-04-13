---
title: FCGear Ingranaggio ad evolvente interno
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                              |
| -------------------------------------------------------------------------------------------- |
| Ingranaggio ad evolvente interno                                                             |
| Posizione nel menu                                                                           |
| Gear → Internal Involute Gear                                                                |
| Ambiente                                                                                     |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                                         |
| Avvio veloce                                                                                 |
| None                                                                                         |
| Introdotto nella versione                                                                    |
| 1.0                                                                                          |
| Vedere anche                                                                                 |
| [FCGear: Ingranaggio ad evolvente esterno](/FCGear_InvoluteGear/it "FCGear InvoluteGear/it") |
|                                                                                              |

## Descrizione

![](/images/FCGear_InternalInvoluteGear-01.png)

Ingranaggi ad evolventi interni da sinistra a destra: ingranaggi cilindrici, ingranaggi elicoidali, ingranaggi elicoidali doppi

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear** dal menu.
3. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

Un oggetto FCGear InternalInvoluteGear deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") ed eredita tutte le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

accuracy

- Dati**numpoints** (`Integer`): Il valore predefinito è `6`. Modifica del profilo dell'evolvente. La modifica del valore può portare a risultati imprevisti.

base

- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della larghezza dell'ingranaggio.
- Dati**module** (`Length`): Il valore predefinito è `1 mm`. Il modulo è il rapporto tra il diametro primitivo dell'ingranaggio diviso per il numero di denti (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).
- Dati**teeth** (`Integer`): Il valore predefinito è `15`. Numero di denti (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).
- Dati**thickness** (`Length`): Il valore predefinito è `5 mm`. Spessore della parte esterna non tagliata dell'ingranaggio.

computed

- Dati**angular_backlash** (`Angle`): (sola lettura)
- Dati**da** (`Length`): (sola lettura) Diametro interno, misurato all'addendum (la testa dei denti).
- Dati**df** (`Length`): (sola lettura) Diametro di fondo, misurato al piede dei denti.
- Dati**dw** (`Length`): (sola lettura) Diametro primitivo di lavoro.
- Dati**outside_diameter** (`Length`): (sola lettura) Diametro esterno.
- Dati**transverse_pitch** (`Length`): (sola lettura) Passo nel piano di rotazione.

fillets

- Dati**head_fillet** (`Float`): Il valore predefinito è `0 mm`.
- Dati**root_fillet** (`Float`): Il valore predefinito è `0 mm`.

helical

- Dati**beta** (`Angle`): L'impostazione predefinita è `0 °`. Con l'angolo dell'elica β viene creato un ingranaggio elicoidale – valore positivo → senso di rotazione destra, valore negativo → senso di rotazione sinistra (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).
- Dati**double_helix** (`Bool`): L'impostazione predefinita è `false`, `true` crea un ingranaggio a doppia elica (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).
- Dati**properties_from_tool** (`Bool`): L'impostazione predefinita è `false`. Se `true` e Dati**beta** non è zero, i parametri dell'ingranaggio vengono ricalcolati internamente per l'ingranaggio ruotato.

involute

- Dati**pressure_angle** (`Angle`): Il valore predefinito è `20 °` (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).
- Dati**shift** (`Float`): Il valore predefinito è `0`. Genera uno spostamento del profilo positivo o negativo (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).

precision

- Dati**simple** (`Bool`): Il valore predefinito è `false`, `true` genera una visualizzazione semplificata (senza denti e col solo cilindro del diametro primitivo).

tolerance

- Dati**backlash** (`Length`): Il valore predefinito è `0 mm`. Il gioco, chiamato anche aria o spazio, è la distanza tra i denti di una coppia di ingranaggi.
- Dati**clearance** (`Float`): Il valore predefinito è `0.25` (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).
- Dati**head** (`Float`): il valore predefinito è `-0,4 mm`. Questo valore viene utilizzato per modificare l'altezza del dente.
- Dati**reversed_backlash** (`Bool`): `true` diminuzione del gioco o `false` (predefinito) aumento del gioco (vedere [Note](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it")).

version

- Dati**version** (`String`):

## Note

Vedere [Ingranaggio ad evolvente esterno](/FCGear_InvoluteGear/it#Note "FCGear InvoluteGear/it").

## Formule utili

Vedere [Ingranaggio ad evolvente esterno](/FCGear_InvoluteGear/it#Useful_formulas "FCGear InvoluteGear/it").

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InternalInvoluteGear/it&oldid=1421169>"
