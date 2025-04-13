---
title: Inserire una vista nel foglio di disegno
---
|  |
| --- |
| Inserisci vista |
| Posizione nel menu |
| Disegno → Inserisci Vista |
| Ambiente |
| [Disegno](/Drawing_Workbench/it "Drawing Workbench/it"), Completo |
| Avvio veloce |
| Nessuno |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Disegno A3](/Drawing_Landscape_A3/it "Drawing Landscape A3/it") |
|  |

Questo strumento crea una nuova vista dell'oggetto selezionato e la posiziona nel foglio di disegno attivo.

![Un foglio di disegno con due proiezioni, frontale e dall'alto, e una vista isometrica.](/images/Drawing_Views_fr.png)

### Utilizzo

Selezionare un oggetto nella vista 3D o nella struttura del progetto, quindi fare clic sullo strumento *Inserisci vista* del disegno. Per impostazione predefinita, viene inserita una vista dall'alto in scala 1:1 (scala reale), posizionata in alto a sinistra della pagina. Se la vista è troppo piccola o troppo grande per la pagina, può risultare non visibile.

Nell'albero del progetto viene aggiunto un oggetto **View** sotto l'oggetto **Page**. Per le viste successive, viene aggiunto al nome un numero a tre cifre. Fare clic sulla freccia davanti all'oggetto Page per dispiegarla e visualizzarne il contenuto.

Se nella struttura ad albero del progetto viene selezionato solo l'oggetto, la vista viene aggiunta alla prima pagina del progetto. Quando il progetto è composto da più pagine si deve selezionare l'oggetto e la pagina in cui deve essere aggiunto, poi fare clic sull'icona per aggiungere la vista alla pagina selezionata.

### Modificare una vista esistente

Dispiegare l'oggetto Page nella struttura del Progetto, quindi selezionare la vista da modificare. I suoi parametri possono essere modificati nella scheda Dati della finestra Proprietà di visualizzazione.

![](/images/Drawing_View_Properties.png)

![](/images/Drawing_View_Iso.png)

Vista isometrica con « smooth lines visibility » disattivata

![](/images/Drawing_View_Iso_SmoothLines.png)

Vista isometrica con « smooth lines visibility » attivata

* **Label** : cambia l'etichetta della vista nella struttura del progetto. È anche possibile fare clic su Vista nella struttura e fare clic destro → Rinomina, oppure premere F2.
* **Rotation** : ruota la vista. Ad esempio, una vista isometrica richiede una rotazione di 60 gradi (vedere anche il sottostante parametro Direction)
* **Scale** : imposta la scala di visualizzazione.
* **X** : imposta in millimetri la posizione orizzontale della vista nella pagina.
* **Y** : imposta in millimetri la posizione verticale della vista nella pagina. Notare che le coordinate (0,0) si trovano in alto a sinistra della pagina, quindi maggiore è il numero e più la vista viene spostata in basso.
* **Direction** : cambia la direzione della vista. Questo viene determinato dal valori xyz che definiscono un vettore normale alla pagina. La vista dall'alto è (0,0,1), e isometrica è (1,1,1). I valori possono anche essere negativi.
* **Show Hidden Lines** : commuta la visibilità delle nascosta linee selezionando *True* (vero) o *False* (falso).
* **Show Smooth Lines** : attiva o disattiva la lisciatura delle linee selezionando *True* (vero) o *False* (falso). Le linee morbide sono anche chiamate bordi di tangenza. Si tratta di linee di demarcazione tra due superfici tangenti.

### Altro

Per commutare la vista 3D tra ortogonale e prospettica selezionare [Vista in prospettivo](/Std_PerspectiveCamera/it "Std PerspectiveCamera/it") o [Vista ortografica](/Std_OrthographicCamera/it "Std OrthographicCamera/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_View/it&oldid=1461812>"