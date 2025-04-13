---
title: Ambiente MOOC
---
![](/images/MOOC_workbench_icon.svg)

The FreeCAD MOOC External Workbench Icon

## Descrizione

MOOC è un [ambiente esternoh](/External_workbenches/it "External workbenches/it") con cui è possibile seguire tutorial interattivi e fare la valutazione del proprio lavoro direttamente nell'interfaccia di FreeCAD.

* Currently only in French (and hard-coded).
* Only compatible with FreeCAD Py3 and Qt5 (PySide2)
* LGPLv2 (or similar) code funded by Europe through IMT and EESAB.
* Modular: This workbench was created with the intention that the addition of tutorials and evaluations was modular. In other words, one has to add a tutorial in the lessons folder or an evaluation in the exercises folder to show up in the respective tool.

Le esercitazioni **Interattive** (anche chiamate Player) sono esercizi guidati step-by-step con verifiche oggettive. Si avvia direttamente in FreeCAD e consente di avanzare passo dopo passo nella modellazione di un oggetto. L'utente ha un testo, un video e soprattutto il controllo che gli obiettivi sono stati raggiunti.

![](/images/MOOC_Player_Dialog_Context.png)

MOOC Player Dialog within FreeCAD GUI

![](/images/MOOC_Player_Dialog.png)

MOOC Player Dialog close up

**Valutazioni** (anche chiamato Grader) sono costituite da un piccolo programma che controlla determinati criteri di un documento di FreeCAD, ad esempio la presenza di un corpo parte, uno schizzo o il volume finale.

![](/images/MOOC_Grader_Dialog.png)

The MOOC Grader Dialog

## Installazione

Questo ambiente può essere facilmente installato e aggiornato dal [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it") disponibile in FreeCAD 0.17 e superiore. Per gli utenti di FreeCAD 0.16 e per altri metodi di installazione, fare riferimento alla pagina [Installare componenti aggiuntivi](/Installing/it#Installare_componenti_aggiuntivi "Installing/it").

## Limitations

ATM this workbench is only available in the French language.

## Technical Details

From a technical point of view, the workbench is composed of:

* an "API" that contains the code that analyzes the document (MoocChecker.py)
* the code that executes the tutorials in the "lessons" folder (MoocPlayer.py)
* the code that executes the evaluations in the "exercises" folder (MoocGrader.py)

## Roadmap

* internationalization of the workbench
* Integration of videos in FreeCAD (PySide2.QtWebEngineWidgets?)
* ~~request the integration of the workbench in the list of the addon manager~~ DONE

## Link

* Codice sorgente ospitato su Framagit: [[1]](https://framagit.org/freecad-france/mooc-workbench)
* Official complete [[2]](https://framagit.org/freecad-france/mooc-workbench#mooc-workbench)

## Ambienti aggiuntivi

Gli ambienti di FreeCAD sono facili da programmare in [Python](/Python/it "Python/it"), quindi ci sono molte persone che sviluppano ambienti aggiuntivi al di fuori degli sviluppatori principali di FreeCAD.

La pagina [Ambienti complementari](/External_workbenches/it "External workbenches/it") contiene alcune informazioni e tutorial su alcuni di loro, e il progetto [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) mira a raccoglierli e renderli facilmente installabili dall'interno di FreeCAD.

Sono in fase di sviluppo ulteriori nuovi ambienti.

Retrieved from "<http://wiki.freecad.org/index.php?title=MOOC_Workbench/it&oldid=1064329>"