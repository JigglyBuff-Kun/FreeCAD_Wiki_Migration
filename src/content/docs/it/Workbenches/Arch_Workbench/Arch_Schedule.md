---
title: Arch Scheda
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                  |
| ------------------------------------------------ |
| Scheda                                           |
| Posizione nel menu                               |
| Arch → Scheda                                    |
| Ambiente                                         |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")   |
| Avvio veloce                                     |
| _Nessuno_                                        |
| Introdotto nella versione                        |
| -                                                |
| Vedere anche                                     |
| [Arredo](/Arch_Equipment/it "Arch Equipment/it") |
|                                                  |

## Descrizione

Lo strumento Scheda consente di creare e compilare automaticamente un [foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") con contenuti prelevati dal modello.

Per una soluzione più generale, consultare il [Reporting Workbench](https://github.com/furti/FreeCAD-Reporting/tree/master) nell'elenco degli [ambienti esterni](/External_workbenches/it "External workbenches/it"). Questo ambiente utilizza la sintassi SQL per estrarre informazioni dal documento.

## Utilizzo

1. Aprire o creare un documento di FreeCAD con alcuni oggetti.
2. Premere il pulsante ![](/images/Arch_Schedule.svg) Scheda
3. Regolare le opzioni desiderate.
4. Premere OK.

## Flusso di lavoro

In primo luogo è necessario disporre di un modello. Ad esempio, ecco un documento con un paio di oggetti Arch, ma sono supportati anche altri oggetti.

![](/images/Arch_schedule_example01.jpg)

Poi premere il pulsante ![](/images/Arch_Schedule.svg) Scheda. Si ottiene un pannello delle Azioni come questo. È piuttosto ampio, quindi può essere necessario allargarlo.

![](/images/ArchSchedule.png)

Poi si può riempire riga per riga. Ogni riga è una "query" e restituisce una riga nel foglio di calcolo. Premere il pulsante **Aggiungi** per aggiungere una nuova riga e fare doppio clic su ciascuna cella di quella riga per inserire i valori. Il pulsante **Del** cancella la riga che contiene una cella selezionata, e **Clear** elimina tutte le righe. I valori che è possibile mettere nelle colonne sono:

- **Description**: Una descrizione per questa query. La colonna Descrizione è la prima colonna del foglio di calcolo risultante. Nella descrizione è obbligatorio avere una query rappresentata. Se si lascia la cella descrizione vuota, l'intera riga viene saltata e lasciata vuota nel foglio di calcolo. Ciò consente di aggiungere delle righe "separatrici".
- **Property**: Questa è la query reale che si desidera eseguire su tutti gli oggetti selezionati. Possono esserci due termini: la parola `count` o una proprietà dell'oggetto:
  - Se si inserisce `count` (o `Count` o `COUNT`, non si fa distinzione tra maiuscole e minuscole) gli oggetti selezionati verranno semplicemente conteggiati.
  - Se si immette una proprietà di un oggetto, verrà recuperato e sommato il valore di questa proprietà per ciascuno degli oggetti selezionati. Gli oggetti che non hanno tale proprietà verranno ignorati. Utilizza la notazione punto per riferirti al caso delle proprietà: `PropertyOfObject.PropertyOfProperty1.PropertyOfProperty2`. Se la proprietà prima del primo punto inizia con una lettera minuscola verrà considerata un riferimento all'oggetto stesso e verrà ignorata. Inserire ad esempio `object.Shape.Volume` equivale a inserire `Shape.Volume`.
- **Unit**: un'unità opzionale in cui esprimere i risultati. Sta all'utente fornire un'unità che corrisponda alla query che si sta facendo, ad esempio, se si stanno recuperando volumi, si dovrebbe utilizzare un'unità di volume, come `m^3`. Se si usa un'unità sbagliata, ad es. cm, si otterranno risultati errati.
- **Objects**: si può lasciare vuoto, quindi verranno considerati da questa query tutti gli oggetti del documento, oppure si può fornire un elenco di nomi di oggetti (non etichette) separati da punto e virgola (;). Se uno qualsiasi degli oggetti in questo elenco è un gruppo, verranno selezionati anche i suoi figli. Quindi il modo più semplice per utilizzare questa funzionalità è raggruppare gli oggetti in modo significativo nel documento e fornire qui semplicemente un nome al gruppo. Si può anche utilizzare il pulsante Aggiungi la selezione per aggiungere oggetti attualmente selezionati nel documento. È necessario utilizzare nomi interni in questa posizione. Per selezionare gli oggetti in base alla loro etichetta, lasciare questa colonna vuota e utilizzare invece la colonna Filtro.
- **Filter**: Qui è possibile aggiungere un elenco di filtri separati da punti e virgola `;`. Ogni filtro è scritto nella forma: `property:value`. È possibile utilizzare solo proprietà che contengono un valore stringa. Sia la proprietà che il valore non fanno distinzione tra maiuscole e minuscole. L'`value` può essere tralasciato ma non l'`:`. Per gestire correttamente le schede create con versioni precedenti di Scheda la proprietà `type` verrà tradotta nella proprietà `ifctype`. È consigliabile non utilizzare `type` nelle nuove pianificazioni.

: Per esempio:

    :   `label:floor1;ifctype:window` manterrà solo gli oggetti che hanno "floor1" nel loro Dati**Label** e "window" nel loro Dati**IFC Type**. Verrà inclusa una finestra con Dati**Label** "Floor1-AA" e Dati**IFC Type** "Window Standard Case".
    :   `label:door` Manterrà solo gli oggetti che hanno "door" nella loro Dati**Label**.
    :   `!label:door` Manterrà solo gli oggetti che non hanno "door" nella loro Dati**Label**.
    :   `ifctype:structural` Manterrà solo gli oggetti che hanno "structural" nel loro Dati**IFC Type**.
    :   `!ifctype:something` Manterrà solo gli oggetti che non hanno "structural" nel loro Dati**IFC Type** o che non hanno la proprietà Dati**IFC Type**.
    :   `!ifctype:` Manterrà solo gli oggetti che non hanno la proprietà Dati**IFC Type**.

Example filter queries

| Query                         | Description                                                                                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label:floor1;ifctype:window` | Will retain only objects that have "floor1" in their Dati**Label** and "window" in their Dati**IFC Type**. A window with the Dati**Label** "Floor1-AA" and the Dati**IFC Type** "Window Standard Case" will be included. |
| `label:door`                  | Will retain only objects that have "door" in their Dati**Label**                                                                                                                                                         |
| `!label:door`                 | Will retain only objects that do not have "door" in their Dati**Label**                                                                                                                                                  |
| `ifctype:structural`          | Will retain only objects that have "structural" in their Dati**IFC Type**                                                                                                                                                |
| `!ifctype:something`          | Will retain only objects that do not have "structural" in their Dati**IFC Type** or that do not have the Dati**IFC Type** property                                                                                       |
| `!ifctype:`                   | Will retain only objects that do not have the Dati**IFC Type** property                                                                                                                                                  |

Il pulsante Importa permette di costruire questa lista in un altro foglio di calcolo, e importarla qui come file CSV.

Quindi si può costruire una lista di query di questo tipo:

![](/images/ArchScheduleExample.png)

Dopo di che, premendo OK, al documento viene aggiunto un nuovo oggetto Scheda che contiene un foglio di calcolo con i risultati:

![](/images/Arch_schedule_example04.jpg)

Facendo doppio clic sull'oggetto Scheda, si ritorna al pannello delle Azioni e si può modificare i valori. Facendo doppio clic sul Foglio di calcolo, si ottengono i risultati nelle 3 colonne: la descrizione, il valore e l'unità (se applicabile):

![](/images/Arch_schedule_example05.jpg)

Dall'ambiente Spreadsheet il foglio di calcolo può quindi essere esportato normalmente in formato CSV.

## Proprietà dinamiche

È possibile aggiungere le proprie proprietà agli oggetti. Queste sono chiamate [Proprietà dinamiche](/Property_editor/it#Azioni "Property editor/it"). Se sono stati aggiunti con l'opzione **Prefisso nome gruppo** selezionata, i loro nomi inizieranno effettivamente con il nome del gruppo, ma questo prefisso non verrà visualizzato nell'[Editor delle proprietà](/Property_editor/it "Property editor/it"). I loro nomi hanno questa forma: `NameOfGroup_NameOfProperty`. Per farvi riferimento in una pianificazione è necessario utilizzare questo nome completo.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Schedule/it&oldid=1486335>"
