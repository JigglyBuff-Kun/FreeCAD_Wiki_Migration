---
title: Sketcher Crea raccordo
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher Crea raccordo                                     |
| Posizione nel menu                                         |
| Schizzo → Strumenti Sketcher → Crea raccordo               |
| Ambiente                                                   |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce                                               |
| G F F                                                      |
| Introdotto nella versione                                  |
| -                                                          |
| Vedere anche                                               |
| _Nessuno_                                                  |
|                                                            |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateFillet.svg) Sketcher Crea raccordo crea un raccordo tra due bordi non paralleli. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Lo strumento può anche creare uno smusso.

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se due bordi dritti collegati da un [vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") vengono raccordati o smussati, il punto d'angolo può essere opzionalmente conservato. Lo strumento aggiunge quindi un [oggetto Punto](/Sketcher_CreatePoint/it "Sketcher CreatePoint/it") che ha un [vincolo Punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") con entrambi i bordi. I vincoli collegati al punto d'angolo vengono trasferiti al nuovo oggetto punto.

![](/images/SketcherCreateFilletExample.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateFillet.svg) Crea raccordo.
   - Selezionare l'opzione **Sketcher → Strumenti Sketcher → ![](/images/Sketcher_CreateFillet.svg) Crea raccordo** dal menu.
   - Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_CreateFillet.svg) Crea raccordo** dal menu contestuale.
   - Usare la scorciatoia da tastiera: G quindi F, quindi F.
2. Se è presente una selezione precedente, questa viene cancellata. Lo strumento non accetta una preselezione.
3. Il cursore si trasforma in una croce con l'icona della modalità strumento corrente.
4. La sezione **Parametri raccordo/smusso** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
5. Facoltativamente, premere il tasto U o deselezionare la casella di controllo **Mantieni angolo** per disabilitare tale opzione. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
6. Facoltativamente, premere il tasto M o selezionare dall'elenco a discesa nella sezione parametri per modificare la modalità strumento:
   - ![](/images/Sketcher_CreateFillet.svg) **Raccordo**
   - ![](/images/Sketcher_CreateChamfer.svg) **Smusso**
7. Eseguire una delle seguenti operazioni:
   - Selezionare un punto con un [vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") che collega due bordi dritti non paralleli.
   - Selezionare due bordi non paralleli. Entrambi i bordi possono essere una [linea](/Sketcher_CreateLine/it "Sketcher CreateLine/it"), un [arco](/Sketcher_CreateArc/it "Sketcher CreateArc/it"), un [arco di ellisse](/Sketcher_CreateArcOfEllipse/it "Sketcher CreateArcOfEllipse/it"), un [arco di iperbole](/Sketcher_CreateArcOfHyperbola/it "Sketcher CreateArcOfHyperbola/it") o un [arco di parabola](/Sketcher_CreateArcOfParabola/it "Sketcher CreateArcOfParabola/it"). Le [B-spline](/Sketcher_Workbench/it#Sketcher_CompCreateBSpline "Sketcher Workbench/it") non sono attualmente supportate.
8. Viene creato il raccordo o lo smusso, incluso un oggetto punto in caso di angolo conservato. Per uno smusso viene creato anche un arco di geometria di costruzione.
9. Questo strumento funziona sempre in modalità continua: facoltativamente, continuare a selezionare punti e/o bordi.
10. Per terminare, fare clic con il pulsante destro del mouse o premere Esc, oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

- L'arco della geometria di costruzione di uno smusso non è visibile all'esterno dello schizzo. Non può essere eliminato senza interrompere la geometria dello smusso.
- Alcune curve ([coniche](/Sketcher_Workbench/it#Sketcher_CompCreateConic "Sketcher Workbench/it")) potrebbero dover essere [rifilate](/Sketcher_Trimming/it "Sketcher Trimming/it") prima di poter essere raccordate.
- Il raggio del raccordo dipende dal metodo di selezione. Se viene selezionato un [vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") che collega due bordi dritti, il raggio del raccordo viene derivato dalla lunghezza del bordo più corto. Se vengono selezionati due bordi, il raggio è la distanza dal primo punto cliccato all'intersezione (estesa) dei bordi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/it&oldid=1515952>"
