---
title: PartDesign Scala
---

|                                                                            |
| -------------------------------------------------------------------------- |
| Scala                                                                      |
| Posizione nel menu                                                         |
| PartDesign → Multitrasformazione                                           |
| Ambiente                                                                   |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"), Completo |
| Avvio veloce                                                               |
| _Nessuno_                                                                  |
| Introdotto nella versione                                                  |
| -                                                                          |
| Vedere anche                                                               |
| _Nessuno_                                                                  |
|                                                                            |

## Descrizione

Lo strumento **Scala** prende come input un insieme di una o più operazioni selezionate ('gli originali') e li scala per un determinato fattore. Poiché la scalatura avviene attorno al centro di gravità delle operazioni selezionate, di solito gli originali scompaiono all'interno delle versioni in scala. Pertanto, in genere è utile solo per effettuare il ridimensionamento come parte di una operazione di Multi-trasformazione.

![](/images/PartDesign_Scaled-01.png) ![](/images/Button_right.svg) ![](/images/PartDesign_Scaled-02.png)

A linear pattern and a polar pattern → Scaled the linear pattern with 3 steps (occurrences) and the polar pattern with 12 steps

If there is no previous transformation within the ![](/images/PartDesign_MultiTransform.svg) [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") feature, scaled items will be placed at the same position as the base feature. This may result in unexpected shapes if the base feature isn't covered completely by the scaled object. And thus it is not recommended to use **Scaled** as the first transformation of a MultiTransform feature.

![](/images/PartDesign_Scaled-03.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-04.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-05.png)

A base feature with a hole → Scaled object with 2 occurrences → Scaled object with 4 occurrences

A partire da FreeCAD 0.15, questa funzione non è disponibile direttamente, ma è inclusa come componente dello strumento [Multitrasformazione](/PartDesign_MultiTransform/it "PartDesign MultiTransform/it").

### Scaling a transformed feature

1. Do one of the following:
   - Double-click the MultiTransform object in the [Tree view](/Tree_view "Tree view").
   - Right-click the MultiTransform object in the [Tree view](/Tree_view "Tree view") and select **Edit MultiTransform** from the context menu.
2. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens.
3. Right-click in the **Transformations** list and select **Add scaled transformation** from the context menu.
4. A **Scaled** item is added to the list and the task panel is extended at the bottom to allow to set the **Factor** and **Occurrences**. See [Options](#Options) for more information.
5. Press the OK bar at the bottom.
6. Press the OK button at the top to finish.

### Scaling a single feature

1. Select a feature of the current body in the [Tree view](/Tree_view "Tree view").
2. Do one of the following:
   - Press the ![](/images/PartDesign_MultiTransform.svg) [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") button.
   - Select the **Part Design → Apply a pattern → ![](/images/PartDesign_MultiTransform.svg) Create MultiTransform** option from the menu.
3. The **MultiTransform parameters** [task panel](/Task_panel "Task panel") opens. See above.

### Opzioni

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | Quando si crea una operazione Scala, la finestra di dialogo **Parametri della scalatura** offre le seguenti opzioni: Selezionare gli originali La finestra _Vista combinata_ mostra lista delle operazioni (oggetti) "originali" che devono essere scalati. Fare clic su una operazione per aggiungerla alla lista. Fattore di scala e numero di copie **Factor** e **Occurrences** specificano rispettivamente il fattore di scala massimo e il numero totale di forme scalate (inclusa l'originale) che si vuole ottenere. |

- **Factor**: The factor to which the last feature is scaled.
- **Occurrences**: Number of steps from unscaled (1) to **Factor** (including base and last feature).
  - A scaled transformation accepts the number of occurrences of the previous transformation as maximum value or any integer divisor of that number returning an integer result. So `12`, `6`, `4`, `3`, and `2` are valid for a Linear or Polar Pattern with 12 occurrences.
  - A scaled single feature accepts any integer number larger than 1.

## Notes

- The center of scaling is the features's center of gravity and that may cause:
  - A growing item to protrude on the opposite side of the parent feature.
  - A shrinking item to lose all contact with the parent feature and disappear.
  - A shrinking pocket to become an invisible cavity inside the parent feature.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Scaled/it&oldid=1461387>"
