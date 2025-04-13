---
title: Sketcher Crea rettangolo
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| Sketcher Crea rettangolo                                                            |
| Posizione nel menu                                                                  |
| Schizzo → Geometrie Sketcher → Crea rettangolo                                      |
| Ambiente                                                                            |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")                          |
| Avvio veloce                                                                        |
| G R                                                                                 |
| Introdotto nella versione                                                           |
| -                                                                                   |
| Vedere anche                                                                        |
| [Sketcher Crea polilinea](/Sketcher_CreatePolyline/it "Sketcher CreatePolyline/it") |
|                                                                                     |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateRectangle.svg) Sketcher Crea rettangolo crea un rettangolo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Lo strumento ha quattro modalità, due delle quali possono anche produrre parallelogrammi. Gli angoli arrotondati e la creazione di una copia sfalsata sono funzioni opzionali.

![](/images/SketcherCreateRectangleExample.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateRectangle.svg) Crea rettangolo.
   - Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateRectangle.svg) Crea rettangolo** dal menu.
   - Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_CreateRectangle.svg) Crea rettangolo** dal menu contestuale.
   - Usare la scorciatoia da tastiera: G quindi R.
2. Il cursore si trasforma in una croce con l'icona della modalità strumento corrente.
3. La sezione **Parametri rettangolo** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è stata aggiunta nella parte superiore della finestra di [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
4. Facoltativamente, premere il tasto U o selezionare la casella di controllo **Angoli arrotondati** per applicare i raccordi al rettangolo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
5. Facoltativamente, premere il tasto J o seleziona la casella di controllo **Cornice** per creare una seconda forma sfalsata. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
6. Facoltativamente, premere il tasto M o seleziona dall'elenco a discesa nella sezione dei parametri per modificare la modalità dello strumento:
   - ![](/images/Sketcher_CreateRectangle.svg) **Angolo, larghezza, altezza**:
     1. Scegliere il primo angolo del rettangolo. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere l'angolo opposto del rettangolo. Oppure con Dim-OVP: inserire la larghezza e/o l'altezza del rettangolo.
   - ![](/images/Sketcher_CreateRectangle_Center.svg) **Centro, larghezza, altezza**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere il centro del rettangolo. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere un angolo del rettangolo. Oppure con Dim-OVP: inserire la larghezza e/o l'altezza del rettangolo.
   - ![](/images/Sketcher_CreateRectangle3Points.svg) **3 angoli**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere il primo angolo del rettangolo. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere il punto finale del primo bordo del rettangolo. Oppure con Dim-OVP: inserire la lunghezza e/o l'angolo del primo bordo. L'angolo è relativo all'asse X dello schizzo.
     3. Scegliere il terzo angolo, opposto al primo, del rettangolo. Oppure con Dim-OVP: inserire la lunghezza e/o l'angolo del secondo bordo. L'angolo è relativo al primo bordo. Solo se questo angolo è 90° il risultato sarà un rettangolo.
   - ![](/images/Sketcher_CreateRectangle3Points_Center.svg) **Centro, 2 angoli**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere il centro del rettangolo. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere il primo angolo del rettangolo. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     3. Scegliere il secondo angolo del rettangolo. Oppure con Dim-OVP: inserire la lunghezza e/o l'angolo del bordo tra il primo e il secondo angolo. L'angolo è relativo all'altro bordo collegato al primo angolo. Solo se questo angolo è 90° il risultato sarà un rettangolo.
7. Se è selezionato **Angoli arrotondati**: selezionare un punto per definire il raggio del raccordo. Oppure con Dim-OVP: inserirlo.
8. Se è selezionato **Cornice**: selezionare un punto per definire la distanza di offset. Oppure con Dim-OVP: inserirlo. Se l'offset è interno e maggiore del raggio, la forma dell'offset non avrà raccordi.
9. La geometria viene creata e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
10. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
    1. Facoltativamente, continuare a creare rettangoli.
    2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRectangle/it&oldid=1503447>"
