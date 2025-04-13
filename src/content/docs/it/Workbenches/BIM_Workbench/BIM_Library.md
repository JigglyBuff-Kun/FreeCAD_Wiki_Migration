---
title: Libreria BIM
---
|  |
| --- |
| Libreria BIM |
| Posizione nel menu |
| Modellazione 3D → Libreria |
| Ambienti |
| [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| Nessuno |
| Vedere anche |
| [Arredo](/Arch_Equipment/it "Arch Equipment/it") |
|  |
| Questo comando fa parte del **Addon BIM**, che è possibile installare tramite il menu Strumenti → Addons Manager |
|  |

## Descrizione

Lo strumento Libreria BIM consente di posizionare nel modello corrente un oggetto della [Libreria di parti di FreeCAD](/Parts_Library/it "Parts Library/it"), che deve essere installata tramite ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it") per essere disponibile con questo strumento.

![](/images/BIM_Library_screenshot.png)

Sopra: vista della finestra di dialogo **Browser della libreria** nel [pannello delle azioni](/Task_panel/it "Task panel/it") a sinistra

## Utilizzo

1. Premere il pulsante ![](/images/BIM_Library.png) **Libreria BIM**

   :   Risultato: nella [vista combinata](/Combo_view/it "Combo view/it") → [pannello delle azioni](/Task_panel/it "Task panel/it") viene visualizzata una finestra di dialogo denominata **Browser della libreria**
2. Fare clic su un file del Browser della libreria
3. Fare doppio clic su di esso o premere il pulsante Inserisci
4. Fare clic su un punto nella [vista 3D](/3D_view/it "3D view/it") o inserire manualmente una coordinata per posizionare l'oggetto

## Opzioni

* Sono supportati i file [FCStd](/FCStd/it "FCStd/it"), [STEP](/index.php?title=STEP/it&action=edit&redlink=1 "STEP/it (page does not exist)") e [BREP](/index.php?title=BREP/it&action=edit&redlink=1 "BREP/it (page does not exist)"). Solo i file STEP e BREP sono posizionabili. I file FCStd non permettono di scegliere un posizionamento, in quanto potrebbero essere composti da una serie complessa di oggetti con posizioni significative. Quando si sceglie un file FCStd, il suo contenuto viene inserito nella posizione definita nel file.
* Gli oggetti STEP e BREP sono inseriti come ![Arch Equipment](/images/Arch_Equipment.svg) [Arredi](/Arch_Equipment/it "Arch Equipment/it") senza una forma di base separata. Aggiungendo successivamente una forma base a questi oggetti si distrugge la loro forma corrente.
* Posizionando un oggetto, si può scegliere il loro punto di inserimento tra l'originale (il punto (`0,0,0`) definito nel file), in alto, in mezzo, in basso, a sinistra, al centro o a destra.
* La ibreria può funzionare offline, nel qual caso si basa sull'addon della Libreria delle parti da installare (e aggiornare dall'utente), oppure online, nel qual caso naviga direttamente da [Parts Library Git repository](https://github.com/FreeCAD/FreeCAD-library) e permette di scaricare direttamente da lì.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/it&oldid=1442992>"