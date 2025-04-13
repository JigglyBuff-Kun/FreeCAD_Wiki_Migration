---
title: Image Piano immagine
---
|  |
| --- |
| Piano immagine |
| Posizione nel menu |
| Barre degli strumenti → Crea un'immagine planare nello spazio 3D |
| Ambiente |
| [Image](/Image_Workbench/it "Image Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Apri immagine](/Image_Open/it "Image Open/it"), [Scala immagine](/Image_Scaling/it "Image Scaling/it") |
|  |

## Descrizione

Lo strumento Piano immagine importa una immagine [bitmap](/Bitmap/it "Bitmap/it") e la posiziona su uno dei piani XY, YZ o XZ.

## Utilizzo

1. Premere il pulsante ![](/images/Image_CreateImagePlane.svg) Piano immagine.
2. Selezionare l'immagine desiderata.
3. Scegliere il piano in cui posizionare l'immagine, assegnare un valore di offset e premiere OK.

L'oggetto ImagePlane risultante utilizza il rapporto 1 pixel = 1 millimetro; affinché l'immagine sia visualizzata correttamente, deve avere una risoluzione sufficiente.

Quando si importa l'immagine, è possibile aggiungere un offset di `-0,1 mm` per posizionare l'immagine leggermente dietro al piano di lavoro; questo rende più facile tracciare (disegnare sopra) l'immagine con gli strumenti di [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").

Se inizialmente non viene assegnato alcuno scostamento all'immagine, la sua posizione può ancora essere regolata nelle [proprietà](/Property_editor/it "Property editor/it").

## Proprietà

Base

Base

* Dati**Position**: specifica le coordinate del punto base del piano dell'immagine.
* Dati**Angle**: specifica l'angolo di rotazione del piano dell'immagine.
* Dati**Axis**: specifica l'asse utilizzato per l'angolo di rotazione.

Image Plane

Image Plane

* Dati**XSize**: specifica la larghezza del piano dell'immagine.
* Dati**YSize**: specifica l'altezza del piano dell'immagine.
* Dati**Image Plane**: specifica l'immagine da usare per questo piano.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_CreateImagePlane/it&oldid=1077185>"