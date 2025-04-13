---
title: API di Placement
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

In FreeCAD, Placement (Posizionamento) definisce la posizione e la rotazione di un oggetto. Il concetto di posizionamento è spiegato in dettaglio in: [Placement](/Placement/it "Placement/it").

Esempio di impostazione del Posizionamento di un oggetto del documento:

```
myObj = FreeCAD.ActiveDocument.ActiveObject
pl = FreeCAD.Placement()
pl.move(FreeCAD.Vector(2,0,0))
myObj.Placement = pl

```

![](/images/Class.png) **Placement(** *) o (Placement) o (Matrix) o (Base, Rotation) o (Base,Rotation,Center) o (Base,Axis,Angle***)**

**Description**: costruisce un Placement, vuoto o con gli argomenti dati, o come una copia di un Placement dato.

![](/images/Property.png) **Base**

**Returns**: un vettore che rappresenta la posizione di Placement.

![](/images/Property.png) **Rotation**

**Returns**: un quaternione che rappresenta la rotazione di Placement.

![](/images/Method.png) **inverse(****)**

**Description**: calcola la posizione inversa

**Returns**: un placement.

![](/images/Method.png) **move(***Vector***)**

**Description**: sposta il posizionamento lungo il vettore dato

**Returns**: nulla

![](/images/Method.png) **multVec(***Vector***)**

**Description**: applica il Placement al vettore data

**Returns**: il vettore risultante.

![](/images/Method.png) **multiply(***Placement***)**

**Description**: moltiplica questo Placement con un'altra

**Returns**: il placement risultante.

![](/images/Method.png) **toMatrix(****)**

**Description**:

**Returns**: una matrice che rappresenta la trasformazione del Placement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Placement_API/it&oldid=632492>"