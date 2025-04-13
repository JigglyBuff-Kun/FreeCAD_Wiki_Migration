---
title: Ambiente Raytracing
---

:::caution
L'ambienteRaytracingnon è più incluso dopo la versione 0.20.Al suo posto dovrebbe essere utilizzato l'ambiente esternoRender Workbench.
:::
![](/images/Workbench_Raytracing.svg)

L'icona di Raytracing

## Introduzione

L'Ambiente Raytracing ![](/images/Workbench_Raytracing.svg) viene utilizzato per generare immagini fotorealistiche dei modelli elaborandole con un renderer esterno.

Il modulo Raytracing lavora con dei [modelli](/Raytracing_templates/it "Raytracing templates/it"), che sono file di progetto che definiscono una scena per il modello 3D. È possibile posizionare luci e geometrie come i piani terra e contiene anche i segnaposto per la posizione della telecamera e per le informazioni sul materiale degli oggetti nella scena. Il progetto può quindi essere esportato in un file pronto per il rendering o essere eseguito direttamente in FreeCAD.

Attualmente sono supportati due renderizzatori: [POV-Ray](/POV-Ray "POV-Ray") e [LuxRender](/LuxRender "LuxRender"). Per poter eseguire il rendering direttamente da FreeCAD, sul sistema deve essere installato almeno uno di questi renderer, e deve essere configurato il suo percorso nelle preferenze di FreeCAD per Raytracing. Senza alcun renderer installato, si può comunque esportare un file della scena e utilizzarlo successivamente in uno di questi renderer, o su una macchina diversa.

L'ambiente Raytracing è obsoleto, l'ambiente esterno [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) ne è il sostituto. Tuttavia, le informazioni in questa pagina sono generalmente utili per il nuovo ambiente di lavoro, poiché entrambi funzionano sostanzialmente allo stesso modo.

![](/images/Raytracing_example.jpg)

## Flusso di lavoro tipico

1. Creare o aprire un progetto di FreeCAD, aggiungere alcuni oggetti solidi sul modulo [Part](/Part_Workbench/it "Part Workbench/it") o [PartDesign-based](/PartDesign_Workbench/it "PartDesign Workbench/it"); i mesh non sono ancora supportati
2. Creare un progetto Raytracing (luxrender o povray)
3. Selezionare gli oggetti che si desidera aggiungere al progetto raytracing e aggiungerli con lo strumento "Inserisci Parte"
4. Esportare o elaborare direttamente

![](/images/Raytracing_Workbench_workflow.svg)

Flusso di lavoro del Raytracing Workbench; il workbench prepara un file di progetto da un determinato modello e quindi chiama un programma esterno per produrre il rendering effettivo della scena. Il renderer esterno può essere usato indipendentemente da FreeCAD.

## Strumenti

### Strumenti di progetto

Questi sono gli strumenti principali per esportare il proprio lavoro 3D su renderer esterni.

- ![](/images/Raytracing_New.svg) [Nuovo progetto PovRay](/Raytracing_New/it "Raytracing New/it"): inserisce un nuovo progetto PovRay nel documento.
- ![](/images/Raytracing_Lux.svg) [Nuovo progetto LuxRender](/Raytracing_Lux/it "Raytracing Lux/it"): inserisce un nuovo progetto LuxRender nel documento.
- ![](/images/Raytracing_InsertPart.svg) [Inserisci parte](/Raytracing_InsertPart/it "Raytracing InsertPart/it"): inserisce una vista di una parte in un progetto di raytracing.
- ![](/images/Raytracing_ResetCamera.svg) [Reset camera](/Raytracing_ResetCamera/it "Raytracing ResetCamera/it"): abbina la posizione della telecamera di un progetto di raytracing alla vista corrente.
- ![](/images/Raytracing_ExportProject.svg) [Esporta progetto...](/Raytracing_ExportProject/it "Raytracing ExportProject/it"): esporta un progetto di raytracing in un file di scena per il rendering in un renderer esterno.
- ![](/images/Raytracing_Render.svg) [Render](/Raytracing_Render/it "Raytracing Render/it"): esegue il rendering di un progetto raytracing con un renderer esterno.

### Utilità

Questi sono degli strumenti di supporto per eseguire manualmente azioni specifiche.

- ![](/images/Raytracing_WriteView.svg) [Esporta la vista in PovRay...](/Raytracing_WriteView/it "Raytracing WriteView/it"): scrive la vista 3D attiva con la fotocamera e tutto il suo contenuto in un file PovRay.
- ![](/images/Raytracing_WriteCamera.svg) [Esporta la camera in PovRay...](/Raytracing_WriteCamera/it "Raytracing WriteCamera/it"): esporta la posizione della telecamera della vista 3D attiva in un file in formato POV-Ray.
- ![](/images/Raytracing_WritePart.svg) [Esporta la parte in PovRay...](/Raytracing_WritePart/it "Raytracing WritePart/it"): scrive la Parte selezionata (oggetto) come un file POV-Ray.

## Preferenze

- ![](/images/Preferences-raytracing.svg) [Preferenze](/Raytracing_Preferences/it "Raytracing Preferences/it"): preferenze disponibili per gli strumenti Raytracing.

## Tutorials

- [Basic Raytracing tutorial](/Raytracing_tutorial/fr "Raytracing tutorial/fr")
- [Intermediate Raytracing tutorial](/Tutorial_FreeCAD_POV_ray/fr "Tutorial FreeCAD POV ray/fr")

### Creare manualmente un file povray

Gli strumenti di utilità descritti prima consentono di esportare la corrente vista 3D e tutto il suo contenuto in un file [Povray](http://www.povray.org/). In primo luogo, è necessario caricare un documento o crearne uno e poi orientare la vista 3D come si desidera. Dopo, scegliere **Utilità → Esporta la vista ...** nel menu di Raytracing.

![](/images/FreeCAD_Raytracing.jpg)

Nella finestra di dialogo **Esporta pagina**, selezionare la destinazione per salvare il file \*.pov. Successivamente aprire il file in [Povray](http://www.povray.org/) e generare la renderizzazione:

![](/images/Povray.jpg)

Come è noto, le applicazioni di renderizzazione possono produrre immagini di grandi dimensioni e ottima qualità:

![](/images/Scharniergreifer_render.jpg)

## Script

Vedere [Esempio di API Raytracing](/Raytracing_API_example/it "Raytracing API example/it") per informazioni sulla scrittura di scene a livello di codice.

### Link

### POV-Ray

- [Pagina POV-Ray in questa wiki](/POV-Ray "POV-Ray")
- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://en.wikipedia.org/wiki/POV-Ray>

### LuxRender

- [Pagina LuxRender in questa wiki](/LuxRender "LuxRender")
- <http://www.luxrender.net/>

### Render per future implementazioni

- <http://www.yafaray.org/>
- <http://www.mitsuba-renderer.org/>
- <http://www.kerkythea.net/>
- <http://www.artofillusion.org/>

## Esportare in Kerkythea

Sebbene l'esportazione diretta nel formato XML di Kerkythea non sia ancora supportata, è possibile esportare gli oggetti come file Mesh (.obj) e poi importarli in Kerkythea.

- se si utilizza Kerkythea per Linux, ricordarsi di installare il pacchetto WINE (necessario per far funzionare Kerkythea in Linux)
- è possibile convertire i modelli in mesh con l'aiuto dell'ambiente Mesh e poi esportare questi mesh, come file .obj
- Se l'esportazione della mesh ha provocato errori (capovolgimento di normali, buchi ...) puoi tentare la fortuna con [netfabb studio basic](http://www.netfabb.com/downloadcenter.php?basic=1)

: Gratuito per uso personale, disponibile per Windows, Linux e Mac OSX.
: Ha strumenti di riparazione standard che ripareranno il tuo modello nella maggior parte dei casi.

- un altro buon programma per l'analisi/riparazione di mesh è [Meshlab](http://sourceforge.net/projects/meshlab/)

: Open Source, disponibile per Windows, Linux e Mac OSX.
: Ha strumenti di riparazione standard che ripareranno il tuo modello nella maggior parte dei casi (riempire i fori, riorientare le normali, ecc.)

- è possibile utilizzare "make compound" e poi "make single copy" oppure è possibile fondere i solidi in un gruppo prima di convertirli in mesh
- ricordatevi di impostare in Kerkythea un fattore di importazione di 0.001 per obj-modeler, in quanto Kerkythea si aspetta che il file obj sia in m (ma l'unità standard in FreeCAD è il mm)

: Within WIndows 7 64-bit Kerkythea does not seem to be able to save these settings.
: So remember to do that each time you start Kerkythea

- se si importano più oggetti in Kerkythea è possibile utilizzare la funzione "File → Unisci" di Kerkythea

## Sviluppo

Queste pagine si riferiscono al nuovo ambiente, programmato in Python, destinato a sostituire l'attuale ambiente Raytracing.

- [Render Workbench](https://github.com/FreeCAD/FreeCAD-render)
- [Render Workbench](https://forum.freecadweb.org/viewtopic.php?f=9&t=25933) (announcement only, no discussion)
- [FreeCAD Renderer Workbench improvements](https://forum.freecadweb.org/viewtopic.php?t=39168)

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/it&oldid=1264451>"
