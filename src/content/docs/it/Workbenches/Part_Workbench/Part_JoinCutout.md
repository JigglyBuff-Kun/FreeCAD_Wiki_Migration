---
title: Part Ritaglio per l'oggetto
---
|  |
| --- |
| Part Ritaglio per l'oggetto |
| Posizione nel menu |
| Part → Giunzione → Ritaglio per l'oggetto |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.16 |
| Vedere anche |
| [Congiungi oggetto](/Part_JoinConnect/it "Part JoinConnect/it"), [Incorpora oggetto](/Part_JoinEmbed/it "Part JoinEmbed/it"), [Operazioni booleane](/Part_Boolean/it "Part Boolean/it"), [Spessore](/Part_Thickness/it "Part Thickness/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_JoinCutout.svg) **Ritaglio per l'oggetto** crea un ritaglio in un oggetto con pareti (es. un tubo) per adattarlo a un altro oggetto con pareti.

![](/images/JoinFeatures_Cutout.png)

## Utilizzo

1. Selezionare prima l'oggetto base, quindi l'oggetto per definire il ritaglio. L'ordine di selezione è importante. È sufficiente selezionare una sottoforma di ciascun oggetto (ad esempio facce).
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Part_JoinCutout.svg) Ritaglio per l'oggetto.
   * Selezionare l'opzione **Part → Giunzioni → ![](/images/Part_JoinCutout.svg) Ritaglio per l'oggetto** dal menu.
3. Viene creato un oggetto Part JoinFeature, con la modalità impostata su "Cutout" (ritaglio). Gli oggetti originali vengono nascosti e il risultato del taglio viene mostrato nella [Vista 3D](/3D_view/it "3D view/it").

## Proprietà

Base

* Dati**Base**: Riferisce l'oggetto di base (quello da cui si vuole asportare una porzione). L'oggetto deve essere un solido unico.
* Dati**Tool**: Riferisce l'oggetto da usare come utensile (l'oggetto che crea il ritaglio). L'oggetto può essere un solido unico, oppure un [composto valido](/Part_Compound/it "Part Compound/it") di solidi.
* Dati**Mode**: Stabilisce la modalità dell'operazione di Giunzione, che in questo caso è uguale a 'Cutout' (cambiando modalità si trasforma lo strumento in uno strumento Giunzione diverso). Il valore 'bypass' può essere usato per disabilitare temporaneamente i lunghi calcoli (in questo caso, viene creato un oggetto Composto formato dagli oggetti Base e Tool , che è un'operazione veloce).
* Dati**Refine**: Stabilisce se alla forma finale deve essere applicata l'operazione [Affina](/Part_RefineShape/it "Part RefineShape/it"), oppure no. Il valore di default è stabilito dalla casella di controllo 'Affina automaticamente la forma dopo l'operazione booleana' nelle preferenze di PartDesign. Quando la proprietà Mode è impostata su 'bypass', Affina viene ignorato (Refine non è mai applicato).

## Esempio

1. Creare un tubo applicando uno [Spessore](/Part_Thickness/it "Part Thickness/it") a un [cilindro](/Part_Cylinder/it "Part Cylinder/it"):   
   ![](/images/JoinFeatures_Example_step1.png)
2. Creare un nuovo tubo di diametro inferiore e [posizionarlo](/Placement/it "Placement/it") in modo da perforare la parete del primo tubo:   
   ![](/images/JoinFeatures_Example_step2.png)
3. Selezionare il primo tubo, poi il secondo tubo (l'ordine di selezione è importante), infine selezionare l'opzione 'Ritaglio per l'oggetto' dalla barra degli strumenti a discesa degli strumenti Giunzione.   
   ![](/images/JoinFeatures_Example_step3_Cutout.png)

## Algoritmo

Gli algoritmi sottostanti agli strumenti di Giunzione sono abbastanza semplici, ed è importante comprenderli per utilizzarli correttamente.

1. L'oggetto Base viene [tagliato](/Part_Cut/it "Part Cut/it") dall'oggetto Tool con una operazione booleana. La forma risultante è un [composto](/Part_Compound/it "Part Compound/it"), cioè un insieme di solidi non intersecanti (tipicamente, due).

2. Il composto risultante viene filtrato e viene conservato solo il solido più grande.

3. Se la proprietà Refine è impostata su true, la forma risultante viene [affinata](/Part_RefineShape/it "Part RefineShape/it").
  
  
![](/images/JoinFeatures-Algo-Cutout.png)

### Note

* Se dopo il passaggio 1, l'oggetto rimane ancora in un pezzo unico, il risultato dell'asportazione è equivalente a un [taglio booleano](/Part_Cut/it "Part Cut/it") di Base con Tool.
* Attualmente, quando viene fornito un composto come Base lo strumento produce un risultato inaspettato. Questo potrà essere modificato in futuro.
* Poiché il pezzo più grande è determinato confrontando i volumi, lo strumento può funzionare solo con i solidi. Questo potrà essere modificato in futuro.

## Script

Lo strumento Giunzione può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console di Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout')

```

* Crea una funzione Cutout vuota (o altra funzione Join, secondo la modalità passata). Le proprietà Base e Tool devono essere assegnate in modo esplicito, in seguito.
* Restituisce l'oggetto appena creato.

Esempio:

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

Lo strumento è implementato in Python, vedere /Mod/Part/JoinFeatures.py ([Github link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/JoinFeatures.py)) in cui è installato FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinCutout/it&oldid=1497715>"