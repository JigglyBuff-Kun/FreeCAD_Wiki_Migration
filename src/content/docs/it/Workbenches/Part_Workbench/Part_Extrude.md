---
title: Part Estrudi
---
|  |
| --- |
| Part Estrudi |
| Posizione nel menu |
| Parte → Estrudi... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Taglia/estendi](/Draft_Trimex/it "Draft Trimex/it"), [PartDesign Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") |
|  |

## Descrizione

**Part Estrudi** estende una forma ad una distanza specificata, in una direzione specificata. Il tipo di forma di output varierà in base al tipo di forma di input e alle opzioni selezionate.

Di solito, secondo il tipo di forma in ingresso, si ottiene le seguente forma:

* Estrudere un Vertex (punto), produce un Edge (Linea)
* Estrudere una linea aperta (es. linea, arco), produce una faccia aperta (es. piano)
* Estrudere una linea chiusa (es. cerchio), produce a scelta una faccia chiusa (es. un fondo di un cilindro) oppure se il parametro "solid" è "true" produce un solido (es. un cilindro solido)
* Estrudere un Wire aperto (es. un Draft Wire), produce un guscio aperto (diverse facce unite)
* Estrudere un Wire chiuso (es. un Draft Wire), produce a scelta un guscio oppure se il parametro "solid" è "true" produce un solido
* Estrudere una faccia (es. piano), produce un solido (es. Cuboide)
* Estrudere una ![](/images/Draft_ShapeString.svg) [Draft Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it"), produce un composto di solidi (la stringa è un composto di lettere che sono ciascuna un solido)
* Estrudere una shell di facce, produce un Compsolid.

![](/images/Part_Extrude_demo.png)

Esempi di estrusione

## Utilizzo

1. Selezionare la forma o le forme nella [vista 3D](/3D_view/it "3D view/it") o nel modello [vista ad albero](/Tree_view/it "Tree view/it")
2. Fare clic sul pulsante ![](/images/Part_Extrude.svg) Part Estrudi nella barra degli strumenti o dal menu **Parte → Estrudi...**
3. Impostare la direzione, la lunghezza e facoltativamente altri parametri (vedere la seguente sezione [Parametri](#Parametri) per maggiori dettagli).
4. Fare clic su OK.

In alternativa, la selezione può essere fatta dopo aver avviato lo strumento, selezionando una o più forme della lista nel [pannello Azioni](/Task_panel/it "Task panel/it").

L'albero del modello elenca tanti oggetti estrusi quante erano le forme selezionate. Ogni forma di partenza è posizionata sotto il suo oggetto estrusione.

## Parametri

La forma di estrusione è definita dai seguenti parametri, che possono essere modificati dopo la sua creazione nell'[Editor delle proprietà](/Property_editor/it "Property editor/it").

* **Base**: la forma di input (la forma su cui è stata applicata Part Estrudi).

* **Dir**: la direzione in cui estendere la forma. Se **Dir Mode** è 'Custom', si può modificare **Dir**. Altrimenti, **Dir** è di sola lettura ed è calcolata dalla forma collegata.

* **Dir Link**: collegamento parametrico a un bordo (linea) che imposta la direzione dell'estrusione.

* **Dir Mode**: imposta il controllo di **Dir**. 'Custom' significa che **Dir** è modificabile. 'Edge' significa che Dir è ottenuta da un bordo (linea) collegato a **Dir Link**. 'Normal' significa che Dir è perpendicolare al piano della forma di input.

* **Length Fwd**: La lunghezza di estrusione. Se entrambi **Length Fwd** e **Length Rev** sono zero, viene utilizzata la lunghezza del vettore  *'Dir'* .

* **Length Rev**: Lunghezza aggiuntiva di estrusione in senso contrario a **Dir**.

* **Solid**: se True, l'estrusione di un bordo chiuso o di un contorno chiuso produce un solido. Se False, il risultato è un guscio.

* **Reversed**: inverte l'estrusione in senso contrario a **Dir**.

* **Symmetric**: se True, l'estrusione è centrata sulla forma di input e la lunghezza totale è **Length Fwd**. **Length Rev** viene ignorata.

* **Taper Angle** e **Taper Angle Rev**: applica un angolo all'estrusione, in modo che i lati dell'estrusione vengano disegnati secondo l'angolo specificato. Un angolo positivo significa che la sezione trasversale si espande. **Taper Angle Rev** imposta la conicità per la parte invertita dell'estrusione (la parte indicata da **Length Rev**).
  + [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it") Le strutture interne ricevono l'angolo di rastremazione opposto. Questo viene fatto per facilitare la progettazione di stampi e parti stampate.
  + versione 0.19 e precedenti L'estrusione rastremata è supportata solo per forme senza strutture interne. La rastremazione non funziona bene se la forma contiene B-spline.

* **Face Maker Class**: imposta il nome della classe C++ del codice di creazione della faccia, che viene utilizzato quando si creano dei solidi dai contorni. Questa proprietà serve principalmente per mantenere la compatibilità con le versioni precedenti. Non toccare, a meno che non si sappia esattamente cosa si sta facendo.

* **Placement**: i parametri standard di [posizionamento](/Placement/it "Placement/it").

* **Label**: etichetta da mostrare nella [vista ad albero](/Tree_view/it "Tree view/it") del modello (non disponibile nella creazione dell'estrusione).

## Pannello Azioni

![](/images/Part_Extrude_dialog.png)

* OK crea l'estrusione e chiude la finestra di dialogo.

* Close chiude il dialogo, senza fare nulla.

* Apply crea l'estrusione, ma non chiude la finestra di dialogo. È quindi possibile selezionare un'altra forma nell'elenco in basso e creare ulteriori estrusioni. Facendo clic su Applica più volte si creano molte estrusioni.

* 'Direction' pulsante di opzioni: imposta il modo in cui viene calcolata la direzione di estrusione.

* Select fare clic su di esso, quindi selezionare un bordo nella [Vista 3D](/3D_view/it "3D view/it"). Questo bordo appare nel campo di testo accanto al pulsante, nel formato "ObjectName:EdgeN". Si può anche digitare il link manualmente. I valori X, Y, Z sono riempiti secondo la direzione del bordo.

* pulsanti X, Y, Z fare clic sul pulsante X per impostare la direzione dell'estrusione sull'asse X positivo. Fare nuovamente clic per impostare l'asse X negativo.

* campi di input X, Y, Z imposta o visualizza il vettore di direzione dell'estrusione. Se entrambe le lunghezze sono pari a zero, la lunghezza di questo vettore imposta la lunghezza dell'estrusione ed i valori sono sempre espressi in mm, indipendentemente dalle preferenze dell'unità di misura.

* Length campi: impostano la lunghezza dell'estrusione. Questi campi di input hanno il supporto dell'unità di misura.

* Symmetric: distribuisce l'estrusione in entrambe le direzioni, in modo che il profilo rimanga nel mezzo.

* Taper Outward Angle: angolo positivo indica che il profilo viene espanso all'altra estremità dell'estrusione.

* Create Solid casella di controllo: se selezionata, l'estrusione di un contorno o bordo chiuso produce una faccia. Se è stato preselezionato un contorno chiuso prima di richiamare l'estrusione Part viene controllato di default.

* Shape list: qui si seleziona quali forme estrudere. Se sono selezionati più oggetti, vengono creati più oggetti di estrusione.

## Note

* Gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetti appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno possono essere utilizzati anche come profili e per specificare la direzione. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

* La finestra di dialogo delle attività non offre ancora un'anteprima. Il pulsante Applica creerà una estrusione ogni volta che si fa clic su di esso, che può essere utile come anteprima; tuttavia, l'estrusione rimarrà e ne verrà creata una ulteriore quando si farà clic su OK. [Annulla](/Std_Undo/it "Std Undo/it") può essere utile per ripulirla prima di fare clic su OK.

## Comparazione con PartDesign Estrusione

Anche [PartDesign Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") è una funzionalità di estrusione, ma presenta importanti differenze:

* Part Estrudi crea sempre una forma autonoma. PartDesign Estrusione fonde il risultato dell'estrusione con il resto del corpo.
* Part Estrudi non è importante dove si trova nell'albero del modello. PartDesign Estrusione può esistere solo all'interno di un [PartDesign Corpo](/PartDesign_Body/it "PartDesign Body/it").
* Part Estrudi può estrudere qualsiasi oggetto che abbia una geometria Part (forma [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it")), ad eccezione dei solidi e dei CompSolid.
* Part Estrudi può estrudere singole facce di altri oggetti. PartDesign Estrusione accetterà come profilo solo lo schizzo o le facce degli oggetti PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Extrude/it&oldid=1355660>"