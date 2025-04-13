---
title: Note di rilascio della versione 1.1
---
:::caution
FreeCAD 1.1 è in fase di sviluppo, non è ancora prevista una data di rilascio.
:::

Mancano funzionalità? Menzionarle nel thread del forum [Release notes for v1.1](https://forum.freecad.org/viewtopic.php?f=10&t=92080).

Vedere [Help FreeCAD](/Help_FreeCAD "Help FreeCAD") per le modalità con cui contribuire a FreeCAD.

Tutte le immagini in questa pagina devono utilizzare il suffisso \_relnotes\_1.1

**FreeCAD 1.1** è stato rilasciato il **D Mese Anno**, scaricarlo dalla pagina [Download](/Download/it "Download/it"). Questa pagina elenca tutte le nuove funzionalità e modifiche.

Le note di rilascio delle versioni precedenti di FreeCAD sono disponibili alla pagina [Funzionalità](/Feature_list/it#Note_di_rilascio "Feature list/it").

Segnaposto per un'immagine accattivante selezionata dagli amministratori dal [forum delle vetrine degli utenti](https://forum.freecad.org/viewforum.php?f=24).

## Aspetti generali

## Interfaccia utente

|  |  |
| --- | --- |
|  | È stata aggiunta l'illuminazione a tre punti per migliorare il rendering dei modelli 3D. [Pull request #19397](https://github.com/FreeCAD/FreeCAD/pull/19397) |

### Ulteriori miglioramenti dell'interfaccia utente

* È stata aggiunta una scorciatoia predefinita per le [Preferenze](/Std_DlgPreferences/it "Std DlgPreferences/it"). [Pull request #15536](https://github.com/FreeCAD/FreeCAD/pull/15536)
* La pagina delle preferenze dell'area di notifica è stata migliorata. [Pull request #15207](https://github.com/FreeCAD/FreeCAD/pull/15207)
* Le funzionalità di salvataggio automatico e selezione additiva sono state aggiunte allo strumento [Misurare](/Std_Measure/it "Std Measure/it"). [Pull request #17717](https://github.com/FreeCAD/FreeCAD/pull/17717)
* È stato aggiunto un parametro "ToggleTransparency" [fine-tuning](/Fine-tuning/it "Fine-tuning/it") per consentire agli utenti di modificare il livello di trasparenza predefinito abilitato dallo strumento [Attiva/disattiva trasparenza](/Std_ToggleTransparency/it "Std ToggleTransparency/it"). [Pull request #18986](https://github.com/FreeCAD/FreeCAD/pull/18986)
* È stata aggiunta la proprietà della vista "Mostra piano" per visualizzare il piano su cui si basa un oggetto 2D. [Pull request #18910](https://github.com/FreeCAD/FreeCAD/pull/18910)
* Ora è possibile cambiare il colore degli assi del sistema di coordinate utilizzando le nuove preferenze in *Modifica → Preferenze... → Visualizzazione → Vista 3D*. [Pull request #16995](https://github.com/FreeCAD/FreeCAD/pull/16995)
* È stata aggiunta la proprietà della vista "Mostra posizionamento" per visualizzare il posizionamento come sistema di coordinate all'origine di un oggetto 2D. [Pull request #19671](https://github.com/FreeCAD/FreeCAD/pull/19671)
* È stato aggiunto lo [stile di navigazione](/Mouse_navigation/it "Mouse navigation/it") di SolidWorks. [Pull request #19568](https://github.com/FreeCAD/FreeCAD/pull/19568)

## Sistema principale e API

### Sistema principale

|  |  |
| --- | --- |
|  | È stato implementato uno strumento [Core Datum](/Std_Base/it#Part_Datums "Std Base/it") per creare sistemi di coordinate locali, piani, assi o punti di Riferimento che possono essere associati e utilizzati anche in Assembly. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | Lo strumento [Trasforma](/Std_TransformManip/it "Std TransformManip/it") è stato revisionato e ora consente input precisi oltre al trascinamento nella vista 3D. È possibile allineare il trascinatore interattivo a qualsiasi elemento del documento e trasformare l'oggetto nel sistema di coordinate locali (U, V, W) del trascinatore o nel sistema di coordinate globale del documento. Il trascinatore può essere allineato all'origine dell'oggetto come in precedenza, e anche al centro di massa dell'oggetto. Ha una nuova funzionalità per spostare l'oggetto (nella posizione del trascinatore) in una posizione di destinazione nel documento e invertire l'orientamento. Vedere tutte le [nuove opzioni](/Std_TransformManip#Options "Std TransformManip"). [Pull request #17564](https://github.com/FreeCAD/FreeCAD/pull/17564) |

### API

#### Python API rimosse

#### API Python modificate

#### Nuove API Python

## Start

* The Start page can now display the contents of additional folders specified by the user. Their paths should be separated by double semicolons (`;;`). [Pull request #19473](https://github.com/FreeCAD/FreeCAD/pull/19473), [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918) and [Pull request #19948](https://github.com/FreeCAD/FreeCAD/pull/19948).
* The Examples section on the Start page can be hidden with a setting in the preferences. [Pull request #19376](https://github.com/FreeCAD/FreeCAD/pull/19376) and [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918).

## Addon Manager

* The Python dependency updater now works correctly if FreeCAD is installed as a snap package or as an AppImage. [Pull request #19384](https://github.com/FreeCAD/FreeCAD/pull/19384), [Pull request #19766](https://github.com/FreeCAD/FreeCAD/pull/19766) and [Pull request #19814](https://github.com/FreeCAD/FreeCAD/pull/19814).
* The installation path of Python modules in the dependency updater is now shown as an absolute path for better readability. It is also shown correctly according to the FreeCAD installation method. [Pull request #19828](https://github.com/FreeCAD/FreeCAD/pull/19828) and [Pull request #19816](https://github.com/FreeCAD/FreeCAD/pull/19816).

## Ambiente Assembly

* È stato aggiunto lo strumento [Inserisci nuova parte](/index.php?title=Assembly_InsertNewPart/it&action=edit&redlink=1 "Assembly InsertNewPart/it (page does not exist)") che rende possibile aggiungere facilmente nuove parti all'assieme. [Pull request #17922](https://github.com/FreeCAD/FreeCAD/pull/17922)
* È stato aggiunto lo strumento [Crea Simulazione](/index.php?title=Assembly_CreateSimulation/it&action=edit&redlink=1 "Assembly CreateSimulation/it (page does not exist)") che consente di aggiungere movimenti ai giunti e creare animazioni. [Pull request #16414](https://github.com/FreeCAD/FreeCAD/pull/16414)

### Ulteriori miglioramenti di Assembly

* I nuovi core datums possono essere utilizzati per associre giunti per assemblare più parti. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332)

## Ambiente BIM

### Ulteriori miglioramenti di BIM

* Il pannello [BIM\_Views](/BIM_Views "BIM Views") è stato revisionato e ora dispone di una sezione per tutte le viste 2D. [Pull request #15836](https://github.com/FreeCAD/FreeCAD/pull/15836)
* Il supporto IFC nativo per oggetti 2D è stato aggiunto al BIM, consentendo di incorporare oggetti 2D (linee, testi, dimensioni) all'interno di file IFC, nonché di aprire tali file da altre app BIM. [Pull request #16629](https://github.com/FreeCAD/FreeCAD/pull/16629)
* La finestra di dialogo [Schedule](/Arch_Schedule "Arch Schedule") ha ottenuto il supporto per array semplici (ad esempio non annidati). Ciò consente l'elaborazione di array regolari e di collegamento (sia espansi che non espansi) per ulteriori calcoli nel report di pianificazione BIM. [Pull request #19219](https://github.com/FreeCAD/FreeCAD/pull/19219)

## Ambiente CAM

### Ulteriori miglioramenti di CAM

* Sono state aggiunte le operazioni di maschiatura G84/G74. [Pull request #8069](https://github.com/FreeCAD/FreeCAD/pull/8069)
* È stato aggiunto il supporto multi-pass per le operazioni sui profili. [Pull request #17326](https://github.com/FreeCAD/FreeCAD/pull/17326)

## Ambiente Draft

* Il supporto per i percorsi relativi dei font è stato aggiunto a [Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it"). [Pull request #17819](https://github.com/FreeCAD/FreeCAD/pull/17819)
* La gestione dei collegamenti in [TechDraw Viste di Draft](/TechDraw_DraftView/it "TechDraw DraftView/it") è stata corretta. [Pull request #18175](https://github.com/FreeCAD/FreeCAD/pull/18175) e [Pull request #19296](https://github.com/FreeCAD/FreeCAD/pull/19296)
* La modalità di estrusione del comando [Draft Taglia/Estendi](/Draft_Trimex/it "Draft Trimex/it") è stata resa "link-aware". Ora può gestire facce appartenenti a Collegamenti e oggetti in contenitori collegati. Ed il punto che definisce l'estrusione può essere complanare alla faccia. [Pull request #18314](https://github.com/FreeCAD/FreeCAD/pull/18314) e [Pull request #18320](https://github.com/FreeCAD/FreeCAD/pull/18320)
* Anche i comandi [Sposta](/Draft_Move/it "Draft Move/it"), [Ruota](/Draft_Rotate "Draft Rotate") e [Scala](/Draft_Scale "Draft Scale") sono stati resi "link-aware". [Pull request #18795](https://github.com/FreeCAD/FreeCAD/pull/18795)
* Se un [Lega facce](/Draft_Facebinder/it "Draft Facebinder/it") basato su facce connesse viene estruso, viene effettuato un tentativo di chiuderne gli angoli. A questo scopo la proprietà *Cuci* dell'oggetto deve essere impostata su true. Tenere presente che il codice può fallire per forme complesse. [Pull request #18901](https://github.com/FreeCAD/FreeCAD/pull/18901)
* Le [Serie su tracciato](/Draft_PathArray "Draft PathArray") sono state migliorate con diverse nuove proprietà. Ora è possibile invertire la serie, specificare un'unità di spaziatura fissa e utilizzare modelli di spaziatura. [Pull request #19017](https://github.com/FreeCAD/FreeCAD/pull/19017)
* Gli oggetti dentro [layers](/Draft_Layer/it "Draft Layer/it") ora possono avere sostituzioni. [Pull request #19207](https://github.com/FreeCAD/FreeCAD/pull/19207)
* È stato aggiunto il comando [Draft Aggiungi al layer](/index.php?title=Draft_AddToLayer/it&action=edit&redlink=1 "Draft AddToLayer/it (page does not exist)"), per posizionare rapidamente gli oggetti nel layer corretto. [Pull request #19427](https://github.com/FreeCAD/FreeCAD/pull/19427)
* I comandi [Draft Declassa](/Draft_Downgrade/it "Draft Downgrade/it") e [Draft Promuovi](/Draft_Upgrade/it "Draft Upgrade/it") sono stati aggiornati. Le [Serie](/Draft_Workbench#Draft_ArrayTools "Draft Workbench") possono essere declassate ("esplose") e i nuovi oggetti vengono inseriti in uno stesso contenitore ([Gruppo](/Std_Group/it "Std Group/it"), [Part](/Std_Part/it "Std Part/it")) degli oggetti originali e ricevono anche le proprietà visive degli oggetti originali. [Pull request #19487](https://github.com/FreeCAD/FreeCAD/pull/19487) e [Pull request #19685](https://github.com/FreeCAD/FreeCAD/pull/19685)

### Ulteriori miglioramenti di Draft

* Il comando [Draft Raccordo](/Draft_Fillet/it "Draft Fillet/it") ora funziona sui bordi selezionati, anziché sul primo bordo degli oggetti selezionati. [Pull request #17945](https://github.com/FreeCAD/FreeCAD/pull/17945) e [Pull request #18150](https://github.com/FreeCAD/FreeCAD/pull/18150)
* Il menu dei livelli del comando [Draft Gruppo automatico](/Draft_AutoGroup/it "Draft AutoGroup/it") è ordinato in ordine alfabetico. [Pull request #18172](https://github.com/FreeCAD/FreeCAD/pull/18172)
* La posizione del campo *Moltiplicatore di scala* nell'interfaccia utente è stata migliorata ([Draft Imposta stile](/Draft_SetStyle/it "Draft SetStyle/it"), [Draft Stile delle annotazioni](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it") e [Draft Preferenze](/Draft_Preferences/it "Draft Preferences/it")). [Pull request #18299](https://github.com/FreeCAD/FreeCAD/pull/18299)
* Il comando [Draft Draft2Sketch](/Draft_Draft2Sketch/it "Draft Draft2Sketch/it") ora applica anche vincoli coincidenti tra i bordi di diversi oggetti di origine. [Pull request #18805](https://github.com/FreeCAD/FreeCAD/pull/18805)
* Vengono memorizzate le modalità raggio, smusso ed eliminazione del comando [Draft Raccordo](/Draft_Fillet/it "Draft Fillet/it"). [Pull request #19067](https://github.com/FreeCAD/FreeCAD/pull/19067)

## Ambiente FEM

|  |  |
| --- | --- |
|  | A popup menu was added to enable the selection of a proper solid if the selected face of CompSolid belongs to two solids. This makes it easier to select inner solids e.g. to apply materials to them. [Pull request #18812](https://github.com/FreeCAD/FreeCAD/pull/18812) |

|  |  |
| --- | --- |
|  | *ZRefine* property was added to [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") making it possible to create simple extruded hex-dominated meshes when *Quad Dominated* property is enabled. However, it works only for first order elements unless the generated elements are all hexahedrons. [Pull request #19524](https://github.com/FreeCAD/FreeCAD/pull/19524) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [FEM results objects](/FEM_ResultShow "FEM ResultShow") now support animations of results. [Pull request #18496](https://github.com/FreeCAD/FreeCAD/pull/18496) |

|  |  |
| --- | --- |
|  | Support for Elmer's [static current conduction solver](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent") was added. Joule heating may also be calculated with it. [Pull request #19835](https://github.com/FreeCAD/FreeCAD/pull/19835) |

|  |  |
| --- | --- |
|  | The [Results pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") can now store results from multiple frames. [Pull request #19610](https://github.com/FreeCAD/FreeCAD/pull/19610) |

### Ulteriori miglioramenti di FEM

* Ora è possibile impostare la verbosità del registro per Gmsh nelle [Preferenze](/FEM_Preferences/it#Gmsh "FEM Preferences/it"). [Pull request #17699](https://github.com/FreeCAD/FreeCAD/pull/17699)
* La proprietà Dati**Second Order Linear** e il supporto per [raffinamento locale](/FEM_MeshRegion/it "FEM MeshRegion/it"), precedentemente disponibili solo per Gmsh, sono ora disponibili anche per la nuova implementazione [Netgen](/FEM_MeshNetgenFromShape/it "FEM MeshNetgenFromShape/it"). [Pull request #17170](https://github.com/FreeCAD/FreeCAD/pull/17170)
* I tipi di sezione scatolare e trave ellittica sono stati aggiunti a [FEM ElementGeometry1D](/FEM_ElementGeometry1D/it "FEM ElementGeometry1D/it"). [Pull request #15843](https://github.com/FreeCAD/FreeCAD/pull/15843)
* Lo strumento [Azzera risultati](/FEM_ResultsPurge/it "FEM ResultsPurge/it") ora azzera tutti gli oggetti risultati, non solo quelli nativi di CalculiX. [Pull request #18328](https://github.com/FreeCAD/FreeCAD/pull/18328)
* [Vincolo di legame](/FEM_ConstraintTie/it "FEM ConstraintTie/it") ora può essere applicato anche alle facce della shell. [Pull request #18325](https://github.com/FreeCAD/FreeCAD/pull/18325)
* Il formato di output (binario o ASCII) e il salvataggio degli ID della geometria possono ora essere impostati per Elmer, anche in [Preferenze](/FEM_Preferences/it#Elmer "FEM Preferences/it"). [Pull request #17972](https://github.com/FreeCAD/FreeCAD/pull/17972)
* È stata aggiunta un'opzione di smussatura al [Filtro Contorni](/index.php?title=FEM_PostFilterContours/it&action=edit&redlink=1 "FEM PostFilterContours/it (page does not exist)"). [Pull request #18088](https://github.com/FreeCAD/FreeCAD/pull/18088)
* Il parametro *BucklingAccuracy* è stato aggiunto a [CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it") - potrebbe essere necessario acquisire il primo autovalore in alcune analisi di instabilità lineare. [Pull request #18790](https://github.com/FreeCAD/FreeCAD/pull/18790)
* Ora tutti gli oggetti FEM per i quali ha senso la soppressione possono essere soppressi. In precedenza erano sopprimibili solo i vincoli. [Pull request #18636](https://github.com/FreeCAD/FreeCAD/pull/18636)
* Le forze di contatto ora vengono stampate su ccx\_dat\_file nelle analisi CalculiX. [Pull request #18840](https://github.com/FreeCAD/FreeCAD/pull/18840)
* Lo strumento [Materiale Rinforzato](/FEM_MaterialReinforced/it "FEM MaterialReinforced/it") ora utilizza il [nuovo editor di materiali](/index.php?title=Materials_Edit/it&action=edit&redlink=1 "Materials Edit/it (page does not exist)"). [Pull request #18893](https://github.com/FreeCAD/FreeCAD/pull/18893)

## Ambiente Material

### Ulteriori miglioramenti di Material

* [Polycarbonate](https://en.wikipedia.org/wiki/Polycarbonate) with physical properties was added to the material database. [Pull request #19432](https://github.com/FreeCAD/FreeCAD/pull/19432)

## Ambiente Mesh

### Ulteriori miglioramenti di Mesh

## Ambiente OpenSCAD

### Ulteriori miglioramenti di OpenSCAD

## Ambiente Part

### Ulteriori miglioramenti di Part

* Lo strumento [Controlla la geometria](/Part_CheckGeometry/it "Part CheckGeometry/it") ora visualizza i risultati per forme valide, mostra oggetti ignorati e genera report nella [vista report](/Report_view/it "Report view/it").

## Ambiente PartDesign

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | The task panel of the [Hole tool](/PartDesign_Hole "PartDesign Hole") was redesigned. The elements that are not relevant are now hidden, leaving only those useful for the current configuration, even if they are read-only. The panel is based on a diagram that provides direct context, and its elements have been placed near their area of effect. [Pull request #19052](https://github.com/FreeCAD/FreeCAD/pull/19052) and [Pull request #19167](https://github.com/FreeCAD/FreeCAD/pull/19167) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | Added model taper support and more thread profiles to the [Hole tool](/PartDesign_Hole "PartDesign Hole"):  * [British Standard Whitworth](https://en.wikipedia.org/wiki/British_Standard_Whitworth) * [British Standard Fine](https://en.wikipedia.org/wiki/British_Standard_Fine) * [British Standard Pipe](https://en.wikipedia.org/wiki/British_Standard_Pipe) * [National Pipe Threads](https://en.wikipedia.org/wiki/National_pipe_thread)   [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744) |

### Ulteriori miglioramenti di PartDesign

* La lavorazione di origine in un corpo PartDesign utilizza i nuovi riferimenti principali. L'aspetto è stato modificato e i piani si ingrandiscono durante la creazione di un nuovo schizzo. Poiché l'orientamento era sbagliato nelle versioni precedenti di FreeCAD, i file creati con queste versioni devono essere convertiti all'apertura. Ciò può danneggiare i file che fanno riferimento ai datum e i file convertiti o nuovi creati con versione 1.1 e superiori verranno danneggiati in versione 1.0 e precedenti. [Pull request #18126](https://github.com/FreeCAD/FreeCAD/pull/18126)
* Il comando [Attiva/disattiva congelamento](/Std_ToggleFreeze/it "Std ToggleFreeze/it") è ora disponibile da PartDesign. [Pull request #18373](https://github.com/FreeCAD/FreeCAD/pull/18373)
* Lo strumento [Foro](/PartDesign_Hole/it "PartDesign Hole/it") ora può produrre varie [Filettature Whitworth](https://en.wikipedia.org/wiki/British_Standard_Whitworth), seguendo gli standard BSW, BSF, BSP e NPT. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* Le prestazioni delle filettature modellate dallo strumento [Foro](/PartDesign_Hole/it "PartDesign Hole/it") sono state migliorate. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* L'angolo iniziale per le filettature coniche nello strumento [Foro](/PartDesign_Hole/it "PartDesign Hole/it") è ora impostato automaticamente sul valore degli standard ISO 7-1 e ASME B1.20.1. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* Il pannello delle azioni dello strumento [Foro](/PartDesign_Hole "PartDesign Hole") è stato ulteriormente migliorato: le opzioni non applicabili in una determinata configurazione ora sono nascoste. [Pull request #19052](https://github.com/FreeCAD/FreeCAD/pull/19052)

## Ambiente Points

### Ulteriori miglioramenti di Points

## Ambiente Sketcher

|  |  |
| --- | --- |
| Fare clic sull'immagine se l'animazione non si avvia. | È stato aggiunto lo strumento [Proiezione](/Sketcher_Projection/it "Sketcher Projection/it") che rende possibile creare la definizione di [geometria esterna](/Sketcher_External/it "Sketcher External/it") e alternare tra le modalità di definizione e di costruzione per la geometria esterna. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
|  | È stato aggiunto lo strumento [Intersezione](/Sketcher_Intersection/it "Sketcher Intersection/it") che consente di creare [geometria esterna](/Sketcher_External/it "Sketcher External/it") basata sulla geometria di riferimento selezionata e all'intersezione del piano dello schizzo. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
| Fare clic sull'immagine se l'animazione non si avvia. | [Geometria esterna](/Sketcher_External/it "Sketcher External/it") (sia proiezione che intersezione) ora può essere creata selezionando una faccia. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

### Ulteriori miglioramenti di Sketcher

* Ora è possibile utilizzare direttamente la geometria esterna come input per strumenti come offset o trasformazione (serie), sia per la costruzione esterna che per la definizione della geometria. [Pull request #17615](https://github.com/FreeCAD/FreeCAD/pull/17615)
* La geometria esterna (proiettata o intersecante) è ora per impostazione predefinita geometria reale (di definizione) (ossia che non necessita di essere tracciata come nella versione 1.0 e precedenti). Può essere commutata in geometria di costruzione come qualsiasi altra geometria [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736)
* Gli assi dello Sketcher vengono ora visualizzati con lunghezza infinita. [Pull request #17312](https://github.com/FreeCAD/FreeCAD/pull/17312)
* Gli schizzi ora sono ordinati alfabeticamente nella finestra di dialogo [Associa schizzo](/Sketcher_MapSketch/it "Sketcher MapSketch/it"). [Pull request #16518](https://github.com/FreeCAD/FreeCAD/pull/16518)
* È stato aggiunto il trascinamento di gruppo, rendendo possibile trascinare tutte le entità geometriche selezionate. [Pull request #18273](https://github.com/FreeCAD/FreeCAD/pull/18273)
* C'è una nuova preferenza che, se selezionata, rende la creazione della geometria esterna indipendente dalla modalità di costruzione corrente: in questo caso viene sempre creata come geometria di riferimento. [Pull request #18697](https://github.com/FreeCAD/FreeCAD/pull/18697)

## Ambiente Spreadsheet

### Ulteriori miglioramenti di Spreadsheet

* Sono state aggiunte scorciatoie predefinite per [Stile grassetto](/Spreadsheet_StyleBold/it "Spreadsheet StyleBold/it"), [Stile corsivo](/Spreadsheet_StyleItalic/it "Spreadsheet StyleItalic/it") e [Stile sottolineato](/Spreadsheet_StyleUnderline/it "Spreadsheet StyleUnderline/it"). [Pull request #15556](https://github.com/FreeCAD/FreeCAD/pull/15556)
* Facendo doppio clic sul separatore nell'intestazione ora si ridimensiona la colonna in base al contenuto. [Pull request #16296](https://github.com/FreeCAD/FreeCAD/pull/16296)
* Lo zoom è stato aggiunto al foglio di calcolo. [Pull request #16130](https://github.com/FreeCAD/FreeCAD/pull/16130)

## Ambiente Surface

### Ulteriori miglioramenti di Surface

## Ambiente TechDraw

### Ulteriori miglioramenti di TechDraw

* Lo strumento [Inserisci Annotazione Area](/TechDraw_AreaDimension/it "TechDraw AreaDimension/it") ora tiene conto correttamente dei fori nelle facce. [Pull request #17740](https://github.com/FreeCAD/FreeCAD/pull/17740)
* La convalida della forma è ora disponibile e può essere abilitata in [Preferenze](/TechDraw_Preferences/it#Advanced "TechDraw Preferences/it"). [Pull request #18282](https://github.com/FreeCAD/FreeCAD/pull/18282)
* Il ridimensionamento dei simboli SVG è stato corretto. [Pull request #18757](https://github.com/FreeCAD/FreeCAD/pull/18757)
* È stato aggiunto il nuovo identificatore di formato *r*. Arrotonda il valore della quota al passo specificato come decimale prima di *r*. Ad esempio, *%0.5r* (o semplicemente *%.5r*) arrotonda a 0,5. [Pull request #19393](https://github.com/FreeCAD/FreeCAD/pull/19393)

## Import and export

* The alignment of sketches in SVG export and legacy DXF export has been fixed. [Pull request #19765](https://github.com/FreeCAD/FreeCAD/pull/19765)

## Compilazione

## Limitazioni note

## Altre Risorse

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.1/it&oldid=1569379>"