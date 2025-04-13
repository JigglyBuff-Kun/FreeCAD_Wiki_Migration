---
title: Sketcher Crea ellisse dal centro
---

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| Sketcher Crea ellisse dal centro                                                                  |
| Posizione nel menu                                                                                |
| Schizzo → Geometrie Sketcher → Crea ellisse dal centro                                            |
| Ambiente                                                                                          |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")                                        |
| Avvio veloce                                                                                      |
| _Nessuno_                                                                                         |
| Introdotto nella versione                                                                         |
| 0.15                                                                                              |
| Vedere anche                                                                                      |
| [Sketcher Crea arco di ellisse](/Sketcher_CreateArcOfEllipse/it "Sketcher CreateArcOfEllipse/it") |
|                                                                                                   |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateEllipseByCenter.svg) Sketcher Crea ellisse dal centro crea un'ellisse in base al suo centro, un punto finale di uno dei suoi assi e un punto lungo l'ellisse. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): O facoltativamente da entrambi i punti finali di uno dei suoi assi e da un punto lungo l'ellisse.

![](/images/Sketcher_CreateEllipseByCenter_Example.png)

Ellisse (bianco) con geometria interna (giallo scuro)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateEllipseByCenter.svg) Crea ellisse dal centro.
   - Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateEllipseByCenter.svg) Crea ellisse dal centro** dal menu.
   - Usare la scorciatoia da tastiera: G quindi E, quindi E.
2. Il cursore si trasforma in una croce con l'icona della modalità strumento corrente.
3. La sezione **Parametri ellisse** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è stata aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
4. Facoltativamente, premere il tasto M o selezionare dall'elenco a discesa nella sezione dei parametri per modificare la modalità dello strumento:
   - ![](/images/Sketcher_CreateEllipseByCenter.svg) **Centro**:
     1. Scegliere il centro dell'ellisse. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere un punto finale di uno degli assi dell'ellisse, questo definisce anche uno dei suoi raggi. Oppure con Dim-OVP: inserire questo raggio e/o l'angolo di questo asse.
     3. Scegliere un punto per definire l'altro raggio dell'ellisse. Oppure con Dim-OVP: inserire questo raggio.
   - ![](/images/Sketcher_CreateEllipseBy3Points.svg) **Punti finali dell'asse**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere i punti finali di uno degli assi dell'ellisse, questo definisce anche uno dei suoi raggi. Oppure con Pos-OVP: inserire le loro coordinate X e/o Y. Per questi punti non viene creato alcun vincolo.
     2. Scegliere un punto per definire l'altro raggio dell'ellisse. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y. Nessun vincolo viene creato per questo punto.
5. Viene creata l'ellisse, incluso un insieme di geometria interna (asse maggiore, asse minore e due fuochi) e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
6. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
   1. Facoltativamente, continuare a creare ellissi.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc, oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

- Gli elementi della geometria interna possono essere cancellati. Possono essere ricreati in qualsiasi momento con [Sketcher Mostra/nascondi geometria interna](/Sketcher_RestoreInternalAlignmentGeometry/it "Sketcher RestoreInternalAlignmentGeometry/it").
- Una volta creati, gli assi maggiore e minore di un'ellisse sono rigidi e non possono essere scambiati ridimensionando. Questa è una conseguenza della parametrizzazione del risolutore e dello stesso rigido comportamento di [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it"). Un'ellisse deve essere ruotata per scambiare i suoi assi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateEllipseByCenter/it&oldid=1502987>"
