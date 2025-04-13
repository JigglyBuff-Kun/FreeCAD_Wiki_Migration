---
title: Arch Travatura
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Travatura                                      |
| Posizione nel menu                             |
| Arch → Travatura                               |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| 0.19                                           |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Lo strumento Travatura crea un oggetto [travatura](https://en.wikipedia.org/wiki/Truss), sia da un oggetto lineare selezionato (posta su una [Linea di Draft](/Draft_Line/it "Draft Line/it") o uno [[Sketcher\_NewSketch/it|Schizzo] ]), o da zero se non viene selezionato alcun oggetto all'avvio del comando.

![](/images/Arch_Truss_example.png)

## Utilizzo

### Creare da un oggetto selezionato

1. Utilizzare un ambiente di lavoro a scelta per creare un'unica linea
2. Selezionare quella linea
3. Premere il pulsante ![](/images/Arch_Truss.svg) Travatura
4. Regolare le proprietà della capriata a proprio piacimento

### Creare dall'inizio

1. Assicurarsi che non sia selezionato nulla
2. Premere il pulsante ![](/images/Arch_Truss.svg) Travatura
3. Fare clic nella vista 3D per definire un primo punto o immettere manualmente le coordinate X, Y e Z.
4. Fare clic nella vista 3D per definire il secondo punto o immettere manualmente le coordinate X, Y e Z.
5. Regolare le proprietà della capriata a proprio piacimento

## Proprietà

### Dati

- Dati**TrussAngle**: L'angolo della capriata
- Dati**SlantType**: Il tipo inclinato di questa capriata
- Dati**Normal**: La direzione normale di questa capriata
- Dati**HeightStart**: L'altezza della capriata nel punto iniziale
- Dati**HeightEnd**: L'altezza della capriata nel punto finale
- Dati**StrutStartOffset**: Un offset iniziale opzionale per il montante superiore
- Dati**StrutEndOffset**: Un offset finale opzionale per il montante superiore
- Dati**StrutHeight**: L'altezza degli elementi superiori e inferiori principali della capriata
- Dati**StrutWidth**: La larghezza degli elementi superiore e inferiore principali della capriata
- Dati**RodType**: Il tipo di elemento centrale della capriata
- Dati**RodDirection**: La direzione delle aste
- Dati**RodSize**: Il diametro o il lato delle aste
- Dati**RodSections**: Il numero di sezioni dell'asta
- Dati**RodEnd**: Se la capriata ha un'asta al suo punto finale o no
- Dati**RodMode**: Come disegnare le aste

## Script

Lo strumento Travatura può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
Truss = makeFence([baseobj])

```

Esempio:

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/it&oldid=1438500>"
