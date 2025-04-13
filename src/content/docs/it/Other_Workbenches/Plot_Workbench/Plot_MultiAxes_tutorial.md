---
title: Guida al Grafico multi-asse
---
|  |
| --- |
| Tutorial |
| Argomento |
| Plot - Grafico |
| Livello di difficoltà |
| Intermedio |
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

Prima di seguire questo tutorial è bene leggere la [guida di base sui Grafici](/Plot_Basic_tutorial/it "Plot Basic tutorial/it").  
In questo tutorial si descrive come creare e modificare un **Grafico Multi-asse**.  
 Consultare anche la sezione [Modulo Grafico](/Plot_Workbench/it "Plot Workbench/it").

![](/images/Plot_MultiAxes_Example.png)

![Esempio di grafico multiasse](/images/Plot_MultiAxes_Example.png)

Esempio di grafico multiasse

Esempio di grafico multi-asse.

Nell'immagine precedente si può vedere il risultato finale approssimativo di questa esercitazione. In questo tutorial si descrive come:

* Creare un grafico Multi-asse dalla console Python.
* Modificare le proprietà degli assi.
* Controllare la griglia e la legenda quando sono presenti più sistemi di assi.
* Riposizionare le etichette, i titoli e le legende.

## Plotting data

## Creare il grafico

Come descritto nella [guida di base](/Plot_Basic_tutorial/it "Plot Basic tutorial/it"), si usa la console Python o le macro per tracciare i dati, con la differenza che in questo caso i dati sono tracciati in due diversi sistemi di assi.

### Creating plot data

### Creare i dati

In questo esempio, vengono tracciate 3 funzioni: le due utilizzate nel [precedente tutorial](/Plot_Basic_tutorial/it "Plot Basic tutorial/it"), e una nuova funzione polinomiale. Il polinomio ha bisogno di un nuovo sistema di assi in quanto il suo campo di variazione è diverso da tutti gli altri.  
 I seguenti comandi creano i gruppi di dati necessari:

```
import math
p = range(0,1001)
x = [2.0*xx/1000.0 for xx in p]
y = [xx**2.0 for xx in x]
t = [tt/1000.0 for tt in p]
s = [math.sin(math.pi*2.0*tt) for tt in t]
c = [math.cos(math.pi*2.0*tt) for tt in t]

```

Dato che x varia tra 0 e 2, la funzione y varia tra 0 e 4, quindi provando a tracciare questa funzione con quelle trigonometriche, che variano invece tra 0 e 1, almeno una funzione verrà troncata o scalata male, perciò serve un grafico MultiAsse.  
In FreeCAD il grafico Multiasse è destinato a produrre un grafico con più assi, e non per produrre più grafici nello stesso documento.

### Drawing functions, adding new axes

### Tracciare le funzioni, aggiungere nuovi assi

In questo esempio la funzione polinomiale viene tracciata nel sistema di assi principali. Se tutti gli assi hanno stesse dimensioni non è rilevante in quali assi viene tracciata una funzione, ma se il grafico ha assi con dimensioni diverse, come in questo caso, gli assi principali devono essere quelli più grandi (perché hanno lo sfondo bianco).  
Per tracciare la prima curva basta lanciare i seguenti comandi:

```
try:
    from FreeCAD.Plot import Plot
except ImportError:
    from freecad.plot import Plot

Plot.plot(t,s,r"$\sin\left( 2 \pi t \right)$")
Plot.plot(t,c,r"$\cos\left( 2 \pi t \right)$")

```

Questa volta si passa anche direttamente l'etichetta della serie per la legenda. Notare che la stringa passata come argomento etichetta ha il prefisso **r** per evitare che Python tenti di interpretare i caratteri speciali (il simbolo **\** è usato di frequente nella sintassi [LaTeX](http://www.latex-project.org)).

Per tracciare le funzioni trigonometriche è necessario creare prima dei nuovi assi.  
Nel modulo [Grafico](/Plot_Workbench/it "Plot Workbench/it") di FreeCAD quando si creano dei nuovi assi essi sono selezionati come quelli attivi, e pertanto i nuovi tracciati sono associati a questi nuovi assi.

```
Plot.addNewAxes()
Plot.plot(x,y,r"$x^2$")

```

Come si può vedere il grafico ha un pessimo aspetto, con le tacche degli assi sovrapposte, le curve dello stesso colore, ecc. Per risolvere questi problemi ora si passa a usare il modulo [Grafico](/Plot_Workbench/it "Plot Workbench/it") di FreeCAD.

## Configurare il grafico

### Configuring axes

### Configurare gli assi

Il modulo [Grafico](/Plot_Workbench/it "Plot Workbench/it") di FreeCAD fornisce uno strumento per modificare le proprietà di ogni asse.

![](/images/Plot_Axes.svg)

![Icona dello strumento di configurazione degli assi.](/images/Plot_Axes.png)

Icona dello strumento di configurazione degli assi.

Icona dello strumento di configurazione degli assi.

La prima cosa che si trova nello strumento degli assi è il selettore degli assi attivi. Siccome gli assi attivi sono gli ultimi, ora è attivo il sistema 1. Lo strumento degli assi, come lo strumento delle etichette, permette di impostare gli assi attivi, consentendo di tracciare più dati negli stessi assi (compreso aggiungere o rimuovere gli assi). Per il momento si lavora sul sistema di assi selezionato, che è quello associato alle funzioni trigonometriche.

Nei cursori delle dimensioni, spostare a sinistra i cursori orizzontali e in basso quelli verticali per ridurre le dimensioni degli assi (cercare di emulare l'esempio). Dopo impostare l'allineamento degli assi, spostarli in alto a destra impostando un piccolo offset di due unità.

### Configuring series

### Configurare le serie

Impostare le proprietà delle serie, come descritto nella [guida di base](/Plot_Basic_tutorial/it "Plot Basic tutorial/it").

### Showing grid and legend

### Mostrare la griglia e la legenda

La griglia e legenda sono mostrate e nascoste con gli stessi strumenti utilizzati nel [tutorial precedente](/Plot_Basic_tutorial/it "Plot Basic tutorial/it"), ma in questo caso il comportamento è un po' diverso a causa della presenza di due diversi sistemi di assi.

Per quanto concerne le linee della griglia, è possibile visualizzarle indipendentemente per ogni set di assi, e, ad esempio, se ora si prova a mostrare la griglia viene mostrata solo la griglia delle funzioni trigonometriche. Per visualizzare la griglia della funzione polinomiale prima si devono attivare gli assi 0 (utilizzando lo strumento di configurazione degli assi) e poi utilizzare nuovamente lo strumento della griglia (è possibile che sia necessario premerlo due volte).

Per quanto riguarda la legenda, essa è unica per entrambi i sistemi di assi ed è possibile scegliere quali assi utlizzare per mostrarla, ma si consiglia vivamente di utilizzare i più grandi (0 in questo esempio) perché la posizione viene riferita alle coordinate di questi assi. Se adesso si visualizza la legenda si può osservare che è posizionata male, questo problema sarà risolto in seguito.

### Setting axes labels

### Definire le etichette degli assi

È possibile impostare le etichette degli assi con lo stesso strumento utilizzato nella [guida di base](/Plot_Basic_tutorial/it "Plot Basic tutorial/it"), con la differenza che ora ci sono più assi. Dal momento che le etichette degli assi sono una per ogni asse, non è una differenza significativa, ma il modulo [Grafico](/Plot_Workbench/it "Plot Workbench/it") di FreeCAD consente anche di impostare un titolo per il sistema di assi. Ecco come impostare solo il titolo degli assi principali:

**Axes 0:**

* Title = Multiaxes example
* X Label = $x$
* Y Label = $\mathrm{f} \left( x \right)$

**Axes 1:**

* X Label = $t$
* Y Label = $\mathrm{f} \left( t \right)$

Impostare inoltre 20 come fontsize per tutti, escluso il titolo che utilizza una dimensione di scrittura di 24. Come accaduto con la legenda, il titolo è posizionato male, interseca gli assi del secondo set, quindi ora bisogna risolvere entrambi i problemi.

### Setting elements position

### Riposizionare gli elementi del grafico

Il modulo [Grafico](/Plot_Workbench/it "Plot Workbench/it") di FreeCAD fornisce uno strumento per impostare la posizione di alcuni elementi del grafico, come titoli, etichette o legenda.

![](/images/Plot_Positions.svg)

![Icona dello strumento Posizione](/images/Plot_Positions.png)

Icona dello strumento Posizione

Icona dello strumento Posizione.

Quando si esegue lo strumento viene visualizzato un elenco con tutti gli elementi riposizionabili. I titoli e la legenda possono essere spostati in tutte le direzioni, invece le etichette degli assi possono essere mossi solo sulla direzione assi. Selezionare il titolo degli assi 0 e spostarlo in (0.24,1.01), quindi selezionare la legenda e spostarla in una posizione migliore. È anche possibile aumentare la dimensione dei caratteri delle etichette della legenda.

## Salvare il grafico

Ora è possibile salvare il lavoro. Consultare il [tutorial di base](/Plot_Basic_tutorial/it "Plot Basic tutorial/it") se non si ricorda come farlo.

Now you can save your work. See the [previous tutorial](/Plot_Basic_tutorial "Plot Basic tutorial") if you don't remember how to do it.

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_MultiAxes_tutorial/it&oldid=1251525>"