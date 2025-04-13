---
title: Part Affetta in composto
---
|  |
| --- |
| Part Affetta in composto |
| Posizione nel menu |
| Parte → Dividi → Affetta in composto |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Frammenti Booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"), [Part XOR](/Part_XOR/it "Part XOR/it"), [Giunzione](/Part_CompJoinFeatures/it "Part CompJoinFeatures/it"), [Operazioni booleane](/Part_Boolean/it "Part Boolean/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_Slice.svg) Affetta in composto serve per dividere le forme intersecandole con altre forme. Ad esempio, con un cubo e un piano, viene creato un composto di due solidi.

![](/images/Part_Slice_Demo.png)

Nella figura sopraː i pezzi sono stati separati manualmente dopo l'operazione, per rendere visibili le singole parti

Ci sono due comandi per affettare una forma: ![](/images/Part_SliceApart.svg) [Affetta in parti](/Part_SliceApart/it "Part SliceApart/it") e ![](/images/Part_Slice.svg) Affetta in composto. Entrambi creano una funzione parametrica Slice, che mette i pezzi tagliati in un composto, ma ![](/images/Part_SliceApart.svg) [Affetta in parti](/Part_SliceApart/it "Part SliceApart/it") esplode il composto risultante in oggetti separati. "Affetta in composto" è completamente parametrico e non crea problemi se il numero di pezzi cambia. "Affetta in parti" non aggiorna il numero di oggetti quando il numero di pezzi cambia.

La forma in uscita occupa lo stesso spazio dell'originale, ma è divisa dove interseca le altre forme. I singoli pezzi sono raggruppati in un composto (o in un compsolid), quindi sembra che l'oggetto sia ancora un unico pezzo. Per disporre dei singoli pezzi è necessario separare gli elementi del composto. Se si desidera accedere ai singoli pezzi in modo parametrico, è possibile utilizzare ![](/images/Part_CompoundFilter.svg) [Part Filtra composto](/Part_CompoundFilter/it "Part CompoundFilter/it"). Per un utilizzo rapido e non parametrico usare ![](/images/Draft_Downgrade.svg) [Draft Declassa](/Draft_Downgrade/it "Draft Downgrade/it").

Lo strumento dispone di tre modalità: "Standard", "Split", e "CompSolid". Non esiste un modulo di selezione, sono predefiniti ma è possibile accedervi dopo l'operazione al livello delle fette risultanti.

Le modalità "Standard" e "Split" differiscono per l'azione dello strumento su polilinee (wire), gusci (shell) e compsolid: se si usa "Split", essi sono separati; se si usa "Standard", essi sono mantenuti insieme (si ottengono dei segmenti in più).

La struttura del composto nelle modalità "Split" e "Standard" segue la struttura dei composti della forma da suddividere.

In modalità "CompSolid", il risultato è un compsolid (o un composto di compsolid, se i solidi risultanti formano più di un'isola di connessione). Un compsolid è formato da un gruppo di solidi collegati dalle facce, esse si rapportano ai solidi come le polilinee (wire) si rapportano ai bordi (edge), e i gusci (shell) si rapportano alle facce, il nome è probabilmente l'abbreviazione di "solido composito"

L'azione complessiva dello strumento è molto simile a quella di ![](/images/Part_BooleanFragments.svg) [Frammenti booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"), tranne che il risultato contiene solo i pezzi dalla prima forma.

## Utilizzo

1. Selezionare prima l'oggetto da dividere, e poi alcuni oggetti con cui dividerlo.   
    L'ordine di selezione è importante. I composti con auto-intersezioni non sono ammessi (le auto-intersezioni a volte possono essere individuate facendo passare il composto attraverso lo strumento ![](/images/Part_BooleanFragments.svg) [Frammenti booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"))
2. Richiamare il comando Part Affetta in diversi modi:
   * Premere il pulsante ![](/images/Part_Slice.svg) Part Affetta nella barra degli strumenti Part
   * Usare la voce **Parte → Dividi → Affetta in un composto** nel menu Parte

1. Notaː Gli oggetti con cui si vuole tagliare (utensili) devono separare completamente l'oggetto da tagliare. Quindi, per esempio, un cubo non può essere tagliato da una polilinea, ma da un piano derivato dall'estrusione di una polilinea.

Viene creato un oggetto parametrico Slice. Vengono nascosti gli oggetti originali , e nella [Vista 3D](/3D_view/it "3D view/it") viene mostrato il risultato dell'intersezione.

### Struttura ad albero di Slice

Il comando Affetta in composto crea un oggetto affettato. Nell'esempio seguente un cubo viene affettato da una faccia.

Vengono create le fette e tutte le fette sono unite in un composto.

![](/images/Part_SliceTree.png)

## Proprietà

Slice

* Dati**Base**: L'oggetto da dividere.
* Dati**Tools**: Elenco di oggetti con cui dividere. (da FreeCAD v0.17.8053, questa proprietà non viene visualizzata nell'editor delle proprietà, e si può accedere solo tramite Python).
* Dati**Mode**: "Standard", "Split", o "CompSolid". "Split" è il default. Standard e Split differiscono per l'azione dello strumento sull'aggregazione delle forme; se "Split", essi sono separati; altrimenti essi sono mantenuti insieme (si ottengono dei segmenti in più).
* Dati**Tolerance**: Valore di "confusione". Questa è una tolleranza supplementare da applicare durante la ricerca delle intersezioni, oltre alle tolleranze memorizzate nelle forme in ingresso.

̈Notaː Le proprietà sono accessibili sull'oggetto interno delle sezioni, non sul livello del risultato.

## Esempio

## Creare un puzzle

1. Passare nell'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")
   * Creare un nuovo schizzo. Disegnare un rettangolo che delimita la forma complessiva del puzzle.
   * Chiudere lo schizzo.  
     ![](/images/Slice_example_step1.png)
2. Passare nell'ambiente [Part](/Part_Workbench/it "Part Workbench/it").
   * Selezionare lo schizzo, e scegliere **Part → ![](/images/Part_MakeFace.svg) [Crea faccia da polilinea](/Part_MakeFace/it "Part MakeFace/it")**.  
     ![](/images/Slice_example_step2.png)
3. Ritornare all'ambiente ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")
   * Creare un altro schizzo sullo stesso piano.
   * Utilizzare lo strumento polilinea per disegnare le linee che divideranno il puzzle in pezzi.  
     ![](/images/Slice_example_step3.png)
4. Passare all'ambiente ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it").
   * Selezionare lo schizzo divisore, e applicare [Frammenti Booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"). Questo inserisce i vertici nel punto in cui le linee dello schizzo divisore si intersecano. Per poter fare il passo successivo del lavoro è indispensabile avere questi vertici.  
     ![](/images/Slice_example_step4.png)
5. Selezionare la faccia rettangolare, ed i Frammenti booleani dello schizzo divisore, e applicare Affetta in composto.  
   ![](/images/Slice_example_step5.png)
6. Utilizzare [Esplodi composto](/Part_ExplodeCompound/it "Part ExplodeCompound/it") sulla faccia affettata, per dividere in singoli pezzi il composto creato da Affetta in composto.

**Nota:** I passaggi 5 e 6 possono essere eseguiti con un solo clic usando [Affetta in parti](/Part_SliceApart/it "Part SliceApart/it")

## Note

* Lo strumento è stato introdotto in FreeCAD v0.17.8053. FreeCAD deve essere compilato con OCC 6.9.0 o successivo; in caso contrario, lo strumento non sarà disponibile.
* ̈Le proprietà sono accessibili sulle parti interne dell'oggetto affettato, non a livello del risultato.
* Gli oggetti che servono per affettare (utensili) devono separare completamente l'oggetto da affettare. Quindi un cubo non può essere tagliato da una polilinea, ma, ad esempio, da un piano derivato dall'estrusione della polilinea.
* L'oggetto affettato deve superare il controllo BOP. Vedere ![](/images/Part_CheckGeometry.svg) [Part controlla geometria](/Part_CheckGeometry/it "Part CheckGeometry/it").

## Script

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
BOPTools.SplitFeatures.makeSlice(name)

```

* Crea una funzione Slice vuota. Le proprietà 'Objects' devono essere assegnate in modo esplicito, in seguito.
* Restituisce l'oggetto appena creato.

Slice può essere applicato anche a forme piane, senza la necessità di avere un document object, attraverso:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Questo può essere utile per creare delle funzioni personalizzate con script Python.

Esempio:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

Lo strumento è implementato in Python, vedere see /Mod/Part/BOPTools/SplitFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) nella directory di installazione di FreeCAD.

## Tutorial

* [FreeCad 0.18 Part WB using Slice and Slice Apart](https://www.youtube.com/watch?v=tzHkQaHgrfQ) (English language), author: Ha Gei

* [FreeCAD Slice und Slice Apart und andere Tricks](https://www.youtube.com/watch?v=JJAL5JmqqKQ) (German language), author: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Slice/it&oldid=1364807>"