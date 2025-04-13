---
title: Part Design Scanalatura
---
|  |
| --- |
| Scanalatura |
| Posizione nel menu |
| PartDesign → Scanalatura |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it") |
|  |

## Descrizione

Questo strumento rivoluziona uno schizzo selezionato o un oggetto 2D attorno ad un dato asse, asportando del materiale dall'oggetto di supporto.

![](/images/PartDesign_Groove_example.svg)

A sinistra lo schizzo (A) è ruotato attorno all'asse (B); a destra la scanalatura risultante sul solido (C).

## Utilizzo

1. Selezionare lo schizzo da ruotare.

   :   È possibile utilizzare una faccia di un solido esistente. versione 0.17 e superiori
   :   Lo schizzo deve essere mappato sulla faccia planare di un solido esistente o di una funzione di Part Design, altrimenti viene visualizzato un messaggio di errore. versione 0.16 e precedenti
2. Premere il pulsante ![](/images/PartDesign_Groove.svg) **Scanalatura**.
3. Impostare i parametri della scanalatura (vedere la prossima sezione).
4. Premere OK.

## Opzioni

Quando si crea una scanalatura, i dialoghi **Parametri Groove** offrono diversi parametri che specificano come deve essere ruotato lo sketch.

|  |  |
| --- | --- |
|  | AssiType [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  Type offers five different ways of specifying the angle of the groove: Dimension Enter a numeric value for the **Angle** of the groove. With the option **Symmetric to plane** the groove will extend half the given angle to either side of the sketch or face. Through all The groove will extend up to the last face of the support it encounters in its direction. With the option **Symmetric to plane** the groove will cut through all material in both directions. To first The groove will extend up to the first face of the support it encounters in its direction. Up to face The groove will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body. Two dimensions This allows to enter a second angle in which the groove should extend in the opposite direction. The directions can be switched by checking the **Reversed** option. Axis Specifies the axis of the groove:  Questa opzione specifica l'asse attorno al quale deve essere ruotato lo schizzo.   * **Vertical sketch axis**: seleziona l'asse verticale dello schizzo. * **Horizontal sketch axis**: seleziona l'asse orizzontale dello schizzo. * **Sketch axis**: seleziona una linea di costruzione contenuta nello schizzo utilizzato da Scanalatura. La prima linea di costruzione creata nello schizzo viene etichettata come *Sketch axis 0*. L'elenco a discesa contiene un asse dello schizzo personalizzato per ogni linea di costruzione. versione 0.16 e precedenti * **Construction line**: seleziona una linea di costruzione contenuta nello schizzo utilizzato da Scanalatura. L'elenco a discesa contiene una voce per ogni linea di costruzione. La prima linea di costruzione creata nello schizzo viene etichettata *Construction line 1*. versione 0.17 e superiori * **Base (X/Y/Z) axis**: v0.17 e superiore seleziona l'asse X, Y o Z dell'origine del corpo; versione 0.17 e superiori * **Select reference...**: v0.17 e superiore consente di selezionare nella vista 3D un bordo di un corpo o una [linea di riferimento](/PartDesign_Line/it "PartDesign Line/it"). versione 0.17 e superiori  Note that when changing the axis, the **Reversed** option may be (un)checked automatically.   Angolo Questa opzione specifica l'angolo di rotazione dello schizzo. Per ottenere una scanalatura completa occorre impostare un angolo di 360°. Non è possibile specificare angoli negativi (se è necessario usare l'opzione **Invertito**) o angoli maggiori di 360°.   Simmetrico al piano La rivoluzione si estende per metà dell'angolo specificato in entrambe le direzioni rispetto al piano di schizzo.   Invertito La direzione di rivoluzione viene invertita. |

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the groove in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

## Proprietà

### Data

Groove

* Dati**Type** (`Enumeration`)
* Dati**Base** (`Vector`): (read-only)
* Dati**Axis** (`Vector`): (read-only)
* Dati**Angle** (`Angle`)
* Dati**Angle2** (`Angle`)
* Dati**Up To Face** (`LinkSub`)
* Dati**Reference Axis** (`LinkSub`)

Part Design

* Dati**Refine** (`Bool`)

Sketch Based

* Dati**Profile** (`LinkSub`)
* Dati**Midplane** (`Bool`)
* Dati**Reversed** (`Bool`)
* Dati**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Groove/it&oldid=1402157>"