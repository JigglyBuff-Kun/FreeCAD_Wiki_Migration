---
title: Sketcher Crea poligono regolare
---
|  |
| --- |
| Sketcher Crea poligono regolare |
| Posizione nel menu |
| Schizzo → Geometrie Sketcher → Crea poligono regolare |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| G P R |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateRegularPolygon.svg) Sketcher Crea poligono regolare crea un poligono regolare.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

Pos-OVP = [On-View-Parameters](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") Posizionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")  
Dim-OVP = On-View-Parameters Dimensionali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_CreateRegularPolygon.svg) Poligono regolare.
   * Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateRegularPolygon.svg) Crea poligono regolare** dal menu.
   * Usare la scorciatoia da tastiera: G quindi P, quindi R.
2. Inserire il **Numero di lati** nella finestra di dialogo che si apre.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. La sezione **Parametri poligono** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è stata aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
5. Facoltativamente, modificare il numero di **Lati** (questo può essere fatto anche dopo aver selezionato il centro):
   * Inserire un numero maggiore di due.
   * Premere il tasto U per aumentare il numero.
   * Premere il tasto J per diminuire il numero.
6. Scegliere il centro del poligono. Oppure con Pos-OVP: inserire le sue coordinate X e/o Y.
7. Scegliere il primo punto del poligono, questo definisce anche il raggio del cerchio circoscritto. Oppure con Dim-OVP: inserire il raggio del cerchio e/o l'angolo del primo punto. L'angolo è relativo all'asse X dello schizzo. Non viene creato alcun vincolo per questo angolo.
8. Viene creato il poligono, incluso un cerchio di geometria di costruzione circoscritta, e vengono aggiunti i vincoli basati su Pos-OVP e Dim-OVP applicabili.
9. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench#Continue_modes/it "Sketcher Workbench"):
   1. Facoltativamente, continuare a creare poligoni.
   2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

* Il cerchio della geometria di costruzione non è visibile all'esterno dello schizzo. Non può essere eliminato senza interrompere la geometria del poligono.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRegularPolygon/it&oldid=1504156>"