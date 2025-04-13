---
title: Ambiente Spreadsheet
---

![](/images/Workbench_Spreadsheet.svg)

L'icona dell'ambiente Spreadsheet

## Introduzione

L'AmbienteSpreadsheet ![](/images/Workbench_Spreadsheet.svg) consente di creare e modificare fogli di calcolo, utilizzare i dati del foglio di calcolo come parametri in un modello, riempire il foglio di calcolo con i dati ricavati da un modello, eseguire calcoli ed esportare i dati in altre applicazioni di fogli di calcolo come LibreOffice o Microsoft Excel.

![](/images/Spreadsheet_screenshot.jpg)

Un foglio di calcolo con alcune celle compilate con testo e quantità

## Strumenti

- ![](/images/Spreadsheet_CreateSheet.svg) [Crea un foglio di calcolo](/Spreadsheet_CreateSheet/it "Spreadsheet CreateSheet/it"): crea un nuovo foglio di calcolo.

- ![](/images/Spreadsheet_Import.svg) [Importa](/Spreadsheet_Import/it "Spreadsheet Import/it"): importa un file CSV in un foglio di calcolo.

- ![](/images/Spreadsheet_Export.svg) [Esporta](/Spreadsheet_Export "Spreadsheet Export"): esporta un file CSV da un foglio di calcolo.

- ![](/images/Spreadsheet_MergeCells.svg) [Unisci celle](/Spreadsheet_MergeCells/it "Spreadsheet MergeCells/it"): unisce le celle selezionate.

- ![](/images/Spreadsheet_SplitCell.svg) [Dividi celle](/Spreadsheet_SplitCell/it "Spreadsheet SplitCell/it"): divide le celle precedentemente unite.

- ![](/images/Spreadsheet_AlignLeft.svg) [Allinea a sinistra](/Spreadsheet_AlignLeft/it "Spreadsheet AlignLeft/it"): allinea il contenuto delle celle selezionate a sinistra.

- ![](/images/Spreadsheet_AlignCenter.svg) [Allinea al centro](/Spreadsheet_AlignCenter/it "Spreadsheet AlignCenter/it"): allinea il contenuto delle celle selezionate al centro orizzontalmente.

- ![](/images/Spreadsheet_AlignRight.svg) [Allinea a destra](/Spreadsheet_AlignRight/it "Spreadsheet AlignRight/it"): allinea il contenuto delle celle selezionate a destra.

- ![](/images/Spreadsheet_AlignTop.svg) [Allinea in alto](/Spreadsheet_AlignTop/it "Spreadsheet AlignTop/it"): allinea il contenuto delle celle selezionate in alto.

- ![](/images/Spreadsheet_AlignVCenter.svg) [Allinea verticalmente in centro](/Spreadsheet_AlignVCenter/it "Spreadsheet AlignVCenter/it"): allinea verticalmente il contenuto delle celle selezionate al centro.

- ![](/images/Spreadsheet_AlignBottom.svg) [Allinea in basso](/Spreadsheet_AlignBottom/it "Spreadsheet AlignBottom/it"): allinea in basso il contenuto delle celle selezionate.

- ![](/images/Spreadsheet_StyleBold.svg) [Stile grassetto](/Spreadsheet_StyleBold/it "Spreadsheet StyleBold/it"): commuta il contenuto delle celle selezionate in/da grassetto.

- ![](/images/Spreadsheet_StyleItalic.svg) [Stile corsivo](/Spreadsheet_StyleItalic/it "Spreadsheet StyleItalic/it"): commuta il contenuto delle celle selezionate in/da corsivo.

- ![](/images/Spreadsheet_StyleUnderline.svg) [Stile sottolineato](/Spreadsheet_StyleUnderline/it "Spreadsheet StyleUnderline/it"): commuta il contenuto delle celle selezionate in/da sottolineato.

- ![](/images/Spreadsheet_SetAlias.svg) [Alias](/Spreadsheet_SetAlias/it "Spreadsheet SetAlias/it"): imposta l'alias per la cella selezionata.

* Nero e Bianco impostano i colori di primo piano e di sfondo delle celle selezionate.

## Preferenze

- ![](/images/Preferences-spreadsheet.svg) [Preferenze](/Spreadsheet_Preferences/it "Spreadsheet Preferences/it"): le preferenze per l'Ambiente Spreadsheet. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Rimuovere le celle può essere pericoloso

Tieni presente che la cancellazione o rimozione di celle con dati può danneggiare il foglio di calcolo e il modello se si basa sul foglio di calcolo. Non sei pre avvisato se ciò accade.

## Inserisci e rimuovi righe e colonne

È possibile inserire o rimuovere righe e colonne facendo clic con il pulsante destro del mouse sull'intestazione di una riga o di una colonna e selezionando l'opzione appropriata dal menu contestuale. È possibile selezionare prima più righe o colonne. Tenendo premuto il tasto Ctrl durante la selezione delle intestazioni, oppure tenendo premuto il pulsante sinistro del mouse e trascinando.

## Modifica delle celle

Il contenuto di una cella può essere modificato selezionando la cella e inserendo un valore nella casella di input **Content** nella parte superiore della finestra. Per modificare una cella sul posto, selezionarla e premere F2 o fare doppio clic su di essa.

## Eliminare le celle

Per eliminare una o più celle selezionarle e premere Canc. Ciò eliminerà il loro contenuto, le loro proprietà e i loro alias. Per eliminare solo il contenuto di una cella, è necessario modificarla.

## Taglia e copia-incolla le celle

Le operazioni di taglia e copia-incolla possono essere utilizzate sulle celle nei fogli di calcolo. Puoi utilizzare le normali scorciatoie per queste operazioni: Ctrl+X, Ctrl+C e Ctrl+ V rispettivamente. Per selezionare più celle, tieni premuto il tasto Ctrl durante la selezione oppure tieni premuto il pulsante sinistro del mouse e trascina per selezionare un intervallo di celle rettangolari.

Le operazioni di taglio e copia memorizzano il contenuto, le proprietà e gli alias delle celle negli Appunti. L'operazione di incollaggio scrive i dati in modo tale che il contenuto della cella in alto a sinistra dei dati archiviati venga rilasciato nella cella attiva. L'altro contenuto memorizzato viene posizionato rispetto a quella cella. Le formule vengono aggiornate di conseguenza. Gli alias vengono incollati solo se sono univoci

### Proprietà delle celle

Le proprietà di una cella del foglio possono essere modificate cliccando col tasto destro su una cella and selezionando **Proprietà...** dal menu contestuale. Si apre la seguente finestra:

![](/images/SpreadsheetCellPropDialog.png)

Come indicato dalle schede, è possibile modificare le seguenti proprietà:

- Color: Colore del testo e colore di sfondo
- Alignment: Allineamento orizzontale e verticale del testo
- Style: Stile del testo: grassetto, corsivo, sottolineato
- Units: Mostra le unità di misura per questa cella. Per favore leggi la sezione [Unità di misura](#Unità_di_misura) sottostante.
- Alias: Definisce un nome [alias](/Spreadsheet_SetAlias/it "Spreadsheet SetAlias/it") per questa cella. Questo alias può essere utilizzato nelle formule della cella e in generale anche nelle [espressioni](/Expressions/it "Expressions/it"); per maggiori informazioni guarda la sezione [Espressioni nelle celle](#Espressioni_nelle_celle) .

## Espressioni nelle celle

Una cella di un foglio di calcolo può contenere un numero, un testo o un'espressione. Le espressioni devono iniziare con un segno di uguale '='.

Le espressioni inserite nelle celle possono contenere numeri, funzioni, riferimenti ad altre celle e riferimenti alle proprietà del modello (Ma vedere sotto le [Limitazioni attuali](#Limitazioni_attuali)). Le celle sono referenziate dalla loro colonna (lettera maiuscola) e riga (numero). Una cella può essere referenziata dal suo indirizzo (lettera della colonna MAIUSCOLA + numero di riga, es. B4) o dal suo [alias](/Spreadsheet_SetAlias/it "Spreadsheet SetAlias/it").

Le espressioni inserite nelle celle sono trattate da FreeCAD come codice di programmazione. Pertanto, quando modifichi una cella il contenuto che vedi potrebbe non seguire le tue impostazioni di visualizzazione:

- Il separatore dei decimali è sempre un punto. Ma le virgole possono essere utilizzate anche quando si immettono valori.
- Il numero di decimali visualizzati può differire dalle tue [impostazioni](/Preferences_Editor/it#Unità "Preferences Editor/it").

I riferimenti agli oggetti nel modello sono spiegati in seguito in [Riferimento ai dati CAD](#Riferimento_ai_dati_CAD). L'utilizzo dei valori delle celle del foglio di calcolo per definire le proprietà del modello è spiegato in seguito in [Dati del foglio di calcolo nelle espressioni](#Dati_dei_fogli_di_calcolo_nelle_espressioni). Per ulteriori informazioni sulle espressioni e sulle funzioni dipsonibili, consultare la pagina [Espressioni](/Expressions/it "Expressions/it").

## Interazione tra fogli di calcolo e modello CAD

I dati nelle celle di un foglio di calcolo possono essere utilizzati nelle espressioni dei parametri del modello CAD. Pertanto, un foglio di calcolo può essere utilizzato come origine per i valori dei parametri utilizzati in un modello, raccogliendo efficacemente i valori in un'unica posizione. Quando i valori vengono modificati nel foglio di calcolo, le modifiche si propagano nel modello.

Allo stesso modo, le proprietà degli oggetti del modello CAD possono essere utilizzate nelle espressioni nelle celle del foglio di calcolo. Ciò consente l'uso di proprietà dell'oggetto, come il volume o l'area, nel foglio di calcolo. Se nel modello CAD viene cambiato il nome di un oggetto, la modifica viene automaticamente propagata a qualsiasi riferimento nelle espressioni del foglio di calcolo utilizzando il nome che è stato modificato.

In un documento si possono utilizzare più fogli di calcolo. Un foglio di calcolo può essere identificato tramite sia il suo nome che la sua etichetta.

FreeCAD assegna automaticamente un nome univoco ad un foglio di calcolo quando questo viene creato. Questi nome seguono il modello `Spreadsheet`, `Spreadsheet001`, `Spreadsheet002` e così via. Il nome non può essere modificato e non è visibile nelle proprietà del foglio di calcolo. Può essere utilizzato per fare riferimento al foglio di calcolo in un [Espressione](/Expressions/it "Expressions/it") (vedere [Dati del foglio di calcolo nelle espressioni](#Dati_dei_fogli_di_calcolo_nelle_espressioni) di seguito).

L'etichetta di un foglio di calcolo viene automaticamente impostata sul nome del foglio di calcolo al momento della creazione. A differenza del nome, l'etichetta può essere modificata, ad esempio nel pannello delle proprietà o utilizzando l'azione del menu contestuale Rinomina. Per impostazione predefinita, FreeCAD non accetta etichette duplicate, ma esiste una [preferenza](/Preferences_Editor/it#Documento "Preferences Editor/it") per sovrascriverlo. I fogli di calcolo con etichette duplicate nello stesso documento non possono essere referenziati con la loro etichetta.

FreeCAD verifica le dipendenze cicliche. Vedere [Limitazioni attuali](#Limitazioni_attuali).

### Riferimento ai dati CAD

Come indicato sopra, è possibile fare riferimento ai dati del modello CAD nelle espressioni del foglio di calcolo.

La tabella seguente mostra alcuni esempi assumendo che il modello abbia una figura denominata "MyCube":

| Dati CAD                                  | Chiamata nel foglio di calcolo | Risultato                              |
| ----------------------------------------- | ------------------------------ | -------------------------------------- |
| Lunghezza parametrica di un Cubo di Part  | `=MyCube.Length`               | Lunghezza in mm                        |
| Volume del Cubo                           | `=MyCube.Shape.Volume`         | Volume in mm³ senza unità              |
| Tipo di forma del Cubo                    | `=MyCube.Shape.ShapeType`      | Stringa: Solid                         |
| Etichetta del Cubo                        | `=MyCube.Label`                | Stringa: Cube                          |
| coordinata x del centro di massa del Cubo | `=MyCube.Shape.CenterOfMass.x` | coordinata in mm senza unità di misura |

### Dati dei fogli di calcolo nelle espressioni

Per utilizzare i dati del foglio di calcolo in altre parti di FreeCAD, di solito creerai un [Espressione](/Expressions/it#Espressioni "Expressions/it") che si riferisce al foglio di calcolo e alla cella che contiene i dati che desideri utilizzare. Puoi identificare i fogli di calcolo per nome o per etichetta e puoi identificare le celle per posizione o per alias. Il completamento automatico è disponibile per tutti i tipi di riferimento.

|                     | Foglio di calcolo per nome | Foglio di calcolo per etichetta |
| ------------------- | -------------------------- | ------------------------------- |
| Cella per Posizione | `=Spreadsheet042.B5`       | `=<<MySpreadsheet>>.B5`         |
| Cella per Alias     | `=Spreadsheet042.MyAlias`  | `=<<MySpreadsheet>>.MyAlias`    |

Il modo consigliato per fare riferimento ai dati del foglio di calcolo è utilizzare l'etichetta del foglio di calcolo e il nome dell'alias della cella. Per una spiegazione più approfondita dei pro e dei contro delle modalità di riferimento, vedere la sezione espansa di seguito.

L'utilizzo dell'etichetta del foglio di calcolo ha il vantaggio che può essere liberamente modificata per descrivere il contenuto del foglio di calcolo. È anche più semplice identificare il foglio di calcolo in uso poiché il testo nell'espressione corrisponde all'etichetta mostrata nelle viste del modello e delle proprietà. Se decidi di modificare l'etichetta di un foglio di lavoro, i riferimenti esistenti ai contenuti del foglio di lavoro verranno aggiornati, in modo da non interrompere le tue espressioni rinominando il foglio di lavoro. Il nome interno del foglio di calcolo non è immediatamente disponibile da nessuna parte tranne che nell'editor delle espressioni, quindi se utilizzi il nome interno e successivamente decidi di rinominare i fogli di calcolo, potresti avere difficoltà a risalire alla fonte dei dati dell'espressione.

Tieni presente che quando crei un nuovo foglio di lavoro, il nome e l'etichetta sono gli stessi, quindi è facile utilizzare accidentalmente il nome del foglio di lavoro invece dell'etichetta. Un modo semplice per evitarlo è dare al foglio di calcolo un nome significativo prima di iniziare a usarlo nelle espressioni.

Sebbene sia possibile utilizzare il numero di riga e di colonna in un'espressione per fare riferimento a una cella, è consigliabile assegnare alla cella un nome alias e utilizzarlo. Vedi [Proprietà delle celle](#Proprietà_delle_celle) sopra per informazioni su come impostare l'alias. Ad esempio, se i dati nella cella B1 contenessero il parametro di lunghezza per un oggetto, un nome alias di `MyObject_Length` consentirebbe di fare riferimento al valore come `<<MyParams>> .MyObject_Length` invece di `Spreadsheet.B1`. Oltre ad essere molto più facili da leggere e capire, i nomi alias sono anche molto più facili da modificare se decidi di modificare la struttura del tuo foglio di calcolo. L'uso di un alias ha anche il vantaggio che è più facile vedere quali celle vengono utilizzate per controllare altre parti del documento. Nota che FreeCAD regola automaticamente i riferimenti posizionali nelle espressioni se inserisci o rimuovi righe e colonne nel foglio di calcolo, quindi anche se usi numeri di riga e di colonna in un'espressione, puoi inserire righe e colonne senza interrompere i riferimenti alle celle circostanti.

### Modelli complessi e ricalcoli

La modifica di un foglio di calcolo attiverà un ricalcolo del modello 3D, anche se le modifiche non influiscono sul modello. Per un modello complesso un ricalcolo può richiedere molto tempo e dover attendere dopo ogni singola modifica è ovviamente piuttosto fastidioso.

Ci sono tre soluzioni per affrontare questo problema:

1. Salta temporaneamente i ricalcoli:
   - Nella [Vista ad albero](/Tree_view/it "Tree view/it") fai clic con il tasto destro del mouse sul documento ![](/images/Document.svg) che contiene il foglio di calcolo.
   - Selezionare l'opzione **Salta il ricalcolo** dal menu contestuale.
   - C'è un grosso svantaggio in questa soluzione. I nuovi valori immessi nel foglio di calcolo non verranno visualizzati finché il documento non viene ricalcolato. Viene invece mostrato `#PENDING`.
   - Puoi ricalcolare manualmente, usando il comando [Modifica: Aggiorna](/Std_Refresh/it "Std Refresh/it"), o disabilitare **Salta il ricalcolo** quando hai finito di modificare.
2. Usare una macro per saltare automaticamente i ricalcoli durante la modifica di un foglio di calcolo:
   - Scarica ed esegui [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
   - Questa soluzione consente di risparmiare alcuni passaggi rispetto alla prima soluzione, ma presenta anche lo svantaggio menzionato.
3. Mettere il ​​foglio di calcolo in un file [FreeCAD](/File_Format_FCStd/it "File Format FCStd/it") separato:
   - Puoi fare riferimento ai dati di un foglio di calcolo da un file .FCStd esterno con questa sintassi: `= NameOfFile#<<MySpreadsheet>>.MyAlias​​`.
   - Il vantaggio di avere il foglio di calcolo in un altro file rispetto alla disattivazione dei ricalcoli è che il foglio di calcolo stesso viene ricalcolato.
   - Lo svantaggio è che il modello non verrà ricalcolato automaticamente dopo le modifiche al foglio di calcolo.
   - Nello scenario in cui apri prima il file "foglio di calcolo", modifichi uno o più valori e quindi apri il file "modello", non ci sarà alcuna indicazione che il modello debba essere ricalcolato. Tuttavia, se entrambi i file sono aperti, l'icona [Aggiorna](/Std_Refresh/it "Std Refresh/it") aggiornerà correttamente il file "modello" dopo le modifiche al file "foglio di calcolo".

## Unità di misura

Il foglio di calcolo ha il concetto dimensione (unità di misura) associata ai valori delle celle.
Un numero inserito senza un'unità associata non ha dimensione.
L'unità di misura deve essere immessa immediatamente dopo il valore numerico, senza spazio intermedio.
Se un numero ha un'unità di misura associata, quell'unità sarà utilizzata in tutti i calcoli.
Ad esempio, la moltiplicazione di due lunghezze con l'unità mm fornisce un'area con l'unità in mm².

Se una cella contiene un valore che rappresenta una dimensione, esso deve essere inserito con la relativa unità associata. Anche se molti casi semplici possono essere gestiti con un valore adimensionale, è sconsigliato non inserire l'unità. Se un valore che rappresenta una dimensione viene inserito senza la relativa unità associata, alcune sequenze di operazioni costringono FreeCAD a segnalare l'incompatibilità delle unità in un'espressione quando sembra che dovrebbe essere convalidata. (Questo può essere compreso meglio compreso guardando [questa discussione](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) nel forum di FreeCAD).

È possibile modificare le unità visualizzate per un valore di cella utilizzando la finestra di dialogo delle [Proprietà delle celle](#Proprietà_delle_celle).
Questo non modifica il valore contenuto nella cella; converte solo il valore esistente per la visualizzazione.
Il valore utilizzato per i calcoli non cambia, ed i risultati delle formule che utilizzano il valore non cambiano.
Ad esempio, una cella contenente il valore "5.08cm" può essere visualizzata come "2in" modificando il valore della scheda delle unità su "in".

Un numero adimensionale non può essere modificato in un numero con un'unità tramite la finestra di dialogo delle proprietà della cella.
Si può inserire una stringa di unità e tale stringa verrà visualizzata; ma la cella contiene ancora un numero adimensionale. Per modificare un valore adimensionale in un valore con una dimensione, è necessario reinserire il valore stesso con l'unità associata.

Occasionalmente può essere desiderabile sbarazzarsi di una dimensione in un'espressione. Questo può essere fatto moltiplicando per 1 con un'unità reciproca.

## Importazione ed esportazione

### formato CSV

I fogli di calcolo di FreeCAD possono essere importati ed esportati nel formato [​​CSV](https://en.wikipedia.org/wiki/Comma-separated_values) che può anche essere letto e scritto dalla maggior parte delle altre applicazioni di fogli di calcolo come Microsoft Excel o LibreOffice Calc. Vedere [Importazione foglio di calcolo](/Spreadsheet_Import/it "Spreadsheet Import/it") e [Esportazione foglio di lavoro](/Spreadsheet_Export/it "Spreadsheet Export/it") per ulteriori informazioni.

### formato XLSX

I fogli di calcolo in formato Excel XLSX possono essere importati con il comando [Importa](/Std_Import/it "Std Import/it") o col comando [Apri](/Std_Open/it "Std Open/it"). Sono supportate le seguenti funzionalità:

- Tutte le funzioni che sono disponibili anche nel foglio di calcolo FreeCAD. Le altre funzioni danno un errore nella cella corrispondente dopo l'importazione.
- I nomi alias per le celle.
- Più di un foglio nei fogli di calcolo Excel. In questo caso viene creato un foglio di calcolo di FreeCAD per ogni foglio di Excel.

Le altre funzionalità non vengono importate nel foglio di calcolo di FreeCAD.

## Stampa

Per gestire l'impostazione della pagina necessaria per la stampa, i fogli di calcolo di FreeCAD vengono stampati inserendoli in una [Vista foglio di calcolo di TechDraw](/TechDraw_SpreadsheetView/it "TechDraw SpreadsheetView/it").

## Limitazioni attuali

FreeCAD verifica le dipendenze cicliche quando ricalcola.
Per come è concepita, tale verifica si arresta al livello dell'oggetto foglio di calcolo.
Di conseguenza, non si dovrebbe avere un foglio di calcolo che contiene contemporaneamente le celle i cui valori sono utilizzati per specificare parametri nel modello e sia celle i cui valori utilizzano l'output del modello.
Ad esempio, non è possibile avere celle che specificano la lunghezza, la larghezza e l'altezza di un oggetto e un'altra cella che fa riferimento al volume totale della forma risultante.
Questa limitazione può essere superata creando due fogli di calcolo:
uno utilizzato come origine dati per i parametri di input per il modello
e l'altro usato per il risultato dei calcoli basati sui dati geometrici.

## Collegare celle

[disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

È possibile collegare il contenuto delle celle ad altre celle del foglio di calcolo. Questo può essere utile quando si hanno a che fare con tabelle di grandi dimensioni o per ottenere il contenuto della cella da un altro foglio di calcolo.

### Creare collegamenti

Per collegare, ad esempio, l'intervallo di celle A3-C4 all'intervallo di celle B1-D2:

1. Seleziona l'intervallo di celle A3-C4.
2. Fare clic con il pulsante destro del mouse e selezionare **Collega...** dal menu contestuale.
3. Viene visualizzata la finestra di dialogo **Associa celle foglio di calcolo**.
4. Imposta l'intervallo B1-D2 per **Alle celle**:
   ![](/images/Spreadsheet_binding-dialog.png)
5. Clicca OK.
6. Le celle legate hanno un bordo blu per evidenziare il legame.
7. Se ora inserisci qualcosa nella cella C1, lo stesso apparirà immediatamente nella cella B3.

![](/images/Spreadsheet_binding-result.png)

Il foglio di calcolo ora potrebbe assomigliare a questo

### Modificare il collegamento

1. Fare clic con il pulsante destro del mouse su una cella associata (non è necessario evidenziare l'intero intervallo delimitato) e selezionare **Collega...** dal menu contestuale.
2. Si apre la finestra di dialogo **Associa celle foglio di calcolo**.
3. Modifica una o più opzioni. Si noti che le **Celle collegate**, nell'intervallo di celle associate, non possono essere modificate.
4. Premi OK.

### Rimuovi collegamento

1. Fare clic con il pulsante destro del mouse su una cella associata (non è necessario evidenziare l'intero intervallo delimitato) e selezionare **Collega...** dal menu contestuale.
2. Si apre la finestra di dialogo **Associa celle foglio di calcolo**.
3. Premi Scollega.

### Note

- L'opzione **Hide dependency of binding** può essere utilizzata per prevenire problemi con dipendenze cicliche tra fogli di calcolo. E necessario selezionarlo quando, ad esempio, le celle in _Foglio di calcolo A_ sono collegate nel _Foglio di calcolo B_, mentre le celle in _Foglio di calcolo B_, a loro volta, sono collegate ad altre celle nel _Foglio di calcolo A_. Questa opzione deve essere utilizzata con cautela:
  - Nascondere le dipendenze può essere pericoloso perché le dipendenze interrotte possono danneggiare il tuo file FreeCAD. Ad esempio, quando elimini un foglio di calcolo non verrai avvisato delle dipendenze nascoste.
  - Quando apri un documento con un foglio di calcolo contenente una dipendenza nascosta, il foglio di calcolo verrà contrassegnato per essere ricalcolato. Questo perché una dipendenza ciclica non può essere ricalcolata automaticamente. Per ricalcolare è necessario utilizzare lo strumento [Agggiorna](/Std_Refresh "Std Refresh").
- L'associazione delle celle ha un controllo dell'intervallo e ti avverte di intervalli non corrispondenti. Ad esempio, legare 1x3 celle a 3x2 celle non può funzionare perché non si sa quali 3 celle delle 6 celle originali dovrebbero essere utilizzate.
- Non è possibile modificare l'intervallo di celle di un collegamento esistente. Devi prima separare le celle e quindi creare un nuovo collegamento.
- Non è ancora possibile modificare il colore della cornice che evidenzia il collegamento.

## Tabelle di configurazione

[disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

È possibile utilizzare i fogli di calcolo per creare tabelle di configurazione con insiemi di parametri predefiniti per il modello e quindi modificare dinamicamente la configurazione da utilizzare. Vedere il tutorial [Tabelle di configurazione](/index.php?title=Configuration_Tables/it&action=edit&redlink=1 "Configuration Tables/it (page does not exist)"). Leggere [questo post del forum](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183) se si vuol conoscere di più sul funzionamento interno di questa funzione.

## Script

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet", "MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set("A1", "10mm")
sheet.recompute()
sheet.get("A1")

sheet.setAlias("B1", "Diameter")
sheet.set("Diameter", "20mm")
sheet.recompute()
sheet.get("Diameter")

# sheet.get() results in an error if the cell is empty.
# sheet.getContents() can be used to check the cell first.
if sheet.getContents("C1"):
    print(sheet.get("C1"))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_Workbench/it&oldid=1507820>"
