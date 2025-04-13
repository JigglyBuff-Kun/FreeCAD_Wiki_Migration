---
title: Classificazione BIM
---
|  |
| --- |
| Classificazione BIM |
| Posizione nel menu |
| Gestione → Classificazione |
| Ambienti |
| [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| Nessuno |
| Vedere anche |
| Nessuno |
|  |
| Questo comando fa parte del **Addon BIM**, che è possibile installare tramite il menu Strumenti → Addons Manager |
|  |

## Descrizione

Il gestore delle classificazioni consente di attribuire una classe standard a un oggetto o materiale BIM. Diversi sistemi di classificazione sono disponibili in formato XML o IFC (entrambi supportati da questo strumento) da <https://github.com/Moult/IfcClassification> o direttamente dai loro editori o da <https://www.graphisoft.com/downloads/archicad/BIM_Data.html>. Per rendere noti questi file XML o IFC a FreeCAD, essi devono essere collocati in una sottocartella BIM della cartella utente di FreeCAD. Per fornire la posizione esatta al sistema usare la finestra di dialogo di classificazione BIM. Se sono disponibili sia un file IFC che un file XML, lo strumento di classificazione BIM preferisce quello IFC.

![](/images/BIM_classification_screenshot.png)

Classification manager

## Utilizzo

* Installare uno o più file XML o IFC standard di classificazione come spiegato sopra
* Se si desidera aggiungere o modificare una classe per un oggetto, selezionare tale oggetto e premere il pulsante Classificazione BIM
* Se si desidera aggiungere o modificare una classe per un materiale, non selezionare nulla e premere il pulsante Classificazione BIM. Si potrà sfogliare i materiali direttamente dalla finestra del manager di classificazione

## Downloading classification systems

Several classification systems are available in XML or IFC form (both are supported by this tool) from <https://github.com/Moult/IfcClassification>, or directly from their publishers, or from <https://www.graphisoft.com/downloads/archicad/BIM_Data.html>. To make these XML or IFC files known to FreeCAD they must be placed in a BIM subfolder of your FreeCAD user folder. The exact location for your system is informed on the BIM classification dialog. If both an IFC and XML file are available, the BIM Classification tool will prefer the IFC one.

There is a [convenience macro](/Macro_Download_Classifications "Macro Download Classifications") that can download all systems available from <https://github.com/Moult/IfcClassification> and place them directly in the right folder. After running the macro, everything is ready to use this tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Classification/it&oldid=1534389>"