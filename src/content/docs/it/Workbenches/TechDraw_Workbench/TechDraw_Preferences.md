---
title: Preferenze di TechDraw
---
## Introduzione

Le preferenze per l'ambiente [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") si trovano nel [Editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"), nel menu **Modifica → Preferenze → TechDraw**.

There are seven pages: [General](#General), [Scale](#Scale), [Dimensions](#Dimensions), [Annotation](#Annotation), [Colors](#Colors), [HLR](#HLR) and [Advanced](#Advanced).

Tutte le impostazioni delle preferenze con etichette in *corsivo* sono valori predefiniti per i nuovi oggetti inseriti nel disegno. Non hanno alcun effetto sugli oggetti esistenti.

This page has been updated for version 1.0.

## Generale

![](/images/TechDraw_PreferencesGeneral.png)

Preferenze generali

### Aggiornamento del disegno

[disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")

* **Aggiorna con il 3D**: controlla se le pagine vengono aggiornate o meno ogni volta che si cambia il modello 3D. Questa è un'impostazione di gestione globale.
* **Consenti sostituzione pagina**: Controlla se la proprietà **[Keep Update](/TechDraw_PageDefault/it#Proprietà "TechDraw PageDefault/it")** di una pagina può o meno sostituire il parametro **Aggiorna con il 3D** a livello di sistema. Questa è un'impostazione di gestione globale.
* **Mantieni aggiornate le pagine**: mantiene le pagine di disegno sincronizzate con i cambiamenti del modello 3D in tempo reale. Può rallentare i tempi di risposta.
* **Viste secondarie distribuite automaticamente**: distribuisce automaticamente le viste secondarie per i [Gruppi di proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it").

### Etichette

* **Carattere etichetta**: il nome del carattere predefinito per le etichette.
* **Dimensioni etichetta**: dimensione predefinita per il testo dell'etichetta.

### Convenzioni

* **Angolo di proiezione del gruppo**: stabilisce se il [gruppo di proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it") deve utilizzare la proiezione di primo o terzo angolo. Per la descrizione vedere [multiview projection](https://en.wikipedia.org/wiki/Multiview_projection#Multiviews).
* **Stile delle linee nascoste**: lo stile da utilizzare per le linee nascoste.

### File

* **Modello predefinito**: file del [modello](/TechDraw_Templates "TechDraw Templates") predefinito per le nuove pagine.
* **Directory del modello**: la directory di partenza per il pulsante ![](/images/TechDraw_PageTemplate.svg) [Nuovo disegno da modello](/TechDraw_PageTemplate "TechDraw PageTemplate").
* **File del modello di tratteggio**: file di default [SVG](/SVG/it "SVG/it") o [bitmap](/Bitmap/it "Bitmap/it") per il [tratteggio da modello](/TechDraw_Hatch/it "TechDraw Hatch/it").
* **File del gruppo di linee**: file alternativo per le definizioni personali del [gruppo di linee](/TechDraw_LineGroup/it "TechDraw LineGroup/it").
* **Directory di saldatura**: la directory di default per il pulsante ![](/images/TechDraw_WeldSymbol.svg) [Informazioni di saldatura](/TechDraw_WeldSymbol/it "TechDraw WeldSymbol/it"). [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it").
* **File PAT**: file di default per il modello PAT predefinito per il [tratteggio geometrico](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it").
* **Nome del modello**: il nome del motivo PAT predefinito.

### Grid

* **Show Grid**: Default Show Grid setting for new pages.
* **Grid Spacing**: Default distance between grid lines for new pages.

### Selection

* **Enable Multiselection Mode**: If enabled, clicking without Ctrl does not clear the existing selection. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### View Defaults

* **Use 3d Camera Direction**: If checked, the 3d camera direction (or normal of a selected face) will be used as the view direction. If not checked, Views will be created as Front Views. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Always Show Label**: If checked, view labels will be displayed even when frames are suppressed. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Snapping

* **Snap View Alignment**: If checked, Views will be snapped into alignment when dragged. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **View Snapping Factor**: Tolerance for snapping of Views - if a View is within this fraction of View size of perfect alignment, it will snap into alignment. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Scale

![](/images/TechDraw_PreferencesScale.png)

Preferenze di Scala

### Scala

* **Scala della pagina**: Scala predefinita per le nuove pagine.
* **Scala delle viste**: Scala predefinita per le nuove viste.
* **Scala personalizzata delle viste**: Scala predefinita per le viste se **Scala delle viste** è *Personalizzata*.

### Regolazioni delle dimensioni

* **Scala del vertice**: Scala dei punti [vertici](/Glossary#V "Glossary"). Moltiplicatore della larghezza della linea.
* **Scala del segno di centro**: Dimensione dei segni di centro. Moltiplicatore delle dimensioni del vertice.
* **Scala per il testo della tolleranza**: Regolazione della dimensione del carattere per la tolleranza. Moltiplicatore della dimensione di **[Font Size](/TechDraw_Preferences#Dimensions_2 "TechDraw Preferences")**.
* **Dimensione del marcatore di testo modificabile**: dimensione in mm dell'indicatore di testo modificabile nei [modelli](/TechDraw_Templates/it "TechDraw Templates/it") (punti verdi).
* **Scala del simbolo saldatura**: Moltiplicatore per dimensioni dei [simboli di saldatura](/TechDraw_WeldSymbol/it "TechDraw WeldSymbol/it"). [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")

## Quotatura

![](/images/Preferences_TechDraw_Page_Dimensions.png)

Preferenze quoattura

### Quotatura

* **Standard e Stile**: lo standard da utilizzare per la quotatura. La differenza tra gli standard è mostrata nell'immagine: ![](/images/TechDraw_Dimension_standardization.png)

  Differenze tra gli standard supportati
* **Usa i decimali globali**: usa il numero di decimali delle [preferenze generali](/Preferences_Editor/it#Unità "Preferences Editor/it").
* **Mostra le unità di misura**: aggiunge l'unità (mm, in, ecc.) al valore delle quota.
* **Decimali alternativi**: numero di decimali se **Usa i decimali globali** non è usato.
* **Formato di default**: formato personalizzato per il testo della quota. Usa il [printf format specifier](https://en.wikipedia.org/wiki/Printf_format_string).
* **Dimensione del carattere**: dimensione del carattere per il testo della quota.
* **Simbolo di diametro**: carattere utilizzato per indicare la dimensione del diametro.
* **Stile delle frecce**: stile delle frecce per le quote.
* **Dimensione delle frecce**: dimensione delle frecce per le quote.

### Tools

* **Dimensioning tools**: Select the type of dimensioning tools for the toolbar. Whichever you choose, all tools are always available in the menu and through shortcuts. The options are: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + *Single tool*: A [single tool](/TechDraw_Dimension "TechDraw Dimension") for all dimensioning in the toolbar: Distance, Distance X / Y, Angle, Radius. Others in dropdown.
  + *Separated tools*: Individual tools for each dimensioning tool.
  + *Both*: You will have both the 'Single tool' and the separated tools.
* **Dimension tool diameter/radius mode**: While using the [Dimension](/TechDraw_Dimension "TechDraw Dimension") tool you may choose how to handle circles and arcs: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + *Auto*: The tool will apply radius to arcs and diameter to circles.
  + *Diameter*: The tool will apply diameter to all.
  + *Radius*: The tool will apply radius to all.

## Annotazioni

![](/images/TechDraw_PreferencesAnnotation.png)

Preferenze per le annotazioni

### Annotation

* **Standard della linea di sezione**: standard da utilizzare per tracciare le linee di sezione nelle [viste di sezioni](/TechDraw_SectionView/it "TechDraw SectionView/it").
* **Stile della linea di sezione**: stile per le linee di sezione.
* **Superficie della sezione tagliata**: stile per la superficie tagliata nella sezione. Le opzioni sono: [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")
  + *Nascosta*: la superficie non è visibile.
  + *Tinta unita*: la superficie ottiene il colore impostato nella scheda Colori per **Faccia di sezione**
  + *Tratteggio SVG*: la superficie viene [tratteggiata con un modello SVG o bitmap](/TechDraw_Hatch/it "TechDraw Hatch/it").
  + *Tratteggio PAT*: la superficie viene [tratteggiata in modo geometrico](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it").
* **Nome del gruppo di linee**: nome di default per specificare un [gruppo di linee](/TechDraw_LineGroup/it "TechDraw LineGroup/it").
* **Contorno della vista in dettaglio**: forma del contorno per le [viste di dettaglio](/TechDraw_DetailView/it "TechDraw DetailView/it").
* **Stile del contorno del dettaglio**: stile di linea della forma del contorno delle [viste di dettaglio](/TechDraw_DetailView/it "TechDraw DetailView/it"). [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")
* **Stile della linea centrale**: stile predefinito per le [linee centrali](/TechDraw_FaceCenterLine/it "TechDraw FaceCenterLine/it").
* **Forma della bolla**: forma delle bolle per la [pallinatura](/TechDraw_Balloon/it "TechDraw Balloon/it").
* **Finale delle linee guida della pallinatura**: stile predefinito per le estremità della linea guida della pallinatura.
* **Lunghezza di piega della linea guida**: lunghezza del nodo della linea guida della pallinatura.
* **Bolla con triangolo in ortogonale**: se il **Finale delle linee guida della pallinatura** è *Triangolo pieno*, il triangolo può avere solo una direzione verticale o orizzontale quando la bolla viene spostata.
* **Linea guida auto orizzontale**: forza l'ultimo segmento della [linea guida](/TechDraw_LeaderLine/it "TechDraw LeaderLine/it") ad essere orizzontale.
* **Mostra i centri**: mostra i segni del centro dell'arco nelle viste.
* **Stampa i centri**: mostra i segni del centro dell'arco nella stampa.

### Lines

* **Line Standard**: Standard to be used to draw section lines in [section views](/TechDraw_SectionView "TechDraw SectionView").
* **Line Width Group**: A [LineGroup](/TechDraw_LineGroup "TechDraw LineGroup") to set the default line widths.
* **Hidden Line Style**: Style of hidden lines. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Section Line Style**: Style for section lines.
* **Detail Highlight Style**: Line style of the outline shape for [detail views](/TechDraw_DetailView "TechDraw DetailView").
* **Center Line Style**: Default style for [centerlines](/TechDraw_FaceCenterLine "TechDraw FaceCenterLine").
* **Break Line Style**: Default style for lines used to indicate [BrokenViews](/TechDraw_BrokenView "TechDraw BrokenView"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Line End Cap Shape**: The default (round) should almost always be the right choice. Flat or square caps are useful if you are planning to use a drawing as a 1:1 cutting guide.

## Colori

![](/images/TechDraw_Preferences_Colors.PNG)

Preferenze per i colori

Impostazione dei colori predefiniti per le nuove pagine.

* **Normale**: colore della linea normale.
* **Preselezione**: colore della preselezione. Il colore utilizzato per evidenziare gli oggetti quando ci si passa sopra con il mouse.
* **Selezionato**: colore per gli oggetti selezionati.
* **Sfondo**: colore di sfondo attorno alle pagine.
* **Dimensione**: colore delle linee di quota e del testo.
* **Linea centrale**: colore per le [linee centrali](/TechDraw_FaceCenterLine/it "TechDraw FaceCenterLine/it").
* **Contorno del dettaglio**: colore della linea per la forma del contorno delle [viste di dettagli](/TechDraw_DetailView/it "TechDraw DetailView/it"). [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")
* **Facce trasparenti**: se selezionato, le facce degli oggetti saranno trasparenti. In caso contrario, per le facce verrà utilizzato il colore impostato. [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")
* **Linee nascoste**: colore della linea nascosta. Questo colore verrà utilizzato per tutti i tipi di [linee nascoste](#HLR_Parameters).
* **Faccia di sezione**: colore della superficie tagliata nelle [viste di sezione](/TechDraw_SectionView/it "TechDraw SectionView/it"). Utilizzato solo se l'impostazione **Superficie della sezione tagliata** della scheda Annotazione è impostata su *Tinta unita*.
* **Linea di sezione**: colore della linea di taglio della [vista di sezione](/TechDraw_SectionView/it "TechDraw SectionView/it").
* **Tratteggio**: colore dell'immagine del [tratteggio](/TechDraw_Hatch/it "TechDraw Hatch/it").
* **Tratteggio geometrico**: colore del [tratteggio geometrico](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it").
* **Vertice**: colore dei [vertici](/Glossary#V "Glossary") selezionabili nelle viste.
* **Linea guida**: colore per le nuove [linee guida](/TechDraw_LeaderLine/it "TechDraw LeaderLine/it").

## HLR

![](/images/TechDraw_PreferencesHLR.png)

Preferenze per HLR

HLR sta per *hidden line removal* (rimozione della linea nascosta).

* **Usa l'approssimazione poligonale**: utilizza un'approssimazione per trovare le linee nascoste. Questo sistema è veloce, ma il risultato è un insieme di brevi linee rette.
* **Mostra i bordi ed i contorni**: mostra i bordi duri e i contorni (le linee visibili sono sempre mostrate)
* **Mostra le linee di tangenza**: mostra linee morbide. Una linea morbida è una linea che indica un cambiamento tra le superfici tangenti, come nella transizione da una superficie piana a un [raccordo](https://en.wikipedia.org/wiki/Fillet_(mechanics)).
* **Mostra le linee di giunzione**: mostra le linee di giunzione. Una linee di giunzione è un confine tra le facce.
* **Mostra le linee iso U, V**: mostra le linee isoparametriche. Iso sta per *isoparametriche*. [Ecco una descrizione](https://knowledge.autodesk.com/support/alias-products/learn-explore/caas/CloudHelp/cloudhelp/2014/ENU/Alias/files/GUID-4CCDF144-DB4F-4BEB-BA5A-E69CED27F4B9-htm.html) di quali sono le linee isoparametriche (in realtà le curve).
* **Numero di isoparametriche**: il numero di linee isoparametriche per bordo della faccia.

## Avanzate

![](/images/TechDraw_PreferencesAdvanced.png)

Preferenze avanzate

* **Rileva le facce**: se selezionato, TechDraw tenterà di creare le facce utilizzando i segmenti di linea restituiti dall'algoritmo di rimozione delle linee nascoste. Le facce devono essere rilevate per poter usare il [tratteggio](/TechDraw_Hatching/it "TechDraw Hatching/it"), ma può esserci una penalizzazione delle prestazioni in modelli complessi.
* **Mostra i bordi delle sezioni**: evidenzia il bordo della sezione tagliata nelle [viste di sezioni](/TechDraw_SectionView/it "TechDraw SectionView/it").
* **Debug della sezione**: scarica i risultati intermedi durante l'elaborazione di una vista in sezione
* **Debug del dettaglio**: scarica i risultati intermedi durante l'elaborazione di una vista di dettaglio
* **Accetta gli spigoli pazzi**: include i bordi con geometria imprevista nei risultati, ad es. zero lunghezza
* **Fondi prima della sezione**: esegue un'operazione di fusione sulle forme di input prima di elaborare la vista in sezione.
* **Mostra la geometria 2D dispersa**: include oggetti 2D nelle proiezioni, ad es. schizzi sciolti
* **Forma terminale della linea**: Impostazione della forma del cappuccio terminale delle linee. Spiegazione delle opzioni in: <https://doc.qt.io/qt-5/qt.html#PenCapStyle-enum>
* **Massimo numero di tessere di tratteggio SVG**: limite di tessere SVG 64x64 pixel utilizzate per tratteggiare una singola faccia. Per le grandi dimensioni si potrebbe ottenere un errore relativo a troppi riquadri SVG. In questo caso è necessario aumentare il limite delle tessere.
* **Massimo numero di segmenti di tratteggio PAT**: massimo numero di segmenti di linea da utilizzare quando si tratteggia una faccia con un modello PAT.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Preferences/it&oldid=1489927>"