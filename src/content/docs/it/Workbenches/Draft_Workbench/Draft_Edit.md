---
title: Draftː Modifica
---
|  |
| --- |
| Draft Modifica |
| Posizione nel menu |
| Modifiche → Modifica |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| D E |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Modalità modifica](/Std_Edit/it "Std Edit/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Edit.svg) **Modifica** mette gli oggetti selezionati in modalità Draft Modifica. In questa modalità le proprietà degli oggetti possono essere modificate graficamente. In genere i nodi possono essere spostati e in alcuni casi è possibile selezionare le opzioni del menu contestuale. Il comando può gestire la maggior parte degli oggetti Draft, ma anche alcuni altri oggetti. Vedi [Oggetti supportati](#Oggetti_supportati). Gli oggetti Draft supportati possono anche essere messi in modalità Draft Modifica con il comando [Modalità Modifica](/Std_Edit/it "Std Edit/it").

![](/images/Draft_Edit_example.png)

4 oggetti in modalità Draft Modifica: Polilinea (rosso), Arco (nero), BSpline (verde) e BezCurve (magenta)

## Utilizzo

Vedere anche: [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Opzionalmente selezionare uno o più oggetti. Si noti che sebbene più oggetti possano trovarsi in modalità Modifica, gli oggetti possono essere modificati solo uno alla volta.
2. Esistono diversi modi per invocare il comando:
   * Se non si ha ancora selezionato un oggetto: fare doppio clic su un oggetto nella [Vista ad albero](/Tree_view/it "Tree view/it"). Funziona solo per gli oggetti Draft supportati.
   * Premere il pulsante ![](/images/Draft_Edit.svg) Modifica.
   * Selezionare l'opzione **Modifiche → ![](/images/Draft_Edit.svg) Modifica** dal menu.
   * Usare la scorciatoia da tastiera: D poi E.
   * Per un singolo oggetto: selezionare l'opzione **Modifica** dal menu contestuale [Vista ad albero](/Tree_view/it "Tree view/it"). Funziona solo per gli oggetti Draft supportati. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
3. Se non si ha ancora selezionato un oggetto: selezionare un oggetto nella [Vista 3D](/3D_view/it "3D view/it").
4. Gli oggetti selezionati vengono contrassegnati con nodi temporanei e si apre il [Pannello attività principale](#Main_task_panel/it). Vedere [Opzioni](#Opzioni) per maggiori informazioni.
5. Facoltativamente, utilizzare un menu contestuale del nodo o del bordo. Questi menu contestuali sono disponibili solo per alcuni oggetti Draft. Vedi [Oggetti supportati](#Oggetti_supportati) per ulteriori informazioni.
   * Effettuare una delle seguenti operazioni:
     + Su tutti i sistemi operativi: tenere premuto E e fare clic sul nodo o sul bordo. Per utilizzare E potrebbe essere necessario fare clic nella [Vista 3D](/3D_view/it "3D view/it") una volta per assicurarsi che abbia il focus.
     + Su Windows: tenere premuto Alt e fare clic sul nodo o sul bordo.
     + Su Linux: tenere premuto Maiusc+Alt, Ctrl+Alt o Alt e fare clic sul nodo o bordo.
     + Su macOS: tenere premuto Option e fare clic sul nodo o sul bordo.
   * Selezionare un'opzione dal menu contestuale.
   * Se l'opzione selezionata richiede l'inserimento di punti:
     + Si apre il [Pannello attività modifica nodo](#Pannello_attività_modifica_nodo). Vediere [Opzioni](#Opzioni) per maggiori informazioni.
     + Scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
6. Facoltativamente spostare un nodo:
   * Fare clic sul nodo nella [Vista 3D](/3D_view/it "3D view/it").
   * Si apre il [Pannello attività modifica nodo](#Pannello_attività_modifica_nodo). Vedere [Opzioni](#Opzioni) per maggiori informazioni.
   * Scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
   * Il risultato dipende dall'oggetto e dal nodo selezionato.
7. Premere Esc o il pulsante Chiudi (il pulsante nella parte superiore del pannello delle attività, senza l'immagine) per terminare il comando.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 0.22).

### Pannello attività principale

* Premere Esc o il pulsante Chiudi per interrompere il comando.

### Pannello attività modifica nodo

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Invio dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando hai i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Per usare le coordinate polari inserire un valore per **Lunghezza** e un valore per **Angolo**, e premere Enter dopo ciascuno.
* Selezionare la casella **Angolo** per vincolare il puntatore all'angolo specificato.
* Premere R o fare clic sulla casella di controllo **Relative** per attivare/disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate del punto selezionato sono relative al punto originale, altrimenti sono relative all'origine del sistema di coordinate. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Premere G o fai clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").

## Oggetti supportati

### [Draft Linea](/Draft_Line/it "Draft Line/it") e [Draft Polilinea](/Draft_Wire/it "Draft Wire/it")

* Se il nodo iniziale o finale di una polilinea aperta viene spostato in modo che coincidano, la polilinea viene chiusa.
* Menu contestuale del nodo: `Elimina punto`. Devono rimanere almeno due punti.
* Menu contestuale bordo: `Aggiungi punto`, `Apri polilinea`/`Chiudi polilinea` ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e `Inverti polilinea`.

### [Draft Arco](/Draft_Arc/it "Draft Arc/it") e [Draft Arco da tre punti](/Draft_Arc_3Points/it "Draft Arc 3Points/it")

* Menu contestuale del nodo centrale: `Sposta arco`.
* Avvia il menu contestuale del nodo: `Imposta primo angolo`.
* Menu contestuale del nodo finale: `Imposta ultimo angolo`.
* Menu contestuale del nodo centrale: `Imposta raggio`.
* Menu contestuale bordo: `Inverti arco`.

### [Draft Cerchio](/Draft_Circle/it "Draft Circle/it")

* Nessun menu contestuale per questo oggetto.

### [Draft Ellisse](/Draft_Ellipse/it "Draft Ellipse/it")

* Nessun menu contestuale per questo oggetto.

### [Draft Rettangolo](/Draft_Rectangle/it "Draft Rectangle/it")

* Nessun menu contestuale per questo oggetto.

### [Draft Poligono](/Draft_Polygon/it "Draft Polygon/it")

* Nessun menu contestuale per questo oggetto.

### [Draft BSpline](/Draft_BSpline/it "Draft BSpline/it")

* Se il nodo iniziale o finale di una spline aperta viene spostato in modo che coincidano, la spline viene chiusa.
* Menu contestuale del nodo: `Elimina punto`. Per una spline aperta devono rimanere almeno due punti. Per una spline chiusa il numero minimo di punti è tre.
* Menu contestuale bordo: `Aggiungi punto`, `Apri spline`/`Chiudi spline` ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e `Inverti spline` ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") ).

### [Draft Curva di Bézier cubica](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it") e [Draft Curva di Bézier](/Draft_BezCurve/it "Draft BezCurve/it")

* Se il nodo iniziale o finale di una curva aperta viene spostato in modo che coincidano, la curva viene chiusa.
* Menu contestuale del nodo: `Cancella punto`, `Rendi acuto`, `Rendi tangente` e `Rendi simmetrico`.
* Menu contestuale bordo: `Aggiungi punto`, `Apri curva`/`Chiudi curva` ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e `Inverti curva` ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") ).

### [Draft Quotatura](/Draft_Dimension/it "Draft Dimension/it")

* Le quote angolari non possono essere modificate.
* I nodi iniziale e finale delle quote parametriche non possono essere spostati.
* Nessun menu contestuale per questo oggetto.

### [Arch Muro](/Arch_Wall/it "Arch Wall/it")

* Un singolo nodo per controllare l'altezza del muro viene visualizzato sopra Dati**Placement** del muro.
* Nessun menu contestuale per questo oggetto.

### [Arch Struttura](/Arch_Structure/it "Arch Structure/it")

* Nessun menu contestuale per questo oggetto.

### [Arch Finestra](/Arch_Window/it "Arch Window/it")

* Nessun menu contestuale per questo oggetto.

### [Arch Spazio](/Arch_Space/it "Arch Space/it")

* Nessun menu contestuale per questo oggetto.

### [Arch Sagoma di pannello](/Arch_Panel_Cut "Arch Panel Cut")

* Nessun menu contestuale per questo oggetto.

### [Arch Foglio di pannello](/Arch_Panel_Sheet/it "Arch Panel Sheet/it")

* Nessun menu contestuale per questo oggetto.

### [Part Cubo](/Part_Box/it "Part Box/it")

* Nessun menu contestuale per questo oggetto.

### [Part Cilindro](/Part_Cylinder/it "Part Cylinder/it")

* Nessun menu contestuale per questo oggetto.

### [Part Sfera](/Part_Sphere/it "Part Sphere/it")

* Nessun menu contestuale per questo oggetto.

### [Part Cono](/Part_Cone/it "Part Cone/it")

* Nessun menu contestuale per questo oggetto.

### [Part Linea](/Part_Line/it "Part Line/it")

* Nessun menu contestuale per questo oggetto.

### [Sketcher Schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it")

* È possibile modificare solo gli schizzi che contengono una singola linea non vincolata.
* Nessun menu contestuale per questo oggetto.

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Il colore dei nodi temporanei è lo stesso del colore dei simboli di snap. Questo colore può essere modificato nelle preferenze: **Modifica → Preferenze... → Draft → Griglia e agganci → Colore simbolo di aggancio**. Si noti che questo colore non viene utilizzato per i nodi temporanei visualizzati per [Draft BezCurves](/Draft_BezCurve/it "Draft BezCurve/it"). Questi nodi usano invece il Vista**Line Color** della curva.
* La dimensione dei nodi dipende da: **Modifica → Preferenze... → Visualizzazione → Vista 3D → Dimensione marcatore**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Non esiste un metodo Python per modificare gli oggetti Draft. Per emulare i risultati del comando è necessario modificare le proprietà geometriche degli oggetti.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Edit/it&oldid=1513800>"