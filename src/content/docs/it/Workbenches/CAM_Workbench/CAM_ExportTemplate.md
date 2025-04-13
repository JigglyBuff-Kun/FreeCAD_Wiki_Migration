---
title: Path Esporta modello
---

|                                                             |
| ----------------------------------------------------------- |
| Esporta modello                                             |
| Posizione nel menu                                          |
| Path → Esporta modello                                      |
| Ambiente                                                    |
| [Path](/Path_Workbench/it "Path Workbench/it")              |
| Avvio veloce                                                |
| _Nessuno_                                                   |
| Introdotto nella versione                                   |
| -                                                           |
| Vedere anche                                                |
| [Path SetupSheet](/Path_SetupSheet/it "Path SetupSheet/it") |
|                                                             |

## Descrizione

L'esportazione dei modelli di lavorazione fornisce un comodo meccanismo per salvare le definizioni delle lavorazioni usate comunemente da una lavorazione esistente. Ciò facilita la configurazione delle lavorazioni future, che sono in gran parte simili, consentendo l'importazione dei modelli di lavoro durante il processo di creazione della lavorazione.

Nella tabella Modifica->Preferenze...->Path->Job Preferences, Defaults->Template è impostato il modello predefinito.

## Utilizzo

Creare un modello

1. Da qualsiasi lavorazione configurata, richiamare il comando ![](/images/Path-ExportTemplate.png) [Esporta modello](/Path_ExportTemplate/it "Path ExportTemplate/it") dal menu Path->, oppure facendo clic con il pulsante destro del mouse sul nodo Lavorazione (Job) nella Vista combinata.
2. Selezionare gli elementi da includere nella finestra di dialogo di configurazione di Esporta modello.
3. Fare clic su OK e salvare il modello. Il nome del modello deve seguire lo schema job\_<template name>.json Quando viene mostrato nella casella combinata di selezione, il prefisso job e l'estensione non vengono mostrati. Affinché Path possa accedere ai modelli bisogna salvarli nella directory Macro o nella directory Path, secondo come configurato nelle Preferenze di Path.

## Opzioni

## Post Processing

## Post Processore

- Selezione del postprocessore
- Argomenti del postprocessore
- Nome del file di output

## Stock

## Pezzo

- Extent: dimensione del pezzo
- Placement: posizione del pezzo

## Setup Sheet

## Impostazioni del foglio di lavorazione

- Profondità di lavorazione
- Profondità di passata
- Velocità di movimento rapido dello strumento

## Tool controllers

## Controller dell'utensile

- Controller degli utensili selezionati.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/it&oldid=1386410>"
