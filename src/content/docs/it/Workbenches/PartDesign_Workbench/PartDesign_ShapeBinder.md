---
title: PartDesign Lega forme
---
|  |
| --- |
| Lega forme |
| Posizione nel menu |
| Part Design → Lega forme |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Creare un riferimento di forma](/PartDesign_SubShapeBinder/it "PartDesign SubShapeBinder/it"), [Creare un Clone](/PartDesign_Clone/it "PartDesign Clone/it") |
|  |

## Descrizione

Lo strumento **PartDesign ShapeBinder** crea una geometria di riferimento collegata a una forma di un unico oggetto genitore. Uno ShapeBinder viene utilizzato all'interno di un [Corpo di Partdesign](/PartDesign_Body/it "PartDesign Body/it") per riferirsi ad una geometria esterna al corpo. Utilizzare una geometria esterna direttamente in un corpo non è consentito e porterebbe ad errori di ambito.

Uno ShapeBinder traccia il posizionamento relativamente alla geometria di riferimento, che è utile nel contesto della creazione di [assiemi](/Assembly/it "Assembly/it"), se la sua proprietà Dati**Trace Support** è impostata su `true`. Vedere l'[esempio](#Esempio) qui sotto per capirne il funzionamento.

La geometria di riferimento può essere un singolo oggetto (ad esempio un [Cubo di Part](/Part_Box/it "Part Box/it"), un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it"), uno [schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it") o una [Funzione](/PartDesign_Feature/it "PartDesign Feature/it") all'interno di un corpo), o uno o più sottoelementi (facce, bordi o vertici). Quale geometria selezionare dipende dallo scopo previsto per lo ShapeBinder. Per un'operazione booleana è necessario selezionare un solido. Per un'operazione di estrusione è possibile utilizzare una faccia o uno schizzo. Per la geometria esterna in uno schizzo, o per collegare uno schizzo, qualsiasi combinazione di sottoelementi può essere appropriata. La geometria di riferimento può anche appartenere al Corpo in cui si trova lo ShapeBinder.

![](/images/Shapebinder_flow.png)

Viene creato un ShapeBinder da due facce selezionate in un corpo ancora vuoto. La geometria dello Shapebinder può quindi essere utilizzata come geometria esterna in uno schizzo in quel Corpo.

## Utilizzo

1. [Attivare il Corpo](/PartDesign_Body/it#Stato_attivo "PartDesign Body/it") in cui lo ShapeBinder dovrebbe essere annidato.
2. Facoltativamente, selezionare un singolo oggetto o uno o più sottoelementi appartenenti allo stesso oggetto padre. I sottoelementi possono essere selezionati solo nella [vista 3D](/3D_view/it "3D view/it").
3. Selezionare l'opzione **Part Design → ![](/images/PartDesign_ShapeBinder.svg) Lega forme** dal menu.
4. Si apre il pannello attività **Parametri di riferimento della forma**.
5. Facoltativamente selezionare un oggetto, ciò non è obbligatorio se si vuole selezionare dei sottoelementi:
   1. Premere il pulsante Oggetto.
   2. Selezionare un oggetto nella [Vista ad albero](/Tree_view/it "Tree view/it") o nella [Vista 3D](/3D_view/it "3D view/it").
   3. Tutti i sottoelementi selezionati in precedenza verranno rimossi.
   4. Se viene selezionato un Corpo, sarà impossibile selezionare i sottoelementi poiché appartengono ad un oggetto diverso, vale a dire la [Cima della punta](/PartDesign_Body/it#Tip "PartDesign Body/it") del Corpo.
6. Facoltativamente selezionare i sottoelementi:
   1. Premere il pulsante Aggiungi geometria.
   2. Selezionare un sottoelemento nella [vista 3D](/3D_view/it "3D view/it").
   3. Il pulsante Aggiungi geometria deve essere premuto per ogni sottoelemento che si desidera aggiungere.
   4. Possono essere selezionati solo i sottoelementi che appartengono allo stesso oggetto padre. Se necessario, utilizzare il pulsante Oggetto per selezionare un oggetto padre diverso.
7. Nel caso si possono rimuovere i sottoelementi:
   1. Premere il pulsante Rimuovi geometria.
   2. Selezionare un sottoelemento nella [vista 3D](/3D_view/it "3D view/it").
   3. Il pulsante Rimuovi geometria deve essere premuto per ogni sottoelemento che si desidera rimuovere.
8. Premere il pulsante OK.

## Opzioni

Per modificare un ShapeBinder fare doppio clic su di esso nella [Vista ad albero](/Tree_view/it "Tree view/it"), o fare clic con il pulsante destro del mouse e selezionare **Modifica il riferimento di forma** dal menu contestuale della [Vista ad albero](/Tree_view "Tree view").

## Note

* Uno ShapeBinder può essere trascinato fuori dal Corpo in cui è annidato e rilasciato sul nodo del documento ![](/images/Document.svg) nella [Vista ad albero](/Tree_view/it "Tree view/it"). Uno ShapeBinder non annidato può essere utilizzato come [Funzione di base](/PartDesign_Body/it#Funzione_di_base "PartDesign Body/it") per un nuovo Corpo.
* Uno ShapeBinder creato da uno schizzo può avere una "direzione utensile" opposta. Ad esempio, una [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") creata dallo schizzo può estendersi nella direzione +Y, mentre una [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it"), con le stesse proprietà, creata dallo ShapeBinder si può estendere nella direzione -Y. Attivando la proprietà Dati**Reversed** (o la casella di controllo) si otterrà questo comportamento.

## PartDesign SubShapeBinder vs. PartDesign ShapeBinder

Lo strumento PartDesign SubShapeBinder e lo strumento PartDesign ShapeBinder sono piuttosto simili. I loro nomi creano un po' di confusione, in quanto entrambi possono fare riferimento a interi oggetti e sottoelementi.

Le principali differenze sono:

* Modificare un ShapeBinder di PartDesign è più semplice. Facendo doppio clic sull'oggetto nella [Vista ad albero](/Tree_view/it "Tree view/it") si aprirà un pannello attività.
* Un ShapeBinder di PartDesign può fare riferimento ad un singolo oggetto intero oppure ai sottoelementi che appartengono a un singolo oggetto padre. Un PartDesign SubShapeBinder non ha queste restrizioni.
* Solo i SubShapeBinder di PartDesign possono fare riferimento alla geometria da un file esterno.
* Un SubShapeBinder di PartDesign traccia sempre il posizionamento relativo della geometria referenziata. Per un PartDesign ShapeBinder questo comportamento è facoltativo tramite la sua proprietà Dati**Trace Support**.
* Solo i PartDesign SubShapeBinder supportano l'offset 2D.

Pur tenendo presente che ognuno di questi strumenti ha i suoi pro e contro e che la scelta può dipendere dal caso d'uso, si può concludere che l'uso di un SubShapeBinder è attualmente consigliato per la maggior parte delle applicazioni per la sua versatilità e gamma di opzioni. Maggiori informazioni su questi strumenti sono disponibili nel video di MangoJelly [FreeCAD For Beginners 34: Part Design Shape Binder vs Sub Shape Binder](https://www.youtube.com/watch?v=ylAMGQ8HV0w%7C).

## Proprietà

* Dati**Support** (`LinkSubListGlobal`): supporto per la geometria.
* Dati**Trace Support** (`Bool`): Il valore predefinito è `false`. Quando è `true`, lo shape binder osserva i posizionamenti relativi delle parti e dei corpi (variando i valori della sua proprietà nascosta Dati**Placement**).

## Esempio

L'esempio utilizza la funzione ShapeBinder per praticare un foro (con o senza filettatura) attraverso più di un corpo. Normalmente la funzione [Foro](/PartDesign_Hole/it "PartDesign Hole/it") di Part Design è limitata a un singolo corpo. L'esempio usa due cubi uno di fronte all'altro ma disallineati in modo arbitrario. I fori vengono creati con schizzi contenenti un cerchio per ogni foro (il diametro viene ignorato dalla funzione foro). Quando si copia lo schizzo sull'altro cubo, sarà nella stessa posizione nel sistema di coordinate del cubo locale. Nell'immagine questo è mostrato dal cerchio bianco sul cubo posteriore. Questo non è ciò che vogliamo, perché il foro in quella posizione non sarebbe allineato al foro nel cubo anteriore.

![](/images/ShapeBinderThroughHole.png)

Esempio di configurazione che mostra come eseguire dei fori attraverso corpi diversi. Il cerchio bianco mostra che copiare gli schizzi non è sufficiente

Ecco come utilizzare la funzione ShapeBinder per ottenerlo:

1. Preparare una scena come da immagine sopra. Se si utilizzano i cubi di [Part](/Part_Workbench/it "Part Workbench/it"), ricordare che è necessario inserirli in un contenitore "Corpo". Ognuno in un contenitore a corpo singolo. Altrimenti le funzioni di [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") non funzionano. Se si costruiscono da schizzi, il sistema dovrebbe creare i contenitori dei corpi di default.
2. Nell'[editor delle Proprietà](/Property_editor/it "Property editor/it") cambiare il Placement del secondo cubo in modo che tocchi il primo cubo con uno spostamento laterale.
3. Selezionare l'ambiente di lavoro PartDesign
4. Creare uno schizzo sulla faccia frontale del primo cubo, posizionare un cerchio in una posizione qualunque e quindi chiudere lo schizzo.
5. Selezionare lo schizzo nella vista ad albero e premere il pulsante ![](/images/PartDesign_Hole.svg) [Foro di PartDesign](/PartDesign_Hole/it "PartDesign Hole/it"). Prima assicurarsi che il primo corpo sia [attivo](/PartDesign_Body/it#Stato_attivo "PartDesign Body/it") (fare doppio clic).
6. Selezionare un foro di dimensioni adeguate. Nell'immagine sopra è stato scelto un foro con anche la lamatura. Chiudere la funzione [Foro](/PartDesign_Hole/it "PartDesign Hole/it").

   :   Ora l'immagine dovrebbe apparire come sopra. Quando si nasconde il primo cubo (selezionare e premere lo spazio) si può vedere che il foro non raggiunge il secondo cubo. Questo non accade neppure quando si seleziona **Attraverso tutto**, o quando si inserisce una distanza molto grande nel pannello delle attività del [Foro](/PartDesign_Hole/it "PartDesign Hole/it"). Il foro è sempre limitato a un unico corpo.
   :   Ecco dove entra in gioco lo ShapeBinder.
7. Per prima cosa selezionare il cubo posteriore. Questa è l'obbiettivo in cui verrà aggiunto lo ShapeBinder. Prima però deve essere [attivato](/PartDesign_Body/it#Stato_attivo "PartDesign Body/it"), quindi assicurarsi di aver fatto doppio clic su di esso.
8. Nella vista ad albero selezionare lo schizzo utilizzato per il foro. È importante non attivare il primo corpo.
9. Selezionare la Funzione shapeBinder.

   :   Si dovrebbe aprire un pannello di comando. Nella riga **Oggetto** dovrebbe essere visibile il nome dello schizzo. Se è stata selezionata la funzione senza selezionare lo schizzo, si può premere Oggetto ora e quindi selezionare lo schizzo dall'elenco. Si consiglia di selezionarlo prima per scegliere quello giusto, soprattutto se si dispone di molti schizzi con nomi generati automaticamente come Sketch001 e seguenti. **Aggiungi geometria** non serve, perché si vuole selezionare l'intero schizzo. **Aggiungi geometria** viene utilizzato solo se si vogliono selezionare alcune parti.
10. Premere OK per chiudere il pannello delle attività e verificare che un nuovo elemento sia stato aggiunto all'albero del secondo cubo.

    :   Quando si commuta la visibilità dello ShapeBinder, questo viene visualizzato in giallo nella [vista 3D](/3D_view/it "3D view/it"). Tuttavia è nella posizione sbagliata, proprio come il cerchio bianco nell'immagine sopra. Ciò è dovuto all'impostazione predefinita del parametro Trace.
11. Nel PropertyView dello ShapeBinder nella scheda Dati impostare il parametro **Trace Support** su true. L'impostazione predefinita è false.

    :   Con **Trace Support** true, ShapeBinder non è influenzato dalle trasformazioni locali del corpo di destinazione, ad es. le traslazioni fatte prima. La forma rimane esattamente dove si trovava la forma originale dell'oggetto anteriore. Provare a spostare l'oggetto in primo piano e si vedrà lo ShapeBinder seguire sempre la nuova posizione.
12. Selezionare lo ShapeBinder nell'albero e premere il pulsante ![](/images/PartDesign_Hole.svg) [Foro di PartDesign](/PartDesign_Hole/it "PartDesign Hole/it"). Se si inseriscono gli stessi valori del foro iniziale si noterà che nel secondo cubo non viene creato alcun foro. Questo perché in alcuni casi uno ShapeBinder ha una "direzione dell'utensile" opposta rispetto allo schizzo di riferimento. Per risolvere questo problema selezionare la casella Invertita. Premere OK per terminare.
13. Ora i due fori nei due diversi corpi sono collegati tra di loro. Se si modifica la posizione del cerchio nello schizzo, entrambi i fori si adatteranno. Si possono anche aggiungere nuovi cerchi nello schizzo per creare ulteriori fori collegati.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_ShapeBinder/it&oldid=1561330>"