---
title: Misura degli angoli sui fori
---
|  |
| --- |
| Tutorial |
| Argomento |
| TechDraw |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| 1 minute |
| Autori |
| AnHi |
| Versione di FreeCAD |
| 0.19 |
| Files di esempio |
| *Nessuno* |
| Vedere anche |
| *Nessuno* |
|  |

## Introduzione

Questo tutorial spiega come creare linee centrali a fori orientati (assi dei fori) usando ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it").

Con i fori non ortigonali non è possibile utilizzare le linee centrali verticali o orizzontali (false/true) dalle proprietà della vista. Per questo è necessario creare delle linee o dei punti di supporto.

## Procedura

1. Impostazione delle linee centrali sui fori:

Ci sono alcune possibilità per creare una linea centrale per i fori.
Prima si devono selezionare le linee o i punti sul foro come mostrato sotto. Dopo, possono essere utilizzati i seguenti strumenti per creare la linea centrale:

:   ![](/images/TechDraw_2PointCenterLine.svg) [Linea centrale a 2 punti](/TechDraw_2PointCenterLine/it "TechDraw 2PointCenterLine/it")
:   ![](/images/TechDraw_2LineCenterLine.svg) [Linea centrale a 2 linee](/TechDraw_2LineCenterLine/it "TechDraw 2LineCenterLine/it")

![](/images/TechDraw_Tutorial_2PointCenterLine_example.png)

Sopra: creazione con ![](/images/TechDraw_2PointCenterLine.svg) che crea linee d'asse tra 2 punti

![](/images/TechDraw_Tutorial_2LineCenterLine_example.png)

Sopra: creazione con ![](/images/TechDraw_2LineCenterLine.svg) che crea linee d'asse tra 2 linee

Nella finestra di dialogo della Vista combinata associata selezionare nel pannello Azioni in "Orientamento" "Allineato" per gli assi diversi dagli assi principali. "Estendi di" indica la lunghezza della linea centrale oltre la linea del corpo nel disegno. Con "Sposta in orizzontale" e "Sposta in verticale" la linea centrale può spostarsi in direzione orizzontale o verticale, se necessario. "Stile" indica il tipo della linea centrale.

![](/images/Create-Center-Line3P.JPG)

Sopra: la finestra di dialogo

La linea centrale creata può essere modificata. Selezionare la linea centrale e premere il pulsante ![](/images/TechDraw_2LineCenterLine.svg) o ![](/images/TechDraw_2PointCenterLine.svg) dalla barra degli strumenti con cui è stata creata la linea centrale. Eliminare solo la linea centrale con ![](/images/TechDraw_CosmeticEraser.svg) dalla barra degli strumenti dopo aver selezionato la linea centrale.

2. Impostazione degli angoli:

Selezionare i punti del quadrante con ![](/images/TechDraw_Quadrants.svg) dalla barra degli strumenti. Quindi selezionare i punti come mostrato sotto e utilizzare ![](/images/TechDraw_Dimension_Angle3Pt.svg) dalla barra degli strumenti per creare l'angolo. Altre successioni creano altri angoli.
Se non ci sono punti di aggancio sulla linea centrale cambiare "ISO count" nelle proprietà.

![](/images/AnHi11.PNG)

Sopra: successione di selezione

Retrieved from "<http://wiki.freecad.org/index.php?title=Measurement_Of_Angles_On_Holes/it&oldid=1251820>"