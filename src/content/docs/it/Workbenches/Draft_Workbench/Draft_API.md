---
title: Draft API
---
:::caution
(Novembre 2018) Queste informazioni potrebbero essere incomplete e obsolete. Per l'ultima API, vedere la paginaDocumentazione API autogenerata.
:::

Queste funzioni fanno parte dell'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it") e possono essere usate nelle [macro](/Macros/it "Macros/it") e nella console [Python](/Python/it "Python/it") dopo che il modulo `Draft` è stato importato.

Esempio:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png) **cut** ( *FreeCAD.Object, FreeCAD.Object* )

**Descrizione**: Restituisce un oggetto Taglio prodotto dalla differenza dei 2 oggetti dati. Gli oggetti originali vengono nascosti.

**Restituisce**: L'oggetto appena creato

![](/images/Method.png) **extrude** ( *FreeCAD.Object, Vector* )

**Descrizione**: Estrude un oggetto dato nella direzione data dal vettore. L'oggetto originale viene nascosto.

**Restituisce**: L'oggetto appena creato

![](/images/Method.png) **formatObject** ( *FreeCAD.Object, [FreeCAD.Object]* )

**Descrizione**: Questa funzione applica all'oggetto obiettivo dato le proprietà correnti che sono impostate nella barra degli strumenti di Draft (colore e lo spessore della linea), o copia le proprietà di un secondo oggetto, se questi viene fornito. Esso pone anche l'oggetto nel gruppo "In costruzione", se il pulsante "Costruzione" viene premuto.

**Restituisce**: Nulla

![](/images/Method.png) **fuse** ( *FreeCAD.Object, FreeCAD.Object* )

**Descrizione**: Restituisce un oggetto Fusione prodotto dall'unione dei 2 oggetti dati. Se gli oggetti sono complanari, è usata una polilinea Draft speciale, in caso contrario l'oggetto finale è una fusione standard di parti.

**Restituisce**: L'oggetto appena creato

![](/images/Method.png) **getDraftPath** ( *[string]* )

**Descrizione**: Restituisce il percorso dell'utente o del sistema in cui è in esecuzione il modulo Draft. Se viene fornito un sottoindirizzo o un nome di file, viene restituito il percorso completo del sottoindirizzo all'interno del modulo Draft.

**Restituisce**: Il percorso di un file

![](/images/Method.png) **getGroupContents** ( *list* )

**Descrizione**: Esegue la scansione in modo ricorsivo della lista di gruppi indicata. Se i gruppi sono individuati, i loro contenuti vengono aggiunti alla lista.

**Restituisce**: Un elenco di oggetti di FreeCAD

![](/images/Method.png) **getRealName** ( *string* )

**Descrizione**: Rimuove i numeri indicati da un nome di un oggetto.

**Restituisce**: Il nome spogliato dell'oggetto.

![](/images/Method.png) **getSelection** (  )

**Descrizione**: Restituisce la selezione corrente di FreeCAD.

**Restituisce**: La selezione corrente di FreeCAD.

![](/images/Method.png) **makeCircle** ( *radius, [placement], [facemode], [startangle], [endangle]* )

**Descrizione**: Crea un oggetto Cerchio di raggio dato. Se si indica una posizione, essa viene utilizzata. Se facemode è False, il cerchio è mostrato come una polilinea, altrimenti come una faccia. Se startAngle e endAngle sono indicati (in gradi), essi vengono utilizzati e l'oggetto appare come un arco.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **makeDimension** ( *Vector, Vector, [Vector] o FreeCAD.Object, int, int, [Vector]* )

**Descrizione**: Crea un oggetto Dimensione (Quota) misurando la distanza tra primo e il secondo vettore, con la linea di quota passante attraverso un terzo vettore se questo viene indicato. Sono utilizzati la larghezza di linea e il colore correnti impostati nella barra di Draft. Invece di 2 vettori, si può anche passare un oggetto FreeCAD, o due numeri interi (e facoltativamente un vettore per cui deve passare la linea di quota). In tal caso, la dimensione è associata all'oggetto, e misura due dei suoi vertici, indicati dai due numeri di indice.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **makeLine** ( *Vector, Vector* )

**Descrizione**: Crea una Linea tra i due vettori dati. Sono utilizzati la larghezza di linea e il colore correnti impostati nella barra di Draft.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **makeRectangle** ( *length, width, [placement], [facemode]* )

**Descrizione**: Crea un oggetto Rettangolo con la lunghezza in direzione X e l'altezza in direzione Y. Se è indicata una posizione, essa viene utilizzata. Se facemode è False, il rettangolo è mostrato come una polilinea, altrimenti come una faccia. Sono utilizzati la larghezza di linea e il colore correnti impostati nella barra di Draft.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **makeText** ( *string o list, [Vector], [screenmode]* )

**Descrizione**: Crea un oggetto Testo, nel punto indicato se si fornisce un vettore, contenente la stringa o le stringhe riportate nell'elenco, una stringa per riga. Sono utilizzati il colore corrente dalla barra degli strumenti Draft e l'altezza del testo e il tipo di carattere specificati nelle preferenze. Se screenmode è True, il testo è sempre rivolto nella direzione della vista, altrimenti si trova sul piano XY.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **makeWire** ( *list o Part.Wire, [closed], [placement], [facemode]* )

**Descrizione**: Crea un oggetto Wire (Polilinea) dalla lista di vettori indicati o dalla polilinea indicata. Se closed è True o se il primo e l'ultimo punto sono identici, la polilinea è chiusa. Se facemode è True (e la polilinea è chiusa), la polilinea appare riempita. Sono utilizzati la larghezza di linea e il colore correnti impostati nella barra di Draft.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **move** ( *FreeCAD.Object o list, Vector, [copymode]* )

**Descrizione**: Sposta l'oggetto dato o gli oggetti contenuti nella lista fornita nella direzione e alla distanza indicata dal vettore dato. Se CopyMode è True, gli oggetti attuali non vengono spostati, ma vengono invece create delle copie.

**Restituisce**: L'oggetto o gli oggetti (o loro copie se CopyMode era True).

![](/images/Method.png) **precision** (  )

**Descrizione**: Restituisce il valore della precisione secondo le impostazioni dell'utente in Draft.

**Restituisce**: Un intero.

![](/images/Method.png) **rotate** ( *FreeCAD.Object o list, angle, [center], [axis] ,[copymode]* )

**Descrizione**: Ruota l'oggetto dato o gli oggetti contenuti nella lista fornita con un determinato angolo attorno al centro dato, se previsto, con axis come asse di rotazione. Se axis viene omesso, la rotazione avviene attorno all'asse verticale Z. Se CopyMode è True, gli oggetti reali non vengono spostati, ma vengono invece create delle copie.

**Restituisce**: L'oggetto (o sue copie).

![](/images/Method.png) **scale** ( *FreeCAD.Object o list, vector, [center], [copymode]* )

**Descrizione**: Ridimensiona l'oggetto dato o gli oggetti contenuti nella lista data con i fattori di scala definiti dal vettore dato (nelle direzioni X, Y e Z) intorno al centro, se viene indicato. Se CopyMode è True, gli oggetti reali non vengono spostati, ma vengono invece create delle copie.

**Restituisce**: L'oggetto (o sue copie).

![](/images/Method.png) **select** ( *FreeCAD.Object* )

**Descrizione**: Deseleziona tutto e seleziona solo l'oggetto passato

**Restituisce**: Nulla.

![](/images/Method.png) **shapify** ( *FreeCAD.Object* )

**Descrizione**: Trasforma un oggetto parametrico in una forma non-parametrica.

**Restituisce**: L'oggetto appena creato.

![](/images/Method.png) **draftify** ( *FreeCAD.Object o list* )

**Descrizione**: Trasforma l'oggetto dato o ogni oggetto della lista data in polilinee parametriche.

**Restituisce**: Nulla.

![](/images/Method.png) **getSVG** ( *FreeCAD.Object, [linemodifier], [textmodifier], [(u,v)]* )

**Descrizione**: Crea una rappresentazione SVG dell'oggetto dato. L'attributo linemodifier è un fattore di scala (in percentuale) per la larghezza della linea, e textmodifier per la dimensione del testo. Inoltre è anche possibile fornire una tupla di vettori per definire un piano di proiezione, altrimenti la geometria viene proiettata sul piano XY.

**Restituisce**: una stringa contenente una rappresentazione SVG dell'oggetto dato.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/it&oldid=621893>"