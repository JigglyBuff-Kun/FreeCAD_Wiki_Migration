---
title: Draft Quotatura
---
|  |
| --- |
| Draft Quota |
| Posizione nel menu |
| Draft → Quota |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it") |
| Avvio veloce |
| D I |
| Introdotto nella versione |
| 0.8 |
| Vedere anche |
| [Draft Invertire la direzione delle quote](/Draft_FlipDimension/it "Draft FlipDimension/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Dimension.svg) **Draft Quota** crea una [quota allineata](#Quota_allineata), una [quota radiale](#Quota_radiale) o una  [quota angolare](#Quota_angolare).

Le quote lineari basate sui bordi e le quote radiali sono parametriche. Ciò significa che si aggiorneranno se il bordo misurato viene modificato. I bordi misurati possono appartenere a oggetti Draft ma anche a corpi solidi. Le quote angolari non sono parametriche.

Le Quote di Draft possono essere visualizzate su una pagina [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") utilizzando i comandi [TechDraw DraftView](/TechDraw_DraftView/it "TechDraw DraftView/it") o [TechDraw ArchView](/TechDraw_ArchView/it "TechDraw ArchView/it"). In alternativa, [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") offre i propri comandi di quotatura. Ma questi creano quote che vengono visualizzate solo sulla pagina di disegno e non nella [Vista 3D](/3D_view/it "3D view/it").

![](/images/Screenshot_Draft_Dimension.jpg)

Quota lineare definita da tre punti

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

### Quota allineata

1. Facoltativamente, selezionare un bordo dritto nella [Vista 3D](/3D_view/it "3D view/it").
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Dimension.svg) Quota.
   * Selezionare l'opzione **Annotazione → ![](/images/Draft_Dimension.svg) Quota** dal menu.
   * Usare la scorciatoia da tastiera: D poi I.
3. Si apre il pannello attività **Quota**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
4. Se non si ha ancora selezionato un bordo, eseguire una delle seguenti operazioni:
   * Premere E o il pulsante ![](/images/View-select.svg) Seleziona bordo e seleziona un bordo dritto nella [Vista 3D](/3D_view/it "3D view/it").
   * Tenere premuto il tasto Alt, selezionare un bordo dritto nella [Vista 3D](/3D_view/it "3D view/it") e rilasciare il tasto Alt.
   * Definire la distanza misurata selezionando i punti:
     + Scegliere un primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
     + Scegliere un secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
5. Per posizionare la linea di quota, eseguire una delle seguenti operazioni:
   * Per una quota allineata:
     + Scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
   * Per una quota orizzontale:
     + Spostare il puntatore sopra o sotto il bordo o i punti.
     + Tenere premuto il tasto Shift, muovere il puntatore e scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it").
   * Per una quota verticale:
     + Spostare il puntatore a sinistra o a destra del bordo o dei punti.
     + Tenere premuto il tasto Shift, muovere il puntatore e scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it").

### Quota radiale

1. Facoltativamente, selezionare un bordo circolare nella [Vista 3D](/3D_view/it "3D view/it").
2. Invocare il comando come spiegato sopra.
3. Si apre il pannello azioni **Quota**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
4. Se non si ha ancora selezionato un bordo, eseguire una delle seguenti operazioni:
   * Premere E o il pulsante ![](/images/View-select.svg) Seleziona bordo e selezionare un bordo circolare nella [Vista 3D](/3D_view/it "3D view/it").
   * Tenere premuto il tasto Alt, selezionare un bordo circolare nella [Vista 3D](/3D_view/it "3D view/it") e rilasciare il tasto Alt.
5. Per posizionare la linea di quota, eseguire una delle seguenti operazioni:
   * Per quotare un diametro:
     + Scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
   * Per quotare un raggio:
     + Tenere premuto il tasto Shift e scegliere un punto nella [Vista 3D](/3D_view/it "3D view/it").

### Quota angolare

1. Invocare il comando come spiegato sopra.
2. Si apre il pannello azioni **Quota**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
3. Effettuare una delle seguenti operazioni:
   * Premere E o il pulsante ![](/images/View-select.svg) Seleziona bordo e selezionare un primo bordo dritto nella [Vista 3D](/3D_view/it "3D view/it") . Ripetere l'operazione per selezionare un secondo bordo dritto.
   * Tenere premuto il tasto Alt, selezionare due bordi dritti nella [Vista 3D](/3D_view/it "3D view/it") e rilasciare il tasto Alt.
4. Per posizionare l'arco di quota selezionare un punto nella [Vista 3D](/3D_view/it "3D view/it").
5. L'angolo visualizzato dipende dai bordi e dal punto selezionato.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premee R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate sono relative all'ultimo punto, se disponibile, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Questa modalità funziona solo per quote lineari. Se la modalità continua è attiva, il comando si riavvierà al termine, consentendo di continuare a creare quote. Tutte le quote successive inizieranno dal punto finale della quota precedente e utilizzeranno la stessa linea di base della prima quota. Si noti che la selezione del bordo non è possibile per le quote successive.
* Premee S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per terminare il comando.

## Note

* Le Quote Draft lineari e radiali possono essere modificate con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").
* Le Quote Draft create o salvate con [FreeCAD versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") non sono compatibili con le versioni precedenti.

## Preferences

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their Vista**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Quota deriva da un oggetto [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it") e ne eredita tutte le proprietà. Le seguenti proprietà sono aggiuntive se non diversamente specificato.

### Dati quote lineari e radiali

Dimension

* Dati**Dimline** (`VectorDistance`): specifica il punto attraverso il quale passa la linea di quota.
* Dati**Linked Geometry** (`LinkSubList`): specifica l'oggetto e i suoi sottoelementi a cui è collegata la quota.
* Dati**Normal** (`Vector`): specifica la normale del piano del testo.
* Dati (hidden)**Support** (`Link`): specifica l'oggetto misurato.

Linear/radial dimension

* Dati**Direction** (`Vector`): specifica la direzione della misura.
* Dati**Distance** (`Length`): (sola lettura) specifica il valore della misura.
* Dati**End** (`VectorDistance`): specifica il punto finale della misura.
* Dati**Start** (`VectorDistance`): specifica il punto iniziale della misura.

Radial dimension

* Dati**Diameter** (`Bool`): specifica se una quota radiale viene visualizzata come quota diametro. Non utilizzato per quote lineari.

### Dati quote angolari

Angular dimension

* Dati**Angle** (`Angle`): (sola lettura) specifica il valore della misura.
* Dati**Center** (`VectorDistance`): specifica il centro della misura.
* Dati**First Angle** (`Angle`): specifica l'angolo iniziale della misurazione.
* Dati**Last Angle** (`Angle`): specifica l'angolo finale della misura.

Dimension

* Dati**Dimline** (`VectorDistance`): specifica il punto attraverso il quale passa l'arco di quota.
* Dati (hidden)**Linked Geometry** (`LinkSubList`): non utilizzato.
* Dati (hidden)**Normal** (`Vector`): specifica la normale del piano della quota.
* Dati (hidden)**Support** (`Link`): non utilizzato.

### Vista

Annotation

* Vista**Annotation Style** (`Enumeration`): specifica lo stile di annotazione applicato alla quota. Vedere [Stile delle annotazioni](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it").
* Vista**Scale Multiplier** (`Float`): specifica il fattore di scala generale applicato alla quota.

Display Options

* Vista**Display Mode** (`Enumeration`): specifica come viene visualizzato il testo. Se è `World` il testo verrà visualizzato su un piano definito dal Dati**Normal** della misura. Se è `Screen` il testo sarà sempre rivolto verso lo schermo. Questa è una proprietà ereditata. Le opzioni menzionate sono le opzioni rinominate ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")).

Graphics

* Vista**Arrow Size** (`Length`): specifica la dimensione dei simboli visualizzati alle estremità della linea di misura o dell'arco.
* Vista**Arrow Type** (`Enumeration`): specifica il tipo di simbolo visualizzato alle estremità della linea di misura o dell'arco, che può essere `Dot`, `Circle`, `Arrow`, `Tick` o `Tick-2`.
* Vista**Dim Overshoot** (`Distance`): specifica la lunghezza aggiuntiva aggiunta alla linea di misura. Non utilizzato per quote angolari.
* Vista**Ext Lines** (`Distance`): specifica la lunghezza delle linee di riferimento che vanno dalla linea di misura ai punti misurati. Usare `0` per linee di riferimento complete. Un valore negativo definisce lo spazio tra le estremità delle linee di riferimento e i punti misurati. Un valore positivo definisce la lunghezza massima delle linee di riferimento. Utilizzato solo per quote lineari.
* Vista**Ext Overshoot** (`Distance`): specifica la lunghezza aggiuntiva delle linee di riferimento oltre la linea di misura. Non utilizzato per quote angolari.
* Vista**Flip Arrows** (`Bool`): specifica se invertire l'orientamento dei simboli alle estremità della linea di misura o dell'arco. Funziona solo se i simboli sono frecce.
* Vista**Line Color** (`Color`): specifica il colore della linea o dell'arco di misura e delle frecce.
* Vista**Line Width** (`Float`): specifica la larghezza delle linee o dell'arco appartenenti alla quota.
* Vista**Show Line** (`Bool`): specifica se visualizzare la linea di misura. Non influisce sulla visualizzazione delle linee di riferimento e delle estensioni. Non utilizzato per quote angolari.

Text

* Vista**Flip Text** (`Bool`): specifica se invertire l'orientamento del testo.
* Vista**Font Name** (`Font`): specifica il font utilizzato per disegnare il testo. Può essere un nome di font, come `Arial`, uno stile predefinito come `sans`, `serif` o `mono`, una famiglia come `Arial,Helvetica,sans`, o un nome con uno stile come `Arial:Bold`. Se il carattere specificato non viene trovato nel sistema, viene utilizzato un carattere predefinito.
* Vista**Font Size** (`Length`): specifica la dimensione del testo. Il testo può essere invisibile nella [Vista 3D](/3D_view/it "3D view/it") se questo valore è molto piccolo.
* Vista**Override** (`String`): specifica un testo personalizzato da visualizzare al posto della misura effettiva. Usare la stringa `$dim` all'interno del testo per includere la misura.
* Vista**Text Color** (`Color`): specifica il colore del testo. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Vista**Text Position** (`VectorDistance`): specifica la posizione del testo in coordinate assolute. `[0, 0, 0]` visualizzerà il testo nella sua posizione predefinita vicino alla linea di quota o all'arco.
* Vista**Text Spacing** (`Length`): specifica lo spazio tra il testo e la linea o l'arco di quota.

Units

* Vista**Decimals** (`Integer`): specifica il numero di posizioni decimali da visualizzare per la misura.
* Vista**Show Unit** (`Bool`): specifica se visualizzare l'unità accanto al valore numerico della misura. Non utilizzato per quote angolari.
* Vista**Unit Override** (`String`): specifica l'unità in cui esprimere la misura, ad esempio `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` o `arch` per unità arco. Lasciare vuoto questo campo per utilizzare l'unità predefinita. Non utilizzato per quote angolari.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una Quota Draft utilizzare il metodo `make_dimension` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeDimension`.

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

Esistono vari modi per richiamare questo metodo, a seconda degli argomenti passati:

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* Crea una `dimension` lineare misurando la distanza tra i punti `p1` e `p2`.
* Crea una `dimension` lineare collegata a un `object`, misurando la distanza tra i suoi vertici indicizzati `i1` e `i2`.
* Crea una `dimension` circolare collegata a un `object`, con l'indice `i1` del bordo curvo da misurare, e `mode` che può essere un `"radius"` o un `"diameter"` per specificare il tipo di dimensione.
  + `p3` nel primo caso, e `p4` negli altri due, specifica un punto facoltativo attraverso il quale deve passare la linea di quota.
  + Tutti i punti sono definiti dai loro `FreeCAD.Vector`.

Per creare una quota angolare utilizzare il seguente metodo:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* Crea una `dimension` angolare da un punto `center`, una lista `angles` con due elementi, e il punto `p3` attraverso il quale deve passare l'arco.
  + Se `angle1 > angle2`, l'angolo visualizzato è la differenza `angle1 - angle2`; altrimenti, viene visualizzato l'angolo di implementazione, `360 - (angle2 - angle1)`.
  + Gli angoli dovrebbero essere dati in gradi.

Le proprietà di visualizzazione di `dimension` possono essere cambiate sovrascrivendo i suoi attributi; per esempio, sovrascrivendo `ViewObject.FontSize` con le nuove dimensioni in millimetri.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/it&oldid=1565030>"