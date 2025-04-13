---
title: TechDraw Vista
---
|  |
| --- |
| TechDraw Vista |
| Posizione nel menu |
| TechDraw → Viste TechDraw → Inserisci Vista |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Gruppo proiezione](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it"), [TechDraw Vista Foglio di calcolo](/TechDraw_SpreadsheetView/it "TechDraw SpreadsheetView/it"), [TechDraw Vista di Arch](/TechDraw_ArchView/it "TechDraw ArchView/it"), [TechDraw Simbolo](/TechDraw_Symbol/it "TechDraw Symbol/it"), [TechDraw Immagine](/TechDraw_Image/it "TechDraw Image/it") |
|  |

## Descrizione

Lo strumento **TechDraw Vista** aggiunge una rappresentazione di uno o più oggetti ad una pagina di disegno. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Può creare un [Elemento del gruppo di proiezione (una singola vista)](#Properties_Projection_Group_Item), un [Gruppo di proiezione](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it"), una [Vista del foglio di calcolo](/TechDraw_SpreadsheetView/it "TechDraw SpreadsheetView/it"), una [Vista di Arch](/TechDraw_ArchView/it "TechDraw ArchView/it"), un [Simbolo](/TechDraw_Symbol/it "TechDraw Symbol/it") o una [Vista immagine](/TechDraw_Image/it "TechDraw Image/it").

In versione 0.21 e precedenti lo strumento può creare solo una [Part View](#Properties_Part_View), che è molto simile a un elemento del gruppo di proiezione.

![](/images/TechDraw_View_example.png)

Vista di un solido con linee nascoste

## Utilizzo dell'Elemento del Gruppo di Proiezione e del Gruppo di Proiezione

1. Facoltativamente ruotare la [vista 3D](/3D_view/it "3D view/it"). La direzione della telecamera nella vista 3D può essere utilizzata per impostare la direzione di proiezione della vista primaria.
2. Selezionare uno o più oggetti con una proprietà Dati**Shape** nella vista 3D o [Vista ad albero](/Tree_view/it "Tree view/it"). È inoltre possibile selezionare [Std Parti](/Std_Part/it "Std Part/it") o [Std Gruppi](/Std_Group/it "Std Group/it") che contengono tali oggetti. Quando si seleziona nella vista 3D, la prima faccia selezionata può essere utilizzata per impostare la direzione di proiezione della vista primaria. Non selezionare gli oggetti selezionando una faccia nella vista 3D se desidera utilizzare la direzione corrente della telecamera.
3. Se nel documento sono presenti più pagine di disegno: facoltativamente aggiungere la pagina desiderata alla selezione selezionandola nella [Vista ad albero](/Tree_view/it "Tree view/it").
4. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_View.svg) Inserisci Vista.
   * Selezionare l'opzione **TechDraw → Viste TechDraw → ![](/images/TechDraw_View.svg) Inserisci Vista** dal menu.
5. Se nel documento sono presenti più pagine di disegno e se nessuna pagina è visualizzata nell'[Area della vista principale](/Main_view_area/it "Main view area/it") e non si ha ancora selezionato una Pagina, si apre la finestra di dialogo **Scelta Pagina**:
   1. Selezionare la pagina desiderata.
   2. Premere il pulsante OK.
6. Si apre il pannello delle azioni **Vista Parte**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
7. Facoltativamente regolare i parametri:
   * **Scala**: selezionare `Pagina`, `Automatico` o `Personalizzato`. Se è selezionata l'ultima opzione: inserire il numeratore e il denominatore della scala.
   * **Direzione**: utilizzare i pulsanti disponibili per regolare la direzione di proiezione e la rotazione della vista primaria:
     + Il pulsante [#.## #.## #.##] al centro mostra la direzione di proiezione corrente. Il valore iniziale dipende dalla [preferenza](/TechDraw_Preferences/it#General "TechDraw Preferences/it") **Usa direzione telecamera 3D** . Premere il pulsante per regolare manualmente la direzione e la rotazione della vista.
     + Premere il pulsante ![](/images/Arrow-up.svg), ![](/images/Arrow-down.svg), ![](/images/Arrow-left.svg) o il pulsante ![](/images/Arrow-right.svg) per ruotare la direzione di proiezione di 90° attorno all'asse orizzontale o verticale della vista.
     + Premere il pulsante ![](/images/Arrow-cw.svg) o il pulsante ![](/images/Arrow-ccw.svg) per ruotare la vista di 90 ° attorno alla direzione di proiezione.
     + Premere il pulsante ![](/images/TechDraw_ProjFront.svg) per impostare la direzione di proiezione della vista primaria sulla [vista frontale](/Std_ViewFront/it "Std ViewFront/it") standard.
     + Premere il pulsante ![](/images/TechDraw_CameraOrientation.svg) per impostarlo sulla prima faccia selezionata, se disponibile, oppure sulla direzione corrente della telecamera.
   * **Proiezioni secondarie**: crea facoltativamente proiezioni secondarie oltre alla vista primaria. È necessario specificare almeno una proiezione secondaria affinché tutti i controlli in questa sezione possano essere visualizzati.
8. Dopo aver modificato alcuni parametri, può essere necessario premere il pulsante Applica per aggiornare le viste.
9. Premere il pulsante OK.
10. Viene inserito un [Elemento gruppo di proiezioni](#Properties_Projection_Group_Item) o, se sono presenti una o più proiezioni secondarie, un [Gruppo di proiezioni](/TechDraw_ProjectionGroup/it "TechDraw ProjectionGroup/it").

![](/images/TechDraw_View_Taskpanel.png)

Vista Parte [pannello azioni](/Task_panel/it "Task panel/it")

## Utilizzo di altri tipi di visualizzazione

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

1. Facoltativamente, selezionare un [Foglio di calcolo](/Spreadsheet_CreateSheet/it "Spreadsheet CreateSheet/it") nella [Vista ad albero](/Tree_view/it "Tree view/it") o un [Arch Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it") nella [Vista 3D](/3D_view/it "3D view/it") o nella vista ad albero.
2. Seguire i passaggi 3, 4 e 5 come spiegato [sopra](#Usage_Projection_Group_Item_and_Projection_Group).
3. Se non si ha selezionato un Foglio di calcolo o un Arch piano di sezione:
   1. Si apre una finestra di dialogo di avviso.
   2. Selezionare la casella di controllo **Non mostrare più questo messaggio** per evitare questa finestra di dialogo in futuro.
   3. Premere il pulsante OK.
   4. Si apre un browser di file.
   5. Selezionare un file SVG o un'immagine.
4. È stato inserito una [Vista Foglio di calcolo](/TechDraw_SpreadsheetView/it "TechDraw SpreadsheetView/it"), un [Vista Arch](/TechDraw_ArchView/it "TechDraw ArchView/it"), un [Simbolo](/TechDraw_Symbol/it "TechDraw Symbol/it") o un [Vista Immagine](/TechDraw_Image/it "TechDraw Image/it").
5. In caso di Vista di un Foglio di calcolo: regolare l'intervallo di celle della visualizzazione modificando le sue proprietà Dati**Cell Start** e Dati**Cell End**.
6. In caso di Vista di un Simbolo o di un'Immagine: facoltativamente modificare la sua proprietà Dati**Scale** per regolarne le dimensioni.

## Proprietà Part View

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Una Vista Parte, formalmente un oggetto `TechDraw::DrawViewPart`, ha le seguenti proprietà:

### Dati

Base

* Dati**X** (`Distance`): la posizione orizzontale della vista sulla pagina. (1)
* Dati**Y** (`Distance`): la posizione verticale della vista sulla pagina. (1)
* Dati**Lock Position** (`Bool`): impedisce alle viste di essere trascinate nella GUI quando `true`. La vista può ancora essere spostata modificando le proprietà X,Y. (1)
* Dati**Rotation** (`Angle`): rotazione in senso antiorario della vista sulla pagina in gradi. (1)
* Dati**Scale Type** (`Enumeration`): il tipo di scala. Opzioni: (1)
  + `Page`: utilizza l'impostazione di scala della [Pagina predefinita](/TechDraw_PageDefault/it "TechDraw PageDefault/it").
  + `Automatic`: adatta la visualizzazione alla pagina.
  + `Custom`: utilizza la scala definita da Dati**Scale**.
* Dati**Scale** (`FloatConstant`): la vista verrà visualizzata sulla pagina in rapporto Scala:1 rispetto all'origine. (1)
* Dati**Caption** (`String`): didascalia di testo breve opzionale. (1)

Cosmetics

* Dati (Hidden)**Cosmetic Vertexes** (`TechDraw::PropertyCosmeticVertexList`)
* Dati (Hidden)**Cosmetic Edges** (`TechDraw::PropertyCosmeticEdgeList`)
* Dati (Hidden)**Center Lines** (`TechDraw::PropertyCenterLineList`)
* Dati (Hidden)**Geom Formats** (`TechDraw::PropertyGeomFormatList`)

HLR Parameters

* Dati**Coarse View** (`Bool`): Se `true`, TechDraw utilizzerà un'approssimazione del poligono per calcolare la geometria del disegno. Se `false`, TechDraw utilizzerà un algoritmo di precisione. CoarseView può essere molto più veloce per i modelli complessi. La qualità del disegno risulta ridotta, poiché ogni curva viene approssimata come una serie di brevi segmenti di linea. I vertici non vengono visualizzati in CoarseView poiché ogni breve segmento comporterebbe due nuovi vertici e la visualizzazione diventerebbe ingombrante. Le quote lineari possono essere aggiunte a CoarseView, ma è improbabile che siano utili.
* Dati**Smooth Visible** (`Bool`): Linee smussate visibili attivate/disattivate.
* Dati**Seam Visible** (`Bool`): Linee di giuntura visibili (seme) attivate/disattivate.
* Dati**Iso Visible** (`Bool`): Linee isometriche visibili (u,v) attivate/disattivate.
* Dati**Hard Hidden** (`Bool`): Linee nascoste attivate/disattivate.
* Dati**Smooth Hidden** (`Bool`): Linee nascoste attivate/disattivate.
* Dati**Seam Hidden** (`Bool`): Linee di giuntura (seme) nascoste attivate/disattivate.
* Dati**Iso Hidden** (`Bool`): Linee isometriche nascoste(u,v) attivate/disattivate.
* Dati**Iso Count** (`Integer`): Numero di linee isometriche(u,v) da disegnare su ciascuna faccia.
* Dati**Scrub Count** (`Integer`): Numero di volte in cui FreeCAD dovrebbe tentare di pulire il risultato HLR. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Projection

* Dati**Source** (`LinkList`): collegamenti agli oggetti disegnabili da rappresentare.
* Dati**XSource** (`XLinkList`): collegamenti agli oggetti disegnabili in un file esterno.
* Dati**Direction** (`Vector`): questo vettore controlla la direzione da cui si sta visualizzando l'oggetto. +X è destra, -X è sinistra, +Y è posteriore, -Y è anteriore (guardando nello schermo), +Z è su e -Z è giù. Quindi una vista frontale è (0,-1,0) e una vista isometrica è (1,-1,1).
* Dati**XDirection** (`Vector`): questo vettore controlla la rotazione della vista attorno alla direzione.
* Dati**Perspective** (`Bool`): `true` per proiezione prospettica, `false` per proiezione ortogonale.
* Dati**Focus** (`Distance`): distanza dalla fotocamera al piano di proiezione per proiezioni prospettiche. Deve essere regolato per adattarsi all'oggetto. Troppo lontano si perde la prospettiva, troppo vicino l'oggetto risulta distorto.

### Vista

Base

* Vista**Keep Label** (`Bool`): mostra sempre l'etichetta della vista se `true`. (1)
* Vista**Stack Order** (`Integer`): sopra o sotto giro rispetto ad altre visualizzazioni. (1) [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Broken View

* Vista**Break Line Style** (`Enumeration`): Imposta lo stile della linea di interruzione, se applicabile. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Vista**Break Line Type** (`Enumeration`): Regola il tipo di rappresentazione della linea di interruzione sulle viste interrotte, se applicabile: `None`, `ZigZag` o `Simple`. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Decoration

* Vista**Arc Center Marks** (`Bool`): Attiva/disattiva i contrassegni centrali dell'arco circolare.
* Vista**Center Scale** (`Float`): Regola la dimensione del contrassegno centrale dell'arco circolare, se abilitato.
* Vista**Horiz Center Line** (`Bool`): Mostra una linea centrale orizzontale attraverso la Vista.
* Vista**Show All Edges** (`Bool`): Mostra temporaneamente le linee invisibili.
* Vista**Vert Center Line** (`Bool`): Mostra una linea centrale verticale attraverso la Vista.

Faces

* Vista**Face Color** (`Color`): Imposta il colore delle facce. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Vista**Face Transparency** (`Percent`): Imposta la trasparenza delle facce. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Highlight

* Vista**Highlight Adjustment** (`Float`): regola la rotazione dei dettagli evidenziati, se applicabile.
* Vista**Highlight Line Color** (`Color`): imposta il colore della linea evidenziata, se applicabile.
* Vista**Highlight Line Style** (`Enumeration`): imposta lo stile della linea evidenziata, se applicabile.

Lines

* Vista**Extra Width** (`Length`): non ancora implementato.
* Vista**Hidden Width** (`Length`): lo spessore delle linee nascoste, se abilitato.
* Vista**Iso Width** (`Length`): lo spessore delle linee isometriche di superficie (u,v) e delle linee di quota.
* Vista**Line Width** (`Length`): lo spessore delle linee visibili. Vedere [Gruppi di linee](/TechDraw_LineGroup/it "TechDraw LineGroup/it").

Section Line

* Vista**Include Cut Line** (`Bool`): Mostra/nasconde la linea di taglio della sezione, se applicabile. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Vista**Section Line Color** (`Color`): Imposta il colore della linea di sezione, se applicabile.
* Vista**Section Line Marks** (`Bool`): Mostra/nasconde i contrassegni ai cambi di direzione per la sezione complessa, se applicabile. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Vista**Section Line Style** (`Enumeration`): Imposta lo stile della linea di sezione, se applicabile.
* Vista**Show Section Line** (`Bool`): Mostra/nasconde la linea di sezione, se applicabile.

(1) queste proprietà sono comuni a tutti i tipi di Viste.

## Proprietà dell'Elemento del gruppo di proiezione

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un Elemento del Gruppo di Proiezione, formalmente un oggetto `TechDraw::DrawProjGroupItem`, deriva da un oggetto [Part View](#Properties_Part_View), formalmente un oggetto `TechDraw::DrawViewPart` ed eredita tutti le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Base

* Dati**Type** (`Enumeration`): Il tipo di vista (`Front`, `Left`, ecc.).
* Dati**Rotation Vector** (`Vector`): Deprecato utilizzare invece Dati**XDirection**.

## Properties Gruppo di Proiezione

Vedere [TechDraw Gruppo di Proiezione](/TechDraw_ProjectionGroup/it#Properties "TechDraw ProjectionGroup/it").

## Proprietà Vista Foglio di calcolo

Vedere [TechDraw Vista Foglio di calcolo](/TechDraw_SpreadsheetView/it#Properties "TechDraw SpreadsheetView/it").

## Proprietà Vista di Arch

Vedere [TechDraw Vista di Arch](/TechDraw_ArchView/it#Properties "TechDraw ArchView/it").

## Proprietà Simbolo

Vedere [TechDraw Simbolo](/TechDraw_Symbol/it#Properties "TechDraw Symbol/it").

## Proprietà Vista Immagine

Vedere [TechDraw Immagine](/TechDraw_Image/it#Properties "TechDraw Image/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

È possibile creare una Vista Parte con [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando le seguenti funzioni:

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = [box]
view.Direction = (0, 0, 1)

view.X = page.PageWidth / 2
view.Y = page.PageHeight / 2

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_View/it&oldid=1525748>"