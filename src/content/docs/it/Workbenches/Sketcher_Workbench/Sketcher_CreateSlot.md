---
title: Sketcher Crea asola
---
|  |
| --- |
| Sketcher Crea asola |
| Posizione nel menu |
| Schizzo → Geometrie Sketcher → Crea asola |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G S |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Crea asola ad arco](/Sketcher_CreateArcSlot/it "Sketcher CreateArcSlot/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateSlot.svg) Sketcher Crea asola crea un'asola, una polilinea chiusa composta da due semicerchi collegati da due linee rette parallele.

![](/images/SketcherCreateSlotExample.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_CreateSlot.svg) Crea asola.
   * Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateSlot.svg) Crea asola** dal menu.
   * La scorciatoia da tastiera: G quindi S.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. Scegliere il centro del primo semicerchio. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
4. Scegliere il centro del secondo semicerchio. Oppure con Dim-OVP: inserire la distanza tra i centri e/o l'angolo dell'asola. L'angolo è relativo all'asse X dello schizzo.
5. Scegliere un punto per definire il raggio dell'asola. Oppure con Dim-OVP: inserire questo raggio.
6. Viene creata l'asola e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
7. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench#Continue_modes/it "Sketcher Workbench"):
   1. Facoltativamente, continuare a creare asole.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* versione 0.21 e precedenti ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")): Tenendo premuto Ctrl quando si seleziona il secondo centro vincolerà l'asola ad essere disegnata orizzontalmente o verticalmente.
* [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): [Aggancio angolare](/Sketcher_Snap/it "Sketcher Snap/it") può essere utilizzato per controllare l'angolo dell'asola.
* [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it"): un'asola può anche essere vincolata orizzontalmente o verticalmente se l'opzione [Vincoli automatici](/Sketcher_Workbench/it#Auto_constraints "Sketcher Workbench/it") è abilitata.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateSlot/it&oldid=1504191>"