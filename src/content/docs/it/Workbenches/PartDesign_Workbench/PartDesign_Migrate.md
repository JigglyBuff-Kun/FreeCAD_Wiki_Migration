---
title: PartDesign Migrazione
---
:::caution
Questo strumento è obsoleto, non è disponibile nellaversione 1.0 e superiori.
:::

|  |
| --- |
| Migra |
| Posizione nel menu |
| Part Design → Migra |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

PartDesign in FreeCAD v0.17 introduce nuovi strumenti ed elementi che non sono riconosciuti dalle vecchie versioni di FreeCAD (0.16 e precedenti). I documenti di FreeCAD creati con versioni precedenti possono ancora essere aperti e modificati. Per beneficiare delle nuove funzionalità, è necessario migrarle tramite il menu PartDesign → Migra.

[disponibile dalla versione 0.17](/Release_notes_0.17/it "Release notes 0.17/it")

## Utilizzo

1. Aprire un documento di FreeCAD creato con versione 0.16 e precedenti
2. Passare a ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
3. Andare al menu **Part Design** → **Migra**.
4. Se la migrazione funziona, viene creato un ![](/images/Std_Part.svg) [contenitore Part](/Std_Part/it "Std Part/it") che contiene uno o più ![](/images/PartDesign_Body.svg) [Corpi](/PartDesign_Body/it "PartDesign Body/it"), ognuno dei quali ospita una catena di funzioni.

## Limitazioni

* Prima di iniziare il processo di migrazione, verificare se il modello è stato creato con le opzioni di affinamento automatico abilitate (in **Modifica → Preferenze → Part design → Generale**) e impostare le preferenze di conseguenza. Ciò può essere facilmente determinato commutando successivamente la visibilità delle funzioni nell'albero del modello. Se non sono rimasti bordi residui tra funzioni come Pad e Tasche, le opzioni di affinazione automatica sono state disabilitate.
* Se un documento da migrare contiene solo schizzi e funzionalità di PartDesign, è probabile che il processo di migrazione abbia esito positivo. Alcune funzionalità come smussi e raccordi possono richiedere la ricostruzione.
* Se il documento da migrare ha un flusso di lavoro misto Parte/Part Design/Draft, la conversione molto probabilmente fallisce o, al massimo, produce risultati imprevisti, e il documento deve essere migrato manualmente.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/it&oldid=1472584>"