---
title: Draftː Etichetta
---
|  |
| --- |
| Draft Etichetta |
| Posizione nel menu |
| Annotazione → Etichetta |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| D L |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Draft Testo](/Draft_Text/it "Draft Text/it"), [Draft Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Label.svg) **Etichetta** crea un testo su più righe con una linea guida a 2 segmenti e una freccia.

Se un oggetto o un sottoelemento (faccia, bordo o vertice) viene selezionato all'avvio del comando, il testo può visualizzare uno o due attributi dell'elemento selezionato, tra cui posizione, lunghezza, area, volume e materiale. Il testo sarà quindi collegato a detti attributi e si aggiornerà se i loro valori cambiano.

Per inserire un elemento di testo senza una freccia usare invece il comando [Testo](/Draft_Text/it "Draft Text/it").

![](/images/Draft_Label_example.jpg)

Varie etichette con diversi orientamenti, frecce ed informazioni

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Facoltativamente selezionare un oggetto o un sottoelemento (vertice, bordo o faccia) di cui si desidera visualizzare gli attributi.
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Label.svg) Etichetta.
   * Selezionare l'opzione **Annotazione → ![](/images/Draft_Label.svg) Etichetta** dal menu.
   * Usare la scorciatoia da tastiera: D poi L.
3. Si apre il pannello attività **Etichetta**. Vedere [Opzioni](#Options) per maggiori informazioni.
4. Se si ha selezionato un elemento: selezionare un'opzione dall'elenco a discesa **Tipo di etichetta**. Vedere [Tipi di etichette](#Tipi_di_etichette) di seguito.
5. Scegliere il primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto. Questo punto indica il bersaglio (punta della freccia). Questo può essere ovunque, non deve essere su un elemento.
6. Scegliere il secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto. Questo punto indica l'inizio del segmento orizzontale o verticale della direttrice.
7. Scegliere il terzo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto. Questo punto indica il punto base del testo.

## Opzioni

Le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività possono essere modificate. Vedere [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie menzionate qui sono le scorciatoie predefinite.

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando si hanno i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate sono relative all'ultimo punto, se disponibile, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Tipi di etichette

Sono disponibili i seguenti tipi di etichette:

* `Custom`: visualizza il contenuto di Dati**Custom Text**.
* `Name`: visualizza il nome interno dell'oggetto target. Il nome interno viene assegnato quando viene creato un oggetto e rimane fisso per tutta l'esistenza dell'oggetto.
* `Label`: visualizza l'etichetta dell'oggetto target. L'etichetta di un oggetto può essere modificata dall'utente.
* `Position`: visualizza le coordinate del punto base dell'oggetto target o del vertice target.
* `Length`: visualizza la lunghezza dell'oggetto o del sottoelemento di destinazione.
* `Area`: visualizza l'area dell'oggetto o sottoelemento di destinazione.
* `Volume`: visualizza il volume dell'oggetto target.
* `Tag`: visualizza l'attributo `Tag` dell'oggetto target. Gli oggetti creati con [BIM](/BIM_Workbench/it "BIM Workbench/it") possono avere questo attributo.
* `Material`: visualizza l'etichetta del materiale dell'oggetto target.
* `Label + Position`
* `Label + Length`
* `Label + Area`
* `Label + Volume`
* `Label + Material`

## Note

* La direzione del secondo segmento della direttrice determina l'allineamento del testo. Se il segmento è orizzontale e punta a destra il testo è allineato a sinistra e viceversa. Se il secondo segmento va verticalmente verso l'alto, il testo è allineato a sinistra. Se va verticalmente verso il basso, il testo è allineato a destra.
* Le Etichette create o salvate con [FreeCAD versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") non sono compatibili con le versioni precedenti.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Etichetta deriva da un oggetto [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it") e ne eredita tutte le proprietà. Le seguenti proprietà sono aggiuntive se non diversamente specificato.

### Dati

Label

* Dati**Custom Text** (`StringList`): specifica il contenuto del testo se Dati**Label Type** è `Custom`. Ciascun elemento nell'elenco rappresenta una nuova riga di testo.
* Dati**Label Type** (`Enumeration`): specifica il tipo di informazioni visualizzate dall'etichetta. Vedi [Tipi di etichette](#Tipi_di_etichette).
* Dati**Placement** (`Placement`): specifica la posizione del testo nella [Vista 3D](/3D_view/it "3D view/it") e, a meno che Dati**Straight Direction** sia `Custom`, anche di il primo segmento della direttrice, che è il segmento in cui è allegato il testo. Vedere [Posizionamento](/Placement/it "Placement/it").
* Dati**Text** (`StringList`): (read-only) specifica il contenuto del testo che viene effettivamente visualizzato. Ciascun elemento nell'elenco rappresenta una nuova riga di testo.

Leader

* Dati**Points** (`VectorList`): specifica i punti della direttrice.
* Dati**Straight Direction** (`Enumeration`): specifica la direzione del primo segmento della direttrice: `Custom`, `Horizontal` o `Vertical`.
* Dati**Straight Distance** (`Distance`): specifica la lunghezza del primo segmento della direttrice. Utilizzato solo se Dati**Straight Direction** è `Horizontal` o `Vertical`. Se la distanza è positiva, la direttrice inizia dal lato destro del testo e il testo si allinea a destra. Altrimenti la direttrice inizia dal lato sinistro del testo e il testo si allinea a sinistra.

Target

* Dati**Target** (`LinkSub`): specifica l'oggetto e il sottoelemento facoltativo a cui è collegata l'etichetta.
* Dati**Target Point** (`Vector`): specifica la posizione della punta della direttrice, ovvero dove è attaccata la freccia.

### Vista

Annotation

* Vista**Annotation Style** (`Enumeration`): specifica lo stile di annotazione applicato all'etichetta. Vedere [Stile delle annotazioni](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it").
* Vista**Scale Multiplier** (`Float`): specifica il fattore di scala generale applicato all'etichetta.

Display Options

* Vista**Display Mode** (`Enumeration`): specifica come viene visualizzato il testo. Se è `World` il testo verrà visualizzato su un piano definito dal Dati**Placement** dell'etichetta. Se è `Screen` il testo sarà sempre rivolto verso lo schermo. Questa è una proprietà ereditata. Le opzioni menzionate sono le opzioni rinominate ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")).

Graphics

* Vista**Arrow Size** (`Length`): specifica la dimensione del simbolo visualizzato sulla punta della direttrice.
* Vista**Arrow Type** (`Enumeration`): specifica il tipo di simbolo visualizzato sulla punta della direttrice, che può essere `Dot`, `Circle`, `Arrow`, `Tick` o `Tick-2`.
* Vista**Frame** (`Enumeration`): specifica quale tipo di cornice viene disegnata attorno al testo. Le opzioni correnti sono `None` o `Rectangle`.
* Vista**Line** (`Bool`): specifica se visualizzare la linea guida. Se è `false` vengono visualizzati solo la freccia e il testo.
* Vista**Line Color** (`Color`): specifica il colore della direttrice e della freccia. Viene utilizzato anche per la cornice.
* Vista**Line Width** (`Float`): specifica la larghezza della direttrice. Viene utilizzato anche per la cornice.

Text

* Vista**Font Name** (`Font`): specifica il font utilizzato per disegnare il testo. Può essere un nome di font, come `Arial`, uno stile predefinito come `sans`, `serif` o `mono`, una famiglia come `Arial,Helvetica,sans`, o un nome con uno stile come `Arial:Bold`. Se il carattere specificato non viene trovato nel sistema, viene utilizzato un carattere predefinito. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Vista**Font Size** (`Length`): specifica la dimensione del carattere. Il testo può essere invisibile nella [Vista 3D](/3D_view/it "3D view/it") se questo valore è molto piccolo. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Vista**Justification** (`Enumeration`): specifica l'allineamento orizzontale del testo: `Left`, `Center` o `Right`. Utilizzato solo se Dati**Straight Direction** è `Custom`. Altrimenti l'allineamento orizzontale si basa sul segno (positivo o negativo) di Dati**Straight Distance**.
* Vista**Interlinea** (`Float`): specifica il fattore applicato all'altezza di riga predefinita del testo.
* Vista**Max Chars** (`Integer`): specifica il numero massimo di caratteri su ogni riga del testo.
* Vista**Text Alignment** (`Enumeration`): specifica l'allineamento verticale del testo: `Top`, `Middle` o `Bottom`.
* Vista**Text Color** (`Color`): specifica il colore del testo.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare un'Etichetta Draft usare il metodo `make_label` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeLabel`.

```
label = make_label(target_point=App.Vector(0, 0, 0),
                   placement=App.Vector(30, 30, 0),
                   target_object=None, subelements=None,
                   label_type="Custom", custom_text="Label",
                   direction="Horizontal", distance=-10,
                   points=None)

```

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
doc.recompute()

p1 = App.Vector(-200, 1000, 0)
place1 = App.Placement(App.Vector(-1000, 1300, 0), App.Rotation())

label1 = Draft.make_label(p1, place1, target_object=rectangle, distance=500, label_type="Label")
label1.ViewObject.FontSize= 200

p2 = App.Vector(-200, 0, 0)
place2 = App.Placement(App.Vector(-1000, -300, 0), App.Rotation())

label2 = Draft.make_label(p2, place2, target_object=rectangle, distance=500, label_type="Custom",
                          custom_text="Beware of the sharp edges")
label2.ViewObject.FontSize= 200

p3 = App.Vector(1000, 1200, 0)
place3 = App.Placement(App.Vector(2000, 1800, 0), App.Rotation())

label3 = Draft.make_label(p3, place3, target_object=rectangle, distance=-500, label_type="Area")
label3.ViewObject.FontSize= 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Label/it&oldid=1513804>"