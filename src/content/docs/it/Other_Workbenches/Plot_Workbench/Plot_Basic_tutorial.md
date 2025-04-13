---
title: Guida base per il modulo Grafico
---
|  |
| --- |
| Tutorial |
| Argomento |
| Plot - Grafico |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
|  |
| Autori |
|  |
| Versione di FreeCAD |
|  |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

In questo tutorial impareremo come creare un grafico di base utilizzando il modulo **Grafico** e la console Python. Altre informazioni sul modulo Grafico sono disponibili [qui](/Plot_Workbench/it "Plot Workbench/it").

![](/images/Plot_Trigonometric_Example.png)

![Esempio di grafico](/images/Plot_Trigonometric_Example.png)

Esempio di grafico

Esempio di grafico.

Nell'immagine precedente si può vedere il risultato che si intende ottenere. Questo tutorial descrive:

* Come creare un grafico dalla console Python.
* Come produrre un grafico da una serie di dati dalla console Python.
* Come mostrare le linee della griglia.
* Come visualizzare la legenda.
* Come editare le etichette della serie, usando [LaTeX](http://www.latex-project.org).
* Come modificare le etichette delle assi, usando [LaTeX](http://www.latex-project.org).
* Come modificare gli stili della serie.
* Come salvare il grafico.

## Plotting data

## Tracciare i dati

Per tracciare i dati non è necessario creare un nuovo documento di FreeCAD, è sufficiente visualizzare la console Python e iniziare a inviare i comandi, o usare le [macro](/Macros/it "Macros/it").

### Creating plot document

### Creare un documento di grafico

I grafici sono documenti speciali che possono essere creati manualmente per inserire i dati in seguito, oppure si può consentire al modulo di crearli automaticamente quando si avvia la stampa dei dati.  
Creare un documento personale per il grafico dà 2 vantaggi:

* È possibile impostare l'etichetta del documento.
* È possibile controllare facilmente in quale documento sono tracciati i dati (vedere più avanti per maggiori dettagli su questo aspetto).

Per creare un nuovo documento grafico lanciare semplicemente i seguenti comandi nel terminale Python:

```
try:
    from FreeCAD.Plot import Plot
except ImportError:
    from freecad.plot import Plot

Plot.figure("TrigonometricTest")

```

Questi comandi creano un nuovo documento nella finestra principale chiamato **TrigonometricTest**.  
Il nuovo documento appena creato possiede già di un sistema di assi. Ogni documento di Grafico deve avere almeno una serie di assi che non possono essere rimossi senza il completo controllo di matplotlib.

### Drawing functions

### Tracciare le funzioni

Dato che il comando **Plot** avvia un nuovo documento, a questo punto è possibile iniziare a lavorare.  
Bisogna ricordare che ogni comando del modulo Grafico che viene eseguito aggiunge una serie al grafico creato, questo fino a quando non si crea un nuovo documento, quindi, come regola generale, è bene controllare quali documenti sono aperti.

Ora si possono creare i dati per le funzioni seno e coseno che sono le funzioni che si vogliono tracciare:

```
import math
t = range(0,101)
t = [tt/100.0 for tt in t]
s = [math.sin(2.0*math.pi*tt) for tt in t]
c = [math.cos(2.0*math.pi*tt) for tt in t]

```

Questo crea 3 array di dati (con 101 punti):

* *t* = Tempo in secondi.
* *s* = Funzione seno.
* *c* = Funzione coseno.

Per tracciare entrambe le funzioni basta lanciare i seguenti comandi:

```
Plot.plot(t,s)
Plot.plot(t,c)

```

Questi comandi tracciano le funzioni. Il comando **plot** ammette anche l'etichetta della serie come terzo argomento, ma dato che si intende modificare questi dati in un momento successivo, utilizzando gli strumenti del modulo Grafico, non li passiamo ancora.

## Configurazione del grafico

### Showing grid and legend

### Mostrare la griglia e la legenda

Avviare l'ambiente di lavoro [Grafico](/Plot_Workbench/it "Plot Workbench/it") di FreeCAD nel menu Visualizza / Ambiente /. Quando il modulo è stato caricato, utilizzare lo strumento **Griglia** per mostrarla.

![](/images/Plot_Grid.svg)

![Icona dello strumento per mostrare o nascondere la griglia](/images/Plot_Grid.png)

Icona dello strumento per mostrare o nascondere la griglia

Icona dello strumento per mostrare o nascondere la griglia.

È possibile ripetere l'azione per nasconderla.

Nello stesso modo è possibile visualizzare la **Legenda** con lo strumento corrispondente.

![](/images/Plot_Legend.svg)

![Icona dello strumento per mostrare o nascondere la legenda](/images/Plot_Legend.png)

Icona dello strumento per mostrare o nascondere la legenda

Icona dello strumento per mostrare o nascondere la legenda.

Come si può vedere, la legenda è vuota perché non è ancora stata impostata alcuna etichetta per la serie.  
Nel modulo [Grafico](/Plot_Workbench/it "Plot Workbench/it") le serie senza una etichetta assegnata non sono rappresentate nella legenda, questo per consentire di inserire nel grafico delle linee ausiliarie.

### Setting series label

### Impostare l'etichetta della serie

Con lo strumento **Serie** è possibile modificare alcuni parametri della serie.

![](/images/Plot_Series.svg)

![Icona dello strumento per editare la serie](/images/Plot_Series.png)

Icona dello strumento per editare la serie

Icona dello strumento per editare la serie.

In primo luogo selezionare la linea che si desidera modificare, ad esempio, si può iniziare con la prima.  
Deselezionare la casella **No label** (Nessuna etichetta) e impostare questa etichetta:

```
$y = \sin \left( 2 \pi t \right)$

```

Poiché [LaTeX](http://www.latex-project.org) è supportato da [matplotlib](http://matplotlib.org) è possibile utilizzarlo per impostare tutte le etichette o i titoli che si desidera.  
Impostare la seguente etichetta per la seconda serie:

```
$y = \cos \left( 2 \pi t \right)$

```

### Setting series style

### Impostare lo stile della serie

Lo strumento **Serie** consente di impostare diverse proprietà della serie.  
Provare a impostare le proprietà di visualizzazione per ottenere delle curve come quelle dell'esempio, cambiare i colori della serie e lo stile di disegno della seconda curva.

### Setting axes labels

### Impostare le etichette degli assi

Con lo strumento **Etichette** è possibile impostare le etichette associate a ogni asse creato.

![](/images/Plot_Labels.svg)

![Icona dello strumento di configurazione delle Etichette](/images/Plot_Labels.png)

Icona dello strumento di configurazione delle Etichette

Icona dello strumento di configurazione delle Etichette.

Impostare i seguenti titoli:

* Title = Trigonometric functions example
* X Label = $t$
* Y Label = $y = \mathrm{f} \left( t \right)$

Inoltre impostare le dimensioni di tutti i titoli a 20.

## Saving plot

## Salvare il grafico

Con lo strumento **Salva grafico** è possibile salvare il grafico come file di immagine in diversi formati.

![](/images/Plot_Save.svg)

![Icona dello strumento Salva](/images/Plot_Save.png)

Icona dello strumento Salva

Icona dello strumento Salva grafico.

Iniziare con la selezione del percorso di output del file.  
È possibile utilizzare la finestra di selezione file usando il pulsante a destra della riga di edizione del percorso.

È possibile impostare le dimensioni dell'immagine di uscita in pollici, ad esempio, si può impostare 11.7x8.3 corrispondente al formato DIN A4.  
Dpi (punti per pollice) controlla la risoluzione delle immagini, ad esempio utilizzando 100 dpi si ottiene un'immagine di 1170x830 pixel.

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Basic_tutorial/it&oldid=1251514>"