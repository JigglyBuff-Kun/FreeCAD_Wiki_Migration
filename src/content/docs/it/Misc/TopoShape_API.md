---
title: TopoShape API
---
:::caution
(novembre 2018) Queste informazioni potrebbero essere incomplete e obsolete. Per l'API più recente, consulta ladocumentazione API generata automaticamente.
:::

Il TopoShape è l'oggetto madre del Part Module. Tutti i tipi di forma (filo, faccia, solido, ecc...) del modulo Parte sono TopoShapes e condividono i seguenti attributi e metodi. Esempio:

```
import Part
sh = Part.makeBox(10,10,10)
print sh.Faces
for f in sh.Faces:
   print f.Edges

```

![](/images/Property.png) **Area**

**Returns**: L'area totale delle facce della shape.

![](/images/Property.png) **BoundBox**

**Returns**: Il BoundBox dell'oggetto

![](/images/Property.png) **CenterOfMass**

**Returns**: Il centro di massa del sistema attuale. Se il campo gravitazionale è uniforme, è il centro di gravità. Le coordinate restituite per il centro di massa sono espresse nel sistema di coordinate cartesiane assolute.

![](/images/Property.png) **CompSolids**

**Returns**: Elenca le shape successive in questa shape.

![](/images/Property.png) **Compounds**

**Returns**: Elenca i Coumpounds in questa shape.

![](/images/Property.png) **Edges**

**Returns**: Elenca gli Edges in questa shape.

![](/images/Property.png) **Faces**

**Returns**: Elenca le face in questa shape.

![](/images/Property.png) **Length**

**Returns**: Lunghezza totale degli edges della shape.

![](/images/Property.png) **Matrix**

**Returns**: L'attuale trasformazione dell'oggetto come matrice

![](/images/Property.png) **Orientation**

**Returns**: l'orientamento della shape.

![](/images/Property.png) **Placement**

**Returns**: L'attuale trasformazione dell'oggetto come placement

![](/images/Property.png) **ShapeType**

**Returns**: Il tipo di shape.

![](/images/Property.png) **Shells**

**Returns**: Elenca le shape successive in questa shape.

![](/images/Property.png) **Solids**

**Returns**: Elenco delle shape successive in questa shape.

![](/images/Property.png) **Vertexes**

**Returns**: Elenco dei vertexes in questa shape.

![](/images/Property.png) **Volume**

**Returns**: Volume totale dei solid della shape.

![](/images/Property.png) **Wires**

**Returns**: Elenco dei wire in ​​questa forma.

![](/images/Method.png) **approximate(****)**

**Description**: Approssima una curva B-Spline da questo wire

**Returns**: un oggetto BSplineCurve

![](/images/Method.png) **check(****)**

**Description**: Controlla la shape e segnala gli errori nella struttura della shape. Questo è un controllo più dettagliato rispetto a come fatto in isValid().

**Returns**:

![](/images/Method.png) **common(***TopoShape***)**

**Description**: Intersezione di questo e una data topo-shape.

**Returns**: a TopoShape

![](/images/Method.png) **complement(****)**

**Description**: Calcola il complemento dell'orientamento di questa shape, ovvero inverte lo stato interno/esterno dei boundary di questa shape.

**Returns**: a TopoShape

![](/images/Method.png) **copy(****)**

**Description**: Crea una copia di questa shape

**Returns**: a TopoShape

![](/images/Method.png) **cut(***TopoShape***)**

**Description**: Differenza tra questa e una determinata topo-shape.

**Returns**: a TopoShape

![](/images/Method.png) **distToShape(** *TopoShape* **)**

**Description**: Calcola la distanza minima tra questo e una data TopoShape.

**Returns**: float<minimum distance>,list<nearest points>,list<nearest subshapes & parameters>

![](/images/Method.png) **exportBrep(** *string* **)**

**Description**: Esporta il contenuto di questa shape in un file BREP. BREP è un formato nativo di CasCade.

**Returns**:

![](/images/Method.png) **exportIges(** *string* **)**

**Description**: Esporta il contenuto di questa shape in un file IGES.

**Returns**:

![](/images/Method.png) **exportStep(** *string* **)**

**Description**: Esporta il contenuto di questa shape in un file STEP.

**Returns**:

![](/images/Method.png) **exportStl(** *string* **)**

**Description**: Esporta il contenuto di questa shape in un file mesh STL.

**Returns**:

![](/images/Method.png) **extrude(***Vector***)**

**Description**: Estrude la shape lungo una direzione.

**Returns**: a TopoShape

![](/images/Method.png) **fuse(***TopoShape***)**

**Description**: Unione di questa e di una data topo shape.

**Returns**: a TopoShape

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**: Restituisce tutte le discendenze di questo tipo di oggetto

**Returns**: a list

![](/images/Method.png) **hashCode(****)**

**Description**: Questo valore viene calcolato dal valore del riferimento alla shape sottostante e dalla posizione. L'orientamento non viene preso in considerazione.

**Returns**: a string

![](/images/Method.png) **isClosed(****)**

**Description**: Controlla se la shape è chiusa.

**Returns**: a boolean

![](/images/Method.png) **isDerivedFrom(***string***)**

**Description**: Restituisce vero se il tipo indicato è un padre

**Returns**: boolean

![](/images/Method.png) **isEqual(***TopoShape***)**

**Description**: Restituisce vero se entrambe le shape condividono la stessa TShape, hanno la stessa posizione e hanno lo stesso orientamento.

**Returns**: a boolean

![](/images/Method.png) **isInside(***Vector,float,Boolean***)**

**Description**: Controlla se un point si trova all'interno di un solid con una certa tolleranza. Se il 3° parametro è True un point su una face è considerato interno

**Returns**: a boolean

![](/images/Method.png) **isNull(****)**

**Description**: Controlla se la shape è null.

**Returns**: a boolean

![](/images/Method.png) **isPartner(***TopoShape***)**

**Description**: Restituisce True se entrambe le shape condividono la stessa TShape, ma possono avere una Location diversa e un Orientation diverso.

**Returns**: a boolean

![](/images/Method.png) **isSame(***TopoShape***)**

**Description**: Controlla se entrambe le shape condividono la stessa geometria, vero se entrambe le shape condividono la stessa TShape e hanno la stessa Location, ma potrebbero avere un Orientation diverso.

**Returns**: a boolean

![](/images/Method.png) **isValid(****)**

**Description**: Controlla se la shape è valida, cioè né nulla, né vuota né corrotta.

**Returns**: a boolean

![](/images/Method.png) **makeFillet(***float,TopoShape***)**

**Description**: Restituisce un nuovo oggetto basato su una TopoShape, ma con un raccordo di raggio "float" applicato a ciascun bordo.

**Returns**: a TopoShape

![](/images/Method.png) **makeHomogenousWires(***wire***)**

**Description**: Rende omogeneo questo e il wire dato in modo che abbiano lo stesso numero di bordi

**Returns**: a wire

![](/images/Method.png) **makeOffset(***float***)**

**Description**: Compensa la shape di una determinata quantità

**Returns**: a TopoShape

![](/images/Method.png) **makePipe(***wire***)**

**Description**: Crea una pipe scorrendo lungo un wire.

**Returns**: a TopoShape

![](/images/Method.png) **makePipeShell(***wire***)**

**Description**: Crea un loft definito da profili lungo una wire.

**Returns**: a TopoShape

![](/images/Method.png) **makeShapeFromMesh(***mesh***)**

**Description**: Crea una shape composta dai dati mesh. Nota: questo dovrebbe essere usato solo per mesh piuttosto piccole.

**Returns**: a TopoShape

![](/images/Method.png) **makeThickness(***list,float,float***)**

**Description**: Crea un solid cavo partendo da un solid iniziale e da una serie di face su questo solid che devono essere rimosse. Le restanti face del solid diventano le pareti del solid cavo, il cui spessore è definito al momento della costruzione. Gli argomenti da passare sono un elenco di face da rimuovere, lo spessore dei muri e un valore di tolleranza.

**Returns**: a TopoShape

![](/images/Method.png) **nullify(****)**

**Description**: Distrugge il riferimento alla shape sottostante archiviata in questa shape. Di conseguenza, questa shape diventa nulla.

**Returns**:

![](/images/Method.png) **project(***TopoShape***)**

**Description**: Proietta una shape su questa shape

**Returns**: a TopoShape

![](/images/Method.png) **read(***string***)**

**Description**: Legge un file IGES, STEP o BREP.

**Returns**: a TopoShape

![](/images/Method.png) **reverse(****)**

**Description**: Inverte l'orientamento di questa forma.

**Returns**:

![](/images/Method.png) **revolve(***Vector, Vector, float***)**

**Description**: Ruota la shape attorno a un asse di un determinato angolo. es: Part.revolve(Vector(0,0,0),Vector(0,0,1),360) ruota la shape attorno all'asse Z di 360 gradi.

**Returns**: a TopoShape

![](/images/Method.png) **rotate(***Vector<position>, Vector<direction>, float<angle>***)**

**Description**: Ruota questa shape in base ai gradi angolari attorno a un asse specificato dalla posizione e dalla direzione. es: Shp.rotate(Vector(0,0,0),Vector(0,0,1),180) ruota la shape attorno all'asse Z di 180 gradi.

**Returns**:

![](/images/Method.png) **scale(***float<factor>, [Vector<centre>]***)**

**Description**: Ridimensiona uniformemente questa forma in base ad un fattore. Facoltativamente specificare il centro della trasformazione in scala.

**Returns**:

![](/images/Method.png) **section(***TopoShape***)**

**Description**: Sezione di questo con una data topo-shape.

**Returns**: a TopoShape

![](/images/Method.png) **sewShape(****)**

**Description**: Cuce la forma se c'è uno spazio vuoto.

**Returns**:

![](/images/Method.png) **tessellate(***float***)**

**Description**: Tassella la forma e restituisce un elenco di vertice e indici di face. Il float dato è la tolleranza.

**Returns**: a list

![](/images/Method.png) **toNurbs(****)**

**Description**: Conversione della geometria completa di una shape in geometria NURBS. Ad esempio, tutte le curve che supportano edge della forma base vengono convertite in curve BSpline e tutte le superfici che supportano le sue face vengono convertite in superfici BSpline.

**Returns**: a NURBS curve

![](/images/Method.png) **transformGeometry(***matrix***)**

**Description**: Applica la trasformazione geometrica su una copia della shape. La trasformazione da applicare è definita come matrice 4x4. La geometria sottostante delle seguenti shape può trasformarsi in una curva che supporta un bordo della shape o una superficie che supporta una face della shape. Ad esempio, un cerchio può essere trasformato in un'ellisse quando si applica una trasformazione di affinità. Può anche succedere che il cerchio venga rappresentato come una curva b-spline. La trasformazione viene applicata a tutte le curve che supportano i bordi della shape e a tutte le superfici che supportano le face della shape. Nota: se si desidera trasformare una shape senza modificarne la geometria sottostante, utilizzare i metodi trasla o ruota.

**Returns**: a TopoShape

![](/images/Method.png) **transformShape(***matrix***)**

**Description**: Applica la trasformazione su una shape senza modificare la geometria sottostante.

**Returns**:

![](/images/Method.png) **translate(***Vector***)**

**Description**: Applica la traslazione alla posizione corrente di questa forma.

**Returns**:

![](/images/Method.png) **writeInventor(****)**

**Description**: Scrive la mesh nel formato OpenInventor in una stringa.

**Returns**: a string

Alcuni attributi e metodi si applicano solo a determinati TopoShapes. Questi elementi si applicano ai bordi (TopoShapeEdge).

![](/images/Property.png) **FirstParameter**

**Returns**: Il valore del parametro a un'estremità di Edge. Non necessariamente al vertice[0]. [See Parametric Equations](http://en.wikipedia.org/wiki/Parametric_equations)

![](/images/Property.png) **LastParameter**

**Returns**: Il valore del parametro all'altra estremità di Edge. Non necessariamente al vertice[1].

![](/images/Method.png) **getParameterByLength(***Float***)**

**Description**: Mappa l'intervallo [0,Length] sull'intervallo [FirstParameter,LastParameter]

**Returns**: Float

![](/images/Method.png) **valueAt(***Float***)**

**Description**: Restituisce il vettore 3D corrispondente al valore di un parametro.

**Returns**: Vector

![](/images/Method.png) **parameterAt(***Vertex,[Face]***)**

**Description**: Restituisce il valore del parametro corrispondente a un vertice (punto 3D).

**Returns**: Float

![](/images/Method.png) **tangentAt(***Float***)**

**Description**: Restituisce il vettore di direzione della tangente al bordo in corrispondenza del valore di un parametro (se esiste).

**Returns**: Vector

![](/images/Method.png) **normalAt(***Float***)**

**Description**: Restituisce il vettore di direzione della normale al bordo in corrispondenza del valore di un parametro (se esiste in modo univoco).

**Returns**: Vector

![](/images/Method.png) **curvatureAt(***Float***)**

**Description**: Restituisce la curvatura del bordo in corrispondenza di un valore del parametro.

**Returns**: Float

![](/images/Method.png) **centerOfCurvatureAt(***Float***)**

**Description**: Restituisce il centro (punto 3D) del cerchio osculatore in corrispondenza di un valore del parametro.

**Returns**: Vector

Retrieved from "<http://wiki.freecad.org/index.php?title=TopoShape_API/it&oldid=1363447>"