---
title: Ambiente TechDraw
---

![](/images/Workbench_TechDraw.svg)

L'icona di TechDraw

## Introduzione

L'Ambiente TechDraw ![](/images/Workbench_TechDraw.svg) serve per produrre disegni tecnici di base derivati dai modelli 3D creati con un altro ambiente di lavoro come [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"), o [BIM](/BIM_Workbench/it "BIM Workbench/it"), o importati da altre applicazioni. Ogni disegno è una pagina, che può contenere varie viste di oggetti disegnabili come Part::Features, PartDesign::Bodies, App::Part groups, e gruppi Document Object. I disegni risultanti possono essere utilizzati per la documentazione, le istruzioni di costruzione, i contratti, i permessi, ecc.

Alla pagina possono essere aggiunte dimensioni, sezioni, aree tratteggiate, annotazioni e simboli [SVG](/SVG/it "SVG/it"), e la pagina può essere ulteriormente esportata in diversi formati come [DXF](/DXF/it "DXF/it"), [SVG](/SVG/it "SVG/it"), e [PDF](/PDF/it "PDF/it").

Se il tuo obiettivo primario è la produzione di disegni 2D complessi, e di file [DXF](/DXF/it "DXF/it"), e non si ha bisogno di modelli 3D, FreeCAD potrebbe non essere la scelta giusta per te. Dovresti invece prendere in considerazione un programma software dedicato al disegno tecnico, come [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) o [QCad](https://en.wikipedia.org/wiki/QCad).

![](/images/TechDraw_Workbench_Example.png)

### Aggancio

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): L'Ambiente TechDraw ha una funzione di aggancio. Può essere utilizzato per allineare automaticamente viste, viste in sezione e quote durante il posizionamento mediante trascinamento con il mouse. Con **Allineamento vista a scatto** abilitato (impostazione predefinita) nelle [preferenze](/TechDraw_Preferences/it#Snapping "TechDraw Preferences/it"), le viste si agganceranno all'allineamento con altre viste quando abbastanza vicine (impostazione **Fattore di aggancio vista**). Le quote vengono inoltre agganciate ad altre quote parallele e il testo della quota può essere agganciato al centro della linea di quota. L'aggancio può essere temporaneamente disabilitato tenendo premuto il tasto Alt.

## Strumenti

### Pagine

- ![](/images/TechDraw_PageDefault.svg) [Inserisci Pagina predefinita](/TechDraw_PageDefault/it "TechDraw PageDefault/it"): aggiunge una nuova pagina utilizzando il [modello](/TechDraw_Templates/it "TechDraw Templates/it") predefinito.

- ![](/images/TechDraw_PageTemplate.svg) [Inserisci Pagina usando un modello](/TechDraw_PageTemplate/it "TechDraw PageTemplate/it"): aggiunge una nuova pagina utilizzando un [modello](/TechDraw_Templates/it "TechDraw Templates/it") selezionato.

- ![](/images/TechDraw_FillTemplateFields.svg) [Aggiorna campi del modello](/TechDraw_FillTemplateFields/it "TechDraw FillTemplateFields/it"): [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_RedrawPage.svg) [Ridisegna Pagina](/TechDraw_RedrawPage/it "TechDraw RedrawPage/it"): forza un aggiornamento della pagina selezionata.

- ![](/images/TechDraw_PrintAll.svg) [Stampa tutte le Pagine](/TechDraw_PrintAll/it "TechDraw PrintAll/it"): stampa tutte le pagine di un documento. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_ExportPageSVG.svg) [Esporta pagina in SVG](/TechDraw_ExportPageSVG/it "TechDraw ExportPageSVG/it"): salva la pagina corrente come file [SVG](/SVG/it "SVG/it").

- ![](/images/TechDraw_ExportPageDXF.svg) [Esporta Pagina in DXF](/TechDraw_ExportPageDXF/it "TechDraw ExportPageDXF/it"): salva la pagina corrente come file [DXF](/DXF/it "DXF/it").

### Viste

#### Viste TechDraw

- ![](/images/TechDraw_View.svg) [Inserisci Vista](/TechDraw_View/it "TechDraw View/it"): aggiunge una rappresentazione di uno o più oggetti. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Può creare una singola vista, un [Gruppo di proiezione](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it"), una [Vista di foglio di calcolo](/TechDraw_SpreadsheetView/it "TechDraw SpreadsheetView/it"), una [Vista di Arch](/TechDraw_ArchView/it "TechDraw ArchView/it"), un [Simbolo](/TechDraw_Symbol/it "TechDraw Symbol/it") o una [Vista immagine](/TechDraw_Image/it "TechDraw Image/it").

- ![](/images/TechDraw_BrokenView.svg) [Inserisci Vista interrotta](/TechDraw_BrokenView/it "TechDraw BrokenView/it"): aggiunge una vista interrotta di uno o più oggetti. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_SectionView.svg) [Inserisci Vista Sezione semplice](/TechDraw_SectionView/it "TechDraw SectionView/it"): aggiunge una vista in sezione trasversale di una vista esistente.

- ![](/images/TechDraw_ComplexSection.svg) [Inserisci Vista Sezione complessa](/TechDraw_ComplexSection/it "TechDraw ComplexSection/it"): inserisce una sezione trasversale di una vista esistente basata su un profilo. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_DetailView.svg) [Inserisci Vista dettaglio](/TechDraw_DetailView/it "TechDraw DetailView/it"): aggiunge una vista di dettaglio di una porzione di una vista esistente.

- ![](/images/TechDraw_ProjectionGroup.svg) [Inserisci Gruppo di proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it"): richiama una finestra di dialogo per creare viste multiple di un oggetto da diverse direzioni. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): è possibile utilizzare al suo posto lo strumento [Inserisci Vista](/TechDraw_View/it "TechDraw View/it").

- ![](/images/TechDraw_ClipGroup.svg) [Inserisci Gruppo di ritaglio](/TechDraw_ClipGroup/it "TechDraw ClipGroup/it"): inserisce un gruppo di ritaglio.

- ![](/images/TechDraw_Symbol.svg) [Simbolo SVG](/TechDraw_Symbol/it "TechDraw Symbol/it"): inserisce un simbolo [SVG](/SVG/it "SVG/it") in una pagina. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): è possibile utilizzare al suo posto lo strumento [Inserisci Vista](/TechDraw_View/it "TechDraw View/it").

- ![](/images/TechDraw_Image.svg) [Immagine bitmap](/TechDraw_Image/it "TechDraw Image/it"): inserisce un'immagine [bitmap](/Bitmap/it "Bitmap/it") PNG o JPG in una pagina. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): è possibile utilizzare al suo posto lo strumento [Inserisci Vista](/TechDraw_View/it "TechDraw View/it").

- ![](/images/TechDraw_ShareView.svg) [Condividi vista](/TechDraw_ShareView "TechDraw ShareView"): condivide una vista tra più pagine.

- ![](/images/TechDraw_ToggleFrame.svg) [Attiva o disattiva la cornice](/TechDraw_ToggleFrame/it "TechDraw ToggleFrame/it"): mostra o nasconde le cornici e le etichette che circondano una vista.

- ![](/images/TechDraw_ProjectShape.svg) [Proietta le forme](/TechDraw_ProjectShape "TechDraw ProjectShape"): crea proiezioni di forme nella [Vista 3D](/3D_view/it "3D view/it").

#### Viste da altri ambienti di lavoro

- ![](/images/TechDraw_ActiveView.svg) [Inserisci Vista attiva](/TechDraw_ActiveView/it "TechDraw ActiveView/it"): inserisce una vista della vista 3D attiva.

- ![](/images/TechDraw_DraftView.svg) [Inserisci Vista di Draft](/TechDraw_DraftView/it "TechDraw DraftView/it"): aggiunge una vista di [Draft](/Draft_Workbench/it "Draft Workbench/it") di un oggetto.

- ![](/images/TechDraw_ArchView.svg) [Inserisci Vista di BIM](/TechDraw_ArchView/it "TechDraw ArchView/it"): aggiunge una vista di un oggetto [Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it") di [BIM](/BIM_Workbench/it "BIM Workbench/it"). [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): è possibile utilizzare al suo posto lo strumento [Inserisci Vista](/TechDraw_View/it "TechDraw View/it").

- ![](/images/TechDraw_SpreadsheetView.svg) [Inserisci Vista di un foglio di calcolo](/TechDraw_SpreadsheetView/it "TechDraw SpreadsheetView/it"): inserisce in un disegno una vista di un [foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") selezionato. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): è possibile utilizzare al suo posto lo strumento [Inserisci Vista](/TechDraw_View/it "TechDraw View/it").

### Impilamento

Questi sono strumenti per modificare l'ordine di impilamento che controlla la profondità apparente delle visualizzazioni su una pagina.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Modifica l'ordine di impilamento:

- ![](/images/TechDraw_StackTop.svg) [Sposta la vista in cima alla pila](/TechDraw_StackTop/it "TechDraw StackTop/it"): sposta le viste in cima alla pila di ordinamento. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_StackBottom.svg) [Sposta la vista in fondo alla pila](/TechDraw_StackBottom/it "TechDraw StackBottom/it"): sposta le viste in fondo alla pila di ordinamento. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_StackUp.svg) [Sposta la vista su di un livello](/TechDraw_StackUp/it "TechDraw StackUp/it"): sposta le viste su di un livello lungo la pila di ordinamento. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_StackDown.svg) [Sposta la vista giù di un livello](/TechDraw_StackDown/it "TechDraw StackDown/it"): sposta le viste giù di un livello lungo la pila di ordinamento. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

### Quotatura

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Quote:

- ![](/images/TechDraw_Dimension.svg) [Inserisci Quota](/TechDraw_Dimension/it "TechDraw Dimension/it"): aggiunge una quota contestuale. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_LengthDimension.svg) [Inserisci Quota allineata](/TechDraw_LengthDimension/it "TechDraw LengthDimension/it"): aggiunge una quota allineata.

- ![](/images/TechDraw_HorizontalDimension.svg) [Inserisci Quota orizzontale](/TechDraw_HorizontalDimension/it "TechDraw HorizontalDimension/it"): aggiunge una quota orizzontale.

- ![](/images/TechDraw_VerticalDimension.svg) [Inserisci Quota verticale](/TechDraw_VerticalDimension/it "TechDraw VerticalDimension/it"): aggiunge una quota verticale.

- ![](/images/TechDraw_RadiusDimension.svg) [Inserisci Quota raggio](/TechDraw_RadiusDimension/it "TechDraw RadiusDimension/it"): aggiunge una quota radiale ad un cerchio o ad un arco.

- ![](/images/TechDraw_DiameterDimension.svg) [Inserisci Quota diametro](/TechDraw_DiameterDimension/it "TechDraw DiameterDimension/it"): aggiunge una quota diametrale ad un cerchio o ad un arco.

- ![](/images/TechDraw_AngleDimension.svg) [Inserisci Quota angolare](/TechDraw_AngleDimension/it "TechDraw AngleDimension/it"): aggiunge una quota angolare tra due bordi diritti.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Inserisci Quota angolare da 3 punti](/TechDraw_3PtAngleDimension/it "TechDraw 3PtAngleDimension/it"): aggiunge una quota angolare usando tre vertici.

- ![](/images/TechDraw_AreaDimension.svg) [Inserisci Annotazione Area](/TechDraw_AreaDimension/it "TechDraw AreaDimension/it"): aggiunge la quota dell'area di una faccia. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [Crea Quota Lunghezza Arco](/TechDraw_ExtensionCreateLengthArc/it "TechDraw ExtensionCreateLengthArc/it"): crea una quota lunghezza arco.

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Inserisci Quota estensione orizzontale](/TechDraw_HorizontalExtentDimension/it "TechDraw HorizontalExtentDimension/it"): aggiunge una quota di estensione orizzontale.

- ![](/images/TechDraw_VerticalExtentDimension.svg) [Inserisci Quota estensione verticale](/TechDraw_VerticalExtentDimension/it "TechDraw VerticalExtentDimension/it"): aggiunge una quota di estensione verticale.

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Crea Quote in Serie Orizzontale](/TechDraw_ExtensionCreateHorizChainDimension/it "TechDraw ExtensionCreateHorizChainDimension/it"): crea una sequenza di quote orizzontali allineate.

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Crea Quote in Serie Verticale](/TechDraw_ExtensionCreateVertChainDimension/it "TechDraw ExtensionCreateVertChainDimension/it"): crea una sequenza di quote verticali allineate.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Crea Quote in Serie Obliqua](/TechDraw_ExtensionCreateObliqueChainDimension/it "TechDraw ExtensionCreateObliqueChainDimension/it"): crea una sequenza di quote oblique allineate.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Crea Quote in Parallelo Orizzontali](/TechDraw_ExtensionCreateHorizCoordDimension/it "TechDraw ExtensionCreateHorizCoordDimension/it"): crea più quote orizzontali equidistanti a partire dalla stessa linea di base.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Crea Quote in Parallelo Verticali](/TechDraw_ExtensionCreateVertCoordDimension/it "TechDraw ExtensionCreateVertCoordDimension/it"): crea più quote verticali equidistanti a partire dalla stessa linea di base.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Crea Quote in Parallelo Oblique](/TechDraw_ExtensionCreateObliqueCoordDimension/it "TechDraw ExtensionCreateObliqueCoordDimension/it"): crea più quote oblique equidistanti a partire dalla stessa linea di base.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Crea Quota Smusso Orizzontale](/TechDraw_ExtensionCreateHorizChamferDimension/it "TechDraw ExtensionCreateHorizChamferDimension/it"): crea una quota orizzontale e una quota angolare per uno smusso.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Crea Quota Smusso Verticale](/TechDraw_ExtensionCreateVertChamferDimension/it "TechDraw ExtensionCreateVertChamferDimension/it"): crea una quota verticale e una quota angolare per uno smusso.

- ![](/images/TechDraw_Balloon.svg) [Inserisci Pallinatura](/TechDraw_Balloon/it "TechDraw Balloon/it"): aggiunge una "pallinatura" annotativa a una pagina.

- ![](/images/TechDraw_AxoLengthDimension.svg) [Inserisci quota lunghezza assonometrica](/TechDraw_AxoLengthDimension/it "TechDraw AxoLengthDimension/it"): aggiunge una quota di lunghezza assonometrica. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_LandmarkDimension.svg) [Quota da punti di riferimento - SPERIMENTALE](/TechDraw_LandmarkDimension/it "TechDraw LandmarkDimension/it"): aggiunge una quota basata su punti di riferimento.

- ![](/images/TechDraw_DimensionRepair.svg) [Ripara quota](/TechDraw_DimensionRepair/it "TechDraw DimensionRepair/it"): può regolare i riferimenti geometrici 2D o 3D di una quota. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_LinkDimension.svg) [Collega Quota alla geometria 3D](/TechDraw_LinkDimension/it "TechDraw LinkDimension/it"): collega una quota esistente alla geometria 3D (deprecata).

### Tratteggio

- ![](/images/TechDraw_Hatch.svg) [Tratteggia una Faccia usando un file immagine](/TechDraw_Hatch/it "TechDraw Hatch/it"): applica a una faccia un modello di tratteggio preso da un file.

- ![](/images/TechDraw_GeometricHatch.svg) [Applica un Tratteggio geometrico a una Faccia](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it"): tratteggia una faccia usando uno specifico Autodesk PAT.

### Annotazioni

- ![](/images/TechDraw_Annotation.svg) [Inserisci Annotazione](/TechDraw_Annotation/it "TechDraw Annotation/it"): aggiunge un blocco di testo normale da utilizzare come annotazione.

- ![](/images/TechDraw_LeaderLine.svg) [Aggiungi Linea guida alla vista](/TechDraw_LeaderLine/it "TechDraw LeaderLine/it"): aggiunge una linea guida a una vista.

- ![](/images/TechDraw_RichTextAnnotation.svg) [Inserisci Blocco di testo](/TechDraw_RichTextAnnotation/it "TechDraw RichTextAnnotation/it"): aggiunge un blocco di annotazione rich text a una linea guida o ad una vista.

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi vertici cosmetici:

- ![](/images/TechDraw_CosmeticVertex.svg) [Aggiungi Vertice cosmetico](/TechDraw_CosmeticVertex/it "TechDraw CosmeticVertex/it"): aggiunge un vertice che non fa parte della geometria originale.

- ![](/images/TechDraw_Midpoints.svg) [Aggiungi Punti mediani](/TechDraw_Midpoints/it "TechDraw Midpoints/it"): aggiunge dei Vertici Cosmetici nei punti mediani dei bordi selezionati.

- ![](/images/TechDraw_Quadrants.svg) [Aggiungi Vertici Quadrante](/TechDraw_Quadrants/it "TechDraw Quadrants/it"): aggiunge dei Vertici Cosmetici nei punti quarti dei bordi (circolari) selezionati.

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi Linee centrali:

- ![](/images/TechDraw_FaceCenterLine.svg) [Aggiungi Linea centrale alla faccia](/TechDraw_FaceCenterLine/it "TechDraw FaceCenterLine/it"): aggiunge una linea centrale alle facce selezionate.

- ![](/images/TechDraw_2LineCenterLine.svg) [Aggiungi Linea centrale tra 2 linee](/TechDraw_2LineCenterLine/it "TechDraw 2LineCenterLine/it"): aggiunge una linea centrale tra 2 linee.

- ![](/images/TechDraw_2PointCenterLine.svg) [Aggiungi Linea centrale tra 2 punti](/TechDraw_2PointCenterLine/it "TechDraw 2PointCenterLine/it"): aggiunge una linea centrale tra 2 punti.

- ![](/images/TechDraw_2PointCosmeticLine.svg) [Aggiungi Linea Cosmetica tra due punti](/TechDraw_2PointCosmeticLine/it "TechDraw 2PointCosmeticLine/it"): aggiunge una linea cosmetica che collega 2 vertici.

- ![](/images/TechDraw_CosmeticCircle.svg) [Aggiungi Cerchio Cosmetico](/TechDraw_CosmeticCircle/it "TechDraw CosmeticCircle/it"): aggiunge un cerchio cosmetico. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_DecorateLine.svg) [Cambia Aspetto delle linee](/TechDraw_DecorateLine/it "TechDraw DecorateLine/it"): modifica l'aspetto delle linee selezionate.

- ![](/images/TechDraw_ShowAll.svg) [Mostra/nascondi i bordi invisibili](/TechDraw_ShowAll/it "TechDraw ShowAll/it"): mostra/nasconde le linee/bordi invisibili in una vista.

- ![](/images/TechDraw_WeldSymbol.svg) [Aggiungi Informazioni di saldatura](/TechDraw_WeldSymbol/it "TechDraw WeldSymbol/it"): aggiunge le specifiche di saldatura a una linea guida esistente.

- ![](/images/TechDraw_SurfaceFinishSymbols.svg) [Aggiungi Simbolo di Finitura Superficiale](/TechDraw_SurfaceFinishSymbols/it "TechDraw SurfaceFinishSymbols/it"): aggiunge un simbolo di finitura superficiale a una pagina. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/TechDraw_HoleShaftFit.svg) [Accoppiamento foro/albero](/TechDraw_HoleShaftFit/it "TechDraw HoleShaftFit/it"): aggiunge le tolleranze del foro o dell'albero utilizzando ISO 286 a una quota. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

### Estensioni

#### Attributi e modifiche

- ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Seleziona attributi di linea, spaziatura in cascata e distanza delta](/TechDraw_ExtensionSelectLineAttributes/it "TechDraw ExtensionSelectLineAttributes/it"): seleziona gli attributi (stile, larghezza e colore) per le nuove linee cosmetiche e linee di centro e specifica la spaziatura in cascata e distanza delta.

- ![](/images/TechDraw_ExtensionChangeLineAttributes.svg) [Cambia attributi linea](/TechDraw_ExtensionChangeLineAttributes/it "TechDraw ExtensionChangeLineAttributes/it"): cambia gli attributi (stile, larghezza e colore) delle linee cosmetiche e delle linee centrali.

- ![](/images/TechDraw_ExtensionExtendLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Modifica la lunghezza delle linee cosmetiche o delle linee assiali:

- ![](/images/TechDraw_ExtensionExtendLine.svg) [Estendi linea](/TechDraw_ExtensionExtendLine/it "TechDraw ExtensionExtendLine/it"): estende una linea cosmetica o una linea centrale ad entrambe le estremità.

- ![](/images/TechDraw_ExtensionShortenLine.svg) [Accorcia linea](/TechDraw_ExtensionShortenLine/it "TechDraw ExtensionShortenLine/it"): accorcia una linea cosmetica o una linea centrale ad entrambe le estremità.

- ![](/images/TechDraw_ExtensionLockUnlockView.svg) [Blocca/sblocca Vista](/TechDraw_ExtensionLockUnlockView/it "TechDraw ExtensionLockUnlockView/it"): blocca o sblocca la posizione di una vista.

- ![](/images/TechDraw_ExtensionPositionSectionView.svg) [Allinea Vista di Sezione](/TechDraw_ExtensionPositionSectionView/it "TechDraw ExtensionPositionSectionView/it"): allinea ortogonalmente una vista di sezione alla sua vista sorgente.

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Allinea le quote:

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg) [Allinea in Serie Quote Orizzontali](/TechDraw_ExtensionPosHorizChainDimension/it "TechDraw ExtensionPosHorizChainDimension/it"): allinea le quote orizzontalmente per creare una quotatura in serie.

- ![](/images/TechDraw_ExtensionPosVertChainDimension.svg) [Allinea in Serie Quote Verticali](/TechDraw_ExtensionPosVertChainDimension/it "TechDraw ExtensionPosVertChainDimension/it"): allinea le quote verticali per creare una quotatura in serie.

- ![](/images/TechDraw_ExtensionPosObliqueChainDimension.svg) [Allinea in Serie Quote Oblique](/TechDraw_ExtensionPosObliqueChainDimension/it "TechDraw ExtensionPosObliqueChainDimension/it"): allinea le quote oblique per creare una quotatura in serie.

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Distribuisci uniformemente le quote:

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg) [Distanzia in Parallelo Quote Orizzontali](/TechDraw_ExtensionCascadeHorizDimension/it "TechDraw ExtensionCascadeHorizDimension/it"): distanzia uniformemente le quote orizzontali.

- ![](/images/TechDraw_ExtensionCascadeVertDimension.svg) [Distanzia in Parallelo Quote Verticali](/TechDraw_ExtensionCascadeVertDimension/it "TechDraw ExtensionCascadeVertDimension/it"): distanzia uniformemente le quote verticali.

- ![](/images/TechDraw_ExtensionCascadeObliqueDimension.svg) [Distanzia in Parallelo Quote Oblique](/TechDraw_ExtensionCascadeObliqueDimension/it "TechDraw ExtensionCascadeObliqueDimension/it"): distanzia uniformemente le quote oblique.

- ![](/images/TechDraw_ExtensionAreaAnnotation.svg) [Calcola l'area delle facce selezionate](/TechDraw_ExtensionAreaAnnotation/it "TechDraw ExtensionAreaAnnotation/it"): calcola l'area delle facce selezionate e inserisce un'annotazione dell'area.

- ![](/images/TechDraw_ExtensionArcLengthAnnotation.svg) [Calcola la lunghezza dell'arco dei bordi selezionati](/TechDraw_ExtensionArcLengthAnnotation/it "TechDraw ExtensionArcLengthAnnotation/it"): calcola la lunghezza dell'arco dei bordi selezionati e inserisce un'annotazione sulla lunghezza dell'arco. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Personalizza formato etichetta](/TechDraw_ExtensionCustomizeFormat/it "TechDraw ExtensionCustomizeFormat/it"): personalizza la formattazione di un etichetta o di una quota. È possibile aggiungere simboli GD&T e altri caratteri speciali.

#### Linee di centro e filettature

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi linee assiali:

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg) [Aggiungi linee di Centro del Cerchio](/TechDraw_ExtensionCircleCenterLines/it "TechDraw ExtensionCircleCenterLines/it"): aggiunge linee di centro a cerchi e archi.

- ![](/images/TechDraw_ExtensionHoleCircle.svg) [Aggiungi Linee di Centro del Cerchio dei Bulloni](/TechDraw_ExtensionHoleCircle/it "TechDraw ExtensionHoleCircle/it"): aggiunge le linee di centro ad una serie circolare di cerchi.

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi filetti cosmetici:

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Aggiungi Vista Laterale Filettatura Cosmetica Foro](/index.php?title=TechDraw_ExtensionThreadHoleSide/it&action=edit&redlink=1 "TechDraw ExtensionThreadHoleSide/it (page does not exist)"): aggiunge una filettatura cosmetica alla vista laterale di un foro.

- ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Aggiungi Vista Inferiore Filettatura Cosmetica Foro](/index.php?title=TechDraw_ExtensionThreadHoleBottom/it&action=edit&redlink=1 "TechDraw ExtensionThreadHoleBottom/it (page does not exist)"): aggiunge una filettatura cosmetica alla vista superiore o inferiore dei fori.

- ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Aggiungi Vista Laterale Filettatura Cosmetica Bullone](/index.php?title=TechDraw_ExtensionThreadBoltSide/it&action=edit&redlink=1 "TechDraw ExtensionThreadBoltSide/it (page does not exist)"): aggiunge una filettatura cosmetica alla vista laterale di un bullone/vite/barra.

- ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Aggiungi Vista Inferiore Filettatura Cosmetica Bullone](/index.php?title=TechDraw_ExtensionThreadBoltBottom/it&action=edit&redlink=1 "TechDraw ExtensionThreadBoltBottom/it (page does not exist)"): aggiunge una filettatura cosmetica alla vista superiore o inferiore di bulloni/viti/barre.

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi vertici:

ː\- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg) [Aggiungi Vertici di Intersezione Cosmetici](/index.php?title=TechDraw_ExtensionVertexAtIntersection/it&action=edit&redlink=1 "TechDraw ExtensionVertexAtIntersection/it (page does not exist)"): aggiunge vertici cosmetici all'intersezione dei bordi selezionati.

- ![](/images/TechDraw_CommandAddOffsetVertex.svg) [Aggiungi un vertice di offset](/TechDraw_CommandAddOffsetVertex "TechDraw CommandAddOffsetVertex"): aggiunge un vertice cosmetico ad un offset specificato da un vertice selezionato. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi cerchi o archi cosmetici:

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg) [Aggiungi Cerchio Cosmetico](/index.php?title=TechDraw_ExtensionDrawCosmCircle/it&action=edit&redlink=1 "TechDraw ExtensionDrawCosmCircle/it (page does not exist)"): aggiunge un cerchio cosmetico basato su due vertici.

- ![](/images/TechDraw_ExtensionDrawCosmArc.svg) [Aggiungi Arco Cosmetico](/index.php?title=TechDraw_ExtensionDrawCosmArc/it&action=edit&redlink=1 "TechDraw ExtensionDrawCosmArc/it (page does not exist)"): aggiunge un arco cosmetico in senso antiorario basato su tre vertici.

- ![](/images/TechDraw_ExtensionDrawCosmCircle3Points.svg) [Aggiungie un Cerchio Cosmetico per 3 Punti](/index.php?title=TechDraw_ExtensionDrawCosmCircle3Points/it&action=edit&redlink=1 "TechDraw ExtensionDrawCosmCircle3Points/it (page does not exist)"): aggiunge un cerchio cosmetico basato su tre vertici.

- ![](/images/TechDraw_ExtensionLineParallel.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aggiungi linee cosmetiche parallele o perpendicolari:

- ![](/images/TechDraw_ExtensionLineParallel.svg) [Aggiungi Linea Parallela Cosmetica](/index.php?title=TechDraw_ExtensionLineParallel/it&action=edit&redlink=1 "TechDraw ExtensionLineParallel/it (page does not exist)"): aggiunge una linea cosmetica parallela a un'altra linea attraverso un vertice.

- ![](/images/TechDraw_ExtensionLinePerpendicular.svg) [Aggiungi Linea Perpendicolare Cosmetica](/index.php?title=TechDraw_ExtensionLinePerpendicular/it&action=edit&redlink=1 "TechDraw ExtensionLinePerpendicular/it (page does not exist)"): aggiunge una linea cosmetica perpendicolare a un'altra linea attraverso un vertice.

#### Quote

Molti degli strumenti per le estensioni sono elencati in [Quote](#Quote) sopra.

- ![](/images/TechDraw_ExtensionInsertDiameter.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Inserisci prefisso:

- ![](/images/TechDraw_ExtensionInsertDiameter.svg) [Inserisci il Prefisso '⌀'](/index.php?title=TechDraw_ExtensionInsertDiameter/it&action=edit&redlink=1 "TechDraw ExtensionInsertDiameter/it (page does not exist)"): inserisce un simbolo '⌀' all'inizio del testo della quota.

- ![](/images/TechDraw_ExtensionInsertSquare.svg) [Inserisci il Prefisso '□'](/index.php?title=TechDraw_ExtensionInsertSquare/it&action=edit&redlink=1 "TechDraw ExtensionInsertSquare/it (page does not exist)"): inserisce un simbolo '□' all'inizio del testo della quota.

- ![](/images/TechDraw_ExtensionInsertRepetition.svg) [Inserisci il Prefisso 'n×'](/index.php?title=TechDraw_ExtensionInsertRepetition/it&action=edit&redlink=1 "TechDraw ExtensionInsertRepetition/it (page does not exist)"): inserisce un conteggio di elementi ripetuti all'inizio del testo della quota. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/TechDraw_ExtensionRemovePrefixChar.svg) [Rimuovi Prefisso](/index.php?title=TechDraw_ExtensionRemovePrefixChar/it&action=edit&redlink=1 "TechDraw ExtensionRemovePrefixChar/it (page does not exist)"): rimuove tutti i simboli all'inizio del testo della quota.

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Cambia le posizioni decimali:

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg) [Aumenta Posizioni Decimali](/index.php?title=TechDraw_ExtensionIncreaseDecimal/it&action=edit&redlink=1 "TechDraw ExtensionIncreaseDecimal/it (page does not exist)"): aumenta il numero di posizioni decimali del testo della quota.

- ![](/images/TechDraw_ExtensionDecreaseDecimal.svg) [Diminuisce Posizioni Decimali](/index.php?title=TechDraw_ExtensionDecreaseDecimal/it&action=edit&redlink=1 "TechDraw ExtensionDecreaseDecimal/it (page does not exist)"): riduce il numero di posizioni decimali del testo della quota.

### Varie

- ![](/images/TechDraw_CosmeticEraser.svg) [Rimuovi oggetto cosmetico](/TechDraw_CosmeticEraser/it "TechDraw CosmeticEraser/it"): rimuove gli oggetti cosmetici da una pagina.

### Strumenti obsoleti

- ![](/images/TechDraw_ClipGroupAdd.svg) [Aggiunge una vista al gruppo clip](/TechDraw_ClipGroupAdd/it "TechDraw ClipGroupAdd/it"): aggiunge una vista esistente a un gruppo di clip. Non disponibile in versione 1.0 e superiori.

- ![](/images/TechDraw_ClipGroupRemove.svg) [Rimuovi la vista dal gruppo clip](/TechDraw_ClipGroupRemove/it "TechDraw ClipGroupRemove/it"): rimuove una vista da un gruppo di clip. Non disponibile in versione 1.0 e superiori.

- ![](/images/TechDraw_MoveView.svg) [Sposta vista](/TechDraw_MoveView "TechDraw MoveView"): sposta una vista e le sue dipendenze in una pagina diversa. Non disponibile in versione 1.0 e superiori.

## Ulteriori funzioni

- [Gruppi di linee](/TechDraw_LineGroup/it "TechDraw LineGroup/it"): si possono assegnare valori di default a vari tipi di linee.
- [Modelli di squadrature](/TechDraw_Templates/it "TechDraw Templates/it"): i modelli predefiniti per le pagine di disegno di TechDraw.
- [Tipi di tratteggio](/TechDraw_Hatching/it "TechDraw Hatching/it"): spiegazione delle diverse tecniche di tratteggio.
- [Dimensionamento e tolleranza geometrica](/TechDraw_Geometric_dimensioning_and_tolerancing/it "TechDraw Geometric dimensioning and tolerancing/it"): spiegazione su come realizzare la quotatura geometrica e la tolleranza.

## Preferenze

- ![](/images/Preferences-techdraw.svg) [Preferenze di TechDraw](/TechDraw_Preferences/it "TechDraw Preferences/it"): le preferenze per i valori predefiniti della pagina di disegno come l'angolo di proiezione, i colori, le dimensioni del testo e gli stili di linea.

## Scripting

Gli strumenti TechDraw possono essere utilizzati nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando due API.
Per maggiori informazioni vedere:

- [Autogenerated API documentation](https://freecad.github.io/SourceDoc/)
- [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")
- [Campi di testo modificabili](/TechDraw_PageDefault/it#Campi_di_testo_modificabili "TechDraw PageDefault/it")

## Limitazioni

- Non tagliare, copiare e incollare oggetti TechDraw nella [Vista ad albero](/Tree_view/it "Tree view/it") poiché generalmente non funziona bene.
- Non trascinare gli oggetti TechDraw nella [Vista ad albero](/Tree_view/it "Tree view/it") con il mouse.

## Tutorial

- [Tutorial base di TechDraw](/Basic_TechDraw_Tutorial/it "Basic TechDraw Tutorial/it"): introduzione alla creazione di disegni con TechDraw.
- [Come creare dei modelli TechDraw personalizzati](/TechDraw_TemplateHowTo/it "TechDraw TemplateHowTo/it"): istruzioni per creare un nuovo modello di pagina in Inkscape per l'utilizzo con TechDraw.
- [TechDraw Generatore di Modelli](/index.php?title=TechDraw_TemplateGenerator/it&action=edit&redlink=1 "TechDraw TemplateGenerator/it (page does not exist)"): istruzioni per creare una macro per generare un template di base.

: L'aggiunta di "poche" righe di codice genera uno strumento come [Macro TemplateHelper](/index.php?title=Macro_TemplateHelper/it&action=edit&redlink=1 "Macro TemplateHelper/it (page does not exist)").

- [Misura degli angoli sui fori](/Measurement_Of_Angles_On_Holes/it "Measurement Of Angles On Holes/it"): istruzioni per l'aggiunta delle linee d'asse e delle successive rappresentazioni degli angoli sui fori.
- [Informazioni pratiche su TechDraw](/TechDraw_HowTo_Page/it "TechDraw HowTo Page/it"): istruzioni per diverse impostazioni come i segni di centratura, ecc.
- [TechDraw Tutorial Pitch Circle](/TechDraw_Pitch_Circle_Tutorial "TechDraw Pitch Circle Tutorial"): istruzioni per aggiungere un pitch circle.

Video tutorial di sliptonic

- TechDraw Workbench [Part 1 (Basics)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Part 2 (Dimensions)](https://www.youtube.com/watch?v=z3w84RfvqaE), [Part 3 (Multiview)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- TechDraw Workbench [Part 4 (Section and Detail)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 (Customizing Templates)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## Sviluppo

Vuoi conoscere il futuro di TechDraw Workbench? Visita [la pagina della roadmap di TechDraw](/index.php?title=TechDraw_Roadmap/it&action=edit&redlink=1 "TechDraw Roadmap/it (page does not exist)") per saperne di più.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/it&oldid=1493954>"
