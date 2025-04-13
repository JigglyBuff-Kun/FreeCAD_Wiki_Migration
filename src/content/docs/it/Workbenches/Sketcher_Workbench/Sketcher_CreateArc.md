---
title: Sketcher Crea arco dal centro
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| Sketcher Crea arco dal centro                                                 |
| Posizione nel menu                                                            |
| Sketch → Geometrie → Crea arco da centro                                      |
| Ambiente                                                                      |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")                    |
| Avvio veloce                                                                  |
| G A                                                                           |
| Introdotto nella versione                                                     |
| -                                                                             |
| Vedere anche                                                                  |
| [Sketcher Crea cerchio](/Sketcher_CreateCircle/it "Sketcher CreateCircle/it") |
|                                                                               |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateArc.svg) Sketcher Crea arco dal centro crea un arco tramite il suo centro e i suoi punti finali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): o facoltativamente dai suoi punti finali e da un punto lungo l'arco.

![](/images/Sketcher_ArcExample3.png)

Arco creato in modalità Centro con vincoli applicati automaticamente definiti inserendo tutti i parametri On-View

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateArc.svg) Crea arco dal centro.
   - Selezionare l'opzione **Sketcher → Geometrie Sketcher → ![](/images/Sketcher_CreateArc.svg) Crea arco dal centro** dal menu.
   - Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_CreateArc.svg) Crea arco dal centro** dal menu contestuale.
   - Usare la scorciatoia da tastiera: G quindi A.
2. Il cursore si trasforma in una croce con l'icona della modalità strumento corrente.
3. La sezione **Parametri dell'arco** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è stata aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
4. Facoltativamente, premere il tasto M o selezionare dall'elenco a discesa nella sezione dei parametri per modificare la modalità dello strumento:
   - ![](/images/Sketcher_CreateArc.svg) **Centro**:
     1. Scegliere il centro dell'arco. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere il punto iniziale dell'arco, questo definisce anche il raggio. Oppure con Dim-OVP: inserire il raggio e/o l'angolo iniziale dell'arco. L'angolo è relativo all'asse X dello schizzo. Non viene creato alcun vincolo per questo angolo.
     3. Selezionare il punto finale dell'arco. Oppure con Dim-OVP: inserire l'angolo di apertura dell'arco.
   - ![](/images/Sketcher_Create3PointArc.svg) **3 punti del bordo**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Selezionare i punti iniziale e finale dell'arco. Oppure con Pos-OVP: inserire le loro coordinate X e/o Y.
     2. Scegliere un altro punto per definire il raggio. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y. Nessun vincolo viene creato per questo punto.
5. L'arco viene creato e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
6. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
   1. Facoltativamente continuare a creare archi.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArc/it&oldid=1503008>"
