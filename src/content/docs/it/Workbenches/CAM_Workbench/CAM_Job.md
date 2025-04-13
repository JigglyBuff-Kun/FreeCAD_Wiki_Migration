---
title: Path Lavorazione
---
|  |
| --- |
| Lavorazione |
| Posizione nel menu |
| Path → Lavorazione |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| P F |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento Lavorazione (Job) crea un nuovo oggetto Lavorazione nel documento attivo. Esso contiene le seguenti informazioni:

1. Un elenco di definizioni dei parametri degli utensili (Tool-Controller), che specifica la geometria, i movimenti e le velocità degli utensili per le Operazioni Path.
2. Un elenco sequenziale del flusso di lavoro delle Operazioni Path.
3. Un corpo base: un clone utilizzato per l'offset.
4. Un Pezzo (Stock), che rappresenta la materia prima che verrà fresata nell'ambiente Path.
5. Un foglio di lavorazione (SetupSheet), contenente gli input utilizzati dalle operazioni percorso, inclusi valori statici e le formule.
6. I parametri di configurazione che specificano il percorso di destinazione, il nome e l'estensione del file G-Code prodotto dalla lavorazione, nonché il Postprocessore utilizzato per generare il dialetto appropriato per il controller CNC di destinazione e i parametri per personalizzare Unità, Cambi di utensile, Soste, ecc.

## Utilizzo

1. Richiamare il comando Lavorazione utilizzando uno dei seguenti metodi:
   * Premere il pulsante ![](/images/Path_Job.svg) [Lavorazione](/Path_Job/it "Path Job/it") nella barra degli strumenti.
   * Utilizzare la scorciatoia da tastiera P quindi F.
   * Usare la voce **Path → Lavorazione** del menu principale.

La finestra di dialogo della GUI della lavorazione ha cinque schede allineate orizzontalmente: **General**, **Output**, **Setup**, **Tools**, e **Workplan**. L'utente può in qualsiasi momento utilizzare le opzioni OK o Annulla nella finestra di dialogo.

## General

![](/images/Job_1.jpg)

* **Label**: L'etichetta della lavorazione come visualizzata nella vista ad albero.
* **Model**: L'oggetto base che tramite la sua forma definisce i percorsi della lavorazione. Se si tratta di un oggetto Part Design, solitamente è il corpo che si seleziona qui. Se nell'albero c'è un elemento selezionato prima di fare clic sull'icona "Aggiungi lavorazione" quell'elemento è già stato inserito qui. È possibile cambiarlo selezionando un elemento diverso dal menu a discesa.
* **Description**: Qui è possibile aggiungere alcune note alla lavorazione. Le note sono solo informative e non hanno alcun effetto sul percorso.

## Output

![](/images/Job_2.jpg)

* **Output File**: Imposta il nome, l'estensione e il percorso del file dell'output di G-Code. È possibile utilizzare i seguenti segnaposto:
  + **%D** directory del documento attivo
  + **%d** nome del documento attivo (senza estensione)
  + **%M** directory macro utente
  + **%j** nome della lavorazione

* **Processor**: Selezionare il postprocessore per la propria macchina.
* **Arguments**: Aggiungere gli argomenti di cui il postprocessore ha bisogno.

## Setup

![](/images/Job_3.jpg)

* **Stock**: imposta la dimensione e la forma del pezzo grezzo.
* **Orientation**: il bordo o la faccia selezionati vengono usati per orientare di conseguenza la base o il pezzo grezzo.
* **Alignment**: selezionare un vertice per impostare l'origine o spostare la base o il pezzo grezzo.

## Utensili

![](/images/Job_4.jpg)

Aggiunge gli utensili necessari per le operazioni di questa lavorazione dalla [Tabella utensili](/Path_ToolLibraryEdit/it "Path ToolLibraryEdit/it").

Dopo aver aggiunto uno strumento, è possibile impostare o modificare l'avanzamento e la velocità del mandrino se in questa lavorazione è necessario un avanzamento diverso.
Le modifiche apportate qui non modificano i parametri memorizzati nella tabella.

Lo strumento predefinito può essere eliminato se è stato aggiunto un proprio strumento.

## Flusso di lavoro

![](/images/Job_5.jpg)

Se si dispone di una lavorazione composta da più operazioni percorso, è possibile determinare in quale ordine eseguire le operazioni.
Per riordinare, selezionare un'operazione e premere il pulsante su o giù.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Job/it&oldid=1386462>"