---
title: API di Part
---
:::caution
(Novembre 2018) Queste informazioni potrebbero essere incomplete e obsolete. Per l'ultima API, vedere la paginaDocumentazione API autogenerataoDocumentazione Python Part API autogenerata.
:::

Il modulo Parte è il collegamento diretto tra FreeCAD e il kernel OpenCasCade. Fornisce principalmente [TopoShapes](/TopoShape_API/it "TopoShape API/it") che è il tipo principale di oggetto utilizzato da OpenCascade. Il modulo Parte contiene anche una serie di funzioni utili per creare e manipolare le TopoShapes. Esempio:

```
import Part
mycube = Part.makeBox(2,2,2)
Part.show(mycube)

```

![](/images/Method.png) **\_\_fromPythonOCC\_\_(***OCC.Object***)**

**Description**: Metodo di aiuto per convertire una forma pythonocc in una forma interna

**Returns**: Una Part.Shape

![](/images/Method.png) **\_\_sortEdges\_\_(***elenco di bordi* **)**

**Description**: Metodo di aiuto per ordinare un elenco di spigoli non ordinati in modo che in seguito il vertice iniziale e finale di due spigoli consecutivi coincidano geometricamente. Restituisce un singolo elenco di spigoli e l'algoritmo si arresta dopo il primo set di spigoli collegati, il che significa che l'elenco di output può essere più piccolo dell'elenco di input. L'elenco ordinato può essere utilizzato per creare un Wire

**Returns**: un elenco di bordi

![](/images/Method.png) **\_\_toPythonOCC\_\_(***Part.Shape***)**

**Description**: Metodo di aiuto per convertire una forma interna in una forma pythonocc

**Returns**: una OCC.Shape

![](/images/Method.png) **cast\_to\_shape(***Part.Shape***)**

**Description**: Cast to the actual shape type

**Returns**:

![](/images/Method.png) **export(***list,string***)**

**Description**: Esportare un elenco di oggetti in un unico file.

**Returns**:

![](/images/Method.png) **getSortedClusters(***list of edges***)**

**Description**: Metodo Helper per ordinare e raggruppare una varietà di bordi

**Returns**:

![](/images/Method.png) **insert(***string,string***)**

**Description**: Inserire il file (percorso dato come primo argomento) nel dato documento (secondo argomento).

**Returns**:

![](/images/Method.png) **makeBox(***length,width,height,[pnt,dir]***)**

**Description**: Crea una scatola situata in pnt con le dimensioni (lunghezza, larghezza, altezza). Per impostazione predefinita, pnt è in Vettore(0,0,0) e dir è Vettore(0,0,1)

**Returns**: la forma creata

![](/images/Method.png) **makeCircle(***radius,[pnt,dir,angle1,angle2]***)**

**Description**: Crea un cerchio con un dato raggio. Per impostazione predefinita pnt è Vettore(0,0,0), dir è Vettore(0,0,1), angle1 è 0 e angle2 è 360

**Returns**: la forma creata

![](/images/Method.png) **makeCompound(***list***)**

**Description**: Crea un composto da un elenco di forme.

**Returns**: la forma creata

![](/images/Method.png) **makeCone(***radius1,radius2,height,[pnt,dir,angle]***)**

**Description**: Crea un cono con il raggio e altezza dati. Per impostazione predefinita pnt è Vettore(0,0,0), dir è Vettore(0,0,1) e l'angolo è di 360

**Returns**: la forma creata

![](/images/Method.png) **makeCylinder(***radius,height,[pnt,dir,angle]***)**

**Description**: Crea un cilindro con un determinato raggio e l'altezza. Per impostazione predefinita pnt è Vettore(0,0,0), dir è Vettore(0,0,1) e l'angolo è di 360

**Returns**: la forma creata

![](/images/Method.png) **makeHelix(***pitch,height,radius,[angle,lefthand,heightstyle]***)**

**Description**: Crea una forma elicoidale con ilpasso, l'altezza e il raggio dati. Di default crea una elica cilindrica destrorsa. Il parametro angolo diverso da zero produce una spirale conica. Lefthand True (Mancina Vero) produce una elica sinistrorsa. Heightstyle si applica solo alle eliche coniche. Heightstyle False (default) fa sì che il parametro di altezza sia interpretato come la lunghezza del lato del sottostante tronco. Heightstyle Vero fa sì che il parametro di altezza sia interpretato come l'altezza verticale della traiettoria elicoidale. Pitch è il "passo metrico" (avanzamento / giro). Per l'elica conica, raggio è il raggio minore.

**Returns**: La forma creata

![](/images/Method.png) **makeLine(***(x1,y1,z1),(x2,y2,z2)***)**

**Description**: Crea una linea tra due punti

**Returns**: la forma creata

![](/images/Method.png) **makeLoft(***shapelist<profiles>,[boolean<solid>,boolean<ruled>]***)**

**Description**: Crea una forma loft utilizzando l'elenco dei profili. Facoltativamente crea un solido (es superficie o guscio) o crea una superficie rigata.

**Returns**: La forma creata

![](/images/Method.png) **makePlane(***length,width,[pnt,dir]***)**

**Description**: Crea un piano. Per impostazione predefinita pnt è Vettore(0,0,0) e dir è Vettore(0,0,1)

**Returns**: la forma creata

![](/images/Method.png) **makePolygon(***list***)**

**Description**: Rende un poligono da un elenco di vettori

**Returns**: la forma creata

![](/images/Method.png) **makeRevolution(***Curve,[vmin,vmax,angle,pnt,dir]***)**

**Description**: Rende una forma di rivoluzione ruotando la curva o una porzione di esso attorno ad un dato asse in (pnt, dir). Per impostazione predefinita Vmin / Vmax sono impostati ai limiti della curva, l'angolo è di 360, pnt è Vettore(0,0,0) e dir è Vettore(0,0,1)

**Returns**: la forma creata

![](/images/Method.png) **makeRuledSurface(***Edge or Wire,Edge or Wire***)**

**Description**: Crea una superficie rigata da due spigoli (Edge) o contorni (Wire). Se vengono utilizzati dei contorni allora questi devono avere lo stesso numero di spigoli.

**Returns**: La forma creata

![](/images/Method.png) **makeShell(***list***)**

**Description**: Crea un guscio da una lista di facce. Note: Resulting shell should be manifold. Non-manifold shells are not well supported.

**Returns**: la forma creata

![](/images/Method.png) **makeSolid(***Part.Shape***)**

**Description**: Crea un solido da dei gusci all'interno di una forma.

**Returns**: la forma creata

![](/images/Method.png) **makeSphere(***radius,[center\_pnt, axis\_dir, V\_startAngle, V\_endAngle, U\_angle]***)**

**Description**: Rende una sfera (or partial sphere) con un determinato raggio. Per impostazione predefinita center\_pnt è Vector(0,0,0), axis\_dir è Vector(0,0,1), V\_startAngle è 0, V\_endAngle è 90 e U\_angle è 360

**Returns**: la forma creata

![](/images/Method.png) **makeTorus(***radius1,radius2,[pnt,dir,angle1,angle2,angle]***)**

**Description**: Fa un toro con il raggio e gli angoli dati. Per impostazione predefinita pnt è Vettore(0,0,0), dir è Vettore (0,0,1), angle1 è 0, angle2 è 360 e l'angolo è di 360

**Returns**: la forma creata

![](/images/Method.png) **makeTube(***edge,float***)**

**Description**: Crea un tubo.

**Returns**: la forma creata

![](/images/Method.png) **open(***string***)**

**Description**: Crea un nuovo documento e carica il file nel documento.

**Returns**:

![](/images/Method.png) **read(***string***)**

**Description**: Carica il file e restituisce la forma.

**Returns**: una forma

![](/images/Method.png) **show(***shape***)**

**Description**: Aggiunge la forma al documento attivo o ne crea uno se non esiste alcun documento.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_API/it&oldid=1311930>"