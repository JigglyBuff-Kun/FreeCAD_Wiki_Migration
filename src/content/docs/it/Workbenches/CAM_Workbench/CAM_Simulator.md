---
title: Path Simulatore
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Simulatore |
| Posizione nel menu |
| Path → Simulatore CAM |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Ispeziona](/Path_Inspect/it "Path Inspect/it") |
|  |

## Descrizione

Questo strumento consente di simulare il percorso della lavorazione. Spazza i modelli 3D degli strumenti utilizzati in ciascuna operazione lungo i percorsi del codice G. Dove il pezzo e lo strumento si sovrappongono sottrae del materiale dal pezzo, e fornisce la visualizzazione della lavorazione. Ciò consente il rilevamento e l'isolamento degli errori prima di eseguire il lavoro su una fresatrice.

![](/images/Path-Simulation.gif)

## Usage

## Utilizzo

1. Premere il pulsante ![](/images/Path_Simulator.png) [Simulatore CAM](/Path_Simulator/it "Path Simulator/it")
2. Deselezionare tutte le Operazioni che non devono essere simulate
3. Regolare le impostazioni di velocità e precisione.
4. Selezionare la lavorazione da simulare dal menu a discesa.
5. Premere il pulsante Riproduci per riprodurre un'animazione delle operazioni.  
    Premere il pulsante Avanti veloce per velocizzare i percorsi complicati.
6. Per risolvere tagli o movimenti specifici sono fornite le funzionalità Pausa e Singolo-passo.
7. Facendo clic sul pulsante Annulla si rimuove il pezzo creato per la simulazione. Facendo clic su Ok questo oggetto viene mantenuto nella lavorazione.

## Proprietà

* Dati**Playback Speed**: La velocità di riproduzione della simulazione, in linee di codice G al secondo
* Dati**Accuracy**: La precisione della simulazione espressa in percentuale che indica la deviazione delle simulazioni dalla lavorazione. Per la simulazione interattiva, riducendo la precisione a 0,3 funziona molto più velocemente.
* Dati**Job**: La lavorazione usata come base della simulazione
* Dati**Operation List**: L'elenco delle operazioni selezionate per l'inclusione nella simulazione.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Simulator/it&oldid=1486238>"