---
title: Draftː Preferenze
---
## Introduzione

Le preferenze per lì![](/images/Workbench_Draft.svg) [Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it") si trovano nell'[Editor preferenze](/Preferences_Editor/it "Preferences Editor/it"). Nel menu selezionare **Modifica → Preferenze...** e poi **![](/images/Workbench_Draft.svg) Draft**. Questo gruppo è disponibile solo se l'ambiente Draft è stato caricato nella sessione corrente di FreeCAD.

Sono presenti cinque pagine: [Generale](#General), [Interfaccia](#Interface), [Griglia e aggancio](#Grid_and_snapping), [Visualizzazione](#Visual) e [Testi e quotature](#Texts_and_dimensions).

Alcune preferenze avanzate possono essere modificate solo nell'[Editor parametri](/Std_DlgParameter/it "Std DlgParameter/it"). Vedere [Ottimizzazione](/Fine-tuning/it#Draft_Workbench "Fine-tuning/it").

Questa pagina è stata aggiornata per la versione 1.0.

Nella versione 0.21 e precedenti alcune preferenze potrebbero apparire su una pagina diversa e in alcuni casi FreeCAD deve essere riavviato dopo aver modificato una preferenza.

## Generale

![](/images/Preferences_Draft_Page_General.png)

In questa pagina si può specificare quanto segue:

| Name | Description |
| --- | --- |
| **Livello di precisione interna** | Il numero di decimali utilizzati nelle operazioni di coordinate interne (ad esempio 3 = 0,001). I valori compresi tra 6 e 8 sono generalmente considerati il ​​miglior compromesso. |
| **Piano di lavoro predefinito** | Il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") predefinito per le nuove viste. Le opzioni sono:  * **Automatico**: Se impostato su **Automatico** il piano di lavoro si allineerà automaticamente con la vista corrente ogni volta che viene avviato un comando. Inoltre si allineerà alle facce planari preselezionate o quando vengono selezionati punti sulle facce planari durante i comandi. * **XY (Dall'alto)** * **XZ (Frontale)** * **YZ (Laterale)** |
| **Visualizza la traccia del piano di lavoro** | Se selezionato, quando si selezionano punti viene visualizzato un widget che indica l'orientamento corrente del piano di lavoro. |
| **Includi gruppi nella lista dei livelli** | Se selezionato, l'elenco a discesa dei livelli include anche i gruppi. Gli oggetti possono quindi essere aggiunti automaticamente anche ai gruppi. Vedere [Draft AutoGroup](/Draft_AutoGroup/it "Draft AutoGroup/it"). |
| **Mostra le richiesta nella vista Report** | Se selezionato, le richieste vengono visualizzate nella [Report view](/Report_view/it "Report view/it") quando si utilizzano i comandi Draft. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") |
| **Imposta il focus sulla Lunghezza anziché sulla coordinata X** | Se selezionato, l'input della Lunghezza, invece della coordinata X, avrà il focus iniziale. Ciò consente di indicare una direzione e quindi digitare una distanza. |
| **Seleziona gli oggetti di base dopo la copia** | Se selezionato, dopo la copia vengono selezionati gli oggetti base, anziché le copie create. |
| **Crea primitive Part se possibile** | Se selezionati, i comandi Draft creeranno [Primitive Part](/Part_Primitives/it "Part Primitives/it") invece di oggetti Draft. Tenere presente che questo non è completamente supportato e molti oggetti non saranno modificabili con i comandi di modifica Draft. |
| **Mantieni i colori delle facce durante il downgrade/upgrade** | Se selezionati, [Draft Declassa](/Draft_Downgrade/it "Draft Downgrade/it") e [Draft Promuovi](/Draft_Upgrade/it "Draft Upgrade/it") manterranno i colori delle facce. Solo per le opzioni splitFaces e makeShell. |
| **Mantieni i nomi delle facce durante il downgrade/upgrade** | Se selezionati, [Draft Declassa](/Draft_Downgrade/it "Draft Downgrade/it") e [Draft Promuovi](/Draft_Upgrade/it "Draft Upgrade/it") manterranno i nomi delle facce. Solo per le opzioni splitFaces e makeShell. |
| **Ritardo del mouse** | Questo è il ritardo in secondi durante il quale il mouse rimane inattivo dopo aver immesso un numero in uno dei campi di input del pannello azioni di Draft. Durante il ritardo lo spostamento del mouse non modificherà il valore immesso. Impostare su 0 per disabilitare il ritardo. |
| **Numero massimo di oggetti modificabili** | Numero massimo di oggetti modificabili contemporaneamente con [Draft Edit](/Draft_Edit/it "Draft Edit/it"). |
| **Modifica raggio di selezione del nodo** | Il raggio di selezione dei nodi da modificare. |
| **Etichetta di prefisso per cloni** | Il prefisso predefinito aggiunto all'etichetta dei nuovi [cloni](/Draft_Clone/it "Draft Clone/it"). |
| **Etichetta del gruppo di costruzione** | L'etichetta predefinita per il [gruppo di geometrie di costruzione](/Draft_ToggleConstructionMode/it "Draft ToggleConstructionMode/it"). |
| **Colore della geometria di costruzione** | Il colore predefinito per gli oggetti Draft in modalità costruzione. |

## Interfaccia

![](/images/Preferences_Draft_Page_Interface.png)

In questa pagina si può specificare quanto segue:

| Name | Description |
| --- | --- |
| **Scorciatoie all'interno del comando** | Queste scorciatoie funzionano solo quando un comando [Draft](/Draft_Workbench/it "Draft Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it") è attivo. Tenere presente che non tutti i comandi supportano tutte le scorciatoie. |
| **Relativo** | Scorciatoia per attivare/disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate sono relative all'ultimo punto, se disponibile, altrimenti sono relative all'origine del sistema di coordinate. |
| **Globale** | Scorciatoia per attivare/disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it"). |
| **Lunghezza** | Scorciatoia per cambiare il focus dalla casella di input della coordinata X alla casella di input della Lunghezza e viceversa. |
| **Riempimento** | Scorciatoia per attivare/disattivare la modalità di riempimento. Se la modalità riempimento è attiva, l'oggetto creato avrà Dati**Make Face** impostato su `true`. |
| **Seleziona bordo** | Scorciatoia per premere il pulsante Seleziona bordo. Vedere [Draft Quota](/Draft_Dimension/it "Draft Dimension/it"). |
| **Modalità sottoelemento** | Scorciatoia per attivare/disattivare la modalità sottoelemento. Se la modalità sottoelemento è attiva, il comando utilizzerà i sottoelementi selezionati anziché gli interi oggetti. |
| **Copia** | Scorciatoia per attivare/disattivare la modalità di copia. Se la modalità copia è attiva, il comando creerà copie modificate invece di modificare gli oggetti originali. |
| **Annulla** | Scorciatoia per premere il pulsante Annulla. |
| **Pulisci** | Scorciatoia per premere il pulsante Pulisci. |
| **Chiudi** | Scorciatoia per premere il pulsante Chiudi. |
| **Esci** | Scorciatoia per premere il pulsante Fine. |
| **Continua** | Scorciatoia per attivare/disattivare la modalità continua. Se la modalità continua è attiva, i comandi verranno riavviati al termine. |
| **Scorri aggancio** | Scorciatoia per modificare la priorità di aggancio su un oggetto oscurato da un'altra geometria. Vedere [Draft Aggancio](/Draft_Snap/it "Draft Snap/it"). |
| **Aggiungi attesa** | Scorciatoia per inserire un "punto di attesa" nella posizione corrente del cursore. Vedere [Draft Aggancio](/Draft_Snap/it "Draft Snap/it"). |
| **Imposta piano di lavoro** | Scorciatoia per premere il pulsante Imposta WP. |
| **Aggancio** | Scorciatoia per attivare/disattivare [Draft Aggancio](/Draft_Snap/it "Draft Snap/it"). |
| **Aumenta raggio** | Scorciatoia per aumentare la distanza massima alla quale [Draft Aggancia Griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it") rileva le intersezioni delle linee della griglia. Vedere [Draft Seleziona Piano](/Draft_SelectPlane/it "Draft SelectPlane/it"). |
| **Diminuisci raggio** | Scorciatoia per diminuire la distanza massima alla quale [Draft Aggancia Griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it") rileva le intersezioni delle linee della griglia. |
| **Limita X** | Scorciatoia per vincolare il movimento del cursore all'asse X. Vedere [Draft Vincolare](/Draft_Constrain/it "Draft Constrain/it"). |
| **Limita Y** | Scorciatoia per vincolare il movimento del cursore all'asse Y. |
| **Limita Z** | Scorciatoia per vincolare il movimento del cursore all'asse Z. |
| **Mostra la barra degli strumenti di aggancio Draft solo durante i comandi** | Se selezionata, la barra degli strumenti aggancio Draft sarà visibile solo durante i comandi. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") |
| **Mostra il widget Aggancio nell'ambiente Draft** | Se selezionato, il [Snap widget](/Draft_snap_widget/it "Draft snap widget/it") viene visualizzato nella barra di stato Draft. |
| **Mostra il widget Scala annotazione nell'ambiente Draft** | Se selezionato, il [Widget scala annotazione](/Draft_annotation_scale_widget/it "Draft annotation scale widget/it") viene visualizzato nella barra di stato Draft. |

## Griglia ed aggancio

![](/images/Preferences_Draft_Page_Grid_and_snapping.png)

Tenere presente che diverse preferenze della griglia possono essere modificate anche con il comando [Draft Seleziona Piano](/Draft_SelectPlane/it "Draft SelectPlane/it").

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Mostra sempre la griglia** | Se selezionato, la griglia sarà sempre visibile nelle nuove viste. Usare [Draft Attiva/disattiva griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it") per modificare questa impostazione per la vista attiva. |
| **Mostra la griglia durante i comandi** | Se selezionato, la griglia sarà visibile durante i comandi nelle nuove viste. Usare [Draft Attiva/disattiva griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it") per modificarlo per la vista attiva. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") |
| **Mostra bordo griglia** | Se selezionato, viene visualizzato un bordo aggiuntivo attorno alla griglia, che mostra la dimensione del quadrato principale nell'angolo in basso a sinistra. |
| **Mostra figura umana** | Se selezionato, il contorno di una figura umana viene visualizzato nell'angolo in basso a sinistra della griglia. Efficace solo se **Mostra bordo griglia** è abilitato. |
| **Usa assi colorati** | Se selezionato, i due assi principali della griglia vengono colorati di rosso, verde o blu se corrispondono all'asse X, Y o Z del sistema di coordinate globali. |
| **Linee principali ogni** | Il numero di riquadri tra le linee principali della griglia. Le linee principali della griglia sono più spesse delle linee secondarie della griglia. |
| **Spaziatura griglia** | La distanza tra le linee della griglia. |
| **Dimensione griglia** | Il numero di riquadri nella direzione X e Y della griglia. |
| **Trasparenza della griglia** | La trasparenza complessiva della griglia. |
| **Colore griglia** | Il colore della griglia. |
| **Stile simbolo aggancio** | Lo stile per i [simboli di aggancio](/Draft_Snap/it "Draft Snap/it"). Le opzioni sono:  * **Stile Draft classic** * **Stile Bitsnpieces**. |
| **Colore simbolo aggancio** | Il colore per i [simboli di aggancio](/Draft_Snap/it "Draft Snap/it"), [aggancia quote](/Draft_Snap_Dimensions/it "Draft Snap Dimensions/it") e [nodi di modifica](/Draft_Edit "Draft Edit"). |
| **Aggancia sempre** | Se selezionato, [aggancio](/Draft_Snap/it "Draft Snap/it") viene attivato senza dover premere il tasto **modificatore aggancio**. |
| **Modificatore Aggancio** | Il tasto modificatore [Aggancio](/Draft_Snap/it "Draft Snap/it"). |
| **Modificatore Vincolo** | Il tasto modificatore [Vincolo](/Draft_Constrain/it "Draft Constrain/it"). |
| **Modificatore Alt** | Il tasto modificatore Alt. La funzione di questo tasto dipende dal comando. |

## Visualizzazione

![](/images/Preferences_Draft_Page_Visual.png)

In questa pagina si può specificare quanto segue:

| Name | Description |
| --- | --- |
| **Dimensione modello SVG** | La dimensione predefinita per i modelli SVG. Un valore più alto produce un modello più denso. |
| **Percorso aggiuntivo per i modelli SVG** | Una directory opzionale con file SVG personalizzati contenenti definizioni di modelli da aggiungere ai modelli standard. |
| **Definizione della linea a tratti** | Una definizione di stile di linea SVG utilizzata dal comando [TechDraw DraftView](/TechDraw_DraftView/it "TechDraw DraftView/it"). |
| **Definizione della linea tratto-punto** | Idem. |
| **Definizione della linea punteggiata** | Idem. |

## Testi e quotature

![](/images/Preferences_Draft_Page_Texts_and_dimensions.png)

Queste preferenze sono le impostazioni predefinite utilizzate durante la creazione di nuovi oggetti. La loro modifica non influisce sugli oggetti esistenti.

In questa pagina si può specificare quanto segue:

| Name | Description |
| --- | --- |
| **Nome del tipo di carattere o famiglia** | Arial,Helvetica,sans}} o un nome con uno stile come `Arial:Bold`. |
| **Dimensione del carattere** | L'altezza predefinita per testi, testi di quota e testi di etichette. |
| **Fattore di spaziatura linea** | L'interlinea predefinita per testi ed etichette su più righe (relativa alla dimensione del carattere). |
| **Moltiplicatore di scala** | Il moltiplicatore della scala di annotazione predefinito. Questo è l'inverso della scala impostata nel [Widget Draft scala annotazione](/Draft_annotation_scale_widget/it "Draft annotation scale widget/it"). Se la scala è `1:100` il moltiplicatore è `100`. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") |
| **Colore testo** | Il colore predefinito per testi, testi di quota e testi di etichette. |
| **Mostra la linea di misura** | Se selezionato, la linea di misura viene visualizzata per impostazione predefinita. |
| **Spessore linea** | Lo spessore della linea predefinita. |
| **Tipo di frecce** | Il simbolo di default visualizzato alle estremità delle linee di misura. Le opzioni sono:  * **Punto** * **Cerchio** * **Freccia** * **Tratto obliquo** * **Tratto obliquo-2** |
| **Dimensione frecce** | La dimensione predefinita della freccia. |
| **Colore linea e freccia** | Il colore predefinito per linee e frecce. |
| **Mostra unità** | Se selezionato, per impostazione predefinita viene aggiunto un simbolo di unità ai testi delle quote. |
| **Sostituzione unità** | L'unità di sostituzione predefinita per le quote. Immettere un'unità come `m` o `cm`, lasciare vuoto per utilizzare l'unità corrente definita in FreeCAD. |
| **Numero di decimali** | Il numero predefinito di posizioni decimali per i testi delle quote. |
| **Separatore piedi** | La stringa facoltativa inserita tra i valori piedi e pollici nelle quote. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") |
| **Estensione della linea di misura** | La distanza predefinita della linea di misura oltre le linee di riferimento. |
| **Lunghezza linea di riferimento** | La lunghezza predefinita delle linee di riferimento. Utilizzare `0` per le linee di riferimento complete. Un valore negativo definisce lo spazio tra le estremità delle linee di riferimento e i punti misurati. Un valore positivo definisce la lunghezza massima delle linee di riferimento. Utilizzato solo per [quote lineari](/Draft_Dimension/it#View "Draft Dimension/it"). |
| **Estensione della linea di riferimento** | La lunghezza predefinita delle linee di riferimento oltre la linea di misura. |
| **Spaziatura del testo** | Lo spazio predefinito tra la linea di misura e il testo della quota. |
| **Font predefintiro per Forma da testo (ShapeString)** | Il file di caratteri predefinito per il comando [Draft Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it"). Per gli utenti Windows: leggere il paragrafo [Selezione file font su Windows](/Draft_ShapeString/it#Font_file_selection_on_Windows "Draft ShapeString/it") in quella pagina. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Preferences/it&oldid=1528832>"