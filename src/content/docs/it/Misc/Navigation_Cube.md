---
title: Cubo di navigazione
---
## Introduzione

Il **Cubo di Navigazione** dà un'informazione visiva riguardo l'orientamento della telecamera nella [vista 3D](/3D_view/it "3D view/it") attuale e può essere utilizzato per cambiarla. Di default è visibile e si trova nell'angolo in alto a destra della vista.

![](/images/Navigation_Cube_Example.png)

Il Cubo di Navigazione consiste in un certo numero di parti:

* Il [cubo principale](#Cubo_Principale)
* Sei [freccie direzionali](#Frecce_Direzionali)
* Il [bottone inversione vista](#Bottone_Inversione_Vista) (in alto a destra) [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* Il [menu mini-cubo](#Menu_Mini-Cubo) (in basso a destra)
* Gli indicatori degli assi X, Y e Z

Tutte le parti, eccetto gli indicatori degli assi, possono essere cliccate.

## Utilizzo

### Cubo Principale

Il cubo principale ha 26 facce: 6 facce principali quadrate, 12 facce di bordo rettangolari ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")) e 8 facce d'angolo triangolari. Facendo clic su uno di essi si riorienterà la telecamera in modo che la sua direzione sia perpendicolare alla faccia selezionata.

### Frecce Direzionali

Ci sono sei frecce direzionali: quattro freccie con punte triangolari e due frecce curve. Facendo clic su una delle frecce triangolari, la [Vista 3D](/3D_view/it "3D view/it") ruota attorno a una linea perpendicolare alla direzione della freccia. Facendo clic su una freccia curva, la [Vista 3D](/3D_view/it "3D view/it") ruota attorno alla direzione della vista.

### Bottone Inversione Vista

Facendo clic sul pulsante rotondo nell'angolo in alto a destra del Cubo di navigazione, la [Vista 3D](/3D_view/it "3D view/it") ruoterà di 180 gradi attorno all'asse verticale della vista.

### Menu Mini-Cubo

Facendo clic sul cubo nell'angolo inferiore destro del Cubo di Navigazione viene visualizzato un menu con le seguenti opzioni:

* **![](/images/Std_OrthographicCamera.svg)[Vista ortografica](/Std_OrthographicCamera/it "Std OrthographicCamera/it")**: passa a una vista ortogonale.
* **![](/images/Std_PerspectiveCamera.svg)[Vista in prospettiva](/Std_PerspectiveCamera/it "Std PerspectiveCamera/it")**: passa a una vista prospettica.
* **![](/images/Std_ViewIsometric.svg)[Isometrica](/Std_ViewIsometric/it "Std ViewIsometric/it")**: passa a una vista isometrica.
* **![](/images/Std_ViewFitAll.svg) [Visualizza tutto](/Std_ViewFitAll "Std ViewFitAll")**: esegue lo zoom e lo spostamento della telecamera in modo che tutti gli oggetti visibili rientrino nella vista.
* **![](/images/Std_ViewFitSelection.svg) [Visualizza la selezione](/Std_ViewFitSelection "Std ViewFitSelection")**: esegue lo zoom e la panoramica della telecamera in modo che tutti gli oggetti selezionati si adattino alla vista. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* **![](/images/Std_AlignToSelection.svg) [Allinea alla selezione](/Std_AlignToSelection "Std AlignToSelection")**: punta la telecamera nella vista nella direzione opposta alla normale di una faccia piana o nella direzione opposta di un bordo dritto. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* **Cubo di navigazione mobile**: se questa casella di controllo ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) è selezionata, l'intero Cubo di navigazione può essere spostato tenendo premuto il pulsante sinistro del mouse in qualsiasi punto del cubo principale e trascinandolo. Questo ha lo scopo di spostare temporaneamente il cubo fuori ingombro. I [parametri avanzati](#Advanced_parameters) OffsetX e OffsetY possono essere usati per riposizionare permanentemente il cubo, vedi sotto.

## Personalizzazione

### Preferenze

Il Cubo di navigazione è controllato da diverse preferenze: **Modifica → Preferenze... → Visualizzazione → Navigazione → Cubo di navigazione**. Vedere [Impostare le Preferenze](/Preferences_Editor/it#Navigazione "Preferences Editor/it").

### Parametri avanzati

Alcuni parametri avanzati del Cubo di navigazione non possono essere modificati nell'[Impostazione delle preferenze](/Preferences_Editor/it#Navigazione "Preferences Editor/it"). Questi parametri possono essere impostati manualmente in [Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it").

Per impostare manualmente i colori:

1. Avviare ![](/images/Std_DlgParameter.svg) [Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it").
2. Nel pannello a sinistra selezionare **Strumenti → Modifica parametri... → NaviCube**.
3. Fare clic con il pulsante destro del mouse sul pannello a destra e selezionare **Nuovo elemento unsigned** dal menu contestuale.
4. Inserire il nome di uno di questi colori:
   * **BaseColor**: il colore di base di tutti gli elementi, il valore predefinito è `3806916544` (hex: `e2e8efc0`). Questo colore può essere impostato anche nell'[Editor delle preferenze](/Preferences_Editor/it#Navigazione "Preferences Editor/it"). [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
   * **EmphaseColor**: il colore del testo e delle linee, il default dipende dal **BaseColor**. È nero: `255` (hex: `000000ff`) o bianco: `4294967295` (hex: `ffffffff`). [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
   * **HiliteColor**: il colore utilizzato per evidenziare le facce e i pulsanti, il valore predefinito è `2867003391` (hex: `aae2ffff`).
5. Il valore del colore deve essere immesso come numero intero senza segno a 32 bit. Tradotto nel formato esadecimale questo numero intero ha la forma `RRGGBBAA`. Dove `AA` sta per il canale alfa (una misura della trasparenza), e le altre coppie di tre cifre stanno per rosso, verde e blu. Per convertire un valore esadecimale in un intero senza segno puoi usare la [Console Python](/Python_console/it "Python console/it"), inserire ad esempio `int("323232ff", 16)`.
6. Facoltativamente si possono impostare più colori.
7. Premere il pulsante Chiudi.

La tabella seguente elenca gli altri parametri avanzati del Cubo di navigazione che possono essere impostati in modo simile. Utilizzare le informazioni dalla colonna **Tipo** per creare un nuovo elemento corretto nel passaggio 3.

| Nome | Descrizione | Tipo | Default |
| --- | --- | --- | --- |
| BorderWidth | La larghezza dei bordi del cubo e dei bordi attorno ai pulsanti in pixel. | Float | 1.1 |
| ChamferSize | Dimensione dei bordi e degli angoli come fattore dimensionale del cubo. I valori dovrebbero essere compresi tra 0,05 e 0,18. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") | Float | 0.12 |
| FontStretch | La larghezza del carattere come percentuale della larghezza predefinita. Utilizzare 0 o 100 per la larghezza predefinita del carattere. | Integer | 0 |
| FontWeight | Integer | 0 |
| FontZoom | La dimensione delle etichette:  * `FontZoom = 1.0`: Rende le etichette il più grande possibile individualmente. * `0.0 < FontZoom < 1.0`: Idem ma limita la dimensione massima del carattere. * `FontZoom = 0.0`: Idem ma usa la stessa dimensione del carattere per tutti. * `FontZoom < 0.0`: Usa la stessa dimensione del carattere per tutti, ma ridimensionato.   [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") | Float | 0.3 |
| OffsetX | L'offset del cubo nella direzione X rispetto alla sua posizione d'angolo in pixel. | Integer | 0 |
| OffsetY | L'offset del cubo nella direzione Y rispetto alla sua posizione d'angolo in pixel. | Integer | 0 |
| ShowCS | Alterna la visualizzazione del sistema di coordinate (gli indicatori degli assi X, Y e Z). | Boolean | true |
| TextBottom | Il testo sulla faccia inferiore del cubo. Il valore predefinito dovrebbe essere tradotto. | String | BOTTOM |
| TextFront | Il testo sulla faccia anteriore del cubo. Idem. | String | FRONT |
| TextLeft | Il testo sulla faccia sinistra del cubo. Idem. | String | LEFT |
| TextRear | Il testo sulla faccia posteriore del cubo. Idem. | String | REAR |
| TextRight | Il testo sulla faccia destra del cubo. Idem. | String | RIGHT |
| TextTop | Il testo sulla faccia superiore del cubo. Idem. | String | TOP |

Retrieved from "<http://wiki.freecad.org/index.php?title=Navigation_Cube/it&oldid=1493583>"