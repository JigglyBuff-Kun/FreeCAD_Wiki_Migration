---
title: Part Affetta in parti
---
|  |
| --- |
| Part Affetta in parti |
| Posizione nel menu |
| Parte → Dividi → Affetta in parti |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.18 |
| Vedere anche |
| [Affetta in composto](/Part_Slice/it "Part Slice/it"), [Esplodi il composto](/Part_ExplodeCompound/it "Part ExplodeCompound/it") |
|  |

## Descrizione

Strumento per dividere le forme per intersezione con altre forme. Ad esempio, per un cubo e un piano, vengono creati due solidi.
![](/images/Part_Slice_Demo.png)

Nella figura sopraː i pezzi sono stati separati manualmente dopo l'operazione, per rendere visibili le singole parti.

Affetta in parti è uguale a ![](/images/Part_Slice.svg) [Affetta in composto](/Part_Slice/it "Part Slice/it") seguito da ![](/images/Part_ExplodeCompound.svg) [Esplodi composto](/Part_ExplodeCompound/it "Part ExplodeCompound/it"). Mentre "Affetta in composto" è completamente parametrico e non crea problemi se il numero di pezzi cambia, "Affetta in parti" non aggiorna il numero di oggetti quando il numero di pezzi cambia.
Entrambi creano la funzione parametrica Slice, che mette i pezzi tagliati in un composto, ma "Affetta in parti" esplode il composto risultante in oggetti separati.

Le forme di uscita occupano lo stesso spazio dell'originale. Ma sono divise dove si intersecano con altre forme. I pezzi divisi sono pezzi individuali.

Per ulteriori informazioni, visitare la pagina [Affetta in composto](/Part_Slice/it "Part Slice/it").

### Struttura ad albero di Affetta in parti

Il comando Affetta una parte crea più di un solo oggetto affettato. Nell'esempio seguente un cubo viene affettato da una faccia.

Vengono create le fette e per ogni fetta viene creato un [CompoundFilter](/Part_CompoundFilter/it "Part CompoundFilter/it"), quindi la stessa porzione è presente più volte, sotto ad ogni CompoundFilter. Tutti questi CompoundFilters sono uniti in un Composto.

![](/images/Part_SliceApartTree.png)

## Esempio

* Creare un puzzle: vedere i passaggi da 1 a 6 dell'esempio [Affetta in composto](/Part_Slice/it "Part Slice/it").

## Script

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
BOPTools.SplitFeatures.makeSlice(name)

```

Impostare la modalità su **split** per dividere in parti

* Crea una funzione Slice vuota. Le proprietà 'Base' e 'Tools' devono essere assegnate esplicitamente, in seguito.
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

## Note

Affetta in parti è stato introdotto in FreeCAD v0.18.15506. FreeCAD deve essere compilato con OCC 6.9.0 o successivo; in caso contrario, lo strumento non è disponibile.

## Video-Tutorials

* <https://www.youtube.com/watch?v=tzHkQaHgrfQ> : FreeCad 0.18 PART WB using SLICE and SLICE APART (English language), author: Ha Gei

* <https://www.youtube.com/watch?v=JJAL5JmqqKQ> : FreeCAD Slice und Slice Apart und andere Tricks (German lanuage), author: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SliceApart/it&oldid=1364755>"