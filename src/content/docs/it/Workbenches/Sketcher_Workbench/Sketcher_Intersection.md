---
title: Sketcher Intersezione
---
|  |
| --- |
| Sketcher Intersezione |
| Posizione nel menu |
| Schizzo → Strumenti Sketcher → Crea geometria di intersezione esterna |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G I |
| Introdotto nella versione |
| 1.1 |
| Vedere anche |
| [Sketcher Geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_Intersection.svg) Sketcher Intersezione ([disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")) interseca le facce e/o i bordi appartenenti agli oggetti esterni allo schizzo con il piano dello schizzo. La geometria intersecata è chiamata "geometria esterna". Rimane parametricamente collegata ai suoi oggetti sorgente. La geometria esterna è contrassegnata con un [colore](/Sketcher_Preferences/it#Appearance "Sketcher Preferences/it") dedicato (magenta predefinito). Può definire una geometria visibile all'esterno dello schizzo o una geometria di costruzione che non è visibile all'esterno dello schizzo.

## Utilizzo

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_Intersection.svg) Crea geometria di intersezione esterna.
   * Selezionare l'opzione **Schizzo → Strumenti Sketcher → ![](/images/Sketcher_Intersection.svg) Crea geometria di intersezione esterna** dal menu.
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_Intersection.svg) Crea geometria di intersezione esterna** dal menu contestuale.
   * Usare la scorciatoia da tastiera: G quindi I.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. Selezionare una o più facce e/o bordi esterni. Vedere [Note](#Note).
4. Viene creata la geometria esterna.
5. Questo strumento viene sempre eseguito in modalità continua: opzionalmente continuare a selezionare facce e/o bordi esterni.
6. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* Una faccia da come risultato uno o più bordi, un bordo uno o più punti. La geometria che non tocca il piano dello schizzo viene ignorata.
* La geometria esterna viene creata come geometria di definizione o geometria di costruzione in base allo stato dello strumento [Attiva/disattiva geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it"). Questo strumento può essere utilizzato anche per attivare/disattivare la modalità dei singoli bordi. Selezionare l'opzione **Modifica → Preferenze... → Sketcher → Generale → Aggiungi sempre geometria esterna come riferimento** per ignorare lo stato di questo strumento e aggiungere sempre la geometria esterna come geometria di costruzione.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Intersection/it&oldid=1562502>"