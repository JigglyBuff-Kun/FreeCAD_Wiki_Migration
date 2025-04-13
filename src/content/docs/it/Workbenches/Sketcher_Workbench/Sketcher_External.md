---
title: Sketcher Geometria esterna
---
|  |
| --- |
| Sketcher Geometria esterna |
| Posizione nel menu |
| Schizzo → Strumenti Sketcher → Crea geometria esterna |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G X |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it") |
|  |

## Descrizione

versione 1.0 e precedenti: lo strumento ![](/images/Sketcher_External.svg) Sketcher Geometria esterna proietta bordi e/o vertici appartenenti a oggetti esterni allo schizzo sul piano dello schizzo. La geometria proiettata è chiamata "geometria esterna". Rimane parametricamente collegato ai suoi oggetti sorgente. I bordi della geometria esterna sono contrassegnati con un [colore](/Sketcher_Preferences/it#Appearance "Sketcher Preferences/it") (magenta predefinito) e un tipo di linea ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) dedicati. Similmente alla geometria di costruzione, la geometria esterna non è visibile all'esterno dello schizzo, ma ha lo scopo di aiutare a definire i vincoli e altre geometrie all'interno dello schizzo stesso.

versione 1.1 e superiori: Vedere ![](/images/Sketcher_Projection.svg) [Sketcher Proiezione](/Sketcher_Projection/it "Sketcher Projection/it")

![](/images/Sketcher_ExternalEsempio1.png)

Le due linee magenta sono una geometria esterna collegata ai bordi di un [Pad](/PartDesign_Pad/it "PartDesign Pad/it") preesistente. Sono usate per vincolare i cerchi.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_External.svg) Crea geometria esterna.
   * Selezionare l'opzione **Schizzo → Strumenti Sketcher → ![](/images/Sketcher_External.svg) Crea geometria esterna** dal menu.
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_External.svg) Crea geometria esterna** dal menu contestuale.
   * Usare la scorciatoia da tastiera: G quindi X.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. Selezionare un bordo esterno o un vertice. Vedere [Note](#Note).
4. Viene creata la geometria esterna.
5. Questo strumento viene sempre eseguito in modalità continua: opzionalmente continuare a selezionare i bordi esterni e/o i vertici.
6. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* È possibile selezionare solo bordi e vertici di oggetti all'interno dello stesso sistema di coordinate. Lo schizzo e l'oggetto devono trovarsi nello stesso [Corpo](/PartDesign_Body/it "PartDesign Body/it"), o nella stessa [Parte](/Std_Part/it "Std Part/it"), o entrambi nel sistema di coordinate globali. Se necessario, utilizzare un [Binder](/PartDesign_SubShapeBinder/it "PartDesign SubShapeBinder/it") per portare una copia dell'oggetto nel sistema di coordinate corrente.
* Le dipendenze circolari non sono consentite. Non è possibile collegarsi a un oggetto che dipende dallo schizzo stesso.
* I collegamenti agli elementi di altri schizzi sono possibili e incoraggiati, poiché sono più affidabili dei collegamenti alla geometria (solida) generata. Quest'ultimo può soffrire del [Problema di denominazione topologica](/Topological_naming_problem/it "Topological naming problem/it"). Vedere [Consigli per modelli stabili](/Feature_editing/it#Advice_for_creating_stable_models "Feature editing/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/it&oldid=1523194>"