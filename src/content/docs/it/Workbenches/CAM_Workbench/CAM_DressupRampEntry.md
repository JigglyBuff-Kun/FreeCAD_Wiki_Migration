---
title: Path Vestizione Rampa Ingresso
---
|  |
| --- |
| Rampa di ingresso |
| Posizione nel menu |
| Path → Vesti percorso → Rampa di ingresso |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [DressupTag](/Path_DressupTag/it "Path DressupTag/it"), [DressupDogbone](/Path_DressupDogbone/it "Path DressupDogbone/it") , [DressupDragKnife](/Path_DressupDragKnife/it "Path DressupDragKnife/it") |
|  |

## Descrizione

Questo strumento veste un percorso esistente per aggiungere una rampa

## Utilizzo

1. Selezionare un contorno o un oggetto profilo [Path](/Path_Workbench/it "Path Workbench/it")
2. cliccare su ![](/images/Path_Dressup.png) [Rampa](/Path_DressupRampEntry/it "Path DressupRampEntry/it")

## Proprietà

* **Ramp Feed Rate** può essere la velocità di avanzamento verticale o orizzontale corrente o qualche altro valore personalizzato
* **Angle** della rampa contro l'asse verticale. Un valore inferiore rende la rampa più ripida.
* **Method** viene utilizzato per selezionare diverse modalità di rampa:
  + RampMethod1 scende all'angolo della rampa e le mosse orizzontali al punto di destinazione
  + RampMethod2 va prima in orizzontale e poi in basso all'angolo della rampa fino al punto di destinazione
  + RampMethod3 scende a zig-zag
  + L'elica scende a spirale
* **Dressup Start Depth** è la distanza sopra il livello target in cui inizia la rampa
* **UseStartDepth** indica che la rampa non inizia sopra il livello del grezzo. Se non è impostato su true, la prima rampa può essere più ripida del previsto.

![](/images/Ramp_method_1.png) ![](/images/Ramp_method_2.png) ![](/images/Ramp_method_3.png)

From left to right: Ramp method 1, 2 and 3

![](/images/Ramp_method_Helix.png)

Ramp method Helix

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupRampEntry/it&oldid=1386372>"