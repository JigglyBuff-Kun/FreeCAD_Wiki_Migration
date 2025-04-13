---
title: TechDrawː Proietta forma
---
|  |
| --- |
| TechDraw Proietta forma |
| Posizione nel menu |
| TechDraw → Viste TechDraw → Project shape... |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.20 |
| Vedere anche |
| [Draft Vista forma 2D](/Draft_Shape2DView/it "Draft Shape2DView/it") |
|  |

## Descrizione

Lo strumento **TechDraw Proietta forma** crea proiezioni di forme. Le proiezioni vengono create nella [Vista 3D](/3D_view/it "3D view/it") e non in una [Pagina TechDraw](/TechDraw_PageDefault/it "TechDraw PageDefault/it").

![](/images/ProjectShape1_it.png)

## Utilizzo

1. Facoltativamente ruotare la [vista 3D](/3D_view/it "3D view/it"). Gli oggetti verranno proiettati su un piano parallelo allo schermo, ovvero lungo la direzione della telecamera della vista 3D, che viene utilizzata come proprietà Dati**Direction** predefinita.
2. Selezionare uno o più oggetti. Per ogni oggetto verrà creata una proiezione separata.
3. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_ProjectShape.svg) Proietta forma....
   * Selezionare l'opzione **TechDraw → Viste TechDraw → ![](/images/TechDraw_ProjectShape.svg) Proietta forma...** dal menu.
4. Si apre il pannello delle attività **Project Shapes**. Vedere [Proprietà](#Proprietà).
5. Impostare le opzioni desiderate.
6. Le opzioni selezionate non dovrebbero generare una proiezione vuota poiché ciò causerebbe un errore. Ad esempio, per un oggetto con solo spigoli vivi come un [Part Box](/Part_Box/it "Part Box/it"), è necessario selezionare l'opzione **Mostra gli spigoli vivi** e/o **Nascondi gli spigoli vivi**.
7. Premere il pulsante OK.
8. La proiezione è posizionata sul piano XY.
9. Facoltativamente, modificare la proprietà Dati**Placement** e/o la proprietà Dati**Direction** della proiezione.

## Proprietà

Un oggetto Proiezione deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Projection

* Dati**Source** (`Link`): La forma da proiettare.
* Dati**Direction** (`Vector`): La direzione della proiezione. Questo è il vettore normale del piano di proiezione.
* Dati**VCompound** (`Bool`): Se `true`, vengono mostrati gli spigoli vivi visibili. Esempio: tutti i bordi di un [Part Box](/Part_Box/it "Part Box/it").
* Dati**Rg1 Line VCompound** (`Bool`): Se `true`, vengono visualizzati i bordi smussati visibili. Esempio: i bordi tra un raccordo e le sue facce adiacenti.
* Dati**Rg NLine VCompound** (`Bool`): Se `true`, vengono mostrati i bordi cuciti (seme) visibili. Esempio: la cucitura di una faccia cilindrica a 360°.
* Dati**Out Line VCompound** (`Bool`): se `true`, vengono mostrati i bordi del contorno visibili (che non sono nitidi). Esempio: la vista laterale di un [Part Cilindro](/Part_Cylinder/it "Part Cylinder/it") ha due di questi bordi.
* Dati**Iso Line VCompound** (`Bool`): Se `true`, vengono mostrati gli isoparametri visibili. Non funziona attualmente.
* Dati**HCompound** (`Bool`): Se `true`, vengono visualizzati gli spigoli vivi nascosti.
* Dati**Rg1 Line HCompound** (`Bool`): Se `true`, vengono visualizzati i bordi smussati nascosti
* Dati**Rg NLine HCompound** (`Bool`): Se `true`, vengono visualizzati i bordi cuciti nascosti.
* Dati**Out Line HCompound** (`Bool`): Se `true`, vengono visualizzati i bordi del contorno nascosti.
* Dati**Iso Line HCompound** (`Bool`): Se `true`, vengono visualizzati gli isoparametri nascosti. Non funziona attualmente.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectShape/it&oldid=1490190>"