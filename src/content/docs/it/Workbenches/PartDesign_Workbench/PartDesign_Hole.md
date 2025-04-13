---
title: PartDesign Foro
---
|  |
| --- |
| Foro |
| Posizione nel menu |
| Part Design → Foro |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it") |
|  |

## Descrizione

La funzione **Foro** crea uno o più fori da uno schizzo selezionato. Possono essere impostati molti parametri come filettatura (threading) e dimensioni (size), accoppiamento (fit), tipo di foro (hole type), svasato (countersink), lamato (counterbore), dritto (straight), e altro.

The centers of the circles and arcs are used to position the holes, but please note that their radii are not taken into account. The generated holes will be identical even if the radii vary.

![](/images/Countersunk_and_counterbored_holes_cross-section1.png)

Sezione longitudinale di foro svasato a sinistra e di foro lamato a destra (countersunk e counterbored).

## Utilizzo

1. Premere il pulsante ![](/images/PartDesign_Hole.svg) **Foro**.
2. Se viene trovato uno schizzo inutilizzato esistente, esso viene automaticamente utilizzato. Se viene trovato più di uno schizzo, viene visualizzato un pannello **Seleziona funzione** per effettuare una selezione. In alternativa, è possibile selezionare uno schizzo prima di avviare il comando Foro.
3. Definire i parametri del foro. Vedere le [Opzioni](#Opzioni).
4. Premere OK.

## Opzioni

![](/images/PartDesign_Hole_parameters.png)

A seconda della selezione effettuata, alcuni campi si attivano o restano disabilitati.

* **Profilo**: se impostato su *Nessuno*, non è definita nessuna informazione sulla filettatura. I profili di filettatura ISO e UTS abilitano i campi *Direzione*, *Dimensione*, *Accoppiamento* e *Classe*.
* **Filettato**: se attivato aggiunge i dati di filettatura alla funzione Foro e viene utilizzato il diametro minore del foro. Se non selezionato, il foro viene considerato non filettato e viene scelto il diametro nominale maggiore definito in "Accoppiamento".
* **Direzione**: imposta la direzione della filettatura (destra o sinistra) se *Filettato* è attivo.
* **Dimensione**: Imposta la dimensione della filettatura. Richiede che *Profilo* sia impostato su uno dei profili ISO o UTS.
* **Accoppiamento**: definisce un accoppiamento standard oppure a tenuta per i profili filettati.
* **Classe**: definisce la classe di tolleranza.
* **Diametro**: definisce il diametro del foro se il *Profilo* è impostato su *Nessuno*.
* **Profondità**: profondità del foro dal piano dello schizzo. *Quota* abilita un campo per digitare un valore. *Attraverso tutto* crea un foro che attraversa tutto il corpo.

### Forma del foro

* **Tipo**: imposta il tipo di taglio del foro: None è un foro dritto; altri tipi sono *Counterbore* (svasato), *Countersink* (lamato), *Cheesehead* (testa di formaggio), *Countersink socket screw* (vite a testa svasata) e *Cap screw* (tappo a vite).
* **Diametro**: imposta il diametro maggiore per tutti i tipi di fori eccetto che per *None*. Il valore non è modificabile se in *Profilo* è stato selezionato un profilo di filettatura.
* **Profondità**: profondità del tipo di taglio del foro dal piano dello schizzo. Il valore non è modificabile se in *Profilo* è stato selezionato un profilo di filettatura.
* **Angolato**: angolo di taglio per un foro conico. Il valore non è modificabile se in *Profilo* è stato selezionato un tipo di profilo di filettatura.

### Forma della punta

* **Tipo**: definisce la fine del foro se *Profondità* è impostato su *Dimensione*. Piatto produce un fondo piatto; Angolato imposta una punta conica.

### Varie

* **Rastremato**: imposta un angolo di conicità del foro. Il valore viene calcolato dal piano normale dello schizzo. 90 gradi imposta un foro dritto. Un valore inferiore a 90 genera un raggio del foro più piccolo nella parte inferiore; un valore superiore a 90 ingrandisce il raggio del foro nella parte inferiore.

## Proprietà

Gran parte delle proprietà dati sono le stesse di quelle mostrate nelle [Opzioni](#Opzioni).

* Dati**Label**: nome dato all'oggetto, questo nome può essere cambiato a piacere.
* Dati**Reversed**: vero o falso. Inverte la direzione di estrusione.
* Dati**Refine**: vero o falso. Se impostato su true, pulisce il solido dai bordi residui lasciati dalle funzioni. Per maggiori dettagli vedere ![](/images/Part_RefineShape.svg) [Parte → Affina forma](/Part_RefineShape/it "Part RefineShape/it").

## Limitazioni

* Lo schizzo selezionato deve contenere una o più cerchi. Il raggio dei cerchi all'interno dello schizzo non viene preso in considerazione. I fori generati saranno identici anche se i cerchi nello schizzo hanno raggi diversi.
* Per impostazione predefinita, la funzione del foro viene estrusa sotto al piano dello schizzo. Se il solido si trova sul piano XY, e lo schizzo del foro è collegato al piano XY, la funzione cerca di fare una estrusione allontandosi dal solido e apparentemente non produce alcun risultato. In tal caso, la proprietà Reversed deve essere impostata manualmente su true, oppure lo schizzo deve essere mappato sulla faccia inferiore del solido.

## Cut Type Definitions

Cut types (screw-types) are defined in [json](https://de.wikipedia.org/wiki/JavaScript_Object_Notation) files. There is a set of files distributed with FreeCAD, but users can create their own definitions. Files are searched in `<UserAppDataDir>/PartDesign/Hole`. The `UserAppDataDir` can be found by typing `App.getUserAppDataDir()` in the [Python console](/Python_console "Python console").

The file should contain:

* **name**: The name of the definition. This must be unique as it will be used as identifier in the FreeCAD UI and as internal index.
* **cut\_type**: Either `countersink` or `counterbore`.
* **thread\_type**: Either `metric` or `metricfine`.
* **angle**: The angle of a countersink (not necessary for counterbore).
* **data**: A list of sizes, consisting of:
  + **thread**: Name of thread known to FreeCAD.
  + **diameter**: The diameter of the cut.
  + **depth**: Depth of the counterbore (not necessary for countersink).

Example:

```
{
    "name": "DIN 7984",
    "cut_type": "counterbore",
    "thread_type": "metric",
    "data": [
        { "thread": "M2",   "diameter":  4.3, "depth":  1.6 },
        { "thread": "M2.5", "diameter":  5.0, "depth":  2.0 },
        …
    ]
}

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Hole/it&oldid=1570117>"