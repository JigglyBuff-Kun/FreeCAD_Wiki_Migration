---
title: Strumenti Misura la distanza
---
:::caution
Questo comando è obsoleto, non sarà disponibile nellaversione 1.0 e superiori.Utilizzare al suo postoMisurare.
:::

|  |
| --- |
| Misura la distanza |
| Posizione nel menu |
| Strumenti → Misura la distanza |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Misurare](/Std_Measure/it "Std Measure/it"), [Quotatura di Draft](/Draft_Dimension/it "Draft Dimension/it") |
|  |

## Descrizione

Il comando **Misura la distanza** crea un oggetto distanza che misura e visualizza la distanza tra due punti.

## Utilizzo

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Std_MeasureDistance.svg) Misura la distanza.
   * Selezionare l'opzione **Strumenti → ![](/images/Std_MeasureDistance.svg) Misura la distanza** nel menu.
2. Selezionare il primo punto della dimensione in qualsiasi punto di un oggetto nella [vista 3D](/3D_view/it "3D view/it").
3. Selezionare il secondo punto della dimensione in qualsiasi punto di un oggetto nella vista 3D.
4. L'ordine di selezione dei punti può avere un impatto sulla posizione della linea di quota.
5. Facoltativamente, capovolgere la posizione della linea di quota modificando la proprietà Vista**Mirror** dell'oggetto distanza.

## Note

* Non è possibile utilizzare gli strumenti snap di [Draft](/Draft_Workbench/it "Draft Workbench/it") con questo comando.
* Per aggiungere quote ai disegni utilizzare gli strumenti di quotatura da [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it").
* Per strumenti di misurazione più completi, installare ![](/images/Manipulator_workbench_icon.svg) [Manipulator](/Manipulator_Workbench/it "Manipulator Workbench/it") (un [ambiente complementare](/External_workbenches/it "External workbenches/it")).

## Proprietà

### Dati

Base

* Dati**Label**: di default l'etichetta contiene la distanza misurata, ma questa distanza non viene aggiornata quando P1 o P2 vengono successivamente modificati.

Measurement

* Dati**P1**: il primo punto di dimensione.
* Dati**P2**: il secondo punto di dimensione.
* Dati**Distance**: (sola lettura) la distanza misurata tra P1 e P2.

### Vista

Base

* Vista**Dist Factor**: questo fattore, moltiplicato per la distanza misurata, determina l'offset della linea di quota.
* Vista**Font Size**: l'altezza delle lettere (altezza della linea in pixel).
* Vista**Mirror**: se impostato su `true`, la posizione della linea di quota relativa a P1 e P2 viene invertita.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MeasureDistance/it&oldid=1442853>"