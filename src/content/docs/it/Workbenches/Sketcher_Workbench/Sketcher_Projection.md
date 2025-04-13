---
title: Sketcher Proiezione
---
|  |
| --- |
| Sketcher Proiezione |
| Posizione nel menu |
| Schizzo → Strumenti Sketcher → Crea geometria di proiezione esterna |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G X |
| Introdotto nella versione |
| 1.1 |
| Vedere anche |
| [Sketcher Geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_Projection.svg) Sketcher Proiezione ([disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")) proietta bordi e/o vertici appartenenti ad oggetti esterni allo schizzo sul piano dello schizzo. La geometria proiettata è chiamata "geometria esterna". Rimane parametricamente collegata ai suoi oggetti sorgente. La geometria esterna è contrassegnata con un [colore](/Sketcher_Preferences/it#Appearance "Sketcher Preferences/it") dedicato (magenta predefinito). Può definire una geometria visibile all'esterno dello schizzo o una geometria di costruzione che non è visibile all'esterno dello schizzo.

## Utilizzo

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_Projection.svg) Crea geometria di proiezione esterna.
   * Selezionare l'opzione **Schizzo → Strumenti Sketcher → ![](/images/Sketcher_Projection.svg) Crea geometria di proiezione esterna** dal menu.
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view "3D view") e selezionare l'opzione **![](/images/Sketcher_Projection.svg) Crea geometria di proiezione esterna** dal menu contestuale.
   * Usare la scorciatoia da tastiera: G quindi X.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. Seleziona una o più facce esterne, bordi e/o vertici. Vedere [Note](#Note).
4. Viene creata la geometria esterna.
5. Questo strumento viene sempre eseguito in modalità continua: opzionalmente continuare a selezionare facce, bordi e/o vertici esterni.
6. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* Tutti i bordi di una faccia vengono proiettati sul piano dello schizzo.
* La geometria esterna viene creata come geometria di definizione o geometria di costruzione in base allo stato dello strumento [Attiva/disattiva geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it"). Questo strumento può essere utilizzato anche per attivare/disattivare la modalità dei singoli bordi. Selezionare l'opzione **Modifica → Preferenze... → Sketcher → Generale → Aggiungi sempre geometria esterna come riferimento** per ignorare lo stato di questo strumento e aggiungere sempre la geometria esterna come geometria di costruzione.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Projection/it&oldid=1562510>"