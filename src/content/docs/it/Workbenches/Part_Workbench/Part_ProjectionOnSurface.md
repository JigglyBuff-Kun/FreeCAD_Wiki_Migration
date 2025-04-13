---
title: Part Proiezione su superficie
---

|                                                |
| ---------------------------------------------- |
| Part Proiezione su superficie                  |
| Posizione nel menu                             |
| Parte → Crea proiezione su superficie...       |
| Ambiente                                       |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| 0.19                                           |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

![](/images/Part_ProjectionOnSurface.svg) Part Proiezione su superficie viene utilizzato per proiettare una [Forma](/Shape/it "Shape/it") (shape) su una faccia di un altro oggetto; questo può essere usato per proiettare un logo o un oggetto testuale (vedasi ![](/images/Draft_ShapeString.svg) [Draft Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it")) su diverse superfici per creare effetti interessanti.

Data una [Forma](/Shape/it "Shape/it") di partenza, questo strumento può proiettare bordi, polilinee (bordi chiusi) o intere facce da essa; come risultato è possibile avere nuovi bordi, nuove polilinee, nuove facce o anche nuovi solidi estrusi che possono essere utilizzati in ![](/images/Part_Boolean.svg) [operazioni booleane](/Part_Boolean/it "Part Boolean/it") per effetti come l'incisione o lo stampaggio.

![](/images/Part_ProjectionOnSurface1.png) ![](/images/Part_ProjectionOnSurface2.png)

Proiezione di un logo su una superficie curva

## Utilizzo

1. Assicurarsi di avere almeno due oggetti nel proprio documento; l'oggetto "sorgente" che si desidera proiettare e l'oggetto "destinazione" su cui verrà effettuata la proiezione.
2. Fare clic su ![](/images/Part_ProjectionOnSurface.svg) Proiezione su superficie per avviare un [Pannello delle azioni](/Task_panel/it "Task panel/it") con varie opzioni.
3. Fare clic su Seleziona la superficie di proiezione, quindi fare clic sulla superficie "destinazione" su cui verrà creata la proiezione.
4. Quindi fare clic sul pulsante specifico per scegliere il tipo di sottoelemento che si desidera aggiungere al proprio oggetto di proiezione.
   - Aggiungi faccia: seleziona una faccia sorgente.
   - Aggiungi filo: seleziona un bordo di origine. Lo strumento estrarrà l'intero filo a cui appartiene il bordo. Ad esempio, scegliendo un singolo bordo di un poligono, verrà proiettato l'intero poligono.
   - Aggiungi bordo: seleziona un bordo di origine. Lo strumento proietterà solo il bordo selezionato.
   - Una volta premuto un pulsante, selezionare un sottoelemento nella [Vista 3D](/3D_view/it "3D view/it"). Se si desidera deselezionarlo, selezionare nuovamente lo stesso elemento.
   - Quando si è soddisfatti della selezione, premere lo stesso pulsante Aggiungi... per uscire dalla modalità di selezione.
5. Quindi fare clic sul pulsante di opzione specifico per scegliere il tipo di forma di proiezione da creare.
   - ![](/images/RadioButtonTrue.svg) Mostra tutto: mostrerà tutti i tipi di fili e bordi chiusi sulla superficie target. Se nel passaggio precedente è stato selezionato un sottoelemento "faccia", verrà mostrata un'anteprima di un oggetto solido estruso dalla proiezione, a seconda del valore di **Altezza di estrusione**.
   - ![](/images/RadioButtonTrue.svg) Mostra facce: mostrerà un'anteprima di una faccia piena sulla superficie target. Funzionerà solo se si ha selezionato un sottoelemento "faccia" nel passaggio precedente; se si ha selezionato un "filo" chiuso, verranno creati come proiezione solo i bordi (nessuna faccia); se si ha selezionato "bordi", solo questi bordi verranno creati come proiezione.
   - ![](/images/RadioButtonTrue.svg) Mostra bordi: mostrerà un'anteprima dei bordi sulla superficie target. Funzionerà se si ha aggiunto un sottoelemento "faccia", "filo" o "bordo" nel passaggio precedente; anche se si ha aggiunto una "faccia" piena, solo i bordi verranno creati come proiezione.
6. Premere il OK per completare l'operazione e produrre il nuovo oggetto di proiezione.

Note:

- La direzione della proiezione viene presa automaticamente dalla direzione della telecamera nella [Vista 3D](/3D_view/it "3D view/it") nel momento in cui viene avviato lo strumento.
- Per cambiare la direzione, spostare la telecamera e premere Ottieni la direzione corrente della fotocamera.
- In alternativa, premere i pulsanti X:, Y: o Z: per impostare la direzione di proiezione sugli assi globali principali, +X, -X, + Y, -Y, +Z o -Z.
- Tuttavia, tenere presente che la modifica della direzione della proiezione non aggiornerà automaticamente l'anteprima della proiezione; per fare ciò è necessario riselezionare la geometria premendo i pulsanti Aggiungi... e selezionando nuovamente i sottoelementi.

## Opzioni

- **Altezza estrusione**: è l'altezza della forma solida che viene creata estrudendo la faccia proiettata, dalla superficie di destinazione e lungo il negativo della direzione di proiezione. Ad esempio, se la direzione della proiezione è lungo +Y `(0, 1, 0)`, l'estrusione verrà creata nella direzione -Y `(0, -1, 0)`. Questa estrusione solida verrà creata solo se il sottoelemento selezionato era una faccia chiusa, premendo il pulsante Aggiungi faccia e scegliendo l'opzione ![](/images/RadioButtonTrue.svg) Mostra tutto.
- **Profondità solido**: è la distanza alla quale viene spostato l'oggetto di proiezione lungo la direzione di proiezione. Valori negativi sposteranno l'oggetto nella direzione opposta; ciò consente di creare una proiezione sfalsata rispetto alla superficie target.

## Limitazioni

L'algoritmo di proiezione a volte non è in grado di creare una faccia di proiezione valida. Se ciò accade, non sarà nemmeno possibile creare un'estrusione solida.

Se ciò accade:

- Controllare se la propria faccia di origine è valida; provare ad eseguire lo strumento ![](/images/Part_CheckGeometry.svg) [Controlla geometria](/Part_CheckGeometry/it "Part CheckGeometry/it") per trovare indizi.
- Controllare se la direzione di proiezione è valida. È possibile proiettare realisticamente il volto sorgente sulla superficie target? Una proiezione diritta colpirebbe la superficie? Regolare la fotocamera in modo che la faccia di origine sia davanti alla superficie di destinazione e riprovare.
- Provare ad utilizzare l'opzione ![](/images/RadioButtonTrue.svg) Mostra bordi. I bordi sono proiettati correttamente? Provare a creare una faccia con i bordi a mano.

La proiezione eseguita nell'ambiente Part non è parametrica. Se si necessita di un flusso di lavoro parametrico, consultare la pagina [classe `Projection`](https://gist.github.com/CsatiZoltan/f4fd10bf20923143ba0e0678ea1d3d61), che è un oggetto con script Python, destinato all'uso di programmazione.

## Link

- Discussione del forum: [Project faces onto bent surface](https://forum.freecadweb.org/viewtopic.php?f=9&t=33700)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ProjectionOnSurface/it&oldid=1468284>"
