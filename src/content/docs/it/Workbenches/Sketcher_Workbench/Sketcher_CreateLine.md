---
title: Sketcher Crea linea
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| Sketcher Crea linea                                                                 |
| Posizione nel menu                                                                  |
| Schizzo → Geometrie Sketcher → Crea linea                                           |
| Ambiente                                                                            |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")                          |
| Avvio veloce                                                                        |
| G L                                                                                 |
| Introdotto nella versione                                                           |
| -                                                                                   |
| Vedere anche                                                                        |
| [Sketcher Crea polilinea](/Sketcher_CreatePolyline/it "Sketcher CreatePolyline/it") |
|                                                                                     |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateLine.svg) Sketcher Crea linea crea una linea. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") sono abilitati, lo strumento ha tre modalità.

![](/images/Sketcher_LineExample1.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateLine.svg) Crea linea.
   - Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateLine.svg) Crea linea** dal menu.
   - Usare la scorciatoia da tastiera: G quindi L.
2. Il cursore si trasforma in una croce con l'icona della modalità strumento corrente.
3. Se [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") sono abilitati, la sezione **Line parametri** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) viene aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
4. Facoltativamente, premere il tasto M o selezionare dall'elenco a discesa nella sezione dei parametri per modificare la modalità dello strumento:
   - ![](/images/Sketcher_CreateLineAngleLength.svg) **Punto, lunghezza, angolo**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere il punto iniziale della linea. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere il punto finale della linea. Oppure con Dim-OVP: inserisci la lunghezza e/o l'angolo della linea. L'angolo è relativo all'asse X dello schizzo.
   - ![](/images/Sketcher_CreateLineLengthWidth.svg) **Punto, larghezza, altezza**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Scegliere il punto iniziale della linea. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere il punto finale della linea. Oppure con Dim-OVP: inserisci la sua distanza X e/o Y dal punto iniziale.
   - ![](/images/Sketcher_CreateLine.svg) **2 punti**:
     1. Scegliere il punto iniziale della linea. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
     2. Scegliere il punto finale della linea. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
5. La linea viene creata e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
6. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
   1. Facoltativamente, continuare a creare linee.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateLine/it&oldid=1499388>"
