---
title: Sketcher Crea cerchio dal centro
---

|                                                                      |
| -------------------------------------------------------------------- |
| Sketcher Crea cerchio dal centro                                     |
| Posizione nel menu                                                   |
| Schizzo → Geometrie Sketcher → Crea cerchio dal centro               |
| Ambiente                                                             |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")           |
| Avvio veloce                                                         |
| G C                                                                  |
| Introdotto nella versione                                            |
| -                                                                    |
| Vedere anche                                                         |
| [Sketcher Crea arco](/Sketcher_CreateArc/it "Sketcher CreateArc/it") |
|                                                                      |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateCircle.svg) Sketcher Crea cerchio crea un cerchio in base al suo centro e un punto lungo la circonferenza. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): o facoltativamente da tre punti lungo la circonferenza.

![](/images/Sketcher_CircleExample1.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateCircle.svg) Crea cerchio dal centro.
   - Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateCircle.svg) Crea cerchio dal centro** dal menu.
   - Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_CreateCircle.svg) Crea cerchio dal centro** dal menu contestuale.
   - Usare la scorciatoia da tastiera: G quindi C.
2. Il cursore si trasforma in una croce con l'icona della modalità strumento corrente.
3. La sezione **Parametri cerchio** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è stata aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
4. Facoltativamente, premere il tasto M o selezionare dall'elenco a discesa nella sezione dei parametri per modificare la modalità dello strumento:
   - ![](/images/Sketcher_CreateCircle.svg) **Centro**:
     1. Scegliere il centro del cerchio. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere un punto per definire il raggio del cerchio. Oppure con Dim-OVP: inserire questo raggio.
   - ![](/images/Sketcher_Create3PointCircle.svg) **3 punti**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere tre punti per definire il cerchio. Oppure con Pos-OVP: inserire le loro coordinate X e/o Y. Per questi punti non viene creato alcun vincolo.
5. Il cerchio viene creato e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
6. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
   1. Facoltativamente, continuare a creare cerchi.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc, oppure avviare un altro strumento di creazione di geometrie o vincoli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateCircle/it&oldid=1502950>"
