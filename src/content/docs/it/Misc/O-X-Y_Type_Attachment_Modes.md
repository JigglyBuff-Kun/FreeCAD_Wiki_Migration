---
title: Modalità di associazione di tipo O-X-Y
---
Qui vengono fornite informazioni più dettagliate sull'uso delle modalità di tipo **Allinea O-X-Y** nell'[Editor associazioni di Part](/Part_EditAttachment/it "Part EditAttachment/it").

Questo modalità sono:

* Allineato O-Z-X
* Allineato O-Z-Y
* Allineato O-X-Y
* Allineato O-X-Z
* Allineato O-Y-Z
* Allineato O-Y-X

Queste modalità vengono utilizzate per associare un vertice specificato, con un orientamento determinato dal riferimento, ad altri vertici o bordi.

Riferimento1 deve essere un vertice. L'origine è mappata su questo punto selezionato.

Nota: se viene selezionato un bordo per Riferimento1, le modalità di tipo O-X-Y non vengono offerte.

Reference2 e Reference3 devono essere vertici o bordi. Forniscono informazioni sulla direzione. Per un vertice, la direzione va dall'origine al vertice selezionato. Per un bordo, è la direzione del bordo. Riferimento3 è facoltativo.

Si prenda come esempio la modalità O-X-Z:

* La **O** rappresenta l'origine, corrispondente a Riferimento1.
* La **X** indica che l'asse X dell'oggetto associato deve essere allineato con la direzione di Reference2.
* La **Z** indica che l'asse Z dell'oggetto associato deve essere allineato con il componente della direzione di Reference3 ad angolo retto rispetto all'asse X.
* L'asse **Y** completa la triade ortogonale degli assi mano-destra.

Per le altre modalità, gli assi vengono mappati in modo corrispondente.

Se Reference3 non viene fornito, FreeCAD effettua le scelte predefinite per esso.

Retrieved from "<http://wiki.freecad.org/index.php?title=O-X-Y_Type_Attachment_Modes/it&oldid=1362884>"