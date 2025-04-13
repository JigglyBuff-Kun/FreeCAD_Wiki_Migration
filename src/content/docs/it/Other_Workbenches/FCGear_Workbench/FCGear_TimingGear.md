---
title: FCGear Puleggia per cinghia dentata
---

|                                                      |
| ---------------------------------------------------- |
| Puleggia per cinghia dentata                         |
| Posizione nel menu                                   |
| Gear → Timing Gear                                   |
| Ambiente                                             |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it") |
| Avvio veloce                                         |
| None                                                 |
| Introdotto nella versione                            |
| v0.16                                                |
| Vedere anche                                         |
| _Nessuno_                                            |
|                                                      |

## Descrizione

Lo scopo degli ingranaggi di distribuzione è quello di consentire all'albero a camme e all'albero motore di far ruotare la catena di distribuzione. L'albero motore gira per muovere i pistoni su e giù all'interno dei cilindri. L'albero a camme ruota per consentire l'apertura e la chiusura delle valvole di aspirazione e di scarico sui cilindri. Questi componenti sono importanti per la corretta sincronizzazione del motore.

Gli ingranaggi di distribuzione sono collegati a una cinghia o catena di distribuzione.

![](/images/Timing-Gear_example.png)

Sopra: puleggia per cinghia dentata

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_TimingGear.svg) Timing Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_TimingGear.svg) Timing Gear** dal menu.
3. Modificare il parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

Un oggetto FCGear TimingGear deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") ed eredita tutte le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

base

- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della larghezza dell'ingranaggio.
- Dati**teeth** (`Integer`): L'impostazione predefinita è `15`. Numero di denti.
- Dati**type** (`Enumeration`): L'impostazione predefinita è `gt2`. Tipo di ingranaggio – passo del profilo per cinghie di distribuzione (vedere [Note](#Note)).

computed

- Dati**h** (`Length`): (sola lettura) Altezza radiale dei denti.
- Dati**offset** (`Length`): (sola lettura) Offset X del punto medio del secondo arco.
- Dati**pitch** (`Length`): (sola lettura) Passo dell'ingranaggio.
- Dati**r0** (`Length`): (sola lettura) Raggio del primo arco.
- Dati**r1** (`Length`): (sola lettura) Raggio del secondo arco.
- Dati**rs** (`Length`): (sola lettura) Raggio del terzo arco.
- Dati**u** (`Length`): (sola lettura) Differenza radiale tra passo… diametro e testa dell'ingranaggio.

version

- Dati**version** (`String`):

## Note

- _type_: Il passo delle cinghie dentate (distanza dal centro del dente al centro del dente di denti consecutivi) è specificato in tipi. GT2 ha un passo di 2 mm, GT3 di 3 mm, GT5 di 5 mm ecc..

## Formule utili

- _addendum diameter_ = _pitch diameter_ + 2 \* _module_
- _belt length_ = 2 \* _axle base_ + *belt tooth pitch* : 2 \* _(teeth 1 + 2)_ + *belt tooth pitch²* : 4 \* pi² \* _axle base_ \* _(teeth 1 - 2)²_
- _axle base_ = *belt length* : 4 - *belt tooth pitch* : 8 \* _(teeth 1+2)_ + ¼ \* sqrt [*belt length* - ½ \* *belt tooth pitch* \* *(teeth 1+2)²* - 2 \* *belt tooth pitch²* \* *(teeth 1+2)²* : pi²]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_TimingGear/it&oldid=1424066>"
