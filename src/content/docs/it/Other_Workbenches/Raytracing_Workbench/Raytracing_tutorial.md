---
title: Tutorial di Raytracing
---
## Raytracing Workbench

:::caution
TheRaytracing workbenchis being superseded by the newRender Workbench, which is intended as its replacement. The Render Workbench can be installed through theAddon Manager. The information here is provided because by default FreeCAD is still shipped (as of 0.19-24276) with the Raytracing Workbench, and because the new module should basically work in the same way
:::

|  |
| --- |
| Tutorial |
| Argomento |
| Raytracing |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| 10 minuti + tempo per il Render |
| Autori |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Versione di FreeCAD |
| 0.16 o superiore |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

### Introduzione

Questo tutorial ha lo scopo di introdurre il lettore al flusso di lavoro di base dell'ambiente Raytracing, e alla maggior parte degli strumenti che sono a disposizione per creare una immagine renderizzata.

![](/images/Raytracing_tutorial_result.png)

### Requisiti

* FreeCAD versione 0.16 o superiore
* [POV-Ray](http://www.povray.org/) e/o [LuxRender](http://www.luxrender.net/) installati nel sistema
* Nel caso di POV-Ray, non è sufficiente avere solo l'eseguibile binario installato, ma ***è richiesta*** anche l'installazione dei ***file di supporto*** , e in Ubuntu questi sono forniti dal pacchetto dei file raccomandati [povray-includes](https://packages.ubuntu.com/search?keywords=povray-includes). Potenziali problemi sono stati riscontrati anche con installazioni Linux che richiedono la creazione manuale di file di configurazione locali nella cartella home dell'utente, come discusso [qui](https://forum.freecadweb.org/viewtopic.php?f=3&t=27548&start=10#p224576).
* Nel caso di POV-Ray, si raccomanda di installare la [macro di psicofil](https://github.com/psicofil/Macros_FreeCAD)
* Il lettore abbia le conoscenze di base per utilizzare gli ambienti Parte e PartDesign

### Procedura

#### Il modello

In questo esempio viene utilizzato un cubo come oggetto di studio, ma al suo posto si possono usare i modelli creati con Parte o PartDesign.

1. Creare un nuovo documento
2. Attivare l'ambiente Parte
3. Creare un Cubo. Siete liberi di cambiare le sue proprietà in qualsiasi modo.

Ora abbiamo un modello con il quale lavorare.

#### Preparativi per il render

1. Passare all'ambiente Raytracing
2. Cambiare la Vista in **Prospettiva**. Andare nel menu **Vista** e selezionare **Prospettiva**.
3. Impostare il percorso del renderer. Andare nel menu **Modifica** e selezionare **Preferenze**. Cliccare su **Raytracing** e impostare il percorso del file eseguibile.
4. Impostare le dimensioni dell'immagine di rendering. Andare nel menu **Modifica** e selezionare **Preferenze**. Cliccare su **Raytracing** e impostare la dimensione desiderata dell'immagine.

##### POV-Ray

1. Selezionare ![](/images/Raytracing_New.png) [Nuovo progetto PovRay](/Raytracing_New "Raytracing New"). Nel menu a discesa impostare **RadiosityNormal**

##### LuxRender

1. Selezionare ![](/images/Raytracing_Lux.png) [Nuovo progetto LuxRender](/Raytracing_Lux "Raytracing Lux"). Nel menu a discesa impostare **LuxClassic**

#### Impostare la posizione della camera

1. Posizionare la **Vista 3D** nella posizione e alla distanza desiderata dal modello. In questo caso, useremo la **Vista assonometrica**.
2. Selezionare il **Project Folder** nella **Vista ad albero**
3. Selezionare ![](/images/Raytracing_ResetCamera.png) [Reset camera](/Raytracing_ResetCamera/it "Raytracing ResetCamera/it")

#### Importare il modello

1. Selezionare il modello per il rendering.
2. Selezionare ![](/images/Raytracing_InsertPart.png) [Inserisci parte](/Raytracing_InsertPart/it "Raytracing InsertPart/it")

#### Eseguire il renderer

1. Selezionare ![](/images/Raytracing_Render.png) [Render](/Raytracing_Render/it "Raytracing Render/it").
2. Impostare il percorso in cui memorizzare l'immagine.
3. Attendere che il rendering finisca. Questo potrebbe richiedere alcuni minuti.

#### Visualizzare i risultati

Appena il rendering è finito FreeCAD apre immediatamente l'immagine.

Il flusso di lavoro di base per l'ambiente [Raytracing](/Raytracing_Workbench/it "Raytracing Workbench/it") è concluso.

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_tutorial/it&oldid=1251573>"