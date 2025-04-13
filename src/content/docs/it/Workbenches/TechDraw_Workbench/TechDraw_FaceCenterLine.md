---
title: TechDraw Linea centrale alla faccia
---
|  |
| --- |
| TechDraw Linea centrale alla faccia |
| Posizione nel menu |
| TechDraw → Aggiungi linee → Linea centrale alla faccia |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [TechDraw Linea centrale tra 2 linee](/TechDraw_2LineCenterLine/it "TechDraw 2LineCenterLine/it"), [TechDraw Linea centrale tra 2 punti](/TechDraw_2PointCenterLine/it "TechDraw 2PointCenterLine/it") |
|  |

## Descrizione

Lo strumento **TechDraw Linea centrale alla faccia** aggiunge una linea centrale alle facce selezionate.

![](/images/TechDraw_FaceCenterLine_Sample.png)

Linea centrale aggiunta alla faccia

## Creazione

1. Selezionare una o più facce in una Vista.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_FaceCenterLine.svg) Aggiungi Linea centrale alle facce.
   * Selezionare l'opzione **TechDraw → Aggiungi linee → ![](/images/TechDraw_FaceCenterLine.svg) Aggiungi Linea centrale alle facce** dal menu.
3. Si apre un pannello delle azioni. Vedere [Opzioni](#Opzioni) per ulteriori informazioni.
4. Premere il pulsante OK per confermare.
5. Una linea centrale viene aggiunta al punto medio del riquadro di delimitazione delle facce selezionate.

## Modifica

Uno qualsiasi degli strumenti della linea centrale (![](/images/TechDraw_FaceCenterLine.svg) TechDraw Linea centrale faccia, ![](/images/TechDraw_2LineCenterLine.svg) [TechDraw Linea centrale a 2 linee](/TechDraw_2LineCenterLine/it "TechDraw 2LineCenterLine/it") e ![](/images/TechDraw_2PointCenterLine.svg) [TechDraw Linea centrale a 2 punti](/TechDraw_2PointCenterLine/it "TechDraw 2PointCenterLine/it")) può essere utilizzato per modificare qualsiasi linea centrale.

1. Selezionare una linea centrale.
2. Invocare uno strumento della linea centrale.
3. Si apre un pannello delle azioni. Vedere [Opzioni](#Opzioni) per ulteriori informazioni.
4. Premere il pulsante OK per confermare.

## Opzioni

* **Orientamento**:
  + **Verticale**: Forza la linea centrale in verticale. Ignorato per Linea centrale tra 2 linee.
  + **Orizzontale**: forza la linea centrale in orizzontale. Ignorato per Linea centrale tra 2 linee.
  + **Allineato**: non disponibile per Line centrale alla faccia. Forza la linea centrale a seguire la direzione generale dei bordi selezionati per Line a centrale a 2 linee. Ignorato per Linea centrale a 2 punti.
* **Scostamento orizzontale**: sposta la linea centrale a sinistra o a destra rispetto alla sua posizione normale.
* **Scostamento verticale**: sposta la linea centrale verso l'alto o verso il basso rispetto alla sua posizione normale.
* **Ruota**: Ruota la linea centrale attorno al suo punto medio (gradi + in senso antiorario, - in senso orario).
* **Estesa per**: Allunga la linea centrale di questo valore.
* **Colore**: il colore della linea centrale.
* **Spessore**: La larghezza della linea centrale.
* **Stile**: lo stile della linea centrale. Le opzioni sono:
  + ![](/images/Continuous-line.svg) **Continua**
  + ![](/images/Dash-line.svg) **Tratteggiata**
  + ![](/images/Dot-line.svg) **Punto**
  + ![](/images/DashDot-line.svg) **TrattoPunto**
  + ![](/images/DashDotDot-line.svg) **TrattoPuntoPunto**

## Note

* Per eliminare una linea centrale selezionarla e premere Delete. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Linea centrale alla faccia sostituirà eventualmente due proprietà View:
  + Vista**HorizCenterLine**: mostra una linea centrale orizzontale attraverso la Vista.
  + Vista**VertCenterLine**: mostra una linea centrale verticale attraverso la Vista.

## Proprietà

Le Linee centrali non hanno proprietà proprie, poiché non sono oggetti documento.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_FaceCenterLine/it&oldid=1453176>"