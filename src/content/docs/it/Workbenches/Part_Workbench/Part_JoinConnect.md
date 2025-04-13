---
title: Part Congiungi oggetti
---
|  |
| --- |
| Part Congiungi |
| Posizione nel menu |
| Part → Giunzione → Congiungi oggetti |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Incorpora oggetto](/Part_JoinEmbed/it "Part JoinEmbed/it"), [Ritaglio per l'oggetto](/Part_JoinCutout/it "Part JoinCutout/it"), [Operazioni booleane](/Part_Boolean/it "Part Boolean/it"), [Spessore](/Part_Thickness/it "Part Thickness/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_JoinConnect.svg) **Part Congiungi** unisce due oggetti vuoti internamente, ad esempio dei tubi. Si possono anche unire gusci (shell) e wire.

![](/images/JoinFeatures_Connect.png)

## Utilizzo

1. Selezionare due oggetti da unire. L'ordine di selezione non è importante. È sufficiente selezionare una qualsiasi sotto-forma di ciascun oggetto (ad esempio, delle facce). È inoltre possibile selezionare un composto contenente tutte le forme da collegare, ad esempio una [Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it").
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Part_JoinConnect.svg) Congiungi oggetti.
   * Selezionare l'opzione **Part → Giunzione → ![](/images/Part_JoinConnect.svg) Congiungi oggetti** dal menu.
3. Viene creato un oggetto parametrico Connect. Gli oggetti originali vengono nascosti e il risultato della connessione viene mostrato nella [Vista 3D](/3D_view/it "3D view/it").

## Proprietà

Connect

* Dati**Objects**: Elenco degli oggetti da collegare. In generale, sono necessari almeno due oggetti, ma va bene anche un singolo composto contenente le forme da collegare. (Da FreeCAD v0.17.8053, questa proprietà non viene visualizzata nell'[editor delle proprietà](/Property_editor/it "Property editor/it"), e si può accedere solo tramite [Python](#Script)).
* Dati**Refine**: Stabilisce se alla forma finale deve applicare l'operazione [Affina](/Part_RefineShape/it "Part RefineShape/it"), oppure no. Il valore di default è stabilito dalla casella di controllo 'Affina automaticamente la forma dopo l'operazione booleana' nelle [preferenze di PartDesign](/PartDesign_Preferences/it "PartDesign Preferences/it").
* Dati**Tolerance**: valore di "confusione". Questa è una tolleranza supplementare da applicare durante la ricerca di intersezioni, oltre alle tolleranze memorizzate nelle forme di ingresso.

## Esempio

1. Creare un tubo applicando uno [Spessore](/Part_Thickness/it "Part Thickness/it") a un [cilindro](/Part_Cylinder/it "Part Cylinder/it"):   
   ![](/images/JoinFeatures_Example_step1.png)
2. Creare un nuovo tubo di diametro inferiore e [posizionarlo](/Placement/it "Placement/it") in modo da perforare la parete del primo tubo:   
   ![](/images/JoinFeatures_Example_step2.png)
3. Selezionare il primo tubo, poi il secondo tubo (l'ordine di selezione non è importante), infine selezionare l'opzione 'Congiungi oggetti' dalla barra degli strumenti a discesa degli strumenti di Giunzione.   
   ![](/images/JoinFeatures_Example_step3_Connect.png)
4. Per visualizzare gli interni, utilizzare uno degli strumenti di sezione: [Piano di taglio](/Std_ToggleClipPlane/it "Std ToggleClipPlane/it") del menu Visualizza, [Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it") di Arch, o [Piano di taglio](/Arch_CutPlane/it "Arch CutPlane/it") di Arch. Nell'immagine seguente, è stato utilizzato il Piano si sezione di Arch.  
   ![](/images/JoinFeatures_Example_step4_Connect.png)

## Algoritmo

Gli algoritmi sottostanti agli strumenti di Giunzione sono abbastanza semplici, ed è importante comprenderli per utilizzarli correttamente. L'algoritmo di Connect, in particolare, è un po' più complesso di altri, ma generalmente è sufficiente pensarlo come una variante simmetrica dell'algoritmo di [Incorpora](/Part_JoinEmbed/it#Algoritmo "Part JoinEmbed/it")

1. Ogni oggetto è diviso in pezzi dagli incroci con altri oggetti. (vedere [Part Frammenti booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"))

2. Di tutte le parti di un oggetto, viene conservata solo la più grande; tutto il resto viene scartato.

3. I pezzi delle intersezione che toccano almeno due oggetti vengono aggiunti ai risultati. Quindi, i pezzi sono uniti insieme per formare il risultato di Connect.

### Note

* Se al passo 1 ogni oggetto rimane in un unico pezzo, il risultato di Congiungi è equivalente a una [unione](/Part_Fuse "Part Fuse") di oggetti.
* Ora, tutti i composti sono esplosi prima della congiunzione. Ciò significa che i composti che si intersecano, che non sono validi per tutte le altre operazioni booleane, sono validi per Congiungi. (Questo può essere modificato in futuro.)
* Il pezzo "più grande" è quello che ha la massa maggiore. Cioè, per i solidi sono confrontati i volumi, per i gusci e le facce sono confrontate le zone, e così via.
* Da FreeCAD v0.17.8053, e con la versione 6.9.0 di OCC, Congiungi è quasi veloce come tutte le altre operazioni booleane. Per le versioni precedenti, Congiungi è circa 5 volte più lento di una normale operazione booleana, e funziona solo su solidi.

## Script

Gli strumenti di Giunzione possono essere utilizzati in [macro](/Macros/it "Macros/it") e dalla [Console Python](/Python_console "Python console") utilizzando la seguente funzione:

```
BOPTools.JoinFeatures.makeConnect(name)

```

* Crea una funzione Connect vuota (o altra funzione Join, secondo la modalità passata). La proprietà 'Objects' deve essere assegnata in modo esplicito, in seguito.
* Restituisce l'oggetto appena creato.

Connect può essere applicato anche a forme piane, senza la necessità di avere un oggetto documento, tramite:

```
Part.BOPTools.JoinAPI.connect(list_of_shapes, tolerance = 0.0)

```

Questo può essere utile per creare funzioni personalizzate con script Python.

Esempio:

```
import Part
j = Part.BOPTools.JoinFeatures.makeConnect(name= 'Connect')
j.Objects = FreeCADGui.Selection.getSelection()

```

Lo strumento è implementato in Python, vedere /Mod/Part/BOPTools/JoinFeatures.py ([Github link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/JoinFeatures.py)) in cui è installato FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinConnect/it&oldid=1497693>"